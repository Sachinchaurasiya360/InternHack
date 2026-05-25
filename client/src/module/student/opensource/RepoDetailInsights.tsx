import { useQuery } from "@tanstack/react-query";
import { Sparkles, CircleDot, ExternalLink, AlertCircle, Loader2 } from "lucide-react";
import api from "../../../lib/axios";

interface Issue {
  title: string;
  url: string;
  number: number;
  labels: string[];
}

interface RepoInsights {
  issues: Issue[];
  recommendation: string;
}

export function RepoDetailInsights({ repoId }: { repoId: number }) {
  const { data, isLoading, isError } = useQuery<RepoInsights>({
    queryKey: ["opensource", "insights", repoId],
    queryFn: async () => {
      const res = await api.get(`/opensource/${repoId}/insights`);
      return res.data;
    },
    staleTime: 5 * 60 * 1000, // cache for 5 mins
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {/* Loading issues */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <div className="h-1 w-1 bg-lime-400"></div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 inline-flex items-center gap-1.5">
              <CircleDot className="w-3 h-3" />
              live good first issues
            </p>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="h-12 bg-stone-200 dark:bg-white/5 rounded-md w-full"></div>
          </div>
        </div>

        {/* Loading AI Recommendation */}
        <div className="p-4 rounded-md bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-lime-500 animate-pulse" />
            <span className="text-xs font-bold text-stone-900 dark:text-stone-50">AI Assistant analyzing repo...</span>
          </div>
          <div className="animate-pulse space-y-2">
            <div className="h-3 bg-stone-200 dark:bg-white/10 rounded-md w-3/4"></div>
            <div className="h-3 bg-stone-200 dark:bg-white/10 rounded-md w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-md flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
        <p className="text-sm text-red-700 dark:text-red-400">Could not load insights. Try again later.</p>
      </div>
    );
  }

  const { issues, recommendation } = data;

  return (
    <div className="space-y-5">
      {/* Live Issues */}
      <div>
        <div className="flex items-center gap-1.5 mb-2">
          <div className="h-1 w-1 bg-lime-400"></div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 inline-flex items-center gap-1.5">
            <CircleDot className="w-3 h-3" />
            live good first issues
          </p>
        </div>
        {issues.length > 0 ? (
          <div className="space-y-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
            {issues.map((issue) => (
              <a
                key={issue.number}
                href={issue.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-md bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-white/10 hover:border-lime-400/50 transition-colors no-underline group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 leading-snug group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                      {issue.title}
                    </h4>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 flex items-center gap-1.5">
                      <span className="font-mono">#{issue.number}</span>
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500 shrink-0 group-hover:text-lime-500" />
                </div>
                {issue.labels.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {issue.labels.slice(0, 3).map((l) => (
                      <span key={l} className="px-1.5 py-0.5 rounded-sm bg-stone-200 dark:bg-white/10 text-[10px] font-mono text-stone-600 dark:text-stone-300">
                        {l}
                      </span>
                    ))}
                    {issue.labels.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-sm bg-stone-200 dark:bg-white/10 text-[10px] font-mono text-stone-600 dark:text-stone-300">
                        +{issue.labels.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </a>
            ))}
          </div>
        ) : (
          <p className="text-sm text-stone-600 dark:text-stone-400 italic bg-stone-50 dark:bg-white/5 p-3 rounded-md">
            No active "good first issues" found via GitHub API right now.
          </p>
        )}
      </div>

      {/* AI Recommendation */}
      {recommendation && (
        <div className="p-4 rounded-md bg-gradient-to-br from-lime-50 to-emerald-50 dark:from-lime-950/20 dark:to-emerald-950/20 border border-lime-200 dark:border-lime-900/30">
          <div className="flex items-center gap-2 mb-2 border-b border-lime-200/50 dark:border-lime-900/50 pb-2">
            <Sparkles className="w-4 h-4 text-lime-600 dark:text-lime-400" />
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50">AI Recommendation</h4>
          </div>
          <div className="prose prose-sm prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300">
            {recommendation.split('\n').map((para, i) => (
              <p key={i} className="mb-2 last:mb-0 text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
