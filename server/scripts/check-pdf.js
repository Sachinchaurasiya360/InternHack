import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let pdf = require('pdf-parse');
pdf = pdf.default || pdf;

const dataBuffer = fs.readFileSync('/workspaces/InternHack/test-roadmap.pdf');

console.log('pdf export type:', typeof pdf);
console.log(Object.keys(pdf));

if (typeof pdf === 'function') {
  pdf(dataBuffer).then(function(data) {
    console.log('pages:', data.numpages);
    console.log('text sample:', data.text.slice(0, 800));
  }).catch(err => { console.error(err); process.exit(1); });
} else if (pdf && typeof pdf.default === 'function') {
  pdf.default(dataBuffer).then(function(data) {
    console.log('pages:', data.numpages);
    console.log('text sample:', data.text.slice(0, 800));
  }).catch(err => { console.error(err); process.exit(1); });
} else {
  console.error('Unable to call pdf-parse; unexpected export shape');
  process.exit(1);
}
