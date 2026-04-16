/**
 * PET B1 Complete Vocabulary - Crawled 3000+ Words
 * Main file importing the latest scraped word banks only
 */

import { ldoceWords } from './words/ldoceWordBank';
import { ldoceChineseWords } from './words/ldoceChinese';
import { WordCard } from 'shared-types';
import { EN_WORD_FREQ } from './wordFreq.en_50k';

const uniqueByWord = <T extends { word: string }>(items: T[]): T[] => {
  const map = new Map<string, T>();
  for (const item of items) {
    if (!map.has(item.word)) map.set(item.word, item);
  }
  return [...map.values()];
};

function getWordLen(w: string): number {
  // Count English letters a-z; ignore punctuation like "mr." "don't" etc.
  const letters = (w || '').toLowerCase().match(/[a-z]/g);
  const len = letters ? letters.length : (w || '').length;
  // Ensure we can do 2-letter bucket even if corpus has no 2-letter words.
  return Math.max(2, len);
}

function getFreq(w: string): number {
  const key = (w || '').toLowerCase();
  return (EN_WORD_FREQ as any)[key] || 0;
}

// 学习顺序：
// 1) 按难度递增（1→2→3）
// 2) 同难度内按字母数递增（2,3,4...）
// 3) 同长度内按使用频率递减（高频优先）
// 4) 再按字母序稳定排序
function sortByLearningOrder<T extends { word: string; difficulty?: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const da = a.difficulty || 2;
    const db = b.difficulty || 2;
    if (da !== db) return da - db;

    const la = getWordLen(a.word);
    const lb = getWordLen(b.word);
    if (la !== lb) return la - lb;

    const fa = getFreq(a.word);
    const fb = getFreq(b.word);
    if (fa !== fb) return fb - fa;

    return a.word.localeCompare(b.word);
  });
}

export const petVocabulary: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' |
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' |
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = sortByLearningOrder(uniqueByWord([
  ...ldoceChineseWords,
  ...ldoceWords,
]));

export function getVocabularyByTopic(topic: string): typeof petVocabulary {
  return petVocabulary.filter(word => word.topicTag === topic);
}

export function getVocabularyByDifficulty(level: 1 | 2 | 3): typeof petVocabulary {
  return petVocabulary.filter(word => word.difficulty === level);
}
