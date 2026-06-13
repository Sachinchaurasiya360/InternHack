import { useState, useCallback, useEffect } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  Lightbulb,
  Info,
} from "lucide-react";
import { VideoEmbed } from "../../../components/ui/VideoEmbed";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import toast from "../../../components/ui/toast";
import { canonicalUrl } from "../../../lib/seo.utils";
import {
  fetchFirstPRProgress,
  patchFirstPRProgress,
} from "./api/opensource.api";
import guideData from "./data/open-source-guide.json";
import { useKeyboardNavigation } from "../../../hooks/useKeyboardNavigation";
import { ReadingProgressBar } from "../../../components/ReadingProgressBar";
import { notifyLearningPathProgressChanged } from "./learning-paths.data";

// ─── Types ─────────────────────────────────────────────────────
interface Resource {
  title: string;
  url: string;
  type: string;
}
interface Command {
  label: string;
  code: string;
}
interface Step {
  step: number;
  id: string;
  title: string;
  description: string;
  estimatedMinutes?: number;
  mentor_guidance: string;
  details: string[];
  commands: Command[];
  resources: Resource[];
  tips: string[];
  videoUrl?: string;
}

function CommandBlock({ label, code }: Command) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/40 px-4 py-3">
        <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 truncate">
          {label}
        </span>
      </div>
      <pre className="overflow-x-auto bg-gray-950 dark:bg-black px-4 py-4 text-xs sm:text-sm font-mono leading-relaxed text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

const STEPS: Step[] = guideData.openSourceRoadmap as Step[];

// ─── Page ──────────────────────────────────────────────────────
export default function FirstPRSectionPage() {
  const { sectionSlug } = useParams<{ sectionSlug: string }>();
  const navigate = useNavigate();
  const stepIndex = STEPS.findIndex((s) => s.id === sectionSlug);
  const step = STEPS[stepIndex];

  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

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

  const toggleComplete = useCallback(() => {
    if (!step) return;

    const isCurrentlyCompleted = completed.has(step.id);

    setCompleted((prev) => {
      const next = new Set(prev);
      if (isCurrentlyCompleted) next.delete(step.id);
      else next.add(step.id);
      return next;
    });

    void patchFirstPRProgress(step.id, !isCurrentlyCompleted)
      .then(() => notifyLearningPathProgressChanged())
      .catch(() => {
        setCompleted((prev) => {
          const rolledBack = new Set(prev);
          if (isCurrentlyCompleted) rolledBack.add(step.id);
          else rolledBack.delete(step.id);
          return rolledBack;
        });
        notifyLearningPathProgressChanged();
        toast.error("Failed to update progress. Please try again.");
      });
  }, [completed, step]);

  // ---> FIX: Define variables and call hook BEFORE the early return <---
  const prev = stepIndex > 0 ? STEPS[stepIndex - 1] : null;
  const next = stepIndex < STEPS.length - 1 ? STEPS[stepIndex + 1] : null;

  useKeyboardNavigation({
    prevPath: prev ? `/student/opensource/first-pr/${prev.id}` : null,
    nextPath: next ? `/student/opensource/first-pr/${next.id}` : null,
  });

  if (isLoading) {
    return (
      <div className="relative pb-12">
        <SEO
          title="First PR Guide - Open Source for Beginners"
          description={
            step?.description ||
            "Learn each step of your first pull request journey."
          }
          canonicalUrl={canonicalUrl(
            `/student/opensource/first-pr/${sectionSlug}`,
          )}
        />

        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-150 h-150 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="mx-auto flex min-h-[60vh] max-w-4xl items-center justify-center px-4">
          <div className="w-full max-w-2xl space-y-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm animate-pulse">
            <div className="h-8 w-40 rounded-xl bg-gray-100 dark:bg-gray-800" />
            <div className="h-12 w-full rounded-2xl bg-gray-100 dark:bg-gray-800" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-24 rounded-2xl bg-gray-100 dark:bg-gray-800" />
              <div className="h-24 rounded-2xl bg-gray-100 dark:bg-gray-800" />
            </div>
            <div className="h-4 w-3/4 rounded-full bg-gray-100 dark:bg-gray-800" />
            <div className="h-4 w-2/3 rounded-full bg-gray-100 dark:bg-gray-800" />
          </div>
        </div>
      </div>
    );
  }

  // ---> The guard is now safely below all hook calls <---
  if (!step) return <Navigate to="/student/opensource/first-pr" replace />;

  const isDone = completed.has(step.id);

  return (
    <div className="relative pb-12">
      <ReadingProgressBar />
      <SEO
        title={`${step.title} - First PR Guide`}
        description={
          step.description ||
          `Learn ${step.title} in our step-by-step first pull request guide.`
        }
        canonicalUrl={canonicalUrl(
          `/student/opensource/first-pr/${sectionSlug}`,
        )}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6"
      >
        <div className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 px-6 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                {step.step}
              </span>
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-xl font-bold text-gray-950 dark:text-white truncate">
                {step.title}
              </h1>
              {step.estimatedMinutes && (
                <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
                  ~{step.estimatedMinutes} min
                </span>
              )}
              {isDone && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Completed
                </span>
              )}
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-1 shrink-0">
            <Button
              variant="ghost"
              mode="icon"
              onClick={() =>
                prev && navigate(`/student/opensource/first-pr/${prev.id}`)
              }
              disabled={!prev}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl"
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </Button>
            <span className="text-xs text-gray-400 dark:text-gray-500 px-2 font-medium tabular-nums">
              {step.step} / {STEPS.length}
            </span>
            <Button
              variant="ghost"
              mode="icon"
              onClick={() =>
                next && navigate(`/student/opensource/first-pr/${next.id}`)
              }
              disabled={!next}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl"
              title="Next"
            >
              <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-5">
        {/* Explanation (Mentor's Guidance) */}
        {step.mentor_guidance && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-900/10 p-6"
          >
            <h2 className="text-lg font-bold text-gray-950 dark:text-white mb-4">
              Explanation
            </h2>
            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {step.mentor_guidance}
            </div>
          </motion.div>
        )}

        {step.videoUrl && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
          >
            <VideoEmbed url={step.videoUrl} title={`Watch: ${step.title}`} />
          </motion.div>
        )}

        {/* Code Examples (Commands) */}
        {step.commands.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-900/10 p-6 space-y-4"
          >
            <h2 className="text-lg font-bold text-gray-950 dark:text-white">
              Code Examples
            </h2>
            {step.commands.map((cmd, i) => (
              <CommandBlock
                key={`${step.id}-${cmd.label || i}`}
                label={cmd.label}
                code={cmd.code}
              />
            ))}
          </motion.div>
        )}

        {/* Important Notes (Details) */}
        {step.details.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10 p-6"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-sm font-bold text-gray-950 dark:text-white">
                Important Notes
              </h3>
            </div>
            <ul className="space-y-3">
              {step.details.map((detail, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Pro Tips */}
        {step.tips.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10 p-6"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center ">
                <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-sm font-bold text-gray-950 dark:text-white">
                Pro Tips
              </h3>
            </div>
            <ul className="space-y-3">
              {step.tips.map((tip, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Resources */}
        {step.resources.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-2xl border border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/10 p-6"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <ExternalLink className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-sm font-bold text-gray-950 dark:text-white">
                Resources
              </h3>
            </div>
            <ul className="space-y-3">
              {step.resources.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 shrink-0" />
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition-colors inline-flex items-center gap-1.5 leading-relaxed"
                  >
                    {r.title}
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Mark as Complete + Next */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex items-center justify-between sticky bottom-0 sm:static bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-white/10 shadow-[0_-4px_8px_rgba(0,0,0,0.05)] px-4 py-3 -mx-4"
        >
          <div className="flex items-center justify-between w-full">
            <Button
              variant={isDone ? "ghost" : "mono"}
              onClick={toggleComplete}
              className={
                isDone
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 rounded-xl"
                  : "rounded-xl"
              }
            >
              <CheckCircle2 className="w-4 h-4" />
              {isDone ? "Completed" : "Mark as Complete"}
            </Button>

            {next ? (
              <Button
                variant="outline"
                onClick={() =>
                  navigate(`/student/opensource/first-pr/${next.id}`)
                }
                className="group text-gray-600 dark:text-gray-400 rounded-xl"
              >
                Next Section
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            ) : (
              <Button
                asChild
                variant="outline"
                className="group text-gray-600 dark:text-gray-400 rounded-xl"
              >
                <Link
                  to="/student/opensource/first-pr"
                  className="no-underline"
                >
                  Back to Overview
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
