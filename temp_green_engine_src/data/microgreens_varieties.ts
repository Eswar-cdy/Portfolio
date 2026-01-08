export type Difficulty = 1 | 2 | 3 | 4 | 5;
export type FlavorType = 'mild' | 'spicy' | 'peppery' | 'sweet' | 'nutty' | 'bitter' | 'earthy';
export type FlavorIntensity = 1 | 2 | 3 | 4 | 5;
export type LightLevel = 'low' | 'medium' | 'high';
export type WaterLevel = 'low' | 'moderate' | 'high';

export interface FlavorProfile {
  primary: FlavorType;
  secondary?: FlavorType[];
  intensity: FlavorIntensity;
}

export interface CulinaryUses {
  pairsWith: string[];
  bestFor: string[];
  dressingIdeas?: string[];
}

export interface TopNutrient {
  name: string;
  amount: string;
  dailyValue?: number;
}

export interface GrowingParameters {
  germination: {
    min: number;
    max: number;
    unit: 'days';
  };
  harvest: {
    min: number;
    max: number;
    unit: 'days';
  };
  light: {
    level: LightLevel;
    hours: {
      min: number;
      max: number;
    };
    description: string;
  };
  water: {
    level: WaterLevel;
    description: string;
  };
  temperature: {
    min: number;
    max: number;
    unit: 'F' | 'C';
    optimal?: number;
  };
  soil: {
    type: string;
    ph: {
      min: number;
      max: number;
    };
  };
  specialNotes?: string;
}

export interface MicrogreenVariety {
  id: string;
  family: string;
  name: string;
  scientificName: string;
  description: string;
  nutritionalProfile: string;
  healthBenefits: string;
  
  // New fields (optional for backward compatibility during migration)
  difficulty?: Difficulty;
  harvestDays?: number; // Midpoint of harvest range for sorting
  harvestDaysRange?: { min: number; max: number };
  germinationDays?: { min: number; max: number };
  flavorProfile?: FlavorProfile;
  tags?: string[];
  culinaryUses?: CulinaryUses;
  healthGoals?: string[];
  topNutrients?: TopNutrient[];
  popularity?: number; // 1-10 ranking for default sorting
  imageUrl?: string;
  
  // Enhanced growing parameters (optional - can use legacy format during migration)
  growingParameters?: GrowingParameters;
  
  // Legacy fields for backward compatibility
  image?: string;
  // Legacy growing parameters format (deprecated but still supported)
  legacyGrowingParameters?: {
    germinationTime: string;
    harvestTime: string;
    lightRequirements: string;
    waterRequirements: string;
    soilRequirements: string;
    temperature: string;
    specialNotes: string;
  };
}

export const microgreenFamilies = [
  {
    id: "brassicaceae",
    name: "Brassicaceae",
    description: "The mustard family, known for pungent flavors and high nutritional value"
  },
  {
    id: "amaranthaceae",
    name: "Amaranthaceae",
    description: "The amaranth and beet family, known for vibrant colors and nutrient density"
  },
  {
    id: "apiaceae",
    name: "Apiaceae",
    description: "The carrot family, known for aromatic flavors and feathery leaves"
  },
  {
    id: "amaryllidaceae",
    name: "Amaryllidaceae",
    description: "The onion family, known for distinctive flavors and health benefits"
  },
  {
    id: "asteraceae",
    name: "Asteraceae",
    description: "The lettuce family, known for diverse textures and mild flavors"
  },
  {
    id: "cucurbitaceae",
    name: "Cucurbitaceae",
    description: "The squash family, known for large cotyledons and mild flavors"
  }
];

export const microgreenVarieties: MicrogreenVariety[] = [
  // Brassicaceae (mustard family)
  {
    id: "broccoli",
    family: "Brassicaceae",
    name: "Broccoli",
    scientificName: "Brassica oleracea var. italica",
    description: "Broccoli microgreens have a mild, slightly spicy flavor reminiscent of mature broccoli but more delicate. They feature vibrant green stems and leaves with two rounded cotyledons. These microgreens are among the most popular and nutritionally dense varieties available.",
    nutritionalProfile: "Exceptionally high in sulforaphane (up to 100 times more than mature broccoli), vitamin C (40% more than mature broccoli), vitamin K, iron, and calcium. Contains significant amounts of protein, fiber, and antioxidants including glucoraphanin.",
    healthBenefits: "The high sulforaphane content activates Nrf2 pathways that reduce inflammation and oxidative stress. Studies show potential cancer-fighting properties, particularly for breast, prostate, and colon cancers. May improve heart health by reducing cholesterol and supporting detoxification pathways. The vitamin K content supports bone health and blood clotting functions.",
    difficulty: 2,
    harvestDays: 8.5, // Midpoint of 7-10 days
    harvestDaysRange: { min: 7, max: 10 },
    germinationDays: { min: 2, max: 3 },
    flavorProfile: {
      primary: 'mild',
      secondary: ['spicy'],
      intensity: 2
    },
    tags: ['quick-growing', 'beginner-friendly', 'high-nutrition', 'anti-cancer', 'heart-health'],
    culinaryUses: {
      pairsWith: ['avocado', 'eggs', 'fish', 'chicken', 'quinoa'],
      bestFor: ['salads', 'smoothies', 'sandwiches', 'garnish'],
      dressingIdeas: ['lemon-olive-oil', 'balsamic-vinaigrette', 'tahini']
    },
    healthGoals: ['immune-support', 'heart-health', 'anti-cancer', 'bone-health', 'detoxification'],
    topNutrients: [
      { name: 'Sulforaphane', amount: '100x more than mature broccoli', dailyValue: undefined },
      { name: 'Vitamin C', amount: '40% more than mature broccoli', dailyValue: 140 },
      { name: 'Vitamin K', amount: 'High', dailyValue: 350 },
      { name: 'Iron', amount: 'Good source', dailyValue: undefined },
      { name: 'Calcium', amount: 'Good source', dailyValue: undefined }
    ],
    popularity: 10,
    imageUrl: undefined,
    growingParameters: {
      germination: {
        min: 2,
        max: 3,
        unit: 'days'
      },
      harvest: {
        min: 7,
        max: 10,
        unit: 'days'
      },
      light: {
        level: 'medium',
        hours: {
          min: 12,
          max: 14
        },
        description: 'Medium light; 12-14 hours daily'
      },
      water: {
        level: 'moderate',
        description: 'Moderate; keep soil moist but not soggy'
      },
      temperature: {
        min: 65,
        max: 75,
        unit: 'F',
        optimal: 70
      },
      soil: {
        type: 'Well-draining soil or growing medium',
        ph: {
          min: 6.0,
          max: 6.8
        }
      },
      specialNotes: 'Blackout period of 3-4 days after germination can improve flavor and texture'
    }
  },
  {
    id: "red-cabbage",
    family: "Brassicaceae",
    name: "Red Cabbage",
    scientificName: "Brassica oleracea var. capitata f. rubra",
    description: "Red cabbage microgreens are visually striking with purple-red stems and green leaves. They offer a mild cabbage flavor with a slight peppery note. The vibrant color indicates their high anthocyanin content, making them both beautiful and nutritious.",
    nutritionalProfile: "Contains up to 40 times more vitamin E and 6 times more vitamin C than mature cabbage. Rich in anthocyanins, polyphenols, and glucosinolates. Good source of vitamin K, calcium, iron, and manganese. Contains significant levels of protein and fiber.",
    healthBenefits: "The high anthocyanin content provides powerful antioxidant and anti-inflammatory effects. Studies suggest potential benefits for cardiovascular health by improving blood vessel function and reducing blood pressure. The vitamin C content supports immune function and collagen production. May help protect against certain types of cancer through multiple mechanisms.",
    difficulty: 2,
    harvestDays: 10,
    harvestDaysRange: { min: 8, max: 12 },
    germinationDays: { min: 2, max: 3 },
    flavorProfile: {
      primary: 'mild',
      secondary: ['peppery'],
      intensity: 2
    },
    tags: ['colorful', 'intermediate', 'high-nutrition', 'antioxidant', 'heart-health'],
    culinaryUses: {
      pairsWith: ['apples', 'walnuts', 'goat-cheese', 'balsamic'],
      bestFor: ['salads', 'garnish', 'colorful-dishes'],
      dressingIdeas: ['balsamic-vinaigrette', 'lemon-tahini']
    },
    healthGoals: ['heart-health', 'immune-support', 'anti-cancer', 'anti-inflammatory'],
    topNutrients: [
      { name: 'Vitamin E', amount: '40x more than mature cabbage', dailyValue: undefined },
      { name: 'Vitamin C', amount: '6x more than mature cabbage', dailyValue: undefined },
      { name: 'Anthocyanins', amount: 'High', dailyValue: undefined }
    ],
    popularity: 8,
    imageUrl: undefined,
    growingParameters: {
      germination: { min: 2, max: 3, unit: 'days' },
      harvest: { min: 8, max: 12, unit: 'days' },
      light: {
        level: 'high',
        hours: { min: 14, max: 16 },
        description: 'Medium to high light; 14-16 hours daily'
      },
      water: {
        level: 'moderate',
        description: 'Moderate; consistent moisture without overwatering'
      },
      temperature: {
        min: 65,
        max: 75,
        unit: 'F',
        optimal: 70
      },
      soil: {
        type: 'Well-draining soil or growing medium',
        ph: { min: 6.0, max: 7.0 }
      },
      specialNotes: 'Color intensifies with more light exposure; avoid overhead watering to prevent disease'
    }
  },
  {
    id: "arugula",
    family: "Brassicaceae",
    name: "Arugula",
    scientificName: "Eruca vesicaria ssp. sativa",
    description: "Arugula microgreens have a distinctive peppery, nutty flavor that's more delicate than mature arugula. They feature slender stems with small, elongated cotyledons and first true leaves. Their spicy profile makes them popular in culinary applications.",
    nutritionalProfile: "High in vitamins A, C, and K. Contains significant amounts of calcium, potassium, folate, and iron. Rich in glucosinolates, particularly glucoerucin. Good source of antioxidants including flavonoids and carotenoids.",
    healthBenefits: "The glucosinolates in arugula microgreens support detoxification pathways in the liver. Studies suggest potential cancer-preventive properties, particularly for lung and colorectal cancers. The vitamin K content supports bone health and proper blood clotting. May help reduce inflammation and oxidative stress throughout the body.",
    difficulty: 1,
    harvestDays: 6,
    harvestDaysRange: { min: 5, max: 7 },
    germinationDays: { min: 1, max: 2 },
    flavorProfile: {
      primary: 'peppery',
      secondary: ['nutty'],
      intensity: 4
    },
    tags: ['quick-growing', 'beginner-friendly', 'spicy', 'heart-health'],
    culinaryUses: {
      pairsWith: ['eggs', 'fish', 'pasta', 'pizza', 'salads'],
      bestFor: ['salads', 'garnish', 'pizza-topping'],
      dressingIdeas: ['lemon-olive-oil', 'balsamic-vinaigrette']
    },
    healthGoals: ['heart-health', 'anti-cancer', 'bone-health', 'detoxification'],
    topNutrients: [
      { name: 'Vitamin K', amount: 'High', dailyValue: undefined },
      { name: 'Calcium', amount: 'Good source', dailyValue: undefined },
      { name: 'Folate', amount: 'Good source', dailyValue: undefined }
    ],
    popularity: 9,
    imageUrl: undefined,
    growingParameters: {
      germination: { min: 1, max: 2, unit: 'days' },
      harvest: { min: 5, max: 7, unit: 'days' },
      light: {
        level: 'medium',
        hours: { min: 12, max: 14 },
        description: 'Medium light; 12-14 hours daily'
      },
      water: {
        level: 'moderate',
        description: 'Low to moderate; avoid overwatering'
      },
      temperature: {
        min: 65,
        max: 70,
        unit: 'F',
        optimal: 67
      },
      soil: {
        type: 'Light, well-draining soil or growing medium',
        ph: { min: 6.0, max: 7.0 }
      },
      specialNotes: 'Quick-growing variety; harvest promptly as flavor becomes more intense with age'
    }
  },
  {
    id: "radish",
    family: "Brassicaceae",
    name: "Radish",
    scientificName: "Raphanus sativus",
    description: "Radish microgreens have a spicy, peppery flavor similar to mature radishes but with a fresher, more delicate profile. They grow quickly with slender stems that may be green, purple, or red depending on the variety. Their crisp texture and bold flavor make them excellent for adding a kick to dishes.",
    nutritionalProfile: "Rich in vitamins C, E, and K. Contains significant amounts of folate, calcium, iron, magnesium, phosphorus, potassium, and zinc. High in antioxidants including anthocyanins (in red varieties) and isothiocyanates. Good source of fiber and protein.",
    healthBenefits: "The isothiocyanates in radish microgreens have demonstrated anti-cancer properties in research studies. May support digestive health through antimicrobial effects and stimulation of bile production. The vitamin C content supports immune function and collagen synthesis. May help reduce inflammation and support cardiovascular health.",
    difficulty: 1,
    harvestDays: 6,
    harvestDaysRange: { min: 5, max: 7 },
    germinationDays: { min: 1, max: 2 },
    flavorProfile: {
      primary: 'spicy',
      secondary: ['peppery'],
      intensity: 4
    },
    tags: ['quick-growing', 'beginner-friendly', 'spicy', 'digestive-health'],
    culinaryUses: {
      pairsWith: ['asian-dishes', 'sandwiches', 'tacos', 'soups'],
      bestFor: ['garnish', 'salads', 'wraps'],
      dressingIdeas: ['soy-sesame', 'ginger-lime']
    },
    healthGoals: ['digestive-health', 'anti-cancer', 'immune-support', 'heart-health'],
    topNutrients: [
      { name: 'Vitamin C', amount: 'High', dailyValue: undefined },
      { name: 'Vitamin K', amount: 'High', dailyValue: undefined },
      { name: 'Isothiocyanates', amount: 'High', dailyValue: undefined }
    ],
    popularity: 9,
    imageUrl: undefined,
    growingParameters: {
      germination: { min: 1, max: 2, unit: 'days' },
      harvest: { min: 5, max: 7, unit: 'days' },
      light: {
        level: 'medium',
        hours: { min: 12, max: 14 },
        description: 'Medium light; 12-14 hours daily'
      },
      water: {
        level: 'moderate',
        description: 'Moderate; consistent moisture'
      },
      temperature: {
        min: 65,
        max: 75,
        unit: 'F',
        optimal: 70
      },
      soil: {
        type: 'Well-draining soil or growing medium',
        ph: { min: 6.0, max: 7.0 }
      },
      specialNotes: 'One of the fastest-growing microgreens; excellent for beginners'
    }
  },
  {
    id: "mustard",
    family: "Brassicaceae",
    name: "Mustard",
    scientificName: "Brassica juncea",
    description: "Mustard microgreens have an intensely spicy, pungent flavor that adds a wasabi-like kick to dishes. They come in green and red/purple varieties, with delicate stems and small, rounded cotyledons. Their bold flavor profile makes them popular for adding complexity to dishes.",
    nutritionalProfile: "Exceptionally high in vitamin A, vitamin K, and vitamin C. Contains significant amounts of calcium, iron, phosphorus, and potassium. Rich in glucosinolates, particularly sinigrin, which converts to allyl isothiocyanate. Good source of antioxidants including kaempferol.",
    healthBenefits: "The isothiocyanates in mustard microgreens have demonstrated antimicrobial, anti-inflammatory, and anticancer properties. May support respiratory health by helping clear congestion. Studies suggest potential benefits for metabolic health, including improved insulin sensitivity. The high vitamin K content supports bone health and proper blood clotting.",
    legacyGrowingParameters: {
      germinationTime: "1-2 days",
      harvestTime: "6-10 days",
      lightRequirements: "Medium to high light; 14-16 hours daily",
      waterRequirements: "Moderate; keep soil consistently moist",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-6.8",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Flavor becomes more intense with age; harvest earlier for milder taste"
    }
  },

  // Amaranthaceae (amaranth and beet family)
  {
    id: "amaranth",
    family: "Amaranthaceae",
    name: "Amaranth",
    scientificName: "Amaranthus spp.",
    description: "Amaranth microgreens are visually striking with vibrant magenta-red stems and green leaves. They have a mild, earthy flavor with subtle sweetness. Available in red, gold, and green varieties, they add beautiful color contrast to dishes while providing exceptional nutritional value.",
    nutritionalProfile: "Exceptionally high in protein (up to 30% by dry weight) with a complete amino acid profile. Rich in vitamins A, B6, C, and K. Contains significant amounts of calcium, iron, magnesium, phosphorus, and potassium. High in antioxidants including betacyanins and betaxanthins. Good source of dietary fiber.",
    healthBenefits: "The complete protein profile makes amaranth microgreens valuable for muscle repair and overall protein requirements. The high iron content supports red blood cell production and oxygen transport. Studies suggest potential benefits for reducing inflammation and supporting cardiovascular health. The betacyanins provide antioxidant protection against cellular damage.",
    legacyGrowingParameters: {
      germinationTime: "2-3 days",
      harvestTime: "8-12 days",
      lightRequirements: "Medium to high light; 14-16 hours daily",
      waterRequirements: "Moderate; bottom watering recommended",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "70-75°F (21-24°C)",
      specialNotes: "Color intensifies with more light exposure; seeds are very small and should be sown densely"
    }
  },
  {
    id: "beet",
    family: "Amaranthaceae",
    name: "Beet",
    scientificName: "Beta vulgaris",
    description: "Beet microgreens feature striking deep red stems and green leaves with red veining. They have a mild, earthy flavor with subtle sweetness reminiscent of mature beets. Their vibrant color comes from betalain pigments, making them both visually appealing and nutritionally valuable.",
    nutritionalProfile: "Rich in vitamins A, B6, C, and K. High in minerals including iron, magnesium, potassium, and manganese. Contains significant amounts of betalains, particularly betacyanins. Good source of folate, copper, and dietary fiber.",
    healthBenefits: "The betalains in beet microgreens have demonstrated powerful anti-inflammatory and antioxidant effects. Studies suggest potential benefits for cardiovascular health, including improved blood pressure and enhanced exercise performance. May support detoxification pathways in the liver. The nitrates in beet microgreens may improve blood flow and oxygen delivery to tissues.",
    legacyGrowingParameters: {
      germinationTime: "3-4 days",
      harvestTime: "10-14 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Each 'seed' is actually a fruit cluster containing multiple seeds; sow less densely than other microgreens"
    }
  },
  {
    id: "spinach",
    family: "Amaranthaceae",
    name: "Spinach",
    scientificName: "Spinacia oleracea",
    description: "Spinach microgreens have a mild, slightly sweet flavor with tender green leaves and stems. They feature oval-shaped cotyledons and are more delicate in texture than many other microgreens. Their mild flavor makes them versatile for various culinary applications.",
    nutritionalProfile: "Exceptionally high in vitamins A, C, and K. Rich in folate, iron, calcium, and magnesium. Contains significant amounts of lutein and zeaxanthin. Good source of dietary fiber and plant-based protein.",
    healthBenefits: "The high vitamin K content supports bone health and proper blood clotting. The lutein and zeaxanthin are important for eye health, particularly protecting against age-related macular degeneration. Studies suggest potential benefits for reducing oxidative stress and inflammation. The iron content supports red blood cell production and oxygen transport.",
    legacyGrowingParameters: {
      germinationTime: "3-5 days",
      harvestTime: "10-14 days",
      lightRequirements: "Low to medium light; 10-12 hours daily",
      waterRequirements: "Moderate; avoid overwatering",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "60-70°F (15-21°C)",
      specialNotes: "Prefers cooler temperatures than most microgreens; can be challenging to grow in warm conditions"
    }
  },
  {
    id: "swiss-chard",
    family: "Amaranthaceae",
    name: "Swiss Chard",
    scientificName: "Beta vulgaris subsp. vulgaris",
    description: "Swiss chard microgreens are available in various colorful varieties including Rainbow, Ruby Red, and Golden. They feature slender stems in vibrant colors with green leaves. They have a mild, earthy flavor similar to beet microgreens but with subtle differences in taste profile.",
    nutritionalProfile: "Rich in vitamins A, C, and K. Contains significant amounts of magnesium, potassium, iron, and calcium. High in antioxidants including betalains (in colored varieties) and flavonoids. Good source of dietary fiber and plant-based protein.",
    healthBenefits: "The betalains in colored varieties provide antioxidant and anti-inflammatory benefits. Studies suggest potential benefits for blood sugar regulation and metabolic health. The vitamin K content supports bone health and proper blood clotting. May help support immune function through its vitamin C content.",
    legacyGrowingParameters: {
      germinationTime: "3-4 days",
      harvestTime: "10-14 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Like beets, each 'seed' contains multiple embryos; color intensity varies with variety and light exposure"
    }
  },
  {
    id: "quinoa",
    family: "Amaranthaceae",
    name: "Quinoa",
    scientificName: "Chenopodium quinoa",
    description: "Quinoa microgreens have a mild, slightly nutty flavor with tender green leaves and stems. They feature small, rounded cotyledons and grow more slowly than many other microgreens. Their subtle flavor profile makes them versatile for various dishes.",
    nutritionalProfile: "High in protein with a complete amino acid profile. Rich in vitamins B1, B2, B6, C, and E. Contains significant amounts of calcium, magnesium, iron, and phosphorus. Good source of antioxidants including quercetin and kaempferol. Contains saponins which have various health benefits.",
    healthBenefits: "The complete protein profile makes quinoa microgreens valuable for muscle repair and overall protein requirements. Studies suggest potential benefits for reducing inflammation and supporting cardiovascular health. The quercetin and kaempferol provide antioxidant protection against cellular damage. May support digestive health through fiber content and prebiotic effects.",
    legacyGrowingParameters: {
      germinationTime: "2-3 days",
      harvestTime: "8-12 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Low to moderate; avoid overwatering",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Seeds contain saponins that can be bitter; rinse seeds thoroughly before planting"
    }
  },

  // Apiaceae (carrot family)
  {
    id: "carrot",
    family: "Apiaceae",
    name: "Carrot",
    scientificName: "Daucus carota",
    description: "Carrot microgreens have delicate, feathery leaves with a mild, sweet flavor reminiscent of carrots with hints of parsley. They feature thin stems and lacy foliage that adds elegant texture to dishes. Their subtle flavor makes them versatile for various culinary applications.",
    nutritionalProfile: "Rich in vitamins A, B6, C, and K. Contains significant amounts of potassium, calcium, and phosphorus. High in antioxidants including carotenoids (particularly beta-carotene) and phenolic compounds. Good source of dietary fiber.",
    healthBenefits: "The high beta-carotene content supports eye health and immune function. Studies suggest potential benefits for skin health and protection against UV damage. The antioxidants in carrot microgreens help reduce oxidative stress and inflammation. May support cardiovascular health through multiple mechanisms including blood pressure regulation.",
    legacyGrowingParameters: {
      germinationTime: "7-10 days",
      harvestTime: "15-20 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Light, well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Slower to germinate than many microgreens; patience required"
    }
  },
  {
    id: "cilantro",
    family: "Apiaceae",
    name: "Cilantro",
    scientificName: "Coriandrum sativum",
    description: "Cilantro microgreens have the distinctive aromatic flavor of mature cilantro but with a more delicate profile. They feature feathery, lacy leaves with slender stems. Their strong flavor profile makes them popular for adding complexity to dishes, particularly in Asian and Latin American cuisines.",
    nutritionalProfile: "Exceptionally high in vitamins A and K. Rich in vitamins C and E. Contains significant amounts of calcium, potassium, and manganese. High in antioxidants including quercetin, kaempferol, and phenolic acids. Contains unique compounds including linalool and geranyl acetate.",
    healthBenefits: "Contains natural chelating agents that may help remove heavy metals from the body. Studies suggest potential benefits for blood sugar regulation and cholesterol management. The antioxidants in cilantro microgreens help reduce oxidative stress and inflammation. May have antimicrobial properties against certain pathogens.",
    legacyGrowingParameters: {
      germinationTime: "5-7 days",
      harvestTime: "14-21 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Moderate; avoid overwatering",
      soilRequirements: "Light, well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Slower growing than many microgreens; seeds benefit from soaking for 4-6 hours before planting"
    }
  },
  {
    id: "dill",
    family: "Apiaceae",
    name: "Dill",
    scientificName: "Anethum graveolens",
    description: "Dill microgreens have the characteristic aromatic flavor of mature dill but with a fresher, more delicate profile. They feature feathery, thread-like leaves with slender stems. Their distinctive flavor makes them excellent for pairing with fish, eggs, and in Eastern European cuisines.",
    nutritionalProfile: "High in vitamins A and C. Contains significant amounts of calcium, iron, and manganese. Rich in antioxidants including flavonoids and monoterpenes. Contains unique volatile compounds including carvone and limonene that contribute to its aroma and health benefits.",
    healthBenefits: "The monoterpenes in dill microgreens have demonstrated antimicrobial properties against certain pathogens. Studies suggest potential benefits for digestive health, including relief from gas and bloating. May have mild anti-inflammatory effects. The calcium content supports bone health and cellular function.",
    legacyGrowingParameters: {
      germinationTime: "5-7 days",
      harvestTime: "10-14 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Light, well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Delicate stems require gentle handling during harvest"
    }
  },
  {
    id: "fennel",
    family: "Apiaceae",
    name: "Fennel",
    scientificName: "Foeniculum vulgare",
    description: "Fennel microgreens have a distinctive anise or licorice-like flavor that's milder than mature fennel. They feature feathery, frond-like leaves with slender stems. Their unique flavor profile makes them excellent for adding complexity to salads, fish dishes, and Mediterranean cuisines.",
    nutritionalProfile: "Rich in vitamins A, B6, C, and K. Contains significant amounts of calcium, iron, magnesium, and potassium. High in antioxidants including flavonoids and phenolic compounds. Contains unique compounds including anethole, fenchone, and estragole that contribute to its flavor and health benefits.",
    healthBenefits: "The anethole in fennel microgreens has demonstrated anti-inflammatory and antimicrobial properties. Studies suggest potential benefits for digestive health, including relief from gas, bloating, and indigestion. May support women's health through mild estrogenic effects. The antioxidants help reduce oxidative stress and cellular damage.",
    legacyGrowingParameters: {
      germinationTime: "5-7 days",
      harvestTime: "12-15 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Moderate; avoid overwatering",
      soilRequirements: "Light, well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Seeds benefit from light crushing before planting to improve germination"
    }
  },
  {
    id: "parsley",
    family: "Apiaceae",
    name: "Parsley",
    scientificName: "Petroselinum crispum",
    description: "Parsley microgreens have a fresh, herbaceous flavor similar to mature parsley but more delicate. They feature small, divided leaves with slender stems. Their mild flavor makes them versatile for various culinary applications, particularly in Mediterranean and Middle Eastern cuisines.",
    nutritionalProfile: "Exceptionally high in vitamins A, C, and K. Rich in iron, calcium, and potassium. Contains significant amounts of folate and antioxidants including flavonoids, carotenoids, and luteolin. Contains unique volatile oils including myristicin and apiol.",
    healthBenefits: "The high vitamin K content supports bone health and proper blood clotting. Studies suggest potential benefits for kidney health, including prevention of kidney stones. The antioxidants in parsley microgreens help reduce oxidative stress and inflammation. May have mild diuretic effects that support detoxification.",
    legacyGrowingParameters: {
      germinationTime: "7-14 days",
      harvestTime: "20-30 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "One of the slowest-growing microgreens; seeds benefit from soaking for 8-12 hours before planting"
    }
  },

  // Amaryllidaceae (onion family)
  {
    id: "onion",
    family: "Amaryllidaceae",
    name: "Onion",
    scientificName: "Allium cepa",
    description: "Onion microgreens have a mild onion flavor that's less pungent than mature onions. They feature slender, hollow stems that grow in a distinctive loop before straightening. Their subtle flavor makes them excellent for adding depth to dishes without overpowering other ingredients.",
    nutritionalProfile: "Rich in vitamins A, C, and folate. Contains significant amounts of calcium, iron, magnesium, and phosphorus. High in antioxidants including quercetin and sulfur compounds. Contains unique organosulfur compounds including allicin precursors.",
    healthBenefits: "The organosulfur compounds in onion microgreens have demonstrated antimicrobial and antioxidant properties. Studies suggest potential benefits for cardiovascular health, including improved cholesterol levels and blood pressure. May support immune function through multiple mechanisms. The quercetin content may help reduce inflammation and allergic responses.",
    legacyGrowingParameters: {
      germinationTime: "3-5 days",
      harvestTime: "10-15 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Low to moderate; avoid overwatering",
      soilRequirements: "Light, well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Seeds benefit from soaking for 4-6 hours before planting"
    }
  },
  {
    id: "leek",
    family: "Amaryllidaceae",
    name: "Leek",
    scientificName: "Allium ampeloprasum",
    description: "Leek microgreens have a mild, sweet onion flavor that's more delicate than mature leeks. They feature slender, hollow stems similar to onion microgreens but with subtle differences in flavor profile. Their gentle flavor makes them versatile for various culinary applications.",
    nutritionalProfile: "Rich in vitamins A, C, and K. Contains significant amounts of folate, iron, and manganese. High in antioxidants including kaempferol and organosulfur compounds. Good source of dietary fiber.",
    healthBenefits: "The organosulfur compounds in leek microgreens have demonstrated antimicrobial and antioxidant properties. Studies suggest potential benefits for cardiovascular health, including improved cholesterol levels and blood pressure. May support bone health through vitamin K content. The kaempferol content may help reduce inflammation and oxidative stress.",
    legacyGrowingParameters: {
      germinationTime: "4-6 days",
      harvestTime: "10-15 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Light, well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Seeds benefit from soaking for 4-6 hours before planting"
    }
  },
  {
    id: "garlic",
    family: "Amaryllidaceae",
    name: "Garlic",
    scientificName: "Allium sativum",
    description: "Garlic microgreens have a mild garlic flavor that's less pungent than mature garlic. They feature slender, hollow stems with a distinctive garlic aroma. Their flavor profile makes them excellent for adding depth to dishes without the intensity of mature garlic.",
    nutritionalProfile: "Rich in vitamins A, B6, and C. Contains significant amounts of calcium, copper, and manganese. High in antioxidants including flavonoids and organosulfur compounds. Contains unique compounds including allicin precursors that form when tissues are damaged.",
    healthBenefits: "The organosulfur compounds in garlic microgreens have demonstrated antimicrobial, antiviral, and antifungal properties. Studies suggest potential benefits for cardiovascular health, including improved cholesterol levels and blood pressure. May support immune function through multiple mechanisms. The antioxidants help reduce oxidative stress and inflammation.",
    legacyGrowingParameters: {
      germinationTime: "5-7 days",
      harvestTime: "12-18 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Low to moderate; avoid overwatering",
      soilRequirements: "Light, well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Can be grown from garlic cloves or seeds; cloves produce larger microgreens but take longer"
    }
  },
  {
    id: "chives",
    family: "Amaryllidaceae",
    name: "Chives",
    scientificName: "Allium schoenoprasum",
    description: "Chive microgreens have a mild, delicate onion flavor that's fresher than mature chives. They feature thin, hollow, grass-like stems that grow straight upward. Their subtle flavor makes them excellent for garnishing and adding gentle onion notes to dishes.",
    nutritionalProfile: "Rich in vitamins A, C, and K. Contains significant amounts of folate, calcium, and iron. High in antioxidants including quercetin and kaempferol. Contains organosulfur compounds similar to other alliums but in different proportions.",
    healthBenefits: "The organosulfur compounds in chive microgreens have demonstrated antimicrobial and antioxidant properties. Studies suggest potential benefits for cardiovascular health, including improved cholesterol levels. May support bone health through vitamin K content. The quercetin content may help reduce inflammation and allergic responses.",
    legacyGrowingParameters: {
      germinationTime: "5-7 days",
      harvestTime: "14-21 days",
      lightRequirements: "Medium to high light; 14-16 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Light, well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Can be cut multiple times for repeated harvests; regrows well"
    }
  },
  {
    id: "shallot",
    family: "Amaryllidaceae",
    name: "Shallot",
    scientificName: "Allium cepa var. aggregatum",
    description: "Shallot microgreens have a delicate, sweet onion flavor with subtle garlic notes. They feature slender, hollow stems similar to other allium microgreens. Their nuanced flavor profile makes them excellent for gourmet applications and fine dining.",
    nutritionalProfile: "Rich in vitamins A, B6, and C. Contains significant amounts of folate, manganese, and iron. High in antioxidants including quercetin and sulfur compounds. Contains unique organosulfur compounds that contribute to its flavor and health benefits.",
    healthBenefits: "The organosulfur compounds in shallot microgreens have demonstrated antimicrobial and antioxidant properties. Studies suggest potential benefits for cardiovascular health, including improved cholesterol levels and blood pressure. May support immune function through multiple mechanisms. The quercetin content may help reduce inflammation and allergic responses.",
    legacyGrowingParameters: {
      germinationTime: "4-6 days",
      harvestTime: "12-16 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Low to moderate; avoid overwatering",
      soilRequirements: "Light, well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Seeds benefit from soaking for 4-6 hours before planting"
    }
  },

  // Asteraceae (lettuce family)
  {
    id: "lettuce",
    family: "Asteraceae",
    name: "Lettuce",
    scientificName: "Lactuca sativa",
    description: "Lettuce microgreens have a mild, slightly sweet flavor similar to baby lettuce. They feature tender stems with rounded cotyledons and first true leaves. Available in green and red varieties, they provide a gentle base flavor that complements other ingredients.",
    nutritionalProfile: "Rich in vitamins A, C, and K. Contains significant amounts of folate, iron, and calcium. High in antioxidants including phenolic compounds and carotenoids. Good source of dietary fiber and water content.",
    healthBenefits: "The high vitamin K content supports bone health and proper blood clotting. Studies suggest potential benefits for sleep quality due to natural compounds including lactucin and lactucopicrin. The antioxidants in lettuce microgreens help reduce oxidative stress and inflammation. May support eye health through lutein and zeaxanthin content.",
    legacyGrowingParameters: {
      germinationTime: "2-3 days",
      harvestTime: "7-10 days",
      lightRequirements: "Low to medium light; 10-12 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Light, well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "60-70°F (15-21°C)",
      specialNotes: "Prefers cooler temperatures than many microgreens; avoid heat stress"
    }
  },
  {
    id: "chicory",
    family: "Asteraceae",
    name: "Chicory",
    scientificName: "Cichorium intybus",
    description: "Chicory microgreens have a mildly bitter, nutty flavor that adds complexity to dishes. They feature slender stems with elongated cotyledons. Their distinctive flavor profile makes them popular in gourmet salad mixes and as a garnish for sophisticated dishes.",
    nutritionalProfile: "Rich in vitamins A, B6, C, and K. Contains significant amounts of manganese, potassium, and copper. High in antioxidants including chicoric acid and other phenolic compounds. Contains inulin, a prebiotic fiber that supports gut health.",
    healthBenefits: "The inulin content supports digestive health by feeding beneficial gut bacteria. Studies suggest potential benefits for liver health and detoxification pathways. The chicoric acid has demonstrated anti-inflammatory and antioxidant properties. May support blood sugar regulation and metabolic health.",
    legacyGrowingParameters: {
      germinationTime: "2-3 days",
      harvestTime: "8-12 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Moderate; avoid overwatering",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-70°F (18-21°C)",
      specialNotes: "Flavor becomes more bitter with age; harvest earlier for milder taste"
    }
  },
  {
    id: "endive",
    family: "Asteraceae",
    name: "Endive",
    scientificName: "Cichorium endivia",
    description: "Endive microgreens have a mildly bitter flavor that's less intense than mature endive. They feature slender stems with elongated cotyledons similar to chicory but with subtle differences in flavor profile. Their gentle bitterness adds complexity to salads and garnishes.",
    nutritionalProfile: "Rich in vitamins A, B9 (folate), and K. Contains significant amounts of calcium, potassium, and manganese. High in antioxidants including kaempferol and quercetin. Contains inulin, a prebiotic fiber that supports gut health.",
    healthBenefits: "The inulin content supports digestive health by feeding beneficial gut bacteria. Studies suggest potential benefits for liver health and detoxification pathways. The kaempferol and quercetin have demonstrated anti-inflammatory and antioxidant properties. May support cardiovascular health through multiple mechanisms.",
    legacyGrowingParameters: {
      germinationTime: "2-3 days",
      harvestTime: "8-12 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-70°F (18-21°C)",
      specialNotes: "Similar growing requirements to chicory; flavor becomes more bitter with age"
    }
  },
  {
    id: "radicchio",
    family: "Asteraceae",
    name: "Radicchio",
    scientificName: "Cichorium intybus var. foliosum",
    description: "Radicchio microgreens have a mildly bitter flavor with subtle sweetness. They feature slender stems that may develop reddish coloration with green leaves. Their complex flavor profile makes them excellent for adding depth to salads and sophisticated dishes.",
    nutritionalProfile: "Rich in vitamins C, K, and folate. Contains significant amounts of copper, zinc, and potassium. High in antioxidants including anthocyanins (in red varieties) and phenolic compounds. Contains inulin, a prebiotic fiber that supports gut health.",
    healthBenefits: "The anthocyanins in red varieties provide powerful antioxidant and anti-inflammatory effects. Studies suggest potential benefits for digestive health through inulin content. May support liver function and detoxification pathways. The vitamin K content supports bone health and proper blood clotting.",
    legacyGrowingParameters: {
      germinationTime: "2-3 days",
      harvestTime: "8-12 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Moderate; avoid overwatering",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-70°F (18-21°C)",
      specialNotes: "Color development depends on variety and light exposure"
    }
  },
  {
    id: "dandelion",
    family: "Asteraceae",
    name: "Dandelion",
    scientificName: "Taraxacum officinale",
    description: "Dandelion microgreens have a mildly bitter, slightly peppery flavor that adds complexity to dishes. They feature slender stems with elongated cotyledons. Their distinctive flavor profile makes them popular for adding depth to salads and as a nutritious garnish.",
    nutritionalProfile: "Exceptionally high in vitamins A, C, and K. Rich in calcium, iron, and potassium. Contains significant amounts of folate and magnesium. High in antioxidants including beta-carotene, lutein, and zeaxanthin. Contains unique compounds including taraxasterol and taraxacin.",
    healthBenefits: "Traditional use as a liver tonic is supported by research showing potential benefits for liver function and detoxification pathways. Studies suggest potential benefits for digestive health, including stimulation of bile production. May support kidney function through mild diuretic effects. The antioxidants help reduce oxidative stress and inflammation.",
    legacyGrowingParameters: {
      germinationTime: "3-5 days",
      harvestTime: "10-14 days",
      lightRequirements: "Medium light; 12-14 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "65-75°F (18-24°C)",
      specialNotes: "Not to be confused with wild dandelion; use only food-grade seeds"
    }
  },

  // Cucurbitaceae (squash family)
  {
    id: "cucumber",
    family: "Cucurbitaceae",
    name: "Cucumber",
    scientificName: "Cucumis sativus",
    description: "Cucumber microgreens have a mild, refreshing flavor reminiscent of mature cucumbers. They feature large, oval-shaped cotyledons with thick stems. Their fresh flavor makes them excellent for adding a cooling element to dishes, particularly in summer.",
    nutritionalProfile: "Rich in vitamins A, C, and K. Contains significant amounts of potassium, magnesium, and manganese. High in antioxidants including flavonoids and lignans. Contains unique compounds including cucurbitacins in trace amounts.",
    healthBenefits: "The high water and electrolyte content supports hydration and fluid balance. Studies suggest potential benefits for skin health through antioxidant content and anti-inflammatory effects. May support cardiovascular health through multiple mechanisms including blood pressure regulation. The vitamin K content supports bone health and proper blood clotting.",
    legacyGrowingParameters: {
      germinationTime: "2-3 days",
      harvestTime: "7-10 days",
      lightRequirements: "Medium to high light; 14-16 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "70-80°F (21-27°C)",
      specialNotes: "Seeds are large and should be sown less densely than smaller seeds"
    }
  },
  {
    id: "pumpkin",
    family: "Cucurbitaceae",
    name: "Pumpkin",
    scientificName: "Cucurbita pepo",
    description: "Pumpkin microgreens have a mild, slightly sweet flavor with nutty undertones. They feature large, oval-shaped cotyledons with thick stems. Their substantial texture and nutritional profile make them popular for adding substance to salads and as a nutritious garnish.",
    nutritionalProfile: "Rich in vitamins A, C, and E. Contains significant amounts of iron, magnesium, and zinc. High in antioxidants including carotenoids and phenolic compounds. Good source of protein and healthy fats from the germinated seed.",
    healthBenefits: "The high zinc content supports immune function and wound healing. Studies suggest potential benefits for prostate health in men. The carotenoids support eye health and may help prevent age-related macular degeneration. The magnesium content supports muscle function and energy production.",
    legacyGrowingParameters: {
      germinationTime: "2-3 days",
      harvestTime: "8-12 days",
      lightRequirements: "Medium to high light; 14-16 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "70-80°F (21-27°C)",
      specialNotes: "Seeds are large and should be sown less densely than smaller seeds; hull removal may be necessary"
    }
  },
  {
    id: "squash",
    family: "Cucurbitaceae",
    name: "Squash",
    scientificName: "Cucurbita spp.",
    description: "Squash microgreens have a mild, slightly sweet flavor similar to pumpkin microgreens. They feature large, oval-shaped cotyledons with thick stems. Their substantial texture makes them excellent for adding body to salads and as a nutritious base for microgreen mixes.",
    nutritionalProfile: "Rich in vitamins A, B6, and C. Contains significant amounts of folate, magnesium, and potassium. High in antioxidants including lutein and zeaxanthin. Good source of protein and healthy fats from the germinated seed.",
    healthBenefits: "The lutein and zeaxanthin support eye health and may help prevent age-related macular degeneration. Studies suggest potential benefits for skin health through antioxidant content. The magnesium content supports muscle function and energy production. May support immune function through multiple mechanisms.",
    legacyGrowingParameters: {
      germinationTime: "2-3 days",
      harvestTime: "8-12 days",
      lightRequirements: "Medium to high light; 14-16 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "70-80°F (21-27°C)",
      specialNotes: "Seeds are large and should be sown less densely than smaller seeds; hull removal may be necessary"
    }
  },
  {
    id: "watermelon",
    family: "Cucurbitaceae",
    name: "Watermelon",
    scientificName: "Citrullus lanatus",
    description: "Watermelon microgreens have a mild, slightly sweet flavor with subtle cucumber notes. They feature large, oval-shaped cotyledons with thick stems. Their refreshing flavor makes them excellent for summer dishes and as a hydrating addition to salads.",
    nutritionalProfile: "Rich in vitamins A, B6, and C. Contains significant amounts of magnesium, potassium, and zinc. High in antioxidants including lycopene and citrulline. Good source of protein and healthy fats from the germinated seed.",
    healthBenefits: "The citrulline content may support cardiovascular health through improved blood flow and nitric oxide production. Studies suggest potential benefits for muscle recovery after exercise. The lycopene provides antioxidant protection against cellular damage. May support hydration through high water content and electrolytes.",
    legacyGrowingParameters: {
      germinationTime: "2-3 days",
      harvestTime: "8-12 days",
      lightRequirements: "Medium to high light; 14-16 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "75-85°F (24-29°C)",
      specialNotes: "Prefers warmer temperatures than many microgreens; seeds are large and should be sown less densely"
    }
  },
  {
    id: "melon",
    family: "Cucurbitaceae",
    name: "Melon",
    scientificName: "Cucumis melo",
    description: "Melon microgreens have a mild, slightly sweet flavor with subtle fruity notes. They feature large, oval-shaped cotyledons with thick stems. Their gentle sweetness makes them excellent for adding dimension to fruit-based dishes and summer salads.",
    nutritionalProfile: "Rich in vitamins A, C, and folate. Contains significant amounts of potassium, magnesium, and phosphorus. High in antioxidants including beta-carotene and phenolic compounds. Good source of protein and healthy fats from the germinated seed.",
    healthBenefits: "The high vitamin C content supports immune function and collagen production. Studies suggest potential benefits for skin health through antioxidant content and hydrating properties. The potassium content supports heart health and fluid balance. May support digestive health through enzyme content.",
    legacyGrowingParameters: {
      germinationTime: "2-3 days",
      harvestTime: "8-12 days",
      lightRequirements: "Medium to high light; 14-16 hours daily",
      waterRequirements: "Moderate; consistent moisture",
      soilRequirements: "Well-draining soil or growing medium with pH 6.0-7.0",
      temperature: "70-80°F (21-27°C)",
      specialNotes: "Seeds are large and should be sown less densely than smaller seeds"
    }
  }
];
