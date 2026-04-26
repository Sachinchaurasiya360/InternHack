import { useEffect, useState } from "react";
import { Shuffle } from "lucide-react";

interface Preset {
  label: string;
  value: string;
}

interface InputEditorProps {
  label: string;
  value: string;
  placeholder?: string;
  helper?: string;
  presets?: Preset[];
  onApply: (value: string) => void;
  onRandom?: () => void;
  monospace?: boolean;
}

export function InputEditor({
  label,
  value,
  placeholder,
  helper,
  presets,
  onApply,
  onRandom,
  monospace = true,
}: InputEditorProps) {
  const [draft, setDraft] = useState(value);

  // Sync local draft when parent updates value externally (random/preset).
  useEffect(() => {
    setDraft(value);
  }, [value]);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
        / {label}
      </label>
      <div className="flex gap-1.5">
        <input
          type="text"
          value={draft}
          placeholder={placeholder}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onApply(draft);
          }}
          onBlur={() => onApply(draft)}
          className={`flex-1 min-w-0 px-3 py-2 bg-white dark:bg-stone-950 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 ${
            monospace ? "font-mono" : ""
          }`}
        />
        <button
          type="button"
          onClick={() => onApply(draft)}
          className="px-3 py-2 text-xs font-mono uppercase tracking-widest border border-stone-300 dark:border-white/10 rounded-md text-stone-700 dark:text-stone-300 hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors cursor-pointer"
        >
          apply
        </button>
      </div>
      {helper && (
        <p className="text-[10px] text-stone-500 dark:text-stone-400 leading-snug">{helper}</p>
      )}
      {(presets && presets.length > 0) || onRandom ? (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {presets?.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setDraft(p.value);
                onApply(p.value);
              }}
              className="px-2 py-1 text-[10px] font-mono uppercase tracking-widest border border-stone-200 dark:border-white/10 rounded-md text-stone-600 dark:text-stone-400 hover:border-lime-400 hover:text-lime-700 dark:hover:text-lime-300 transition-colors cursor-pointer"
            >
              {p.label}
            </button>
          ))}
          {onRandom && (
            <button
              type="button"
              onClick={onRandom}
              className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono uppercase tracking-widest border border-stone-200 dark:border-white/10 rounded-md text-stone-600 dark:text-stone-400 hover:border-lime-400 hover:text-lime-700 dark:hover:text-lime-300 transition-colors cursor-pointer"
            >
              <Shuffle className="w-3 h-3" />
              random
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}
