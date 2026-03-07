import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import { ArrowLeft, Building2, Search, CheckCircle2, XCircle, ChevronLeft, ChevronRight } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AptitudeCompany, AptitudeCompanyQuestions } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import toast from "react-hot-toast";

export default function AptitudeCompaniesPage() {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Set<number>>(new Set());

  const { data: companies, isLoading } = useQuery({
    queryKey: queryKeys.aptitude.companies(),
    queryFn: () => api.get<AptitudeCompany[]>("/aptitude/companies").then((r) => r.data),
  });

  const { data: companyData, isLoading: loadingQuestions } = useQuery({
    queryKey: [...queryKeys.aptitude.company(selectedCompany!), page],
    queryFn: () =>
      api.get<AptitudeCompanyQuestions>(`/aptitude/companies/${encodeURIComponent(selectedCompany!)}?page=${page}&limit=10`).then((r) => r.data),
    enabled: !!selectedCompany,
  });

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
      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.company(selectedCompany!) });
      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.progress() });
    },
  });

  const handleSubmit = (questionId: number) => {
    const answer = selectedAnswers[questionId];
    if (!answer) { toast.error("Select an option"); return; }
    if (!user) { toast.error("Log in to track progress"); return; }
    submitMutation.mutate({ questionId, answer });
  };

  const filtered = companies?.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const basePath = user ? "/student/aptitude" : "/aptitude";

  // ── Company questions view ──
  if (selectedCompany) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <button
            onClick={() => { setSelectedCompany(null); setPage(1); setSelectedAnswers({}); setRevealedQuestions(new Set()); }}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mb-3"
          >
            <ArrowLeft className="w-4 h-4" /> Back to companies
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedCompany}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {companyData?.total ?? 0} aptitude questions &middot; Page {companyData?.page ?? 1} of {companyData?.totalPages ?? 1}
          </p>
        </div>

        {loadingQuestions ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {companyData?.questions.map((q, idx) => {
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
                    <div className="flex gap-3 mb-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-xs font-bold text-purple-600 dark:text-purple-400">
                        {qNum}
                      </span>
                      <div className="flex-1">
                        <div
                          className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: q.question }}
                        />
                        {q.topicName && (
                          <Link
                            to={`${basePath}/${q.topicSlug}`}
                            className="inline-block mt-1 text-[10px] px-1.5 py-0.5 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded hover:underline"
                          >
                            {q.topicName}
                          </Link>
                        )}
                      </div>
                    </div>

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

                    <div className="ml-10 mt-3">
                      {!isRevealed ? (
                        <button
                          onClick={() => handleSubmit(q.id)}
                          disabled={!selectedAnswer || submitMutation.isPending}
                          className="px-4 py-1.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-lg transition-colors"
                        >
                          Check Answer
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

            {companyData && companyData.totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-8 mb-4">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <span className="text-sm text-gray-500">{page} / {companyData.totalPages}</span>
                <button
                  onClick={() => setPage((p) => Math.min(companyData.totalPages, p + 1))}
                  disabled={page >= companyData.totalPages}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    );
  }

  // ── Companies grid ──
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <Link to={basePath} className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mb-3">
          <ArrowLeft className="w-4 h-4" /> Back to Aptitude
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Company Wise Questions</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Practice aptitude questions asked by top companies</p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered?.map((company) => (
            <button
              key={company.name}
              onClick={() => { setSelectedCompany(company.name); setPage(1); }}
              className="flex items-center gap-3 p-3.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-sm transition-all text-left"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{company.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{company.count} questions</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {filtered?.length === 0 && !isLoading && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">No companies found</p>
      )}
    </div>
  );
}
