import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  List, CheckCircle2, ChevronRight, ChevronLeft, ExternalLink,
  ArrowRight, Clock, BookOpen,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaList, DsaPaginatedProblems } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { Button } from "../../../components/ui/button";
import { DIFF_COLOR } from "../../../lib/difficulty-colors";

const LIST_ICONS: Record<string, string> = {
  blind75: "B",
  neetcode150: "N",
  internhack100: "H",
  faang100: "F",
};

export default function DsaListsPage() {
  const { user } = useAuthStore();
  const [selectedList, setSelectedList] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const { data: lists, isLoading } = useQuery({
    queryKey: queryKeys.dsa.lists(),
    queryFn: () => api.get<DsaList[]>("/dsa/lists").then((r) => r.data),
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const { data: problemData, isLoading: problemsLoading } = useQuery({
    queryKey: queryKeys.dsa.list(selectedList!, page),
    queryFn: () => api.get<DsaPaginatedProblems>(`/dsa/lists/${selectedList}?page=${page}&limit=50`).then((r) => r.data),
    enabled: !!selectedList,
    placeholderData: keepPreviousData,
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const totalProblems = lists?.reduce((s, l) => s + l.total, 0) ?? 0;
  const totalLists = lists?.length ?? 0;

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title="DSA Curated Problem Lists — Blind 75, NeetCode 150"
        description="Browse curated DSA problem lists including Blind 75, NeetCode 150, InternHack 100, and FAANG Hot 100 for interview prep."
        keywords="Blind 75, NeetCode 150, DSA curated lists, FAANG preparation, DSA problems"
        canonicalUrl={canonicalUrl("/learn/dsa/lists")}
      />

      <div className="max-w-4xl mx-auto px-3 sm:px-8 py-8">
        {!selectedList ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  dsa / lists
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div className="min-w-0 flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
                    Curated problem lists.
                  </h1>
                  <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                    Industry-standard DSA lists — Blind 75, NeetCode 150, and more. Track progress across every list.
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap">
                  <span>
                    <span className="text-stone-900 dark:text-stone-50 tabular-nums">{totalLists}</span>
                    <span className="text-stone-400 dark:text-stone-600"> lists</span>
                  </span>
                  <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                  <span>
                    <span className="text-stone-900 dark:text-stone-50 tabular-nums">{totalProblems}</span>
                    <span className="text-stone-400 dark:text-stone-600"> problems</span>
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="grid grid-cols-2 gap-0 border-t border-l border-stone-200 dark:border-white/10 mb-6"
            >
              {[
                { icon: List, value: totalLists, label: "curated lists" },
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

            <div className="flex items-center gap-2 mb-3">
              <div className="h-1 w-1 bg-lime-400"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                lists / {lists?.length ?? 0}
              </span>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-28 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md animate-pulse" />
                ))}
              </div>
            ) : lists && lists.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {lists.map((list, idx) => {
                  const pct = list.total > 0 ? Math.round((list.solved / list.total) * 100) : 0;
                  return (
                    <motion.button
                      key={list.slug}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(idx, 10) * 0.03 }}
                      onClick={() => { setSelectedList(list.slug); setPage(1); }}
                      className="group flex items-start gap-3 sm:gap-4 bg-white dark:bg-stone-900 px-3 sm:px-5 py-4 sm:py-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors text-left cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0 text-sm font-bold text-lime-600 dark:text-lime-400">
                        {LIST_ICONS[list.slug] || "L"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                          {list.title}
                        </h3>
                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                          {list.description}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 tabular-nums">
                            {list.total} problems
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex items-center gap-1 tabular-nums">
                            <Clock className="w-3 h-3" />
                            ~{list.estimatedHours}h
                          </span>
                        </div>
                        {user && list.total > 0 && (
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex-1 h-1.5 bg-stone-200 dark:bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-lime-400 rounded-full transition-all duration-500"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className="text-[10px] font-mono tabular-nums text-stone-500 dark:text-stone-400">{pct}%</span>
                          </div>
                        )}
                      </div>
                      {(!user || list.solved < list.total) && (
                        <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-3" />
                      )}
                      {user && list.solved === list.total && list.total > 0 && (
                        <CheckCircle2 className="w-5 h-5 text-lime-500 shrink-0 mt-3" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            ) : (
              <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
                <List className="w-8 h-8 text-stone-400 mx-auto mb-3" />
                <p className="text-sm text-stone-600 dark:text-stone-400">No lists found.</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-2">
                  lists will appear once problems are tagged
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  dsa / lists
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div className="min-w-0 flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5 capitalize">
                    {selectedList.replace(/(\d)/, " $1").replace(/-/g, " ")}
                  </h1>
                  {!problemsLoading && (
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      <span className="tabular-nums">{problemData?.total ?? 0}</span> problems in this list.
                    </p>
                  )}
                </div>
                <button
                  onClick={() => { setSelectedList(null); setPage(1); }}
                  className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors cursor-pointer shrink-0"
                >
                  all lists /
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
                        {p.sheets.filter((s) => s !== selectedList).slice(0, 2).map((s) => (
                          <span key={s} className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400">
                            Part of {s.replace(/(\d)/, " $1").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                          </span>
                        ))}
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
                    <List className="w-8 h-8 text-stone-400 mx-auto mb-3" />
                    <p className="text-sm text-stone-600 dark:text-stone-400">No problems found for this list.</p>
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
