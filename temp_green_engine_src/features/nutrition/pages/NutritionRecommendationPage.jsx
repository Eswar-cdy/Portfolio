import React from 'react';
import { Link } from 'react-router-dom';
import '@/assets/styles/features/nutrition.css';

const NutritionRecommendationPage = () => {
  return (
    <div className="nutrition-recommendation-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Personalized Microgreens Nutrition</h1>
          <p>Discover which microgreens are perfect for your unique nutritional needs</p>
          <Link to="/nutrition-recommendation/form" className="cta-button">
            Get Your Personalized Plan
          </Link>
        </div>
      </div>

      <div className="info-section">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Share Your Profile</h3>
              <p>Tell us about your age, gender, activity level, and dietary preferences</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Analyze Your Needs</h3>
              <p>Our algorithm identifies your nutritional gaps based on USDA guidelines</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Recommendations</h3>
              <p>Receive personalized microgreens recommendations with detailed nutritional benefits</p>
            </div>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <div className="container">
          <h2>Why Personalized Nutrition Matters</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Targeted Nutrition</h3>
              <p>Focus on the specific nutrients your body needs most based on your profile</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Data-Driven</h3>
              <p>Recommendations based on scientific research and nutritional databases</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>Microgreen Power</h3>
              <p>Harness the concentrated nutrition of microgreens (up to 40x more nutrients than mature plants)</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔍</div>
              <h3>Discover Varieties</h3>
              <p>Find the perfect microgreens for your unique health goals and preferences</p>
            </div>
          </div>
        </div>
      </div>

      <div className="science-section">
        <div className="container">
          <h2>The Science Behind Our Recommendations</h2>
          <div className="science-content">
            <div className="science-text">
              <p>Our recommendation engine is built on comprehensive nutritional research from authoritative sources including:</p>
              <ul>
                <li>USDA Nutritional Database</li>
                <li>Peer-reviewed scientific studies on microgreen nutrition</li>
                <li>Age and gender-specific nutritional requirements</li>
                <li>Activity-based metabolic adjustments</li>
              </ul>
              <p>We analyze over 30 microgreen varieties across 6 plant families to match their nutritional profiles with your specific needs.</p>
            </div>
            <div className="science-image">
              {/* Placeholder for a scientific chart/image */}
              <div className="placeholder-image">Nutritional Analysis Chart</div>
            </div>
          </div>
        </div>
      </div>

      <div className="premium-section">
        <div className="container">
          <h2>Premium Features</h2>
          <div className="premium-content">
            <div className="premium-features">
              <h3>Unlock Advanced Nutrition Analysis</h3>
              <ul>
                <li>Detailed food intake tracking</li>
                <li>Comprehensive nutritional gap analysis</li>
                <li>Custom meal planning with microgreens</li>
                <li>Progress tracking over time</li>
              </ul>
              <p>Enable premium features during the recommendation process to access these advanced tools.</p>
            </div>
            <div className="premium-image">
              {/* Placeholder for premium features image */}
              <div className="placeholder-image">Premium Dashboard Preview</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Ready to Discover Your Perfect Microgreens?</h2>
          <p>Get your personalized nutrition plan in just a few minutes</p>
          <Link to="/nutrition-recommendation/form" className="cta-button">
            Start Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NutritionRecommendationPage;
