# 🚀 InternHack API Routes (v1)

## 👤 Authentication & User Management

| Method | Route                          | Description                                              |
| ------ | ------------------------------ | -------------------------------------------------------- |
| `POST` | `/api/v1/auth/register`        | Register as participant, organizer, mentor, or recruiter |
| `POST` | `/api/v1/auth/login`           | Log in and receive JWT                                   |
| `POST` | `/api/v1/auth/logout`          | Log out and revoke session                               |
| `GET`  | `/api/v1/auth/refresh`         | Refresh expired token                                    |
| `POST` | `/api/v1/auth/verify-email`    | Verify user’s email                                      |
| `POST` | `/api/v1/auth/forgot-password` | Send password reset link                                 |
| `POST` | `/api/v1/auth/reset-password`  | Reset password using token                               |

---

## 👥 User Profiles

| Method   | Route                         | Description                           |
| -------- | ----------------------------- | ------------------------------------- |
| `GET`    | `/api/v1/user/me`             | Get logged-in user details            |
| `PATCH`  | `/api/v1/user/me`             | Update user profile                   |
| `GET`    | `/api/v1/user/:id`            | Get public profile of any user        |
| `GET`    | `/api/v1/user/:id/hackathons` | Get hackathons a user participated in |
| `GET`    | `/api/v1/user/:id/teams`      | Get user’s teams                      |
| `GET`    | `/api/v1/user/:id/jobs`       | Get jobs the user applied for         |

---

## 🏆 Hackathon Management

| Method   | Route                                | Description                           |
| -------- | ------------------------------------ | ------------------------------------- |
| `GET`    | `/api/v1/hackathon`                  | List all hackathons                   |
| `GET`    | `/api/v1/hackathon?city=mumbai`      | Filter hackathons by city             |
| `GET`    | `/api/v1/hackathon?status=ongoing`   | Filter by status                      |
| `GET`    | `/api/v1/hackathon/:id`              | Get hackathon details                 |
| `POST`   | `/api/v1/hackathon`                  | Organizer creates a hackathon         |
| `PATCH`  | `/api/v1/hackathon/:id`              | Update hackathon details              |
| `DELETE` | `/api/v1/hackathon/:id`              | Delete hackathon (admin or organizer) |
| `POST`   | `/api/v1/hackathon/:id/register`     | Register team or participant          |
| `GET`    | `/api/v1/hackathon/:id/participants` | List participants                     |
| `GET`    | `/api/v1/hackathon/:id/mentors`      | List assigned mentors                 |
| `GET`    | `/api/v1/hackathon/:id/sponsors`     | Get sponsors list                     |
| `POST`   | `/api/v1/hackathon/:id/announce`     | Announce winners or results           |

---

## 🧑‍💻 Team Management

| Method   | Route                      | Description                     |
| -------- | -------------------------- | ------------------------------- |
| `POST`   | `/api/v1/team`             | Create a new team               |
| `GET`    | `/api/v1/team`             | Get all teams of logged-in user |
| `GET`    | `/api/v1/team/:id`         | Get team details                |
| `PATCH`  | `/api/v1/team/:id`         | Update team info                |
| `DELETE` | `/api/v1/team/:id`         | Delete team                     |
| `POST`   | `/api/v1/team/:id/invite`  | Invite user to team             |
| `POST`   | `/api/v1/team/:id/accept`  | Accept team invitation          |
| `POST`   | `/api/v1/team/:id/leave`   | Leave a team                    |
| `GET`    | `/api/v1/team/:id/members` | Get team members                |

---

## 🧾 Submissions & Projects

| Method   | Route                          | Description                               |
| -------- | ------------------------------ | ----------------------------------------- |
| `POST`   | `/api/v1/submission`           | Submit project for hackathon              |
| `GET`    | `/api/v1/submission`           | List all submissions for a hackathon      |
| `GET`    | `/api/v1/submission/:id`       | Get a single submission                   |
| `PATCH`  | `/api/v1/submission/:id`       | Update submission                         |
| `DELETE` | `/api/v1/submission/:id`       | Withdraw submission                       |
| `GET`    | `/api/v1/submission/:id/files` | Get project files (AWS S3 or GitHub link) |

---

## 🧑‍🏫 Mentor Collaboration

| Method | Route                         | Description                 |
| ------ | ----------------------------- | --------------------------- |
| `GET`  | `/api/v1/mentor`              | List all mentors            |
| `GET`  | `/api/v1/mentor/:id`          | Get mentor details          |
| `POST` | `/api/v1/mentor`              | Register as mentor          |
| `GET`  | `/api/v1/mentor/:id/sessions` | Get mentor’s sessions       |
| `POST` | `/api/v1/mentor/:id/feedback` | Leave feedback for mentor   |
| `POST` | `/api/v1/mentor/:id/schedule` | Schedule mentorship session |

---

## 🧠 Organizer Tools

| Method | Route                                 | Description                |
| ------ | ------------------------------------- | -------------------------- |
| `GET`  | `/api/v1/organizer`                   | List all organizers        |
| `POST` | `/api/v1/organizer`                   | Register as organizer      |
| `GET`  | `/api/v1/organizer/:id/hackathons`    | Get hackathons organized   |
| `GET`  | `/api/v1/organizer/:id/dashboard`     | Organizer dashboard data   |
| `POST` | `/api/v1/organizer/:id/invite-mentor` | Invite mentor to hackathon |

---

## 💼 Recruiter & Job Management

| Method   | Route                            | Description               |
| -------- | -------------------------------- | ------------------------- |
| `GET`    | `/api/v1/recruiter`              | List all recruiters       |
| `POST`   | `/api/v1/recruiter`              | Register as recruiter     |
| `GET`    | `/api/v1/recruiter/:id/jobs`     | Get recruiter’s job posts |
| `POST`   | `/api/v1/recruiter/job`          | Create new job listing    |
| `GET`    | `/api/v1/job`                    | Browse all job listings   |
| `GET`    | `/api/v1/job/:id`                | Get job details           |
| `PATCH`  | `/api/v1/job/:id`                | Update job posting        |
| `DELETE` | `/api/v1/job/:id`                | Delete job posting        |
| `POST`   | `/api/v1/job/:id/apply`          | Apply to a job            |
| `GET`    | `/api/v1/job/:id/status`         | Check application status  |
| `GET`    | `/api/v1/job/:id/rounds`         | Get interview rounds info |
| `POST`   | `/api/v1/job/:id/round/ai`       | Conduct AI interview      |
| `POST`   | `/api/v1/job/:id/round/resume`   | Resume screening round    |
| `POST`   | `/api/v1/job/:id/round/personal` | Schedule final interview  |

---

## 🪙 Payments & Billing

| Method | Route                        | Description                               |
| ------ | ---------------------------- | ----------------------------------------- |
| `POST` | `/api/v1/payment/checkout`   | Initiate payment for hackathon or service |
| `POST` | `/api/v1/payment/webhook`    | Handle Razorpay webhook                   |
| `GET`  | `/api/v1/payment/status/:id` | Check payment status                      |
| `GET`  | `/api/v1/payment/history`    | List user’s transactions                  |

---

## 📣 Notifications & Communication

| Method   | Route                            | Description                        |
| -------- | -------------------------------- | ---------------------------------- |
| `GET`    | `/api/v1/notifications`          | Get user notifications             |
| `POST`   | `/api/v1/notifications`          | Create notification (system/admin) |
| `PATCH`  | `/api/v1/notifications/:id/read` | Mark notification as read          |
| `DELETE` | `/api/v1/notifications/:id`      | Delete notification                |
| `POST`   | `/api/v1/chat/:roomId/message`   | Send message in room               |
| `GET`    | `/api/v1/chat/:roomId`           | Fetch chat messages                |
| `GET`    | `/api/v1/chat/rooms`             | List user’s chat rooms             |

---

## 🧾 Leaderboards & Analytics

| Method | Route                              | Description                        |
| ------ | ---------------------------------- | ---------------------------------- |
| `GET`  | `/api/v1/leaderboard`              | Global leaderboard                 |
| `GET`  | `/api/v1/leaderboard/:hackathonId` | Leaderboard for specific hackathon |
| `GET`  | `/api/v1/analytics/user/:id`       | User analytics                     |
| `GET`  | `/api/v1/analytics/hackathon/:id`  | Hackathon analytics                |
| `GET`  | `/api/v1/analytics/organizer/:id`  | Organizer analytics                |

---

## 🗂️ Admin Routes

| Method   | Route                         | Description                     |
| -------- | ----------------------------- | ------------------------------- |
| `GET`    | `/api/v1/admin/users`         | List all users                  |
| `GET`    | `/api/v1/admin/hackathons`    | List all hackathons             |
| `GET`    | `/api/v1/admin/reports`       | Platform-level stats            |
| `PATCH`  | `/api/v1/admin/user/:id/role` | Change user role                |
| `DELETE` | `/api/v1/admin/user/:id`      | Delete user                     |
| `POST`   | `/api/v1/admin/announcement`  | Send platform-wide announcement |

---

## ☁️ File & Media Management

| Method   | Route                    | Description           |
| -------- | ------------------------ | --------------------- |
| `POST`   | `/api/v1/upload`         | Upload media (AWS S3) |
| `GET`    | `/api/v1/upload/:fileId` | Retrieve file         |
| `DELETE` | `/api/v1/upload/:fileId` | Delete uploaded file  |

---

## 🧩 System Routes

| Method | Route             | Description                    |
| ------ | ----------------- | ------------------------------ |
| `GET`  | `/api/v1/health`  | Health check endpoint          |
| `GET`  | `/api/v1/version` | Returns current API version    |
| `GET`  | `/api/v1/config`  | Platform configuration details |

---

## 🪶 Summary

That’s roughly **100+ API routes**, cleanly organized by feature module — each easily represented in Next.js App Router as folders:

```
app/
└── api/
    └── v1/
        ├── auth/
        ├── user/
        ├── hackathon/
        ├── team/
        ├── submission/
        ├── mentor/
        ├── organizer/
        ├── recruiter/
        ├── job/
        ├── payment/
        ├── notifications/
        ├── leaderboard/
        ├── admin/
        ├── upload/
        └── system/
```

