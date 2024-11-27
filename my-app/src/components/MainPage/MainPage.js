import React, { useState } from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import MainPhoto from "../../images/main_photo.png";

function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="mainpage">
      {/* Burger Menu */}
      <div className={`burger-menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
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
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" onClick={toggleMenu}>
              Board Games
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" onClick={toggleMenu}>
              Candles
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" onClick={toggleMenu}>
              Movies
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" onClick={toggleMenu}>
              Books
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" onClick={toggleMenu}>
              Music
            </a>
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
      <div className="mainpage-box mainpage-box1">
        <h3>Traveling</h3>
      </div>
      <div className="mainpage-box mainpage-box2">
        <h3>Board Games</h3>
      </div>
      <div className="mainpage-box mainpage-box4">
        <h3>Candle Making</h3>
      </div>
      <div className="mainpage-box mainpage-box5">
        <h3>Movies</h3>
      </div>
      <div className="mainpage-box mainpage-box6">
        <h3>Books</h3>
      </div>
      <div className="mainpage-box mainpage-box7">
        <h3>Music</h3>
      </div>
    </section>
  );
}

export default MainPage;
