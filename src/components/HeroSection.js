import React from "react";
import "../styles/HeroSection.css";

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Transform Your Fitness Journey</h1>
        <p className="hero-subtitle">
          Join Derly Herrera to achieve your fitness goals with personalized
          training programs.
        </p>
        <a href="#contact" className="hero-cta">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
