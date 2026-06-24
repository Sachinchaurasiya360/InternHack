import cron from "node-cron";
import { prisma } from "../database/db.js";
import { sendEmail } from "../utils/email.utils.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";

let cronJob: cron.ScheduledTask | null = null;

async function sendJobAlerts(): Promise<void> {
  const alerts = await prisma.jobAlert.findMany({
    where: {
      isActive: true,
    },
    include: {
      user: true,
    },
  });

  for (const alert of alerts) {
    const jobs = await prisma.job.findMany({
      where: {
        status: "PUBLISHED",

        ...(alert.tags.length > 0 && {
          tags: {
            hasSome: alert.tags,
          },
        }),

        ...(alert.location && {
          location: {
            contains: alert.location,
            mode: "insensitive",
          },
        }),

        createdAt: {
          gt:
            alert.lastNotifiedAt ??
            new Date(Date.now() - 24 * 60 * 60 * 1000),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (jobs.length === 0) continue;

    const html = `
      <h2>New Matching Jobs</h2>

      <p>We found ${jobs.length} new job(s) matching your preferences.</p>

      ${jobs
  .map(
    (job) => `
      <div style="margin-bottom:20px;padding:12px;border:1px solid #ddd;border-radius:8px;">
        <h3>${job.title}</h3>

        <p><strong>Company:</strong> ${job.company}</p>

        <p><strong>Location:</strong> ${job.location}</p>

        <p><strong>Salary:</strong> ${job.salary}</p>

        ${
          job.deadline
            ? `<p><strong>Deadline:</strong> ${job.deadline.toDateString()}</p>`
            : ""
        }
      </div>
    `
  )
  .join("")}
    `;

    await sendEmail({
      to: alert.user.email,
      subject: "New matching jobs on InternHack",
      html,
    });

    await prisma.jobAlert.update({
      where: {
        id: alert.id,
      },
      data: {
        lastNotifiedAt: new Date(),
      },
    });
  }
}

export function startJobAlertCron(
  schedule = "0 * * * *"
): void {
  if (cronJob) return;

  cronJob = cron.schedule(schedule, () => {
    void withAdvisoryLock(
      "job-alerts",
      async () => {
        await sendJobAlerts();
      }
    );
  });

  console.log(
    `[JobAlerts] Scheduled hourly at "${schedule}"`
  );
}

export function stopJobAlertCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;

    console.log("[JobAlerts] Cron stopped");
  }
}