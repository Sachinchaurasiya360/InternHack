export function labelize(value: string): string {
  return value.replace(/_/g, " ").toLowerCase();
}

export function formatLabel(value: string): string {
  return value
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function initials(first?: string, last?: string): string {
  return `${first?.[0] ?? ""}${last?.[0] ?? ""}`.toUpperCase() || "?";
}

export const labelClass =
  "block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5";
