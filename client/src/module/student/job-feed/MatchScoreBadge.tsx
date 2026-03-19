interface Props {
  score: number;
}

export function MatchScoreBadge({ score }: Props) {
  const color =
    score >= 80
      ? "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/20"
      : score >= 60
        ? "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-900/20"
        : "text-gray-600 bg-gray-50 dark:text-gray-400 dark:bg-gray-800";

  return (
    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${color}`}>
      {score}% Match
    </span>
  );
}
