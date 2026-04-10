/**
 * Adjectives and Adverbs Vocabulary for PET B1
 */

import { WordCard } from 'shared-types';

export const adjAdvWords: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    word: 'good',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'of high quality',
    meaningZh: '好的',
    exampleSentence: 'This is a good book.',
    exampleSentenceZh: '这是一本好书。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'bad',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'of low quality',
    meaningZh: '坏的',
    exampleSentence: 'The weather is bad today.',
    exampleSentenceZh: '今天天气不好。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'big',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'large in size',
    meaningZh: '大的',
    exampleSentence: 'They live in a big house.',
    exampleSentenceZh: '他们住在一所大房子里。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'small',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'little in size',
    meaningZh: '小的',
    exampleSentence: 'I have a small car.',
    exampleSentenceZh: '我有一辆小汽车。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'long',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'measuring much from end to end',
    meaningZh: '长的',
    exampleSentence: 'She has long hair.',
    exampleSentenceZh: '她有长发。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'short',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'measuring little from end to end',
    meaningZh: '短的',
    exampleSentence: 'He is wearing short trousers.',
    exampleSentenceZh: '他穿着短裤。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'tall',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'of great height',
    meaningZh: '高的',
    exampleSentence: 'The building is very tall.',
    exampleSentenceZh: '这座建筑非常高。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'high',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'far above the ground',
    meaningZh: '高的',
    exampleSentence: 'The mountain is high.',
    exampleSentenceZh: '这座山很高。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'low',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not high or tall',
    meaningZh: '低的',
    exampleSentence: 'The table is too low.',
    exampleSentenceZh: '桌子太低了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'wide',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'measuring a lot from side to side',
    meaningZh: '宽的',
    exampleSentence: 'The river is wide here.',
    exampleSentenceZh: '这里的河很宽。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'narrow',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'measuring little from side to side',
    meaningZh: '窄的',
    exampleSentence: 'The street is very narrow.',
    exampleSentenceZh: '这条街很窄。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'thick',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'measuring a lot between opposite surfaces',
    meaningZh: '厚的',
    exampleSentence: 'The book is very thick.',
    exampleSentenceZh: '这本书很厚。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'thin',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'measuring little between opposite surfaces',
    meaningZh: '薄的',
    exampleSentence: 'The paper is thin.',
    exampleSentenceZh: '纸很薄。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'heavy',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'weighing a lot',
    meaningZh: '重的',
    exampleSentence: 'The box is too heavy.',
    exampleSentenceZh: '这个箱子太重了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'light',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not weighing much',
    meaningZh: '轻的',
    exampleSentence: 'The bag is light.',
    exampleSentenceZh: '这个包很轻。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'hot',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'having high temperature',
    meaningZh: '热的',
    exampleSentence: 'The tea is too hot.',
    exampleSentenceZh: '茶太热了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'cold',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'having low temperature',
    meaningZh: '冷的',
    exampleSentence: 'The water is cold.',
    exampleSentenceZh: '水是冷的。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'warm',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'pleasantly hot',
    meaningZh: '温暖的',
    exampleSentence: 'The room is warm.',
    exampleSentenceZh: '房间很温暖。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'cool',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'pleasantly cold',
    meaningZh: '凉爽的',
    exampleSentence: 'The weather is cool today.',
    exampleSentenceZh: '今天天气凉爽。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'wet',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'covered with liquid',
    meaningZh: '湿的',
    exampleSentence: 'The ground is wet after rain.',
    exampleSentenceZh: '雨后地面是湿的。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'dry',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not wet',
    meaningZh: '干的',
    exampleSentence: 'The clothes are dry now.',
    exampleSentenceZh: '衣服现在干了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'clean',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not dirty',
    meaningZh: '干净的',
    exampleSentence: 'The kitchen is clean.',
    exampleSentenceZh: '厨房很干净。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'dirty',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not clean',
    meaningZh: '脏的',
    exampleSentence: 'Your hands are dirty.',
    exampleSentenceZh: '你的手脏了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'new',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'recently made or bought',
    meaningZh: '新的',
    exampleSentence: 'I have a new phone.',
    exampleSentenceZh: '我有一个新手机。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'old',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'having existed for a long time',
    meaningZh: '旧的，老的',
    exampleSentence: 'This is an old building.',
    exampleSentenceZh: '这是一座旧建筑。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'young',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'having lived for a short time',
    meaningZh: '年轻的',
    exampleSentence: 'She is very young.',
    exampleSentenceZh: '她很年轻。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'fast',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'moving quickly',
    meaningZh: '快的',
    exampleSentence: 'He is a fast runner.',
    exampleSentenceZh: '他跑得很快。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'slow',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'moving without speed',
    meaningZh: '慢的',
    exampleSentence: 'The traffic is slow today.',
    exampleSentenceZh: '今天交通很慢。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'hard',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'solid and firm',
    meaningZh: '硬的',
    exampleSentence: 'The wood is hard.',
    exampleSentenceZh: '木头很硬。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'soft',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not hard',
    meaningZh: '软的',
    exampleSentence: 'The bed is soft.',
    exampleSentenceZh: '床很软。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'easy',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not difficult',
    meaningZh: '容易的',
    exampleSentence: 'The test was easy.',
    exampleSentenceZh: '测试很容易。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'difficult',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not easy',
    meaningZh: '困难的',
    exampleSentence: 'The question is difficult.',
    exampleSentenceZh: '这个问题很难。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'simple',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'easy to understand',
    meaningZh: '简单的',
    exampleSentence: 'The instructions are simple.',
    exampleSentenceZh: '说明很简单。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'complex',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'complicated',
    meaningZh: '复杂的',
    exampleSentence: 'The problem is complex.',
    exampleSentenceZh: '这个问题很复杂。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'clear',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'easy to understand',
    meaningZh: '清楚的',
    exampleSentence: 'Her explanation was clear.',
    exampleSentenceZh: '她的解释很清楚。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'dark',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'with little light',
    meaningZh: '黑暗的',
    exampleSentence: 'It\'s dark outside.',
    exampleSentenceZh: '外面很黑。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'bright',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'full of light',
    meaningZh: '明亮的',
    exampleSentence: 'The room is bright.',
    exampleSentenceZh: '房间很明亮。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'quiet',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'making little noise',
    meaningZh: '安静的',
    exampleSentence: 'The library is quiet.',
    exampleSentenceZh: '图书馆很安静。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'loud',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'making a lot of noise',
    meaningZh: '大声的',
    exampleSentence: 'The music is too loud.',
    exampleSentenceZh: '音乐太大声了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'safe',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not dangerous',
    meaningZh: '安全的',
    exampleSentence: 'This neighborhood is safe.',
    exampleSentenceZh: '这个社区很安全。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'dangerous',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'able to cause harm',
    meaningZh: '危险的',
    exampleSentence: 'Swimming here is dangerous.',
    exampleSentenceZh: '在这里游泳很危险。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'full',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'containing as much as possible',
    meaningZh: '满的',
    exampleSentence: 'The glass is full.',
    exampleSentenceZh: '杯子是满的。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'empty',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'containing nothing',
    meaningZh: '空的',
    exampleSentence: 'The bottle is empty.',
    exampleSentenceZh: '瓶子是空的。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'rich',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'having a lot of money',
    meaningZh: '富有的',
    exampleSentence: 'He is very rich.',
    exampleSentenceZh: '他很有钱。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'poor',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'having little money',
    meaningZh: '贫穷的',
    exampleSentence: 'They are poor but happy.',
    exampleSentenceZh: '他们贫穷但快乐。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'strong',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'having great power',
    meaningZh: '强壮的',
    exampleSentence: 'He is very strong.',
    exampleSentenceZh: '他很强壮。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'weak',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not strong',
    meaningZh: '虚弱的',
    exampleSentence: 'She feels weak today.',
    exampleSentenceZh: '她今天感到虚弱。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'beautiful',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'very nice to look at',
    meaningZh: '美丽的',
    exampleSentence: 'The view is beautiful.',
    exampleSentenceZh: '景色很美。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'ugly',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not nice to look at',
    meaningZh: '丑陋的',
    exampleSentence: 'The building is ugly.',
    exampleSentenceZh: '这座建筑很丑。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'important',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'of great value',
    meaningZh: '重要的',
    exampleSentence: 'This is an important decision.',
    exampleSentenceZh: '这是一个重要的决定。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'interesting',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'attracting attention',
    meaningZh: '有趣的',
    exampleSentence: 'The book is very interesting.',
    exampleSentenceZh: '这本书很有趣。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'boring',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not interesting',
    meaningZh: '无聊的',
    exampleSentence: 'The movie was boring.',
    exampleSentenceZh: '这部电影很无聊。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'exciting',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'causing excitement',
    meaningZh: '令人兴奋的',
    exampleSentence: 'The game was exciting.',
    exampleSentenceZh: '比赛很令人兴奋。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'funny',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'causing laughter',
    meaningZh: '有趣的，滑稽的',
    exampleSentence: 'He told a funny story.',
    exampleSentenceZh: '他讲了一个有趣的故事。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'serious',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not joking',
    meaningZh: '严肃的',
    exampleSentence: 'This is a serious matter.',
    exampleSentenceZh: '这是一件严肃的事情。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'strange',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'unusual or surprising',
    meaningZh: '奇怪的',
    exampleSentence: 'That\'s a strange sound.',
    exampleSentenceZh: '那是一个奇怪的声音。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'normal',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'usual or ordinary',
    meaningZh: '正常的',
    exampleSentence: 'This is normal behavior.',
    exampleSentenceZh: '这是正常行为。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'typical',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'showing the usual qualities',
    meaningZh: '典型的',
    exampleSentence: 'This is typical English weather.',
    exampleSentenceZh: '这是典型的英国天气。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'general',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'affecting all or most',
    meaningZh: '一般的',
    exampleSentence: 'This is a general rule.',
    exampleSentenceZh: '这是一般规则。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'special',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'different from usual',
    meaningZh: '特殊的',
    exampleSentence: 'Today is a special day.',
    exampleSentenceZh: '今天是一个特殊的日子。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'common',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'happening often',
    meaningZh: '常见的',
    exampleSentence: 'This is a common problem.',
    exampleSentenceZh: '这是一个常见的问题。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'rare',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not happening often',
    meaningZh: '罕见的',
    exampleSentence: 'This bird is rare.',
    exampleSentenceZh: '这种鸟很罕见。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'particular',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'specific',
    meaningZh: '特定的',
    exampleSentence: 'I\'m looking for a particular book.',
    exampleSentenceZh: '我在找一本特定的书。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'certain',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'sure or definite',
    meaningZh: '确定的',
    exampleSentence: 'I\'m certain about this.',
    exampleSentenceZh: '我对此很确定。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'obvious',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'easy to see or understand',
    meaningZh: '明显的',
    exampleSentence: 'The answer is obvious.',
    exampleSentenceZh: '答案很明显。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'happy',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling pleasure',
    meaningZh: '快乐的',
    exampleSentence: 'She looks happy today.',
    exampleSentenceZh: '她今天看起来很快乐。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'sad',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling unhappy',
    meaningZh: '悲伤的',
    exampleSentence: 'He was sad when his friend left.',
    exampleSentenceZh: '朋友离开时他很悲伤。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'angry',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling strong displeasure',
    meaningZh: '生气的',
    exampleSentence: 'My father was angry with me.',
    exampleSentenceZh: '我父亲对我很生气。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'tired',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'needing rest',
    meaningZh: '疲倦的',
    exampleSentence: 'I\'m tired after work.',
    exampleSentenceZh: '下班后我很累。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'hungry',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'needing food',
    meaningZh: '饥饿的',
    exampleSentence: 'The children are hungry.',
    exampleSentenceZh: '孩子们饿了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'thirsty',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'needing drink',
    meaningZh: '口渴的',
    exampleSentence: 'I\'m thirsty after exercise.',
    exampleSentenceZh: '运动后我口渴了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'busy',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'having much to do',
    meaningZh: '忙碌的',
    exampleSentence: 'I\'m busy this week.',
    exampleSentenceZh: '我这周很忙。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'free',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not busy',
    meaningZh: '空闲的',
    exampleSentence: 'Are you free tomorrow?',
    exampleSentenceZh: '你明天有空吗？',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'ready',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'prepared',
    meaningZh: '准备好的',
    exampleSentence: 'Dinner is ready.',
    exampleSentenceZh: '晚餐准备好了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'late',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'after the usual time',
    meaningZh: '迟到的',
    exampleSentence: 'I\'m late for school.',
    exampleSentenceZh: '我上学迟到了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'early',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'before the usual time',
    meaningZh: '早的',
    exampleSentence: 'We caught an early train.',
    exampleSentenceZh: '我们赶上了早班火车。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'right',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'correct',
    meaningZh: '正确的',
    exampleSentence: 'Your answer is right.',
    exampleSentenceZh: '你的答案是正确的。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'wrong',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not correct',
    meaningZh: '错误的',
    exampleSentence: 'That\'s the wrong answer.',
    exampleSentenceZh: '那是错误的答案。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'true',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'based on facts',
    meaningZh: '真实的',
    exampleSentence: 'Is that story true?',
    exampleSentenceZh: '那个故事是真的吗？',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'false',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not true',
    meaningZh: '假的',
    exampleSentence: 'The information is false.',
    exampleSentenceZh: '信息是假的。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'real',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'actually existing',
    meaningZh: '真实的',
    exampleSentence: 'Is that real gold?',
    exampleSentenceZh: '那是真金吗？',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'fake',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not real',
    meaningZh: '假的',
    exampleSentence: 'The painting is fake.',
    exampleSentenceZh: '这幅画是假的。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'open',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not closed',
    meaningZh: '开着的',
    exampleSentence: 'The door is open.',
    exampleSentenceZh: '门开着。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'closed',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not open',
    meaningZh: '关着的',
    exampleSentence: 'The shop is closed.',
    exampleSentenceZh: '商店关门了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'broken',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'damaged',
    meaningZh: '坏的',
    exampleSentence: 'My watch is broken.',
    exampleSentenceZh: '我的手表坏了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'fixed',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'repaired',
    meaningZh: '修好的',
    exampleSentence: 'The computer is fixed now.',
    exampleSentenceZh: '电脑现在修好了。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'expensive',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'costing a lot of money',
    meaningZh: '昂贵的',
    exampleSentence: 'This car is expensive.',
    exampleSentenceZh: '这辆车很贵。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'cheap',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'costing little money',
    meaningZh: '便宜的',
    exampleSentence: 'The food is cheap here.',
    exampleSentenceZh: '这里的食物很便宜。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'valuable',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'worth a lot of money',
    meaningZh: '有价值的',
    exampleSentence: 'This ring is valuable.',
    exampleSentenceZh: '这枚戒指很有价值。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'worthless',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'having no value',
    meaningZh: '无价值的',
    exampleSentence: 'The old coin is worthless.',
    exampleSentenceZh: '这枚旧硬币毫无价值。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'modern',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'of the present time',
    meaningZh: '现代的',
    exampleSentence: 'This is a modern building.',
    exampleSentenceZh: '这是一座现代建筑。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'traditional',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'following old ways',
    meaningZh: '传统的',
    exampleSentence: 'We eat traditional food.',
    exampleSentenceZh: '我们吃传统食物。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'ancient',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'very old',
    meaningZh: '古代的',
    exampleSentence: 'We visited ancient ruins.',
    exampleSentenceZh: '我们参观了古代遗址。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'fresh',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'recently made or gathered',
    meaningZh: '新鲜的',
    exampleSentence: 'I bought fresh bread.',
    exampleSentenceZh: '我买了新鲜面包。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'stale',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not fresh',
    meaningZh: '不新鲜的',
    exampleSentence: 'The bread is stale.',
    exampleSentenceZh: '面包不新鲜了。',
    topicTag: 'adjective',
    difficulty: 2
  },
  {
    word: 'healthy',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'good for health',
    meaningZh: '健康的',
    exampleSentence: 'Fruit is healthy.',
    exampleSentenceZh: '水果是健康的。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'unhealthy',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'bad for health',
    meaningZh: '不健康的',
    exampleSentence: 'Smoking is unhealthy.',
    exampleSentenceZh: '吸烟不健康。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'sick',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'ill',
    meaningZh: '生病的',
    exampleSentence: 'I feel sick today.',
    exampleSentenceZh: '我今天感觉不舒服。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'well',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'healthy',
    meaningZh: '健康的',
    exampleSentence: 'I hope you get well soon.',
    exampleSentenceZh: '我希望你早日康复。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'alive',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'living',
    meaningZh: '活着的',
    exampleSentence: 'The plant is still alive.',
    exampleSentenceZh: '植物还活着。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'dead',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not alive',
    meaningZh: '死的',
    exampleSentence: 'The flowers are dead.',
    exampleSentenceZh: '花死了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'asleep',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'sleeping',
    meaningZh: '睡着的',
    exampleSentence: 'The baby is asleep.',
    exampleSentenceZh: '婴儿睡着了。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'awake',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not sleeping',
    meaningZh: '醒着的',
    exampleSentence: 'I was awake all night.',
    exampleSentenceZh: '我整晚都醒着。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'alone',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'without other people',
    meaningZh: '单独的',
    exampleSentence: 'She lives alone.',
    exampleSentenceZh: '她独自生活。',
    topicTag: 'adjective',
    difficulty: 1
  },
  {
    word: 'together',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'with each other',
    meaningZh: '一起',
    exampleSentence: 'Let\'s work together.',
    exampleSentenceZh: '让我们一起工作。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'quickly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'with speed',
    meaningZh: '快速地',
    exampleSentence: 'He runs quickly.',
    exampleSentenceZh: '他跑得很快。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'slowly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'without speed',
    meaningZh: '缓慢地',
    exampleSentence: 'Walk slowly on the ice.',
    exampleSentenceZh: '在冰上慢慢走。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'carefully',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'with care',
    meaningZh: '小心地',
    exampleSentence: 'Handle it carefully.',
    exampleSentenceZh: '小心处理。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'easily',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'without difficulty',
    meaningZh: '容易地',
    exampleSentence: 'I can easily do it.',
    exampleSentenceZh: '我可以轻松做到。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'hard',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'with great effort',
    meaningZh: '努力地',
    exampleSentence: 'Work hard for success.',
    exampleSentenceZh: '为成功而努力工作。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'well',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in a good way',
    meaningZh: '很好地',
    exampleSentence: 'She speaks English well.',
    exampleSentenceZh: '她英语说得很好。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'badly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in a bad way',
    meaningZh: '糟糕地',
    exampleSentence: 'He played badly.',
    exampleSentenceZh: '他打得很糟糕。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'loudly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'making much noise',
    meaningZh: '大声地',
    exampleSentence: 'Don\'t speak so loudly.',
    exampleSentenceZh: '不要这么大声说话。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'quietly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'making little noise',
    meaningZh: '安静地',
    exampleSentence: 'Please talk quietly.',
    exampleSentenceZh: '请安静地说话。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'clearly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in a clear way',
    meaningZh: '清楚地',
    exampleSentence: 'Speak clearly, please.',
    exampleSentenceZh: '请说清楚。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'directly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in a direct way',
    meaningZh: '直接地',
    exampleSentence: 'Go directly home.',
    exampleSentenceZh: '直接回家。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'completely',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'totally',
    meaningZh: '完全地',
    exampleSentence: 'I completely agree.',
    exampleSentenceZh: '我完全同意。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'totally',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'completely',
    meaningZh: '完全地',
    exampleSentence: 'That\'s totally wrong.',
    exampleSentenceZh: '那完全错了。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'absolutely',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'completely',
    meaningZh: '绝对地',
    exampleSentence: 'You are absolutely right.',
    exampleSentenceZh: '你绝对正确。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'probably',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'likely to happen',
    meaningZh: '可能',
    exampleSentence: 'It will probably rain.',
    exampleSentenceZh: '可能会下雨。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'possibly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'maybe',
    meaningZh: '可能',
    exampleSentence: 'I\'ll possibly come.',
    exampleSentenceZh: '我可能会来。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'definitely',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'without doubt',
    meaningZh: '肯定地',
    exampleSentence: 'I\'ll definitely be there.',
    exampleSentenceZh: '我肯定会在那里。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'certainly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'without doubt',
    meaningZh: '肯定地',
    exampleSentence: 'I will certainly help.',
    exampleSentenceZh: '我肯定会帮忙。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'maybe',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'perhaps',
    meaningZh: '也许',
    exampleSentence: 'Maybe we should wait.',
    exampleSentenceZh: '也许我们应该等。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'perhaps',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'maybe',
    meaningZh: '也许',
    exampleSentence: 'Perhaps you are right.',
    exampleSentenceZh: '也许你是对的。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'usually',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'most of the time',
    meaningZh: '通常',
    exampleSentence: 'I usually get up early.',
    exampleSentenceZh: '我通常早起。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'normally',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'usually',
    meaningZh: '通常',
    exampleSentence: 'I normally walk to work.',
    exampleSentenceZh: '我通常步行上班。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'generally',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'usually',
    meaningZh: '通常',
    exampleSentence: 'I generally eat at home.',
    exampleSentenceZh: '我通常在家吃饭。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'especially',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'particularly',
    meaningZh: '特别',
    exampleSentence: 'I like fruit, especially apples.',
    exampleSentenceZh: '我喜欢水果，特别是苹果。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'particularly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'especially',
    meaningZh: '特别',
    exampleSentence: 'I like this book particularly.',
    exampleSentenceZh: '我特别喜欢这本书。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'mainly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'mostly',
    meaningZh: '主要地',
    exampleSentence: 'I eat mainly vegetables.',
    exampleSentenceZh: '我主要吃蔬菜。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'mostly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'mainly',
    meaningZh: '主要地',
    exampleSentence: 'The audience was mostly young.',
    exampleSentenceZh: '观众主要是年轻人。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'nearly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'almost',
    meaningZh: '几乎',
    exampleSentence: 'I\'m nearly ready.',
    exampleSentenceZh: '我几乎准备好了。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'almost',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'nearly',
    meaningZh: '几乎',
    exampleSentence: 'I almost forgot.',
    exampleSentenceZh: '我几乎忘记了。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'hardly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'almost not',
    meaningZh: '几乎不',
    exampleSentence: 'I can hardly see.',
    exampleSentenceZh: '我几乎看不见。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'scarcely',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'almost not',
    meaningZh: '几乎不',
    exampleSentence: 'I scarcely know him.',
    exampleSentenceZh: '我几乎不认识他。',
    topicTag: 'adverb',
    difficulty: 3
  },
  {
    word: 'quite',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'fairly',
    meaningZh: '相当',
    exampleSentence: 'It\'s quite cold today.',
    exampleSentenceZh: '今天相当冷。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'fairly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'quite',
    meaningZh: '相当',
    exampleSentence: 'She is fairly tall.',
    exampleSentenceZh: '她相当高。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'rather',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'quite',
    meaningZh: '相当',
    exampleSentence: 'It\'s rather expensive.',
    exampleSentenceZh: '这相当昂贵。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'very',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'to a high degree',
    meaningZh: '非常',
    exampleSentence: 'I\'m very happy.',
    exampleSentenceZh: '我非常高兴。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'extremely',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'very much',
    meaningZh: '极其',
    exampleSentence: 'It\'s extremely hot.',
    exampleSentenceZh: '极其炎热。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'really',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'very',
    meaningZh: '真的',
    exampleSentence: 'I really like it.',
    exampleSentenceZh: '我真的很喜欢它。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'truly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'really',
    meaningZh: '真正地',
    exampleSentence: 'I truly believe it.',
    exampleSentenceZh: '我真正相信它。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'honestly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in an honest way',
    meaningZh: '诚实地',
    exampleSentence: 'Honestly, I don\'t know.',
    exampleSentenceZh: '老实说，我不知道。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'seriously',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in a serious way',
    meaningZh: '严肃地',
    exampleSentence: 'Seriously, stop joking.',
    exampleSentenceZh: '严肃地说，别开玩笑了。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'suddenly',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'quickly and unexpectedly',
    meaningZh: '突然',
    exampleSentence: 'It started raining suddenly.',
    exampleSentenceZh: '突然开始下雨了。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'immediately',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'right away',
    meaningZh: '立即',
    exampleSentence: 'Come here immediately.',
    exampleSentenceZh: '立即过来。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'soon',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in a short time',
    meaningZh: '很快',
    exampleSentence: 'I\'ll be back soon.',
    exampleSentenceZh: '我很快就回来。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'later',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'after some time',
    meaningZh: '稍后',
    exampleSentence: 'See you later.',
    exampleSentenceZh: '待会儿见。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'now',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'at this time',
    meaningZh: '现在',
    exampleSentence: 'I\'m busy now.',
    exampleSentenceZh: '我现在很忙。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'then',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'at that time',
    meaningZh: '那时',
    exampleSentence: 'I was young then.',
    exampleSentenceZh: '那时我还年轻。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'here',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in this place',
    meaningZh: '这里',
    exampleSentence: 'Come here, please.',
    exampleSentenceZh: '请来这里。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'there',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in that place',
    meaningZh: '那里',
    exampleSentence: 'Put it there.',
    exampleSentenceZh: '把它放在那里。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'everywhere',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in all places',
    meaningZh: '到处',
    exampleSentence: 'I looked everywhere.',
    exampleSentenceZh: '我到处都找了。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'somewhere',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in some place',
    meaningZh: '某处',
    exampleSentence: 'It must be somewhere here.',
    exampleSentenceZh: '它一定在这里的某个地方。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'anywhere',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in any place',
    meaningZh: '任何地方',
    exampleSentence: 'You can sit anywhere.',
    exampleSentenceZh: '你可以坐在任何地方。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'nowhere',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in no place',
    meaningZh: '无处',
    exampleSentence: 'I have nowhere to go.',
    exampleSentenceZh: '我无处可去。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'inside',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in something',
    meaningZh: '在里面',
    exampleSentence: 'Come inside, it\'s cold.',
    exampleSentenceZh: '进来吧，外面很冷。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'outside',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'not inside',
    meaningZh: '在外面',
    exampleSentence: 'The children are playing outside.',
    exampleSentenceZh: '孩子们在外面玩。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'upstairs',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'on a higher floor',
    meaningZh: '在楼上',
    exampleSentence: 'My room is upstairs.',
    exampleSentenceZh: '我的房间在楼上。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'downstairs',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'on a lower floor',
    meaningZh: '在楼下',
    exampleSentence: 'The kitchen is downstairs.',
    exampleSentenceZh: '厨房在楼下。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'forward',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'toward the front',
    meaningZh: '向前',
    exampleSentence: 'Move forward slowly.',
    exampleSentenceZh: '慢慢向前移动。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'backward',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'toward the back',
    meaningZh: '向后',
    exampleSentence: 'Step backward carefully.',
    exampleSentenceZh: '小心地向后退。',
    topicTag: 'adverb',
    difficulty: 2
  },
  {
    word: 'up',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'toward a higher position',
    meaningZh: '向上',
    exampleSentence: 'Look up at the sky.',
    exampleSentenceZh: '抬头看天空。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'down',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'toward a lower position',
    meaningZh: '向下',
    exampleSentence: 'Sit down, please.',
    exampleSentenceZh: '请坐下。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'left',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'on the left side',
    meaningZh: '向左',
    exampleSentence: 'Turn left at the corner.',
    exampleSentenceZh: '在拐角处左转。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'right',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'on the right side',
    meaningZh: '向右',
    exampleSentence: 'Turn right here.',
    exampleSentenceZh: '在这里右转。',
    topicTag: 'adverb',
    difficulty: 1
  },
  {
    word: 'straight',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'without turning',
    meaningZh: '直行',
    exampleSentence: 'Go straight ahead.',
    exampleSentenceZh: '一直往前走。',
    topicTag: 'adverb',
    difficulty: 1
  }
];