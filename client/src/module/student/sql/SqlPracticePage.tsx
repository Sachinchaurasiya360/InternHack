import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, ArrowRight, Terminal, BookOpen, TrendingUp, Lock } from "lucide-react";
import { sections, exercises } from "./data/exercises";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
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
  Easy: "text-emerald-600 dark:text-emerald-400",
  Medium: "text-amber-600 dark:text-amber-400",
  Hard: "text-rose-600 dark:text-rose-400",
};

function CircularProgress({ progress }: { progress: number }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;

  return (
    <div className="relative w-14 h-14 shrink-0">
      <svg className="w-14 h-14 -rotate-90" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r={r} fill="none" className="stroke-stone-200 dark:stroke-white/10" strokeWidth="4" />
        <circle
          cx="32" cy="32" r={r}
          fill="none"
          className="stroke-lime-400"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-mono font-bold text-stone-900 dark:text-stone-50">
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
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title="SQL Practice, Interactive SQL Exercises"
        description="Practice SQL queries with interactive exercises. Learn SELECT, JOIN, GROUP BY, subqueries, and more with an in-browser SQL engine."
        keywords="SQL practice, SQL exercises, learn SQL, SQL queries, SQL tutorial, interactive SQL"
        canonicalUrl={canonicalUrl("/learn/sql")}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
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
              learn / sql
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
                Query every table.
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Interactive SQL exercises with an in-browser engine. Selects, joins, aggregates, subqueries.
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap">
              <span>
                <span className="text-stone-900 dark:text-stone-50">{totalSolved}</span>
                <span className="text-stone-400 dark:text-stone-600"> / {totalExercises} solved</span>
              </span>
              <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
              <span className="text-lime-600 dark:text-lime-400">{overallPct}% complete</span>
            </div>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10 mb-8"
        >
          {[
            { icon: BookOpen, value: totalExercises, label: "exercises" },
            { icon: TrendingUp, value: totalSolved, label: "solved" },
            { icon: CheckCircle2, value: `${overallPct}%`, label: "overall" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-start gap-3 p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10"
            >
              <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <stat.icon className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  / {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Playground card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="h-1 w-1 bg-lime-400"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              sandbox / free-form
            </span>
          </div>
          <Link
            to="/learn/sql/playground"
            className="group flex items-center gap-4 bg-white dark:bg-stone-900 px-5 py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors no-underline"
          >
            <div className="w-14 h-14 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
              <Terminal className="w-5 h-5 text-lime-600 dark:text-lime-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1">
                SQL Playground
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 mb-2 truncate">
                Open editor with pre-loaded tables. Write any query, see results instantly.
              </p>
              <div className="flex items-center gap-x-3 gap-y-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap">
                <span className="text-lime-600 dark:text-lime-400">/ world</span>
                <span className="text-lime-600 dark:text-lime-400">/ nobel</span>
                <span className="text-lime-600 dark:text-lime-400">/ football</span>
                <span className="text-lime-600 dark:text-lime-400">/ movie</span>
                <span className="text-lime-600 dark:text-lime-400">/ school</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        </motion.div>

        {/* Sections list */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1 w-1 bg-lime-400"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            curriculum / {sectionStats.length} sections
          </span>
        </div>

        <div className="space-y-2">
          {sectionStats.map((section, idx) => {
            const pct = section.total > 0 ? Math.round((section.solved / section.total) * 100) : 0;
            const basePath = "/learn/sql";
            const isComplete = pct === 100 && section.total > 0;
            const isLocked = idx >= FREE_LIMIT && !isAuthenticated;
            const sectionNum = String(idx + 1).padStart(2, "0");

            const inner = (
              <>
                <div className="flex flex-col items-center gap-1.5 shrink-0 w-14">
                  {isLocked ? (
                    <div className="w-14 h-14 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-stone-400 dark:text-stone-500" />
                    </div>
                  ) : (
                    <CircularProgress progress={pct} />
                  )}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    / {sectionNum}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate">
                      {section.title}
                    </h3>
                    {isComplete && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-stone-900 dark:bg-stone-50 text-lime-400">
                        <CheckCircle2 className="w-3 h-3" />
                        complete
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2.5 truncate">
                    {section.description}
                  </p>
                  {!isLocked && (
                    <div className="w-full h-0.5 bg-stone-200 dark:bg-white/10 overflow-hidden mb-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.6, delay: 0.15 + idx * 0.03 }}
                        className={`h-full ${isComplete ? "bg-lime-400" : pct > 0 ? "bg-stone-900 dark:bg-stone-50" : "bg-transparent"}`}
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap">
                    <span>
                      {isLocked ? (
                        `${section.total} exercises`
                      ) : (
                        <>
                          <span className="text-stone-900 dark:text-stone-50">{section.solved}</span>
                          <span className="text-stone-400 dark:text-stone-600"> / {section.total} exercises</span>
                        </>
                      )}
                    </span>
                    {section.difficulties.map((d) => (
                      <span key={d} className="inline-flex items-center gap-1.5">
                        <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                        <span className={DIFFICULTY_COLOR[d]}>{d.toLowerCase()}</span>
                      </span>
                    ))}
                  </div>
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
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + idx * 0.03 }}
              >
                {isLocked ? (
                  <button
                    onClick={() => setShowGate(true)}
                    className="group w-full flex items-center gap-4 bg-white dark:bg-stone-900 px-5 py-4 rounded-md border border-stone-200 dark:border-white/10 opacity-70 hover:opacity-100 hover:border-stone-400 dark:hover:border-white/25 transition-all text-left cursor-pointer"
                  >
                    {inner}
                  </button>
                ) : (
                  <Link
                    to={`${basePath}/${section.id}`}
                    className="group flex items-center gap-4 bg-white dark:bg-stone-900 px-5 py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors no-underline"
                  >
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <LoginGate open={showGate} onClose={() => setShowGate(false)} />
    </div>
  );
}
