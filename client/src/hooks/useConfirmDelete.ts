import { useState, useCallback } from "react";

interface UseConfirmDeleteOptions {
  /** Called when the onDelete callback throws. Use this to show error feedback. */
  onError?: (err: unknown) => void;
}

/**
 * useConfirmDelete — eliminates the repeated "pending item → confirm dialog →
 * execute delete" pattern that was duplicated across multiple pages.
 *
 * Usage:
 *   const { pendingItem, confirm, execute, cancel, isPending } =
 *     useConfirmDelete<MyType>(
 *       async (item) => { await api.delete(`/resource/${item.id}`); },
 *       { onError: () => toast.error("Failed to delete") },
 *     );
 *
 *   // Trigger the confirmation dialog
 *   <button onClick={() => confirm(item)}>Delete</button>
 *
 *   // Render the dialog
 *   <ConfirmDialog
 *     open={pendingItem !== null}
 *     loading={isPending}
 *     onConfirm={execute}
 *     onCancel={cancel}
 *   />
 */
export function useConfirmDelete<T>(
  onDelete: (item: T) => Promise<void>,
  opts?: UseConfirmDeleteOptions,
) {
  const [pendingItem, setPendingItem] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(false);

  const confirm = useCallback((item: T) => setPendingItem(item), []);

  const execute = useCallback(async () => {
    if (!pendingItem || isPending) return;
    setIsPending(true);
    try {
      await onDelete(pendingItem);
      setPendingItem(null);
    } catch (err) {
      opts?.onError?.(err);
    } finally {
      setIsPending(false);
    }
  }, [pendingItem, isPending, onDelete, opts]);

  const cancel = useCallback(() => {
    if (!isPending) setPendingItem(null);
  }, [isPending]);

  return { pendingItem, confirm, execute, cancel, isPending };
}
