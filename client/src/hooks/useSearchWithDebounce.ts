import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useDebounce } from "./useDebounce";

interface UseSearchWithDebounceOptions {
  /** URL search-param key to read from and write to. When omitted, URL sync is disabled. */
  paramName?: string;
  /** Debounce delay in ms. Defaults to 300. */
  delay?: number;
  /** Additional param keys to delete when the query changes (e.g. "page"). */
  resetParams?: string[];
}

interface UseSearchWithDebounceReturn {
  /** The raw (un-debounced) input value — bind this to your `<input value={...}/>`. */
  inputValue: string;
  /** Update the input value (call this from onChange). */
  setInputValue: (v: string) => void;
  /** The debounced value — use this in query keys and filter logic. */
  debouncedValue: string;
}

/**
 * useSearchWithDebounce — encapsulates the repeated pattern of:
 *   1. Local input state
 *   2. Debounced derived value (via useDebounce)
 *   3. Optional URL search-param sync with page reset
 *
 * Usage (without URL sync):
 *   const { inputValue, setInputValue, debouncedValue } =
 *     useSearchWithDebounce({ delay: 200 });
 *
 * Usage (with URL sync):
 *   const { inputValue, setInputValue, debouncedValue } =
 *     useSearchWithDebounce({ paramName: 'search', resetParams: ['page'] });
 */
export function useSearchWithDebounce({
  paramName,
  delay = 300,
  resetParams = [],
}: UseSearchWithDebounceOptions = {}): UseSearchWithDebounceReturn {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = paramName ? searchParams.get(paramName) ?? "" : "";

  const [inputValue, setInputValue] = useState<string>(() => paramValue);

  const debouncedValue = useDebounce(inputValue, delay);

  useEffect(() => {
    if (!paramName) return;
    if (paramValue !== inputValue) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInputValue(paramValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramName, paramValue]);

  useEffect(() => {
    if (!paramName) return;

    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (debouncedValue) {
          next.set(paramName, debouncedValue);
        } else {
          next.delete(paramName);
        }
        for (const key of resetParams) {
          next.delete(key);
        }
        return next.toString() === prev.toString() ? prev : next;
      },
      { replace: true },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, paramName, resetParams]);

  return { inputValue, setInputValue, debouncedValue };
}
