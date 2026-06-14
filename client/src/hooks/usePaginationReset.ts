import { useEffect } from "react";

/**
 * Resets pagination to the first page when specified dependencies change.
 * @param setPage Function to update the current page number.
 * @param deps Dependencies that should trigger a pagination reset.
 */
export function usePaginationReset(setPage: (p: number) => void, deps: React.DependencyList) {
  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
