import { useState } from "react";
import { Link } from "react-router";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { ArrowRight, Bookmark, CheckCircle2, Circle, ExternalLink } from "lucide-react";
import api from "../../../../lib/axios";
import { queryKeys } from "../../../../lib/query-keys";
import type { DsaTopicDetail } from "../../../../lib/types";
import { useAuthStore } from "../../../../lib/auth.store";
import { Callout } from "../../../../components/dsa-theory/primitives";

interface PracticeTabProps {
  topicSlug: string;
  /** Maximum problems to show. Pulls all from the topic; consider extending later if needed. */
  limit?: number;
}

type DiffFilter = "All" | "Easy" | "Medium" | "Hard";

const DIFF_COLOR: Record<string, string> = {
  Easy: "text-emerald-600 dark:text-emerald-400",
  Medium: "text-amber-600 dark:text-amber-400",
  Hard: "text-rose-600 dark:text-rose-400",
};

const DIFF_DOT: Record<string, string> = {
  Easy: "bg-emerald-500",
  Medium: "bg-amber-500",
  Hard: "bg-rose-500",
};

export function PracticeTab({ topicSlug, limit = 50 }: PracticeTabProps) {
  const { user } = useAuthStore();
  const [filter, setFilter] = useState<DiffFilter>("All");
  const diffParam = filter === "All" ? undefined : filter;

  const { data, isLoading, isError } = useQuery({
    queryKey: queryKeys.dsa.topic(topicSlug, 1, { difficulty: diffParam }),
    queryFn: () => {
      const params = new URLSearchParams();
      params.set("page", "1");
      params.set("limit", String(limit));
      if (diffParam) params.set("difficulty", diffParam);
      return api.get<DsaTopicDetail>(`/dsa/topics/${topicSlug}?${params}`).then((r) => r.data);
    },
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-12 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (isError || !data) {
    return (
      <Callout>
        Could not load practice problems for{" "}
        <span className="font-mono text-stone-900 dark:text-stone-50">{topicSlug}</span>. The topic
        may not be in the practice tracker yet, or the request failed.{" "}
        <Link to="/learn/dsa" className="text-lime-700 dark:text-lime-400 hover:underline">
          Open the DSA practice tracker
        </Link>{" "}
        to browse all topics.
      </Callout>
    );
  }

  const counts = {
    total: data.totalProblems,
    solved: data.totalSolved,
    pct: data.totalProblems > 0 ? Math.round((data.totalSolved / data.totalProblems) * 100) : 0,
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header: linked topic + progress */}
      <div className="flex items-end justify-between gap-4 flex-wrap pb-3 border-b border-stone-200 dark:border-white/10">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            / linked topic
          </div>
          <div className="flex items-center gap-2 mt-1">
            <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50">
              {data.name}
            </h3>
            <Link
              to={`/learn/dsa/${data.slug}`}
              className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-lime-700 dark:hover:text-lime-400 transition-colors inline-flex items-center gap-1"
            >
              open in tracker
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
        {user && (
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span className="tabular-nums">
              <span className="text-stone-900 dark:text-stone-50">{counts.solved}</span>
              <span className="text-stone-400 dark:text-stone-600"> / {counts.total} solved</span>
            </span>
            <span className="text-lime-700 dark:text-lime-400 tabular-nums">{counts.pct}%</span>
          </div>
        )}
      </div>

      {/* Difficulty filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mr-1">
          difficulty /
        </span>
        {(["All", "Easy", "Medium", "Hard"] as DiffFilter[]).map((d) => {
          const active = filter === d;
          return (
            <button
              key={d}
              type="button"
              onClick={() => setFilter(d)}
              className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                active
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                  : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
              }`}
            >
              {d}
            </button>
          );
        })}
      </div>

      {/* Problem list */}
      {data.problems.length === 0 ? (
        <div className="py-12 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
          <p className="text-sm text-stone-600 dark:text-stone-400">
            No problems match this filter.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          {data.problems.map((p, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            return (
              <Link
                key={p.id}
                to={`/learn/dsa/problem/${p.slug}`}
                className="group flex items-center gap-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-3 sm:px-4 py-2.5 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
              >
                <span className="text-[10px] font-mono font-bold tabular-nums text-stone-400 dark:text-stone-500 w-6 shrink-0">
                  {num}
                </span>
                {user ? (
                  p.solved ? (
                    <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-stone-300 dark:text-stone-600 shrink-0" />
                  )
                ) : (
                  <span className={`w-2 h-2 rounded-full shrink-0 ${DIFF_DOT[p.difficulty] ?? "bg-stone-400"}`} />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-stone-900 dark:text-stone-50 truncate group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                      {p.title}
                    </span>
                    {p.bookmarked && <Bookmark className="w-3 h-3 text-amber-500 shrink-0" />}
                  </div>
                  {(p.tags.length > 0 || p.companies.length > 0) && (
                    <div className="hidden sm:flex items-center gap-1.5 mt-0.5">
                      {p.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono uppercase tracking-widest text-stone-500"
                        >
                          / {t}
                        </span>
                      ))}
                      {p.tags.length > 3 && (
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                          +{p.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-widest shrink-0 ${DIFF_COLOR[p.difficulty] ?? "text-stone-500"}`}>
                  {p.difficulty}
                </span>
                <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            );
          })}
        </div>
      )}

      <div className="pt-3 border-t border-stone-200 dark:border-white/10">
        <Link
          to={`/learn/dsa/${data.slug}`}
          className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-lime-700 dark:hover:text-lime-400 transition-colors"
        >
          see all {data.totalProblems} problems in the tracker
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
