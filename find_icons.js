const fs = require('fs');
const glob = require('glob');
const path = require('path');

const files = glob.sync('client/src/**/*.tsx');

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('mode="icon"')) {
      // Check if it's within a Button or if it has aria-label/title
      if (line.includes('aria-label') || line.includes('title=')) return;
      
      // Let's print some lines of context
      console.log(`\n--- ${file}:${i+1} ---`);
      const start = Math.max(0, i - 2);
      const end = Math.min(lines.length, i + 5);
      for (let j = start; j < end; j++) {
        console.log(`${j+1}: ${lines[j]}`);
      }
    }
  });
});
