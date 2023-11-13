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
          <Link to="/services" className="navbar-link">
            Services
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
