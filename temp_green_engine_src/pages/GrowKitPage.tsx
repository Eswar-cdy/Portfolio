import React, { useState, useEffect } from 'react';
import PricingCard from '../components/growkits/PricingCard';
import ContactForm from '../components/growkits/ContactForm';
import ComparisonTable from '../components/growkits/ComparisonTable';
import '../assets/styles/features/grow-kits.css';
import { trackCTAClick, trackComparisonView } from '../utils/formSubmission';
import { trackProductView } from '../services/analytics';
import { preloadImages } from '../utils/preloadImages';

const GrowKitPage: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState<string>('');

  useEffect(() => {
    preloadImages([
      '/images/products/sprout-kit.png',
      '/images/products/garden-system.png',
      '/images/products/pro-system.png',
      '/images/products/commercial-pro.png',
    ], true).catch(() => {
      // Errors are already handled in preloadImages function
    });
  }, []);

  const handleRequestQuote = (system: { id: string, name: string, price: number }) => {
    setSelectedSystem(system.id);
    setShowContactForm(true);
    trackCTAClick('request_quote', system.name);
    trackProductView(system.name, system.price);
  };

  const handleCloseModal = () => {
    setShowContactForm(false);
    setSelectedSystem('');
  };

  React.useEffect(() => {
    // Track comparison table view when user scrolls to it
    const handleScroll = () => {
      const comparisonSection = document.querySelector('.comparison-table-container');
      if (comparisonSection) {
        const rect = comparisonSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          trackComparisonView();
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="growkits-page">
      {/* Header Section */}
      <div className="growkits-header">
        <h1>Automated Microgreens Growing Systems</h1>
        <p>
          From beginner-friendly kits to commercial solutions. Grow fresh, nutritious microgreens
          year-round with our AI-powered smart growing technology.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="pricing-grid">
        <PricingCard
          name="Sprout Kit"
          price={129}
          originalPrice={149}
          tagline="Best for Beginners"
          features={[
            'Single growing tray (1 sq ft)',
            '6 biodegradable coco coir mats',
            'Full-spectrum LED grow light',
            'Basic IoT module with WiFi',
            'Temperature & humidity sensors',
            'Greengine App access (6 months)'
          ]}
          specs={{
            size: '12" × 8" × 10"',
            capacity: '1-2 trays',
            automation: 'Basic'
          }}
          imageComponent={
            <img 
              src="/images/products/sprout-kit.png" 
              alt="Sprout Kit" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/placeholder.svg';
              }}
            />
          }
          onRequestQuote={() => handleRequestQuote({ id: 'sprout', name: 'Sprout Kit', price: 129 })}
        />

        <PricingCard
          name="Garden System"
          price={349}
          originalPrice={399}
          tagline="Perfect for Home Enthusiasts"
          badge="Most Popular"
          features={[
            '3-4 growing trays (9-12 sq ft)',
            'Modular stackable tray system',
            'Advanced LED panel with spectrum control',
            'Smart IoT hub with multi-zone control',
            'Automated ventilation system',
            'Greengine App Premium (12 months)'
          ]}
          specs={{
            size: '24" × 16" × 18"',
            capacity: '3-4 trays',
            automation: 'Smart'
          }}
          imageComponent={
            <img 
              src="/images/products/garden-system.png" 
              alt="Garden System" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/placeholder.svg';
              }}
            />
          }
          onRequestQuote={() => handleRequestQuote({ id: 'garden', name: 'Garden System', price: 349 })}
        />

        <PricingCard
          name="Pro System"
          price={799}
          originalPrice={899}
          tagline="For Serious Growers"
          features={[
            '6-8 growing trays (20+ sq ft)',
            'Commercial-grade aluminum frame',
            'High-efficiency LED arrays',
            'Advanced climate control system',
            'Water recirculation & filtration',
            'Enterprise app with analytics'
          ]}
          specs={{
            size: '36" × 24" × 30"',
            capacity: '6-8 trays',
            automation: 'Advanced'
          }}
          imageComponent={
            <img 
              src="/images/products/pro-system.png" 
              alt="Pro System" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/placeholder.svg';
              }}
            />
          }
          onRequestQuote={() => handleRequestQuote({ id: 'pro', name: 'Pro System', price: 799 })}
        />

        <PricingCard
          name="Commercial Pro"
          tagline="For Businesses & Vertical Farms"
          features={[
            '12-16+ trays (50+ sq ft scalable)',
            'Industrial stainless steel construction',
            'Full hydroponic system with NFT',
            'AI-powered growth optimization',
            'Multi-parameter monitoring',
            'Custom configuration available'
          ]}
          specs={{
            size: '48" × 36" × 48" (customizable)',
            capacity: '12-16+ trays',
            automation: 'Full AI'
          }}
          imageComponent={
            <img 
              src="/images/products/commercial-pro.png" 
              alt="Commercial Pro System" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/placeholder.svg';
              }}
            />
          }
          onRequestQuote={() => handleRequestQuote({ id: 'commercial', name: 'Commercial Pro', price: 0 })}
        />
      </div>

      {/* Trust Badges */}
      <div className="trust-badges">
        <div className="trust-badges-container">
          <div className="trust-badge">
            <span className="trust-badge-icon">✓</span>
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="trust-badge">
            <span className="trust-badge-icon">🚚</span>
            <span>Free Shipping Over $300</span>
          </div>
          <div className="trust-badge">
            <span className="trust-badge-icon">🛡️</span>
            <span>2-Year Warranty</span>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* FAQ Section - Keep existing */}
      <section className="faq-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '2rem' }}>
          Frequently Asked Questions
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            <div style={{ background: '#d1fae5', padding: '1rem', fontWeight: '600', color: '#1f2937' }}>
              How much experience do I need to use a Greengine system?
            </div>
            <div style={{ padding: '1rem', color: '#4b5563' }}>
              <p>
                Our systems are designed for all experience levels. The Sprout Kit is perfect for beginners with its 
                guided app experience, while our Garden and Pro systems offer more advanced features for experienced growers. 
                All systems come with comprehensive guides and support.
              </p>
            </div>
          </div>
          
          <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            <div style={{ background: '#d1fae5', padding: '1rem', fontWeight: '600', color: '#1f2937' }}>
              What's the return on investment for a commercial system?
            </div>
            <div style={{ padding: '1rem', color: '#4b5563' }}>
              <p>
                Most commercial customers see ROI within 6-18 months, depending on the crops grown and market prices. 
                Our commercial team can provide a detailed analysis based on your specific situation and goals. 
                Restaurants typically see faster ROI due to the high cost of purchasing premium microgreens.
              </p>
            </div>
          </div>
          
          <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            <div style={{ background: '#d1fae5', padding: '1rem', fontWeight: '600', color: '#1f2937' }}>
              Do I need to purchase growing media regularly?
            </div>
            <div style={{ padding: '1rem', color: '#4b5563' }}>
              <p>
                All systems come with starter growing media. For ongoing production, we offer subscription plans for 
                coco coir mats and other growing media, delivered on your schedule. The Pro systems with hydroponic 
                options require less frequent media replacement.
              </p>
            </div>
          </div>
          
          <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            <div style={{ background: '#d1fae5', padding: '1rem', fontWeight: '600', color: '#1f2937' }}>
              How much maintenance is required?
            </div>
            <div style={{ padding: '1rem', color: '#4b5563' }}>
              <p>
                Our systems are designed to minimize maintenance. The Sprout Kit requires about 5 minutes weekly for water 
                refills and harvesting. Garden systems need about 15-30 minutes weekly. Commercial Pro systems have 
                automated many maintenance tasks, but require professional oversight for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ContactForm 
              onClose={handleCloseModal}
              preselectedSystem={selectedSystem}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GrowKitPage;
