"use strict";
/**
 * PET B1 Complete Vocabulary - 4400+ Words
 * Main file importing all topic-specific vocabulary
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.petVocabulary = void 0;
exports.getVocabularyByTopic = getVocabularyByTopic;
exports.getVocabularyByDifficulty = getVocabularyByDifficulty;
const petWordBank_dailyLife_1 = require("./words/petWordBank-dailyLife");
const petWordBank_education_1 = require("./words/petWordBank-education");
const petWordBank_travel_1 = require("./words/petWordBank-travel");
const petWordBank_health_1 = require("./words/petWordBank-health");
const petWordBank_social_1 = require("./words/petWordBank-social");
const petWordBank_nature_1 = require("./words/petWordBank-nature");
const petWordBank_technology_1 = require("./words/petWordBank-technology");
const petWordBank_work_1 = require("./words/petWordBank-work");
const words_food_1 = require("./words/words-food");
const words_culture_1 = require("./words/words-culture");
const words_sport_1 = require("./words/words-sport");
const words_abstract_1 = require("./words/words-abstract");
const words_shopping_1 = require("./words/words-shopping");
const words_family_1 = require("./words/words-family");
const words_adjAdv_1 = require("./words/words-adjAdv");
const words_body_1 = require("./words/words-body");
const words_communication_1 = require("./words/words-communication");
const words_emotions_1 = require("./words/words-emotions");
const words_phrases_1 = require("./words/words-phrases");
const words_place_1 = require("./words/words-place");
const words_time_1 = require("./words/words-time");
const words_transport_1 = require("./words/words-transport");
const words_verbs_1 = require("./words/words-verbs");
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
    ...petWordBank_dailyLife_1.dailyLifeWords,
    ...petWordBank_education_1.educationWords,
    ...petWordBank_travel_1.travelWords,
    ...petWordBank_health_1.healthWords,
    ...petWordBank_social_1.socialWords,
    ...petWordBank_nature_1.natureWords,
    ...petWordBank_technology_1.technologyWords,
    ...petWordBank_work_1.workWords,
    ...words_food_1.foodWords,
    ...words_culture_1.cultureWords,
    ...words_sport_1.sportWords,
    ...words_abstract_1.abstractWords,
    ...words_shopping_1.shoppingWords,
    ...words_family_1.familyWords,
    ...words_adjAdv_1.adjAdvWords,
    ...words_body_1.bodyWords,
    ...words_communication_1.communicationWords,
    ...words_emotions_1.emotionsWords,
    ...words_phrases_1.phrasesWords,
    ...words_place_1.placeWords,
    ...words_time_1.timeWords,
    ...words_transport_1.transportWords,
    ...words_verbs_1.verbsWords,
    ...ldoceWordBank_1.ldoceWords,
    ...ldoceChinese_1.ldoceChineseWords,
]);
function getVocabularyByTopic(topic) {
    return exports.petVocabulary.filter(word => word.topicTag === topic);
}
function getVocabularyByDifficulty(level) {
    return exports.petVocabulary.filter(word => word.difficulty === level);
}
//# sourceMappingURL=petWordBank.js.map