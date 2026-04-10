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
  avatar?: string;           // URL or data URI for avatar image
  createdAt: Date;
  lastLogin: Date;
  streakDays: number;        // Consecutive learning days
  totalPoints: number;       // Total accumulated points
  unlockedPets: string[];    // IDs of unlocked pets
  currentPet: string;        // Currently active pet ID
  studyStats: StudyStats;
  preferences: UserPreferences;
  achievements: Achievement[];
}

/**
 * User study statistics
 */
export interface StudyStats {
  totalWords: number;        // Total words studied
  totalSentences: number;    // Total sentences studied
  totalStudyTime: number;    // Total study time in minutes
  totalSessions: number;     // Total learning sessions
  averageAccuracy: number;   // Overall accuracy percentage (0-100)
  dailyGoal: number;         // Daily word/sentence target
  lastStudyDate?: Date;      // Last study date for streak calculation
}

/**
 * User preferences
 */
export interface UserPreferences {
  theme: 'light' | 'dark' | 'melody';
  soundEnabled: boolean;
  musicEnabled: boolean;
  notificationsEnabled: boolean;
  dailyReminderTime?: string;  // HH:MM format
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
  icon: string;              // Emoji or icon
  earnedAt: Date;
  progress?: number;         // For progressive achievements
  target?: number;           // Target value for progress
}

/**
 * User registration data
 */
export interface RegisterData {
  username: string;
  password: string;
  email?: string;
  dailyGoal: number;         // Words/sentences per day
  targetExamDate?: Date;     // PET exam target date
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
  referenceId?: string;      // Related item ID (word, sentence, etc.)
}

/**
 * Points earning/spending categories
 */
export enum PointsCategory {
  WORD_CORRECT = 'word_correct',
  SENTENCE_CORRECT = 'sentence_correct',
  DAILY_STREAK = 'daily_streak',
  PET_HAPPY = 'pet_happy',
  LEVEL_UP = 'level_up',
  ACHIEVEMENT = 'achievement',
  PET_SKIN = 'pet_skin',
  BACKGROUND = 'background',
  LEARNING_BOOST = 'learning_boost',
  MUSIC_UNLOCK = 'music_unlock',
}

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
export enum ShopCategory {
  PET_SKINS = 'pet_skins',
  BACKGROUNDS = 'backgrounds',
  BOOSTERS = 'boosters',
  MUSIC = 'music',
  AVATARS = 'avatars',
}

/**
 * Effect of a shop item
 */
export interface ShopItemEffect {
  type: 'pet_skin' | 'background' | 'booster' | 'music' | 'avatar';
  durationHours?: number;    // For temporary boosters
  value: any;                // Effect-specific data
}

/**
 * User's inventory item
 */
export interface InventoryItem {
  shopItemId: string;
  purchasedAt: Date;
  expiresAt?: Date;          // For temporary items
  isActive: boolean;
  remainingUses?: number;    // For consumable items
}