export function generateIcs(event: {
  title: string;
  description?: string;
  location?: string;
  url?: string;
  startDate: Date;
  endDate?: Date;
  organizer?: string;
}): string {
  const escape = (text: string) =>
    text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const now = new Date();
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//InternHack//OSS Programs//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${now.getTime()}@internhack`,
    `DTSTAMP:${fmt(now)}`,
    `DTSTART:${fmt(event.startDate)}`,
    event.endDate ? `DTEND:${fmt(event.endDate)}` : "",
    `SUMMARY:${escape(event.title)}`,
    event.description ? `DESCRIPTION:${escape(event.description)}` : "",
    event.location ? `LOCATION:${escape(event.location)}` : "",
    event.url ? `URL:${escape(event.url)}` : "",
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-P7D",
    "ACTION:DISPLAY",
    `DESCRIPTION:Reminder: ${escape(event.title)}`,
    "END:VALARM",
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    `DESCRIPTION:Reminder: ${escape(event.title)}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.filter(Boolean).join("\r\n");
}

export function programToIcsEvents(program: {
  name: string;
  short: string;
  description: string;
  website?: string | null;
  applicationStart?: Date | null;
  applicationDeadline?: Date | null;
  resultsDate?: Date | null;
  programStart?: Date | null;
  programEnd?: Date | null;
}): { filename: string; content: string }[] {
  const events: { filename: string; content: string }[] = [];

  if (program.applicationStart) {
    events.push({
      filename: `${program.short}-application-open.ics`,
      content: generateIcs({
        title: `${program.name} — Applications Open`,
        description: `Applications for ${program.name} open. ${program.description}`,
        url: program.website ?? undefined,
        startDate: program.applicationStart,
      }),
    });
  }

  if (program.applicationDeadline) {
    events.push({
      filename: `${program.short}-application-deadline.ics`,
      content: generateIcs({
        title: `${program.name} — Application Deadline`,
        description: `Last day to apply for ${program.name}. ${program.description}`,
        url: program.website ?? undefined,
        startDate: program.applicationDeadline,
      }),
    });
  }

  if (program.resultsDate) {
    events.push({
      filename: `${program.short}-results.ics`,
      content: generateIcs({
        title: `${program.name} — Results Announced`,
        description: `${program.name} results are announced.`,
        url: program.website ?? undefined,
        startDate: program.resultsDate,
      }),
    });
  }

  if (program.programStart && program.programEnd) {
    events.push({
      filename: `${program.short}-program-dates.ics`,
      content: generateIcs({
        title: `${program.name} — Program Period`,
        description: `${program.name} official program period. ${program.description}`,
        url: program.website ?? undefined,
        startDate: program.programStart,
        endDate: program.programEnd,
      }),
    });
  }

  return events;
}
