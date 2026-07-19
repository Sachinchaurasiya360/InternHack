import { Target, Check } from "lucide-react"

interface ObjectivesCardProps {
  objectives: string[]
}

/**
 * "By the end of this module" learning-objectives checklist shown at the top of
 * every module page.
 */
export default function ObjectivesCard({ objectives }: ObjectivesCardProps) {
  return (
    <div className="rounded-md border border-lime-200 bg-lime-50 p-5 dark:border-lime-800 dark:bg-lime-900/20">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-lime-400 text-stone-900">
          <Target className="h-4 w-4" aria-hidden />
        </span>
        <div>
          <p className="font-display text-sm font-bold text-stone-900 dark:text-stone-50">
            Learning objectives
          </p>
          <p className="text-xs text-stone-500">What you will be able to do by the end</p>
        </div>
      </div>

      <ul className="space-y-2.5">
        {objectives.map((obj) => (
          <li key={obj} className="flex items-start gap-2.5 text-sm text-stone-700 dark:text-stone-300">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-600 dark:text-lime-400" aria-hidden />
            <span>{obj}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
