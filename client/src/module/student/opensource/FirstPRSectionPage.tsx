import { useState, useCallback } from "react";
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
  Code,
  GraduationCap
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { CodeBlock } from "../../../components/ui/CodeBlock";
import { canonicalUrl } from "../../../lib/seo.utils";
import guideData from "./data/open-source-guide.json";
import { useKeyboardNavigation } from "../../../hooks/useKeyboardNavigation";

// ─── Types ─────────────────────────────────────────────────────
interface Resource { title: string; url: string; type: string }
interface Command { label: string; code: string }
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

const STEPS: Step[] = guideData.openSourceRoadmap as Step[];
const STORAGE_KEY = "first-pr-roadmap-completed";

// ─── Helpers ───────────────────────────────────────────────────
function getCompleted(): Set<string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

// ─── Reusable Component ────────────────────────────────────────
interface SectionCardProps {
  title: string;
  icon: React.ReactNode;
  color: "indigo" | "amber" | "blue" | "purple";
  children: React.ReactNode;
}

function SectionCard({ title, icon, color, children }: SectionCardProps) {
  const colorMap = {
    indigo: {
      wrapper: "border-indigo-200 dark:border-indigo-900/50",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    },
    amber: {
      wrapper: "border-amber-200 dark:border-amber-900/50",
      iconBg: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    },
    blue: {
      wrapper: "border-blue-200 dark:border-blue-900/50",
      iconBg: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    },
    purple: {
      wrapper: "border-purple-200 dark:border-purple-900/50",
      iconBg: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    },
  };

  const theme = colorMap[color];

  return (
    <div className={`bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-2xl p-6 space-y-4`}>
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-md flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 ${theme.iconBg}`}>
          {icon}
        </div>
        <h2 className="text-xl font-bold text-stone-950 dark:text-white">{title}</h2>
      </div>

      <div className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
        {children}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function FirstPRSectionPage() {
  const { sectionSlug } = useParams<{ sectionSlug: string }>();
  const navigate = useNavigate();
  const stepIndex = STEPS.findIndex((s) => s.id === sectionSlug);
  const step = STEPS[stepIndex];

  const [completed, setCompleted] = useState<Set<string>>(getCompleted);

  const toggleComplete = useCallback(() => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (!step) return next;
      if (next.has(step.id)) next.delete(step.id); else next.add(step.id);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch { /* */ }
      return next;
    });
  }, [step]);

  // ---> FIX: Define variables and call hook BEFORE the early return <---
  const prev = stepIndex > 0 ? STEPS[stepIndex - 1] : null;
  const next = stepIndex < STEPS.length - 1 ? STEPS[stepIndex + 1] : null;

  useKeyboardNavigation({
    prevPath: prev ? `/student/opensource/first-pr/${prev.id}` : null,
    nextPath: next ? `/student/opensource/first-pr/${next.id}` : null,
  });

  // ---> The guard is now safely below all hook calls <---
  if (!step) return <Navigate to="/student/opensource/first-pr" replace />;

  const isDone = completed.has(step.id);

  return (
    <div className="relative pb-24">
      <SEO
        title={`${step.title} - First PR Guide`}
        description={step.description || `Learn ${step.title} in our step-by-step first pull request guide.`}
        canonicalUrl={canonicalUrl(`/student/opensource/first-pr/${sectionSlug}`)}
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
        className="mb-8 mt-6"
      >
        <div className="flex items-center justify-between bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-white/10 px-6 py-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
              <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{step.step}</span>
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-2xl font-bold text-stone-950 dark:text-white truncate">
                {step.title}
              </h1>
              <div className="flex items-center gap-3 mt-1.5">
                {step.estimatedMinutes && (
                  <span className="text-sm font-medium text-stone-500 dark:text-stone-400 flex items-center gap-1">
                    ⏱ {step.estimatedMinutes} min
                  </span>
                )}
                {isDone && (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-4 h-4" />
                    Completed
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="ghost"
              mode="icon"
              onClick={() => prev && navigate(`/student/opensource/first-pr/${prev.id}`)}
              disabled={!prev}
              className="bg-stone-50 dark:bg-stone-800 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-700"
              title="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-stone-600 dark:text-stone-400" />
            </Button>
            <span className="text-sm text-stone-500 dark:text-stone-400 px-2 font-medium tabular-nums hidden sm:inline-block">
              {step.step} / {STEPS.length}
            </span>
            <Button
              variant="ghost"
              mode="icon"
              onClick={() => next && navigate(`/student/opensource/first-pr/${next.id}`)}
              disabled={!next}
              className="bg-stone-50 dark:bg-stone-800 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-700"
              title="Next"
            >
              <ChevronRight className="w-5 h-5 text-stone-600 dark:text-stone-400" />
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Explanation (Mentor's Guidance) */}
        {step.mentor_guidance && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-900/10 p-6"
          >
            <SectionCard title="Explanation" icon={<GraduationCap />} color="indigo">
              <div className="whitespace-pre-line text-[15px]">
                {step.mentor_guidance}
              </div>
            </SectionCard>
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
            <SectionCard title="Code Examples" icon={<Code />} color="indigo">
              <div className="space-y-4">
                {step.commands.map((cmd, i) => (
                  <CodeBlock key={`${step.id}-${cmd.label || i}`} code={cmd.code} label={cmd.label} language="bash" />
                ))}
              </div>
            </SectionCard>
          </motion.div>
        )}

        {/* Important Notes (Details) */}
        {step.details.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <SectionCard title="Important Notes" icon={<Info />} color="blue">
              <ul className="space-y-3">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-2 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>
            className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10 p-6"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
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
          >
            <SectionCard title="Pro Tips" icon={<Lightbulb />} color="amber">
              <ul className="space-y-3">
                {step.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-2 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>
            className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10 p-6"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center ">
                <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
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
          >
            <SectionCard title="Resources" icon={<ExternalLink />} color="purple">
              <ul className="space-y-3">
                {step.resources.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-2 shrink-0" />
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-1.5 font-medium"
                    >
                      {r.title}
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </SectionCard>
            className="rounded-2xl border border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/10 p-6"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <ExternalLink className="w-4 h-4 text-purple-600 dark:text-purple-400" />
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
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 mt-8 py-4 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-white/10 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => prev ? navigate(`/student/opensource/first-pr/${prev.id}`) : navigate("/student/opensource/first-pr")}
            className="rounded-xl font-medium"
          >
            {prev ? (
              <span className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" /> Previous
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" /> Overview
              </span>
            )}
          </Button>

          <div className="flex items-center gap-3">
        {/* Mark as Complete + Next */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex items-center justify-between sticky bottom-0 sm:static bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-white/10 shadow-[0_-4px_8px_rgba(0,0,0,0.05)] px-4 py-3 -mx-4"
        >
          <div className="flex items-center justify-between w-full">
            <Button
              variant={isDone ? "ghost" : "primary"}
              onClick={toggleComplete}
              className={`rounded-xl font-medium ${isDone ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 hover:bg-green-200" : ""}`}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              {isDone ? "Completed" : "Mark as Complete"}
            </Button>
            
            {next && (
              <Button
                variant="outline"
                onClick={() => navigate(`/student/opensource/first-pr/${next.id}`)}
                className="rounded-xl font-medium group"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}