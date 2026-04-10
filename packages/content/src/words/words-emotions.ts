/**
 * Emotions & Psychology Vocabulary for PET B1
 */

import { WordCard } from 'shared-types';

export const emotionsWords: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    word: 'happy',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling good',
    meaningZh: '开心的',
    exampleSentence: 'I feel happy today.',
    exampleSentenceZh: '我今天感到开心。',
    topicTag: 'emotions',
    difficulty: 1
  },
  {
    word: 'sad',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling unhappy',
    meaningZh: '悲伤的',
    exampleSentence: 'She was sad when her friend left.',
    exampleSentenceZh: '朋友离开时她很悲伤。',
    topicTag: 'emotions',
    difficulty: 1
  },
  {
    word: 'angry',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling mad',
    meaningZh: '生气的',
    exampleSentence: 'He was angry about the mistake.',
    exampleSentenceZh: '他对错误感到生气。',
    topicTag: 'emotions',
    difficulty: 1
  },
  {
    word: 'excited',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling very happy',
    meaningZh: '兴奋的',
    exampleSentence: 'Children are excited about Christmas.',
    exampleSentenceZh: '孩子们对圣诞节感到兴奋。',
    topicTag: 'emotions',
    difficulty: 1
  },
  {
    word: 'worried',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling anxious',
    meaningZh: '担心的',
    exampleSentence: 'I\'m worried about the test.',
    exampleSentenceZh: '我担心考试。',
    topicTag: 'emotions',
    difficulty: 1
  },
  {
    word: 'afraid',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling fear',
    meaningZh: '害怕的',
    exampleSentence: 'She is afraid of spiders.',
    exampleSentenceZh: '她害怕蜘蛛。',
    topicTag: 'emotions',
    difficulty: 1
  },
  {
    word: 'scared',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'frightened',
    meaningZh: '害怕的',
    exampleSentence: 'The loud noise scared me.',
    exampleSentenceZh: '大声的噪音吓到我了。',
    topicTag: 'emotions',
    difficulty: 1
  },
  {
    word: 'surprised',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling unexpected',
    meaningZh: '惊讶的',
    exampleSentence: 'I was surprised by the gift.',
    exampleSentenceZh: '我对礼物感到惊讶。',
    topicTag: 'emotions',
    difficulty: 1
  },
  {
    word: 'disappointed',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling let down',
    meaningZh: '失望的',
    exampleSentence: 'He was disappointed with the result.',
    exampleSentenceZh: '他对结果感到失望。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'proud',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling pleased about achievement',
    meaningZh: '自豪的',
    exampleSentence: 'She is proud of her son.',
    exampleSentenceZh: '她为儿子感到自豪。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'jealous',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'wanting what others have',
    meaningZh: '嫉妒的',
    exampleSentence: 'He felt jealous of his friend\'s success.',
    exampleSentenceZh: '他对朋友的成功感到嫉妒。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'nervous',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling anxious',
    meaningZh: '紧张的',
    exampleSentence: 'I feel nervous before speaking in public.',
    exampleSentenceZh: '在公众面前讲话前我感到紧张。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'calm',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'peaceful, not excited',
    meaningZh: '平静的',
    exampleSentence: 'Stay calm in emergencies.',
    exampleSentenceZh: '在紧急情况下保持冷静。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'bored',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not interested',
    meaningZh: '无聊的',
    exampleSentence: 'Children get bored easily.',
    exampleSentenceZh: '孩子们容易感到无聊。',
    topicTag: 'emotions',
    difficulty: 1
  },
  {
    word: 'tired',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'needing rest',
    meaningZh: '疲劳的',
    exampleSentence: 'I\'m tired after work.',
    exampleSentenceZh: '工作后我很累。',
    topicTag: 'emotions',
    difficulty: 1
  },
  {
    word: 'lonely',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling alone',
    meaningZh: '孤独的',
    exampleSentence: 'She feels lonely in the new city.',
    exampleSentenceZh: '她在新城市感到孤独。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'confident',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling sure',
    meaningZh: '自信的',
    exampleSentence: 'Be confident in your abilities.',
    exampleSentenceZh: '对自己的能力有信心。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'shy',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'nervous with people',
    meaningZh: '害羞的',
    exampleSentence: 'She is shy around strangers.',
    exampleSentenceZh: '她在陌生人面前害羞。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'brave',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'showing courage',
    meaningZh: '勇敢的',
    exampleSentence: 'Firefighters are brave.',
    exampleSentenceZh: '消防员很勇敢。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'curious',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'wanting to know',
    meaningZh: '好奇的',
    exampleSentence: 'Children are naturally curious.',
    exampleSentenceZh: '孩子天生好奇。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'confused',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not understanding',
    meaningZh: '困惑的',
    exampleSentence: 'I\'m confused by these instructions.',
    exampleSentenceZh: '这些说明让我困惑。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'embarrassed',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling ashamed',
    meaningZh: '尴尬的',
    exampleSentence: 'He was embarrassed by his mistake.',
    exampleSentenceZh: '他对自己的错误感到尴尬。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'grateful',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling thankful',
    meaningZh: '感激的',
    exampleSentence: 'I\'m grateful for your help.',
    exampleSentenceZh: '我感激你的帮助。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'guilty',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling responsible for wrong',
    meaningZh: '内疚的',
    exampleSentence: 'She felt guilty about lying.',
    exampleSentenceZh: '她对撒谎感到内疚。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'hopeful',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling hope',
    meaningZh: '有希望的',
    exampleSentence: 'We are hopeful about the future.',
    exampleSentenceZh: '我们对未来充满希望。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'relieved',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'feeling better after worry',
    meaningZh: ' relieved的',
    exampleSentence: 'I was relieved to hear the good news.',
    exampleSentenceZh: '听到好消息我感到 relieved。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'upset',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'unhappy or disturbed',
    meaningZh: '心烦的',
    exampleSentence: 'She was upset by the news.',
    exampleSentenceZh: '她被消息弄得心烦。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'miserable',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'very unhappy',
    meaningZh: '痛苦的',
    exampleSentence: 'He felt miserable with a cold.',
    exampleSentenceZh: '他感冒了感到痛苦。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'delighted',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'very pleased',
    meaningZh: '高兴的',
    exampleSentence: 'We were delighted with the results.',
    exampleSentenceZh: '我们对结果感到高兴。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'thrilled',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'very excited',
    meaningZh: '激动的',
    exampleSentence: 'She was thrilled to win.',
    exampleSentenceZh: '她赢了很激动。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'anxious',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'worried',
    meaningZh: '焦虑的',
    exampleSentence: 'He feels anxious before exams.',
    exampleSentenceZh: '考试前他感到焦虑。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'stressed',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'under pressure',
    meaningZh: '有压力的',
    exampleSentence: 'Many people feel stressed at work.',
    exampleSentenceZh: '许多人在工作中感到有压力。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'relaxed',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'calm and comfortable',
    meaningZh: '放松的',
    exampleSentence: 'I feel relaxed on vacation.',
    exampleSentenceZh: '我在假期感到放松。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'peaceful',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'calm and quiet',
    meaningZh: '和平的',
    exampleSentence: 'The countryside is peaceful.',
    exampleSentenceZh: '乡村很和平。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'cheerful',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'happy and positive',
    meaningZh: '快乐的',
    exampleSentence: 'She has a cheerful personality.',
    exampleSentenceZh: '她性格快乐。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'sensitive',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'easily affected',
    meaningZh: '敏感的',
    exampleSentence: 'He is sensitive to criticism.',
    exampleSentenceZh: '他对批评敏感。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'sensible',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'showing good judgment',
    meaningZh: '明智的',
    exampleSentence: 'Make sensible decisions.',
    exampleSentenceZh: '做明智的决定。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'emotional',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'showing strong feelings',
    meaningZh: '情感的',
    exampleSentence: 'It was an emotional moment.',
    exampleSentenceZh: '那是一个情感时刻。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'mood',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'how you feel',
    meaningZh: '心情',
    exampleSentence: 'She\'s in a good mood today.',
    exampleSentenceZh: '她今天心情好。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'feeling',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'emotion',
    meaningZh: '感觉',
    exampleSentence: 'I have a strange feeling.',
    exampleSentenceZh: '我有一种奇怪的感觉。',
    topicTag: 'emotions',
    difficulty: 1
  },
  {
    word: 'emotion',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'strong feeling',
    meaningZh: '情感',
    exampleSentence: 'Love is a powerful emotion.',
    exampleSentenceZh: '爱是一种 powerful的情感。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'passion',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'strong enthusiasm',
    meaningZh: '热情',
    exampleSentence: 'He has a passion for music.',
    exampleSentenceZh: '他对音乐有热情。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'desire',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'strong want',
    meaningZh: '欲望',
    exampleSentence: 'She has a desire to succeed.',
    exampleSentenceZh: '她有成功的欲望。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'fear',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling of being afraid',
    meaningZh: '恐惧',
    exampleSentence: 'Fear can be paralyzing.',
    exampleSentenceZh: '恐惧可能使人瘫痪。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'anger',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'strong displeasure',
    meaningZh: '愤怒',
    exampleSentence: 'He couldn\'t control his anger.',
    exampleSentenceZh: '他无法控制愤怒。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'joy',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'great happiness',
    meaningZh: '快乐',
    exampleSentence: 'The news brought us joy.',
    exampleSentenceZh: '消息给我们带来快乐。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'sorrow',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'deep sadness',
    meaningZh: '悲伤',
    exampleSentence: 'They felt great sorrow.',
    exampleSentenceZh: '他们感到巨大的悲伤。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'love',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'deep affection',
    meaningZh: '爱',
    exampleSentence: 'Mother\'s love is unconditional.',
    exampleSentenceZh: '母爱是无条件的。',
    topicTag: 'emotions',
    difficulty: 1
  },
  {
    word: 'hate',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'strong dislike',
    meaningZh: '恨',
    exampleSentence: 'Hate is a destructive emotion.',
    exampleSentenceZh: '恨是一种 destructive的情感。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'envy',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'jealousy',
    meaningZh: '嫉妒',
    exampleSentence: 'Envy can ruin friendships.',
    exampleSentenceZh: '嫉妒可能毁掉友谊。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'pride',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling of satisfaction',
    meaningZh: '自豪',
    exampleSentence: 'He took pride in his work.',
    exampleSentenceZh: '他为自己的工作感到自豪。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'shame',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling of guilt',
    meaningZh: '羞耻',
    exampleSentence: 'She felt shame for her actions.',
    exampleSentenceZh: '她为自己的行为感到羞耻。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'guilt',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling of having done wrong',
    meaningZh: '内疚',
    exampleSentence: 'Guilt kept him awake.',
    exampleSentenceZh: '内疚让他睡不着。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'anxiety',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'worry or nervousness',
    meaningZh: '焦虑',
    exampleSentence: 'Anxiety can affect health.',
    exampleSentenceZh: '焦虑可能影响健康。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'stress',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'pressure or tension',
    meaningZh: '压力',
    exampleSentence: 'Too much stress is harmful.',
    exampleSentenceZh: '太多压力是有害的。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'depression',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'extreme sadness',
    meaningZh: '抑郁',
    exampleSentence: 'Depression is a serious illness.',
    exampleSentenceZh: '抑郁是一种严重的疾病。',
    topicTag: 'emotions',
    difficulty: 3
  },
  {
    word: 'happiness',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'state of being happy',
    meaningZh: '幸福',
    exampleSentence: 'Money doesn\'t guarantee happiness.',
    exampleSentenceZh: '金钱不能保证幸福。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'sadness',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'state of being sad',
    meaningZh: '悲伤',
    exampleSentence: 'There was sadness in her eyes.',
    exampleSentenceZh: '她眼中有悲伤。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'contentment',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'satisfaction',
    meaningZh: '满足',
    exampleSentence: 'He found contentment in simple things.',
    exampleSentenceZh: '他在简单的事物中找到满足。',
    topicTag: 'emotions',
    difficulty: 3
  },
  {
    word: 'frustration',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling of annoyance',
    meaningZh: '挫折',
    exampleSentence: 'He expressed his frustration.',
    exampleSentenceZh: '他表达了他的挫折。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'disappointment',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling of being let down',
    meaningZh: '失望',
    exampleSentence: 'The loss was a disappointment.',
    exampleSentenceZh: '失败是一种失望。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'excitement',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling of excitement',
    meaningZh: '兴奋',
    exampleSentence: 'There was excitement in the air.',
    exampleSentenceZh: '空气中有兴奋。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'surprise',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'unexpected event',
    meaningZh: '惊喜',
    exampleSentence: 'The party was a surprise.',
    exampleSentenceZh: '派对是一个惊喜。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'shock',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'sudden strong feeling',
    meaningZh: '震惊',
    exampleSentence: 'The news came as a shock.',
    exampleSentenceZh: '消息令人震惊。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'relief',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling of comfort',
    meaningZh: ' relief',
    exampleSentence: 'What a relief!',
    exampleSentenceZh: '真是 relief！',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'hope',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling of expectation',
    meaningZh: '希望',
    exampleSentence: 'Never lose hope.',
    exampleSentenceZh: '永远不要失去希望。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'despair',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'complete loss of hope',
    meaningZh: '绝望',
    exampleSentence: 'He felt despair.',
    exampleSentenceZh: '他感到绝望。',
    topicTag: 'emotions',
    difficulty: 3
  },
  {
    word: 'loneliness',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling of being alone',
    meaningZh: '孤独',
    exampleSentence: 'Loneliness can be painful.',
    exampleSentenceZh: '孤独可能是痛苦的。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'sympathy',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'understanding others\' feelings',
    meaningZh: '同情',
    exampleSentence: 'I have sympathy for her situation.',
    exampleSentenceZh: '我同情她的处境。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'empathy',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling what others feel',
    meaningZh: '共情',
    exampleSentence: 'Empathy helps understanding.',
    exampleSentenceZh: '共情帮助理解。',
    topicTag: 'emotions',
    difficulty: 3
  },
  {
    word: 'compassion',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'deep sympathy',
    meaningZh: '同情',
    exampleSentence: 'Show compassion to others.',
    exampleSentenceZh: '向他人表示同情。',
    topicTag: 'emotions',
    difficulty: 3
  },
  {
    word: 'affection',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'gentle feeling of liking',
    meaningZh: ' affection',
    exampleSentence: 'She showed affection to her pet.',
    exampleSentenceZh: '她对宠物表示 affection。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'attraction',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling of being drawn to',
    meaningZh: '吸引',
    exampleSentence: 'There was an immediate attraction.',
    exampleSentenceZh: '有 immediate的吸引。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'admiration',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'respect and approval',
    meaningZh: '钦佩',
    exampleSentence: 'I have admiration for her courage.',
    exampleSentenceZh: '我钦佩她的勇气。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'respect',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'admiration for someone',
    meaningZh: '尊重',
    exampleSentence: 'Earn respect through actions.',
    exampleSentenceZh: '通过行动赢得尊重。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'trust',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'belief in reliability',
    meaningZh: '信任',
    exampleSentence: 'Trust is important in relationships.',
    exampleSentenceZh: '信任在关系中很重要。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'betrayal',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'breaking trust',
    meaningZh: '背叛',
    exampleSentence: 'The betrayal hurt deeply.',
    exampleSentenceZh: '背叛 deeply地伤害。',
    topicTag: 'emotions',
    difficulty: 3
  },
  {
    word: 'forgiveness',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'act of forgiving',
    meaningZh: '原谅',
    exampleSentence: 'Forgiveness can heal wounds.',
    exampleSentenceZh: '原谅可以治愈伤口。',
    topicTag: 'emotions',
    difficulty: 3
  },
  {
    word: 'regret',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling sorry about past',
    meaningZh: '后悔',
    exampleSentence: 'I have no regrets.',
    exampleSentenceZh: '我没有后悔。',
    topicTag: 'emotions',
    difficulty: 2
  },
  {
    word: 'remorse',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'deep regret',
    meaningZh: ' remorse',
    exampleSentence: 'He showed remorse for his actions.',
    exampleSentenceZh: '他对自己的行为表示 remorse。',
    topicTag: 'emotions',
    difficulty: 3
  },
  {
    word: 'nostalgia',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'longing for the past',
    meaningZh: ' nostalgia',
    exampleSentence: 'The photo caused nostalgia.',
    exampleSentenceZh: '照片引起 nostalgia。',
    topicTag: 'emotions',
    difficulty: 3
  },
  {
    word: 'sentiment',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'feeling or emotion',
    meaningZh: ' sentiment',
    exampleSentence: 'The card expressed sweet sentiment.',
    exampleSentenceZh: '卡片表达了 sweet sentiment。',
    topicTag: 'emotions',
    difficulty: 3
  }
];