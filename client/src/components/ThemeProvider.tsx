import { useEffect } from "react";
import { useLocation } from "react-router";
import { useThemeStore } from "../lib/theme.store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  useEffect(() => {
    const routeTheme = pathname === "/" ? "dark" : "light";
    if (theme !== routeTheme) {
      setTheme(routeTheme);
    }
  }, [pathname, setTheme, theme]);

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
