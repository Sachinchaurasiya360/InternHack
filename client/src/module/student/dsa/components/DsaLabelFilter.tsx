import { Tag, X } from "lucide-react";

interface DsaLabelFilterProps {
  /** All labels available to filter by (distinct across the student's problems). */
  allLabels: string[];
  /** Currently-active label selections. */
  selected: string[];
  onToggle: (label: string) => void;
  onClear: () => void;
}

/**
 * Filter bar of selectable label chips. A problem matches when it carries ANY
 * of the selected labels (union). Renders nothing when the student has no
 * labels yet, so pages stay clean until labels exist.
 */
export function DsaLabelFilter({
  allLabels,
  selected,
  onToggle,
  onClear,
}: DsaLabelFilterProps) {
  if (allLabels.length === 0) return null;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 mr-1">
        <Tag className="w-3 h-3" />
        labels /
      </span>

      {allLabels.map((label) => {
        const active = selected.includes(label);
        return (
          <button
            key={label}
            type="button"
            onClick={() => onToggle(label)}
            aria-pressed={active}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors cursor-pointer ${
              active
                ? "bg-lime-400 text-stone-900 border-lime-400"
                : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
            }`}
          >
            {label}
          </button>
        );
      })}

      {selected.length > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors cursor-pointer"
        >
          <X className="w-3 h-3" /> clear
        </button>
      )}
    </div>
  );
}
