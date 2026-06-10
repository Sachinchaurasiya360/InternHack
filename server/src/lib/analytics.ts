export function groupByField<T extends Record<string, unknown>>(
  items: T[],
  field: keyof T,
): Record<string, T[]> {
  const map: Record<string, T[]> = {};
  for (const item of items) {
    const key = String(item[field]);
    if (!map[key]) map[key] = [];
    map[key].push(item);
  }
  return map;
}

export function countByField<T extends Record<string, unknown>>(
  items: T[],
  field: keyof T,
): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const item of items) {
    const key = String(item[field]);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}

export function toPercentage(count: number, total: number): number {
  if (total <= 0) return 0;
  return (count / total) * 100;
}
