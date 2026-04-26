import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Star,
  AlertTriangle,
  Info,
  Copy,
  Check,
  ArrowRight,
  RotateCcw,
  Lightbulb,
  Eye,
  Code2,
} from "lucide-react";
import { sections, lessons } from "./data";
import type { CssProgress, CodeExample, PracticeExercise } from "./data/types";
import CssEditor from "./components/CssEditor";
import { LivePreview } from "../shared/LivePreview";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { useAuthStore } from "../../../lib/auth.store";
import { reportMilestone } from "../../../lib/milestone.utils";

const FREE_LIMIT = 5;

function getLocalProgress(): CssProgress {
  try {
    return JSON.parse(localStorage.getItem("css-progress") || "{}");
  } catch {
    return {};
  }
}

function toggleProgress(lessonId: string): boolean {
  const progress = getLocalProgress();
  const current = progress[lessonId]?.completed ?? false;
  progress[lessonId] = { ...progress[lessonId], completed: !current };
  localStorage.setItem("css-progress", JSON.stringify(progress));
  return !current;
}

const DIFF_COLOR: Record<string, string> = {
  Beginner: "text-emerald-600 dark:text-emerald-400",
  Intermediate: "text-amber-600 dark:text-amber-400",
  Advanced: "text-rose-600 dark:text-rose-400",
  Easy: "text-emerald-600 dark:text-emerald-400",
  Medium: "text-amber-600 dark:text-amber-400",
  Hard: "text-rose-600 dark:text-rose-400",
};

function CodeBlock({ example }: { example: CodeExample }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [example.code]);

  return (
    <div className="rounded-md border border-stone-200 dark:border-white/10 overflow-hidden bg-white dark:bg-stone-900">
      <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
        <div className="flex items-center gap-2 min-w-0">
          <div className="h-1 w-1 bg-lime-400 shrink-0"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 truncate">
            {example.title}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          {copied ? <Check className="w-3 h-3 text-lime-500" /> : <Copy className="w-3 h-3" />}
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-stone-950 text-stone-100 text-sm leading-relaxed">
        <code>{example.code}</code>
      </pre>
      {example.output && (
        <div className="px-4 py-2.5 bg-stone-900 border-t border-stone-800">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block mb-1">output</span>
          <pre className="text-sm text-lime-400 whitespace-pre-wrap">{example.output}</pre>
        </div>
      )}
      {example.explanation && (
        <div className="px-4 py-3 bg-stone-50 dark:bg-stone-950/40 border-t border-stone-200 dark:border-white/10">
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{example.explanation}</p>
        </div>
      )}
    </div>
  );
}

function ExerciseSection({
  exercises,
  lessonId,
}: {
  exercises: PracticeExercise[];
  lessonId: string;
}) {
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
    localStorage.setItem("css-progress", JSON.stringify(progress));
  }, [exercise, solved, lessonId]);

  if (!exercise) return null;

  const solvedCount = exercises.filter((e) => solved[e.id]).length;
  const previewHtml = exercise.starterHtml ?? "<div><h1>Hello World</h1><p>Style this content with CSS.</p></div>";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 bg-lime-400"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            practice / {exercises.length} exercises
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
          <span>
            <span className="text-stone-900 dark:text-stone-50">{solvedCount}</span>
            <span className="text-stone-400 dark:text-stone-600"> / {exercises.length} solved</span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {exercises.map((ex, i) => {
          const isActive = i === activeIdx;
          const isSolved = solved[ex.id];
          return (
            <button
              key={ex.id}
              type="button"
              onClick={() => setActiveIdx(i)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest transition-colors cursor-pointer ${
                isActive
                  ? "bg-stone-900 dark:bg-stone-50 text-lime-400"
                  : isSolved
                    ? "bg-stone-100 dark:bg-white/5 text-lime-600 dark:text-lime-400 hover:bg-stone-200 dark:hover:bg-white/10"
                    : "bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-white/10"
              }`}
            >
              {isSolved && !isActive && <CheckCircle2 className="w-3 h-3" />}
              / ex {String(i + 1).padStart(2, "0")}
            </button>
          );
        })}
      </div>

      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
          <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50">{exercise.title}</h3>
          <span className={`text-[10px] font-mono uppercase tracking-widest ${DIFF_COLOR[exercise.difficulty]}`}>
            / {exercise.difficulty.toLowerCase()}
          </span>
        </div>
        <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
          {exercise.description}
        </p>
      </div>

      {/* Read-only HTML reference */}
      {exercise.starterHtml && (
        <div className="rounded-md border border-stone-200 dark:border-white/10 overflow-hidden bg-white dark:bg-stone-900">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
            <div className="h-1 w-1 bg-lime-400"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              html / read only
            </span>
          </div>
          <pre className="p-4 overflow-x-auto bg-stone-950 text-stone-100 text-sm leading-relaxed">
            <code>{exercise.starterHtml}</code>
          </pre>
        </div>
      )}

      <CssEditor value={code} onChange={setCode} />

      <div className="flex items-center gap-2 flex-wrap">
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[10px] font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          reset
        </button>

        <button
          type="button"
          onClick={() => setShowHints((h) => Math.min(h + 1, exercise.hints.length))}
          disabled={showHints >= exercise.hints.length}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-300 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Lightbulb className="w-3 h-3" />
          hint {showHints}/{exercise.hints.length}
        </button>

        {!solved[exercise.id] && (
          <button
            type="button"
            onClick={handleMarkSolved}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-300 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <CheckCircle2 className="w-3 h-3" />
            mark as solved
          </button>
        )}

        <button
          type="button"
          onClick={() => {
            setShowSolution((s) => !s);
            if (!showSolution) setCode(exercise.solution);
            else setCode(exercise.starterCode);
          }}
          className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[10px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          <Eye className="w-3 h-3" />
          {showSolution ? "hide solution" : "solution"}
        </button>
      </div>

      {showHints > 0 && (
        <div className="space-y-2">
          {exercise.hints.slice(0, showHints).map((hint, i) => (
            <div
              key={i}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
                <div className="h-1 w-1 bg-amber-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  hint / {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex items-start gap-3 px-4 py-3">
                <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <p className="text-sm text-stone-700 dark:text-stone-300">{hint}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
          <div className="h-1 w-1 bg-lime-400"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            live preview
          </span>
        </div>
        <div className="p-3">
          <LivePreview html={previewHtml} css={code} height="200px" />
        </div>
      </div>

      {solved[exercise.id] && activeIdx < exercises.length - 1 && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setActiveIdx(activeIdx + 1)}
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors cursor-pointer"
          >
            Next exercise
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default function CssLessonDetailPage() {
  const { sectionSlug, lessonId } = useParams();
  const navigate = useNavigate();
  const basePath = "/learn/css";
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const [completed, setCompleted] = useState(() => {
    const p = getLocalProgress();
    return !!p[lessonId ?? ""]?.completed;
  });

  const section = sections.find((s) => s.id === sectionSlug);
  const sectionIndex = sections.findIndex((s) => s.id === sectionSlug);
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
      if (allDone) reportMilestone("COURSE_COMPLETE", "css");
    }
  }, [lessonId, isAuthenticated, sectionSlug, sectionLessons]);

  if (sectionIndex >= FREE_LIMIT && !isAuthenticated) {
    return <Navigate to={basePath} replace />;
  }

  if (!lesson || !section) {
    return (
      <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 text-center">
          <p className="text-sm text-stone-500 dark:text-stone-400">Lesson not found.</p>
        </div>
      </div>
    );
  }

  const { content } = lesson;
  const exercises = lesson.exercises ?? [];
  const sectionNum = sectionIndex >= 0 ? String(sectionIndex + 1).padStart(2, "0") : "00";
  const lessonNum = currentIndex >= 0 ? String(currentIndex + 1).padStart(2, "0") : "00";
  const progressPct = sectionLessons.length > 0 ? Math.round(((currentIndex + 1) / sectionLessons.length) * 100) : 0;

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title={`${lesson.title} - CSS`}
        description={`Learn about ${lesson.title} in CSS. Covers key concepts with code examples and practice exercises.`}
        keywords={`${lesson.title}, css, tutorial`}
        canonicalUrl={canonicalUrl(`/learn/css/${sectionSlug}/${lessonId}`)}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-1 bg-lime-400"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              css / section {sectionNum} / lesson {lessonNum}
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 wrap-break-word min-w-0">
                  {lesson.title}
                </h1>
                {lesson.isInterviewQuestion && (
                  <Star className="w-4 h-4 text-lime-500 fill-lime-400 shrink-0" aria-label="Interview question" />
                )}
              </div>
              <div className="flex items-center gap-x-3 gap-y-1 flex-wrap text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                <span className={DIFF_COLOR[lesson.difficulty]}>/ {lesson.difficulty.toLowerCase()}</span>
                {completed && (
                  <>
                    <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                    <span className="inline-flex items-center gap-1 text-lime-600 dark:text-lime-400">
                      <CheckCircle2 className="w-3 h-3" />
                      completed
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Prev/next controls */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => prevLesson && navigate(`${basePath}/${sectionSlug}/${prevLesson.id}`)}
                disabled={!prevLesson}
                title="Previous"
                className="w-8 h-8 rounded-md flex items-center justify-center bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/25 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 px-2 tabular-nums">
                <span className="text-stone-900 dark:text-stone-50">{currentIndex + 1}</span>
                <span className="text-stone-400 dark:text-stone-600"> / {sectionLessons.length}</span>
              </span>
              <button
                type="button"
                onClick={() => nextLesson && navigate(`${basePath}/${sectionSlug}/${nextLesson.id}`)}
                disabled={!nextLesson}
                title="Next"
                className="w-8 h-8 rounded-md flex items-center justify-center bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/25 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Section progress bar */}
          <div className="mt-4 w-full h-0.5 bg-stone-200 dark:bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="h-full bg-lime-400"
            />
          </div>
        </motion.div>

        {/* Concepts row */}
        {lesson.concepts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex items-center gap-1.5 flex-wrap mb-6"
          >
            {lesson.concepts.map((c) => (
              <span
                key={c}
                className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400"
              >
                {c}
              </span>
            ))}
          </motion.div>
        )}

        <div className="space-y-5">
          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
              <div className="h-1 w-1 bg-lime-400"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                explanation
              </span>
            </div>
            <div className="p-5 text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
              {content.explanation}
            </div>
          </motion.div>

          {/* Code examples */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 bg-lime-400"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                code examples / {content.codeExamples.length}
              </span>
            </div>
            <div className="space-y-3">
              {content.codeExamples.map((example, i) => (
                <CodeBlock key={i} example={example} />
              ))}
            </div>
          </motion.div>

          {/* Notes */}
          {content.notes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  notes / important
                </span>
                <Info className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500 ml-auto" />
              </div>
              <ul className="p-5 space-y-2.5">
                {content.notes.map((note, i) => (
                  <li key={i} className="text-sm text-stone-700 dark:text-stone-300 flex items-start gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600 mt-0.5 shrink-0">
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Common pitfalls */}
          {content.commonPitfalls && content.commonPitfalls.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
                <div className="h-1 w-1 bg-amber-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  pitfalls / watch out
                </span>
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500 ml-auto" />
              </div>
              <ul className="p-5 space-y-2.5">
                {content.commonPitfalls.map((pitfall, i) => (
                  <li key={i} className="text-sm text-stone-700 dark:text-stone-300 flex items-start gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600 mt-0.5 shrink-0">
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{pitfall}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Interview tips */}
          {content.interviewTips && content.interviewTips.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  interview / tips
                </span>
                <Star className="w-3.5 h-3.5 text-lime-500 fill-lime-400 ml-auto" />
              </div>
              <ul className="p-5 space-y-2.5">
                {content.interviewTips.map((tip, i) => (
                  <li key={i} className="text-sm text-stone-700 dark:text-stone-300 flex items-start gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600 mt-0.5 shrink-0">
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Practice exercises */}
          {exercises.length > 0 && (
            <>
              <div className="flex items-center gap-2 mt-2">
                <Code2 className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                <span className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Practice
                </span>
              </div>
              <ExerciseSection exercises={exercises} lessonId={lessonId!} />
            </>
          )}

          {/* Footer actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center justify-between gap-3 pt-2 flex-wrap"
          >
            <button
              type="button"
              onClick={handleToggleComplete}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                completed
                  ? "bg-stone-900 dark:bg-stone-50 text-lime-400 hover:bg-stone-800 dark:hover:bg-stone-200"
                  : "bg-lime-400 text-stone-950 hover:bg-lime-300"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {completed ? "Completed" : "Mark as complete"}
            </button>

            {nextLesson && (
              <button
                type="button"
                onClick={() => navigate(`${basePath}/${sectionSlug}/${nextLesson.id}`)}
                className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors cursor-pointer"
              >
                Next lesson
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
