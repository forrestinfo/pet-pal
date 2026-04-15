import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage, useLearningProgress, usePetState, useLearnedItems } from './useLocalStorage';
import type { LearnedItem } from './useLocalStorage';

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
  memoryState: string;
  intervalDays: number;
  nextReviewAt: Date;
  lapseCount: number;
  correctCount: number;
  wrongCount: number;
  createdAt: Date;
  updatedAt: Date;
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
  memoryState: string;
  intervalDays: number;
  nextReviewAt: Date;
  lapseCount: number;
  correctCount: number;
  wrongCount: number;
  createdAt: Date;
  updatedAt: Date;
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
    intervalDays: 1,
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
    intervalDays: 1,
    nextReviewAt: new Date(),
    lapseCount: 0,
    correctCount: 0,
    wrongCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const loadRandomWord = useCallback(async () => {
    try {
      setIsLoading(true);
      if (petVocabulary.length === 0) throw new Error('No vocabulary available');
      const randomIndex = Math.floor(Math.random() * petVocabulary.length);
      setCurrentWord(buildWordCard(petVocabulary[randomIndex], randomIndex));
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
  }, []);

  const loadRandomSentence = useCallback(async () => {
    try {
      setIsLoading(true);
      if (petSentences.length === 0) throw new Error('No sentences available');
      const randomIndex = Math.floor(Math.random() * petSentences.length);
      setCurrentSentence(buildSentenceCard(petSentences[randomIndex], randomIndex));
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
  }, []);

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

    const today = new Date().toISOString().split('T')[0];
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

    const newLearnedItem: LearnedItem = {
      id: item.id,
      type: currentWord ? 'word' : 'sentence',
      learnedAt: new Date().toISOString(),
      confidence,
      nextReviewAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    };
    setLearnedItems([...learnedItems, newLearnedItem]);
    setTodayLearned(prev => prev + 1);

    if (currentWord) loadRandomWord();
    if (currentSentence) loadRandomSentence();
  }, [currentWord, currentSentence, progress, pet, learnedItems, setProgress, setPet, setLearnedItems, loadRandomWord, loadRandomSentence]);

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
