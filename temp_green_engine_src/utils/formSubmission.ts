// Form submission utility
// This handles contact form submissions with rate limiting and data formatting

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  system: string;
  message?: string;
  bulkPricing?: boolean;
}

// Simple rate limiting: track last submission time
let lastSubmissionTime = 0;
const RATE_LIMIT_MS = 60000; // 1 minute between submissions

export const submitContactForm = async (data: ContactFormData): Promise<void> => {
  // Rate limiting check
  const now = Date.now();
  if (now - lastSubmissionTime < RATE_LIMIT_MS) {
    throw new Error('Please wait before submitting another request');
  }

  // Format the system name for display
  const systemNames: Record<string, string> = {
    'sprout': 'Sprout Kit ($129)',
    'garden': 'Garden System ($349)',
    'pro': 'Pro System ($799)',
    'commercial': 'Commercial Pro (Custom Quote)',
    'not-sure': 'Not Sure Yet'
  };

  const formattedData = {
    ...data,
    systemName: systemNames[data.system] || data.system,
    timestamp: new Date().toISOString(),
    bulkPricing: data.bulkPricing ? 'Yes' : 'No'
  };

  // Log to console for development only
  if (import.meta.env.DEV) {
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Name:', formattedData.name);
    console.log('Email:', formattedData.email);
    console.log('Phone:', formattedData.phone);
    console.log('System:', formattedData.systemName);
    console.log('Message:', formattedData.message || 'N/A');
    console.log('Bulk Pricing Interest:', formattedData.bulkPricing);
    console.log('Timestamp:', formattedData.timestamp);
    console.log('===============================');
  }

  // Track analytics event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submission', {
      event_category: 'engagement',
      event_label: 'grow_kits_quote_request',
      value: formattedData.system
    });
  }

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Update last submission time
  lastSubmissionTime = now;

  // In production, this would send to your backend API or email service
  // Example integrations:
  // 1. EmailJS: https://www.emailjs.com/
  // 2. Formspree: https://formspree.io/
  // 3. Custom backend endpoint
  
  // For now, we'll just log and resolve
  // See FORM_SETUP.md for integration instructions
  
  return Promise.resolve();
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, destination: string) => {
  if (import.meta.env.DEV) {
    console.log(`CTA Click: ${ctaName} -> ${destination}`);
  }
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: ctaName,
      value: destination
    });
  }
};

// Track comparison table interactions
export const trackComparisonView = () => {
  if (import.meta.env.DEV) {
    console.log('User viewed comparison table');
  }
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'comparison_table_view', {
      event_category: 'engagement',
      event_label: 'grow_kits_comparison'
    });
  }
};

