import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { authRouter } from "./module/auth/auth.routes.js";
import { jobRouter } from "./module/job/job.routes.js";
import { recruiterRouter } from "./module/recruiter/recruiter.routes.js";
import { studentRouter } from "./module/student/student.routes.js";
import { uploadRouter } from "./module/upload/upload.routes.js";
import { scraperRouter, scraperController } from "./module/scraper/scraper.routes.js";
import { atsRouter } from "./module/ats/ats.routes.js";
import { careerRouter } from "./module/career/career.routes.js";
import { companyRouter } from "./module/company/company.routes.js";
import { adminRouter } from "./module/admin/admin.routes.js";
import { newsletterRouter } from "./module/newsletter/newsletter.routes.js";
import { opensourceRouter } from "./module/opensource/opensource.routes.js";
import { paymentRouter } from "./module/payment/payment.routes.js";
import { quizRouter } from "./module/quiz/quiz.routes.js";
import { blogRouter } from "./module/blog/blog.routes.js";
import { gsocRouter } from "./module/gsoc/gsoc.routes.js";
import { collegeRouter } from "./module/college/college.routes.js";
import { ycRouter } from "./module/yc/yc.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { prisma } from "./database/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env["PORT"] || 3000;

// ── Security headers ──
app.use(helmet({ contentSecurityPolicy: false })); // CSP disabled — SPA serves its own

// ── CORS — env-driven origins ──
const allowedOrigins = (process.env["ALLOWED_ORIGINS"] ?? "http://localhost:5173,https://www.internhack.xyz").split(",");
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "../uploads"), { dotfiles: "deny", index: false }));

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

const atsLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: { message: "ATS scoring limit reached. Try again later." },
});
app.use("/api/ats/score", atsLimiter);

// ── Routes ──
app.use("/api/auth", authRouter);
app.use("/api/jobs", jobRouter);
app.use("/api/recruiter", recruiterRouter);
app.use("/api/student", studentRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/scraped-jobs", scraperRouter);
app.use("/api/ats", atsRouter);
app.use("/api/careers", careerRouter);
app.use("/api/companies", companyRouter);
app.use("/api/admin", adminRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/opensource", opensourceRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/quiz", quizRouter);
app.use("/api/blog", blogRouter);
app.use("/api/gsoc", gsocRouter);
app.use("/api/colleges", collegeRouter);
app.use("/api/yc", ycRouter);

// ── Public platform stats with in-memory cache (5 min TTL) ──
let statsCache: { data: unknown; expiresAt: number } | null = null;
const STATS_TTL = 5 * 60 * 1000;

app.get("/api/stats", async (_req, res) => {
  try {
    if (statsCache && statsCache.expiresAt > Date.now()) {
      return res.json(statsCache.data);
    }

    const [users, jobs, careers, companies, colleges] = await Promise.all([
      prisma.user.count({ where: { role: "STUDENT" } }),
      prisma.job.count({ where: { status: "PUBLISHED" } }),
      prisma.career.count(),
      prisma.company.count(),
      prisma.college.count({ where: { isApproved: true } }),
    ]);

    const data = { users, jobs, careers, companies, colleges };
    statsCache = { data, expiresAt: Date.now() + STATS_TTL };
    return res.json(data);
  } catch {
    return res.json({ users: 0, jobs: 0, careers: 0, companies: 0, colleges: 0 });
  }
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

  // Start the job scraper cron (every 6 hours)
  const cronSchedule = process.env["SCRAPER_CRON"] || "0 */6 * * *";
  scraperController.getService().startCron(cronSchedule);
});
