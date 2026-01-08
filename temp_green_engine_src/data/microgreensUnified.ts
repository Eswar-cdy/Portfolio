import { MicrogreenVariety } from './microgreens_varieties';
import nutritionalDatabase from './microgreens_nutritional_database.json';

interface NutritionalData {
  id: number;
  name: string;
  scientificName: string;
  family: string;
  nutrients: {
    vitamin_c?: number;
    vitamin_k?: number;
    vitamin_a?: number;
    vitamin_e?: number;
    vitamin_b1?: number;
    vitamin_b6?: number;
    vitamin_b12?: number;
    folate?: number;
    calcium?: number;
    iron?: number;
    magnesium?: number;
    potassium?: number;
    zinc?: number;
    selenium?: number;
    phosphorus?: number;
    manganese?: number;
    copper?: number;
    protein?: number;
    fiber?: number;
    omega_3?: number;
  };
  benefitScores: {
    antioxidant?: number;
    anti_inflammatory?: number;
    heart_health?: number;
    immune_support?: number;
    digestive_health?: number;
    brain_health?: number;
    blood_sugar?: number;
    bone_health?: number;
    detoxification?: number;
    skin_health?: number;
    eye_health?: number;
    muscle_recovery?: number;
    weight_management?: number;
  };
  benefits?: string[];
  usageTips?: string[];
  educationalContent?: string;
}

interface NutritionalDataDetails {
  vitamins: Array<{ name: string; amount: number; unit: string; dailyValue?: number }>;
  minerals: Array<{ name: string; amount: number; unit: string; dailyValue?: number }>;
  macronutrients: { protein: number; fiber: number; fat?: number };
  antioxidants: string[];
  comparisonData?: Array<{ nutrient: string; multiplier: number }>;
}

function getDefaultNutritionData(): NutritionalDataDetails {
  return {
    vitamins: [],
    minerals: [],
    macronutrients: { protein: 0, fiber: 0 },
    antioxidants: [],
    comparisonData: [],
  };
}

function normalizeName(name: string): string {
  return name.toLowerCase().trim().replace(/\s+/g, '-');
}

function findNutritionData(microgreenName: string): NutritionalData | null {
  const normalizedName = normalizeName(microgreenName);
  
  // Try exact match first
  let nutritionData = (nutritionalDatabase as NutritionalData[]).find(
    (n) => normalizeName(n.name) === normalizedName
  );
  
  // Try partial match if exact match fails
  if (!nutritionData) {
    nutritionData = (nutritionalDatabase as NutritionalData[]).find(
      (n) => normalizedName.includes(normalizeName(n.name)) || normalizeName(n.name).includes(normalizedName)
    );
  }
  
  return nutritionData || null;
}

function convertNutritionData(nutritionData: NutritionalData | null): NutritionalDataDetails {
  if (!nutritionData) {
    return getDefaultNutritionData();
  }

  const vitamins: Array<{ name: string; amount: number; unit: string; dailyValue?: number }> = [];
  const minerals: Array<{ name: string; amount: number; unit: string; dailyValue?: number }> = [];

  // Convert vitamins
  if (nutritionData.nutrients.vitamin_a) {
    vitamins.push({ name: 'Vitamin A', amount: nutritionData.nutrients.vitamin_a, unit: 'mcg' });
  }
  if (nutritionData.nutrients.vitamin_c) {
    vitamins.push({ name: 'Vitamin C', amount: nutritionData.nutrients.vitamin_c, unit: 'mg' });
  }
  if (nutritionData.nutrients.vitamin_e) {
    vitamins.push({ name: 'Vitamin E', amount: nutritionData.nutrients.vitamin_e, unit: 'mg' });
  }
  if (nutritionData.nutrients.vitamin_k) {
    vitamins.push({ name: 'Vitamin K', amount: nutritionData.nutrients.vitamin_k, unit: 'mcg' });
  }
  if (nutritionData.nutrients.vitamin_b1) {
    vitamins.push({ name: 'Vitamin B1', amount: nutritionData.nutrients.vitamin_b1, unit: 'mg' });
  }
  if (nutritionData.nutrients.vitamin_b6) {
    vitamins.push({ name: 'Vitamin B6', amount: nutritionData.nutrients.vitamin_b6, unit: 'mg' });
  }
  if (nutritionData.nutrients.vitamin_b12) {
    vitamins.push({ name: 'Vitamin B12', amount: nutritionData.nutrients.vitamin_b12, unit: 'mcg' });
  }
  if (nutritionData.nutrients.folate) {
    vitamins.push({ name: 'Folate', amount: nutritionData.nutrients.folate, unit: 'mcg' });
  }

  // Convert minerals
  if (nutritionData.nutrients.calcium) {
    minerals.push({ name: 'Calcium', amount: nutritionData.nutrients.calcium, unit: 'mg' });
  }
  if (nutritionData.nutrients.iron) {
    minerals.push({ name: 'Iron', amount: nutritionData.nutrients.iron, unit: 'mg' });
  }
  if (nutritionData.nutrients.magnesium) {
    minerals.push({ name: 'Magnesium', amount: nutritionData.nutrients.magnesium, unit: 'mg' });
  }
  if (nutritionData.nutrients.potassium) {
    minerals.push({ name: 'Potassium', amount: nutritionData.nutrients.potassium, unit: 'mg' });
  }
  if (nutritionData.nutrients.zinc) {
    minerals.push({ name: 'Zinc', amount: nutritionData.nutrients.zinc, unit: 'mg' });
  }
  if (nutritionData.nutrients.selenium) {
    minerals.push({ name: 'Selenium', amount: nutritionData.nutrients.selenium, unit: 'mcg' });
  }
  if (nutritionData.nutrients.phosphorus) {
    minerals.push({ name: 'Phosphorus', amount: nutritionData.nutrients.phosphorus, unit: 'mg' });
  }
  if (nutritionData.nutrients.manganese) {
    minerals.push({ name: 'Manganese', amount: nutritionData.nutrients.manganese, unit: 'mg' });
  }
  if (nutritionData.nutrients.copper) {
    minerals.push({ name: 'Copper', amount: nutritionData.nutrients.copper, unit: 'mg' });
  }

  // Extract antioxidants from benefit scores
  const antioxidants: string[] = [];
  if (nutritionData.benefitScores.antioxidant && nutritionData.benefitScores.antioxidant > 70) {
    antioxidants.push('High antioxidant content');
  }

  return {
    vitamins,
    minerals,
    macronutrients: {
      protein: nutritionData.nutrients.protein || 0,
      fiber: nutritionData.nutrients.fiber || 0,
      fat: nutritionData.nutrients.omega_3 ? nutritionData.nutrients.omega_3 * 9 : undefined, // Approximate
    },
    antioxidants,
    comparisonData: [],
  };
}

export interface UnifiedMicrogreenData extends MicrogreenVariety {
  nutritionalData: NutritionalDataDetails;
  benefitScores?: NutritionalData['benefitScores'];
}

/**
 * Get unified microgreen data by merging variety data with nutritional database
 */
export function getUnifiedMicrogreens(microgreens: MicrogreenVariety[]): UnifiedMicrogreenData[] {
  return microgreens.map((microgreen) => {
    const nutritionData = findNutritionData(microgreen.name);
    const nutritionalData = convertNutritionData(nutritionData);

    return {
      ...microgreen,
      nutritionalData,
      benefitScores: nutritionData?.benefitScores,
    };
  });
}

/**
 * Get a single unified microgreen by ID
 */
export function getUnifiedMicrogreenById(
  microgreens: MicrogreenVariety[],
  id: string
): UnifiedMicrogreenData | undefined {
  const microgreen = microgreens.find((m) => m.id === id);
  if (!microgreen) return undefined;

  const nutritionData = findNutritionData(microgreen.name);
  const nutritionalData = convertNutritionData(nutritionData);

  return {
    ...microgreen,
    nutritionalData,
    benefitScores: nutritionData?.benefitScores,
  };
}

