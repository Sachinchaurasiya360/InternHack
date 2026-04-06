// Shared form styling tokens. Previously duplicated across ATS and Open
// Source forms (and inlined inside RepoDiscoveryPage). Centralising here
// keeps focus ring + border + dark mode styles consistent across modules.

type AccentColor = "violet" | "purple";

const ACCENT_FOCUS: Record<AccentColor, string> = {
  violet: "focus:ring-violet-500/20 focus:border-violet-400",
  purple: "focus:ring-purple-500/20 focus:border-purple-300",
};

/**
 * Returns the Tailwind class string for a form <input>/<textarea>/<select>.
 * Pass the module's accent so ATS (violet) and Open Source (purple) stay
 * visually distinct without maintaining two separate constants.
 */
export function getInputCls(accent: AccentColor = "violet"): string {
  return [
    "w-full px-3.5 py-2.5 text-sm",
    "border border-gray-200 dark:border-gray-700 rounded-xl",
    "bg-gray-50/50 dark:bg-gray-800/50",
    "text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500",
    "focus:outline-none focus:ring-2 transition-all",
    ACCENT_FOCUS[accent],
  ].join(" ");
}

export const labelCls = "block text-xs font-medium text-gray-500 dark:text-gray-500 mb-1";
