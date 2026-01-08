import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { calculateNutritionalGaps, getMicrogreenRecommendations } from '../utils/nutritionAlgorithm';
import { sendNutritionPlan } from '../../../services/emailService';
import NutritionalGapChart from '../../../components/charts/NutritionalGapChart';
import RecommendedMicrogreensTable from '../../../components/charts/RecommendedMicrogreensTable';
import MicrogreenBenefitsChart from '../../../components/charts/MicrogreenBenefitsChart';
import '@/assets/styles/features/nutrition.css';

const NutritionRecommendationResults = () => {
  const location = useLocation();
  const userData = location.state?.formData;

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // If no user data, redirect to form
  if (!userData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4 text-red-600">No Data Found</h1>
          <p className="mb-6">Please complete the nutrition form first.</p>
          <Link to="/nutrition-recommendation/form" className="text-emerald-600 hover:text-emerald-800">
            Go to Form
          </Link>
        </div>
      </div>
    );
  }

  // Calculate nutritional gaps based on user data
  const nutritionalGaps = calculateNutritionalGaps(userData);
  
  // Get personalized microgreen recommendations
  const recommendations = getMicrogreenRecommendations(userData, nutritionalGaps);
  
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const topGaps = Object.entries(nutritionalGaps)
      .filter(([, data]) => data.gap > 0)
      .sort(([, a], [, b]) => (b.gap / b.required) - (a.gap / a.required))
      .slice(0, 3)
      .map(([name, data]) => `${name.charAt(0).toUpperCase() + name.slice(1)}: ${((data.gap / data.required) * 100).toFixed(0)}% below`)
      .join(', ');

    const overallStatus = (
      (Object.values(nutritionalGaps).reduce((acc, curr) => acc + curr.currentIntakePercentage, 0) / Object.keys(nutritionalGaps).length)
    );

    const emailData = {
      to_email: email,
      user_name: userName,
      age_group: userData.age,
      diet_type: userData.dietType,
      health_goals: userData.healthGoals,
      recommended_microgreens: recommendations
        .map((m) => `${m.name} (${m.recommendedGrams}g)`)
        .join(', '),
      nutritional_gaps: topGaps,
      overall_status: `${overallStatus.toFixed(1)}% of nutritional needs met`,
    };

    const result = await sendNutritionPlan(emailData);

    if (result.success) {
      setEmailSent(true);
    }

    setIsSending(false);
  };
  
  return (
    <div className="nutrition-results-container">
      <div className="results-header">
        <h1>Your Personalized Microgreens Nutrition Plan</h1>
        <p>Based on your profile and nutritional needs, we recommend the following microgreens</p>
      </div>

      <div className="email-plan-section">
        <h3>📧 Email Your Personalized Plan</h3>
        {!emailSent ? (
          <form onSubmit={handleEmailSubmit} className="email-form">
            <div className="form-row">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your Name"
                required
                className="form-input"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="form-input"
              />
            </div>
            <button type="submit" disabled={isSending} className="submit-btn">
              {isSending ? 'Sending...' : 'Email My Plan'}
            </button>
          </form>
        ) : (
          <p className="success-message">✓ Plan sent to {email}! Check your inbox.</p>
        )}
      </div>
      
      <div className="results-summary">
        <h2>Summary</h2>
        <p>We've analyzed your profile and identified key areas where microgreens can enhance your nutrition.</p>
        <div className="profile-summary">
          <div className="profile-item">
            <span className="label">Age Group:</span>
            <span className="value">{userData.age}</span>
          </div>
          <div className="profile-item">
            <span className="label">Activity Level:</span>
            <span className="value">{userData.activityLevel}</span>
          </div>
          <div className="profile-item">
            <span className="label">Diet Type:</span>
            <span className="value">{userData.dietType}</span>
          </div>
          {userData.healthGoals.length > 0 && (
            <div className="profile-item">
              <span className="label">Health Goals:</span>
              <span className="value">{userData.healthGoals.join(', ')}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="nutritional-gaps-section">
        <h2>Your Nutritional Profile</h2>
        <p>Based on your information, we've identified these potential nutritional areas to focus on:</p>
        <NutritionalGapChart nutritionalGaps={nutritionalGaps} />
      </div>
      
      <div className="recommendations-section">
        <h2>Recommended Microgreens</h2>
        <p>These microgreens are specifically selected to address your nutritional needs:</p>
        <RecommendedMicrogreensTable recommendations={recommendations} />
      </div>
      
      <div className="benefits-section">
        <h2>Health Benefits</h2>
        <p>Here's how these microgreens support your health goals:</p>
        <MicrogreenBenefitsChart recommendations={recommendations} healthGoals={userData.healthGoals} />
      </div>
      
      <div className="consumption-guide">
        <h2>How to Incorporate These Microgreens</h2>
        <div className="consumption-tips">
          <div className="tip">
            <h3>Daily Consumption</h3>
            <p>For optimal benefits, consume the recommended amount of each microgreen daily. Fresh is best!</p>
          </div>
          <div className="tip">
            <h3>Serving Suggestions</h3>
            <p>Add to salads, sandwiches, smoothies, or use as garnish on main dishes.</p>
          </div>
          <div className="tip">
            <h3>Storage Tips</h3>
            <p>Store microgreens in a container lined with paper towels in the refrigerator for up to 7 days.</p>
          </div>
        </div>
      </div>
      
      <div className="educational-content">
        <h2>Why These Microgreens?</h2>
        <div className="microgreen-education">
          {recommendations.map((rec, index) => (
            <div key={index} className="microgreen-info">
              <h3>{rec.name}</h3>
              <p>{rec.educationalContent}</p>
              <ul className="nutrient-highlights">
                {rec.keyNutrients.map((nutrient, idx) => (
                  <li key={idx}>{nutrient}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionRecommendationResults;
