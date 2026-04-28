import { useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronDown, Trophy, XCircle } from "lucide-react";

export interface EngTabDef {
  id: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
}

export interface EngQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface EngineeringLessonShellProps {
  title: string;
  level: number;
  lessonNumber: number;
  tabs: EngTabDef[];
  quiz: EngQuizQuestion[];
  placementRelevance?: string;
  nextLessonHint?: string;
  /** Crumb path label, e.g. "system design" or "engineering". Defaults to "system design". */
  crumbLabel?: string;
  /** Called when the quiz is fully answered. Pass score 0-100. */
  onQuizComplete?: (scorePercent: number) => void;
}

export function EngineeringLessonShell({
  title,
  level,
  lessonNumber,
  tabs,
  quiz,
  placementRelevance,
  nextLessonHint,
  crumbLabel = "system design",
  onQuizComplete,
}: EngineeringLessonShellProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const active = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <div className="text-stone-900 dark:text-stone-50">
      {/* Editorial header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-2 mb-8 border-b border-stone-200 dark:border-white/10 pb-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.2 }}
            className="h-1 w-1 bg-lime-500"
          />
          learn / {crumbLabel} / level {String(level).padStart(2, "0")} / lesson {String(lessonNumber).padStart(2, "0")}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight"
        >
          {title}
        </motion.h1>
        {placementRelevance && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-sm text-stone-600 dark:text-stone-400 max-w-2xl"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400 mr-2">
              / placement
            </span>
            {placementRelevance}
          </motion.p>
        )}
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        role="tablist"
        aria-label="Lesson sections"
        className="flex items-center gap-1 mb-6 border-b border-stone-200 dark:border-white/10 overflow-x-auto"
      >
        {tabs.map((t) => {
          const isActive = t.id === active?.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={isActive}
              onClick={() => setActiveTab(t.id)}
              className={`relative inline-flex items-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap ${
                isActive
                  ? "text-stone-900 dark:text-stone-50"
                  : "text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
              }`}
            >
              {t.icon}
              {t.label}
              {isActive && (
                <motion.span
                  layoutId="eng-tab-underline"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute left-2 right-2 -bottom-px h-0.5 bg-lime-500"
                />
              )}
            </button>
          );
        })}
      </motion.div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active?.id}
          role="tabpanel"
          aria-labelledby={`tab-${active?.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          {active?.content}
        </motion.div>
      </AnimatePresence>

      {/* Quiz */}
      {quiz.length > 0 && (
        <QuizBlock quiz={quiz} onComplete={onQuizComplete} nextLessonHint={nextLessonHint} />
      )}
    </div>
  );
}

interface QuizBlockProps {
  quiz: EngQuizQuestion[];
  onComplete?: (scorePercent: number) => void;
  nextLessonHint?: string;
}

function QuizBlock({ quiz, onComplete, nextLessonHint }: QuizBlockProps) {
  const [picks, setPicks] = useState<(number | null)[]>(quiz.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const score = useMemo(() => {
    let correct = 0;
    picks.forEach((p, i) => {
      if (p === quiz[i].correctIndex) correct++;
    });
    return Math.round((correct / quiz.length) * 100);
  }, [picks, quiz]);

  const allAnswered = picks.every((p) => p !== null);
  const answeredCount = picks.filter((p) => p !== null).length;

  const handleSubmit = () => {
    setSubmitted(true);
    onComplete?.(score);
  };

  return (
    <section className="border-t border-stone-200 dark:border-white/10 pt-6">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md hover:border-stone-400 dark:hover:border-white/30 transition-colors cursor-pointer"
      >
        <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
          <span className="h-1 w-1 bg-lime-500" />
          checkpoint / quiz
          <span className="text-stone-400 dark:text-stone-600">·</span>
          <span className="tabular-nums text-stone-700 dark:text-stone-300">
            {quiz.length} question{quiz.length === 1 ? "" : "s"}
          </span>
          {submitted && (
            <>
              <span className="text-stone-400 dark:text-stone-600">·</span>
              <span className={`tabular-nums ${score >= 70 ? "text-lime-700 dark:text-lime-400" : "text-stone-500"}`}>
                {score}% scored
              </span>
            </>
          )}
          {!submitted && answeredCount > 0 && (
            <>
              <span className="text-stone-400 dark:text-stone-600">·</span>
              <span className="tabular-nums text-stone-700 dark:text-stone-300">
                {answeredCount} / {quiz.length} answered
              </span>
            </>
          )}
        </div>
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-300 shrink-0">
          <ChevronDown
            className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.3, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">
              {quiz.map((q, i) => {
                const sel = picks[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums shrink-0 pt-0.5">
                        Q{String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed whitespace-pre-wrap">
                        {q.question}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {q.options.map((opt, idx) => {
                        const isPicked = sel === idx;
                        const isCorrect = idx === q.correctIndex;
                        const showCorrect = submitted && isCorrect;
                        const showWrong = submitted && isPicked && !isCorrect;
                        return (
                          <button
                            key={idx}
                            type="button"
                            disabled={submitted}
                            onClick={() => {
                              if (submitted) return;
                              const next = [...picks];
                              next[i] = idx;
                              setPicks(next);
                            }}
                            className={`text-left px-3 py-2 rounded-md border text-sm transition-colors cursor-pointer ${
                              showCorrect
                                ? "border-lime-500 bg-lime-50 dark:bg-lime-500/10 text-lime-800 dark:text-lime-200"
                                : showWrong
                                  ? "border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-200"
                                  : isPicked
                                    ? "border-stone-900 dark:border-stone-50 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-50"
                                    : "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/30"
                            } ${submitted ? "cursor-default" : ""}`}
                          >
                            <span className="inline-flex items-center gap-2">
                              {showCorrect && <CheckCircle2 className="w-4 h-4" />}
                              {showWrong && <XCircle className="w-4 h-4" />}
                              {opt}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-3 text-xs text-stone-600 dark:text-stone-400 leading-relaxed bg-stone-50 dark:bg-stone-950/50 border border-stone-200 dark:border-white/10 rounded-md px-3 py-2"
                      >
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mr-2">
                          / why
                        </span>
                        {q.explanation}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
              {!submitted ? (
                <>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    {picks.filter((p) => p !== null).length} / {quiz.length} answered
                  </span>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!allAnswered}
                    className={`px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest border transition-colors ${
                      allAnswered
                        ? "bg-lime-500 hover:bg-lime-600 border-lime-500 text-white cursor-pointer"
                        : "bg-stone-100 dark:bg-stone-900 border-stone-200 dark:border-white/10 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    submit answers
                  </button>
                </>
              ) : (
                <div className="flex items-center justify-between gap-4 w-full flex-wrap">
                  <div className="inline-flex items-center gap-3">
                    <Trophy className={`w-5 h-5 ${score >= 70 ? "text-lime-500" : "text-stone-400"}`} />
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        / score
                      </div>
                      <div className="text-lg font-bold tabular-nums text-stone-900 dark:text-stone-50">
                        {score}%
                      </div>
                    </div>
                  </div>
                  {nextLessonHint && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      next up / {nextLessonHint}
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default EngineeringLessonShell;
