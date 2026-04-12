import React, { useState, useEffect } from 'react';
import { melodyColors, melodyShadows, melodyBorderRadius, melodySpacing } from '../themes/melodyTheme';

export interface FillInTheBlankProps {
  word: string;
  definition: string;
  meaningZh: string;
  exampleSentence: string;
  exampleSentenceZh: string;
  onAnswer: (correct: boolean, userInput: string) => void;
  onNext: () => void;
  difficulty: number; // 1: 缺1个字母, 2: 缺2个字母, 3: 缺3个字母, 4: 全缺
}

const styles: any = {
  card: {
    backgroundColor: melodyColors.surface,
    borderRadius: melodyBorderRadius['2xl'],
    boxShadow: melodyShadows.lg,
    padding: melodySpacing.xl,
    maxWidth: 600,
    width: '100%',
    margin: '0 auto',
    border: `2px solid ${melodyColors.primaryLight}`,
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: melodySpacing.lg,
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: melodyColors.primary,
    margin: `0 0 ${melodySpacing.sm} 0`,
  },
  subtitle: {
    fontSize: '1.2rem',
    color: melodyColors.textSecondary,
    margin: 0,
    fontWeight: 500,
  },
  definitionBlock: {
    backgroundColor: melodyColors.background,
    borderRadius: melodyBorderRadius.xl,
    padding: melodySpacing.lg,
    marginBottom: melodySpacing.lg,
    border: `1px solid ${melodyColors.primaryLight}`,
  },
  definitionLabel: {
    fontSize: '1rem',
    color: melodyColors.textSecondary,
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    marginBottom: melodySpacing.sm,
    letterSpacing: '0.5px',
  },
  definitionText: {
    fontSize: '1.4rem',
    color: melodyColors.textPrimary,
    margin: `0 0 ${melodySpacing.md} 0`,
    lineHeight: 1.6,
  },
  meaningText: {
    fontSize: '1.3rem',
    color: melodyColors.textSecondary,
    margin: 0,
    lineHeight: 1.5,
    fontStyle: 'italic',
  },
  exampleBlock: {
    backgroundColor: melodyColors.backgroundLight,
    borderRadius: melodyBorderRadius.lg,
    padding: melodySpacing.md,
    marginBottom: melodySpacing.lg,
    border: `1px solid ${melodyColors.secondaryLight}`,
  },
  exampleLabel: {
    fontSize: '0.9rem',
    color: melodyColors.secondary,
    fontWeight: 600,
    marginBottom: melodySpacing.xs,
  },
  exampleText: {
    fontSize: '1.2rem',
    color: melodyColors.textPrimary,
    margin: 0,
    lineHeight: 1.5,
  },
  challengeSection: {
    textAlign: 'center' as const,
    padding: `${melodySpacing.xl} 0`,
    backgroundColor: melodyColors.background,
    borderRadius: melodyBorderRadius.xl,
    marginBottom: melodySpacing.lg,
  },
  challengeTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: melodyColors.textPrimary,
    margin: `0 0 ${melodySpacing.md} 0`,
  },
  wordDisplay: {
    fontSize: '3rem',
    fontWeight: 700,
    color: melodyColors.primaryDark,
    margin: `${melodySpacing.lg} 0`,
    fontFamily: 'monospace',
    letterSpacing: '8px',
    textAlign: 'center' as const,
    minHeight: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hint: {
    fontSize: '1.1rem',
    color: melodyColors.textSecondary,
    margin: `0 0 ${melodySpacing.lg} 0`,
    fontStyle: 'italic',
  },
  inputSection: {
    margin: `${melodySpacing.lg} 0`,
  },
  inputLabel: {
    fontSize: '1.2rem',
    color: melodyColors.textSecondary,
    margin: `0 0 ${melodySpacing.sm} 0`,
    fontWeight: 500,
  },
  inputContainer: {
    display: 'flex',
    gap: melodySpacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterInput: {
    width: '60px',
    height: '60px',
    fontSize: '2rem',
    textAlign: 'center' as const,
    border: `2px solid ${melodyColors.primary}`,
    borderRadius: melodyBorderRadius.md,
    outline: 'none',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: melodyColors.textPrimary,
  },
  blankSpace: {
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: melodyColors.textDisabled,
    borderBottom: `4px dashed ${melodyColors.textDisabled}`,
  },
  fullWordInput: {
    width: '100%',
    padding: `${melodySpacing.md} ${melodySpacing.lg}`,
    fontSize: '1.8rem',
    border: `2px solid ${melodyColors.primary}`,
    borderRadius: melodyBorderRadius.lg,
    outline: 'none',
    textAlign: 'center' as const,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: melodyColors.textPrimary,
  },
  feedback: {
    fontSize: '1.3rem',
    fontWeight: 600,
    textAlign: 'center' as const,
    padding: melodySpacing.md,
    borderRadius: melodyBorderRadius.lg,
    margin: `${melodySpacing.md} 0`,
    animation: 'fadeIn 0.3s ease',
  },
  correctFeedback: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    color: '#2E7D32',
    border: `1px solid #4CAF50`,
  },
  incorrectFeedback: {
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
    color: '#C62828',
    border: `1px solid #F44336`,
  },
  buttonRow: {
    display: 'flex',
    gap: melodySpacing.md,
    justifyContent: 'center',
    marginTop: melodySpacing.lg,
  },
  actionButton: {
    border: 'none',
    padding: `${melodySpacing.md} ${melodySpacing.xl}`,
    borderRadius: melodyBorderRadius.full,
    fontSize: '1.2rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s',
    minHeight: '60px',
    minWidth: '160px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: melodySpacing.sm,
  },
  checkButton: {
    backgroundColor: melodyColors.primary,
    color: '#fff',
  },
  nextButton: {
    backgroundColor: melodyColors.secondary,
    color: '#fff',
  },
  showAnswerButton: {
    backgroundColor: melodyColors.accent,
    color: '#fff',
  },
};

export const FillInTheBlankComponent: React.FC<FillInTheBlankProps> = ({
  word,
  definition,
  meaningZh,
  exampleSentence,
  exampleSentenceZh,
  onAnswer,
  onNext,
  difficulty,
}) => {
  const [userInput, setUserInput] = useState<string[]>([]);
  const [fullWordInput, setFullWordInput] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  
  // 根据难度生成空白位置
  const [blankPositions, setBlankPositions] = useState<number[]>([]);
  
  useEffect(() => {
    // 根据难度生成空白位置
    const positions: number[] = [];
    const wordLength = word.length;
    
    if (difficulty === 4) {
      // 全空白 - 显示所有位置为空白
      for (let i = 0; i < wordLength; i++) {
        positions.push(i);
      }
    } else {
      // 随机选择 difficulty 个位置
      const availablePositions = Array.from({ length: wordLength }, (_, i) => i);
      for (let i = 0; i < Math.min(difficulty, wordLength); i++) {
        const randomIndex = Math.floor(Math.random() * availablePositions.length);
        positions.push(availablePositions.splice(randomIndex, 1)[0]);
      }
      positions.sort((a, b) => a - b);
    }
    
    setBlankPositions(positions);
    // 初始化用户输入数组
    setUserInput(new Array(positions.length).fill(''));
  }, [word, difficulty]);
  
  const handleLetterInput = (index: number, value: string) => {
    if (value.length <= 1) {
      const newInput = [...userInput];
      newInput[index] = value.toUpperCase();
      setUserInput(newInput);
      
      // 自动聚焦到下一个输入框
      if (value.length === 1 && index < userInput.length - 1) {
        const nextInput = document.getElementById(`letter-input-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };
  
  const handleFullWordInput = (value: string) => {
    setFullWordInput(value);
  };
  
  const checkAnswer = () => {
    let correct = false;
    
    if (difficulty === 4) {
      // 全空白模式
      correct = fullWordInput.toLowerCase() === word.toLowerCase();
    } else {
      // 部分字母空白模式
      const wordArray = word.toUpperCase().split('');
      let allCorrect = true;
      
      blankPositions.forEach((pos, index) => {
        if (userInput[index].toUpperCase() !== wordArray[pos]) {
          allCorrect = false;
        }
      });
      
      correct = allCorrect;
    }
    
    setIsCorrect(correct);
    setShowFeedback(true);
    onAnswer(correct, difficulty === 4 ? fullWordInput : userInput.join(''));
  };
  
  const handleShowAnswer = () => {
    setShowAnswer(true);
    if (difficulty === 4) {
      setFullWordInput(word);
    } else {
      const wordArray = word.toUpperCase().split('');
      const newInput = blankPositions.map(pos => wordArray[pos]);
      setUserInput(newInput);
    }
  };
  
  const handleNext = () => {
    setShowFeedback(false);
    setShowAnswer(false);
    setUserInput(new Array(blankPositions.length).fill(''));
    setFullWordInput('');
    onNext();
  };
  
  const renderWordDisplay = () => {
    if (showAnswer) {
      return (
        <div style={styles.wordDisplay}>
          {word.toUpperCase()}
        </div>
      );
    }
    
    if (difficulty === 4) {
      return (
        <div>
          <div style={styles.wordDisplay}>
            {word.split('').map((_, index) => (
              <span key={index} style={styles.blankSpace}>_</span>
            ))}
          </div>
          <input
            type="text"
            value={fullWordInput}
            onChange={(e) => handleFullWordInput(e.target.value)}
            style={styles.fullWordInput}
            placeholder="输入完整单词"
            autoFocus
          />
        </div>
      );
    }
    
    const wordArray = word.toUpperCase().split('');
    
    return (
      <div>
        <div style={styles.wordDisplay}>
          {wordArray.map((letter, index) => {
            const blankIndex = blankPositions.indexOf(index);
            if (blankIndex !== -1) {
              if (showAnswer) {
                return <span key={index} style={{ color: melodyColors.success }}>{letter}</span>;
              }
              return (
                <input
                  key={index}
                  id={`letter-input-${blankIndex}`}
                  type="text"
                  value={userInput[blankIndex] || ''}
                  onChange={(e) => handleLetterInput(blankIndex, e.target.value)}
                  style={styles.letterInput}
                  maxLength={1}
                  autoFocus={blankIndex === 0}
                />
              );
            }
            return <span key={index}>{letter}</span>;
          })}
        </div>
        <div style={styles.inputContainer}>
          {blankPositions.map((pos, index) => (
            <div key={index} style={{ textAlign: 'center' as const }}>
              <div style={styles.inputLabel}>第 {pos + 1} 个字母</div>
              <input
                type="text"
                value={userInput[index] || ''}
                onChange={(e) => handleLetterInput(index, e.target.value)}
                style={styles.letterInput}
                maxLength={1}
                autoFocus={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const renderFeedback = () => {
    if (!showFeedback) return null;
    
    return (
      <div style={{
        ...styles.feedback,
        ...(isCorrect ? styles.correctFeedback : styles.incorrectFeedback)
      }}>
        {isCorrect ? '✅ 正确！太棒了！' : '❌ 不对，再试试看！'}
        {!isCorrect && !showAnswer && (
          <div style={{ marginTop: melodySpacing.sm }}>
            <button
              onClick={handleShowAnswer}
              style={{
                ...styles.actionButton,
                ...styles.showAnswerButton,
                padding: `${melodySpacing.sm} ${melodySpacing.md}`,
                fontSize: '1rem',
              }}
            >
              显示答案
            </button>
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.title}>🧩 填空测试</h2>
        <p style={styles.subtitle}>
          根据提示，填写单词的{ difficulty === 4 ? '完整拼写' : `缺失的 ${difficulty} 个字母` }
        </p>
      </div>
      
      <div style={styles.definitionBlock}>
        <div style={styles.definitionLabel}>📖 英文定义</div>
        <p style={styles.definitionText}>{definition}</p>
        
        <div style={styles.definitionLabel}>🇨🇳 中文意思</div>
        <p style={styles.meaningText}>{meaningZh}</p>
      </div>
      
      <div style={styles.exampleBlock}>
        <div style={styles.exampleLabel}>📝 例句</div>
        <p style={styles.exampleText}>{exampleSentence}</p>
        <p style={{ ...styles.exampleText, color: melodyColors.textSecondary, fontSize: '1.1rem' }}>
          {exampleSentenceZh}
        </p>
      </div>
      
      <div style={styles.challengeSection}>
        <h3 style={styles.challengeTitle}>填写单词：</h3>
        {renderWordDisplay()}
        <p style={styles.hint}>
          {difficulty === 4 
            ? '请输入完整的单词拼写'
            : `请填写 ${difficulty} 个缺失的字母`}
        </p>
      </div>
      
      {renderFeedback()}
      
      <div style={styles.buttonRow}>
        {!showFeedback ? (
          <button
            onClick={checkAnswer}
            style={{
              ...styles.actionButton,
              ...styles.checkButton,
            }}
            disabled={(difficulty === 4 && !fullWordInput) || (!difficulty === 4 && userInput.some(input => !input))}
          >
            ✅ 检查答案
          </button>
        ) : (
          <button
            onClick={handleNext}
            style={{
              ...styles.actionButton,
              ...styles.nextButton,
            }}
          >
            → 下一个测试
          </button>
        )}
        
        {!showFeedback && !showAnswer && (
          <button
            onClick={handleShowAnswer}
            style={{
              ...styles.actionButton,
              ...styles.showAnswerButton,
            }}
          >
            🔍 显示答案
          </button>
        )}
      </div>
    </div>
  );
};

export default FillInTheBlankComponent;