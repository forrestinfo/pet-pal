import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// 宠物类型定义
const PET_TYPES = [
  { id: 'melody', name: '美乐蒂', emoji: '🐰', description: '温柔可爱的兔子，喜欢学习英语' },
  { id: 'dog', name: '小狗狗', emoji: '🐶', description: '忠诚活泼，会陪伴你每天学习' },
  { id: 'cat', name: '猫咪', emoji: '🐱', description: '聪明优雅，喜欢听英语发音' },
  { id: 'bird', name: '小鸟', emoji: '🐦', description: '歌声美妙，会纠正你的发音' },
  { id: 'owl', name: '猫头鹰', emoji: '🦉', description: '智慧聪颖，帮助记忆难词' },
];

// 每日学习目标选项
const DAILY_GOALS = [
  { value: 10, label: '轻松开始 (10个词/天)' },
  { value: 20, label: '稳步进步 (20个词/天)' },
  { value: 30, label: '高效学习 (30个词/天)' },
  { value: 50, label: '挑战自我 (50个词/天)' },
];

type Account = {
  id: string;
  username: string;
  createdAt: string;
  lastUsedAt: string;
};

interface WelcomeProps {
  onComplete?: (profile: { username: string; dailyGoal: number; pronunciationSpeed: number; petType?: string }) => void;
  accounts?: Account[];
  activeAccountId?: string;
  onSwitchAccount?: (id: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onComplete, accounts = [], activeAccountId, onSwitchAccount }) => {
  const [username, setUsername] = useState('');
  const [selectedGoal, setSelectedGoal] = useState(10);
  const [selectedPet, setSelectedPet] = useState('melody');
  const [, setSettings] = useLocalStorage('pet-pal-settings', {});
  const [, setPet] = useLocalStorage('pet-pal-pet', {});
  const [, setProgress] = useLocalStorage('pet-pal-progress', {});
  const [, setLearnedItems] = useLocalStorage('pet-pal-learned-items', []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      alert('请输入用户名');
      return;
    }

    // 保存用户设置
    setSettings({
      username,
      dailyGoal: selectedGoal,
      pronunciationSpeed: 1.0,
      theme: 'melody',
      soundEnabled: true,
      musicEnabled: true,
    });

    // 保存宠物状态
    const selectedPetData = PET_TYPES.find(p => p.id === selectedPet);
    setPet({
      name: selectedPetData?.name || '美乐蒂',
      type: selectedPet,
      level: 1,
      experience: 0,
      mood: 80,
      hunger: 50,
      energy: 70,
      lastFed: '',
      lastPlayed: '',
    });

    // 初始化学习进度
    setProgress({
      totalPoints: 0,
      todayPoints: 0,
      streakDays: 0,
      totalWordsLearned: 0,
      totalSentencesLearned: 0,
      lastLearningDate: '',
    });

    // 清空已学项目
    setLearnedItems([]);

    // 标记已设置
    localStorage.setItem('pet-pal-initialized', 'true');

    // 通知父组件完成初始化
    if (onComplete) {
      onComplete({
        username,
        dailyGoal: selectedGoal,
        pronunciationSpeed: 1.0,
        petType: selectedPet,
      });
    }
  };

  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <h1 className="welcome-title">🎉 欢迎来到 PET Pal! 🎉</h1>
        <p className="welcome-subtitle">
          你的个性化 PET 英语学习伴侣
        </p>
      </div>

      {accounts.length > 0 && (
        <div className="form-section">
          <h2 className="section-title">👥 已有账户</h2>
          <div className="goal-grid">
            {accounts.map((account) => (
              <button
                key={account.id}
                type="button"
                className={`goal-card ${activeAccountId === account.id ? 'selected' : ''}`}
                onClick={() => onSwitchAccount?.(account.id)}
              >
                <div className="goal-info">
                  <div className="goal-value">{account.username}</div>
                  <div className="goal-label">{activeAccountId === account.id ? '当前账户' : '点击切换'}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="welcome-form">
        <div className="form-section">
          <h2 className="section-title">👤 你是谁？</h2>
          <div className="input-group">
            <label htmlFor="username" className="input-label">
              用户名
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="输入你的名字或昵称"
              className="input-field"
              required
            />
            <p className="input-hint">
              这个名字会显示在学习进度和宠物互动中
            </p>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">🎯 每日学习目标</h2>
          <p className="section-description">
            选择每天想要学习的单词数量，我们会根据你的进度调整
          </p>
          <div className="goal-grid">
            {DAILY_GOALS.map((goal) => (
              <button
                key={goal.value}
                type="button"
                className={`goal-card ${selectedGoal === goal.value ? 'selected' : ''}`}
                onClick={() => setSelectedGoal(goal.value)}
              >
                <div className="goal-emoji">
                  {goal.value === 10 && '🎈'}
                  {goal.value === 20 && '🚀'}
                  {goal.value === 30 && '🌟'}
                  {goal.value === 50 && '🏆'}
                </div>
                <div className="goal-info">
                  <div className="goal-value">{goal.value} 词/天</div>
                  <div className="goal-label">{goal.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">🐰 选择你的学习伴侣</h2>
          <p className="section-description">
            宠物会陪伴你的学习旅程，你的进步会让它成长！
          </p>
          <div className="pet-grid">
            {PET_TYPES.map((pet) => (
              <button
                key={pet.id}
                type="button"
                className={`pet-card ${selectedPet === pet.id ? 'selected' : ''}`}
                onClick={() => setSelectedPet(pet.id)}
              >
                <div className="pet-emoji">{pet.emoji}</div>
                <div className="pet-info">
                  <div className="pet-name">{pet.name}</div>
                  <div className="pet-description">{pet.description}</div>
                </div>
                {selectedPet === pet.id && (
                  <div className="pet-selected-indicator">✓</div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">🚀 准备好开始了吗？</h2>
          <p className="section-description">
            点击开始，开启你的 PET 英语学习之旅！
          </p>
          <div className="start-button-container">
            <button type="submit" className="start-button">
              🎯 开始学习旅程
            </button>
          </div>
          <p className="welcome-note">
            <small>
              提示：你可以随时在设置中修改目标、更换宠物
            </small>
          </p>
        </div>
      </form>

      <div className="welcome-footer">
        <p className="welcome-tip">
          💡 小贴士：每天坚持学习，你的宠物会越来越聪明可爱！
        </p>
        <p className="welcome-tip">
          📚 PET Pal 已接入最新爬取的 3000+ 词汇版本
        </p>
      </div>
    </div>
  );
};

export default Welcome;