import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface NutritionPlanEmail {
  to_email: string;
  user_name: string;
  age_group: string;
  diet_type: string;
  health_goals: string[];
  recommended_microgreens: string;
  nutritional_gaps: string;
  overall_status: string;
}

export const sendNutritionPlan = async (
  data: NutritionPlanEmail
): Promise<{ success: boolean; message: string }> => {
  const loadingToast = toast.loading('Sending your personalized plan...');

  // Ensure environment variables are present
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  if (!serviceId || !templateId || !userId) {
    console.error("EmailJS environment variables are not configured!");
    toast.error('Email service is not configured. Please contact support.', {
      id: loadingToast,
      duration: 6000,
    });
    return { success: false, message: 'Email service not configured' };
  }

  try {
    const templateParams = {
      to_email: data.to_email,
      user_name: data.user_name || 'Valued Customer',
      age_group: data.age_group,
      diet_type: data.diet_type,
      health_goals: data.health_goals.join(', '),
      recommended_microgreens: data.recommended_microgreens,
      nutritional_gaps: data.nutritional_gaps,
      overall_status: data.overall_status,
    };
    
    await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    );

    toast.success('Plan sent successfully! Check your inbox.', {
      id: loadingToast,
      duration: 5000,
    });

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('EmailJS Error:', error);
    
    toast.error('Failed to send email. Please try again or screenshot your results.', {
      id: loadingToast,
      duration: 6000,
    });

    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    return { 
      success: false, 
      message: errorMessage
    };
  }
};
