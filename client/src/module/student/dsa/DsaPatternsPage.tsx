import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Puzzle, CheckCircle2, ChevronRight, ChevronLeft, ExternalLink,
  ArrowRight, Search, BookOpen,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaPattern, DsaPaginatedProblems } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { Button } from "../../../components/ui/button";

const DIFF_COLOR: Record<string, string> = {
  Easy: "text-emerald-600 dark:text-emerald-400",
  Medium: "text-amber-600 dark:text-amber-400",
  Hard: "text-rose-600 dark:text-rose-400",
};

export default function DsaPatternsPage() {
  const { user } = useAuthStore();
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [patternSearch, setPatternSearch] = useState("");

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

  const filteredPatterns = patterns?.filter((p) =>
    !patternSearch || p.name.toLowerCase().includes(patternSearch.toLowerCase())
  );

  const totalProblems = patterns?.reduce((s, p) => s + p.count, 0) ?? 0;
  const totalPatterns = patterns?.length ?? 0;

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title="DSA Patterns, Algorithm Problem Patterns"
        description="Browse DSA problems organized by algorithm patterns like sliding window, two pointers, BFS, DFS, and dynamic programming."
        keywords="DSA patterns, algorithm patterns, sliding window, two pointers, BFS, DFS"
        canonicalUrl={canonicalUrl("/learn/dsa/patterns")}
      />

      <div className="max-w-4xl mx-auto px-3 sm:px-8 py-8">
        {!selectedPattern ? (
          <>
            {/* Editorial header */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  dsa / patterns
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div className="min-w-0 flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
                    Master the patterns.
                  </h1>
                  <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                    Algorithmic recipes that show up across problems. Sliding window, two pointers, BFS, DFS, DP.
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap">
                  <span>
                    <span className="text-stone-900 dark:text-stone-50 tabular-nums">{totalPatterns}</span>
                    <span className="text-stone-400 dark:text-stone-600"> patterns</span>
                  </span>
                  <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                  <span>
                    <span className="text-stone-900 dark:text-stone-50 tabular-nums">{totalProblems}</span>
                    <span className="text-stone-400 dark:text-stone-600"> problems</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="grid grid-cols-2 gap-0 border-t border-l border-stone-200 dark:border-white/10 mb-6"
            >
              {[
                { icon: Puzzle, value: totalPatterns, label: "patterns" },
                { icon: BookOpen, value: totalProblems, label: "problems" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-start gap-3 p-3 sm:p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10"
                >
                  <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                    <stat.icon className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 truncate">
                      / {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative mb-6"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search patterns..."
                value={patternSearch}
                onChange={(e) => setPatternSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
              />
            </motion.div>

            {/* Section header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="h-1 w-1 bg-lime-400"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                patterns / {filteredPatterns?.length ?? 0}
              </span>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-20 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md animate-pulse" />
                ))}
              </div>
            ) : filteredPatterns && filteredPatterns.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredPatterns.map((pattern, idx) => {
                  const num = String(idx + 1).padStart(2, "0");
                  return (
                    <motion.button
                      key={pattern.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(idx, 10) * 0.03 }}
                      onClick={() => { setSelectedPattern(pattern.name); setPage(1); }}
                      className="group flex items-center gap-3 sm:gap-4 bg-white dark:bg-stone-900 px-3 sm:px-5 py-3 sm:py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors text-left cursor-pointer"
                    >
                      <div className="flex flex-col items-center gap-1 shrink-0 w-10">
                        <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center">
                          <Puzzle className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                          / {num}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                          {formatLabel(pattern.name)}
                        </h3>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-1 tabular-nums">
                          {pattern.count} problems
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </motion.button>
                  );
                })}
              </div>
            ) : (
              <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
                <Puzzle className="w-8 h-8 text-stone-400 mx-auto mb-3" />
                <p className="text-sm text-stone-600 dark:text-stone-400">No patterns found.</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-2">
                  try a different keyword
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Editorial header for pattern detail */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  dsa / patterns
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div className="min-w-0 flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5 wrap-break-word">
                    {formatLabel(selectedPattern)}
                  </h1>
                  {!problemsLoading && (
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      <span className="tabular-nums">{problemData?.total ?? 0}</span> problems in this pattern.
                    </p>
                  )}
                </div>
                <button
                  onClick={() => { setSelectedPattern(null); setPage(1); }}
                  className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors cursor-pointer shrink-0"
                >
                  all patterns /
                </button>
              </div>
            </motion.div>

            {problemsLoading && !problemData ? (
              <div className="space-y-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-16 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {problemData?.problems.map((p, idx) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(idx, 10) * 0.02 }}
                    className="flex items-center gap-2 sm:gap-3 bg-white dark:bg-stone-900 px-3 sm:px-5 py-3 sm:py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors"
                  >
                    {user && (
                      <div className="shrink-0">
                        {p.solved ? (
                          <CheckCircle2 className="w-5 h-5 text-lime-500" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-stone-300 dark:border-stone-600" />
                        )}
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/learn/dsa/problem/${p.slug}`}
                        className={`text-sm font-bold tracking-tight no-underline hover:underline wrap-break-word ${p.solved ? "text-stone-400 dark:text-stone-500 line-through" : "text-stone-900 dark:text-stone-50"}`}
                      >
                        {p.title}
                      </Link>
                      <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                        <span className={`text-[10px] font-mono uppercase tracking-widest ${DIFF_COLOR[p.difficulty] || "text-stone-500"}`}>
                          / {p.difficulty.toLowerCase()}
                        </span>
                        {p.acceptanceRate && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 tabular-nums">
                            {p.acceptanceRate}
                          </span>
                        )}
                        {p.companies.slice(0, 2).map((c) => (
                          <span key={c} className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 capitalize">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {p.leetcodeUrl && (
                      <a
                        href={p.leetcodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-200 dark:hover:bg-white/10 transition-colors shrink-0 no-underline"
                        title="LeetCode"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </motion.div>
                ))}

                {problemData?.problems.length === 0 && (
                  <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
                    <Puzzle className="w-8 h-8 text-stone-400 mx-auto mb-3" />
                    <p className="text-sm text-stone-600 dark:text-stone-400">No problems found for this pattern.</p>
                  </div>
                )}
              </div>
            )}

            {problemData && problemData.totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="rounded-md border border-stone-300 dark:border-white/10"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Prev
                </Button>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 tabular-nums">
                  page {page} / {problemData.totalPages}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPage((p) => Math.min(problemData.totalPages, p + 1))}
                  disabled={page >= problemData.totalPages}
                  className="rounded-md border border-stone-300 dark:border-white/10"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
