import { useEffect, useState, useCallback, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, HelpCircle, Loader2, AlertTriangle } from "lucide-react";
import api from "../../../lib/axios";
import toast from "react-hot-toast";
import QuizResultModal from "./QuizResultModal";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

interface Quiz {
  id: number;
  title: string;
  passThreshold: number;
  timeLimitSecs: number | null;
  questions: QuizQuestion[];
}

interface AttemptAnswer {
  selected: number;
  correct: number;
  isCorrect: boolean;
}

interface AttemptResult {
  attempt: {
    score: number;
    passed: boolean;
    answers: Record<number, AttemptAnswer>;
  };
  quiz: {
    questions: Array<{
      id: number;
      question: string;
      options: string[];
      correctIndex: number;
      explanation?: string;
    }>;
  };
}

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

/* ------------------------------------------------------------------ */
/*  Timer hook                                                         */
/* ------------------------------------------------------------------ */

function useCountdown(totalSeconds: number | null, onExpire: () => void) {
  const [remaining, setRemaining] = useState(totalSeconds ?? 0);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    if (!totalSeconds || totalSeconds <= 0) return;
    setRemaining(totalSeconds);

    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onExpireRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [totalSeconds]);

  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  const isUrgent = totalSeconds !== null && remaining <= 60;

  return { remaining, formatted, isUrgent };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SkillQuizPage() {
  const { slug, skillId } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<AttemptResult | null>(null);

  /* Fetch quiz ---------------------------------------------------- */
  useEffect(() => {
    if (!skillId) return;
    setLoading(true);
    setError(null);

    api
      .get(`/quiz/skill/${skillId}`)
      .then((res) => {
        setQuiz(res.data.quiz);
      })
      .catch((err) => {
        const msg =
          (err as { response?: { data?: { message?: string } } })?.response?.data?.message ??
          "Quiz not found for this skill.";
        setError(msg);
      })
      .finally(() => setLoading(false));
  }, [skillId]);

  /* Submit -------------------------------------------------------- */
  const handleSubmit = useCallback(async () => {
    if (!quiz || submitting) return;

    const unanswered = quiz.questions.filter((q) => answers[q.id] === undefined);
    if (unanswered.length > 0) {
      toast.error(`Please answer all questions (${unanswered.length} remaining)`);
      return;
    }

    setSubmitting(true);
    try {
      const res = await api.post(`/quiz/${quiz.id}/attempt`, { answers });
      setResult(res.data as AttemptResult);
      if (res.data.attempt.passed) {
        toast.success("You passed!");
      }
    } catch (err) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ??
        "Failed to submit quiz.";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  }, [quiz, answers, submitting]);

  /* Timer --------------------------------------------------------- */
  const { formatted: timerDisplay, isUrgent } = useCountdown(
    quiz?.timeLimitSecs ?? null,
    handleSubmit,
  );

  /* Select answer ------------------------------------------------- */
  const selectAnswer = (questionId: number, optionIdx: number) => {
    if (result) return; // locked after submission
    setAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = quiz?.questions.length ?? 0;
  const allAnswered = answeredCount === totalQuestions && totalQuestions > 0;

  /* Loading state ------------------------------------------------- */
  if (loading) {
    return (
      <div className="max-w-3xl mx-auto animate-pulse space-y-4">
        <div className="h-8 bg-gray-100 dark:bg-gray-800 rounded-xl w-1/3" />
        <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-2xl" />
        <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded-xl" />
        <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded-xl" />
      </div>
    );
  }

  /* Error state --------------------------------------------------- */
  if (error || !quiz) {
    return (
      <div className="max-w-3xl mx-auto">
        <Link
          to={slug ? `/student/careers/${slug}` : "/student/careers"}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white mb-5 no-underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Career Progress
        </Link>

        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm p-10 text-center space-y-3">
          <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto" />
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Quiz Not Available</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{error ?? "No quiz found for this skill."}</p>
          <button
            onClick={() => navigate(slug ? `/student/careers/${slug}` : "/student/careers")}
            className="mt-4 px-5 py-2.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back link */}
      <Link
        to={slug ? `/student/careers/${slug}` : "/student/careers"}
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white mb-5 no-underline transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Career Progress
      </Link>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
        {/* Quiz header card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{quiz.title}</h1>
              <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <HelpCircle className="w-4 h-4" /> {totalQuestions} questions
                </span>
                <span>Pass: {quiz.passThreshold}%</span>
                {quiz.timeLimitSecs && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />{" "}
                    {Math.ceil(quiz.timeLimitSecs / 60)} min
                  </span>
                )}
              </div>
            </div>

            {/* Live timer */}
            {quiz.timeLimitSecs && !result && (
              <div
                className={`px-3 py-1.5 rounded-lg text-sm font-mono font-bold tabular-nums ${
                  isUrgent
                    ? "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 animate-pulse"
                    : "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                {timerDisplay}
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mb-1">
              <span>Progress</span>
              <span className="tabular-nums">
                {answeredCount}/{totalQuestions}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0}%` }}
                transition={{ duration: 0.3 }}
                className={`h-full rounded-full ${allAnswered ? "bg-green-500" : "bg-violet-500"}`}
              />
            </div>
          </div>
        </div>

        {/* Questions */}
        {quiz.questions.map((q, qIdx) => (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: qIdx * 0.05 }}
            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm p-5"
          >
            <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">
              <span className="text-gray-400 dark:text-gray-500 mr-1.5">{qIdx + 1}.</span>
              {q.question}
            </p>

            <div className="space-y-2">
              {q.options.map((opt, optIdx) => {
                const isSelected = answers[q.id] === optIdx;

                return (
                  <button
                    key={optIdx}
                    onClick={() => selectAnswer(q.id, optIdx)}
                    disabled={!!result}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm transition-all border ${
                      isSelected
                        ? "border-violet-400 dark:border-violet-500 bg-violet-50 dark:bg-violet-900/20 text-violet-900 dark:text-violet-200 ring-1 ring-violet-200 dark:ring-violet-700"
                        : "border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:border-gray-200 dark:hover:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                    } disabled:cursor-not-allowed`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border ${
                        isSelected
                          ? "border-violet-400 dark:border-violet-500 bg-violet-500 text-white"
                          : "border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {OPTION_LABELS[optIdx]}
                    </span>
                    <span className="flex-1">{opt}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Submit button */}
        {!result && (
          <div className="pt-2 pb-8">
            <button
              onClick={handleSubmit}
              disabled={!allAnswered || submitting}
              className="w-full py-3.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                </>
              ) : (
                `Submit Quiz${!allAnswered ? ` (${totalQuestions - answeredCount} unanswered)` : ""}`
              )}
            </button>
          </div>
        )}
      </motion.div>

      {/* Result modal */}
      {result && (
        <QuizResultModal
          score={result.attempt.score}
          passed={result.attempt.passed}
          passThreshold={quiz.passThreshold}
          questions={result.quiz.questions}
          answers={result.attempt.answers}
          onClose={() => navigate(slug ? `/student/careers/${slug}` : "/student/careers")}
        />
      )}
    </div>
  );
}
