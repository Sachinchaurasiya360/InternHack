import { useEffect, useLayoutEffect, useRef, type RefObject } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

export function useOnClickOutside<T extends HTMLElement>(
  handler: Handler,
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  // Keep the latest handler in a ref so the listeners attach once and an
  // inline handler does not force a re-subscribe on every render.
  const handlerRef = useRef(handler);
  useLayoutEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;
      handlerRef.current(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);

  return ref;
}
