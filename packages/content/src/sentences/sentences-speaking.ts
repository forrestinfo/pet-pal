/**
 * Speaking Sentences for PET B1
 * Sentences for speaking and conversation in English
 */

import { SentenceCard } from 'shared-types';

export const speakingSentences: Omit<SentenceCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    sentence: 'In my opinion, it would be better to go by train.',
    sentenceZh: '在我看来，乘火车去会更好。',
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
    sentenceZh: '图片显示一个家庭正在野餐。',
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
    sentence: 'I have been studying English for three years.',
    sentenceZh: '我学习英语已经三年了。',
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
  },
  {
    sentence: 'Could you repeat that, please?',
    sentenceZh: '请您重复一遍好吗？',
    chunkList: ['Could you', 'repeat that', 'please', '?'],
    keyPhrases: ['Could you', 'repeat', 'please'],
    functionTag: 'clarification',
    topicTag: 'speaking',
    difficulty: 1
  },
  {
    sentence: 'I\'m not sure I understand what you mean.',
    sentenceZh: '我不太确定我理解您的意思。',
    chunkList: ['I\'m not sure', 'I understand', 'what you mean', '.'],
    keyPhrases: ['not sure', 'understand', 'what you mean'],
    functionTag: 'clarification',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'Let me think about that for a moment.',
    sentenceZh: '让我思考一下。',
    chunkList: ['Let me think', 'about that', 'for a moment', '.'],
    keyPhrases: ['Let me think', 'for a moment'],
    functionTag: 'thinking',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'That\'s an interesting point.',
    sentenceZh: '这是一个有趣的观点。',
    chunkList: ['That\'s', 'an interesting point', '.'],
    keyPhrases: ['interesting point'],
    functionTag: 'acknowledgement',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'I see what you mean.',
    sentenceZh: '我明白您的意思。',
    chunkList: ['I see', 'what you mean', '.'],
    keyPhrases: ['I see', 'what you mean'],
    functionTag: 'understanding',
    topicTag: 'speaking',
    difficulty: 1
  },
  {
    sentence: 'Could you speak a little slower, please?',
    sentenceZh: '请您说慢一点好吗？',
    chunkList: ['Could you', 'speak', 'a little slower', 'please', '?'],
    keyPhrases: ['Could you', 'speak slower', 'please'],
    functionTag: 'request',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'I agree with you completely.',
    sentenceZh: '我完全同意您的观点。',
    chunkList: ['I agree with you', 'completely', '.'],
    keyPhrases: ['agree with', 'completely'],
    functionTag: 'agreement',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'I\'m afraid I don\'t agree with that.',
    sentenceZh: '恐怕我不同意这一点。',
    chunkList: ['I\'m afraid', 'I don\'t agree', 'with that', '.'],
    keyPhrases: ['I\'m afraid', 'don\'t agree'],
    functionTag: 'disagreement',
    topicTag: 'speaking',
    difficulty: 3
  },
  {
    sentence: 'What do you think about this idea?',
    sentenceZh: '您对这个想法有什么看法？',
    chunkList: ['What do you think', 'about', 'this idea', '?'],
    keyPhrases: ['What do you think', 'idea'],
    functionTag: 'asking_opinion',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'In the background, there is a tall building.',
    sentenceZh: '背景中有一座高楼。',
    chunkList: ['In the background', ',', 'there is', 'a tall building', '.'],
    keyPhrases: ['In the background', 'tall building'],
    functionTag: 'description',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'They seem to be enjoying themselves.',
    sentenceZh: '他们似乎玩得很开心。',
    chunkList: ['They seem to be', 'enjoying themselves', '.'],
    keyPhrases: ['seem to be', 'enjoying themselves'],
    functionTag: 'interpretation',
    topicTag: 'speaking',
    difficulty: 3
  },
  {
    sentence: 'I would prefer to go by bus.',
    sentenceZh: '我宁愿乘公共汽车去。',
    chunkList: ['I would prefer', 'to go', 'by bus', '.'],
    keyPhrases: ['would prefer', 'go by bus'],
    functionTag: 'preference',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'Let\'s meet at the café at 3 o\'clock.',
    sentenceZh: '我们三点在咖啡馆见面吧。',
    chunkList: ['Let\'s meet', 'at the café', 'at 3 o\'clock', '.'],
    keyPhrases: ['Let\'s meet', 'café', '3 o\'clock'],
    functionTag: 'suggestion',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'That might be a better option.',
    sentenceZh: '那可能是一个更好的选择。',
    chunkList: ['That might be', 'a better option', '.'],
    keyPhrases: ['might be', 'better option'],
    functionTag: 'agreement',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'I\'m sorry, I didn\'t catch that.',
    sentenceZh: '对不起，我没听清楚。',
    chunkList: ['I\'m sorry', ',', 'I didn\'t catch', 'that', '.'],
    keyPhrases: ['I\'m sorry', 'didn\'t catch'],
    functionTag: 'clarification',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'Could you explain that in more detail?',
    sentenceZh: '您能更详细地解释一下吗？',
    chunkList: ['Could you', 'explain that', 'in more detail', '?'],
    keyPhrases: ['Could you', 'explain', 'more detail'],
    functionTag: 'clarification',
    topicTag: 'speaking',
    difficulty: 3
  },
  {
    sentence: 'From my point of view, this is the best solution.',
    sentenceZh: '从我的角度来看，这是最好的解决方案。',
    chunkList: ['From my point of view', ',', 'this is', 'the best solution', '.'],
    keyPhrases: ['From my point of view', 'best solution'],
    functionTag: 'opinion',
    topicTag: 'speaking',
    difficulty: 3
  },
  {
    sentence: 'What I mean is that we need more time.',
    sentenceZh: '我的意思是我们需要更多时间。',
    chunkList: ['What I mean', 'is that', 'we need', 'more time', '.'],
    keyPhrases: ['What I mean', 'need more time'],
    functionTag: 'clarification',
    topicTag: 'speaking',
    difficulty: 3
  },
  {
    sentence: 'Let me give you an example.',
    sentenceZh: '让我给你举个例子。',
    chunkList: ['Let me', 'give you', 'an example', '.'],
    keyPhrases: ['Let me', 'give you', 'example'],
    functionTag: 'explanation',
    topicTag: 'speaking',
    difficulty: 2
  },
  {
    sentence: 'To be honest, I don\'t really like that idea.',
    sentenceZh: '说实话，我不是很喜欢那个想法。',
    chunkList: ['To be honest', ',', 'I don\'t really like', 'that idea', '.'],
    keyPhrases: ['To be honest', 'don\'t like', 'idea'],
    functionTag: 'opinion',
    topicTag: 'speaking',
    difficulty: 3
  },
  {
    sentence: 'That reminds me of something similar.',
    sentenceZh: '那让我想起了类似的事情。',
    chunkList: ['That reminds me', 'of', 'something similar', '.'],
    keyPhrases: ['reminds me', 'something similar'],
    functionTag: 'connection',
    topicTag: 'speaking',
    difficulty: 3
  }
];