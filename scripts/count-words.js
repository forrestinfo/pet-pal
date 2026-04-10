const fs = require('fs');
const path = require('path');

const wordsDir = path.join(__dirname, '..', 'packages', 'content', 'src', 'words');
const files = fs.readdirSync(wordsDir).filter(f => f.endsWith('.ts'));

console.log('Counting words in vocabulary files...\n');

let totalWords = 0;

files.forEach(file => {
  const filePath = path.join(wordsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // 计算词汇数量（每行以 "{" 开头表示一个词汇条目）
  const wordCount = (content.match(/\{\s*\n\s*word:/g) || []).length;
  
  console.log(`${file}: ${wordCount} words`);
  totalWords += wordCount;
});

console.log(`\n📊 Total vocabulary words: ${totalWords}`);
console.log(`📁 Total files: ${files.length}`);

// 显示分类统计
console.log('\n📈 Classification:');
console.log(`- New words-* files: ${files.filter(f => f.startsWith('words-')).length} files`);
console.log(`- Existing petWordBank-* files: ${files.filter(f => f.startsWith('petWordBank-')).length} files`);