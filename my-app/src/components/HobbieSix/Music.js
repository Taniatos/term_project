import React from "react";
import HobbieDefault from "../HobbieDefault/HobbieDefault";
import Footer from "../Footer/Footer";
import "./Music.css";

function Music() {
  const musicContent = {
    title: "Music",
    description:
      "Music is my everything. Lots of songs remind me of past events or people. I listen to different genres, but my most beloved is his majesty ROCK. Enjoy the playlist!",
    sections: [
      {
        title: "Spotify Playlist",
        description:
          "that contains only a drop in the ocean of my favorite songs.",
        iframe: (
          <iframe
            title="spotify"
            style={{ borderRadius: "24px" }}
            src="https://open.spotify.com/embed/playlist/6j4v55zDYLXzGAV0miLBYI?utm_source=generator&theme=0"
            width="100%"
            height="400"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        ),
      },
    ],
  };

  return (
    <div>
      <HobbieDefault {...musicContent} />
      <Footer />
    </div>
  );
}

export default Music;
