import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-title">
          Welcome to <span className="dalgona-accent">d</span>
          <span className="dalgon">AL</span><span className="dalg">GOna</span>
        </h2>
        <p className="hero-subtitle">
          Inspired by the <em>Squid Game</em> series, test your coding skills
          with delightfully challenging interview questions.
        </p>
        <a href="#download" className="hero-button">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
