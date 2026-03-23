import { useState, useCallback, useMemo } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Star,
  Info,
  Copy,
  Check,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { sections, questions } from "./data";
import type { InterviewProgress, CodeExample } from "./data/types";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { useAuthStore } from "../../../lib/auth.store";

const FREE_LIMIT = 5;

function getLocalProgress(): InterviewProgress {
  try {
    return JSON.parse(localStorage.getItem("interview-progress") || "{}");
  } catch {
    return {};
  }
}

function toggleProgress(questionId: string): boolean {
  const progress = getLocalProgress();
  const current = progress[questionId]?.completed ?? false;
  progress[questionId] = { completed: !current };
  localStorage.setItem("interview-progress", JSON.stringify(progress));
  return !current;
}

const DIFF_BADGE: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  Intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Advanced: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

const TYPE_BADGE: Record<string, string> = {
  Theory: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  Coding: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  Situational: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400",
  Concept: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-400",
  Experience: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400",
};

function CodeBlock({ example }: { example: CodeExample }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [example.code]);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{example.title}</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-gray-950 text-gray-100 text-sm leading-relaxed">
        <code>{example.code}</code>
      </pre>
      {example.output && (
        <div className="px-4 py-2.5 bg-gray-900 border-t border-gray-800">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block mb-1">Output</span>
          <pre className="text-sm text-emerald-400 whitespace-pre-wrap">{example.output}</pre>
        </div>
      )}
      {example.explanation && (
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{example.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default function InterviewQuestionPage() {
  const { sectionSlug, questionId } = useParams();
  const navigate = useNavigate();
  const basePath = "/learn/interview";
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const [completed, setCompleted] = useState(() => {
    const p = getLocalProgress();
    return !!p[questionId ?? ""]?.completed;
  });

  const section = sections.find((s) => s.id === sectionSlug);
  const sectionQuestions = useMemo(
    () => questions.filter((q) => q.sectionId === sectionSlug).sort((a, b) => a.orderIndex - b.orderIndex),
    [sectionSlug]
  );

  const question = sectionQuestions.find((q) => q.id === questionId);
  const currentIndex = question ? sectionQuestions.findIndex((q) => q.id === question.id) : -1;
  const prevQuestion = currentIndex > 0 ? sectionQuestions[currentIndex - 1] : null;
  const nextQuestion = currentIndex < sectionQuestions.length - 1 ? sectionQuestions[currentIndex + 1] : null;

  const handleToggleComplete = useCallback(() => {
    if (!questionId) return;
    const newVal = toggleProgress(questionId);
    setCompleted(newVal);
  }, [questionId]);

  const sectionIndex = sections.findIndex((s) => s.id === sectionSlug);
  if (sectionIndex >= FREE_LIMIT && !isAuthenticated) {
    return <Navigate to={basePath} replace />;
  }

  if (!question || !section) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Question not found</p>
        <Link to={basePath} className="text-blue-500 hover:underline text-sm mt-2 inline-block">
          Back to Interview Preparation
        </Link>
      </div>
    );
  }

  const { content } = question;
  const codeExamples = content.codeExamples ?? [];

  return (
    <div className="relative pb-12">
      <SEO
        title={`${question.title} - Interview Question`}
        description={content.answer?.slice(0, 160) || `Detailed answer for "${question.title}" interview question with code examples.`}
        canonicalUrl={canonicalUrl(`/learn/interview/${sectionSlug}/${questionId}`)}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-violet-100 dark:bg-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
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
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6"
      >
        <div className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 px-6 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-violet-600 dark:text-violet-400">{currentIndex + 1}</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="font-display text-xl font-bold text-gray-950 dark:text-white truncate">
                  {question.title}
                </h1>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${DIFF_BADGE[question.difficulty]}`}>
                  {question.difficulty}
                </span>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${TYPE_BADGE[question.type]}`}>
                  {question.type}
                </span>
                {completed && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Completed
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => prevQuestion && navigate(`${basePath}/${sectionSlug}/${prevQuestion.id}`)}
              disabled={!prevQuestion}
              className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors"
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
            <span className="text-xs text-gray-400 dark:text-gray-500 px-2 font-medium tabular-nums">
              {currentIndex + 1} / {sectionQuestions.length}
            </span>
            <button
              onClick={() => nextQuestion && navigate(`${basePath}/${sectionSlug}/${nextQuestion.id}`)}
              disabled={!nextQuestion}
              className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors"
              title="Next"
            >
              <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-5">
        {/* Concept tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="flex items-center gap-2 flex-wrap"
        >
          {question.concepts.map((c) => (
            <span key={c} className="text-[10px] px-2.5 py-1 rounded-lg bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400 font-medium">
              {c}
            </span>
          ))}
        </motion.div>

        {/* Question */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="bg-violet-50 dark:bg-violet-900/10 border border-violet-200 dark:border-violet-800 rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-4.5 h-4.5 text-violet-500" />
            <h2 className="text-sm font-bold text-gray-950 dark:text-white">Interview Question</h2>
          </div>
          <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
            {content.question}
          </p>
        </motion.div>

        {/* Answer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6"
        >
          <h2 className="text-lg font-bold text-gray-950 dark:text-white mb-4">Answer</h2>
          <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {content.answer}
          </div>
        </motion.div>

        {/* Code Examples */}
        {codeExamples.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-bold text-gray-950 dark:text-white">Code Examples</h2>
            {codeExamples.map((example, i) => (
              <CodeBlock key={i} example={example} />
            ))}
          </motion.div>
        )}

        {/* Notes */}
        {content.notes && content.notes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="border-l-4 border-l-blue-500 pl-5 py-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-4.5 h-4.5 text-blue-500" />
              <h3 className="text-sm font-bold text-gray-950 dark:text-white">Key Points</h3>
            </div>
            <ul className="space-y-2">
              {content.notes.map((note, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 mt-2 shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Follow-Up Questions */}
        {content.followUps && content.followUps.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="border-l-4 border-l-amber-500 pl-5 py-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-4.5 h-4.5 text-amber-500" />
              <h3 className="text-sm font-bold text-gray-950 dark:text-white">Common Follow-Ups</h3>
            </div>
            <ul className="space-y-2">
              {content.followUps.map((followUp, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-amber-500 mt-2 shrink-0" />
                  {followUp}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Interview Tips */}
        {content.interviewTips && content.interviewTips.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="border-l-4 border-l-violet-500 pl-5 py-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4.5 h-4.5 text-violet-500 fill-violet-500" />
              <h3 className="text-sm font-bold text-gray-950 dark:text-white">Interview Tips</h3>
            </div>
            <ul className="space-y-2">
              {content.interviewTips.map((tip, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 dark:bg-violet-500 mt-2 shrink-0" />
                  {tip}
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
            onClick={handleToggleComplete}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
              completed
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50"
                : "bg-gray-950 text-white dark:bg-white dark:text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-100"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            {completed ? "Completed" : "Mark as Complete"}
          </button>

          {nextQuestion && (
            <button
              onClick={() => navigate(`${basePath}/${sectionSlug}/${nextQuestion.id}`)}
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
            >
              Next Question
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
