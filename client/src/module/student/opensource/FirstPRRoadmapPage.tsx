import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, GitPullRequest, ArrowRight, Trophy } from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { ConfirmDialog } from "../../../components/ui/ConfirmDialog";
import toast from "../../../components/ui/toast";
import { canonicalUrl } from "../../../lib/seo.utils";
import {
  fetchFirstPRProgress,
  patchFirstPRProgress,
} from "./api/opensource.api";
import guideData from "./data/open-source-guide.json";
import { useAuthStore } from "../../../lib/auth.store";
import { useCoachStore } from "./stores/coach.store";

// ─── Types ─────────────────────────────────────────────────────
interface Step {
  step: number;
  id: string;
  title: string;
  description: string;
  estimatedMinutes?: number;
}

// ─── Data ──────────────────────────────────────────────────────
const STEPS: Step[] = guideData.openSourceRoadmap as Step[];
// ─── Page ──────────────────────────────────────────────────────
export default function FirstPRRoadmapPage() {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthStore();
  const triggerCoach = useCoachStore((s) => s.triggerCoach);

  useEffect(() => {
    let isMounted = true;

    fetchFirstPRProgress()
      .then((completedStepIds: string[]) => {
        if (isMounted) {
          setCompleted(new Set(completedStepIds));
        }
      })
      .catch(() => {
        if (isMounted) {
          setCompleted(new Set());
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const toggle = useCallback(
    (id: string) => {
      const isCurrentlyCompleted = completed.has(id);
      const nextCompleted = !isCurrentlyCompleted;

      const isCompletingLastStep = nextCompleted && completed.size === STEPS.length - 1;

      setCompleted((prev) => {
        const next = new Set(prev);
        if (nextCompleted) next.add(id);
        else next.delete(id);
        return next;
      });

      // Trigger coach if this click completes the roadmap
      if (isCompletingLastStep) {
        triggerCoach({
          trigger: "FIRST_PR_COMPLETE",
          context: {
            skills: user?.skills || [],
            completedGuides: ["First Pull Request Roadmap"],
          },
        });
      }

      void patchFirstPRProgress(id, nextCompleted).catch(() => {
        setCompleted((prev) => {
          const rolledBack = new Set(prev);
          if (isCurrentlyCompleted) rolledBack.add(id);
          else rolledBack.delete(id);
          return rolledBack;
        });
        toast.error("Failed to update progress. Please try again.");
      });
    },
    [completed],
  );

  const totalSteps = STEPS.length;
  const pct = Math.round((completed.size / totalSteps) * 100);
  const allDone = completed.size === totalSteps;
  const totalEstimatedMinutes = STEPS.reduce(
    (sum, step) => sum + (step.estimatedMinutes || 0),
    0,
  );
  const currentStep = STEPS.find((s) => !completed.has(s.id));
  const completedMinutes = STEPS.filter((s) => completed.has(s.id)).reduce(
    (sum, s) => sum + (s.estimatedMinutes || 0),
    0,
  );
  const remainingMinutes = totalEstimatedMinutes - completedMinutes;

  if (isLoading) {
    return (
      <div className="relative pb-12">
        <SEO
          title="First Pull Request Guide - Open Source for Beginners"
          description="Step-by-step roadmap to making your first pull request on GitHub. Learn git workflow, finding issues, and contributing to open source projects."
          keywords="first pull request, open source contribution, GitHub beginner, git workflow, contribute to open source"
          canonicalUrl={canonicalUrl("/student/opensource/first-pr")}
        />

        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-150 h-150 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="text-center mb-10 mt-6">
          <div className="mx-auto h-12 w-96 max-w-full rounded-2xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
          <div className="mx-auto mt-4 h-6 w-[28rem] max-w-full rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
            >
              <div className="mx-auto mb-3 h-6 w-6 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="mx-auto h-8 w-16 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="mx-auto mt-3 h-3 w-12 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 px-5 py-5 rounded-2xl border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse shrink-0" />
                <div className="flex-1 min-w-0 space-y-3">
                  <div className="h-5 w-full max-w-md rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
                  <div className="h-4 w-3/4 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
                </div>
                <div className="h-4 w-4 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse shrink-0" />
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
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
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
          Your First <span className="text-gradient-accent">Contribution</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          A mentor-guided journey from zero to your first merged pull request
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
          {
            icon: GitPullRequest,
            value: totalSteps,
            label: "Steps",
            iconColor: "text-indigo-500",
          },
          {
            icon: CheckCircle2,
            value: completed.size,
            label: "Completed",
            iconColor: "text-green-500",
          },
          {
            icon: Trophy,
            value: `${pct}%`,
            label: "Progress",
            iconColor: "text-amber-500",
          },
          {
            icon: ArrowRight,
            value: allDone
              ? "Done!"
              : completed.size > 0
                ? `${remainingMinutes} min left`
                : `${totalEstimatedMinutes} min total`,
            label: "Est. Time",
            iconColor: "text-indigo-500",
          },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
          >
            <stat.icon className={`w-6 h-6 ${stat.iconColor} mx-auto mb-3`} />
            <p className="font-display text-2xl font-bold text-gray-950 dark:text-white">
              {stat.value}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Completion banner */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8 rounded-2xl border border-green-200/80 dark:border-green-800 bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 p-5 shadow-lg shadow-green-100/40 dark:shadow-green-950/20 flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 dark:bg-white/5 border border-green-200/70 dark:border-green-800 shrink-0">
              <Trophy className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-base font-bold text-green-950 dark:text-green-200">
                Congratulations, you completed your first PR roadmap.
              </p>
              <p className="text-sm text-green-800 dark:text-green-300 mt-0.5">
                10 / 10 steps complete. You are ready to contribute with
                confidence.
              </p>
              <div className="flex gap-4 mt-3 flex-wrap items-center">
                <Link
                  to="/student/opensource"
                  className="text-sm text-lime-700 dark:text-lime-400 underline font-medium"
                >
                  Discover repos to contribute to
                </Link>
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="text-sm text-lime-700 dark:text-lime-400 border border-lime-400 px-3 py-0.5 rounded-lg font-medium"
                >
                  Start over
                </button>
              </div>
            </div>
          </motion.div>
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
            void patchFirstPRProgress(id, false).catch(() => {});
          });
        }}
      />

      {/* Section Cards */}
      <div className="space-y-3">
        {STEPS.map((step, i) => {
          const done = completed.has(step.id);
          const inProgress = !done && currentStep?.id === step.id;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.04, duration: 0.5 }}
            >
              <Link
                to={`/student/opensource/first-pr/${step.id}`}
                className={`group flex items-center gap-4 bg-white dark:bg-gray-900 px-5 py-5 rounded-2xl border transition-all duration-300 no-underline ${
                  done
                    ? "border-green-200 dark:border-green-800 hover:shadow-lg hover:shadow-green-100/50 dark:hover:shadow-green-900/20"
                    : "border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50"
                }`}
              >
                {/* Step number / check */}
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
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        inProgress
                          ? "bg-indigo-100 dark:bg-indigo-900/40 ring-2 ring-indigo-400/60"
                          : "bg-gray-100 dark:bg-gray-800"
                      }`}
                    >
                      <span
                        className={`text-xs font-bold ${
                          inProgress
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {step.step}
                      </span>
                    </div>
                  )}
                </Button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <h3
                      className={`text-sm font-bold ${
                        done
                          ? "text-gray-400 dark:text-gray-500 line-through"
                          : "text-gray-950 dark:text-white"
                      }`}
                    >
                      {step.title}
                    </h3>
                    {done && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        Completed
                      </span>
                    )}
                    {inProgress && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400">
                        In Progress
                      </span>
                    )}
                    {!done && !inProgress && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        Upcoming
                      </span>
                    )}
                  </div>
                  {step.estimatedMinutes && (
                    <p className="text-xs font-mono text-gray-400 dark:text-gray-500">
                      ~{step.estimatedMinutes} min
                    </p>
                  )}
                  <p className="text-xs text-gray-400 dark:text-gray-500 line-clamp-1">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
