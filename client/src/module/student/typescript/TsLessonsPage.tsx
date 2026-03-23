import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, BookOpen, TrendingUp, Star, Lock } from "lucide-react";
import { sections, lessons } from "./data";
import type { TsProgress } from "./data/types";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { useAuthStore } from "../../../lib/auth.store";
import { LoginGate } from "../../../components/LoginGate";

const FREE_LIMIT = 5;

function getLocalProgress(): TsProgress {
  try {
    return JSON.parse(localStorage.getItem("ts-progress") || "{}");
  } catch {
    return {};
  }
}

const LEVEL_COLOR: Record<string, string> = {
  Beginner: "text-green-600 dark:text-green-400",
  Intermediate: "text-yellow-600 dark:text-yellow-400",
  Advanced: "text-red-600 dark:text-red-400",
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
          className="stroke-cyan-500"
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

export default function TsLessonsPage() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const [showGate, setShowGate] = useState(false);

  const progress: TsProgress = getLocalProgress();

  const sectionStats = useMemo(() => {
    return sections.map((section) => {
      const sectionLessons = lessons.filter((l) => l.sectionId === section.id);
      const completed = sectionLessons.filter((l) => progress[l.id]?.completed).length;
      const total = sectionLessons.length;
      const hasInterview = sectionLessons.some((l) => l.isInterviewQuestion);
      return { ...section, completed, total, hasInterview };
    });
  }, [progress]);

  const totalCompleted = Object.values(progress).filter((p) => p.completed).length;
  const totalLessons = lessons.length;
  const overallPct = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  return (
    <div className="relative pb-12">
      <SEO
        title="Learn TypeScript - Free Interactive Tutorials"
        description="Master TypeScript with interactive lessons covering types, generics, interfaces, type guards, and interview preparation."
        keywords="learn typescript, typescript tutorial, typescript lessons, types, generics, interfaces"
        canonicalUrl={canonicalUrl("/learn/typescript")}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-cyan-100 dark:from-slate-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-40" />
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
        className="text-center mb-10 mt-2"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          TypeScript <span className="text-gradient-accent">Lessons</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-lg mx-auto">
          Master type-safe JavaScript from basics to advanced - curated for interviews
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
          { icon: BookOpen, value: totalLessons, label: "Lessons", iconColor: "text-cyan-500" },
          { icon: TrendingUp, value: totalCompleted, label: "Completed", iconColor: "text-violet-500" },
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

      {/* Section list */}
      <div className="space-y-3">
        {sectionStats.map((section, idx) => {
          const pct = section.total > 0 ? Math.round((section.completed / section.total) * 100) : 0;
          const basePath = "/learn/typescript";
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
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-base font-semibold text-gray-950 dark:text-white truncate">{section.title}</h3>
                      {section.hasInterview && <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-2.5 truncate">{section.description}</p>
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">{section.total} lessons</span>
                      <span className={`px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded ${LEVEL_COLOR[section.level]}`}>{section.level}</span>
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
                      {section.hasInterview && (
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
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
                        {section.completed}/{section.total} lessons
                      </span>
                      <span className={`px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded ${LEVEL_COLOR[section.level]}`}>
                        {section.level}
                      </span>
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
