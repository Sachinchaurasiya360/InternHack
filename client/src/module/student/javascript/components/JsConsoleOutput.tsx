import { CheckCircle2, XCircle, Clock, AlertTriangle } from "lucide-react";
import type { JsRunResult } from "../lib/js-engine";

interface JsConsoleOutputProps {
  result: JsRunResult | null;
  expectedOutput?: string;
  isCorrect?: boolean | null;
}

const LOG_COLORS: Record<string, string> = {
  log: "text-gray-100",
  warn: "text-yellow-400",
  error: "text-red-400",
  info: "text-blue-400",
};

export default function JsConsoleOutput({ result, expectedOutput, isCorrect }: JsConsoleOutputProps) {
  if (!result) {
    return (
      <div className="text-center py-8 text-gray-400 dark:text-gray-500 text-sm">
        Run your code to see output
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <div className="flex items-center gap-2">
          {result.error ? (
            <>
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-600 dark:text-red-400">Error</span>
            </>
          ) : isCorrect === true ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Correct!</span>
            </>
          ) : isCorrect === false ? (
            <>
              <XCircle className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Output doesn't match expected</span>
            </>
          ) : (
            <span className="text-sm text-gray-500">{result.logs.length} line{result.logs.length !== 1 ? "s" : ""} output</span>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <Clock className="w-3 h-3" />
          {result.timeMs}ms
        </div>
      </div>

      {/* Error display */}
      {result.error && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <pre className="text-sm text-red-700 dark:text-red-300 whitespace-pre-wrap font-mono">{result.error}</pre>
        </div>
      )}

      {/* Console output */}
      {!result.error && (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-950 p-4 max-h-64 overflow-y-auto font-mono text-sm">
            {result.logs.length === 0 ? (
              <span className="text-gray-500 italic">No output</span>
            ) : (
              result.logs.map((log, i) => (
                <div key={i} className={`whitespace-pre-wrap ${LOG_COLORS[log.type] ?? "text-gray-100"}`}>
                  {log.args.join(" ")}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Expected output */}
      {expectedOutput && isCorrect === false && (
        <div className="border border-gray-700 rounded-lg overflow-hidden">
          <div className="px-4 py-2.5 bg-gray-900">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block mb-1">Expected Output</span>
            <pre className="text-sm text-emerald-400 whitespace-pre-wrap font-mono">{expectedOutput}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
