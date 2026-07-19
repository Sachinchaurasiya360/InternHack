import { useState } from "react"
import { Check, X, HelpCircle } from "lucide-react"

interface MicroCheckProps {
  question: string
  options: string[]
  /** Index of the correct option. */
  correct: number
  explanation: string
}

/**
 * Inline single-question knowledge check dropped between concepts. Picking an
 * option locks the answer and reveals whether it was right plus an explanation.
 */
export default function MicroCheck({ question, options, correct, explanation }: MicroCheckProps) {
  const [picked, setPicked] = useState<number | null>(null)
  const answered = picked !== null
  const isCorrect = picked === correct

  return (
    <div className="rounded-md border border-stone-200 bg-stone-50 p-5 dark:border-white/10 dark:bg-stone-900/60">
      <div className="mb-3 flex items-start gap-2.5">
        <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-lime-600 dark:text-lime-400" aria-hidden />
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">Quick check</p>
          <p className="mt-1 text-sm font-semibold text-stone-900 dark:text-stone-50">{question}</p>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((opt, i) => {
          const isPicked = picked === i
          const isAnswer = i === correct

          let state =
            "border-stone-200 bg-white text-stone-700 hover:border-stone-400 dark:border-white/10 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-white/30"
          if (answered && isAnswer) {
            state =
              "border-lime-400 bg-lime-50 text-stone-900 dark:border-lime-600 dark:bg-lime-900/30 dark:text-stone-50"
          } else if (answered && isPicked && !isAnswer) {
            state =
              "border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-800 dark:bg-rose-900/30 dark:text-rose-300"
          } else if (answered) {
            state =
              "border-stone-200 bg-white text-stone-400 dark:border-white/10 dark:bg-stone-800 dark:text-stone-500"
          }

          return (
            <button
              key={opt}
              type="button"
              disabled={answered}
              onClick={() => setPicked(i)}
              className={`flex items-center justify-between gap-2 rounded-md border px-3 py-2 text-left text-sm font-medium transition-colors disabled:cursor-default ${state}`}
            >
              <span>{opt}</span>
              {answered && isAnswer && <Check className="h-4 w-4 shrink-0 text-lime-600 dark:text-lime-400" aria-hidden />}
              {answered && isPicked && !isAnswer && <X className="h-4 w-4 shrink-0 text-rose-500" aria-hidden />}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className="mt-3 rounded-md border border-stone-200 bg-white p-3 text-sm dark:border-white/10 dark:bg-stone-800">
          <p className={`mb-1 text-xs font-bold ${isCorrect ? "text-lime-700 dark:text-lime-400" : "text-rose-600 dark:text-rose-400"}`}>
            {isCorrect ? "Correct" : "Not quite"}
          </p>
          <p className="leading-relaxed text-stone-600 dark:text-stone-400">{explanation}</p>
        </div>
      )}
    </div>
  )
}
