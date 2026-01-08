import React from 'react';
import OptimizedImage from '../common/OptimizedImage'; // Import the new component

interface PricingCardProps {
  name: string;
  price?: number;
  originalPrice?: number;
  tagline: string;
  badge?: string;
  features: string[];
  specs: {
    size: string;
    capacity: string;
    automation: string;
  };
  imageComponent: React.ReactNode;
  onRequestQuote: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  originalPrice,
  tagline,
  badge,
  features,
  specs,
  imageComponent,
  onRequestQuote
}) => {
  return (
    <div className="pricing-card">
      {badge && <div className="pricing-badge">{badge}</div>}
      
      <div className="pricing-image-placeholder">
        {imageComponent}
      </div>

      <div className="pricing-content">
        <h3 className="pricing-name">{name}</h3>
        <p className="pricing-tagline">{tagline}</p>

        <div className="pricing-price-section">
          {price ? (
            <>
              {originalPrice && (
                <span className="pricing-original-price">${originalPrice}</span>
              )}
              <span className="pricing-current-price">${price}</span>
            </>
          ) : (
            <span className="pricing-contact">Contact for Quote</span>
          )}
        </div>

        <div className="pricing-features">
          <h4 className="features-heading">What's Included:</h4>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>✓ {feature}</li>
            ))}
          </ul>
        </div>

        <div className="pricing-specs">
          <h4 className="specs-heading">Key Specifications:</h4>
          <ul className="specs-list">
            <li><strong>Size:</strong> {specs.size}</li>
            <li><strong>Capacity:</strong> {specs.capacity}</li>
            <li><strong>Automation:</strong> {specs.automation}</li>
          </ul>
        </div>

        <button 
          onClick={onRequestQuote}
          className="pricing-cta-button"
        >
          Request Quote
        </button>
      </div>
    </div>
  );
};

export default PricingCard;

