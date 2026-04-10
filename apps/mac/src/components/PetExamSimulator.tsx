import { useState, useEffect, useRef, useCallback } from 'react';

interface ExamQuestion {
  id: number;
  type: 'reading' | 'writing' | 'listening' | 'speaking';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  points: number;
  timeLimit: number; // 秒
}

interface ExamSimulatorProps {
  onComplete?: (score: number, totalPoints: number) => void;
  onPointsEarned?: (points: number, reason: string) => void;
}

// 模拟考试题目
const mockExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    type: 'reading',
    question: 'Read the text and choose the correct answer: "The museum opens at 9 AM and closes at 6 PM. On weekends, it opens one hour later." What time does the museum open on Saturday?',
    options: ['8 AM', '9 AM', '10 AM', '11 AM'],
    correctAnswer: 2, // 10 AM
    points: 10,
    timeLimit: 60
  },
  {
    id: 2,
    type: 'reading',
    question: 'Choose the word that best completes the sentence: "I\'m really ______ in learning English."',
    options: ['interest', 'interesting', 'interested', 'interests'],
    correctAnswer: 2, // interested
    points: 10,
    timeLimit: 45
  },
  {
    id: 3,
    type: 'writing',
    question: 'Write an email to your friend inviting them to your birthday party. Include: date, time, location, and what to bring.',
    correctAnswer: '', // 开放答案
    points: 25,
    timeLimit: 300
  },
  {
    id: 4,
    type: 'listening',
    question: 'Listen to the conversation and answer: Where are the speakers going? (Audio would play here)',
    options: ['To the cinema', 'To a restaurant', 'To the park', 'To a museum'],
    correctAnswer: 1, // To a restaurant
    points: 15,
    timeLimit: 90
  },
  {
    id: 5,
    type: 'speaking',
    question: 'Describe the picture: A family having dinner together. Talk about who you see, what they are doing, and how they might be feeling.',
    correctAnswer: '', // 开放答案
    points: 30,
    timeLimit: 120
  }
];

export function PetExamSimulator({ onComplete, onPointsEarned }: ExamSimulatorProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | number | null)[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [writingAnswer, setWritingAnswer] = useState('');
  const [speakingAnswer, setSpeakingAnswer] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  
  const timerRef = useRef<number | null>(null);
  const currentQuestion = mockExamQuestions[currentQuestionIndex];

  // 初始化用户答案数组
  useEffect(() => {
    setUserAnswers(new Array(mockExamQuestions.length).fill(null));
  }, []);

  // 计时器效果
  useEffect(() => {
    if (examStarted && !examFinished && timeRemaining > 0) {
      timerRef.current = window.setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            if (timerRef.current !== null) {
              window.clearInterval(timerRef.current);
            }
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [examStarted, examFinished, timeRemaining, handleTimeUp]);

  const startExam = () => {
    setExamStarted(true);
    setTimeRemaining(currentQuestion.timeLimit);
    if (onPointsEarned) {
      onPointsEarned(10, '开始模拟考试');
    }
  };

  function handleTimeUp() {
    if (currentQuestionIndex < mockExamQuestions.length - 1) {
      nextQuestion();
    } else {
      finishExam();
    }
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleWritingChange = (text: string) => {
    setWritingAnswer(text);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = text;
    setUserAnswers(newAnswers);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // 模拟录音开始
      const newAnswers = [...userAnswers];
      newAnswers[currentQuestionIndex] = 'Recording in progress...';
      setUserAnswers(newAnswers);
    } else {
      // 模拟录音结束
      const newAnswers = [...userAnswers];
      newAnswers[currentQuestionIndex] = speakingAnswer || 'Recorded answer';
      setUserAnswers(newAnswers);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < mockExamQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      const nextQ = mockExamQuestions[currentQuestionIndex + 1];
      setTimeRemaining(nextQ.timeLimit);
      setWritingAnswer('');
      setSpeakingAnswer('');
      setIsRecording(false);
    } else {
      finishExam();
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      const prevQ = mockExamQuestions[currentQuestionIndex - 1];
      setTimeRemaining(prevQ.timeLimit);
      
      // 恢复之前的答案
      const prevAnswer = userAnswers[currentQuestionIndex - 1];
      if (mockExamQuestions[currentQuestionIndex - 1].type === 'writing') {
        setWritingAnswer(prevAnswer as string || '');
      } else if (mockExamQuestions[currentQuestionIndex - 1].type === 'speaking') {
        setSpeakingAnswer(prevAnswer as string || '');
      }
    }
  };

  const finishExam = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
    }
    setExamFinished(true);
    
    // 计算分数
    let totalScore = 0;
    userAnswers.forEach((answer, index) => {
      const question = mockExamQuestions[index];
      if (question.type === 'reading' || question.type === 'listening') {
        if (answer === question.correctAnswer) {
          totalScore += question.points;
        }
      } else if (question.type === 'writing' || question.type === 'speaking') {
        // 对于开放性问题，给予基础分
        if (answer && typeof answer === 'string' && answer.trim().length > 10) {
          totalScore += question.points * 0.8; // 80%的分数
        }
      }
    });
    
    setScore(totalScore);
    
    // 奖励积分
    if (onPointsEarned) {
      const bonusPoints = Math.floor(totalScore / 10);
      onPointsEarned(bonusPoints, `模拟考试完成，得分: ${totalScore}`);
    }
    
    // 回调完成
    if (onComplete) {
      const totalPoints = mockExamQuestions.reduce((sum, q) => sum + q.points, 0);
      onComplete(totalScore, totalPoints);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'reading': return '阅读';
      case 'writing': return '写作';
      case 'listening': return '听力';
      case 'speaking': return '口语';
      default: return type;
    }
  };

  const getQuestionTypeColor = (type: string) => {
    switch (type) {
      case 'reading': return 'var(--color-info)';
      case 'writing': return 'var(--color-warning)';
      case 'listening': return 'var(--color-success)';
      case 'speaking': return 'var(--color-secondary)';
      default: return 'var(--color-text-primary)';
    }
  };

  return (
    <div className="exam-simulator-container">
      <div className="exam-header">
        <h2>PET 模拟考试</h2>
        <div className="exam-info">
          <div className="exam-stats">
            <span className="stat">
              题目: {currentQuestionIndex + 1}/{mockExamQuestions.length}
            </span>
            <span className="stat">
              类型: <span style={{ color: getQuestionTypeColor(currentQuestion.type) }}>
                {getQuestionTypeLabel(currentQuestion.type)}
              </span>
            </span>
            <span className="stat">
              分值: {currentQuestion.points} 分
            </span>
          </div>
          
          {examStarted && !examFinished && (
            <div className="timer" aria-live="polite">
              ⏱️ 剩余时间: {formatTime(timeRemaining)}
            </div>
          )}
        </div>
      </div>

      {!examStarted ? (
        <div className="exam-intro">
          <div className="intro-card">
            <h3>考试说明</h3>
            <ul className="exam-instructions">
              <li>• 本次模拟考试包含 {mockExamQuestions.length} 道题目</li>
              <li>• 包含阅读、写作、听力、口语四种题型</li>
              <li>• 每题有单独的时间限制</li>
              <li>• 完成后系统会自动评分</li>
              <li>• 根据得分获得积分奖励</li>
            </ul>
            
            <div className="question-types-preview">
              <h4>题型预览</h4>
              <div className="types-grid">
                {mockExamQuestions.map((q) => (
                  <div 
                    key={q.id} 
                    className="type-card"
                    style={{ borderLeftColor: getQuestionTypeColor(q.type) }}
                  >
                    <span className="type-badge" style={{ background: getQuestionTypeColor(q.type) }}>
                      {getQuestionTypeLabel(q.type)}
                    </span>
                    <span className="type-points">{q.points}分</span>
                    <span className="type-time">{q.timeLimit}秒</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="btn-start-exam"
              onClick={startExam}
              aria-label="开始模拟考试"
            >
              开始考试
            </button>
            
            <div className="accessibility-tip">
              💡 无障碍提示: 考试过程中可以使用Tab键导航，空格键选择答案
            </div>
          </div>
        </div>
      ) : examFinished ? (
        <div className="exam-results">
          <div className="results-card">
            <h3>考试结果</h3>
            <div className="score-display">
              <div className="score-circle">
                <span className="score-value">{score}</span>
                <span className="score-total">/{mockExamQuestions.reduce((sum, q) => sum + q.points, 0)}</span>
              </div>
              <div className="score-message">
                {score >= 70 ? '🎉 优秀！你的PET水平很棒！' : 
                 score >= 50 ? '👍 不错！继续努力！' : 
                 '📚 需要更多练习，加油！'}
              </div>
            </div>
            
            <div className="answers-review">
              <h4>答案回顾</h4>
              {mockExamQuestions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = question.type === 'reading' || question.type === 'listening' 
                  ? userAnswer === question.correctAnswer
                  : userAnswer && typeof userAnswer === 'string' && userAnswer.trim().length > 10;
                
                return (
                  <div key={question.id} className="answer-item">
                    <div className="answer-header">
                      <span>第 {index + 1} 题 ({getQuestionTypeLabel(question.type)})</span>
                      <span className={`answer-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? '✅ 正确' : '❌ 错误'}
                      </span>
                    </div>
                    <div className="answer-content">
                      <div className="question-preview">{question.question.substring(0, 60)}...</div>
                      {question.type === 'reading' || question.type === 'listening' ? (
                        <div className="correct-answer">
                          正确答案: {question.options?.[question.correctAnswer as number]}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="results-actions">
              <button 
                className="btn-retry"
                onClick={() => window.location.reload()}
              >
                重新考试
              </button>
              <button 
                className="btn-continue"
                onClick={() => {/* 返回主界面 */}}
              >
                继续学习
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="exam-question">
          <div className="question-card">
            <div className="question-header">
              <span className="question-type" style={{ color: getQuestionTypeColor(currentQuestion.type) }}>
                {getQuestionTypeLabel(currentQuestion.type)}
              </span>
              <span className="question-number">
                题目 {currentQuestion.id}
              </span>
            </div>
            
            <div className="question-content">
              <h3>{currentQuestion.question}</h3>
              
              {currentQuestion.type === 'reading' || currentQuestion.type === 'listening' ? (
                <div className="options-container">
                  {currentQuestion.options?.map((option, index) => (
                    <button
                      key={index}
                      className={`option-btn ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}`}
                      onClick={() => handleAnswerSelect(index)}
                      aria-label={`选项 ${index + 1}: ${option}`}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                      <span className="option-text">{option}</span>
                    </button>
                  ))}
                </div>
              ) : currentQuestion.type === 'writing' ? (
                <div className="writing-container">
                  <textarea
                    value={writingAnswer}
                    onChange={(e) => handleWritingChange(e.target.value)}
                    placeholder="在这里输入你的回答..."
                    rows={8}
                    aria-label="写作回答输入框"
                  />
                  <div className="writing-tips">
                    <p>💡 提示: 确保包含所有要求的信息，注意语法和拼写</p>
                    <p>字数: {writingAnswer.length} 字符</p>
                  </div>
                </div>
              ) : currentQuestion.type === 'speaking' ? (
                <div className="speaking-container">
                  <div className="speaking-prompt">
                    <p>请描述下面的图片:</p>
                    <div className="picture-placeholder">
                      🖼️ 家庭聚餐图片
                    </div>
                  </div>
                  
                  <div className="recording-controls">
                    <button 
                      className={`btn-record ${isRecording ? 'recording' : ''}`}
                      onClick={toggleRecording}
                      aria-label={isRecording ? '停止录音' : '开始录音'}
                    >
                      {isRecording ? '⏹️ 停止录音' : '🎤 开始录音'}
                    </button>
                    
                    {isRecording && (
                      <div className="recording-status" role="status" aria-live="polite">
                        ● 正在录音...
                      </div>
                    )}
                  </div>
                  
                  <div className="speaking-tips">
                    <p>💡 提示: 描述人物、活动、场景和感受</p>
                    <p>准备时间: {timeRemaining}秒</p>
                  </div>
                </div>
              ) : null}
            </div>
            
            <div className="question-navigation">
              <button 
                className="btn-prev"
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                aria-label="上一题"
              >
                上一题
              </button>
              
              <div className="progress-indicator">
                {mockExamQuestions.map((_, index) => (
                  <div 
                    key={index}
                    className={`progress-dot ${index === currentQuestionIndex ? 'active' : ''} ${userAnswers[index] !== null ? 'answered' : ''}`}
                    onClick={() => setCurrentQuestionIndex(index)}
                    aria-label={`跳转到第 ${index + 1} 题`}
                  />
                ))}
              </div>
              
              {currentQuestionIndex < mockExamQuestions.length - 1 ? (
                <button 
                  className="btn-next"
                  onClick={nextQuestion}
                  aria-label="下一题"
                >
                  下一题
                </button>
              ) : (
                <button 
                  className="btn-finish"
                  onClick={finishExam}
                  aria-label="完成考试"
                >
                  完成考试
                </button>
              )}
            </div>
          </div>
          
          <div className="exam-tips">
            <h4>考试技巧</h4>
            <ul>
              <li>• 仔细阅读题目要求</li>
              <li>• 管理好答题时间</li>
              <li>• 检查拼写和语法</li>
              <li>• 口语题目要清晰表达</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}