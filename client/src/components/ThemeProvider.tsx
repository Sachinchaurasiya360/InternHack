import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { useThemeStore } from "../lib/theme.store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);
  const prevPathname = useRef(pathname);

  // Set default theme on route change only (not on manual toggle)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      const routeTheme = pathname === "/" ? "dark" : "light";
      setTheme(routeTheme);
    }
  }, [pathname, setTheme]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return <>{children}</>;
}
