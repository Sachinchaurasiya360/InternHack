import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Trophy } from "lucide-react";

export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
};

type Props = {
  questions: QuizQuestion[];
  lessonId?: string;
  onComplete?: (score: number, total: number) => void;
};

export function Quiz({ questions, lessonId, onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const q = questions[current];
  const isCorrect = selected === q?.correctIndex;
  const progress = ((current + (selected !== null ? 1 : 0)) / questions.length) * 100;

  function handleSelect(i: number) {
    if (selected !== null) return;
    setSelected(i);
  }

  function handleNext() {
    const newAnswers = [...answers, selected ?? -1];
    setAnswers(newAnswers);
    setSelected(null);
    if (current + 1 >= questions.length) {
      setDone(true);
      const score = newAnswers.reduce(
        (acc, a, i) => acc + (a === questions[i].correctIndex ? 1 : 0),
        0
      );
      try {
        if (lessonId) {
          const key = `quiz-${lessonId}`;
          const prev = JSON.parse(localStorage.getItem(key) || "{}");
          localStorage.setItem(
            key,
            JSON.stringify({ score, total: questions.length, completedAt: Date.now(), best: Math.max(prev.best ?? 0, score) })
          );
        }
      } catch {}
      onComplete?.(score, questions.length);
    } else {
      setCurrent(current + 1);
    }
  }

  function handleReset() {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setDone(false);
  }

  if (!questions.length) return null;

  if (done) {
    const score = answers.reduce((acc, a, i) => acc + (a === questions[i].correctIndex ? 1 : 0), 0);
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= 70;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 my-6 text-center"
      >
        <motion.div
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
            passed ? "bg-green-100 dark:bg-green-900/30" : "bg-amber-100 dark:bg-amber-900/30"
          }`}
        >
          <Trophy className={`w-8 h-8 ${passed ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`} />
        </motion.div>
        <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-1">
          {passed ? "Great work!" : "Keep practicing!"}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          You scored <span className="font-bold text-gray-950 dark:text-white">{score}/{questions.length}</span> ({pct}%)
        </p>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Try Again
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 my-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-violet-500" />
          <h3 className="text-sm font-bold text-gray-950 dark:text-white">Quick Check</h3>
        </div>
        <span className="text-xs font-medium text-gray-400 tabular-nums">
          {current + 1} / {questions.length}
        </span>
      </div>
      <div className="h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-5">
        <motion.div
          className="h-full bg-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-base font-medium text-gray-950 dark:text-white mb-4">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, i) => {
              const isSel = selected === i;
              const isRight = i === q.correctIndex;
              const showResult = selected !== null;
              const cls = showResult
                ? isRight
                  ? "border-green-500 bg-green-50 dark:bg-green-950/30 text-green-900 dark:text-green-200"
                  : isSel
                    ? "border-red-500 bg-red-50 dark:bg-red-950/30 text-red-900 dark:text-red-200"
                    : "border-gray-200 dark:border-gray-700 text-gray-500"
                : "border-gray-200 dark:border-gray-700 hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/20 text-gray-700 dark:text-gray-300 cursor-pointer";
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={showResult}
                  className={`w-full text-left px-4 py-3 text-sm rounded-xl border-2 transition-all flex items-center justify-between ${cls}`}
                >
                  <span>{opt}</span>
                  {showResult && isRight && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                  {showResult && isSel && !isRight && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
                </button>
              );
            })}
          </div>
          {selected !== null && q.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-xl text-sm ${
                isCorrect
                  ? "bg-green-50 dark:bg-green-950/20 text-green-900 dark:text-green-200"
                  : "bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200"
              }`}
            >
              <span className="font-semibold">{isCorrect ? "Correct! " : "Not quite. "}</span>
              {q.explanation}
            </motion.div>
          )}
          {selected !== null && (
            <div className="flex justify-end mt-4">
              <button
                onClick={handleNext}
                className="px-5 py-2 text-sm font-medium text-white bg-gray-950 dark:bg-white dark:text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-xl transition-colors"
              >
                {current + 1 >= questions.length ? "See Results" : "Next Question"}
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
