// This file contains the core algorithm for calculating nutritional gaps
// and generating personalized microgreen recommendations

import microgreenData from '../../../data/microgreens_nutritional_database.json';
import nutritionalRequirements from '../../../data/nutritional_requirements.json';

// --- CONFIGURATION CONSTANTS ---

const HEALTH_GOAL_MICROGREENS = {
  'immune-support': {
    primary: ['Nasturtium', 'Parsley', 'Broccoli', 'Cress', 'Red Cabbage'],
    secondary: ['Swiss Chard', 'Kale', 'Basil', 'Sunflower', 'Wheatgrass']
  },
  'heart-health': {
    primary: ['Flax', 'Chia', 'Arugula', 'Buckwheat', 'Beet'],
    secondary: ['Sunflower', 'Celery', 'Pea Shoots', 'Broccoli']
  },
  'energy-boost': {
    primary: ['Amaranth', 'Pea Shoots', 'Wheatgrass', 'Beet', 'Chia'],
    secondary: ['Sunflower', 'Parsley', 'Fenugreek', 'Buckwheat']
  },
  'weight-management': {
    primary: ['Radish', 'Arugula', 'Red Cabbage', 'Lettuce'],
    secondary: ['Broccoli', 'Kale', 'Celery']
  },
  'digestive-health': {
    primary: ['Chia', 'Fennel', 'Cilantro', 'Dill', 'Radish'],
    secondary: ['Flax', 'Fenugreek', 'Broccoli', 'Pea Shoots']
  },
  'brain-health': {
    primary: ['Flax', 'Chia', 'Sunflower', 'Beet', 'Broccoli'],
    secondary: ['Basil', 'Kale', 'Arugula', 'Red Cabbage']
  },
  'blood-sugar-management': {
    primary: ['Fenugreek', 'Buckwheat', 'Chia', 'Broccoli'],
    secondary: ['Swiss Chard', 'Red Cabbage', 'Celery', 'Kale']
  },
  'reduce-inflammation': {
    primary: ['Flax', 'Chia', 'Basil', 'Red Cabbage', 'Buckwheat'],
    secondary: ['Broccoli', 'Red Mustard', 'Celery', 'Arugula']
  }
};

const DIET_SPECIFIC_FOCUS = {
  'vegan': {
    critical_nutrients: ['vitamin_b12', 'iron', 'zinc', 'calcium', 'protein', 'omega_3'],
    microgreen_bonuses: { 
      'Chia': 2.2, 'Flax': 2.1, 'Pea Shoots': 2.0, 'Amaranth': 2.0, 
      'Parsley': 1.9, 'Sunflower': 1.8, 'Kale': 1.8, 'Fenugreek': 1.7, 'Basil': 1.6 
    },
    serving_multiplier: 1.3
  },
  'vegetarian': {
    critical_nutrients: ['iron', 'zinc', 'vitamin_b12', 'protein'],
    microgreen_bonuses: { 
      'Pea Shoots': 1.6, 'Parsley': 1.6, 'Amaranth': 1.5, 'Sunflower': 1.5, 
      'Basil': 1.4, 'Dill': 1.3 
    },
    serving_multiplier: 1.15
  },
  'keto': {
    critical_nutrients: ['fiber', 'potassium', 'magnesium', 'sodium'],
    microgreen_bonuses: { 
      'Arugula': 1.6, 'Cress': 1.6, 'Red Mustard': 1.5, 'Radish': 1.5, 
      'Broccoli': 1.5, 'Mizuna': 1.4 
    },
    serving_multiplier: 1.0
  },
  'paleo': {
    critical_nutrients: ['calcium', 'vitamin_d', 'fiber'],
    microgreen_bonuses: { 
      'Parsley': 1.8, 'Swiss Chard': 1.7, 'Kale': 1.7, 'Broccoli': 1.6, 
      'Red Cabbage': 1.5, 'Basil': 1.5 
    },
    serving_multiplier: 1.1
  },
  'mediterranean': {
    critical_nutrients: ['omega_3', 'folate', 'antioxidants'],
    microgreen_bonuses: { 
      'Flax': 2.0, 'Chia': 1.9, 'Arugula': 1.8, 'Basil': 1.7, 
      'Sunflower': 1.6, 'Red Cabbage': 1.5, 'Parsley': 1.5 
    },
    serving_multiplier: 1.0
  },
  'pescatarian': {
    critical_nutrients: ['iron', 'zinc', 'calcium', 'vitamin_d'],
    microgreen_bonuses: { 
      'Parsley': 1.6, 'Kale': 1.5, 'Dill': 1.5, 'Basil': 1.4, 
      'Swiss Chard': 1.4 
    },
    serving_multiplier: 1.05
  },
  'omnivore': {
    critical_nutrients: ['fiber', 'folate', 'antioxidants'],
    microgreen_bonuses: { 
      'Broccoli': 1.3, 'Red Cabbage': 1.3, 'Sunflower': 1.2 
    },
    serving_multiplier: 1.0
  }
};

const AGE_GENDER_ADJUSTMENTS = {
  'female-menstruating': {
    nutrient_multipliers: { iron: 1.8, folate: 1.3, calcium: 1.2 },
    serving_boost: 1.2
  },
  'female-pregnant': {
    nutrient_multipliers: { folate: 2.0, iron: 1.8, calcium: 1.5 },
    serving_boost: 1.4
  },
  'female-lactating': {
    nutrient_multipliers: { calcium: 1.5, protein: 1.3, iron: 1.3 },
  },
  'senior-70plus': {
    nutrient_multipliers: { calcium: 1.4, vitamin_d: 1.5, vitamin_b12: 1.5, fiber: 1.3 },
  },
  'adolescent': {
    nutrient_multipliers: { calcium: 1.3, iron: 1.2, protein: 1.2 },
  }
};

const ACTIVITY_ADJUSTMENTS = {
  'sedentary': { serving_multiplier: 0.85 },
  'light': { serving_multiplier: 1.0 },
  'moderate': { serving_multiplier: 1.15 },
  'very': { serving_multiplier: 1.4 },
  'extra': { serving_multiplier: 1.7 }
};

// --- HELPER FUNCTIONS ---

/**
 * Helper function for flexible matching of microgreen names
 * @param {string} name - Name to normalize
 * @returns {string} - Normalized name
 */
const normalizeMicrogreenName = (name) => {
  return name.toLowerCase().replace(/_/g, ' ').trim();
};

/**
 * Determine the user's life stage for age/gender adjustments
 * @param {string} age - Age group
 * @param {string} gender - Gender
 * @returns {string|null} - Life stage key or null
 */
const getUserLifeStage = (age, gender) => {
    // Check for special conditions first
    if (gender === 'pregnant') return 'female-pregnant';
    if (gender === 'lactating') return 'female-lactating';
    
    // Then check for regular female life stages
    if (gender === 'female' && ['19-30', '31-50'].includes(age)) {
        return 'female-menstruating';
    }
    
    // Age-based life stages
    if (age === '71+') return 'senior-70plus';
    if (['14-18'].includes(age)) return 'adolescent';
    
    return null;
};


// --- CORE FUNCTIONS ---

export const calculateNutritionalGaps = (userData) => {
  const { age, gender, activityLevel, dietType, junkFoodConsumption, detailedFoodIntake, isPremium } = userData;
  
  let baseRequirements = getNutritionalRequirements(age, gender);
  
  // Apply age and gender-specific nutrient adjustments
  const lifeStage = getUserLifeStage(age, gender);
  if (lifeStage && AGE_GENDER_ADJUSTMENTS[lifeStage]) {
    const multipliers = AGE_GENDER_ADJUSTMENTS[lifeStage].nutrient_multipliers;
    if (multipliers) {
        for (const nutrient in multipliers) {
            if (baseRequirements[nutrient]) {
                baseRequirements[nutrient] *= multipliers[nutrient];
            }
        }
    }
  }

  const adjustedRequirements = adjustForActivityLevel(baseRequirements, activityLevel);
  
  let estimatedIntake;
  if (isPremium && detailedFoodIntake) {
    estimatedIntake = calculateDetailedIntake(detailedFoodIntake, dietType, adjustedRequirements);
  } else {
    estimatedIntake = estimateBasicIntake(dietType, junkFoodConsumption, adjustedRequirements);
  }
  
  const nutritionalGaps = {};
  for (const nutrient in adjustedRequirements) {
    const required = adjustedRequirements[nutrient];
    const estimated = estimatedIntake[nutrient] || 0;
    const percentageMet = Math.min(100, (estimated / required) * 100);
    
    nutritionalGaps[nutrient] = {
      required,
      estimated,
      currentIntakePercentage: percentageMet,
      gap: Math.max(0, required - estimated)
    };
  }
  
  return nutritionalGaps;
};

export const getMicrogreenRecommendations = (userData, nutritionalGaps) => {
  const { age, gender, activityLevel, healthGoals, dietType } = userData;
  
  const significantGaps = Object.entries(nutritionalGaps)
    .filter(([_, data]) => data.currentIntakePercentage < 70)
    .map(([nutrient, _]) => nutrient);
  
  const scoredMicrogreens = microgreenData.map(microgreen => {
    let healthGoalScore = 0;
    let nutritionScore = 0;
    let dietScore = 0;

    // 1. Health Goal Scoring (40% weight)
    if (healthGoals && healthGoals.length > 0) {
        healthGoals.forEach(goal => {
            const goalMapping = HEALTH_GOAL_MICROGREENS[goal];
            if (goalMapping) {
                if (goalMapping.primary.some(name => normalizeMicrogreenName(microgreen.name) === normalizeMicrogreenName(name))) {
                    healthGoalScore += 400; // High bonus
                } else if (goalMapping.secondary.some(name => normalizeMicrogreenName(microgreen.name) === normalizeMicrogreenName(name))) {
                    healthGoalScore += 200; // Medium bonus
                }
            }
        });
    }

    // 2. Nutritional Gap Scoring (40% weight)
    significantGaps.forEach(nutrient => {
      if (microgreen.nutrients && microgreen.nutrients[nutrient]) {
        const gapSize = 100 - nutritionalGaps[nutrient].currentIntakePercentage;
        nutritionScore += (gapSize * microgreen.nutrients[nutrient]) / 100;
      }
    });

    // 3. Diet Compatibility Scoring (20% weight)
    const dietFocus = DIET_SPECIFIC_FOCUS[dietType];
    if (dietFocus && dietFocus.microgreen_bonuses) {
        const bonus = dietFocus.microgreen_bonuses[microgreen.name];
        if (bonus) {
            dietScore += 100 * bonus; // Apply bonus
        }
    }

    const totalScore = (healthGoalScore * 0.4) + (nutritionScore * 0.4) + (dietScore * 0.2);
    
    return { ...microgreen, totalScore };
  });
  
  scoredMicrogreens.sort((a, b) => b.totalScore - a.totalScore);
  
  const RECOMMENDED_COUNT = 7;
  const topMicrogreens = scoredMicrogreens.slice(0, RECOMMENDED_COUNT);
  
  const recommendations = topMicrogreens.map(microgreen => {
    let baseAmount = getBaseRecommendedAmount(microgreen.id, age, gender);

    // Apply multipliers for serving size
    const activityMultiplier = ACTIVITY_ADJUSTMENTS[activityLevel]?.serving_multiplier || 1.0;
    const dietMultiplier = DIET_SPECIFIC_FOCUS[dietType]?.serving_multiplier || 1.0;
    const lifeStage = getUserLifeStage(age, gender);
    const ageGenderMultiplier = AGE_GENDER_ADJUSTMENTS[lifeStage]?.serving_boost || 1.0;

    const finalAmount = Math.round(baseAmount * activityMultiplier * dietMultiplier * ageGenderMultiplier);
    
    return {
      id: microgreen.id,
      name: microgreen.name,
      scientificName: microgreen.scientificName,
      family: microgreen.family,
      recommendedGrams: finalAmount,
      keyNutrients: getKeyNutrients(microgreen, significantGaps),
      benefits: getBenefitsForGoals(microgreen, healthGoals),
      usageTips: getUsageTips(microgreen),
      educationalContent: microgreen.educationalContent,
      benefitScores: microgreen.benefitScores
    };
  });
  
  return recommendations;
};

// ---UNCHANGED HELPER AND BASE FUNCTIONS ---
// (getNutritionalRequirements, adjustForActivityLevel, estimateBasicIntake, etc. remain here but are not shown for brevity)
// ... [The rest of the unchanged functions from the original file would go here]
// This includes getNutritionalRequirements, adjustForActivityLevel, estimateBasicIntake, calculateDetailedIntake,
// getBaseRecommendedAmount, adjustAmountForActivityLevel (will be refactored), getKeyNutrients, formatNutrientName,
// getNutrientUnit, getBenefitsForGoals, getUsageTips

const getNutritionalRequirements = (age, gender) => {
  const requirementsData = nutritionalRequirements;
  
  const normalizeAgeGroup = (age) => {
    if (age === '1-3') return '1-3';
    if (age === '4-8') return '4-8';
    if (age === '9-13') return '9-13';
    if (age === '14-18') return '14-18';
    if (age === '19-30') return '19-30';
    if (age === '31-50') return '31-50';
    if (age === '51-70') return '51-70';
    if (age === '71+') return '71+';
    return '19-30';
  };
  
  const normalizeGender = (gender) => {
    if (gender === 'pregnant') return 'pregnant';
    if (gender === 'lactating') return 'lactating';
    return gender;
  };
  
  const normalizedAge = normalizeAgeGroup(age);
  const normalizedGender = normalizeGender(gender);
  
  let match = requirementsData.find(entry => entry.age_group === normalizedAge && entry.gender === normalizedGender);
  
  if (!match) {
    match = requirementsData.find(entry => entry.age_group === normalizedAge && (entry.gender === 'all' || entry.gender === normalizedGender));
  }
  
  if (!match) {
    match = requirementsData.find(entry => entry.age_group === '19-30' && entry.gender === 'male');
  }
  
  return {
    vitamin_a: match.vitamin_a || 900, vitamin_c: match.vitamin_c || 90, vitamin_e: match.vitamin_e || 15,
    vitamin_k: match.vitamin_k || 120, folate: match.folate || 400, calcium: match.calcium || 1000,
    iron: match.iron || 8, potassium: match.potassium || 4700, magnesium: match.magnesium || 400,
    zinc: match.zinc || 11, fiber: match.fiber || 38, protein: match.protein || 56
  };
};

const adjustForActivityLevel = (requirements, activityLevel) => {
  const adjusted = { ...requirements };
  const multipliers = ACTIVITY_ADJUSTMENTS[activityLevel] || {};
  
  // This function can be expanded to adjust specific nutrients if needed
  // For now, serving size is adjusted elsewhere.
  
  return adjusted;
};

const estimateBasicIntake = (dietType, junkFoodConsumption, requirements) => {
    const baseIntakePercentages = {
    vitamin_a: 70, vitamin_c: 75, vitamin_e: 60, vitamin_k: 65, folate: 60,
    calcium: 70, iron: 65, potassium: 55, magnesium: 50, zinc: 70,
    fiber: 60, protein: 85
  };
  
  const adjustedPercentages = { ...baseIntakePercentages };
  const dietAdjustments = DIET_SPECIFIC_FOCUS[dietType];
  if (dietAdjustments && dietAdjustments.critical_nutrients) {
      // Simple reduction for critical nutrients in certain diets
      if(dietType === 'vegan') adjustedPercentages.iron *= 0.7;
      if(dietType === 'vegetarian') adjustedPercentages.iron *= 0.8;
  }

  const junkFoodImpact = { rarely: 1.0, occasionally: 0.9, frequently: 0.75, daily: 0.6 };
  const multiplier = junkFoodImpact[junkFoodConsumption] || 1.0;
  
  const estimatedIntake = {};
  for (const nutrient in requirements) {
    const percentage = adjustedPercentages[nutrient] || 70;
    estimatedIntake[nutrient] = (requirements[nutrient] * (percentage / 100)) * multiplier;
  }
  
  return estimatedIntake;
};

const calculateDetailedIntake = (detailedFoodIntake, dietType, requirements) => {
  // Detailed intake logic remains complex, simplified here
  return estimateBasicIntake(dietType, 'occasionally', requirements);
};

const getBaseRecommendedAmount = (microgreenId, age, gender) => {
    // This can be simplified as final amount is dynamic
    return 30; // Base of 30g
};

const getKeyNutrients = (microgreen, significantGaps) => {
  const keyNutrients = [];
  significantGaps.forEach(nutrient => {
    if (microgreen.nutrients && microgreen.nutrients[nutrient] && keyNutrients.length < 3) {
      keyNutrients.push(`${formatNutrientName(nutrient)}`);
    }
  });
  if (keyNutrients.length < 3) {
      Object.keys(microgreen.benefitScores).forEach(benefit => {
          if (microgreen.benefitScores[benefit] > 80 && keyNutrients.length < 3) {
              keyNutrients.push(`${formatNutrientName(benefit)} Support`);
      }
    });
  }
  return keyNutrients;
};

const formatNutrientName = (nutrient) => {
  return nutrient.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

const getNutrientUnit = (nutrient) => {
  const units = {
    vitamin_a: 'μg', vitamin_c: 'mg', vitamin_e: 'mg', vitamin_k: 'μg', folate: 'μg',
    calcium: 'mg', iron: 'mg', potassium: 'mg', magnesium: 'mg', zinc: 'mg',
    fiber: 'g', protein: 'g'
  };
  return units[nutrient] || '';
};

const getBenefitsForGoals = (microgreen, healthGoals) => {
  if (!healthGoals || healthGoals.length === 0) return microgreen.benefits?.slice(0, 2) || [];
  const benefits = [];
  healthGoals.forEach(goal => {
      const mapping = HEALTH_GOAL_MICROGREENS[goal];
      if (mapping && mapping.primary.includes(microgreen.name)) {
          benefits.push(`Supports ${formatNutrientName(goal)}`);
      }
  });
  return benefits.length > 0 ? benefits : microgreen.benefits?.slice(0, 2) || [];
};

const getUsageTips = (microgreen) => {
  return microgreen.usageTips?.join(' ') || "Add to salads, sandwiches, or use as a garnish.";
};
