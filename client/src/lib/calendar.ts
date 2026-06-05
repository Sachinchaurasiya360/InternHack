export function googleCalendarUrl({ title, details, start, end, location }: {
  title: string;
  details: string;
  start: Date;
  end: Date;
  location?: string;
}): string {
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${fmt(start)}/${fmt(end)}`,
    details,
    ...(location && { location }),
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:3000/api";

export async function downloadICS(path: string, filename: string = "event.ics") {
  // Use fetch with credentials so the auth cookie is included
  const url = path.startsWith("http") ? path : `${API_BASE}${path}`;
  const response = await fetch(url, { credentials: "include" });
  if (!response.ok) throw new Error(`Failed to download ICS: ${response.statusText}`);
  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = objectUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(objectUrl);
}

