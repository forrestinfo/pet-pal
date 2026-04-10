/**
 * Spaced Repetition Algorithm for PET Pal
 * Simplified Ebbinghaus-style scheduling
 */
import { ReviewResult, WordCard, SentenceCard } from 'shared-types';
/**
 * Process a review for a word or sentence card
 * @param card The card being reviewed
 * @param success Whether the user recalled correctly
 * @param responseTimeMs How long the user took to respond
 * @returns Updated review result with new state
 */
export declare function processReview(card: WordCard | SentenceCard, success: boolean, responseTimeMs: number): ReviewResult;
/**
 * Get cards due for review
 * @param cards Array of word or sentence cards
 * @param maxItems Maximum number of items to return (for daily limits)
 * @returns Cards that are due for review, sorted by urgency
 */
export declare function getDueCards(cards: (WordCard | SentenceCard)[], maxItems?: number): (WordCard | SentenceCard)[];
/**
 * Calculate daily review load based on user performance
 * @param recentAccuracy Accuracy over last 7 sessions (0-100)
 * @param backlogCount Number of overdue cards
 * @returns Recommended new items for today
 */
export declare function calculateDailyLoad(recentAccuracy: number, backlogCount: number): {
    newWords: number;
    newSentences: number;
    maxReviews: number;
};
/**
 * Initialize a new card with default values
 * @param cardData Partial card data (without memory fields)
 * @returns Complete card with initialized memory state
 */
export declare function initializeCard<T extends WordCard | SentenceCard>(cardData: Omit<T, 'id' | 'memoryState' | 'intervalDays' | 'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 'lastReviewedAt' | 'createdAt' | 'updatedAt'>): Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
//# sourceMappingURL=algorithm.d.ts.map