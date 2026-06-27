import { useState } from "react";
import {
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  CircleDot,
  GripVertical,
  HelpCircle,
} from "lucide-react";
import type { AssessmentQuestion } from "../../../lib/types";

interface AssessmentBuilderProps {
  questions: AssessmentQuestion[];
  onChange: (questions: AssessmentQuestion[]) => void;
}

function createEmptyQuestion(): AssessmentQuestion {
  return {
    question: "",
    options: ["", ""],
    correctIndex: 0,
    explanation: "",
    points: 1,
  };
}

export function AssessmentBuilder({ questions, onChange }: AssessmentBuilderProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const addQuestion = () => {
    const updated = [...questions, createEmptyQuestion()];
    onChange(updated);
    setExpandedIndex(updated.length - 1);
  };

  const updateQuestion = (index: number, updates: Partial<AssessmentQuestion>) => {
    onChange(questions.map((q, i) => (i === index ? { ...q, ...updates } : q)));
  };

  const removeQuestion = (index: number) => {
    onChange(questions.filter((_, i) => i !== index));
    if (expandedIndex === index) setExpandedIndex(null);
    else if (expandedIndex !== null && expandedIndex > index) {
      setExpandedIndex(expandedIndex - 1);
    }
  };

  const moveQuestion = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= questions.length) return;
    const updated = [...questions];
    [updated[index], updated[newIndex]] = [updated[newIndex]!, updated[index]!];
    onChange(updated);
    setExpandedIndex(newIndex);
  };

  const addOption = (qIndex: number) => {
    const q = questions[qIndex]!;
    if (q.options.length >= 6) return;
    updateQuestion(qIndex, { options: [...q.options, ""] });
  };

  const updateOption = (qIndex: number, optIndex: number, value: string) => {
    const q = questions[qIndex]!;
    const options = [...q.options];
    options[optIndex] = value;
    updateQuestion(qIndex, { options });
  };

  const removeOption = (qIndex: number, optIndex: number) => {
    const q = questions[qIndex]!;
    if (q.options.length <= 2) return;
    const options = q.options.filter((_, i) => i !== optIndex);
    const correctIndex =
      q.correctIndex === optIndex
        ? 0
        : q.correctIndex > optIndex
          ? q.correctIndex - 1
          : q.correctIndex;
    updateQuestion(qIndex, { options, correctIndex });
  };

  if (questions.length === 0) {
    return (
      <div className="space-y-3">
        <div className="py-8 text-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
          <HelpCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No questions added yet. Click &ldquo;Add Question&rdquo; to get started.
          </p>
        </div>
        <button
          type="button"
          onClick={addQuestion}
          className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-500 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Question
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {questions.map((q, index) => (
        <div
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
        >
          {/* Header row */}
          <div
            className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            <div className="flex flex-col gap-0.5">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  moveQuestion(index, "up");
                }}
                disabled={index === 0}
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  moveQuestion(index, "down");
                }}
                disabled={index === questions.length - 1}
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <GripVertical className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <div className="flex-1 min-w-0">
              <span className="font-medium text-sm dark:text-gray-200 truncate block">
                Q{index + 1}. {q.question || "Untitled Question"}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {q.options.length} options &middot; {q.points} pt{q.points !== 1 ? "s" : ""}
                {q.options[q.correctIndex] ? (
                  <>
                    {" "}
                    &middot; Answer:{" "}
                    <span className="text-green-600 dark:text-green-400">
                      {q.options[q.correctIndex]}
                    </span>
                  </>
                ) : null}
              </span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeQuestion(index);
              }}
              className="p-1 text-red-400 hover:text-red-600 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Expanded editor */}
          {expandedIndex === index && (
            <div className="p-4 space-y-4 border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              {/* Question text */}
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                  Question Text
                </label>
                <input
                  type="text"
                  value={q.question}
                  onChange={(e) =>
                    updateQuestion(index, { question: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter the question..."
                />
              </div>

              {/* Options with radio for correct answer */}
              <div className="space-y-2">
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">
                  Options (select the correct answer)
                </label>
                {q.options.map((opt, optIdx) => (
                  <div key={optIdx} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuestion(index, { correctIndex: optIdx })
                      }
                      className={`flex-shrink-0 p-0.5 rounded-full transition-colors ${
                        q.correctIndex === optIdx
                          ? "text-green-600 dark:text-green-400"
                          : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                      }`}
                      title={
                        q.correctIndex === optIdx
                          ? "Correct answer"
                          : "Mark as correct"
                      }
                    >
                      <CircleDot className="w-5 h-5" />
                    </button>
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) =>
                        updateOption(index, optIdx, e.target.value)
                      }
                      className={`flex-1 px-3 py-1.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white ${
                        q.correctIndex === optIdx
                          ? "border-green-400 dark:border-green-600"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                      placeholder={`Option ${optIdx + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeOption(index, optIdx)}
                      disabled={q.options.length <= 2}
                      className="p-1 text-red-400 hover:text-red-600 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                {q.options.length < 6 && (
                  <button
                    type="button"
                    onClick={() => addOption(index)}
                    className="text-xs text-gray-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    Add Option
                  </button>
                )}
              </div>

              {/* Points and Explanation row */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Points
                  </label>
                  <input
                    type="number"
                    value={q.points}
                    onChange={(e) =>
                      updateQuestion(index, {
                        points: Math.max(1, Number(e.target.value)),
                      })
                    }
                    min={1}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Explanation (optional)
                  </label>
                  <textarea
                    value={q.explanation || ""}
                    onChange={(e) =>
                      updateQuestion(index, { explanation: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                    rows={2}
                    placeholder="Explain why the correct answer is correct..."
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addQuestion}
        className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-500 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" />
        Add Question
      </button>
    </div>
  );
}
