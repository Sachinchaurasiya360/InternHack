interface PseudocodePanelProps {
  lines: string[];
  activeLine?: number;
  title?: string;
}

export function PseudocodePanel({ lines, activeLine, title = "pseudocode" }: PseudocodePanelProps) {
  return (
    <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-950 dark:bg-black overflow-hidden">
      <div className="px-3 py-2 border-b border-stone-800 text-[10px] font-mono uppercase tracking-widest text-stone-400">
        / {title}
      </div>
      <div className="py-1">
        {lines.map((line, i) => {
          const active = i === activeLine;
          return (
            <div
              key={i}
              className={`flex items-start gap-3 px-3 py-1 font-mono text-xs leading-relaxed ${
                active
                  ? "bg-lime-400/15 text-lime-300"
                  : "text-stone-300 hover:bg-stone-900/50"
              }`}
            >
              <span className="w-5 text-right text-stone-600 tabular-nums select-none shrink-0">
                {i + 1}
              </span>
              <pre
                className={`m-0 whitespace-pre-wrap font-mono ${
                  active ? "text-lime-200" : "text-stone-200"
                }`}
              >
                {line}
              </pre>
            </div>
          );
        })}
      </div>
    </div>
  );
}
