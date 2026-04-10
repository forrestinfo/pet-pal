# PET Pal - macOS PET Learning App

A macOS desktop learning application for PET (B1 Preliminary) exam preparation, combining spaced repetition with pet-raising gamification to make learning effective and engaging.

## Project Structure

```
pet-pal/
├── apps/
│   └── mac/                    # Tauri macOS application
├── packages/
│   ├── shared-types/          # Shared TypeScript types
│   ├── content/              # PET vocabulary and sentences
│   ├── spaced-repetition/    # Ebbinghaus scheduling algorithm
│   └── ui/                   # React UI components (future)
├── docs/
│   ├── prd/                  # Product requirements
│   └── prompts/              # OpenClaw development prompts
└── scripts/                  # Build and utility scripts
```

## Core Features

- **Word Learning**: PET vocabulary with simple English definitions (A1/A2 words explaining B1 words)
- **Sentence Learning**: Exam-useful sentences for writing, speaking, and functional use
- **Spaced Repetition**: Simplified Ebbinghaus algorithm (10min → 1d → 3d → 7d → 14d → 30d → 60d)
- **Pet Gamification**: Pet that grows based on learning progress (not just clicks)
- **Daily Tasks**: Adaptive learning load based on performance and backlog
- **Progress Tracking**: Real mastery tracking (not just "seen" counts)

## Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Rust (for Tauri) - [Installation Guide](https://tauri.app/start/prerequisites/)

### Quick Start
```bash
# Clone the repository
git clone <repository-url>
cd pet-pal

# Install dependencies for all packages
npm install

# Build shared packages
cd packages/shared-types && npm run build
cd ../content && npm run build
cd ../spaced-repetition && npm run build

# Start the macOS app
cd apps/mac
npm run tauri dev
```

### Package Development
Each package is independent and can be developed separately:

```bash
# Build a specific package
cd packages/<package-name>
npm run build

# Watch mode (if configured)
npm run dev
```

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Desktop**: Tauri 2.x (Rust + WebView)
- **Database**: SQLite (via Tauri store)
- **Styling**: CSS Modules / Tailwind (to be decided)
- **Build Tool**: Vite
- **Package Manager**: npm workspaces

## Development Philosophy

### Learning-First Design
1. Rewards are tied to memory, not clicks
2. Wrong answers are more valuable than right ones
3. New learning and review are separated
4. Words are learned in sentence context
5. Definitions use simpler words (A1/A2 → B1)

### OpenClaw Automation
This project is designed for OpenClaw-assisted development:

- Each feature is a separate GitHub Issue
- Issues include: Goal, Business Rules, Input/Output, Acceptance Criteria
- Modular architecture allows independent package development
- TypeScript strict mode for reliability

## Contributing

### Issue Structure
When creating issues for OpenClaw automation, use this template:

```
## Goal
[What this issue aims to accomplish]

## Business Rules
[Specific rules that must be followed]

## Input
[Data structures or user inputs]

## Output
[Expected results or file changes]

## Acceptance Criteria
[Testable criteria for completion]
```

### Code Style
- TypeScript with strict mode
- Functional components with hooks
- Descriptive variable and function names
- Comments for complex logic
- Tests for critical algorithms

## Roadmap

### Phase 1: Core Learning Engine ✅
- [x] Project scaffolding
- [x] Shared types package
- [x] Content package (vocabulary/sentences)
- [x] Spaced repetition algorithm
- [x] Basic UI components

### Phase 2: Learning Interface
- [ ] Word learning screen
- [ ] Sentence learning screen
- [ ] Review scheduler
- [ ] Daily task flow

### Phase 3: Gamification
- [ ] Pet state management
- [ ] Progress tracking
- [ ] Rewards system
- [ ] Visual feedback

### Phase 4: Polish & Release
- [ ] macOS packaging
- [ ] Performance optimization
- [ ] User testing
- [ ] App store readiness

## License

MIT License - see LICENSE file for details.