import { Router } from "express";
import { leetcodeCalendarSchema, leetcodeCalendarQuerySchema } from "./leetcode.validation.js";

const router = Router();

const LEETCODE_GQL = "https://leetcode.com/graphql";
const CALENDAR_QUERY = `
  query userProfileCalendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        activeYears
        streak
        totalActiveDays
        submissionCalendar
      }
    }
  }
`;

interface CacheEntry {
  data: unknown;
  expiresAt: number;
}

const cache = new Map<string, CacheEntry>();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

function getLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

// GET /api/leetcode/calendar/:username
router.get("/calendar/:username", async (req, res) => {
  try {
    const paramsParsed = leetcodeCalendarSchema.safeParse(req.params);
    if (!paramsParsed.success) { res.status(400).json({ message: "Invalid username" }); return; }
    const { username } = paramsParsed.data;

    const queryParsed = leetcodeCalendarQuerySchema.safeParse(req.query);
    const year = queryParsed.success && queryParsed.data.year ? queryParsed.data.year : new Date().getFullYear();
    const cacheKey = `${username}:${year}`;

    const cached = cache.get(cacheKey);
    if (cached && cached.expiresAt > Date.now()) {
      res.json(cached.data);
      return;
    }

    const response = await fetch(LEETCODE_GQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "InternHack-App",
      },
      body: JSON.stringify({
        query: CALENDAR_QUERY,
        variables: { username, year },
      }),
    });

    if (!response.ok) {
      res.status(502).json({ message: "Failed to fetch LeetCode data" });
      return;
    }

    const json = (await response.json()) as {
      data?: {
        matchedUser?: {
          userCalendar?: {
            activeYears: number[];
            streak: number;
            totalActiveDays: number;
            submissionCalendar: string;
          };
        };
      };
    };

    const calendar = json.data?.matchedUser?.userCalendar;
    if (!calendar) {
      res.status(404).json({ message: "LeetCode user not found" });
      return;
    }

    // Parse submissionCalendar: JSON string with epoch keys like { "1709251200": 3 }
    let submissions: Record<string, number> = {};
    try {
      submissions = JSON.parse(calendar.submissionCalendar);
    } catch {
      submissions = {};
    }

    const activities = Object.entries(submissions)
      .map(([epoch, count]) => {
        const date = new Date(Number(epoch) * 1000);
        const dateStr = date.toISOString().split("T")[0]!;
        return { date: dateStr, count, level: getLevel(count) };
      })
      .sort((a, b) => a.date.localeCompare(b.date));

    const data = {
      totalActive: calendar.totalActiveDays,
      streak: calendar.streak,
      activeYears: calendar.activeYears,
      calendar: activities,
    };

    cache.set(cacheKey, { data, expiresAt: Date.now() + CACHE_TTL });

    // Evict stale entries periodically
    if (cache.size > 200) {
      const now = Date.now();
      for (const [key, entry] of cache) {
        if (entry.expiresAt < now) cache.delete(key);
      }
    }

    res.json(data);
  } catch {
    res.status(500).json({ message: "Failed to fetch LeetCode calendar" });
  }
});

export { router as leetcodeRouter };
