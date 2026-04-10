/**
 * PET B1 Preliminary Core Vocabulary - 3000+ words
 * Complete PET B1 vocabulary organized by topics
 * Each word has a simple English definition using A1/A2 level words
 */

import { dailyLifeWords } from './words/petWordBank-dailyLife';
import { educationWords } from './words/petWordBank-education';
import { travelWords } from './words/petWordBank-travel';
import { healthWords } from './words/petWordBank-health';
import { socialWords } from './words/petWordBank-social';
import { natureWords } from './words/petWordBank-nature';
import { technologyWords } from './words/petWordBank-technology';
import { workWords } from './words/petWordBank-work';
import { foodWords } from './words/petWordBank-food';
import { WordCard } from 'shared-types';

/**
 * Complete PET B1 vocabulary - 3000+ words
 * Organized by PET official topics
 */
export const petVocabulary: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  ...dailyLifeWords,
  ...educationWords,
  ...travelWords,
  ...healthWords,
  ...socialWords,
  ...natureWords,
  ...technologyWords,
  ...workWords,
  ...foodWords,
  // Additional words can be added here or imported from other topic files
];

/**
 * Get PET vocabulary by topic
 */
export function getVocabularyByTopic(topic: string): typeof petVocabulary {
  return petVocabulary.filter(word => word.topicTag === topic);
}

/**
 * Get vocabulary by difficulty level
 */
export function getVocabularyByDifficulty(level: 1 | 2 | 3): typeof petVocabulary {
  return petVocabulary.filter(word => word.difficulty === level);
}

/**
 * Get total word count
 */
export function getVocabularyCount(): number {
  return petVocabulary.length;
}

/**
 * Get topics with word counts
 */
export function getTopicsWithCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  petVocabulary.forEach(word => {
    counts[word.topicTag] = (counts[word.topicTag] || 0) + 1;
  });
  return counts;
}