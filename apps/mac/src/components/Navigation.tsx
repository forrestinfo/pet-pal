import React from 'react';

export type TabType = 'words' | 'sentences' | 'fillInBlank' | 'pet' | 'points' | 'settings';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'words' as TabType, label: '学习（单词）', icon: '📚' },
    { id: 'sentences' as TabType, label: '句型', icon: '📝' },
    { id: 'fillInBlank' as TabType, label: '填词', icon: '🧩' },
    { id: 'pet' as TabType, label: '宠物', icon: '🐰' },
    { id: 'points' as TabType, label: '积分', icon: '⭐' },
    { id: 'settings' as TabType, label: '设置', icon: '⚙️' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            aria-label={tab.label}
          >
            <span className="nav-icon" role="img" aria-label={tab.label}>
              {tab.icon}
            </span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;