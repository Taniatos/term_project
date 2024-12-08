import React from "react";
import HobbieDefault from "../HobbieDefault/HobbieDefault";
import "./Movies.css";
import MoviesImage from "../../images/Movies_Imgs/movies_img.png";
import TVShowsImage from "../../images/Movies_Imgs/tvshows_img.png";

function Movies() {
  const moviesContent = {
    title: "Movies",
    description:
      "Let's cut it short - no need to explain why people watch movies or TV shows! I've prepared a list of the movies I would erase my memory of so I can watch them again. It is followed by the TV shows I totally recommend. Simply click on the images!",
    sections: [
      {
        title: "Movies",
        description: "that are worth your while. Hope you'll enjoy each of them!",
        images: [
          {
            url: MoviesImage,
            onClick: () =>
              window.open(
                "https://www.imdb.com/list/ls590312759/?ref_=ext_shr_lnk",
                "_blank"
              ),
          },
        ],
      },
      {
        title: "TV Shows",
        description:
          "of different genres: sitcoms, comedies, dramas, and more.",
        images: [
          {
            url: TVShowsImage,
            onClick: () =>
              window.open(
                "https://www.imdb.com/list/ls590312782/?ref_=ext_shr_lnk",
                "_blank"
              ),
          },
        ],
      },
    ],
  };

  return (
    <div className="movies-container">
      <HobbieDefault {...moviesContent} />
    </div>
  );
}

export default Movies;
