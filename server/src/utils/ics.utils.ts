/**
 * Bundles multiple events into a single .ics file (one VCALENDAR, many
 * VEVENTs) so a whole calendar view can be exported/subscribed to in one
 * download, instead of one file per deadline.
 */
export function generateBundledIcs(
  calendarName: string,
  events: {
    uid: string;
    title: string;
    description?: string;
    url?: string;
    startDate: Date;
  }[],
): string {
  const escape = (text: string) =>
    text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const now = new Date();
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//InternHack//Opportunity Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${escape(calendarName)}`,
    ...events.flatMap((event) => [
      "BEGIN:VEVENT",
      `UID:${escape(event.uid)}@internhack`,
      `DTSTAMP:${fmt(now)}`,
      `DTSTART;VALUE=DATE:${fmt(event.startDate).slice(0, 8)}`,
      `SUMMARY:${escape(event.title)}`,
      event.description ? `DESCRIPTION:${escape(event.description)}` : "",
      event.url ? `URL:${escape(event.url)}` : "",
      "STATUS:CONFIRMED",
      "SEQUENCE:0",
      "BEGIN:VALARM",
      "TRIGGER:-P1D",
      "ACTION:DISPLAY",
      `DESCRIPTION:Reminder: ${escape(event.title)}`,
      "END:VALARM",
      "END:VEVENT",
    ].filter(Boolean)),
    "END:VCALENDAR",
  ];

  return lines.filter(Boolean).join("\r\n");
}
