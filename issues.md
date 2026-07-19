# InternHack Job Autofill Extension PRD and Implementation Issues

Last researched: 2026-07-15

## Objective

Build an InternHack browser extension and in-app job hub for internship and job applications.

The product should let a student create one reusable InternHack application profile, use it to autofill applications across major job boards and career pages, generate or reuse answers for repetitive application questions, save jobs, track applications, and view job-search analytics inside InternHack.

This document is written so another AI agent can start implementation without inventing a parallel system. Use the existing InternHack patterns:

- Server module pattern: `<name>.routes.ts` -> `<name>.controller.ts` -> `<name>.service.ts` -> `<name>.validation.ts`.
- Client pages under `client/src/module/student/...`.
- Shared client types in `client/src/lib/types.ts` via domain files.
- Existing auth, upload, resume, ATS, cover letter, job feed, job agent, and application-tracking modules.
- Zod for server validation.
- Existing `Button` component for new client buttons.
- Tailwind v4 canonical classes only.
- Do not add new `UsageAction` values unless explicitly approved with a Prisma migration. Reuse existing `JOB_APPLICATION`, `AI_JOB_CHAT`, `ATS_SCORE`, `COVER_LETTER`, and `GENERATE_RESUME`.

## Research Summary

Simplify.jobs is not just an autofill extension. Its advantage is a connected workflow:

1. One profile stores candidate data.
2. Job recommendations and job board discovery use that profile.
3. Browser extension detects an application form.
4. Extension fills repeated fields from profile data.
5. AI helps tailor resumes, cover letters, and written answers.
6. User reviews and manually submits.
7. Application is added to a tracker.
8. Tracker stores status, notes, contacts, documents, follow-ups, and analytics.

Confirmed public Simplify features:

- Copilot autofills applications, tailors resumes, and automatically tracks submitted applications.
- Chrome Web Store listing reports 500,000 users, 4.9 rating, 3.7K ratings, version 2.6.11 updated July 6, 2026.
- Supported/mentioned systems include Workday, Lever, Greenhouse, Ashby, iCIMS, Taleo, LinkedIn Easy Apply, and Indeed.
- Simplify says Copilot works across 80% of application websites.
- Repetitive profile data includes contact details, education, work experience, skills, resume uploads, links, portfolio info, work authorization, and demographic fields.
- User reviews and submits manually.
- Unsupported pages fall back to copy/paste from the extension profile tab and support requests.
- Saved question answers are reused only when the exact same question appears again.
- Tracker supports saved jobs, submitted applications, manual adds, CSV import/export, filters, statuses, notes, contacts, documents, and insights.
- Simplify+ adds AI resume tailoring, cover letters, application answers, outreach, networking, and job analytics.

InternHack should copy the workflow shape, not the implementation details.

## Product Principles

1. Student-first: optimize for internships, entry-level jobs, and campus/off-campus applications.
2. One profile powers everything: profile, resume, job matching, autofill, tracker, AI answers, and analytics must reuse the same data.
3. User stays in control: extension fills and suggests; user reviews and submits manually.
4. Track every application: if the user applies from InternHack, from a supported ATS, or from a random career page, InternHack should be able to save it.
5. Native support first, generic fallback second: build dedicated adapters for major ATS/job boards, then a robust generic DOM field mapper.
6. Use existing modules first: extend `user`, `generatedResume`, `generatedCoverLetter`, `jobIndex`, `jobMatch`, `jobAgentConversation`, `externalJobApplication`, `job-feed`, `job-agent`, `student`, `upload`, and `ats` patterns.
7. Transparent privacy: collect only what is needed for autofill/tracking, expose settings, and never auto-submit without explicit future approval.

## Current InternHack Starting Point

Existing server modules to reuse:

- `server/src/module/job-agent/*`: AI chat for job discovery, preferences, job search, email jobs.
- `server/src/module/job-feed/*`: personalized matches, save/dismiss/seen/stats.
- `server/src/module/job-index/*`: indexed jobs, enrichment, matching.
- `server/src/module/student/*`: current external job application tracking.
- `server/src/module/ats/*`: ATS score, resume generation, cover letter generation, LaTeX chat.
- `server/src/module/upload/*`: resume upload and S3/local fallback.
- `server/src/module/grants/*`: current grant tracker to remove/replace in student navigation.

Existing client pages/components to reuse:

- `client/src/module/student/profile/StudentProfilePage.tsx`: stores profile basics, education, skills, projects, links, resumes.
- `client/src/module/student/applications/MyApplicationsPage.tsx`: current application list and notes.
- `client/src/module/student/jobs/JobBrowsePage.tsx`: existing job browsing.
- `client/src/module/student/job-agent/JobAgentPage.tsx`: existing AI job assistant.
- `client/src/components/StudentSidebar.tsx`: remove or replace Startup Grants entry.
- `client/src/lib/types/jobs.types.ts`: existing job and application types.

Existing schema to extend:

- `user`: already has name, email, contactNo, resumes, bio, college, graduationYear, skills, links, location, projects.
- `userJobPreference`: desired roles, skills, locations, salary, work mode, levels, domains, saved/applied/dismissed IDs.
- `externalJobApplication`: currently tied only to `adminJob`.
- `jobMatch`: has saved, seen, dismissed, applied.
- `generatedResume` and `generatedCoverLetter`: already store generated documents.

Important constraint: Prisma migrations must be run from `server/src/database/`, where `prisma.config.ts` lives. Do not create migrations without confirmation.

## Scope

### MVP Scope

- Internship and job applications only.
- Chrome/Chromium extension first.
- Support authenticated InternHack students.
- Store full application profile in InternHack.
- Autofill common fields.
- Generate AI answers for unique questions.
- Reuse saved answers semantically, not only exact string match.
- Upload/select resume from InternHack profile.
- Track saved jobs and submitted applications.
- Replace Startup Grants navigation/section with a Job Hub.
- Add dashboard stats: saved jobs, applied jobs, interviews, offers, rejections, response rate, weekly applications.
- Native adapters for:
  - LinkedIn Easy Apply
  - Workday
  - Greenhouse
  - Lever
  - Ashby
  - Indeed
- Generic career page mapper for other company pages.

### Later Scope

- Scholarships, fellowships, hackathons, grants.
- Firefox extension.
- Gmail/Outlook email sync.
- Recruiter outreach automation.
- Full networking/referral graph.
- True auto-apply or auto-submit. This should remain out of scope until legal, platform-policy, and abuse-risk review is done.

## Non-Goals

- Do not bypass CAPTCHA, bot checks, login walls, or site anti-automation.
- Do not submit applications automatically in MVP.
- Do not scrape private user data from job boards beyond current page job/application context needed for autofill/tracking.
- Do not store payment, government ID, password, or background-check documents in this phase.
- Do not build a separate job platform when existing `job-feed`, `job-index`, and `student/applications` can be extended.

## User Personas

### Student Applicant

Wants to apply to many internships/jobs without retyping the same information. Needs profile, resumes, cover letters, common answers, tracking, and reminders.

### Power Applicant

Applies to high volume across LinkedIn, Workday, Greenhouse, Lever, Ashby, Indeed, and random company pages. Needs speed, quality, and analytics.

### New Student

Has an incomplete profile. Needs onboarding and profile-strength guidance before autofill is useful.

## Core User Flows

### Flow 1: Setup Application Profile

1. Student opens InternHack Job Hub.
2. Student completes profile sections:
   - Basic: name, email, phone, location.
   - Education: college, degree/program, graduation year, GPA if added.
   - Experience: internships, work, leadership.
   - Projects: existing `projects` JSON can seed this.
   - Skills: existing `skills`.
   - Links: LinkedIn, GitHub, portfolio, LeetCode.
   - Work authorization and eligibility.
   - Demographics: optional and individually controllable.
   - Custom reusable answers.
   - Resumes and cover letters.
3. Profile strength updates.
4. Extension uses latest profile.

### Flow 2: Autofill Supported Application

1. Student opens a supported application page.
2. Extension content script detects ATS/site type.
3. Extension shows panel:
   - Site detected.
   - Job title/company if detected.
   - Profile readiness.
   - Sections available: Common Fields, Resume, Cover Letter, Unique Questions.
4. Student clicks `Autofill`.
5. Extension fills fields page by page where possible.
6. Student reviews and edits.
7. Student submits manually.
8. Extension prompts `Track this application in InternHack?`.
9. Application appears in Job Hub and My Applications.

### Flow 3: Unsupported Career Page

1. Extension cannot confidently map all fields.
2. It still extracts field labels and job context.
3. It displays copy-to-clipboard profile values and answer suggestions.
4. Student can request support for that site.
5. Student can manually save the application.

### Flow 4: AI Answer Generation

1. Extension detects short-answer or essay questions.
2. It checks saved answers by normalized question and semantic similarity.
3. If strong match exists, suggest previous answer.
4. If no match, call InternHack AI using:
   - Student profile.
   - Resume summary.
   - Job title/company/description.
   - Question text.
5. Insert draft only after user clicks approve or generate.
6. Save final edited answer after application tracking.

### Flow 5: Job Hub

Replace `/student/grants` sidebar item and public grants emphasis with a Job Hub experience:

- Overview stats.
- Recommended jobs from existing `job-feed`.
- Saved jobs.
- Applications board/list.
- Autofill extension install/status card.
- Profile readiness.
- Recent application activity.
- Deadlines/follow-ups.
- Link to InternHack AI job agent.

## Information Architecture

### Replace Startup Grants

Update `client/src/components/StudentSidebar.tsx`:

- Remove discover item `{ to: "/student/grants", icon: Award, label: "Startup Grants" }`.
- Add work item or discover item:
  - `to: "/student/job-hub"`
  - icon: `Briefcase` or `ClipboardList`
  - label: `Job Hub`

Route changes in `client/src/App.tsx`:

- Add student route `/student/job-hub`.
- Keep `/grants` public route only if business still wants SEO traffic, or redirect `/student/grants` to `/student/job-hub`.
- Do not delete grant files in MVP unless explicitly requested; hide from student navigation first.

Recommended page structure:

- `client/src/module/student/job-hub/JobHubPage.tsx`
- `client/src/module/student/job-hub/ApplicationBoard.tsx`
- `client/src/module/student/job-hub/ApplicationStats.tsx`
- `client/src/module/student/job-hub/ExtensionStatusCard.tsx`
- `client/src/module/student/job-hub/ProfileReadinessCard.tsx`

## Data Model Requirements

Use existing `user` fields wherever possible. Add new tables only for data that cannot fit cleanly.

### Existing Fields To Reuse

- `user.name`
- `user.email`
- `user.contactNo`
- `user.bio`
- `user.college`
- `user.graduationYear`
- `user.skills`
- `user.linkedinUrl`
- `user.githubUrl`
- `user.portfolioUrl`
- `user.leetcodeUrl`
- `user.location`
- `user.projects`
- `user.resumes`
- `userJobPreference`
- `generatedResume`
- `generatedCoverLetter`

### Required New Models

These require a Prisma migration after approval.

#### `applicationProfile`

Purpose: store application-specific data that does not belong directly on `user`.

Fields:

- `id`
- `userId` unique
- `preferredName`
- `legalName`
- `phoneCountryCode`
- `address` JSON
- `education` JSON
- `experience` JSON
- `workAuthorization` JSON
- `demographics` JSON
- `availability` JSON
- `salaryExpectations` JSON
- `links` JSON
- `customFields` JSON
- `autofillSettings` JSON
- `privacySettings` JSON
- `createdAt`
- `updatedAt`

Notes:

- Keep PII scoped and explicit.
- Demographics must be optional, editable, and individually disableable for autofill.
- `autofillSettings` should include per-field toggles like phone, location, education, disability, salary, authorization.

#### `applicationQuestionAnswer`

Purpose: reusable answers for application questions.

Fields:

- `id`
- `userId`
- `questionText`
- `normalizedQuestion`
- `answer`
- `category`
- `source`
- `lastUsedAt`
- `useCount`
- `embedding` storage approach TBD using existing embedding pattern if available
- `createdAt`
- `updatedAt`

Constraints/indexes:

- Index `userId`
- Index `normalizedQuestion`
- Unique may be `[userId, normalizedQuestion]`, but semantic duplicates should merge via service logic.

#### `trackedJobApplication`

Purpose: general application tracker that works for InternHack jobs, scraped jobs, admin jobs, and external extension-captured jobs.

This should eventually replace or supersede `externalJobApplication`, but do not break existing page/API in one step.

Fields:

- `id`
- `userId`
- `sourceType`: `INTERNHACK_ADMIN`, `SCRAPED`, `JOB_INDEX`, `EXTENSION`, `MANUAL`
- `sourceId` nullable
- `jobIndexId` nullable
- `adminJobId` nullable
- `scrapedJobId` nullable
- `company`
- `role`
- `location`
- `jobUrl`
- `applicationUrl`
- `jobDescription`
- `status`: `SAVED`, `APPLIED`, `OA`, `PHONE_SCREEN`, `INTERVIEW`, `OFFER`, `REJECTED`, `WITHDRAWN`, `GHOSTED`
- `appliedAt`
- `deadline`
- `nextFollowUpAt`
- `resumeUrl`
- `coverLetterId`
- `notes`
- `contacts` JSON
- `events` JSON
- `extensionMetadata` JSON
- `createdAt`
- `updatedAt`

Notes:

- Keep `externalJobApplication` working while introducing this.
- Later migrate `externalJobApplication` data into `trackedJobApplication`.

#### `extensionAutofillEvent`

Purpose: analytics, debugging, and support requests.

Fields:

- `id`
- `userId`
- `applicationId` nullable
- `host`
- `siteType`
- `urlHash`
- `eventType`: `DETECTED`, `AUTOFILLED`, `FIELD_FAILED`, `QUESTION_GENERATED`, `TRACKED`, `SUPPORT_REQUESTED`
- `fieldCount`
- `filledCount`
- `failedCount`
- `metadata` JSON
- `createdAt`

Privacy:

- Store URL hash and host by default.
- Store full URL only if user opts into diagnostics.

## API Requirements

Create a new server module:

- `server/src/module/application-profile/application-profile.routes.ts`
- `server/src/module/application-profile/application-profile.controller.ts`
- `server/src/module/application-profile/application-profile.service.ts`
- `server/src/module/application-profile/application-profile.validation.ts`

Create a new server module:

- `server/src/module/application-tracker/application-tracker.routes.ts`
- `server/src/module/application-tracker/application-tracker.controller.ts`
- `server/src/module/application-tracker/application-tracker.service.ts`
- `server/src/module/application-tracker/application-tracker.validation.ts`

Create a new server module:

- `server/src/module/extension/extension.routes.ts`
- `server/src/module/extension/extension.controller.ts`
- `server/src/module/extension/extension.service.ts`
- `server/src/module/extension/extension.validation.ts`

Register routes in `server/src/index.ts`:

- `/api/application-profile`
- `/api/application-tracker`
- `/api/extension`

### Application Profile Endpoints

- `GET /api/application-profile/me`
  - Returns merged profile: `user` fields plus `applicationProfile`, resumes, generated documents, preferences.

- `PUT /api/application-profile/me`
  - Updates application profile.
  - Validate with Zod.
  - Must not update `user.email`.

- `PATCH /api/application-profile/autofill-settings`
  - Updates per-field autofill toggles.

### Question Answer Endpoints

- `GET /api/application-profile/questions`
  - Query by search/category.

- `POST /api/application-profile/questions`
  - Save answer.

- `POST /api/application-profile/questions/match`
  - Input: question text, optional job context.
  - Returns exact match, semantic match, or null.

- `POST /api/application-profile/questions/generate`
  - Uses existing AI provider pattern.
  - Reuse `AI_JOB_CHAT` for usage limits unless a new usage action is approved.

### Application Tracker Endpoints

- `GET /api/application-tracker`
  - Supports filters: status, search, sourceType, date range, savedOnly.

- `POST /api/application-tracker`
  - Creates manual or extension-tracked application.

- `PATCH /api/application-tracker/:id`
  - Updates status, notes, deadline, contacts, documents.

- `DELETE /api/application-tracker/:id`
  - Removes from tracker only.

- `POST /api/application-tracker/:id/events`
  - Adds event timeline item.

- `GET /api/application-tracker/stats`
  - Returns counts and analytics.

### Extension Endpoints

- `POST /api/extension/session`
  - Authenticated from web app.
  - Issues short-lived extension token using existing JWT utilities.
  - Do not invent a separate auth system.

- `GET /api/extension/profile`
  - Bearer token required.
  - Returns minimal autofill profile.

- `POST /api/extension/detect`
  - Receives host/siteType/job context and returns adapter hints.

- `POST /api/extension/autofill-event`
  - Logs non-sensitive event.

- `POST /api/extension/track-application`
  - Creates/updates tracked application.

- `POST /api/extension/support-request`
  - Stores unsupported site request.

## Extension Architecture

There is no existing extension package. Add one clear package instead of scattering extension files inside the app.

Recommended path:

- `extension/`

Recommended stack:

- Manifest V3.
- TypeScript.
- React popup/side panel if build tooling supports it.
- Content scripts for DOM detection/fill.
- Service worker for auth/session/API messaging.
- Shared API client that talks to existing InternHack server.

Minimum extension structure:

- `extension/manifest.json`
- `extension/src/background.ts`
- `extension/src/content/index.ts`
- `extension/src/content/detectors.ts`
- `extension/src/content/fill-engine.ts`
- `extension/src/content/adapters/workday.ts`
- `extension/src/content/adapters/greenhouse.ts`
- `extension/src/content/adapters/lever.ts`
- `extension/src/content/adapters/ashby.ts`
- `extension/src/content/adapters/linkedin.ts`
- `extension/src/content/adapters/indeed.ts`
- `extension/src/content/adapters/generic.ts`
- `extension/src/popup/App.tsx`
- `extension/src/lib/api.ts`
- `extension/src/lib/mapping.ts`
- `extension/src/lib/profile-normalizer.ts`

Permissions:

- Prefer `activeTab` and explicit supported host permissions where possible.
- For generic career pages, use runtime host permission request rather than broad all-sites permission if practical.
- If broad host permissions are unavoidable for MVP, document why in the Chrome Web Store privacy text and in InternHack settings.

Auth:

- Student logs into InternHack web app.
- Job Hub shows `Connect extension`.
- Web app calls `/api/extension/session`.
- Extension stores short-lived token in `chrome.storage.local`.
- Refresh through explicit reconnect or short refresh flow.

## Autofill Engine

### Detection

Detect site type by host/path and DOM markers:

- LinkedIn Easy Apply: LinkedIn host plus modal/form markers.
- Workday: workdayjobs.com or workday form markers.
- Greenhouse: boards.greenhouse.io or greenhouse embedded forms.
- Lever: jobs.lever.co form structure.
- Ashby: jobs.ashbyhq.com or Ashby embed.
- Indeed: indeed.com apply flow.
- Generic: any form with job/application fields.

### Field Mapping

Use layered mapping:

1. Native adapter selectors.
2. Label text and `aria-label`.
3. Input name/id/autocomplete attributes.
4. Nearby text and section headings.
5. Field type.
6. AI-assisted mapping only when deterministic confidence is low.

Common field categories:

- `firstName`
- `lastName`
- `fullName`
- `email`
- `phone`
- `location`
- `address`
- `linkedinUrl`
- `githubUrl`
- `portfolioUrl`
- `education.school`
- `education.degree`
- `education.major`
- `education.graduationYear`
- `experience.company`
- `experience.title`
- `experience.startDate`
- `experience.endDate`
- `experience.description`
- `skills`
- `resumeUpload`
- `coverLetter`
- `workAuthorization`
- `sponsorship`
- `salaryExpectation`
- `startDate`
- `demographics`
- `customQuestion`

### Fill Behavior

- Never overwrite a non-empty field unless user enabled overwrite.
- Highlight filled fields temporarily.
- Log failed fields locally and optionally server-side.
- Require user action for AI-generated long answers.
- Require user confirmation before filling sensitive demographic fields.
- For file uploads, use existing uploaded resume URL only if browser/site supports setting file input through allowed user interaction. If not possible, show a clear manual upload prompt.

### Multipage Forms

MVP behavior:

- Fill current page.
- User clicks Next.
- Extension detects next page and offers `Continue autofill`.

Later behavior:

- Optional setting for continuous multipage autofill.
- Still no auto-submit.

## AI Requirements

Use existing InternHack AI provider architecture. The repo already uses Gemini in several modules and has AI provider registry files.

AI tasks:

- Classify unknown fields.
- Generate application question answers.
- Tailor cover letter text.
- Suggest resume keywords using existing ATS/resume logic.
- Summarize job description from current page.

Prompt requirements:

- Output structured JSON.
- Include confidence.
- Never fabricate dates, degrees, companies, or experience.
- If missing data, return `needsUserInput`.
- Keep answers concise and student-appropriate.
- Use job description and profile only.

Saved answer matching:

- Normalize text: lowercase, trim, remove punctuation, collapse whitespace.
- Exact match first.
- Semantic match second using embeddings or existing semantic search pattern.
- If similarity is above threshold, suggest answer but tell user it was reused from a similar question.

## Job Hub Requirements

### Page

Create `JobHubPage`.

Hero/header:

- Kicker: `work / job hub`
- Title: `Run your job search.`
- Short description: `Autofill applications, track your pipeline, and keep every internship and job in one place.`

Cards/sections:

- Extension status.
- Profile readiness.
- Application stats.
- Recommended jobs.
- Saved jobs.
- Recent applications.
- Follow-ups.
- InternHack AI prompt entry.

No marketing-only landing page. This is a usable dashboard.

### Application Board

Support list and board view:

- Saved
- Applied
- Online Assessment
- Phone Screen
- Interview
- Offer
- Rejected
- Ghosted

MVP can launch list view first if board drag/drop would slow implementation.

### Analytics

Minimum stats:

- Saved jobs.
- Applied jobs.
- Interviews.
- Offers.
- Rejections.
- No response.
- Applications this week.
- Response rate.
- Average days to response if data exists.
- Top sources.

## Implementation Issues

### Issue 1: Replace Startup Grants Entry With Job Hub Navigation

Files:

- `client/src/components/StudentSidebar.tsx`
- `client/src/App.tsx`

Tasks:

- Remove `/student/grants` from student sidebar.
- Add `/student/job-hub`.
- Add lazy import and protected route for `JobHubPage`.
- Redirect `/student/grants` to `/student/job-hub` or leave route hidden.

Acceptance:

- Student sidebar shows `Job Hub`.
- Startup Grants no longer appears in student navigation.
- `/student/job-hub` loads for authenticated students.

### Issue 2: Build Job Hub Shell

Files:

- `client/src/module/student/job-hub/JobHubPage.tsx`
- related components in same folder

Tasks:

- Use existing visual conventions from `MyApplicationsPage`, `JobBrowsePage`, and `JobAgentPage`.
- Query existing:
  - `/api/job-feed/stats`
  - `/api/student/applications`
  - `/api/job-agent/conversation` if useful
- Show extension install/connect card as static placeholder until extension endpoints exist.

Acceptance:

- Page renders without new backend migrations.
- Shows current application count from existing data.
- Links to profile, jobs, applications, and AI agent.

### Issue 3: Add Application Profile Module

Files:

- `server/src/module/application-profile/*`
- `server/src/index.ts`
- `client/src/lib/types/jobs.types.ts` or new `application-profile.types.ts`

Tasks:

- Create routes/controller/service/validation.
- Implement merged profile endpoint using existing `user` fields first.
- Add update endpoint that updates only safe profile data.
- Add Zod validation.

Acceptance:

- `GET /api/application-profile/me` returns normalized profile.
- `PUT /api/application-profile/me` updates extended profile after migration approval.
- No duplicate helper logic if existing auth/profile helpers can be reused.

### Issue 4: Add Prisma Models For Application Profile

Files:

- `server/src/database/prisma/schema/*.prisma`

Tasks:

- Add `applicationProfile`.
- Add `applicationQuestionAnswer`.
- Add relations to `user`.
- Create migration only after explicit confirmation.

Acceptance:

- Prisma schema validates.
- Migration is generated from `server/src/database/`.
- Existing profile page still works.

### Issue 5: Add Application Tracker Module

Files:

- `server/src/module/application-tracker/*`
- `server/src/index.ts`
- `client/src/lib/types/jobs.types.ts`

Tasks:

- Implement list/create/update/delete/stats endpoints.
- Support existing `externalJobApplication` through compatibility mapping.
- Do not break `MyApplicationsPage`.

Acceptance:

- Existing applications appear in new tracker response.
- New manual tracked applications can be created.
- Stats endpoint returns dashboard metrics.

### Issue 6: Upgrade My Applications Into Full Tracker

Files:

- `client/src/module/student/applications/MyApplicationsPage.tsx`
- `client/src/module/student/applications/ApplicationNotes.tsx`
- possible new shared tracker components

Tasks:

- Add status field UI.
- Add source display.
- Add saved/manual/extension applications when backend is ready.
- Preserve existing notes behavior.

Acceptance:

- Existing external applications still render.
- New tracked applications render.
- Status can be changed.

### Issue 7: Extension Session Auth

Files:

- `server/src/module/extension/*`
- existing JWT utilities in `server/src/utils/jwt.utils.ts`
- `server/src/index.ts`

Tasks:

- Implement short-lived extension token endpoint.
- Token must identify user and role.
- Extension endpoints must require auth and student role.

Acceptance:

- Logged-in web user can connect extension.
- Extension can call `/api/extension/profile`.
- Expired/invalid token is rejected.

### Issue 8: Scaffold Browser Extension

Files:

- `extension/manifest.json`
- `extension/src/...`
- package config as needed

Tasks:

- Create MV3 extension scaffold.
- Add popup UI with login/connect state.
- Add background service worker.
- Add content script injection.
- Add API client.

Acceptance:

- Extension loads unpacked in Chrome.
- Popup opens.
- Content script can detect current page host and send message to popup.

### Issue 9: Build Profile Normalizer For Autofill

Files:

- `extension/src/lib/profile-normalizer.ts`
- server extension profile endpoint

Tasks:

- Convert InternHack profile into canonical autofill fields.
- Split full name.
- Normalize phone, links, skills, education, projects, resumes.
- Respect autofill settings.

Acceptance:

- Given a profile response, extension has deterministic values for common fields.
- Missing data is represented as missing, not fabricated.

### Issue 10: Implement Native ATS Adapters

Files:

- `extension/src/content/adapters/*.ts`

Tasks:

- Implement adapter interface:
  - `detect(): boolean`
  - `extractJobContext()`
  - `findFields()`
  - `fill(profile, options)`
  - `trackPayload()`
- Build adapters:
  - LinkedIn
  - Workday
  - Greenhouse
  - Lever
  - Ashby
  - Indeed

Acceptance:

- Each adapter can detect its target site.
- Each adapter maps at least name, email, phone, links, resume prompt, and common questions where possible.
- Adapter failures do not crash extension.

### Issue 11: Implement Generic Career Page Mapper

Files:

- `extension/src/content/adapters/generic.ts`
- `extension/src/lib/mapping.ts`

Tasks:

- Detect forms.
- Map fields from labels, aria labels, placeholders, names, ids, and nearby text.
- Score confidence.
- Fill high-confidence fields.
- Show low-confidence fields for user review.

Acceptance:

- Works on simple company career forms.
- Does not fill password, login, payment, or unrelated forms.
- Does not overwrite user-entered values by default.

### Issue 12: AI Question Answering

Files:

- `server/src/module/application-profile/*`
- `extension/src/popup` or panel components
- existing AI provider utilities

Tasks:

- Detect unique questions.
- Match saved answers.
- Generate answer when no match.
- Save final answer after user approval or tracking.

Acceptance:

- Exact and semantic answer reuse works.
- AI answer includes confidence/needsUserInput metadata.
- User can edit before insertion.

### Issue 13: Track Application From Extension

Files:

- `server/src/module/extension/*`
- `server/src/module/application-tracker/*`
- `extension/src/content`
- `extension/src/popup`

Tasks:

- Extract company, role, location, job URL, application URL, description if available.
- Create or update tracked application.
- Mark status as `APPLIED` only after user confirms they submitted.
- Log extension event.

Acceptance:

- After application submission confirmation, Job Hub shows the application.
- Duplicate tracking updates existing record instead of creating many duplicates.

### Issue 14: Extension Privacy Settings

Files:

- `client/src/module/student/job-hub/ExtensionSettingsPage.tsx` or profile section
- `server/src/module/application-profile`
- `extension/src/popup`

Tasks:

- Add toggles for sensitive fields.
- Add diagnostic sharing opt-in.
- Add clear extension token/disconnect.
- Add per-site disable list.

Acceptance:

- User can disable demographic autofill.
- User can disconnect extension.
- Extension respects settings immediately after refresh.

### Issue 15: Job Analytics

Files:

- `server/src/module/application-tracker/application-tracker.service.ts`
- `client/src/module/student/job-hub/ApplicationStats.tsx`

Tasks:

- Compute counts by status.
- Compute applications per week.
- Compute source breakdown.
- Compute response rate.

Acceptance:

- Stats load on Job Hub.
- Empty state works for new users.

### Issue 16: Tests

Server tests:

- Application profile validation.
- Tracker CRUD.
- Tracker stats.
- Extension auth rejection/acceptance.
- Question answer matching.

Client tests:

- Job Hub empty state.
- Job Hub with existing applications.
- Application status update.

Extension tests:

- Profile normalizer.
- Field mapper.
- Adapter detection.
- Generic mapper avoids password/payment fields.

Acceptance:

- `server` tests pass.
- `client` tests pass where relevant.
- Extension unit tests pass if test setup is added.

## Security And Privacy Requirements

- Do not store passwords, cookies from job boards, or page HTML snapshots by default.
- Store host and URL hash for diagnostics; full URL only with opt-in.
- Do not collect hidden fields unless adapter requires them for form context and they are not sensitive.
- Do not sell or share student application data.
- Do not use student data for training external models unless explicitly documented and consented.
- AI prompts should send only necessary profile/job/question context.
- User must be able to delete saved answers and tracked applications.
- Extension must clearly show when it is active on a page.

## Premium Gating Recommendation

Use existing subscription pattern.

Free:

- Profile setup.
- Manual tracker.
- Basic autofill for common fields.
- Limited AI answer generations using existing usage limit approach.

Premium:

- Unlimited AI answers.
- Resume tailoring per job.
- Cover letter generation per job.
- Advanced analytics.
- Follow-up email generation.
- Continuous multipage autofill when added.

Do not gate all autofill behind premium. Simplify keeps core autofill/tracking free, which is important for adoption.

## Suggested Rollout Plan

### Phase 1: In-App Foundation

- Job Hub route and sidebar replacement.
- Application tracker backend.
- Application profile backend.
- Job Hub dashboard.

### Phase 2: Extension MVP

- Extension scaffold.
- Auth/session.
- Profile fetch.
- Generic mapper.
- Greenhouse, Lever, Ashby adapters first.
- Track application.

### Phase 3: Hard ATS Support

- Workday adapter.
- LinkedIn Easy Apply adapter.
- Indeed adapter.
- Multipage support.
- Resume upload handling.

### Phase 4: AI Layer

- AI answers.
- Semantic saved-answer reuse.
- Cover letter insertion.
- Resume keyword/tailoring integration.

### Phase 5: Analytics And Polish

- Status board.
- Follow-ups.
- Application timeline.
- Extension settings.
- Diagnostics/support requests.

## Open Implementation Decisions

These are the only items that need product/owner confirmation before coding deeply:

1. Should `/grants` remain public for SEO while `/student/grants` redirects to Job Hub?
2. Should demographics be included in MVP, or added after the first extension release?
3. Should basic autofill be free for all students?
4. Should extension source live at root `extension/` or inside `client/extension/`?
5. Should the tracker replace `externalJobApplication` immediately or run in parallel first? Recommended: parallel first.

## Research Sources

- Simplify home: https://simplify.jobs/
- Simplify Copilot: https://simplify.jobs/copilot
- Simplify Chrome Web Store listing: https://chromewebstore.google.com/detail/simplify-copilot-autofill/pbanhockgagggenencehbnadejlgchfc
- Simplify job tracker: https://simplify.jobs/job-application-tracker
- Simplify resume builder: https://simplify.jobs/resume-builder
- Simplify privacy policy: https://simplify.jobs/privacy
- Simplify terms: https://simplify.jobs/terms
- Simplify install/setup Copilot help: https://help.simplify.jobs/articles/1749022-installing-and-setting-up-copilot
- Simplify autofill help: https://help.simplify.jobs/articles/2415391-using-copilot-to-autofill-applications
- Simplify unsupported autofill help: https://help.simplify.jobs/articles/8717287-autofill-not-supported
- Simplify autofill settings help: https://help.simplify.jobs/articles/8686025-manage-autofill-settings-in-the-simplify-extension
- Simplify resume tailoring help: https://help.simplify.jobs/articles/0515607-auto-tailoring-your-resume-with-copilot
- Simplify cover letter help: https://help.simplify.jobs/articles/0221176-auto-generating-a-cover-letter-with-copilot
- Simplify essay questions help: https://help.simplify.jobs/articles/7306766-answering-essay-questions-with-copilot
- Simplify+ features and pricing: https://help.simplify.jobs/articles/5623502-whats-included-in-simplify-features-and-pricing
- Chrome extension permissions: https://developer.chrome.com/docs/extensions/develop/concepts/declare-permissions
- Chrome extension content scripts: https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts
- Chrome extension service workers: https://developer.chrome.com/docs/extensions/develop/migrate/to-service-workers
