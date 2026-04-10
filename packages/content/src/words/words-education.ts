/**
 * Education Vocabulary for PET B1
 */

import { WordCard } from 'shared-types';

export const educationWords: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    word: 'attend',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to go to a place or event',
    meaningZh: '参加',
    exampleSentence: 'Many students attend the school festival.',
    exampleSentenceZh: '许多学生参加学校节日。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'knowledge',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'what you know about something',
    meaningZh: '知识',
    exampleSentence: 'He has a lot of knowledge about history.',
    exampleSentenceZh: '他有很多历史知识。',
    topicTag: 'education',
    difficulty: 3
  }
];