import { useState, useCallback } from "react";
import type { OpenSourceRepo } from "../../../lib/types";

const STORAGE_KEY = "oss_recently_viewed";
const MAX_RECENTLY_VIEWED = 10;

export function useRecentlyViewedRepos() {
  const [recentlyViewed, setRecentlyViewed] = useState<OpenSourceRepo[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const addRepo = useCallback((repo: OpenSourceRepo) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((r) => r.id !== repo.id);
      const wasEvicted = filtered.length >= MAX_RECENTLY_VIEWED;
      const newRecentlyViewed = [repo, ...filtered].slice(0, MAX_RECENTLY_VIEWED);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newRecentlyViewed));
      } catch (error) {
        console.error("Failed to save recently viewed repos to localStorage", error);
      }
      if (wasEvicted) {
        import("../../../components/ui/toast").then((m) =>
          m.default.info("Oldest repo removed from recently viewed")
        );
      }
      return newRecentlyViewed;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setRecentlyViewed([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Failed to clear recently viewed repos", error);
    }
  }, []);

  return { recentlyViewed, addRepo, clearHistory };
}
