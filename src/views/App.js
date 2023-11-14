import React from "react";
import "../styles/App.css";
import { HeroSection } from "../components/HeroSection";
import { Services } from "../components/Services";
import { About } from "../components/About";

export const App = () => {
  return (
    <main>
      <HeroSection />
      <Services />
      <About />
    </main>
  );
};
