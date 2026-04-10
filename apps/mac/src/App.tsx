import { useState } from 'react'
import './App.css'

// Mock data for development
const mockWord = {
  word: 'improve',
  partOfSpeech: 'verb',
  simpleDefinitionEn: 'to become better',
  meaningZh: '改进',
  exampleSentence: 'I want to improve my English speaking.',
  exampleSentenceZh: '我想提高我的英语口语。',
  topicTag: 'education',
  difficulty: 2
};

function App() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [learningCount, setLearningCount] = useState(0);
  
  const handleAnswer = (result: 'dont-know' | 'somewhat' | 'know') => {
    console.log('User answered:', result);
    setShowAnswer(false);
    setLearningCount(prev => prev + 1);
    
    // In real app, this would update spaced repetition algorithm
    // and fetch next card
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>PET Pal</h1>
        <div className="stats">
          <span>Today: {learningCount} learned</span>
          <span>Pet: Happy 🐶</span>
        </div>
      </header>
      
      <main className="learning-area">
        <div className="card-container">
          <div className="word-card">
            <div className="word-header">
              <span className="topic-tag">{mockWord.topicTag}</span>
              <span className="difficulty">Level {mockWord.difficulty}</span>
            </div>
            
            <div className="word-content">
              <h2 className="word">{mockWord.word}</h2>
              <div className="part-of-speech">{mockWord.partOfSpeech}</div>
              
              {!showAnswer ? (
                <div className="challenge">
                  <p>What does this word mean?</p>
                  <button 
                    className="show-answer-btn"
                    onClick={() => setShowAnswer(true)}
                  >
                    Show Answer
                  </button>
                </div>
              ) : (
                <div className="answer">
                  <div className="definition">
                    <h3>Simple English Definition</h3>
                    <p>{mockWord.simpleDefinitionEn}</p>
                  </div>
                  
                  <div className="chinese-meaning">
                    <h3>中文意思</h3>
                    <p>{mockWord.meaningZh}</p>
                  </div>
                  
                  <div className="example">
                    <h3>Example Sentence</h3>
                    <p className="english">{mockWord.exampleSentence}</p>
                    <p className="chinese">{mockWord.exampleSentenceZh}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="card-footer">
              <p>How well did you know this word?</p>
              <div className="answer-buttons">
                <button 
                  className="btn-dont-know"
                  onClick={() => handleAnswer('dont-know')}
                  disabled={!showAnswer}
                >
                  Didn't Know
                </button>
                <button 
                  className="btn-somewhat"
                  onClick={() => handleAnswer('somewhat')}
                  disabled={!showAnswer}
                >
                  Somewhat Knew
                </button>
                <button 
                  className="btn-know"
                  onClick={() => handleAnswer('know')}
                  disabled={!showAnswer}
                >
                  Knew It Well
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="progress-info">
          <p>Today's progress: {learningCount} words learned</p>
          <p>Keep going! Your pet is getting smarter.</p>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>PET Pal - Making PET exam preparation effective and fun</p>
      </footer>
    </div>
  )
}

export default App
