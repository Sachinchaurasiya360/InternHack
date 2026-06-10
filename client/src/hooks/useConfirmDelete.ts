import { useState, useCallback } from "react";

/**
 * useConfirmDelete — eliminates the repeated "pending item → confirm dialog →
 * execute delete" pattern that was duplicated across multiple pages.
 *
 * Usage:
 *   const { pendingItem, confirm, execute, cancel } = useConfirmDelete<MyType>(
 *     async (item) => { await api.delete(`/resource/${item.id}`); }
 *   );
 *
 *   // Trigger the confirmation dialog
 *   <button onClick={() => confirm(item)}>Delete</button>
 *
 *   // Render the dialog
 *   <ConfirmDialog
 *     open={pendingItem !== null}
 *     onConfirm={execute}
 *     onCancel={cancel}
 *   />
 */
export function useConfirmDelete<T>(onDelete: (item: T) => Promise<void>) {
  const [pendingItem, setPendingItem] = useState<T | null>(null);

  const confirm = useCallback((item: T) => setPendingItem(item), []);

  const execute = useCallback(async () => {
    if (!pendingItem) return;
    await onDelete(pendingItem);
    setPendingItem(null);
  }, [pendingItem, onDelete]);

  const cancel = useCallback(() => setPendingItem(null), []);

  return { pendingItem, confirm, execute, cancel };
}
