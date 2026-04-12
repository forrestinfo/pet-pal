import React from 'react';
import { melodyColors, melodyShadows, melodyBorderRadius, melodySpacing, melodyIcons } from '../themes/melodyTheme';

export interface PointsHistory {
  date: string;
  points: number;
  activity: string; // e.g., "Word Review", "Sentence Mastery", "Daily Streak"
}

export interface PointsPanelProps {
  totalPoints: number;
  todayPoints: number;
  streak: number;
  history: PointsHistory[];
  nextLevelPoints?: number; // Points needed for next level (unused)
}

const getLevelFromPoints = (points: number): { level: number; nextLevelAt: number } => {
  // Simple level progression: each level requires 100 points more than previous
  let level = 1;
  let required = 100;
  
  while (points >= required) {
    level++;
    required += 100 * level;
  }
  
  return {
    level,
    nextLevelAt: required,
  };
};

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const styles: any = {
  panel: {
    backgroundColor: melodyColors.surface,
    borderRadius: melodyBorderRadius.xl,
    boxShadow: melodyShadows.md,
    padding: melodySpacing.lg,
    border: `2px solid ${melodyColors.primaryLight}`,
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: melodySpacing.md,
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: melodyColors.textPrimary,
    margin: 0,
  },
  mainStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: melodySpacing.md,
    marginBottom: melodySpacing.xl,
  },
  statCard: {
    backgroundColor: melodyColors.background,
    borderRadius: melodyBorderRadius.lg,
    padding: melodySpacing.md,
    textAlign: 'center' as const,
    border: `1px solid ${melodyColors.primaryLight}`,
  },
  statIcon: {
    fontSize: '1.8rem',
    marginBottom: melodySpacing.xs,
  },
  statValue: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: melodyColors.textPrimary,
    margin: `${melodySpacing.xs} 0`,
  },
  statLabel: {
    fontSize: '0.8rem',
    color: melodyColors.textSecondary,
    fontWeight: 600,
    textTransform: 'uppercase' as const,
  },
  levelSection: {
    backgroundColor: melodyColors.background,
    borderRadius: melodyBorderRadius.lg,
    padding: melodySpacing.md,
    marginBottom: melodySpacing.lg,
    border: `1px solid ${melodyColors.secondaryLight}`,
  },
  levelHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: melodySpacing.sm,
  },
  levelTitle: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: melodyColors.textSecondary,
    display: 'flex',
    alignItems: 'center',
    gap: melodySpacing.xs,
  },
  levelText: {
    fontSize: '0.9rem',
    fontWeight: 700,
    color: melodyColors.textPrimary,
  },
  progressBar: {
    height: 10,
    borderRadius: melodyBorderRadius.full,
    backgroundColor: melodyColors.backgroundDark,
    overflow: 'hidden',
    margin: `${melodySpacing.sm} 0`,
  },
  progressFill: {
    height: '100%',
    borderRadius: 'inherit',
    background: `linear-gradient(90deg, ${melodyColors.primary}, ${melodyColors.accent})`,
    transition: 'width 0.5s ease',
  },
  progressLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.8rem',
    color: melodyColors.textSecondary,
  },
  historySection: {
    marginTop: melodySpacing.lg,
  },
  historyTitle: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: melodyColors.textSecondary,
    marginBottom: melodySpacing.sm,
    display: 'flex',
    alignItems: 'center',
    gap: melodySpacing.xs,
  },
  historyList: {
    maxHeight: 200,
    overflowY: 'auto',
    border: `1px solid ${melodyColors.backgroundDark}`,
    borderRadius: melodyBorderRadius.md,
    padding: melodySpacing.sm,
  },
  historyItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: melodySpacing.xs,
    borderBottom: `1px solid ${melodyColors.backgroundDark}`,
    ':last-child': {
      borderBottom: 'none',
    },
  },
  historyDate: {
    fontSize: '0.8rem',
    color: melodyColors.textSecondary,
    minWidth: 70,
  },
  historyActivity: {
    fontSize: '0.8rem',
    color: melodyColors.textPrimary,
    flex: 1,
    margin: `0 ${melodySpacing.sm}`,
    textAlign: 'left' as const,
  },
  historyPoints: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: melodyColors.primary,
  },
  emptyHistory: {
    fontSize: '0.8rem',
    color: melodyColors.textSecondary,
    textAlign: 'center' as const,
    padding: melodySpacing.md,
  },
  streakBonus: {
    display: 'inline-block',
    backgroundColor: '#FF6B6B',
    color: '#fff',
    fontSize: '0.7rem',
    fontWeight: 600,
    padding: '2px 6px',
    borderRadius: melodyBorderRadius.sm,
    marginLeft: melodySpacing.xs,
  },
};

export const PointsPanelComponent: React.FC<PointsPanelProps> = ({
  totalPoints,
  todayPoints,
  streak,
  history,
  nextLevelPoints,
}) => {
  void nextLevelPoints;
  const { level, nextLevelAt } = getLevelFromPoints(totalPoints);
  const progressPercent = Math.min(100, (totalPoints / Math.max(nextLevelAt, 1)) * 100);
  
  const pointsToNext = Math.max(0, nextLevelAt - totalPoints);
  
  const getStreakBonus = () => {
    if (streak >= 7) return '🔥 +50% bonus!';
    if (streak >= 3) return '🔥 +20% bonus';
    return '';
  };

  return (
    <div style={styles.panel}>
      <div style={styles.header}>
        <h3 style={styles.title}>Points & Progress</h3>
      </div>

      {/* Main Stats */}
      <div style={styles.mainStats}>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>{melodyIcons.points}</div>
          <div style={styles.statValue}>{totalPoints}</div>
          <div style={styles.statLabel}>Total Points</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>📅</div>
          <div style={styles.statValue}>{todayPoints}</div>
          <div style={styles.statLabel}>Today's Points</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>{melodyIcons.streak}</div>
          <div style={styles.statValue}>
            {streak}
            {getStreakBonus() && <span style={styles.streakBonus}>{getStreakBonus()}</span>}
          </div>
          <div style={styles.statLabel}>Streak Days</div>
        </div>
      </div>

      {/* Level Progress */}
      <div style={styles.levelSection}>
        <div style={styles.levelHeader}>
          <div style={styles.levelTitle}>
            <span>🏆</span> Learner Level
          </div>
          <div style={styles.levelText}>Level {level}</div>
        </div>
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressFill,
              width: `${progressPercent}%`,
            }}
          />
        </div>
        <div style={styles.progressLabel}>
          <span>{totalPoints} points</span>
          <span>{pointsToNext} to next level</span>
        </div>
      </div>

      {/* Recent History */}
      <div style={styles.historySection}>
        <div style={styles.historyTitle}>
          <span>📋</span> Recent Activity
        </div>
        {history.length > 0 ? (
          <div style={styles.historyList}>
            {history.slice(0, 10).map((item, index) => (
              <div key={index} style={styles.historyItem}>
                <span style={styles.historyDate}>{formatDate(item.date)}</span>
                <span style={styles.historyActivity}>{item.activity}</span>
                <span style={styles.historyPoints}>+{item.points}</span>
              </div>
            ))}
          </div>
        ) : (
          <div style={styles.emptyHistory}>
            No activity yet. Complete some lessons to earn points!
          </div>
        )}
      </div>
    </div>
  );
};

export default PointsPanelComponent;
