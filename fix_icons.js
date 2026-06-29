const fs = require('fs');
const glob = require('glob');
const path = require('path');

const files = glob.sync('client/src/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // We need to find all <Button ... mode="icon" ...> ... </Button>
  // that do NOT have aria-label.
  
  // A regex to match a <Button block
  const buttonRegex = /<Button\b([^>]*?)>([\s\S]*?)<\/Button>/g;
  
  content = content.replace(buttonRegex, (match, attrs, children) => {
    if (!attrs.includes('mode="icon"')) return match;
    
    if (attrs.includes('aria-label=')) return match; // Already has aria-label
    
    // We need to add aria-label.
    // Determine the label based on children or attrs
    let label = 'Action';
    
    if (attrs.includes('title=')) {
      const titleMatch = attrs.match(/title="([^"]+)"/);
      if (titleMatch) label = titleMatch[1];
    } else if (children.includes('<X ')) {
      label = 'Close';
    } else if (children.includes('<Trash2 ')) {
      label = 'Delete';
    } else if (children.includes('<Bookmark ')) {
      label = 'Toggle bookmark';
    } else if (children.includes('<BookmarkCheck ')) {
      label = 'Toggle bookmark';
    } else if (children.includes('<Circle ')) {
      label = 'Toggle completion';
    } else if (children.includes('<CheckCircle2 ')) {
      label = 'Toggle completion';
    } else if (children.includes('<ArrowLeft ')) {
      label = 'Go back';
    } else if (children.includes('<ChevronLeft ')) {
      label = 'Previous';
    } else if (children.includes('<ChevronRight ')) {
      label = 'Next';
    } else if (children.includes('<Send ')) {
      label = 'Send';
    } else if (children.includes('<Share2 ') || children.includes('<Share ')) {
      label = 'Share';
    } else if (children.includes('<Copy ')) {
      label = 'Copy';
    } else if (children.includes('<Star ')) {
      if (children.includes('fill=')) {
        // Just generic rate star
        label = 'Rate star';
      }
    } else if (children.includes('<Pencil ')) {
      label = 'Edit';
    } else if (children.includes('<Plus ')) {
      label = 'Add';
    }

    // Insert aria-label just after mode="icon"
    const newAttrs = attrs.replace(/mode="icon"/, `mode="icon" aria-label="${label}"`);
    console.log(`Updated in ${file}: ${label}`);
    changed = true;
    return `<Button${newAttrs}>${children}</Button>`;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
  }
});
