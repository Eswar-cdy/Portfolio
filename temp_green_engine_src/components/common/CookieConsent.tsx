import React, { useState, useEffect } from 'react';
import { initGA } from '../../services/analytics';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('microharvest-analytics-consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'true') {
      // Initialize GA if already consented
      initGA();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('microharvest-analytics-consent', 'true');
    setShowBanner(false);
    initGA();
  };

  const handleDecline = () => {
    localStorage.setItem('microharvest-analytics-consent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#047857',
        color: '#fff',
        padding: '16px 20px',
        fontSize: '14px',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
      }}
    >
      <p style={{ margin: 0, flex: 1, lineHeight: '1.5' }}>
        We use cookies to analyze site usage and improve your experience. By clicking "Accept", you consent to our use of cookies.
      </p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={handleDecline}
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid #fff',
            padding: '8px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          style={{
            background: '#f0fdf4',
            color: '#047857',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

