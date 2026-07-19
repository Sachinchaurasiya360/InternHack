import { useState } from "react"
import { Check, X, Trophy, RotateCcw, ArrowRight } from "lucide-react"

export interface QuizQuestion {
  question: string
  options: string[]
  /** Index of the correct option. */
  correct: number
  explanation: string
}

interface ExitQuizProps {
  moduleName: string
  questions: QuizQuestion[]
  /** Score needed to "pass" the self-check. */
  passThreshold: number
}

/**
 * End-of-module quiz. Questions are answered one at a time with immediate feedback,
 * then a results screen reports the score against `passThreshold`. Purely a
 * self-check: nothing is gated, and "Retry" restarts from a clean slate.
 */
export default function ExitQuiz({ moduleName, questions, passThreshold }: ExitQuizProps) {
  const [current, setCurrent] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const total = questions.length
  const q = questions[current]
  const answered = picked !== null

  function choose(i: number) {
    if (answered) return
    setPicked(i)
    if (i === q.correct) setScore((s) => s + 1)
  }

  function next() {
    if (current + 1 < total) {
      setCurrent((c) => c + 1)
      setPicked(null)
    } else {
      setDone(true)
    }
  }

  function retry() {
    setCurrent(0)
    setPicked(null)
    setScore(0)
    setDone(false)
  }

  if (done) {
    const passed = score >= passThreshold
    const pct = Math.round((score / total) * 100)
    return (
      <div className="rounded-md border border-stone-200 bg-white p-8 text-center dark:border-white/10 dark:bg-stone-900">
        <span
          className={`mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-md ${
            passed ? "bg-lime-400 text-stone-900" : "bg-stone-200 text-stone-500 dark:bg-stone-800"
          }`}
        >
          <Trophy className="h-7 w-7" aria-hidden />
        </span>
        <p className="font-display text-2xl font-bold text-stone-900 dark:text-stone-50">
          {score} / {total}
        </p>
        <p className="mt-1 text-sm text-stone-500">{pct}% correct</p>
        <p className={`mt-3 text-sm font-semibold ${passed ? "text-lime-700 dark:text-lime-400" : "text-stone-600 dark:text-stone-400"}`}>
          {passed
            ? `Nice work, you passed the ${moduleName} self-check.`
            : `You need ${passThreshold} / ${total} to pass. Review the module and try again.`}
        </p>
        <button
          type="button"
          onClick={retry}
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900 dark:border-white/10 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-white/30 dark:hover:text-stone-50"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          Retry quiz
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-md border border-stone-200 bg-white p-6 dark:border-white/10 dark:bg-stone-900">
      {/* Progress */}
      <div className="mb-5 flex items-center justify-between">
        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          Question {current + 1} of {total}
        </p>
        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          Score {score}
        </p>
      </div>
      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-stone-100 dark:bg-stone-800">
        <div
          className="h-full rounded-full bg-lime-500 transition-all duration-300"
          style={{ width: `${((current + (answered ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <p className="mb-4 font-display text-base font-bold text-stone-900 dark:text-stone-50">{q.question}</p>

      <div className="grid gap-2">
        {q.options.map((opt, i) => {
          const isPicked = picked === i
          const isAnswer = i === q.correct

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
              onClick={() => choose(i)}
              className={`flex items-center justify-between gap-2 rounded-md border px-4 py-2.5 text-left text-sm font-medium transition-colors disabled:cursor-default ${state}`}
            >
              <span>{opt}</span>
              {answered && isAnswer && <Check className="h-4 w-4 shrink-0 text-lime-600 dark:text-lime-400" aria-hidden />}
              {answered && isPicked && !isAnswer && <X className="h-4 w-4 shrink-0 text-rose-500" aria-hidden />}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className="mt-4 rounded-md border border-stone-200 bg-stone-50 p-3 text-sm dark:border-white/10 dark:bg-stone-800">
          <p className="leading-relaxed text-stone-600 dark:text-stone-400">{q.explanation}</p>
        </div>
      )}

      <div className="mt-5 flex justify-end">
        <button
          type="button"
          disabled={!answered}
          onClick={next}
          className="inline-flex items-center gap-2 rounded-md bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-100"
        >
          {current + 1 < total ? "Next question" : "See results"}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  )
}
