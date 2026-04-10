/**
 * PET B1 Preliminary Core Vocabulary
 * Each word has a simple English definition using A1/A2 level words
 */
import { WordCard } from 'shared-types';
/**
 * PET vocabulary with simple English definitions - 3000+ words
 * Organized by PET official topics
 */
export declare const petVocabulary: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 'lastReviewedAt' | 'createdAt' | 'updatedAt'>[];
/**
 * Get PET vocabulary by topic
 */
export declare function getVocabularyByTopic(topic: string): typeof petVocabulary;
/**
 * Get vocabulary by difficulty level
 */
export declare function getVocabularyByDifficulty(level: 1 | 2 | 3): typeof petVocabulary;
//# sourceMappingURL=petWordBank.d.ts.map