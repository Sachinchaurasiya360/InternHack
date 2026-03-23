import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, GitPullRequest, ArrowRight,
  Trophy,
} from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import guideData from "./data/open-source-guide.json";

// ─── Types ─────────────────────────────────────────────────────
interface Step {
  step: number;
  id: string;
  title: string;
  description: string;
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
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch { /* */ }
      return next;
    });
  }, []);

  const totalSteps = STEPS.length;
  const pct = Math.round((completed.size / totalSteps) * 100);
  const allDone = completed.size === totalSteps;

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
          { icon: GitPullRequest, value: totalSteps, label: "Steps", iconColor: "text-indigo-500" },
          { icon: CheckCircle2, value: completed.size, label: "Completed", iconColor: "text-green-500" },
          { icon: Trophy, value: `${pct}%`, label: "Progress", iconColor: "text-amber-500" },
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
              <p className="text-base font-bold text-green-900 dark:text-green-300">You're an open source contributor!</p>
              <p className="text-sm text-green-700 dark:text-green-400 mt-0.5">You've completed all {totalSteps} steps. Time to find your next issue!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Cards */}
      <div className="space-y-3">
        {STEPS.map((step, i) => {
          const done = completed.has(step.id);
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
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(step.id); }}
                  className="shrink-0"
                >
                  {done ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{step.step}</span>
                    </div>
                  )}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-bold mb-0.5 ${
                    done
                      ? "text-gray-400 dark:text-gray-500 line-through"
                      : "text-gray-950 dark:text-white"
                  }`}>
                    {step.title}
                  </h3>
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
