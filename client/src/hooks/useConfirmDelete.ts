import { useState, useCallback, useRef } from "react";

interface ConfirmOptions {
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void | Promise<void>;
  confirmVariant?: "danger" | "primary";
}

export function useConfirmDelete() {
  const [state, setState] = useState<{
    open: boolean;
    loading: boolean;
    title: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void | Promise<void>;
    confirmVariant?: "danger" | "primary";
  }>({
    open: false,
    loading: false,
    title: "Delete Confirmation",
    onConfirm: () => {},
  });

  const isExecutingRef = useRef(false);

  const showConfirm = useCallback((options: ConfirmOptions) => {
    isExecutingRef.current = false;
    setState({
      open: true,
      loading: false,
      title: options.title ?? "Delete Confirmation",
      description: options.description ?? "Are you sure you want to delete this? This action cannot be undone.",
      confirmLabel: options.confirmLabel ?? "Delete",
      cancelLabel: options.cancelLabel ?? "Cancel",
      confirmVariant: options.confirmVariant ?? "danger",
      onConfirm: options.onConfirm,
    });
  }, []);

  const handleCancel = useCallback(() => {
    if (isExecutingRef.current) return;
    setState((prev) => {
      if (prev.loading) return prev;
      return { ...prev, open: false };
    });
  }, []);

  const handleConfirm = useCallback(async () => {
    if (isExecutingRef.current || state.loading) return;
    isExecutingRef.current = true;
    setState((prev) => ({ ...prev, loading: true }));

    try {
      await state.onConfirm();
      setState((prev) => ({ ...prev, open: false, loading: false }));
    } catch {
      setState((prev) => ({ ...prev, loading: false }));
    } finally {
      isExecutingRef.current = false;
    }
  }, [state]);

  const confirmProps = {
    open: state.open,
    loading: state.loading,
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
