import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "bookmarkedBlogs";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  useEffect(() => {
    try {
      const stored =
        localStorage.getItem(STORAGE_KEY);

      if (!stored) return;

      const raw: unknown = JSON.parse(stored);
      const parsed = Array.isArray(raw)
        ? raw.filter((x): x is number => typeof x === "number")
        : [];

      setBookmarks(parsed);
    } catch (error) {
      console.error(
        "Failed to load bookmarks:",
        error
      );
    }
  }, []);

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