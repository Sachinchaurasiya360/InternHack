import { useCallback, useRef, useEffect } from "react";
import { useSearchParams } from "react-router";

export function useClearFilters(filterResets: Array<() => void>) {
  const [, setSearchParams] = useSearchParams();

  // Use a ref to store the latest filterResets to avoid dependency changes and lint issues
  const resetsRef = useRef(filterResets);
  useEffect(() => {
    resetsRef.current = filterResets;
  }, [filterResets]);

  return useCallback(() => {
    resetsRef.current.forEach((reset) => reset());
    setSearchParams(new URLSearchParams(), { replace: true });
  }, [setSearchParams]);
}
