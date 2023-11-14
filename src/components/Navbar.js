import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faDumbbell} className="navbar-icon" /> Derly
          Herrera
        </Link>
        <div className="navbar-menu">
          <a href="#services" className="navbar-link">
            Services
          </a>
          <a href="#about" className="navbar-link">
            About
          </a>
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
