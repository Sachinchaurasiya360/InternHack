import {
  Sparkles,
  Clock,
  HardDrive,
  Eye,
  AlertTriangle,
  Lightbulb,
  RefreshCw,
  Loader2,
} from "lucide-react";
import type { DsaCodeReview } from "../../../../lib/types";
import { Button } from "../../../../components/ui/button";

interface Props {
  review: DsaCodeReview | null;
  isLoading: boolean;
  error: unknown;
  onRequestReview: () => void;
  hasSubmission: boolean;
}

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

export function DsaAiReviewPanel({
  review,
  isLoading,
  error,
  onRequestReview,
  hasSubmission,
}: Props) {
  if (isLoading) {
    return (
      <div className="p-6 flex flex-col items-center justify-center gap-3 text-stone-400">
        <Loader2 className="w-8 h-8 text-lime-500 animate-spin" />
        <p className="text-sm font-medium">Analyzing your code...</p>
        <p className="text-xs text-stone-500">This may take a few seconds</p>
      </div>
    );
  }

  if (error) {
    const errMsg =
      (error as { response?: { data?: { message?: string } } })?.response?.data
        ?.message ??
      (error instanceof Error ? error.message : "Something went wrong");
    return (
      <div className="p-6 flex flex-col items-center justify-center gap-3">
        <AlertTriangle className="w-6 h-6 text-red-500" />
        <p className="text-sm text-red-600 dark:text-red-400 font-medium">
          {errMsg}
        </p>
        <Button variant="secondary" size="sm" onClick={onRequestReview}>
          <RefreshCw className="w-3 h-3 mr-1.5" /> Retry
        </Button>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="p-6 flex flex-col items-center justify-center gap-4 text-center">
        <div className="w-12 h-12 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-lime-500" />
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-1">
            AI Code Review
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-400 max-w-[240px] leading-relaxed">
            {hasSubmission
              ? "Get AI feedback on your solution — complexity, readability, edge cases, and suggestions."
              : "Run your code first, then request an AI review of your submission."}
          </p>
        </div>
        <Button
          variant="primary"
          size="sm"
          onClick={onRequestReview}
          disabled={!hasSubmission}
        >
          <Sparkles className="w-3 h-3 mr-1.5" /> Get AI Review
        </Button>
      </div>
    );
  }

  return (
    <div className="p-3 space-y-3">
      {/* Complexity */}
      <div className="grid grid-cols-2 gap-2">
        <div className="border border-stone-200 dark:border-white/10 rounded-lg p-3 bg-white dark:bg-stone-950">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Clock className="w-3 h-3 text-stone-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              time
            </span>
          </div>
          <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 leading-snug">
            {review.timeComplexity}
          </p>
        </div>
        <div className="border border-stone-200 dark:border-white/10 rounded-lg p-3 bg-white dark:bg-stone-950">
          <div className="flex items-center gap-1.5 mb-1.5">
            <HardDrive className="w-3 h-3 text-stone-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              space
            </span>
          </div>
          <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 leading-snug">
            {review.spaceComplexity}
          </p>
        </div>
      </div>

      {/* Readability */}
      <div className="border border-stone-200 dark:border-white/10 rounded-lg p-3 bg-white dark:bg-stone-950">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Eye className="w-3 h-3 text-stone-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              readability
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-bold tabular-nums ${scoreColor(review.readability.score)}`}
            >
              {review.readability.score}/10
            </span>
            <span
              className={`text-[10px] font-mono uppercase tracking-wider ${scoreColor(review.readability.score)}`}
            >
              {scoreLabel(review.readability.score)}
            </span>
          </div>
        </div>
        {/* Score bar */}
        <div className="h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden mb-2.5">
          <div
            className="h-full bg-lime-500 rounded-full transition-all duration-500"
            style={{ width: `${(review.readability.score / 10) * 100}%` }}
          />
        </div>
        <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
          {review.readability.feedback}
        </p>
      </div>

      {/* Edge Cases */}
      {review.edgeCases.length > 0 && (
        <div className="border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-950 overflow-hidden">
          <div className="px-3 py-2 border-b border-stone-100 dark:border-white/5 bg-stone-50 dark:bg-stone-900/50">
            <div className="flex items-center gap-1.5">
              <AlertTriangle className="w-3 h-3 text-amber-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                edge cases ({review.edgeCases.length})
              </span>
            </div>
          </div>
          <ul className="divide-y divide-stone-100 dark:divide-white/5">
            {review.edgeCases.map((ec, i) => (
              <li
                key={i}
                className="px-3 py-2.5 text-xs text-stone-700 dark:text-stone-300 leading-relaxed flex gap-2"
              >
                <span className="text-[10px] font-mono font-bold tabular-nums text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {ec}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Suggestions */}
      {review.suggestions.length > 0 && (
        <div className="border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-950 overflow-hidden">
          <div className="px-3 py-2 border-b border-stone-100 dark:border-white/5 bg-stone-50 dark:bg-stone-900/50">
            <div className="flex items-center gap-1.5">
              <Lightbulb className="w-3 h-3 text-lime-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                suggestions ({review.suggestions.length})
              </span>
            </div>
          </div>
          <ul className="divide-y divide-stone-100 dark:divide-white/5">
            {review.suggestions.map((s, i) => (
              <li
                key={i}
                className="px-3 py-2.5 text-xs text-stone-700 dark:text-stone-300 leading-relaxed flex gap-2"
              >
                <span className="text-[10px] font-mono font-bold tabular-nums text-lime-600 dark:text-lime-400 shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Re-review button */}
      <div className="flex justify-center pt-1">
        <Button variant="ghost" size="sm" onClick={onRequestReview}>
          <RefreshCw className="w-3 h-3 mr-1.5" /> Re-analyze
        </Button>
      </div>
    </div>
  );
}
