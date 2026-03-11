import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, ArrowRight, Terminal, BookOpen, TrendingUp, Lock } from "lucide-react";
import { sections, exercises } from "./data/exercises";
import { SEO } from "../../../components/SEO";
import { useAuthStore } from "../../../lib/auth.store";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { LoginGate } from "../../../components/LoginGate";

const FREE_LIMIT = 5;

type SqlProgress = Record<string, { solved: boolean }>;

function getLocalProgress(): SqlProgress {
  try {
    return JSON.parse(localStorage.getItem("sql-progress") || "{}");
  } catch {
    return {};
  }
}

const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: "text-green-600 dark:text-green-400",
  Medium: "text-yellow-600 dark:text-yellow-400",
  Hard: "text-red-600 dark:text-red-400",
};

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
          className="stroke-blue-500"
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

export default function SqlPracticePage() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const [showGate, setShowGate] = useState(false);

  const { data: serverProgress } = useQuery<SqlProgress>({
    queryKey: queryKeys.sql.progress(),
    queryFn: async () => (await api.get("/sql/progress")).data,
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000,
  });

  const progress: SqlProgress = isAuthenticated ? (serverProgress ?? {}) : getLocalProgress();

  const sectionStats = useMemo(() => {
    return sections.map((section) => {
      const sectionExercises = exercises.filter((e) => e.sectionId === section.id);
      const solved = sectionExercises.filter((e) => progress[e.id]?.solved).length;
      const total = sectionExercises.length;
      const difficulties = [...new Set(sectionExercises.map((e) => e.difficulty))];
      return { ...section, solved, total, difficulties };
    });
  }, [progress]);

  const totalSolved = Object.values(progress).filter((p) => p.solved).length;
  const totalExercises = exercises.length;
  const overallPct = totalExercises > 0 ? Math.round((totalSolved / totalExercises) * 100) : 0;

  return (
    <div className="relative pb-12">
      <SEO title="SQL Practice" noIndex />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-indigo-100 dark:from-slate-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-40" />
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
          SQL <span className="text-gradient-accent">Practice</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-md mx-auto">
          Interactive exercises - runs entirely in your browser
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
          { icon: BookOpen, value: totalExercises, label: "Exercises", iconColor: "text-blue-500" },
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

      {/* Playground card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mb-8"
      >
        <Link
          to="/learn/sql/playground"
          className="group flex items-center gap-5 bg-white dark:bg-gray-900 px-6 py-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
            <Terminal className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-950 dark:text-white mb-0.5">
              SQL Playground
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Open editor with pre-loaded tables - write any query and see results instantly
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all shrink-0" />
        </Link>
      </motion.div>

      {/* Section list */}
      <div className="space-y-3">
        {sectionStats.map((section, idx) => {
          const pct = section.total > 0 ? Math.round((section.solved / section.total) * 100) : 0;
          const basePath = "/learn/sql";
          const isComplete = pct === 100 && section.total > 0;
          const isLocked = idx >= FREE_LIMIT && !isAuthenticated;

          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.04 }}
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
                    <h3 className="text-base font-semibold text-gray-950 dark:text-white truncate mb-1">{section.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-2.5 truncate">{section.description}</p>
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">{section.total} exercises</span>
                      {section.difficulties.map((d) => (
                        <span key={d} className={`px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded ${DIFFICULTY_COLOR[d]}`}>{d}</span>
                      ))}
                    </div>
                  </div>
                  <Lock className="w-5 h-5 text-gray-300 dark:text-gray-600 shrink-0" />
                </button>
              ) : (
                <Link
                  to={`${basePath}/${section.id}`}
                  className="group flex items-center gap-5 bg-white dark:bg-gray-900 px-6 py-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline"
                >
                  <CircularProgress progress={pct} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-base font-semibold text-gray-950 dark:text-white truncate">
                        {section.title}
                      </h3>
                      {isComplete && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400 shrink-0">
                          Complete
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-2.5 truncate">
                      {section.description}
                    </p>

                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.6, delay: 0.2 + idx * 0.04 }}
                        className={`h-full rounded-full ${
                          isComplete ? "bg-green-500" : pct > 0 ? "bg-gray-950 dark:bg-white" : "bg-gray-200 dark:bg-gray-700"
                        }`}
                      />
                    </div>

                    <div className="flex items-center gap-3 mt-2.5 text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">
                        {section.solved}/{section.total} exercises
                      </span>
                      {section.difficulties.map((d) => (
                        <span key={d} className={`px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded ${DIFFICULTY_COLOR[d]}`}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>

      <LoginGate open={showGate} onClose={() => setShowGate(false)} />
    </div>
  );
}
