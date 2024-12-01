import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="/" className="footer-link">
          Home
        </a>
        <span className="footer-separator">|</span>
        <a href="#contacts" className="footer-link">
          Contacts
        </a>
        <span className="footer-separator">|</span>
        <span className="footer-copyright">© 2024 My Hobbies Guide</span>
      </nav>
    </footer>
  );
}

export default Footer;
