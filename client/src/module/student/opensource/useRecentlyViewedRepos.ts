import { useState, useCallback } from "react";
import type { OpenSourceRepo } from "../../../lib/types";

const STORAGE_KEY = "oss_recently_viewed";
const MAX_RECENTLY_VIEWED = 10;

interface UseRecentlyViewedReposOptions {
  onRepoRemoved?: (repo: OpenSourceRepo) => void;
}

export function useRecentlyViewedRepos(options: UseRecentlyViewedReposOptions = {}) {
  const { onRepoRemoved } = options;
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
      const dedupedRepos = [repo, ...prev.filter((r) => r.id !== repo.id)];
      const removedRepo = dedupedRepos[MAX_RECENTLY_VIEWED];
      const newRecentlyViewed = dedupedRepos.slice(0, MAX_RECENTLY_VIEWED);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newRecentlyViewed));
      } catch (error) {
        console.error("Failed to save recently viewed repos to localStorage", error);
      }
      if (removedRepo) {
        onRepoRemoved?.(removedRepo);
      }
      return newRecentlyViewed;
    });
  }, [onRepoRemoved]);

  const clearHistory = useCallback(() => {
    setRecentlyViewed([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Failed to clear recently viewed repos from localStorage", error);
    }
  }, []);

  return { recentlyViewed, addRepo, clearHistory };
}
