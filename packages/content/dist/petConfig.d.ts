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
    growthRate: number;
    moodMultiplier: number;
    specialAbilities: string[];
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
export declare const petConfigs: {
    [key: string]: PetConfig;
} & {
    dog: PetConfig;
};
/**
 * Get pet configuration by id
 */
export declare function getPetConfig(petId: string): PetConfig;
/**
 * Get all available pet configurations
 */
export declare function getAllPetConfigs(): PetConfig[];
/**
 * Get pets that are unlocked based on user progress
 */
export declare function getUnlockedPets(userProgress: {
    streakDays: number;
    totalWords: number;
    totalSentences: number;
    averageAccuracy: number;
}): PetConfig[];
/**
 * Get default pet configuration
 */
export declare function getDefaultPet(): PetConfig;
/**
 * Check if a pet is unlocked
 */
export declare function isPetUnlocked(petId: string, userProgress: {
    streakDays: number;
    totalWords: number;
    totalSentences: number;
    averageAccuracy: number;
}): boolean;
//# sourceMappingURL=petConfig.d.ts.map