/**
 * PET B1 Complete Vocabulary - 4400+ Words
 * Main file importing all topic-specific vocabulary
 */
import { WordCard } from 'shared-types';
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