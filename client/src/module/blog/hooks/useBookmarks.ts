import { useMemo, useState } from "react";

const STORAGE_KEY = "bookmarkedBlogs";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return [];
      const raw: unknown = JSON.parse(stored);
      return Array.isArray(raw)
        ? raw.filter((x): x is number => typeof x === "number")
        : [];
    } catch {
      return [];
    }
  });

  const saveBookmarks = (
    updated: number[]
  ) => {
    setBookmarks(updated);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );
  };

  const addBookmark = (postId: number) => {
    if (bookmarks.includes(postId)) return;

    saveBookmarks([...bookmarks, postId]);
  };

  const removeBookmark = (
    postId: number
  ) => {
    saveBookmarks(
      bookmarks.filter((id) => id !== postId)
    );
  };

  const toggleBookmark = (
    postId: number
  ) => {
    if (bookmarks.includes(postId)) {
      removeBookmark(postId);
    } else {
      addBookmark(postId);
    }
  };

  const isBookmarked = (
    postId: number
  ) => bookmarks.includes(postId);

  const bookmarkedCount = useMemo(
    () => bookmarks.length,
    [bookmarks]
  );

  return {
    bookmarks,
    bookmarkedCount,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    isBookmarked,
  };
}