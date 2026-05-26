import { cn } from "@/lib/utils";

interface ResultCountProps {
  currentCount: number;
  totalCount: number;
  className?: string;
}

export function ResultCount({ currentCount, totalCount, className }: ResultCountProps) {
  return (
    <p
      aria-live="polite"
      className={cn("mb-4 text-sm text-stone-500 dark:text-stone-400", className)}
    >
      Showing <span className="font-semibold tabular-nums text-stone-900 dark:text-stone-50">{currentCount.toLocaleString()}</span> of <span className="font-semibold tabular-nums text-stone-900 dark:text-stone-50">{totalCount.toLocaleString()}</span> results
    </p>
  );
}