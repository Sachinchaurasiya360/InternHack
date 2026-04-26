import { Loader2 } from "lucide-react";
import type React from "react";
import { Button } from "../../../../components/ui/button";

export interface GenerateButtonProps {
  onClick: () => void;
  loading: boolean;
  limitReached: boolean;
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
    <Button
      onClick={onClick}
      disabled={loading || limitReached || disabled}
      variant="mono"
      size="lg"
      className={`w-full h-12 rounded-xl text-sm font-semibold active:scale-[0.99] ${className}`}
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
    </Button>
  );
}
