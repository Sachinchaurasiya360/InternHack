import { useState, useCallback, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, Timer, Check } from "lucide-react";
import api from "../../../../lib/axios";

type HintLevel = "conceptual" | "algorithmic" | "code";

const LEVEL_LABELS: Record<HintLevel, string> = {
  conceptual: "01 conceptual",
  algorithmic: "02 algorithmic",
  code: "03 code",
};

const COOLDOWN_SECONDS = 15;

interface AiHintData {
  hint: string;
  level: string;
  problemTitle: string;
  difficulty: string;
}

export function AiHintPanel({ problemId }: { problemId: number }) {
  const [currentLevel, setCurrentLevel] = useState<HintLevel>("conceptual");
  const [hints, setHints] = useState<AiHintData[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (cooldown <= 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [cooldown]);

  const hintMutation = useMutation({
    mutationFn: (level: HintLevel) =>
      api
        .post<AiHintData>(`/dsa/problems/${problemId}/hints`, { level })
        .then((r) => r.data),
    onSuccess: (data) => {
      setHints((prev) => [...prev, data]);
      setCooldown(COOLDOWN_SECONDS);
      const nextLevel: Record<HintLevel, HintLevel | null> = {
        conceptual: "algorithmic",
        algorithmic: "code",
        code: null,
      };
      const next = nextLevel[currentLevel];
      if (next) setCurrentLevel(next);
    },
  });

  const handleGetHint = useCallback(() => {
    if (cooldown > 0 || hintMutation.isPending) return;
    hintMutation.mutate(currentLevel);
  }, [currentLevel, cooldown, hintMutation]);

  const canRequest = cooldown === 0 && !hintMutation.isPending;
  const allLevelsDone = currentLevel === "code" && hints.length >= 3;

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-800/40 transition-colors border-0 bg-transparent cursor-pointer"
      >
        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400">
          <Sparkles className="w-3 h-3 text-amber-500" />
          AI hints
          {hints.length > 0 && (
            <span className="h-1 w-1 bg-amber-400 rounded-full" />
          )}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3">
              {hints.length === 0 && (
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                  Get progressive hints for this problem — conceptual,
                  algorithmic, then code-level.
                </p>
              )}

              {hints.map((h, i) => (
                <div
                  key={i}
                  className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-white/10 rounded-md p-3"
                >
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-sm mb-2">
                    <Check className="w-2.5 h-2.5" />
                    {LEVEL_LABELS[h.level as HintLevel] || h.level}
                  </div>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {h.hint.split(" (level:")[0]}
                  </p>
                </div>
              ))}

              {allLevelsDone ? (
                <p className="text-xs font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 text-center pt-1">
                  All hint levels revealed
                </p>
              ) : (
                <button
                  onClick={handleGetHint}
                  disabled={!canRequest}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-widest border border-stone-300 dark:border-white/15 rounded-md text-stone-900 dark:text-stone-50 hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {hintMutation.isPending ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 border border-stone-900 dark:border-white border-t-transparent rounded-full animate-spin" />
                      generating...
                    </span>
                  ) : cooldown > 0 ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Timer className="w-3 h-3" />
                      wait {cooldown}s
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      get {LEVEL_LABELS[currentLevel]}
                    </span>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
