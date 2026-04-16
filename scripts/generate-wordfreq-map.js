/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

function parseFreqText(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const map = {};
  for (const line of lines) {
    const [wordRaw, freqRaw] = line.split(/\s+/);
    if (!wordRaw || !freqRaw) continue;
    const word = wordRaw.toLowerCase();
    const freq = parseInt(freqRaw, 10);
    if (!Number.isFinite(freq)) continue;
    map[word] = Math.max(map[word] || 0, freq);
  }
  return map;
}

async function main() {
  const localTxt = path.join(__dirname, 'en_50k.txt');
  let text;

  if (fs.existsSync(localTxt)) {
    console.log('Using local freq file', localTxt);
    text = fs.readFileSync(localTxt, 'utf8');
  } else {
    const srcUrl = 'https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2018/en/en_50k.txt';
    console.log('Fetching', srcUrl);

    const res = await fetch(srcUrl);
    if (!res.ok) throw new Error(`Failed to fetch wordfreq list: ${res.status} ${res.statusText}`);
    text = await res.text();
  }

  const map = parseFreqText(text);
  const outPath = path.join(__dirname, '..', 'packages', 'content', 'src', 'wordFreq.en_50k.ts');
  const header = `// Generated from hermitdave/FrequencyWords en_50k.txt\n// Format: word -> frequency (integer)\n\nexport const EN_WORD_FREQ: Record<string, number> = `;
  const body = JSON.stringify(map, null, 2);
  const footer = ` as const;\n`;
  fs.writeFileSync(outPath, header + body + footer, 'utf8');
  console.log('Wrote', outPath, 'entries=', Object.keys(map).length);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
