/**
 * PET B1 Complete Vocabulary - Crawled 3000+ Words
 * Main file importing the latest scraped word banks only
 */

import { ldoceWords } from './words/ldoceWordBank';
import { ldoceChineseWords } from './words/ldoceChinese';
import { WordCard } from 'shared-types';

const uniqueByWord = <T extends { word: string }>(items: T[]): T[] => {
  const map = new Map<string, T>();
  for (const item of items) {
    if (!map.has(item.word)) map.set(item.word, item);
  }
  return [...map.values()];
};

export const petVocabulary: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' |
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' |
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = uniqueByWord([
  ...ldoceChineseWords,
  ...ldoceWords,
]);

export function getVocabularyByTopic(topic: string): typeof petVocabulary {
  return petVocabulary.filter(word => word.topicTag === topic);
}

export function getVocabularyByDifficulty(level: 1 | 2 | 3): typeof petVocabulary {
  return petVocabulary.filter(word => word.difficulty === level);
}
