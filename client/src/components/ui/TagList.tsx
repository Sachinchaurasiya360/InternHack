
interface TagListProps {
  tags?: string[];
  max?: number;
  tagClassName?: string;
}

export function TagList({ tags, max = 3, tagClassName }: TagListProps) {
  if (!tags || tags.length === 0) return null;

  const visible = tags.slice(0, max);
  const overflow = tags.length - max;
  const defaultTagClass = "px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded text-xs font-mono uppercase tracking-wider";
  const finalTagClass = tagClassName || defaultTagClass;

  return (
    <div className="flex flex-wrap gap-1 mb-4">
      {visible.map((tag) => (
        <span key={tag} className={finalTagClass}>
          {tag}
        </span>
      ))}
      {overflow > 0 && (
        <span className={finalTagClass}>
          +{overflow}
        </span>
      )}
    </div>
  );
}