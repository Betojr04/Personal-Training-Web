import React from "react";
import "../styles/Pricing.css";

export const Pricing = () => {
  return (
    <section className="pricing">
      <h2 className="pricing-title">Pricing Plans</h2>
      <div className="pricing-plans">
        {/* Pricing Plan */}
        <div className="pricing-plan">
          <h3>Basic Plan</h3>
          <p>$50 / session</p>
          <ul>
            <li>Personalized workouts</li>
            <li>Nutrition guidance</li>
            {/* Add more features as needed */}
          </ul>
          <button className="pricing-button">Choose Plan</button>
        </div>

        <div className="pricing-plan">
          <h3>Basic Plan</h3>
          <p>$50 / session</p>
          <ul>
            <li>Personalized workouts</li>
            <li>Nutrition guidance</li>
            {/* Add more features as needed */}
          </ul>
          <button className="pricing-button">Choose Plan</button>
        </div>

        <div className="pricing-plan">
          <h3>Basic Plan</h3>
          <p>$50 / session</p>
          <ul>
            <li>Personalized workouts</li>
            <li>Nutrition guidance</li>
            {/* Add more features as needed */}
          </ul>
          <button className="pricing-button">Choose Plan</button>
        </div>

        <div className="pricing-plan">
          <h3>Basic Plan</h3>
          <p>$50 / session</p>
          <ul>
            <li>Personalized workouts</li>
            <li>Nutrition guidance</li>
            {/* Add more features as needed */}
          </ul>
          <button className="pricing-button">Choose Plan</button>
        </div>
      </div>
    </section>
  );
};
