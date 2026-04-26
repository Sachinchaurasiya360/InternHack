import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router";
import { motion } from "framer-motion";
import {
  ChevronLeft, ChevronRight, CheckCircle2, Star, AlertTriangle,
  Info, Copy, Check, ArrowUpRight, RotateCcw, Lightbulb, Eye, Code2,
} from "lucide-react";
import { sections, lessons } from "./data";
import type { HtmlProgress, CodeExample, PracticeExercise } from "./data/types";
import HtmlEditor from "./components/HtmlEditor";
import { LivePreview } from "../shared/LivePreview";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { useAuthStore } from "../../../lib/auth.store";
import { reportMilestone } from "../../../lib/milestone.utils";

const FREE_LIMIT = 5;

function getLocalProgress(): HtmlProgress {
  try {
    return JSON.parse(localStorage.getItem("html-progress") || "{}");
  } catch {
    return {};
  }
}

function toggleProgress(lessonId: string): boolean {
  const progress = getLocalProgress();
  const current = progress[lessonId]?.completed ?? false;
  progress[lessonId] = { ...progress[lessonId], completed: !current };
  localStorage.setItem("html-progress", JSON.stringify(progress));
  return !current;
}

const DIFF_STYLE: Record<string, string> = {
  Beginner:     "text-green-700 dark:text-green-400 border-green-300 dark:border-green-900/60",
  Intermediate: "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60",
  Advanced:     "text-red-700 dark:text-red-400 border-red-300 dark:border-red-900/60",
  Easy:         "text-green-700 dark:text-green-400 border-green-300 dark:border-green-900/60",
  Medium:       "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60",
  Hard:         "text-red-700 dark:text-red-400 border-red-300 dark:border-red-900/60",
};

function MetaChip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border rounded-md ${className || "text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10"}`}>
      {children}
    </span>
  );
}

function SectionLabel({ dot, children }: { dot: string; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className={`h-1 w-1 ${dot}`} />
      {children}
    </div>
  );
}

function CodeBlock({ example }: { example: CodeExample }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [example.code]);

  return (
    <div className="rounded-md border border-stone-200 dark:border-white/10 overflow-hidden bg-white dark:bg-stone-900">
      <div className="flex items-center justify-between gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-white/10">
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 truncate min-w-0">{example.title}</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 shrink-0 text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
        >
          {copied ? <Check className="w-3 h-3 text-lime-500" /> : <Copy className="w-3 h-3" />}
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-stone-950 text-stone-100 text-sm leading-relaxed">
        <code>{example.code}</code>
      </pre>
      {example.output && (
        <div className="px-4 py-3 bg-stone-900 border-t border-stone-800">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block mb-1.5">output</span>
          <pre className="text-sm text-lime-400 whitespace-pre-wrap">{example.output}</pre>
        </div>
      )}
      {example.explanation && (
        <div className="px-4 py-3 bg-stone-50 dark:bg-stone-900/50 border-t border-stone-200 dark:border-white/10">
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{example.explanation}</p>
        </div>
      )}
    </div>
  );
}

function ExerciseSection({ exercises, lessonId }: { exercises: PracticeExercise[]; lessonId: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [code, setCode] = useState("");
  const [showHints, setShowHints] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [solved, setSolved] = useState<Record<string, boolean>>(() => {
    const p = getLocalProgress();
    return p[lessonId]?.exercisesSolved ?? {};
  });

  const exercise = exercises[activeIdx];

  useEffect(() => {
    if (!exercise) return;
    setCode(exercise.starterCode);
    setShowHints(0);
    setShowSolution(false);
  }, [activeIdx, exercise?.id]);

  const handleReset = useCallback(() => {
    if (!exercise) return;
    setCode(exercise.starterCode);
    setShowHints(0);
    setShowSolution(false);
  }, [exercise]);

  const handleMarkSolved = useCallback(() => {
    if (!exercise || solved[exercise.id]) return;
    const updated = { ...solved, [exercise.id]: true };
    setSolved(updated);
    const progress = getLocalProgress();
    progress[lessonId] = { ...progress[lessonId], exercisesSolved: updated };
    localStorage.setItem("html-progress", JSON.stringify(progress));
  }, [exercise, solved, lessonId]);

  if (!exercise) return null;

  const solvedCount = exercises.filter((e) => solved[e.id]).length;

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }} className="space-y-4">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div className="min-w-0">
          <SectionLabel dot="bg-orange-400">
            <Code2 className="w-3 h-3" /> practice / exercises
          </SectionLabel>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">Practice exercises</h2>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
          {solvedCount} / {exercises.length} solved
        </span>
      </div>

      <div className="flex items-center gap-1.5 flex-wrap">
        {exercises.map((ex, i) => {
          const isActive = i === activeIdx;
          const isSolved = solved[ex.id];
          return (
            <button
              key={ex.id}
              onClick={() => setActiveIdx(i)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest border rounded-md transition-colors ${
                isActive
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                  : isSolved
                    ? "text-lime-700 dark:text-lime-400 border-lime-300 dark:border-lime-900/60 hover:bg-lime-50 dark:hover:bg-lime-900/20"
                    : "text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30"
              }`}
            >
              {isSolved && !isActive && <CheckCircle2 className="w-3 h-3" />}
              ex {String(i + 1).padStart(2, "0")}
            </button>
          );
        })}
      </div>

      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50">{exercise.title}</h3>
          <MetaChip className={DIFF_STYLE[exercise.difficulty]}>{exercise.difficulty}</MetaChip>
        </div>
        <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">{exercise.description}</p>
      </div>

      <HtmlEditor value={code} onChange={setCode} />

      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 rounded-md hover:border-stone-400 dark:hover:border-white/30 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          reset
        </button>
        <button
          onClick={() => setShowHints((h) => Math.min(h + 1, exercise.hints.length))}
          disabled={showHints >= exercise.hints.length}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-900/60 rounded-md hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Lightbulb className="w-3 h-3" />
          hint ({showHints}/{exercise.hints.length})
        </button>
        {!solved[exercise.id] && (
          <button
            onClick={handleMarkSolved}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400 border border-lime-300 dark:border-lime-900/60 rounded-md hover:bg-lime-50 dark:hover:bg-lime-900/20 transition-colors"
          >
            <CheckCircle2 className="w-3 h-3" />
            mark solved
          </button>
        )}
        <button
          onClick={() => {
            setShowSolution((s) => !s);
            if (!showSolution) setCode(exercise.solution);
            else setCode(exercise.starterCode);
          }}
          className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
        >
          <Eye className="w-3 h-3" />
          {showSolution ? "hide solution" : "solution"}
        </button>
      </div>

      {showHints > 0 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md divide-y divide-stone-100 dark:divide-white/5">
          {exercise.hints.slice(0, showHints).map((hint, i) => (
            <div key={i} className="flex items-start gap-3 p-4">
              <span className="text-[10px] font-mono font-bold tabular-nums text-amber-600 dark:text-amber-400 mt-0.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{hint}</p>
            </div>
          ))}
        </div>
      )}

      <LivePreview html={code} height="200px" />

      {solved[exercise.id] && activeIdx < exercises.length - 1 && (
        <div className="flex justify-end">
          <button
            onClick={() => setActiveIdx(activeIdx + 1)}
            className="group inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors"
          >
            next exercise
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default function HtmlLessonDetailPage() {
  const { sectionSlug, lessonId } = useParams();
  const navigate = useNavigate();
  const basePath = "/learn/html";
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const [completed, setCompleted] = useState(() => {
    const p = getLocalProgress();
    return !!p[lessonId ?? ""]?.completed;
  });

  const section = sections.find((s) => s.id === sectionSlug);
  const sectionLessons = useMemo(
    () => lessons.filter((l) => l.sectionId === sectionSlug).sort((a, b) => a.orderIndex - b.orderIndex),
    [sectionSlug]
  );

  const lesson = sectionLessons.find((l) => l.id === lessonId);
  const currentIndex = lesson ? sectionLessons.findIndex((l) => l.id === lesson.id) : -1;
  const prevLesson = currentIndex > 0 ? sectionLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < sectionLessons.length - 1 ? sectionLessons[currentIndex + 1] : null;

  const handleToggleComplete = useCallback(() => {
    if (!lessonId) return;
    const newVal = toggleProgress(lessonId);
    setCompleted(newVal);
    if (newVal && isAuthenticated && sectionSlug) {
      const progress = getLocalProgress();
      const allDone = sectionLessons.every((l) => progress[l.id]?.completed);
      if (allDone) reportMilestone("COURSE_COMPLETE", "html");
    }
  }, [lessonId, isAuthenticated, sectionSlug, sectionLessons]);

  const sectionIndex = sections.findIndex((s) => s.id === sectionSlug);
  if (sectionIndex >= FREE_LIMIT && !isAuthenticated) {
    return <Navigate to={basePath} replace />;
  }

  if (!lesson || !section) {
    return (
      <div className="relative max-w-6xl mx-auto py-20 text-center">
        <p className="text-sm text-stone-600 dark:text-stone-400">Lesson not found.</p>
        <Link
          to={basePath}
          className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors no-underline"
        >
          back to html <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    );
  }

  const { content } = lesson;
  const exercises = lesson.exercises ?? [];

  return (
    <div className="relative text-stone-900 dark:text-stone-50 pb-12">
      <SEO
        title={`${lesson.title} - HTML`}
        description={`Learn about ${lesson.title} in HTML. Covers key concepts with code examples and practice exercises.`}
        keywords={`${lesson.title}, html, tutorial`}
        canonicalUrl={canonicalUrl(`/learn/html/${sectionSlug}/${lessonId}`)}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05] z-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(120,113,108,0.25) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-6"
        >
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 wrap-break-word">
              <span className="h-1.5 w-1.5 bg-lime-400 shrink-0" />
              <span className="min-w-0">learn / html / {sectionSlug} / #{String(currentIndex + 1).padStart(2, "0")}</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight wrap-break-word">
                {lesson.title}
              </h1>
              {lesson.isInterviewQuestion && <Star className="w-5 h-5 text-amber-500 fill-amber-500 shrink-0" />}
            </div>
            <div className="mt-3 flex items-center gap-1.5 flex-wrap">
              <MetaChip className={DIFF_STYLE[lesson.difficulty]}>{lesson.difficulty}</MetaChip>
              {completed && (
                <MetaChip className="text-lime-700 dark:text-lime-400 border-lime-300 dark:border-lime-900/60">
                  <CheckCircle2 className="w-3 h-3" /> completed
                </MetaChip>
              )}
              {lesson.concepts.slice(0, 4).map((c) => (
                <MetaChip key={c}>{c}</MetaChip>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => prevLesson && navigate(`${basePath}/${sectionSlug}/${prevLesson.id}`)}
              disabled={!prevLesson}
              className="w-9 h-9 inline-flex items-center justify-center border border-stone-200 dark:border-white/10 rounded-md text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 px-2 tabular-nums">
              {currentIndex + 1} / {sectionLessons.length}
            </span>
            <button
              onClick={() => nextLesson && navigate(`${basePath}/${sectionSlug}/${nextLesson.id}`)}
              disabled={!nextLesson}
              className="w-9 h-9 inline-flex items-center justify-center border border-stone-200 dark:border-white/10 rounded-md text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              title="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8"
        >
          <SectionLabel dot="bg-lime-400">explanation</SectionLabel>
          <div className="mt-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6">
            <div className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
              {content.explanation}
            </div>
          </div>
        </motion.div>

        {/* Code examples */}
        {content.codeExamples.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mb-8"
          >
            <div className="flex items-end justify-between gap-4 flex-wrap mb-3">
              <div className="min-w-0">
                <SectionLabel dot="bg-lime-400">code / examples</SectionLabel>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">Code examples</h2>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
                {content.codeExamples.length} total
              </span>
            </div>
            <div className="space-y-4">
              {content.codeExamples.map((example, i) => (
                <CodeBlock key={i} example={example} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Important notes */}
        {content.notes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <SectionLabel dot="bg-blue-400">
                <Info className="w-3 h-3 text-blue-500" /> important notes
              </SectionLabel>
            </div>
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md divide-y divide-stone-100 dark:divide-white/5">
              {content.notes.map((note, i) => (
                <div key={i} className="flex items-start gap-4 p-4">
                  <span className="text-[10px] font-mono font-bold tabular-nums text-blue-600 dark:text-blue-400 mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Common pitfalls */}
        {content.commonPitfalls && content.commonPitfalls.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <SectionLabel dot="bg-amber-400">
                <AlertTriangle className="w-3 h-3 text-amber-500" /> common pitfalls
              </SectionLabel>
            </div>
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md divide-y divide-stone-100 dark:divide-white/5">
              {content.commonPitfalls.map((pitfall, i) => (
                <div key={i} className="flex items-start gap-4 p-4">
                  <span className="text-[10px] font-mono font-bold tabular-nums text-amber-600 dark:text-amber-400 mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{pitfall}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Interview tips */}
        {content.interviewTips && content.interviewTips.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <SectionLabel dot="bg-violet-400">
                <Star className="w-3 h-3 text-violet-500 fill-violet-500" /> interview tips
              </SectionLabel>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {content.interviewTips.map((tip, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4 hover:border-violet-300 dark:hover:border-violet-900/60 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <Star className="w-3.5 h-3.5 text-violet-500 fill-violet-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {exercises.length > 0 && (
          <div className="mb-8">
            <ExerciseSection exercises={exercises} lessonId={lessonId!} />
          </div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex items-center justify-between gap-3 flex-wrap pt-6 border-t border-stone-200 dark:border-white/10"
        >
          <button
            onClick={handleToggleComplete}
            className={`inline-flex items-center gap-2 px-4 py-2 text-[11px] font-mono uppercase tracking-widest border rounded-md transition-colors ${
              completed
                ? "bg-lime-400 border-lime-400 text-stone-900"
                : "bg-stone-900 dark:bg-stone-50 border-stone-900 dark:border-stone-50 text-stone-50 dark:text-stone-900 hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 dark:hover:text-stone-900"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            {completed ? "completed" : "mark as complete"}
          </button>
          {nextLesson && (
            <button
              onClick={() => navigate(`${basePath}/${sectionSlug}/${nextLesson.id}`)}
              className="group inline-flex items-center gap-2 px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:border-stone-900 dark:hover:border-stone-50 transition-colors"
            >
              next lesson
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
