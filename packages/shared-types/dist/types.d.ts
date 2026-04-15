/**
 * PET Pal - Shared Types
 * Core data structures for the PET Pal learning app
 */
/**
 * Memory state for spaced repetition
 */
export declare enum MemoryState {
    New = "new",
    Learning = "learning",
    Review = "review",
    Strong = "strong",
    Mastered = "mastered",
    Rescue = "rescue"
}
/**
 * Word card for PET vocabulary
 */
export interface WordCard {
    id: string;
    word: string;
    phonetic?: string;
    partOfSpeech: string;
    simpleDefinitionEn: string;
    meaningZh: string;
    exampleSentence: string;
    exampleSentenceZh: string;
    topicTag: string;
    difficulty: number;
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
 * Sentence card for PET expressions
 */
export interface SentenceCard {
    id: string;
    sentence: string;
    sentenceZh: string;
    chunkList: string[];
    keyPhrases: string[];
    functionTag: string;
    topicTag: string;
    difficulty: number;
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
    petType: string;
    level: number;
    food: number;
    energy: number;
    skillStar: number;
    mood: number;
    unlockedActions: string[];
    unlockedSkins: string[];
    streakDays: number;
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
    accuracy: number;
    rewardEarned: number;
}
/**
 * Daily task configuration
 */
export interface DailyTask {
    date: string;
    targetNewWords: number;
    targetNewSentences: number;
    maxReviewItems: number;
    completed: boolean;
    completedAt?: Date;
}
/**
 * User progress statistics
 */
export interface UserProgress {
    totalWordsSeen: number;
    wordsRecognized: number;
    wordsRecalled: number;
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
export declare enum Difficulty {
    Easy = 1,
    Medium = 2,
    Hard = 3
}
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
//# sourceMappingURL=types.d.ts.map