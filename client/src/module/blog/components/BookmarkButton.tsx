import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";

interface BookmarkButtonProps {
  postId: number;
}

export default function BookmarkButton({
  postId,
}: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bookmarkedBlogs");

    if (!saved) return;

    try {
      const parsed: number[] = JSON.parse(saved);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBookmarked(parsed.includes(postId));
    } catch {
      console.error("Failed to parse bookmarks");
    }
  }, [postId]);

  const toggleBookmark = () => {
    const saved = localStorage.getItem("bookmarkedBlogs");

    let bookmarks: number[] = [];

    try {
      bookmarks = saved ? JSON.parse(saved) : [];
    } catch {
      bookmarks = [];
    }

    let updated: number[];

    if (bookmarked) {
      updated = bookmarks.filter((id) => id !== postId);
    } else {
      updated = [...bookmarks, postId];
    }

    localStorage.setItem(
      "bookmarkedBlogs",
      JSON.stringify(updated)
    );

    setBookmarked(!bookmarked);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleBookmark}
      className={`inline-flex items-center justify-center rounded-xl border p-2 transition-all duration-200 ${
        bookmarked
          ? "border-lime-400 bg-lime-400 text-stone-950 shadow-md shadow-lime-400/20"
          : "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-500 hover:text-lime-600 dark:hover:text-lime-400"
      }`}
      aria-label={
        bookmarked ? "Remove bookmark" : "Add bookmark"
      }
    >
      <Bookmark
        className={`h-4 w-4 ${
          bookmarked ? "fill-current" : ""
        }`}
      />
    </motion.button>
  );
}