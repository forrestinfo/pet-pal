import React, { CSSProperties, useState } from 'react';
import { melodyColors, melodyShadows, melodyBorderRadius, melodySpacing, melodyIcons } from '../themes/melodyTheme';

export interface SettingsProps {
  username: string;
  dailyGoal: number;
  pronunciationSpeed: number;
  onSave: (settings: {
    username: string;
    dailyGoal: number;
    pronunciationSpeed: number;
  }) => void;
  onResetData?: () => void;
}

const DAILY_GOAL_OPTIONS = [10, 20, 30, 50];

const styles: Record<string, CSSProperties> = {
  panel: {
    backgroundColor: melodyColors.surface,
    borderRadius: melodyBorderRadius.xl,
    boxShadow: melodyShadows.md,
    padding: melodySpacing.lg,
    border: `2px solid ${melodyColors.primaryLight}`,
    width: '100%',
    maxWidth: 600,
    margin: '0 auto',
  },
  header: {
    marginBottom: melodySpacing.xl,
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: melodyColors.textPrimary,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: melodySpacing.sm,
  },
  section: {
    marginBottom: melodySpacing.xl,
    paddingBottom: melodySpacing.lg,
    borderBottom: `1px solid ${melodyColors.backgroundDark}`,
    ':last-child': {
      borderBottom: 'none',
      marginBottom: 0,
      paddingBottom: 0,
    },
  },
  sectionTitle: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: melodyColors.textSecondary,
    margin: `0 0 ${melodySpacing.md} 0`,
    display: 'flex',
    alignItems: 'center',
    gap: melodySpacing.sm,
  },
  formGroup: {
    marginBottom: melodySpacing.md,
  },
  label: {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: melodyColors.textPrimary,
    marginBottom: melodySpacing.xs,
  },
  input: {
    width: '100%',
    padding: `${melodySpacing.sm} ${melodySpacing.md}`,
    borderRadius: melodyBorderRadius.md,
    border: `1px solid ${melodyColors.primaryLight}`,
    backgroundColor: melodyColors.backgroundLight,
    fontSize: '1rem',
    color: melodyColors.textPrimary,
    boxSizing: 'border-box',
  },
  inputFocus: {
    outline: 'none',
    borderColor: melodyColors.primary,
    boxShadow: `0 0 0 3px ${melodyColors.glow}`,
  },
  radioGroup: {
    display: 'flex',
    gap: melodySpacing.md,
    marginTop: melodySpacing.sm,
  },
  radioOption: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  radioInput: {
    display: 'none',
  },
  radioLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: melodySpacing.md,
    borderRadius: melodyBorderRadius.lg,
    border: `2px solid ${melodyColors.backgroundDark}`,
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center' as const,
    transition: 'all 0.2s',
  },
  radioNumber: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: melodyColors.textPrimary,
    marginBottom: melodySpacing.xs,
  },
  radioText: {
    fontSize: '0.8rem',
    color: melodyColors.textSecondary,
  },
  speedSlider: {
    width: '100%',
    margin: `${melodySpacing.md} 0`,
    WebkitAppearance: 'none',
    appearance: 'none',
    height: 8,
    borderRadius: melodyBorderRadius.full,
    background: `linear-gradient(90deg, ${melodyColors.primary}, ${melodyColors.accent})`,
    outline: 'none',
  },
  speedValue: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: melodyColors.primary,
    textAlign: 'center' as const,
    marginBottom: melodySpacing.sm,
  },
  speedLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.8rem',
    color: melodyColors.textSecondary,
  },
  buttonGroup: {
    display: 'flex',
    gap: melodySpacing.md,
    marginTop: melodySpacing.lg,
  },
  button: {
    flex: 1,
    padding: `${melodySpacing.md} ${melodySpacing.lg}`,
    borderRadius: melodyBorderRadius.full,
    border: 'none',
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  saveButton: {
    backgroundColor: melodyColors.primary,
    color: '#fff',
    ':hover': {
      backgroundColor: melodyColors.primaryDark,
    },
    ':active': {
      transform: 'scale(0.98)',
    },
  },
  resetButton: {
    backgroundColor: melodyColors.error,
    color: '#fff',
    ':hover': {
      backgroundColor: '#d32f2f',
    },
  },
  aboutSection: {
    backgroundColor: melodyColors.background,
    borderRadius: melodyBorderRadius.lg,
    padding: melodySpacing.md,
    marginTop: melodySpacing.xl,
  },
  aboutTitle: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: melodyColors.textSecondary,
    marginBottom: melodySpacing.sm,
  },
  aboutText: {
    fontSize: '0.8rem',
    color: melodyColors.textPrimary,
    lineHeight: 1.5,
    margin: 0,
  },
  version: {
    fontSize: '0.7rem',
    color: melodyColors.textSecondary,
    textAlign: 'center' as const,
    marginTop: melodySpacing.md,
  },
};

export const SettingsComponent: React.FC<SettingsProps> = ({
  username,
  dailyGoal,
  pronunciationSpeed,
  onSave,
  onResetData,
}) => {
  const [localUsername, setLocalUsername] = useState(username);
  const [localDailyGoal, setLocalDailyGoal] = useState(dailyGoal);
  const [localPronunciationSpeed, setLocalPronunciationSpeed] = useState(pronunciationSpeed);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSave = () => {
    onSave({
      username: localUsername,
      dailyGoal: localDailyGoal,
      pronunciationSpeed: localPronunciationSpeed,
    });
  };

  const handleResetClick = () => {
    if (!showResetConfirm) {
      setShowResetConfirm(true);
      return;
    }
    
    if (onResetData) {
      onResetData();
      setShowResetConfirm(false);
    }
  };

  const getSpeedLabel = (speed: number): string => {
    if (speed < 0.8) return 'Slow';
    if (speed < 1.2) return 'Normal';
    if (speed < 1.5) return 'Fast';
    return 'Very Fast';
  };

  return (
    <div style={styles.panel}>
      <div style={styles.header}>
        <h3 style={styles.title}>
          <span style={{ fontSize: '1.5rem' }}>{melodyIcons.settings}</span>
          Settings
        </h3>
      </div>

      {/* Username */}
      <div style={styles.section}>
        <h4 style={styles.sectionTitle}>
          <span style={{ fontSize: '1.2rem' }}>{melodyIcons.user}</span>
          User Profile
        </h4>
        <div style={styles.formGroup}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            value={localUsername}
            onChange={(e) => setLocalUsername(e.target.value)}
            style={styles.input}
            maxLength={20}
            placeholder="Enter your username"
          />
        </div>
      </div>

      {/* Daily Goal */}
      <div style={styles.section}>
        <h4 style={styles.sectionTitle}>
          <span style={{ fontSize: '1.2rem' }}>🎯</span>
          Daily Learning Goal
        </h4>
        <div style={styles.radioGroup}>
          {DAILY_GOAL_OPTIONS.map((goal) => (
            <div key={goal} style={styles.radioOption}>
              <input
                type="radio"
                id={`goal-${goal}`}
                name="dailyGoal"
                value={goal}
                checked={localDailyGoal === goal}
                onChange={() => setLocalDailyGoal(goal)}
                style={styles.radioInput}
              />
              <label
                htmlFor={`goal-${goal}`}
                style={{
                  ...styles.radioLabel,
                  borderColor: localDailyGoal === goal ? melodyColors.primary : melodyColors.backgroundDark,
                  backgroundColor: localDailyGoal === goal ? melodyColors.primaryLight : 'transparent',
                }}
              >
                <span style={styles.radioNumber}>{goal}</span>
                <span style={styles.radioText}>words</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Pronunciation Speed */}
      <div style={styles.section}>
        <h4 style={styles.sectionTitle}>
          <span style={{ fontSize: '1.2rem' }}>{melodyIcons.sound}</span>
          Pronunciation Speed
        </h4>
        <div style={styles.speedValue}>
          {localPronunciationSpeed.toFixed(1)}x ({getSpeedLabel(localPronunciationSpeed)})
        </div>
        <input
          type="range"
          min="0.5"
          max="2.0"
          step="0.1"
          value={localPronunciationSpeed}
          onChange={(e) => setLocalPronunciationSpeed(parseFloat(e.target.value))}
          style={styles.speedSlider}
        />
        <div style={styles.speedLabels}>
          <span>0.5x (Slow)</span>
          <span>1.0x (Normal)</span>
          <span>2.0x (Fast)</span>
        </div>
      </div>

      {/* Reset Data */}
      <div style={styles.section}>
        <h4 style={styles.sectionTitle}>
          <span style={{ fontSize: '1.2rem' }}>⚠️</span>
          Data Management
        </h4>
        <div style={styles.buttonGroup}>
          <button
            onClick={handleSave}
            style={{ ...styles.button, ...styles.saveButton }}
          >
            Save Changes
          </button>
          <button
            onClick={handleResetClick}
            style={{ ...styles.button, ...styles.resetButton }}
          >
            {showResetConfirm ? 'Confirm Reset' : 'Reset All Data'}
          </button>
        </div>
        {showResetConfirm && (
          <p style={{ color: melodyColors.error, fontSize: '0.8rem', marginTop: melodySpacing.sm }}>
            ⚠️ This will delete all your progress and learned words. This action cannot be undone.
          </p>
        )}
      </div>

      {/* About */}
      <div style={styles.aboutSection}>
        <h4 style={styles.aboutTitle}>About PET Pal</h4>
        <p style={styles.aboutText}>
          PET Pal is a gamified English learning app designed to help you prepare for the Cambridge PET exam. 
          Learn vocabulary and sentence patterns through spaced repetition, earn points, and grow your virtual pet.
        </p>
        <p style={styles.aboutText}>
          Features include: smart review scheduling, pronunciation practice, progress tracking, and gamified motivation.
        </p>
        <div style={styles.version}>
          Version 1.0.0 • Made with ❤️ for English learners
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;
