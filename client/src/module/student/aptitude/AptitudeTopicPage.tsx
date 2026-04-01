import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ChevronLeft, ChevronRight, Building2, Clock, Trophy, Send, RotateCcw } from "lucide-react";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AptitudeTopicDetail } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { LoadingScreen } from "../../../components/LoadingScreen";
import toast from "@/components/ui/toast";

function sanitizeHtml(html: string): string {
  return html
    .replace(/<img[^>]*src=["']\/[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<img[^>]*src=["'][^"']*indiabix[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .replace(/Video\s*Explanation[\s\S]*?(?=<\/div>|$)/gi, "")
    .replace(/<a[^>]*(?:youtube|youtu\.be|video)[^>]*>[\s\S]*?<\/a>/gi, "")
    .replace(/\s*style=["'][^"']*["']/gi, "")
    .replace(/<(div|span|p|font)\s*>\s*<\/\1>/gi, "")
    .replace(/<\/?font[^>]*>/gi, "")
    .replace(/\s*class=["'][^"']*["']/gi, "")
    .trim();
}

interface QuestionResult {
  correct: boolean;
  correctAnswer: string;
  explanation?: string;
}

export default function AptitudeTopicPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  const [timerRunning, setTimerRunning] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [submittingAll, setSubmittingAll] = useState(false);
  const [resultsMap, setResultsMap] = useState<Record<number, QuestionResult>>({});

  const { data: topic, isLoading } = useQuery({
    queryKey: [...queryKeys.aptitude.topic(slug!), page],
    queryFn: () =>
      api.get<AptitudeTopicDetail>(`/aptitude/topics/${slug}?page=${page}&limit=10`).then((r) => r.data),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });

  const resetMutation = useMutation({
    mutationFn: () => api.delete(`/aptitude/topics/${slug}/progress`),
    onSuccess: () => {
      setSubmitted(false);
      setResultsMap({});
      setSelectedAnswers({});
      setTimeLeft(600);
      setTimerRunning(true);
      setCurrentQ(0);
      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.topic(slug!) });
      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.progress() });
      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.categories() });
      toast.success("Progress reset! You can retry all questions.");
    },
    onError: () => toast.error("Failed to reset progress"),
  });

  // Timer
  useEffect(() => {
    if (!timerRunning || !topic?.questions.length) return;
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { setTimerRunning(false); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [timerRunning, topic?.questions.length]);

  // Reset on page change
  useEffect(() => {
    setCurrentQ(0);
    setSubmitted(false);
    setResultsMap({});
    setSelectedAnswers({});
    setTimeLeft(600);
    setTimerRunning(true);
  }, [page]);

  const handleSubmitAll = async () => {
    if (!topic || submittingAll || submitted) return;
    if (!user) { toast.error("Please log in to track your progress"); return; }

    const toSubmit = topic.questions.filter(q => !q.answered && selectedAnswers[q.id]);
    if (toSubmit.length === 0) {
      toast.error("Please answer at least one question");
      return;
    }

    setSubmittingAll(true);
    setTimerRunning(false);
    try {
      const results = await Promise.all(
        toSubmit.map(q =>
          api.post<QuestionResult>(
            `/aptitude/questions/${q.id}/answer`,
            { answer: selectedAnswers[q.id] }
          ).then(r => ({ questionId: q.id, ...r.data }))
        )
      );

      const map: Record<number, QuestionResult> = {};
      results.forEach(r => { map[r.questionId] = r; });
      setResultsMap(map);
      setSubmitted(true);

      const correct = results.filter(r => r.correct).length;
      toast.success(`${correct}/${results.length} correct!`);

      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.topic(slug!) });
      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.progress() });
    } catch {
      toast.error("Failed to submit answers");
    } finally {
      setSubmittingAll(false);
    }
  };

  const basePath = "/learn/aptitude";

  if (isLoading) return <LoadingScreen />;

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <p className="text-gray-500">Topic not found</p>
        <Link to={basePath} className="text-indigo-600 hover:underline mt-2 inline-block">Back to topics</Link>
      </div>
    );
  }

  const totalQ = topic.questions.length;
  const q = topic.questions[currentQ];
  const qNum = (page - 1) * 10 + currentQ + 1;
  const selectedAnswer = q ? selectedAnswers[q.id] : undefined;
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timeStr = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  const prevAnsweredCount = topic.questions.filter(item => item.answered).length;
  const newSelectedCount = topic.questions.filter(item => !item.answered && selectedAnswers[item.id]).length;

  // Results stats
  const totalNewSubmitted = Object.keys(resultsMap).length;
  const correctCount = Object.values(resultsMap).filter(r => r.correct).length;

  return (
    <div className="relative max-w-4xl mx-auto pb-12">
      <SEO
        title={`${topic.name} - Aptitude Practice`}
        description={`Practice ${topic.name} aptitude questions with detailed explanations and solutions.`}
        keywords={`${topic.name}, aptitude practice, placement preparation`}
        canonicalUrl={canonicalUrl(`/learn/aptitude/${slug}/practice`)}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-indigo-100 dark:from-slate-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-40" />
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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8"
      >
        <div className="flex items-center justify-between gap-4 mb-2">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-950 dark:text-white">
            {topic.name}
          </h1>
          {user && prevAnsweredCount > 0 && (
            <button
              onClick={() => resetMutation.mutate()}
              disabled={resetMutation.isPending}
              className="shrink-0 flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors disabled:opacity-50"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${resetMutation.isPending ? "animate-spin" : ""}`} />
              {resetMutation.isPending ? "Resetting..." : "Reset Progress"}
            </button>
          )}
        </div>
        {topic.description && (
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-lg">{topic.description}</p>
        )}
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 tabular-nums">
          Page {topic.page} of {topic.totalPages} &middot; {topic.totalQuestions} total questions
        </p>
      </motion.div>

      {/* Results summary - shown after batch submit */}
      {submitted && totalNewSubmitted > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 mb-5 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6 text-amber-500" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900 dark:text-white">
                Score: {correctCount}/{totalNewSubmitted}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {Math.round((correctCount / totalNewSubmitted) * 100)}% accuracy
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setResultsMap({});
                setSelectedAnswers({});
                setTimeLeft(600);
                setTimerRunning(true);
                setCurrentQ(0);
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Retry
            </button>
          </div>
        </motion.div>
      )}

      {/* Timer + progress bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 px-5 py-4 mb-5 shadow-sm"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-gray-900 dark:text-white tabular-nums">
            Question {currentQ + 1} of {totalQ}
          </span>
          {!submitted ? (
            <div className={`flex items-center gap-1.5 text-sm font-mono font-bold tabular-nums ${timeLeft < 60 ? "text-red-500" : "text-gray-600 dark:text-gray-400"}`}>
              <Clock className="w-4 h-4" />
              {timeStr}
            </div>
          ) : (
            <span className="text-sm font-medium text-green-600 dark:text-green-400">Submitted</span>
          )}
        </div>
        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${totalQ > 0 ? Math.round(((newSelectedCount + prevAnsweredCount) / totalQ) * 100) : 0}%` }}
            transition={{ duration: 0.5 }}
            className={`h-full rounded-full ${submitted ? "bg-green-500" : "bg-purple-500"}`}
          />
        </div>
      </motion.div>

      {/* Question number pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-wrap gap-2 mb-5"
      >
        {topic.questions.map((item, idx) => {
          const isCurrent = idx === currentQ;
          const hasResult = resultsMap[item.id];
          const isPrevAnswered = item.answered;
          const hasSelection = !!selectedAnswers[item.id];

          let pillClass: string;
          if (isCurrent) {
            pillClass = "bg-purple-600 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900/30";
          } else if (submitted && hasResult) {
            pillClass = hasResult.correct
              ? "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800"
              : "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800";
          } else if (isPrevAnswered) {
            pillClass = "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800";
          } else if (hasSelection && !submitted) {
            pillClass = "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800";
          } else {
            pillClass = "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700";
          }

          return (
            <button
              key={item.id}
              onClick={() => setCurrentQ(idx)}
              className={`w-9 h-9 rounded-xl text-xs font-bold flex items-center justify-center transition-all duration-200 ${pillClass}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </motion.div>

      {/* Single question card */}
      <AnimatePresence mode="wait">
        {q && (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 border ${
              submitted && resultsMap[q.id]
                ? resultsMap[q.id].correct
                  ? "border-green-200 dark:border-green-800"
                  : "border-red-200 dark:border-red-800"
                : q.answered
                ? "border-green-200 dark:border-green-800"
                : "border-gray-100 dark:border-gray-800"
            }`}
          >
            {/* Question */}
            <div className="flex gap-3 mb-5">
              <span className="shrink-0 w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-xs font-bold text-purple-600 dark:text-purple-400">
                {qNum}
              </span>
              <div
                className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed flex-1 pt-1"
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(q.question) }}
              />
            </div>

            {/* Companies */}
            {q.companies.length > 0 && (
              <div className="flex items-center gap-1.5 mb-4 ml-11">
                <Building2 className="w-3 h-3 text-gray-400" />
                <div className="flex flex-wrap gap-1">
                  {q.companies.slice(0, 5).map((c) => (
                    <span key={c} className="text-[10px] px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-md font-medium">
                      {c}
                    </span>
                  ))}
                  {q.companies.length > 5 && (
                    <span className="text-[10px] text-gray-400">+{q.companies.length - 5}</span>
                  )}
                </div>
              </div>
            )}

            {/* Options */}
            <div className="space-y-2.5 ml-11">
              {(["A", "B", "C", "D", ...(q.optionE ? ["E"] : [])] as const).map((letter) => {
                const optionText = q[`option${letter}` as keyof typeof q] as string;
                if (!optionText) return null;

                const isSelected = selectedAnswer === letter;
                const hasResult = submitted && resultsMap[q.id];
                const isCorrectOption = (hasResult && resultsMap[q.id].correctAnswer === letter) || (q.answered && q.correctAnswer === letter);
                const isWrongSelected = hasResult && isSelected && resultsMap[q.id].correctAnswer !== letter;
                const isDisabled = submitted || q.answered;

                return (
                  <label
                    key={letter}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 border ${isDisabled ? "cursor-default" : "cursor-pointer"} ${
                      isCorrectOption
                        ? "border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800"
                        : isWrongSelected
                        ? "border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800"
                        : isSelected && !submitted
                        ? "border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800"
                        : "border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-200 dark:hover:border-gray-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={letter}
                      checked={isSelected}
                      disabled={isDisabled}
                      onChange={() => setSelectedAnswers((prev) => ({ ...prev, [q.id]: letter }))}
                      className="accent-purple-600"
                    />
                    <span className="font-semibold text-xs text-gray-400 dark:text-gray-500 w-4">{letter}.</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{optionText}</span>
                    {isCorrectOption && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                    {isWrongSelected && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
                  </label>
                );
              })}
            </div>

            {/* Explanation - shown after batch submit or for previously answered */}
            {((submitted && resultsMap[q.id]?.explanation) || (q.answered && q.explanation)) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="ml-11 mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl"
              >
                <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-1.5">Explanation</p>
                <div
                  className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(resultsMap[q.id]?.explanation || q.explanation || "") }}
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation + Submit All */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-5 space-y-4"
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentQ((c) => Math.max(0, c - 1))}
            disabled={currentQ <= 0}
            className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl disabled:opacity-40 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <button
            onClick={() => setCurrentQ((c) => Math.min(totalQ - 1, c + 1))}
            disabled={currentQ >= totalQ - 1}
            className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl disabled:opacity-40 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Submit All button */}
        {!submitted && (
          <button
            onClick={handleSubmitAll}
            disabled={submittingAll || newSelectedCount === 0}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:hover:bg-purple-600 rounded-xl transition-colors shadow-sm"
          >
            <Send className="w-4 h-4" />
            {submittingAll ? "Submitting..." : `Submit All Answers (${newSelectedCount}/${totalQ - prevAnsweredCount})`}
          </button>
        )}
      </motion.div>

      {/* Page-level pagination */}
      <div className="mt-8 pt-5 border-t border-gray-100 dark:border-gray-800">
        <PaginationControls
          currentPage={page}
          totalPages={topic.totalPages}
          onPageChange={setPage}
          className="mt-0"
        />
      </div>
    </div>
  );
}
