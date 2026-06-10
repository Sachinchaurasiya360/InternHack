# 🏆 Open Source Leaderboard System

A comprehensive multi-dimensional leaderboard system for open source contributions with social competition features, privacy controls, and real-time score tracking.

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Documentation](#documentation)
- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Overview

The Open Source Leaderboard system gamifies open source contributions by providing:
- **5 ranking views:** Global, Weekly, Monthly, University, and Domain-specific
- **Weighted scoring:** Different activities earn different points
- **Privacy controls:** Users can opt-out or use pseudonyms
- **Real-time updates:** Scores update automatically on activities
- **Beautiful UI:** Medal badges, animations, responsive design, dark mode

**Built for:** InternHack platform to drive engagement and motivate students

---

## Features

### 🎯 Multi-Dimensional Rankings
- **Global Leaderboard:** All-time rankings
- **Weekly Leaderboard:** Last 7 days activity
- **Monthly Leaderboard:** Last 30 days activity
- **University Leaderboard:** Per-college competition
- **Domain Leaderboard:** Technology-specific (WEB, AI, MOBILE, etc.)

### 📊 Smart Scoring
- Guide Completed: **10 points**
- Repo Suggested (Pending): **10 points**
- Repo Suggested (Approved): **30 points** (3x)
- GitHub PR Merged: **50 points** (5x)
- Streak Day: **5 points** per day
- Certificate Earned: **100 points** (10x)

### 🔒 Privacy First
- **Public/Private Mode:** Show or hide from leaderboards
- **Real Name/Pseudonym:** Display real name or "User{id}"
- **Always Visible to Self:** Your rank is always visible regardless of privacy

### 🎨 Beautiful UI
- Medal badges for top 3 (🥇🥈🥉)
- Special styling for top ranks
- Current user highlighting
- Animated transitions
- Loading/error/empty states
- Responsive design (mobile-first)
- Dark mode support

### ⚡ Performance
- Database indexes on all key fields
- React Query caching (2-10min stale times)
- Pagination (50 entries per page)
- Batch processing (50 users at a time)
- Prefetch on hover

---

## Documentation

### For Developers
- **[Quick Start Guide](LEADERBOARD_QUICK_START.md)** - Get started in 5 minutes
- **[Implementation Summary](LEADERBOARD_IMPLEMENTATION_SUMMARY.md)** - Complete technical overview
- **[Backend API Reference](server/src/module/opensource/LEADERBOARD_API.md)** - All API endpoints
- **[Frontend Integration Guide](client/src/lib/api/LEADERBOARD_FRONTEND.md)** - React hooks and utilities

### For Deployment
- **[Deployment Checklist](LEADERBOARD_DEPLOYMENT_CHECKLIST.md)** - Step-by-step deployment guide
- **[Final Status Report](LEADERBOARD_FINAL_STATUS.md)** - Completion status and metrics

### For Review
- **[PR Description](LEADERBOARD_PR_DESCRIPTION.md)** - Complete PR details for code review

---

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

**1. Clone and install dependencies:**
```bash
# Server
cd server
npm install

# Client
cd client
npm install
```

**2. Set up database:**
```bash
cd server/src/database
npx prisma db push
npx prisma generate --schema=src/database/prisma/schema
```

**3. Start development servers:**
```bash
# Terminal 1: Server
cd server
npm run dev  # Runs on http://localhost:3000

# Terminal 2: Client
cd client
npm run dev  # Runs on http://localhost:5173
```

**4. Access leaderboard:**
Navigate to: `http://localhost:5173/student/opensource/leaderboard`

---

## Architecture

### Backend Stack
- **Framework:** Express 5
- **Database:** PostgreSQL + Prisma 7
- **Validation:** Zod
- **Scheduling:** node-cron
- **Language:** TypeScript 5

### Frontend Stack
- **Framework:** React 18
- **Router:** React Router 7
- **State:** TanStack Query (React Query)
- **Styling:** TailwindCSS 4
- **Animations:** Framer Motion
- **Language:** TypeScript 5

### Database Schema
```
opensourceLeaderboard
├── id (PK)
├── userId (FK, unique)
├── Scores
│   ├── totalScore
│   ├── weeklyScore
│   └── monthlyScore
├── Metrics
│   ├── guidesCompleted
│   ├── reposSuggestedApproved
│   ├── reposSuggestedPending
│   ├── githubPRsMerged
│   ├── currentStreak
│   ├── longestStreak
│   ├── lastActivityDate
│   └── certificatesEarned
├── Rankings
│   ├── globalRank
│   ├── weeklyRank
│   ├── monthlyRank
│   ├── universityRank
│   └── domainRank (JSON)
├── Privacy
│   ├── isPublic
│   └── showRealName
└── Metadata
    ├── lastScoreUpdate
    ├── lastRankUpdate
    ├── createdAt
    └── updatedAt
```

---

## API Endpoints

### Public Endpoints

**Get Global Statistics**
```http
GET /api/opensource/leaderboard/stats
```

### Authenticated Endpoints

**Get Leaderboard**
```http
GET /api/opensource/leaderboard?view=global&limit=50&page=1
```
Query params:
- `view`: global | weekly | monthly | university | domain
- `domain`: (required if view=domain) WEB | AI | MOBILE | etc.
- `limit`: 1-100 (default: 100)
- `page`: 1+ (default: 1)

**Get My Rank**
```http
GET /api/opensource/leaderboard/my-rank
```

**Update Privacy**
```http
PATCH /api/opensource/leaderboard/privacy
Content-Type: application/json

{
  "isPublic": true,
  "showRealName": false
}
```

**Refresh Score**
```http
POST /api/opensource/leaderboard/refresh
```

---

## Deployment

### Database Migration
```bash
cd server/src/database
npx prisma migrate deploy  # Production
npx prisma generate --schema=src/database/prisma/schema
```

### Build
```bash
# Server
cd server
npm run build

# Client
cd client
npm run build
```

### Environment Variables
Uses existing environment variables:
- `DATABASE_URL` - PostgreSQL connection
- `JWT_SECRET` - Authentication
- `NODE_ENV` - Environment mode

### Cron Job
Runs automatically on server start:
- **Schedule:** Daily at 2 AM UTC
- **Task:** Update all scores and ranks
- **Duration:** 1-5 minutes (depends on user count)

See [Deployment Checklist](LEADERBOARD_DEPLOYMENT_CHECKLIST.md) for complete guide.

---

## Project Structure

```
├── server/
│   ├── src/
│   │   ├── module/opensource/
│   │   │   ├── leaderboard.service.ts      # Score calculation
│   │   │   ├── leaderboard.controller.ts   # API handlers
│   │   │   ├── leaderboard.validation.ts   # Zod schemas
│   │   │   ├── leaderboard.utils.ts        # Triggers
│   │   │   └── LEADERBOARD_API.md          # API docs
│   │   ├── cron/
│   │   │   └── leaderboard-ranks.ts        # Daily rank updates
│   │   └── database/prisma/schema/
│   │       └── base.prisma                 # Database model
│   └── ...
├── client/
│   ├── src/
│   │   ├── module/student/opensource/
│   │   │   ├── LeaderboardPage.tsx         # Main page
│   │   │   ├── LeaderboardSettingsPage.tsx # Settings
│   │   │   └── components/
│   │   │       └── LeaderboardWidget.tsx   # Sidebar widget
│   │   ├── lib/
│   │   │   ├── api/
│   │   │   │   ├── leaderboard.api.ts      # React Query hooks
│   │   │   │   └── LEADERBOARD_FRONTEND.md # Frontend guide
│   │   │   ├── leaderboard.utils.ts        # Utilities
│   │   │   └── types/
│   │   │       └── opensource.types.ts     # TypeScript types
│   │   └── ...
│   └── ...
└── Documentation/
    ├── LEADERBOARD_README.md               # This file
    ├── LEADERBOARD_QUICK_START.md          # Quick start
    ├── LEADERBOARD_IMPLEMENTATION_SUMMARY.md # Implementation
    ├── LEADERBOARD_DEPLOYMENT_CHECKLIST.md # Deployment
    ├── LEADERBOARD_PR_DESCRIPTION.md       # PR details
    └── LEADERBOARD_FINAL_STATUS.md         # Final status
```

---

## Contributing

### Adding New Activity Types

1. Update scoring weights in `leaderboard.service.ts`:
```typescript
const SCORE_WEIGHTS = {
  newActivity: 25, // Add new activity
  // ...
};
```

2. Update `fetchUserActivityData()` to fetch new metric
3. Update database schema to store metric
4. Update frontend types
5. Update UI to display metric

### Adding New View Types

1. Add to `LeaderboardView` type
2. Update controller to handle new view
3. Add tab in `LeaderboardPage.tsx`
4. Update rank calculation in cron job

### Modifying Cron Schedule

In `server/src/index.ts`:
```typescript
startLeaderboardRanksCron("0 3 * * *"); // 3 AM UTC
```

---

## Testing

### Run Tests
```bash
# Server
cd server
npm run typecheck  # TypeScript
npm run lint       # ESLint
npm run build      # Build test

# Client
cd client
npm run typecheck  # TypeScript
npm run lint       # ESLint
npm run build      # Build test
```

### Manual Testing
Use the test script:
```bash
./test-leaderboard.sh
```

---

## Performance

### Expected Metrics
- API response time: **< 100ms**
- My rank query: **< 50ms**
- Stats query: **< 30ms**
- Rank calculation (50 users): **1-2 seconds**
- Full refresh: **30-60 seconds**
- Cron duration: **1-5 minutes**

### Optimization
- ✅ Database indexes on all key fields
- ✅ React Query caching
- ✅ Pagination (50 per page)
- ✅ Batch processing
- 🔮 Future: Redis caching for top 100

---

## Troubleshooting

### Leaderboard not loading?
1. Check server is running: `http://localhost:3000/health`
2. Check database connection in `.env`
3. Verify user is authenticated
4. Check browser console for errors

### Ranks not updating?
1. Check cron job is running in server logs
2. Query `lastRankUpdate` field in database
3. Try manual trigger: `triggerManualRankUpdate()`

### Scores incorrect?
1. Check user activities in database
2. Debug `updateUserScore()` function
3. Verify `lastScoreUpdate` timestamp

---

## Support

### Documentation
- **Backend:** [LEADERBOARD_API.md](server/src/module/opensource/LEADERBOARD_API.md)
- **Frontend:** [LEADERBOARD_FRONTEND.md](client/src/lib/api/LEADERBOARD_FRONTEND.md)
- **Quick Start:** [LEADERBOARD_QUICK_START.md](LEADERBOARD_QUICK_START.md)

### Contact
- **Technical Issues:** dev-team@internhack.com
- **Slack:** #leaderboard-dev
- **GitHub Issues:** Create issue with reproduction steps

---

## License

Part of the InternHack platform.

---

## Acknowledgments

Built with ❤️ by the InternHack development team.

**Inspired by:**
- GitHub contribution graphs
- LeetCode global ranking
- Stack Overflow reputation
- Gaming leaderboards

---

**Status:** ✅ Production Ready  
**Version:** 1.0.0  
**Last Updated:** June 10, 2026
