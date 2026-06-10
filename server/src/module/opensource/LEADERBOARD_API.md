# 🏆 Open Source Leaderboard API Documentation

## Overview
The leaderboard API provides endpoints for viewing rankings, managing privacy settings, and tracking user scores across multiple dimensions.

---

## Endpoints

### 1. **GET /api/opensource/leaderboard**
Fetch leaderboard entries with pagination and filters.

**Auth:** Required (any authenticated user)

**Query Parameters:**
```typescript
{
  view?: "global" | "weekly" | "monthly" | "university" | "domain" // default: "global"
  domain?: string // required when view="domain"
  limit?: number  // 1-100, default: 100
  page?: number   // min: 1, default: 1
}
```

**Response:**
```json
{
  "success": true,
  "entries": [
    {
      "rank": 1,
      "userId": 123,
      "name": "John Doe",
      "profilePic": "https://...",
      "profileSlug": "john-doe",
      "college": "MIT",
      "score": 850,
      "metrics": {
        "guidesCompleted": 15,
        "reposSuggestedApproved": 10,
        "githubPRsMerged": 25,
        "currentStreak": 7,
        "certificatesEarned": 3
      },
      "isCurrentUser": false
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 100,
    "total": 1250,
    "totalPages": 13
  },
  "view": "global",
  "domain": null
}
```

**Examples:**
- Global top 100: `/api/opensource/leaderboard`
- Weekly top 50: `/api/opensource/leaderboard?view=weekly&limit=50`
- University leaderboard: `/api/opensource/leaderboard?view=university`
- Domain-specific: `/api/opensource/leaderboard?view=domain&domain=WEB`

---

### 2. **GET /api/opensource/leaderboard/stats**
Get global leaderboard statistics.

**Auth:** None (public endpoint)

**Response:**
```json
{
  "success": true,
  "stats": {
    "totalParticipants": 1250,
    "topScore": 2450,
    "averageScore": 185,
    "activeThisWeek": 320
  }
}
```

---

### 3. **GET /api/opensource/leaderboard/my-rank**
Get current user's rank across all views.

**Auth:** Required (STUDENT role)

**Response:**
```json
{
  "success": true,
  "rank": {
    "global": 42,
    "weekly": 15,
    "monthly": 28,
    "university": 3,
    "domain": {
      "WEB": 12,
      "AI": 25
    }
  },
  "scores": {
    "total": 850,
    "weekly": 120,
    "monthly": 380
  },
  "metrics": {
    "guidesCompleted": 15,
    "reposSuggestedApproved": 10,
    "reposSuggestedPending": 2,
    "githubPRsMerged": 25,
    "currentStreak": 7,
    "longestStreak": 14,
    "certificatesEarned": 3,
    "lastActivityDate": "2026-06-10T10:30:00Z"
  },
  "privacy": {
    "isPublic": true,
    "showRealName": true
  },
  "user": {
    "name": "John Doe",
    "profilePic": "https://...",
    "college": "MIT",
    "profileSlug": "john-doe"
  }
}
```

**Notes:**
- Automatically creates leaderboard entry if it doesn't exist
- Returns 404 if entry creation fails

---

### 4. **PATCH /api/opensource/leaderboard/privacy**
Update privacy settings for current user.

**Auth:** Required (STUDENT role)

**Request Body:**
```json
{
  "isPublic": true,
  "showRealName": false
}
```

**Response:**
```json
{
  "success": true,
  "message": "Privacy settings updated",
  "privacy": {
    "isPublic": true,
    "showRealName": false
  }
}
```

**Notes:**
- Both fields are optional
- Automatically creates leaderboard entry if it doesn't exist
- When `isPublic: false`, user won't appear on public leaderboards
- When `showRealName: false`, user appears as "User{id}" instead of real name

---

### 5. **POST /api/opensource/leaderboard/refresh**
Manually trigger score refresh for current user.

**Auth:** Required (STUDENT role)

**Response:**
```json
{
  "success": true,
  "message": "Score refreshed successfully",
  "scores": {
    "total": 850,
    "weekly": 120,
    "monthly": 380
  }
}
```

**Notes:**
- Useful for testing or when users want immediate score updates
- Scores are normally updated automatically when activities occur
- Ranks are updated daily via cron job (2 AM UTC)

---

## Score Calculation

### Weights
- **Guide Completed:** 10 points
- **Repo Suggested (Pending):** 10 points (1x base)
- **Repo Suggested (Approved):** 30 points (3x base)
- **GitHub PR Merged:** 50 points (5x base)
- **Streak Day:** 5 points per day
- **Certificate Earned:** 100 points

### Automatic Updates
Scores are automatically updated when:
- User submits a repo request
- Admin approves/rejects a repo request
- User completes a guide step

### Rank Updates
Rankings are recalculated daily at **2 AM UTC** via scheduled job:
- Global ranks (sorted by totalScore)
- Weekly ranks (sorted by weeklyScore)
- Monthly ranks (sorted by monthlyScore)
- University ranks (per college, sorted by totalScore)
- Domain ranks (per domain, sorted by totalScore)

---

## View Types

### Global (`view=global`)
- All users sorted by total score
- Shows `globalRank` and `totalScore`

### Weekly (`view=weekly`)
- All users sorted by score from last 7 days
- Shows `weeklyRank` and `weeklyScore`

### Monthly (`view=monthly`)
- All users sorted by score from last 30 days
- Shows `monthlyRank` and `monthlyScore`

### University (`view=university`)
- Users from current user's college only
- Sorted by total score
- Shows `universityRank` and `totalScore`

### Domain (`view=domain&domain=WEB`)
- Users who have contributions in specified domain
- Sorted by total score
- Shows domain-specific rank and `totalScore`
- Valid domains: `WEB`, `AI`, `MOBILE`, `BACKEND`, `DEVOPS`, `DATA_SCIENCE`, `BLOCKCHAIN`, `GAME_DEV`, `CYBERSECURITY`, `OTHER`

---

## Privacy Features

### Public/Private Mode (`isPublic`)
- `true` (default): Appears on public leaderboards
- `false`: Hidden from all public leaderboards
- Own rank is always visible via `/my-rank` endpoint

### Name Display (`showRealName`)
- `true` (default): Shows real name from user profile
- `false`: Shows as "User{userId}" (e.g., "User123")
- Own name is always shown in full via `/my-rank` endpoint

---

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": "Invalid query parameters",
  "details": [
    {
      "path": ["view"],
      "message": "Invalid enum value..."
    }
  ]
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Leaderboard entry not found"
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "error": "Unauthorized"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "error": "Insufficient permissions"
}
```

---

## Implementation Notes

1. **Performance:** All ranking queries use indexed fields for fast sorting
2. **Caching:** Consider adding Redis caching for top 100 global leaderboard
3. **Pagination:** Default limit is 100, max is 100 to prevent large queries
4. **Real-time Updates:** Scores update immediately on activity, ranks update daily
5. **Privacy:** Users can opt-out completely or use pseudonyms
6. **Extensibility:** Domain ranks stored as JSON allow adding new domains without schema changes

---

## Future Enhancements

- [ ] Add Redis caching for top 100 global leaderboard
- [ ] GitHub PR integration to fetch actual merged PR count
- [ ] Real-time WebSocket updates for live rank changes
- [ ] Leaderboard badges/achievements
- [ ] Historical rank tracking (rank over time charts)
- [ ] Team/group leaderboards
- [ ] Seasonal leaderboards (reset quarterly/yearly)
