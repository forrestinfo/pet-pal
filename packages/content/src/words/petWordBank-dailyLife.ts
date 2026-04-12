/**
 * PET B1 Vocabulary - Daily Life
 * Real PET B1 daily life vocabulary with proper definitions
 * Total words: 30
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
    exampleSentence: 'I accept your invitation.',
    exampleSentenceZh: '我接受你的邀请。',
    topicTag: 'dailyLife',
    difficulty: 2
  },
  {
    word: 'arrive',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to reach a place',
    meaningZh: '到达',
    exampleSentence: 'I arrive at work at 9 am.',
    exampleSentenceZh: '我上午9点到达工作地点。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'breakfast',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the first meal of the day',
    meaningZh: '早餐',
    exampleSentence: 'I eat breakfast every morning.',
    exampleSentenceZh: '我每天早上吃早餐。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'clean',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to make something not dirty',
    meaningZh: '清洁',
    exampleSentence: 'I clean my room every week.',
    exampleSentenceZh: '我每周清洁我的房间。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'cook',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to prepare food',
    meaningZh: '烹饪',
    exampleSentence: 'I cook dinner every evening.',
    exampleSentenceZh: '我每天晚上做晚餐。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'dinner',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the main meal of the day',
    meaningZh: '晚餐',
    exampleSentence: 'We have dinner at 7 pm.',
    exampleSentenceZh: '我们晚上7点吃晚餐。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'drink',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to take liquid into your mouth',
    meaningZh: '喝',
    exampleSentence: 'I drink water every day.',
    exampleSentenceZh: '我每天喝水。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'eat',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to put food in your mouth',
    meaningZh: '吃',
    exampleSentence: 'I eat three meals a day.',
    exampleSentenceZh: '我一天吃三餐。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'home',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'where you live',
    meaningZh: '家',
    exampleSentence: 'I go home after work.',
    exampleSentenceZh: '我下班后回家。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'house',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a building where people live',
    meaningZh: '房子',
    exampleSentence: 'I live in a small house.',
    exampleSentenceZh: '我住在一个小房子里。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'kitchen',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'room where food is prepared',
    meaningZh: '厨房',
    exampleSentence: 'I prepare food in the kitchen.',
    exampleSentenceZh: '我在厨房准备食物。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'lunch',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'meal in the middle of the day',
    meaningZh: '午餐',
    exampleSentence: 'I have lunch at 12 pm.',
    exampleSentenceZh: '我中午12点吃午餐。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'morning',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'early part of the day',
    meaningZh: '早晨',
    exampleSentence: 'I wake up in the morning.',
    exampleSentenceZh: '我早晨醒来。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'night',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'time when it is dark',
    meaningZh: '夜晚',
    exampleSentence: 'I sleep at night.',
    exampleSentenceZh: '我夜晚睡觉。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'sleep',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to rest with eyes closed',
    meaningZh: '睡觉',
    exampleSentence: 'I sleep for eight hours.',
    exampleSentenceZh: '我睡八个小时。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'wake',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to stop sleeping',
    meaningZh: '醒来',
    exampleSentence: 'I wake up at 7 am.',
    exampleSentenceZh: '我早上7点醒来。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'wash',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to clean with water',
    meaningZh: '洗',
    exampleSentence: 'I wash my hands before eating.',
    exampleSentenceZh: '我饭前洗手。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'work',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to do a job',
    meaningZh: '工作',
    exampleSentence: 'I work from Monday to Friday.',
    exampleSentenceZh: '我从周一到周五工作。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'bed',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'furniture for sleeping',
    meaningZh: '床',
    exampleSentence: 'I sleep in my bed.',
    exampleSentenceZh: '我在我的床上睡觉。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'chair',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'furniture for sitting',
    meaningZh: '椅子',
    exampleSentence: 'I sit on a chair.',
    exampleSentenceZh: '我坐在椅子上。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'table',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'furniture with a flat top',
    meaningZh: '桌子',
    exampleSentence: 'We eat at the table.',
    exampleSentenceZh: '我们在桌子上吃饭。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'door',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'entrance to a room or building',
    meaningZh: '门',
    exampleSentence: 'I open the door.',
    exampleSentenceZh: '我开门。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'window',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'opening in a wall for light',
    meaningZh: '窗户',
    exampleSentence: 'I look out the window.',
    exampleSentenceZh: '我向窗外看。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'room',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'part of a building with walls',
    meaningZh: '房间',
    exampleSentence: 'My room is clean.',
    exampleSentenceZh: '我的房间很干净。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'bathroom',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'room with toilet and bath',
    meaningZh: '浴室',
    exampleSentence: 'I brush my teeth in the bathroom.',
    exampleSentenceZh: '我在浴室刷牙。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'shower',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'water falling for washing',
    meaningZh: '淋浴',
    exampleSentence: 'I take a shower every morning.',
    exampleSentenceZh: '我每天早上淋浴。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'toilet',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'bowl for body waste',
    meaningZh: '厕所',
    exampleSentence: 'The toilet is in the bathroom.',
    exampleSentenceZh: '厕所在浴室里。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'towel',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'cloth for drying',
    meaningZh: '毛巾',
    exampleSentence: 'I dry myself with a towel.',
    exampleSentenceZh: '我用毛巾擦干自己。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'soap',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'substance for cleaning',
    meaningZh: '肥皂',
    exampleSentence: 'I wash with soap.',
    exampleSentenceZh: '我用肥皂洗。',
    topicTag: 'dailyLife',
    difficulty: 1
  },
  {
    word: 'clothes',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'things you wear on your body',
    meaningZh: '衣服',
    exampleSentence: 'I wear clean clothes.',
    exampleSentenceZh: '我穿干净的衣服。',
    topicTag: 'dailyLife',
    difficulty: 1
  }
];