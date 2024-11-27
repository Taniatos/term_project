import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="main-navigation">
      {/* Burger Menu */}
      <div className={`burger-menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <aside className={`burger-menu-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              to="/traveling"
              className={isActive("/traveling") ? "active" : ""}
              onClick={toggleMenu}
            >
              Traveling
            </Link>
          </li>
          <li>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              onClick={toggleMenu}
            >
              Board Games
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              onClick={toggleMenu}
            >
              Candles
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              onClick={toggleMenu}
            >
              Movies
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              onClick={toggleMenu}
            >
              Books
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              onClick={toggleMenu}
            >
              Music
            </a>
          </li>
        </ul>
      </aside>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/traveling" className={isActive("/traveling") ? "active" : ""}>
              Traveling
            </Link>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              Board Games
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              Candles
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              Movies
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              Books
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              Music
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
