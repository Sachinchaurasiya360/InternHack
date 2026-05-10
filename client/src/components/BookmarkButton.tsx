import React from "react";
import { motion } from "framer-motion";
import { Bookmark as BookmarkIcon } from "lucide-react";
import { useBookmarks, BookmarkType } from "../hooks/useBookmarks";
import { cn } from "../lib/utils";

interface BookmarkButtonProps {
  entityId: string;
  entityType: BookmarkType;
  title?: string;
  url?: string;
  data?: any;
  className?: string;
  iconClassName?: string;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  entityId,
  entityType,
  title,
  url,
  data,
  className,
  iconClassName,
}) => {
  const { isBookmarked, toggleBookmark, isToggling } = useBookmarks();

  const bookmarked = isBookmarked(entityId, entityType);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark({ entityId, entityType, title, url, data });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      disabled={isToggling}
      className={cn(
        "p-2 rounded-full transition-colors flex items-center justify-center",
        bookmarked
          ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
          : "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700",
        className
      )}
      aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      <BookmarkIcon
        className={cn("w-5 h-5 transition-all", iconClassName)}
        fill={bookmarked ? "currentColor" : "none"}
      />
    </motion.button>
  );
};
