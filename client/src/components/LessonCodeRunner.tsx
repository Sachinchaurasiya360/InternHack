import { useState, useCallback } from "react";
import { Play, ChevronDown, ChevronRight } from "lucide-react";
import { run } from "../module/student/javascript/lib/js-engine";
import type { RunResult } from "../module/student/javascript/lib/js-engine";

interface LessonCodeRunnerProps {
  initialCode?: string;
  language?: string;
}

export default function LessonCodeRunner({ initialCode = "", language = "javascript" }: LessonCodeRunnerProps) {
  const [code, setCode] = useState(initialCode);
  const [result, setResult] = useState<RunResult | null>(null);
  const [outputOpen, setOutputOpen] = useState(false);

  const handleRun = useCallback(() => {
    const r = run(code);
    setResult(r);
    setOutputOpen(true);
  }, [code]);

  if (language !== "javascript") {
    return (
      <div className="rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-4">
        <p className="text-xs text-stone-500 dark:text-stone-400">
          Browser execution supports JavaScript only. Copy this code to run it locally.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-stone-700">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
          run this code
        </span>
        <button
          type="button"
          onClick={handleRun}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-stone-50 bg-stone-900 dark:bg-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors cursor-pointer"
        >
          <Play className="w-3 h-3" />
          Run
        </button>
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full p-4 text-sm font-mono text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 border-0 resize-y min-h-[100px] focus:outline-none"
        spellCheck={false}
      />

      {result && (
        <div className="border-t border-stone-200 dark:border-stone-700">
          <button
            type="button"
            onClick={() => setOutputOpen((o) => !o)}
            className="flex items-center gap-2 w-full px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 hover:bg-stone-100 dark:hover:bg-stone-800/60 transition-colors cursor-pointer text-left"
          >
            {outputOpen ? <ChevronDown className="w-3 h-3 text-stone-500" /> : <ChevronRight className="w-3 h-3 text-stone-500" />}
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">output</span>
            <span className={`ml-auto text-xs font-mono ${result.status === "success" ? "text-lime-600 dark:text-lime-400" : "text-red-600 dark:text-red-400"}`}>
              {result.status === "success" ? "success" : "error"}
            </span>
          </button>
          {outputOpen && (
            <div className="p-4 bg-stone-950 max-h-48 overflow-y-auto">
              {result.stderr && (
                <pre className="text-sm text-red-400 whitespace-pre-wrap font-mono mb-2">{result.stderr}</pre>
              )}
              {result.stdout ? (
                <pre className="text-sm text-stone-100 whitespace-pre-wrap font-mono">{result.stdout}</pre>
              ) : (
                !result.stderr && <span className="text-sm text-stone-500 italic">No output</span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
