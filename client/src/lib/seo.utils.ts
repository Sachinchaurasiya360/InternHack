export const SITE_URL = "https://www.internhack.xyz";

export function canonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
