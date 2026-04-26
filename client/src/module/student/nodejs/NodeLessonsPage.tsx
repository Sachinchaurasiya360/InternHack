import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, BookOpen, TrendingUp, Star, Lock } from "lucide-react";
import { sections, lessons } from "./data";
import type { NodeProgress } from "./data/types";
import { SEO } from "../../../components/SEO";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import { courseSchema, breadcrumbSchema } from "../../../lib/structured-data";
import { useAuthStore } from "../../../lib/auth.store";
import { LoginGate } from "../../../components/LoginGate";

const FREE_LIMIT = 5;

function getLocalProgress(): NodeProgress {
  try {
    return JSON.parse(localStorage.getItem("node-progress") || "{}");
  } catch {
    return {};
  }
}

const LEVEL_COLOR: Record<string, string> = {
  Beginner: "text-emerald-600 dark:text-emerald-400",
  Intermediate: "text-amber-600 dark:text-amber-400",
  Advanced: "text-rose-600 dark:text-rose-400",
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

export default function NodeLessonsPage() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const [showGate, setShowGate] = useState(false);

  const progress: NodeProgress = getLocalProgress();

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
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title="Learn Node.js, Free Interactive Tutorials"
        description="Master Node.js with interactive lessons covering the event loop, Express, REST APIs, middleware, and interview preparation."
        keywords="learn nodejs, node.js tutorial, nodejs lessons, express, REST API, event loop"
        canonicalUrl={canonicalUrl("/learn/nodejs")}
        structuredData={[
          courseSchema({
            name: "Learn Node.js, Free Interactive Tutorials",
            description:
              "Master Node.js with interactive lessons covering the event loop, Express, REST APIs, middleware, and interview preparation.",
            url: `${SITE_URL}/learn/nodejs`,
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Learn", url: `${SITE_URL}/learn` },
            { name: "Node.js", url: `${SITE_URL}/learn/nodejs` },
          ]),
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
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
              learn / nodejs
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
                Server-side JavaScript.
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Interactive Node.js lessons, curated for interviews. Event loop, Express, REST APIs, and middleware.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              <span>
                <span className="text-stone-900 dark:text-stone-50">{totalCompleted}</span>
                <span className="text-stone-400 dark:text-stone-600"> / {totalLessons} done</span>
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
            { icon: BookOpen, value: totalLessons, label: "lessons" },
            { icon: TrendingUp, value: totalCompleted, label: "completed" },
            { icon: CheckCircle2, value: `${overallPct}%`, label: "overall" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-start gap-3 p-3 sm:p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10"
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

        {/* Sections list */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1 w-1 bg-lime-400"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            curriculum / {sectionStats.length} sections
          </span>
        </div>

        <div className="space-y-2">
          {sectionStats.map((section, idx) => {
            const pct = section.total > 0 ? Math.round((section.completed / section.total) * 100) : 0;
            const basePath = "/learn/nodejs";
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
                    {section.hasInterview && (
                      <Star className="w-3.5 h-3.5 text-lime-500 fill-lime-400 shrink-0" aria-label="Interview question" />
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
                  <div className="flex items-center gap-3 flex-wrap text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    <span>
                      {isLocked ? (
                        `${section.total} lessons`
                      ) : (
                        <>
                          <span className="text-stone-900 dark:text-stone-50">{section.completed}</span>
                          <span className="text-stone-400 dark:text-stone-600"> / {section.total} lessons</span>
                        </>
                      )}
                    </span>
                    <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                    <span className={LEVEL_COLOR[section.level]}>{section.level.toLowerCase()}</span>
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
