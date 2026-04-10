const fs = require('fs');
const path = require('path');

function countWordsInFile(filepath) {
    const content = fs.readFileSync(filepath, 'utf-8');
    // Count occurrences of "word: '"
    const matches = content.match(/word:\s*'/g);
    return matches ? matches.length : 0;
}

function main() {
    const wordsDir = path.join(__dirname, 'packages', 'content', 'src', 'words');
    let total = 0;
    
    console.log("=== 词汇文件统计 ===");
    
    const files = fs.readdirSync(wordsDir).filter(f => f.endsWith('.ts'));
    
    files.forEach(filename => {
        const filepath = path.join(wordsDir, filename);
        const count = countWordsInFile(filepath);
        console.log(`${filename}: ${count}`);
        total += count;
    });
    
    console.log("=== 总计 ===");
    console.log(`总词汇数: ${total}`);
    
    // Check if we need more words
    const target = 1000;
    if (total < target) {
        console.log(`还需要 ${target - total} 个词`);
    } else {
        console.log(`已达到目标 ${target} 个词`);
    }
}

main();