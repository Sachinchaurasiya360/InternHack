import fs from 'fs';
const path = '/workspaces/InternHack/test-roadmap.pdf';
const buf = fs.readFileSync(path);
const s = buf.toString('latin1');

// Find all page object offsets
const pageIndexes = [];
let idx = 0;
while (true) {
  const p = s.indexOf('/Type /Page', idx);
  if (p === -1) break;
  pageIndexes.push(p);
  idx = p + 1;
}
console.log('detected', pageIndexes.length, 'page markers');

// For each page marker, try to find the nearest following 'stream' and 'endstream'
for (let i = 0; i < pageIndexes.length; i++) {
  const start = pageIndexes[i];
  const searchStart = start;
  const streamIdx = s.indexOf('\nstream\n', searchStart);
  const endstreamIdx = s.indexOf('\nendstream', searchStart);
  let streamLen = -1;
  if (streamIdx !== -1 && endstreamIdx !== -1 && endstreamIdx > streamIdx) {
    streamLen = endstreamIdx - (streamIdx + '\nstream\n'.length);
  }
  console.log(`page ${i+1}: streamLen=${streamLen}`);
}
