import '../../assets/styles/features/home.css';

interface Feature {
  icon: string;
  iconImage?: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🌱',
    iconImage: '/images/icons/icon-varieties.png',
    title: '26 Varieties Analyzed',
    description: 'Comprehensive database of microgreens with detailed nutritional profiles and health benefits'
  },
  {
    icon: '🔬',
    iconImage: '/images/icons/icon-science.png',
    title: 'Science-Backed Data',
    description: 'Based on USDA nutritional requirements and peer-reviewed research for accurate recommendations'
  },
  {
    icon: '✨',
    iconImage: '/images/icons/icon-personalized.png',
    title: 'Personalized for You',
    description: 'Tailored recommendations based on your age, activity level, diet type, and health goals'
  }
];

const FeatureCards = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <h2 className="features-heading">Why Choose Green Revolution</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.iconImage ? (
                  <img 
                    src={feature.iconImage} 
                    alt={feature.title}
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        const fallback = document.createTextNode(feature.icon);
                        target.parentElement.appendChild(fallback);
                      }
                    }}
                  />
                ) : (
                  feature.icon
                )}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

