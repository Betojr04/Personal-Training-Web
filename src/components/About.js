import React from "react";
import "../styles/About.css";

export const About = () => {
  return (
    <section className="about">
      <h2 className="about-title">About Derly Herrera</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Derly Herrera is a certified personal trainer with a passion for
            helping individuals achieve their fitness goals. With years of
            experience and a personalized approach, Derly ensures that each
            client's journey is effective and sustainable.
          </p>
          <p>
            Specializing in various training methods, Derly is equipped to cater
            to diverse needs, from weight loss to muscle building and overall
            fitness improvement.
          </p>
        </div>
        {/* Consider adding an image here */}
        {/* <img src="path-to-derly-image.jpg" alt="Derly Herrera" className="about-image"/> */}
      </div>
    </section>
  );
};

export default About;
