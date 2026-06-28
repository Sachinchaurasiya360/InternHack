import { useState, useEffect, useCallback } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const next = value instanceof Function ? value(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(next));
        } catch {
          /* quota exceeded or private mode */
        }
        return next;
      });
    },
    [key],
  );

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* noop */
    }
    setStoredValue(initialValue);
  }, [key, initialValue]);

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key !== key) return;
      if (e.newValue === null) {
        // Key was removed in another tab; mirror the reset locally.
        setStoredValue(initialValue);
        return;
      }
      try {
        setStoredValue(JSON.parse(e.newValue) as T);
      } catch {
        /* noop */
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}
