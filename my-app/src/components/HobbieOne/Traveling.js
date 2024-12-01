import React from "react";
import HobbieDefault from "../HobbieDefault/HobbieDefault";

// Importing the image directly
import UkraineImage from "../../images/ukraine_img.png";

function Traveling() {
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
          { url: UkraineImage, caption: "Ukraine" }, 
          { url: UkraineImage, caption: "Ukraine" },
          { url: UkraineImage, caption: "Ukraine" },
        ],
      },
      {
        title: "States",
        description:
          "I have a dream to visit each and every state in the USA! I already have 13 states visited, so there's a lot of work to do!",
        images: [
          { url: UkraineImage, caption: "Ukraine" },
          { url: UkraineImage, caption: "Ukraine" },
          { url: UkraineImage, caption: "Ukraine" },
        ],
      },
    ],
  };

  return <HobbieDefault {...travelingContent} />;
}

export default Traveling;
