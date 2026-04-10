import { useState, useEffect, useRef } from 'react';

interface Sentence {
  sentence: string;
  sentenceZh: string;
  chunkList: string[];
  keyPhrases: string[];
  functionTag: string;
  topicTag: string;
  difficulty: number;
  pronunciation?: string;
}

interface SentenceLearningProps {
  onComplete?: (correct: boolean) => void;
  onPointsEarned?: (points: number, reason: string) => void;
}

// 模拟句子数据
const mockSentence: Sentence = {
  sentence: 'I would like to invite you to my birthday party next Saturday.',
  sentenceZh: '我想邀请你参加下周六我的生日派对。',
  chunkList: ['I would like to', 'invite you', 'to my birthday party', 'next Saturday', '.'],
  keyPhrases: ['would like to', 'invite you', 'birthday party'],
  functionTag: 'invitation',
  topicTag: 'social',
  difficulty: 2,
  pronunciation: '/aɪ wʊd laɪk tʊ ɪnˈvaɪt juː tʊ maɪ ˈbɜːrθdeɪ ˈpɑːrti nɛkst ˈsætərdeɪ/'
};

export function SentenceLearning({ onComplete, onPointsEarned }: SentenceLearningProps) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const [chunkRevealed, setChunkRevealed] = useState<boolean[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswerCheck, setShowAnswerCheck] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  
  const pronunciationService = useRef(createPronunciationService());

  // 初始化分块显示状态
  useEffect(() => {
    setChunkRevealed(new Array(mockSentence.chunkList.length).fill(false));
  }, []);

  const speakSentence = async () => {
    if (pronunciationService.current.isSupported()) {
      setIsSpeaking(true);
      try {
        await pronunciationService.current.speak(mockSentence.sentence, 'en-US', 0.8);
      } catch (error) {
        console.error('Failed to speak sentence:', error);
      } finally {
        setIsSpeaking(false);
      }
    }
  };

  const speakChunk = async (chunk: string) => {
    if (pronunciationService.current.isSupported()) {
      setIsSpeaking(true);
      try {
        await pronunciationService.current.speak(chunk, 'en-US', 0.9);
      } catch (error) {
        console.error('Failed to speak chunk:', error);
      } finally {
        setIsSpeaking(false);
      }
    }
  };

  const stopSpeaking = () => {
    pronunciationService.current.stop();
    setIsSpeaking(false);
  };

  const revealNextChunk = () => {
    if (currentChunkIndex < mockSentence.chunkList.length) {
      const newRevealed = [...chunkRevealed];
      newRevealed[currentChunkIndex] = true;
      setChunkRevealed(newRevealed);
      setCurrentChunkIndex(prev => prev + 1);
      
      // 播放当前分块的发音
      speakChunk(mockSentence.chunkList[currentChunkIndex]);
      
      // 奖励积分
      if (onPointsEarned) {
        onPointsEarned(5, `学习分块: "${mockSentence.chunkList[currentChunkIndex]}"`);
      }
    }
  };

  const revealAllChunks = () => {
    const newRevealed = new Array(mockSentence.chunkList.length).fill(true);
    setChunkRevealed(newRevealed);
    setCurrentChunkIndex(mockSentence.chunkList.length);
  };

  const checkAnswer = () => {
    const userAnswerLower = userAnswer.trim().toLowerCase();
    const sentenceLower = mockSentence.sentence.toLowerCase();
    const isCorrect = sentenceLower.includes(userAnswerLower) || 
                     userAnswerLower.includes(mockSentence.keyPhrases[0]?.toLowerCase() || '');
    
    setIsAnswerCorrect(isCorrect);
    setShowAnswerCheck(true);
    
    // 奖励积分
    if (onPointsEarned) {
      const points = isCorrect ? 15 : 5;
      onPointsEarned(points, isCorrect ? '句子回答正确' : '句子学习参与');
    }
    
    // 回调完成
    if (onComplete) {
      onComplete(isCorrect);
    }
  };

  const resetForNextSentence = () => {
    setShowTranslation(false);
    setCurrentChunkIndex(0);
    setChunkRevealed(new Array(mockSentence.chunkList.length).fill(false));
    setUserAnswer('');
    setShowAnswerCheck(false);
    setIsAnswerCorrect(false);
  };

  function createPronunciationService() {
    const synth = typeof window !== 'undefined' && window.speechSynthesis;
    
    return {
      speak: async (text: string, lang = 'en-US', rate = 1) => {
        if (!synth) throw new Error('Speech synthesis not supported');
        
        return new Promise<void>((resolve, reject) => {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = lang;
          utterance.rate = Math.max(0.1, Math.min(10, rate));
          
          utterance.onend = () => resolve();
          utterance.onerror = (event) => reject(new Error(`Speech error: ${event.error}`));
          
          synth.speak(utterance);
        });
      },
      stop: () => {
        if (synth && synth.speaking) synth.cancel();
      },
      isSupported: () => !!synth
    };
  }

  return (
    <div className="sentence-learning-container">
      <div className="sentence-header">
        <h2>句子学习</h2>
        <div className="sentence-meta">
          <span className="function-tag">{mockSentence.functionTag}</span>
          <span className="difficulty">难度: {mockSentence.difficulty}/3</span>
          <span className="topic-tag">{mockSentence.topicTag}</span>
        </div>
      </div>

      <div className="sentence-card">
        {/* 发音控制 */}
        <div className="pronunciation-control">
          <button 
            className={`sound-button ${isSpeaking ? 'speaking' : ''}`}
            onClick={speakSentence}
            disabled={isSpeaking}
            aria-label="播放句子发音"
          >
            {isSpeaking ? '⏹️' : '🔊'}
          </button>
          {mockSentence.pronunciation && (
            <span className="phonetic-guide">{mockSentence.pronunciation}</span>
          )}
          {isSpeaking && (
            <button className="stop-btn" onClick={stopSpeaking}>
              停止
            </button>
          )}
        </div>

        {/* 分块显示 */}
        <div className="chunks-display">
          <h3>分块学习</h3>
          <div className="chunks-container">
            {mockSentence.chunkList.map((chunk, index) => (
              <div 
                key={index} 
                className={`chunk ${chunkRevealed[index] ? 'revealed' : 'hidden'}`}
                onClick={() => chunkRevealed[index] && speakChunk(chunk)}
              >
                {chunkRevealed[index] ? chunk : '______'}
                {chunkRevealed[index] && (
                  <button 
                    className="chunk-speak-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakChunk(chunk);
                    }}
                    aria-label={`播放"${chunk}"的发音`}
                  >
                    🔊
                  </button>
                )}
              </div>
            ))}
          </div>
          
          <div className="chunk-controls">
            <button 
              className="btn-reveal-chunk"
              onClick={revealNextChunk}
              disabled={currentChunkIndex >= mockSentence.chunkList.length}
            >
              显示下一个分块 ({currentChunkIndex}/{mockSentence.chunkList.length})
            </button>
            <button 
              className="btn-reveal-all"
              onClick={revealAllChunks}
            >
              显示所有分块
            </button>
          </div>
        </div>

        {/* 完整句子 */}
        <div className="full-sentence">
          <h3>完整句子</h3>
          <div className="sentence-text">
            {mockSentence.sentence}
          </div>
          <button 
            className="btn-show-translation"
            onClick={() => setShowTranslation(!showTranslation)}
          >
            {showTranslation ? '隐藏翻译' : '显示翻译'}
          </button>
          {showTranslation && (
            <div className="sentence-translation">
              {mockSentence.sentenceZh}
            </div>
          )}
        </div>

        {/* 关键短语 */}
        <div className="key-phrases">
          <h4>关键短语</h4>
          <div className="phrases-list">
            {mockSentence.keyPhrases.map((phrase, index) => (
              <span key={index} className="phrase-tag">
                {phrase}
              </span>
            ))}
          </div>
        </div>

        {/* 练习：填写缺失部分 */}
        <div className="practice-section">
          <h3>练习</h3>
          <p>尝试填写句子的缺失部分：</p>
          <div className="fill-blank">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="输入你记住的部分..."
              disabled={showAnswerCheck}
            />
            <button 
              className="btn-check-answer"
              onClick={checkAnswer}
              disabled={!userAnswer.trim() || showAnswerCheck}
            >
              检查答案
            </button>
          </div>
          
          {showAnswerCheck && (
            <div className={`answer-feedback ${isAnswerCorrect ? 'correct' : 'incorrect'}`}>
              {isAnswerCorrect ? '✅ 回答正确！' : '❌ 回答不太准确，继续努力！'}
              <div className="correct-answer">
                正确答案: {mockSentence.sentence}
              </div>
            </div>
          )}
        </div>

        {/* 控制按钮 */}
        <div className="sentence-controls">
          <button className="btn-next" onClick={resetForNextSentence}>
            下一句
          </button>
          <div className="hint">
            💡 提示: 先逐块学习，再尝试回忆完整句子
          </div>
        </div>
      </div>

      {/* 无障碍提示 */}
      <div className="accessibility-note" role="note" aria-label="无障碍提示">
        提示: 使用Tab键导航，空格键播放发音，Enter键确认选择
      </div>
    </div>
  );
}