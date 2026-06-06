import { useState, useCallback } from "react";

const MAX_PROGRAMS = 4;

interface UseProgramComparisonReturn {
  compareList: string[];
  toggleCompare: (id: string) => boolean; // returns true if added, false if removed
  clearAll: () => void;
  isSelected: (id: string) => boolean;
  limitReached: boolean;
  removeProgram: (id: string) => void;
}

/**
 * Custom hook to manage program comparison state
 * - Tracks selected programs for comparison (max 4)
 * - Prevents adding more than 4 programs
 * - Provides methods to add/remove and query selection status
 */
export function useProgramComparison(): UseProgramComparisonReturn {
  const [compareList, setCompareList] = useState<string[]>([]);

  const toggleCompare = useCallback((id: string): boolean => {
    setCompareList((prev) => {
      if (prev.includes(id)) {
        // Remove if already in list
        return prev.filter((pid) => pid !== id);
      } else {
        // Add if under limit
        if (prev.length < MAX_PROGRAMS) {
          return [...prev, id];
        }
        // Don't add if at limit
        return prev;
      }
    });

    // Return true if we're adding (simplified - actual logic is in setCompareList)
    return !compareList.includes(id) && compareList.length < MAX_PROGRAMS;
  }, [compareList]);

  const clearAll = useCallback(() => {
    setCompareList([]);
  }, []);

  const isSelected = useCallback(
    (id: string): boolean => {
      return compareList.includes(id);
    },
    [compareList]
  );

  const removeProgram = useCallback((id: string) => {
    setCompareList((prev) => prev.filter((pid) => pid !== id));
  }, []);

  return {
    compareList,
    toggleCompare,
    clearAll,
    isSelected,
    limitReached: compareList.length === MAX_PROGRAMS,
    removeProgram,
  };
}
