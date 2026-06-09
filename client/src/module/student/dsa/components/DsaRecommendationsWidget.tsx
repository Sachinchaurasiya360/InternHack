import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { Sparkles, Target, ArrowRight } from "lucide-react";
import api from "../../../../lib/axios";
import { queryKeys } from "../../../../lib/query-keys";
import type { DsaRecommendationsResponse } from "../../../../lib/types";

const DIFF_COLOR: Record<string, string> = {
  Easy: "text-green-600 dark:text-green-400 border-green-300 dark:border-green-900/60",
  Medium: "text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-900/60",
  Hard: "text-red-600 dark:text-red-400 border-red-300 dark:border-red-900/60",
};

export function DsaRecommendationsWidget() {
  const { data } = useQuery({
    queryKey: queryKeys.dsa.recommendations(5),
    queryFn: () =>
      api.get<DsaRecommendationsResponse>("/dsa/recommendations?limit=5").then((r) => r.data),
    staleTime: 10 * 60 * 1000,
  });

  if (!data || data.recommendations.length === 0) return null;

  return (
    <div className="border border-stone-200 dark:border-white/10 rounded-md p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-violet-500" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            recommended for you
          </span>
        </div>
        {data.weakTopics.length > 0 && (
          <div className="flex items-center gap-1 text-[10px] font-mono text-stone-400">
            <Target className="w-3 h-3" />
            focus: {data.weakTopics.slice(0, 2).join(", ")}
          </div>
        )}
      </div>
      <div className="space-y-1.5">
        {data.recommendations.map((p) => (
          <Link
            key={p.id}
            to={`/learn/dsa/problem/${p.slug}`}
            className="flex items-center justify-between gap-3 px-3 py-2 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800/40 transition-colors group"
          >
            <span className="text-sm text-stone-700 dark:text-stone-300 truncate group-hover:text-stone-900 dark:group-hover:text-stone-50">
              {p.title}
            </span>
            <span
              className={`shrink-0 text-[10px] font-mono px-2 py-0.5 rounded border ${DIFF_COLOR[p.difficulty] ?? ""}`}
            >
              {p.difficulty}
            </span>
          </Link>
        ))}
      </div>
      {data.totalUnsolved > 5 && (
        <div className="mt-3 text-center">
          <Link
            to="/learn/dsa"
            className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300"
          >
            {data.totalUnsolved} more unsolved <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      )}
    </div>
  );
}
