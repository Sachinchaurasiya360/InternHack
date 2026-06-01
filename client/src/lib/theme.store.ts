import { create } from "zustand";

type Theme = "light" | "dark";
type ThemeTransitionOrigin = { x: number; y: number };

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    finished: Promise<void>;
  };
};

interface ThemeState {
  theme: Theme;
  toggleTheme: (origin?: ThemeTransitionOrigin) => void;
  setTheme: (theme: Theme, origin?: ThemeTransitionOrigin) => void;
}

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    return "light";
  }

  return "light";
}

function persistTheme(theme: Theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Theme persistence is progressive enhancement; keep toggling if storage is unavailable.
  }
}

export function applyThemeToDocument(theme: Theme) {
  if (typeof document === "undefined") return;

  document.documentElement.classList.toggle("dark", theme === "dark");
}

function prepareThemeTransition(origin?: ThemeTransitionOrigin) {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return undefined;
  }

  const root = document.documentElement;
  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? window.innerHeight / 2;
  const radius = Math.ceil(
    Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y)),
  );

  root.style.setProperty("--theme-transition-x", `${x}px`);
  root.style.setProperty("--theme-transition-y", `${y}px`);
  root.style.setProperty("--theme-transition-radius", `${radius}px`);
  root.setAttribute("data-theme-transition", "running");

  return () => {
    root.removeAttribute("data-theme-transition");
    root.style.removeProperty("--theme-transition-x");
    root.style.removeProperty("--theme-transition-y");
    root.style.removeProperty("--theme-transition-radius");
  };
}

function runThemeTransition(updateTheme: () => void, origin?: ThemeTransitionOrigin) {
  if (typeof document === "undefined" || typeof window === "undefined") {
    updateTheme();
    return;
  }

  const viewTransition = (document as ViewTransitionDocument).startViewTransition;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!viewTransition || prefersReducedMotion) {
    updateTheme();
    return;
  }

  let cleanup: () => void = () => undefined;

  try {
    cleanup = prepareThemeTransition(origin) ?? cleanup;
    const transition = viewTransition.call(document, updateTheme);
    void transition.finished.then(cleanup, cleanup);
  } catch {
    cleanup();
    updateTheme();
  }
}

const initialTheme = getInitialTheme();
applyThemeToDocument(initialTheme);

export const useThemeStore = create<ThemeState>((set, get) => {
  const commitTheme = (theme: Theme) => {
    persistTheme(theme);
    applyThemeToDocument(theme);
    set({ theme });
  };

  return {
    theme: initialTheme,

    toggleTheme: (origin) => {
      const next = get().theme === "light" ? "dark" : "light";
      runThemeTransition(() => commitTheme(next), origin);
    },

    setTheme: (theme, origin) => {
      if (get().theme === theme) {
        commitTheme(theme);
        return;
      }

      runThemeTransition(() => commitTheme(theme), origin);
    },
  };
});
