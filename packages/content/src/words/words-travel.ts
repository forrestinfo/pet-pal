/**
 * Travel Vocabulary for PET B1
 * Words related to travel, transportation, and tourism
 */

import { WordCard } from 'shared-types';

export const travelWords: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    word: 'foreign',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'from another country',
    meaningZh: '外国的',
    exampleSentence: 'She speaks three foreign languages.',
    exampleSentenceZh: '她会说三门外语。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'journey',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a trip from one place to another',
    meaningZh: '旅程',
    exampleSentence: 'The journey took three hours by train.',
    exampleSentenceZh: '乘火车旅程花了三个小时。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'abroad',
    partOfSpeech: 'adverb',
    simpleDefinitionEn: 'in or to another country',
    meaningZh: '在国外',
    exampleSentence: 'My brother studies abroad in England.',
    exampleSentenceZh: '我弟弟在英国留学。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'airport',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a place where planes take off and land',
    meaningZh: '机场',
    exampleSentence: 'We need to arrive at the airport two hours early.',
    exampleSentenceZh: '我们需要提前两小时到达机场。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'arrival',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the act of reaching a place',
    meaningZh: '到达',
    exampleSentence: 'Our arrival time is 3:00 PM.',
    exampleSentenceZh: '我们的到达时间是下午3点。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'baggage',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'bags and suitcases for travel',
    meaningZh: '行李',
    exampleSentence: 'Please collect your baggage from the carousel.',
    exampleSentenceZh: '请从传送带上取走您的行李。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'beach',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a sandy area by the sea',
    meaningZh: '海滩',
    exampleSentence: 'We spent the day at the beach.',
    exampleSentenceZh: '我们在海滩度过了一天。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'border',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the line between two countries',
    meaningZh: '边界',
    exampleSentence: 'We crossed the border into France.',
    exampleSentenceZh: '我们越过边界进入法国。',
    topicTag: 'travel',
    difficulty: 3
  },
  {
    word: 'bus',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a large vehicle for many passengers',
    meaningZh: '公共汽车',
    exampleSentence: 'I take the bus to work every day.',
    exampleSentenceZh: '我每天乘公共汽车上班。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'camp',
    partOfSpeech: 'noun/verb',
    simpleDefinitionEn: 'to stay in a tent outdoors',
    meaningZh: '露营',
    exampleSentence: 'We like to camp in the mountains.',
    exampleSentenceZh: '我们喜欢在山上露营。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'capital',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the main city of a country',
    meaningZh: '首都',
    exampleSentence: 'London is the capital of England.',
    exampleSentenceZh: '伦敦是英格兰的首都。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'car',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a vehicle with four wheels',
    meaningZh: '汽车',
    exampleSentence: 'We drove to the coast in our car.',
    exampleSentenceZh: '我们开车去了海岸。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'coach',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a comfortable bus for long trips',
    meaningZh: '长途汽车',
    exampleSentence: 'We took a coach to the city.',
    exampleSentenceZh: '我们乘长途汽车去城市。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'coast',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the land next to the sea',
    meaningZh: '海岸',
    exampleSentence: 'The coast is beautiful in summer.',
    exampleSentenceZh: '夏天海岸很美。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'country',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a nation with its own government',
    meaningZh: '国家',
    exampleSentence: 'France is a beautiful country.',
    exampleSentenceZh: '法国是一个美丽的国家。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'cruise',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a holiday on a ship',
    meaningZh: '游轮旅行',
    exampleSentence: 'We went on a cruise around the Mediterranean.',
    exampleSentenceZh: '我们乘坐游轮环游地中海。',
    topicTag: 'travel',
    difficulty: 3
  },
  {
    word: 'culture',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the way of life of a group of people',
    meaningZh: '文化',
    exampleSentence: 'I enjoy learning about different cultures.',
    exampleSentenceZh: '我喜欢了解不同的文化。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'customs',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the place where officials check luggage',
    meaningZh: '海关',
    exampleSentence: 'We went through customs at the airport.',
    exampleSentenceZh: '我们在机场通过了海关。',
    topicTag: 'travel',
    difficulty: 3
  },
  {
    word: 'departure',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the act of leaving a place',
    meaningZh: '出发',
    exampleSentence: 'Our departure time is 10:00 AM.',
    exampleSentenceZh: '我们的出发时间是上午10点。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'destination',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the place you are going to',
    meaningZh: '目的地',
    exampleSentence: 'Our destination is Paris.',
    exampleSentenceZh: '我们的目的地是巴黎。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'distance',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'how far it is between two places',
    meaningZh: '距离',
    exampleSentence: 'The distance from here to the city is 50 kilometers.',
    exampleSentenceZh: '从这里到城市的距离是50公里。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'drive',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to control a car',
    meaningZh: '驾驶',
    exampleSentence: 'I learned to drive when I was 18.',
    exampleSentenceZh: '我18岁时学会了开车。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'explore',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to travel to discover new places',
    meaningZh: '探索',
    exampleSentence: 'We want to explore the old town.',
    exampleSentenceZh: '我们想探索老城区。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'flight',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a journey by plane',
    meaningZh: '航班',
    exampleSentence: 'Our flight leaves at 6:00 PM.',
    exampleSentenceZh: '我们的航班下午6点起飞。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'foreigner',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a person from another country',
    meaningZh: '外国人',
    exampleSentence: 'Many foreigners visit our city every year.',
    exampleSentenceZh: '每年有许多外国人访问我们的城市。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'guide',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a person who shows tourists around',
    meaningZh: '导游',
    exampleSentence: 'The guide showed us the historical sites.',
    exampleSentenceZh: '导游向我们展示了历史遗址。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'holiday',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a time when you do not work or study',
    meaningZh: '假期',
    exampleSentence: 'We are going on holiday next week.',
    exampleSentenceZh: '我们下周要去度假。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'hotel',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a place where you pay to stay',
    meaningZh: '酒店',
    exampleSentence: 'We stayed in a nice hotel by the beach.',
    exampleSentenceZh: '我们住在海滩边的一家好酒店。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'international',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'involving different countries',
    meaningZh: '国际的',
    exampleSentence: 'This is an international airport.',
    exampleSentenceZh: '这是一个国际机场。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'island',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'land with water all around it',
    meaningZh: '岛屿',
    exampleSentence: 'We visited a beautiful tropical island.',
    exampleSentenceZh: '我们参观了一个美丽的热带岛屿。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'itinerary',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a plan for a trip',
    meaningZh: '行程',
    exampleSentence: 'Here is our itinerary for the week.',
    exampleSentenceZh: '这是我们本周的行程。',
    topicTag: 'travel',
    difficulty: 3
  },
  {
    word: 'landmark',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'an important building or place',
    meaningZh: '地标',
    exampleSentence: 'The Eiffel Tower is a famous landmark.',
    exampleSentenceZh: '埃菲尔铁塔是著名的地标。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'luggage',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'bags for travel',
    meaningZh: '行李',
    exampleSentence: 'Please put your luggage on the scale.',
    exampleSentenceZh: '请把您的行李放在秤上。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'map',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a drawing of an area',
    meaningZh: '地图',
    exampleSentence: 'We need a map to find our way.',
    exampleSentenceZh: '我们需要地图来找到路。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'mountain',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a very high hill',
    meaningZh: '山',
    exampleSentence: 'We climbed the mountain yesterday.',
    exampleSentenceZh: '我们昨天爬了山。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'museum',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a building with interesting things to see',
    meaningZh: '博物馆',
    exampleSentence: 'We visited the art museum.',
    exampleSentenceZh: '我们参观了艺术博物馆。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'nationality',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the country you come from',
    meaningZh: '国籍',
    exampleSentence: 'What is your nationality?',
    exampleSentenceZh: '你的国籍是什么？',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'passenger',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a person traveling in a vehicle',
    meaningZh: '乘客',
    exampleSentence: 'All passengers must wear seat belts.',
    exampleSentenceZh: '所有乘客必须系安全带。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'passport',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a document for traveling abroad',
    meaningZh: '护照',
    exampleSentence: 'You need a passport to travel overseas.',
    exampleSentenceZh: '你需要护照才能出国旅行。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'photo',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a picture taken with a camera',
    meaningZh: '照片',
    exampleSentence: 'I took many photos on my holiday.',
    exampleSentenceZh: '我在假期拍了很多照片。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'plane',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a vehicle that flies',
    meaningZh: '飞机',
    exampleSentence: 'The plane landed safely.',
    exampleSentenceZh: '飞机安全着陆了。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'resort',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a place for holidays',
    meaningZh: '度假村',
    exampleSentence: 'We stayed at a beach resort.',
    exampleSentenceZh: '我们住在一个海滩度假村。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'restaurant',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a place where you buy and eat meals',
    meaningZh: '餐厅',
    exampleSentence: 'We had dinner at a nice restaurant.',
    exampleSentenceZh: '我们在一家不错的餐厅吃了晚餐。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'route',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the way from one place to another',
    meaningZh: '路线',
    exampleSentence: 'What is the best route to the city?',
    exampleSentenceZh: '去城市的最佳路线是什么？',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'sightseeing',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'visiting interesting places',
    meaningZh: '观光',
    exampleSentence: 'We did some sightseeing in the old town.',
    exampleSentenceZh: '我们在老城区进行了一些观光。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'souvenir',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'something you buy to remember a place',
    meaningZh: '纪念品',
    exampleSentence: 'I bought a souvenir from Paris.',
    exampleSentenceZh: '我从巴黎买了一个纪念品。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'station',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a place where trains or buses stop',
    meaningZh: '车站',
    exampleSentence: 'I will meet you at the train station.',
    exampleSentenceZh: '我会在火车站见你。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'suitcase',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a bag for carrying clothes when traveling',
    meaningZh: '行李箱',
    exampleSentence: 'I packed my suitcase for the trip.',
    exampleSentenceZh: '我为旅行收拾了行李箱。',
    topicTag: 'travel',
    difficulty: 2
  },
  {
    word: 'taxi',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a car you pay to ride in',
    meaningZh: '出租车',
    exampleSentence: 'We took a taxi to the airport.',
    exampleSentenceZh: '我们乘出租车去了机场。',
    topicTag: 'travel',
    difficulty: 1
  },
  {
    word: 'ticket',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a piece of paper that lets you travel',
    meaningZh: '票',
    exampleSentence: 'I bought a ticket for the concert.',
    exampleSentenceZh: '我买了一张音乐会的票。',
    topicTag: 'travel',
    difficulty: 1
  }
];
