import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, GitPullRequest, ArrowRight,
  Trophy,
} from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { canonicalUrl } from "../../../lib/seo.utils";
import guideData from "./data/open-source-guide.json";

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
const STORAGE_KEY = "first-pr-roadmap-completed";

// ─── Page ──────────────────────────────────────────────────────
export default function FirstPRRoadmapPage() {
  const [completed, setCompleted] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  const toggle = useCallback((id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch { /* */ }
      return next;
    });
  }, []);

  const totalSteps = STEPS.length;
  const pct = Math.round((completed.size / totalSteps) * 100);
  const allDone = completed.size === totalSteps;
  const totalEstimatedMinutes = STEPS.reduce((sum, step) => sum + (step.estimatedMinutes || 0), 0);

  const firstUncompletedIndex = useMemo(() => {
    const idx = STEPS.findIndex(s => !completed.has(s.id));
    return idx === -1 ? STEPS.length : idx;
  }, [completed]);

  return (
    <div className="relative pb-12">
      <SEO
        title="First Pull Request Guide - Open Source for Beginners"
        description="Step-by-step roadmap to making your first pull request on GitHub. Learn git workflow, finding issues, and contributing to open source projects."
        keywords="first pull request, open source contribution, GitHub beginner, git workflow, contribute to open source"
        canonicalUrl={canonicalUrl("/student/opensource/first-pr")}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
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
        className="text-center mb-10 mt-6"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-stone-950 dark:text-white mb-3">
          Your First <span className="text-gradient-accent">Contribution</span>
        </h1>
        <p className="text-lg text-stone-500 dark:text-stone-500 max-w-xl mx-auto">
          A mentor-guided journey from zero to your first merged pull request
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        {[
          { icon: GitPullRequest, value: totalSteps, label: "Steps", iconColor: "text-indigo-500" },
          { icon: CheckCircle2, value: completed.size, label: "Completed", iconColor: "text-green-500" },
          { icon: Trophy, value: `${pct}%`, label: "Progress", iconColor: "text-amber-500" },
          { icon: ArrowRight, value: `${totalEstimatedMinutes} min`, label: "Est. Time", iconColor: "text-indigo-500" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 p-5 text-center"
          >
            <stat.icon className={`w-6 h-6 ${stat.iconColor} mx-auto mb-3`} />
            <p className="font-display text-2xl font-bold text-stone-950 dark:text-white">{stat.value}</p>
            <p className="text-xs text-stone-400 dark:text-stone-500 font-medium mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress Bar */}
      <div className="space-y-2 mb-8">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-stone-700 dark:text-stone-300">Overall Progress</span>
          <span className="text-stone-700 dark:text-stone-300">{pct}%</span>
        </div>
        <div className="w-full h-1 bg-stone-100 dark:bg-stone-800 rounded-sm overflow-hidden">
          <div
            className="h-full bg-lime-500 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Completion banner */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mb-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-5 flex items-center gap-4"
          >
            <Trophy className="w-8 h-8 text-green-500 shrink-0" />
            <div>
              <p className="text-base font-bold text-green-900 dark:text-green-300">You shipped your first PR!</p>
              <p className="text-sm text-green-700 dark:text-green-400 mt-0.5">10 / 10 steps complete. Your open source journey has begun.</p>
              <div className="flex gap-4 mt-3 flex-wrap items-center">
                <Link
                  to="/student/opensource"
                  className="text-sm text-lime-700 dark:text-lime-400 underline font-medium"
                >
                  Discover repos to contribute to
                </Link>
                <button
                  onClick={() => {
                    if (window.confirm("Reset all steps?")) {
                      setCompleted(new Set());
                      try { localStorage.removeItem(STORAGE_KEY); } catch { /**/ }
                    }
                  }}
                  className="text-sm text-lime-700 dark:text-lime-400 border border-lime-400 px-3 py-0.5 rounded-lg font-medium"
                >
                  Start over
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Cards */}
      <div className="space-y-4">
        {STEPS.map((step, i) => {
          const done = completed.has(step.id);
          const inProgress = !done && i === firstUncompletedIndex;
          
          let borderStyles = "border-stone-200 dark:border-white/10";
          let numberStyles = "bg-stone-200 text-stone-600 dark:bg-stone-800 dark:text-stone-400";
          let badgeStyles = "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300";
          let statusText = "Upcoming";
          
          if (done) {
            borderStyles = "border-green-200 dark:border-green-800";
            numberStyles = "bg-green-600 text-white";
            badgeStyles = "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400";
            statusText = "Completed";
          } else if (inProgress) {
            borderStyles = "border-indigo-200 dark:border-indigo-800";
            numberStyles = "bg-indigo-600 text-white";
            badgeStyles = "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400";
            statusText = "In Progress";
          }

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.04, duration: 0.5 }}
            >
              <Link
                to={`/student/opensource/first-pr/${step.id}`}
                className={`group flex items-start sm:items-center gap-4 px-5 py-5 rounded-2xl border bg-white dark:bg-stone-900 hover:shadow-md transition hover:scale-[1.01] no-underline ${borderStyles}`}
              >
                {/* Step number */}
                <div className="flex-shrink-0 mt-1 sm:mt-0">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold ${numberStyles}`}>
                    {done ? <CheckCircle2 className="w-5 h-5 text-white" /> : i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className={`text-base font-bold ${
                      done
                        ? "text-stone-500 dark:text-stone-400 line-through"
                        : "text-stone-950 dark:text-white"
                    }`}>
                      {step.title}
                    </h3>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${badgeStyles}`}>
                      {statusText}
                    </span>
                  </div>
                  
                  <p className="line-clamp-2 text-sm text-stone-500 dark:text-stone-400 mb-2">
                    {step.description}
                  </p>
                  
                  {step.estimatedMinutes && (
                    <span className="text-xs font-medium text-stone-500 dark:text-stone-400 flex items-center gap-1">
                      ⏱ {step.estimatedMinutes} min
                    </span>
                  )}
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 self-center">
                  <Button
                    variant="ghost"
                    mode="icon"
                    size="sm"
                    className="pointer-events-none group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30"
                  >
                    <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
