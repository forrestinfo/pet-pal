import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage, useLearningProgress, usePetState, useLearnedItems } from './useLocalStorage';
import type { LearnedItem } from './useLocalStorage';
import { processReview, getDueCards } from '../../../../packages/spaced-repetition/dist';

type WordCard = {
  id: string;
  word: string;
  phonetic?: string;
  partOfSpeech: string;
  simpleDefinitionEn: string;
  meaningZh: string;
  exampleSentence: string;
  exampleSentenceZh: string;
  topicTag: string;
  difficulty: number;
  memoryState: any;
  intervalDays: number;
  nextReviewAt: any;
  lapseCount: number;
  correctCount: number;
  wrongCount: number;
  createdAt: any;
  updatedAt: any;
};

type SentenceCard = {
  id: string;
  sentence: string;
  sentenceZh: string;
  chunkList: string[];
  keyPhrases: string[];
  functionTag: string;
  topicTag: string;
  difficulty: number;
  memoryState: any;
  intervalDays: number;
  nextReviewAt: any;
  lapseCount: number;
  correctCount: number;
  wrongCount: number;
  createdAt: any;
  updatedAt: any;
};

import { petVocabulary, petSentences } from '../../../../packages/content/dist';

export function useLearning() {
  const [settings] = useLocalStorage('pet-pal-settings', {
    username: 'PET Learner',
    dailyGoal: 10,
    pronunciationSpeed: 1.0,
    theme: 'melody',
    soundEnabled: true,
    musicEnabled: true,
  });

  const [progress, setProgress] = useLearningProgress();
  const [pet, setPet] = usePetState();
  const [learnedItems, setLearnedItems] = useLearnedItems();

  // Real SRS card stores (per-account via snapshot in App.tsx)
  const [wordCards, setWordCards] = useLocalStorage<Record<string, WordCard>>('pet-pal-word-cards', {});
  const [sentenceCards, setSentenceCards] = useLocalStorage<Record<string, SentenceCard>>('pet-pal-sentence-cards', {});

  const [currentWord, setCurrentWord] = useState<WordCard | null>(null);
  const [currentSentence, setCurrentSentence] = useState<SentenceCard | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [todayLearned, setTodayLearned] = useState(0);
  const [learningMode, setLearningMode] = useState<'review' | 'fillInBlank'>('review');
  const [fillInDifficulty, setFillInDifficulty] = useState<1 | 2 | 3 | 4>(2);

  const buildWordCard = (wordData: any, randomIndex: number): WordCard => ({
    ...wordData,
    id: `word_${Date.now()}_${randomIndex}`,
    memoryState: 'new',
    intervalDays: 10 / (24 * 60),
    nextReviewAt: new Date(),
    lapseCount: 0,
    correctCount: 0,
    wrongCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const buildSentenceCard = (sentenceData: any, randomIndex: number): SentenceCard => ({
    ...sentenceData,
    id: `sentence_${Date.now()}_${randomIndex}`,
    memoryState: 'new',
    intervalDays: 10 / (24 * 60),
    nextReviewAt: new Date(),
    lapseCount: 0,
    correctCount: 0,
    wrongCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const pickDue = useCallback((): WordCard | SentenceCard | null => {
    const now = new Date();
    const words = Object.values(wordCards).map((c: any) => ({
      ...c,
      nextReviewAt: new Date(c.nextReviewAt),
      createdAt: new Date(c.createdAt),
      updatedAt: new Date(c.updatedAt),
    })).filter((c: any) => c.nextReviewAt <= now);

    const sentences = Object.values(sentenceCards).map((c: any) => ({
      ...c,
      nextReviewAt: new Date(c.nextReviewAt),
      createdAt: new Date(c.createdAt),
      updatedAt: new Date(c.updatedAt),
    })).filter((c: any) => c.nextReviewAt <= now);

    const due = getDueCards([...(words as any[]), ...(sentences as any[])], 1) as any[];
    return due[0] || null;
  }, [wordCards, sentenceCards]);

  const ensureWordCard = useCallback((base: any): WordCard => {
    const id = `w_${base.word}`;
    const existing = wordCards[id];
    if (existing) return existing;
    const card: WordCard = {
      ...buildWordCard(base, 0),
      id,
      word: base.word,
      memoryState: 'new',
      intervalDays: 10 / (24 * 60),
      nextReviewAt: new Date(),
    };
    setWordCards({ ...wordCards, [id]: card });
    return card;
  }, [wordCards, setWordCards]);

  const ensureSentenceCard = useCallback((base: any): SentenceCard => {
    const id = `s_${base.sentence}`;
    const existing = sentenceCards[id];
    if (existing) return existing;
    const card: SentenceCard = {
      ...buildSentenceCard(base, 0),
      id,
      sentence: base.sentence,
      memoryState: 'new',
      intervalDays: 10 / (24 * 60),
      nextReviewAt: new Date(),
    };
    setSentenceCards({ ...sentenceCards, [id]: card });
    return card;
  }, [sentenceCards, setSentenceCards]);

  const loadRandomWord = useCallback(async () => {
    try {
      setIsLoading(true);
      if (petVocabulary.length === 0) throw new Error('No vocabulary available');

      const due = pickDue();
      if (due) {
        if ('word' in (due as any)) {
          setCurrentWord(due as any);
          setCurrentSentence(null);
        } else {
          setCurrentSentence(due as any);
          setCurrentWord(null);
        }
        setShowAnswer(false);
        setLearningMode('review');
        return;
      }

      // no due -> new word
      const randomIndex = Math.floor(Math.random() * petVocabulary.length);
      const base = petVocabulary[randomIndex];
      const card = ensureWordCard(base);
      setCurrentWord(card);
      setCurrentSentence(null);
      setShowAnswer(false);
      setLearningMode('review');
    } catch (error) {
      console.error('Error loading word:', error);
      setCurrentWord(buildWordCard({
        word: 'improve',
        partOfSpeech: 'verb',
        simpleDefinitionEn: 'to become better',
        meaningZh: '改进',
        exampleSentence: 'I want to improve my English speaking.',
        exampleSentenceZh: '我想改进我的英语口语。',
        topicTag: 'education',
        difficulty: 2,
      }, 0));
      setCurrentSentence(null);
      setShowAnswer(false);
      setLearningMode('review');
    } finally {
      setIsLoading(false);
    }
  }, [pickDue, ensureWordCard]);

  const loadRandomSentence = useCallback(async () => {
    try {
      setIsLoading(true);
      if (petSentences.length === 0) throw new Error('No sentences available');

      const due = pickDue();
      if (due) {
        if ('word' in (due as any)) {
          setCurrentWord(due as any);
          setCurrentSentence(null);
        } else {
          setCurrentSentence(due as any);
          setCurrentWord(null);
        }
        setShowAnswer(false);
        setLearningMode('review');
        return;
      }

      const randomIndex = Math.floor(Math.random() * petSentences.length);
      const base = petSentences[randomIndex];
      const card = ensureSentenceCard(base);
      setCurrentSentence(card);
      setCurrentWord(null);
      setShowAnswer(false);
      setLearningMode('review');
    } catch (error) {
      console.error('Error loading sentence:', error);
      setCurrentSentence(buildSentenceCard({
        sentence: 'Could you tell me where the nearest post office is?',
        sentenceZh: '你能告诉我最近的邮局在哪里吗？',
        chunkList: ['Could you tell me', 'where the nearest post office', 'is?'],
        keyPhrases: ['Could you tell me', 'nearest post office'],
        functionTag: 'asking for directions',
        topicTag: 'travel',
        difficulty: 2,
      }, 0));
      setCurrentWord(null);
      setShowAnswer(false);
      setLearningMode('review');
    } finally {
      setIsLoading(false);
    }
  }, [pickDue, ensureSentenceCard]);

  const enterFillInBlank = useCallback((difficulty: 1 | 2 | 3 | 4 = 2) => {
    setFillInDifficulty(difficulty);
    setLearningMode('fillInBlank');
    setShowAnswer(true);
  }, []);

  const exitFillInBlank = useCallback(() => {
    setLearningMode('review');
    setShowAnswer(false);
  }, []);

  const handleAnswer = useCallback((confidence: 'dont-know' | 'somewhat' | 'know') => {
    const item = currentWord || currentSentence;
    if (!item) return;

    let pointsEarned = confidence === 'dont-know' ? 2 : confidence === 'somewhat' ? 5 : 10;
    const streakBonus = Math.min(progress.streakDays * 0.1, 1.0);
    pointsEarned = Math.round(pointsEarned * (1 + streakBonus));
    const petMoodBonus = pet.mood / 100;
    pointsEarned = Math.round(pointsEarned * (1 + petMoodBonus * 0.5));

    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const isNewDay = progress.lastLearningDate !== today;
    setProgress({
      ...progress,
      totalPoints: progress.totalPoints + pointsEarned,
      todayPoints: isNewDay ? pointsEarned : progress.todayPoints + pointsEarned,
      streakDays: isNewDay ? progress.streakDays + 1 : progress.streakDays,
      totalWordsLearned: currentWord ? progress.totalWordsLearned + 1 : progress.totalWordsLearned,
      totalSentencesLearned: currentSentence ? progress.totalSentencesLearned + 1 : progress.totalSentencesLearned,
      lastLearningDate: today,
    });

    const newExperience = pet.experience + pointsEarned;
    setPet({
      ...pet,
      experience: newExperience,
      mood: Math.min(100, pet.mood + (confidence === 'know' ? 10 : 5)),
      hunger: Math.max(0, pet.hunger - 2),
    });

    const success = confidence !== 'dont-know';
    const responseTimeMs = 1200; // MVP: no timer yet

    // --- Word SRS ---
    if (currentWord) {
      const reviewResult = processReview(currentWord as any, success, responseTimeMs);
      const updated: WordCard = {
        ...(currentWord as any),
        memoryState: reviewResult.newMemoryState,
        intervalDays: reviewResult.newIntervalDays,
        nextReviewAt: reviewResult.nextReviewAt,
        lapseCount: (currentWord as any).lapseCount + (success ? 0 : 1),
        correctCount: (currentWord as any).correctCount + (success ? 1 : 0),
        wrongCount: (currentWord as any).wrongCount + (success ? 0 : 1),
        updatedAt: now,
      };
      setWordCards({ ...wordCards, [updated.id]: updated });

      const newLearnedItem: LearnedItem = {
        id: updated.id,
        type: 'word',
        learnedAt: now.toISOString(),
        confidence,
        nextReviewAt: new Date(updated.nextReviewAt).toISOString(),
      };
      setLearnedItems([...learnedItems, newLearnedItem]);
      setTodayLearned(prev => prev + 1);

      loadRandomWord();
      return;
    }

    // --- Sentence SRS ---
    if (currentSentence) {
      const reviewResult = processReview(currentSentence as any, success, responseTimeMs);
      const updated: SentenceCard = {
        ...(currentSentence as any),
        memoryState: reviewResult.newMemoryState,
        intervalDays: reviewResult.newIntervalDays,
        nextReviewAt: reviewResult.nextReviewAt,
        lapseCount: (currentSentence as any).lapseCount + (success ? 0 : 1),
        correctCount: (currentSentence as any).correctCount + (success ? 1 : 0),
        wrongCount: (currentSentence as any).wrongCount + (success ? 0 : 1),
        updatedAt: now,
      };
      setSentenceCards({ ...sentenceCards, [updated.id]: updated });

      const newLearnedItem: LearnedItem = {
        id: updated.id,
        type: 'sentence',
        learnedAt: now.toISOString(),
        confidence,
        nextReviewAt: new Date(updated.nextReviewAt).toISOString(),
      };
      setLearnedItems([...learnedItems, newLearnedItem]);
      setTodayLearned(prev => prev + 1);

      loadRandomSentence();
      return;
    }
  }, [
    currentWord,
    currentSentence,
    progress,
    pet,
    learnedItems,
    setProgress,
    setPet,
    setLearnedItems,
    loadRandomWord,
    loadRandomSentence,
    wordCards,
    sentenceCards,
    setWordCards,
    setSentenceCards,
  ]);

  const speakText = useCallback((text: string, language = 'en-US') => {
    if (!settings.soundEnabled || typeof window === 'undefined') return;
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      utterance.rate = settings.pronunciationSpeed;
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(voice => voice.lang.startsWith('en-') && (voice.name.includes('Female') || voice.name.includes('Samantha') || voice.name.includes('Zira')));
      if (englishVoice) utterance.voice = englishVoice;
      window.speechSynthesis.speak(utterance);
    }
  }, [settings.soundEnabled, settings.pronunciationSpeed]);

  useEffect(() => {
    loadRandomWord();
    const today = new Date().toISOString().split('T')[0];
    if (progress.lastLearningDate !== today) {
      setProgress({ ...progress, todayPoints: 0, lastLearningDate: today });
      setPet({ ...pet, hunger: Math.min(100, pet.hunger + 20), energy: Math.min(100, pet.energy + 30) });
    }
  }, []);

  return {
    currentWord,
    currentSentence,
    showAnswer,
    isLoading,
    todayLearned,
    progress,
    pet,
    settings,
    learningMode,
    fillInDifficulty,
    setShowAnswer,
    handleAnswer,
    loadRandomWord,
    loadRandomSentence,
    enterFillInBlank,
    exitFillInBlank,
    speakText,
    switchToWords: loadRandomWord,
    switchToSentences: loadRandomSentence,
    getDailyProgress: () => {
      const goal = settings.dailyGoal;
      const completed = todayLearned;
      return { completed, goal, percentage: Math.min(100, (completed / goal) * 100) };
    },
  };
}
