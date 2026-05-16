import { useState, useRef, useEffect, useCallback } from "react";
import type { KeyboardEvent } from "react";
import { MapPin, ChevronDown, X, Search } from "lucide-react";

// ─── Popular job-search locations ────────────────────────────────────────────
export const POPULAR_LOCATIONS: string[] = [
  "Remote",
  "Worldwide",
  "United States",
  "United Kingdom",
  "India",
  "Canada",
  "Germany",
  "Australia",
  "Singapore",
  "Netherlands",
  "France",
  "Spain",
  "Brazil",
  "New York, NY",
  "San Francisco, CA",
  "London, UK",
  "Berlin, Germany",
  "Bengaluru, India",
  "Mumbai, India",
  "Toronto, Canada",
  "Sydney, Australia",
  "Amsterdam, Netherlands",
  "Paris, France",
  "Dublin, Ireland",
  "Dubai, UAE",
  "Tokyo, Japan",
  "São Paulo, Brazil",
  "Mexico City, Mexico",
  "Warsaw, Poland",
  "Lisbon, Portugal",
];

interface LocationDropdownProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
  placeholder?: string;
  className?: string;
  id?: string;
}

export function LocationDropdown({
  value,
  onChange,
  onSearch,
  placeholder = "Location",
  className = "",
  id = "location-dropdown",
}: LocationDropdownProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Debounce timer ref
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Filtered options: deduplicate and prioritise prefix matches
  const filtered = POPULAR_LOCATIONS.filter((loc) =>
    loc.toLowerCase().includes(query.trim().toLowerCase())
  ).slice(0, 10);

  // ── Sync external value → query when closed ────────────────────────────────
  useEffect(() => {
    if (!open) setQuery(value);
  }, [value, open]);

  // ── Close on outside click ─────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        commitSelection();
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Scroll active item into view ───────────────────────────────────────────
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const item = listRef.current.children[activeIndex] as HTMLElement;
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  const commitSelection = useCallback(() => {
    const trimmed = query.trim();
    // If typed text exactly matches an option (case-insensitive), normalise
    const match = POPULAR_LOCATIONS.find(
      (l) => l.toLowerCase() === trimmed.toLowerCase()
    );
    const final = match ?? trimmed;
    setQuery(final);
    onChange(final);
  }, [query, onChange]);

  const selectOption = (option: string) => {
    setQuery(option);
    onChange(option);
    setOpen(false);
    setActiveIndex(-1);
  };

  const clearValue = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuery("");
    onChange("");
    setActiveIndex(-1);
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setActiveIndex(-1);
    setOpen(true);

    // Debounced propagation to parent
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onChange(val);
    }, 300);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
        break;
      case "ArrowUp":
        setActiveIndex((prev) => Math.max(prev - 1, -1));
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && filtered[activeIndex]) {
          selectOption(filtered[activeIndex]);
        } else {
          commitSelection();
          setOpen(false);
          onSearch?.();
        }
        break;
      case "Escape":
        setOpen(false);
        setActiveIndex(-1);
        break;
      case "Tab":
        if (activeIndex >= 0 && filtered[activeIndex]) {
          selectOption(filtered[activeIndex]);
        } else {
          commitSelection();
        }
        setOpen(false);
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      role="combobox"
      aria-expanded={open}
      aria-haspopup="listbox"
      aria-owns={`${id}-listbox`}
    >
      {/* Trigger area */}
      <div
        className={`flex items-center gap-2 pl-3 pr-2 py-3 border rounded-xl text-sm cursor-text transition-all
          bg-white dark:bg-gray-800
          border-gray-300 dark:border-gray-600
          focus-within:ring-2 focus-within:ring-black/20 dark:focus-within:ring-white/20
          ${open ? "ring-2 ring-black/20 dark:ring-white/20" : ""}`}
        onClick={() => {
          setOpen(true);
          inputRef.current?.focus();
        }}
      >
        <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" />

        <input
          ref={inputRef}
          id={id}
          type="text"
          role="searchbox"
          aria-autocomplete="list"
          aria-controls={`${id}-listbox`}
          aria-activedescendant={
            activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined
          }
          value={query}
          onChange={handleInputChange}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 min-w-0 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 w-full sm:w-36"
          autoComplete="off"
          spellCheck={false}
        />

        <div className="flex items-center gap-1 shrink-0">
          {query && (
            <button
              type="button"
              onClick={clearValue}
              aria-label="Clear location"
              className="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown list */}
      {open && (
        <ul
          ref={listRef}
          id={`${id}-listbox`}
          role="listbox"
          aria-label="Location suggestions"
          className="absolute z-50 mt-1 w-full min-w-[220px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden max-h-64 overflow-y-auto"
        >
          {/* "All Locations" shortcut */}
          {query.length === 0 && (
            <li
              key="__all__"
              role="option"
              aria-selected={value === ""}
              onClick={() => selectOption("")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm cursor-pointer select-none transition-colors
                text-gray-500 dark:text-gray-400 italic
                hover:bg-gray-50 dark:hover:bg-gray-700/60`}
            >
              <Search className="w-3.5 h-3.5 shrink-0" />
              All Locations
            </li>
          )}

          {filtered.length > 0 ? (
            filtered.map((loc, idx) => (
              <li
                key={loc}
                id={`${id}-option-${idx}`}
                role="option"
                aria-selected={value === loc}
                onClick={() => selectOption(loc)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm cursor-pointer select-none transition-colors
                  ${
                    idx === activeIndex
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : value === loc
                      ? "bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/60"
                  }`}
              >
                <MapPin className="w-3.5 h-3.5 shrink-0 text-gray-400 dark:text-gray-500" />
                {loc}
                {value === loc && (
                  <span className="ml-auto text-xs text-green-500 dark:text-green-400">✓</span>
                )}
              </li>
            ))
          ) : (
            <li className="flex items-center gap-2 px-4 py-3 text-sm text-gray-400 dark:text-gray-500 italic select-none">
              <Search className="w-3.5 h-3.5" />
              No matches — press Enter to search "{query}"
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
