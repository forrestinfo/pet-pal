/**
 * PET B1 Preliminary Core Sentences
 * Sentences for writing, speaking, and functional use
 */
import { SentenceCard } from 'shared-types';
/**
 * Sample PET sentences categorized by function
 */
export declare const petSentences: Omit<SentenceCard, 'id' | 'memoryState' | 'intervalDays' | 'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 'lastReviewedAt' | 'createdAt' | 'updatedAt'>[];
/**
 * Get sentences by function tag
 */
export declare function getSentencesByFunction(funcTag: string): typeof petSentences;
/**
 * Get sentences by difficulty level
 */
export declare function getSentencesByDifficulty(level: 1 | 2 | 3): typeof petSentences;
/**
 * Get sentences by topic
 */
export declare function getSentencesByTopic(topic: string): typeof petSentences;
//# sourceMappingURL=petSentenceBank.d.ts.map