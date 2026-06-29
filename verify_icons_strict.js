const fs = require('fs');
const glob = require('glob');

const files = glob.sync('client/src/**/*.tsx');
let missing = false;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const buttonRegex = /<Button\b([^>]*?)>([\s\S]*?)<\/Button>/g;
  
  let match;
  while ((match = buttonRegex.exec(content)) !== null) {
    const attrs = match[1];
    if (attrs.includes('mode="icon"')) {
      if (!attrs.includes('aria-label=')) {
        console.log(`MISSING in ${file}: \n${match[0]}\n`);
        missing = true;
      }
    }
  }
});

if (!missing) console.log("All icon buttons have aria-label.");
