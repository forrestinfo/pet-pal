"use strict";
/**
 * PET Pal - Shared Types
 * Core data structures for the PET Pal learning app
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Difficulty = exports.MemoryState = void 0;
/**
 * Memory state for spaced repetition
 */
exports.MemoryState = {
    New: 'new',
    Learning: 'learning',
    Review: 'review',
    Strong: 'strong',
    Mastered: 'mastered',
    Rescue: 'rescue',
};
/**
 * Difficulty level for content
 */
exports.Difficulty = {
    Easy: 1,
    Medium: 2,
    Hard: 3,
};
//# sourceMappingURL=types.js.map