"use strict";
/**
 * PET B1 Preliminary Core Vocabulary
 * Each word has a simple English definition using A1/A2 level words
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.petVocabulary = void 0;
exports.getVocabularyByTopic = getVocabularyByTopic;
exports.getVocabularyByDifficulty = getVocabularyByDifficulty;
/**
 * PET vocabulary with simple English definitions - 200+ words
 * Organized by PET official topics
 */
exports.petVocabulary = [
    // ==================== DAILY LIFE (日常) ====================
    {
        word: 'accept',
        partOfSpeech: 'verb',
        simpleDefinitionEn: 'to say yes to something',
        meaningZh: '接受',
        exampleSentence: 'I accept your invitation to the party.',
        exampleSentenceZh: '我接受你派对的邀请。',
        topicTag: 'daily life',
        difficulty: 2
    },
    {
        word: 'borrow',
        partOfSpeech: 'verb',
        simpleDefinitionEn: 'to take something and give it back later',
        meaningZh: '借入',
        exampleSentence: 'Can I borrow your pen for a moment?',
        exampleSentenceZh: '我可以借你的笔用一下吗？',
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
        exampleSentenceZh: '我想提高我的英语口语。',
        topicTag: 'daily life',
        difficulty: 2
    },
    {
        word: 'polite',
        partOfSpeech: 'adjective',
        simpleDefinitionEn: 'kind and careful in the way you speak',
        meaningZh: '有礼貌的',
        exampleSentence: 'It is polite to say "please" and "thank you".',
        exampleSentenceZh: '说"请"和"谢谢"是有礼貌的。',
        topicTag: 'social',
        difficulty: 2
    },
    {
        word: 'promise',
        partOfSpeech: 'noun/verb',
        simpleDefinitionEn: 'to say you will do something',
        meaningZh: '承诺',
        exampleSentence: 'I promise to finish my homework.',
        exampleSentenceZh: '我承诺完成作业。',
        topicTag: 'communication',
        difficulty: 2
    },
    {
        word: 'attend',
        partOfSpeech: 'verb',
        simpleDefinitionEn: 'to go to a place or event',
        meaningZh: '参加',
        exampleSentence: 'Many students attend the school festival.',
        exampleSentenceZh: '许多学生参加了学校节日。',
        topicTag: 'education',
        difficulty: 2
    },
    {
        word: 'environment',
        partOfSpeech: 'noun',
        simpleDefinitionEn: 'the world around us',
        meaningZh: '环境',
        exampleSentence: 'We should protect our environment.',
        exampleSentenceZh: '我们应该保护我们的环境。',
        topicTag: 'nature',
        difficulty: 3
    },
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
        word: 'healthy',
        partOfSpeech: 'adjective',
        simpleDefinitionEn: 'good for your body',
        meaningZh: '健康的',
        exampleSentence: 'Eating vegetables is healthy.',
        exampleSentenceZh: '吃蔬菜是健康的。',
        topicTag: 'health',
        difficulty: 1
    },
    {
        word: 'information',
        partOfSpeech: 'noun',
        simpleDefinitionEn: 'facts about something',
        meaningZh: '信息',
        exampleSentence: 'I need more information about the trip.',
        exampleSentenceZh: '我需要更多关于这次旅行的信息。',
        topicTag: 'communication',
        difficulty: 2
    },
    {
        word: 'journey',
        partOfSpeech: 'noun',
        simpleDefinitionEn: 'a trip from one place to another',
        meaningZh: '旅程',
        exampleSentence: 'The journey took three hours by train.',
        exampleSentenceZh: '火车旅程花了三个小时。',
        topicTag: 'travel',
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
        word: 'natural',
        partOfSpeech: 'adjective',
        simpleDefinitionEn: 'from nature, not made by people',
        meaningZh: '自然的',
        exampleSentence: 'The park has many natural beauty spots.',
        exampleSentenceZh: '公园有很多自然美景。',
        topicTag: 'nature',
        difficulty: 2
    },
    {
        word: 'opinion',
        partOfSpeech: 'noun',
        simpleDefinitionEn: 'what you think about something',
        meaningZh: '意见',
        exampleSentence: 'In my opinion, the film was excellent.',
        exampleSentenceZh: '在我看来，这部电影很棒。',
        topicTag: 'communication',
        difficulty: 2
    },
    {
        word: 'popular',
        partOfSpeech: 'adjective',
        simpleDefinitionEn: 'liked by many people',
        meaningZh: '受欢迎的',
        exampleSentence: 'This song is very popular with teenagers.',
        exampleSentenceZh: '这首歌在青少年中很受欢迎。',
        topicTag: 'social',
        difficulty: 2
    },
    {
        word: 'recent',
        partOfSpeech: 'adjective',
        simpleDefinitionEn: 'happening not long ago',
        meaningZh: '最近的',
        exampleSentence: 'I read a recent article about climate change.',
        exampleSentenceZh: '我读了一篇关于气候变化的最近文章。',
        topicTag: 'time',
        difficulty: 2
    },
    {
        word: 'similar',
        partOfSpeech: 'adjective',
        simpleDefinitionEn: 'almost the same',
        meaningZh: '相似的',
        exampleSentence: 'Our ideas are quite similar.',
        exampleSentenceZh: '我们的想法很相似。',
        topicTag: 'comparison',
        difficulty: 2
    },
    {
        word: 'traditional',
        partOfSpeech: 'adjective',
        simpleDefinitionEn: 'following old ways',
        meaningZh: '传统的',
        exampleSentence: 'We eat traditional food during the festival.',
        exampleSentenceZh: '我们在节日期间吃传统食物。',
        topicTag: 'culture',
        difficulty: 3
    }
];
/**
 * Get PET vocabulary by topic
 */
function getVocabularyByTopic(topic) {
    return exports.petVocabulary.filter(word => word.topicTag === topic);
}
/**
 * Get vocabulary by difficulty level
 */
function getVocabularyByDifficulty(level) {
    return exports.petVocabulary.filter(word => word.difficulty === level);
}
//# sourceMappingURL=petWordBank.js.map