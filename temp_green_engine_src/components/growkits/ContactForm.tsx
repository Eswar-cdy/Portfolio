import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import { submitContactForm } from '../../utils/formSubmission';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number'),
  system: z.enum(['sprout', 'garden', 'pro', 'commercial', 'not-sure']).refine(val => val !== undefined, {
    message: 'Please select a system'
  }),
  message: z.string().max(500, 'Message must be 500 characters or less').optional(),
  bulkPricing: z.boolean().optional()
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onClose?: () => void;
  preselectedSystem?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose, preselectedSystem }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      system: preselectedSystem as any || 'not-sure',
      bulkPricing: false
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Submit form data
      await submitContactForm(data);
      
      // Show success toast
      toast.success('Quote request submitted successfully! We\'ll contact you soon.', {
        duration: 5000,
        position: 'top-center',
      });
      
      // Reset form
      reset();
      
      // Close modal if provided
      if (onClose) {
        setTimeout(() => onClose(), 2000);
      }
    } catch (error) {
      toast.error('Failed to submit form. Please try again or contact us directly.', {
        duration: 5000,
        position: 'top-center',
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <Toaster />
      <div className="contact-form-header">
        <h2>Request a Quote</h2>
        <p>Fill out the form below and we'll get back to you within 24 hours</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={errors.name ? 'error' : ''}
            placeholder="John Doe"
          />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={errors.email ? 'error' : ''}
            placeholder="john@example.com"
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={errors.phone ? 'error' : ''}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && <span className="error-message">{errors.phone.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="system">Which system are you interested in? *</label>
          <select
            id="system"
            {...register('system')}
            className={errors.system ? 'error' : ''}
          >
            <option value="not-sure">Not Sure Yet</option>
            <option value="sprout">Sprout Kit ($129)</option>
            <option value="garden">Garden System ($349)</option>
            <option value="pro">Pro System ($799)</option>
            <option value="commercial">Commercial Pro (Custom Quote)</option>
          </select>
          {errors.system && <span className="error-message">{errors.system.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Tell us about your needs (optional)</label>
          <textarea
            id="message"
            {...register('message')}
            className={errors.message ? 'error' : ''}
            placeholder="Any specific requirements or questions?"
            rows={4}
          />
          {errors.message && <span className="error-message">{errors.message.message}</span>}
        </div>

        <div className="form-group-checkbox">
          <label>
            <input
              type="checkbox"
              {...register('bulkPricing')}
            />
            <span>I'm interested in commercial/bulk pricing</span>
          </label>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="cancel-button"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

