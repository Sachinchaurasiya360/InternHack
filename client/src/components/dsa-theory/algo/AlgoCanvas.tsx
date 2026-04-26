import type { ReactNode } from "react";
import { PlayerControls, type StepPlayer } from "./StepPlayer";

interface AlgoCanvasProps<T> {
  title: string;
  player: StepPlayer<T>;
  input?: ReactNode;
  pseudocode?: ReactNode;
  variables?: ReactNode;
  children: ReactNode;
}

export function AlgoCanvas<T>({
  title,
  player,
  input,
  pseudocode,
  variables,
  children,
}: AlgoCanvasProps<T>) {
  const hasSidePanels = pseudocode || variables;
  const hasInputRail = !!input;

  return (
    <div className="border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-900 overflow-hidden">
      <div className="px-4 py-3 border-b border-stone-200 dark:border-white/10 flex items-center justify-between gap-4 flex-wrap">
        <div className="min-w-0">
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            / visualization
          </div>
          <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate">
            {title}
          </h3>
        </div>
        <PlayerControls player={player} />
      </div>

      <div
        className={`grid grid-cols-1 ${
          hasInputRail && hasSidePanels
            ? "lg:grid-cols-[260px_1fr_260px]"
            : hasInputRail
              ? "lg:grid-cols-[260px_1fr]"
              : hasSidePanels
                ? "lg:grid-cols-[1fr_260px]"
                : "lg:grid-cols-1"
        }`}
      >
        {hasInputRail && (
          <div className="lg:border-r border-stone-200 dark:border-white/10 p-4">{input}</div>
        )}
        <div
          className={`p-4 lg:p-6 min-w-0 border-t lg:border-t-0 ${
            hasInputRail ? "border-stone-200 dark:border-white/10" : ""
          }`}
        >
          {children}
        </div>
        {hasSidePanels && (
          <div className="lg:border-l border-t lg:border-t-0 border-stone-200 dark:border-white/10 p-3 space-y-3 bg-stone-50 dark:bg-stone-950/50">
            {pseudocode}
            {variables}
          </div>
        )}
      </div>
    </div>
  );
}
