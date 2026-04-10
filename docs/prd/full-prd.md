# PET Pal - macOS PET Learning App PRD

## Product Vision
A macOS desktop learning app that combines PET vocabulary/sentence memorization with spaced repetition and pet-raising gamification to make exam preparation effective and engaging.

## Core Principles
1. Rewards must serve "memory" not "clicks"
2. Focus on "recall" not "recognition"
3. New learning and review must be separated
4. Words must be learned in sentence context
5. Definitions must use simple words (A1/A2 to explain B1)
6. Sentences must be exam-useful (functional, writing, speaking)
7. Wrong answers are more valuable than right ones
8. Short sessions (8-15 min), fast feedback
9. Light gamification, not distracting
10. Real progress tracking, no false confidence
11. Encourage persistence, don't shame breaks
12. Every learning session must have closure

## Target User
- PET/B1 Preliminary exam takers
- Self-study English learners
- Users who need structured, gamified learning
- macOS users (desktop app)

## MVP Scope
### Core Features
1. Word card learning with simple definitions
2. Sentence card learning with chunking
3. Spaced repetition scheduler
4. Pet raising based on learning progress
5. Daily task management
6. Progress statistics
7. Local content import/export

### Post-MVP
1. AI explanation expansion
2. AI speaking practice
3. AI writing feedback
4. Cloud sync
5. Family multi-user mode
6. Leaderboards
7. Full mock exams

## Technical Architecture
- **Frontend**: React + TypeScript
- **Desktop**: Tauri (Rust + WebView)
- **Database**: SQLite (via Tauri store)
- **State Management**: Zustand/Context
- **Styling**: Tailwind CSS
- **Package Structure**: Monorepo with shared packages

## Development Phases
### Phase 1: Core Learning Engine
- Project scaffolding
- Shared types package
- Content package (vocabulary/sentences)
- Spaced repetition algorithm
- Basic UI components

### Phase 2: Learning Interface
- Word learning screen
- Sentence learning screen
- Review scheduler
- Daily task flow

### Phase 3: Gamification
- Pet state management
- Progress tracking
- Rewards system
- Visual feedback

### Phase 4: Polish & Release
- macOS packaging
- Performance optimization
- User testing
- App store readiness

## Success Metrics
- User retention (7-day, 30-day)
- Word recall rate (>80% after 7 days)
- Sentence recall rate (>70% after 7 days)
- Daily active users
- App store ratings (>4.5 stars)

## OpenClaw Automation Notes
- Each feature should be a separate GitHub Issue
- Issues must include: Goal, Business Rules, Input/Output, Acceptance Criteria
- Use TypeScript strict mode
- Follow monorepo package structure
- Test-driven development where possible