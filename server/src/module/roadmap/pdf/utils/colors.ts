export const LIGHT_COLORS = {
  pageBg: "#ffffff",
  coverBand: "#0a0a0a",
  ink: "#0a0a0a",
  body: "#27272a",
  mute: "#52525b",
  faint: "#a1a1aa",
  faintest: "#d4d4d8",
  accent: "#4d7c0f",
  accentSoft: "#84cc16",
  accentBg: "#f7fee7",
  accentBorder: "#d9f99d",
  amber: "#b45309",
  amberBg: "#fffbeb",
  amberBorder: "#fde68a",
  bg: "#fafafa",
  border: "#e4e4e7",
};

export const DARK_COLORS = {
  pageBg: "#111111",
  coverBand: "#000000",
  ink: "#f4f4f5",
  body: "#d4d4d8",
  mute: "#a1a1aa",
  faint: "#71717a",
  faintest: "#3f3f46",
  accent: "#a3e635",
  accentSoft: "#bef264",
  accentBg: "#0f1e02",
  accentBorder: "#1a3a05",
  amber: "#fbbf24",
  amberBg: "#1a1100",
  amberBorder: "#3d2000",
  bg: "#1c1c1e",
  border: "#3f3f46",
};

export type ColorsType = typeof LIGHT_COLORS;

export function getColors(theme?: string): ColorsType {
  return theme === "dark" ? DARK_COLORS : LIGHT_COLORS;
}
