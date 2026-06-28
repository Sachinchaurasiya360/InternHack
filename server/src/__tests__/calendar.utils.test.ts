import { describe, it, expect } from "vitest";
import { generateICS } from "../utils/calendar.utils.js";

describe("calendar.utils", () => {
  describe("generateICS", () => {
    it("should generate a valid ICS calendar event", () => {
      const start = new Date("2024-06-25T10:00:00Z");
      const end = new Date("2024-06-25T11:00:00Z");

      const ics = generateICS({
        uid: "test-event-123",
        title: "Team Meeting",
        description: "Weekly team sync",
        start,
        end,
      });

      expect(ics).toContain("BEGIN:VCALENDAR");
      expect(ics).toContain("VERSION:2.0");
      expect(ics).toContain("PRODID:-//InternHack//Calendar//EN");
      expect(ics).toContain("BEGIN:VEVENT");
      expect(ics).toContain("UID:test-event-123@internhack.xyz");
      expect(ics).toContain("SUMMARY:Team Meeting");
      expect(ics).toContain("DESCRIPTION:Weekly team sync");
      expect(ics).toContain("END:VEVENT");
      expect(ics).toContain("END:VCALENDAR");
    });

    it("should format dates correctly in ICS format", () => {
      const start = new Date("2024-06-25T10:00:00.000Z");
      const end = new Date("2024-06-25T11:00:00.000Z");

      const ics = generateICS({
        uid: "date-test",
        title: "Date Test",
        description: "Testing date format",
        start,
        end,
      });

      // ICS format should be: YYYYMMDDTHHMMSSZ (no hyphens, colons, or milliseconds)
      expect(ics).toContain("DTSTART:20240625T100000Z");
      expect(ics).toContain("DTEND:20240625T110000Z");
    });

    it("should include location when provided", () => {
      const start = new Date("2024-06-25T10:00:00Z");
      const end = new Date("2024-06-25T11:00:00Z");

      const ics = generateICS({
        uid: "location-test",
        title: "Conference",
        description: "Annual conference",
        start,
        end,
        location: "Conference Room A",
      });

      expect(ics).toContain("LOCATION:Conference Room A");
    });

    it("should not include location line when not provided", () => {
      const start = new Date("2024-06-25T10:00:00Z");
      const end = new Date("2024-06-25T11:00:00Z");

      const ics = generateICS({
        uid: "no-location-test",
        title: "Virtual Meeting",
        description: "Online meeting",
        start,
        end,
      });

      expect(ics).not.toContain("LOCATION:");
    });

    it("should escape special characters in title", () => {
      const start = new Date("2024-06-25T10:00:00Z");
      const end = new Date("2024-06-25T11:00:00Z");

      const ics = generateICS({
        uid: "escape-test",
        title: "Meeting; Important, Review\\Update",
        description: "Test description",
        start,
        end,
      });

      // Semicolons, commas, and backslashes should be escaped
      expect(ics).toContain("SUMMARY:Meeting\\; Important\\, Review\\\\Update");
    });

    it("should escape special characters in description", () => {
      const start = new Date("2024-06-25T10:00:00Z");
      const end = new Date("2024-06-25T11:00:00Z");

      const ics = generateICS({
        uid: "escape-desc-test",
        title: "Meeting",
        description: "Line 1\nLine 2; with semicolon, and comma\\backslash",
        start,
        end,
      });

      // Newlines, semicolons, commas, and backslashes should be escaped
      expect(ics).toContain(
        "DESCRIPTION:Line 1\\nLine 2\\; with semicolon\\, and comma\\\\backslash",
      );
    });

    it("should escape special characters in location", () => {
      const start = new Date("2024-06-25T10:00:00Z");
      const end = new Date("2024-06-25T11:00:00Z");

      const ics = generateICS({
        uid: "escape-location-test",
        title: "Meeting",
        description: "Test",
        start,
        end,
        location: "Room A; Building B, Floor 3\\Wing C",
      });

      expect(ics).toContain(
        "LOCATION:Room A\\; Building B\\, Floor 3\\\\Wing C",
      );
    });

    it("should use CRLF line endings", () => {
      const start = new Date("2024-06-25T10:00:00Z");
      const end = new Date("2024-06-25T11:00:00Z");

      const ics = generateICS({
        uid: "crlf-test",
        title: "Test",
        description: "Test",
        start,
        end,
      });

      // ICS format requires CRLF (\r\n) line endings
      expect(ics).toContain("\r\n");
      expect(ics.split("\r\n").length).toBeGreaterThan(1);
    });

    it("should include DTSTAMP with current timestamp", () => {
      const start = new Date("2024-06-25T10:00:00Z");
      const end = new Date("2024-06-25T11:00:00Z");

      const ics = generateICS({
        uid: "timestamp-test",
        title: "Test",
        description: "Test",
        start,
        end,
      });

      // DTSTAMP should be present and in correct format
      expect(ics).toMatch(/DTSTAMP:\d{8}T\d{6}Z/);
    });

    it("should handle events spanning multiple days", () => {
      const start = new Date("2024-06-25T10:00:00Z");
      const end = new Date("2024-06-27T18:00:00Z");

      const ics = generateICS({
        uid: "multi-day-test",
        title: "Conference",
        description: "3-day conference",
        start,
        end,
      });

      expect(ics).toContain("DTSTART:20240625T100000Z");
      expect(ics).toContain("DTEND:20240627T180000Z");
    });

    it("should handle empty strings in title and description", () => {
      const start = new Date("2024-06-25T10:00:00Z");
      const end = new Date("2024-06-25T11:00:00Z");

      const ics = generateICS({
        uid: "empty-test",
        title: "",
        description: "",
        start,
        end,
      });

      expect(ics).toContain("SUMMARY:");
      expect(ics).toContain("DESCRIPTION:");
      // Empty location should not be included
      expect(ics).not.toContain("LOCATION:");
    });

    it("should generate unique UIDs with @internhack.xyz domain", () => {
      const start = new Date("2024-06-25T10:00:00Z");
      const end = new Date("2024-06-25T11:00:00Z");

      const ics1 = generateICS({
        uid: "event-1",
        title: "Event 1",
        description: "First event",
        start,
        end,
      });

      const ics2 = generateICS({
        uid: "event-2",
        title: "Event 2",
        description: "Second event",
        start,
        end,
      });

      expect(ics1).toContain("UID:event-1@internhack.xyz");
      expect(ics2).toContain("UID:event-2@internhack.xyz");
      expect(ics1).not.toContain("UID:event-2@internhack.xyz");
    });
  });
});

// Made with Bob
