import React from "react";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
