import { useState, useCallback } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronLeft, ChevronRight,
  CheckCircle2, Copy, Check, ExternalLink, Lightbulb, Info,
} from "lucide-react";
import { SEO } from "../../../../components/SEO";
import { canonicalUrl } from "../../../../lib/seo.utils";

interface Resource { title: string; url: string; type: string }
interface Command { label: string; code: string }
interface Step {
  step: number;
  id: string;
  title: string;
  description: string;
  mentor_guidance: string;
  details: string[];
  commands: Command[];
  resources: Resource[];
  tips: string[];
}

interface Props {
  steps: Step[];
  storageKey: string;
  basePath: string;        // e.g. "/student/opensource/read-codebase"
  seoSuffix: string;       // e.g. "Codebase Guide"
}

function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{label ?? "Command"}</span>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-gray-950 text-gray-100 text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
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

  const toggleComplete = useCallback(() => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (!step) return next;
      next.has(step.id) ? next.delete(step.id) : next.add(step.id);
      try { localStorage.setItem(storageKey, JSON.stringify([...next])); } catch { /* */ }
      return next;
    });
  }, [step, storageKey]);

  if (!step) return <Navigate to={basePath} replace />;

  const isDone = completed.has(step.id);
  const prev = stepIndex > 0 ? steps[stepIndex - 1] : null;
  const next = stepIndex < steps.length - 1 ? steps[stepIndex + 1] : null;

  return (
    <div className="relative pb-12">
      <SEO
        title={`${step.title} - ${seoSuffix}`}
        description={step.description}
        canonicalUrl={canonicalUrl(`${basePath}/${sectionSlug}`)}
      />

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
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{step.step}</span>
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-xl font-bold text-gray-950 dark:text-white truncate">
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
            <button
              onClick={() => prev && navigate(`${basePath}/${prev.id}`)}
              disabled={!prev}
              className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors"
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
            <span className="text-xs text-gray-400 dark:text-gray-500 px-2 font-medium tabular-nums">
              {step.step} / {steps.length}
            </span>
            <button
              onClick={() => next && navigate(`${basePath}/${next.id}`)}
              disabled={!next}
              className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors"
              title="Next"
            >
              <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-5">
        {/* Mentor's Guidance */}
        {step.mentor_guidance && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6"
          >
            <h2 className="text-lg font-bold text-gray-950 dark:text-white mb-4">Explanation</h2>
            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {step.mentor_guidance}
            </div>
          </motion.div>
        )}

        {/* Code Examples */}
        {step.commands.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-bold text-gray-950 dark:text-white">Code Examples</h2>
            {step.commands.map((cmd, i) => (
              <CodeBlock key={i} code={cmd.code} label={cmd.label} />
            ))}
          </motion.div>
        )}

        {/* Important Notes */}
        {step.details.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-2xl border border-white/60 dark:border-gray-700/40 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gray-100/80 dark:bg-gray-800/60 flex items-center justify-center backdrop-blur-sm">
                <Info className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="text-sm font-bold text-gray-950 dark:text-white">Important Notes</h3>
            </div>
            <ul className="space-y-3">
              {step.details.map((detail, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2.5">
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
            className="rounded-2xl border border-white/60 dark:border-gray-700/40 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gray-100/80 dark:bg-gray-800/60 flex items-center justify-center backdrop-blur-sm">
                <Lightbulb className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="text-sm font-bold text-gray-950 dark:text-white">Pro Tips</h3>
            </div>
            <ul className="space-y-3">
              {step.tips.map((tip, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2.5">
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
            className="rounded-2xl border border-white/60 dark:border-gray-700/40 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gray-100/80 dark:bg-gray-800/60 flex items-center justify-center backdrop-blur-sm">
                <ExternalLink className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="text-sm font-bold text-gray-950 dark:text-white">Resources</h3>
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
          className="flex items-center justify-between pt-2"
        >
          <button
            onClick={toggleComplete}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
              isDone
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50"
                : "bg-gray-950 text-white dark:bg-white dark:text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-100"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            {isDone ? "Completed" : "Mark as Complete"}
          </button>

          {next ? (
            <button
              onClick={() => navigate(`${basePath}/${next.id}`)}
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
            >
              Next Section
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          ) : (
            <Link
              to={basePath}
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors no-underline"
            >
              Back to Overview
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
}
