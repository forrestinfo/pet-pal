/**
 * PET Pal - Shared Types
 * Core data structures for the PET Pal learning app
 */

/**
 * Memory state for spaced repetition
 */
export const MemoryState = {
  New: 'new',
  Learning: 'learning',
  Review: 'review',
  Strong: 'strong',
  Mastered: 'mastered',
  Rescue: 'rescue',
} as const;
export type MemoryState = (typeof MemoryState)[keyof typeof MemoryState];

/**
 * Word card for PET vocabulary
 */
export interface WordCard {
  id: string;
  word: string;
  phonetic?: string;
  partOfSpeech: string;
  simpleDefinitionEn: string;  // A1/A2 words explaining B1 word
  meaningZh: string;           // Short Chinese meaning
  exampleSentence: string;
  exampleSentenceZh: string;
  topicTag: string;            // PET topic category
  difficulty: number;          // 1-3 scale
  memoryState: MemoryState;
  intervalDays: number;        // Next review interval in days
  nextReviewAt: Date;          // When to review next
  lapseCount: number;          // Times answered wrong
  correctCount: number;        // Times answered correctly
  wrongCount: number;          // Times answered wrong total
  lastReviewedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Sentence card for PET expressions
 */
export interface SentenceCard {
  id: string;
  sentence: string;
  sentenceZh: string;
  chunkList: string[];         // Break down into learnable chunks
  keyPhrases: string[];        // Important phrases in the sentence
  functionTag: string;         // email, opinion, suggestion, description, etc.
  topicTag: string;            // PET topic category
  difficulty: number;          // 1-3 scale
  memoryState: MemoryState;
  intervalDays: number;
  nextReviewAt: Date;
  lapseCount: number;
  correctCount: number;
  wrongCount: number;
  lastReviewedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Pet state for gamification
 */
export interface PetState {
  petType: string;             // e.g., 'dog', 'cat', 'bird'
  level: number;
  food: number;                // Earned by completing daily tasks
  energy: number;              // Earned by consecutive reviews
  skillStar: number;           // Earned by mastering difficult items
  mood: number;                // Based on daily completion rate
  unlockedActions: string[];   // Pet animations/actions unlocked
  unlockedSkins: string[];     // Pet appearance options
  streakDays: number;          // Consecutive learning days
  lastFedAt?: Date;
  lastPlayedAt?: Date;
  updatedAt: Date;
}

/**
 * Study session record
 */
export interface StudySession {
  sessionId: string;
  startTime: Date;
  endTime: Date;
  newWordCount: number;
  reviewWordCount: number;
  newSentenceCount: number;
  reviewSentenceCount: number;
  accuracy: number;            // 0-100 percentage
  rewardEarned: number;        // Food/energy/stars earned
}

/**
 * Daily task configuration
 */
export interface DailyTask {
  date: string;                // YYYY-MM-DD
  targetNewWords: number;      // Default: 10
  targetNewSentences: number;  // Default: 5
  maxReviewItems: number;      // Default: 40-60
  completed: boolean;
  completedAt?: Date;
}

/**
 * User progress statistics
 */
export interface UserProgress {
  totalWordsSeen: number;
  wordsRecognized: number;     // Can recognize meaning
  wordsRecalled: number;       // Can recall from memory
  totalSentencesSeen: number;
  sentencesMastered: number;
  streakDays: number;
  averageAccuracy: number;
  weakestTopic?: string;
  strongestTopic?: string;
}

/**
 * Difficulty level for content
 */
export const Difficulty = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
} as const;
export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty];

/**
 * Review result from spaced repetition
 */
export interface ReviewResult {
  cardId: string;
  cardType: 'word' | 'sentence';
  success: boolean;
  responseTimeMs: number;
  newIntervalDays: number;
  newMemoryState: MemoryState;
  nextReviewAt: Date;
}