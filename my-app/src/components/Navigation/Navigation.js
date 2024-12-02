import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const isActive = (path) => location.pathname === path;

  // Close the burger menu on resize if the screen width exceeds 960px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="main-navigation">
      {/* Burger Menu */}
      <div
        className={`burger-menu ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Aside Menu */}
      <aside className={`burger-menu-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
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
            <Link
              to="/boardgames"
              className={isActive("/boardgames") ? "active" : ""}
              onClick={toggleMenu}
            >
              Board Games
            </Link>
          </li>
          <li>
            <Link
              to="/candles"
              className={isActive("/candles") ? "active" : ""}
              onClick={toggleMenu}
            >
              Candles
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className={isActive("/movies") ? "active" : ""}
              onClick={toggleMenu}
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              className={isActive("/books") ? "active" : ""}
              onClick={toggleMenu}
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/music"
              className={isActive("/music") ? "active" : ""}
              onClick={toggleMenu}
            >
              Music
            </Link>
          </li>
        </ul>
      </aside>
      {/* Header */}
      <header>
        <ul>
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/traveling"
              className={isActive("/traveling") ? "active" : ""}
            >
              Traveling
            </Link>
          </li>
          <li>
            <Link
              to="/boardgames"
              className={isActive("/boardgames") ? "active" : ""}
            >
              Board Games
            </Link>
          </li>
          <li>
            <Link
              to="/candles"
              className={isActive("/candles") ? "active" : ""}
            >
              Candles
            </Link>
          </li>
          <li>
            <Link to="/movies" className={isActive("/movies") ? "active" : ""}>
              Movies
            </Link>
          </li>
          <li>
            <Link to="/books" className={isActive("/books") ? "active" : ""}>
              Books
            </Link>
          </li>
          <li>
            <Link to="/music" className={isActive("/music") ? "active" : ""}>
              Music
            </Link>
          </li>
        </ul>
      </header>
    </nav>
  );
}

export default Navigation;
