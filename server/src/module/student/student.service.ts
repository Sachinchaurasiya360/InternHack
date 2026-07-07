import { prisma } from "../../database/db.js";
import { Prisma } from "@prisma/client";
import { sendEmail } from "../../utils/email.utils.js";
import { buildUnsubscribeUrl } from "../../utils/unsubscribe.utils.js";
import { milestoneEmailHtml } from "../../utils/email-templates.js";

export class StudentService {
  async getMyExternalApplications(studentId: number) {
    return prisma.externalJobApplication.findMany({
      where: { studentId },
      orderBy: { createdAt: "desc" },
      include: {
        adminJob: {
          select: {
            id: true, slug: true, company: true, role: true,
            location: true, salary: true, tags: true, applyLink: true,
          },
        },
      },
    });
  }

  async applyToExternalJob(studentId: number, adminJobId: number) {
    const job = await prisma.adminJob.findUnique({ where: { id: adminJobId } });
    if (!job) throw new Error("External job not found");
    if (!job.isActive || job.expiresAt < new Date()) throw new Error("This job has expired");

    try {
      const application = await prisma.$transaction(async (tx) => {
        const createdApplication = await tx.externalJobApplication.create({
          data: { studentId, adminJobId },
          include: {
            adminJob: {
              select: { id: true, slug: true, company: true, role: true },
            },
          },
        });
        return createdApplication;
      });

      // Check 10-application milestone (fire-and-forget)
      this.checkApplicationMilestone(studentId).catch((err) => console.error("Failed to check application milestone:", err));
      return application;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
        throw new Error("Already applied to this job");
      }
      throw e;
    }
  }

  async getExternalApplicationStatus(studentId: number, adminJobId: number) {
    return prisma.externalJobApplication.findUnique({
      where: { studentId_adminJobId: { studentId, adminJobId } },
      select: { id: true, createdAt: true },
    });
  }

  async deleteExternalApplication(applicationId: number, studentId: number) {
    const application = await prisma.externalJobApplication.findUnique({
      where: { id: applicationId },
    });
    if (!application) throw new Error("External application not found");
    if (application.studentId !== studentId) throw new Error("Not authorized");

    await prisma.externalJobApplication.delete({ where: { id: applicationId } });
    return { success: true };
  }

  async updateExternalApplicationNotes(applicationId: number, studentId: number, notes: string) {
    const application = await prisma.externalJobApplication.findUnique({
      where: { id: applicationId },
      select: { id: true, studentId: true },
    });
    if (!application || application.studentId !== studentId) throw new Error("External application not found");

    return prisma.externalJobApplication.update({
      where: { id: applicationId },
      data: { studentNotes: notes },
      select: { studentNotes: true, updatedAt: true },
    });
  }

  private async checkApplicationMilestone(studentId: number) {
    const total = await prisma.externalJobApplication.count({ where: { studentId } });
    if (total === 10) {
      const user = await prisma.user.findUnique({
        where: { id: studentId },
        select: { name: true, email: true, unsubscribeDigest: true },
      });
      if (user && !user.unsubscribeDigest) {
        const html = milestoneEmailHtml(
          user.name,
          "10 Applications Sent!",
          "You've applied to 10 jobs on InternHack, that's serious commitment. " +
          "Consistency is the #1 predictor of landing an offer. Keep the momentum going, " +
          "explore new roles, and don't forget to sharpen your resume with our AI ATS scorer.",
          "Browse More Jobs",
          "https://www.internhack.xyz/jobs",
        );
        sendEmail({
          to: user.email,
          subject: "You hit 10 applications! Keep it up",
          html,
          unsubscribeUrl: buildUnsubscribeUrl(studentId),
        }).catch((err) => console.error("Failed to send milestone email:", err));
      }
    }
  }
}
