import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, Code2 } from "lucide-react";
import { SEO } from "../../../../components/SEO";
import { canonicalUrl } from "../../../../lib/seo.utils";
import { LEVELS } from "./curriculum";
import { getLevelStats, useProgressMap } from "./progress";

export default function DsaFoundationsHubPage() {
  // Subscribe to progress changes so cards re-render after a lesson is completed.
  useProgressMap();

  const totalLessons = LEVELS.reduce((s, l) => s + l.lessons.length, 0);
  const completedLessons = LEVELS.reduce(
    (s, l) => s + getLevelStats(l.id, l.lessons.length).completed,
    0,
  );
  const overallPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title="DSA Foundations - Animated Theory & Practice"
        description="Learn data structures and algorithms through interactive animations and lesson-by-lesson concept building. Foundations through advanced patterns."
        keywords="DSA theory, algorithms tutorial, data structures animation, big-o, time complexity, interview prep"
        canonicalUrl={canonicalUrl("/learn/dsa-foundations")}
      />

      <div className="max-w-6xl mx-auto px-3 sm:px-8 py-8">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 mb-10 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            learn / dsa foundations
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Theory you can{" "}
            <span className="relative inline-block">
              <span className="relative z-10">watch.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </h1>
          <p className="mt-4 text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
            Animated, step-by-step explanations of every core DSA concept. Learn the idea, watch the
            algorithm run, try it yourself, and quiz the key takeaway.
          </p>

          <div className="mt-6">
            <Link
              to="/learn/dsa"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 text-xs font-mono uppercase tracking-widest border border-stone-900 dark:border-stone-50 hover:bg-lime-400 hover:text-stone-900 hover:border-lime-400 dark:hover:bg-lime-400 dark:hover:text-stone-900 transition-colors no-underline"
            >
              <Code2 className="w-4 h-4" />
              open practice tracker
              <span className="text-stone-400 dark:text-stone-500 group-hover:text-stone-700 transition-colors">·</span>
              <span className="tabular-nums">3,300+ problems</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <p className="mt-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / pair the lessons with company-wise problem sets, bookmarks, and your solve history
            </p>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10 mb-10"
        >
          {[
            { icon: BookOpen, value: LEVELS.length, label: "levels" },
            { icon: BookOpen, value: totalLessons, label: "lessons" },
            { icon: CheckCircle2, value: `${overallPct}%`, label: "completed" },
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
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 truncate">
                  / {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            levels / {LEVELS.length}
          </span>
        </div>

        {/* Levels list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {LEVELS.map((level, i) => {
            const stats = getLevelStats(level.id, level.lessons.length);
            const isComplete = stats.percent === 100;

            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + Math.min(i, 6) * 0.04 }}
              >
                <Link
                  to={`/learn/dsa-foundations/${level.id}`}
                  className="group flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline h-full"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-mono font-bold tabular-nums text-lime-700 dark:text-lime-400">
                          L{String(level.number).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors truncate">
                          {level.title}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                          {level.lessons.length} lesson{level.lessons.length === 1 ? "" : "s"}
                        </span>
                      </div>
                    </div>
                    {isComplete && <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" />}
                  </div>

                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4 line-clamp-2">
                    {level.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {level.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-white/10 px-2 py-0.5 rounded-md"
                      >
                        / {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="w-full h-0.5 bg-stone-200 dark:bg-white/10 overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stats.percent}%` }}
                        transition={{ duration: 0.6 }}
                        className={`h-full ${
                          isComplete
                            ? "bg-lime-400"
                            : stats.percent > 0
                              ? "bg-stone-900 dark:bg-stone-50"
                              : "bg-transparent"
                        }`}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      <span className="tabular-nums">
                        <span className="text-stone-900 dark:text-stone-50">{stats.completed}</span>
                        <span className="text-stone-400 dark:text-stone-600"> / {stats.total} done</span>
                      </span>
                      <span className="inline-flex items-center gap-1 group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                        open level
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 border border-dashed border-stone-300 dark:border-white/10 rounded-md p-5 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-stone-500">
            8 levels · 54 lessons · ready now
          </p>
        </div>
      </div>
    </div>
  );
}
