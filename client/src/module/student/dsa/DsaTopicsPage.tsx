import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Code2, CheckCircle2, Building2, Puzzle, Bookmark, BookOpen, TrendingUp, ArrowRight, Lock, ArrowLeft } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaTopic, DsaProgress } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { LoginGate } from "../../../components/LoginGate";

const FREE_LIMIT = 5;

const DIFFICULTY_COLORS: Record<string, { ring: string; text: string }> = {
  easy:   { ring: "stroke-green-500", text: "text-green-600 dark:text-green-400" },
  medium: { ring: "stroke-yellow-500", text: "text-yellow-600 dark:text-yellow-400" },
  hard:   { ring: "stroke-red-500", text: "text-red-600 dark:text-red-400" },
};

type DifficultyTab = "all" | "easy" | "medium-hard";

const DIFFICULTY_TABS: { key: DifficultyTab; label: string; desc: string }[] = [
  { key: "all", label: "0 – 100", desc: "All Questions" },
  { key: "easy", label: "0 – 1", desc: "Basic & Important" },
  { key: "medium-hard", label: "1 – 100", desc: "Medium & Tough" },
];

function CircularProgress({ progress }: { progress: number }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;

  return (
    <div className="relative w-16 h-16 shrink-0">
      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r={r} fill="none" stroke="#f3f4f6" className="dark:stroke-gray-700" strokeWidth="5" />
        <circle
          cx="32" cy="32" r={r}
          fill="none"
          className="stroke-indigo-500"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-800 dark:text-gray-200">
        {progress}%
      </span>
    </div>
  );
}

export default function DsaTopicsPage() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<DifficultyTab>("all");
  const [showGate, setShowGate] = useState(false);

  const difficultyParam =
    activeTab === "easy" ? "Easy" :
    activeTab === "medium-hard" ? "Medium,Hard" :
    undefined;

  const { data: topics, isLoading } = useQuery({
    queryKey: queryKeys.dsa.topics(difficultyParam),
    queryFn: () => {
      const params = difficultyParam ? `?difficulty=${difficultyParam}` : "";
      return api.get<DsaTopic[]>(`/dsa/topics${params}`).then((r) => r.data);
    },
  });

  const { data: progress } = useQuery({
    queryKey: queryKeys.dsa.progress(),
    queryFn: () => api.get<DsaProgress>("/dsa/my-progress").then((r) => r.data),
    enabled: !!user,
  });

  const totalProblems = topics?.reduce((s, t) => s + t.problemCount, 0) ?? 0;
  const totalSolved = topics?.reduce((s, t) => s + t.solvedCount, 0) ?? 0;
  const overallPct = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;

  const tabProgress = activeTab !== "all" && progress ? (() => {
    const d = progress.byDifficulty;
    if (activeTab === "easy") return { total: d.easy.total, solved: d.easy.solved };
    return { total: d.medium.total + d.hard.total, solved: d.medium.solved + d.hard.solved };
  })() : null;

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="relative pb-12">
      <SEO
        title="DSA Practice - Data Structures & Algorithms"
        description="Practice data structures and algorithms problems organized by topic. Track your progress across arrays, trees, graphs, dynamic programming, and more."
        keywords="DSA practice, data structures, algorithms, leetcode, coding interview, arrays, trees, graphs, dynamic programming"
        canonicalUrl={canonicalUrl("/learn/dsa")}
      />

      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white mb-4">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-indigo-100 to-cyan-100 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-violet-100 dark:from-slate-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10 mt-6"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          DSA <span className="text-gradient-accent">Practice</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-md mx-auto">
          Master Data Structures & Algorithms
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        {[
          { icon: BookOpen, value: totalProblems, label: "Problems", iconColor: "text-indigo-500" },
          { icon: TrendingUp, value: totalSolved, label: "Solved", iconColor: "text-violet-500" },
          { icon: CheckCircle2, value: `${overallPct}%`, label: "Complete", iconColor: "text-emerald-500" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
          >
            <stat.icon className={`w-6 h-6 ${stat.iconColor} mx-auto mb-3`} />
            <p className="font-display text-2xl font-bold text-gray-950 dark:text-white">{stat.value}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Access */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex items-center gap-3 mb-6 flex-wrap"
      >
        {[
          { to: "/learn/dsa/companies", icon: Building2, label: "Companies", iconColor: "text-blue-500" },
          { to: "/learn/dsa/patterns", icon: Puzzle, label: "Patterns", iconColor: "text-purple-500" },
          ...(user ? [{ to: "/learn/dsa/bookmarks", icon: Bookmark, label: "Bookmarks", iconColor: "text-amber-500" }] : []),
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline"
          >
            <link.icon className={`w-4 h-4 ${link.iconColor}`} />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{link.label}</span>
          </Link>
        ))}
      </motion.div>

      {/* Difficulty Breakdown */}
      {user && progress && activeTab === "all" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {(["easy", "medium", "hard"] as const).map((d, i) => {
            const colors = DIFFICULTY_COLORS[d];
            return (
              <motion.div
                key={d}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
              >
                <p className={`text-xs font-semibold uppercase tracking-wider ${colors.text} mb-2`}>{d}</p>
                <p className={`font-display text-2xl font-bold ${colors.text}`}>
                  {progress.byDifficulty[d].solved}/{progress.byDifficulty[d].total}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Tab Progress (when a difficulty filter is active) */}
      {user && tabProgress && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 mb-8"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {DIFFICULTY_TABS.find((t) => t.key === activeTab)?.desc} Progress
            </span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {tabProgress.solved} / {tabProgress.total} solved ({tabProgress.total > 0 ? Math.round((tabProgress.solved / tabProgress.total) * 100) : 0}%)
            </span>
          </div>
          <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${tabProgress.total > 0 ? Math.round((tabProgress.solved / tabProgress.total) * 100) : 0}%` }}
              transition={{ duration: 0.6 }}
              className="h-full bg-indigo-500 rounded-full"
            />
          </div>
        </motion.div>
      )}

      {/* Difficulty Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-1.5 mb-8 overflow-x-auto"
      >
        {DIFFICULTY_TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 px-5 py-2.5 rounded-xl transition-all duration-200 whitespace-nowrap text-center ${
              activeTab === tab.key
                ? "bg-gray-950 text-white dark:bg-white dark:text-gray-950 shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <span className="text-sm font-semibold">{tab.label}</span>
            <span className={`block text-[10px] mt-0.5 ${activeTab === tab.key ? "opacity-70" : "opacity-50"}`}>{tab.desc}</span>
          </button>
        ))}
      </motion.div>

      {/* Topic List */}
      <div className="space-y-3">
        {topics?.map((topic, idx) => {
          const pct = topic.problemCount > 0
            ? Math.round((topic.solvedCount / topic.problemCount) * 100)
            : 0;
          const isComplete = pct === 100;
          const isLocked = topic.orderIndex >= FREE_LIMIT && !user;

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + idx * 0.04 }}
            >
              {isLocked ? (
                <button
                  onClick={() => setShowGate(true)}
                  className="w-full group flex items-center gap-5 bg-white dark:bg-gray-900 px-6 py-5 rounded-2xl border border-gray-100 dark:border-gray-800 opacity-60 hover:opacity-80 transition-all duration-300 text-left cursor-pointer"
                >
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-950 dark:text-white truncate mb-1">{topic.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-2.5">{topic.problemCount} problems</p>
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">{topic.problemCount} problems</span>
                    </div>
                  </div>
                  <Lock className="w-5 h-5 text-gray-300 dark:text-gray-600 shrink-0" />
                </button>
              ) : (
                <Link
                  to={`/learn/dsa/${topic.slug}`}
                  className="group flex items-center gap-5 bg-white dark:bg-gray-900 px-6 py-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline"
                >
                  {/* Circular progress or step number */}
                  {user ? (
                    <CircularProgress progress={pct} />
                  ) : (
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className="font-display text-lg font-bold text-gray-500 dark:text-gray-400">{idx + 1}</span>
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-base font-semibold text-gray-950 dark:text-white truncate">
                        {topic.name}
                      </h3>
                      {isComplete && user && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400 shrink-0">
                          Complete
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-2.5">
                      {topic.problemCount} problems
                      {user && topic.solvedCount > 0 && ` \u00B7 ${topic.solvedCount} solved`}
                    </p>

                    {/* Progress bar */}
                    {user && (
                      <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.6, delay: 0.25 + idx * 0.04 }}
                          className={`h-full rounded-full ${
                            isComplete ? "bg-green-500" : pct > 0 ? "bg-gray-950 dark:bg-white" : "bg-gray-200 dark:bg-gray-700"
                          }`}
                        />
                      </div>
                    )}

                    <div className="flex items-center gap-3 mt-2.5 text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">
                        {topic.problemCount} problems
                      </span>
                      {user && topic.solvedCount > 0 && (
                        <span className="flex items-center gap-1 text-emerald-500">
                          <CheckCircle2 className="w-3 h-3" />
                          {topic.solvedCount} solved
                        </span>
                      )}
                    </div>
                  </div>

                  <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              )}
            </motion.div>
          );
        })}

        {topics?.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
          >
            <Code2 className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
            <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white mb-2">No topics found</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 max-w-sm mx-auto">
              No topics available for this difficulty level.
            </p>
          </motion.div>
        )}
      </div>

      <LoginGate open={showGate} onClose={() => setShowGate(false)} />
    </div>
  );
}
