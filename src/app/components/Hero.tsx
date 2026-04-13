import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background-accent"></div>
      <div className="container hero-content fade-in">
        <h1 className="hero-title luxury-text">
          Where thoughts find <br /> their quiet sanctuary.
        </h1>
        <p className="hero-subtitle">
          A minimalist collection of poetry, quotes, and short reflections.
        </p>
        <a href="#quotes" className="hero-button">
          Explore Writing
        </a>
      </div>
    </section>
  );
};

export default Hero;
