import "dotenv/config";
import compression from "compression";
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "node:module";
import type { HelmetOptions } from "helmet";
import type { RequestHandler } from "express";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";
import { authRouter } from "./module/auth/auth.routes.js";
import { studentRouter } from "./module/student/student.routes.js";
import { peerMockInterviewRouter } from "./module/peer-mock-interview/peer-mock-interview.routes.js";
import { expertSessionRouter, expertSessionAdminRouter } from "./module/expert-session/expert-session.routes.js";
import { uploadRouter } from "./module/upload/upload.routes.js";
import { scraperRouter, scraperController } from "./module/scraper/scraper.routes.js";
import { signalsRouter, signalsController } from "./module/signals/signals.routes.js";
import { interviewExperienceRouter } from "./module/interview-experience/interview-experience.routes.js";
import { atsRouter } from "./module/ats/ats.routes.js";
import { resumeRouter } from "./module/resume/resume.routes.js";
import { companyRouter } from "./module/company/company.routes.js";
import { adminRouter } from "./module/admin/admin.routes.js";
import { AdminService } from "./module/admin/admin.service.js";
import { AdminController } from "./module/admin/admin.controller.js";
import { newsletterRouter } from "./module/newsletter/newsletter.routes.js";
import { opensourceRouter } from "./module/opensource/opensource.routes.js";
import { paymentRouter } from "./module/payment/payment.routes.js";
import { gsocRouter } from "./module/gsoc/gsoc.routes.js";
import { universityRouter } from "./module/university/university.routes.js";
import { ycRouter } from "./module/yc/yc.routes.js";
import { dsaRouter } from "./module/dsa/dsa.routes.js";
import { aptitudeRouter } from "./module/aptitude/aptitude.routes.js";
import { sqlRouter } from "./module/sql/sql.routes.js";
import { interviewProgressRouter } from "./module/interview-progress/interview-progress.routes.js";
import { latexRouter } from "./module/latex/latex.routes.js";
import { skillTestRouter } from "./module/skill-test/skill-test.routes.js";
import { internshipRouter } from "./module/internship/internship.routes.js";
import { leetcodeRouter } from "./module/leetcode/leetcode.routes.js";
// ── Recruiter + HR modules archived to /archived (feature removed) ──
import { contactRouter } from "./module/contact/contact.routes.js";
import { sitemapRouter } from "./module/sitemap/sitemap.routes.js";
import { jobFeedRouter } from "./module/job-feed/job-feed.routes.js";
import { grantsRouter } from "./module/grants/grants.routes.js";
import { jobAgentRouter } from "./module/job-agent/job-agent.routes.js";
import { emailInboundRouter } from "./module/email-inbound/email-inbound.routes.js";
import { emailPrefsRouter } from "./module/email-prefs/email-prefs.routes.js";
import { milestoneRouter } from "./module/milestone/milestone.routes.js";
import { roadmapRouter } from "./module/roadmap/roadmap.routes.js";
import { recommendationRouter } from "./module/recommendation/recommendation.routes.js";
import { learnRouter } from "./module/learn/learn.routes.js";
import { notesRouter } from "./module/notes/notes.routes.js";
import { behavioralRouter } from "./module/behavioral/behavioral.routes.js";
import analyticsRouter from "./module/analytics/analytics.routes.js";
import { healthRouter } from "./module/health/health.routes.js";
import { botSeoMiddleware } from "./middleware/bot-seo.middleware.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { authIpLimiter, authEmailLimiter } from "./middleware/rate-limit.middleware.js";
import { prisma } from "./database/db.js";
import { initServiceProviders } from "./lib/ai-provider-registry.js";
import { startFollowUpCron, stopFollowUpCron } from "./cron/scheduled-emails.js";
import { startAIPipelineCrons, stopAIPipelineCrons } from "./cron/internhack-ai.cron.js";
import { startSubscriptionExpiryCron, stopSubscriptionExpiryCron } from "./cron/subscription-expiry.js";
import { startScheduledEmailWorker, stopScheduledEmailWorker } from "./cron/scheduled-email-worker.js";
import { startWeeklyRoadmapDigestCron, stopWeeklyRoadmapDigestCron } from "./cron/roadmap-weekly-digest.js";
import { startSignalsCleanupCron, stopSignalsCleanupCron } from "./cron/signals-cleanup.js";
import { startJobCleanupCron, stopJobCleanupCron } from "./cron/job-cleanup.cron.js";
import { startOpensourceRepoStatsCron, stopOpensourceRepoStatsCron } from "./cron/opensource-repo-stats.cron.js";
import { startDeadlineAlertCron, stopDeadlineAlertCron } from "./cron/deadline-alerts.cron.js";
import { startGrantDeadlineAlertCron, stopGrantDeadlineAlertCron } from "./cron/grant-deadline-alerts.cron.js";
import { startPeerMockInterviewRemindersCron, stopPeerMockInterviewRemindersCron } from "./cron/peer-mock-interview-reminders.cron.js";
import { cronRouter } from "./cron/daily-cron.route.js";
import { shutdownManager } from "./utils/graceful-shutdown.js";
import { createLogger } from "./utils/logger.js";

const logger = createLogger("Index");

// helmet ships its callable as a default export, but a clean Vercel install
// resolves its CJS types to a non-callable namespace (TS2349), unlike the local
// nodenext resolution. Load the module value via createRequire (always the CJS
// function at runtime) and type it from the named HelmetOptions export, so the
// call site is fully typed regardless of how the default export resolves.
const nodeRequire = createRequire(import.meta.url);
const helmet = nodeRequire("helmet") as (options?: Readonly<HelmetOptions>) => RequestHandler;


// ── Validate required environment variables ──
const REQUIRED_ENV = ["DATABASE_URL", "JWT_SECRET"] as const;
for (const key of REQUIRED_ENV) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

process.on("unhandledRejection", (reason) => {
  logger.error("unhandledRejection:", reason);
});
process.on("uncaughtException", (err) => {
  logger.error("uncaughtException:", err);
  if (!shutdownManager.isShutdown()) {
    process.exit(1);
  }
});

const app = express();
app.set("trust proxy", 1);
const PORT = process.env["PORT"] || 3000;
const PAYMENT_WEBHOOK_PATH = "/api/payments/webhook";

// ── Security headers ──
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://accounts.google.com", "https://apis.google.com", "https://www.googletagmanager.com", "https://www.google-analytics.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://accounts.google.com", "https://fonts.googleapis.com"],
        imgSrc: ["'self'", "data:", "https:", "blob:"],
        connectSrc: ["'self'", "https://accounts.google.com", "https://generativelanguage.googleapis.com", "https://www.google-analytics.com", "https://analytics.google.com", "https://intern-hack-prod-bucket.s3.ap-south-1.amazonaws.com"],
        frameSrc: ["https://accounts.google.com", "https://checkout.dodopayments.com", "blob:"],
        fontSrc: ["'self'", "https:", "data:"],
      },
    },
    crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" },
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginEmbedderPolicy: false,
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
  const isIngestRoute = req.path === "/api/external-jobs/ingest";

  if (isIngestRoute) {
    // Allow any origin to POST jobs via API key
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Vary", "Origin");
  } else if (origin && allowedOrigins.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Vary", "Origin");
  }
  
  // Expose headers to the browser client
  res.setHeader("Access-Control-Expose-Headers", "x-request-id");

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization,X-API-Key");
    res.setHeader("Access-Control-Max-Age", "86400");
    res.status(204).end();
    return;
  }
  next();
});

// ── Compression (gzip/brotli) ──
app.use(compression());

// ── Health check ──
app.use("/api/health", healthRouter);

// Raw body for webhooks (must be BEFORE express.json())
app.use("/api/email-inbound/webhook", express.raw({ type: "application/json" }));
// Raw body for Dodo Payments webhook (must be BEFORE express.json())
app.use(PAYMENT_WEBHOOK_PATH, express.raw({ type: "application/json" }));
// Larger body parser for DSA CSV import (must be BEFORE the global parser)
app.use("/api/dsa/import/csv", express.json({ limit: "6mb" }));

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "../uploads"), { dotfiles: "deny", index: false }));

// ── Request ID tracing ──
app.use((req, res, next) => {
  const requestId = req.headers["x-request-id"] ?? crypto.randomUUID();
  req.headers["x-request-id"] = requestId;
  res.setHeader("x-request-id", requestId);
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
  skip: (req) => {
    const path = req.originalUrl.split("?")[0];
    return path === PAYMENT_WEBHOOK_PATH || path === "/api/email-inbound/webhook";
  },
  message: { message: "Too many requests, please try again later" },
});
app.use("/api/", globalLimiter);

app.use("/api/auth/login", authIpLimiter, authEmailLimiter);
app.use("/api/auth/register", authIpLimiter, authEmailLimiter);
app.use("/api/admin/login", authIpLimiter, authEmailLimiter);

const latexLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  message: { message: "LaTeX compilation limit reached. Try again later." },
});
app.use("/api/latex/compile", latexLimiter);

// ── Bot SEO headers (Vary: User-Agent, X-Is-Bot for CDN routing) ──
app.use(botSeoMiddleware);

// ── Routes ──
app.use("/api/auth", authRouter);
app.use("/api/student/recommendations", recommendationRouter);
app.use("/api/student", studentRouter);
app.use("/api/student/peer-mock-interview", peerMockInterviewRouter);
app.use("/api/student/expert-session", expertSessionRouter);
app.use("/api/admin/expert-session", expertSessionAdminRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/scraped-jobs", scraperRouter);
app.use("/api/signals", signalsRouter);
app.use("/api/interviews", interviewExperienceRouter);
app.use("/api/ats", atsRouter);
app.use("/api/resume", resumeRouter);
app.use("/api/companies", companyRouter);
app.use("/api/admin", adminRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/opensource", opensourceRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/gsoc", gsocRouter);
app.use("/api/universities", universityRouter);
app.use("/api/yc", ycRouter);
app.use("/api/dsa", dsaRouter);
app.use("/api/aptitude", aptitudeRouter);
app.use("/api/sql", sqlRouter);
app.use("/api/interview-progress", interviewProgressRouter);
app.use("/api/latex", latexRouter);
app.use("/api/skill-tests", skillTestRouter);
app.use("/api/internships", internshipRouter);
app.use("/api/leetcode", leetcodeRouter);
app.use("/api/grants", grantsRouter);

// ── InternHack AI Routes ──
app.use("/api/job-feed", jobFeedRouter);
app.use("/api/job-agent", jobAgentRouter);

// ── HR routes removed (recruiter/HR feature archived to /archived) ──
app.use("/api/email-inbound", emailInboundRouter);
app.use("/api/email", emailPrefsRouter);
app.use("/api/milestones", milestoneRouter);
app.use("/api/roadmaps", roadmapRouter);
app.use("/api/analytics", analyticsRouter);
app.use("/api/behavioral", behavioralRouter);
app.use("/api/learn", learnRouter);
app.use("/api/notes", notesRouter);

// ── Consolidated daily cron (triggered by Vercel Cron; bearer-authed) ──
app.use("/api/cron", cronRouter);

// Contact form (public, no auth)
app.use("/api/contact", contactRouter);
// Public external jobs endpoints (no auth)
const publicAdminController = new AdminController(new AdminService());
// Public ingest endpoint, external websites POST jobs here with API key
app.post("/api/external-jobs/ingest", (req, res) => publicAdminController.ingestExternalJob(req, res));
app.get("/api/external-jobs/:slug", (req, res) => publicAdminController.getPublicExternalJobBySlug(req, res));
app.get("/api/external-jobs", (req, res) => publicAdminController.getPublicExternalJobs(req, res));

// ── Sitemap (served at root, not /api) ──
app.use(sitemapRouter);

// ── Static files (public folder) ──
app.use(express.static(path.join(__dirname, "../public"), { dotfiles: "deny", index: false }));

// ── Public platform stats with in-memory cache (30 min TTL) ──
let statsCache: { data: unknown; expiresAt: number } | null = null;
let isRefreshingStats = false;
const STATS_TTL = 30 * 60 * 1000;

app.get("/api/stats", async (_req, res) => {
  try {
    // Return cache if it's still fresh
    if (statsCache && statsCache.expiresAt > Date.now()) {
      return res.json(statsCache.data);
    }

    // Stale-while-revalidate pattern: if someone is already fetching, 
    // serve the stale cache to prevent a database stampede.
    if (isRefreshingStats && statsCache) {
      return res.json(statsCache.data);
    }

    isRefreshingStats = true;

    const [users, jobs, companies] = await Promise.all([
      prisma.user.count({ where: { role: "STUDENT" } }),
      prisma.scrapedJob.count({ where: { status: "ACTIVE" } }),
      prisma.company.count(),
    ]);

    const data = { users, jobs, companies };
    statsCache = { data, expiresAt: Date.now() + STATS_TTL };
    isRefreshingStats = false;
    return res.json(data);
  } catch {
    isRefreshingStats = false;
    return res.json(statsCache ? statsCache.data : { users: 0, jobs: 0, companies: 0 });
  }
});

app.use(errorMiddleware);

// On Vercel the app is imported as a serverless function (see api/index.ts), so
// the long-running listener and node-cron schedules must not start there. The
// crons run instead via the consolidated /api/cron/daily endpoint. EC2/local
// keep booting normally.
if (!process.env["VERCEL"]) {
const server = app.listen(PORT, async () => {
  logger.info(`Server running on http://localhost:${PORT}`);

  // Attach server to shutdown manager
  shutdownManager.attachServer(server);

  // Load AI service provider configs into memory
  await initServiceProviders().catch((err) => logger.error("Failed to init AI providers:", err));

  // Start the job scraper cron (every 6 hours)
  const cronSchedule = process.env["SCRAPER_CRON"] || "0 */6 * * *";
  scraperController.getService().startCron(cronSchedule);
  shutdownManager.register({
    name: "Scraper Cron",
    priority: 10,
    fn: () => scraperController.getService().stopCron(),
  });

  // Start the funding signals ingest cron (offset 30 min from scraper)
  const signalsSchedule = process.env["SIGNALS_CRON"] || "30 */6 * * *";
  signalsController.getService().startCron(signalsSchedule);
  shutdownManager.register({
    name: "Signals Cron",
    priority: 10,
    fn: () => signalsController.getService().stopCron(),
  });

  // Start the 10-day follow-up email cron (daily at 9 AM)
  startFollowUpCron();
  shutdownManager.register({
    name: "FollowUp Cron",
    priority: 10,
    fn: () => stopFollowUpCron(),
  });

  // Start subscription expiry cron (daily at midnight)
  startSubscriptionExpiryCron();
  shutdownManager.register({
    name: "Subscription Expiry Cron",
    priority: 10,
    fn: () => stopSubscriptionExpiryCron(),
  });

  // Start InternHack AI pipeline crons
  startAIPipelineCrons();
  shutdownManager.register({
    name: "AI Pipeline Crons",
    priority: 10,
    fn: () => stopAIPipelineCrons(),
  });

  // Start the scheduled-email worker (drains roadmap day-10, future digests)
  startScheduledEmailWorker();
  shutdownManager.register({
    name: "Scheduled Email Worker",
    priority: 10,
    fn: () => stopScheduledEmailWorker(),
  });

  // Start weekly roadmap progress digests from one owner only in production.
  const runWeeklyDigestCron =
    process.env["RUN_WEEKLY_ROADMAP_DIGEST_CRON"] === "true" ||
    (process.env["NODE_ENV"] !== "production" && process.env["RUN_WEEKLY_ROADMAP_DIGEST_CRON"] !== "false");
  if (runWeeklyDigestCron) {
    startWeeklyRoadmapDigestCron();
    shutdownManager.register({
      name: "Roadmap Weekly Digest Cron",
      priority: 10,
      fn: () => stopWeeklyRoadmapDigestCron(),
    });
  } else {
    logger.info("Weekly digest cron disabled on this process");
  }

  // Start signals cleanup cron (weekly Sunday at 2 AM)
  startSignalsCleanupCron();
  shutdownManager.register({
    name: "Signals Cleanup Cron",
    priority: 10,
    fn: () => stopSignalsCleanupCron(),
  });

  // Start job cleanup cron (daily 3:30 AM): prunes old scraped/indexed jobs
  startJobCleanupCron();
  shutdownManager.register({
    name: "Job Cleanup Cron",
    priority: 10,
    fn: () => stopJobCleanupCron(),
  });

  // Start OSS deadline alert cron (daily at 9 AM)
  startDeadlineAlertCron();
  shutdownManager.register({
    name: "Deadline Alert Cron",
    priority: 10,
    fn: () => stopDeadlineAlertCron(),
  });

  // Start grant tracker deadline alert cron (daily at 9 AM)
  startGrantDeadlineAlertCron();
  shutdownManager.register({
    name: "Grant Deadline Alert Cron",
    priority: 10,
    fn: () => stopGrantDeadlineAlertCron(),
  });

  // Peer mock interview matching is live (students browse and pair via the
  // /matches endpoints), so there is no match cron anymore. Only the session
  // reminders still run on a schedule, from one owner only in production.
  const runPeerMockInterviewCron =
    process.env["RUN_PEER_MOCK_INTERVIEW_MATCH_CRON"] === "true" ||
    (process.env["NODE_ENV"] !== "production" && process.env["RUN_PEER_MOCK_INTERVIEW_MATCH_CRON"] !== "false");
  if (runPeerMockInterviewCron) {
    startPeerMockInterviewRemindersCron();
    shutdownManager.register({
      name: "Peer Mock Interview Reminders Cron",
      priority: 10,
      fn: () => stopPeerMockInterviewRemindersCron(),
    });
  } else {
    logger.info("Peer mock interview reminders cron disabled on this process");
  }

  // Env var names kept as-is (RUN_GITHUB_CONTRIBUTIONS_CRON / GITHUB_CONTRIBUTIONS_CRON)
  // for deploy compatibility with existing Vercel config, even though this cron
  // no longer does any GitHub sync — it only refreshes opensource repo stats now.
  const runOpensourceRepoStatsCron =
    process.env["RUN_GITHUB_CONTRIBUTIONS_CRON"] === "true" ||
    (process.env["NODE_ENV"] !== "production" && process.env["RUN_GITHUB_CONTRIBUTIONS_CRON"] !== "false");
  if (runOpensourceRepoStatsCron) {
    startOpensourceRepoStatsCron(process.env["GITHUB_CONTRIBUTIONS_CRON"] || "0 2 * * *");
    shutdownManager.register({
      name: "Opensource Repo Stats Cron",
      priority: 10,
      fn: () => stopOpensourceRepoStatsCron(),
    });
  } else {
    logger.info("Opensource repo stats cron disabled on this process");
  }

  // Register Prisma disconnect
  shutdownManager.register({
    name: "Prisma Disconnect",
    priority: 20,
    fn: async () => {
      await prisma.$disconnect();
      logger.info("Prisma Disconnected");
    },
  });

  // Install signal handlers after all hooks are registered
  shutdownManager.installSignalHandlers();
});
}

app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});

// Named export for the api/ function entry; default export so Vercel's Node
// runtime can serve the Express app directly ("default export must be a
// function or server") when it treats this module as the server.
export { app };
export default app;
