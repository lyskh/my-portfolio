import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToWorks = () => {
    const element = document.getElementById('works');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="intro" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/hero-intro.png" alt="Allysa" />
          </div>
          <h1>Hi, I'm Allysa</h1>
          <p className="lead">
            An aspiring IT professional with a strong passion for web development and design, 
            eager to create visually stunning and highly functional digital experiences. 
            Continuously learning and exploring new technologies to enhance skills, build 
            innovative projects, and contribute to the ever-evolving world of technology.
          </p>
          <button className="btn btn-outline-dark" onClick={scrollToWorks}>
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

