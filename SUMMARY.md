# Session: InternHack GSSoC PR Sprint — 16 PRs

## Goal

Maximize merged GSSoC score/hr on InternHack — the only active repo accepting PRs.

## Constraints & Preferences

- PR template: `## What` / `## Root cause` / `## Changes` / `## Closes #N`
- Branch: `fix/issue-N-description` → one commit → one PR
- Commit: `git commit -s`; `--body-file` for PR bodies
- Claim: `"Hi, I am a GSSoC 2026 contributor… /assign"`
- `gh pr create --base main --head Xenon010101:<branch> --body-file <file>`

## Progress — 16 PRs, 0 new issues remaining

### Batch 1 (original 6 — multi-file)
1. **#1169** duplicate rounds → PR **#1537**
2. **#1246** OTP brute force → PR **#1538**
3. **#1264** deadline banner → PR **#1539**
4. **#1497** auth skills length → PR **#1547**
5. **#1507** GSOC search bounds → PR **#1548**
6. **#1471** useEffect re-renders → PR **#1549**

### Batch 2 (Zod string length — 1 file each)
7. **#1534** YC query length → PR **#1550**
8. **#1532** roadmap query length → PR **#1551**
9. **#1530** RBAC empty permissions → PR **#1552**
10. **#1528** professor query length → PR **#1553**
11. **#1523** learn questionId regex → PR **#1554**

### Batch 3 (validation refinements — 1 file each)
12. **#1525** payment razorpay size bounds → PR **#1555**
13. **#1515** job salaryMin ≤ salaryMax → PR **#1556**
14. **#1511** interview future-time only → PR **#1557**
15. **#1513** interview-experience max year 2026 → PR **#1558**
16. **#1509** internship stipend max length → PR **#1559**

### Unclaimed & untouched (still available)
~35 unassigned GSSoC issues remain. Quick validation wins still available:
- #1521 (latex duplicate filenames), #1519 (job-feed items/string length), #1517 (job-agent size), #1505 (email-inbound webhook size), #1503 (contact bounds), #1501 (company empty changes), #1495 (attendance future dates), #1493 (reimbursement max receipts), #1488 (badge slug collision), #1486 (performance weight sum), #1484 (compliance future expiry), #1482 (payroll date order), #1480 (employee past DOB), #1478 (department cyclic parent), #1476 (workflow JSON parse), #1474 (onboarding JSON parse), #1340 (future date check), #1337 (negative hours), #1295 (assessment schema), #1274 (permission cache), #1244 (public profile enum), #1115 (round orderIndex), #1327 (password reset), #1466 (success feedback)

## Status
- **30 open PRs** on InternHack (#1444, #1420, #1417, #1408, #1407, #1454-#1458, #1463, #1464, #1526, #1537-#1539, #1547-#1559)
- All mergeable, 0 human reviews, bot-only comments (CodeRabbit, Vercel, StackBlitz, GH Actions)

## Blocks
- Disk space ~39 MB free — `git` and `node` operations may fail
- No `/assign` bot processes claims on this repo; fix first, PR second
- All `yashksaini-coder` repos (x8) 404/deleted — no alternative GSSoC repos found
- `gh` search for `gssoc 2026` topic returned 0 results (API query issue or no public repos match)

## Key Files Changed
| File | Issue | Change |
|------|-------|--------|
| `payment.validation.ts` | #1525 | `.max()` on 3 razorpay fields |
| `job.validation.ts` | #1515 | `.refine()` salaryMin ≤ salaryMax |
| `interview.validation.ts` | #1511 | `.refine()` future-only scheduledAt |
| `interview-experience.validation.ts` | #1513 | interviewYear max 2026 |
| `internship.validation.ts` | #1509 | stipend `.max(500)` |
