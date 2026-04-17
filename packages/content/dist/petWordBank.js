"use strict";
/**
 * PET B1 Complete Vocabulary - Crawled 3000+ Words
 * Main file importing the latest scraped word banks only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.petVocabulary = void 0;
exports.getVocabularyByTopic = getVocabularyByTopic;
exports.getVocabularyByDifficulty = getVocabularyByDifficulty;
const ldoceWordBank_1 = require("./words/ldoceWordBank");
const ldoceChinese_1 = require("./words/ldoceChinese");
const wordFreq_en_50k_1 = require("./wordFreq.en_50k");
const uniqueByWord = (items) => {
    const map = new Map();
    for (const item of items) {
        if (!map.has(item.word))
            map.set(item.word, item);
    }
    return [...map.values()];
};
function getWordLen(w) {
    // Count English letters a-z; ignore punctuation like "mr." "don't" etc.
    const letters = (w || '').toLowerCase().match(/[a-z]/g);
    const len = letters ? letters.length : (w || '').length;
    // Ensure we can do 2-letter bucket even if corpus has no 2-letter words.
    return Math.max(2, len);
}
function getFreq(w) {
    const key = (w || '').toLowerCase();
    return wordFreq_en_50k_1.EN_WORD_FREQ[key] || 0;
}
// 学习顺序：
// 1) 按难度递增（1→2→3）
// 2) 同难度内按字母数递增（2,3,4...）
// 3) 同长度内按使用频率递减（高频优先）
// 4) 再按字母序稳定排序
function sortByLearningOrder(items) {
    return [...items].sort((a, b) => {
        const da = a.difficulty || 2;
        const db = b.difficulty || 2;
        if (da !== db)
            return da - db;
        const la = getWordLen(a.word);
        const lb = getWordLen(b.word);
        if (la !== lb)
            return la - lb;
        const fa = getFreq(a.word);
        const fb = getFreq(b.word);
        if (fa !== fb)
            return fb - fa;
        return a.word.localeCompare(b.word);
    });
}
exports.petVocabulary = sortByLearningOrder(uniqueByWord([
    ...ldoceChinese_1.ldoceChineseWords,
    ...ldoceWordBank_1.ldoceWords,
]));
function getVocabularyByTopic(topic) {
    return exports.petVocabulary.filter(word => word.topicTag === topic);
}
function getVocabularyByDifficulty(level) {
    return exports.petVocabulary.filter(word => word.difficulty === level);
}
//# sourceMappingURL=petWordBank.js.map