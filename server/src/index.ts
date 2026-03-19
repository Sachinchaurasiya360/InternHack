import "dotenv/config";
import crypto from "crypto";
import express from "express";

import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { authRouter } from "./module/auth/auth.routes.js";
import { jobRouter } from "./module/job/job.routes.js";
import { recruiterRouter } from "./module/recruiter/recruiter.routes.js";
import { studentRouter } from "./module/student/student.routes.js";
import { uploadRouter } from "./module/upload/upload.routes.js";
import { scraperRouter, scraperController } from "./module/scraper/scraper.routes.js";
import { atsRouter } from "./module/ats/ats.routes.js";
import { companyRouter } from "./module/company/company.routes.js";
import { adminRouter } from "./module/admin/admin.routes.js";
import { AdminService } from "./module/admin/admin.service.js";
import { AdminController } from "./module/admin/admin.controller.js";
import { newsletterRouter } from "./module/newsletter/newsletter.routes.js";
import { opensourceRouter } from "./module/opensource/opensource.routes.js";
import { paymentRouter } from "./module/payment/payment.routes.js";
import { blogRouter } from "./module/blog/blog.routes.js";
import { gsocRouter } from "./module/gsoc/gsoc.routes.js";
import { ycRouter } from "./module/yc/yc.routes.js";
import { dsaRouter } from "./module/dsa/dsa.routes.js";
import { aptitudeRouter } from "./module/aptitude/aptitude.routes.js";
import { sqlRouter } from "./module/sql/sql.routes.js";
import { latexRouter } from "./module/latex/latex.routes.js";
import { skillTestRouter } from "./module/skill-test/skill-test.routes.js";
import { hackathonRouter } from "./module/hackathon/hackathon.routes.js";
import { professorRouter } from "./module/professor/professor.routes.js";
import { hrContactRouter } from "./module/hr-contact/hr-contact.routes.js";
import { emailCampaignRouter } from "./module/email-campaign/email-campaign.routes.js";
import { internshipRouter } from "./module/internship/internship.routes.js";
import { campusDriveRouter } from "./module/campus-drive/campus-drive.routes.js";
import { badgeRouter } from "./module/badge/badge.routes.js";
import { leetcodeRouter } from "./module/leetcode/leetcode.routes.js";
import { universityRouter } from "./module/university/university.routes.js";
// ── HR Modules ──
import { rbacRouter } from "./module/rbac/rbac.routes.js";
import { departmentRouter } from "./module/department/department.routes.js";
import { employeeRouter } from "./module/employee/employee.routes.js";
import { leaveRouter } from "./module/leave/leave.routes.js";
import { attendanceRouter } from "./module/attendance/attendance.routes.js";
import { interviewRouter } from "./module/interview/interview.routes.js";
import { hrTaskRouter } from "./module/hr-task/hr-task.routes.js";
import { performanceRouter } from "./module/performance/performance.routes.js";
import { payrollRouter } from "./module/payroll/payroll.routes.js";
import { reimbursementRouter } from "./module/reimbursement/reimbursement.routes.js";
import { onboardingRouter } from "./module/onboarding/onboarding.routes.js";
import { complianceRouter } from "./module/compliance/compliance.routes.js";
import { workflowRouter } from "./module/workflow/workflow.routes.js";
import { hrAnalyticsRouter } from "./module/hr-analytics/hr-analytics.routes.js";
import { sitemapRouter } from "./module/sitemap/sitemap.routes.js";
import { jobFeedRouter } from "./module/job-feed/job-feed.routes.js";
import { jobAgentRouter } from "./module/job-agent/job-agent.routes.js";
import { botSeoMiddleware } from "./middleware/bot-seo.middleware.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { prisma } from "./database/db.js";
import { initServiceProviders } from "./lib/ai-provider-registry.js";
import { startFollowUpCron } from "./cron/scheduled-emails.js";
import { startAIPipelineCrons } from "./cron/internhack-ai.cron.js";
import { startSubscriptionExpiryCron } from "./cron/subscription-expiry.js";
import { recoverActiveCampaigns } from "./module/email-campaign/email-campaign.worker.js";

// ── Validate required environment variables ──
const REQUIRED_ENV = ["DATABASE_URL", "JWT_SECRET"] as const;
for (const key of REQUIRED_ENV) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("trust proxy", 1);
const PORT = process.env["PORT"] || 3000;

// ── Security headers ──
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://accounts.google.com", "https://apis.google.com", "https://www.googletagmanager.com", "https://www.google-analytics.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://accounts.google.com", "https://fonts.googleapis.com"],
        imgSrc: ["'self'", "data:", "https:", "blob:"],
        connectSrc: ["'self'", "https://accounts.google.com", "https://generativelanguage.googleapis.com", "https://www.google-analytics.com", "https://analytics.google.com"],
        frameSrc: ["https://accounts.google.com", "https://checkout.dodopayments.com"],
        fontSrc: ["'self'", "https:", "data:"],
      },
    },
  }),
);

// ── CORS - manual headers (cors package breaks with Express 5 + credentials) ──
const allowedOrigins = new Set(
  (process.env["ALLOWED_ORIGINS"] ?? "http://localhost:5173,https://www.internhack.xyz")
    .split(",")
    .map((s) => s.trim()),
);
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Vary", "Origin");
  }
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    res.setHeader("Access-Control-Max-Age", "86400");
    res.status(204).end();
    return;
  }
  next();
});

// ── Health check ──
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Raw body for Dodo Payments webhook (must be BEFORE express.json())
app.use("/api/payments/webhook", express.raw({ type: "application/json" }));

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "../uploads"), { dotfiles: "deny", index: false }));

// ── Request ID tracing ──
app.use((req, _res, next) => {
  req.headers["x-request-id"] ??= crypto.randomUUID();
  next();
});

// ── HTTP request logging (dev only) ──
if (process.env["NODE_ENV"] !== "production") {
  app.use(morgan("dev"));
}

// ── Rate limiters ──
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests, please try again later" },
});
app.use("/api/", globalLimiter);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: "Too many login attempts, please try again later" },
});
app.use("/api/auth/login", authLimiter);
app.use("/api/auth/register", authLimiter);
app.use("/api/admin/login", authLimiter);

const latexLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  message: { message: "LaTeX compilation limit reached. Try again later." },
});
app.use("/api/latex/compile", latexLimiter);

// ── Routes ──
app.use("/api/auth", authRouter);
app.use("/api/jobs", jobRouter);
app.use("/api/recruiter", recruiterRouter);
app.use("/api/student", studentRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/scraped-jobs", scraperRouter);
app.use("/api/ats", atsRouter);
app.use("/api/companies", companyRouter);
app.use("/api/admin", adminRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/opensource", opensourceRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/blog", blogRouter);
app.use("/api/gsoc", gsocRouter);
app.use("/api/yc", ycRouter);
app.use("/api/dsa", dsaRouter);
app.use("/api/aptitude", aptitudeRouter);
app.use("/api/sql", sqlRouter);
app.use("/api/latex", latexRouter);
app.use("/api/skill-tests", skillTestRouter);
app.use("/api/hackathons", hackathonRouter);
app.use("/api/professors", professorRouter);
app.use("/api/hr-contacts", hrContactRouter);
app.use("/api/email-campaigns", emailCampaignRouter);
app.use("/api/internships", internshipRouter);
app.use("/api/campus-drives", campusDriveRouter);
app.use("/api/badges", badgeRouter);
app.use("/api/leetcode", leetcodeRouter);
app.use("/api/universities", universityRouter);

// ── InternHack AI Routes ──
app.use("/api/job-feed", jobFeedRouter);
app.use("/api/job-agent", jobAgentRouter);

// ── HR Routes ──
app.use("/api/hr/rbac", rbacRouter);
app.use("/api/hr/departments", departmentRouter);
app.use("/api/hr/employees", employeeRouter);
app.use("/api/hr/leave", leaveRouter);
app.use("/api/hr/attendance", attendanceRouter);
app.use("/api/hr/interviews", interviewRouter);
app.use("/api/hr/tasks", hrTaskRouter);
app.use("/api/hr/performance", performanceRouter);
app.use("/api/hr/payroll", payrollRouter);
app.use("/api/hr/reimbursements", reimbursementRouter);
app.use("/api/hr/onboarding", onboardingRouter);
app.use("/api/hr/compliance", complianceRouter);
app.use("/api/hr/workflows", workflowRouter);
app.use("/api/hr/analytics", hrAnalyticsRouter);

// Public external jobs endpoints (no auth)
const publicAdminController = new AdminController(new AdminService());
app.get("/api/external-jobs/:slug", (req, res) => publicAdminController.getPublicExternalJobBySlug(req, res));
app.get("/api/external-jobs", (req, res) => publicAdminController.getPublicExternalJobs(req, res));

// ── Sitemap (served at root, not /api) ──
app.use(sitemapRouter);

// ── Bot SEO headers (Vary: User-Agent, X-Is-Bot for CDN routing) ──
app.use(botSeoMiddleware);

// ── Static files (public folder) ──
app.use(express.static(path.join(__dirname, "../public"), { dotfiles: "deny", index: false }));

// ── Public platform stats with in-memory cache (30 min TTL) ──
let statsCache: { data: unknown; expiresAt: number } | null = null;
const STATS_TTL = 30 * 60 * 1000;

app.get("/api/stats", async (_req, res) => {
  try {
    if (statsCache && statsCache.expiresAt > Date.now()) {
      return res.json(statsCache.data);
    }

    const [users, jobs, companies] = await Promise.all([
      prisma.user.count({ where: { role: "STUDENT" } }),
      prisma.job.count({ where: { status: "PUBLISHED" } }),
      prisma.company.count(),
    ]);

    const data = { users, jobs, companies };
    statsCache = { data, expiresAt: Date.now() + STATS_TTL };
    return res.json(data);
  } catch {
    return res.json({ users: 0, jobs: 0, companies: 0 });
  }
});

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);

  // Load AI service provider configs into memory
  await initServiceProviders().catch((err) => console.error("[AI] Failed to init providers:", err));

  // Start the job scraper cron (every 6 hours)
  const cronSchedule = process.env["SCRAPER_CRON"] || "0 */6 * * *";
  scraperController.getService().startCron(cronSchedule);

  // Start the 10-day follow-up email cron (daily at 9 AM)
  startFollowUpCron();

  // Start subscription expiry cron (daily at midnight)
  startSubscriptionExpiryCron();

  // Resume any in-progress email campaigns
  recoverActiveCampaigns().catch((err) => console.error("[EmailCampaign] Recovery failed:", err));

  // Start InternHack AI pipeline crons
  startAIPipelineCrons();
});
