/**
 * User-related types for PET Pal
 */
/**
 * User profile information
 */
export interface User {
    id: string;
    username: string;
    email?: string;
    avatar?: string;
    createdAt: Date;
    lastLogin: Date;
    streakDays: number;
    totalPoints: number;
    unlockedPets: string[];
    currentPet: string;
    studyStats: StudyStats;
    preferences: UserPreferences;
    achievements: Achievement[];
}
/**
 * User study statistics
 */
export interface StudyStats {
    totalWords: number;
    totalSentences: number;
    totalStudyTime: number;
    totalSessions: number;
    averageAccuracy: number;
    dailyGoal: number;
    lastStudyDate?: Date;
}
/**
 * User preferences
 */
export interface UserPreferences {
    theme: 'light' | 'dark' | 'melody';
    soundEnabled: boolean;
    musicEnabled: boolean;
    notificationsEnabled: boolean;
    dailyReminderTime?: string;
    studyLanguage: 'en-US' | 'en-GB';
    autoPlayPronunciation: boolean;
}
/**
 * Achievement earned by user
 */
export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: string;
    earnedAt: Date;
    progress?: number;
    target?: number;
}
/**
 * User registration data
 */
export interface RegisterData {
    username: string;
    password: string;
    email?: string;
    dailyGoal: number;
    targetExamDate?: Date;
}
/**
 * User login data
 */
export interface LoginData {
    username: string;
    password: string;
    rememberMe: boolean;
}
/**
 * User session
 */
export interface UserSession {
    userId: string;
    token: string;
    expiresAt: Date;
    deviceInfo: DeviceInfo;
}
/**
 * Device information
 */
export interface DeviceInfo {
    platform: string;
    osVersion: string;
    appVersion: string;
    deviceId: string;
}
/**
 * Points transaction record
 */
export interface PointsTransaction {
    id: string;
    userId: string;
    amount: number;
    type: 'earn' | 'spend';
    category: PointsCategory;
    description: string;
    timestamp: Date;
    referenceId?: string;
}
/**
 * Points earning/spending categories
 */
export declare const PointsCategory: {
    readonly WORD_CORRECT: "word_correct";
    readonly SENTENCE_CORRECT: "sentence_correct";
    readonly DAILY_STREAK: "daily_streak";
    readonly PET_HAPPY: "pet_happy";
    readonly LEVEL_UP: "level_up";
    readonly ACHIEVEMENT: "achievement";
    readonly PET_SKIN: "pet_skin";
    readonly BACKGROUND: "background";
    readonly LEARNING_BOOST: "learning_boost";
    readonly MUSIC_UNLOCK: "music_unlock";
};
export type PointsCategory = (typeof PointsCategory)[keyof typeof PointsCategory];
/**
 * Shop item for points redemption
 */
export interface ShopItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: ShopCategory;
    icon: string;
    effect?: ShopItemEffect;
    unlockRequirement?: {
        minLevel?: number;
        minStreak?: number;
        requiredAchievement?: string;
    };
}
/**
 * Shop categories
 */
export declare const ShopCategory: {
    readonly PET_SKINS: "pet_skins";
    readonly BACKGROUNDS: "backgrounds";
    readonly BOOSTERS: "boosters";
    readonly MUSIC: "music";
    readonly AVATARS: "avatars";
};
export type ShopCategory = (typeof ShopCategory)[keyof typeof ShopCategory];
/**
 * Effect of a shop item
 */
export interface ShopItemEffect {
    type: 'pet_skin' | 'background' | 'booster' | 'music' | 'avatar';
    durationHours?: number;
    value: any;
}
/**
 * User's inventory item
 */
export interface InventoryItem {
    shopItemId: string;
    purchasedAt: Date;
    expiresAt?: Date;
    isActive: boolean;
    remainingUses?: number;
}
//# sourceMappingURL=userTypes.d.ts.map