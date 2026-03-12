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
import { ycRouter } from "./module/yc/yc.routes.js";
import { dsaRouter } from "./module/dsa/dsa.routes.js";
import { aptitudeRouter } from "./module/aptitude/aptitude.routes.js";
import { sqlRouter } from "./module/sql/sql.routes.js";
import { latexRouter } from "./module/latex/latex.routes.js";
import { skillTestRouter } from "./module/skill-test/skill-test.routes.js";
import { hackathonRouter } from "./module/hackathon/hackathon.routes.js";
import { professorRouter } from "./module/professor/professor.routes.js";
import { internshipRouter } from "./module/internship/internship.routes.js";
import { trendsRouter } from "./module/trends/trends.routes.js";
import { campusDriveRouter } from "./module/campus-drive/campus-drive.routes.js";
import { badgeRouter } from "./module/badge/badge.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { prisma } from "./database/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("trust proxy", 1);
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
app.use("/api/careers", careerRouter);
app.use("/api/companies", companyRouter);
app.use("/api/admin", adminRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/opensource", opensourceRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/quiz", quizRouter);
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
app.use("/api/internships", internshipRouter);
app.use("/api/trends", trendsRouter);
app.use("/api/campus-drives", campusDriveRouter);
app.use("/api/badges", badgeRouter);

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

    const [users, jobs, careers, companies] = await Promise.all([
      prisma.user.count({ where: { role: "STUDENT" } }),
      prisma.job.count({ where: { status: "PUBLISHED" } }),
      prisma.career.count(),
      prisma.company.count(),
    ]);

    const data = { users, jobs, careers, companies };
    statsCache = { data, expiresAt: Date.now() + STATS_TTL };
    return res.json(data);
  } catch {
    return res.json({ users: 0, jobs: 0, careers: 0, companies: 0 });
  }
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

  // Start the job scraper cron (every 6 hours)
  const cronSchedule = process.env["SCRAPER_CRON"] || "0 */6 * * *";
  scraperController.getService().startCron(cronSchedule);
});
