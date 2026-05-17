export default function BlogSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      {/* Image */}
      <div className="h-48 w-full bg-gray-200 dark:bg-gray-800" />

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="h-5 w-24 rounded-md bg-gray-200 dark:bg-gray-800 mb-4" />

        {/* Title */}
        <div className="space-y-2 mb-4">
          <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-800" />
        </div>

        {/* Excerpt */}
        <div className="space-y-2 mb-6">
          <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-3 w-4/5 rounded bg-gray-200 dark:bg-gray-800" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800" />
            <div className="h-3 w-20 rounded bg-gray-200 dark:bg-gray-800" />
          </div>

          <div className="flex items-center gap-3">
            <div className="h-3 w-12 rounded bg-gray-200 dark:bg-gray-800" />
            <div className="h-3 w-10 rounded bg-gray-200 dark:bg-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}