import { useState, useCallback, useEffect } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronLeft, ChevronRight,
  CheckCircle2, ExternalLink, Lightbulb, Info,
} from "lucide-react";
import { VideoEmbed } from "../../../../components/ui/VideoEmbed";
import { SEO } from "../../../../components/SEO";
import { Button } from "../../../../components/ui/button";
import { CodeBlock } from "../../../../components/ui/CodeBlock";
import { canonicalUrl } from "../../../../lib/seo.utils";
import { QuizBlock, type QuizQuestion } from "../../../../components/quiz/QuizBlock";
import api from "../../../../lib/axios";
import { notifyLearningPathProgressChanged } from "../learning-paths.data";

interface Resource { title: string; url: string; type: string }
interface Command { label: string; code: string }
import { useKeyboardNavigation } from "../../../../hooks/useKeyboardNavigation";
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
  quiz?: QuizQuestion[];
  videoUrl?: string;
}

interface Props {
  steps: Step[];
  storageKey: string;
  basePath: string;
  seoSuffix: string;
}


export default function GuideSectionPage({ steps, storageKey, basePath, seoSuffix }: Props) {
  const { sectionSlug } = useParams<{ sectionSlug: string }>();
  const navigate = useNavigate();
  const stepIndex = steps.findIndex((s) => s.id === sectionSlug);
  const step = steps[stepIndex];

  const [completed, setCompleted] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch { return new Set(); }
  });
  const [rating, setRating] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showReasons, setShowReasons] = useState(false);


  const toggleComplete = useCallback(() => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (!step) return next;
      if (next.has(step.id)) next.delete(step.id); else next.add(step.id);
      try { localStorage.setItem(storageKey, JSON.stringify([...next])); } catch { /* */ }
      notifyLearningPathProgressChanged();
      return next;
    });
  }, [step, storageKey]);

  useEffect(() => {
    if (!step) return;

    const savedRaw = localStorage.getItem(`guide-feedback-${basePath}-${step.id}`);
    if (savedRaw) {
      try {
        const saved = JSON.parse(savedRaw);
        // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate saved feedback from localStorage
        setRating(saved.rating);
      } catch {
        setRating(savedRaw);
      }
      setSubmitted(true);
    }
  }, [step, basePath]);



  const prev = stepIndex > 0 ? steps[stepIndex - 1] : null;
  const next = stepIndex < steps.length - 1 ? steps[stepIndex + 1] : null;
  useKeyboardNavigation({
    prevPath: prev ? `${basePath}/${prev.id}` : null,
    nextPath: next ? `${basePath}/${next.id}` : null,
  });

if (!step) return <Navigate to={basePath} replace />;

  const handleThumbsDown = () => {
    if (!step || submitted) return;
    setShowReasons(true);
  };

  const submitFeedback = async (value: "up" | "down", reason?: string) => {
    if (!step || submitted) return;

    try {
      await api.post("/opensource/guide-feedback", {
        guideId: basePath,
        stepId: step.id,
        rating: value,
        reason,
      });

      const entry = JSON.stringify({ rating: value, reason });
      localStorage.setItem(`guide-feedback-${basePath}-${step.id}`, entry);
      setRating(value);
      setSubmitted(true);
      setShowReasons(false);
    } catch {
      // Fallback to local only if server fails
      const entry = JSON.stringify({ rating: value, reason });
      localStorage.setItem(`guide-feedback-${basePath}-${step.id}`, entry);
      setRating(value);
      setSubmitted(true);
      setShowReasons(false);
    }
  };

  const isDone = completed.has(step.id);

  return (
    <div className="relative pb-28 sm:pb-12">
      <SEO
        title={`${step.title} - ${seoSuffix}`}
        description={step.description}
        canonicalUrl={canonicalUrl(`${basePath}/${sectionSlug}`)}
      />

      {/* Mobile progress bar, fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-30 h-1 bg-stone-200 dark:bg-stone-800 sm:hidden">
        <div
          className="h-full bg-lime-400 transition-all duration-500"
          style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
        />
      </div>

      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-stone-100 dark:bg-stone-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6"
      >
        <div className="flex items-center justify-between bg-white dark:bg-stone-900 rounded-md border border-stone-100 dark:border-stone-800 px-6 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-md bg-stone-50 dark:bg-stone-800 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-stone-700 dark:text-stone-300">{step.step}</span>
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-xl font-bold text-stone-950 dark:text-white truncate">
                {step.title}
              </h1>
              {isDone && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Completed
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <Button
              variant="ghost"
              mode="icon"
              onClick={() => prev && navigate(`${basePath}/${prev.id}`)}
              disabled={!prev}
              className="bg-stone-50 dark:bg-stone-800 rounded-md"
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-stone-600 dark:text-stone-400" />
            </Button>
            <span className="text-xs text-stone-400 dark:text-stone-500 px-2 font-medium tabular-nums">
              {step.step} / {steps.length}
            </span>
            <Button
              variant="ghost"
              mode="icon"
              onClick={() => next && navigate(`${basePath}/${next.id}`)}
              disabled={!next}
              className="bg-stone-50 dark:bg-stone-800 rounded-md"
              title="Next"
            >
              <ChevronRight className="w-4 h-4 text-stone-600 dark:text-stone-400" />
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-5">
        {step.mentor_guidance && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-md p-6"
          >
            <h2 className="text-lg font-bold text-stone-950 dark:text-white mb-4">Explanation</h2>
            <div className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
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

        {step.commands.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-bold text-stone-950 dark:text-white">Code Examples</h2>
            {step.commands.map((cmd, i) => (
              <CodeBlock key={`${step.id}-${cmd.label || i}`} code={cmd.code} label={cmd.label} language="bash" />
            ))}
          </motion.div>
        )}

        {step.details.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-md border border-white/60 dark:border-stone-700/40 bg-white/40 dark:bg-stone-900/40 backdrop-blur-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-stone-100/80 dark:bg-stone-800/60 flex items-center justify-center backdrop-blur-sm">
                <Info className="w-4 h-4 text-stone-500 dark:text-stone-400" />
              </div>
              <h3 className="text-sm font-bold text-stone-950 dark:text-white">Important Notes</h3>
            </div>
            <ul className="space-y-3">
              {step.details.map((detail, i) => (
                <li key={i} className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-2 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {step.tips.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="rounded-md border border-white/60 dark:border-stone-700/40 bg-white/40 dark:bg-stone-900/40 backdrop-blur-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-stone-100/80 dark:bg-stone-800/60 flex items-center justify-center backdrop-blur-sm">
                <Lightbulb className="w-4 h-4 text-stone-500 dark:text-stone-400" />
              </div>
              <h3 className="text-sm font-bold text-stone-950 dark:text-white">Pro Tips</h3>
            </div>
            <ul className="space-y-3">
              {step.tips.map((tip, i) => (
                <li key={i} className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-2 shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {step.resources.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-md border border-white/60 dark:border-stone-700/40 bg-white/40 dark:bg-stone-900/40 backdrop-blur-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-stone-100/80 dark:bg-stone-800/60 flex items-center justify-center backdrop-blur-sm">
                <ExternalLink className="w-4 h-4 text-stone-500 dark:text-stone-400" />
              </div>
              <h3 className="text-sm font-bold text-stone-950 dark:text-white">Resources</h3>
            </div>
            <ul className="space-y-3">
              {step.resources.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-2 shrink-0" />
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors inline-flex items-center gap-1.5 leading-relaxed"
                  >
                    {r.title}
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {step.quiz && step.quiz.length > 0 && (
          <QuizBlock quiz={step.quiz} />
        )}

        <div className="rounded-md border border-stone-200 dark:border-stone-700 p-4">
          <p className="text-sm font-medium mb-3 text-stone-900 dark:text-stone-100">
            Was this step helpful?
          </p>
          <div className="flex gap-2">
            <Button
              onClick={() => submitFeedback("up")}
              disabled={submitted}
              variant={rating === "up" ? "mono" : "outline"}
              size="sm"
            >
              👍 Thumbs Up
            </Button>
            <Button
              onClick={handleThumbsDown}
              disabled={submitted}
              variant={rating === "down" ? "mono" : "outline"}
              size="sm"
            >
              👎 Thumbs Down
            </Button>
          </div>

          {showReasons && !submitted && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 pt-4 border-t border-stone-100 dark:border-stone-800"
            >
              <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
                How can we improve this step?
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "too_complex", label: "Too complex" },
                  { id: "missing_info", label: "Missing information" },
                  { id: "outdated", label: "Outdated or broken" },
                ].map((r) => (
                  <Button
                    key={r.id}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => submitFeedback("down", r.id)}
                  >
                    {r.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}

          {submitted && (
            <p className="text-green-600 dark:text-green-400 text-sm mt-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Thanks for your feedback!
            </p>
          )}
        </div>

        {/* Mark as Complete + Next */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="pt-2"
        >
          <div className="flex items-center justify-between">
            <Button
              variant={isDone ? "ghost" : "mono"}
              onClick={toggleComplete}
              className={
                isDone
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 rounded-md"
                  : "rounded-md"
              }
            >
              <CheckCircle2 className="w-4 h-4" />
              {isDone ? "Completed" : "Mark as Complete"}
            </Button>

            {next ? (
              <Button
                variant="outline"
                onClick={() => navigate(`${basePath}/${next.id}`)}
                className="group text-stone-600 dark:text-stone-400 rounded-md"
              >
                Next Section
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            ) : (
              <Button asChild variant="outline" className="group text-stone-600 dark:text-stone-400 rounded-md">
                <Link to={basePath} className="no-underline">
                  Back to Overview
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
    </div>

      {/* Mobile fixed bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center gap-2 sm:hidden">
        <button
          type="button"
          onClick={() => prev && navigate(`${basePath}/${prev.id}`)}
          disabled={!prev}
          aria-label="Previous step"
          className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl border border-gray-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={toggleComplete}
          className={`flex-1 min-h-[44px] rounded-xl text-sm font-bold transition-colors ${
            isDone
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-gray-950 dark:bg-white text-white dark:text-gray-950"
          }`}
        >
          {isDone ? "✓ Completed" : "Mark Complete"}
        </button>

        <button
          type="button"
          onClick={() => next && navigate(`${basePath}/${next.id}`)}
          disabled={!next}
          aria-label="Next step"
          className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl border border-gray-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
