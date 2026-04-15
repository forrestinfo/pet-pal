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
const uniqueByWord = (items) => {
    const map = new Map();
    for (const item of items) {
        if (!map.has(item.word))
            map.set(item.word, item);
    }
    return [...map.values()];
};
exports.petVocabulary = uniqueByWord([
    ...ldoceChinese_1.ldoceChineseWords,
    ...ldoceWordBank_1.ldoceWords,
]);
function getVocabularyByTopic(topic) {
    return exports.petVocabulary.filter(word => word.topicTag === topic);
}
function getVocabularyByDifficulty(level) {
    return exports.petVocabulary.filter(word => word.difficulty === level);
}
//# sourceMappingURL=petWordBank.js.map