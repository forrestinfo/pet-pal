/**
 * Daily Life Vocabulary for PET B1
 * Words related to everyday activities, routines, and common situations
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
    exampleSentence: 'I accept your invitation to the party.',
    exampleSentenceZh: '我接受你对派对的邀请。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'borrow',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to take something and give it back later',
    meaningZh: '借',
    exampleSentence: 'Can I borrow your pen for a moment?',
    exampleSentenceZh: '我可以借你的笔一会儿吗？',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'decide',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to choose after thinking',
    meaningZh: '决定',
    exampleSentence: 'I need to decide which book to read first.',
    exampleSentenceZh: '我需要决定先读哪本书。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'improve',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to become better',
    meaningZh: '改进',
    exampleSentence: 'I want to improve my English speaking.',
    exampleSentenceZh: '我想要改进我的英语口语。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'arrange',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to plan or organize something',
    meaningZh: '安排',
    exampleSentence: 'I will arrange a meeting for next week.',
    exampleSentenceZh: '我会安排下周的会议。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'choose',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to pick one thing from many',
    meaningZh: '选择',
    exampleSentence: 'You can choose any color you like.',
    exampleSentenceZh: '你可以选择任何你喜欢的颜色。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'clean',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to make something not dirty',
    meaningZh: '清洁',
    exampleSentence: 'I need to clean my room this weekend.',
    exampleSentenceZh: '这个周末我需要打扫我的房间。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'cook',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to make food ready to eat',
    meaningZh: '烹饪',
    exampleSentence: 'My mother cooks dinner every evening.',
    exampleSentenceZh: '我妈妈每天晚上做晚餐。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'dress',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to put on clothes',
    meaningZh: '穿衣',
    exampleSentence: 'I need to dress quickly for school.',
    exampleSentenceZh: '我需要快点穿衣服去学校。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'enjoy',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to like doing something',
    meaningZh: '享受',
    exampleSentence: 'I enjoy reading books in my free time.',
    exampleSentenceZh: '我喜欢在空闲时间读书。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'explain',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to make something clear',
    meaningZh: '解释',
    exampleSentence: 'Can you explain how to use this machine?',
    exampleSentenceZh: '你能解释如何使用这台机器吗？',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'forget',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to not remember',
    meaningZh: '忘记',
    exampleSentence: 'I always forget where I put my keys.',
    exampleSentenceZh: '我总是忘记把钥匙放在哪里。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'help',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to make something easier for someone',
    meaningZh: '帮助',
    exampleSentence: 'Can you help me with my homework?',
    exampleSentenceZh: '你能帮我做作业吗？',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'invite',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to ask someone to come',
    meaningZh: '邀请',
    exampleSentence: 'I want to invite you to my birthday party.',
    exampleSentenceZh: '我想邀请你参加我的生日派对。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'learn',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to get new knowledge',
    meaningZh: '学习',
    exampleSentence: 'I want to learn how to play the guitar.',
    exampleSentenceZh: '我想学习如何弹吉他。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'listen',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to pay attention to sounds',
    meaningZh: '听',
    exampleSentence: 'I like to listen to music while studying.',
    exampleSentenceZh: '我喜欢在学习时听音乐。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'live',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to be alive or have a home',
    meaningZh: '居住；生活',
    exampleSentence: 'I live in a small apartment in the city.',
    exampleSentenceZh: '我住在城市里的一间小公寓里。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'look',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to use your eyes to see',
    meaningZh: '看',
    exampleSentence: 'Look at that beautiful sunset!',
    exampleSentenceZh: '看那美丽的日落！',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'make',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to create or produce something',
    meaningZh: '制作',
    exampleSentence: 'I want to make a cake for my friend.',
    exampleSentenceZh: '我想为我的朋友做一个蛋糕。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'need',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to have to have something',
    meaningZh: '需要',
    exampleSentence: 'I need some help with this heavy box.',
    exampleSentenceZh: '我需要有人帮我搬这个重箱子。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'open',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to make something not closed',
    meaningZh: '打开',
    exampleSentence: 'Can you open the window, please?',
    exampleSentenceZh: '请打开窗户好吗？',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'organize',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to put things in order',
    meaningZh: '组织',
    exampleSentence: 'I need to organize my desk.',
    exampleSentenceZh: '我需要整理我的书桌。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'plan',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to think about what you will do',
    meaningZh: '计划',
    exampleSentence: 'We should plan our holiday carefully.',
    exampleSentenceZh: '我们应该仔细计划我们的假期。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'prepare',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to get ready for something',
    meaningZh: '准备',
    exampleSentence: 'I need to prepare for my exam tomorrow.',
    exampleSentenceZh: '我需要为明天的考试做准备。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'remember',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to keep something in your mind',
    meaningZh: '记住',
    exampleSentence: 'I always remember my first day at school.',
    exampleSentenceZh: '我总是记得我上学的第一天。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'repair',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to fix something broken',
    meaningZh: '修理',
    exampleSentence: 'My father can repair bicycles.',
    exampleSentenceZh: '我爸爸会修理自行车。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'save',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to keep something for later',
    meaningZh: '保存；节省',
    exampleSentence: 'I save money to buy a new computer.',
    exampleSentenceZh: '我存钱买新电脑。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'sleep',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to rest with your eyes closed',
    meaningZh: '睡觉',
    exampleSentence: 'I usually sleep for eight hours every night.',
    exampleSentenceZh: '我通常每晚睡八个小时。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'speak',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to use your voice to say words',
    meaningZh: '说话',
    exampleSentence: 'Can you speak a little louder?',
    exampleSentenceZh: '你能说大声一点吗？',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'spend',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to use time or money',
    meaningZh: '花费',
    exampleSentence: 'I spend two hours every day studying English.',
    exampleSentenceZh: '我每天花两个小时学习英语。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'start',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to begin something',
    meaningZh: '开始',
    exampleSentence: 'Let\'s start the meeting at 9 o\'clock.',
    exampleSentenceZh: '我们九点开始会议吧。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'stop',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to finish moving or doing something',
    meaningZh: '停止',
    exampleSentence: 'Please stop talking during the film.',
    exampleSentenceZh: '请在电影播放期间停止说话。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'study',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to learn about something',
    meaningZh: '学习',
    exampleSentence: 'I study English every evening.',
    exampleSentenceZh: '我每天晚上学习英语。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'take',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to get something in your hand',
    meaningZh: '拿；取',
    exampleSentence: 'Take your umbrella, it might rain.',
    exampleSentenceZh: '带上你的伞，可能会下雨。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'teach',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to help someone learn',
    meaningZh: '教',
    exampleSentence: 'My mother teaches me how to cook.',
    exampleSentenceZh: '我妈妈教我如何烹饪。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'think',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to use your mind',
    meaningZh: '思考',
    exampleSentence: 'I need time to think about your question.',
    exampleSentenceZh: '我需要时间思考你的问题。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'try',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to attempt to do something',
    meaningZh: '尝试',
    exampleSentence: 'I will try to finish this work today.',
    exampleSentenceZh: '我会尝试今天完成这项工作。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'use',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to do something with an object',
    meaningZh: '使用',
    exampleSentence: 'I use my computer for studying.',
    exampleSentenceZh: '我用我的电脑学习。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'visit',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to go to see someone or a place',
    meaningZh: '参观；拜访',
    exampleSentence: 'I want to visit my grandparents this weekend.',
    exampleSentenceZh: '这个周末我想去看望我的祖父母。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'wait',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to stay in a place until something happens',
    meaningZh: '等待',
    exampleSentence: 'Please wait here for a moment.',
    exampleSentenceZh: '请在这里等一会儿。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'walk',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to move on foot',
    meaningZh: '走路',
    exampleSentence: 'I walk to school every day.',
    exampleSentenceZh: '我每天走路去学校。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'wash',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to clean with water',
    meaningZh: '洗',
    exampleSentence: 'I wash my hands before eating.',
    exampleSentenceZh: '我吃饭前洗手。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'watch',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to look at something for a time',
    meaningZh: '观看',
    exampleSentence: 'I like to watch films on weekends.',
    exampleSentenceZh: '我喜欢在周末看电影。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'work',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to do a job',
    meaningZh: '工作',
    exampleSentence: 'My father works in an office.',
    exampleSentenceZh: '我爸爸在办公室工作。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'write',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to make words with a pen',
    meaningZh: '写',
    exampleSentence: 'I write in my diary every night.',
    exampleSentenceZh: '我每天晚上写日记。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'activity',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'something you do',
    meaningZh: '活动',
    exampleSentence: 'Swimming is my favorite activity.',
    exampleSentenceZh: '游泳是我最喜欢的活动。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'apartment',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a home in a building',
    meaningZh: '公寓',
    exampleSentence: 'I live in a small apartment in the city.',
    exampleSentenceZh: '我住在城市里的一间小公寓里。',
    topicTag: 'daily life',
    difficulty: 2
  },
  {
    word: 'bedroom',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a room for sleeping',
    meaningZh: '卧室',
    exampleSentence: 'My bedroom has a big window.',
    exampleSentenceZh: '我的卧室有一扇大窗户。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'breakfast',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the first meal of the day',
    meaningZh: '早餐',
    exampleSentence: 'I usually have breakfast at 7 o\'clock.',
    exampleSentenceZh: '我通常七点吃早餐。',
    topicTag: 'daily life',
    difficulty: 1
  },
  {
    word: 'chore',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a small job at home',
    meaningZh: '家务',
    exampleSentence: 'Cleaning my room is my