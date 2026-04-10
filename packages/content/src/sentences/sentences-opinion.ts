/**
 * Opinion Sentences for PET B1
 * Sentences for expressing opinions and arguments in English
 */

import { SentenceCard } from 'shared-types';

export const opinionSentences: Omit<SentenceCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    sentence: 'I strongly believe that education should be free for everyone.',
    sentenceZh: '我坚信教育应该对所有人免费。',
    chunkList: ['I strongly believe', 'that', 'education should be free', 'for everyone', '.'],
    keyPhrases: ['strongly believe', 'education should be free', 'for everyone'],
    functionTag: 'opinion_strong',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'It is important to consider all the options before making a decision.',
    sentenceZh: '在做决定之前考虑所有选项很重要。',
    chunkList: ['It is important', 'to consider', 'all the options', 'before making a decision', '.'],
    keyPhrases: ['important', 'consider', 'all the options', 'making a decision'],
    functionTag: 'opinion_consideration',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Some people think that technology makes us lazy, however, I disagree.',
    sentenceZh: '有些人认为科技让我们变得懒惰，然而我不同意。',
    chunkList: ['Some people think', 'that', 'technology makes us lazy', ',', 'however', ',', 'I disagree', '.'],
    keyPhrases: ['Some people think', 'technology makes us lazy', 'however', 'disagree'],
    functionTag: 'opinion_counter',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The advantages of living in a city outweigh the disadvantages.',
    sentenceZh: '住在城市的优点多于缺点。',
    chunkList: ['The advantages', 'of living in a city', 'outweigh', 'the disadvantages', '.'],
    keyPhrases: ['advantages', 'living in a city', 'outweigh', 'disadvantages'],
    functionTag: 'opinion_balance',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'In conclusion, I think we should invest more in renewable energy.',
    sentenceZh: '总之，我认为我们应该更多地投资可再生能源。',
    chunkList: ['In conclusion', ',', 'I think', 'we should invest more', 'in renewable energy', '.'],
    keyPhrases: ['In conclusion', 'think', 'invest more', 'renewable energy'],
    functionTag: 'opinion_conclusion',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I firmly believe that exercise is essential for good health.',
    sentenceZh: '我坚信锻炼对健康至关重要。',
    chunkList: ['I firmly believe', 'that', 'exercise is essential', 'for good health', '.'],
    keyPhrases: ['firmly believe', 'exercise is essential', 'good health'],
    functionTag: 'opinion_strong',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'It is crucial to protect the environment for future generations.',
    sentenceZh: '为子孙后代保护环境至关重要。',
    chunkList: ['It is crucial', 'to protect', 'the environment', 'for future generations', '.'],
    keyPhrases: ['crucial', 'protect', 'environment', 'future generations'],
    functionTag: 'opinion_consideration',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Many people argue that social media is harmful, however, it has its benefits.',
    sentenceZh: '许多人认为社交媒体有害，然而它也有好处。',
    chunkList: ['Many people argue', 'that', 'social media is harmful', ',', 'however', ',', 'it has its benefits', '.'],
    keyPhrases: ['Many people argue', 'social media is harmful', 'however', 'has benefits'],
    functionTag: 'opinion_counter',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The benefits of learning a foreign language far outweigh the difficulties.',
    sentenceZh: '学习外语的好处远远超过困难。',
    chunkList: ['The benefits', 'of learning a foreign language', 'far outweigh', 'the difficulties', '.'],
    keyPhrases: ['benefits', 'learning a foreign language', 'far outweigh', 'difficulties'],
    functionTag: 'opinion_balance',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'To sum up, I believe that teamwork is the key to success.',
    sentenceZh: '总之，我相信团队合作是成功的关键。',
    chunkList: ['To sum up', ',', 'I believe', 'that', 'teamwork is the key', 'to success', '.'],
    keyPhrases: ['To sum up', 'believe', 'teamwork is the key', 'success'],
    functionTag: 'opinion_conclusion',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I am convinced that reading books makes people more intelligent.',
    sentenceZh: '我确信阅读书籍能让人更聪明。',
    chunkList: ['I am convinced', 'that', 'reading books', 'makes people more intelligent', '.'],
    keyPhrases: ['convinced', 'reading books', 'more intelligent'],
    functionTag: 'opinion_strong',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'It is necessary to have a balanced diet for a healthy lifestyle.',
    sentenceZh: '为了健康的生活方式，均衡饮食是必要的。',
    chunkList: ['It is necessary', 'to have', 'a balanced diet', 'for a healthy lifestyle', '.'],
    keyPhrases: ['necessary', 'balanced diet', 'healthy lifestyle'],
    functionTag: 'opinion_consideration',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Some experts claim that too much screen time is bad for children, however, technology is part of modern life.',
    sentenceZh: '一些专家声称过多的屏幕时间对孩子有害，然而技术是现代生活的一部分。',
    chunkList: ['Some experts claim', 'that', 'too much screen time', 'is bad for children', ',', 'however', ',', 'technology is part of modern life', '.'],
    keyPhrases: ['Some experts claim', 'too much screen time', 'bad for children', 'however', 'part of modern life'],
    functionTag: 'opinion_counter',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The positive aspects of online shopping outweigh the negative ones.',
    sentenceZh: '网上购物的积极方面超过了消极方面。',
    chunkList: ['The positive aspects', 'of online shopping', 'outweigh', 'the negative ones', '.'],
    keyPhrases: ['positive aspects', 'online shopping', 'outweigh', 'negative ones'],
    functionTag: 'opinion_balance',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'In summary, I feel that travel broadens the mind.',
    sentenceZh: '总之，我认为旅行能开阔思维。',
    chunkList: ['In summary', ',', 'I feel', 'that', 'travel broadens the mind', '.'],
    keyPhrases: ['In summary', 'feel', 'travel broadens the mind'],
    functionTag: 'opinion_conclusion',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I strongly support the idea of reducing plastic use.',
    sentenceZh: '我强烈支持减少塑料使用的想法。',
    chunkList: ['I strongly support', 'the idea', 'of reducing plastic use', '.'],
    keyPhrases: ['strongly support', 'idea', 'reducing plastic use'],
    functionTag: 'opinion_strong',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'It is vital to save money for unexpected expenses.',
    sentenceZh: '为意外开支存钱至关重要。',
    chunkList: ['It is vital', 'to save money', 'for unexpected expenses', '.'],
    keyPhrases: ['vital', 'save money', 'unexpected expenses'],
    functionTag: 'opinion_consideration',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Many believe that homework is unnecessary, however, it helps reinforce learning.',
    sentenceZh: '许多人认为家庭作业没有必要，然而它有助于巩固学习。',
    chunkList: ['Many believe', 'that', 'homework is unnecessary', ',', 'however', ',', 'it helps reinforce learning', '.'],
    keyPhrases: ['Many believe', 'homework is unnecessary', 'however', 'reinforce learning'],
    functionTag: 'opinion_counter',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The pros of working from home outweigh the cons.',
    sentenceZh: '在家工作的优点多于缺点。',
    chunkList: ['The pros', 'of working from home', 'outweigh', 'the cons', '.'],
    keyPhrases: ['pros', 'working from home', 'outweigh', 'cons'],
    functionTag: 'opinion_balance',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'All things considered, I think learning a musical instrument is worthwhile.',
    sentenceZh: '综合考虑，我认为学习一种乐器是值得的。',
    chunkList: ['All things considered', ',', 'I think', 'learning a musical instrument', 'is worthwhile', '.'],
    keyPhrases: ['All things considered', 'think', 'learning a musical instrument', 'worthwhile'],
    functionTag: 'opinion_conclusion',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I am certain that practice makes perfect.',
    sentenceZh: '我确信熟能生巧。',
    chunkList: ['I am certain', 'that', 'practice makes perfect', '.'],
    keyPhrases: ['certain', 'practice makes perfect'],
    functionTag: 'opinion_strong',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'It is essential to get enough sleep for good health.',
    sentenceZh: '为了健康，获得足够的睡眠是必不可少的。',
    chunkList: ['It is essential', 'to get', 'enough sleep', 'for good health', '.'],
    keyPhrases: ['essential', 'get enough sleep', 'good health'],
    functionTag: 'opinion_consideration',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Some say that money can\'t buy happiness, however, it can make life easier.',
    sentenceZh: '有人说金钱买不到幸福，然而它可以让生活更轻松。',
    chunkList: ['Some say', 'that', 'money can\'t buy happiness', ',', 'however', ',', 'it can make life easier', '.'],
    keyPhrases: ['Some say', 'money can\'t buy happiness', 'however', 'make life easier'],
    functionTag: 'opinion_counter',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The advantages of public transportation outweigh the disadvantages.',
    sentenceZh: '公共交通的优点多于缺点。',
    chunkList: ['The advantages', 'of public transportation', 'outweigh', 'the disadvantages', '.'],
    keyPhrases: ['advantages', 'public transportation', 'outweigh', 'disadvantages'],
    functionTag: 'opinion_balance',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'In my final analysis, I believe that communication is the most important skill.',
    sentenceZh: '在我的最终分析中，我相信沟通是最重要的技能。',
    chunkList: ['In my final analysis', ',', 'I believe', 'that', 'communication is the most important skill', '.'],
    keyPhrases: ['In my final analysis', 'believe', 'communication', 'most important skill'],
    functionTag: 'opinion_conclusion',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I have no doubt that kindness makes the world a better place.',
    sentenceZh: '我毫不怀疑善良能让世界变得更美好。',
    chunkList: ['I have no doubt', 'that', 'kindness makes the world', 'a better place', '.'],
    keyPhrases: ['no doubt', 'kindness', 'better place'],
    functionTag: 'opinion_strong',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'It is fundamental to respect other people\'s opinions.',
    sentenceZh: '尊重他人的意见是基本的。',
    chunkList: ['It is fundamental', 'to respect', 'other people\'s opinions', '.'],
    keyPhrases: ['fundamental', 'respect', 'other people\'s opinions'],
    functionTag: 'opinion_consideration',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Many argue that video games are a waste of time, however, they can improve problem-solving skills.',
    sentenceZh: '许多人认为电子游戏是浪费时间，然而它们可以提高解决问题的能力。',
    chunkList: ['Many argue', 'that', 'video games are a waste of time', ',', 'however', ',', 'they can improve problem-solving skills', '.'],
    keyPhrases: ['Many argue', 'video games', 'waste of time', 'however', 'improve problem-solving skills'],
    functionTag: 'opinion_counter',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The benefits of regular exercise far outweigh the effort required.',
    sentenceZh: '定期锻炼的好处远远超过了所需的努力。',
    chunkList: ['The benefits', 'of regular exercise', 'far outweigh', 'the effort required', '.'],
    keyPhrases: ['benefits', 'regular exercise', 'far outweigh', 'effort required'],
    functionTag: 'opinion_balance',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'To conclude, I am of the opinion that education is the most powerful tool for change.',
    sentenceZh: '总之，我认为教育是变革最强大的工具。',
    chunkList: ['To conclude', ',', 'I am of the opinion', 'that', 'education is the most powerful tool', 'for change', '.'],
    keyPhrases: ['To conclude', 'opinion', 'education', 'most powerful tool', 'change'],
    functionTag: 'opinion_conclusion',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I am absolutely sure that honesty is the best policy.',
    sentenceZh: '我绝对相信诚实是最好的策略。',
    chunkList: ['I am absolutely sure', 'that', 'honesty is the best policy', '.'],
    keyPhrases: ['absolutely sure', 'honesty', 'best policy'],
    functionTag: 'opinion_strong',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'It is imperative to reduce our carbon footprint.',
    sentenceZh: '减少我们的碳足迹是当务之急。',
    chunkList: ['It is imperative', 'to reduce', 'our carbon footprint', '.'],
    keyPhrases: ['imperative', 'reduce', 'carbon footprint'],
    functionTag: 'opinion_consideration',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Some critics say that modern art is meaningless, however, it challenges our perceptions.',
    sentenceZh: '一些批评家说现代艺术毫无意义，然而它挑战了我们的认知。',
    chunkList: ['Some critics say', 'that', 'modern art is meaningless', ',', 'however', ',', 'it challenges our perceptions', '.'],
    keyPhrases: ['Some critics say', 'modern art', 'meaningless', 'however', 'challenges perceptions'],
    functionTag: 'opinion_counter',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The merits of studying abroad outweigh the drawbacks.',
    sentenceZh: '出国留学的优点超过了缺点。',
    chunkList: ['The merits', 'of studying abroad', 'outweigh', 'the drawbacks', '.'],
    keyPhrases: ['merits', 'studying abroad', 'outweigh', 'drawbacks'],
    functionTag: 'opinion_balance',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'In closing, I maintain that reading is fundamental to personal growth.',
    sentenceZh: '最后，我坚持认为阅读对个人成长至关重要。',
    chunkList: ['In closing', ',', 'I maintain', 'that', 'reading is fundamental', 'to personal growth', '.'],
    keyPhrases: ['In closing', 'maintain', 'reading', 'fundamental', 'personal growth'],
    functionTag: 'opinion_conclusion',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I am thoroughly convinced that a positive attitude leads to success.',
    sentenceZh: '我完全相信积极的态度能带来成功。',
    chunkList: ['I am thoroughly convinced', 'that', 'a positive attitude', 'leads to success', '.'],
    keyPhrases: ['thoroughly convinced', 'positive attitude', 'leads to success'],
    functionTag: 'opinion_strong',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'It is critical to maintain a work-life balance.',
    sentenceZh: '保持工作与生活的平衡至关重要。',
    chunkList: ['It is critical', 'to maintain', 'a work-life balance', '.'],
    keyPhrases: ['critical