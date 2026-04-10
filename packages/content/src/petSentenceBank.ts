/**
 * PET B1 Preliminary Core Sentences
 * Sentences for writing, speaking, and functional use
 * 274+ sentences covering all PET exam functions
 */

import { SentenceCard } from 'shared-types';
import { emailSentences } from './sentences/sentences-email';
import { speakingSentences } from './sentences/sentences-speaking';
import { storyWritingSentences } from './sentences/sentences-storyWriting';
import { grammarSentences } from './sentences/sentences-grammarPatterns';
import { functionalSentences } from './sentences/sentences-functional';
import { comparisonSentences } from './sentences/sentences-comparison';
import { opinionSentences } from './sentences/sentences-opinion';

/**
 * PET sentences categorized by function - 274+ sentences
 */
export const petSentences: Omit<SentenceCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  ...emailSentences,
  ...speakingSentences,
  ...storyWritingSentences,
  ...grammarSentences,
  ...functionalSentences,
  ...comparisonSentences,
  ...opinionSentences,
];

/**
 * Get sentences by function tag
 */
export function getSentencesByFunction(funcTag: string): typeof petSentences {
  return petSentences.filter(sentence => sentence.functionTag === funcTag);
}

/**
 * Get sentences by difficulty level
 */
export function getSentencesByDifficulty(level: 1 | 2 | 3): typeof petSentences {
  return petSentences.filter(sentence => sentence.difficulty === level);
}

/**
 * Get sentences by topic
 */
export function getSentencesByTopic(topic: string): typeof petSentences {
  return petSentences.filter(sentence => sentence.topicTag === topic);
}