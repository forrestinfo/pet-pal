import React, { CSSProperties, useEffect, useState } from 'react';
import { melodyColors, melodyShadows, melodyBorderRadius, melodySpacing, melodyIcons } from '../themes/melodyTheme';

export interface PetPanelProps {
  petState: {
    name: string;
    level: number;
    experience: number; // Current XP
    experienceToNextLevel: number; // XP needed for next level
    mood: number; // 0-100
    hunger: number; // 0-100
    moodIcon?: string; // Optional emoji
  };
  points: number; // Total points
}

const getPetEmoji = (name: string): string => {
  const nameLower = name.toLowerCase();
  if (nameLower.includes('melody')) return '🐰';
  if (nameLower.includes('dog')) return '🐶';
  if (nameLower.includes('cat')) return '🐱';
  if (nameLower.includes('bird')) return '🐦';
  if (nameLower.includes('owl')) return '🦉';
  if (nameLower.includes('rabbit')) return '🐇';
  return '🐰'; // Default
};

const getMoodIcon = (mood: number): string => {
  if (mood >= 80) return '😊';
  if (mood >= 60) return '🙂';
  if (mood >= 40) return '😐';
  if (mood >= 20) return '😟';
  return '😢';
};

const getMoodLabel = (mood: number): string => {
  if (mood >= 80) return 'Very Happy';
  if (mood >= 60) return 'Happy';
  if (mood >= 40) return 'Neutral';
  if (mood >= 20) return 'Sad';
  return 'Very Sad';
};

const getHungerLabel = (hunger: number): string => {
  if (hunger >= 80) return 'Full';
  if (hunger >= 60) return 'Satisfied';
  if (hunger >= 40) return 'Hungry';
  if (hunger >= 20) return 'Very Hungry';
  return 'Starving';
};

const styles: Record<string, CSSProperties> = {
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
  petName: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: melodyColors.textPrimary,
    margin: 0,
  },
  levelBadge: {
    backgroundColor: melodyColors.primary,
    color: '#fff',
    padding: `${melodySpacing.xs} ${melodySpacing.sm}`,
    borderRadius: melodyBorderRadius.full,
    fontSize: '0.8rem',
    fontWeight: 600,
  },
  petArea: {
    textAlign: 'center' as const,
    padding: `${melodySpacing.md} 0`,
    position: 'relative',
  },
  petEmoji: {
    fontSize: '4rem',
    margin: `${melodySpacing.sm} 0`,
    display: 'block',
    transition: 'transform 0.3s ease',
  },
  bounceAnimation: {
    animation: 'bounce 2s infinite',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: melodySpacing.md,
    margin: `${melodySpacing.md} 0`,
  },
  statCard: {
    backgroundColor: melodyColors.background,
    borderRadius: melodyBorderRadius.lg,
    padding: melodySpacing.md,
    border: `1px solid ${melodyColors.primaryLight}`,
  },
  statHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: melodySpacing.sm,
  },
  statTitle: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: melodyColors.textSecondary,
    display: 'flex',
    alignItems: 'center',
    gap: melodySpacing.xs,
  },
  statValue: {
    fontSize: '0.9rem',
    fontWeight: 700,
    color: melodyColors.textPrimary,
  },
  progressBar: {
    height: 8,
    borderRadius: melodyBorderRadius.full,
    backgroundColor: melodyColors.backgroundDark,
    overflow: 'hidden',
    margin: `${melodySpacing.xs} 0`,
  },
  progressFill: {
    height: '100%',
    borderRadius: 'inherit',
    transition: 'width 0.5s ease',
  },
  progressLabel: {
    fontSize: '0.8rem',
    color: melodyColors.textSecondary,
    textAlign: 'right' as const,
    marginTop: melodySpacing.xs,
  },
  abilitySection: {
    marginTop: melodySpacing.lg,
    padding: melodySpacing.md,
    backgroundColor: melodyColors.background,
    borderRadius: melodyBorderRadius.lg,
    border: `1px solid ${melodyColors.secondaryLight}`,
  },
  abilityTitle: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: melodyColors.textSecondary,
    marginBottom: melodySpacing.sm,
    display: 'flex',
    alignItems: 'center',
    gap: melodySpacing.xs,
  },
  abilityDesc: {
    fontSize: '0.9rem',
    color: melodyColors.textPrimary,
    margin: 0,
    lineHeight: 1.5,
  },
  pointsDisplay: {
    textAlign: 'center' as const,
    backgroundColor: melodyColors.primaryLight,
    borderRadius: melodyBorderRadius.lg,
    padding: melodySpacing.md,
    marginTop: melodySpacing.md,
  },
  pointsIcon: {
    fontSize: '1.5rem',
    marginRight: melodySpacing.xs,
  },
  pointsText: {
    fontSize: '1rem',
    fontWeight: 600,
    color: melodyColors.primaryDark,
  },
  '@keyframes bounce': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-15px)' },
  },
};

export const PetPanelComponent: React.FC<PetPanelProps> = ({
  petState,
  points,
}) => {
  const [isBouncing, setIsBouncing] = useState(true);
  
  // Trigger bounce animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 2000);
    }, 5000); // Bounce every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  const petEmoji = getPetEmoji(petState.name);
  const moodIcon = petState.moodIcon || getMoodIcon(petState.mood);
  const moodLabel = getMoodLabel(petState.mood);
  const hungerLabel = getHungerLabel(petState.hunger);
  
  const xpPercent = Math.min(
    100,
    (petState.experience / Math.max(petState.experienceToNextLevel, 1)) * 100
  );
  const moodPercent = Math.min(100, Math.max(0, petState.mood));
  const hungerPercent = Math.min(100, Math.max(0, petState.hunger));

  const getAbilityDescription = () => {
    if (petState.level >= 5) {
      return "Your pet is a master! It can now explain difficult words and provide extra examples.";
    }
    if (petState.level >= 3) {
      return "Your pet is growing smarter! It can now highlight key phrases in sentences.";
    }
    return "Your pet is learning! It helps you stay motivated and tracks your progress.";
  };

  return (
    <div style={styles.panel}>
      {/* Header */}
      <div style={styles.header}>
        <h3 style={styles.petName}>{petState.name}</h3>
        <span style={styles.levelBadge}>Lvl {petState.level}</span>
      </div>

      {/* Pet Display */}
      <div style={styles.petArea}>
        <div
          style={{
            ...styles.petEmoji,
            ...(isBouncing ? styles.bounceAnimation : {}),
          }}
        >
          {petEmoji}
        </div>
        <div style={styles.pointsDisplay}>
          <span style={styles.pointsIcon}>{melodyIcons.points}</span>
          <span style={styles.pointsText}>{points} Total Points</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        {/* Experience */}
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <div style={styles.statTitle}>✨ Experience</div>
            <div style={styles.statValue}>{petState.experience}/{petState.experienceToNextLevel}</div>
          </div>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                backgroundColor: '#FFD700',
                width: `${xpPercent}%`,
              }}
            />
          </div>
          <div style={styles.progressLabel}>
            {xpPercent.toFixed(0)}% to Level {petState.level + 1}
          </div>
        </div>

        {/* Mood */}
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <div style={styles.statTitle}>{moodIcon} Mood</div>
            <div style={styles.statValue}>{moodLabel}</div>
          </div>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                backgroundColor: moodPercent >= 60 ? '#4CAF50' : '#FF9800',
                width: `${moodPercent}%`,
              }}
            />
          </div>
          <div style={styles.progressLabel}>{petState.mood}%</div>
        </div>

        {/* Hunger */}
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <div style={styles.statTitle}>🍎 Hunger</div>
            <div style={styles.statValue}>{hungerLabel}</div>
          </div>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                backgroundColor: hungerPercent >= 60 ? '#4CAF50' : '#FF9800',
                width: `${hungerPercent}%`,
              }}
            />
          </div>
          <div style={styles.progressLabel}>{petState.hunger}%</div>
        </div>
      </div>

      {/* Ability Description */}
      <div style={styles.abilitySection}>
        <div style={styles.abilityTitle}>🎯 Pet Ability</div>
        <p style={styles.abilityDesc}>{getAbilityDescription()}</p>
        <p style={{ ...styles.abilityDesc, marginTop: melodySpacing.sm }}>
          Feed your pet by completing daily lessons and earning points!
        </p>
      </div>
    </div>
  );
};

export default PetPanelComponent;
