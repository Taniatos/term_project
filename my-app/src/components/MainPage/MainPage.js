import React, { useState } from "react";
import "./MainPage.css";
import { Link, useNavigate } from "react-router-dom";
import MainPhoto from "../../images/MainPage_Imgs/main_photo.png";

function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <section className="mainpage">
      {/* Burger Menu */}
      <div
        className={`burger-menu ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <aside className={`burger-menu-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/traveling" onClick={toggleMenu}>
              Traveling
            </Link>
          </li>
          <li>
            <Link to="/boardgames" onClick={toggleMenu}>
              Board Games
            </Link>
          </li>
          <li>
            <Link to="/candles" onClick={toggleMenu}>
              Candles
            </Link>
          </li>
          <li>
            <Link to="/movies" onClick={toggleMenu}>
              Movies
            </Link>
          </li>
          <li>
            <Link to="/books" onClick={toggleMenu}>
              Books
            </Link>
          </li>
          <li>
            <Link to="/music" onClick={toggleMenu}>
              Music
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="mainpage-header">My hobbies guide</div>
      <div className="mainpage-box mainpage-box3" data-type="featured">
        <img src={MainPhoto} alt="me" className="main-photo" />
        <h2>Hi, I am Tetiana</h2>
        <h3>and this page is about the things I love</h3>
      </div>
      {/* Main Boxes */}
      <div
        className="mainpage-box mainpage-box1"
        onClick={() => navigateTo("/traveling")}
      >
        <h3>Traveling</h3>
      </div>
      <div
        className="mainpage-box mainpage-box2"
        onClick={() => navigateTo("/boardgames")}
      >
        <h3>Board Games</h3>
      </div>
      <div
        className="mainpage-box mainpage-box4"
        onClick={() => navigateTo("/candles")}
      >
        <h3>Candle Making</h3>
      </div>
      <div
        className="mainpage-box mainpage-box5"
        onClick={() => navigateTo("/movies")}
      >
        <h3>Movies</h3>
      </div>
      <div
        className="mainpage-box mainpage-box6"
        onClick={() => navigateTo("/books")}
      >
        <h3>Books</h3>
      </div>
      <div
        className="mainpage-box mainpage-box7"
        onClick={() => navigateTo("/music")}
      >
        <h3>Music</h3>
      </div>
    </section>
  );
}

export default MainPage;
