import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, GitPullRequest, ArrowRight, Trophy, Clock } from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { ConfirmDialog } from "../../../components/ui/ConfirmDialog";
import toast from "../../../components/ui/toast";
import { canonicalUrl } from "../../../lib/seo.utils";
import {
  fetchFirstPRProgress,
  patchFirstPRProgress,
  issueCertificate,
  type Certificate
} from "./api/opensource.api";
import guideData from "./data/open-source-guide.json";
import GuideCompletionSection from "./components/GuideCompletionSection";
import { useAuthStore } from "../../../lib/auth.store";
import { useCoachStore } from "./stores/coach.store";
import { notifyLearningPathProgressChanged } from "./learning-paths.data";
import { NextInPathCard } from "./components/NextInPathCard";

interface Step {
  step: number;
  id: string;
  title: string;
  description: string;
  estimatedMinutes?: number;
}

const STEPS: Step[] = guideData.openSourceRoadmap as Step[];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function FirstPRRoadmapPage() {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthStore();
  const triggerCoach = useCoachStore((s: any) => s.triggerCoach);
  const [cert, setCert] = useState<Certificate | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetchFirstPRProgress()
      .then((completedStepIds: string[]) => {
        if (isMounted) setCompleted(new Set(completedStepIds));
      })
      .catch(() => {
        if (isMounted) setCompleted(new Set());
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });
    return () => { isMounted = false; };
  }, []);


  const toggle = useCallback(
    (id: string) => {
      const isCurrentlyCompleted = completed.has(id);
      const nextCompleted = !isCurrentlyCompleted;
      const isCompletingLastStep = nextCompleted && completed.size === STEPS.length - 1;

      setCompleted((prev: Set<string>) => {
        const next = new Set(prev);
        if (nextCompleted) next.add(id);
        else next.delete(id);
        return next;
      });

      if (isCompletingLastStep) {
        triggerCoach({
          trigger: "FIRST_PR_COMPLETE",
          context: { skills: user?.skills || [], completedGuides: ["First Pull Request Roadmap"] },
        });
      }

      void patchFirstPRProgress(id, nextCompleted)
        .then(() => notifyLearningPathProgressChanged())
        .catch(() => {
          setCompleted((prev: Set<string>) => {
            const rolledBack = new Set(prev);
            if (isCurrentlyCompleted) rolledBack.add(id);
            else rolledBack.delete(id);
            return rolledBack;
          });
          notifyLearningPathProgressChanged();
          toast.error("Failed to update progress. Please try again.");
        });
    },
    [completed, triggerCoach, user],
  );

  const totalSteps = STEPS.length;
  const pct = Math.round((completed.size / totalSteps) * 100);
  const allDone = completed.size === totalSteps;
  const totalEstimatedMinutes = STEPS.reduce((sum, s) => sum + (s.estimatedMinutes || 0), 0);
  const currentStep = STEPS.find((s) => !completed.has(s.id));

  useEffect(() => {
    if (allDone && !cert && user) {
      issueCertificate("First Pull Request Roadmap")
        .then(setCert)
        .catch(console.error);
    }
  }, [allDone, cert, user]);

  const completedMinutes = STEPS.filter((s) => completed.has(s.id)).reduce(
    (sum, s) => sum + (s.estimatedMinutes || 0),
    0,
  );
  const remainingMinutes = totalEstimatedMinutes - completedMinutes;

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "First Pull Request Guide - Open Source for Beginners",
    "description": "Step-by-step roadmap to making your first pull request on GitHub.",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
    "totalTime": `PT${totalEstimatedMinutes}M`,
    "step": STEPS.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.title,
      "text": s.description || "Follow the visual walkthrough steps.",
    })),
  };

  if (isLoading) {
    return (
      <div className="relative pb-12">
        <SEO
          title="First Pull Request Guide - Open Source for Beginners"
          description="Step-by-step roadmap to making your first pull request on GitHub."
          canonicalUrl={canonicalUrl("/student/opensource/first-pr")}
        />
        {/* Hero skeleton */}
        <div className="border-b border-stone-200 dark:border-white/10 pb-8 mb-8">
          <div className="h-3 w-32 bg-stone-200 dark:bg-white/10 rounded mb-6 animate-pulse" />
          <div className="h-10 w-80 max-w-full bg-stone-200 dark:bg-white/10 rounded mb-4 animate-pulse" />
          <div className="h-5 w-64 bg-stone-100 dark:bg-white/5 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-4 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-xl overflow-hidden mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-stone-50 dark:bg-stone-950 p-4 flex flex-col items-center gap-2">
              <div className="h-7 w-12 bg-stone-200 dark:bg-white/10 rounded animate-pulse" />
              <div className="h-3 w-16 bg-stone-100 dark:bg-white/5 rounded animate-pulse" />
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md p-5">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-stone-100 dark:bg-white/5 animate-pulse shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-56 bg-stone-100 dark:bg-white/5 rounded animate-pulse" />
                  <div className="h-3 w-40 bg-stone-100 dark:bg-white/5 rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative pb-12">
      <SEO
        title="First Pull Request Guide - Open Source for Beginners"
        description="Step-by-step roadmap to making your first pull request on GitHub. Learn git workflow, finding issues, and contributing to open source projects."
        keywords="first pull request, open source contribution, GitHub beginner, git workflow, contribute to open source"
        canonicalUrl={canonicalUrl("/student/opensource/first-pr")}
        ogImage="/og/og-first-pr.png"
        structuredData={howToSchema}
      />

      {/* ── Hero ────────────────────────────────────────── */}
      <div className="relative border-b border-stone-200 dark:border-white/10 pb-10 mb-8 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none dark:hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(23,23,23,0.04) 1px, transparent 1px)",
            backgroundSize: "140px 100%",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "140px 100%",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 bg-lime-400"
            />
            opensource / first-pr
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none text-stone-900 dark:text-stone-50 mb-4">
            Your first{" "}
            <span className="relative inline-block">
              <span className="relative z-10">contribution.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </h1>

          <p className="text-base text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
            A step-by-step journey from zero to your first merged pull request on GitHub.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="relative z-10 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-xl overflow-hidden"
        >
          {[
            { icon: GitPullRequest, value: totalSteps, label: "total steps" },
            { icon: CheckCircle2, value: completed.size, label: "completed" },
            { icon: Trophy, value: `${pct}%`, label: "progress" },
            {
              icon: Clock,
              value: allDone ? "Done!" : completed.size > 0 ? `${remainingMinutes}m` : `${totalEstimatedMinutes}m`,
              label: allDone ? "all steps done" : completed.size > 0 ? "remaining" : "est. total",
            },
          ].map((s) => (
            <div key={s.label} className="bg-stone-50 dark:bg-stone-950 p-4 sm:p-5 flex flex-col items-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 leading-snug text-center">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Completion banner ───────────────────────────── */}
      <AnimatePresence>
        {allDone && (
          <>
            <GuideCompletionSection
              headline="You're an open source contributor!"
              subtitle={`You've completed all ${totalSteps} steps. Time to find your next issue!`}
              certificateGuideName="First PR Roadmap"
              accentWord="contributor"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-8 relative rounded-md border border-stone-900 dark:border-white/10 bg-stone-900 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="relative p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-lime-400/15 border border-lime-400/30 flex items-center justify-center shrink-0">
                  <Trophy className="w-6 h-6 text-lime-400" />
                </div>
                <div className="flex-1">
                  <p className="text-base font-bold text-white leading-tight">
                    Roadmap complete. You are ready to contribute.
                  </p>
                  <p className="text-sm text-stone-400 mt-1">
                    {totalSteps} / {totalSteps} steps done. Your first pull request is within reach.
                  </p>
                  <div className="flex gap-3 mt-4 flex-wrap items-center">
                    <Link
                      to="/student/opensource"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-lime-400 text-stone-950 rounded-md text-xs font-bold hover:bg-lime-300 transition-colors no-underline"
                    >
                      Discover repos <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => setShowResetConfirm(true)}
                      className="text-xs font-mono uppercase tracking-widest text-stone-400 hover:text-stone-300 transition-colors bg-transparent border-0 cursor-pointer"
                    >
                      Reset progress
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ConfirmDialog
        open={showResetConfirm}
        onCancel={() => setShowResetConfirm(false)}
        title="Reset progress?"
        description="This will clear all completed steps. Your server-side progress will be reset."
        confirmLabel="Reset"
        confirmVariant="danger"
        onConfirm={() => {
          const toReset = Array.from(completed);
          setCompleted(new Set());
          toReset.forEach((id) => {
            void patchFirstPRProgress(id, false)
              .then(() => notifyLearningPathProgressChanged())
              .catch(() => {});
          });
          setShowResetConfirm(false);
        }}
      />

      {/* ── Step list ───────────────────────────────────── */}
      <motion.div
        className="space-y-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {STEPS.map((step) => {
          const done = completed.has(step.id);
          const inProgress = !done && currentStep?.id === step.id;

          return (
            <motion.div key={step.id} variants={itemVariants}>
              <Link
                to={`/student/opensource/first-pr/${step.id}`}
                className={`group flex items-center gap-4 bg-white dark:bg-stone-950 px-5 py-4 border transition-colors no-underline ${
                  done
                    ? "border-stone-200 dark:border-white/10 hover:border-stone-300 dark:hover:border-white/20"
                    : inProgress
                      ? "border-lime-400/50 dark:border-lime-400/30 hover:border-lime-400 dark:hover:border-lime-400/50"
                      : "border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30"
                } rounded-md`}
              >
                {/* Toggle button */}
                <Button
                  variant="ghost"
                  mode="icon"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggle(step.id);
                  }}
                  className="shrink-0"
                >
                  {done ? (
                    <CheckCircle2 className="w-5 h-5 text-lime-500 dark:text-lime-400" />
                  ) : (
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center border ${
                        inProgress
                          ? "border-lime-400/60 bg-lime-400/10"
                          : "border-stone-300 dark:border-white/20 bg-stone-100 dark:bg-white/5"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold tabular-nums ${
                          inProgress ? "text-lime-600 dark:text-lime-400" : "text-stone-500 dark:text-stone-400"
                        }`}
                      >
                        {step.step}
                      </span>
                    </div>
                  )}
                </Button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5">
                    <h3
                      className={`text-sm font-bold leading-tight truncate ${
                        done ? "text-stone-400 dark:text-stone-600" : "text-stone-900 dark:text-stone-50"
                      }`}
                    >
                      {step.title}
                    </h3>
                    {inProgress && (
                      <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 shrink-0">
                        current
                      </span>
                    )}
                    {done && (
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 shrink-0">
                        done
                      </span>
                    )}
                  </div>
                  {step.estimatedMinutes && (
                    <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600">
                      {step.estimatedMinutes} min
                    </p>
                  )}
                </div>

                <ArrowRight className="w-4 h-4 text-stone-300 dark:text-stone-700 group-hover:text-stone-500 dark:group-hover:text-stone-400 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-6">
        <NextInPathCard currentSlug="first-pr" completed={allDone} />
      </div>
    </div>
  );
}
