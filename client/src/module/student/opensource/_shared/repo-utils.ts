import type { OpenSourceRepo } from "../../../../lib/types";

export function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}

export function difficultyBadge(d: OpenSourceRepo["difficulty"]) {
  const map = {
    BEGINNER: {
      label: "Beginner",
      cls: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:ring-emerald-700",
    },
    INTERMEDIATE: {
      label: "Intermediate",
      cls: "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:ring-amber-700",
    },
    ADVANCED: {
      label: "Advanced",
      cls: "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:ring-rose-700",
    },
  };
  return map[d];
}

// Parses "https://github.com/<owner>/<repo>" (trailing slash, .git suffix, or
// extra path segments allowed). Returns null if the input isn't a valid
// GitHub repo URL. Enforces https so we don't accept arbitrary URLs.
export function parseGithubRepoUrl(raw: string): { owner: string; name: string } | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;
  if (url.hostname !== "github.com" && url.hostname !== "www.github.com") return null;
  const segments = url.pathname.split("/").filter(Boolean);
  if (segments.length < 2) return null;
  const [owner, rawName] = segments;
  const name = rawName.replace(/\.git$/i, "");
  const nameRe = /^[A-Za-z0-9._-]+$/;
  if (!nameRe.test(owner) || !nameRe.test(name)) return null;
  return { owner, name };
}
