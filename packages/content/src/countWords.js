// Simple script to count words in TypeScript files
const fs = require('fs');
const path = require('path');

function countWordsInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Count occurrences of "word: '"
  const wordMatches = content.match(/word: '/g);
  return wordMatches ? wordMatches.length : 0;
}

const wordsDir = path.join(__dirname, 'words');
const files = fs.readdirSync(wordsDir);

let total = 0;
console.log('Word counts by file:');
files.forEach(file => {
  if (file.endsWith('.ts')) {
    const count = countWordsInFile(path.join(wordsDir, file));
    console.log(`${file}: ${count} words`);
    total += count;
  }
});

console.log(`\nTotal words: ${total}`);