import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { preloadImages } from '../../utils/preloadImages';
import '../../assets/styles/features/home.css';

const HeroSection = () => {
  useEffect(() => {
    // Preload hero image (handles missing images gracefully, silent mode)
    preloadImages(['/images/hero/hero-background.png'], true);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="hero-section" 
      style={{
        backgroundImage: `url('/images/hero/hero-background.png'), linear-gradient(135deg, #10b981 0%, #047857 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-headline">
            Transform Your Nutrition with AI-Powered Microgreens
          </h1>
          <p className="hero-subheadline">
            Get personalized recommendations based on your unique body, activity level, and health goals in just 3 minutes
          </p>
          <div className="hero-cta-buttons">
            <Link to="/nutrition-recommendation" className="btn-primary">
              Get Your Free Nutrition Plan
            </Link>
            <button onClick={scrollToFeatures} className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

