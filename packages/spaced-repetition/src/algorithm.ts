/**
 * Spaced Repetition Algorithm for PET Pal
 * Simplified Ebbinghaus-style scheduling
 */

import { MemoryState, ReviewResult, WordCard, SentenceCard } from 'shared-types';

/**
 * Review intervals in days for successful recalls
 * Based on PRD: 10min -> 1d -> 3d -> 7d -> 14d -> 30d -> 60d
 */
const SUCCESS_INTERVALS = [
  10 / (24 * 60),    // 10 minutes in days
  1,                 // 1 day
  3,                 // 3 days
  7,                 // 7 days
  14,                // 14 days
  30,                // 30 days
  60                 // 60 days
];

/**
 * Maximum interval for mastered items (days)
 */
const MAX_INTERVAL = 365;

/**
 * Process a review for a word or sentence card
 * @param card The card being reviewed
 * @param success Whether the user recalled correctly
 * @param responseTimeMs How long the user took to respond
 * @returns Updated review result with new state
 */
export function processReview(
  card: WordCard | SentenceCard,
  success: boolean,
  responseTimeMs: number
): ReviewResult {
  const now = new Date();
  const cardType = 'exampleSentence' in card ? 'word' : 'sentence';
  
  let newMemoryState = card.memoryState;
  let newIntervalDays = card.intervalDays;
  let lapseCount = card.lapseCount;
  let correctCount = card.correctCount;
  let wrongCount = card.wrongCount;

  if (success) {
    // Correct recall
    correctCount++;
    wrongCount = Math.max(0, wrongCount - 0.5); // Reduce wrong count slightly
    
    // Determine next interval based on current state
    switch (card.memoryState) {
      case MemoryState.New:
        // First correct recall: move to Learning with 10min interval
        newMemoryState = MemoryState.Learning;
        newIntervalDays = SUCCESS_INTERVALS[0]!;
        break;
        
      case MemoryState.Learning:
        // Second correct recall: move to Review with 1 day interval
        newMemoryState = MemoryState.Review;
        newIntervalDays = SUCCESS_INTERVALS[1]!;
        break;
        
      case MemoryState.Review:
        // Progress through review intervals
        const currentIndex = SUCCESS_INTERVALS.findIndex(interval => 
          Math.abs(interval - card.intervalDays) < 0.1
        );
        
        if (currentIndex >= 0 && currentIndex < SUCCESS_INTERVALS.length - 1) {
          // Move to next interval
          newIntervalDays = SUCCESS_INTERVALS[currentIndex + 1]!;
        } else if (currentIndex === SUCCESS_INTERVALS.length - 1) {
          // Reached max standard interval, move to Strong
          newMemoryState = MemoryState.Strong;
          newIntervalDays = Math.min(card.intervalDays * 1.5, MAX_INTERVAL);
        } else {
          // Not in standard intervals, increase by 50%
          newIntervalDays = Math.min(card.intervalDays * 1.5, MAX_INTERVAL);
        }
        
        // Check if ready for Mastered state
        if (newIntervalDays >= 60 && correctCount >= 5 && lapseCount <= 1) {
          newMemoryState = MemoryState.Mastered;
        }
        break;
        
      case MemoryState.Strong:
        // Already strong, increase interval further
        newIntervalDays = Math.min(card.intervalDays * 1.5, MAX_INTERVAL);
        if (newIntervalDays >= 180 && lapseCount === 0) {
          newMemoryState = MemoryState.Mastered;
        }
        break;
        
      case MemoryState.Mastered:
        // Maintain mastered state with gradual interval increase
        newIntervalDays = Math.min(card.intervalDays * 1.2, MAX_INTERVAL);
        break;
        
      case MemoryState.Rescue:
        // Success after being in rescue: back to Learning
        newMemoryState = MemoryState.Learning;
        newIntervalDays = SUCCESS_INTERVALS[0]!;
        lapseCount = Math.max(0, lapseCount - 1);
        break;
    }
  } else {
    // Incorrect recall
    wrongCount++;
    lapseCount++;
    
    // Handle wrong answers based on current state
    switch (card.memoryState) {
      case MemoryState.New:
        // Stay in New but mark for immediate review
        newIntervalDays = 10 / (24 * 60); // 10 minutes
        break;
        
      case MemoryState.Learning:
      case MemoryState.Review:
        // Move back one interval level or to Rescue if multiple failures
        if (lapseCount >= 3) {
          newMemoryState = MemoryState.Rescue;
          newIntervalDays = 10 / (24 * 60); // 10 minutes
        } else {
          // Find current interval and go back one step
          const currentIndex = SUCCESS_INTERVALS.findIndex(interval => 
            Math.abs(interval - card.intervalDays) < 0.1
          );
          
          if (currentIndex > 0) {
            newIntervalDays = SUCCESS_INTERVALS[currentIndex - 1]!;
          } else {
            newIntervalDays = SUCCESS_INTERVALS[0]!;
          }
          
          // If in Review and failed, move back to Learning
          if (card.memoryState === MemoryState.Review) {
            newMemoryState = MemoryState.Learning;
          }
        }
        break;
        
      case MemoryState.Strong:
      case MemoryState.Mastered:
        // Significant failure: move back to Review
        newMemoryState = MemoryState.Review;
        newIntervalDays = SUCCESS_INTERVALS[2]!; // 3 days
        break;
        
      case MemoryState.Rescue:
        // Still failing in rescue: keep short interval
        newIntervalDays = 10 / (24 * 60); // 10 minutes
        break;
    }
  }

  // Calculate next review time
  const nextReviewAt = new Date(now.getTime() + newIntervalDays * 24 * 60 * 60 * 1000);

  return {
    cardId: card.id,
    cardType,
    success,
    responseTimeMs,
    newIntervalDays,
    newMemoryState,
    nextReviewAt
  };
}

/**
 * Get cards due for review
 * @param cards Array of word or sentence cards
 * @param maxItems Maximum number of items to return (for daily limits)
 * @returns Cards that are due for review, sorted by urgency
 */
export function getDueCards(
  cards: (WordCard | SentenceCard)[],
  maxItems: number = 50
): (WordCard | SentenceCard)[] {
  const now = new Date();
  
  return cards
    .filter(card => {
      // Card is due if nextReviewAt is in the past
      return card.nextReviewAt <= now;
    })
    .sort((a, b) => {
      // Sort by:
      // 1. Rescue cards first
      // 2. Newer memory states (Learning before Review)
      // 3. How overdue they are (most overdue first)
      
      if (a.memoryState === MemoryState.Rescue && b.memoryState !== MemoryState.Rescue) return -1;
      if (b.memoryState === MemoryState.Rescue && a.memoryState !== MemoryState.Rescue) return 1;
      
      const statePriority = {
        [MemoryState.Rescue]: 0,
        [MemoryState.New]: 1,
        [MemoryState.Learning]: 2,
        [MemoryState.Review]: 3,
        [MemoryState.Strong]: 4,
        [MemoryState.Mastered]: 5
      };
      
      if (statePriority[a.memoryState] !== statePriority[b.memoryState]) {
        return statePriority[a.memoryState] - statePriority[b.memoryState];
      }
      
      // Most overdue first
      return a.nextReviewAt.getTime() - b.nextReviewAt.getTime();
    })
    .slice(0, maxItems);
}

/**
 * Calculate daily review load based on user performance
 * @param recentAccuracy Accuracy over last 7 sessions (0-100)
 * @param backlogCount Number of overdue cards
 * @returns Recommended new items for today
 */
export function calculateDailyLoad(
  recentAccuracy: number,
  backlogCount: number
): { newWords: number; newSentences: number; maxReviews: number } {
  // Base values from PRD
  let newWords = 10;
  let newSentences = 5;
  let maxReviews = 50;
  
  // Adjust based on accuracy
  if (recentAccuracy < 60) {
    // Low accuracy: reduce new items
    newWords = Math.max(5, newWords - 3);
    newSentences = Math.max(2, newSentences - 2);
  } else if (recentAccuracy > 85) {
    // High accuracy: slightly increase new items
    newWords = Math.min(15, newWords + 2);
    newSentences = Math.min(8, newSentences + 1);
  }
  
  // Adjust based on backlog
  if (backlogCount > 30) {
    // Large backlog: reduce new items further
    newWords = Math.max(3, newWords - 2);
    newSentences = Math.max(1, newSentences - 1);
    maxReviews = Math.min(60, maxReviews + 10); // Allow more reviews
  } else if (backlogCount < 10) {
    // Small backlog: allow slightly more new items
    newWords = Math.min(12, newWords + 1);
    newSentences = Math.min(6, newSentences + 1);
  }
  
  return { newWords, newSentences, maxReviews };
}

/**
 * Initialize a new card with default values
 * @param cardData Partial card data (without memory fields)
 * @returns Complete card with initialized memory state
 */
export function initializeCard<T extends WordCard | SentenceCard>(
  cardData: Omit<T, 'id' | 'memoryState' | 'intervalDays' | 'nextReviewAt' | 
    'lapseCount' | 'correctCount' | 'wrongCount' | 'lastReviewedAt' | 'createdAt' | 'updatedAt'>
): Omit<T, 'id' | 'createdAt' | 'updatedAt'> {
  const now = new Date();
  
  return {
    ...cardData,
    memoryState: MemoryState.New,
    intervalDays: 0,
    nextReviewAt: now, // Review immediately
    lapseCount: 0,
    correctCount: 0,
    wrongCount: 0,
    lastReviewedAt: undefined
  } as Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
}