import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Lightbulb } from "lucide-react";
import {QUESTIONS} from "./questions/interviewQuestions";

const DIFFICULTY_STYLE: Record<string, string> = {
  Easy: "text-lime-700 dark:text-lime-400 border-lime-300 dark:border-lime-700",
  Medium: "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-700",
  Hard: "text-red-600 dark:text-red-400 border-red-300 dark:border-red-700",
};

const CATEGORY_STYLE: Record<string, string> = {
  DSA: "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400",
  Behavioral: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
  "System Design": "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400",
  HR: "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400",
  Frontend: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400",
  Backend: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400",
};

export default function DailyInterviewTipWidget() {
  const [expanded, setExpanded] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const filteredQuestions =
    categoryFilter === "All"
    ? QUESTIONS
    : QUESTIONS.filter(q => q.category === categoryFilter);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [focusMode, setFocusMode] = useState(false);

  const safeIndex = currentIndex >= filteredQuestions.length ? 0 : currentIndex;
  const q = filteredQuestions[safeIndex];

  const CATEGORIES = [
    "All",
    "DSA",
    "Frontend",
    "Backend",
    "System Design",
    "HR",
    "Behavioral",
  ] as const;

  const handleNav = () => {
    if (filteredQuestions.length === 0) return;

    let next;

    do {
      next = Math.floor(Math.random() * filteredQuestions.length);
    } while (next === currentIndex && filteredQuestions.length > 1);

    setCurrentIndex(next);
    setExpanded(false);
  };

  useEffect(() => {
    if (filteredQuestions.length === 0) return;

    setCurrentIndex(Math.floor(Math.random() * filteredQuestions.length));
    setExpanded(false);
  }, [categoryFilter]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: focusMode ? "brightness(1.05)" : "brightness(1)"
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mb-5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 overflow-hidden"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-100 dark:border-white/8 bg-stone-50 dark:bg-stone-950/40">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-3.5 h-3.5 text-lime-500" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Daily Interview Tip
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setFocusMode(v => !v)}
            className="text-[10px] mx-1 px-2 py-1 rounded border bg-stone-100 dark:bg-stone-800 cursor-pointer hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
          >
            {focusMode ? "Focus Mode ON" : "Focus Mode"}
          </motion.button>
          <button
            type="button"
            onClick={handleNav}
            title="Next question"
            className="p-1 mx-1 rounded-sm text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer border-0 bg-transparent"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-4">
        {/* Category + difficulty */}
        {!focusMode &&
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${CATEGORY_STYLE[q.category] ?? CATEGORY_STYLE["HR"]}`}>
              {q.category}
            </span>
            <span className={`text-[10px] font-mono border px-2 py-0.5 rounded-sm ${DIFFICULTY_STYLE[q.difficulty]}`}>
              {q.difficulty}
          </span>
        </div>}

        {/* Filter Bar */}
        <AnimatePresence>
        {!focusMode && <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-wrap gap-2 mb-4 overflow-hidden"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`text-[10px] font-mono px-2 py-1 rounded-md border transition-all cursor-pointer
                ${
                  categoryFilter === cat
                    ? "bg-stone-900 text-white dark:bg-white dark:text-stone-900 border-stone-900 dark:border-white"
                    : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:scale-105"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>}</AnimatePresence>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className={`font-semibold text-stone-900 dark:text-stone-50 leading-relaxed mb-3 ${focusMode ? "text-lg md:text-xl" : "text-sm"}`}
          >
            {q.question}
          </motion.p>
        </AnimatePresence>

        {/* Toggle */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-[11px] font-mono text-lime-600 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300 transition-colors cursor-pointer border-0 bg-transparent p-0"
        >
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
          {expanded ? "Hide answer" : "Show answer & tips"}
        </button>

        {/* Answer + tips */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -5 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-3 space-y-2.5">
                <div className="p-3 rounded-sm bg-stone-50 dark:bg-stone-800/60 border border-stone-100 dark:border-white/8">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-1.5">Answer</p>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{q.answer}</p>
                </div>
                <div className="p-3 rounded-sm bg-lime-50 dark:bg-lime-900/15 border border-lime-100 dark:border-lime-800/40">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-500 mb-2">Key Points</p>
                  <motion.ul 
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                  className="space-y-1.5">
                    {q.tips.map((tip, i) => (
                      <motion.li variants={{ hidden: { opacity: 0, x: 10 }, show: { opacity: 1, x: 0 } }} key={i} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-lime-400 shrink-0" />
                        {tip}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
