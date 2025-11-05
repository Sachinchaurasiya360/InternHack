Sure — now that InternHack is fully focused on **career preparation + internships + placements + AI-driven practice**, we can design a *complete, production-scale API map* (like what you'd find in an enterprise SaaS backend).

This includes **auth**, **user management**, **aptitude**, **DSA**, **mock interviews**, **AI**, **notifications**, **payments**, **analytics**, and more — all versioned cleanly under `/api/v1/`.

Let’s write it in clean **Markdown**, grouped by functional domains.
This is exactly how modern backends like PrepInsta, Scaler, or LeetCode would architect their APIs.

---

# 🚀 InternHack — API Routes (v1)

> **Base URL:** `/api/v1`
> **Description:** RESTful API endpoints for InternHack — the AI-powered career preparation and placement platform.

---

## 🧩 1. Authentication & User Management

| Method | Route                   | Description                                    |
| ------ | ----------------------- | ---------------------------------------------- |
| `POST` | `/auth/register`        | Register new user (student, mentor, HR, admin) |
| `POST` | `/auth/login`           | Log in with email/password                     |
| `POST` | `/auth/logout`          | Invalidate active session                      |
| `GET`  | `/auth/me`              | Get current user profile                       |
| `POST` | `/auth/refresh`         | Refresh JWT token                              |
| `POST` | `/auth/verify-email`    | Verify email via OTP                           |
| `POST` | `/auth/forgot-password` | Send password reset link                       |
| `POST` | `/auth/reset-password`  | Reset password                                 |
| `POST` | `/auth/2fa/setup`       | Enable 2FA for extra security                  |
| `POST` | `/auth/2fa/verify`      | Verify 2FA code                                |

---

## 👤 2. User Profile & Resume Management

| Method   | Route                        | Description                    |
| -------- | ---------------------------- | ------------------------------ |
| `GET`    | `/user/profile`              | Get logged-in user profile     |
| `PATCH`  | `/user/profile`              | Update profile info            |
| `GET`    | `/user/:id`                  | Get public user profile        |
| `POST`   | `/user/resume/upload`        | Upload resume PDF              |
| `GET`    | `/user/resume/:id`           | Get user resume                |
| `POST`   | `/user/resume/analyze`       | AI-based resume review         |
| `GET`    | `/user/portfolio`            | Get portfolio projects         |
| `POST`   | `/user/portfolio`            | Add project to portfolio       |
| `DELETE` | `/user/portfolio/:projectId` | Delete project                 |
| `GET`    | `/user/badges`               | Get user badges & achievements |
| `GET`    | `/user/skills`               | Fetch user skills              |
| `PATCH`  | `/user/skills`               | Update or add skills           |

---

## 🧮 3. Aptitude Preparation

| Method | Route                           | Description                      |
| ------ | ------------------------------- | -------------------------------- |
| `GET`  | `/aptitude/topics`              | List aptitude topics             |
| `GET`  | `/aptitude/topic/:id/questions` | Get questions for a topic        |
| `POST` | `/aptitude/submit`              | Submit test answers              |
| `GET`  | `/aptitude/history`             | Fetch user’s past test history   |
| `GET`  | `/aptitude/mock-tests`          | Get available mock tests         |
| `POST` | `/aptitude/mock-tests/start`    | Start mock test                  |
| `POST` | `/aptitude/mock-tests/submit`   | Submit mock test                 |
| `GET`  | `/aptitude/analytics`           | Topic-wise performance breakdown |
| `GET`  | `/aptitude/leaderboard`         | Leaderboard by college or region |

---

## 💻 4. DSA Practice

| Method | Route                         | Description                     |
| ------ | ----------------------------- | ------------------------------- |
| `GET`  | `/dsa/topics`                 | List all DSA topics             |
| `GET`  | `/dsa/topic/:id/questions`    | Fetch DSA questions             |
| `GET`  | `/dsa/question/:id`           | Get question details            |
| `POST` | `/dsa/submit/:id`             | Submit code solution            |
| `GET`  | `/dsa/submissions`            | List previous submissions       |
| `GET`  | `/dsa/analytics`              | DSA performance insights        |
| `GET`  | `/dsa/company/:company`       | Get company-wise DSA questions  |
| `GET`  | `/dsa/daily-challenge`        | Get today’s daily challenge     |
| `POST` | `/dsa/daily-challenge/submit` | Submit daily challenge solution |

---

## 🏢 5. Company-Wise Preparation

| Method | Route                              | Description                    |
| ------ | ---------------------------------- | ------------------------------ |
| `GET`  | `/company`                         | List all companies             |
| `GET`  | `/company/:name`                   | Get company details            |
| `GET`  | `/company/:name/questions`         | Company-specific question bank |
| `GET`  | `/company/:name/interview-process` | Company hiring process         |
| `GET`  | `/company/:name/aptitude`          | Aptitude questions             |
| `GET`  | `/company/:name/dsa`               | DSA patterns from interviews   |
| `GET`  | `/company/:name/hr`                | HR question sets               |
| `GET`  | `/company/:name/resources`         | Guides and placement tips      |

---

## 🎤 6. Mock Interviews

| Method | Route                | Description                         |
| ------ | -------------------- | ----------------------------------- |
| `POST` | `/mock/start`        | Start AI-driven mock interview      |
| `POST` | `/mock/submit`       | Submit interview answers            |
| `GET`  | `/mock/history`      | User’s past mock sessions           |
| `GET`  | `/mock/feedback/:id` | Get AI/mentor feedback              |
| `POST` | `/mock/retry/:id`    | Retry a mock interview              |
| `GET`  | `/mock/report/:id`   | Download feedback report            |
| `POST` | `/mock/live`         | Schedule mentor live mock interview |
| `GET`  | `/mock/availability` | Fetch mentor time slots             |

---

## 🧠 7. AI Assistant & Recommendations

| Method | Route                              | Description                         |
| ------ | ---------------------------------- | ----------------------------------- |
| `POST` | `/ai/resume-review`                | AI feedback on resume               |
| `POST` | `/ai/interview-feedback`           | Evaluate mock answers               |
| `POST` | `/ai/question-suggest`             | Suggest new practice questions      |
| `POST` | `/ai/roadmap`                      | Generate learning roadmap           |
| `POST` | `/ai/career-match`                 | Recommend career path               |
| `POST` | `/ai/company-match`                | Suggest companies based on skills   |
| `POST` | `/ai/improvement-plan`             | Personalized skill improvement plan |
| `POST` | `/ai/interview-question-generator` | Generate role-specific questions    |

---

## 📚 8. Learning & Courses

| Method | Route                      | Description             |
| ------ | -------------------------- | ----------------------- |
| `GET`  | `/courses`                 | List available courses  |
| `GET`  | `/courses/:id`             | Get course details      |
| `POST` | `/courses/enroll/:id`      | Enroll in course        |
| `GET`  | `/courses/enrolled`        | List enrolled courses   |
| `GET`  | `/courses/:id/progress`    | Track progress          |
| `POST` | `/courses/:id/complete`    | Mark module as complete |
| `GET`  | `/courses/recommendations` | AI course suggestions   |

---

## 💼 9. Job & Internship Listings

| Method | Route                    | Description                  |
| ------ | ------------------------ | ---------------------------- |
| `GET`  | `/jobs`                  | Get all job listings         |
| `GET`  | `/jobs/:id`              | Get job details              |
| `POST` | `/jobs/apply/:id`        | Apply for a job              |
| `GET`  | `/jobs/applied`          | Get user’s applications      |
| `GET`  | `/internships`           | Get all internships          |
| `GET`  | `/internships/:id`       | Get internship details       |
| `POST` | `/internships/apply/:id` | Apply for internship         |
| `GET`  | `/internships/applied`   | List applied internships     |
| `GET`  | `/jobs/recommended`      | AI-based job recommendations |

---

## 🧾 10. Payment & Subscription

| Method   | Route                   | Description                      |
| -------- | ----------------------- | -------------------------------- |
| `POST`   | `/payment/checkout`     | Initiate Razorpay/Stripe payment |
| `POST`   | `/payment/webhook`      | Handle webhook events            |
| `GET`    | `/payment/status/:id`   | Payment verification             |
| `GET`    | `/payment/history`      | Transaction history              |
| `POST`   | `/payment/upgrade`      | Upgrade to premium               |
| `GET`    | `/payment/subscription` | Get current subscription plan    |
| `DELETE` | `/payment/cancel`       | Cancel subscription              |
| `GET`    | `/payment/offers`       | List available offers            |
| `POST`   | `/payment/refund/:id`   | Request refund                   |

---

## 🔔 11. Notifications & Communication

| Method   | Route                         | Description         |
| -------- | ----------------------------- | ------------------- |
| `GET`    | `/notifications`              | Fetch notifications |
| `POST`   | `/notifications`              | Create notification |
| `PATCH`  | `/notifications/:id/read`     | Mark as read        |
| `DELETE` | `/notifications/:id`          | Delete notification |
| `GET`    | `/notifications/unread-count` | Unread count        |
| `GET`    | `/chat/rooms`                 | List chat rooms     |
| `GET`    | `/chat/rooms/:id`             | Get chat messages   |
| `POST`   | `/chat/rooms/:id/message`     | Send message        |

---

## 📈 12. Analytics & Reports

| Method | Route                       | Description                    |
| ------ | --------------------------- | ------------------------------ |
| `GET`  | `/analytics/user`           | User performance analytics     |
| `GET`  | `/analytics/aptitude`       | Aptitude performance           |
| `GET`  | `/analytics/dsa`            | DSA analytics                  |
| `GET`  | `/analytics/mock`           | Interview feedback summary     |
| `GET`  | `/analytics/placement`      | Job/internship conversion rate |
| `GET`  | `/analytics/skill-progress` | Skill graph data               |
| `GET`  | `/analytics/weekly`         | Weekly report summary          |
| `GET`  | `/analytics/college`        | College-wide analytics (TPO)   |
| `GET`  | `/analytics/platform`       | Platform usage metrics (admin) |

---

## 🧩 13. Admin Panel

| Method   | Route                   | Description             |
| -------- | ----------------------- | ----------------------- |
| `GET`    | `/admin/users`          | List all users          |
| `PATCH`  | `/admin/users/:id/role` | Change user role        |
| `DELETE` | `/admin/users/:id`      | Delete user             |
| `GET`    | `/admin/transactions`   | View payment logs       |
| `GET`    | `/admin/analytics`      | Platform analytics      |
| `GET`    | `/admin/logs`           | Access activity logs    |
| `POST`   | `/admin/announcement`   | Broadcast notification  |
| `GET`    | `/admin/settings`       | Fetch platform settings |
| `PATCH`  | `/admin/settings`       | Update configuration    |

---

## 🧠 14. Recommendation & Ranking

| Method | Route                      | Description               |
| ------ | -------------------------- | ------------------------- |
| `GET`  | `/recommendations`         | General AI suggestions    |
| `GET`  | `/recommendations/jobs`    | Job recommendations       |
| `GET`  | `/recommendations/courses` | Course recommendations    |
| `GET`  | `/recommendations/dsa`     | Personalized DSA practice |
| `GET`  | `/leaderboard`             | Global leaderboard        |
| `GET`  | `/leaderboard/:college`    | College leaderboard       |

---

## ☁️ 15. File & Media Uploads

| Method   | Route                 | Description                    |
| -------- | --------------------- | ------------------------------ |
| `POST`   | `/upload`             | Upload file (S3 or Cloudinary) |
| `GET`    | `/upload/:id`         | Fetch file by ID               |
| `DELETE` | `/upload/:id`         | Delete file                    |
| `POST`   | `/upload/avatar`      | Upload profile picture         |
| `POST`   | `/upload/resume`      | Upload resume                  |
| `POST`   | `/upload/certificate` | Upload certificate             |

---

## 🔐 16. Security & Access Control

| Method   | Route                  | Description        |
| -------- | ---------------------- | ------------------ |
| `GET`    | `/security/audit`      | View audit logs    |
| `POST`   | `/security/audit`      | Create audit entry |
| `GET`    | `/security/roles`      | List access roles  |
| `POST`   | `/security/roles`      | Add role           |
| `PATCH`  | `/security/roles/:id`  | Update role        |
| `GET`    | `/security/tokens`     | Active tokens list |
| `DELETE` | `/security/tokens/:id` | Revoke token       |

---

## ⚙️ 17. System & Utility

| Method | Route             | Description            |
| ------ | ----------------- | ---------------------- |
| `GET`  | `/system/health`  | Health check endpoint  |
| `GET`  | `/system/version` | API version info       |
| `GET`  | `/system/config`  | Platform configuration |
| `GET`  | `/system/uptime`  | Uptime monitor         |
| `GET`  | `/system/time`    | Server time            |
| `GET`  | `/system/status`  | System diagnostics     |

---
