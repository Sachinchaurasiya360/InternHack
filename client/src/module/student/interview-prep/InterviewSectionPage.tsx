import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { sections, questions } from "./data";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { useAuthStore } from "../../../lib/auth.store";
import { useInterviewProgress } from "./interviewProgress";

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
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border rounded-md ${className || "text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10"}`}>
      {children}
    </span>
  );
}

export default function InterviewSectionPage() {
  const { sectionSlug } = useParams();
  const basePath = "/learn/interview";
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const { progress, isLoading } = useInterviewProgress();
  const section = sections.find((s) => s.id === sectionSlug);

  const sectionQuestions = useMemo(
    () => questions.filter((q) => q.sectionId === sectionSlug).sort((a, b) => a.orderIndex - b.orderIndex),
    [sectionSlug],
  );

  if (section && !section.freeTier && !isAuthenticated) {
    return <Navigate to={basePath} replace />;
  }

  if (!section) {
    return (
      <div className="relative max-w-6xl mx-auto py-20 text-center">
        <p className="text-sm text-stone-600 dark:text-stone-400">Section not found.</p>
        <Link
          to={basePath}
          className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors no-underline"
        >
          back to interview prep <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    );
  }

  const completedCount = sectionQuestions.filter((q) => progress[q.id]?.completed).length;
  const pct = sectionQuestions.length > 0 ? Math.round((completedCount / sectionQuestions.length) * 100) : 0;

  return (
    <div className="relative text-stone-900 dark:text-stone-50 pb-12">
      <SEO
        title={`${section.title} Interview Questions`}
        description={`${sectionQuestions?.length || 30}+ ${section.title} interview questions with detailed answers, code examples, and tips.`}
        keywords={`${section.title} interview questions, ${section.title} interview preparation`}
        canonicalUrl={canonicalUrl(`/learn/interview/${sectionSlug}`)}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05] z-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(120,113,108,0.25) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 max-w-full">
              <span className="h-1.5 w-1.5 bg-lime-400 shrink-0" />
              <span className="truncate">interview prep / {sectionSlug}</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none wrap-break-word">
              {section.title}
            </h1>
            <p className="mt-3 text-sm text-stone-500 max-w-xl">{section.description}</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span>
              questions
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {sectionQuestions.length}
              </span>
            </span>
            <span>
              completed
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {completedCount}
              </span>
            </span>
            <span>
              progress
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {pct}%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Progress strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8 px-5 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md"
        >
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              {isLoading ? "syncing progress" : "section progress"}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 tabular-nums">
              {completedCount} / {sectionQuestions.length}
            </span>
          </div>
          <div className="w-full h-1 bg-stone-100 dark:bg-stone-800 overflow-hidden rounded-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-full bg-lime-400"
            />
          </div>
        </motion.div>

        {/* Section header */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1 w-1 bg-lime-400" />
              questions / list
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              {section.title} questions
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hidden sm:block">
            {sectionQuestions.length} total
          </span>
        </div>

        {/* Question list */}
        {sectionQuestions.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
            <p className="text-sm text-stone-600 dark:text-stone-400">No questions in this section yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {sectionQuestions.map((question, i) => {
              const isCompleted = progress[question.id]?.completed;
              return (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.02 }}
                >
                  <Link
                    to={`${basePath}/${sectionSlug}/${question.id}`}
                    className="group flex items-center gap-3 sm:gap-4 bg-white dark:bg-stone-900 px-4 sm:px-5 py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
                  >
                    <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-lime-500" />
                      ) : (
                        <span className="text-[11px] font-mono font-bold tabular-nums text-stone-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-bold tracking-tight leading-snug line-clamp-1 ${
                          isCompleted
                            ? "text-stone-400 dark:text-stone-500 line-through"
                            : "text-stone-900 dark:text-stone-50 group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors"
                        }`}
                      >
                        {question.title}
                      </p>
                      <div className="flex items-center gap-1.5 flex-wrap mt-1.5">
                        <MetaChip className={TYPE_STYLE[question.type]}>{question.type}</MetaChip>
                        {question.concepts.slice(0, 3).map((c) => (
                          <MetaChip key={c}>{c}</MetaChip>
                        ))}
                      </div>
                    </div>

                    <span className="hidden sm:inline-flex shrink-0">
                      <MetaChip className={DIFF_STYLE[question.difficulty]}>
                        {question.difficulty}
                      </MetaChip>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
