import { labelClass } from "./styles";

export function TogglePills({
  label,
  options,
  selected,
  onChange,
  format,
}: {
  label: string;
  options: string[];
  selected: string[];
  onChange: (next: string[]) => void;
  format: (o: string) => string;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = selected.includes(o);
          return (
            <button
              key={o}
              type="button"
              onClick={() =>
                onChange(active ? selected.filter((v) => v !== o) : [...selected, o])
              }
              className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                active
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                  : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
              }`}
            >
              {format(o)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
