# 🎨 Leaderboard Frontend Integration Guide

## Overview
This guide covers the TypeScript types, React Query hooks, and utility functions available for building the leaderboard UI.

---

## 📁 File Structure

```
client/src/lib/
├── types/
│   └── opensource.types.ts      # TypeScript interfaces (leaderboard section)
├── api/
│   └── leaderboard.api.ts       # React Query hooks & API functions
├── leaderboard.utils.ts         # Utility functions for formatting & display
└── query-keys.ts                # Query key definitions (updated)
```

---

## 🔷 TypeScript Types

### Core Types

```typescript
// View types
type LeaderboardView = "global" | "weekly" | "monthly" | "university" | "domain";

// Metrics displayed for each user
interface LeaderboardMetrics {
  guidesCompleted: number;
  reposSuggestedApproved: number;
  githubPRsMerged: number;
  currentStreak: number;
  certificatesEarned: number;
}

// Single leaderboard entry
interface LeaderboardEntry {
  rank: number;
  userId: number;
  name: string;              // Real name or "User{id}" based on privacy
  profilePic?: string;
  profileSlug?: string;
  college?: string;
  score: number;             // Changes based on view (total/weekly/monthly)
  metrics: LeaderboardMetrics;
  isCurrentUser: boolean;    // Highlight current user
}

// Full leaderboard response
interface LeaderboardResponse {
  success: boolean;
  entries: LeaderboardEntry[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  view: LeaderboardView;
  domain?: string | null;
}
```

### User Rank Types

```typescript
// Extended metrics for user's own rank card
interface MyRankMetrics extends LeaderboardMetrics {
  reposSuggestedPending: number;  // Only visible to self
  longestStreak: number;
  lastActivityDate?: string;
}

// User's rank across all views
interface MyRankResponse {
  success: boolean;
  rank: {
    global?: number;
    weekly?: number;
    monthly?: number;
    university?: number;
    domain: Record<string, number>; // e.g., { "WEB": 5, "AI": 12 }
  };
  scores: {
    total: number;
    weekly: number;
    monthly: number;
  };
  metrics: MyRankMetrics;
  privacy: {
    isPublic: boolean;
    showRealName: boolean;
  };
  user: {
    name: string;
    profilePic?: string;
    college?: string;
    profileSlug?: string;
  };
}
```

---

## 🎣 React Query Hooks

### 1. `useLeaderboard(params)`
Fetch leaderboard entries with filters.

```typescript
import { useLeaderboard } from "@/lib/api/leaderboard.api";

function LeaderboardPage() {
  const { data, isLoading, error } = useLeaderboard({
    view: "global",
    limit: 50,
    page: 1,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading leaderboard</div>;

  return (
    <div>
      {data?.entries.map((entry) => (
        <div key={entry.userId}>
          {entry.rank}. {entry.name} - {entry.score} points
        </div>
      ))}
    </div>
  );
}
```

**Parameters:**
```typescript
{
  view?: "global" | "weekly" | "monthly" | "university" | "domain";
  domain?: string;  // Required when view="domain"
  limit?: number;   // Default: 100, Max: 100
  page?: number;    // Default: 1
}
```

**Stale Time:** 5 minutes

---

### 2. `useLeaderboardStats()`
Get global statistics.

```typescript
import { useLeaderboardStats } from "@/lib/api/leaderboard.api";

function StatsCard() {
  const { data } = useLeaderboardStats();

  return (
    <div>
      <p>Total Participants: {data?.stats.totalParticipants}</p>
      <p>Top Score: {data?.stats.topScore}</p>
      <p>Average Score: {data?.stats.averageScore}</p>
      <p>Active This Week: {data?.stats.activeThisWeek}</p>
    </div>
  );
}
```

**Stale Time:** 10 minutes

---

### 3. `useMyRank()`
Get current user's rank card.

```typescript
import { useMyRank } from "@/lib/api/leaderboard.api";

function MyRankCard() {
  const { data, isLoading } = useMyRank();

  if (isLoading) return <div>Loading your rank...</div>;

  return (
    <div>
      <h3>Your Rank</h3>
      <p>Global: #{data?.rank.global}</p>
      <p>Weekly: #{data?.rank.weekly}</p>
      <p>Total Score: {data?.scores.total}</p>
      <p>Current Streak: {data?.metrics.currentStreak} days</p>
    </div>
  );
}
```

**Stale Time:** 2 minutes
**Auto-creates entry** if doesn't exist

---

### 4. `useUpdateLeaderboardPrivacy()`
Update privacy settings.

```typescript
import { useUpdateLeaderboardPrivacy } from "@/lib/api/leaderboard.api";

function PrivacySettings() {
  const mutation = useUpdateLeaderboardPrivacy();

  const handleTogglePublic = () => {
    mutation.mutate({ isPublic: false });
  };

  return (
    <button onClick={handleTogglePublic} disabled={mutation.isPending}>
      {mutation.isPending ? "Saving..." : "Hide from Leaderboard"}
    </button>
  );
}
```

**Invalidates:** `myRank` query

---

### 5. `useRefreshMyScore()`
Manually refresh score.

```typescript
import { useRefreshMyScore } from "@/lib/api/leaderboard.api";

function RefreshButton() {
  const mutation = useRefreshMyScore();

  return (
    <button 
      onClick={() => mutation.mutate()}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? "Refreshing..." : "Refresh Score"}
    </button>
  );
}
```

**Invalidates:** `myRank` and `leaderboard` queries

---

### 6. `usePrefetchLeaderboard()`
Prefetch leaderboard data on hover.

```typescript
import { usePrefetchLeaderboard } from "@/lib/api/leaderboard.api";

function TabButton({ view }: { view: LeaderboardView }) {
  const prefetch = usePrefetchLeaderboard();

  return (
    <button
      onMouseEnter={() => prefetch({ view })}
      onClick={() => setActiveView(view)}
    >
      {view}
    </button>
  );
}
```

---

### 7. `useIsInTopN(n)`
Check if user is in top N.

```typescript
import { useIsInTopN } from "@/lib/api/leaderboard.api";

function TopTenBadge() {
  const { isInTopN, rank } = useIsInTopN(10);

  if (!isInTopN) return null;

  return <span>🏆 You're #{rank} globally!</span>;
}
```

---

## 🛠️ Utility Functions

### Formatting Functions

```typescript
import {
  formatScore,
  getRankBadge,
  formatStreak,
  getContributionLevel,
  formatDomainName,
} from "@/lib/leaderboard.utils";

// Format scores with K/M suffixes
formatScore(1250);      // "1.3K"
formatScore(1500000);   // "1.5M"

// Get medal emoji for top 3
getRankBadge(1);  // "🥇"
getRankBadge(2);  // "🥈"
getRankBadge(3);  // "🥉"
getRankBadge(10); // null

// Format streak text
formatStreak(5);  // "5 days"
formatStreak(1);  // "1 day"
formatStreak(0);  // "No streak"

// Get contribution level
getContributionLevel(0);    // "No contributions yet"
getContributionLevel(150);  // "Active contributor"
getContributionLevel(1500); // "Elite contributor"

// Format domain names
formatDomainName("WEB");   // "Web Development"
formatDomainName("AI");    // "Artificial Intelligence"
```

### Display Helpers

```typescript
import {
  getViewDisplayName,
  getViewDescription,
  getRankColorClass,
  getRankBgClass,
  getStreakEmoji,
} from "@/lib/leaderboard.utils";

// View names
getViewDisplayName("global");     // "Global"
getViewDisplayName("weekly");     // "This Week"
getViewDisplayName("university"); // "My University"

// View descriptions
getViewDescription("weekly");  // "Top contributors from the last 7 days"

// Tailwind color classes for ranks
getRankColorClass(1);  // "text-yellow-500" (gold)
getRankColorClass(2);  // "text-gray-400" (silver)
getRankColorClass(3);  // "text-amber-600" (bronze)

// Background classes for rank cards
getRankBgClass(1);  // "bg-gradient-to-br from-yellow-50 to-amber-50..."

// Streak emoji
getStreakEmoji(3);   // "🔥"
getStreakEmoji(15);  // "🚀"
getStreakEmoji(50);  // "⚡"
getStreakEmoji(100); // "🏆"
```

### Progress & Metrics

```typescript
import {
  getProgressToNextMilestone,
  getMetricInfo,
  getAvailableDomains,
} from "@/lib/leaderboard.utils";

// Progress to next milestone
getProgressToNextMilestone(850);
// { current: 850, next: 1000, percent: 85 }

// Metric metadata
getMetricInfo("guidesCompleted");
// { label: "Guides", icon: "📚", description: "Guides completed" }

// Available domains for filtering
getAvailableDomains();
// [{ value: "WEB", label: "Web Development" }, ...]
```

---

## 📊 Example Components

### Simple Leaderboard List

```typescript
import { useLeaderboard } from "@/lib/api/leaderboard.api";
import { getRankBadge, formatScore } from "@/lib/leaderboard.utils";

function SimpleLeaderboard() {
  const { data, isLoading } = useLeaderboard({ view: "global", limit: 10 });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-2">
      {data?.entries.map((entry) => (
        <div
          key={entry.userId}
          className={`flex items-center gap-3 p-3 rounded-lg border ${
            entry.isCurrentUser ? "bg-blue-50 border-blue-200" : "bg-white"
          }`}
        >
          <span className="text-2xl">{getRankBadge(entry.rank) || `#${entry.rank}`}</span>
          <img
            src={entry.profilePic || "/default-avatar.png"}
            alt={entry.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <p className="font-medium">{entry.name}</p>
            <p className="text-sm text-gray-500">{entry.college}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg">{formatScore(entry.score)}</p>
            <p className="text-xs text-gray-500">points</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Rank Card with Tabs

```typescript
import { useState } from "react";
import { useLeaderboard } from "@/lib/api/leaderboard.api";
import { getViewDisplayName } from "@/lib/leaderboard.utils";
import type { LeaderboardView } from "@/lib/types/opensource.types";

function TabbedLeaderboard() {
  const [view, setView] = useState<LeaderboardView>("global");
  const { data, isLoading } = useLeaderboard({ view });

  const views: LeaderboardView[] = ["global", "weekly", "monthly", "university"];

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {views.map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-4 py-2 rounded ${
              v === view ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            {getViewDisplayName(v)}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div>Loading {view} leaderboard...</div>
      ) : (
        <div>
          {data?.entries.map((entry) => (
            <div key={entry.userId}>
              #{entry.rank} {entry.name} - {entry.score}pts
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

### My Rank Widget

```typescript
import { useMyRank } from "@/lib/api/leaderboard.api";
import { formatStreak, getStreakEmoji } from "@/lib/leaderboard.utils";

function MyRankWidget() {
  const { data, isLoading } = useMyRank();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-bold mb-4">Your Rank</h3>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Global</p>
          <p className="text-2xl font-bold">#{data.rank.global || "—"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Weekly</p>
          <p className="text-2xl font-bold">#{data.rank.weekly || "—"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Monthly</p>
          <p className="text-2xl font-bold">#{data.rank.monthly || "—"}</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Current Streak</span>
          <span className="font-medium">
            {getStreakEmoji(data.metrics.currentStreak)}{" "}
            {formatStreak(data.metrics.currentStreak)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Total Score</span>
          <span className="font-bold text-lg">{data.scores.total}</span>
        </div>
      </div>
    </div>
  );
}
```

---

## 🎯 Best Practices

1. **Use stale times appropriately:**
   - Leaderboard data: 5 minutes
   - User's own rank: 2 minutes
   - Global stats: 10 minutes

2. **Prefetch on hover:**
   - Use `usePrefetchLeaderboard()` for tab buttons
   - Improves perceived performance

3. **Handle loading states:**
   - Show skeleton loaders for better UX
   - Display appropriate messages

4. **Highlight current user:**
   - Use `entry.isCurrentUser` to style differently
   - Makes it easy to find yourself

5. **Privacy awareness:**
   - Respect `showRealName` setting
   - Don't assume all users are public

6. **Mobile-first:**
   - Leaderboards should be scrollable
   - Consider virtual scrolling for long lists

7. **Error handling:**
   - Show friendly error messages
   - Provide retry mechanisms

---

## 🔄 Invalidation Strategy

When to invalidate queries:

- **After privacy update:** Invalidate `myRank`
- **After manual refresh:** Invalidate `myRank` and all `leaderboard` queries
- **After new activity:** Invalidate `myRank` (scores update automatically via backend triggers)
- **On navigation:** Consider using `staleTime` instead of frequent refetching

---

## 📱 Responsive Design Tips

```typescript
// Mobile: Compact list
<div className="md:hidden">
  <CompactLeaderboardList />
</div>

// Desktop: Full table
<div className="hidden md:block">
  <LeaderboardTable />
</div>

// Sticky header for long lists
<div className="sticky top-0 bg-white z-10">
  <LeaderboardHeader />
</div>
```

---

## 🚀 Performance Tips

1. **Pagination:** Default limit is 100, but consider 20-50 for mobile
2. **Virtual scrolling:** For lists with 100+ items
3. **Memoization:** Use `React.memo` for leaderboard entries
4. **Image optimization:** Lazy load profile pictures
5. **Debounce search:** If adding search functionality

---

Ready to build the UI! 🎨
