import { useState, useMemo } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Sparkles, Clock, HardDrive, Eye, AlertTriangle, Lightbulb, RefreshCw, Loader2, History, Plus, FileCode,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import api from "../../../lib/axios";
import toast from "../../../components/ui/toast";
import { useAuthStore } from "../../../lib/auth.store";

interface ReviewResult {
  timeComplexity: string;
  spaceComplexity: string;
  readability: { score: number; feedback: string };
  edgeCases: string[];
  suggestions: string[];
}

interface ReviewHistoryItem {
  id: number;
  title: string;
  language: string;
  createdAt: string;
}

const LANGUAGES = [
  { value: "python", label: "Python" },
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
];

const SCORE_COLOR: Record<string, string> = {
  low: "text-red-600 dark:text-red-400",
  mid: "text-amber-600 dark:text-amber-400",
  good: "text-lime-600 dark:text-lime-400",
  great: "text-emerald-600 dark:text-emerald-400",
};

function scoreColor(score: number): string {
  if (score <= 3) return SCORE_COLOR.low;
  if (score <= 5) return SCORE_COLOR.mid;
  if (score <= 7) return SCORE_COLOR.good;
  return SCORE_COLOR.great;
}

function scoreLabel(score: number): string {
  if (score <= 3) return "Needs work";
  if (score <= 5) return "Decent";
  if (score <= 7) return "Good";
  return "Excellent";
}

function ReviewResultCard({ review }: { review: ReviewResult }) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Clock className="w-3 h-3 text-gray-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">time</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-50 leading-snug">{review.timeComplexity}</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-1.5 mb-1.5">
            <HardDrive className="w-3 h-3 text-gray-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">space</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-50 leading-snug">{review.spaceComplexity}</p>
        </div>
      </div>

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-900">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Eye className="w-3 h-3 text-gray-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">readability</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-bold tabular-nums ${scoreColor(review.readability.score)}`}>
              {review.readability.score}/10
            </span>
            <span className={`text-[10px] font-mono uppercase tracking-wider ${scoreColor(review.readability.score)}`}>
              {scoreLabel(review.readability.score)}
            </span>
          </div>
        </div>
        <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-2.5">
          <div className="h-full bg-lime-500 rounded-full transition-all duration-500" style={{ width: `${(review.readability.score / 10) * 100}%` }} />
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{review.readability.feedback}</p>
      </div>

      {review.edgeCases.length > 0 && (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 overflow-hidden">
          <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex items-center gap-1.5">
              <AlertTriangle className="w-3 h-3 text-amber-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">edge cases ({review.edgeCases.length})</span>
            </div>
          </div>
          <ul className="divide-y divide-gray-100 dark:divide-gray-800">
            {review.edgeCases.map((ec, i) => (
              <li key={i} className="px-3 py-2.5 text-xs text-gray-700 dark:text-gray-300 leading-relaxed flex gap-2">
                <span className="text-[10px] font-mono font-bold tabular-nums text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                {ec}
              </li>
            ))}
          </ul>
        </div>
      )}

      {review.suggestions.length > 0 && (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 overflow-hidden">
          <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex items-center gap-1.5">
              <Lightbulb className="w-3 h-3 text-lime-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">suggestions ({review.suggestions.length})</span>
            </div>
          </div>
          <ul className="divide-y divide-gray-100 dark:divide-gray-800">
            {review.suggestions.map((s, i) => (
              <li key={i} className="px-3 py-2.5 text-xs text-gray-700 dark:text-gray-300 leading-relaxed flex gap-2">
                <span className="text-[10px] font-mono font-bold tabular-nums text-lime-600 dark:text-lime-400 shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function SolutionReviewPage() {
  const { user } = useAuthStore();
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("");
  const [problemContext, setProblemContext] = useState("");
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);

  const reviewMutation = useMutation({
    mutationFn: (body: { title: string; language: string; code: string; problemContext?: string }) =>
      api.post("/solution-review/review", body).then((r) => r.data),
    onSuccess: () => {
      toast.success("Review generated!");
      historyQuery.refetch();
    },
    onError: () => {
      toast.error("Failed to generate review");
    },
  });

  const historyQuery = useQuery({
    queryKey: ["solution-review", "history"],
    queryFn: () => api.get("/solution-review/history").then((r) => r.data.reviews),
    enabled: !!user,
  });

  const detailQuery = useQuery({
    queryKey: ["solution-review", "detail", selectedReviewId],
    queryFn: () => api.get(`/solution-review/${selectedReviewId}`).then((r) => r.data),
    enabled: !!selectedReviewId,
  });

  const activeReview: ReviewResult | null = useMemo(() => {
    if (reviewMutation.data?.review) return reviewMutation.data.review as ReviewResult;
    if (detailQuery.data?.review) return detailQuery.data.review as ReviewResult;
    return null;
  }, [reviewMutation.data, detailQuery.data]);

  const handleSubmit = () => {
    if (!code.trim()) {
      toast.error("Please enter some code");
      return;
    }
    setSelectedReviewId(null);
    reviewMutation.mutate({ title: title || "Untitled Review", language, code, problemContext: problemContext.trim() || undefined });
  };

  const handleHistoryClick = (id: number) => {
    setSelectedReviewId(id);
    reviewMutation.reset();
  };

  const handleNewReview = () => {
    setSelectedReviewId(null);
    reviewMutation.reset();
  };

  return (
    <>
      <SEO
        title="AI Solution Reviewer"
        description="Get AI-powered feedback on your code — time complexity, space complexity, readability, edge cases, and suggestions."
        canonicalUrl={canonicalUrl("/student/solution-review")}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-lime-500 flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Solution Reviewer</h1>
            <p className="text-sm text-gray-500">Get AI feedback on your code — complexity, readability, edge cases, and suggestions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-5 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Two Sum solution"
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-300 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                </div>
                <div className="w-full sm:w-40">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Language</label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-300 bg-white dark:bg-gray-800 dark:text-white"
                  >
                    {LANGUAGES.map((l) => (
                      <option key={l.value} value={l.value}>{l.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Code</label>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Paste your code here..."
                  rows={14}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-300 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 resize-y"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Problem context (optional)</label>
                <textarea
                  value={problemContext}
                  onChange={(e) => setProblemContext(e.target.value)}
                  placeholder="Describe the problem, constraints, or any specific areas you want reviewed..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-300 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 resize-y"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="primary" size="sm" onClick={handleSubmit} disabled={reviewMutation.isPending}>
                  {reviewMutation.isPending ? (
                    <><Loader2 className="w-3 h-3 mr-1.5 animate-spin" /> Analyzing...</>
                  ) : (
                    <><Sparkles className="w-3 h-3 mr-1.5" /> Get AI Review</>
                  )}
                </Button>
              </div>
            </div>

            {reviewMutation.isPending && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-10 flex flex-col items-center justify-center gap-3 text-gray-400">
                <Loader2 className="w-8 h-8 text-lime-500 animate-spin" />
                <p className="text-sm font-medium">Analyzing your code...</p>
                <p className="text-xs text-gray-500">This may take a few seconds</p>
              </div>
            )}

              {reviewMutation.isError && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-red-200 dark:border-red-800 shadow-sm p-6 flex flex-col items-center justify-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <p className="text-sm text-red-600 dark:text-red-400 font-medium">Failed to generate review</p>
                <Button variant="secondary" size="sm" onClick={handleSubmit}>
                  <RefreshCw className="w-3 h-3 mr-1.5" /> Retry
                </Button>
              </div>
            )}

            {activeReview && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-lime-500" />
                    Review Results
                  </h2>
                  <Button variant="ghost" size="sm" onClick={handleNewReview}>
                    <Plus className="w-3 h-3 mr-1.5" /> New Review
                  </Button>
                </div>
                <ReviewResultCard review={activeReview} />
              </div>
            )}
          </div>

          {/* History sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 sticky top-24">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                  <History className="w-3.5 h-3.5" />
                  History
                </h2>
                <Button variant="ghost" size="sm" onClick={handleNewReview} className={selectedReviewId ? "" : "opacity-0 pointer-events-none"}>
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              {historyQuery.isLoading ? (
                <div className="flex justify-center py-6">
                  <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
                </div>
              ) : historyQuery.data?.length === 0 ? (
                <div className="text-center py-6 text-gray-400">
                  <FileCode className="w-6 h-6 mx-auto mb-2 opacity-50" />
                  <p className="text-xs">No reviews yet</p>
                </div>
              ) : (
                <div className="space-y-1 max-h-[500px] overflow-y-auto">
                  {(historyQuery.data || []).map((item: ReviewHistoryItem) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleHistoryClick(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                        selectedReviewId === item.id
                          ? "bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800 border border-transparent"
                      }`}
                    >
                      <p className="font-medium text-gray-900 dark:text-gray-100 truncate">{item.title}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-gray-400">{item.language}</span>
                        <span className="text-[10px] text-gray-400">{new Date(item.createdAt).toLocaleDateString()}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
