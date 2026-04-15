/**
 * PET B1 Complete Vocabulary - Crawled 3000+ Words
 * Main file importing the latest scraped word banks only
 */
import { WordCard } from 'shared-types';
export declare const petVocabulary: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 'lastReviewedAt' | 'createdAt' | 'updatedAt'>[];
export declare function getVocabularyByTopic(topic: string): typeof petVocabulary;
export declare function getVocabularyByDifficulty(level: 1 | 2 | 3): typeof petVocabulary;
//# sourceMappingURL=petWordBank.d.ts.map