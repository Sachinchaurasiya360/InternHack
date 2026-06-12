import { useState, useCallback, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from "lucide-react";
import type { PatternVizData } from "../data/dsa-pattern-viz.data";

interface Props {
  data: PatternVizData;
}

export default function DsaPatternVisualizer({ data }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const step = data.steps[stepIndex];
  const total = data.steps.length;

  const stop = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setStepIndex((prev) => {
          if (prev >= total - 1) {
            stop();
            return prev;
          }
          return prev + 1;
        });
      }, 1200);
    }
    return stop;
  }, [isPlaying, total, stop]);

  const goTo = (i: number) => { setStepIndex(Math.max(0, Math.min(i, total - 1))); stop(); };
  const prev = () => goTo(stepIndex - 1);
  const next = () => goTo(stepIndex + 1);

  return (
    <div className="border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-900 overflow-hidden">
      <div className="px-4 py-3 border-b border-stone-200 dark:border-white/10 flex items-center justify-between gap-4 flex-wrap">
        <div className="min-w-0">
          <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
            / visualization
          </div>
          <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate">
            {data.title}
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={() => goTo(0)} disabled={stepIndex === 0}
            className="w-7 h-7 rounded-md bg-stone-100 dark:bg-white/5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button type="button" onClick={prev} disabled={stepIndex === 0}
            className="w-7 h-7 rounded-md bg-stone-100 dark:bg-white/5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs font-mono tabular-nums text-stone-500 dark:text-stone-400 px-2 min-w-[4rem] text-center">
            {stepIndex + 1} / {total}
          </span>
          <button type="button" onClick={next} disabled={stepIndex >= total - 1}
            className="w-7 h-7 rounded-md bg-stone-100 dark:bg-white/5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button type="button" onClick={() => setIsPlaying((p) => !p)}
            className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors cursor-pointer ${
              isPlaying ? "bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400" : "bg-stone-100 dark:bg-white/5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      <div className="p-4 lg:p-6 space-y-6">
        <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed bg-stone-50 dark:bg-stone-950/50 border border-stone-200 dark:border-white/10 rounded-md px-3 py-2">
          {step.description}
        </p>

        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-3">
            / array
          </div>
          <div className="flex items-end gap-1.5 flex-wrap">
            {step.array.map((val, i) => {
              if (val === null) return null;
              const isHighlighted = step.highlights?.includes(i);
              const ptr = step.pointers?.find((p) => p.index === i);
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  {ptr && (
                    <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded text-white ${ptr.color}`}>
                      {ptr.label}
                    </span>
                  )}
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-bold transition-colors ${
                      isHighlighted
                        ? "bg-lime-100 dark:bg-lime-900/30 border-2 border-lime-500 text-lime-800 dark:text-lime-200"
                        : "bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300"
                    }`}
                  >
                    {val}
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500">{i}</span>
                </div>
              );
            })}
          </div>
        </div>

        {step.variables && Object.keys(step.variables).length > 0 && (
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
              / variables
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(step.variables).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between px-3 py-1.5 bg-stone-50 dark:bg-stone-950/50 border border-stone-200 dark:border-white/10 rounded-md">
                  <span className="text-xs font-mono text-stone-500 dark:text-stone-400">{key}</span>
                  <span className="text-xs font-bold tabular-nums text-stone-900 dark:text-stone-50">{String(val)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {step.pointers && (
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
              / pointers
            </div>
            <div className="flex flex-wrap gap-2">
              {step.pointers.map((ptr) => (
                <div key={ptr.label} className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400">
                  <span className={`w-2.5 h-2.5 rounded-sm ${ptr.color}`} />
                  {ptr.label} = {ptr.index}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
