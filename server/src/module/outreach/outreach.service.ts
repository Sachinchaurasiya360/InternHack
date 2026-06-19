import { prisma } from "../../database/db.js";

const DEFAULT_TEMPLATES = [
  {
    id: 1,
    type: "cold_dm",
    title: "Cold LinkedIn DM",
    body: "Hi [Name], I came across your profile and noticed you work at [Company]. I'm a student exploring opportunities in [Role] and would love to hear about your experience there. Would you be open to a quick chat?",
    placeholders: ["Name", "Company", "Role"],
  },
  {
    id: 2,
    type: "cold_email",
    title: "Cold Email",
    body: "Subject: [Role] Opportunity at [Company]\n\nHi [Name],\n\nI'm reaching out because I'm very interested in [Role] at [Company]. I've been following your work and believe my background aligns well with your team's goals.\n\nWould you be open to a 15-minute call?\n\nBest,\n[Your Name]",
    placeholders: ["Name", "Company", "Role", "Your Name"],
  },
  {
    id: 3,
    type: "followup",
    title: "Follow-Up Message",
    body: "Hi [Name], I wanted to follow up on my previous message about [Role] at [Company]. I'm still very interested and would appreciate any guidance you could offer. Thanks for your time!",
    placeholders: ["Name", "Role", "Company"],
  },
  {
    id: 4,
    type: "thankyou",
    title: "Thank-You Note",
    body: "Hi [Name], thank you so much for the referral/intro for [Role] at [Company]. I really appreciate your time and support. I'll keep you posted on how it goes!",
    placeholders: ["Name", "Role", "Company"],
  },
];

export class OutreachService {
  async getTemplates() {
    return DEFAULT_TEMPLATES;
  }

  async getLogs(studentId: number) {
    return prisma.outreachLog.findMany({
      where: { studentId },
      orderBy: { createdAt: "desc" },
    });
  }

  async createLog(studentId: number, data: {
    contactName: string;
    company: string;
    role: string;
    channel: string;
    templateId?: number;
    notes?: string;
    sentAt?: Date;
  }) {
    const sentAt = data.sentAt ?? new Date();
    const followUpDate = new Date(sentAt);
    followUpDate.setDate(followUpDate.getDate() + 7);

    return prisma.outreachLog.create({
      data: {
        studentId,
        contactName: data.contactName,
        company: data.company,
        role: data.role,
        channel: data.channel,
        templateId: data.templateId ?? null,
        notes: data.notes ?? null,
        sentAt,
        followUpDate,
      },
    });
  }

  async updateLog(id: number, studentId: number, data: {
    status?: string;
    notes?: string;
    followUpDate?: Date;
  }) {
    return prisma.outreachLog.update({
      where: { id, studentId },
      data,
    });
  }

  async deleteLog(id: number, studentId: number) {
    return prisma.outreachLog.delete({
      where: { id, studentId },
    });
  }
}