# 🏆 Leaderboard Quick Start Guide

## For Developers

### Run Locally

**Start Server:**
```bash
cd server
npm run dev
```
Server starts on `http://localhost:3000`

**Start Client:**
```bash
cd client
npm run dev
```
Client starts on `http://localhost:5173`

**Access Leaderboard:**
Navigate to: `http://localhost:5173/student/opensource/leaderboard`

---

## Key URLs

### Pages
- **Main Leaderboard:** `/student/opensource/leaderboard`
- **Settings:** `/student/opensource/leaderboard/settings`

### API Endpoints
- **GET** `/api/opensource/leaderboard` - Get rankings
- **GET** `/api/opensource/leaderboard/stats` - Global stats
- **GET** `/api/opensource/leaderboard/my-rank` - User's rank
- **PATCH** `/api/opensource/leaderboard/privacy` - Update privacy
- **POST** `/api/opensource/leaderboard/refresh` - Refresh score

---

## Quick Commands

### Database
```bash
# View schema
cd server/src/database
npx prisma studio

# Push schema changes
npx prisma db push

# Generate client
npx prisma generate --schema=src/database/prisma/schema
```

### Testing
```bash
# Server tests
cd server
npm run typecheck
npm run lint
npm run build

# Client tests
cd client
npm run typecheck
npm run lint
npm run build
```

### Trigger Score Update
When a user completes an activity, scores update automatically via:
```typescript
import { triggerLeaderboardUpdate } from "./leaderboard.utils";
triggerLeaderboardUpdate(userId);
```

### Manual Rank Calculation
```typescript
import { triggerManualRankUpdate } from "../../cron/leaderboard-ranks";
await triggerManualRankUpdate();
```

---

## File Locations

### Backend
```
server/src/
├── module/opensource/
│   ├── leaderboard.service.ts      # Score calculation
│   ├── leaderboard.controller.ts   # API handlers
│   ├── leaderboard.validation.ts   # Zod schemas
│   └── leaderboard.utils.ts        # Triggers
├── cron/
│   └── leaderboard-ranks.ts        # Daily rank update
└── database/prisma/schema/
    └── base.prisma                 # Database model
```

### Frontend
```
client/src/
├── module/student/opensource/
│   ├── LeaderboardPage.tsx         # Main page
│   ├── LeaderboardSettingsPage.tsx # Settings
│   └── components/
│       └── LeaderboardWidget.tsx   # Sidebar widget
├── lib/
│   ├── api/leaderboard.api.ts      # React Query hooks
│   ├── leaderboard.utils.ts        # Utility functions
│   └── types/opensource.types.ts   # TypeScript types
```

---

## Scoring Reference

| Activity | Points | Multiplier |
|----------|--------|------------|
| Guide Completed | 10 | 1x |
| Repo Suggested (Pending) | 10 | 1x |
| Repo Suggested (Approved) | 30 | 3x |
| GitHub PR Merged | 50 | 5x |
| Streak Day | 5 | per day |
| Certificate Earned | 100 | 10x |

---

## View Types

1. **Global** - All-time rankings
2. **Weekly** - Last 7 days
3. **Monthly** - Last 30 days
4. **University** - Per college
5. **Domain** - Per technology (WEB, AI, MOBILE, etc.)

---

## Common Tasks

### Add New Activity Type
1. Update scoring weights in `leaderboard.service.ts`
2. Add metric to database schema
3. Update `fetchUserActivityData()` to fetch new metric
4. Update frontend types
5. Update UI to display new metric

### Change Cron Schedule
In `server/src/index.ts`:
```typescript
startLeaderboardRanksCron("0 3 * * *"); // 3 AM UTC
```

### Add New View Type
1. Add to `LeaderboardView` type
2. Update controller to handle new view
3. Add tab in `LeaderboardPage.tsx`
4. Update rank calculation in cron job

---

## Debug Tips

### Check If Scores Are Updating
```sql
SELECT u.name, ol."totalScore", ol."lastScoreUpdate"
FROM "opensourceLeaderboard" ol
JOIN "user" u ON u.id = ol."userId"
ORDER BY ol."lastScoreUpdate" DESC
LIMIT 10;
```

### Check If Ranks Are Updating
```sql
SELECT COUNT(*) as users_with_rank
FROM "opensourceLeaderboard"
WHERE "globalRank" IS NOT NULL;
```

### View Cron Logs
```bash
# Server logs
tail -f logs/app.log | grep Leaderboard

# Or check console output
npm run dev | grep Leaderboard
```

### Test API Locally
```bash
# Get stats (no auth needed)
curl http://localhost:3000/api/opensource/leaderboard/stats

# Get leaderboard (needs auth token)
curl -H "Authorization: Bearer YOUR_TOKEN" \
  "http://localhost:3000/api/opensource/leaderboard?view=global&limit=10"
```

---

## Troubleshooting

### Issue: Leaderboard page shows no data
**Check:**
1. Server running? `http://localhost:3000/health`
2. Database connected? Check `.env` file
3. User authenticated? Check auth token
4. Any console errors? Open DevTools

### Issue: Ranks not updating
**Check:**
1. Cron job running? Check server logs
2. Last rank update: Query `lastRankUpdate` field
3. Try manual trigger: `triggerManualRankUpdate()`

### Issue: Scores incorrect
**Check:**
1. User activities: Query user's contributions
2. Calculation logic: Debug `updateUserScore()`
3. Trigger working? Check `lastScoreUpdate`

---

## React Query DevTools

Enable for debugging:
```tsx
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
```

View:
- Query states (loading, success, error)
- Cache contents
- Stale times
- Refetch behavior

---

## Performance Monitoring

### Key Metrics to Watch
- API response time (should be < 100ms)
- Database query time
- Cron job duration (1-5 minutes)
- Memory usage during cron
- Cache hit rate

### Optimize If Needed
1. Add Redis caching for top 100
2. Increase batch size (currently 50)
3. Add database read replicas
4. Use materialized views
5. Reduce cron frequency

---

## Resources

📚 **Full Documentation:**
- Backend API: `server/src/module/opensource/LEADERBOARD_API.md`
- Frontend Guide: `client/src/lib/api/LEADERBOARD_FRONTEND.md`
- Implementation Summary: `LEADERBOARD_IMPLEMENTATION_SUMMARY.md`
- Deployment Checklist: `LEADERBOARD_DEPLOYMENT_CHECKLIST.md`

🐛 **Report Issues:**
Create GitHub issue with:
- Environment (dev/staging/prod)
- Steps to reproduce
- Expected vs actual behavior
- Console errors/logs

💬 **Questions?**
- Slack: #leaderboard-dev
- Email: dev-team@internhack.com

---

## Quick Test Checklist

Before committing:
- [ ] TypeScript compiles (no errors)
- [ ] ESLint passes (no errors)
- [ ] Builds successfully
- [ ] Leaderboard page loads
- [ ] All 5 tabs work
- [ ] Privacy settings save
- [ ] No console errors

---

**Last Updated:** June 10, 2026  
**Maintainer:** Development Team  
**Status:** ✅ Production Ready
