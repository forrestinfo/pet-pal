import React from 'react';
import type { WordCard as WordCardType } from '../../../../packages/shared-types/dist';
import { melodyColors, melodyShadows, melodyBorderRadius, melodySpacing } from '../themes/melodyTheme';

export interface WordCardProps {
  word: Pick<WordCardType, 'word' | 'partOfSpeech' | 'simpleDefinitionEn' | 'meaningZh' | 'exampleSentence' | 'exampleSentenceZh' | 'topicTag' | 'difficulty'> & { phonetic?: string };
  showAnswer: boolean;
  onShowAnswer: () => void;
  onAnswer: (result: 'dont-know' | 'somewhat' | 'know') => void;
  onSpeak: (text: string, lang?: string) => void;
}

const difficultyLabels = ['', 'Easy', 'Medium', 'Hard'];
const difficultyColors = ['', '#4CAF50', '#FF9800', '#F44336'];

const styles: any = {
  card: {
    backgroundColor: melodyColors.surface,
    borderRadius: melodyBorderRadius['2xl'],
    boxShadow: melodyShadows.lg,
    padding: melodySpacing.xl,
    maxWidth: 480,
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
  wordSection: {
    textAlign: 'center' as const,
    padding: `${melodySpacing.lg} 0`,
  },
  word: {
    fontSize: '3.5rem', /* 增大单词字体 */
    fontWeight: 700,
    color: melodyColors.textPrimary,
    margin: 0,
    letterSpacing: '0.5px',
  },
  phonetic: {
    fontSize: '1.3rem', /* 增大音标字体 */
    color: melodyColors.textSecondary,
    margin: `${melodySpacing.md} 0`,
    fontStyle: 'italic',
  },
  posAndSpeak: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: melodySpacing.md, /* 增大间距 */
    margin: `${melodySpacing.md} 0`,
  },
  partOfSpeech: {
    fontSize: '1.2rem', /* 增大词性字体 */
    color: melodyColors.secondary,
    fontStyle: 'italic',
    backgroundColor: melodyColors.secondaryLight,
    padding: `${melodySpacing.sm} ${melodySpacing.md}`,
    borderRadius: melodyBorderRadius.md,
    fontWeight: 600,
  },
  speakBtn: {
    background: 'none',
    border: 'none',
    fontSize: '2rem', /* 增大发音按钮 */
    cursor: 'pointer',
    padding: melodySpacing.sm,
    borderRadius: melodyBorderRadius.full,
    transition: 'transform 0.2s',
    minWidth: '60px',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  challenge: {
    textAlign: 'center' as const,
    padding: `${melodySpacing.lg} 0`,
  },
  challengeText: {
    fontSize: '1.5rem', /* 增大挑战文本 */
    color: melodyColors.textSecondary,
    marginBottom: melodySpacing.lg,
    fontWeight: 500,
    lineHeight: 1.5,
  },
  showBtn: {
    backgroundColor: melodyColors.primary,
    color: '#fff',
    border: 'none',
    padding: `${melodySpacing.md} ${melodySpacing['2xl']}`,
    borderRadius: melodyBorderRadius.full,
    fontSize: '1.3rem', /* 增大显示答案按钮 */
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: melodyShadows.md,
    transition: 'transform 0.2s, box-shadow 0.2s',
    minHeight: '60px',
    minWidth: '200px',
  },
  answer: {
    padding: `${melodySpacing.md} 0`,
  },
  answerBlock: {
    backgroundColor: melodyColors.background,
    borderRadius: melodyBorderRadius.xl,
    padding: melodySpacing.lg, /* 增大答案块内边距 */
    marginBottom: melodySpacing.md,
    border: `1px solid ${melodyColors.primaryLight}`,
  },
  answerLabel: {
    fontSize: '1rem', /* 增大答案标签 */
    color: melodyColors.textSecondary,
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    marginBottom: melodySpacing.sm,
    letterSpacing: '0.5px',
  },
  answerText: {
    fontSize: '1.3rem', /* 增大答案文本 */
    color: melodyColors.textPrimary,
    margin: 0,
    lineHeight: 1.6,
  },
  footer: {
    textAlign: 'center' as const,
    padding: `${melodySpacing.md} 0 0`,
  },
  footerText: {
    fontSize: '1.2rem', /* 增大页脚文本 */
    color: melodyColors.textSecondary,
    marginBottom: melodySpacing.md,
    fontWeight: 500,
    lineHeight: 1.5,
  },
  btnRow: {
    display: 'flex',
    gap: melodySpacing.md, /* 增大按钮间距 */
    justifyContent: 'center',
  },
  answerBtn: {
    border: 'none',
    padding: `${melodySpacing.md} ${melodySpacing.xl}`,
    borderRadius: melodyBorderRadius.full,
    fontSize: '1.1rem', /* 增大答案按钮字体 */
    fontWeight: 600,
    color: '#fff',
    cursor: 'pointer',
    transition: 'opacity 0.2s, transform 0.2s',
    minHeight: '55px',
    minWidth: '140px',
  },
  exampleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: melodySpacing.sm,
  },
};

export const WordCardComponent: React.FC<WordCardProps> = ({
  word,
  showAnswer,
  onShowAnswer,
  onAnswer,
  onSpeak,
}) => {
  return (
    <div style={styles.card}>
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.topicTag}>{word.topicTag}</span>
        <span
          style={{
            ...styles.difficulty,
            backgroundColor: difficultyColors[word.difficulty] || '#999',
          }}
        >
          {difficultyLabels[word.difficulty] || `Lvl ${word.difficulty}`}
        </span>
      </div>

      {/* Word Display */}
      <div style={styles.wordSection}>
        <h2 style={styles.word}>{word.word}</h2>
        {word.phonetic && <div style={styles.phonetic}>{word.phonetic}</div>}
        <div style={styles.posAndSpeak}>
          <span style={styles.partOfSpeech}>{word.partOfSpeech}</span>
          <button
            style={styles.speakBtn}
            onClick={() => onSpeak(word.word, 'en-US')}
            title="Pronounce word"
          >
            🔊
          </button>
        </div>
      </div>

      {/* Challenge / Answer */}
      {!showAnswer ? (
        <div style={styles.challenge}>
          <p style={styles.challengeText}>What does this word mean?</p>
          <button style={styles.showBtn} onClick={onShowAnswer}>
            Show Answer
          </button>
        </div>
      ) : (
        <div style={styles.answer}>
          <div style={styles.answerBlock}>
            <div style={styles.answerLabel}>📖 English Definition</div>
            <p style={styles.answerText}>{word.simpleDefinitionEn}</p>
          </div>
          <div style={styles.answerBlock}>
            <div style={styles.answerLabel}>🇨🇳 中文意思</div>
            <p style={styles.answerText}>{word.meaningZh}</p>
          </div>
          <div style={styles.answerBlock}>
            <div style={styles.answerLabel}>📝 Example</div>
            <div style={styles.exampleRow}>
              <div style={{ flex: 1 }}>
                <p style={styles.answerText}>{word.exampleSentence}</p>
                <p style={{ ...styles.answerText, color: melodyColors.textSecondary, fontSize: '0.9rem' }}>
                  {word.exampleSentenceZh}
                </p>
              </div>
              <button
                style={styles.speakBtn}
                onClick={() => onSpeak(word.exampleSentence, 'en-US')}
                title="Pronounce example"
              >
                🔊
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Buttons */}
      <div style={styles.footer}>
        <p style={styles.footerText}>How well did you know this word?</p>
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
            😊 Know It
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordCardComponent;
