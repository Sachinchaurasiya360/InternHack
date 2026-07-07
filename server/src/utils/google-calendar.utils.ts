import { randomUUID } from "node:crypto";
import { OAuth2Client } from "google-auth-library";

let cachedClient: OAuth2Client | null = null;

/**
 * Lazily builds an OAuth2 client for a single dedicated Google account (not
 * end-user OAuth). The refresh token is issued once, out of band, for an
 * account with Calendar access, and reused here to mint access tokens.
 * Returns null when the calendar integration is not configured so callers
 * can fall back to manual meeting links instead of failing the request.
 */
function getCalendarClient(): OAuth2Client | null {
  if (cachedClient) return cachedClient;

  const clientId = process.env["GOOGLE_CALENDAR_CLIENT_ID"];
  const clientSecret = process.env["GOOGLE_CALENDAR_CLIENT_SECRET"];
  const refreshToken = process.env["GOOGLE_CALENDAR_REFRESH_TOKEN"];
  if (!clientId || !clientSecret || !refreshToken) return null;

  const client = new OAuth2Client(clientId, clientSecret);
  client.setCredentials({ refresh_token: refreshToken });
  cachedClient = client;
  return client;
}

export interface CreateMeetEventInput {
  summary: string;
  description?: string;
  startTime: Date;
  durationMinutes?: number;
  attendeeEmails: string[];
}

export interface CreateMeetEventResult {
  meetingLink: string;
  eventId: string;
}

/**
 * Creates a Google Calendar event with an auto-generated Meet link on the
 * configured calendar. Returns null (rather than throwing) when the
 * integration is not configured, so scheduling can still proceed with a
 * manually-supplied link as a fallback.
 */
export async function createGoogleMeetEvent(
  input: CreateMeetEventInput,
): Promise<CreateMeetEventResult | null> {
  const client = getCalendarClient();
  if (!client) return null;

  const { token } = await client.getAccessToken();
  if (!token) return null;

  const calendarId = process.env["GOOGLE_CALENDAR_ID"] || "primary";
  const endTime = new Date(input.startTime.getTime() + (input.durationMinutes ?? 60) * 60 * 1000);

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?conferenceDataVersion=1&sendUpdates=none`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        summary: input.summary,
        description: input.description,
        start: { dateTime: input.startTime.toISOString() },
        end: { dateTime: endTime.toISOString() },
        attendees: input.attendeeEmails.map((email) => ({ email })),
        conferenceData: {
          createRequest: {
            requestId: randomUUID(),
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
      }),
    },
  );

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Google Calendar API error ${res.status}: ${body}`);
  }

  const data = (await res.json()) as { hangoutLink?: string; id?: string };
  if (!data.hangoutLink || !data.id) return null;

  return { meetingLink: data.hangoutLink, eventId: data.id };
}
