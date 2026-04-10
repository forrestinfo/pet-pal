/**
 * Email Writing Sentences for PET B1
 * Sentences for writing emails in English
 */

import { SentenceCard } from 'shared-types';

export const emailSentences: Omit<SentenceCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
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
    sentenceZh: '感谢您的电子邮件。',
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
    sentenceZh: '您能否将详细信息发送给我？',
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
  {
    sentence: 'I hope this email finds you well.',
    sentenceZh: '希望您收到这封邮件时一切安好。',
    chunkList: ['I hope', 'this email', 'finds you well', '.'],
    keyPhrases: ['hope', 'finds you well'],
    functionTag: 'email_opening',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I am writing to inform you about the meeting.',
    sentenceZh: '我写信是为了通知您关于会议的事宜。',
    chunkList: ['I am writing', 'to inform you', 'about the meeting', '.'],
    keyPhrases: ['I am writing', 'inform you', 'meeting'],
    functionTag: 'email_purpose',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Please find attached the document you requested.',
    sentenceZh: '请查收您要求的附件文档。',
    chunkList: ['Please find attached', 'the document', 'you requested', '.'],
    keyPhrases: ['Please find attached', 'document', 'requested'],
    functionTag: 'email_attachment',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I would appreciate it if you could reply by Friday.',
    sentenceZh: '如果您能在周五前回复，我将不胜感激。',
    chunkList: ['I would appreciate it', 'if you could', 'reply', 'by Friday', '.'],
    keyPhrases: ['would appreciate', 'reply by'],
    functionTag: 'email_request',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Thank you for your prompt response.',
    sentenceZh: '感谢您的及时回复。',
    chunkList: ['Thank you', 'for', 'your prompt response', '.'],
    keyPhrases: ['Thank you', 'prompt response'],
    functionTag: 'email_response',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I apologize for any inconvenience caused.',
    sentenceZh: '对于造成的不便，我表示歉意。',
    chunkList: ['I apologize', 'for', 'any inconvenience', 'caused', '.'],
    keyPhrases: ['apologize', 'inconvenience'],
    functionTag: 'email_apology',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Please let me know if you have any questions.',
    sentenceZh: '如果您有任何问题，请告诉我。',
    chunkList: ['Please let me know', 'if you have', 'any questions', '.'],
    keyPhrases: ['let me know', 'any questions'],
    functionTag: 'email_offer',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I am available for a meeting next week.',
    sentenceZh: '我下周可以参加会议。',
    chunkList: ['I am available', 'for a meeting', 'next week', '.'],
    keyPhrases: ['available', 'meeting', 'next week'],
    functionTag: 'email_availability',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Looking forward to your reply.',
    sentenceZh: '期待您的回复。',
    chunkList: ['Looking forward to', 'your reply', '.'],
    keyPhrases: ['Looking forward', 'your reply'],
    functionTag: 'email_closing',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Sincerely,',
    sentenceZh: '诚挚地，',
    chunkList: ['Sincerely', ','],
    keyPhrases: ['Sincerely'],
    functionTag: 'email_signature',
    topicTag: 'writing',
    difficulty: 1
  },
  {
    sentence: 'I am writing to apply for the position.',
    sentenceZh: '我写信是为了申请这个职位。',
    chunkList: ['I am writing', 'to apply for', 'the position', '.'],
    keyPhrases: ['I am writing', 'apply for', 'position'],
    functionTag: 'email_application',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Please confirm your attendance by tomorrow.',
    sentenceZh: '请于明天前确认您的出席。',
    chunkList: ['Please confirm', 'your attendance', 'by tomorrow', '.'],
    keyPhrases: ['Please confirm', 'attendance', 'by tomorrow'],
    functionTag: 'email_request',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I regret to inform you that the event is cancelled.',
    sentenceZh: '我很遗憾地通知您，活动已取消。',
    chunkList: ['I regret to inform you', 'that', 'the event', 'is cancelled', '.'],
    keyPhrases: ['regret to inform', 'event cancelled'],
    functionTag: 'email_bad_news',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Thank you for your understanding.',
    sentenceZh: '感谢您的理解。',
    chunkList: ['Thank you', 'for', 'your understanding', '.'],
    keyPhrases: ['Thank you', 'understanding'],
    functionTag: 'email_thanks',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I would like to invite you to our party.',
    sentenceZh: '我想邀请您参加我们的派对。',
    chunkList: ['I would like to', 'invite you', 'to our party', '.'],
    keyPhrases: ['would like to', 'invite you', 'party'],
    functionTag: 'email_invitation',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'The meeting will take place on Monday at 10 AM.',
    sentenceZh: '会议将于周一上午10点举行。',
    chunkList: ['The meeting', 'will take place', 'on Monday', 'at 10 AM', '.'],
    keyPhrases: ['meeting', 'take place', 'Monday', '10 AM'],
    functionTag: 'email_information',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Please do not hesitate to contact me if you need further information.',
    sentenceZh: '如果您需要更多信息，请随时联系我。',
    chunkList: ['Please do not hesitate', 'to contact me', 'if you need', 'further information', '.'],
    keyPhrases: ['do not hesitate', 'contact me', 'further information'],
    functionTag: 'email_offer',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I am writing to complain about the service.',
    sentenceZh: '我写信是为了投诉服务质量。',
    chunkList: ['I am writing', 'to complain about', 'the service', '.'],
    keyPhrases: ['I am writing', 'complain about', 'service'],
    functionTag: 'email_complaint',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'We appreciate your business.',
    sentenceZh: '我们感谢您的惠顾。',
    chunkList: ['We appreciate', 'your business', '.'],
    keyPhrases: ['appreciate', 'your business'],
    functionTag: 'email_thanks',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I am writing to follow up on our conversation.',
    sentenceZh: '我写信是为了跟进我们的谈话。',
    chunkList: ['I am writing', 'to follow up', 'on our conversation', '.'],
    keyPhrases: ['I am writing', 'follow up', 'conversation'],
    functionTag: 'email_followup',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Please accept my apologies for the delay.',
    sentenceZh: '对于延迟，请接受我的道歉。',
    chunkList: ['Please accept', 'my apologies', 'for the delay', '.'],
    keyPhrases: ['accept', 'apologies', 'delay'],
    functionTag: 'email_apology',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I am pleased to inform you that your application has been approved.',
    sentenceZh: '我很高兴地通知您，您的申请已获批准。',
    chunkList: ['I am pleased to inform you', 'that', 'your application', 'has been approved', '.'],
    keyPhrases: ['pleased to inform', 'application', 'approved'],
    functionTag: 'email_good_news',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'We look forward to working with you.',
    sentenceZh: '我们期待与您合作。',
    chunkList: ['We look forward to', 'working with you', '.'],
    keyPhrases: ['look forward to', 'working with you'],
    functionTag: 'email_closing',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Thank you for considering my application.',
    sentenceZh: '感谢您考虑我的申请。',
    chunkList: ['Thank you', 'for', 'considering', 'my application', '.'],
    keyPhrases: ['Thank you', 'considering', 'application'],
    functionTag: 'email_thanks',
    topicTag: 'writing',
    difficulty: 2
  }
];