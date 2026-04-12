import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage, useLearningProgress, usePetState, useLearnedItems } from './useLocalStorage';
import type { LearnedItem } from './useLocalStorage';
// Import types from shared-types package
// In a proper workspace setup, this would be: import type { WordCard, SentenceCard } from 'shared-types';
// For now, define the minimal types we need
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

// Import actual content from the content package
import { petVocabulary, petSentences } from '../../../../packages/content/dist';

/**
 * Custom hook for managing learning state
 */
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

  // Load a random word
  const loadRandomWord = useCallback(async () => {
    try {
      setIsLoading(true);
      
      // Get random word from vocabulary
      if (petVocabulary.length === 0) {
        throw new Error('No vocabulary available');
      }
      
      const randomIndex = Math.floor(Math.random() * petVocabulary.length);
      const wordData = petVocabulary[randomIndex];
      
      // Convert to WordCard with id
      const wordCard: WordCard = {
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
      };
      
      setCurrentWord(wordCard);
      setCurrentSentence(null);
      setShowAnswer(false);
    } catch (error) {
      console.error('Error loading word:', error);
      
      // Fallback to mock data
      const mockWord: WordCard = {
        id: `word_${Date.now()}`,
        word: 'improve',
        partOfSpeech: 'verb',
        simpleDefinitionEn: 'to become better',
        meaningZh: '改进',
        exampleSentence: 'I want to improve my English speaking.',
        exampleSentenceZh: '我想改进我的英语口语。',
        topicTag: 'education',
        difficulty: 2,
        memoryState: 'new',
        intervalDays: 1,
        nextReviewAt: new Date(),
        lapseCount: 0,
        correctCount: 0,
        wrongCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      setCurrentWord(mockWord);
      setCurrentSentence(null);
      setShowAnswer(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load a random sentence
  const loadRandomSentence = useCallback(async () => {
    try {
      setIsLoading(true);
      
      // Get random sentence from sentences
      if (petSentences.length === 0) {
        throw new Error('No sentences available');
      }
      
      const randomIndex = Math.floor(Math.random() * petSentences.length);
      const sentenceData = petSentences[randomIndex];
      
      // Convert to SentenceCard with id
      const sentenceCard: SentenceCard = {
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
      };
      
      setCurrentSentence(sentenceCard);
      setCurrentWord(null);
      setShowAnswer(false);
    } catch (error) {
      console.error('Error loading sentence:', error);
      
      // Fallback to mock data
      const mockSentence: SentenceCard = {
        id: `sentence_${Date.now()}`,
        sentence: 'Could you tell me where the nearest post office is?',
        sentenceZh: '你能告诉我最近的邮局在哪里吗？',
        chunkList: ['Could you tell me', 'where the nearest post office', 'is?'],
        keyPhrases: ['Could you tell me', 'nearest post office'],
        functionTag: 'asking for directions',
        topicTag: 'travel',
        difficulty: 2,
        memoryState: 'new',
        intervalDays: 1,
        nextReviewAt: new Date(),
        lapseCount: 0,
        correctCount: 0,
        wrongCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      setCurrentSentence(mockSentence);
      setCurrentWord(null);
      setShowAnswer(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle answer submission
  const handleAnswer = useCallback((confidence: 'dont-know' | 'somewhat' | 'know') => {
    if (!currentWord && !currentSentence) return;

    const itemId = currentWord?.id || currentSentence?.id;
    const itemType = currentWord ? 'word' : 'sentence';
    
    // Calculate points based on confidence
    let pointsEarned = 0;
    switch (confidence) {
      case 'dont-know':
        pointsEarned = 2; // Encouragement points
        break;
      case 'somewhat':
        pointsEarned = 5;
        break;
      case 'know':
        pointsEarned = 10;
        break;
    }

    // Apply streak bonus
    const streakBonus = Math.min(progress.streakDays * 0.1, 1.0); // Max 100% bonus
    pointsEarned = Math.round(pointsEarned * (1 + streakBonus));

    // Apply pet mood bonus
    const petMoodBonus = pet.mood / 100; // 0-1 based on mood
    pointsEarned = Math.round(pointsEarned * (1 + petMoodBonus * 0.5)); // Max 50% bonus

    // Update progress
    const today = new Date().toISOString().split('T')[0];
    const isNewDay = progress.lastLearningDate !== today;
    
    const newProgress = {
      ...progress,
      totalPoints: progress.totalPoints + pointsEarned,
      todayPoints: isNewDay ? pointsEarned : progress.todayPoints + pointsEarned,
      streakDays: isNewDay ? progress.streakDays + 1 : progress.streakDays,
      totalWordsLearned: itemType === 'word' ? progress.totalWordsLearned + 1 : progress.totalWordsLearned,
      totalSentencesLearned: itemType === 'sentence' ? progress.totalSentencesLearned + 1 : progress.totalSentencesLearned,
      lastLearningDate: today,
    };

    setProgress(newProgress);

    // Update pet state
    const experienceGained = pointsEarned;
    const newExperience = pet.experience + experienceGained;
    const levelUpExperience = pet.level * 100; // 100 exp per level
    
    let newPetState = { ...pet };
    if (newExperience >= levelUpExperience) {
      newPetState = {
        ...pet,
        level: pet.level + 1,
        experience: newExperience - levelUpExperience,
        mood: Math.min(100, pet.mood + 20), // Happy when leveling up
      };
    } else {
      newPetState = {
        ...pet,
        experience: newExperience,
        mood: Math.min(100, pet.mood + 5), // Slightly happier
        hunger: Math.max(0, pet.hunger - 2), // Gets a bit hungry
      };
    }

    setPet(newPetState);

    // Record learned item
    const newLearnedItem: LearnedItem = {
      id: itemId!,
      type: itemType,
      learnedAt: new Date().toISOString(),
      confidence,
      nextReviewAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Review in 24 hours
    };

    setLearnedItems([...learnedItems, newLearnedItem]);
    setTodayLearned(prev => prev + 1);

    // Load next item
    if (currentWord) {
      loadRandomWord();
    } else if (currentSentence) {
      loadRandomSentence();
    }
  }, [currentWord, currentSentence, progress, pet, learnedItems, setProgress, setPet, setLearnedItems, loadRandomWord, loadRandomSentence]);

  // Speak text using Web Speech API
  const speakText = useCallback((text: string, language = 'en-US') => {
    if (!settings.soundEnabled || typeof window === 'undefined') return;

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      utterance.rate = settings.pronunciationSpeed;
      
      // Try to find a good voice
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(voice => 
        voice.lang.startsWith('en-') && 
        (voice.name.includes('Female') || voice.name.includes('Samantha') || voice.name.includes('Zira'))
      );
      
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    }
  }, [settings.soundEnabled, settings.pronunciationSpeed]);

  // Initialize
  useEffect(() => {
    loadRandomWord();
    
    // Check if it's a new day
    const today = new Date().toISOString().split('T')[0];
    if (progress.lastLearningDate !== today) {
      // Reset today's points for new day
      setProgress({
        ...progress,
        todayPoints: 0,
        lastLearningDate: today,
      });
      
      // Update pet hunger
      setPet({
        ...pet,
        hunger: Math.min(100, pet.hunger + 20), // Gets hungrier overnight
        energy: Math.min(100, pet.energy + 30), // Gains energy from rest
      });
    }
  }, []);

  return {
    // State
    currentWord,
    currentSentence,
    showAnswer,
    isLoading,
    todayLearned,
    progress,
    pet,
    settings,
    
    // Actions
    setShowAnswer,
    handleAnswer,
    loadRandomWord,
    loadRandomSentence,
    speakText,
    
    // Navigation
    switchToWords: loadRandomWord,
    switchToSentences: loadRandomSentence,
    
    // Stats
    getDailyProgress: () => {
      const goal = settings.dailyGoal;
      const completed = todayLearned;
      return {
        completed,
        goal,
        percentage: Math.min(100, (completed / goal) * 100),
      };
    },
    
    // Pet interactions
    feedPet: () => {
      setPet({
        ...pet,
        hunger: Math.max(0, pet.hunger - 30),
        mood: Math.min(100, pet.mood + 10),
        lastFed: new Date().toISOString(),
      });
    },
    
    playWithPet: () => {
      setPet({
        ...pet,
        mood: Math.min(100, pet.mood + 15),
        energy: Math.max(0, pet.energy - 10),
        lastPlayed: new Date().toISOString(),
      });
    },
  };
}

// Types are imported from shared-types