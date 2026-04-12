/**
 * PET B1 Vocabulary - Technology
 * Real PET B1 technology vocabulary with proper definitions
 * Total words: 30
 */

import { WordCard } from 'shared-types';

export const technologyWords: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    word: 'computer',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'an electronic machine for storing and processing data',
    meaningZh: '计算机',
    exampleSentence: 'I use my computer every day.',
    exampleSentenceZh: '我每天使用我的计算机。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'phone',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a device for talking to people who are far away',
    meaningZh: '电话',
    exampleSentence: 'I use my phone every day.',
    exampleSentenceZh: '我每天使用我的电话。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'internet',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a worldwide network of computers',
    meaningZh: '互联网',
    exampleSentence: 'I use the internet every day.',
    exampleSentenceZh: '我每天使用互联网。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'email',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'electronic mail sent between computers',
    meaningZh: '电子邮件',
    exampleSentence: 'I send email every day.',
    exampleSentenceZh: '我每天发送电子邮件。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'website',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a place on the internet with information',
    meaningZh: '网站',
    exampleSentence: 'I visit this website every day.',
    exampleSentenceZh: '我每天访问这个网站。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'app',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a program on a phone or computer',
    meaningZh: '应用程序',
    exampleSentence: 'I use this app every day.',
    exampleSentenceZh: '我每天使用这个应用程序。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'software',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'programs that run on a computer',
    meaningZh: '软件',
    exampleSentence: 'I use this software every day.',
    exampleSentenceZh: '我每天使用这个软件。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'hardware',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the physical parts of a computer',
    meaningZh: '硬件',
    exampleSentence: 'I check my hardware every day.',
    exampleSentenceZh: '我每天检查我的硬件。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'keyboard',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'keys for typing on a computer',
    meaningZh: '键盘',
    exampleSentence: 'I use my keyboard every day.',
    exampleSentenceZh: '我每天使用我的键盘。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'mouse',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a device for moving the cursor on screen',
    meaningZh: '鼠标',
    exampleSentence: 'I use my mouse every day.',
    exampleSentenceZh: '我每天使用我的鼠标。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'screen',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the part of a device that shows images',
    meaningZh: '屏幕',
    exampleSentence: 'I look at my screen every day.',
    exampleSentenceZh: '我每天看我的屏幕。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'battery',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a device that stores electricity',
    meaningZh: '电池',
    exampleSentence: 'I charge my battery every day.',
    exampleSentenceZh: '我每天给我的电池充电。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'camera',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a device for taking photos',
    meaningZh: '相机',
    exampleSentence: 'I use my camera every day.',
    exampleSentenceZh: '我每天使用我的相机。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'download',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to get files from the internet',
    meaningZh: '下载',
    exampleSentence: 'You can download files from the internet.',
    exampleSentenceZh: '你可以从互联网下载文件。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'upload',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to send files to the internet',
    meaningZh: '上传',
    exampleSentence: 'You can upload files to the internet.',
    exampleSentenceZh: '你可以上传文件到互联网。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'search',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to look for information online',
    meaningZh: '搜索',
    exampleSentence: 'I search for information online.',
    exampleSentenceZh: '我在线搜索信息。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'connect',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to join things together',
    meaningZh: '连接',
    exampleSentence: 'I connect my devices together.',
    exampleSentenceZh: '我把我的设备连接在一起。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'digital',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'using computer technology',
    meaningZh: '数字的',
    exampleSentence: 'This is a digital device.',
    exampleSentenceZh: '这是一个数字设备。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'online',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'connected to the internet',
    meaningZh: '在线的',
    exampleSentence: 'I am online every day.',
    exampleSentenceZh: '我每天都在线。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'offline',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not connected to the internet',
    meaningZh: '离线的',
    exampleSentence: 'Sometimes I work offline.',
    exampleSentenceZh: '有时我离线工作。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'wifi',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'wireless internet connection',
    meaningZh: '无线网络',
    exampleSentence: 'I use wifi every day.',
    exampleSentenceZh: '我每天使用无线网络。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'password',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a secret word for access',
    meaningZh: '密码',
    exampleSentence: 'I need a password to login.',
    exampleSentenceZh: '我需要密码来登录。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'account',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a user\'s access to a service',
    meaningZh: '账户',
    exampleSentence: 'I have an account on this website.',
    exampleSentenceZh: '我在这网站有一个账户。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'file',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a document stored on a computer',
    meaningZh: '文件',
    exampleSentence: 'I save my files on the computer.',
    exampleSentenceZh: '我把文件保存在计算机上。',
    topicTag: 'technology',
    difficulty: 1
  },
  {
    word: 'folder',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a place to store files on a computer',
    meaningZh: '文件夹',
    exampleSentence: 'I organize files in folders.',
    exampleSentenceZh: '我在文件夹中组织文件。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'data',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'information in digital form',
    meaningZh: '数据',
    exampleSentence: 'I collect data for my work.',
    exampleSentenceZh: '我为工作收集数据。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'memory',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'storage space in a computer',
    meaningZh: '内存',
    exampleSentence: 'My computer has lots of memory.',
    exampleSentenceZh: '我的计算机有很多内存。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'processor',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the brain of a computer',
    meaningZh: '处理器',
    exampleSentence: 'The processor is very fast.',
    exampleSentenceZh: '处理器非常快。',
    topicTag: 'technology',
    difficulty: 3
  },
  {
    word: 'network',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'connected computers that share information',
    meaningZh: '网络',
    exampleSentence: 'Computers are connected in a network.',
    exampleSentenceZh: '计算机在网络中连接。',
    topicTag: 'technology',
    difficulty: 2
  },
  {
    word: 'server',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a computer that provides services to others',
    meaningZh: '服务器',
    exampleSentence: 'The website runs on a server.',
    exampleSentenceZh: '网站在服务器上运行。',
    topicTag: 'technology',
    difficulty: 3
  }
];