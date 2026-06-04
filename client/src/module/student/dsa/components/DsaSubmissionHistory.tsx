import {
  CheckCircle2,
  XCircle,
  Clock,
  Terminal,
  AlertTriangle,
  Cpu,
} from "lucide-react";
import type { DsaSubmissionSummary, DsaLanguage } from "../../../../lib/types";
import { Button } from "../../../../components/ui/button";

const LANG_LABELS: Record<DsaLanguage, string> = {
  python: "Python",
  cpp: "C++",
  java: "Java",
};

interface Props {
  submissions: DsaSubmissionSummary[];
  onLoadCode: (code: string, language: DsaLanguage) => void;
}

export function DsaSubmissionHistory({ submissions, onLoadCode }: Props) {
  // 1. Clean Production Empty State with Dashed border & Terminal Icon
  if (!submissions || submissions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-stone-200 dark:border-white/10 rounded-xl m-4 bg-stone-50 dark:bg-stone-900/30">
        <Terminal className="w-10 h-10 text-stone-400 dark:text-stone-600 mb-3 animate-pulse" />
        <h3 className="font-mono text-sm tracking-wide text-stone-700 dark:text-stone-300 font-semibold">
          No Submissions Found
        </h3>
        <p className="text-xs text-stone-500 font-sans max-w-xs mt-1 leading-relaxed">
          You haven't executed or submitted any code versions for this problem
          yet. Run your code to initialize metrics logging.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 p-3 bg-stone-50/50 dark:bg-stone-950 min-h-full font-sans">
      <div className="flex items-center justify-between px-1 mb-1">
        <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" /> Recent Attempts ({submissions.length}
          /20)
        </span>
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-220px)] pr-1">
        {submissions.map((sub) => {
          // 2. Clear Visual Status Indicators/Colors for Different Verdict Types
          const verdictColor = sub.allPassed
            ? "border-emerald-500/20 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02]"
            : "border-rose-500/20 bg-rose-500/[0.04] dark:bg-rose-500/[0.02]";

          const textColor = sub.allPassed
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-rose-600 dark:text-rose-400";

          return (
            <Button
              key={sub.id}
              variant="outline"
              onClick={() => onLoadCode(sub.code, sub.language)}
              className={`w-full justify-start text-left rounded-xl p-3 border tracking-wide transition-all duration-200 hover:translate-x-0.5 hover:shadow-sm flex items-start gap-3.5 h-auto ${verdictColor}`}
            >
              {/* Status Graphic Check symbol or warning icon */}
              <div className="mt-0.5 shrink-0">
                {sub.allPassed ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                ) : sub.passed === 0 && sub.total === 0 ? (
                  <AlertTriangle className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-500 dark:text-rose-400" />
                )}
              </div>

              {/* Submission Information Metadata */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-xs font-mono font-bold tracking-wide uppercase ${textColor}`}
                  >
                    {sub.allPassed
                      ? "Accepted"
                      : sub.passed === 0 && sub.total === 0
                        ? "Runtime Error"
                        : "Wrong Answer"}
                  </span>

                  {/* Language Badge */}
                  <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-stone-200 dark:bg-white/10 text-stone-700 dark:text-stone-300 border border-stone-300/30 dark:border-white/5">
                    {LANG_LABELS[sub.language] || sub.language}
                  </span>
                </div>

                {/* Score and metrics breakdown layout */}
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-200/40 dark:border-white/5">
                  <span className="text-[11px] font-sans font-medium text-stone-600 dark:text-stone-400">
                    Testcases:{" "}
                    <span className="font-mono font-bold">
                      {sub.passed}/{sub.total}
                    </span>{" "}
                    passed
                  </span>

                  {/* Timestamp humanized display logs line formatting */}
                  <div className="flex items-center gap-1 text-[10px] font-mono text-stone-400 dark:text-stone-500">
                    <Clock className="w-3 h-3" />
                    <span>
                      {new Date(sub.createdAt).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      {new Date(sub.createdAt).toLocaleTimeString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
