import React, { useState, useEffect } from "react";
import HobbieDefault from "../HobbieDefault/HobbieDefault";
import "./Traveling.css";
import Footer from "../Footer/Footer";
import API_KEY from "../../data/APIkeys";
//countries images
import UkraineImage from "../../images/Travel_Imgs/ukraine_img.png";
import USAImage from "../../images/Travel_Imgs/usa_img.png";
import EgyptImage from "../../images/Travel_Imgs/egypt_img.png";
import TurkeyImage from "../../images/Travel_Imgs/turkey_img.png";
import GermanyImage from "../../images/Travel_Imgs/germany_img.png";
import AustriaImage from "../../images/Travel_Imgs/austria_img.png";
import FranceImage from "../../images/Travel_Imgs/france_img.png";
import PolandImage from "../../images/Travel_Imgs/poland_img.png";
import CzechImage from "../../images/Travel_Imgs/czech_img.png";
import SpainImage from "../../images/Travel_Imgs/spain_img.png";
import SwitzImage from "../../images/Travel_Imgs/switz_img.png";
import EstoniaImage from "../../images/Travel_Imgs/estonia_img.png";
import LuxImage from "../../images/Travel_Imgs/lux_img.png";
import NorwayImage from "../../images/Travel_Imgs/norway_img.png";
import SwedenImage from "../../images/Travel_Imgs/sweden_img.png";
// states images
import NYCImage from "../../images/Travel_Imgs/nyc_img.png";
import ConnImage from "../../images/Travel_Imgs/conn_img.png";
import MassImage from "../../images/Travel_Imgs/mass_img.png";
import PennImage from "../../images/Travel_Imgs/penn_img.png";
import NJerseyImage from "../../images/Travel_Imgs/njersey_img.png";
import DelawareImage from "../../images/Travel_Imgs/delaware_img.png";
import MarylandImage from "../../images/Travel_Imgs/maryland_img.png";
import VirginiaImage from "../../images/Travel_Imgs/virginia_img.png";
import NCarolImage from "../../images/Travel_Imgs/ncarol_img.png";
import SCarolImage from "../../images/Travel_Imgs/scarol_img.png";
import GeorgiaImage from "../../images/Travel_Imgs/georgia_img.png";
import FloridaImage from "../../images/Travel_Imgs/florida_img.png";
import IllinoisImage from "../../images/Travel_Imgs/illinois_img.png";
import MichiganImage from "../../images/Travel_Imgs/michigan_img.png";
import OhioImage from "../../images/Travel_Imgs/ohio_img.png";
import IndianaImage from "../../images/Travel_Imgs/indiana_img.png";
import NevadaImage from "../../images/Travel_Imgs/nevada_img.png";
import ArizonaImage from "../../images/Travel_Imgs/arizona_img.png";







// Types for images and sections
interface ImageData {
  url: string;
  caption: string;
  lat: number;
  lon: number;
  capital: string;
  onClick: () => void;
}

interface Section {
  title: string;
  description: string;
  images: ImageData[];
}

const Traveling: React.FC = () => {
  const [weatherInfo, setWeatherInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (
    lat: number,
    lon: number,
    countryName: string,
    capitalName: string
  ) => {
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
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      });
      setError(null);
    } catch (err: any) {
      console.error(err.message);
      setError(err.message);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    if (target && !target.closest(".image-style")) {
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

  const travelingContent: {
    title: string;
    description: string;
    sections: Section[];
  } = {
    title: "Traveling",
    description:
      "Traveling is my psychotherapy. Whenever I need to think and make a hard (or not-so-hard) decision, I go somewhere. Well, I am a student at Boston University thanks to the Grand Canyon - I made my final decision to apply when beholding its endless beauty.",
    sections: [
      {
        title: "Countries",
        description:
          "So far, I've been to 15 countries and countless cities and places. The list includes two beautiful countries I lived in - Ukraine and USA.",
        images: [
          {
            url: UkraineImage,
            caption: "Ukraine",
            lat: 50.45,
            lon: 30.5241,
            capital: "Kyiv",
            onClick: () => fetchWeather(50.45, 30.5241, "Ukraine", "Kyiv"),
          },
          {
            url: USAImage,
            caption: "USA",
            lat: 38.9072,
            lon: -77.0369,
            capital: "Washington, D.C.",
            onClick: () =>
              fetchWeather(38.9072, -77.0369, "USA", "Washington, D.C."),
          },
          {
            url: EgyptImage,
            caption: "Egypt",
            lat: 30.0444,
            lon: 31.2357,
            capital: "Cairo",
            onClick: () => fetchWeather(30.0444, 31.2357, "Egypt", "Cairo"),
          },
          {
            url: TurkeyImage,
            caption: "Turkey",
            lat: 39.9334,
            lon: 32.8597,
            capital: "Ankara",
            onClick: () => fetchWeather(39.9334, 32.8597, "Turkey", "Ankara"),
          },
          {
            url: GermanyImage,
            caption: "Germany",
            lat: 52.52,
            lon: 13.405,
            capital: "Berlin",
            onClick: () => fetchWeather(52.52, 13.405, "Germany", "Berlin"),
          },
          {
            url: AustriaImage,
            caption: "Austria",
            lat: 48.2082,
            lon: 16.3738,
            capital: "Vienna",
            onClick: () => fetchWeather(48.2082, 16.3738, "Austria", "Vienna"),
          },
          {
            url: FranceImage,
            caption: "France",
            lat: 48.8566,
            lon: 2.3522,
            capital: "Paris",
            onClick: () => fetchWeather(48.8566, 2.3522, "France", "Paris"),
          },
          {
            url: PolandImage,
            caption: "Poland",
            lat: 52.2298,
            lon: 21.0118,
            capital: "Warsaw",
            onClick: () => fetchWeather(52.2298, 21.0118, "Poland", "Warsaw"),
          },
          {
            url: CzechImage,
            caption: "Czech Republic",
            lat: 50.0755,
            lon: 14.4378,
            capital: "Prague",
            onClick: () =>
              fetchWeather(50.0755, 14.4378, "Czech Republic", "Prague"),
          },
          {
            url: SpainImage,
            caption: "Spain",
            lat: 40.4168,
            lon: -3.7038,
            capital: "Madrid",
            onClick: () => fetchWeather(40.4168, -3.7038, "Spain", "Madrid"),
          },
          {
            url: SwitzImage,
            caption: "Switzerland",
            lat: 46.9481,
            lon: 7.4474,
            capital: "Bern",
            onClick: () => fetchWeather(46.9481, 7.4474, "Switzerland", "Bern"),
          },
          {
            url: EstoniaImage,
            caption: "Estonia",
            lat: 59.437,
            lon: 24.7535,
            capital: "Tallinn",
            onClick: () => fetchWeather(59.437, 24.7535, "Estonia", "Tallinn"),
          },
          {
            url: LuxImage,
            caption: "Luxembourg",
            lat: 49.6117,
            lon: 6.13,
            capital: "Luxembourg City",
            onClick: () =>
              fetchWeather(49.6117, 6.13, "Luxembourg", "Luxembourg City"),
          },
          {
            url: NorwayImage,
            caption: "Norway",
            lat: 59.9139,
            lon: 10.7522,
            capital: "Oslo",
            onClick: () => fetchWeather(59.9139, 10.7522, "Norway", "Oslo"),
          },
          {
            url: SwedenImage,
            caption: "Sweden",
            lat: 59.3293,
            lon: 18.0686,
            capital: "Stockholm",
            onClick: () =>
              fetchWeather(59.3293, 18.0686, "Sweden", "Stockholm"),
          },
        ],
      },
      {
        title: "States",
        description:
          "I have a dream to visit each and every state in the USA! I already have 18 states visited, so there's still a lot of work to do!",
        images: [
          {
            url: NYCImage,
            caption: "New York",
            lat: 40.7128,
            lon: -74.006,
            capital: "Albany",
            onClick: () => fetchWeather(40.7128, -74.006, "New York", "Albany"),
          },
          {
            url: ConnImage,
            caption: "Connecticut",
            lat: 41.6032,
            lon: -73.0877,
            capital: "Hartford",
            onClick: () =>
              fetchWeather(41.6032, -73.0877, "Connecticut", "Hartford"),
          },
          {
            url: MassImage,
            caption: "Massachusetts",
            lat: 42.3601,
            lon: -71.0589,
            capital: "Boston",
            onClick: () =>
              fetchWeather(42.3601, -71.0589, "Massachusetts", "Boston"),
          },
          {
            url: PennImage,
            caption: "Pennsylvania",
            lat: 40.2737,
            lon: -76.8844,
            capital: "Harrisburg",
            onClick: () =>
              fetchWeather(40.2737, -76.8844, "Pennsylvania", "Harrisburg"),
          },
          {
            url: NJerseyImage,
            caption: "New Jersey",
            lat: 40.0583,
            lon: -74.4057,
            capital: "Trenton",
            onClick: () =>
              fetchWeather(40.0583, -74.4057, "New Jersey", "Trenton"),
          },
          {
            url: DelawareImage,
            caption: "Delaware",
            lat: 38.9108,
            lon: -75.5277,
            capital: "Dover",
            onClick: () => fetchWeather(38.9108, -75.5277, "Delaware", "Dover"),
          },
          {
            url: MarylandImage,
            caption: "Maryland",
            lat: 39.0458,
            lon: -76.6413,
            capital: "Annapolis",
            onClick: () =>
              fetchWeather(39.0458, -76.6413, "Maryland", "Annapolis"),
          },
          {
            url: VirginiaImage,
            caption: "Virginia",
            lat: 37.4316,
            lon: -78.6569,
            capital: "Richmond",
            onClick: () =>
              fetchWeather(37.4316, -78.6569, "Virginia", "Richmond"),
          },
          {
            url: NCarolImage,
            caption: "North Carolina",
            lat: 35.7596,
            lon: -79.0193,
            capital: "Raleigh",
            onClick: () =>
              fetchWeather(35.7596, -79.0193, "North Carolina", "Raleigh"),
          },
          {
            url: SCarolImage,
            caption: "South Carolina",
            lat: 33.8361,
            lon: -81.1637,
            capital: "Columbia",
            onClick: () =>
              fetchWeather(33.8361, -81.1637, "South Carolina", "Columbia"),
          },
          {
            url: GeorgiaImage,
            caption: "Georgia",
            lat: 33.749,
            lon: -84.388,
            capital: "Atlanta",
            onClick: () => fetchWeather(33.749, -84.388, "Georgia", "Atlanta"),
          },
          {
            url: FloridaImage,
            caption: "Florida",
            lat: 27.9947,
            lon: -81.7603,
            capital: "Tallahassee",
            onClick: () =>
              fetchWeather(27.9947, -81.7603, "Florida", "Tallahassee"),
          },
          {
            url: IllinoisImage,
            caption: "Illinois",
            lat: 40.6331,
            lon: -89.3985,
            capital: "Springfield",
            onClick: () =>
              fetchWeather(40.6331, -89.3985, "Illinois", "Springfield"),
          },
          {
            url: MichiganImage,
            caption: "Michigan",
            lat: 44.3148,
            lon: -85.6024,
            capital: "Lansing",
            onClick: () =>
              fetchWeather(44.3148, -85.6024, "Michigan", "Lansing"),
          },
          {
            url: OhioImage,
            caption: "Ohio",
            lat: 40.4173,
            lon: -82.9071,
            capital: "Columbus",
            onClick: () => fetchWeather(40.4173, -82.9071, "Ohio", "Columbus"),
          },
          {
            url: IndianaImage,
            caption: "Indiana",
            lat: 40.267,
            lon: -86.1349,
            capital: "Indianapolis",
            onClick: () =>
              fetchWeather(40.267, -86.1349, "Indiana", "Indianapolis"),
          },
          {
            url: NevadaImage,
            caption: "Nevada",
            lat: 38.8026,
            lon: -116.4194,
            capital: "Carson City",
            onClick: () =>
              fetchWeather(38.8026, -116.4194, "Nevada", "Carson City"),
          },
          {
            url: ArizonaImage,
            caption: "Arizona",
            lat: 34.0489,
            lon: -111.0937,
            capital: "Phoenix",
            onClick: () =>
              fetchWeather(34.0489, -111.0937, "Arizona", "Phoenix"),
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
            onClick: image.onClick,
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

      {error && <div className="error-message">{error}</div>}

      <Footer />
    </div>
  );
};

export default Traveling;
