import { useState, useEffect, useCallback, useRef } from "react";
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  X,
} from "lucide-react";
import type { AssessmentQuestion } from "../../../lib/types";

interface AssessmentTestViewProps {
  questions: AssessmentQuestion[];
  timeLimitSecs?: number | null;
  onSubmit: (answers: Record<string, number>) => void;
  submitting: boolean;
}

export function AssessmentTestView({
  questions,
  timeLimitSecs,
  onSubmit,
  submitting,
}: AssessmentTestViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState<number | null>(
    timeLimitSecs ?? null
  );
  const autoSubmittedRef = useRef(false);

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = questions.length;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  // Build the final answers payload and call onSubmit
  const handleSubmit = useCallback(() => {
    if (autoSubmittedRef.current) return;
    autoSubmittedRef.current = true;
    onSubmit(answers);
  }, [answers, onSubmit]);

  // Countdown timer
  useEffect(() => {
    if (secondsLeft === null || secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === null) return null;
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  // Auto-submit when timer hits 0
  useEffect(() => {
    if (secondsLeft === 0 && !autoSubmittedRef.current) {
      handleSubmit();
    }
  }, [secondsLeft, handleSubmit]);

  const selectAnswer = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [String(questionIndex)]: optionIndex }));
  };

  const goTo = (index: number) => {
    if (index >= 0 && index < totalQuestions) setCurrentIndex(index);
  };

  const formatTime = (secs: number): string => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-6 min-h-0">
      {/* Sidebar: navigation + timer */}
      <div className="lg:w-64 flex-shrink-0 space-y-4">
        {/* Timer */}
        {secondsLeft !== null && (
          <div
            className={`flex items-center gap-2 px-4 py-3 rounded-lg font-mono text-sm font-semibold ${
              secondsLeft <= 60
                ? "bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400"
                : secondsLeft <= 300
                  ? "bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{formatTime(secondsLeft)}</span>
            {secondsLeft <= 60 && (
              <span className="text-xs font-normal ml-auto">Hurry!</span>
            )}
          </div>
        )}

        {/* Progress summary */}
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            Progress
          </p>
          <p className="text-sm font-medium dark:text-gray-200">
            {answeredCount} / {totalQuestions} answered
          </p>
          <div className="mt-2 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all"
              style={{
                width: `${totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0}%`,
              }}
            />
          </div>
        </div>

        {/* Question navigation grid */}
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Questions
          </p>
          <div className="grid grid-cols-5 gap-1.5">
            {questions.map((_, idx) => {
              const isAnswered = answers[String(idx)] !== undefined;
              const isCurrent = idx === currentIndex;
              let btnClass =
                "w-8 h-8 rounded text-xs font-medium transition-colors flex items-center justify-center ";
              if (isCurrent) {
                btnClass +=
                  "bg-indigo-600 text-white dark:bg-indigo-500";
              } else if (isAnswered) {
                btnClass +=
                  "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
              } else {
                btnClass +=
                  "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600";
              }
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={btnClass}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          {/* Legend */}
          <div className="flex items-center gap-3 mt-3 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-gray-200 dark:bg-gray-700" />
              Unanswered
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-green-100 dark:bg-green-900" />
              Answered
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-indigo-600 dark:bg-indigo-500" />
              Current
            </span>
          </div>
        </div>
      </div>

      {/* Main content: current question */}
      <div className="flex-1 min-w-0">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          {/* Question header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Question {currentIndex + 1} of {totalQuestions}
              </span>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-1">
                {currentQuestion.question}
              </h3>
            </div>
            <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded flex-shrink-0 ml-4">
              {currentQuestion.points} pt{currentQuestion.points !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Option cards */}
          <div className="space-y-2">
            {currentQuestion.options.map((option, optIdx) => {
              const isSelected = answers[String(currentIndex)] === optIdx;
              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => selectAnswer(currentIndex, optIdx)}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm ${
                    isSelected
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950 dark:border-indigo-400 text-indigo-900 dark:text-indigo-100"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-semibold ${
                        isSelected
                          ? "border-indigo-500 bg-indigo-500 text-white dark:border-indigo-400 dark:bg-indigo-400"
                          : "border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{option}</span>
                    {isSelected && (
                      <CheckCircle className="w-4 h-4 ml-auto text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <div className="flex items-center gap-3">
              {isLastQuestion ? (
                <button
                  type="button"
                  onClick={() => setShowConfirm(true)}
                  disabled={submitting}
                  className="px-5 py-2 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 transition-colors"
                >
                  {submitting ? "Submitting..." : "Submit Assessment"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => goTo(currentIndex + 1)}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-gray-950 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-md w-full mx-4 p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  Submit Assessment?
                </h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  You have answered{" "}
                  <span className="font-semibold">
                    {answeredCount}
                  </span>{" "}
                  out of{" "}
                  <span className="font-semibold">{totalQuestions}</span>{" "}
                  questions.
                  {answeredCount < totalQuestions && (
                    <>
                      {" "}
                      {totalQuestions - answeredCount} question
                      {totalQuestions - answeredCount > 1 ? "s" : ""} will be
                      left unanswered.
                    </>
                  )}
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                  This action cannot be undone.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-3 mt-5 justify-end">
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Review Answers
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirm(false);
                  handleSubmit();
                }}
                disabled={submitting}
                className="px-5 py-2 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 transition-colors"
              >
                {submitting ? "Submitting..." : "Confirm Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
