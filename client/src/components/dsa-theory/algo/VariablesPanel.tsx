import { useEffect, useState } from "react";

type VarValue = string | number | boolean | undefined;

interface VariablesPanelProps {
  vars: Record<string, VarValue>;
  flashKeys?: string[];
  title?: string;
}

export function VariablesPanel({ vars, flashKeys, title = "variables" }: VariablesPanelProps) {
  const [flashing, setFlashing] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!flashKeys || flashKeys.length === 0) return;
    setFlashing(new Set(flashKeys));
    const t = setTimeout(() => setFlashing(new Set()), 450);
    return () => clearTimeout(t);
  }, [flashKeys, vars]);

  const entries = Object.entries(vars).filter(([, v]) => v !== undefined);

  return (
    <div className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 overflow-hidden">
      <div className="px-3 py-2 border-b border-stone-200 dark:border-white/10 text-[10px] font-mono uppercase tracking-widest text-stone-500">
        / {title}
      </div>
      {entries.length === 0 ? (
        <div className="px-3 py-3 text-[11px] font-mono text-stone-400">no variables yet</div>
      ) : (
        <div className="divide-y divide-stone-100 dark:divide-white/5">
          {entries.map(([k, v]) => {
            const flash = flashing.has(k);
            return (
              <div
                key={k}
                className={`flex items-center justify-between gap-3 px-3 py-1.5 font-mono text-xs transition-colors ${
                  flash ? "bg-lime-400/15" : ""
                }`}
              >
                <span className="text-stone-500 dark:text-stone-400 truncate">{k}</span>
                <span
                  className={`font-bold tabular-nums truncate ${
                    flash ? "text-lime-700 dark:text-lime-300" : "text-stone-900 dark:text-stone-50"
                  }`}
                >
                  {String(v)}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
