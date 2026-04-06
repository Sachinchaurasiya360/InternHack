import { Loader2 } from "lucide-react";
import type React from "react";

// Shared action button for the ATS pages that follow the
// idle → loading → limit-reached state machine. Used by Cover Letter,
// Resume Generator, and ATS Score pages.
export interface GenerateButtonProps {
  onClick: () => void;
  loading: boolean;
  limitReached: boolean;
  /** Extra disable conditions (e.g. missing file) */
  disabled?: boolean;
  loadingLabel: string;
  idleLabel: string;
  limitLabel?: string;
  idleIcon?: React.ReactNode;
  className?: string;
}

export function GenerateButton({
  onClick,
  loading,
  limitReached,
  disabled,
  loadingLabel,
  idleLabel,
  limitLabel = "Daily limit reached",
  idleIcon,
  className = "",
}: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading || limitReached || disabled}
      className={`w-full flex items-center justify-center gap-2 py-3.5 bg-gray-950 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all disabled:opacity-40 disabled:cursor-not-allowed dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200 active:scale-[0.99] ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          {loadingLabel}
        </>
      ) : limitReached ? (
        limitLabel
      ) : (
        <>
          {idleIcon}
          {idleLabel}
        </>
      )}
    </button>
  );
}
