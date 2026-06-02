import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * ScrollToTop — scrolls the window to the top on every route change.
 * Place this once inside your Router context (already done in App.tsx).
 * It renders nothing — it only runs the side-effect.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
