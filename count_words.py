import os
import re

def count_words_in_file(filepath):
    """Count word entries in a TypeScript file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Count occurrences of "word: '"
    count = len(re.findall(r"word:\s*'", content))
    return count

def main():
    words_dir = "packages/content/src/words"
    total = 0
    
    print("=== 词汇文件统计 ===")
    
    for filename in os.listdir(words_dir):
        if filename.endswith('.ts'):
            filepath = os.path.join(words_dir, filename)
            count = count_words_in_file(filepath)
            print(f"{filename}: {count}")
            total += count
    
    print(f"=== 总计 ===")
    print(f"总词汇数: {total}")
    
    # Check if we need more words
    target = 1000
    if total < target:
        print(f"还需要 {target - total} 个词")
    else:
        print(f"已达到目标 {target} 个词")

if __name__ == "__main__":
    main()