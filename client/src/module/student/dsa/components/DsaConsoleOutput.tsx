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

  return (
    <div className="bg-gray-950 text-gray-200 font-mono text-xs h-full overflow-y-auto">
      {result.results.map((tc, idx) => {
        const notExecuted = tc.error === "Not executed";
        return (
          <div key={idx} className="border-b border-gray-800 p-3">
            <div className="text-gray-500 mb-1">
              {tc.label || `Test Case ${idx + 1}`}
              {tc.error && !notExecuted && (
                <span className="ml-2 text-yellow-500">
                  [{tc.error === "Time Limit Exceeded" ? "Time Limit Exceeded" : "Error"}]
                </span>
              )}
            </div>

            {/* stdout */}
            {tc.actual ? (
              <pre
                className={`whitespace-pre-wrap ${tc.passed ? "text-green-400" : "text-gray-200"}`}
              >
                {tc.actual}
              </pre>
            ) : notExecuted ? (
              <span className="text-gray-600 italic">{"(skipped)"}</span>
            ) : (
              <span className="text-gray-600 italic">{"(no output)"}</span>
            )}

            {/* runtime error */}
            {tc.error && !notExecuted && (
              <pre className="text-red-400 whitespace-pre-wrap mt-1">
                {tc.error}
              </pre>
            )}
          </div>
        );
      })}
    </div>
  );
}
