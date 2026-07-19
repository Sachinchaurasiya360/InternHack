import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  AlertTriangle,
} from "lucide-react";
import type { DsaExecutionResult } from "../../../../lib/types";
import { Button } from "../../../../components/ui/button";

interface Props {
  result: DsaExecutionResult | null;
  isRunning: boolean;
}

export function DsaTestResults({ result, isRunning }: Props) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  if (isRunning) {
    return (
      <div className="p-6 flex flex-col items-center justify-center gap-3 text-gray-400">
        <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium">
          Running code against test cases...
        </p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="p-6 text-center text-gray-400 dark:text-gray-500 text-sm">
        Click{" "}
        <span className="font-medium text-gray-600 dark:text-gray-300">
          Run
        </span>{" "}
        or press{" "}
        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
          Ctrl+Enter
        </kbd>{" "}
        to execute your code
      </div>
    );
  }

  return (
    <div className="p-3 space-y-3">
      {/* Summary bar */}
      <div
        className={`flex items-center justify-between px-4 py-2.5 rounded-xl ${result.allPassed ? "bg-emerald-50 dark:bg-emerald-900/20" : "bg-red-50 dark:bg-red-900/20"}`}
      >
        <div className="flex items-center gap-2">
          {result.allPassed ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
          )}
          <span
            className={`text-sm font-semibold ${result.allPassed ? "text-emerald-700 dark:text-emerald-300" : "text-red-700 dark:text-red-300"}`}
          >
            {result.allPassed
              ? "All test cases passed!"
              : `${result.passed}/${result.total} test cases passed`}
          </span>
        </div>
      </div>

      {/* Test case list */}
      <div className="space-y-1.5">
        {result.results.map((tc, idx) => {
          const isExpanded = expandedIdx === idx;
          return (
            <div
              key={idx}
              className="border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden"
            >
              <Button
                variant="ghost"
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                className="w-full justify-start text-left rounded-none"
              >
                {tc.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : tc.error === "Not executed" ? (
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 shrink-0" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                )}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex-1">
                  {tc.label || `Test case ${idx + 1}`}
                </span>
                {tc.error !== "Not executed" && tc.timeMs > 0 && (
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    {tc.timeMs}ms
                  </span>
                )}
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
              </Button>

              {isExpanded && (
                <div className="px-3 pb-3 space-y-2 border-t border-gray-100 dark:border-gray-800 pt-2">
                  {tc.error && tc.error !== "Not executed" && (
                    <div>
                      <p className="text-xs font-medium text-red-500 mb-1 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        {tc.error === "Time Limit Exceeded" ? "Time Limit Exceeded" : "Runtime Error"}
                      </p>
                      <pre className="text-xs font-mono bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-2 rounded-lg whitespace-pre-wrap">
                        {tc.error}
                      </pre>
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <p className="text-xs font-medium text-gray-500 mb-1">
                        Input
                      </p>
                      <pre className="text-xs font-mono bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-lg whitespace-pre-wrap">
                        {tc.input || "(empty)"}
                      </pre>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 mb-1">
                        Expected Output
                      </p>
                      <pre className="text-xs font-mono bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-lg whitespace-pre-wrap">
                        {tc.expected || "(empty)"}
                      </pre>
                    </div>
                    {tc.error !== "Not executed" && (
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">
                          Your Output
                        </p>
                        <pre
                          className={`text-xs font-mono p-2 rounded-lg whitespace-pre-wrap ${tc.passed ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300" : "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"}`}
                        >
                          {tc.actual || "(empty)"}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
