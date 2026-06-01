import { useState, useEffect, useCallback } from "react";
import type { OpenSourceRepo } from "../../../lib/types";

const STORAGE_KEY = "oss_recently_viewed";
const MAX_RECENTLY_VIEWED = 5;

export function useRecentlyViewedRepos() {
  const [recentlyViewed, setRecentlyViewed] = useState<OpenSourceRepo[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setRecentlyViewed(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to read recently viewed repos from localStorage", error);
    }
  }, []);

  const addRepo = useCallback((repo: OpenSourceRepo) => {
    setRecentlyViewed((prev) => {
      const newRecentlyViewed = [repo, ...prev.filter((r) => r.id !== repo.id)].slice(0, MAX_RECENTLY_VIEWED);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newRecentlyViewed));
      } catch (error) {
        console.error("Failed to save recently viewed repos to localStorage", error);
      }
      return newRecentlyViewed;
    });
  }, []);

  return { recentlyViewed, addRepo };
}
