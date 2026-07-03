import { useEffect, useRef, type ReactNode } from "react";
import { Loader2 } from "lucide-react";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmVariant?: "danger" | "primary";
  loading?: boolean;
  children?: ReactNode;
}

export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  confirmVariant = "danger",
  loading = false,
  children,
}: ConfirmDialogProps) {
  const cancelRef = useRef<HTMLButtonElement>(null);

  // Focus management
  useEffect(() => {
    if (open) cancelRef.current?.focus();
  }, [open]);

  // Keyboard navigation & Escape key dismiss
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !loading) {
        onCancel();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, loading, onCancel]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={loading ? undefined : onCancel} />
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-desc"
        className="relative z-50 w-full max-w-sm rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 p-6 shadow-xl"
      >
        <h2 id="confirm-title" className="text-base font-semibold text-stone-900 dark:text-white">
          {title}
        </h2>
        <div id="confirm-desc" className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          {children ? (
            children
          ) : (
            <p className="leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="mt-5 flex justify-end gap-3">
          <button
            ref={cancelRef}
            onClick={onCancel}
            disabled={loading}
            className="px-4 py-2 text-sm rounded-lg border border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
              confirmVariant === "primary"
                ? "bg-black dark:bg-white text-white dark:text-stone-950 hover:bg-stone-800 dark:hover:bg-stone-200"
                : "bg-red-600 hover:bg-red-700 text-white"
            }`}
          >
            {loading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

