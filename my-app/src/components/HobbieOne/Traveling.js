import React, { useState, useEffect } from "react";
import HobbieDefault from "../HobbieDefault/HobbieDefault";
import './Traveling.css';
import Footer from "../Footer/Footer"; 
import UkraineImage from "../../images/ukraine_img.png";
import API_KEY from "../../data/APIkeys";

function Traveling() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (lat, lon, countryName, capitalName) => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      console.log("API URL:", apiUrl);
      const response = await fetch(apiUrl);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized: Invalid API Key.");
        } else if (response.status === 429) {
          throw new Error("Rate limit exceeded. Try again later.");
        } else {
          throw new Error(`Unexpected error: ${response.status}`);
        }
      }

      const data = await response.json();
      console.log("Weather Data:", data);

      setWeatherInfo({
        country: countryName,
        capital: capitalName,
        tempC: Math.round(data.main.temp),
        tempF: Math.round((data.main.temp * 9) / 5 + 32),
        description: data.weather[0].description
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      });
      setError(null);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".image-style")) {
      setWeatherInfo(null);
    }
  };

  useEffect(() => {
    if (weatherInfo) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [weatherInfo]);

  const travelingContent = {
    title: "Traveling",
    description:
      "Traveling is my psychotherapy. Whenever I need to think and make a hard (or not so hard) decision, I go somewhere. Well, I am a student at Boston University thanks to the Grand Canyon - I made my final decision to apply when beholding its endless beauty.",
    sections: [
      {
        title: "Countries",
        description:
          "So far, I have visited 13 countries and countless cities and towns.",
        images: [
          {
            url: UkraineImage,
            caption: "Ukraine",
            lat: 50.45,
            lon: 30.5241,
            capital: "Kyiv",
          },
          {
            url: UkraineImage,
            caption: "USA",
            lat: 37.7749,
            lon: -122.4194,
            capital: "Washington, D.C.",
          },
          {
            url: UkraineImage,
            caption: "France",
            lat: 48.8566,
            lon: 2.3522,
            capital: "Paris",
          },
        ],
      },
      {
        title: "States",
        description:
          "I have a dream to visit each and every state in the USA! I already have 13 states visited, so there's a lot of work to do!",
        images: [
          {
            url: UkraineImage,
            caption: "California",
            lat: 36.7783,
            lon: -119.4179,
            capital: "Sacramento",
          },
          {
            url: UkraineImage,
            caption: "Texas",
            lat: 31.9686,
            lon: -99.9018,
            capital: "Austin",
          },
          {
            url: UkraineImage,
            caption: "New York",
            lat: 40.7128,
            lon: -74.006,
            capital: "Albany",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <HobbieDefault
        {...travelingContent}
        sections={travelingContent.sections.map((section) => ({
          ...section,
          images: section.images.map((image) => ({
            ...image,
            onClick: () =>
              fetchWeather(image.lat, image.lon, image.caption, image.capital),
          })),
        }))}
      />

      <div className="weather-instructions">
        <p>
          You know what? Let's check what the weather is like in these
          countries! Just click on the images!
        </p>
      </div>
      {weatherInfo && (
        <div className="weather-popup">
          <h2>{weatherInfo.country}</h2>
          <p>Capital: {weatherInfo.capital}</p>
          <p>
            Current weather in {weatherInfo.capital}: <br />
            <br />
            {weatherInfo.description} <br />
            <span>
              {weatherInfo.tempC}°C | {weatherInfo.tempF}°F{" "}
            </span>
          </p>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
      <Footer />
    </div>
  );
}

export default Traveling;
