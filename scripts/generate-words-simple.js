const fs = require('fs');
const path = require('path');

// 基础词汇数据
const wordLists = {
  food: [
    'apple', 'banana', 'bread', 'cheese', 'chicken', 'coffee', 'egg', 'fish', 'fruit', 'meat',
    'milk', 'rice', 'salad', 'soup', 'tea', 'vegetable', 'water', 'beef', 'pork', 'lamb',
    'tomato', 'potato', 'onion', 'carrot', 'broccoli', 'orange', 'grape', 'strawberry', 'blueberry', 'pineapple',
    'mango', 'peach', 'pear', 'watermelon', 'lemon', 'lime', 'coconut', 'avocado', 'cucumber', 'pepper',
    'garlic', 'ginger', 'honey', 'sugar', 'salt', 'oil', 'butter', 'yogurt', 'ice cream', 'chocolate',
    'cake', 'cookie', 'pie', 'pizza', 'burger', 'sandwich', 'noodles', 'pasta', 'spaghetti', 'sushi',
    'curry', 'taco', 'burrito', 'salsa', 'guacamole', 'hummus', 'falafel', 'kebab', 'dumpling', 'spring roll',
    'fried rice', 'stir fry', 'steak', 'roast', 'grill', 'bake', 'boil', 'fry', 'steam', 'microwave',
    'oven', 'stove', 'fridge', 'freezer', 'kitchen', 'restaurant', 'cafe', 'bakery', 'market', 'supermarket',
    'grocery', 'dinner', 'lunch', 'breakfast', 'snack', 'dessert', 'appetizer', 'main course', 'side dish', 'recipe',
    'ingredient', 'flavor', 'taste', 'spicy', 'sweet', 'sour', 'salty', 'bitter', 'fresh', 'ripe',
    'raw', 'cooked', 'organic', 'vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'nut-free', 'allergy', 'diet',
    'nutrition', 'calorie', 'protein', 'carbohydrate', 'fat', 'vitamin', 'mineral', 'fiber', 'antioxidant', 'juice',
    'smoothie', 'soda', 'beer', 'wine', 'whisky', 'vodka', 'rum', 'gin', 'cocktail', 'mocktail'
  ],
  culture: [
    'art', 'music', 'dance', 'theater', 'film', 'movie', 'cinema', 'concert', 'opera', 'ballet',
    'museum', 'gallery', 'exhibition', 'painting', 'sculpture', 'photography', 'literature', 'poetry', 'novel', 'story',
    'author', 'writer', 'poet', 'artist', 'musician', 'actor', 'actress', 'director', 'producer', 'screenplay',
    'script', 'stage', 'audience', 'performance', 'show', 'festival', 'celebration', 'tradition', 'custom', 'heritage',
    'history', 'culture', 'society', 'community', 'religion', 'belief', 'philosophy', 'myth', 'legend', 'folklore',
    'fairy tale', 'comedy', 'drama', 'tragedy', 'romance', 'action', 'horror', 'science fiction', 'fantasy', 'mystery',
    'thriller', 'documentary', 'animation', 'cartoon', 'comic', 'graphic novel', 'magazine', 'newspaper', 'journal', 'blog',
    'podcast', 'radio', 'television', 'streaming', 'platform', 'channel', 'network', 'broadcast', 'live', 'recording',
    'album', 'song', 'track', 'lyrics', 'melody', 'rhythm', 'beat', 'instrument', 'guitar', 'piano',
    'violin', 'drums', 'trumpet', 'saxophone', 'orchestra', 'band', 'choir', 'singer', 'vocal', 'harmony',
    'genre', 'style', 'period', 'renaissance', 'baroque', 'classical', 'romantic', 'modern', 'contemporary', 'abstract',
    'realism', 'impressionism', 'surrealism', 'pop art', 'cubism', 'expressionism', 'minimalism', 'conceptual', 'digital', 'virtual'
  ],
  transport: [
    'car', 'bus', 'train', 'subway', 'metro', 'tram', 'taxi', 'bicycle', 'bike', 'motorcycle',
    'scooter', 'truck', 'van', 'lorry', 'vehicle', 'transport', 'transportation', 'travel', 'journey', 'trip',
    'route', 'road', 'street', 'highway', 'freeway', 'motorway', 'lane', 'path', 'sidewalk', 'pavement',
    'crosswalk', 'intersection', 'junction', 'roundabout', 'traffic', 'congestion', 'jam', 'accident', 'collision', 'speed',
    'limit', 'sign', 'signal', 'light', 'stop', 'go', 'yield', 'parking', 'garage', 'lot',
    'space', 'meter', 'ticket', 'fine', 'driver', 'passenger', 'pedestrian', 'cyclist', 'motorist', 'license',
    'permit', 'insurance', 'registration', 'fuel', 'gas', 'petrol', 'diesel', 'electric', 'hybrid', 'engine',
    'motor', 'wheel', 'tire', 'brake', 'accelerator', 'steering', 'gear', 'shift', 'clutch', 'horn',
    'headlight', 'taillight', 'indicator', 'blinker', 'windshield', 'windscreen', 'wiper', 'mirror', 'seatbelt', 'airbag',
    'navigation', 'GPS', 'map', 'direction', 'destination', 'departure', 'arrival', 'schedule', 'timetable', 'delay',
    'cancel', 'platform', 'station', 'terminal', 'airport', 'runway', 'airplane', 'aircraft', 'helicopter', 'boat',
    'ship', 'ferry', 'yacht', 'sailboat', 'canoe', 'kayak', 'port', 'harbor', 'dock', 'pier'
  ],
  shopping: [
    'shop', 'store', 'mall', 'market', 'supermarket', 'grocery', 'boutique', 'department', 'outlet', 'online',
    'website', 'app', 'cart', 'basket', 'checkout', 'counter', 'cashier', 'register', 'payment', 'cash',
    'card', 'credit', 'debit', 'digital', 'wallet', 'price', 'cost', 'value', 'discount', 'sale',
    'clearance', 'bargain', 'deal', 'offer', 'promotion', 'coupon', 'voucher', 'gift', 'receipt', 'invoice',
    'refund', 'return', 'exchange', 'warranty', 'guarantee', 'quality', 'brand', 'label', 'size', 'small',
    'medium', 'large', 'extra', 'color', 'colour', 'style', 'design', 'material', 'fabric', 'cotton',
    'wool', 'silk', 'leather', 'plastic', 'metal', 'wood', 'glass', 'ceramic', 'product', 'item',
    'goods', 'merchandise', 'stock', 'inventory', 'supply', 'demand', 'customer', 'client', 'consumer', 'buyer',
    'seller', 'vendor', 'retailer', 'wholesaler', 'manufacturer', 'producer', 'supplier', 'delivery', 'shipping', 'postage',
    'packaging', 'box', 'bag', 'wrap', 'present', 'purchase', 'buy', 'sell', 'order', 'reserve'
  ],
  family: [
    'family', 'parent', 'mother', 'father', 'mom', 'dad', 'child', 'children', 'son', 'daughter',
    'brother', 'sister', 'sibling', 'grandparent', 'grandmother', 'grandfather', 'grandma', 'grandpa', 'grandchild', 'grandson',
    'granddaughter', 'aunt', 'uncle', 'cousin', 'niece', 'nephew', 'relative', 'relation', 'ancestor', 'descendant',
    'generation', 'household', 'home', 'house', 'apartment', 'flat', 'room', 'bedroom', 'living', 'kitchen',
    'bathroom', 'garden', 'yard', 'neighborhood', 'community', 'marriage', 'wedding', 'engagement', 'divorce', 'separation',
    'relationship', 'partner', 'spouse', 'husband', 'wife', 'couple', 'dating', 'boyfriend', 'girlfriend', 'fiancé',
    'fiancée', 'single', 'married', 'divorced', 'widowed', 'orphan', 'adoption', 'foster', 'guardian', 'custody',
    'inheritance', 'will', 'estate', 'tradition', 'custom', 'ritual', 'ceremony', 'celebration', 'birthday', 'anniversary',
    'holiday', 'vacation', 'reunion', 'gathering', 'party', 'dinner', 'meal', 'recipe', 'cooking', 'baking',
    'cleaning', 'chore', 'responsibility', 'duty', 'obligation', 'support', 'care', 'love', 'affection', 'respect'
  ],
  sport: [
    'sport', 'game', 'match', 'competition', 'tournament', 'championship', 'league', 'team', '

// 生成单个词汇条目的函数
function generateWordEntry(word, topic) {
  const partOfSpeech = getPartOfSpeech(word);
  const simpleDefinitionEn = getSimpleDefinition(word, topic);
  const meaningZh = getChineseMeaning(word);
  const exampleSentence = getExampleSentence(word, topic);
  const exampleSentenceZh = getChineseExampleSentence(word, topic);
  const difficulty = getDifficulty(word);
  
  return `  {
    word: '${word}',
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
function getPartOfSpeech(word) {
  // 简单词性判断
  if (word.endsWith('ing') || word.endsWith('ed')) return 'verb';
  if (word.endsWith('ly')) return 'adverb';
  if (word.endsWith('ful') || word.endsWith('ous') || word.endsWith('ive')) return 'adjective';
  return Math.random() > 0.5 ? 'noun' : 'verb';
}

function getSimpleDefinition(word, topic) {
  const definitions = {
    food: `a type of ${topic} item`,
    culture: `related to ${topic} and arts`,
    transport: `used in ${topic} and travel`,
    shopping: `related to ${topic} and buying`,
    family: `related to ${topic} and relationships`,
    sport: `related to ${topic} and games`,
    emotions: `a feeling or ${topic}`,
    body: `part of the ${topic}`,
    abstract: `an ${topic} concept`,
    communication: `used in ${topic}`,
    time: `related to ${topic}`,
    place: `a ${topic} location`,
    adjAdv: `describing ${topic}`,
    verbs: `to ${word}`,
    phrases: `a common ${topic} phrase`
  };
  return definitions[topic] || `a ${word}`;
}

function getChineseMeaning(word) {
  // 简单的中文翻译（实际应用中应该使用词典）
  return word;
}

function getExampleSentence(word, topic) {
  const sentences = {
    food: `I like to eat ${word} for breakfast.`,
    culture: `We went to see a ${word} at the theater.`,
    transport: `We took the ${word} to get to the city.`,
    shopping: `I need to buy a new ${word} at the store.`,
    family: `My ${word} is coming to visit this weekend.`,
    sport: `He plays ${word} every weekend with friends.`,
    emotions: `I feel ${word} when I see my family.`,
    body: `My ${word} hurts after the exercise.`,
    abstract: `The ${word} of the project is important.`,
    communication: `We use ${word} to talk to each other.`,
    time: `The ${word} will pass quickly.`,
    place: `We met at the ${word} yesterday.`,
    adjAdv: `The weather is ${word} today.`,
    verbs: `I need to ${word} the document.`,
    phrases: `"${word}" is a common expression.`
  };
  return sentences[topic] || `This is an example with ${word}.`;
}

function getChineseExampleSentence(word, topic) {
  // 简单的中文例句
  return `这是一个关于${word}的例子。`;
}

function getDifficulty(word) {
  const length = word.length;
  if (length <= 4) return 1;
  if (length <= 6) return 2;
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
${words.map(word => generateWordEntry(word, topic)).join(',\n')}
];
`;
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated ${fileName} with ${words.length} words`);
}

// 主函数
function main() {
  const targetDir = path.join(__dirname, '..', 'packages', 'content', 'src', 'words');
  
  // 确保目录存在
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // 生成新文件
  Object.entries(wordLists).forEach(([topic, words]) => {
    generateFile(topic, words.slice(0, 150)); // 每个主题150个词
  });
  
  console.log('All files generated successfully!');
}

// 运行
main();