/**
 * Points System for PET Pal
 * Handles earning and spending of points in the learning economy
 */

import { PointsCategory, PointsTransaction } from 'shared-types/src/userTypes';

/**
 * Point earning rules
 */
export const POINT_RULES: Record<PointsCategory, {
  base: number;
  multiplier: number;
  description: string;
}> = {
  [PointsCategory.WORD_CORRECT]: {
    base: 10,
    multiplier: 1.0,
    description: 'Correct word answer'
  },
  [PointsCategory.SENTENCE_CORRECT]: {
    base: 15,
    multiplier: 1.0,
    description: 'Correct sentence answer'
  },
  [PointsCategory.DAILY_STREAK]: {
    base: 50,
    multiplier: 1.0,
    description: 'Daily learning streak'
  },
  [PointsCategory.PET_HAPPY]: {
    base: 20,
    multiplier: 1.0,
    description: 'Pet is happy'
  },
  [PointsCategory.LEVEL_UP]: {
    base: 100,
    multiplier: 1.0,
    description: 'Level up achievement'
  },
  [PointsCategory.ACHIEVEMENT]: {
    base: 200,
    multiplier: 1.0,
    description: 'Achievement unlocked'
  },
  // Spending categories have zero base points
  [PointsCategory.PET_SKIN]: {
    base: 0,
    multiplier: 1.0,
    description: 'Pet skin purchase'
  },
  [PointsCategory.BACKGROUND]: {
    base: 0,
    multiplier: 1.0,
    description: 'Background purchase'
  },
  [PointsCategory.LEARNING_BOOST]: {
    base: 0,
    multiplier: 1.0,
    description: 'Learning boost purchase'
  },
  [PointsCategory.MUSIC_UNLOCK]: {
    base: 0,
    multiplier: 1.0,
    description: 'Music unlock purchase'
  },
} as const;

/**
 * Shop items available for purchase with points
 */
export const SHOP_ITEMS = {
  // Pet Skins
  'pet_skin_melody_classic': {
    id: 'pet_skin_melody_classic',
    name: 'Classic Melody Skin',
    description: '美乐蒂经典粉色皮肤',
    price: 500,
    category: 'pet_skins' as const,
    icon: '🎵',
    effect: {
      type: 'pet_skin' as const,
      value: { skin: 'classic', color: '#E91E63' }
    }
  },
  'pet_skin_melody_golden': {
    id: 'pet_skin_melody_golden',
    name: 'Golden Melody Skin',
    description: '美乐蒂金色限量皮肤',
    price: 1500,
    category: 'pet_skins' as const,
    icon: '🌟',
    effect: {
      type: 'pet_skin' as const,
      value: { skin: 'golden', color: '#FFD700' }
    },
    unlockRequirement: {
      minLevel: 10,
      minStreak: 30
    }
  },
  
  // Backgrounds
  'background_melody_park': {
    id: 'background_melody_park',
    name: 'Melody Park',
    description: '美乐蒂音乐公园主题背景',
    price: 1000,
    category: 'backgrounds' as const,
    icon: '🏞️',
    effect: {
      type: 'background' as const,
      value: { backgroundId: 'melody_park', theme: 'melody' }
    }
  },
  'background_starry_night': {
    id: 'background_starry_night',
    name: 'Starry Night',
    description: '星空美乐蒂背景',
    price: 1200,
    category: 'backgrounds' as const,
    icon: '🌌',
    effect: {
      type: 'background' as const,
      value: { backgroundId: 'starry_night', theme: 'dark' }
    }
  },
  
  // Boosters
  'booster_double_points': {
    id: 'booster_double_points',
    name: 'Double Points Booster',
    description: '24小时内获得双倍积分',
    price: 300,
    category: 'boosters' as const,
    icon: '⚡',
    effect: {
      type: 'booster' as const,
      durationHours: 24,
      value: { multiplier: 2.0 }
    }
  },
  'booster_learning_boost': {
    id: 'booster_learning_boost',
    name: 'Learning Boost',
    description: '提高记忆效率50%，持续12小时',
    price: 400,
    category: 'boosters' as const,
    icon: '🧠',
    effect: {
      type: 'booster' as const,
      durationHours: 12,
      value: { efficiencyBoost: 1.5 }
    }
  },
  
  // Music
  'music_melody_theme': {
    id: 'music_melody_theme',
    name: '美乐蒂主题音乐',
    description: '解锁美乐蒂主题背景音乐',
    price: 200,
    category: 'music' as const,
    icon: '🎶',
    effect: {
      type: 'music' as const,
      value: { musicId: 'melody_theme', unlocked: true }
    }
  },
  'music_victory_fanfare': {
    id: 'music_victory_fanfare',
    name: '胜利进行曲',
    description: '解锁成就庆祝音乐',
    price: 300,
    category: 'music' as const,
    icon: '🎺',
    effect: {
      type: 'music' as const,
      value: { musicId: 'victory_fanfare', unlocked: true }
    }
  },
  
  // Avatars
  'avatar_melody_cute': {
    id: 'avatar_melody_cute',
    name: '可爱美乐蒂头像',
    description: '美乐蒂可爱风格头像',
    price: 250,
    category: 'avatars' as const,
    icon: '😊',
    effect: {
      type: 'avatar' as const,
      value: { avatarId: 'melody_cute' }
    }
  },
  'avatar_pet_master': {
    id: 'avatar_pet_master',
    name: '宠物大师头像',
    description: '解锁所有宠物后获得的专属头像',
    price: 1000,
    category: 'avatars' as const,
    icon: '👑',
    effect: {
      type: 'avatar' as const,
      value: { avatarId: 'pet_master' }
    },
    unlockRequirement: {
      requiredAchievement: 'all_pets_unlocked'
    }
  }
} as const;

/**
 * Calculate points earned for an action
 * @param category Points category
 * @param multipliers Additional multipliers (pet mood, booster, etc.)
 * @returns Calculated points
 */
export function calculatePoints(
  category: PointsCategory,
  multipliers: {
    petMoodMultiplier?: number;  // 1.0-1.5 based on pet mood
    boosterMultiplier?: number;  // From active boosters
    streakBonus?: number;        // Bonus for long streaks
  } = {}
): number {
  const rule = POINT_RULES[category];
  if (!rule) {
    console.warn(`No point rule found for category: ${category}`);
    return 0;
  }
  
  let points = rule.base;
  
  // Apply multipliers
  if (multipliers.petMoodMultiplier) {
    points *= multipliers.petMoodMultiplier;
  }
  
  if (multipliers.boosterMultiplier) {
    points *= multipliers.boosterMultiplier;
  }
  
  if (multipliers.streakBonus) {
    points += rule.base * multipliers.streakBonus;
  }
  
  // Round to nearest whole number
  return Math.round(points);
}

/**
 * Check if user can purchase an item
 * @param itemId Shop item ID
 * @param userPoints User's current points
 * @param userStats User statistics for unlock requirements
 * @returns Whether purchase is allowed
 */
export function canPurchaseItem(
  itemId: string,
  userPoints: number,
  userStats: {
    level?: number;
    streakDays?: number;
    achievements?: string[];
  } = {}
): { canPurchase: boolean; reason?: string } {
  const item = SHOP_ITEMS[itemId as keyof typeof SHOP_ITEMS];
  if (!item) {
    return { canPurchase: false, reason: 'Item not found' };
  }
  
  // Check points
  if (userPoints < item.price) {
    return { canPurchase: false, reason: 'Insufficient points' };
  }
  
  // Check unlock requirements
  const unlockReq = (item as any).unlockRequirement;
  if (unlockReq) {
    const { minLevel, minStreak, requiredAchievement } = unlockReq;
    
    if (minLevel && (userStats.level || 0) < minLevel) {
      return { 
        canPurchase: false, 
        reason: `Requires level ${minLevel}` 
      };
    }
    
    if (minStreak && (userStats.streakDays || 0) < minStreak) {
      return { 
        canPurchase: false, 
        reason: `Requires ${minStreak} day streak` 
      };
    }
    
    if (requiredAchievement && 
        !(userStats.achievements || []).includes(requiredAchievement)) {
      return { 
        canPurchase: false, 
        reason: `Requires achievement: ${requiredAchievement}` 
      };
    }
  }
  
  return { canPurchase: true };
}

/**
 * Get all shop items in a category
 * @param category Shop category
 * @returns Array of shop items
 */
export function getShopItemsByCategory(category: string) {
  return Object.values(SHOP_ITEMS).filter(item => item.category === category);
}

/**
 * Get affordable shop items for user
 * @param userPoints User's current points
 * @param userStats User statistics
 * @returns Array of affordable shop items
 */
export function getAffordableItems(
  userPoints: number,
  userStats: {
    level?: number;
    streakDays?: number;
    achievements?: string[];
  } = {}
) {
  return Object.values(SHOP_ITEMS).filter(item => {
    const { canPurchase } = canPurchaseItem(item.id, userPoints, userStats);
    return canPurchase;
  });
}

/**
 * Create a points transaction record
 * @param userId User ID
 * @param amount Points amount (positive for earn, negative for spend)
 * @param category Points category
 * @param description Transaction description
 * @param referenceId Optional reference ID
 * @returns Points transaction object
 */
export function createTransaction(
  userId: string,
  amount: number,
  category: PointsCategory,
  description: string,
  referenceId?: string
): PointsTransaction {
  const transaction: PointsTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    type: amount >= 0 ? 'earn' : 'spend',
    category,
    description,
    timestamp: new Date()
  };
  
  if (referenceId) {
    transaction.referenceId = referenceId;
  }
  
  return transaction;
}