import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Link } from "react-router";
import { ArrowLeft, Puzzle, CheckCircle2, ChevronRight, ChevronLeft, ExternalLink } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaPattern, DsaPaginatedProblems } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";

const DIFF_TEXT: Record<string, string> = {
  Easy: "text-green-600 dark:text-green-400",
  Medium: "text-yellow-600 dark:text-yellow-400",
  Hard: "text-red-600 dark:text-red-400",
};

export default function DsaPatternsPage() {
  const { user } = useAuthStore();
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const { data: patterns, isLoading } = useQuery({
    queryKey: queryKeys.dsa.patterns(),
    queryFn: () => api.get<DsaPattern[]>("/dsa/patterns").then((r) => r.data),
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const { data: problemData, isLoading: problemsLoading } = useQuery({
    queryKey: queryKeys.dsa.pattern(selectedPattern!, page),
    queryFn: () => api.get<DsaPaginatedProblems>(`/dsa/patterns/${selectedPattern}?page=${page}&limit=50`).then((r) => r.data),
    enabled: !!selectedPattern,
    placeholderData: keepPreviousData,
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const formatLabel = (s: string) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="max-w-5xl mx-auto">
      <SEO
        title="DSA Patterns - Algorithm Problem Patterns"
        description="Browse DSA problems organized by algorithm patterns like sliding window, two pointers, BFS, DFS, and dynamic programming."
        keywords="DSA patterns, algorithm patterns, sliding window, two pointers, BFS, DFS"
        canonicalUrl={canonicalUrl("/learn/dsa/patterns")}
      />

      <div className="mb-6">
        <Link to="/learn/dsa" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-3">
          <ArrowLeft className="w-4 h-4" />
          Back to DSA
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center">
            <Puzzle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pattern-based Practice</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Master common algorithmic patterns</p>
          </div>
        </div>
      </div>

      {!selectedPattern ? (
        isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {patterns?.map((pattern) => (
              <button
                key={pattern.name}
                onClick={() => { setSelectedPattern(pattern.name); setPage(1); }}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-sm transition-all text-left group"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {formatLabel(pattern.name)}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {pattern.count} problems
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
              </button>
            ))}
          </div>
        )
      ) : (
        <div>
          <button
            onClick={() => { setSelectedPattern(null); setPage(1); }}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            All Patterns
          </button>

          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            {formatLabel(selectedPattern)}
            {!problemsLoading && <span className="text-gray-400 dark:text-gray-500 font-normal text-base ml-2">({problemData?.total ?? 0} problems)</span>}
          </h2>

          {problemsLoading && !problemData ? (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3">
                  <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse w-3/4" />
                    <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse w-1/4" />
                  </div>
                  <div className="h-4 w-12 bg-gray-100 dark:bg-gray-800 rounded animate-pulse shrink-0" />
                </div>
              ))}
            </div>
          ) : (
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
            {problemData?.problems.map((p) => (
              <div key={p.id} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                {user && (
                  <div className="shrink-0">
                    {p.solved ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                    )}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <Link
                    to={`/learn/dsa/problem/${p.slug}`}
                    className={`text-sm font-medium no-underline hover:underline ${p.solved ? "text-gray-400 dark:text-gray-500 line-through" : "text-gray-900 dark:text-white"}`}
                  >
                    {p.title}
                  </Link>
                  <div className="flex items-center gap-2 mt-0.5">
                    {p.acceptanceRate && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        {p.acceptanceRate}
                      </span>
                    )}
                    {p.companies.slice(0, 2).map((c) => (
                      <span key={c} className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 capitalize">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <span className={`text-xs font-semibold shrink-0 ${DIFF_TEXT[p.difficulty] || "text-gray-500"}`}>
                  {p.difficulty}
                </span>

                {p.leetcodeUrl && (
                  <a href={p.leetcodeUrl} target="_blank" rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shrink-0 no-underline"
                    title="LeetCode"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}

            {problemData?.problems.length === 0 && (
              <div className="text-center py-12 text-gray-400 dark:text-gray-500">
                No problems found for this pattern
              </div>
            )}
          </div>
          )}

          {/* Pagination */}
          {problemData && problemData.totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Page {page} of {problemData.totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(problemData.totalPages, p + 1))}
                disabled={page >= problemData.totalPages}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
