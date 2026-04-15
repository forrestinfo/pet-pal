import { useState, useEffect } from 'react';
import { useLearning } from './hooks/useLearning';
import { applyMelodyTheme } from './themes/melodyTheme';
import Navigation from './components/Navigation';
import type { TabType } from './components/Navigation';
import Welcome from './components/Welcome';
import WordCard from './components/WordCard';
import SentenceCard from './components/SentenceCard';
import FillInTheBlank from './components/FillInTheBlank';
import { PetPanelComponent } from './components/PetPanel';
import { PointsPanelComponent } from './components/PointsPanel';
import { SettingsComponent } from './components/Settings';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('words');
  const [isSetup, setIsSetup] = useState(() => !!localStorage.getItem('pet-pal-settings'));

  useEffect(() => {
    applyMelodyTheme();
  }, []);

  const learning = useLearning();

  const handleWelcomeComplete = () => setIsSetup(true);

  const handleSettingsSave = (newSettings: { username: string; dailyGoal: number; pronunciationSpeed: number }) => {
    const current = JSON.parse(localStorage.getItem('pet-pal-settings') || '{}');
    localStorage.setItem('pet-pal-settings', JSON.stringify({ ...current, ...newSettings }));
  };

  const handleSwitchUser = () => {
    if (window.confirm('确定要切换用户吗？当前账号会被保留，你可以重新进入另一个用户。')) {
      localStorage.removeItem('pet-pal-settings');
      localStorage.removeItem('pet-pal-initialized');
      setIsSetup(false);
    }
  };

  const handleLogout = () => {
    if (window.confirm('确定要退出当前用户吗？退出后会回到欢迎页。')) {
      localStorage.removeItem('pet-pal-settings');
      localStorage.removeItem('pet-pal-initialized');
      setIsSetup(false);
    }
  };

  const handleResetData = () => {
    if (window.confirm('确定要重置所有学习数据吗？此操作不可撤销。')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  if (!isSetup) return <Welcome onComplete={handleWelcomeComplete} />;

  const { currentWord, currentSentence, showAnswer, todayLearned, progress, pet, settings, speakText, fillInDifficulty } = learning;
  const dailyProgress = learning.getDailyProgress();
  const totalPoints = progress.totalPoints || 0;
  const todayPoints = progress.todayPoints || 0;
  const streak = progress.streakDays || 0;
  const pointsHistory = JSON.parse(localStorage.getItem('pet-pal-points-history') || '[]');

  return (
    <div className="app-container melody-theme">
      <header className="app-header">
        <div className="header-left">
          <h1 className="app-title">🐰 PET Pal</h1>
          <span className="greeting">Hi, {settings.username || 'Learner'}!</span>
        </div>
        <div className="header-right">
          <div className="daily-progress">
            <span className="progress-text">今日 {dailyProgress.completed}/{dailyProgress.goal} 词</span>
            <div className="progress-bar"><div className="progress-fill" style={{ width: `${dailyProgress.percentage}%` }} /></div>
          </div>
          <div className="points-badge">⭐ {totalPoints}</div>
        </div>
      </header>

      <main className="app-main">
        {activeTab === 'words' && (
          <div className="tab-content">
            <div className="learning-header">
              <h2>📚 单词学习</h2>
              <span className="word-count">今日已学 {todayLearned} 个单词</span>
            </div>
            {currentWord ? (
              <WordCard
                word={currentWord}
                showAnswer={showAnswer}
                onShowAnswer={() => learning.setShowAnswer(true)}
                onAnswer={(result: 'dont-know' | 'somewhat' | 'know') => learning.handleAnswer(result)}
                onSpeak={(text: string, lang?: string) => speakText(text, lang)}
                onFillInBlank={() => setActiveTab('fillInBlank')}
              />
            ) : <div className="empty-state"><p>🎯 加载中...</p></div>}
            <div className="card-nav">
              <button className="nav-btn next-btn" onClick={() => learning.loadRandomWord()}>→ 下一个单词</button>
            </div>
          </div>
        )}

        {activeTab === 'sentences' && (
          <div className="tab-content">
            <div className="learning-header">
              <h2>📝 句型学习</h2>
              <span className="word-count">今日已学 {todayLearned} 个句型</span>
            </div>
            {currentSentence ? (
              <SentenceCard
                sentence={currentSentence}
                showAnswer={showAnswer}
                onShowAnswer={() => learning.setShowAnswer(true)}
                onAnswer={(result: 'dont-know' | 'somewhat' | 'know') => learning.handleAnswer(result)}
                onSpeak={(text: string, lang?: string) => speakText(text, lang)}
              />
            ) : <div className="empty-state"><p>🎯 加载中...</p></div>}
            <div className="card-nav">
              <button className="nav-btn next-btn" onClick={() => learning.loadRandomSentence()}>→ 下一个句型</button>
            </div>
          </div>
        )}

        {activeTab === 'fillInBlank' && currentWord && (
          <div className="tab-content">
            <FillInTheBlank
              word={currentWord.word}
              definition={currentWord.simpleDefinitionEn}
              meaningZh={currentWord.meaningZh}
              exampleSentence={currentWord.exampleSentence}
              exampleSentenceZh={currentWord.exampleSentenceZh}
              difficulty={fillInDifficulty}
              onAnswer={(correct: boolean) => learning.handleAnswer(correct ? 'know' : 'dont-know')}
              onNext={() => learning.loadRandomWord()}
            />
          </div>
        )}

        {activeTab === 'pet' && (
          <div className="tab-content">
            <PetPanelComponent
              petState={{
                name: pet.name || '美乐蒂',
                level: pet.level || 1,
                experience: pet.experience || 0,
                experienceToNextLevel: (pet.level || 1) * 100 - (pet.experience || 0),
                mood: pet.mood || 80,
                hunger: pet.hunger || 30,
                moodIcon: '🐰',
              } as any}
              points={totalPoints}
            />
            <div className="pet-actions">
              <p className="pet-note">宠物成长只由学习量和学习效果驱动，不依赖喂养。</p>
            </div>
          </div>
        )}

        {activeTab === 'points' && (
          <div className="tab-content">
            <PointsPanelComponent totalPoints={totalPoints} todayPoints={todayPoints} streak={streak} history={pointsHistory} />
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
              onSwitchUser={handleSwitchUser}
              onLogout={handleLogout}
            />
          </div>
        )}
      </main>

      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
