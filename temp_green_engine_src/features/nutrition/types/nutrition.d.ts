// This file provides TypeScript declarations for the nutrition recommendation components
declare module './pages/NutritionRecommendationPage' {
  const NutritionRecommendationPage: React.FC;
  export default NutritionRecommendationPage;
}

declare module './components/NutritionRecommendationForm' {
  const NutritionRecommendationForm: React.FC;
  export default NutritionRecommendationForm;
}

declare module './components/NutritionRecommendationResults' {
  const NutritionRecommendationResults: React.FC;
  export default NutritionRecommendationResults;
}

declare module './components/visualizations/NutritionalGapChart' {
  const NutritionalGapChart: React.FC<{nutritionalGaps: any}>;
  export default NutritionalGapChart;
}

declare module './components/visualizations/RecommendedMicrogreensTable' {
  const RecommendedMicrogreensTable: React.FC<{recommendations: any}>;
  export default RecommendedMicrogreensTable;
}

declare module './components/visualizations/MicrogreenBenefitsChart' {
  const MicrogreenBenefitsChart: React.FC<{recommendations: any, healthGoals: string[]}>;
  export default MicrogreenBenefitsChart;
}

declare module './utils/nutritionAlgorithm' {
  export function calculateNutritionalGaps(userData: any): any;
  export function getMicrogreenRecommendations(userData: any, nutritionalGaps: any): any;
}
