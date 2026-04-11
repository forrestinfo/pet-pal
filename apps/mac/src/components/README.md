# PET Pal Components

A collection of React components for the PET Pal learning application.

## Installation

These components are part of the PET Pal monorepo and can be imported directly.

## Components

### WordCard
A card component for vocabulary learning with spaced repetition.

**Props:**
- `word`: Word object with properties (word, partOfSpeech, simpleDefinitionEn, meaningZh, exampleSentence, exampleSentenceZh, topicTag, difficulty)
- `showAnswer`: boolean - whether to show the answer side
- `onShowAnswer`: () => void - callback to show answer
- `onAnswer`: (result: 'dont-know' | 'somewhat' | 'know') => void - answer callback
- `onSpeak`: (text: string, lang?: string) => void - speech callback

**Usage:**
```tsx
import { WordCard } from './components';

<WordCard
  word={currentWord}
  showAnswer={showAnswer}
  onShowAnswer={() => setShowAnswer(true)}
  onAnswer={handleAnswer}
  onSpeak={speakText}
/>
```

### SentenceCard
A card component for sentence pattern learning.

**Props:**
- `sentence`: Sentence object with properties (sentence, sentenceZh, chunkList, keyPhrases, functionTag, topicTag, difficulty)
- `showAnswer`: boolean
- `onShowAnswer`: () => void
- `onAnswer`: (result: 'dont-know' | 'somewhat' | 'know') => void
- `onSpeak`: (text: string, lang?: string) => void

**Usage:**
```tsx
import { SentenceCard } from './components';

<SentenceCard
  sentence={currentSentence}
  showAnswer={showAnswer}
  onShowAnswer={() => setShowAnswer(true)}
  onAnswer={handleAnswer}
  onSpeak={speakText}
/>
```

### PetPanel
Displays the virtual pet's status and statistics.

**Props:**
- `petState`: { name, level, experience, experienceToNextLevel, mood, hunger, moodIcon? }
- `points`: number - total points earned

**Usage:**
```tsx
import { PetPanel } from './components';

<PetPanel
  petState={pet}
  points={progress.totalPoints}
/>
```

### PointsPanel
Displays points, streak, and learning progress.

**Props:**
- `totalPoints`: number
- `todayPoints`: number
- `streak`: number - consecutive learning days
- `history`: Array<{ date: string, points: number, activity: string }>
- `nextLevelPoints?`: number - points needed for next level

**Usage:**
```tsx
import { PointsPanel } from './components';

<PointsPanel
  totalPoints={progress.totalPoints}
  todayPoints={progress.todayPoints}
  streak={progress.streakDays}
  history={recentHistory}
/>
```

### Settings
User settings panel with configuration options.

**Props:**
- `username`: string
- `dailyGoal`: number (10, 20, 30, or 50)
- `pronunciationSpeed`: number (0.5-2.0)
- `onSave`: (settings) => void
- `onResetData?`: () => void

**Usage:**
```tsx
import { Settings } from './components';

<Settings
  username={settings.username}
  dailyGoal={settings.dailyGoal}
  pronunciationSpeed={settings.pronunciationSpeed}
  onSave={handleSaveSettings}
  onResetData={handleResetData}
/>
```

## Styling

All components use the Melody theme from `../themes/melodyTheme.ts`. They accept inline styles via the `style` prop for customization.

## Integration with Hooks

These components are designed to work with the custom hooks in `../hooks/`:

- `useLearning` - manages learning state and provides callbacks
- `useLocalStorage` - manages user data persistence
- `useUserSettings`, `useLearningProgress`, `usePetState`, `useLearnedItems` - specific state hooks

## Example Integration

```tsx
import { useLearning } from '../hooks/useLearning';
import { WordCard, PetPanel, PointsPanel } from './components';

function LearningScreen() {
  const {
    currentWord,
    showAnswer,
    progress,
    pet,
    setShowAnswer,
    handleAnswer,
    speakText,
  } = useLearning();

  if (!currentWord) return <div>Loading...</div>;

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: 2 }}>
        <WordCard
          word={currentWord}
          showAnswer={showAnswer}
          onShowAnswer={() => setShowAnswer(true)}
          onAnswer={handleAnswer}
          onSpeak={speakText}
        />
      </div>
      <div style={{ flex: 1 }}>
        <PetPanel petState={pet} points={progress.totalPoints} />
        <PointsPanel
          totalPoints={progress.totalPoints}
          todayPoints={progress.todayPoints}
          streak={progress.streakDays}
          history={[]}
        />
      </div>
    </div>
  );
}
```

## Development

Components are written in TypeScript and follow React best practices. Each component is self-contained with its own interface definitions.