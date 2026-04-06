import { useEffect, useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  CheckCircle2, Building2, Puzzle, Bookmark, ArrowRight,
  Lock, Flame, Target, Zap, Search,
} from "lucide-react";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaTopicsResponse, DsaProgress } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { LoginGate } from "../../../components/LoginGate";
import { CircularProgress } from "../../../components/ui/CircularProgress";

const FREE_LIMIT = 5;
const TOPICS_PER_PAGE = 20;

type DifficultyTab = "all" | "easy" | "medium-hard";

export default function DsaTopicsPage() {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<DifficultyTab>("all");
  const [showGate, setShowGate] = useState(false);
  const [page, setPage] = useState(1);
  const [topicSearch, setTopicSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(topicSearch.trim());
      setPage(1);
    }, 300);
    return () => clearTimeout(t);
  }, [topicSearch]);

  const difficultyParam =
    activeTab === "easy" ? "Easy" :
    activeTab === "medium-hard" ? "Medium,Hard" :
    undefined;

  const filterKey = `${difficultyParam ?? ""}|${debouncedSearch}`;
  const { data: topicsData, isLoading } = useQuery({
    queryKey: queryKeys.dsa.topics(filterKey),
    queryFn: () => {
      const qs = new URLSearchParams();
      if (difficultyParam) qs.set("difficulty", difficultyParam);
      if (debouncedSearch) qs.set("search", debouncedSearch);
      const params = qs.toString() ? `?${qs.toString()}` : "";
      return api.get<DsaTopicsResponse>(`/dsa/topics${params}`).then((r) => r.data);
    },
    placeholderData: keepPreviousData,
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });
  const topics = topicsData?.topics;
  const uniqueProblems = topicsData?.uniqueProblems ?? 0;

  const { data: progress } = useQuery({
    queryKey: queryKeys.dsa.progress(),
    queryFn: () => api.get<DsaProgress>("/dsa/my-progress").then((r) => r.data),
    enabled: !!user,
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const totalProblems = uniqueProblems;
  // Clamp solved to [0, totalProblems] so transient count mismatches between
  // per-topic solvedCount (which may double-count problems tagged with multiple topics)
  // and uniqueProblems can never produce a >100% or negative overall percentage.
  const rawSolved = topics?.reduce((s, t) => s + t.solvedCount, 0) ?? 0;
  const totalSolved = Math.max(0, Math.min(rawSolved, totalProblems));
  const overallPct = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;
  const allTopicsCount = topics?.length ?? 0;

  const totalTopics = topics?.length ?? 0;
  const totalPages = Math.ceil(totalTopics / TOPICS_PER_PAGE);
  const paginatedTopics = topics?.slice((page - 1) * TOPICS_PER_PAGE, page * TOPICS_PER_PAGE);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="relative pb-12">
      <SEO
        title="DSA Practice - Data Structures & Algorithms"
        description="Practice data structures and algorithms problems organized by topic. Track your progress across arrays, trees, graphs, dynamic programming, and more."
        keywords="DSA practice, data structures, algorithms, leetcode, coding interview, arrays, trees, graphs, dynamic programming"
        canonicalUrl={canonicalUrl("/learn/dsa")}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-indigo-100 to-cyan-100 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-violet-100 dark:from-slate-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-4 sm:p-8 mb-8 mt-2"
      >
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Progress ring */}
          {user && (
            <CircularProgress progress={overallPct} size={80} />
          )}

          <div className="flex-1 text-center sm:text-left">
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-1">
              DSA Practice
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {totalProblems.toLocaleString()} problems across {allTopicsCount} topics &middot; Curated by FAANG engineers
              {user && totalSolved > 0 && (
                <span className="text-emerald-600 dark:text-emerald-400 font-medium"> &middot; {totalSolved} solved</span>
              )}
            </p>
          </div>

          {/* Quick nav */}
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
            {[
              { to: "/learn/dsa/companies", icon: Building2, label: "Companies", color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20" },
              { to: "/learn/dsa/patterns", icon: Puzzle, label: "Patterns", color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20" },
              ...(user ? [{ to: "/learn/dsa/bookmarks", icon: Bookmark, label: "Saved", color: "text-amber-500 bg-amber-50 dark:bg-amber-900/20" }] : []),
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex flex-col items-center gap-1 px-3 py-2 sm:px-4 sm:py-3 rounded-xl ${link.color} hover:opacity-80 transition-opacity no-underline`}
              >
                <link.icon className="w-5 h-5" />
                <span className="text-[10px] font-semibold uppercase tracking-wide opacity-70">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Difficulty breakdown bar */}
        {user && progress && (
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {([
                { key: "easy" as const, label: "Easy", icon: Zap, color: "text-green-600 dark:text-green-400", bg: "bg-green-500" },
                { key: "medium" as const, label: "Medium", icon: Target, color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-500" },
                { key: "hard" as const, label: "Hard", icon: Flame, color: "text-red-600 dark:text-red-400", bg: "bg-red-500" },
              ]).map((d) => {
                const stat = progress.byDifficulty[d.key];
                const dPct = stat.total > 0 ? Math.round((stat.solved / stat.total) * 100) : 0;
                return (
                  <div key={d.key} className="text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <d.icon className={`w-3.5 h-3.5 ${d.color}`} />
                      <span className={`text-xs font-bold uppercase tracking-wider ${d.color}`}>{d.label}</span>
                    </div>
                    <p className="font-display text-lg font-bold text-gray-950 dark:text-white">
                      {stat.solved}<span className="text-gray-300 dark:text-gray-600 font-normal">/{stat.total}</span>
                    </p>
                    <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 rounded-full mt-2 overflow-hidden">
                      <div className={`h-full rounded-full ${d.bg}`} style={{ width: `${dPct}%`, transition: "width 0.6s ease" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>

      {/* Difficulty Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex items-center gap-1 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-1.5 mb-6"
      >
        {([
          { key: "all" as DifficultyTab, label: "All Topics" },
          { key: "easy" as DifficultyTab, label: "Easy" },
          { key: "medium-hard" as DifficultyTab, label: "Medium & Hard" },
        ]).map((tab) => (
          <button
            key={tab.key}
            onClick={() => { setActiveTab(tab.key); setPage(1); }}
            className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-gray-950 text-white dark:bg-white dark:text-gray-950 shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Search */}
      <div className="relative max-w-sm mb-6">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          placeholder="Search topics..."
          value={topicSearch}
          onChange={(e) => setTopicSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950/10 dark:focus:ring-white/10 transition-all"
        />
      </div>

      {/* Topic List */}
      <div className="space-y-2.5">
        {paginatedTopics?.map((topic, idx) => {
          const pct = topic.problemCount > 0
            ? Math.min(100, Math.max(0, Math.round((topic.solvedCount / topic.problemCount) * 100)))
            : 0;
          const isComplete = pct === 100;
          const isLocked = topic.orderIndex >= FREE_LIMIT && !user;
          const globalIdx = (page - 1) * TOPICS_PER_PAGE + idx + 1;

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(idx, 10) * 0.03 }}
            >
              {isLocked ? (
                <button
                  onClick={() => setShowGate(true)}
                  className="w-full group flex items-center gap-4 bg-white dark:bg-gray-900 px-5 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 opacity-50 hover:opacity-70 transition-all duration-300 text-left cursor-pointer"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-950 dark:text-white truncate">{topic.name}</h3>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{topic.problemCount} problems</p>
                  </div>
                  <Lock className="w-4 h-4 text-gray-300 dark:text-gray-600 shrink-0" />
                </button>
              ) : (
                <Link
                  to={`/learn/dsa/${topic.slug}`}
                  className="group flex items-center gap-4 bg-white dark:bg-gray-900 px-5 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-gray-200/40 dark:hover:shadow-gray-900/40 transition-all duration-300 no-underline"
                >
                  {/* Progress or number */}
                  {user ? (
                    <CircularProgress progress={pct} size={44} />
                  ) : (
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-400 dark:text-gray-500">{globalIdx}</span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-sm font-semibold text-gray-950 dark:text-white truncate">
                        {topic.name}
                      </h3>
                      {isComplete && user && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      )}
                    </div>

                    {/* Progress bar (for logged in users) */}
                    {user ? (
                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.6, delay: Math.min(idx, 10) * 0.03 }}
                            className={`h-full rounded-full ${
                              isComplete ? "bg-emerald-500" : pct > 0 ? "bg-indigo-500" : "bg-transparent"
                            }`}
                          />
                        </div>
                        <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 shrink-0 tabular-nums">
                          {topic.solvedCount}/{topic.problemCount}
                        </span>
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{topic.problemCount} problems</p>
                    )}
                  </div>

                  <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-400 dark:group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              )}
            </motion.div>
          );
        })}

        {paginatedTopics?.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
          >
            <Target className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white mb-2">No topics found</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 max-w-sm mx-auto">
              No topics available for this difficulty level.
            </p>
          </motion.div>
        )}
      </div>

      <PaginationControls
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      <LoginGate open={showGate} onClose={() => setShowGate(false)} />
    </div>
  );
}
