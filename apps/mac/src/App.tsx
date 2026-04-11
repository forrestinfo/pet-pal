import { useState, useEffect } from 'react';
import { useLearning } from './hooks/useLearning';
import { applyMelodyTheme } from './themes/melodyTheme';
import Navigation, { TabType } from './components/Navigation';
import Welcome from './components/Welcome';
import WordCard from './components/WordCard';
import SentenceCard from './components/SentenceCard';
import { PetPanelComponent } from './components/PetPanel';
import { PointsPanelComponent } from './components/PointsPanel';
import { SettingsComponent } from './components/Settings';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('words');
  const [isSetup, setIsSetup] = useState(() => {
    return !!localStorage.getItem('pet-pal-settings');
  });

  useEffect(() => {
    applyMelodyTheme();
  }, []);

  const learning = useLearning();

  const handleWelcomeComplete = () => {
    setIsSetup(true);
  };

  const handleSettingsSave = (newSettings: {
    username: string;
    dailyGoal: number;
    pronunciationSpeed: number;
  }) => {
    const current = JSON.parse(localStorage.getItem('pet-pal-settings') || '{}');
    localStorage.setItem('pet-pal-settings', JSON.stringify({ ...current, ...newSettings }));
  };

  const handleResetData = () => {
    if (window.confirm('确定要重置所有学习数据吗？此操作不可撤销。')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  // Show Welcome screen on first launch
  if (!isSetup) {
    return <Welcome onComplete={handleWelcomeComplete} />;
  }

  const { currentWord, currentSentence, showAnswer, todayLearned, progress, pet, settings, speakText } = learning;

  const dailyProgress = learning.getDailyProgress();

  // Calculate points from progress
  const totalPoints = progress?.totalPoints || 0;
  const todayPoints = progress?.todayPoints || 0;
  const streak = progress?.streak || 0;

  // Points history from localStorage
  const pointsHistory = JSON.parse(localStorage.getItem('pet-pal-points-history') || '[]');

  return (
    <div className="app-container melody-theme">
      {/* Header */}
      <header className="app-header">
        <div className="header-left">
          <h1 className="app-title">🐰 PET Pal</h1>
          <span className="greeting">Hi, {settings.username || 'Learner'}!</span>
        </div>
        <div className="header-right">
          <div className="daily-progress">
            <span className="progress-text">
              今日 {dailyProgress.completed}/{dailyProgress.goal} 词
            </span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${dailyProgress.percentage}%` }}
              />
            </div>
          </div>
          <div className="points-badge">⭐ {totalPoints}</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {activeTab === 'words' && (
          <div className="tab-content">
            <div className="learning-header">
              <h2>📚 单词学习</h2>
              <span className="word-count">
                今日已学 {todayLearned} 个单词
              </span>
            </div>
            {currentWord ? (
              <WordCard
                word={currentWord}
                showAnswer={showAnswer}
                onShowAnswer={() => learning.setShowAnswer(true)}
                onAnswer={(result) => learning.handleAnswer(result)}
                onSpeak={(text, lang) => speakText(text, lang)}
              />
            ) : (
              <div className="empty-state">
                <p>🎯 加载中...</p>
              </div>
            )}
            <div className="card-nav">
              <button className="nav-btn next-btn" onClick={() => learning.loadRandomWord()}>
                → 下一个单词
              </button>
            </div>
          </div>
        )}

        {activeTab === 'sentences' && (
          <div className="tab-content">
            <div className="learning-header">
              <h2>📝 句型学习</h2>
              <span className="word-count">
                今日已学 {todayLearned} 个句型
              </span>
            </div>
            {currentSentence ? (
              <SentenceCard
                sentence={currentSentence}
                showAnswer={showAnswer}
                onShowAnswer={() => learning.setShowAnswer(true)}
                onAnswer={(result) => learning.handleAnswer(result)}
                onSpeak={(text, lang) => speakText(text, lang)}
              />
            ) : (
              <div className="empty-state">
                <p>🎯 加载中...</p>
              </div>
            )}
            <div className="card-nav">
              <button className="nav-btn next-btn" onClick={() => learning.loadRandomSentence()}>
                → 下一个句型
              </button>
            </div>
          </div>
        )}

        {activeTab === 'pet' && (
          <div className="tab-content">
            <PetPanelComponent
              petState={{
                name: pet.name || '美乐蒂',
                level: pet.level || 1,
                experience: pet.experience || 0,
                experienceToNextLevel: pet.experienceToNextLevel || 100,
                mood: pet.mood || 80,
                hunger: pet.hunger || 30,
                moodIcon: '🐰',
              }}
              points={totalPoints}
            />
            <div className="pet-actions">
              <button className="action-btn feed-btn" onClick={() => learning.feedPet()}>
                🍎 喂食
              </button>
              <button className="action-btn play-btn" onClick={() => learning.playWithPet()}>
                🎮 玩耍
              </button>
            </div>
          </div>
        )}

        {activeTab === 'points' && (
          <div className="tab-content">
            <PointsPanelComponent
              totalPoints={totalPoints}
              todayPoints={todayPoints}
              streak={streak}
              history={pointsHistory}
            />
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="tab-content">
            <SettingsComponent
              username={settings.username || 'Learner'}
              dailyGoal={settings.dailyGoal || 20}
              pronunciationSpeed={settings.pronunciationSpeed || 1.0}
              onSave={handleSettingsSave}
              onResetData={handleResetData}
            />
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
