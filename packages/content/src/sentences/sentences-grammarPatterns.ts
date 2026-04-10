/**
 * Grammar Patterns Sentences for PET B1
 * Sentences demonstrating grammar patterns in English
 */

import { SentenceCard } from 'shared-types';

export const grammarPatternsSentences: Omit<SentenceCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    sentence: 'If I have time, I will visit you tomorrow.',
    sentenceZh: '如果我有时间，我明天会去看你。',
    chunkList: ['If I have time', ',', 'I will visit', 'you tomorrow', '.'],
    keyPhrases: ['If I have', 'will visit'],
    functionTag: 'conditional_first',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'If I had more money, I would buy a new car.',
    sentenceZh: '如果我有更多钱，我会买一辆新车。',
    chunkList: ['If I had', 'more money', ',', 'I would buy', 'a new car', '.'],
    keyPhrases: ['If I had', 'would buy'],
    functionTag: 'conditional_second',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'If I had studied harder, I would have passed the exam.',
    sentenceZh: '如果我学习更努力，我就能通过考试了。',
    chunkList: ['If I had studied', 'harder', ',', 'I would have passed', 'the exam', '.'],
    keyPhrases: ['If I had studied', 'would have passed'],
    functionTag: 'conditional_third',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'It was built in 1990.',
    sentenceZh: '它建于1990年。',
    chunkList: ['It was built', 'in 1990', '.'],
    keyPhrases: ['was built', 'in 1990'],
    functionTag: 'passive_voice',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'The book was written by a famous author.',
    sentenceZh: '这本书是由一位著名作家写的。',
    chunkList: ['The book', 'was written', 'by a famous author', '.'],
    keyPhrases: ['was written', 'by a famous author'],
    functionTag: 'passive_voice',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'The house is being painted now.',
    sentenceZh: '房子现在正在粉刷。',
    chunkList: ['The house', 'is being painted', 'now', '.'],
    keyPhrases: ['is being painted', 'now'],
    functionTag: 'passive_voice',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'He said that he was tired.',
    sentenceZh: '他说他很累。',
    chunkList: ['He said', 'that', 'he was tired', '.'],
    keyPhrases: ['He said', 'that', 'was tired'],
    functionTag: 'reported_speech',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'She asked me to help her.',
    sentenceZh: '她请我帮助她。',
    chunkList: ['She asked me', 'to help her', '.'],
    keyPhrases: ['asked me', 'to help'],
    functionTag: 'reported_speech',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'They told us to wait outside.',
    sentenceZh: '他们告诉我们在外面等。',
    chunkList: ['They told us', 'to wait', 'outside', '.'],
    keyPhrases: ['told us', 'to wait', 'outside'],
    functionTag: 'reported_speech',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'The person who called you is my brother.',
    sentenceZh: '给你打电话的人是我弟弟。',
    chunkList: ['The person', 'who called you', 'is my brother', '.'],
    keyPhrases: ['The person', 'who called', 'my brother'],
    functionTag: 'relative_clause',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'This is the place where we first met.',
    sentenceZh: '这是我们第一次见面的地方。',
    chunkList: ['This is', 'the place', 'where we first met', '.'],
    keyPhrases: ['the place', 'where we met'],
    functionTag: 'relative_clause',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'The thing that I like most is the color.',
    sentenceZh: '我最喜欢的是这个颜色。',
    chunkList: ['The thing', 'that I like most', 'is the color', '.'],
    keyPhrases: ['The thing', 'that I like', 'the color'],
    functionTag: 'relative_clause',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'My car is faster than yours.',
    sentenceZh: '我的车比你的快。',
    chunkList: ['My car', 'is faster than', 'yours', '.'],
    keyPhrases: ['faster than', 'yours'],
    functionTag: 'comparative',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'This is the most interesting book I have ever read.',
    sentenceZh: '这是我读过的最有趣的书。',
    chunkList: ['This is', 'the most interesting book', 'I have ever read', '.'],
    keyPhrases: ['the most interesting', 'have ever read'],
    functionTag: 'superlative',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'She is more intelligent than her brother.',
    sentenceZh: '她比她哥哥更聪明。',
    chunkList: ['She is', 'more intelligent than', 'her brother', '.'],
    keyPhrases: ['more intelligent than', 'her brother'],
    functionTag: 'comparative',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'I have already finished my homework.',
    sentenceZh: '我已经完成了作业。',
    chunkList: ['I have already finished', 'my homework', '.'],
    keyPhrases: ['have already finished', 'homework'],
    functionTag: 'present_perfect',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'Have you ever been to London?',
    sentenceZh: '你去过伦敦吗？',
    chunkList: ['Have you ever been', 'to London', '?'],
    keyPhrases: ['Have you ever been', 'to London'],
    functionTag: 'present_perfect',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'I was doing my homework when the phone rang.',
    sentenceZh: '电话响的时候我正在做作业。',
    chunkList: ['I was doing', 'my homework', 'when', 'the phone rang', '.'],
    keyPhrases: ['was doing', 'homework', 'when', 'phone rang'],
    functionTag: 'past_continuous',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'They were playing football when it started to rain.',
    sentenceZh: '开始下雨的时候他们正在踢足球。',
    chunkList: ['They were playing', 'football', 'when', 'it started to rain', '.'],
    keyPhrases: ['were playing', 'football', 'started to rain'],
    functionTag: 'past_continuous',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'You should study harder for the exam.',
    sentenceZh: '你应该为考试更努力地学习。',
    chunkList: ['You should study', 'harder', 'for the exam', '.'],
    keyPhrases: ['should study', 'harder', 'for the exam'],
    functionTag: 'modal_verb',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'You must wear a seatbelt in the car.',
    sentenceZh: '在车里你必须系安全带。',
    chunkList: ['You must wear', 'a seatbelt', 'in the car', '.'],
    keyPhrases: ['must wear', 'seatbelt', 'in the car'],
    functionTag: 'modal_verb',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'You might want to bring an umbrella.',
    sentenceZh: '你可能想带把伞。',
    chunkList: ['You might want', 'to bring', 'an umbrella', '.'],
    keyPhrases: ['might want', 'to bring', 'umbrella'],
    functionTag: 'modal_verb',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'My parents make me do my homework every day.',
    sentenceZh: '我父母让我每天做作业。',
    chunkList: ['My parents', 'make me do', 'my homework', 'every day', '.'],
    keyPhrases: ['make me do', 'homework', 'every day'],
    functionTag: 'causative_verb',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'She let me borrow her book.',
    sentenceZh: '她让我借她的书。',
    chunkList: ['She let me', 'borrow', 'her book', '.'],
    keyPhrases: ['let me', 'borrow', 'her book'],
    functionTag: 'causative_verb',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'I had my hair cut yesterday.',
    sentenceZh: '我昨天理发了。',
    chunkList: ['I had', 'my hair cut', 'yesterday', '.'],
    keyPhrases: ['had', 'my hair cut', 'yesterday'],
    functionTag: 'causative_verb',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'If it rains, we will stay at home.',
    sentenceZh: '如果下雨，我们就待在家里。',
    chunkList: ['If it rains', ',', 'we will stay', 'at home', '.'],
    keyPhrases: ['If it rains', 'will stay', 'at home'],
    functionTag: 'conditional_first',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'If I were you, I would accept the offer.',
    sentenceZh: '如果我是你，我会接受这个提议。',
    chunkList: ['If I were you', ',', 'I would accept', 'the offer', '.'],
    keyPhrases: ['If I were you', 'would accept', 'the offer'],
    functionTag: 'conditional_second',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'The letter was sent last week.',
    sentenceZh: '信是上周寄出的。',
    chunkList: ['The letter', 'was sent', 'last week', '.'],
    keyPhrases: ['was sent', 'last week'],
    functionTag: 'passive_voice',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'English is spoken all over the world.',
    sentenceZh: '英语在世界各地都被使用。',
    chunkList: ['English', 'is spoken', 'all over the world', '.'],
    keyPhrases: ['is spoken', 'all over the world'],
    functionTag: 'passive_voice',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'She told me that she would come later.',
    sentenceZh: '她告诉我她会晚点来。',
    chunkList: ['She told me', 'that', 'she would come', 'later', '.'],
    keyPhrases: ['told me', 'that', 'would come', 'later'],
    functionTag: 'reported_speech',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'He asked if I could help him.',
    sentenceZh: '他问我是否能帮助他。',
    chunkList: ['He asked', 'if', 'I could help him', '.'],
    keyPhrases: ['He asked', 'if', 'could help'],
    functionTag: 'reported_speech',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'The woman who lives next door is a doctor.',
    sentenceZh: '住在隔壁的女人是医生。',
    chunkList: ['The woman', 'who lives next door', 'is a doctor', '.'],
    keyPhrases: ['The woman', 'who lives', 'next door', 'doctor'],
    functionTag: 'relative_clause',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'That\'s the reason why I called you.',
    sentenceZh: '那就是我打电话给你的原因。',
    chunkList: ['That\'s', 'the reason', 'why I called you', '.'],
    keyPhrases: ['the reason', 'why I called'],
    functionTag: 'relative_clause',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'This exercise is easier than the last one.',
    sentenceZh: '这个练习比上一个容易。',
    chunkList: ['This exercise', 'is easier than', 'the last one', '.'],
    keyPhrases: ['easier than', 'the last one'],
    functionTag: 'comparative',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'He is the tallest person in the class.',
    sentenceZh: '他是班里最高的人。',
    chunkList: ['He is', 'the tallest person', 'in the class', '.'],
    keyPhrases: ['the tallest', 'in the class'],
    functionTag: 'superlative',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'We have lived here for five years.',
    sentenceZh: '我们在这里住了五年了。',
    chunkList: ['We have lived', 'here', 'for five years', '.'],
    keyPhrases: ['have lived', 'here', 'for five years'],
    functionTag: 'present_perfect',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'I have never seen such a beautiful sunset.',
    sentenceZh: '我从未见过如此美丽的日落。',
    chunkList: ['I have never seen', 'such a beautiful sunset', '.'],
    keyPhrases: ['have never seen', 'beautiful sunset'],
    functionTag: 'present_perfect',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'While I was cooking, my friend arrived.',
    sentenceZh: '我正在做饭的时候，我的朋友到了。',
    chunkList: ['While I was cooking', ',', 'my friend arrived', '.'],
    keyPhrases: ['While I was cooking', 'friend arrived'],
    functionTag: 'past_continuous',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'You can borrow my pen if you need one.',
    sentenceZh: '如果你需要，可以借我的笔。',
    chunkList: ['You can borrow', 'my pen', 'if you need one', '.'],
    keyPhrases: ['can borrow', 'my pen', 'if you need'],
    functionTag: 'modal_verb',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'We must finish this project by Friday.',
    sentenceZh: '我们必须在周五前完成这个项目。',
    chunkList: ['We must finish', 'this project', 'by Friday', '.'],
    keyPhrases: ['must finish', 'project', 'by Friday'],
    functionTag: 'modal_verb',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'She may come to the party later.',
    sentenceZh: '她可能晚点会来参加派对。',
    chunkList: ['She may come', 'to the party', 'later', '.'],
    keyPhrases: ['may come', 'to the party', 'later'],
    functionTag: 'modal_verb',
    topicTag: 'grammar',
    difficulty: 2
  },
  {
    sentence: 'I got my computer repaired last week.',
    sentenceZh: '我上周修了电脑。',
    chunkList: ['I got', 'my computer repaired', 'last week', '.'],
    keyPhrases: ['got', 'computer repaired', 'last week'],
    functionTag: 'causative_verb',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'They made us wait for an hour.',
    sentenceZh: '他们让我们等了一个小时。',
    chunkList: ['They made us', 'wait', 'for an hour', '.'],
    keyPhrases: ['made us', 'wait', 'for an hour'],
    functionTag: 'causative_verb',
    topicTag: 'grammar',
    difficulty: 3
  },
  {
    sentence: 'If you heat water to 100°C, it boils.',
    sentenceZh: '如果你把水加热到100°C，它会沸腾。',
    chunkList: ['If you heat', 'water', 'to 100°C', ',', 'it boils', '.'],
    keyPhrases: ['If you heat