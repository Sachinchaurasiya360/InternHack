import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, Layers } from "lucide-react";
import { SEO } from "../../../../components/SEO";
import { canonicalUrl } from "../../../../lib/seo.utils";
import { LEVELS } from "./curriculum";
import { getLevelStats, useProgressMap } from "./progress";

export default function SystemDesignHubPage() {
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
        title="System Design - Animated Theory & Interview Prep"
        description="Learn System Design from first principles - HLD, LLD, scaling, caching, load balancing, DNS, and more, with interactive activities and quizzes."
        keywords="system design, HLD, LLD, scaling, load balancing, caching, DNS, interview prep"
        canonicalUrl={canonicalUrl("/learn/system-design")}
      />

      <div className="max-w-6xl mx-auto px-3 sm:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 mb-10 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.2 }}
              className="h-1.5 w-1.5 bg-lime-500"
            />
            learn / system design
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none"
          >
            Design systems you can{" "}
            <span className="relative inline-block">
              <span className="relative z-10">reason about.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-sm text-stone-600 dark:text-stone-400 max-w-2xl"
          >
            Animated, interactive activities for every core System Design concept. Walk through the
            framework, draw the diagrams, run the estimation, and quiz the takeaway.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10 mb-10"
        >
          {[
            { icon: Layers, value: LEVELS.length, label: "levels" },
            { icon: BookOpen, value: totalLessons, label: "lessons" },
            { icon: CheckCircle2, value: `${overallPct}%`, label: "completed" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="flex items-start gap-3 p-3 sm:p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10"
            >
              <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <stat.icon className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500 truncate">
                  / {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="h-1 w-1 bg-lime-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            levels / {LEVELS.length}
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {LEVELS.map((level) => {
            const stats = getLevelStats(level.id, level.lessons.length);
            const isComplete = stats.percent === 100;

            return (
              <motion.div
                key={level.id}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  to={`/learn/system-design/${level.id}`}
                  className="group flex flex-col p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline h-full"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-mono font-bold tabular-nums text-lime-600 dark:text-lime-400">
                          L{String(level.number).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors truncate">
                          {level.title}
                        </h3>
                        <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
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
                        className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-white/10 px-2 py-0.5 rounded-md"
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
                        transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full ${
                          isComplete
                            ? "bg-lime-500"
                            : stats.percent > 0
                              ? "bg-stone-900 dark:bg-stone-50"
                              : "bg-transparent"
                        }`}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-stone-500">
                      <span className="tabular-nums">
                        <span className="text-stone-900 dark:text-stone-50">{stats.completed}</span>
                        <span className="text-stone-400 dark:text-stone-600"> / {stats.total} done</span>
                      </span>
                      <span className="inline-flex items-center gap-1 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                        open level
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 border border-dashed border-stone-300 dark:border-white/10 rounded-md p-5 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-stone-500">
            {LEVELS.length} levels · {totalLessons} lessons · more coming
          </p>
        </motion.div>
      </div>
    </div>
  );
}
