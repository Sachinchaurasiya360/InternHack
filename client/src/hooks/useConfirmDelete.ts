import { useState, useCallback } from "react";

interface ConfirmOptions {
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  confirmVariant?: "danger" | "primary";
}

export function useConfirmDelete() {
  const [state, setState] = useState<{
    open: boolean;
    title: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    confirmVariant?: "danger" | "primary";
  }>({
    open: false,
    title: "Delete Confirmation",
    onConfirm: () => {},
  });

  const showConfirm = useCallback((options: ConfirmOptions) => {
    setState({
      open: true,
      title: options.title ?? "Delete Confirmation",
      description: options.description ?? "Are you sure you want to delete this? This action cannot be undone.",
      confirmLabel: options.confirmLabel ?? "Delete",
      cancelLabel: options.cancelLabel ?? "Cancel",
      confirmVariant: options.confirmVariant ?? "danger",
      onConfirm: options.onConfirm,
    });
  }, []);

  const handleCancel = useCallback(() => {
    setState((prev) => ({ ...prev, open: false }));
  }, []);

  const handleConfirm = useCallback(() => {
    state.onConfirm();
    setState((prev) => ({ ...prev, open: false }));
  }, [state]);

  const confirmProps = {
    open: state.open,
    title: state.title,
    description: state.description,
    confirmLabel: state.confirmLabel,
    cancelLabel: state.cancelLabel,
    confirmVariant: state.confirmVariant,
    onConfirm: handleConfirm,
    onCancel: handleCancel,
  };

  return {
    showConfirm,
    confirmProps,
  };
}
