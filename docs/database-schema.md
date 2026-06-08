# InternHack — Database Schema

This document provides a visual overview of the core database architecture for **InternHack**, generated from the Prisma schema files located in [`server/src/database/prisma/schema/`](../server/src/database/prisma/schema/).

The schema is split across four files:

| File | Domain |
|------|--------|
| `base.prisma` | Users, Jobs, Applications, Companies, Learning, Payments, AI tools |
| `hr.prisma` | HR management — Employees, Attendance, Payroll, Performance |
| `ai.prisma` | AI job discovery — Job Index, User Preferences, Matches |
| `roadmap.prisma` | Career Roadmaps, Enrollments, Topic Progress |

> **Note:** This diagram focuses on core models and their primary relationships. Minor audit/log tables (e.g., `scrapeLog`, `errorLog`, `fundingSignalLog`) and standalone reference tables with no foreign-key relations (e.g., `gsocOrganization`, `ycCompany`, `govInternship`, `iitProfessor`) are omitted for clarity.

---

## Entity-Relationship Diagram

```mermaid
erDiagram

    %% ─────────────────────────────────────────────
    %% CORE: USER & AUTH
    %% ─────────────────────────────────────────────

    user {
        int     id                PK
        string  email             UK
        string  name
        enum    role              "STUDENT | RECRUITER | ADMIN"
        enum    subscriptionPlan  "FREE | MONTHLY | YEARLY"
        enum    subscriptionStatus
        string  college
        int     graduationYear
        string  githubUrl
        string  linkedinUrl
        boolean isVerified
        boolean isActive
    }

    adminProfile {
        int  id     PK
        int  userId FK
        enum tier   "SUPER_ADMIN | ADMIN | MODERATOR"
    }

    user ||--o| adminProfile : "has"

    %% ─────────────────────────────────────────────
    %% JOBS & APPLICATIONS
    %% ─────────────────────────────────────────────

    job {
        int      id          PK
        int      recruiterId FK
        string   title
        string   company
        string   location
        enum     status      "DRAFT | PUBLISHED | CLOSED | ARCHIVED"
        datetime deadline
    }

    round {
        int    id         PK
        int    jobId      FK
        string name
        int    orderIndex
    }

    application {
        int  id            PK
        int  jobId         FK
        int  studentId     FK
        enum status        "APPLIED | IN_PROGRESS | SHORTLISTED | REJECTED | HIRED | WITHDRAWN"
        int  currentRoundId
    }

    roundSubmission {
        int  id            PK
        int  applicationId FK
        int  roundId       FK
        enum status        "PENDING | IN_PROGRESS | COMPLETED | SKIPPED"
    }

    interview {
        int      id            PK
        int      applicationId FK
        enum     type          "PHONE | VIDEO | IN_PERSON | PANEL | TECHNICAL | HR"
        datetime scheduledAt
        enum     status        "SCHEDULED | CONFIRMED | COMPLETED | CANCELLED"
    }

    user        ||--o{ job             : "recruiter posts"
    job         ||--o{ round           : "has rounds"
    job         ||--o{ application     : "receives"
    user        ||--o{ application     : "student applies"
    application ||--o{ roundSubmission : "has submissions"
    round       ||--o{ roundSubmission : "receives"
    application ||--o{ interview       : "schedules"

    %% ─────────────────────────────────────────────
    %% EXTERNAL / ADMIN JOBS
    %% ─────────────────────────────────────────────

    adminJob {
        int      id       PK
        string   company
        string   role
        datetime expiresAt
        boolean  isActive
    }

    externalJobApplication {
        int studentId  FK
        int adminJobId FK
    }

    user        ||--o{ externalJobApplication : "applies to"
    adminJob    ||--o{ externalJobApplication : "receives"

    %% ─────────────────────────────────────────────
    %% COMPANIES
    %% ─────────────────────────────────────────────

    company {
        int    id          PK
        int    createdById FK
        string name
        string slug        UK
        string industry
        enum   size        "STARTUP | SMALL | MEDIUM | LARGE | ENTERPRISE"
        float  avgRating
        boolean isApproved
    }

    companyReview {
        int  id        PK
        int  companyId FK
        int  userId    FK
        int  rating
        enum status    "PENDING | APPROVED | REJECTED"
    }

    companyContact {
        int    id        PK
        int    companyId FK
        int    addedById FK
        string name
        string designation
        string email
    }

    companyContribution {
        int  id           PK
        int  userId       FK
        int  reviewedById FK
        enum type         "NEW_COMPANY | EDIT_COMPANY | ADD_CONTACT | ADD_REVIEW"
        enum status       "PENDING | APPROVED | REJECTED"
    }

    interviewExperience {
        int  id        PK
        int  companyId FK
        int  userId    FK
        string role
        enum   outcome "SELECTED | REJECTED | WITHDRAWN | PENDING | GHOSTED"
        enum   status  "PENDING | APPROVED | REJECTED"
    }

    interviewExperienceUpvote {
        int id           PK
        int experienceId FK
        int userId       FK
    }

    user                 ||--o{ company                   : "creates"
    company              ||--o{ companyReview             : "has"
    user                 ||--o{ companyReview             : "writes"
    company              ||--o{ companyContact            : "has contacts"
    user                 ||--o{ companyContribution       : "submits"
    user                 ||--o{ interviewExperience       : "shares"
    company              ||--o{ interviewExperience       : "linked to"
    interviewExperience  ||--o{ interviewExperienceUpvote : "receives"
    user                 ||--o{ interviewExperienceUpvote : "upvotes"

    %% ─────────────────────────────────────────────
    %% ATS & RESUME TOOLS
    %% ─────────────────────────────────────────────

    atsScore {
        int    id           PK
        int    studentId    FK
        string resumeUrl
        int    overallScore
    }

    generatedResume {
        int    id          PK
        int    userId      FK
        string title
        string latexContent
    }

    generatedCoverLetter {
        int    id        PK
        int    studentId FK
        string jobTitle
        string content
        string tone
    }

    user ||--o{ atsScore            : "scored"
    user ||--o{ generatedResume     : "generates"
    user ||--o{ generatedCoverLetter : "generates"

    %% ─────────────────────────────────────────────
    %% PAYMENTS
    %% ─────────────────────────────────────────────

    payment {
        int    id     PK
        int    userId FK
        int    amount
        enum   plan   "FREE | MONTHLY | YEARLY"
        enum   status "PENDING | SUCCESS | FAILED"
    }

    user ||--o{ payment : "makes"

    %% ─────────────────────────────────────────────
    %% DSA
    %% ─────────────────────────────────────────────

    dsaProblem {
        int    id         PK
        string title
        string slug       UK
        string difficulty
        int    leetcodeId
    }

    studentDsaProgress {
        int  id        PK
        int  studentId FK
        int  problemId FK
        boolean solved
    }

    dsaBookmark {
        int studentId FK
        int problemId FK
    }

    dsaSubmission {
        int    id        PK
        int    studentId FK
        int    problemId FK
        string language
        boolean allPassed
    }

    dsaProblemReport {
        int userId    FK
        int problemId FK
    }

    dsaTestCase {
        int problemId FK
        string input
        string expected
    }

    user       ||--o{ studentDsaProgress : "tracks"
    dsaProblem ||--o{ studentDsaProgress : "tracked by"
    user       ||--o{ dsaBookmark        : "bookmarks"
    dsaProblem ||--o{ dsaBookmark        : "bookmarked by"
    user       ||--o{ dsaSubmission      : "submits"
    dsaProblem ||--o{ dsaSubmission      : "receives"
    user       ||--o{ dsaProblemReport   : "reports"
    dsaProblem ||--o{ dsaProblemReport   : "reported via"
    dsaProblem ||--o{ dsaTestCase        : "has"

    %% ─────────────────────────────────────────────
    %% APTITUDE
    %% ─────────────────────────────────────────────

    aptitudeCategory {
        int    id   PK
        string name UK
        string slug UK
    }

    aptitudeTopic {
        int categoryId FK
        string name
        string slug        UK
    }

    aptitudeQuestion {
        int topicId FK
        string question
        string correctAnswer
        string difficulty
    }

    studentAptitudeProgress {
        int     id         PK
        int     studentId  FK
        int     questionId FK
        boolean answered
        boolean correct
    }

    aptitudeCategory ||--o{ aptitudeTopic            : "groups"
    aptitudeTopic    ||--o{ aptitudeQuestion          : "has"
    user             ||--o{ studentAptitudeProgress   : "tracks"
    aptitudeQuestion ||--o{ studentAptitudeProgress   : "tracked by"

    %% ─────────────────────────────────────────────
    %% SKILL TESTS
    %% ─────────────────────────────────────────────

    skillTest {
        int    id         PK
        int    createdById FK
        string skillName
        enum   difficulty "BEGINNER | INTERMEDIATE | ADVANCED"
        boolean isActive
    }

    skillTestQuestion {
        int testId FK
        string question
        int    correctIndex
    }

    skillTestAttempt {
        int     id        PK
        int     testId    FK
        int     studentId FK
        int     score
        boolean passed
    }

    verifiedSkill {
        int    id        PK
        int    studentId FK
        string skillName
        int    score
    }

    user          ||--o{ skillTest         : "creates"
    skillTest     ||--o{ skillTestQuestion : "has"
    skillTest     ||--o{ skillTestAttempt  : "attempted via"
    user          ||--o{ skillTestAttempt  : "attempts"
    user          ||--o{ verifiedSkill     : "earns"

    %% ─────────────────────────────────────────────
    %% BADGES
    %% ─────────────────────────────────────────────

    badge {
        int    id       PK
        string name
        string slug     UK
        enum   category "CAREER | QUIZ | SKILL | CONTRIBUTION | MILESTONE"
    }

    studentBadge {
        int studentId FK
        int badgeId   FK
    }

    badge ||--o{ studentBadge : "awarded via"
    user  ||--o{ studentBadge : "earns"

    %% ─────────────────────────────────────────────
    %% BLOGS
    %% ─────────────────────────────────────────────

    blogPost {
        int    id       PK
        int    authorId FK
        string title
        string slug     UK
        enum   status   "DRAFT | PUBLISHED"
        enum   category
    }

    user ||--o{ blogPost : "authors"

    %% ─────────────────────────────────────────────
    %% OPEN SOURCE REPOS
    %% ─────────────────────────────────────────────

    repoRequest {
        int    id     PK
        int    userId FK
        string name
        string url
        enum   status "PENDING | APPROVED | REJECTED"
    }

    user ||--o{ repoRequest : "suggests"

    %% ─────────────────────────────────────────────
    %% EMAIL CAMPAIGNS
    %% ─────────────────────────────────────────────

    emailCampaign {
        int    id     PK
        int    userId FK
        string name
        enum   status "DRAFT | QUEUED | SENDING | PAUSED | COMPLETED | FAILED"
    }

    emailLog {
        int    id         PK
        int    campaignId FK
        string recipientEmail
        enum   status     "PENDING | SENT | FAILED"
    }

    user         ||--o{ emailCampaign : "creates"
    emailCampaign ||--o{ emailLog     : "generates"

    %% ─────────────────────────────────────────────
    %% AI — JOB DISCOVERY (ai.prisma)
    %% ─────────────────────────────────────────────

    jobIndex {
        int    id         PK
        enum   sourceType "INTERNAL | SCRAPED | ADMIN"
        int    sourceId
        string title
        string company
        boolean isActive
        boolean hasEmbedding
    }

    userJobPreference {
        int  id     PK
        int  userId FK
    }

    jobMatch {
        int   id         PK
        int   userId     FK
        int   jobIndexId FK
        float score
        boolean applied
    }

    jobAgentConversation {
        int     id     PK
        int     userId FK
        boolean isActive
    }

    user     ||--o| userJobPreference    : "has"
    user     ||--o{ jobMatch             : "matched to"
    jobIndex ||--o{ jobMatch             : "matched via"
    user     ||--o{ jobAgentConversation : "chats in"

    %% ─────────────────────────────────────────────
    %% ROADMAPS (roadmap.prisma)
    %% ─────────────────────────────────────────────

    roadmap {
        int     id          PK
        int     ownerUserId FK
        string  slug        UK
        string  title
        boolean isPublished
        boolean isPremium
        boolean isAiGenerated
    }

    roadmapSection {
        int roadmapId  FK
        string title
        int    orderIndex
    }

    roadmapTopic {
        int sectionId FK
        string title
        string contentMd
        int    orderIndex
    }

    roadmapResource {
        int  id      PK
        int  topicId FK
        enum kind    "VIDEO | ARTICLE | DOCS | COURSE | BOOK | PROJECT | OTHER"
        string url
    }

    roadmapEnrollment {
        int  id        PK
        int  userId    FK
        int  roadmapId FK
        enum status    "ACTIVE | PAUSED | COMPLETED | ABANDONED"
    }

    roadmapTopicProgress {
        int  id           PK
        int  enrollmentId FK
        int  topicId      FK
        enum status       "NOT_STARTED | IN_PROGRESS | COMPLETED | SKIPPED"
    }

    user              ||--o{ roadmap              : "owns (private)"
    roadmap           ||--o{ roadmapSection       : "has"
    roadmapSection    ||--o{ roadmapTopic         : "has"
    roadmapTopic      ||--o{ roadmapResource      : "has"
    user              ||--o{ roadmapEnrollment    : "enrolls"
    roadmap           ||--o{ roadmapEnrollment    : "enrolled via"
    roadmapEnrollment ||--o{ roadmapTopicProgress : "tracks"
    roadmapTopic      ||--o{ roadmapTopicProgress : "tracked by"

    %% ─────────────────────────────────────────────
    %% HR MODULE (hr.prisma)
    %% ─────────────────────────────────────────────

    department {
        int     id       PK
        int     parentId FK
        string  name     UK
        boolean isActive
    }

    employee {
        int  id                 PK
        int  userId             FK
        int  departmentId       FK
        int  reportingManagerId FK
        string employeeCode     UK
        enum   status          "ONBOARDING | ACTIVE | ON_LEAVE | EXITED"
        enum   employmentType  "FULL_TIME | PART_TIME | CONTRACT | INTERN"
    }

    leaveRequest {
        int  id         PK
        int  employeeId FK
        int  approverId FK
        enum leaveType
        enum status     "PENDING | APPROVED | REJECTED | CANCELLED"
    }

    attendanceRecord {
        int  id         PK
        int  employeeId FK
        enum status     "PRESENT | ABSENT | HALF_DAY | ON_LEAVE | HOLIDAY"
    }

    payrollRecord {
        int  id         PK
        int  employeeId FK
        int  month
        int  year
        enum status     "DRAFT | PROCESSING | APPROVED | PAID | CANCELLED"
    }

    performanceReview {
        int  id         PK
        int  employeeId FK
        int  reviewerId FK
        enum cycle      "QUARTERLY | HALF_YEARLY | ANNUAL"
        enum status     "DRAFT | SELF_REVIEW | MANAGER_REVIEW | COMPLETED"
    }

    hrTask {
        int  id          PK
        int  assigneeId  FK
        int  creatorId   FK
        int  parentTaskId FK
        enum priority    "LOW | MEDIUM | HIGH | URGENT"
        enum status      "TODO | IN_PROGRESS | IN_REVIEW | DONE | CANCELLED"
    }

    department  ||--o| department        : "parent of (hierarchy)"
    department  ||--o{ employee          : "employs"
    user        ||--o| employee          : "linked to"
    employee    ||--o| employee          : "manages (reporting)"
    employee    ||--o{ leaveRequest      : "requests"
    employee    ||--o{ attendanceRecord  : "has"
    employee    ||--o{ payrollRecord     : "has"
    employee    ||--o{ performanceReview : "reviewed in"
    employee    ||--o{ hrTask            : "assigned to"
    hrTask      ||--o| hrTask            : "parent of (sub-tasks)"

    %% ─────────────────────────────────────────────
    %% HACKATHONS
    %% ─────────────────────────────────────────────

    hackathon {
        int    id        PK
        string name
        string organizer
        string status
        string ecosystem
    }

    hackathonParticipation {
        int  id          PK
        int  userId      FK
        int  hackathonId FK
        enum status      "INTERESTED | PARTICIPATING"
    }

    user      ||--o{ hackathonParticipation : "joins"
    hackathon ||--o{ hackathonParticipation : "has"

    %% ─────────────────────────────────────────────
    %% RECRUITER TOOLS
    %% ─────────────────────────────────────────────

    savedCandidate {
        int recruiterId FK
        int studentId   FK
    }

    userCustomRole {
        int userId FK
        int roleId FK
    }

    customRole {
        int    id   PK
        string name UK
    }

    user       ||--o{ savedCandidate : "recruiter saves"
    user       ||--o{ savedCandidate : "saved as candidate"
    customRole ||--o{ userCustomRole : "assigned via"
    user       ||--o{ userCustomRole : "has"

    %% ─────────────────────────────────────────────
    %% USAGE & ACTIVITY
    %% ─────────────────────────────────────────────

    usageLog {
        int  id     PK
        int  userId FK
        enum action "ATS_SCORE | COVER_LETTER | GENERATE_RESUME | JOB_APPLICATION | MOCK_INTERVIEW"
    }

    user ||--o{ usageLog : "generates"
```

---

## Schema File Map

| Schema File | Key Models |
|---|---|
| [`base.prisma`](../server/src/database/prisma/schema/base.prisma) | `user`, `job`, `application`, `round`, `company`, `atsScore`, `dsaProblem`, `aptitudeCategory`, `skillTest`, `badge`, `payment`, `blogPost`, `hackathon` |
| [`hr.prisma`](../server/src/database/prisma/schema/hr.prisma) | `employee`, `department`, `leaveRequest`, `attendanceRecord`, `payrollRecord`, `performanceReview`, `hrTask` |
| [`ai.prisma`](../server/src/database/prisma/schema/ai.prisma) | `jobIndex`, `userJobPreference`, `jobMatch`, `jobAgentConversation`, `generatedResume`, `generatedCoverLetter` |
| [`roadmap.prisma`](../server/src/database/prisma/schema/roadmap.prisma) | `roadmap`, `roadmapSection`, `roadmapTopic`, `roadmapResource`, `roadmapEnrollment`, `roadmapTopicProgress` |

## Relationship Quick Reference

| Relationship | Type | Description |
|---|---|---|
| `user` → `job` | One-to-Many | A recruiter posts many jobs |
| `user` → `application` | One-to-Many | A student submits many applications |
| `job` → `application` | One-to-Many | A job receives many applications |
| `job` → `round` | One-to-Many | A job has ordered interview rounds |
| `application` → `roundSubmission` | One-to-Many | Each application tracks per-round submissions |
| `user` → `employee` | One-to-One | An HR employee is linked to a platform user |
| `employee` → `employee` | Self-referential | Manager → direct reports hierarchy |
| `department` → `department` | Self-referential | Parent → child department hierarchy |
| `user` → `jobMatch` | One-to-Many | AI matches jobs to a user's preference profile |
| `roadmap` → `roadmapEnrollment` | One-to-Many | Many users can enroll in one roadmap |
| `user` → `savedCandidate` | Many-to-Many (via join) | Recruiters save student profiles |
