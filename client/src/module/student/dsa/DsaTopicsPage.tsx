import { useEffect, useState } from "react";
import { useQuery, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  CheckCircle2, Building2, Puzzle, Bookmark, ArrowRight,
  Lock, Search, BookOpen, TrendingUp, Target, Download,
} from "lucide-react";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaTopicsResponse, DsaProgress, LeetcodeImportStatus } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { LoginGate } from "../../../components/LoginGate";
import { LeetCodeSync } from "./components/LeetCodeSync";
import { LeetcodeImportModal } from "./components/LeetcodeImportModal";
import { DsaHeatmap } from "./components/DsaHeatmap";

const FREE_LIMIT = 5;
const TOPICS_PER_PAGE = 20;
const IMPORT_ENABLED = import.meta.env["VITE_LEETCODE_IMPORT_ENABLED"] !== "false";

type DifficultyTab = "all" | "easy" | "medium-hard";

function CircularProgress({ progress }: { progress: number }) {
  const r = 20;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  return (
    <div className="relative w-11 h-11 shrink-0">
      <svg className="w-11 h-11 -rotate-90" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={r} fill="none" className="stroke-stone-200 dark:stroke-white/10" strokeWidth="3" />
        <circle
          cx="24" cy="24" r={r}
          fill="none"
          className={progress === 100 ? "stroke-lime-400" : "stroke-stone-900 dark:stroke-stone-50"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold tabular-nums text-stone-900 dark:text-stone-50">
        {progress}%
      </span>
    </div>
  );
}

export default function DsaTopicsPage() {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState<DifficultyTab>("all");
  const [showGate, setShowGate] = useState(false);
  const [showImport, setShowImport] = useState(false);
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

  const { data: importStatus } = useQuery({
    queryKey: queryKeys.dsa.importStatus(),
    queryFn: () => api.get<LeetcodeImportStatus>("/dsa/import/status").then((r) => r.data),
    enabled: !!user && IMPORT_ENABLED,
    staleTime: 5 * 60 * 1000,
  });

  const totalProblems = uniqueProblems;
  const rawSolved = topics?.reduce((s, t) => s + t.solvedCount, 0) ?? 0;
  const totalSolved = Math.max(0, Math.min(rawSolved, totalProblems));
  const overallPct = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;
  const allTopicsCount = topics?.length ?? 0;

  const totalTopics = topics?.length ?? 0;
  const totalPages = Math.ceil(totalTopics / TOPICS_PER_PAGE);
  const paginatedTopics = topics?.slice((page - 1) * TOPICS_PER_PAGE, page * TOPICS_PER_PAGE);

  if (isLoading) return <LoadingScreen />;

  const tabs: { key: DifficultyTab; label: string }[] = [
    { key: "all", label: "All" },
    { key: "easy", label: "Easy" },
    { key: "medium-hard", label: "Medium & Hard" },
  ];

  const quickLinks = [
    { to: "/learn/dsa/companies", icon: Building2, label: "companies" },
    { to: "/learn/dsa/patterns", icon: Puzzle, label: "patterns" },
    ...(user ? [{ to: "/learn/dsa/bookmarks", icon: Bookmark, label: "bookmarks" }] : []),
  ];

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title="DSA Practice, Data Structures & Algorithms"
        description="Practice data structures and algorithms problems organized by topic. Track your progress across arrays, trees, graphs, dynamic programming, and more."
        keywords="DSA practice, data structures, algorithms, leetcode, coding interview, arrays, trees, graphs, dynamic programming"
        canonicalUrl={canonicalUrl("/learn/dsa")}
      />

      <div className="max-w-6xl mx-auto px-3 sm:px-8 py-8">
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
              learn / dsa
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
                Solve the pattern.
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Data structures and algorithms, organized by topic. Curated for interviews, tracked by you.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                <span>
                  <span className="text-stone-900 dark:text-stone-50 tabular-nums">{totalSolved}</span>
                  <span className="text-stone-400 dark:text-stone-600"> / {totalProblems.toLocaleString()} solved</span>
                </span>
                <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                <span className="text-lime-600 dark:text-lime-400 tabular-nums">{overallPct}% complete</span>
              </div>
              {user && IMPORT_ENABLED && (
                <button
                  id="lc-import-open-btn"
                  onClick={() => setShowImport(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-lime-400 dark:hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors bg-white dark:bg-stone-900"
                >
                  <Download className="w-3.5 h-3.5" />
                  Import from LeetCode
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10 mb-6"
        >
          {[
            { icon: BookOpen, value: totalProblems.toLocaleString(), label: "problems" },
            { icon: TrendingUp, value: allTopicsCount, label: "topics" },
            { icon: CheckCircle2, value: `${overallPct}%`, label: "overall" },
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

        {/* "Already imported" banner */}
        {user && IMPORT_ENABLED && importStatus?.lastImport && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between gap-3 px-4 py-2.5 mb-4 rounded-md bg-lime-50 dark:bg-lime-950/20 border border-lime-200 dark:border-lime-800"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400 shrink-0" />
              <span className="text-[11px] text-stone-700 dark:text-stone-300">
                Imported{importStatus.lastImport.username ? ` from @${importStatus.lastImport.username}` : " via CSV"} on{" "}
                {new Date(importStatus.lastImport.importedAt).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                {" "}· {importStatus.lastImport.imported} problems
              </span>
            </div>
            <button
              onClick={() => setShowImport(true)}
              className="text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400 hover:underline shrink-0 cursor-pointer"
            >
              re-import
            </button>
          </motion.div>
        )}

        {/* Difficulty breakdown (logged-in) */}
        {user && progress && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10 mb-6"
          >
            {([
              { key: "easy" as const, label: "easy", color: "text-emerald-600 dark:text-emerald-400", bar: "bg-emerald-500" },
              { key: "medium" as const, label: "medium", color: "text-amber-600 dark:text-amber-400", bar: "bg-amber-500" },
              { key: "hard" as const, label: "hard", color: "text-rose-600 dark:text-rose-400", bar: "bg-rose-500" },
            ]).map((d) => {
              const stat = progress.byDifficulty[d.key];
              const dPct = stat.total > 0 ? Math.round((stat.solved / stat.total) * 100) : 0;
              return (
                <div
                  key={d.key}
                  className="flex flex-col gap-2 p-3 sm:p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10"
                >
                  <div className="flex items-baseline justify-between">
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${d.color}`}>
                      / {d.label}
                    </span>
                    <span className="text-xs font-mono tabular-nums text-stone-500 dark:text-stone-400">
                      {dPct}%
                    </span>
                  </div>
                  <p className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
                    {stat.solved}
                    <span className="text-stone-400 dark:text-stone-600 font-normal"> / {stat.total}</span>
                  </p>
                  <div className="w-full h-0.5 bg-stone-200 dark:bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${dPct}%` }}
                      transition={{ duration: 0.6 }}
                      className={`h-full ${d.bar}`}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Heatmap (logged-in) */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.09 }}
          >
            <DsaHeatmap />
          </motion.div>
        )}

        {/* Quick links strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8"
        >
          {quickLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group flex items-center gap-2 sm:gap-3 bg-white dark:bg-stone-900 px-3 sm:px-4 py-3 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors no-underline min-w-0"
            >
              <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <link.icon className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors truncate min-w-0">
                / {link.label}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500 ml-auto group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          ))}
        </motion.div>

        {/* LeetCode Sync — only for logged-in students */}
        {user && (
          <LeetCodeSync
            onSyncSuccess={() => {
              queryClient.invalidateQueries({ queryKey: queryKeys.dsa.topics("") });
              queryClient.invalidateQueries({ queryKey: queryKeys.dsa.progress() });
            }}
          />
        )}

        {/* Filters + search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="mb-6 space-y-3"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search topics..."
              value={topicSearch}
              onChange={(e) => setTopicSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mr-1">
              difficulty /
            </span>
            {tabs.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => { setActiveTab(tab.key); setPage(1); }}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${active
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                    : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Section header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1 w-1 bg-lime-400"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            topics / {totalTopics}
          </span>
        </div>

        {/* Topic list */}
        <div className="space-y-2">
          {paginatedTopics?.map((topic, idx) => {
            const pct = topic.problemCount > 0
              ? Math.min(100, Math.max(0, Math.round((topic.solvedCount / topic.problemCount) * 100)))
              : 0;
            const isComplete = pct === 100;
            const isLocked = topic.orderIndex >= FREE_LIMIT && !user;
            const globalIdx = (page - 1) * TOPICS_PER_PAGE + idx + 1;
            const topicNum = String(globalIdx).padStart(2, "0");

            const inner = (
              <>
                <div className="flex flex-col items-center gap-1 shrink-0 w-11">
                  {isLocked ? (
                    <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-stone-400 dark:text-stone-500" />
                    </div>
                  ) : user ? (
                    <CircularProgress progress={pct} />
                  ) : (
                    <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center">
                      <span className="text-[11px] font-mono font-bold tabular-nums text-stone-500 dark:text-stone-400">
                        {topicNum}
                      </span>
                    </div>
                  )}
                  {!isLocked && user && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                      / {topicNum}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate">
                      {topic.name}
                    </h3>
                    {isComplete && user && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-500 shrink-0" />
                    )}
                  </div>
                  {user && !isLocked ? (
                    <>
                      <div className="w-full h-0.5 bg-stone-200 dark:bg-white/10 overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.6, delay: Math.min(idx, 10) * 0.03 }}
                          className={`h-full ${isComplete ? "bg-lime-400" : pct > 0 ? "bg-stone-900 dark:bg-stone-50" : "bg-transparent"}`}
                        />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 tabular-nums">
                        <span className="text-stone-900 dark:text-stone-50">{topic.solvedCount}</span>
                        <span className="text-stone-400 dark:text-stone-600"> / {topic.problemCount} problems</span>
                      </span>
                    </>
                  ) : (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 tabular-nums">
                      {topic.problemCount} problems
                    </span>
                  )}
                </div>

                <div className="shrink-0">
                  {isLocked ? (
                    <Lock className="w-4 h-4 text-stone-300 dark:text-stone-600" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all" />
                  )}
                </div>
              </>
            );

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
                    className="group w-full flex items-center gap-3 sm:gap-4 bg-white dark:bg-stone-900 px-3 sm:px-5 py-3 sm:py-4 rounded-md border border-stone-200 dark:border-white/10 opacity-70 hover:opacity-100 hover:border-stone-400 dark:hover:border-white/25 transition-all text-left cursor-pointer"
                  >
                    {inner}
                  </button>
                ) : (
                  <Link
                    to={`/learn/dsa/${topic.slug}`}
                    className="group flex items-center gap-3 sm:gap-4 bg-white dark:bg-stone-900 px-3 sm:px-5 py-3 sm:py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors no-underline"
                  >
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}

          {paginatedTopics?.length === 0 && (
            <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
              <Target className="w-8 h-8 text-stone-400 mx-auto mb-3" />
              <p className="text-sm text-stone-600 dark:text-stone-400">No topics found.</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-2">
                try a different keyword or difficulty
              </p>
            </div>
          )}
        </div>

        <PaginationControls
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>

      <LoginGate open={showGate} onClose={() => setShowGate(false)} />
      <LeetcodeImportModal open={showImport} onClose={() => setShowImport(false)} />
    </div>
  );
}
