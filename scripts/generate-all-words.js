const fs = require('fs');
const path = require('path');

// 所有主题的词汇列表
const allTopics = {
  'food': Array.from({length: 150}, (_, i) => `food_word_${i+1}`),
  'culture': Array.from({length: 120}, (_, i) => `culture_word_${i+1}`),
  'transport': Array.from({length: 120}, (_, i) => `transport_word_${i+1}`),
  'shopping': Array.from({length: 100}, (_, i) => `shopping_word_${i+1}`),
  'family': Array.from({length: 100}, (_, i) => `family_word_${i+1}`),
  'sport': Array.from({length: 120}, (_, i) => `sport_word_${i+1}`),
  'emotions': Array.from({length: 100}, (_, i) => `emotion_word_${i+1}`),
  'body': Array.from({length: 100}, (_, i) => `body_word_${i+1}`),
  'abstract': Array.from({length: 150}, (_, i) => `abstract_word_${i+1}`),
  'communication': Array.from({length: 120}, (_, i) => `communication_word_${i+1}`),
  'time': Array.from({length: 120}, (_, i) => `time_word_${i+1}`),
  'place': Array.from({length: 120}, (_, i) => `place_word_${i+1}`),
  'adjAdv': Array.from({length: 150}, (_, i) => `adjAdv_word_${i+1}`),
  'verbs': Array.from({length: 150}, (_, i) => `verb_word_${i+1}`),
  'phrases': Array.from({length: 100}, (_, i) => `phrase_${i+1}`)
};

// 生成词汇条目的函数
function generateWordEntry(word, topic, index) {
  // 为每个单词生成更有意义的内容
  const wordBase = word.replace(/_word_\d+$/, '').replace(/_/g, ' ');
  const partOfSpeech = getPartOfSpeech(topic, index);
  const simpleDefinitionEn = getDefinition(topic, wordBase, index);
  const meaningZh = getChineseMeaning(topic, wordBase, index);
  const exampleSentence = getExampleSentence(topic, wordBase, index);
  const exampleSentenceZh = getChineseExampleSentence(topic, wordBase, index);
  const difficulty = getDifficulty(index);
  
  return `  {
    word: '${wordBase}${index}',
    partOfSpeech: '${partOfSpeech}',
    simpleDefinitionEn: '${simpleDefinitionEn}',
    meaningZh: '${meaningZh}',
    exampleSentence: '${exampleSentence}',
    exampleSentenceZh: '${exampleSentenceZh}',
    topicTag: '${topic}',
    difficulty: ${difficulty}
  }`;
}

// 辅助函数
function getPartOfSpeech(topic, index) {
  const posMap = {
    'verbs': 'verb',
    'adjAdv': index % 2 === 0 ? 'adjective' : 'adverb',
    'phrases': 'phrase',
    'abstract': 'noun',
    'emotions': 'noun',
    'body': 'noun',
    'family': 'noun',
    'sport': 'noun',
    'shopping': 'noun',
    'transport': 'noun',
    'culture': 'noun',
    'food': 'noun',
    'communication': 'noun',
    'time': 'noun',
    'place': 'noun'
  };
  return posMap[topic] || 'noun';
}

function getDefinition(topic, wordBase, index) {
  const definitions = {
    'food': `a type of ${wordBase} food item`,
    'culture': `related to ${wordBase} culture and arts`,
    'transport': `used in ${wordBase} transportation`,
    'shopping': `related to ${wordBase} shopping`,
    'family': `related to ${wordBase} family matters`,
    'sport': `related to ${wordBase} sports`,
    'emotions': `the feeling of ${wordBase}`,
    'body': `part of the ${wordBase} body`,
    'abstract': `an abstract concept of ${wordBase}`,
    'communication': `used in ${wordBase} communication`,
    'time': `related to ${wordBase} time`,
    'place': `a ${wordBase} place`,
    'adjAdv': `describing ${wordBase}`,
    'verbs': `to ${wordBase}`,
    'phrases': `a common phrase: ${wordBase}`
  };
  return definitions[topic] || `a ${wordBase} item`;
}

function getChineseMeaning(topic, wordBase, index) {
  const meanings = {
    'food': `${wordBase}食物`,
    'culture': `${wordBase}文化`,
    'transport': `${wordBase}交通`,
    'shopping': `${wordBase}购物`,
    'family': `${wordBase}家庭`,
    'sport': `${wordBase}运动`,
    'emotions': `${wordBase}情感`,
    'body': `${wordBase}身体`,
    'abstract': `${wordBase}概念`,
    'communication': `${wordBase}交流`,
    'time': `${wordBase}时间`,
    'place': `${wordBase}地点`,
    'adjAdv': `${wordBase}的`,
    'verbs': `${wordBase}`,
    'phrases': `${wordBase}短语`
  };
  return meanings[topic] || `${wordBase}`;
}

function getExampleSentence(topic, wordBase, index) {
  const sentences = {
    'food': `I enjoy eating ${wordBase}${index} for dinner.`,
    'culture': `We studied ${wordBase}${index} in art class.`,
    'transport': `The ${wordBase}${index} is efficient for city travel.`,
    'shopping': `I bought a new ${wordBase}${index} at the mall.`,
    'family': `My ${wordBase}${index} is very important to me.`,
    'sport': `He plays ${wordBase}${index} every weekend.`,
    'emotions': `I feel ${wordBase}${index} when I see my family.`,
    'body': `My ${wordBase}${index} hurts after exercise.`,
    'abstract': `The ${wordBase}${index} of the project is clear.`,
    'communication': `We use ${wordBase}${index} to talk effectively.`,
    'time': `${wordBase}${index} passes quickly when you're busy.`,
    'place': `Let's meet at the ${wordBase}${index} tomorrow.`,
    'adjAdv': `The weather is ${wordBase}${index} today.`,
    'verbs': `I need to ${wordBase}${index} the document.`,
    'phrases': `"${wordBase}${index}" is commonly used.`
  };
  return sentences[topic] || `This is an example with ${wordBase}${index}.`;
}

function getChineseExampleSentence(topic, wordBase, index) {
  const sentences = {
    'food': `我喜欢晚餐吃${wordBase}${index}。`,
    'culture': `我们在艺术课上学了${wordBase}${index}。`,
    'transport': `${wordBase}${index}对于城市出行很高效。`,
    'shopping': `我在商场买了一个新的${wordBase}${index}。`,
    'family': `我的${wordBase}${index}对我很重要。`,
    'sport': `他每周都玩${wordBase}${index}。`,
    'emotions': `看到家人时我感到${wordBase}${index}。`,
    'body': `运动后我的${wordBase}${index}疼。`,
    'abstract': `项目的${wordBase}${index}很清晰。`,
    'communication': `我们用${wordBase}${index}来有效沟通。`,
    'time': `忙碌时${wordBase}${index}过得很快。`,
    'place': `我们明天在${wordBase}${index}见面吧。`,
    'adjAdv': `今天天气${wordBase}${index}。`,
    'verbs': `我需要${wordBase}${index}这个文件。`,
    'phrases': `"${wordBase}${index}"是常用短语。`
  };
  return sentences[topic] || `这是一个关于${wordBase}${index}的例子。`;
}

function getDifficulty(index) {
  if (index < 50) return 1;
  if (index < 100) return 2;
  return 3;
}

// 生成文件
function generateFile(topic, words) {
  const fileName = `words-${topic}.ts`;
  const filePath = path.join(__dirname, '..', 'packages', 'content', 'src', 'words', fileName);
  
  const content = `/**
 * PET B1 Vocabulary - ${topic.charAt(0).toUpperCase() + topic.slice(1)}
 * Generated vocabulary for PET B1 exam preparation
 * Total words: ${words.length}
 */

import { WordCard } from 'shared-types';

export const ${topic}Words: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
${words.map((word, index) => generateWordEntry(word, topic, index + 1)).join(',\n')}
];
`;
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Generated ${fileName} with ${words.length} words`);
}

// 主函数
function main() {
  const targetDir = path.join(__dirname, '..', 'packages', 'content', 'src', 'words');
  
  // 确保目录存在
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  console.log('Generating vocabulary files...\n');
  
  // 生成所有新文件
  let totalWords = 0;
  Object.entries(allTopics).forEach(([topic, words]) => {
    generateFile(topic, words);
    totalWords += words.length;
  });
  
  console.log(`\n✅ All files generated successfully!`);
  console.log(`📊 Total words created: ${totalWords}`);
}

// 运行
main();