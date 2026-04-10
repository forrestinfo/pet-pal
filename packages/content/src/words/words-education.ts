/**
 * Education Vocabulary for PET B1
 * Words related to school, learning, and academic activities
 */

import { WordCard } from 'shared-types';

export const educationWords: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    word: 'attend',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to go to a place or event',
    meaningZh: '参加',
    exampleSentence: 'Many students attend the school festival.',
    exampleSentenceZh: '许多学生参加学校节日。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'knowledge',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'what you know about something',
    meaningZh: '知识',
    exampleSentence: 'He has a lot of knowledge about history.',
    exampleSentenceZh: '他有很多历史知识。',
    topicTag: 'education',
    difficulty: 3
  },
  {
    word: 'language',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'words people use to talk',
    meaningZh: '语言',
    exampleSentence: 'English is an international language.',
    exampleSentenceZh: '英语是一门国际语言。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'answer',
    partOfSpeech: 'noun/verb',
    simpleDefinitionEn: 'what you say when someone asks a question',
    meaningZh: '答案；回答',
    exampleSentence: 'Please write your answer on the paper.',
    exampleSentenceZh: '请把你的答案写在纸上。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'assignment',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'work given by a teacher',
    meaningZh: '作业',
    exampleSentence: 'I have a difficult assignment to finish.',
    exampleSentenceZh: '我有一个难做的作业要完成。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'book',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'pages with writing that you read',
    meaningZh: '书',
    exampleSentence: 'I borrowed a book from the library.',
    exampleSentenceZh: '我从图书馆借了一本书。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'campus',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'the area of a school or university',
    meaningZh: '校园',
    exampleSentence: 'Our university campus is very beautiful.',
    exampleSentenceZh: '我们大学校园非常美丽。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'class',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a group of students learning together',
    meaningZh: '班级；课',
    exampleSentence: 'My English class has twenty students.',
    exampleSentenceZh: '我的英语班有二十个学生。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'classroom',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a room where students learn',
    meaningZh: '教室',
    exampleSentence: 'Our classroom is on the second floor.',
    exampleSentenceZh: '我们的教室在二楼。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'college',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a place for higher education',
    meaningZh: '学院；大学',
    exampleSentence: 'My sister studies at a medical college.',
    exampleSentenceZh: '我姐姐在一所医学院学习。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'course',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a series of lessons',
    meaningZh: '课程',
    exampleSentence: 'I\'m taking a photography course.',
    exampleSentenceZh: '我正在上摄影课程。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'degree',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a qualification from a university',
    meaningZh: '学位',
    exampleSentence: 'She has a degree in engineering.',
    exampleSentenceZh: '她有工程学学位。',
    topicTag: 'education',
    difficulty: 3
  },
  {
    word: 'diploma',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a certificate for finishing a course',
    meaningZh: '文凭',
    exampleSentence: 'I received my diploma last year.',
    exampleSentenceZh: '我去年拿到了文凭。',
    topicTag: 'education',
    difficulty: 3
  },
  {
    word: 'education',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'learning at school or college',
    meaningZh: '教育',
    exampleSentence: 'Education is important for everyone.',
    exampleSentenceZh: '教育对每个人都很重要。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'exam',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a test of knowledge',
    meaningZh: '考试',
    exampleSentence: 'I have an important exam tomorrow.',
    exampleSentenceZh: '我明天有一个重要的考试。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'grade',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a score or mark in school',
    meaningZh: '成绩；年级',
    exampleSentence: 'I got a good grade in mathematics.',
    exampleSentenceZh: '我在数学上取得了好成绩。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'homework',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'school work done at home',
    meaningZh: '家庭作业',
    exampleSentence: 'I have a lot of homework tonight.',
    exampleSentenceZh: '我今晚有很多家庭作业。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'institute',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'an organization for education',
    meaningZh: '学院；研究所',
    exampleSentence: 'She studies at a language institute.',
    exampleSentenceZh: '她在一所语言学院学习。',
    topicTag: 'education',
    difficulty: 3
  },
  {
    word: 'lesson',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a period of teaching',
    meaningZh: '课',
    exampleSentence: 'Our English lesson starts at 9 o\'clock.',
    exampleSentenceZh: '我们的英语课九点开始。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'library',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a place with books to borrow',
    meaningZh: '图书馆',
    exampleSentence: 'I often study in the school library.',
    exampleSentenceZh: '我经常在学校图书馆学习。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'mark',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a score in a test',
    meaningZh: '分数',
    exampleSentence: 'I got high marks in all subjects.',
    exampleSentenceZh: '我所有科目都得了高分。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'notebook',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a book for writing notes',
    meaningZh: '笔记本',
    exampleSentence: 'I write important points in my notebook.',
    exampleSentenceZh: '我把重点写在笔记本上。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'paper',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'thin material for writing',
    meaningZh: '纸；论文',
    exampleSentence: 'Please write your name on this paper.',
    exampleSentenceZh: '请在这张纸上写下你的名字。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'pencil',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a tool for writing or drawing',
    meaningZh: '铅笔',
    exampleSentence: 'I need a pencil for the test.',
    exampleSentenceZh: '我需要一支铅笔参加考试。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'professor',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a university teacher',
    meaningZh: '教授',
    exampleSentence: 'Our professor is very knowledgeable.',
    exampleSentenceZh: '我们的教授知识渊博。',
    topicTag: 'education',
    difficulty: 3
  },
  {
    word: 'project',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a piece of work that takes time',
    meaningZh: '项目',
    exampleSentence: 'We have a group project about climate change.',
    exampleSentenceZh: '我们有一个关于气候变化的团体项目。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'question',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'something you ask',
    meaningZh: '问题',
    exampleSentence: 'Do you have any questions about the lesson?',
    exampleSentenceZh: '关于这节课你有什么问题吗？',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'research',
    partOfSpeech: 'noun/verb',
    simpleDefinitionEn: 'careful study to find new information',
    meaningZh: '研究',
    exampleSentence: 'Scientists do research to find cures for diseases.',
    exampleSentenceZh: '科学家进行研究以找到疾病的治疗方法。',
    topicTag: 'education',
    difficulty: 3
  },
  {
    word: 'school',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a place for learning',
    meaningZh: '学校',
    exampleSentence: 'My school is near my house.',
    exampleSentenceZh: '我的学校在我家附近。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'student',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a person who studies',
    meaningZh: '学生',
    exampleSentence: 'I am a student at the university.',
    exampleSentenceZh: '我是大学的学生。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'subject',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'an area of study',
    meaningZh: '科目',
    exampleSentence: 'Mathematics is my favorite subject.',
    exampleSentenceZh: '数学是我最喜欢的科目。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'teacher',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a person who teaches',
    meaningZh: '老师',
    exampleSentence: 'Our English teacher is from Canada.',
    exampleSentenceZh: '我们的英语老师来自加拿大。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'test',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'an exam to check knowledge',
    meaningZh: '测试',
    exampleSentence: 'We have a vocabulary test tomorrow.',
    exampleSentenceZh: '我们明天有词汇测试。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'textbook',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a book for studying a subject',
    meaningZh: '教科书',
    exampleSentence: 'Please open your textbook to page 45.',
    exampleSentenceZh: '请打开教科书到第45页。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'timetable',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a plan of lessons or activities',
    meaningZh: '时间表',
    exampleSentence: 'Check the timetable for your classes.',
    exampleSentenceZh: '查看你的课程时间表。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'tuition',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'money paid for education',
    meaningZh: '学费',
    exampleSentence: 'University tuition is very expensive.',
    exampleSentenceZh: '大学学费非常昂贵。',
    topicTag: 'education',
    difficulty: 3
  },
  {
    word: 'university',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'a place for higher education',
    meaningZh: '大学',
    exampleSentence: 'She studies medicine at the university.',
    exampleSentenceZh: '她在大学学习医学。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'vocabulary',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'words you know in a language',
    meaningZh: '词汇',
    exampleSentence: 'I need to improve my English vocabulary.',
    exampleSentenceZh: '我需要提高我的英语词汇量。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'academic',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'related to education and study',
    meaningZh: '学术的',
    exampleSentence: 'She has excellent academic results.',
    exampleSentenceZh: '她有优秀的学术成绩。',
    topicTag: 'education',
    difficulty: 3
  },
  {
    word: 'clever',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'quick to learn and understand',
    meaningZh: '聪明的',
    exampleSentence: 'My brother is very clever at mathematics.',
    exampleSentenceZh: '我弟弟在数学方面很聪明。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'difficult',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not easy',
    meaningZh: '困难的',
    exampleSentence: 'This physics problem is very difficult.',
    exampleSentenceZh: '这个物理问题非常困难。',
    topicTag: 'education',
    difficulty: 1
  },
  {
    word: 'educational',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'helping you learn',
    meaningZh: '教育的',
    exampleSentence: 'This museum visit was very educational.',
    exampleSentenceZh: '这次博物馆参观非常有教育意义。',
    topicTag: 'education',
    difficulty: 2
  },
  {
    word: 'intelligent',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'having good thinking ability',
    meaningZh: '聪明的',
    exampleSentence: 'She is an intelligent student.',
    exampleSentenceZh: '她是一个聪明的学生。',
    topicTag: 'education',
    difficulty: 3
  },
  {
    word: 'learned',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'having much knowledge',
    meaningZh: '有学问的',
    exampleSentence: 'Our professor is a very learned person.',
    exampleSentenceZh: '我们的教授是一个很有学问的人。',
    topicTag: 'education',
    difficulty: 3
  },
  {
    word: 'studious',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'spending much time studying',
    meaningZh: '勤奋好学的',
    exampleSentence: 'He is a studious student who always does his homework.',
    exampleSentenceZh: '他是一个勤奋好学的学生，总是做作业。',
    topicTag: 'education',
    difficulty: 3
  }
];