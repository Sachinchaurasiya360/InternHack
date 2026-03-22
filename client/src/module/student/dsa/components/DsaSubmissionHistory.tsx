import { CheckCircle2, XCircle, Clock, Code2 } from "lucide-react";
import type { DsaSubmissionSummary, DsaLanguage } from "../../../../lib/types";

const LANG_LABELS: Record<DsaLanguage, string> = { python: "Python", cpp: "C++", java: "Java" };

interface Props {
  submissions: DsaSubmissionSummary[];
  onLoadCode: (code: string, language: DsaLanguage) => void;
}

export function DsaSubmissionHistory({ submissions, onLoadCode }: Props) {
  if (submissions.length === 0) {
    return (
      <div className="p-4 text-center text-gray-400 dark:text-gray-500 text-sm">
        No submissions yet
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-800">
      {submissions.map((sub) => (
        <button
          key={sub.id}
          onClick={() => onLoadCode(sub.code, sub.language)}
          className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
        >
          {sub.allPassed ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          ) : (
            <XCircle className="w-4 h-4 text-red-500 shrink-0" />
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${sub.allPassed ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
                {sub.passed}/{sub.total}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {LANG_LABELS[sub.language]}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
              <Clock className="w-3 h-3" />
              {new Date(sub.createdAt).toLocaleString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
              {sub.timeMs != null && <span>{sub.timeMs}ms</span>}
            </div>
          </div>
          <Code2 className="w-4 h-4 text-gray-300 dark:text-gray-600 shrink-0" />
        </button>
      ))}
    </div>
  );
}
