import { useState, useCallback, useMemo, useEffect } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Star,
  Info,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { sections, questions } from "./data";

import { SEO } from "../../../components/SEO";
import { CodeBlock } from "../../../components/ui/CodeBlock";
import { canonicalUrl } from "../../../lib/seo.utils";
import { useAuthStore } from "../../../lib/auth.store";
import { reportMilestone } from "../../../lib/milestone.utils";
import api from "../../../lib/axios";
import { GridBackground } from "../../../components/ui/GridBackground";


async function getServerProgress() {
  const { data } = await api.get("/interview-progress");
  return data;
}

async function updateServerProgress(
  questionId: string,
  action: "complete" | "uncomplete" | "visit"
) {
  const { data } = await api.patch("/interview-progress", { questionId, action });
  return data;
}

const DIFF_STYLE: Record<string, string> = {
  Beginner:     "text-green-700 dark:text-green-400 border-green-300 dark:border-green-900/60",
  Intermediate: "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60",
  Advanced:     "text-red-700 dark:text-red-400 border-red-300 dark:border-red-900/60",
};

const TYPE_STYLE: Record<string, string> = {
  Theory:      "text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-900/60",
  Coding:      "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60",
  Situational: "text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-900/60",
  Concept:     "text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-900/60",
  Experience:  "text-rose-700 dark:text-rose-400 border-rose-300 dark:border-rose-900/60",
};

function MetaChip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border rounded-md ${className || "text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10"}`}>
      {children}
    </span>
  );
}


function SectionLabel({ icon, children, accent = "lime" }: { icon: React.ReactNode; children: React.ReactNode; accent?: "lime" | "blue" | "amber" | "violet" }) {
  const dotColor = {
    lime: "bg-lime-400",
    blue: "bg-blue-400",
    amber: "bg-amber-400",
    violet: "bg-violet-400",
  }[accent];
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
      <span className={`h-1 w-1 ${dotColor}`} />
      {icon}
      {children}
    </div>
  );
}

export default function InterviewQuestionPage() {
  const { sectionSlug, questionId } = useParams();
  const navigate = useNavigate();
  const basePath = "/learn/interview";
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const [completed, setCompleted] = useState(false);

  const section = useMemo( () => sections.find((s) => s.id === sectionSlug) || null, [sectionSlug]);
  const sectionQuestions = useMemo(() => { return questions.filter((q) => q.sectionId === sectionSlug).sort((a, b) => a.orderIndex - b.orderIndex);}, [sectionSlug]);
  const question = useMemo(() => { return sectionQuestions.find((q) => q.id === questionId) || null;}, [sectionQuestions, questionId]);

  const currentIndex = question
    ? sectionQuestions.findIndex((q) => q.id === question.id)
    : -1;

  const prevQuestion =
    currentIndex > 0
      ? sectionQuestions[currentIndex - 1]
      : null;

  const nextQuestion =
    currentIndex < sectionQuestions.length - 1
      ? sectionQuestions[currentIndex + 1]
      : null;

  useEffect(() => {
    if (!isAuthenticated || !questionId) return;

    const loadProgress = async () => {
      try {
        const progress = await getServerProgress();

        setCompleted(
          progress.completedIds?.includes(questionId) ?? false
        );
      } catch (err) {
        console.error(err);
      }
    };

    loadProgress();
  }, [isAuthenticated, questionId]);

  useEffect(() => {
    if (!isAuthenticated || !questionId) return;

    const timeout = setTimeout(() => {
      updateServerProgress(questionId, "visit")
        .catch(console.error);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isAuthenticated, questionId]);

  // Analytics: fire-and-forget view ping (1 s after mount to avoid bounce noise)
  useEffect(() => {
    if (!questionId) return;
    const t = setTimeout(() => {
      api.post("/analytics/track", {
        contentType: "INTERVIEW_QUESTION",
        contentId: questionId,
        timeSpentMs: 0,
        completed: false,
      }).catch(() => {});
    }, 1000);
    return () => clearTimeout(t);
  }, [questionId]);

  const handleToggleComplete = useCallback(async () => {
    if (!questionId || !isAuthenticated) return;

    try {
      const action =
        completed ? "uncomplete" : "complete";

      const updatedProgress =
        await updateServerProgress(
          questionId,
          action
        );

      const isNowCompleted =
        updatedProgress.completedIds.includes(questionId);

      setCompleted(isNowCompleted);

      // Analytics: track completion state change — fire-and-forget
      if (isNowCompleted) {
        api.post("/analytics/track", {
          contentType: "INTERVIEW_QUESTION",
          contentId: questionId,
          timeSpentMs: 0,
          completed: true,
        }).catch(() => {});
      }

      if (
        isNowCompleted &&
        sectionSlug
      ) {
        const allDone = sectionQuestions.every((q) =>
          updatedProgress.completedIds.includes(q.id)
        );

        if (allDone) {
          reportMilestone(
            "INTERVIEW_SECTION_COMPLETE",
            sectionSlug
          );
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, [
    questionId,
    completed,
    isAuthenticated,
    sectionSlug,
    sectionQuestions,
  ]);

  const language = useMemo(() => {
    if (!sectionSlug) return "javascript";
    if (sectionSlug.includes("javascript") || sectionSlug.includes("nodejs") || sectionSlug.includes("system-design") || sectionSlug.includes("behavioral")) return "javascript";
    if (sectionSlug.includes("react")) return "tsx";
    if (sectionSlug.includes("typescript")) return "typescript";
    if (sectionSlug.includes("python") || sectionSlug.includes("fastapi")) return "python";
    if (sectionSlug.includes("sql")) return "sql";
    if (sectionSlug.includes("html-css")) return "html";
    if (sectionSlug.includes("git-devops")) return "bash";
    return "javascript";
  }, [sectionSlug]);

  if (section && !section.freeTier && !isAuthenticated) {
    return <Navigate to={basePath} replace />;
  }

  if (!question || !section) {
  return (
    <div className="relative max-w-3xl mx-auto py-24 px-6 text-center">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-3">
          Question not found
        </h2>

        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          This interview question may have been moved, deleted,
          or the URL might be incorrect.
        </p>

        <Link
          to={basePath}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors no-underline"
        >
          Browse all questions
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
  }

  const content = question.content;
  const hasValidContent = content && typeof content.question === "string" && typeof content.answer === "string";
  
  if (!hasValidContent) {
    console.error("Malformed interview question payload", {
      sectionSlug,
      questionId,
    });

  return (
      <div className="relative max-w-3xl mx-auto py-24 px-6 text-center">
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold">Question not found</h2>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            Invalid or corrupted question data.
          </p>
          <Link to={basePath}>Go back</Link>
        </div>
      </div>
    );
  }
  
  const codeExamples = content.codeExamples ?? [];

  return (
    <div className="relative text-stone-900 dark:text-stone-50 pb-12">
      <SEO
        title={`${question.title} - Interview Question`}
        description={content.answer?.slice(0, 160) || `Detailed answer for "${question.title}" interview question with code examples.`}
        canonicalUrl={canonicalUrl(`/learn/interview/${sectionSlug}/${questionId}`)}
      />

      <GridBackground />

      <div className="relative max-w-4xl mx-auto">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 mb-8 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 min-w-0">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              <span className="truncate">
                interview prep / <Link to={`${basePath}/${sectionSlug}`} className="hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline">{sectionSlug}</Link> / #{String(currentIndex + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => prevQuestion && navigate(`${basePath}/${sectionSlug}/${prevQuestion.id}`)}
                disabled={!prevQuestion}
                title="Previous"
                className="p-2 rounded-md border border-stone-300 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 px-2 tabular-nums">
                {currentIndex + 1} / {sectionQuestions.length}
              </span>
              <button
                onClick={() => nextQuestion && navigate(`${basePath}/${sectionSlug}/${nextQuestion.id}`)}
                disabled={!nextQuestion}
                title="Next"
                className="p-2 rounded-md border border-stone-300 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight wrap-break-word">
            {question.title}
          </h1>

          <div className="flex items-center gap-1.5 flex-wrap mt-4">
            <MetaChip className={DIFF_STYLE[question.difficulty]}>{question.difficulty}</MetaChip>
            <MetaChip className={TYPE_STYLE[question.type]}>{question.type}</MetaChip>
            {completed && (
              <MetaChip className="text-lime-600 dark:text-lime-400 border-lime-300 dark:border-lime-900/60">
                <CheckCircle2 className="w-3 h-3" /> completed
              </MetaChip>
            )}
            {question.concepts.map((c) => (
              <MetaChip key={c}>{c}</MetaChip>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* Question */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <SectionLabel icon={<MessageSquare className="w-3 h-3" />}>the question</SectionLabel>
            <div className="relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 sm:p-6 pl-7 sm:pl-8">
              <span aria-hidden className="absolute top-5 left-4 font-mono text-3xl text-lime-500/80 leading-none select-none">
                &ldquo;
              </span>
              <p className="text-base text-stone-800 dark:text-stone-200 leading-relaxed font-medium wrap-break-word">
                {content.question}
              </p>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <SectionLabel icon={null}>answer</SectionLabel>
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 sm:p-6">
              <div className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line wrap-break-word">
                {content.answer}
              </div>
            </div>
          </motion.div>

          {/* Code Examples */}
          {codeExamples.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <SectionLabel icon={null}>code examples</SectionLabel>
              <div className="space-y-4">
                {codeExamples.map((example, i) => (
                  <CodeBlock key={i} example={example} language={language} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Notes */}
          {content.notes && content.notes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <SectionLabel icon={<Info className="w-3 h-3 text-blue-500" />} accent="blue">
                key points
              </SectionLabel>
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md divide-y divide-stone-100 dark:divide-white/5">
                {content.notes.map((note, i) => (
                  <div key={i} className="flex items-start gap-3 px-5 py-3">
                    <span className="text-[10px] font-mono font-bold text-blue-500 tabular-nums shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Follow-Up Questions */}
          {content.followUps && content.followUps.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <SectionLabel icon={<MessageSquare className="w-3 h-3 text-amber-500" />} accent="amber">
                common follow-ups
              </SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {content.followUps.map((followUp, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-3 px-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md hover:border-amber-300 dark:hover:border-amber-900/60 transition-colors"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                      Q{String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {followUp}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Interview Tips */}
          {content.interviewTips && content.interviewTips.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <SectionLabel icon={<Star className="w-3 h-3 text-violet-500 fill-violet-500" />} accent="violet">
                interview tips
              </SectionLabel>
              <div className="space-y-2">
                {content.interviewTips.map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md"
                  >
                    <Star className="w-3.5 h-3.5 text-violet-500 fill-violet-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-stone-200 dark:border-white/10"
          >
            <button
              onClick={handleToggleComplete}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold tracking-tight rounded-md transition-colors cursor-pointer ${
                completed
                  ? "bg-lime-400 text-stone-900 hover:bg-lime-500"
                  : "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-lime-400 hover:text-stone-900 dark:hover:bg-lime-400 dark:hover:text-stone-900"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {completed ? "Completed" : "Mark as complete"}
            </button>

            {nextQuestion && (
              <button
                onClick={() => navigate(`${basePath}/${sectionSlug}/${nextQuestion.id}`)}
                className="group inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:border-lime-400 hover:text-lime-700 dark:hover:text-lime-400 transition-colors cursor-pointer"
              >
                next question
                <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
