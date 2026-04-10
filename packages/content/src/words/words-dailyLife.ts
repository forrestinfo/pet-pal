/**
 * Daily Life Vocabulary for PET B1
 */

import { WordCard } from 'shared-types';

export const dailyLifeWords: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    word: 'accept',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to say yes to something',
    meaningZh: '接受',
    exampleSentence: 'I accept your invitation to the party.',
    exampleSentenceZh: '我接受你对派对的邀请。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'borrow',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to take something and give it back later',
    meaningZh: '借',
    exampleSentence: 'Can I borrow your pen for a moment?',
    exampleSentenceZh: '我可以借你的笔一会儿吗？',
    topicTag: 'daily life',
    difficulty: 1
  }
];