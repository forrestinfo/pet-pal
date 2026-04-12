const fs = require('fs');
const path = require('path');

// 真实PET B1词汇数据
const realVocabulary = {
  technology: [
    { word: 'computer', pos: 'noun', en: 'an electronic machine for storing and processing data', zh: '计算机' },
    { word: 'phone', pos: 'noun', en: 'a device for talking to people who are far away', zh: '电话' },
    { word: 'internet', pos: 'noun', en: 'a worldwide network of computers', zh: '互联网' },
    { word: 'email', pos: 'noun', en: 'electronic mail sent between computers', zh: '电子邮件' },
    { word: 'website', pos: 'noun', en: 'a place on the internet with information', zh: '网站' },
    { word: 'app', pos: 'noun', en: 'a program on a phone or computer', zh: '应用程序' },
    { word: 'software', pos: 'noun', en: 'programs that run on a computer', zh: '软件' },
    { word: 'hardware', pos: 'noun', en: 'the physical parts of a computer', zh: '硬件' },
    { word: 'keyboard', pos: 'noun', en: 'keys for typing on a computer', zh: '键盘' },
    { word: 'mouse', pos: 'noun', en: 'a device for moving the cursor on screen', zh: '鼠标' },
    { word: 'screen', pos: 'noun', en: 'the part of a device that shows images', zh: '屏幕' },
    { word: 'battery', pos: 'noun', en: 'a device that stores electricity', zh: '电池' },
    { word: 'camera', pos: 'noun', en: 'a device for taking photos', zh: '相机' },
    { word: 'download', pos: 'verb', en: 'to get files from the internet', zh: '下载' },
    { word: 'upload', pos: 'verb', en: 'to send files to the internet', zh: '上传' },
    { word: 'search', pos: 'verb', en: 'to look for information online', zh: '搜索' },
    { word: 'connect', pos: 'verb', en: 'to join things together', zh: '连接' },
    { word: 'digital', pos: 'adjective', en: 'using computer technology', zh: '数字的' },
    { word: 'online', pos: 'adjective', en: 'connected to the internet', zh: '在线的' },
    { word: 'offline', pos: 'adjective', en: 'not connected to the internet', zh: '离线的' },
    { word: 'wifi', pos: 'noun', en: 'wireless internet connection', zh: '无线网络' },
    { word: 'password', pos: 'noun', en: 'a secret word for access', zh: '密码' },
    { word: 'account', pos: 'noun', en: 'a user\'s access to a service', zh: '账户' },
    { word: 'file', pos: 'noun', en: 'a document stored on a computer', zh: '文件' },
    { word: 'folder', pos: 'noun', en: 'a place to store files on a computer', zh: '文件夹' },
    { word: 'data', pos: 'noun', en: 'information in digital form', zh: '数据' },
    { word: 'memory', pos: 'noun', en: 'storage space in a computer', zh: '内存' },
    { word: 'processor', pos: 'noun', en: 'the brain of a computer', zh: '处理器' },
    { word: 'network', pos: 'noun', en: 'connected computers that share information', zh: '网络' },
    { word: 'server', pos: 'noun', en: 'a computer that provides services to others', zh: '服务器' },
  ],
  dailyLife: [
    { word: 'accept', pos: 'verb', en: 'to say yes to something', zh: '接受' },
    { word: 'arrive', pos: 'verb', en: 'to reach a place', zh: '到达' },
    { word: 'breakfast', pos: 'noun', en: 'the first meal of the day', zh: '早餐' },
    { word: 'clean', pos: 'verb', en: 'to make something not dirty', zh: '清洁' },
    { word: 'cook', pos: 'verb', en: 'to prepare food', zh: '烹饪' },
    { word: 'dinner', pos: 'noun', en: 'the main meal of the day', zh: '晚餐' },
    { word: 'drink', pos: 'verb', en: 'to take liquid into your mouth', zh: '喝' },
    { word: 'eat', pos: 'verb', en: 'to put food in your mouth', zh: '吃' },
    { word: 'home', pos: 'noun', en: 'where you live', zh: '家' },
    { word: 'house', pos: 'noun', en: 'a building where people live', zh: '房子' },
    { word: 'kitchen', pos: 'noun', en: 'room where food is prepared', zh: '厨房' },
    { word: 'lunch', pos: 'noun', en: 'meal in the middle of the day', zh: '午餐' },
    { word: 'morning', pos: 'noun', en: 'early part of the day', zh: '早晨' },
    { word: 'night', pos: 'noun', en: 'time when it is dark', zh: '夜晚' },
    { word: 'sleep', pos: 'verb', en: 'to rest with eyes closed', zh: '睡觉' },
    { word: 'wake', pos: 'verb', en: 'to stop sleeping', zh: '醒来' },
    { word: 'wash', pos: 'verb', en: 'to clean with water', zh: '洗' },
    { word: 'work', pos: 'verb', en: 'to do a job', zh: '工作' },
    { word: 'bed', pos: 'noun', en: 'furniture for sleeping', zh: '床' },
    { word: 'chair', pos: 'noun', en: 'furniture for sitting', zh: '椅子' },
    { word: 'table', pos: 'noun', en: 'furniture with a flat top', zh: '桌子' },
    { word: 'door', pos: 'noun', en: 'entrance to a room or building', zh: '门' },
    { word: 'window', pos: 'noun', en: 'opening in a wall for light', zh: '窗户' },
    { word: 'room', pos: 'noun', en: 'part of a building with walls', zh: '房间' },
    { word: 'bathroom', pos: 'noun', en: 'room with toilet and bath', zh: '浴室' },
    { word: 'shower', pos: 'noun', en: 'water falling for washing', zh: '淋浴' },
    { word: 'toilet', pos: 'noun', en: 'bowl for body waste', zh: '厕所' },
    { word: 'towel', pos: 'noun', en: 'cloth for drying', zh: '毛巾' },
    { word: 'soap', pos: 'noun', en: 'substance for cleaning', zh: '肥皂' },
  ],
  education: [
    { word: 'student', pos: 'noun', en: 'person who studies', zh: '学生' },
    { word: 'teacher', pos: 'noun', en: 'person who teaches', zh: '老师' },
    { word: 'school', pos: 'noun', en: 'place for learning', zh: '学校' },
    { word: 'class', pos: 'noun', en: 'group of students', zh: '班级' },
    { word: 'lesson', pos: 'noun', en: 'period of teaching', zh: '课程' },
    { word: 'book', pos: 'noun', en: 'pages with writing', zh: '书' },
    { word: 'pen', pos: 'noun', en: 'tool for writing with ink', zh: '钢笔' },
    { word: 'pencil', pos: 'noun', en: 'tool for writing with graphite', zh: '铅笔' },
    { word: 'paper', pos: 'noun', en: 'material for writing on', zh: '纸' },
    { word: 'exam', pos: 'noun', en: 'test of knowledge', zh: '考试' },
    { word: 'test', pos: 'noun', en: 'check of knowledge', zh: '测试' },
    { word: 'homework', pos: 'noun', en: 'work to do at home', zh: '作业' },
    { word: 'study', pos: 'verb', en: 'to learn seriously', zh: '学习' },
    { word: 'learn', pos: 'verb', en: 'to gain knowledge', zh: '学习' },
    { word: 'teach', pos: 'verb', en: 'to give knowledge', zh: '教' },
    { word: 'read', pos: 'verb', en: 'to look at and understand words', zh: '阅读' },
    { word: 'write', pos: 'verb', en: 'to make letters or words', zh: '写' },
    { word: 'university', pos: 'noun', en: 'place for higher education', zh: '大学' },
    { word: 'college', pos: 'noun', en: 'place for higher education', zh: '学院' },
    { word: 'degree', pos: 'noun', en: 'qualification from university', zh: '学位' },
    { word: 'subject', pos: 'noun', en: 'area of study', zh: '科目' },
    { word: 'science', pos: 'noun', en: 'study of the natural world', zh: '科学' },
    { word: 'history', pos: 'noun', en: 'study of the past', zh: '历史' },
    { word: 'math', pos: 'noun', en: 'study of numbers', zh: '数学' },
    { word: 'English', pos: 'noun', en: 'language of England and many countries', zh: '英语' },
    { word: 'library', pos: 'noun', en: 'place with books to borrow', zh: '图书馆' },
    { word: 'dictionary', pos: 'noun', en: 'book with word meanings', zh: '词典' },
    { word: 'notebook', pos: 'noun', en: 'book for writing notes', zh: '笔记本' },
    { word: 'classroom', pos: 'noun', en: 'room for teaching', zh: '教室' },
  ]
};

function getExampleSentence(word, pos, topic) {
  const examples = {
    technology: {
      noun: `I use my ${word} every day.`,
      verb: `You can ${word} files from the internet.`,
      adjective: `This is a ${word} device.`
    },
    dailyLife: {
      noun: `I need to buy a new ${word}.`,
      verb: `I ${word} every morning.`,
      adjective: `This room is ${word} and tidy.`
    },
    education: {
      noun: `The ${word} is very important.`,
      verb: `Students need to ${word} hard.`,
      adjective: `This is ${word} information.`
    }
  };
  
  const topicExamples = examples[topic] || examples.technology;
  const posExamples = topicExamples[pos] || topicExamples.noun;
  return posExamples;
}

function getChineseExampleSentence(word, zh, pos, topic) {
  const examples = {
    technology: {
      noun: `我每天使用我的${zh}。`,
      verb: `你可以从互联网${zh}文件。`,
      adjective: `这是一个${zh}设备。`
    },
    dailyLife: {
      noun: `我需要买一个新的${zh}。`,
      verb: `我每天早上都${zh}。`,
      adjective: `这个房间很${zh}整洁。`
    },
    education: {
      noun: `这个${zh}非常重要。`,
      verb: `学生需要努力${zh}。`,
      adjective: `这是${zh}信息。`
    }
  };
  
  const topicExamples = examples[topic] || examples.technology;
  const posExamples = topicExamples[pos] || topicExamples.noun;
  return posExamples;
}

function getDifficulty(word) {
  const length = word.length;
  if (length <= 4) return 1;
  if (length <= 6) return 2;
  return 3;
}

function generateWordEntry(wordData, topic) {
  const { word, pos, en, zh } = wordData;
  const exampleSentence = getExampleSentence(word, pos, topic);
  const exampleSentenceZh = getChineseExampleSentence(word, zh, pos, topic);
  const difficulty = getDifficulty(word);
  
  return `  {
    word: '${word}',
    partOfSpeech: '${pos}',
    simpleDefinitionEn: '${en}',
    meaningZh: '${zh}',
    exampleSentence: '${exampleSentence}',
    exampleSentenceZh: '${exampleSentenceZh}',
    topicTag: '${topic}',
    difficulty: ${difficulty}
  }`;
}

function fixVocabularyFile(topic, words) {
  const fileName = `petWordBank-${topic}.ts`;
  const filePath = path.join(__dirname, '..', 'packages', 'content', 'src', 'words', fileName);
  
  const content = `/**
 * PET B1 Vocabulary - ${topic.charAt(0).toUpperCase() + topic.slice(1)}
 * Real PET B1 vocabulary with proper definitions
 * Total words: ${words.length}
 */

import { WordCard } from 'shared-types';

export const ${topic}Words: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
${words.map(wordData => generateWordEntry(wordData, topic)).join(',\n')}
];
`;
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${fileName} with ${words.length} real words`);
}

// 主函数
function main() {
  console.log('Fixing vocabulary files with real PET B1 words...');
  
  // 修复三个主要文件作为开始
  fixVocabularyFile('technology', realVocabulary.technology);
  fixVocabularyFile('dailyLife', realVocabulary.dailyLife);
  fixVocabularyFile('education', realVocabulary.education);
  
  console.log('\nNote: Other topic files still need to be fixed.');
  console.log('This fix addresses the immediate issue of placeholder words.');
  console.log('For complete PET B1 vocabulary, all 23 topic files need real words.');
}

main();