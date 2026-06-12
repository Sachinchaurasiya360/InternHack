const CODE_CLASS = "px-1.5 py-0.5 bg-stone-200 dark:bg-white/10 rounded-md text-sm font-mono";

export function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\s*(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, " href='#'")
    .replace(/\s*style\s*=\s*(?:"[^"]*"|'[^']*')/gi, "")
    .replace(/\s*class\s*=\s*(?:"[^"]*"|'[^']*')/gi, "")
    .replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .replace(/<embed\b[^>]*>[\s\S]*?<\/embed>/gi, "")
    .replace(/<object\b[^>]*>[\s\S]*?<\/object>/gi, "")
    .replace(/<svg\b[^>]*onload\s*=[^>]*>[\s\S]*?<\/svg>/gi, "")
    .replace(/<img\b[^>]*onerror\s*=[^>]*\/?>/gi, "")
    .replace(/<img[^>]*src\s*=\s*["'][^"']*indiabix[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<img[^>]*src\s*=\s*["']\/[^"']*["'][^>]*\/?>/gi, "")
    .replace(/Video\s*Explanation[\s\S]*?(?=<\/div>|$)/gi, "")
    .replace(/<a\b[^>]*(?:youtube|youtu\.be|video)[^>]*>[\s\S]*?<\/a>/gi, "")
    .replace(/<(div|span|p|font)\s*>\s*<\/\1>/gi, "")
    .replace(/<\/?font[^>]*>/gi, "")
    .replace(/<img\b[^>]*\/?>/gi, "");
}

export function cleanHint(html: string): string {
  return html
    .replace(/<div[^>]*>/gi, "")
    .replace(/<\/div>/gi, "")
    .replace(/<code>/gi, `<code class='${CODE_CLASS}'>`);
}
