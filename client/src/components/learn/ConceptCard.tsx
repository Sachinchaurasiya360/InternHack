import type { ReactNode } from "react"

interface ConceptCardProps {
  /** Section number label, e.g. "1.1" or "1.4a". */
  number: string
  title: string
  /** Optional category label, e.g. "Key Concept", "Definition". */
  tag?: string
  children: ReactNode
}

/**
 * A titled concept block used throughout the lesson body. The prose inside is
 * rendered with sensible defaults so module pages only need to drop in <p>, tables,
 * and small grids without repeating typography classes.
 */
export default function ConceptCard({ number, title, tag, children }: ConceptCardProps) {
  return (
    <div className="rounded-md border border-stone-200 bg-white p-5 dark:border-white/10 dark:bg-stone-900">
      <div className="mb-3 flex items-center gap-3">
        <span className="inline-flex h-7 min-w-7 shrink-0 items-center justify-center rounded-md bg-lime-400 px-1.5 font-display text-xs font-bold text-stone-900">
          {number}
        </span>
        <h3 className="font-display text-base font-bold tracking-tight text-stone-900 dark:text-stone-50">
          {title}
        </h3>
        {tag && (
          <span className="ml-auto shrink-0 rounded border border-lime-200 bg-lime-50 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:border-lime-800 dark:bg-lime-900/20 dark:text-lime-400">
            {tag}
          </span>
        )}
      </div>

      <div className="space-y-3 text-sm leading-relaxed text-stone-600 [&_em]:text-stone-500 [&_strong]:font-semibold [&_strong]:text-stone-900 dark:text-stone-400 dark:[&_strong]:text-stone-100">
        {children}
      </div>
    </div>
  )
}
