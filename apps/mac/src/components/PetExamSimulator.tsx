import { useState, useEffect, useRef } from 'react';
import './PetExamSimulator.css';

interface ExamQuestion {
  id: number;
  type: 'multiple-choice' | 'writing' | 'speaking';
  question: string;
  options?: string[];
  timeLimit: number; // 秒
  correctAnswer?: number | string;
}

interface PetExamSimulatorProps {
  onPointsEarned?: (points: number, reason: string) => void;
  onExamComplete?: (score: number, total: number) => void;
}

const mockExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the sign say?',
    options: ['No parking', 'No smoking', 'No entry', 'No dogs'],
    timeLimit: 60,
    correctAnswer: 0
  },
  {
    id: 2,
    type: 'writing',
    question: 'Write an email to your friend inviting them to your birthday party.',
    timeLimit: 120,
    correctAnswer: ''
  },
  {
    id: 3,
    type: 'speaking',
    question: 'Describe the picture. What can you see?',
    timeLimit: 90,
    correctAnswer: ''
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which word completes the sentence? "I ___ to school by bus."',
    options: ['go', 'going', 'went', 'gone'],
    timeLimit: 60,
    correctAnswer: 0
  },
  {
    id: 5,
    type: 'writing',
    question: 'Write a short story about your last holiday.',
    timeLimit: 180,
    correctAnswer: ''
  }
];

export default function PetExamSimulator({ onPointsEarned, onExamComplete }: PetExamSimulatorProps) {
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | string | null)[]>([]);
  const [writingAnswer, setWritingAnswer] = useState('');
  const [speakingAnswer, setSpeakingAnswer] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [score, setScore] = useState(0);
  
  const timerRef = useRef<number | null>(null);
  const currentQuestion = mockExamQuestions[currentQuestionIndex];

  // 初始化用户答案数组
  useEffect(() => {
    setUserAnswers(new Array(mockExamQuestions.length).fill(null));
  }, []);

  // 辅助函数 - 先定义
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
      setWritingAnswer('');
      setSpeakingAnswer('');
      setIsRecording(false);
    }
  };

  const finishExam = () => {
    setExamFinished(true);
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
    }
    
    // 计算分数
    let calculatedScore = 0;
    userAnswers.forEach((answer, index) => {
      const question = mockExamQuestions[index];
      if (question.type === 'multiple-choice' && answer === question.correctAnswer) {
        calculatedScore += 20;
      } else if (question.type === 'writing' && answer && typeof answer === 'string' && answer.length > 10) {
        calculatedScore += 15;
      } else if (question.type === 'speaking' && answer && typeof answer === 'string' && answer.length > 5) {
        calculatedScore += 15;
      }
    });
    
    setScore(calculatedScore);
    
    if (onPointsEarned) {
      const points = Math.floor(calculatedScore / 2);
      onPointsEarned(points, '完成模拟考试');
    }
    
    if (onExamComplete) {
      onExamComplete(calculatedScore, mockExamQuestions.length * 20);
    }
  };

  // handleTimeUp 现在可以安全地使用 nextQuestion 和 finishExam
  function handleTimeUp() {
    if (currentQuestionIndex < mockExamQuestions.length - 1) {
      nextQuestion();
    } else {
      finishExam();
    }
  }

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

  const handleSpeakingChange = (text: string) => {
    setSpeakingAnswer(text);
  };

  const submitAnswer = () => {
    if (currentQuestionIndex < mockExamQuestions.length - 1) {
      nextQuestion();
    } else {
      finishExam();
    }
  };

  const resetExam = () => {
    setExamStarted(false);
    setExamFinished(false);
    setCurrentQuestionIndex(0);
    setTimeRemaining(0);
    setUserAnswers(new Array(mockExamQuestions.length).fill(null));
    setWritingAnswer('');
    setSpeakingAnswer('');
    setIsRecording(false);
    setScore(0);
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 渲染当前问题
  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'multiple-choice':
        return (
          <div className="multiple-choice-question">
            <h3>{currentQuestion.question}</h3>
            <div className="options-grid">
              {currentQuestion.options?.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'writing':
        return (
          <div className="writing-question">
            <h3>{currentQuestion.question}</h3>
            <textarea
              className="writing-textarea"
              value={writingAnswer}
              onChange={(e) => handleWritingChange(e.target.value)}
              placeholder="输入你的回答..."
              rows={8}
            />
            <div className="word-count">
              字数: {writingAnswer.length} / 建议: 100-150词
            </div>
          </div>
        );
      
      case 'speaking':
        return (
          <div className="speaking-question">
            <h3>{currentQuestion.question}</h3>
            <div className="speaking-controls">
              <button 
                className={`record-button ${isRecording ? 'recording' : ''}`}
                onClick={toggleRecording}
              >
                {isRecording ? '停止录音' : '开始录音'}
              </button>
              <div className="recording-status">
                {isRecording ? '录音中...' : '准备录音'}
              </div>
              <textarea
                className="speaking-textarea"
                value={speakingAnswer}
                onChange={(e) => handleSpeakingChange(e.target.value)}
                placeholder="或者直接输入你的回答..."
                rows={4}
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (examFinished) {
    return (
      <div className="pet-exam-simulator">
        <div className="exam-header">
          <h2>模拟考试完成！</h2>
          <div className="score-display">
            得分: <span className="score-value">{score}</span> / {mockExamQuestions.length * 20}
          </div>
        </div>
        
        <div className="results-summary">
          <h3>考试总结</h3>
          <div className="results-grid">
            {mockExamQuestions.map((q, index) => (
              <div key={q.id} className="result-item">
                <div className="result-question">第{index + 1}题: {q.type === 'multiple-choice' ? '选择题' : q.type === 'writing' ? '写作题' : '口语题'}</div>
                <div className="result-answer">
                  你的答案: {userAnswers[index] !== null && userAnswers[index] !== '' ? 
                    (typeof userAnswers[index] === 'string' ? 
                      (userAnswers[index] as string).substring(0, 50) + ((userAnswers[index] as string).length > 50 ? '...' : '') : 
                      `选项 ${(userAnswers[index] as number) + 1}`) : 
                    '未回答'}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="exam-actions">
          <button className="action-button primary" onClick={resetExam}>
            重新考试
          </button>
          <button className="action-button secondary" onClick={() => window.history.back()}>
            返回学习
          </button>
        </div>
      </div>
    );
  }

  if (!examStarted) {
    return (
      <div className="pet-exam-simulator">
        <div className="exam-intro">
          <h2>PET B1 模拟考试</h2>
          <div className="exam-info">
            <p>模拟真实PET B1考试环境，包含以下题型：</p>
            <ul>
              <li>• 选择题 (听力/阅读理解)</li>
              <li>• 写作题 (邮件/故事写作)</li>
              <li>• 口语题 (图片描述/回答问题)</li>
              <li>• 每题都有时间限制</li>
              <li>• 根据得分获得积分奖励</li>
            </ul>
            
            <div className="question-types-preview">
              <h4>题型预览</h4>
              <div className="types-grid">
                {mockExamQuestions.map((q) => (
                  <div 
                    key={q.id} 
                    className="type-card"
                    onClick={() => {
                      setCurrentQuestionIndex(q.id - 1);
                      setTimeRemaining(q.timeLimit);
                    }}
                  >
                    <div className="type-icon">
                      {q.type === 'multiple-choice' ? '📝' : 
                       q.type === 'writing' ? '✍️' : '🎤'}
                    </div>
                    <div className="type-name">
                      {q.type === 'multiple-choice' ? '选择题' : 
                       q.type === 'writing' ? '写作题' : '口语题'}
                    </div>
                    <div className="type-time">{q.timeLimit}秒</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="exam-actions">
            <button className="action-button primary large" onClick={startExam}>
              开始考试
            </button>
            <div className="exam-tips">
              <p>💡 提示: 考试过程中可以随时查看剩余时间</p>
              <p>💡 提示: 完成考试可获得积分奖励</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pet-exam-simulator">
      <div className="exam-header">
        <div className="exam-progress">
          进度: {currentQuestionIndex + 1} / {mockExamQuestions.length}
        </div>
        <div className="exam-timer">
          ⏱️ 剩余时间: {formatTime(timeRemaining)}
        </div>
      </div>
      
      <div className="question-container">
        {renderQuestion()}
      </div>
      
      <div className="exam-navigation">
        <button 
          className="nav-button" 
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          上一题
        </button>
        
        <div className="question-indicators">
          {mockExamQuestions.map((_, index) => (
            <div 
              key={index}
              className={`indicator ${index === currentQuestionIndex ? 'active' : ''} ${userAnswers[index] !== null ? 'answered' : ''}`}
              onClick={() => {
                if (index !== currentQuestionIndex) {
                  setCurrentQuestionIndex(index);
                  setTimeRemaining(mockExamQuestions[index].timeLimit);
                  setWritingAnswer('');
                  setSpeakingAnswer('');
                  setIsRecording(false);
                }
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
        
        <button 
          className="nav-button primary" 
          onClick={submitAnswer}
        >
          {currentQuestionIndex < mockExamQuestions.length - 1 ? '下一题' : '提交考试'}
        </button>
      </div>
      
      <div className="exam-instructions">
        <h4>考试说明:</h4>
        <ul>
          <li>• 仔细阅读题目要求</li>
          <li>• 注意剩余时间</li>
          <li>• 写作题建议100-150词</li>
          <li>• 口语题可以录音或直接输入</li>
          <li>• 完成后点击"提交考试"</li>
        </ul>
      </div>
    </div>
  );
}