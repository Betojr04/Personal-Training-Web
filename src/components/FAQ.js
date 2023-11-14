import React from "react";
import "../styles/FAQ.css";

export const FAQ = () => {
  return (
    <section className="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-items">
        {/* Example FAQ Item */}
        <div className="faq-item">
          <h3>What should I bring to my first session?</h3>
          <p>
            Just bring yourself, a water bottle, and your workout gear. We'll
            handle the rest!
          </p>
        </div>

        {/* Additional FAQ items */}
        {/* ... */}
      </div>
    </section>
  );
};

export default FAQ;
