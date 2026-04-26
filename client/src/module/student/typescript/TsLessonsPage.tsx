import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Star, Lock } from "lucide-react";
import { sections, lessons } from "./data";
import type { TsProgress } from "./data/types";
import { SEO } from "../../../components/SEO";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import { courseSchema, breadcrumbSchema } from "../../../lib/structured-data";
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

const LEVEL_STYLE: Record<string, string> = {
  Beginner:     "text-green-700 dark:text-green-400 border-green-300 dark:border-green-900/60",
  Intermediate: "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60",
  Advanced:     "text-red-700 dark:text-red-400 border-red-300 dark:border-red-900/60",
};

function MetaChip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border rounded-md ${className || "text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10"}`}>
      {children}
    </span>
  );
}

function RingProgress({ progress, complete }: { progress: number; complete?: boolean }) {
  const r = 24;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  return (
    <div className="relative w-14 h-14 shrink-0">
      <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r={r} fill="none" className="stroke-stone-100 dark:stroke-stone-800" strokeWidth="4" />
        <circle
          cx="28" cy="28" r={r}
          fill="none"
          className={complete ? "stroke-lime-500" : "stroke-stone-900 dark:stroke-stone-50"}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-mono font-bold tabular-nums text-stone-900 dark:text-stone-50">
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
    <div className="relative text-stone-900 dark:text-stone-50 pb-12">
      <SEO
        title="Learn TypeScript - Free Interactive Tutorials"
        description="Master TypeScript with interactive lessons covering types, generics, interfaces, type guards, and interview preparation."
        keywords="learn typescript, typescript tutorial, typescript lessons, types, generics, interfaces"
        canonicalUrl={canonicalUrl("/learn/typescript")}
        structuredData={[
          courseSchema({
            name: "Learn TypeScript - Free Interactive Tutorials",
            description:
              "Master TypeScript with interactive lessons covering types, generics, interfaces, type guards, and interview preparation.",
            url: `${SITE_URL}/learn/typescript`,
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Learn", url: `${SITE_URL}/learn` },
            { name: "TypeScript", url: `${SITE_URL}/learn/typescript` },
          ]),
        ]}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05] z-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(120,113,108,0.25) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-3 sm:px-0">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              learn / typescript
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Ship with{" "}
              <span className="relative inline-block">
                <span className="relative z-10">types.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  aria-hidden
                  className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
                />
              </span>
            </h1>
            <p className="mt-3 text-sm text-stone-500 max-w-md">
              Generics, conditional types, narrowing, and the strict compiler settings, from first-day syntax to the patterns interviewers keep asking about.
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span>
              lessons
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {totalLessons}
              </span>
            </span>
            <span>
              completed
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {totalCompleted}
              </span>
            </span>
            <span>
              progress
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {overallPct}%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Overall progress strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8 px-5 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md"
        >
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              overall progress
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 tabular-nums">
              {totalCompleted} / {totalLessons}
            </span>
          </div>
          <div className="w-full h-1 bg-stone-100 dark:bg-stone-800 overflow-hidden rounded-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallPct}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-full bg-lime-400"
            />
          </div>
        </motion.div>

        {/* Section header */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1 w-1 bg-lime-400" />
              modules / sections
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Lesson tracks
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hidden sm:block">
            {sectionStats.length} sections
          </span>
        </div>

        {/* Section grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sectionStats.map((section, idx) => {
            const pct = section.total > 0 ? Math.round((section.completed / section.total) * 100) : 0;
            const basePath = "/learn/typescript";
            const isComplete = pct === 100 && section.total > 0;
            const isLocked = idx >= FREE_LIMIT && !isAuthenticated;

            const cardClass =
              "group relative flex flex-col bg-white dark:bg-stone-900 p-4 sm:p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline";

            const body = (
              <>
                {isComplete && !isLocked && (
                  <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3" /> complete
                  </span>
                )}
                {isLocked && (
                  <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
                    <Lock className="w-3 h-3" /> locked
                  </span>
                )}

                <div className="flex items-start gap-3 sm:gap-4 mb-4 pr-20 sm:pr-16">
                  {isLocked ? (
                    <div className="w-14 h-14 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5 text-stone-400 dark:text-stone-500" />
                    </div>
                  ) : (
                    <RingProgress progress={pct} complete={isComplete} />
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                        {section.title}
                      </h3>
                      {section.hasInterview && (
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mt-1 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>

                {!isLocked && section.total > 0 && (
                  <div className="mb-3">
                    <div className="w-full h-1 bg-stone-100 dark:bg-stone-800 overflow-hidden rounded-sm">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.6, delay: 0.1 + idx * 0.03 }}
                        className={`h-full ${isComplete ? "bg-lime-400" : pct > 0 ? "bg-stone-900 dark:bg-stone-50" : "bg-stone-200 dark:bg-stone-700"}`}
                      />
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <MetaChip>
                    {isLocked ? `${section.total} lessons` : `${section.completed} / ${section.total} done`}
                  </MetaChip>
                  <MetaChip className={LEVEL_STYLE[section.level]}>{section.level}</MetaChip>
                  {section.hasInterview && (
                    <MetaChip className="text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60">
                      <Star className="w-3 h-3" /> interview
                    </MetaChip>
                  )}
                </div>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                    {isLocked ? "sign in to unlock" : isComplete ? "review section" : "open lessons"}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
              </>
            );

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.03 }}
              >
                {isLocked ? (
                  <button
                    onClick={() => setShowGate(true)}
                    className={`${cardClass} w-full text-left cursor-pointer opacity-80 hover:opacity-100`}
                  >
                    {body}
                  </button>
                ) : (
                  <Link to={`${basePath}/${section.id}`} className={cardClass}>
                    {body}
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
