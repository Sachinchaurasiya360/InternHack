import { useState } from "react";
import { useParams, Link } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, CheckCircle2, XCircle, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AptitudeTopicDetail } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import toast from "react-hot-toast";

export default function AptitudeTopicPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Set<number>>(new Set());

  const { data: topic, isLoading } = useQuery({
    queryKey: [...queryKeys.aptitude.topic(slug!), page],
    queryFn: () =>
      api.get<AptitudeTopicDetail>(`/aptitude/topics/${slug}?page=${page}&limit=10`).then((r) => r.data),
    enabled: !!slug,
  });

  const submitMutation = useMutation({
    mutationFn: ({ questionId, answer }: { questionId: number; answer: string }) =>
      api.post<{ correct: boolean; correctAnswer: string; explanation?: string }>(
        `/aptitude/questions/${questionId}/answer`,
        { answer }
      ).then((r) => r.data),
    onSuccess: (data, { questionId }) => {
      setRevealedQuestions((prev) => new Set(prev).add(questionId));
      if (data.correct) {
        toast.success("Correct!");
      } else {
        toast.error(`Wrong! Correct answer: ${data.correctAnswer}`);
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.topic(slug!) });
      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.progress() });
    },
  });

  const handleSubmit = (questionId: number) => {
    const answer = selectedAnswers[questionId];
    if (!answer) {
      toast.error("Please select an option");
      return;
    }
    if (!user) {
      toast.error("Please log in to track your progress");
      return;
    }
    submitMutation.mutate({ questionId, answer });
  };

  const basePath = user ? "/student/aptitude" : "/aptitude";

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <p className="text-gray-500">Topic not found</p>
        <Link to={basePath} className="text-indigo-600 hover:underline mt-2 inline-block">Back to topics</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Link to={basePath} className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mb-3">
          <ArrowLeft className="w-4 h-4" />
          Back to {topic.categoryName}
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{topic.name}</h1>
            {topic.description && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{topic.description}</p>
            )}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Page {topic.page} of {topic.totalPages} &middot; {topic.totalQuestions} questions
          </span>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {topic.questions.map((q, idx) => {
          const qNum = (page - 1) * 10 + idx + 1;
          const isRevealed = q.answered || revealedQuestions.has(q.id);
          const selectedAnswer = selectedAnswers[q.id];

          return (
            <div
              key={q.id}
              className={`bg-white dark:bg-gray-900 border rounded-xl p-5 ${
                isRevealed
                  ? q.correct || (q.correctAnswer && selectedAnswer === q.correctAnswer)
                    ? "border-green-200 dark:border-green-800"
                    : "border-red-200 dark:border-red-800"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              {/* Question */}
              <div className="flex gap-3 mb-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-xs font-bold text-purple-600 dark:text-purple-400">
                  {qNum}
                </span>
                <div
                  className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: q.question }}
                />
              </div>

              {/* Companies */}
              {q.companies.length > 0 && (
                <div className="flex items-center gap-1.5 mb-3 ml-10">
                  <Building2 className="w-3 h-3 text-gray-400" />
                  <div className="flex flex-wrap gap-1">
                    {q.companies.slice(0, 5).map((c) => (
                      <span key={c} className="text-[10px] px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded">
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
              <div className="space-y-2 ml-10">
                {(["A", "B", "C", "D", ...(q.optionE ? ["E"] : [])] as const).map((letter) => {
                  const optionText = q[`option${letter}` as keyof typeof q] as string;
                  if (!optionText) return null;
                  const isSelected = selectedAnswer === letter;
                  const isCorrectOption = isRevealed && q.correctAnswer === letter;
                  const isWrongSelected = isRevealed && isSelected && q.correctAnswer !== letter;

                  return (
                    <label
                      key={letter}
                      className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-colors border ${
                        isCorrectOption
                          ? "border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-700"
                          : isWrongSelected
                          ? "border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-700"
                          : isSelected
                          ? "border-purple-300 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-700"
                          : "border-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50"
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
                      <span className="font-medium text-xs text-gray-500 dark:text-gray-400 w-4">{letter}.</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{optionText}</span>
                      {isCorrectOption && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                      {isWrongSelected && <XCircle className="w-4 h-4 text-red-500" />}
                    </label>
                  );
                })}
              </div>

              {/* Submit / Result */}
              <div className="ml-10 mt-3">
                {!isRevealed ? (
                  <button
                    onClick={() => handleSubmit(q.id)}
                    disabled={!selectedAnswer || submitMutation.isPending}
                    className="px-4 py-1.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-lg transition-colors"
                  >
                    {submitMutation.isPending ? "Submitting..." : "Check Answer"}
                  </button>
                ) : q.explanation ? (
                  <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">Explanation</p>
                    <div
                      className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: q.explanation }}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {topic.totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-8 mb-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {page} / {topic.totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(topic.totalPages, p + 1))}
            disabled={page >= topic.totalPages}
            className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
