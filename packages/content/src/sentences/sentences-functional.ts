/**
 * Functional Sentences for PET B1
 * Sentences for functional situations in English
 */

import { SentenceCard } from 'shared-types';

export const functionalSentences: Omit<SentenceCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    sentence: 'Excuse me, how do I get to the train station?',
    sentenceZh: '打扰一下，请问去火车站怎么走？',
    chunkList: ['Excuse me', ',', 'how do I get to', 'the train station', '?'],
    keyPhrases: ['Excuse me', 'how do I get to', 'train station'],
    functionTag: 'asking_directions',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Turn left at the next traffic lights.',
    sentenceZh: '在下一个红绿灯处左转。',
    chunkList: ['Turn left', 'at the next traffic lights', '.'],
    keyPhrases: ['Turn left', 'traffic lights'],
    functionTag: 'giving_directions',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Go straight ahead for about 100 meters.',
    sentenceZh: '直走大约100米。',
    chunkList: ['Go straight ahead', 'for about 100 meters', '.'],
    keyPhrases: ['Go straight ahead', '100 meters'],
    functionTag: 'giving_directions',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'How much is this shirt?',
    sentenceZh: '这件衬衫多少钱？',
    chunkList: ['How much is', 'this shirt', '?'],
    keyPhrases: ['How much is', 'shirt'],
    functionTag: 'shopping_price',
    topicTag: 'functional',
    difficulty: 1
  },
  {
    sentence: 'Do you have this in size medium?',
    sentenceZh: '这个有中号吗？',
    chunkList: ['Do you have', 'this', 'in size medium', '?'],
    keyPhrases: ['Do you have', 'size medium'],
    functionTag: 'shopping_size',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Can I try this on, please?',
    sentenceZh: '请问我可以试穿这个吗？',
    chunkList: ['Can I try', 'this on', 'please', '?'],
    keyPhrases: ['Can I try', 'try on', 'please'],
    functionTag: 'shopping_try',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'I\'d like to order the chicken salad, please.',
    sentenceZh: '我想点鸡肉沙拉。',
    chunkList: ['I\'d like to order', 'the chicken salad', 'please', '.'],
    keyPhrases: ['I\'d like to order', 'chicken salad', 'please'],
    functionTag: 'restaurant_order',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Could I have the bill, please?',
    sentenceZh: '请给我账单好吗？',
    chunkList: ['Could I have', 'the bill', 'please', '?'],
    keyPhrases: ['Could I have', 'the bill', 'please'],
    functionTag: 'restaurant_bill',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'A table for two, please.',
    sentenceZh: '请安排一张两人桌。',
    chunkList: ['A table for two', 'please', '.'],
    keyPhrases: ['table for two', 'please'],
    functionTag: 'restaurant_table',
    topicTag: 'functional',
    difficulty: 1
  },
  {
    sentence: 'I have a headache and a sore throat.',
    sentenceZh: '我头痛并且喉咙痛。',
    chunkList: ['I have', 'a headache', 'and a sore throat', '.'],
    keyPhrases: ['have', 'headache', 'sore throat'],
    functionTag: 'medical_symptoms',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'It hurts when I breathe deeply.',
    sentenceZh: '我深呼吸时会痛。',
    chunkList: ['It hurts', 'when I breathe', 'deeply', '.'],
    keyPhrases: ['It hurts', 'when I breathe', 'deeply'],
    functionTag: 'medical_symptoms',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'How often should I take this medicine?',
    sentenceZh: '我应该多久吃一次这个药？',
    chunkList: ['How often should I take', 'this medicine', '?'],
    keyPhrases: ['How often', 'should I take', 'medicine'],
    functionTag: 'medical_instructions',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'I have a reservation under the name Smith.',
    sentenceZh: '我以史密斯的名字预订了房间。',
    chunkList: ['I have a reservation', 'under the name Smith', '.'],
    keyPhrases: ['have a reservation', 'under the name'],
    functionTag: 'hotel_checkin',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'Could I have an extra pillow, please?',
    sentenceZh: '请问可以给我一个额外的枕头吗？',
    chunkList: ['Could I have', 'an extra pillow', 'please', '?'],
    keyPhrases: ['Could I have', 'extra pillow', 'please'],
    functionTag: 'hotel_request',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'What time is check-out?',
    sentenceZh: '退房时间是几点？',
    chunkList: ['What time is', 'check-out', '?'],
    keyPhrases: ['What time', 'check-out'],
    functionTag: 'hotel_checkout',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Where is gate 25?',
    sentenceZh: '25号登机口在哪里？',
    chunkList: ['Where is', 'gate 25', '?'],
    keyPhrases: ['Where is', 'gate 25'],
    functionTag: 'airport_directions',
    topicTag: 'functional',
    difficulty: 1
  },
  {
    sentence: 'My flight has been delayed by two hours.',
    sentenceZh: '我的航班延误了两小时。',
    chunkList: ['My flight', 'has been delayed', 'by two hours', '.'],
    keyPhrases: ['flight', 'has been delayed', 'two hours'],
    functionTag: 'airport_delay',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'I\'d like to check in for my flight to London.',
    sentenceZh: '我想办理飞往伦敦的航班登机手续。',
    chunkList: ['I\'d like to check in', 'for my flight', 'to London', '.'],
    keyPhrases: ['check in', 'flight', 'to London'],
    functionTag: 'airport_checkin',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'May I speak to Mr. Johnson, please?',
    sentenceZh: '请问我可以和约翰逊先生通话吗？',
    chunkList: ['May I speak to', 'Mr. Johnson', 'please', '?'],
    keyPhrases: ['May I speak to', 'Mr. Johnson', 'please'],
    functionTag: 'telephone_request',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Can I leave a message?',
    sentenceZh: '我可以留言吗？',
    chunkList: ['Can I leave', 'a message', '?'],
    keyPhrases: ['Can I leave', 'a message'],
    functionTag: 'telephone_message',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'I\'ll call back later.',
    sentenceZh: '我晚点再打过来。',
    chunkList: ['I\'ll call back', 'later', '.'],
    keyPhrases: ['call back', 'later'],
    functionTag: 'telephone_callback',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Is there a bank near here?',
    sentenceZh: '这附近有银行吗？',
    chunkList: ['Is there', 'a bank', 'near here', '?'],
    keyPhrases: ['Is there', 'a bank', 'near here'],
    functionTag: 'asking_directions',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Take the first right, then go straight.',
    sentenceZh: '第一个路口右转，然后直走。',
    chunkList: ['Take the first right', ',', 'then go straight', '.'],
    keyPhrases: ['Take the first right', 'go straight'],
    functionTag: 'giving_directions',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'It\'s on your left, next to the post office.',
    sentenceZh: '它在你的左边，邮局旁边。',
    chunkList: ['It\'s on your left', ',', 'next to the post office', '.'],
    keyPhrases: ['on your left', 'next to', 'post office'],
    functionTag: 'giving_directions',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Do you accept credit cards?',
    sentenceZh: '你们接受信用卡吗？',
    chunkList: ['Do you accept', 'credit cards', '?'],
    keyPhrases: ['Do you accept', 'credit cards'],
    functionTag: 'shopping_payment',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'I\'m just looking, thank you.',
    sentenceZh: '我只是看看，谢谢。',
    chunkList: ['I\'m just looking', ',', 'thank you', '.'],
    keyPhrases: ['just looking', 'thank you'],
    functionTag: 'shopping_browsing',
    topicTag: 'functional',
    difficulty: 1
  },
  {
    sentence: 'Where are the changing rooms?',
    sentenceZh: '试衣间在哪里？',
    chunkList: ['Where are', 'the changing rooms', '?'],
    keyPhrases: ['Where are', 'changing rooms'],
    functionTag: 'shopping_facilities',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Could we see the menu, please?',
    sentenceZh: '请给我们看看菜单好吗？',
    chunkList: ['Could we see', 'the menu', 'please', '?'],
    keyPhrases: ['Could we see', 'the menu', 'please'],
    functionTag: 'restaurant_request',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Is this dish spicy?',
    sentenceZh: '这道菜辣吗？',
    chunkList: ['Is this dish', 'spicy', '?'],
    keyPhrases: ['Is this dish', 'spicy'],
    functionTag: 'restaurant_inquiry',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Could we have some water, please?',
    sentenceZh: '请给我们一些水好吗？',
    chunkList: ['Could we have', 'some water', 'please', '?'],
    keyPhrases: ['Could we have', 'some water', 'please'],
    functionTag: 'restaurant_request',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'I feel dizzy and nauseous.',
    sentenceZh: '我感到头晕和恶心。',
    chunkList: ['I feel', 'dizzy and nauseous', '.'],
    keyPhrases: ['feel', 'dizzy', 'nauseous'],
    functionTag: 'medical_symptoms',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'I have a temperature of 38 degrees.',
    sentenceZh: '我发烧38度。',
    chunkList: ['I have', 'a temperature', 'of 38 degrees', '.'],
    keyPhrases: ['have', 'temperature', '38 degrees'],
    functionTag: 'medical_symptoms',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Should I take this before or after meals?',
    sentenceZh: '我应该饭前还是饭后吃这个药？',
    chunkList: ['Should I take', 'this', 'before or after meals', '?'],
    keyPhrases: ['Should I take', 'before or after', 'meals'],
    functionTag: 'medical_instructions',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'I booked a double room for three nights.',
    sentenceZh: '我预订了一个双人间，住三晚。',
    chunkList: ['I booked', 'a double room', 'for three nights', '.'],
    keyPhrases: ['booked', 'double room', 'three nights'],
    functionTag: 'hotel_checkin',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'Is breakfast included in the price?',
    sentenceZh: '早餐包含在价格里吗？',
    chunkList: ['Is breakfast included', 'in the price', '?'],
    keyPhrases: ['breakfast included', 'in the price'],
    functionTag: 'hotel_inquiry',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Could you wake me up at 7 AM, please?',
    sentenceZh: '请早上7点叫醒我好吗？',
    chunkList: ['Could you wake me up', 'at 7 AM', 'please', '?'],
    keyPhrases: ['Could you wake me up', '7 AM', 'please'],
    functionTag: 'hotel_request',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'Which terminal is for international flights?',
    sentenceZh: '哪个航站楼是国际航班？',
    chunkList: ['Which terminal is', 'for international flights', '?'],
    keyPhrases: ['Which terminal', 'international flights'],
    functionTag: 'airport_directions',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'Where can I collect my luggage?',
    sentenceZh: '我在哪里可以取行李？',
    chunkList: ['Where can I collect', 'my luggage', '?'],
    keyPhrases: ['Where can I collect', 'luggage'],
    functionTag: 'airport_luggage',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'My flight has been cancelled.',
    sentenceZh: '我的航班被取消了。',
    chunkList: ['My flight', 'has been cancelled', '.'],
    keyPhrases: ['flight', 'has been cancelled'],
    functionTag: 'airport_delay',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'Hello, this is John speaking.',
    sentenceZh: '你好，我是约翰。',
    chunkList: ['Hello', ',', 'this is John', 'speaking', '.'],
    keyPhrases: ['Hello', 'this is', 'speaking'],
    functionTag: 'telephone_greeting',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Could you ask him to call me back?',
    sentenceZh: '你能让他给我回电话吗？',
    chunkList: ['Could you ask him', 'to call me back', '?'],
    keyPhrases: ['Could you ask', 'call me back'],
    functionTag: 'telephone_message',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'I\'m sorry, you have the wrong number.',
    sentenceZh: '对不起，你打错电话了。',
    chunkList: ['I\'m sorry', ',', 'you have', 'the wrong number', '.'],
    keyPhrases: ['I\'m sorry', 'wrong number'],
    functionTag: 'telephone_wrong',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Is there a supermarket around here?',
    sentenceZh: '这附近有超市吗？',
    chunkList: ['Is there', 'a supermarket', 'around here', '?'],
    keyPhrases: ['Is there', 'supermarket', 'around here'],
    functionTag: 'asking_directions',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'It\'s about a five-minute walk from here.',
    sentenceZh: '从这里步行大约五分钟。',
    chunkList: ['It\'s about', 'a five-minute walk', 'from here', '.'],
    keyPhrases: ['about', 'five-minute walk', 'from here'],
    functionTag: 'giving_directions',
    topicTag: 'functional',
    difficulty: 3
  },
  {
    sentence: 'You can\'t miss it.',
    sentenceZh: '你不会错过的。',
    chunkList: ['You can\'t miss it', '.'],
    keyPhrases: ['can\'t miss it'],
    functionTag: 'giving_directions',
    topicTag: 'functional',
    difficulty: 2
  },
  {
    sentence: 'Do you have any