/**
 * Convert a string to a URL-safe slug. Lowercases, strips diacritics, replaces
 * any run of non-alphanumeric characters with a single hyphen, and trims
 * leading/trailing hyphens. Optionally caps the length.
 */
export function slugify(input: string, maxLength?: number): string {
  const slug = input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return maxLength != null ? slug.slice(0, maxLength) : slug;
}

/** Slug with a short random suffix for uniqueness when persistence isn't easy. */
export function slugifyWithSuffix(input: string, fallback = "item"): string {
  const base = slugify(input) || fallback;
  const suffix = Math.random().toString(36).slice(2, 6);
  return `${base}-${suffix}`;
}
