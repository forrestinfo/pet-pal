"use strict";
/**
 * PET B1 Preliminary Core Sentences
 * Sentences for writing, speaking, and functional use
 * 274+ sentences covering all PET exam functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.petSentences = void 0;
exports.getSentencesByFunction = getSentencesByFunction;
exports.getSentencesByDifficulty = getSentencesByDifficulty;
exports.getSentencesByTopic = getSentencesByTopic;
const sentences_email_1 = require("./sentences/sentences-email");
const sentences_speaking_1 = require("./sentences/sentences-speaking");
const sentences_storyWriting_1 = require("./sentences/sentences-storyWriting");
const sentences_grammarPatterns_1 = require("./sentences/sentences-grammarPatterns");
const sentences_functional_1 = require("./sentences/sentences-functional");
const sentences_comparison_1 = require("./sentences/sentences-comparison");
const sentences_opinion_1 = require("./sentences/sentences-opinion");
/**
 * PET sentences categorized by function - 274+ sentences
 */
exports.petSentences = [
    ...sentences_email_1.emailSentences,
    ...sentences_speaking_1.speakingSentences,
    ...sentences_storyWriting_1.storyWritingSentences,
    ...sentences_grammarPatterns_1.grammarSentences,
    ...sentences_functional_1.functionalSentences,
    ...sentences_comparison_1.comparisonSentences,
    ...sentences_opinion_1.opinionSentences,
];
/**
 * Get sentences by function tag
 */
function getSentencesByFunction(funcTag) {
    return exports.petSentences.filter(sentence => sentence.functionTag === funcTag);
}
/**
 * Get sentences by difficulty level
 */
function getSentencesByDifficulty(level) {
    return exports.petSentences.filter(sentence => sentence.difficulty === level);
}
/**
 * Get sentences by topic
 */
function getSentencesByTopic(topic) {
    return exports.petSentences.filter(sentence => sentence.topicTag === topic);
}
//# sourceMappingURL=petSentenceBank.js.map