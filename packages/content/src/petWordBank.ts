/**
 * PET B1 Complete Vocabulary - 4400+ Words
 * Main file importing all topic-specific vocabulary
 */

import { dailyLifeWords } from './words/petWordBank-dailyLife';
import { educationWords } from './words/petWordBank-education';
import { travelWords } from './words/petWordBank-travel';
import { healthWords } from './words/petWordBank-health';
import { socialWords } from './words/petWordBank-social';
import { natureWords } from './words/petWordBank-nature';
import { technologyWords } from './words/petWordBank-technology';
import { workWords } from './words/petWordBank-work';
import { foodWords } from './words/words-food';
import { cultureWords } from './words/words-culture';
import { sportWords } from './words/words-sport';
import { abstractWords } from './words/words-abstract';
import { shoppingWords } from './words/words-shopping';
import { familyWords } from './words/words-family';
import { adjAdvWords } from './words/words-adjAdv';
import { bodyWords } from './words/words-body';
import { communicationWords } from './words/words-communication';
import { emotionsWords } from './words/words-emotions';
import { phrasesWords } from './words/words-phrases';
import { placeWords } from './words/words-place';
import { timeWords } from './words/words-time';
import { transportWords } from './words/words-transport';
import { verbsWords } from './words/words-verbs';
import { WordCard } from 'shared-types';

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
  ...cultureWords,
  ...sportWords,
  ...abstractWords,
  ...shoppingWords,
  ...familyWords,
  ...adjAdvWords,
  ...bodyWords,
  ...communicationWords,
  ...emotionsWords,
  ...phrasesWords,
  ...placeWords,
  ...timeWords,
  ...transportWords,
  ...verbsWords,
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
