import ReactGA from 'react-ga4';

let gaInitialized = false;

// Custom types for GA events
interface GAEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

const checkConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('microharvest-analytics-consent') === 'true';
};

export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
  if (measurementId && !gaInitialized) {
    ReactGA.initialize(measurementId);
    gaInitialized = true;
    if (import.meta.env.DEV) {
      console.log("GA Initialized");
    }
  }
};

export const logPageView = (path: string) => {
  if (gaInitialized && checkConsent()) {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

export const logEvent = ({ category, action, label, value }: GAEvent) => {
  if (gaInitialized && checkConsent()) {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};

// --- Custom Event Tracking Functions ---

export const trackNutritionFormStart = () => {
  logEvent({
    category: 'Nutrition Tool',
    action: 'Form Started',
    label: 'Multi-step Form'
  });
};

export const trackNutritionFormComplete = (ageGroup: string, dietType: string) => {
  logEvent({
    category: 'Nutrition Tool',
    action: 'Form Completed',
    label: `${ageGroup} - ${dietType}`
  });
};

export const trackProductView = (productName: string, price: number) => {
  if (gaInitialized && checkConsent()) {
    ReactGA.event('view_item', {
      currency: 'USD',
      value: price,
      items: [{
        item_name: productName,
        price,
      }],
    });
  }
};

// NOTE: Implement this when a shopping cart is added in a future phase
export const trackAddToCart = (productName: string, price: number) => {
  if (import.meta.env.DEV) {
    console.warn("trackAddToCart is a placeholder for a future e-commerce phase.");
  }
  // if (gaInitialized && checkConsent()) {
  //   ReactGA.event('add_to_cart', {
  //     currency: 'USD',
  //     value: price,
  //     items: [{
  //       item_name: productName,
  //       price,
  //     }],
  //   });
  // }
};
