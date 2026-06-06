interface BlogSkeletonProps {
  count?: number;
}

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
      {/* Image */}
      <div className="h-48 w-full bg-stone-200 dark:bg-stone-800" />

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="h-5 w-24 rounded-md bg-stone-200 dark:bg-stone-800 mb-4" />

        {/* Title */}
        <div className="space-y-2 mb-4">
          <div className="h-4 w-full rounded bg-stone-200 dark:bg-stone-800" />
          <div className="h-4 w-5/6 rounded bg-stone-200 dark:bg-stone-800" />
        </div>

        {/* Excerpt */}
        <div className="space-y-2 mb-6">
          <div className="h-3 w-full rounded bg-stone-200 dark:bg-stone-800" />
          <div className="h-3 w-full rounded bg-stone-200 dark:bg-stone-800" />
          <div className="h-3 w-4/5 rounded bg-stone-200 dark:bg-stone-800" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-100 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-stone-200 dark:bg-stone-800" />
            <div className="h-3 w-20 rounded bg-stone-200 dark:bg-stone-800" />
          </div>

          <div className="flex items-center gap-3">
            <div className="h-3 w-12 rounded bg-stone-200 dark:bg-stone-800" />
            <div className="h-3 w-10 rounded bg-stone-200 dark:bg-stone-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogSkeleton({ count = 1 }: BlogSkeletonProps) {
  if (count <= 1) return <SkeletonCard />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
