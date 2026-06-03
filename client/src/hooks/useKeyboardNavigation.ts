import { useEffect } from "react";
import { useNavigate } from "react-router";

interface UseKeyboardNavigationProps {
  prevPath?: string | null;
  nextPath?: string | null;
}

export function useKeyboardNavigation({ prevPath, nextPath }: UseKeyboardNavigationProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      // Ignore if typing in input OR if a modifier key (Ctrl/Alt/Meta/Shift) is held down
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable ||
        e.ctrlKey ||
        e.altKey ||
        e.metaKey ||
        e.shiftKey
      ) {
        return;
      }

      if (e.key === "ArrowRight" || e.key.toLowerCase() === "l") {
        if (nextPath) navigate(nextPath);
      } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "h") {
        if (prevPath) navigate(prevPath);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, prevPath, nextPath]);
}