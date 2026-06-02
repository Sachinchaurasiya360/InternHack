import { useQuery } from "@tanstack/react-query";
import { BookOpen, ExternalLink, Github, Loader2, Star, Code2 } from "lucide-react";
import api from "../../../lib/axios";
import { Button } from "../../../components/ui/button";

interface GitHubStats {
  username: string;
  profileUrl: string;
  publicRepos: number;
  totalStars: number;
  topLanguages: { name: string; count: number }[];
}

function getGitHubUsername(url?: string | null) {
  const value = url?.trim();
  if (!value) return "";

  try {
    const parsed = new URL(value.startsWith("http") ? value : `https://${value}`);
    if (!parsed.hostname.toLowerCase().includes("github.com")) return "";
    return parsed.pathname.split("/").filter(Boolean)[0] ?? "";
  } catch {
    return value.replace(/^github\.com\//i, "").split("/")[0] ?? "";
  }
}

function formatCount(value: number) {
  return new Intl.NumberFormat("en", { notation: value >= 1000 ? "compact" : "standard" }).format(value);
}

export default function GitHubStatsCard({
  githubUrl,
  compact = false,
}: {
  githubUrl?: string | null;
  compact?: boolean;
}) {
  const username = getGitHubUsername(githubUrl);
  const { data, isLoading, error } = useQuery({
    queryKey: ["github-stats", username],
    queryFn: () =>
      api
        .get<{ stats: GitHubStats }>("/auth/github-stats", { params: { username } })
        .then((res) => res.data.stats),
    enabled: !!username,
    staleTime: 60 * 60 * 1000,
  });

  if (!username) {
    return (
      <div className={`${compact ? "rounded-2xl border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-5 border-dashed border" : "rounded-md border border-dashed border-stone-300 dark:border-white/15 bg-white dark:bg-stone-900 p-5"}`}>
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 bg-stone-100 dark:bg-stone-800 text-stone-500">
            <Github className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-50">GitHub stats</h3>
            <p className="text-xs mt-1 text-stone-500">Link a GitHub profile to show repos, stars, and top languages.</p>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`${compact ? "rounded-2xl border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 border p-5" : "rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-5"}`}>
        <div className="flex items-center gap-2 text-sm text-stone-500">
          <Loader2 className="w-4 h-4 animate-spin" />
          Loading GitHub stats...
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className={`${compact ? "rounded-2xl border border-red-100 dark:border-red-950 bg-red-50/60 dark:bg-red-950/25 p-5" : "rounded-md border border-red-200 dark:border-red-900/40 bg-red-50/60 dark:bg-red-950/20 p-5"}`}>
        <div className="flex items-start gap-3">
          <Github className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-red-700 dark:text-red-300">GitHub stats unavailable</h3>
            <p className="text-xs text-red-600/80 dark:text-red-300/80 mt-1">Check that the linked GitHub profile is public and valid.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${compact ? "rounded-2xl border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900" : "rounded-md border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900"} border p-5`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <Github className="w-3.5 h-3.5" />
            GitHub stats
          </p>
          <h3 className="mt-1 text-sm font-bold truncate text-stone-900 dark:text-stone-50">@{data.username}</h3>
        </div>
        <Button asChild variant="foreground" mode="link" size="sm" className="shrink-0">
          <a href={data.profileUrl} target="_blank" rel="noopener noreferrer">
            Profile
            <ExternalLink className="w-3 h-3" />
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className={`rounded-xl border ${compact ? "bg-stone-50 dark:bg-stone-950/60 border-stone-100 dark:border-white/10" : "bg-stone-50 dark:bg-stone-950/60 border-stone-100 dark:border-white/10"} p-3`}>
          <div className="flex items-center gap-2 mb-2 text-stone-500">
            <BookOpen className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Repos</span>
          </div>
          <p className="text-xl font-bold tabular-nums text-stone-900 dark:text-stone-50">{formatCount(data.publicRepos)}</p>
        </div>
        <div className={`rounded-xl border ${compact ? "bg-stone-50 dark:bg-stone-950/60 border-stone-100 dark:border-white/10" : "bg-stone-50 dark:bg-stone-950/60 border-stone-100 dark:border-white/10"} p-3`}>
          <div className="flex items-center gap-2 mb-2 text-stone-500">
            <Star className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Stars</span>
          </div>
          <p className="text-xl font-bold tabular-nums text-stone-900 dark:text-stone-50">{formatCount(data.totalStars)}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest mb-2 text-stone-500">
          <Code2 className="w-3.5 h-3.5" />
          Top languages
        </div>
        {data.topLanguages.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {data.topLanguages.map((language) => (
              <span
                key={language.name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-lime-50 dark:bg-lime-950/25 text-lime-700 dark:text-lime-300 text-xs font-medium border border-lime-100 dark:border-lime-900/40"
              >
                {language.name}
                <span className="text-[10px] opacity-70">{language.count}</span>
              </span>
            ))}
          </div>
        ) : (
          <p className="text-xs text-stone-500">No repository language data found yet.</p>
        )}
      </div>
    </div>
  );
}
