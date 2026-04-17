/**
 * PET Pal - Shared Types
 * Core data structures for the PET Pal learning app
 */
/**
 * Memory state for spaced repetition
 */
export declare const MemoryState: {
    readonly New: "new";
    readonly Learning: "learning";
    readonly Review: "review";
    readonly Strong: "strong";
    readonly Mastered: "mastered";
    readonly Rescue: "rescue";
};
export type MemoryState = (typeof MemoryState)[keyof typeof MemoryState];
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
    imageUrl?: string;
    localImageUrl?: string;
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
export declare const Difficulty: {
    readonly Easy: 1;
    readonly Medium: 2;
    readonly Hard: 3;
};
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
//# sourceMappingURL=types.d.ts.map