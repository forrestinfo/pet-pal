/**
 * PET B1 Preliminary Core Sentences
 * Sentences for writing, speaking, and functional use
 * 300+ sentences covering all PET exam functions
 */

import { emailSentences } from './sentences/sentences-email';
import { speakingSentences } from './sentences/sentences-speaking';
import { SentenceCard } from 'shared-types';

/**
 * PET sentences categorized by function - 300+ sentences
 */
export const petSentences: Omit<SentenceCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  ...emailSentences,
  ...speakingSentences,
  // ==================== EMAIL WRITING (邮件写作) ====================
  {
    sentence: 'Dear [Name],',
    sentenceZh: '亲爱的[姓名]：',
    chunkList: ['Dear', '[Name]', ','],
    keyPhrases: ['Dear'],
    functionTag: 'email_opening',
    topicTag: 'writing',
    difficulty: 1
  },
  {
    sentence: 'Thank you for your email.',
    sentenceZh: '感谢您的邮件。',
    chunkList: ['Thank you', 'for', 'your email', '.'],
    keyPhrases: ['Thank you', 'your email'],
    functionTag: 'email_response',
    topicTag: 'writing',
    difficulty: 1
  },
  {
    sentence: 'I am writing to ask for some information.',
    sentenceZh: '我写信是想询问一些信息。',
    chunkList: ['I am writing', 'to ask for', 'some information', '.'],
    keyPhrases: ['I am writing', 'ask for', 'information'],
    functionTag: 'email_purpose',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Could you please send me the details?',
    sentenceZh: '您能否将详细信息发给我？',
    chunkList: ['Could you', 'please', 'send me', 'the details', '?'],
    keyPhrases: ['Could you', 'send me', 'the details'],
    functionTag: 'email_request',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I look forward to hearing from you.',
    sentenceZh: '期待您的回复。',
    chunkList: ['I look forward to', 'hearing from you', '.'],
    keyPhrases: ['look forward to', 'hearing from you'],
    functionTag: 'email_closing',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Best wishes,',
    sentenceZh: '祝好，',
    chunkList: ['Best wishes', ','],
    keyPhrases: ['Best wishes'],
    functionTag: 'email_signature',
    topicTag: 'writing',
    difficulty: 1
  },

  // ==================== SPEAKING (口语) ====================
  {
    sentence: 'In my opinion, it would be better to go by train.',
    sentenceZh: '在我看来，坐火车去会更好。',
    chunkList: ['In my opinion', ',', 'it would be better', 'to go', 'by train', '.'],
    keyPhrases: ['In my opinion', 'it would be better', 'go by train'],
    functionTag: 'opinion',
    topicTag: 'speaking',
    difficulty: 3
  },
  {
    sentence: 'I think we should start earlier.',
    sentenceZh: '我认为我们应该早点开始。',
    chunkList: ['I think', 'we should', 'start earlier', '.'],
    keyPhrases: ['I think', 'should', 'start earlier'],
    functionTag: 'suggestion',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'What about going to the cinema instead?',
    sentenceZh: '改成去电影院怎么样？',
    chunkList: ['What about', 'going to', 'the cinema', 'instead', '?'],
    keyPhrases: ['What about', 'going to', 'the cinema'],
    functionTag: 'alternative_suggestion',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'That sounds like a good idea.',
    sentenceZh: '这听起来是个好主意。',
    chunkList: ['That sounds', 'like a good idea', '.'],
    keyPhrases: ['sounds like', 'good idea'],
    functionTag: 'agreement',
    topicTag: 'speaking',
    difficulty: 1
  },
  {
    sentence: 'The picture shows a family having a picnic.',
    sentenceZh: '图片显示一个家庭在野餐。',
    chunkList: ['The picture shows', 'a family', 'having a picnic', '.'],
    keyPhrases: ['The picture shows', 'a family', 'having a picnic'],
    functionTag: 'description',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'There are three people in the foreground.',
    sentenceZh: '前景中有三个人。',
    chunkList: ['There are', 'three people', 'in the foreground', '.'],
    keyPhrases: ['There are', 'three people', 'in the foreground'],
    functionTag: 'description',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'It looks like they are having fun.',
    sentenceZh: '看起来他们玩得很开心。',
    chunkList: ['It looks like', 'they are', 'having fun', '.'],
    keyPhrases: ['It looks like', 'having fun'],
    functionTag: 'interpretation',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'Travelling by plane is faster but more expensive.',
    sentenceZh: '坐飞机旅行更快但更贵。',
    chunkList: ['Travelling by plane', 'is faster', 'but', 'more expensive', '.'],
    keyPhrases: ['Travelling by plane', 'faster', 'more expensive'],
    functionTag: 'comparison',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Both options have advantages and disadvantages.',
    sentenceZh: '两种选择都有优缺点。',
    chunkList: ['Both options', 'have', 'advantages and disadvantages', '.'],
    keyPhrases: ['Both options', 'advantages and disadvantages'],
    functionTag: 'comparison',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Suddenly, I heard a strange noise.',
    sentenceZh: '突然，我听到一个奇怪的声音。',
    chunkList: ['Suddenly', ',', 'I heard', 'a strange noise', '.'],
    keyPhrases: ['Suddenly', 'heard', 'strange noise'],
    functionTag: 'story_progression',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'At first, I didn\'t know what to do.',
    sentenceZh: '起初，我不知道该做什么。',
    chunkList: ['At first', ',', 'I didn\'t know', 'what to do', '.'],
    keyPhrases: ['At first', 'didn\'t know', 'what to do'],
    functionTag: 'story_beginning',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'In the end, everything turned out well.',
    sentenceZh: '最后，一切都很顺利。',
    chunkList: ['In the end', ',', 'everything turned out', 'well', '.'],
    keyPhrases: ['In the end', 'turned out', 'well'],
    functionTag: 'story_conclusion',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I have been studying English for three years.',
    sentenceZh: '我学英语已经三年了。',
    chunkList: ['I have been studying', 'English', 'for three years', '.'],
    keyPhrases: ['have been studying', 'English', 'for three years'],
    functionTag: 'personal_info',
    topicTag: 'speaking',
    difficulty: 3
  },
  {
    sentence: 'My main hobby is playing the guitar.',
    sentenceZh: '我的主要爱好是弹吉他。',
    chunkList: ['My main hobby', 'is', 'playing the guitar', '.'],
    keyPhrases: ['My main hobby', 'playing the guitar'],
    functionTag: 'personal_info',
    topicTag: 'speaking',
    difficulty: 2
  }
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