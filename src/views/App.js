import React from "react";
import "../styles/App.css";
import { HeroSection } from "../components/HeroSection";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Pricing } from "../components/Pricing";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";

export const App = () => {
  return (
    <main>
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Testimonials />
      <Pricing />
      <FAQ />
    </main>
  );
};
