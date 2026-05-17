import { FileSearch, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title = "No articles found",
  description = "Try adjusting your search or category filters to discover more content.",
  actionLabel = "Reset Filters",
  onAction,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-stone-300 dark:border-white/10 bg-white dark:bg-stone-900 px-6 py-16 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-stone-100 dark:bg-stone-800">
        <FileSearch className="h-8 w-8 text-stone-500 dark:text-stone-400" />
      </div>

      <h3 className="mt-6 text-xl font-bold text-stone-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-500 dark:text-gray-400">
        {description}
      </p>

      {onAction && (
        <button
          onClick={onAction}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          <RefreshCcw className="h-4 w-4" />
          {actionLabel}
        </button>
      )}
    </motion.div>
  );
}