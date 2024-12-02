import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = ({ menuOpen, toggleMenu, links }) => (
  <>
    <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <aside className={`burger-menu-nav ${menuOpen ? 'open' : ''}`}>
      <ul>
        {links.map(({ path, label }) => (
          <li key={path}>
            <Link to={path} onClick={toggleMenu}>{label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  </>
);

export default BurgerMenu;
