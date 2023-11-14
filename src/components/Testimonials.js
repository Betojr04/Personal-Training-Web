import React from "react";
import "../styles/Testimonials.css";

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonial-items">
        {/* Example Testimonial Item */}
        <div className="testimonial-item">
          <p>
            “Derly's training program transformed my life! I've never felt
            better.”
          </p>
          <span>- Client Name</span>
        </div>

        {/* Additional testimonial items */}
        {/* ... */}
      </div>
    </section>
  );
};

export default Testimonials;
