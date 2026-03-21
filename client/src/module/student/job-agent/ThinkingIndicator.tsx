import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BotMessageSquare, User, Search, Sparkles, BarChart3, CheckCircle2 } from "lucide-react";

const STEPS = [
  { icon: User, text: "Analyzing your profile...", delay: 0 },
  { icon: Search, text: "Searching job database...", delay: 2000 },
  { icon: Sparkles, text: "Matching with your skills...", delay: 4500 },
  { icon: BarChart3, text: "Ranking best matches...", delay: 7000 },
  { icon: CheckCircle2, text: "Almost there...", delay: 10000 },
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
      <div className="w-8 h-8 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0">
        <BotMessageSquare className="w-4 h-4 text-white dark:text-gray-950" />
      </div>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl rounded-tl-sm px-4 py-3">
        {/* Step progress dots */}
        <div className="flex items-center gap-1.5 mb-2">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i <= stepIndex
                  ? "w-5 bg-gray-950 dark:bg-white"
                  : "w-1.5 bg-gray-200 dark:bg-gray-700"
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
            <step.icon className="w-3.5 h-3.5 text-gray-950 dark:text-white animate-pulse" />
            <span className="text-xs text-gray-600 dark:text-gray-400">{step.text}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
