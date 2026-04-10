/**
 * PET Pal Pet Configuration
 * Defines different pet types and their characteristics
 */

/**
 * Pet configuration for different pet types
 */
export interface PetConfig {
  id: string;
  name: string;
  description: string;
  baseColor: string;
  accentColor: string;
  defaultLevel: number;
  baseFood: number;
  baseEnergy: number;
  growthRate: number; // How fast the pet levels up (1.0 = normal)
  moodMultiplier: number; // How mood affects learning feedback
  specialAbilities: string[]; // Special features this pet has
  unlockRequirement?: {
    streakDays?: number;
    totalWords?: number;
    totalSentences?: number;
    averageAccuracy?: number;
  };
}

/**
 * Available pet configurations
 */
export const petConfigs: { [key: string]: PetConfig } & { dog: PetConfig } = {
  // ========== DEFAULT PETS ==========
  'dog': {
    id: 'dog',
    name: 'Study Buddy',
    description: 'A loyal dog that loves learning with you',
    baseColor: '#FFB74D', // Orange
    accentColor: '#5D4037', // Brown
    defaultLevel: 1,
    baseFood: 100,
    baseEnergy: 50,
    growthRate: 1.0,
    moodMultiplier: 1.0,
    specialAbilities: [
      'Encouraging barks when you get answers right',
      'Wags tail when you complete daily tasks'
    ],
    unlockRequirement: {
      streakDays: 0 // Available from start
    }
  },
  
  'cat': {
    id: 'cat',
    name: 'Clever Cat',
    description: 'A smart cat that helps you stay focused',
    baseColor: '#7986CB', // Blue
    accentColor: '#303F9F', // Dark blue
    defaultLevel: 1,
    baseFood: 80,
    baseEnergy: 70,
    growthRate: 1.1,
    moodMultiplier: 1.2,
    specialAbilities: [
      'Purrs when you maintain focus',
      'High accuracy bonus'
    ],
    unlockRequirement: {
      streakDays: 3
    }
  },
  
  'bird': {
    id: 'bird',
    name: 'Vocabulary Bird',
    description: 'A colorful bird that remembers words with you',
    baseColor: '#4CAF50', // Green
    accentColor: '#1B5E20', // Dark green
    defaultLevel: 1,
    baseFood: 60,
    baseEnergy: 90,
    growthRate: 1.3,
    moodMultiplier: 1.1,
    specialAbilities: [
      'Sings when you learn new words',
      'Word retention bonus'
    ],
    unlockRequirement: {
      totalWords: 50
    }
  },
  
  // ========== SPECIAL PETS ==========
  'melody': {
    id: 'melody',
    name: '美乐蒂 (Melody)',
    description: 'A musical companion that makes learning harmonious',
    baseColor: '#E91E63', // Pink
    accentColor: '#880E4F', // Dark pink
    defaultLevel: 1,
    baseFood: 120,
    baseEnergy: 80,
    growthRate: 1.5,
    moodMultiplier: 1.3,
    specialAbilities: [
      'Plays encouraging tunes when you succeed',
      'Sentence rhythm helper',
      'Memory melody for better retention',
      'Harmony bonus for consecutive correct answers'
    ],
    unlockRequirement: {
      streakDays: 7,
      averageAccuracy: 75
    }
  },
  
  'owl': {
    id: 'owl',
    name: 'Wise Owl',
    description: 'A wise owl that helps you understand deeply',
    baseColor: '#795548', // Brown
    accentColor: '#3E2723', // Dark brown
    defaultLevel: 1,
    baseFood: 70,
    baseEnergy: 60,
    growthRate: 0.9,
    moodMultiplier: 1.4,
    specialAbilities: [
      'Wisdom tips for difficult words',
      'Deep understanding bonus',
      'Night study companion'
    ],
    unlockRequirement: {
      totalSentences: 30,
      averageAccuracy: 80
    }
  },
  
  'rabbit': {
    id: 'rabbit',
    name: 'Quick Learner',
    description: 'A fast rabbit that helps you learn quickly',
    baseColor: '#9C27B0', // Purple
    accentColor: '#4A148C', // Dark purple
    defaultLevel: 1,
    baseFood: 90,
    baseEnergy: 110,
    growthRate: 1.8,
    moodMultiplier: 0.9,
    specialAbilities: [
      'Fast review cycles',
      'Quick learning bonus',
      'Energy conservation'
    ],
    unlockRequirement: {
      streakDays: 5,
      totalWords: 100
    }
  }
};

/**
 * Get pet configuration by id
 */
export function getPetConfig(petId: string): PetConfig {
  const config = petConfigs[petId];
  if (config) {
    return config;
  }
  // Fallback to default pet
  return petConfigs.dog;
}

/**
 * Get all available pet configurations
 */
export function getAllPetConfigs(): PetConfig[] {
  return Object.values(petConfigs) as PetConfig[];
}

/**
 * Get pets that are unlocked based on user progress
 */
export function getUnlockedPets(userProgress: {
  streakDays: number;
  totalWords: number;
  totalSentences: number;
  averageAccuracy: number;
}): PetConfig[] {
  return getAllPetConfigs().filter(pet => {
    const req = pet.unlockRequirement;
    if (!req) return true;
    
    if (req.streakDays && userProgress.streakDays < req.streakDays) return false;
    if (req.totalWords && userProgress.totalWords < req.totalWords) return false;
    if (req.totalSentences && userProgress.totalSentences < req.totalSentences) return false;
    if (req.averageAccuracy && userProgress.averageAccuracy < req.averageAccuracy) return false;
    
    return true;
  });
}

/**
 * Get default pet configuration
 */
export function getDefaultPet(): PetConfig {
  return petConfigs.dog as PetConfig;
}

/**
 * Check if a pet is unlocked
 */
export function isPetUnlocked(petId: string, userProgress: {
  streakDays: number;
  totalWords: number;
  totalSentences: number;
  averageAccuracy: number;
}): boolean {
  const pet = getPetConfig(petId);
  const req = pet.unlockRequirement;
  if (!req) return true;
  
  if (req.streakDays && userProgress.streakDays < req.streakDays) return false;
  if (req.totalWords && userProgress.totalWords < req.totalWords) return false;
  if (req.totalSentences && userProgress.totalSentences < req.totalSentences) return false;
  if (req.averageAccuracy && userProgress.averageAccuracy < req.averageAccuracy) return false;
  
  return true;
}