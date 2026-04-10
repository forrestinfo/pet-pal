const fs = require('fs');
const path = require('path');

const wordsDir = path.join(__dirname, 'words');
const files = fs.readdirSync(wordsDir);

files.forEach(file => {
  if (file.endsWith('.ts')) {
    const filePath = path.join(wordsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 修复未闭合的数组
    if (!content.trim().endsWith('];')) {
      // 找到最后一个完整的条目
      const lines = content.split('\n');
      let lastCompleteLine = -1;
      
      for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].trim() === '},' || lines[i].trim() === '}') {
          lastCompleteLine = i;
          break;
        }
      }
      
      if (lastCompleteLine !== -1) {
        // 截断到最后一个完整条目
        const newLines = lines.slice(0, lastCompleteLine + 1);
        newLines.push('];');
        content = newLines.join('\n');
      } else {
        // 如果找不到，直接添加闭合
        content = content.trim();
        if (content.endsWith(',')) {
          content = content.slice(0, -1);
        }
        content += '\n];';
      }
    }
    
    // 修复未转义的单引号
    content = content.replace(/(exampleSentence: '.*[^\\]'.*')/g, (match) => {
      return match.replace(/'/g, "\\'");
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
});

console.log('All files fixed.');