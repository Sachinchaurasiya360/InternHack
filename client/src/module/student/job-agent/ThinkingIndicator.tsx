import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BotMessageSquare, User, Search, Zap, BarChart3, CheckCircle2 } from "lucide-react";

const STEPS = [
  { icon: User, text: "Analyzing your profile", delay: 0 },
  { icon: Search, text: "Searching job database", delay: 2000 },
  { icon: Zap, text: "Matching with your skills", delay: 4500 },
  { icon: BarChart3, text: "Ranking best matches", delay: 7000 },
  { icon: CheckCircle2, text: "Almost there", delay: 10000 },
];

export function ThinkingIndicator() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i < STEPS.length; i++) {
      timers.push(
        setTimeout(() => setStepIndex(i), STEPS[i].delay),
      );
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  const step = STEPS[stepIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3"
    >
      <div className="w-8 h-8 rounded-md bg-stone-900 dark:bg-stone-50 flex items-center justify-center shrink-0">
        <BotMessageSquare className="w-4 h-4 text-stone-50 dark:text-stone-900" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="h-1 w-1 bg-lime-400 animate-pulse"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            agent, thinking
          </span>
        </div>
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-4 py-3">
          {/* Step progress bar */}
          <div className="flex items-center gap-1 mb-2.5">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 rounded-none transition-all duration-500 ${
                  i < stepIndex
                    ? "w-6 bg-lime-400"
                    : i === stepIndex
                      ? "w-6 bg-stone-900 dark:bg-stone-50"
                      : "w-2 bg-stone-200 dark:bg-white/10"
                }`}
              />
            ))}
          </div>

          {/* Current step */}
          <AnimatePresence mode="wait">
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <step.icon className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
              <span className="text-xs font-mono text-stone-700 dark:text-stone-300">
                / {String(stepIndex + 1).padStart(2, "0")} {step.text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
