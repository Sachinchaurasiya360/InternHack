import { motion } from "framer-motion";
import { Loader2, Wand2, CheckCircle } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export function SuggestionsPanel({
  suggestions,
  selectedSuggestions,
  onSelectionChange,
  onSelectAll,
  onApply,
  isApplying,
  readOnly = false,
}: {
  suggestions: string[];
  selectedSuggestions: Set<number>;
  onSelectionChange: (next: Set<number>) => void;
  onSelectAll: (checked: boolean) => void;
  onApply: () => void;
  isApplying: boolean;
  readOnly?: boolean;
}) {
  return (
    <motion.div
      key="suggestions"
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 8 }}
      transition={{ duration: 0.18 }}
    >
      {suggestions.length > 0 ? (
        <div className="space-y-4">
          {!readOnly && (
          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedSuggestions.size === suggestions.length}
                onChange={(e) => onSelectAll(e.target.checked)}
                className="w-4 h-4 rounded border-stone-300 text-lime-500 focus:ring-lime-500 cursor-pointer"
              />
              <span className="font-bold">Select all</span>
            </label>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
              {selectedSuggestions.size} selected
            </span>
          </div>
          )}
          <div className="divide-y divide-stone-200 dark:divide-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
            {suggestions.map((s, i) => (
              <label
                key={i}
                className={`group flex items-start gap-4 px-5 py-4 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-950/60 transition-colors ${readOnly ? "" : "cursor-pointer"}`}
              >
                {!readOnly && (
                <div className="pt-0.5">
                  <input
                    type="checkbox"
                    checked={selectedSuggestions.has(i)}
                    onChange={(e) => {
                      const next = new Set(selectedSuggestions);
                      if (e.target.checked) next.add(i);
                      else next.delete(i);
                      onSelectionChange(next);
                    }}
                    className="w-4 h-4 rounded border-stone-300 text-lime-500 focus:ring-lime-500 cursor-pointer"
                  />
                </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                    {s}
                  </p>
                </div>
              </label>
            ))}
          </div>
          {!readOnly && (
          <Button
            type="button"
            variant="primary"
            size="lg"
            onClick={onApply}
            disabled={selectedSuggestions.size === 0 || isApplying}
            className="group w-full font-bold bg-lime-400 text-stone-950 hover:bg-lime-300 border-0"
          >
            {isApplying ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Applying...
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4" /> Apply suggestions & improve resume
              </>
            )}
          </Button>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center py-10 text-center">
          <div className="w-12 h-12 rounded-md bg-lime-400 flex items-center justify-center mb-4">
            <CheckCircle className="w-6 h-6 text-stone-950" />
          </div>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
            No improvements needed
          </p>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-2">
            resume is ats-ready
          </p>
        </div>
      )}
    </motion.div>
  );
}
