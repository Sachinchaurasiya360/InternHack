import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Target, ChevronLeft, Play, CheckCircle2, XCircle } from "lucide-react";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { Button } from "../../../components/ui/button";
import { getExam, getQuestionsForExam, getQuestionsForSection } from "./data/exams";

interface ExamAttempt {
  completedAt: string;
  correct: number;
  total: number;
  scorePct: number;
  passed: boolean;
  mode: "mock" | "section";
  sectionId?: string;
}

export default function ExamDetailPage() {
  const { examId } = useParams();
  const exam = getExam(examId ?? "");
  
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);

  useEffect(() => {
    try {
      if (!exam) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setAttempts([]);
        return;
      }
      const raw = localStorage.getItem("exam-attempts-history");
      if (raw) {
        const history = JSON.parse(raw);
        const examData = history[exam.id];
        if (examData) {
          let list = Array.isArray(examData.attempts) ? examData.attempts : [];
          if (list.length === 0 && examData.completedAt) {
            list = [
              {
                completedAt: examData.completedAt,
                correct: examData.correct,
                total: examData.total,
                scorePct: examData.scorePct,
                passed: examData.passed,
                mode: examData.mode,
                sectionId: examData.sectionId,
              },
            ];
          }
          setAttempts(list);
          return;
        }
      }
    } catch (e) {
      console.error("Failed to read exam history from localStorage", e);
    }
    setAttempts([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exam?.id]);

  if (!exam) return <Navigate to="/learn/exam-prep" replace />;

  const clearHistory = () => {
    if (window.confirm("Are you sure you want to clear your attempt history for this exam?")) {
      try {
        const raw = localStorage.getItem("exam-attempts-history");
        if (raw) {
          const history = JSON.parse(raw);
          delete history[exam.id];
          localStorage.setItem("exam-attempts-history", JSON.stringify(history));
          setAttempts([]);
        }
      } catch (e) {
        console.error("Failed to clear exam history from localStorage", e);
      }
    }
  };

  const totalQuestions = getQuestionsForExam(exam.id).length;

  return (
    <div className="relative pb-12">
      <SEO
        title={`${exam.name} Mock Test`}
        description={`Practice ${exam.name} with timed mocks and detailed explanations. ${exam.sections.length} sections covering ${exam.tagline}.`}
        canonicalUrl={canonicalUrl(`/learn/exam-prep/${exam.id}`)}
      />

      <Link to="/learn/exam-prep" className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mt-6 mb-4">
        <ChevronLeft className="w-3.5 h-3.5" />
        All exams
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-2xl ${exam.color} p-8 mb-6`}
      >
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur text-white font-bold text-2xl flex items-center justify-center">
                {exam.logo}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{exam.name}</h1>
                <p className="text-sm text-white/80">{exam.tagline}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white text-sm">
            <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur">
              <div className="text-[10px] uppercase tracking-wide opacity-80">Duration</div>
              <div className="font-bold flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{exam.totalDuration}m</div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur">
              <div className="text-[10px] uppercase tracking-wide opacity-80">Questions</div>
              <div className="font-bold flex items-center gap-1"><Target className="w-3.5 h-3.5" />{totalQuestions}</div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur">
              <div className="text-[10px] uppercase tracking-wide opacity-80">Cutoff</div>
              <div className="font-bold">{exam.passCutoff}%</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Link
          to={`/learn/exam-prep/${exam.id}/mock`}
          className="group rounded-2xl border-2 border-indigo-300 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/30 p-5 hover:border-indigo-500 transition-colors"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center">
              <Play className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-gray-950 dark:text-white">Full Mock Test</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">{exam.totalDuration} minutes, all sections</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1 text-xs font-medium text-violet-600 dark:text-violet-400 group-hover:gap-2 transition-all">
            Start timed mock
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>
        <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
          <h3 className="font-bold text-gray-950 dark:text-white mb-1">Topic-wise Practice</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Pick a section to practice untimed with instant feedback.</p>
        </div>
      </div>

      <h2 className="text-sm font-bold text-gray-950 dark:text-white mb-3">Sections</h2>
      <div className="space-y-3">
        {exam.sections.map((s, i) => {
          const count = getQuestionsForSection(exam.id, s.id).length;
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              <Link
                to={`/learn/exam-prep/${exam.id}/section/${s.id}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-950 dark:text-white">{s.name}</h3>
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{s.durationMin}m</span>
                      <span>{count} questions</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-violet-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {attempts.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3 border-b border-stone-100 dark:border-stone-800 pb-2">
            <h2 className="text-sm font-bold text-stone-950 dark:text-white">Attempt History</h2>
            <Button
              variant="danger"
              size="sm"
              onClick={clearHistory}
              className="text-xs uppercase tracking-wider font-semibold"
            >
              Clear History
            </Button>
          </div>
          <div className="space-y-2.5">
            {attempts.map((att, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-4 rounded-2xl border border-stone-100 dark:border-stone-800 bg-white dark:bg-stone-900 px-5 py-3.5 text-xs shadow-xs"
              >
                <div className="flex items-center gap-3">
                  {att.passed ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  )}
                  <div>
                    <span className="font-bold text-stone-800 dark:text-stone-200">
                      {att.mode === "mock"
                        ? "Full Mock Test"
                        : `Section: ${exam.sections.find((s) => s.id === att.sectionId)?.name || att.sectionId}`}
                    </span>
                    <span className="text-stone-400 ml-2 font-mono text-xs">
                      {new Date(att.completedAt).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-stone-700 dark:text-stone-300">
                    {att.correct}/{att.total} ({att.scorePct}%)
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-md font-mono text-xs font-bold uppercase tracking-wider ${
                      att.passed
                        ? "bg-green-100 dark:bg-green-950/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/30"
                        : "bg-amber-100 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/30"
                    }`}
                  >
                    {att.passed ? "Passed" : "Failed"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
