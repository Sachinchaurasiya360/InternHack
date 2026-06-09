import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tag, Plus, X, Check } from "lucide-react";
import {
  DSA_SYSTEM_LABELS,
  DSA_MAX_LABELS_PER_PROBLEM,
} from "../../../../lib/types";

interface DsaLabelManagerProps {
  problemId: number;
  labels: string[];
  onAdd: (problemId: number, label: string) => void;
  onRemove: (problemId: number, label: string) => void;
}

/**
 * Per-problem label control: renders the current labels as removable chips and
 * a "+" button that opens a dropdown of system-suggested labels plus a free-text
 * input for creating custom labels. Enforces the per-problem cap in the UI to
 * match the server constraint.
 */
export const DsaLabelManager = React.memo(function DsaLabelManager({
  problemId,
  labels,
  onAdd,
  onRemove,
}: DsaLabelManagerProps) {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const atLimit = labels.length >= DSA_MAX_LABELS_PER_PROBLEM;

  // Close the dropdown on outside click.
  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const has = (label: string) => labels.includes(label);

  const handleToggle = (label: string) => {
    if (has(label)) onRemove(problemId, label);
    else if (!atLimit) onAdd(problemId, label);
  };

  const handleCustomSubmit = () => {
    const value = custom.trim();
    if (!value || atLimit || has(value)) {
      setCustom("");
      return;
    }
    onAdd(problemId, value);
    setCustom("");
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center gap-1.5 flex-wrap"
    >
      {labels.map((label) => (
        <span
          key={label}
          className="group/chip inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-lime-100 dark:bg-lime-950/30 text-lime-800 dark:text-lime-300 text-[10px] font-mono"
        >
          {label}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(problemId, label);
            }}
            className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            title={`Remove "${label}"`}
            aria-label={`Remove label ${label}`}
          >
            <X className="w-2.5 h-2.5" />
          </button>
        </span>
      ))}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md border border-dashed border-stone-300 dark:border-white/15 text-stone-500 dark:text-stone-400 text-[10px] font-mono uppercase tracking-widest hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-800 dark:hover:text-stone-200 transition-colors cursor-pointer"
        title="Add label"
      >
        <Tag className="w-2.5 h-2.5" />
        {labels.length === 0 ? "label" : <Plus className="w-2.5 h-2.5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
            className="absolute top-full left-0 mt-1.5 z-20 w-60 p-2 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="px-1 pb-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
              {atLimit
                ? `max ${DSA_MAX_LABELS_PER_PROBLEM} labels reached`
                : "system labels"}
            </p>

            <div className="space-y-0.5">
              {DSA_SYSTEM_LABELS.map(({ emoji, label }) => {
                const active = has(label);
                const disabled = !active && atLimit;
                return (
                  <button
                    key={label}
                    type="button"
                    disabled={disabled}
                    onClick={() => handleToggle(label)}
                    className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-left transition-colors ${
                      active
                        ? "bg-lime-100 dark:bg-lime-950/30 text-lime-800 dark:text-lime-300"
                        : disabled
                          ? "text-stone-300 dark:text-stone-600 cursor-not-allowed"
                          : "text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-white/5 cursor-pointer"
                    }`}
                  >
                    <span aria-hidden>{emoji}</span>
                    <span className="flex-1 truncate">{label}</span>
                    {active && <Check className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-2 pt-2 border-t border-stone-200 dark:border-white/10">
              <div className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={custom}
                  maxLength={40}
                  disabled={atLimit}
                  onChange={(e) => setCustom(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleCustomSubmit();
                    }
                  }}
                  placeholder={atLimit ? "limit reached" : "Custom label…"}
                  className="flex-1 min-w-0 px-2 py-1.5 text-xs rounded-md border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:border-lime-400 transition-colors disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={handleCustomSubmit}
                  disabled={atLimit || custom.trim() === ""}
                  className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  title="Add custom label"
                  aria-label="Add custom label"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
