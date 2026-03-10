import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, XCircle, ChevronLeft, ChevronRight, Building2, Clock } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AptitudeTopicDetail } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { LoadingScreen } from "../../../components/LoadingScreen";
import toast from "react-hot-toast";

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

export default function AptitudeTopicPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Set<number>>(new Set());
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  const [timerRunning, setTimerRunning] = useState(true);

  const { data: topic, isLoading } = useQuery({
    queryKey: [...queryKeys.aptitude.topic(slug!), page],
    queryFn: () =>
      api.get<AptitudeTopicDetail>(`/aptitude/topics/${slug}?page=${page}&limit=10`).then((r) => r.data),
    enabled: !!slug,
  });

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

  useEffect(() => { setCurrentQ(0); }, [page]);

  const submitMutation = useMutation({
    mutationFn: ({ questionId, answer }: { questionId: number; answer: string }) =>
      api.post<{ correct: boolean; correctAnswer: string; explanation?: string }>(
        `/aptitude/questions/${questionId}/answer`,
        { answer }
      ).then((r) => r.data),
    onSuccess: (data, { questionId }) => {
      setRevealedQuestions((prev) => new Set(prev).add(questionId));
      if (data.correct) toast.success("Correct!");
      else toast.error(`Wrong! Correct answer: ${data.correctAnswer}`);
      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.topic(slug!) });
      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.progress() });
    },
  });

  const handleSubmit = (questionId: number) => {
    const answer = selectedAnswers[questionId];
    if (!answer) { toast.error("Please select an option"); return; }
    if (!user) { toast.error("Please log in to track your progress"); return; }
    submitMutation.mutate({ questionId, answer });
  };

  const basePath = user ? "/student/aptitude" : "/aptitude";

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
  const isRevealed = q?.answered || revealedQuestions.has(q?.id);
  const selectedAnswer = q ? selectedAnswers[q.id] : undefined;
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timeStr = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  const answeredCount = topic.questions.filter((item) => item.answered || revealedQuestions.has(item.id)).length;

  return (
    <div className="relative max-w-4xl mx-auto pb-12">
      <SEO title={`${topic.name} - Aptitude`} noIndex />

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
        className="text-center mb-8 mt-6"
      >
        <Link
          to={basePath}
          className="inline-flex items-center gap-1.5 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm mb-6 no-underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to {topic.categoryName}
        </Link>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-2">
          {topic.name}
        </h1>
        {topic.description && (
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-lg mx-auto">{topic.description}</p>
        )}
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 tabular-nums">
          Page {topic.page} of {topic.totalPages} &middot; {topic.totalQuestions} total questions
        </p>
      </motion.div>

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
          <div className={`flex items-center gap-1.5 text-sm font-mono font-bold tabular-nums ${timeLeft < 60 ? "text-red-500" : "text-gray-600 dark:text-gray-400"}`}>
            <Clock className="w-4 h-4" />
            {timeStr}
          </div>
        </div>
        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${totalQ > 0 ? Math.round((answeredCount / totalQ) * 100) : 0}%` }}
            transition={{ duration: 0.5 }}
            className={`h-full rounded-full ${answeredCount === totalQ && totalQ > 0 ? "bg-green-500" : "bg-purple-500"}`}
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
          const isAnswered = item.answered || revealedQuestions.has(item.id);
          const isCurrent = idx === currentQ;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentQ(idx)}
              className={`w-9 h-9 rounded-xl text-xs font-bold flex items-center justify-center transition-all duration-200 ${
                isCurrent
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900/30"
                  : isAnswered
                  ? "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800"
                  : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
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
              isRevealed
                ? q.correct || (q.correctAnswer && selectedAnswer === q.correctAnswer)
                  ? "border-green-200 dark:border-green-800"
                  : "border-red-200 dark:border-red-800"
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
                const isCorrectOption = isRevealed && q.correctAnswer === letter;
                const isWrongSelected = isRevealed && isSelected && q.correctAnswer !== letter;

                return (
                  <label
                    key={letter}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 border ${
                      isCorrectOption
                        ? "border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800"
                        : isWrongSelected
                        ? "border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800"
                        : isSelected
                        ? "border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800"
                        : "border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-200 dark:hover:border-gray-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={letter}
                      checked={isSelected}
                      disabled={isRevealed}
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

            {/* Submit / Explanation */}
            <div className="ml-11 mt-4">
              {!isRevealed ? (
                <button
                  onClick={() => handleSubmit(q.id)}
                  disabled={!selectedAnswer || submitMutation.isPending}
                  className="px-5 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-xl transition-colors shadow-sm"
                >
                  {submitMutation.isPending ? "Submitting..." : "Check Answer"}
                </button>
              ) : q.explanation ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl"
                >
                  <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-1.5">Explanation</p>
                  <div
                    className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(q.explanation) }}
                  />
                </motion.div>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Previous / Next */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-between mt-5"
      >
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
      </motion.div>

      {/* Page-level pagination */}
      {topic.totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex items-center justify-center gap-3 mt-8 pt-5 border-t border-gray-100 dark:border-gray-800"
        >
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl disabled:opacity-40 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" /> Prev Page
          </button>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tabular-nums">
            Page {page} / {topic.totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(topic.totalPages, p + 1))}
            disabled={page >= topic.totalPages}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl disabled:opacity-40 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm"
          >
            Next Page <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
