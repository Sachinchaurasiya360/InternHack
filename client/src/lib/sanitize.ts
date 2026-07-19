import sanitize from "sanitize-html";

const CODE_CLASS = "px-1.5 py-0.5 bg-stone-200 dark:bg-white/10 rounded-md text-sm font-mono";

export function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function sanitizeHtml(html: string): string {
  if (!html) return "";
  return sanitize(html, {
    allowedTags: [
      "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "p", "a", "ul", "ol",
      "li", "b", "i", "strong", "em", "strike", "code", "hr", "br", "div", "span",
      "pre", "table", "thead", "tbody", "tr", "th", "td", "img"
    ],
    allowedAttributes: {
      a: ["href", "name", "target"],
      code: ["class"],
      span: ["class"],
      div: ["class"],
      img: ["src", "alt", "class", "loading"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
  });
}

export function cleanHint(html: string): string {
  return html
    .replace(/<div[^>]*>/gi, "")
    .replace(/<\/div>/gi, "")
    .replace(/<code>/gi, `<code class='${CODE_CLASS}'>`);
}
