import { AlertTriangle } from "lucide-react";
import type { DsaExecutionResult } from "../../../../lib/types";

interface Props {
  result: DsaExecutionResult | null;
  isRunning: boolean;
}

export function DsaConsoleOutput({ result, isRunning }: Props) {
  if (isRunning) {
    return (
      <div className="p-6 flex flex-col items-center justify-center gap-3 text-gray-400">
        <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium">Executing...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="p-6 text-center text-gray-400 dark:text-gray-500 text-sm">
        Run your code to see output
      </div>
    );
  }

  const firstResult = result.results[0];
  const hasCompileError = firstResult && firstResult.compileOutput && firstResult.statusId !== 3 && firstResult.statusId !== 4;

  return (
    <div className="bg-gray-950 text-gray-200 font-mono text-xs h-full overflow-y-auto">
      {/* Compile error */}
      {hasCompileError && (
        <div className="border-b border-red-900/50 p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span className="text-red-400 font-semibold text-xs">Compilation Error</span>
          </div>
          <pre className="text-red-400 whitespace-pre-wrap">{firstResult.compileOutput}</pre>
        </div>
      )}

      {/* Per-test-case output */}
      {result.results.map((tc, idx) => (
        <div key={idx} className="border-b border-gray-800 p-3">
          <div className="text-gray-500 mb-1">
            {tc.label || `Test Case ${idx + 1}`}
            {tc.statusId !== -1 && tc.statusId !== 3 && tc.statusId !== 4 && (
              <span className="ml-2 text-yellow-500">[{tc.statusDescription}]</span>
            )}
          </div>

          {/* stdout */}
          {tc.actual ? (
            <pre className={`whitespace-pre-wrap ${tc.passed ? "text-green-400" : "text-gray-200"}`}>
              {tc.actual}
            </pre>
          ) : tc.statusId !== -1 ? (
            <span className="text-gray-600 italic">{"(no output)"}</span>
          ) : (
            <span className="text-gray-600 italic">{"(skipped)"}</span>
          )}

          {/* stderr */}
          {tc.stderr && (
            <pre className="text-red-400 whitespace-pre-wrap mt-1">{tc.stderr}</pre>
          )}
        </div>
      ))}
    </div>
  );
}
