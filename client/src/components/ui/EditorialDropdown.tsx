import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DropdownOption {
  value: string;
  label: string;
  count?: number;
}

interface EditorialDropdownProps {
  icon: ReactNode;
  label: string;
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  className?: string;
  /** Adds a search box to the panel for filtering long option lists. */
  searchable?: boolean;
  searchPlaceholder?: string;
}

/** Click-driven select styled to match the app's editorial (lime/stone) chrome. */
export function EditorialDropdown({
  icon,
  label,
  value,
  options,
  onChange,
  className = "",
  searchable = false,
  searchPlaceholder,
}: EditorialDropdownProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const current = options.find((o) => o.value === value);
  const visibleOptions = searchable && query
    ? options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()))
    : options;

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 h-10 px-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:border-stone-500 dark:hover:border-white/30 transition-colors cursor-pointer"
      >
        <span className="text-stone-400">{icon}</span>
        <span>{label}</span>
        <span className="text-stone-900 dark:text-stone-50 font-bold normal-case tracking-normal truncate max-w-28">
          {current?.label ?? "All"}
        </span>
        <ChevronDown className={cn("w-3.5 h-3.5 opacity-60 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute left-0 top-full z-20 mt-1 min-w-55 max-h-80 flex flex-col overflow-hidden rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 shadow-xl"
        >
          {searchable && (
            <div className="sticky top-0 z-10 border-b border-stone-100 dark:border-white/5 bg-white dark:bg-stone-900 p-2 shrink-0">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-400" aria-hidden="true" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchPlaceholder ?? `Search ${label}...`}
                  autoFocus
                  className="w-full rounded bg-stone-100 dark:bg-white/5 py-1.5 pl-7 pr-7 text-xs outline-none focus:ring-1 focus:ring-lime-400"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                  >
                    <X className="w-3 h-3" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          )}
          <div className="overflow-y-auto p-1">
          {searchable && visibleOptions.length === 0 ? (
            <div className="px-3 py-4 text-center">
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">No matches found</p>
            </div>
          ) : visibleOptions.map((opt) => {
            const active = opt.value === value;
            return (
              <button
                key={opt.value || "__all"}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-sm transition-colors",
                  active
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 font-medium"
                    : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-50"
                )}
              >
                <span className="truncate">{opt.label}</span>
                {typeof opt.count === "number" && (
                  <span
                    className={cn(
                      "text-[10px] font-mono tabular-nums shrink-0",
                      active ? "text-stone-300 dark:text-stone-500" : "text-stone-400"
                    )}
                  >
                    {opt.count}
                  </span>
                )}
              </button>
            );
          })}
          </div>
        </div>
      )}
    </div>
  );
}
