import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Lock } from "lucide-react";
import { sections, questions } from "./data";
import type { InterviewProgress } from "./data/types";
import { SEO } from "../../../components/SEO";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import { courseSchema, breadcrumbSchema } from "../../../lib/structured-data";
import { useAuthStore } from "../../../lib/auth.store";
import { LoginGate } from "../../../components/LoginGate";
import { CircularProgress } from "../../../components/ui/CircularProgress";
import api from "../../../lib/axios"

const STORAGE_KEY = "interview-progress";

function getLocalProgress(): InterviewProgress {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

    if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
      return {};
    }

    return raw as InterviewProgress;
  } catch {
    return {};
  }
}

function saveLocalProgress(progress: InterviewProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
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

export default function InterviewLessonsPage() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const [showGate, setShowGate] = useState(false);
  const [progress, setProgress] = useState<InterviewProgress>({});

  useEffect(() => {
  if (!isAuthenticated) {
    setProgress(getLocalProgress());
    return;
  }

  const loadProgress = async () => {
    try {
      const localProgress = getLocalProgress();

      const response = await api.get("/interview-progress");

      const serverData = response.data;

      const merged: InterviewProgress = {
        ...localProgress,
      };

      serverData.completedIds.forEach((id: string) => {
        merged[id] = { completed: true };
      });

      setProgress(merged);

      saveLocalProgress(merged);

      const migrated = localStorage.getItem("interview-progress-migrated");

      if (!migrated && Object.keys(localProgress).length > 0) {
        for (const [questionId, value] of Object.entries(localProgress)) {
          if (value.completed) {
            await api.patch(`/interview-progress`, {
             questionId: questionId, action: "complete"
            });
          }
        }

        localStorage.setItem("interview-progress-migrated", "true");
      }
    } catch (error) {
      console.error("Failed to load interview progress", error);

      setProgress(getLocalProgress());
    }
  };

  loadProgress();
}, [isAuthenticated]);

  const sectionStats = useMemo(() => {
    return sections.map((section) => {
      const sectionQuestions = questions.filter((q) => q.sectionId === section.id);
      const completed = sectionQuestions.filter((q) => progress[q.id]?.completed).length;
      const total = sectionQuestions.length;
      return { ...section, completed, total };
    });
  }, [progress]);

  const totalCompleted = Object.values(progress).filter((p) => p.completed).length;
  const totalQuestions = questions.length;
  const overallPct = totalQuestions > 0 ? Math.round((totalCompleted / totalQuestions) * 100) : 0;

  return (
    <div className="relative text-stone-900 dark:text-stone-50 pb-12">
      <SEO
        title="Interview Preparation - 300+ Questions & Answers"
        description="Prepare for tech interviews with 300+ questions covering JavaScript, React, Node.js, Python, SQL, System Design, Behavioral, and more."
        keywords="interview preparation, tech interview questions, JavaScript interview, React interview, system design interview"
        canonicalUrl={canonicalUrl("/learn/interview")}
        structuredData={[
          courseSchema({
            name: "Interview Preparation - 300+ Questions & Answers",
            description:
              "Prepare for tech interviews with 300+ questions covering JavaScript, React, Node.js, Python, SQL, System Design, Behavioral, and more.",
            url: `${SITE_URL}/learn/interview`,
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Learn", url: `${SITE_URL}/learn` },
            { name: "Interview Prep", url: `${SITE_URL}/learn/interview` },
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

      <div className="relative max-w-6xl mx-auto">
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
              learn / interview prep
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Walk in{" "}
              <span className="relative inline-block">
                <span className="relative z-10">ready.</span>
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
              Curated from basic to advanced, coding, theory, system design, and behavioral questions, graded by FAANG engineers.
            </p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span>
              questions
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {totalQuestions}
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
              {totalCompleted} / {totalQuestions}
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
              tracks / sections
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Question banks
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
            const basePath = "/learn/interview";
            const isComplete = pct === 100 && section.total > 0;
            const isLocked = !section.freeTier && !isAuthenticated;

            const cardClass =
              "group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline";

            const body = (
              <>
                {isComplete && (
                  <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3" /> complete
                  </span>
                )}
                {isLocked && (
                  <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
                    <Lock className="w-3 h-3" /> locked
                  </span>
                )}

                <div className="flex items-start gap-4 mb-4 pr-16">
                  {isLocked ? (
                    <div className="w-14 h-14 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5 text-stone-400 dark:text-stone-500" />
                    </div>
                  ) : (
                    <CircularProgress
                      progress={pct}
                      size={56}
                      strokeWidth={4}
                      progressClassName={isComplete ? "stroke-lime-500" : "stroke-stone-900 dark:stroke-stone-50"}
                      trackClassName="stroke-stone-100 dark:stroke-stone-800"
                      labelClassName="text-[11px] font-mono font-bold tabular-nums text-stone-900 dark:text-stone-50"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                      {section.title}
                    </h3>
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
                    {isLocked ? `${section.total} questions` : `${section.completed} / ${section.total} done`}
                  </MetaChip>
                  <MetaChip className={LEVEL_STYLE[section.level]}>{section.level}</MetaChip>
                </div>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                    {isLocked ? "sign in to unlock" : isComplete ? "review section" : "start practising"}
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
