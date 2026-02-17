import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
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
import { errorMiddleware } from "./middleware/error.middleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env["PORT"] || 3000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

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

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

  // Start the job scraper cron (every 6 hours)
  const cronSchedule = process.env["SCRAPER_CRON"] || "0 */6 * * *";
  scraperController.getService().startCron(cronSchedule);
});
