import React from 'react';
import { Bar, Radar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, ArcElement } from 'chart.js';
import '../../assets/styles/components/NutritionalGapChart.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const NutritionalGapChart = ({ nutritionalGaps }) => {
  // Prepare data for bar chart visualization
  const barChartData = {
    labels: Object.keys(nutritionalGaps).map(nutrient => {
      // Format nutrient names for display (e.g., "vitamin_c" -> "Vitamin C")
      return nutrient.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }),
    datasets: [
      {
        label: 'Current Intake (%)',
        data: Object.values(nutritionalGaps).map(gap => gap.currentIntakePercentage),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Gap (%)',
        data: Object.values(nutritionalGaps).map(gap => Math.max(0, 100 - gap.currentIntakePercentage)),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ]
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Percentage of Recommended Daily Intake'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Nutrients'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Nutritional Gaps Analysis'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y || 0;
            return `${label}: ${value.toFixed(1)}%`;
          }
        }
      }
    }
  };

  // Prepare data for radar chart visualization
  const radarChartData = {
    labels: Object.keys(nutritionalGaps).map(nutrient => {
      return nutrient.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }),
    datasets: [
      {
        label: 'Current Intake',
        data: Object.values(nutritionalGaps).map(gap => gap.currentIntakePercentage),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Recommended Intake',
        data: Object.keys(nutritionalGaps).map(() => 100),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
      }
    ]
  };

  const radarChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Nutritional Profile Radar'
      }
    }
  };

  // Calculate overall nutritional status for doughnut chart
  const calculateOverallStatus = () => {
    const nutrients = Object.values(nutritionalGaps);
    const totalPercentage = nutrients.reduce((sum, gap) => sum + gap.currentIntakePercentage, 0);
    const averagePercentage = totalPercentage / nutrients.length;
    
    return {
      fulfilled: averagePercentage,
      gap: Math.max(0, 100 - averagePercentage)
    };
  };

  const overallStatus = calculateOverallStatus();
  
  const doughnutChartData = {
    labels: ['Current Nutrition', 'Nutritional Gap'],
    datasets: [
      {
        data: [overallStatus.fulfilled, overallStatus.gap],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      }
    ]
  };

  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Overall Nutritional Status'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value.toFixed(1)}%`;
          }
        }
      }
    }
  };

  // Find top 3 nutrients with the biggest gaps
  const getTopNutrientGaps = () => {
    return Object.entries(nutritionalGaps)
      .sort((a, b) => (100 - a[1].currentIntakePercentage) - (100 - b[1].currentIntakePercentage))
      .reverse()
      .slice(0, 3)
      .map(([nutrient, gap]) => ({
        name: nutrient.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        gap: Math.max(0, 100 - gap.currentIntakePercentage)
      }));
  };

  const topGaps = getTopNutrientGaps();

  return (
    <div className="nutritional-gap-charts">
      <div className="chart-summary">
        <h3>Your Nutritional Status</h3>
        <p>Based on your profile, we've identified several key nutrients that could be optimized in your diet.</p>
        <div className="top-gaps">
          <h4>Top Nutritional Gaps:</h4>
          <ul>
            {topGaps.map((item, index) => (
              <li key={index}>
                <span className="nutrient-name">{item.name}:</span> 
                <span className="gap-percentage">{item.gap.toFixed(1)}% below recommended</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="charts-container">
        <div className="chart-wrapper bar-chart">
          <h3>Nutrient Intake vs. Recommended</h3>
          <div className="chart-container">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
        
        <div className="chart-row">
          <div className="chart-wrapper radar-chart">
            <h3>Nutritional Profile</h3>
            <div className="chart-container">
              <Radar data={radarChartData} options={radarChartOptions} />
            </div>
          </div>
          
          <div className="chart-wrapper doughnut-chart">
            <h3>Overall Status</h3>
            <div className="chart-container">
              <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
            </div>
            <div className="overall-percentage">
              <span className="percentage-value">{overallStatus.fulfilled.toFixed(1)}%</span>
              <span className="percentage-label">of nutritional needs met</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionalGapChart;
