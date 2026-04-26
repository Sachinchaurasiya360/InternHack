import { useState, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  ExternalLink,
  Lightbulb,
  MessageCircle,
  AlertTriangle,
  BookOpen,
  Link2,
  FileText,
  ChevronDown,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { canonicalUrl } from "../../../lib/seo.utils";
import guideData from "./data/gsoc-proposal-guide.json";

// ─── Types ─────────────────────────────────────────────────────
interface Resource { title: string; url: string; type: string }
interface Step {
  step: number;
  id: string;
  title: string;
  description: string;
  level: string;
  mentor_guidance: string;
  details: string[];
  tips: string[];
  mistakes: string[];
  resources: Resource[];
}

const STEPS: Step[] = guideData.gsocProposalRoadmap as Step[];
const PROPOSAL_TEMPLATE = guideData.proposalTemplate;
const STORAGE_KEY = "gsoc-proposal-roadmap-completed";

// ─── Helpers ───────────────────────────────────────────────────
function getCompleted(): Set<string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

// ─── Copy Button ────────────────────────────────────────────────
function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={copy}
      className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copied!" : label}
    </Button>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function GSoCProposalStepPage() {
  const { sectionSlug } = useParams<{ sectionSlug: string }>();
  const stepIndex = STEPS.findIndex((s) => s.id === sectionSlug);
  const step = STEPS[stepIndex];

  const [completed, setCompleted] = useState<Set<string>>(getCompleted);
  const [showTemplate, setShowTemplate] = useState(false);

  const toggleComplete = useCallback(() => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (!step) return next;
      next.has(step.id) ? next.delete(step.id) : next.add(step.id);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch { /* */ }
      return next;
    });
  }, [step]);

  if (!step) return <Navigate to="/student/opensource/gsoc-proposal" replace />;

  const isDone = completed.has(step.id);
  const prev = stepIndex > 0 ? STEPS[stepIndex - 1] : null;
  const next = stepIndex < STEPS.length - 1 ? STEPS[stepIndex + 1] : null;
  const isLastStep = stepIndex === STEPS.length - 1;

  return (
    <div className="relative pb-12">
      <SEO
        title={`${step.title} - GSoC Proposal Guide`}
        description={step.description || `Learn about ${step.title} in our GSoC proposal writing guide.`}
        canonicalUrl={canonicalUrl(`/student/opensource/gsoc-proposal/${sectionSlug}`)}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-gray-100 dark:bg-gray-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-gray-100 dark:bg-gray-900/20 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 mb-8"
      >
        {/* Title card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-gray-600 dark:text-gray-400">{step.step}</span>
              </div>
              <h1 className="text-xl font-bold text-gray-950 dark:text-white">{step.title}</h1>
            </div>
            <Button
              variant="outline"
              onClick={toggleComplete}
              className={`shrink-0 rounded-xl ${
                isDone
                  ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                  : ""
              }`}
            >
              {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
              {isDone ? "Completed" : "Mark Complete"}
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>

          {/* Lesson counter + nav */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            {prev ? (
              <Link
                to={`/student/opensource/gsoc-proposal/${prev.id}`}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors no-underline"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Link>
            ) : <span />}
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
              {step.step} of {STEPS.length}
            </span>
            {next ? (
              <Link
                to={`/student/opensource/gsoc-proposal/${next.id}`}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors no-underline"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : <span />}
          </div>
        </div>
      </motion.div>

      {/* Content sections */}
      <div className="space-y-6">
        {/* Mentor's Note */}
        {step.mentor_guidance && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800/50 border-l-4 border-gray-300 dark:border-gray-600 rounded-r-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">From Your Mentor</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {step.mentor_guidance}
            </p>
          </motion.div>
        )}

        {/* What You Need to Know */}
        {step.details.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">What You Need to Know</h2>
            </div>
            <div className="space-y-4">
              {step.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Common Mistakes */}
        {step.mistakes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Mistakes to Avoid</h2>
            </div>
            <div className="space-y-3">
              {step.mistakes.map((mistake, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <AlertTriangle className="w-4 h-4 text-gray-500 dark:text-gray-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{mistake}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Resources */}
        {step.resources.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Link2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Resources</h2>
            </div>
            <div className="space-y-2">
              {step.resources.map((r, i) => (
                <a
                  key={i}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 no-underline group transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{r.title}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 capitalize mt-0.5">{r.type}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 shrink-0" />
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pro Tips */}
        {step.tips.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Pro Tips</h2>
            </div>
            <div className="space-y-3">
              {step.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <Lightbulb className="w-4 h-4 text-gray-500 dark:text-gray-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Proposal Template - only on the last step */}
        {isLastStep && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Proposal Template</h2>
              </div>
              <div className="flex gap-2">
                <CopyButton text={PROPOSAL_TEMPLATE} label="Copy Template" />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTemplate(!showTemplate)}
                  className="text-gray-600 dark:text-gray-400"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showTemplate ? "rotate-180" : ""}`} />
                  {showTemplate ? "Hide" : "Preview"}
                </Button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 mb-3">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>How to use:</strong> Copy this template, paste it into Google Docs or your org's submission format, and fill in every section. Share the draft with your mentor before submitting.
              </p>
            </div>

            {showTemplate && (
              <div className="relative bg-gray-950 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-800">
                  <span className="text-xs text-gray-400 font-mono">gsoc-proposal-template.md</span>
                  <CopyButton text={PROPOSAL_TEMPLATE} />
                </div>
                <pre className="p-5 text-xs text-gray-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {PROPOSAL_TEMPLATE}
                </pre>
              </div>
            )}
          </motion.div>
        )}

        {/* Bottom navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-between pt-4"
        >
          {prev ? (
            <Link
              to={`/student/opensource/gsoc-proposal/${prev.id}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors no-underline"
            >
              <ChevronLeft className="w-4 h-4" />
              {prev.title}
            </Link>
          ) : <span />}
          {next ? (
            <Link
              to={`/student/opensource/gsoc-proposal/${next.id}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-950 dark:bg-white text-sm font-medium text-white dark:text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
            >
              {next.title}
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/student/opensource/gsoc-proposal"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-950 dark:bg-white text-sm font-medium text-white dark:text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
            >
              Back to Overview
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
}
