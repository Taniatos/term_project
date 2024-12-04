import React from "react";
import HobbieDefault from "../HobbieDefault/HobbieDefault";
import UkraineImage from "../../images/Travel_Imgs/ukraine_img.png";

function Music() {
  const musicContent = {
    title: "Music",
    description:
      "Guess how I spend time with my friends. Yes, it's board games of different genres and complexity. On this page, you'll find my TOP games I always recommend.",
    sections: [
      {
        title: "Games for parties",
        description: "to have fun and enjoy your time together",
        images: [
          { url: UkraineImage, caption: "Ukraine" },
          { url: UkraineImage, caption: "Ukraine" },
          { url: UkraineImage, caption: "Ukraine" },
        ],
      },
      {
        title: "Games to think",
        description: "but you will never regret it!",
        images: [
          { url: UkraineImage, caption: "Ukraine" },
          { url: UkraineImage, caption: "Ukraine" },
          { url: UkraineImage, caption: "Ukraine" },
        ],
      },
    ],
  };

  return <HobbieDefault {...musicContent} />;
}

export default Music;
