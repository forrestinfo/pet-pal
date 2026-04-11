import { useState, useEffect } from 'react';

/**
 * Custom hook for localStorage with React state synchronization
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Get from localStorage or use initial value
  const readValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T) => {
    if (typeof window === 'undefined') {
      console.warn(`Tried setting localStorage key "${key}" even though environment is not a client`);
    }

    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Save state
      setStoredValue(valueToStore);
      
      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Listen for changes to this localStorage key made from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        try {
          const newValue = JSON.parse(event.newValue);
          if (newValue !== storedValue) {
            setStoredValue(newValue);
          }
        } catch (error) {
          console.warn(`Error parsing localStorage key "${key}" from storage event:`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, storedValue]);

  return [storedValue, setValue];
}

/**
 * Hook for storing user settings
 */
export interface UserSettings {
  username: string;
  dailyGoal: number;
  pronunciationSpeed: number;
  theme: 'melody' | 'light' | 'dark';
  soundEnabled: boolean;
  musicEnabled: boolean;
}

export const defaultUserSettings: UserSettings = {
  username: 'PET Learner',
  dailyGoal: 10,
  pronunciationSpeed: 1.0,
  theme: 'melody',
  soundEnabled: true,
  musicEnabled: true,
};

export function useUserSettings() {
  return useLocalStorage<UserSettings>('pet-pal-settings', defaultUserSettings);
}

/**
 * Hook for storing learning progress
 */
export interface LearningProgress {
  totalPoints: number;
  todayPoints: number;
  streakDays: number;
  totalWordsLearned: number;
  totalSentencesLearned: number;
  lastLearningDate: string;
}

export const defaultLearningProgress: LearningProgress = {
  totalPoints: 0,
  todayPoints: 0,
  streakDays: 0,
  totalWordsLearned: 0,
  totalSentencesLearned: 0,
  lastLearningDate: '',
};

export function useLearningProgress() {
  return useLocalStorage<LearningProgress>('pet-pal-progress', defaultLearningProgress);
}

/**
 * Hook for storing pet state
 */
export interface PetState {
  name: string;
  type: 'melody' | 'dog' | 'cat' | 'bird' | 'owl' | 'rabbit';
  level: number;
  experience: number;
  mood: number; // 0-100
  hunger: number; // 0-100
  energy: number; // 0-100
  lastFed: string;
  lastPlayed: string;
}

export const defaultPetState: PetState = {
  name: 'Melody',
  type: 'melody',
  level: 1,
  experience: 0,
  mood: 80,
  hunger: 50,
  energy: 70,
  lastFed: '',
  lastPlayed: '',
};

export function usePetState() {
  return useLocalStorage<PetState>('pet-pal-pet', defaultPetState);
}

/**
 * Hook for storing learned items
 */
export interface LearnedItem {
  id: string;
  type: 'word' | 'sentence';
  learnedAt: string;
  confidence: 'dont-know' | 'somewhat' | 'know';
  nextReviewAt: string;
}

export function useLearnedItems() {
  return useLocalStorage<LearnedItem[]>('pet-pal-learned-items', []);
}