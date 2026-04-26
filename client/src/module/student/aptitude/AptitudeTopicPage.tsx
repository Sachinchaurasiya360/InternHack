import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, XCircle, ChevronLeft, ChevronRight, Building2, Clock,
  Trophy, Send, RotateCcw, ArrowUpRight,
} from "lucide-react";
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

function MetaChip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border rounded-md ${className || "text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10"}`}>
      {children}
    </span>
  );
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
      <div className="relative max-w-6xl mx-auto py-20 text-center">
        <p className="text-sm text-stone-600 dark:text-stone-400">Topic not found.</p>
        <Link
          to={basePath}
          className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors no-underline"
        >
          back to topics <ArrowUpRight className="w-3 h-3" />
        </Link>
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

  const totalNewSubmitted = Object.keys(resultsMap).length;
  const correctCount = Object.values(resultsMap).filter(r => r.correct).length;
  const accuracy = totalNewSubmitted > 0 ? Math.round((correctCount / totalNewSubmitted) * 100) : 0;
  const progressPct = totalQ > 0 ? Math.round(((newSelectedCount + prevAnsweredCount) / totalQ) * 100) : 0;

  return (
    <div className="relative text-stone-900 dark:text-stone-50 pb-12">
      <SEO
        title={`${topic.name} - Aptitude Practice`}
        description={`Practice ${topic.name} aptitude questions with detailed explanations and solutions.`}
        keywords={`${topic.name}, aptitude practice, placement preparation`}
        canonicalUrl={canonicalUrl(`/learn/aptitude/${slug}/practice`)}
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
          className="mt-2 mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-6"
        >
          <div className="min-w-0 flex-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              learn / aptitude / {slug}
            </div>
            <h1 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight wrap-break-word">
              {topic.name}
            </h1>
            {topic.description && (
              <p className="mt-3 text-sm text-stone-500 max-w-xl">{topic.description}</p>
            )}
            <p className="mt-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
              page {topic.page} / {topic.totalPages} &middot; {topic.totalQuestions} total questions
            </p>
          </div>
          <div className="flex items-center gap-x-4 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 flex-wrap">
            <span>
              on page
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {totalQ}
              </span>
            </span>
            {user && (
              <span>
                answered
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                  {prevAnsweredCount}
                </span>
              </span>
            )}
            {user && prevAnsweredCount > 0 && (
              <button
                onClick={() => resetMutation.mutate()}
                disabled={resetMutation.isPending}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-red-700 dark:text-red-400 border border-red-300 dark:border-red-900/60 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50"
              >
                <RotateCcw className={`w-3 h-3 ${resetMutation.isPending ? "animate-spin" : ""}`} />
                {resetMutation.isPending ? "resetting" : "reset progress"}
              </button>
            )}
          </div>
        </motion.div>

        {/* Results summary */}
        {submitted && totalNewSubmitted > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-5 py-4"
          >
            <div className="flex items-center gap-4 flex-wrap">
              <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                <Trophy className="w-4 h-4 text-lime-500" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  batch result
                </span>
                <p className="mt-0.5 text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
                  {correctCount} / {totalNewSubmitted}
                  <span className="ml-3 text-xs font-mono font-normal text-stone-500">
                    {accuracy}% accuracy
                  </span>
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                retry
              </button>
            </div>
          </motion.div>
        )}

        {/* Progress + timer strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-5 px-5 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md"
        >
          <div className="flex items-center justify-between gap-4 mb-2.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
              question {currentQ + 1} / {totalQ}
            </span>
            {!submitted ? (
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold tabular-nums ${
                  timeLeft < 60 ? "text-red-600 dark:text-red-400" : "text-stone-900 dark:text-stone-50"
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                {timeStr}
              </span>
            ) : (
              <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
                submitted
              </span>
            )}
          </div>
          <div className="w-full h-1 bg-stone-100 dark:bg-stone-800 overflow-hidden rounded-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.5 }}
              className={`h-full ${submitted ? "bg-lime-400" : "bg-stone-900 dark:bg-stone-50"}`}
            />
          </div>
        </motion.div>

        {/* Question number grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mb-5 flex flex-wrap gap-1.5"
        >
          {topic.questions.map((item, idx) => {
            const isCurrent = idx === currentQ;
            const hasResult = resultsMap[item.id];
            const isPrevAnswered = item.answered;
            const hasSelection = !!selectedAnswers[item.id];

            let tileClass: string;
            if (isCurrent) {
              tileClass = "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50";
            } else if (submitted && hasResult) {
              tileClass = hasResult.correct
                ? "text-lime-700 dark:text-lime-400 border-lime-300 dark:border-lime-900/60 hover:bg-lime-50 dark:hover:bg-lime-900/20"
                : "text-red-700 dark:text-red-400 border-red-300 dark:border-red-900/60 hover:bg-red-50 dark:hover:bg-red-900/20";
            } else if (isPrevAnswered) {
              tileClass = "text-lime-700 dark:text-lime-400 border-lime-300 dark:border-lime-900/60 hover:bg-lime-50 dark:hover:bg-lime-900/20";
            } else if (hasSelection && !submitted) {
              tileClass = "text-stone-900 dark:text-stone-50 border-stone-900 dark:border-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800";
            } else {
              tileClass = "text-stone-500 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30";
            }

            return (
              <button
                key={item.id}
                onClick={() => setCurrentQ(idx)}
                className={`w-9 h-9 rounded-md text-[11px] font-mono font-bold tabular-nums flex items-center justify-center border transition-colors ${tileClass}`}
              >
                {String(idx + 1).padStart(2, "0")}
              </button>
            );
          })}
        </motion.div>

        {/* Question card */}
        <AnimatePresence mode="wait">
          {q && (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-white dark:bg-stone-900 rounded-md p-4 sm:p-6 border transition-colors ${
                submitted && resultsMap[q.id]
                  ? resultsMap[q.id].correct
                    ? "border-lime-300 dark:border-lime-900/60"
                    : "border-red-300 dark:border-red-900/60"
                  : q.answered
                    ? "border-lime-300 dark:border-lime-900/60"
                    : "border-stone-200 dark:border-white/10"
              }`}
            >
              {/* Question header */}
              <div className="flex items-start gap-3 sm:gap-4 mb-5">
                <span className="shrink-0 w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center text-[11px] font-mono font-bold tabular-nums text-stone-900 dark:text-stone-50">
                  {String(qNum).padStart(2, "0")}
                </span>
                <div
                  className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed flex-1 min-w-0 pt-1 wrap-break-word"
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(q.question) }}
                />
              </div>

              {/* Companies */}
              {q.companies.length > 0 && (
                <div className="flex items-center gap-2 mb-5 ml-0 sm:ml-12 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    <Building2 className="w-3 h-3" />
                    asked at
                  </span>
                  {q.companies.slice(0, 5).map((c) => (
                    <MetaChip key={c}>{c}</MetaChip>
                  ))}
                  {q.companies.length > 5 && (
                    <span className="text-[10px] font-mono text-stone-500">+{q.companies.length - 5}</span>
                  )}
                </div>
              )}

              {/* Options */}
              <div className="space-y-2 ml-0 sm:ml-12">
                {(["A", "B", "C", "D", ...(q.optionE ? ["E"] : [])] as const).map((letter) => {
                  const optionText = q[`option${letter}` as keyof typeof q] as string;
                  if (!optionText) return null;

                  const isSelected = selectedAnswer === letter;
                  const hasResult = submitted && resultsMap[q.id];
                  const isCorrectOption =
                    (hasResult && resultsMap[q.id].correctAnswer === letter) ||
                    (q.answered && q.correctAnswer === letter);
                  const isWrongSelected =
                    hasResult && isSelected && resultsMap[q.id].correctAnswer !== letter;
                  const isDisabled = submitted || q.answered;

                  return (
                    <label
                      key={letter}
                      className={`flex items-center gap-3 p-3 rounded-md border transition-colors ${
                        isDisabled ? "cursor-default" : "cursor-pointer"
                      } ${
                        isCorrectOption
                          ? "border-lime-300 dark:border-lime-900/60 bg-lime-50/50 dark:bg-lime-900/10"
                          : isWrongSelected
                            ? "border-red-300 dark:border-red-900/60 bg-red-50/50 dark:bg-red-900/10"
                            : isSelected && !submitted
                              ? "border-stone-900 dark:border-stone-50 bg-stone-50 dark:bg-stone-800/50"
                              : "border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={letter}
                        checked={isSelected}
                        disabled={isDisabled}
                        onChange={() => setSelectedAnswers((prev) => ({ ...prev, [q.id]: letter }))}
                        className="accent-lime-500"
                      />
                      <span className="font-mono text-[11px] uppercase tracking-widest text-stone-500 w-5">
                        {letter}
                      </span>
                      <span className="text-sm text-stone-700 dark:text-stone-300 flex-1">{optionText}</span>
                      {isCorrectOption && <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" />}
                      {isWrongSelected && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
                    </label>
                  );
                })}
              </div>

              {/* Explanation */}
              {((submitted && resultsMap[q.id]?.explanation) || (q.answered && q.explanation)) && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="ml-0 sm:ml-12 mt-5"
                >
                  <div className="inline-flex items-center gap-2 mb-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    <span className="h-1 w-1 bg-lime-400" />
                    explanation
                  </div>
                  <div className="bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-white/10 rounded-md p-4">
                    <div
                      className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(resultsMap[q.id]?.explanation || q.explanation || ""),
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation + Submit */}
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
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:border-stone-900 dark:hover:border-stone-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> previous
            </button>
            <button
              onClick={() => setCurrentQ((c) => Math.min(totalQ - 1, c + 1))}
              disabled={currentQ >= totalQ - 1}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:border-stone-900 dark:hover:border-stone-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {!submitted && (
            <button
              onClick={handleSubmitAll}
              disabled={submittingAll || newSelectedCount === 0}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-widest bg-stone-900 dark:bg-stone-50 border border-stone-900 dark:border-stone-50 text-stone-50 dark:text-stone-900 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 dark:hover:text-stone-900 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="w-3.5 h-3.5" />
              {submittingAll
                ? "submitting"
                : `submit all answers (${newSelectedCount} / ${totalQ - prevAnsweredCount})`}
            </button>
          )}
        </motion.div>

        {/* Pagination */}
        <div className="mt-8 pt-5 border-t border-stone-200 dark:border-white/10">
          <PaginationControls
            currentPage={page}
            totalPages={topic.totalPages}
            onPageChange={setPage}
            className="mt-0"
          />
        </div>
      </div>
    </div>
  );
}
