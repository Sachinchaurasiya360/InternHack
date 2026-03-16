import { prisma } from "../../database/db.js";
import { decrypt } from "../../utils/crypto.utils.js";
import { sendSmtpEmail } from "../../utils/smtp.utils.js";

const activeJobs = new Map<number, ReturnType<typeof setInterval>>();

async function processNextEmail(campaignId: number): Promise<boolean> {
  // Get campaign with user info
  const campaign = await prisma.emailCampaign.findUnique({
    where: { id: campaignId },
    select: {
      id: true,
      status: true,
      userId: true,
      user: { select: { email: true, appPassword: true } },
    },
  });

  if (!campaign || campaign.status !== "SENDING") {
    stopJob(campaignId);
    return false;
  }

  if (!campaign.user.appPassword) {
    await prisma.emailCampaign.update({
      where: { id: campaignId },
      data: { status: "FAILED", errorMessage: "App password not found" },
    });
    stopJob(campaignId);
    return false;
  }

  // Get next pending email
  const emailLog = await prisma.emailLog.findFirst({
    where: { campaignId, status: "PENDING" },
    orderBy: { id: "asc" },
  });

  if (!emailLog) {
    // All done
    await prisma.emailCampaign.update({
      where: { id: campaignId },
      data: { status: "COMPLETED", completedAt: new Date() },
    });
    stopJob(campaignId);
    console.log(`[EmailCampaign] Campaign ${campaignId} completed`);
    return false;
  }

  try {
    const appPassword = decrypt(campaign.user.appPassword);
    await sendSmtpEmail({
      from: campaign.user.email,
      appPassword,
      to: emailLog.recipientEmail,
      subject: emailLog.subject,
      html: emailLog.body,
    });

    await prisma.$transaction([
      prisma.emailLog.update({
        where: { id: emailLog.id },
        data: { status: "SENT", sentAt: new Date() },
      }),
      prisma.emailCampaign.update({
        where: { id: campaignId },
        data: { sentCount: { increment: 1 } },
      }),
    ]);

    console.log(`[EmailCampaign] Sent email ${emailLog.id} to ${emailLog.recipientEmail}`);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    await prisma.$transaction([
      prisma.emailLog.update({
        where: { id: emailLog.id },
        data: { status: "FAILED", errorMessage },
      }),
      prisma.emailCampaign.update({
        where: { id: campaignId },
        data: { failedCount: { increment: 1 } },
      }),
    ]);
    console.error(`[EmailCampaign] Failed to send email ${emailLog.id}:`, errorMessage);
  }

  return true;
}

function stopJob(campaignId: number) {
  const interval = activeJobs.get(campaignId);
  if (interval) {
    clearInterval(interval);
    activeJobs.delete(campaignId);
  }
}

export function startCampaignWorker(campaignId: number) {
  if (activeJobs.has(campaignId)) return;

  // Get interval from campaign
  prisma.emailCampaign
    .findUnique({ where: { id: campaignId }, select: { intervalSeconds: true } })
    .then((campaign) => {
      if (!campaign) return;
      const ms = Math.max(30, campaign.intervalSeconds) * 1000;

      // Send first email immediately
      processNextEmail(campaignId).catch((e) =>
        console.error(`[EmailCampaign] Worker error for ${campaignId}:`, e),
      );

      // Then on interval
      const interval = setInterval(() => {
        processNextEmail(campaignId).catch((e) =>
          console.error(`[EmailCampaign] Worker error for ${campaignId}:`, e),
        );
      }, ms);

      activeJobs.set(campaignId, interval);
      console.log(`[EmailCampaign] Worker started for campaign ${campaignId} (interval: ${ms}ms)`);
    })
    .catch((e) => console.error(`[EmailCampaign] Failed to start worker for ${campaignId}:`, e));
}

export function pauseCampaignWorker(campaignId: number) {
  stopJob(campaignId);
  console.log(`[EmailCampaign] Worker paused for campaign ${campaignId}`);
}

export function resumeCampaignWorker(campaignId: number) {
  startCampaignWorker(campaignId);
}

export async function recoverActiveCampaigns() {
  const active = await prisma.emailCampaign.findMany({
    where: { status: "SENDING" },
    select: { id: true },
  });

  if (active.length === 0) return;

  console.log(`[EmailCampaign] Recovering ${active.length} active campaigns`);
  for (const campaign of active) {
    startCampaignWorker(campaign.id);
  }
}
