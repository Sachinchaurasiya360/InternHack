import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft, ChevronLeft, ChevronRight, CheckCircle2, Star, AlertTriangle,
  Info, Copy, Check, ArrowRight, RotateCcw, Lightbulb, Eye, Code2,
} from "lucide-react";
import { sections, lessons } from "./data";
import type { CssProgress, CodeExample, PracticeExercise } from "./data/types";
import CssEditor from "./components/CssEditor";
import { LivePreview } from "../shared/LivePreview";
import { SEO } from "../../../components/SEO";
import { useAuthStore } from "../../../lib/auth.store";

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

const DIFF_BADGE: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  Intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Advanced: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
  Easy: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Hard: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
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
        <button onClick={handleCopy} className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
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
    localStorage.setItem("css-progress", JSON.stringify(progress));
  }, [exercise, solved, lessonId]);

  if (!exercise) return null;

  const solvedCount = exercises.filter((e) => solved[e.id]).length;
  const previewHtml = exercise.starterHtml ?? "<div><h1>Hello World</h1><p>Style this content with CSS.</p></div>";

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }} className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-bold text-gray-950 dark:text-white">Practice Exercises</h2>
        </div>
        <span className="text-xs font-medium text-gray-400 dark:text-gray-500">{solvedCount}/{exercises.length} solved</span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {exercises.map((ex, i) => (
          <button
            key={ex.id}
            onClick={() => setActiveIdx(i)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-colors ${
              i === activeIdx
                ? "bg-gray-950 text-white dark:bg-white dark:text-gray-950"
                : solved[ex.id]
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {solved[ex.id] && i !== activeIdx && <CheckCircle2 className="w-3 h-3 inline mr-1" />}
            Ex {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-gray-950 dark:text-white">{exercise.title}</h3>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${DIFF_BADGE[exercise.difficulty]}`}>{exercise.difficulty}</span>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{exercise.description}</p>
      </div>

      {/* Read-only HTML reference */}
      {exercise.starterHtml && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">HTML (read-only)</span>
          </div>
          <pre className="p-4 overflow-x-auto bg-gray-950 text-gray-100 text-sm leading-relaxed">
            <code>{exercise.starterHtml}</code>
          </pre>
        </div>
      )}

      <CssEditor value={code} onChange={setCode} />

      <div className="flex items-center gap-2 flex-wrap">
        <button onClick={handleReset} className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors">
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
        <button
          onClick={() => setShowHints((h) => Math.min(h + 1, exercise.hints.length))}
          disabled={showHints >= exercise.hints.length}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-amber-600 dark:text-amber-400 bg-white dark:bg-gray-900 border border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 disabled:opacity-40 rounded-xl transition-colors"
        >
          <Lightbulb className="w-3.5 h-3.5" />
          Hint ({showHints}/{exercise.hints.length})
        </button>
        {!solved[exercise.id] && (
          <button onClick={handleMarkSolved} className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-green-600 dark:text-green-400 bg-white dark:bg-gray-900 border border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-xl transition-colors">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Mark as Solved
          </button>
        )}
        <button
          onClick={() => {
            setShowSolution((s) => !s);
            if (!showSolution) setCode(exercise.solution);
            else setCode(exercise.starterCode);
          }}
          className="ml-auto inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded-xl transition-colors"
        >
          <Eye className="w-3.5 h-3.5" />
          {showSolution ? "Hide Solution" : "Solution"}
        </button>
      </div>

      {showHints > 0 && (
        <div className="space-y-2">
          {exercise.hints.slice(0, showHints).map((hint, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-xl">
              <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-800 dark:text-amber-300">{hint}</p>
            </div>
          ))}
        </div>
      )}

      <LivePreview html={previewHtml} css={code} height="200px" />

      {solved[exercise.id] && activeIdx < exercises.length - 1 && (
        <div className="flex justify-end">
          <button onClick={() => setActiveIdx(activeIdx + 1)} className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gray-950 dark:bg-white dark:text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-xl transition-colors">
            Next Exercise
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
  }, [lessonId]);

  const sectionIndex = sections.findIndex((s) => s.id === sectionSlug);
  if (sectionIndex >= FREE_LIMIT && !isAuthenticated) {
    return <Navigate to={basePath} replace />;
  }

  if (!lesson || !section) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Lesson not found</p>
        <Link to={basePath} className="text-blue-500 hover:underline text-sm mt-2 inline-block">Back to CSS Lessons</Link>
      </div>
    );
  }

  const { content } = lesson;
  const exercises = lesson.exercises ?? [];

  return (
    <div className="relative pb-12">
      <SEO title={lesson.title} noIndex />

      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{ backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="mb-6">
        <Link to={`${basePath}/${sectionSlug}`} className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 no-underline transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {section.title}
        </Link>

        <div className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 px-6 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{currentIndex + 1}</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="font-display text-xl font-bold text-gray-950 dark:text-white truncate">{lesson.title}</h1>
                {lesson.isInterviewQuestion && <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${DIFF_BADGE[lesson.difficulty]}`}>{lesson.difficulty}</span>
                {completed && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Completed
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button onClick={() => prevLesson && navigate(`${basePath}/${sectionSlug}/${prevLesson.id}`)} disabled={!prevLesson} className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors" title="Previous">
              <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
            <span className="text-xs text-gray-400 dark:text-gray-500 px-2 font-medium tabular-nums">{currentIndex + 1} / {sectionLessons.length}</span>
            <button onClick={() => nextLesson && navigate(`${basePath}/${sectionSlug}/${nextLesson.id}`)} disabled={!nextLesson} className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors" title="Next">
              <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-5">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} className="flex items-center gap-2 flex-wrap">
          {lesson.concepts.map((c) => (
            <span key={c} className="text-[10px] px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium">{c}</span>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-950 dark:text-white mb-4">Explanation</h2>
          <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{content.explanation}</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="space-y-4">
          <h2 className="text-lg font-bold text-gray-950 dark:text-white">Code Examples</h2>
          {content.codeExamples.map((example, i) => (
            <CodeBlock key={i} example={example} />
          ))}
        </motion.div>

        {content.notes.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="border-l-4 border-l-blue-500 pl-5 py-1">
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-4.5 h-4.5 text-blue-500" />
              <h3 className="text-sm font-bold text-gray-950 dark:text-white">Important Notes</h3>
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

        {content.commonPitfalls && content.commonPitfalls.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }} className="border-l-4 border-l-amber-500 pl-5 py-1">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4.5 h-4.5 text-amber-500" />
              <h3 className="text-sm font-bold text-gray-950 dark:text-white">Common Pitfalls</h3>
            </div>
            <ul className="space-y-2">
              {content.commonPitfalls.map((pitfall, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-amber-500 mt-2 shrink-0" />
                  {pitfall}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {content.interviewTips && content.interviewTips.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="border-l-4 border-l-violet-500 pl-5 py-1">
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

        {exercises.length > 0 && <ExerciseSection exercises={exercises} lessonId={lessonId!} />}

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }} className="flex items-center justify-between pt-2">
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
          {nextLesson && (
            <button onClick={() => navigate(`${basePath}/${sectionSlug}/${nextLesson.id}`)} className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors">
              Next Lesson
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
