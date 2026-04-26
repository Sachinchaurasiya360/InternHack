import { Link, Navigate, useParams } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock, Play } from "lucide-react";
import { SEO } from "../../../../components/SEO";
import { canonicalUrl } from "../../../../lib/seo.utils";
import { LoginGate } from "../../../../components/LoginGate";
import { useState } from "react";
import { useAuthStore } from "../../../../lib/auth.store";
import { findLevel, LEVELS } from "./curriculum";
import { getLevelStats, useProgressMap } from "./progress";

const FREE_LIMIT = 6;

export default function DsaFoundationsLevelPage() {
  const { levelId = "" } = useParams<{ levelId: string }>();
  const { user } = useAuthStore();
  const progress = useProgressMap();
  const [showGate, setShowGate] = useState(false);

  const level = findLevel(levelId);
  if (!level) return <Navigate to="/learn/dsa-foundations" replace />;

  const stats = getLevelStats(level.id, level.lessons.length);
  const levelIdx = LEVELS.findIndex((l) => l.id === level.id);
  const prevLevel = levelIdx > 0 ? LEVELS[levelIdx - 1] : null;
  const nextLevel = levelIdx < LEVELS.length - 1 ? LEVELS[levelIdx + 1] : null;
  const completedSlugs = progress[level.id] ?? {};

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title={`${level.title} - DSA Foundations Level ${level.number}`}
        description={level.summary}
        canonicalUrl={canonicalUrl(`/learn/dsa-foundations/${level.id}`)}
      />

      <div className="max-w-4xl mx-auto px-3 sm:px-8 py-8">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 mb-8 border-b border-stone-200 dark:border-white/10 pb-6"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1 w-1 bg-lime-400" />
            learn / dsa foundations / level {String(level.number).padStart(2, "0")}
          </div>
          <h1 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
            {level.title}
          </h1>
          <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
            {level.summary}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <span className="tabular-nums">
                <span className="text-stone-900 dark:text-stone-50">{stats.completed}</span>
                <span className="text-stone-400 dark:text-stone-600"> / {stats.total}</span>
              </span>
              <span>complete</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400 tabular-nums">
              {stats.percent}%
            </span>
            <div className="w-32 h-0.5 bg-stone-200 dark:bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${stats.percent}%` }}
                transition={{ duration: 0.6 }}
                className={`h-full ${stats.percent === 100 ? "bg-lime-400" : "bg-stone-900 dark:bg-stone-50"}`}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {level.topics.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-white/10 px-2 py-0.5 rounded-md"
              >
                / {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Section header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            lessons / {level.lessons.length}
          </span>
        </div>

        {/* Lesson list */}
        <div className="space-y-2">
          {level.lessons.map((lesson, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            const lessonProg = completedSlugs[lesson.slug];
            const isComplete = !!lessonProg?.completed;
            const isLocked = idx >= FREE_LIMIT && !user;
            const inner = (
              <>
                <div className="flex flex-col items-center gap-1 shrink-0 w-11">
                  {isLocked ? (
                    <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-stone-400 dark:text-stone-500" />
                    </div>
                  ) : isComplete ? (
                    <div className="w-11 h-11 rounded-md bg-lime-50 dark:bg-lime-400/10 border border-lime-300 dark:border-lime-500/30 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-lime-600 dark:text-lime-400" />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center">
                      <span className="text-[11px] font-mono font-bold tabular-nums text-stone-500 dark:text-stone-400">
                        {num}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate">
                      {lesson.title}
                    </h3>
                    {isComplete && (
                      <span className="text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400 tabular-nums">
                        {lessonProg?.quizScore ?? 0}%
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-snug line-clamp-2">
                    {lesson.summary}
                  </p>
                </div>

                <div className="shrink-0">
                  {isLocked ? (
                    <Lock className="w-4 h-4 text-stone-300 dark:text-stone-600" />
                  ) : (
                    <Play className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all" />
                  )}
                </div>
              </>
            );

            return (
              <motion.div
                key={lesson.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + Math.min(idx, 8) * 0.03 }}
              >
                {isLocked ? (
                  <button
                    type="button"
                    onClick={() => setShowGate(true)}
                    className="group w-full text-left flex items-center gap-3 sm:gap-4 bg-white dark:bg-stone-900 px-3 sm:px-5 py-3 sm:py-4 rounded-md border border-stone-200 dark:border-white/10 opacity-70 hover:opacity-100 hover:border-stone-400 dark:hover:border-white/25 transition-all cursor-pointer"
                  >
                    {inner}
                  </button>
                ) : (
                  <Link
                    to={`/learn/dsa-foundations/${level.id}/${lesson.slug}`}
                    className="group flex items-center gap-3 sm:gap-4 bg-white dark:bg-stone-900 px-3 sm:px-5 py-3 sm:py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors no-underline"
                  >
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Level navigation */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {prevLevel ? (
            <Link
              to={`/learn/dsa-foundations/${prevLevel.id}`}
              className="group flex items-center gap-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-4 py-3 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
            >
              <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:-translate-x-0.5 transition-all" />
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  / previous level
                </div>
                <div className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                  L{String(prevLevel.number).padStart(2, "0")} · {prevLevel.title}
                </div>
              </div>
            </Link>
          ) : (
            <Link
              to="/learn/dsa-foundations"
              className="group flex items-center gap-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-4 py-3 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
            >
              <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:-translate-x-0.5 transition-all" />
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  / back to
                </div>
                <div className="text-sm font-bold text-stone-900 dark:text-stone-50">
                  All levels
                </div>
              </div>
            </Link>
          )}
          {nextLevel && (
            <Link
              to={`/learn/dsa-foundations/${nextLevel.id}`}
              className="group flex items-center gap-3 justify-end text-right bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-4 py-3 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
            >
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  / next level
                </div>
                <div className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                  L{String(nextLevel.number).padStart(2, "0")} · {nextLevel.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all" />
            </Link>
          )}
        </div>
      </div>

      <LoginGate open={showGate} onClose={() => setShowGate(false)} />
    </div>
  );
}
