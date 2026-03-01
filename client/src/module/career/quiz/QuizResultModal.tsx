import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface QuizResultProps {
  score: number;
  passed: boolean;
  passThreshold: number;
  questions: Array<{
    id: number;
    question: string;
    options: string[];
    correctIndex: number;
    explanation?: string;
  }>;
  answers: Record<number, { selected: number; correct: number; isCorrect: boolean }>;
  onClose: () => void;
}

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

export default function QuizResultModal({
  score,
  passed,
  passThreshold,
  questions,
  answers,
  onClose,
}: QuizResultProps) {
  const [expandedQ, setExpandedQ] = useState<number | null>(null);

  const correctCount = Object.values(answers).filter((a) => a.isCorrect).length;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100 dark:border-gray-800">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Quiz Results</h2>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="overflow-y-auto flex-1 px-6 py-6 space-y-6">
            {/* Score hero */}
            <div className="text-center space-y-3">
              {passed && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                </motion.div>
              )}

              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.1 }}
                className={`text-6xl font-bold tabular-nums ${
                  passed ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}
              >
                {score}%
              </motion.div>

              <p
                className={`text-lg font-semibold ${
                  passed ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"
                }`}
              >
                {passed ? "Skill Verified!" : "Keep Practicing"}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {correctCount} of {questions.length} correct &middot; Pass threshold: {passThreshold}%
              </p>
            </div>

            {/* Per-question breakdown */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">Question Breakdown</h3>

              {questions.map((q, idx) => {
                const answer = answers[q.id];
                if (!answer) return null;
                const isExpanded = expandedQ === q.id;

                return (
                  <div
                    key={q.id}
                    className="bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-xl overflow-hidden"
                  >
                    {/* Question header row */}
                    <button
                      onClick={() => setExpandedQ(isExpanded ? null : q.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <span className="shrink-0">
                        {answer.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </span>
                      <span className="flex-1 text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                        {idx + 1}. {q.question}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                      )}
                    </button>

                    {/* Expanded detail */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 pt-1 space-y-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = answer.selected === optIdx;
                              const isCorrectOption = answer.correct === optIdx;

                              let optionClass =
                                "border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300";
                              if (isCorrectOption) {
                                optionClass =
                                  "border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300";
                              } else if (isSelected && !answer.isCorrect) {
                                optionClass =
                                  "border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300";
                              }

                              return (
                                <div
                                  key={optIdx}
                                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm ${optionClass}`}
                                >
                                  <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0">
                                    {OPTION_LABELS[optIdx]}
                                  </span>
                                  <span className="flex-1">{opt}</span>
                                  {isCorrectOption && (
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                  )}
                                  {isSelected && !answer.isCorrect && (
                                    <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                                  )}
                                </div>
                              );
                            })}

                            {q.explanation && (
                              <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg px-3 py-2 text-sm text-blue-700 dark:text-blue-300">
                                <span className="font-semibold">Explanation:</span> {q.explanation}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={onClose}
              className="w-full py-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
