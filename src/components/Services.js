import React from "react";
import "../styles/Services.css"; // Adjust the path as necessary

export const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services-title">Services</h2>
      <div className="service-cards">
        {/* Example of a Service Card */}
        <div className="service-card">
          <h3>Personalized Training</h3>
          <p>Customized workout plans tailored to your goals.</p>
        </div>

        <div className="service-card">
          <h3>Personalized Training</h3>
          <p>Customized workout plans tailored to your goals.</p>
        </div>

        <div className="service-card">
          <h3>Personalized Training</h3>
          <p>Customized workout plans tailored to your goals.</p>
        </div>

        <div className="service-card">
          <h3>Personalized Training</h3>
          <p>Customized workout plans tailored to your goals.</p>
        </div>
      </div>
    </section>
  );
};
