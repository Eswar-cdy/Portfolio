import React from 'react';
import { Radar } from 'react-chartjs-2';
import '../../assets/styles/components/MicrogreenBenefitsChart.css';

const MicrogreenBenefitsChart = ({ recommendations, healthGoals }) => {
  // Map health goals to benefits categories
  const benefitCategories = [
    'Antioxidant',
    'Anti-inflammatory',
    'Heart Health',
    'Immune Support',
    'Digestive Health',
    'Brain Health',
    'Blood Sugar',
    'Bone Health'
  ];
  
  // Create datasets for each recommended microgreen
  const datasets = recommendations.map((microgreen, index) => {
    // Generate a color based on index
    const hue = (index * 137) % 360; // Golden angle approximation for good color distribution
    const color = `hsla(${hue}, 70%, 60%, 0.7)`;
    const borderColor = `hsla(${hue}, 70%, 50%, 1)`;
    
    return {
      label: microgreen.name,
      data: benefitCategories.map(category => {
        // Find the benefit score for this category (0-100)
        const benefitScore = microgreen.benefitScores?.[category.toLowerCase().replace(' ', '_')] || 0;
        return benefitScore;
      }),
      backgroundColor: color,
      borderColor: borderColor,
      pointBackgroundColor: borderColor,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: borderColor,
    };
  });
  
  const radarData = {
    labels: benefitCategories,
    datasets: datasets
  };
  
  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Health Benefits by Microgreen'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}% benefit`;
          }
        }
      }
    }
  };
  
  // Calculate which health goals are best addressed by the recommendations
  const getAddressedGoals = () => {
    const goalScores = {};
    
    // Initialize goals with 0 scores
    healthGoals.forEach(goal => {
      goalScores[goal] = 0;
    });
    
    // Sum up the scores for each goal across all recommended microgreens
    recommendations.forEach(microgreen => {
      healthGoals.forEach(goal => {
        const normalizedGoal = goal.toLowerCase().replace('-', '_');
        if (microgreen.benefitScores && microgreen.benefitScores[normalizedGoal]) {
          goalScores[goal] += microgreen.benefitScores[normalizedGoal];
        }
      });
    });
    
    // Convert to array and sort by score
    return Object.entries(goalScores)
      .map(([goal, score]) => ({ 
        goal: goal.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()), 
        score: score / recommendations.length // Average score across all microgreens
      }))
      .sort((a, b) => b.score - a.score);
  };
  
  const addressedGoals = getAddressedGoals();
  
  return (
    <div className="microgreen-benefits-chart">
      <div className="benefits-summary">
        <h3>How These Microgreens Support Your Health Goals</h3>
        <p>The recommended microgreens were selected to specifically address your health priorities:</p>
        
        <div className="addressed-goals">
          {addressedGoals.map((item, index) => (
            <div key={index} className="goal-item">
              <div className="goal-name">{item.goal}</div>
              <div className="goal-bar-container">
                <div 
                  className="goal-bar" 
                  style={{ width: `${item.score}%`, backgroundColor: `hsl(${index * 30}, 70%, 60%)` }}
                ></div>
                <span className="goal-score">{Math.round(item.score)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="benefits-radar-chart">
        <h3>Benefit Profile by Microgreen</h3>
        <div className="chart-container">
          <Radar data={radarData} options={radarOptions} />
        </div>
      </div>
      
      <div className="benefits-legend">
        <h4>Understanding the Benefits</h4>
        <ul>
          <li><strong>Antioxidant:</strong> Helps neutralize harmful free radicals in the body</li>
          <li><strong>Anti-inflammatory:</strong> Reduces inflammation and associated health issues</li>
          <li><strong>Heart Health:</strong> Supports cardiovascular function and healthy blood pressure</li>
          <li><strong>Immune Support:</strong> Enhances immune system function and response</li>
          <li><strong>Digestive Health:</strong> Promotes healthy digestion and gut function</li>
          <li><strong>Brain Health:</strong> Supports cognitive function and neurological health</li>
          <li><strong>Blood Sugar:</strong> Helps maintain healthy blood glucose levels</li>
          <li><strong>Bone Health:</strong> Supports bone density and strength</li>
        </ul>
      </div>
    </div>
  );
};

export default MicrogreenBenefitsChart;
