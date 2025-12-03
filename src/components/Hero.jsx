import React, { useState, useEffect, useRef } from "react";
import heroImage from "../assets/banner.jpg";
import "./Hero.css";

function Hero() {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`,
  };

  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(heroRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`hero-section ${isVisible ? "is-visible" : ""}`}
      style={heroStyle}
    >
      <div className="hero-content">
        <span className="hero-subtitle">Welcome to</span>
        <h1>Faizane Madina Masjid Southend</h1>
      </div>
    </section>
  );
}

export default Hero;
