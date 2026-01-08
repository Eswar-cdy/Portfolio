import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '',
  placeholder = '/images/placeholder.svg' // A default placeholder image
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Only try WebP if the source is JPEG, not PNG (since we have PNG files)
  const isPng = src.toLowerCase().endsWith('.png');
  const webpSrc = !isPng ? src.replace(/\.(jpe?g)$/i, '.webp') : null;
  
  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return <img src={placeholder} alt="Placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className={className} />;
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }} className={className}>
      {!loaded && (
        <img 
          src={placeholder} 
          alt="Loading..." 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <source srcSet={src} type={isPng ? 'image/png' : 'image/jpeg'} />
        <img 
          src={src} 
          alt={alt}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
