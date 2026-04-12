import React from 'react';
import type { SentenceCard as SentenceCardType } from '../../../../packages/shared-types/dist';
import { melodyColors, melodyShadows, melodyBorderRadius, melodySpacing } from '../themes/melodyTheme';

export interface SentenceCardProps {
  sentence: Pick<SentenceCardType, 'sentence' | 'sentenceZh' | 'chunkList' | 'keyPhrases' | 'functionTag' | 'topicTag' | 'difficulty'>;
  showAnswer: boolean;
  onShowAnswer: () => void;
  onAnswer: (result: 'dont-know' | 'somewhat' | 'know') => void;
  onSpeak: (text: string, lang?: string) => void;
}

const difficultyLabels = ['', 'Easy', 'Medium', 'Hard'];
const difficultyColors = ['', '#4CAF50', '#FF9800', '#F44336'];
const chunkColors = [melodyColors.primary, melodyColors.secondary, melodyColors.accent, '#4CAF50', '#FF9800'];

const styles: any = {
  card: {
    backgroundColor: melodyColors.surface,
    borderRadius: melodyBorderRadius['2xl'],
    boxShadow: melodyShadows.lg,
    padding: melodySpacing.xl,
    maxWidth: 560,
    width: '100%',
    margin: '0 auto',
    border: `2px solid ${melodyColors.primaryLight}`,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: melodySpacing.md,
  },
  topicTag: {
    backgroundColor: melodyColors.primaryLight,
    color: melodyColors.primaryDark,
    padding: `${melodySpacing.xs} ${melodySpacing.sm}`,
    borderRadius: melodyBorderRadius.full,
    fontSize: '0.8rem',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  difficulty: {
    fontSize: '0.8rem',
    fontWeight: 600,
    padding: `${melodySpacing.xs} ${melodySpacing.sm}`,
    borderRadius: melodyBorderRadius.full,
    color: '#fff',
  },
  sentenceSection: {
    textAlign: 'center' as const,
    padding: `${melodySpacing.lg} 0`,
  },
  sentence: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: melodyColors.textPrimary,
    margin: `0 0 ${melodySpacing.md} 0`,
    lineHeight: 1.4,
  },
  chunksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: melodySpacing.xs,
    justifyContent: 'center',
    margin: `${melodySpacing.sm} 0`,
  },
  chunk: {
    padding: `${melodySpacing.xs} ${melodySpacing.sm}`,
    borderRadius: melodyBorderRadius.md,
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#fff',
    transition: 'transform 0.2s',
  },
  functionTagContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: melodySpacing.xs,
    backgroundColor: melodyColors.secondaryLight,
    padding: `${melodySpacing.xs} ${melodySpacing.sm}`,
    borderRadius: melodyBorderRadius.md,
    margin: `${melodySpacing.sm} 0`,
  },
  functionTag: {
    fontSize: '0.8rem',
    color: melodyColors.secondaryDark,
    fontWeight: 600,
  },
  speakBtn: {
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    padding: melodySpacing.xs,
    borderRadius: melodyBorderRadius.full,
    transition: 'transform 0.2s',
  },
  challenge: {
    textAlign: 'center' as const,
    padding: `${melodySpacing.lg} 0`,
  },
  challengeText: {
    fontSize: '1.1rem',
    color: melodyColors.textSecondary,
    marginBottom: melodySpacing.md,
  },
  showBtn: {
    backgroundColor: melodyColors.primary,
    color: '#fff',
    border: 'none',
    padding: `${melodySpacing.sm} ${melodySpacing.xl}`,
    borderRadius: melodyBorderRadius.full,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: melodyShadows.md,
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  answer: {
    padding: `${melodySpacing.md} 0`,
  },
  answerBlock: {
    backgroundColor: melodyColors.background,
    borderRadius: melodyBorderRadius.xl,
    padding: melodySpacing.md,
    marginBottom: melodySpacing.sm,
  },
  answerLabel: {
    fontSize: '0.8rem',
    color: melodyColors.textSecondary,
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    marginBottom: melodySpacing.xs,
  },
  answerText: {
    fontSize: '1rem',
    color: melodyColors.textPrimary,
    margin: 0,
    lineHeight: 1.5,
  },
  keyPhrasesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: melodySpacing.xs,
    margin: `${melodySpacing.xs} 0`,
  },
  keyPhrase: {
    backgroundColor: melodyColors.backgroundLight,
    border: `1px solid ${melodyColors.primaryLight}`,
    padding: `${melodySpacing.xs} ${melodySpacing.sm}`,
    borderRadius: melodyBorderRadius.md,
    fontSize: '0.8rem',
    color: melodyColors.textPrimary,
  },
  translationRow: {
    display: 'flex',
    alignItems: 'center',
    gap: melodySpacing.sm,
  },
  footer: {
    textAlign: 'center' as const,
    padding: `${melodySpacing.md} 0 0`,
  },
  footerText: {
    fontSize: '0.9rem',
    color: melodyColors.textSecondary,
    marginBottom: melodySpacing.sm,
  },
  btnRow: {
    display: 'flex',
    gap: melodySpacing.sm,
    justifyContent: 'center',
  },
  answerBtn: {
    border: 'none',
    padding: `${melodySpacing.sm} ${melodySpacing.lg}`,
    borderRadius: melodyBorderRadius.full,
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#fff',
    cursor: 'pointer',
    transition: 'opacity 0.2s, transform 0.2s',
  },
};

export const SentenceCardComponent: React.FC<SentenceCardProps> = ({
  sentence,
  showAnswer,
  onShowAnswer,
  onAnswer,
  onSpeak,
}) => {
  const renderChunkedSentence = () => {
    const sentenceText = sentence.sentence;
    const chunks = sentence.chunkList || [];
    
    if (chunks.length === 0) {
      return sentenceText;
    }

    // Simple chunk highlighting (for display purposes)
    return (
      <div>
        {chunks.map((chunk: string, index: number) => (
          <span
            key={index}
            style={{
              ...styles.chunk,
              backgroundColor: chunkColors[index % chunkColors.length],
              display: 'inline-block',
              margin: `0 ${melodySpacing.xs}`,
            }}
          >
            {chunk}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div style={styles.card}>
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.topicTag}>{sentence.topicTag}</span>
        <span
          style={{
            ...styles.difficulty,
            backgroundColor: difficultyColors[sentence.difficulty] || '#999',
          }}
        >
          {difficultyLabels[sentence.difficulty] || `Lvl ${sentence.difficulty}`}
        </span>
      </div>

      {/* Sentence Display */}
      <div style={styles.sentenceSection}>
        <div style={styles.functionTagContainer}>
          <span style={styles.functionTag}>📝 {sentence.functionTag}</span>
        </div>
        <h2 style={styles.sentence}>{sentence.sentence}</h2>
        <div style={styles.chunksContainer}>
          {renderChunkedSentence()}
        </div>
        <button
          style={{ ...styles.speakBtn, marginTop: melodySpacing.sm }}
          onClick={() => onSpeak(sentence.sentence, 'en-US')}
          title="Pronounce sentence"
        >
          🔊
        </button>
      </div>

      {/* Challenge / Answer */}
      {!showAnswer ? (
        <div style={styles.challenge}>
          <p style={styles.challengeText}>What does this sentence mean?</p>
          <button style={styles.showBtn} onClick={onShowAnswer}>
            Show Answer
          </button>
        </div>
      ) : (
        <div style={styles.answer}>
          <div style={styles.answerBlock}>
            <div style={styles.answerLabel}>🇨🇳 中文翻译</div>
            <div style={styles.translationRow}>
              <div style={{ flex: 1 }}>
                <p style={styles.answerText}>{sentence.sentenceZh}</p>
              </div>
              <button
                style={styles.speakBtn}
                onClick={() => onSpeak(sentence.sentenceZh, 'zh-CN')}
                title="Pronounce Chinese translation"
              >
                🔊
              </button>
            </div>
          </div>
          {sentence.keyPhrases && sentence.keyPhrases.length > 0 && (
            <div style={styles.answerBlock}>
              <div style={styles.answerLabel}>🔑 Key Phrases</div>
              <div style={styles.keyPhrasesContainer}>
                {sentence.keyPhrases.map((phrase: string, index: number) => (
                  <span key={index} style={styles.keyPhrase}>
                    {phrase}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer Buttons */}
      <div style={styles.footer}>
        <p style={styles.footerText}>How well did you understand this sentence?</p>
        <div style={styles.btnRow}>
          <button
            style={{ ...styles.answerBtn, backgroundColor: '#e74c3c' }}
            onClick={() => onAnswer('dont-know')}
            disabled={!showAnswer}
          >
            😕 Don't Know
          </button>
          <button
            style={{ ...styles.answerBtn, backgroundColor: '#f39c12' }}
            onClick={() => onAnswer('somewhat')}
            disabled={!showAnswer}
          >
            🤔 Somewhat
          </button>
          <button
            style={{ ...styles.answerBtn, backgroundColor: '#27ae60' }}
            onClick={() => onAnswer('know')}
            disabled={!showAnswer}
          >
            😊 Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default SentenceCardComponent;
