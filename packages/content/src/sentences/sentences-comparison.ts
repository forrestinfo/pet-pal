/**
 * Comparison Sentences for PET B1
 * Sentences for comparing and contrasting in English
 */

import { SentenceCard } from 'shared-types';

export const comparisonSentences: Omit<SentenceCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    sentence: 'Both my brother and my sister are teachers.',
    sentenceZh: '我的哥哥和姐姐都是老师。',
    chunkList: ['Both', 'my brother', 'and', 'my sister', 'are teachers', '.'],
    keyPhrases: ['Both', 'and', 'are teachers'],
    functionTag: 'comparison_both',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Neither the blue shirt nor the red one fits me.',
    sentenceZh: '蓝色衬衫和红色衬衫都不适合我。',
    chunkList: ['Neither', 'the blue shirt', 'nor', 'the red one', 'fits me', '.'],
    keyPhrases: ['Neither', 'nor', 'fits me'],
    functionTag: 'comparison_neither',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I like both coffee and tea.',
    sentenceZh: '我既喜欢咖啡也喜欢茶。',
    chunkList: ['I like', 'both', 'coffee', 'and', 'tea', '.'],
    keyPhrases: ['like', 'both', 'and'],
    functionTag: 'comparison_both',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Neither of my parents speaks French.',
    sentenceZh: '我的父母都不会说法语。',
    chunkList: ['Neither of', 'my parents', 'speaks French', '.'],
    keyPhrases: ['Neither of', 'parents', 'speaks French'],
    functionTag: 'comparison_neither',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'My sister is outgoing, whereas I am quite shy.',
    sentenceZh: '我姐姐很外向，而我相当害羞。',
    chunkList: ['My sister', 'is outgoing', ',', 'whereas', 'I am quite shy', '.'],
    keyPhrases: ['outgoing', 'whereas', 'quite shy'],
    functionTag: 'comparison_contrast',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I prefer summer, while my brother prefers winter.',
    sentenceZh: '我喜欢夏天，而我哥哥喜欢冬天。',
    chunkList: ['I prefer summer', ',', 'while', 'my brother prefers winter', '.'],
    keyPhrases: ['prefer summer', 'while', 'prefers winter'],
    functionTag: 'comparison_contrast',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'He enjoys reading, whereas she prefers watching movies.',
    sentenceZh: '他喜欢阅读，而她更喜欢看电影。',
    chunkList: ['He enjoys reading', ',', 'whereas', 'she prefers watching movies', '.'],
    keyPhrases: ['enjoys reading', 'whereas', 'prefers watching movies'],
    functionTag: 'comparison_contrast',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I work during the day, while my wife works at night.',
    sentenceZh: '我白天工作，而我妻子晚上工作。',
    chunkList: ['I work', 'during the day', ',', 'while', 'my wife works at night', '.'],
    keyPhrases: ['work during the day', 'while', 'works at night'],
    functionTag: 'comparison_contrast',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Compared to last year, my English has improved a lot.',
    sentenceZh: '与去年相比，我的英语进步了很多。',
    chunkList: ['Compared to', 'last year', ',', 'my English', 'has improved a lot', '.'],
    keyPhrases: ['Compared to', 'last year', 'improved a lot'],
    functionTag: 'comparison_compare',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'In contrast to the city, the countryside is very quiet.',
    sentenceZh: '与城市相比，乡村非常安静。',
    chunkList: ['In contrast to', 'the city', ',', 'the countryside', 'is very quiet', '.'],
    keyPhrases: ['In contrast to', 'the city', 'very quiet'],
    functionTag: 'comparison_contrast',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Compared to my old phone, this one is much faster.',
    sentenceZh: '与我的旧手机相比，这个快得多。',
    chunkList: ['Compared to', 'my old phone', ',', 'this one', 'is much faster', '.'],
    keyPhrases: ['Compared to', 'old phone', 'much faster'],
    functionTag: 'comparison_compare',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'In contrast to yesterday, today is quite warm.',
    sentenceZh: '与昨天相比，今天相当暖和。',
    chunkList: ['In contrast to', 'yesterday', ',', 'today', 'is quite warm', '.'],
    keyPhrases: ['In contrast to', 'yesterday', 'quite warm'],
    functionTag: 'comparison_contrast',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The main difference is the price.',
    sentenceZh: '主要区别在于价格。',
    chunkList: ['The main difference', 'is', 'the price', '.'],
    keyPhrases: ['main difference', 'price'],
    functionTag: 'comparison_difference',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'What they have in common is their love for music.',
    sentenceZh: '他们的共同点是都热爱音乐。',
    chunkList: ['What they have in common', 'is', 'their love for music', '.'],
    keyPhrases: ['have in common', 'love for music'],
    functionTag: 'comparison_similarity',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The main difference between them is their age.',
    sentenceZh: '他们之间的主要区别是年龄。',
    chunkList: ['The main difference', 'between them', 'is', 'their age', '.'],
    keyPhrases: ['main difference', 'between them', 'age'],
    functionTag: 'comparison_difference',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'What these books have in common is the theme of friendship.',
    sentenceZh: '这些书的共同点是友谊的主题。',
    chunkList: ['What these books have in common', 'is', 'the theme of friendship', '.'],
    keyPhrases: ['books', 'have in common', 'theme of friendship'],
    functionTag: 'comparison_similarity',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'On the one hand, living in a city is convenient.',
    sentenceZh: '一方面，住在城市很方便。',
    chunkList: ['On the one hand', ',', 'living in a city', 'is convenient', '.'],
    keyPhrases: ['On the one hand', 'living in a city', 'convenient'],
    functionTag: 'comparison_balanced',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'On the other hand, it can be very expensive.',
    sentenceZh: '另一方面，它可能非常昂贵。',
    chunkList: ['On the other hand', ',', 'it can be', 'very expensive', '.'],
    keyPhrases: ['On the other hand', 'very expensive'],
    functionTag: 'comparison_balanced',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'On the one hand, studying abroad is exciting.',
    sentenceZh: '一方面，出国留学令人兴奋。',
    chunkList: ['On the one hand', ',', 'studying abroad', 'is exciting', '.'],
    keyPhrases: ['On the one hand', 'studying abroad', 'exciting'],
    functionTag: 'comparison_balanced',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'On the other hand, you might feel homesick.',
    sentenceZh: '另一方面，你可能会想家。',
    chunkList: ['On the other hand', ',', 'you might feel', 'homesick', '.'],
    keyPhrases: ['On the other hand', 'might feel', 'homesick'],
    functionTag: 'comparison_balanced',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Both English and French are widely spoken languages.',
    sentenceZh: '英语和法语都是广泛使用的语言。',
    chunkList: ['Both', 'English', 'and', 'French', 'are widely spoken languages', '.'],
    keyPhrases: ['Both', 'and', 'widely spoken languages'],
    functionTag: 'comparison_both',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Neither the manager nor the assistant was available.',
    sentenceZh: '经理和助理都不在。',
    chunkList: ['Neither', 'the manager', 'nor', 'the assistant', 'was available', '.'],
    keyPhrases: ['Neither', 'nor', 'was available'],
    functionTag: 'comparison_neither',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I enjoy both playing sports and watching them on TV.',
    sentenceZh: '我既喜欢运动也喜欢在电视上看运动。',
    chunkList: ['I enjoy', 'both', 'playing sports', 'and', 'watching them on TV', '.'],
    keyPhrases: ['enjoy', 'both', 'playing sports', 'watching on TV'],
    functionTag: 'comparison_both',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Neither of the two options seems perfect.',
    sentenceZh: '两个选项似乎都不完美。',
    chunkList: ['Neither of', 'the two options', 'seems perfect', '.'],
    keyPhrases: ['Neither of', 'two options', 'seems perfect'],
    functionTag: 'comparison_neither',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'My father is very practical, whereas my mother is more creative.',
    sentenceZh: '我父亲非常务实，而我母亲更有创造力。',
    chunkList: ['My father', 'is very practical', ',', 'whereas', 'my mother is more creative', '.'],
    keyPhrases: ['very practical', 'whereas', 'more creative'],
    functionTag: 'comparison_contrast',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I prefer quiet evenings at home, while my friends like going out.',
    sentenceZh: '我喜欢在家安静地度过夜晚，而我的朋友喜欢外出。',
    chunkList: ['I prefer', 'quiet evenings at home', ',', 'while', 'my friends like going out', '.'],
    keyPhrases: ['prefer', 'quiet evenings', 'while', 'like going out'],
    functionTag: 'comparison_contrast',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Compared to traditional letters, emails are much faster.',
    sentenceZh: '与传统信件相比，电子邮件快得多。',
    chunkList: ['Compared to', 'traditional letters', ',', 'emails', 'are much faster', '.'],
    keyPhrases: ['Compared to', 'traditional letters', 'much faster'],
    functionTag: 'comparison_compare',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'In contrast to the north, the south of the country is warmer.',
    sentenceZh: '与北部相比，该国南部更温暖。',
    chunkList: ['In contrast to', 'the north', ',', 'the south of the country', 'is warmer', '.'],
    keyPhrases: ['In contrast to', 'the north', 'warmer'],
    functionTag: 'comparison_contrast',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The main difference is their approach to problem-solving.',
    sentenceZh: '主要区别在于他们解决问题的方法。',
    chunkList: ['The main difference', 'is', 'their approach to problem-solving', '.'],
    keyPhrases: ['main difference', 'approach to problem-solving'],
    functionTag: 'comparison_difference',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'What these two movies have in common is the director.',
    sentenceZh: '这两部电影的共同点是导演。',
    chunkList: ['What these two movies have in common', 'is', 'the director', '.'],
    keyPhrases: ['movies', 'have in common', 'director'],
    functionTag: 'comparison_similarity',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'On the one hand, working from home saves time.',
    sentenceZh: '一方面，在家工作节省时间。',
    chunkList: ['On the one hand', ',', 'working from home', 'saves time', '.'],
    keyPhrases: ['On the one hand', 'working from home', 'saves time'],
    functionTag: 'comparison_balanced',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'On the other hand, it can be difficult to separate work and personal life.',
    sentenceZh: '另一方面，可能很难区分工作和个人生活。',
    chunkList: ['On the other hand', ',', 'it can be difficult', 'to separate work and personal life', '.'],
    keyPhrases: ['On the other hand', 'difficult', 'separate work and personal life'],
    functionTag: 'comparison_balanced',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Both reading and writing are important skills.',
    sentenceZh: '阅读和写作都是重要的技能。',
    chunkList: ['Both', 'reading', 'and', 'writing', 'are important skills', '.'],
    keyPhrases: ['Both', 'and', 'important skills'],
    functionTag: 'comparison_both',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Neither the first plan nor the second one worked.',
    sentenceZh: '第一个计划和第二个计划都没有成功。',
    chunkList: ['Neither', 'the first plan', 'nor', 'the second one', 'worked', '.'],
    keyPhrases: ['Neither', 'nor', 'worked'],
    functionTag: 'comparison_neither',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I need both a computer and a printer for my work.',
    sentenceZh: '我的工作需要电脑和打印机。',
    chunkList: ['I need', 'both', 'a computer', 'and', 'a printer', 'for my work', '.'],
    keyPhrases: ['need', 'both', 'computer', 'printer', 'for my work'],
    functionTag: 'comparison_both',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Neither of the restaurants was open on Sunday.',
    sentenceZh: '两家餐厅周日都不营业。',
    chunkList: ['Neither of', 'the restaurants', 'was open', 'on Sunday', '.'],
    keyPhrases: ['Neither of', 'restaurants', 'was open', 'on Sunday'],
    functionTag: 'comparison_neither',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The book is interesting, whereas the movie is boring.',
    sentenceZh: '这本书很有趣，而电影很无聊。',
    chunkList: ['The book', 'is interesting', ',', 'whereas', 'the movie is boring', '.'],
    keyPhrases: ['interesting', 'whereas', 'boring'],
    functionTag: 'comparison_contrast',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I enjoy cooking, while my husband prefers eating out.',
    sentenceZh: '我喜欢烹饪，而我丈夫更喜欢外出就餐。',
    chunkList: ['I enjoy cooking', ',', 'while', 'my husband prefers eating out', '.'],
    keyPhrases: ['enjoy cooking', 'while', 'prefers eating out'],
    functionTag: 'comparison_contrast',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Compared to walking, cycling is much faster.',
    sentenceZh: '与步行相比，骑自行车快得多。',
    chunkList: ['Compared to', 'walking', ',', 'cycling', 'is much faster', '.'],
    keyPhrases: ['Compared to', 'walking', 'much faster'],
    functionTag: 'comparison_compare',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'In contrast to summer, winter sports are more popular here.',
    sentenceZh: '与夏季相比，冬季运动在这里更受欢迎。',
    chunkList: ['In contrast to', 'summer', ',', 'winter sports', 'are more popular here', '.'],
    keyPhrases: ['In contrast to', 'summer', 'more popular'],
    functionTag: 'comparison_contrast',
    topicTag: 'writing