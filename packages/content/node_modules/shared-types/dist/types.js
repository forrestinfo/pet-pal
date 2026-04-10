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
var MemoryState;
(function (MemoryState) {
    MemoryState["New"] = "new";
    MemoryState["Learning"] = "learning";
    MemoryState["Review"] = "review";
    MemoryState["Strong"] = "strong";
    MemoryState["Mastered"] = "mastered";
    MemoryState["Rescue"] = "rescue";
})(MemoryState || (exports.MemoryState = MemoryState = {}));
/**
 * Difficulty level for content
 */
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Easy"] = 1] = "Easy";
    Difficulty[Difficulty["Medium"] = 2] = "Medium";
    Difficulty[Difficulty["Hard"] = 3] = "Hard";
})(Difficulty || (exports.Difficulty = Difficulty = {}));
//# sourceMappingURL=types.js.map