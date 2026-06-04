import { useState, useCallback, useEffect } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronLeft, ChevronRight,
  CheckCircle2, ExternalLink, Lightbulb, Info, Code,
} from "lucide-react";
import { SEO } from "../../../../components/SEO";
import { Button } from "../../../../components/ui/button";
import { CodeBlock } from "../../../../components/ui/CodeBlock";
import { canonicalUrl } from "../../../../lib/seo.utils";
import { InlineCodeText } from "../../../../components/ui/InlineCodeText";
import { ReadingProgressBar } from "../../../../components/ReadingProgressBar";

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
  const [dismissedHint, setDismissedHint] = useState(() => {
    try { return localStorage.getItem("keyboard-nav-hint-dismissed") === "true"; }
    catch { return false; }
  });

  const toggleComplete = useCallback(() => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (!step) return next;
      if (next.has(step.id)) next.delete(step.id); else next.add(step.id);
      try { localStorage.setItem(storageKey, JSON.stringify([...next])); } catch { /* */ }
      return next;
    });
  }, [step, storageKey]);

  
useEffect(() => {
  if (!step) return;

  const saved = localStorage.getItem(
    `guide-feedback-${basePath}-${step.id}`
  );

  if (saved) {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRating(saved);
    setSubmitted(true);
  }
}, [step, basePath]);

  const prev = stepIndex > 0 ? steps[stepIndex - 1] : null;
  const next = stepIndex < steps.length - 1 ? steps[stepIndex + 1] : null;
  useKeyboardNavigation({
    prevPath: prev ? `${basePath}/${prev.id}` : null,
    nextPath: next ? `${basePath}/${next.id}` : null,
  });
  useEffect(() => {
    if (dismissedHint) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setDismissedHint(true);
        try { localStorage.setItem("keyboard-nav-hint-dismissed", "true"); } catch { /* */ }
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [dismissedHint]);

if (!step) return <Navigate to={basePath} replace />;
const submitFeedback = async (
  value: "up" | "down"
) => {
  if (!step || submitted) return;

  try {
    await fetch("/api/opensource/guide-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        guideId: basePath,
        stepId: step.id,
        rating: value,
      }),
    });

    localStorage.setItem(
      `guide-feedback-${basePath}-${step.id}`,
      value
    );

    setRating(value);
    setSubmitted(true);
  } catch {
    localStorage.setItem(
      `guide-feedback-${basePath}-${step.id}`,
      value
    );

    setRating(value);
    setSubmitted(true);
  }
};
  const isDone = completed.has(step.id);

  return (
    <div className="relative pb-12">
      <ReadingProgressBar />
      <SEO
        title={`${step.title} - ${seoSuffix}`}
        description={step.description}
        canonicalUrl={canonicalUrl(`${basePath}/${sectionSlug}`)}
      />

      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6"
      >
        <div className="flex items-center justify-between bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-white/10 px-6 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{step.step}</span>
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
              className="bg-stone-50 dark:bg-stone-800 rounded-xl"
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-stone-600 dark:text-stone-400" />
            </Button>
            <span className="text-xs text-stone-400 dark:text-stone-500 px-2 font-medium tabular-nums">
              {step.step} / {steps.length}
            </span>
            {!dismissedHint && (
              <span className="hidden sm:inline-flex text-[10px] font-mono text-gray-400 dark:text-gray-500 px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                ← → keys
              </span>
            )}
            <Button
              variant="ghost"
              mode="icon"
              onClick={() => next && navigate(`${basePath}/${next.id}`)}
              disabled={!next}
              className="bg-stone-50 dark:bg-stone-800 rounded-xl"
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
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                <Info className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-lg font-bold text-stone-950 dark:text-white">Explanation</h2>
            </div>
            <div className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
              {step.mentor_guidance}
            <h2 className="text-lg font-bold text-gray-950 dark:text-white mb-4">Explanation</h2>
            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              <InlineCodeText text={step.mentor_guidance} />
            </div>
          </motion.div>
        )}

        {step.commands.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-2xl p-6 space-y-4"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                <Code className="w-4 h-4 text-stone-600 dark:text-stone-400" />
              </div>
              <h2 className="text-lg font-bold text-stone-950 dark:text-white">Code Examples</h2>
            </div>
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
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-sm font-bold text-stone-950 dark:text-white">Important Notes</h3>
            </div>
            <ul className="space-y-3">
              {step.details.map((detail, i) => (
                <li key={i} className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-2 shrink-0" />
                  {detail}
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed list-disc">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 shrink-0" />
                  <InlineCodeText text={detail} />
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
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-sm font-bold text-stone-950 dark:text-white">Pro Tips</h3>
            </div>
            <ul className="space-y-3">
              {step.tips.map((tip, i) => (
                <li key={i} className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-2 shrink-0" />
                  {tip}
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed list-disc">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 shrink-0" />
                  <InlineCodeText text={tip} />
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
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <ExternalLink className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-sm font-bold text-stone-950 dark:text-white">Resources</h3>
            </div>
            <ul className="space-y-3">
              {step.resources.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-2 shrink-0" />
                <li key={i} className="flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 shrink-0" />
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
<div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-2xl p-6">
  <p className="text-sm font-medium mb-3">
    Was this step helpful?
  </p>

  <div className="flex gap-2">
    <Button
      onClick={() => submitFeedback("up")}
      disabled={submitted}
      variant={rating === "up" ? "mono" : "outline"}
    >
      👍 Thumbs Up
    </Button>

    <Button
      onClick={() => submitFeedback("down")}
      disabled={submitted}
      variant={rating === "down" ? "mono" : "outline"}
    >
      👎 Thumbs Down
    </Button>
  </div>

  {submitted && (
    <p className="text-green-600 text-sm mt-2">
      Thanks for your feedback!
    </p>
  )}
</div>
        {/* Mark as Complete + Next */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="sticky bottom-0 py-4 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-white/10 z-10"
        >
          <div className="flex items-center justify-between">
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
                onClick={() => navigate(`${basePath}/${next.id}`)}
                className="group text-stone-600 dark:text-stone-400 rounded-xl"
              >
                Next Section
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            ) : (
              <Button asChild variant="outline" className="group text-stone-600 dark:text-stone-400 rounded-xl">
                <Link to={basePath} className="no-underline">
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