import { useState } from "react";
import { CheckCircle2, XCircle, ChevronDown, ChevronRight, Clock, HardDrive, AlertTriangle } from "lucide-react";
import type { DsaExecutionResult } from "../../../../lib/types";

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
        <p className="text-sm font-medium">Running code against test cases...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="p-6 text-center text-gray-400 dark:text-gray-500 text-sm">
        Click <span className="font-medium text-gray-600 dark:text-gray-300">Run</span> or press <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">Ctrl+Enter</kbd> to execute your code
      </div>
    );
  }

  // Check for compile error
  const firstResult = result.results[0];
  const hasCompileError = firstResult && firstResult.compileOutput && firstResult.statusId !== 3 && firstResult.statusId !== 4;

  return (
    <div className="p-3 space-y-3">
      {/* Summary bar */}
      <div className={`flex items-center justify-between px-4 py-2.5 rounded-xl ${result.allPassed ? "bg-emerald-50 dark:bg-emerald-900/20" : "bg-red-50 dark:bg-red-900/20"}`}>
        <div className="flex items-center gap-2">
          {result.allPassed ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
          )}
          <span className={`text-sm font-semibold ${result.allPassed ? "text-emerald-700 dark:text-emerald-300" : "text-red-700 dark:text-red-300"}`}>
            {result.allPassed ? "All test cases passed!" : `${result.passed}/${result.total} test cases passed`}
          </span>
        </div>
      </div>

      {/* Compile error */}
      {hasCompileError && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">Compilation Error</span>
          </div>
          <pre className="text-xs text-red-600 dark:text-red-400 font-mono whitespace-pre-wrap overflow-x-auto">{firstResult.compileOutput}</pre>
        </div>
      )}

      {/* Test case list */}
      <div className="space-y-1.5">
        {result.results.map((tc, idx) => {
          const isExpanded = expandedIdx === idx;
          return (
            <div key={idx} className="border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                {tc.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : tc.statusId === -1 ? (
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 shrink-0" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                )}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex-1">
                  {tc.label || `Test case ${idx + 1}`}
                </span>
                {tc.statusId !== -1 && (
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    {tc.timeMs > 0 && (
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{tc.timeMs}ms</span>
                    )}
                    {tc.memoryKb > 0 && (
                      <span className="flex items-center gap-1"><HardDrive className="w-3 h-3" />{(tc.memoryKb / 1024).toFixed(1)}MB</span>
                    )}
                  </div>
                )}
                {isExpanded ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
              </button>

              {isExpanded && (
                <div className="px-3 pb-3 space-y-2 border-t border-gray-100 dark:border-gray-800 pt-2">
                  {tc.statusDescription !== "Not executed" && tc.statusDescription !== "Accepted" && tc.statusDescription !== "Wrong Answer" && (
                    <div className="text-xs text-amber-600 dark:text-amber-400 font-medium">{tc.statusDescription}</div>
                  )}
                  {tc.stderr && (
                    <div>
                      <p className="text-xs font-medium text-red-500 mb-1">Runtime Error</p>
                      <pre className="text-xs font-mono bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-2 rounded-lg whitespace-pre-wrap">{tc.stderr}</pre>
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <p className="text-xs font-medium text-gray-500 mb-1">Input</p>
                      <pre className="text-xs font-mono bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-lg whitespace-pre-wrap">{tc.input || "(empty)"}</pre>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 mb-1">Expected Output</p>
                      <pre className="text-xs font-mono bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-lg whitespace-pre-wrap">{tc.expected || "(empty)"}</pre>
                    </div>
                    {tc.statusId !== -1 && (
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Your Output</p>
                        <pre className={`text-xs font-mono p-2 rounded-lg whitespace-pre-wrap ${tc.passed ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300" : "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"}`}>
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
