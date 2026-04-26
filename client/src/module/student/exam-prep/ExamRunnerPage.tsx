import { useEffect, useMemo, useState } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, CheckCircle2, XCircle, Trophy, RotateCcw, ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { SEO } from "../../../components/SEO";
import {
  getExam,
  getQuestionsForExam,
  getQuestionsForSection,
  type ExamQuestion,
} from "./data/exams";

type Mode = "mock" | "section";

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function ExamMockPage() {
  return <ExamRunnerPage mode="mock" />;
}
export function ExamSectionPage() {
  return <ExamRunnerPage mode="section" />;
}
export default function ExamRunnerPage({ mode }: { mode: Mode }) {
  const { examId, sectionId } = useParams();
  const navigate = useNavigate();
  const exam = getExam(examId ?? "");

  const questions = useMemo<ExamQuestion[]>(() => {
    if (!exam) return [];
    if (mode === "section" && sectionId) return getQuestionsForSection(exam.id, sectionId);
    return getQuestionsForExam(exam.id);
  }, [exam, mode, sectionId]);

  const durationSec = useMemo(() => {
    if (!exam) return 0;
    if (mode === "mock") return exam.totalDuration * 60;
    const sec = exam.sections.find((s) => s.id === sectionId);
    return (sec?.durationMin ?? 20) * 60;
  }, [exam, mode, sectionId]);

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [remaining, setRemaining] = useState(durationSec);

  useEffect(() => {
    setRemaining(durationSec);
  }, [durationSec]);

  useEffect(() => {
    if (submitted || !questions.length) return;
    const t = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(t);
          setSubmitted(true);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [submitted, questions.length]);

  if (!exam) return <Navigate to="/learn/exam-prep" replace />;
  if (!questions.length) {
    return (
      <div className="text-center py-16">
        <p className="text-sm text-gray-500">No questions available for this section yet.</p>
        <Link to={`/learn/exam-prep/${exam.id}`} className="text-violet-600 dark:text-violet-400 text-sm hover:underline mt-2 inline-block">Back to {exam.name}</Link>
      </div>
    );
  }

  const current = questions[idx];
  const answered = Object.keys(answers).length;
  const pct = Math.round((answered / questions.length) * 100);

  function handleAnswer(i: number) {
    if (submitted) return;
    setAnswers({ ...answers, [current.id]: i });
  }

  function toggleFlag() {
    const next = new Set(flagged);
    if (next.has(current.id)) next.delete(current.id);
    else next.add(current.id);
    setFlagged(next);
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  if (submitted) {
    const correct = questions.filter((q) => answers[q.id] === q.correctIndex).length;
    const scorePct = Math.round((correct / questions.length) * 100);
    const passed = scorePct >= exam.passCutoff;

    const byTopic = questions.reduce<Record<string, { correct: number; total: number }>>((acc, q) => {
      acc[q.topic] = acc[q.topic] || { correct: 0, total: 0 };
      acc[q.topic].total++;
      if (answers[q.id] === q.correctIndex) acc[q.topic].correct++;
      return acc;
    }, {});

    return (
      <div className="relative pb-12">
        <SEO title={`${exam.name} Result`} description={`Your ${exam.name} mock test result.`} noIndex />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-2xl p-8 text-center mb-6 ${passed ? "bg-emerald-600" : "bg-amber-600"}`}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-4"
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold text-white">{passed ? "Passed!" : "Keep Practicing"}</h1>
          <p className="text-white/90 mt-1">
            You scored <span className="font-bold">{correct}/{questions.length}</span> ({scorePct}%)
          </p>
          <p className="text-white/70 text-xs mt-1">Cutoff: {exam.passCutoff}%</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
            <h3 className="text-sm font-bold text-gray-950 dark:text-white mb-3">Topic Breakdown</h3>
            <div className="space-y-2">
              {Object.entries(byTopic).map(([topic, s]) => {
                const p = Math.round((s.correct / s.total) * 100);
                return (
                  <div key={topic}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300 capitalize">{topic.replace(/-/g, " ")}</span>
                      <span className="tabular-nums text-gray-500">{s.correct}/{s.total}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${p >= 70 ? "bg-green-500" : p >= 40 ? "bg-amber-500" : "bg-red-500"}`}
                        style={{ width: `${p}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-gray-950 dark:text-white mb-2">Summary</h3>
              <dl className="text-xs space-y-1.5 text-gray-600 dark:text-gray-400">
                <div className="flex justify-between"><dt>Attempted</dt><dd className="tabular-nums font-medium text-gray-950 dark:text-white">{answered}/{questions.length}</dd></div>
                <div className="flex justify-between"><dt>Correct</dt><dd className="tabular-nums font-medium text-green-600">{correct}</dd></div>
                <div className="flex justify-between"><dt>Wrong</dt><dd className="tabular-nums font-medium text-red-600">{answered - correct}</dd></div>
                <div className="flex justify-between"><dt>Skipped</dt><dd className="tabular-nums font-medium">{questions.length - answered}</dd></div>
              </dl>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  setAnswers({});
                  setFlagged(new Set());
                  setSubmitted(false);
                  setIdx(0);
                  setRemaining(durationSec);
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-gray-950 dark:bg-white dark:text-gray-950 rounded-xl"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retry
              </button>
              <button
                onClick={() => navigate(`/learn/exam-prep/${exam.id}`)}
                className="flex-1 px-4 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-xl"
              >
                Exam Home
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gray-950 dark:text-white">Review Answers</h3>
          {questions.map((q, i) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.correctIndex;
            return (
              <div key={q.id} className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="text-sm font-medium text-gray-950 dark:text-white">
                    <span className="text-gray-400 mr-1">Q{i + 1}.</span>
                    {q.question}
                  </p>
                  {userAns === undefined ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 shrink-0">Skipped</span>
                  ) : isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  )}
                </div>
                <div className="space-y-1 mt-3">
                  {q.options.map((opt, oi) => (
                    <div
                      key={oi}
                      className={`text-xs px-3 py-2 rounded-lg border ${
                        oi === q.correctIndex
                          ? "border-green-400 bg-green-50 dark:bg-green-950/20 text-green-900 dark:text-green-200"
                          : oi === userAns
                            ? "border-red-400 bg-red-50 dark:bg-red-950/20 text-red-900 dark:text-red-200"
                            : "border-gray-200 dark:border-gray-700 text-gray-500"
                      }`}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  <span className="font-semibold text-gray-950 dark:text-white">Explanation: </span>
                  {q.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const timeWarn = remaining < 60;

  return (
    <div className="relative pb-12">
      <SEO title={`${exam.name}, ${mode === "mock" ? "Mock Test" : "Practice"}`} noIndex />
      <div className="sticky top-0 z-30 -mx-4 px-4 py-3 bg-white/95 dark:bg-gray-950/95 backdrop-blur border-b border-gray-100 dark:border-gray-800 mb-5">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] text-gray-500">{exam.name}</p>
            <p className="text-sm font-bold text-gray-950 dark:text-white truncate">
              Q{idx + 1} of {questions.length}
            </p>
          </div>
          <motion.div
            animate={timeWarn ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.6, repeat: Infinity }}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold tabular-nums text-sm ${
              timeWarn ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-gray-100 dark:bg-gray-800 text-gray-950 dark:text-white"
            }`}
          >
            <Clock className="w-4 h-4" />
            {formatTime(remaining)}
          </motion.div>
          <button
            onClick={handleSubmit}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-gray-950 dark:bg-white dark:text-gray-950 rounded-xl hover:opacity-90"
          >
            Submit
          </button>
        </div>
        <div className="h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mt-3">
          <motion.div className="h-full bg-indigo-500" animate={{ width: `${pct}%` }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {current.topic.replace(/-/g, " ")}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400">
                {current.difficulty}
              </span>
            </div>
            <button
              onClick={toggleFlag}
              className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg transition-colors ${
                flagged.has(current.id)
                  ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-500"
              }`}
            >
              <Flag className="w-3 h-3" />
              {flagged.has(current.id) ? "Flagged" : "Flag"}
            </button>
          </div>
          <p className="text-base font-medium text-gray-950 dark:text-white mb-5 leading-relaxed">{current.question}</p>
          <div className="space-y-2">
            {current.options.map((opt, i) => {
              const sel = answers[current.id] === i;
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className={`w-full text-left px-4 py-3 text-sm rounded-xl border-2 transition-all flex items-center gap-3 ${
                    sel
                      ? "border-violet-500 bg-violet-50 dark:bg-violet-950/30 text-gray-950 dark:text-white"
                      : "border-gray-200 dark:border-gray-700 hover:border-violet-300 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg text-[11px] font-bold flex items-center justify-center shrink-0 ${sel ? "bg-violet-500 text-white" : "bg-gray-100 dark:bg-gray-800"}`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-5">
        <button
          onClick={() => setIdx(Math.max(0, idx - 1))}
          disabled={idx === 0}
          className="inline-flex items-center gap-1 px-4 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl disabled:opacity-40"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Previous
        </button>
        <span className="text-xs text-gray-500 tabular-nums">{answered} answered</span>
        {idx < questions.length - 1 ? (
          <button
            onClick={() => setIdx(idx + 1)}
            className="inline-flex items-center gap-1 px-4 py-2 text-xs font-medium text-white bg-gray-950 dark:bg-white dark:text-gray-950 rounded-xl"
          >
            Next
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="inline-flex items-center gap-1 px-4 py-2 text-xs font-medium text-white bg-green-600 hover:bg-green-700 rounded-xl"
          >
            Submit Test
          </button>
        )}
      </div>
    </div>
  );
}
