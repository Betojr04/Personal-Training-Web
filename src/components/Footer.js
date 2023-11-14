import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Derly Herrera
          </Link>
        </div>
        <div className="footer-links">
          <Link to="/services" className="footer-link">
            Services
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://betowebdev-six.vercel.app/">Alberto Valtierra Jr</a>.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
