import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/styles/features/nutrition.css';
import {
  trackNutritionFormStart,
  trackNutritionFormComplete
} from '../../../services/analytics';


const NutritionRecommendationForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Information
    age: '',
    gender: '',
    activityLevel: '',
    
    // Diet Information
    dietType: '',
    junkFoodConsumption: '',
    
    // Detailed Food Intake (Premium)
    isPremium: false,
    detailedFoodIntake: {
      vegetables: '',
      fruits: '',
      proteins: '',
      grains: '',
      dairy: '',
      fats: '',
    },
    
    // Health Goals
    healthGoals: [],
    
    // Recommendation Frequency
    recommendationFrequency: 'daily',
  });

  useEffect(() => {
    trackNutritionFormStart();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDetailedFoodChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      detailedFoodIntake: {
        ...formData.detailedFoodIntake,
        [name]: value,
      },
    });
  };

  const handleHealthGoalChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        healthGoals: [...formData.healthGoals, value],
      });
    } else {
      setFormData({
        ...formData,
        healthGoals: formData.healthGoals.filter(goal => goal !== value),
      });
    }
  };

  const handlePremiumToggle = () => {
    setFormData({
      ...formData,
      isPremium: !formData.isPremium,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackNutritionFormComplete(formData.age, formData.dietType);
    // Here we would typically send the data to the backend
    // For now, we'll just navigate to a results page with the form data
    navigate('/nutrition-recommendation/results', { state: { formData } });
  };

  return (
    <div className="nutrition-form-container">
      <div className="nutrition-form-header">
        <h1>Personalized Microgreens Nutrition Recommendation</h1>
        <p>Complete this form to receive tailored recommendations for microgreens based on your nutritional needs</p>
      </div>

      <div className="form-progress">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>Basic Info</div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>Diet</div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>Health Goals</div>
        {formData.isPremium && (
          <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>Detailed Intake</div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="nutrition-form">
        {step === 1 && (
          <div className="form-step">
            <h2>Basic Information</h2>
            
            <div className="form-group">
              <label htmlFor="age">Age Group</label>
              <select 
                id="age" 
                name="age" 
                value={formData.age} 
                onChange={handleChange}
                required
              >
                <option value="">Select your age group</option>
                <option value="1-3">Children (1-3 years)</option>
                <option value="4-8">Children (4-8 years)</option>
                <option value="9-13">Children (9-13 years)</option>
                <option value="14-18">Adolescents (14-18 years)</option>
                <option value="19-30">Adults (19-30 years)</option>
                <option value="31-50">Adults (31-50 years)</option>
                <option value="51-70">Adults (51-70 years)</option>
                <option value="71+">Seniors (71+ years)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select 
                id="gender" 
                name="gender" 
                value={formData.gender} 
                onChange={handleChange}
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="pregnant">Pregnant</option>
                <option value="lactating">Lactating</option>
                <option value="other">Prefer not to say</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="activityLevel">Activity Level</label>
              <select 
                id="activityLevel" 
                name="activityLevel" 
                value={formData.activityLevel} 
                onChange={handleChange}
                required
              >
                <option value="">Select your activity level</option>
                <option value="sedentary">Sedentary (little or no exercise)</option>
                <option value="light">Lightly Active (light exercise 1-3 days/week)</option>
                <option value="moderate">Moderately Active (moderate exercise 3-5 days/week)</option>
                <option value="very">Very Active (hard exercise 6-7 days/week)</option>
                <option value="extra">Extra Active (very hard exercise, physical job or training twice a day)</option>
              </select>
            </div>

            <div className="form-navigation">
              <button type="button" onClick={nextStep} className="next-btn">Next</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Diet Information</h2>
            
            <div className="form-group">
              <label htmlFor="dietType">Diet Type</label>
              <select 
                id="dietType" 
                name="dietType" 
                value={formData.dietType} 
                onChange={handleChange}
                required
              >
                <option value="">Select your diet type</option>
                <option value="omnivore">Omnivore (Meat & Plants)</option>
                <option value="vegetarian">Vegetarian (No Meat)</option>
                <option value="vegan">Vegan (No Animal Products)</option>
                <option value="pescatarian">Pescatarian (Fish & Plants)</option>
                <option value="keto">Keto (Low Carb, High Fat)</option>
                <option value="paleo">Paleo</option>
                <option value="mediterranean">Mediterranean</option>
                <option value="gluten-free">Gluten-Free</option>
                <option value="dairy-free">Dairy-Free</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="junkFoodConsumption">Processed/Junk Food Consumption</label>
              <select 
                id="junkFoodConsumption" 
                name="junkFoodConsumption" 
                value={formData.junkFoodConsumption} 
                onChange={handleChange}
                required
              >
                <option value="">Select frequency</option>
                <option value="rarely">Rarely (few times a month or less)</option>
                <option value="occasionally">Occasionally (1-2 times a week)</option>
                <option value="frequently">Frequently (3-5 times a week)</option>
                <option value="daily">Daily (once or more per day)</option>
              </select>
            </div>

            <div className="form-group premium-toggle">
              <label htmlFor="isPremium">
                <input 
                  type="checkbox" 
                  id="isPremium" 
                  checked={formData.isPremium} 
                  onChange={handlePremiumToggle} 
                />
                Enable Premium Features (Detailed Food Tracking)
              </label>
            </div>

            <div className="form-navigation">
              <button type="button" onClick={prevStep} className="prev-btn">Previous</button>
              <button type="button" onClick={nextStep} className="next-btn">Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Health Goals</h2>
            
            <div className="form-group checkbox-group">
              <p>Select your health goals (choose all that apply):</p>
              
              <label>
                <input 
                  type="checkbox" 
                  value="weight-management" 
                  checked={formData.healthGoals.includes('weight-management')} 
                  onChange={handleHealthGoalChange} 
                />
                Weight Management
              </label>
              
              <label>
                <input 
                  type="checkbox" 
                  value="heart-health" 
                  checked={formData.healthGoals.includes('heart-health')} 
                  onChange={handleHealthGoalChange} 
                />
                Heart Health
              </label>
              
              <label>
                <input 
                  type="checkbox" 
                  value="immune-support" 
                  checked={formData.healthGoals.includes('immune-support')} 
                  onChange={handleHealthGoalChange} 
                />
                Immune System Support
              </label>
              
              <label>
                <input 
                  type="checkbox" 
                  value="digestive-health" 
                  checked={formData.healthGoals.includes('digestive-health')} 
                  onChange={handleHealthGoalChange} 
                />
                Digestive Health
              </label>
              
              <label>
                <input 
                  type="checkbox" 
                  value="energy-boost" 
                  checked={formData.healthGoals.includes('energy-boost')} 
                  onChange={handleHealthGoalChange} 
                />
                Energy Boost
              </label>
              
              <label>
                <input 
                  type="checkbox" 
                  value="brain-health" 
                  checked={formData.healthGoals.includes('brain-health')} 
                  onChange={handleHealthGoalChange} 
                />
                Brain Health
              </label>
              
              <label>
                <input 
                  type="checkbox" 
                  value="anti-inflammatory" 
                  checked={formData.healthGoals.includes('anti-inflammatory')} 
                  onChange={handleHealthGoalChange} 
                />
                Reduce Inflammation
              </label>
              
              <label>
                <input 
                  type="checkbox" 
                  value="blood-sugar" 
                  checked={formData.healthGoals.includes('blood-sugar')} 
                  onChange={handleHealthGoalChange} 
                />
                Blood Sugar Management
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="recommendationFrequency">Recommendation Frequency</label>
              <select 
                id="recommendationFrequency" 
                name="recommendationFrequency" 
                value={formData.recommendationFrequency} 
                onChange={handleChange}
                required
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div className="form-navigation">
              <button type="button" onClick={prevStep} className="prev-btn">Previous</button>
              {formData.isPremium ? (
                <button type="button" onClick={nextStep} className="next-btn">Next</button>
              ) : (
                <button type="submit" className="submit-btn">Get Recommendations</button>
              )}
            </div>
          </div>
        )}

        {formData.isPremium && step === 4 && (
          <div className="form-step">
            <h2>Detailed Food Intake (Premium)</h2>
            <p>Please provide information about your typical daily food consumption:</p>
            
            <div className="form-group">
              <label htmlFor="vegetables">Vegetables (servings per day)</label>
              <select 
                id="vegetables" 
                name="vegetables" 
                value={formData.detailedFoodIntake.vegetables} 
                onChange={handleDetailedFoodChange}
              >
                <option value="">Select</option>
                <option value="0">0 servings</option>
                <option value="1-2">1-2 servings</option>
                <option value="3-4">3-4 servings</option>
                <option value="5+">5+ servings</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="fruits">Fruits (servings per day)</label>
              <select 
                id="fruits" 
                name="fruits" 
                value={formData.detailedFoodIntake.fruits} 
                onChange={handleDetailedFoodChange}
              >
                <option value="">Select</option>
                <option value="0">0 servings</option>
                <option value="1-2">1-2 servings</option>
                <option value="3-4">3-4 servings</option>
                <option value="5+">5+ servings</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="proteins">Proteins (servings per day)</label>
              <select 
                id="proteins" 
                name="proteins" 
                value={formData.detailedFoodIntake.proteins} 
                onChange={handleDetailedFoodChange}
              >
                <option value="">Select</option>
                <option value="0">0 servings</option>
                <option value="1-2">1-2 servings</option>
                <option value="3-4">3-4 servings</option>
                <option value="5+">5+ servings</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="grains">Whole Grains (servings per day)</label>
              <select 
                id="grains" 
                name="grains" 
                value={formData.detailedFoodIntake.grains} 
                onChange={handleDetailedFoodChange}
              >
                <option value="">Select</option>
                <option value="0">0 servings</option>
                <option value="1-2">1-2 servings</option>
                <option value="3-4">3-4 servings</option>
                <option value="5+">5+ servings</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="dairy">Dairy/Alternatives (servings per day)</label>
              <select 
                id="dairy" 
                name="dairy" 
                value={formData.detailedFoodIntake.dairy} 
                onChange={handleDetailedFoodChange}
              >
                <option value="">Select</option>
                <option value="0">0 servings</option>
                <option value="1-2">1-2 servings</option>
                <option value="3-4">3-4 servings</option>
                <option value="5+">5+ servings</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="fats">Healthy Fats (servings per day)</label>
              <select 
                id="fats" 
                name="fats" 
                value={formData.detailedFoodIntake.fats} 
                onChange={handleDetailedFoodChange}
              >
                <option value="">Select</option>
                <option value="0">0 servings</option>
                <option value="1-2">1-2 servings</option>
                <option value="3-4">3-4 servings</option>
                <option value="5+">5+ servings</option>
              </select>
            </div>

            <div className="form-navigation">
              <button type="button" onClick={prevStep} className="prev-btn">Previous</button>
              <button type="submit" className="submit-btn">Get Recommendations</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default NutritionRecommendationForm;
