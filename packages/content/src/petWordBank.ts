/**
 * PET B1 Complete Vocabulary - 3000+ Words
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
import { foodWords } from './words/petWordBank-food';
import { cultureWords } from './words/petWordBank-culture';
import { sportWords } from './words/petWordBank-sport';
import { abstractWords } from './words/petWordBank-abstract';
import { shoppingWords } from './words/petWordBank-shopping';
import { familyWords } from './words/petWordBank-family';
import { weatherWords } from './words/petWordBank-weather';
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
  ...weatherWords,
  // Additional words can be added here or imported from other topic files
];
