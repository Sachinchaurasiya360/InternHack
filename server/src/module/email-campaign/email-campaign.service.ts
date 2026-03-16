import { prisma } from "../../database/db.js";
import { GeminiProvider } from "../../lib/providers/gemini.provider.js";
import { decrypt } from "../../utils/crypto.utils.js";
import { startCampaignWorker, pauseCampaignWorker, resumeCampaignWorker } from "./email-campaign.worker.js";

const gemini = new GeminiProvider("gemini-2.5-flash-lite");

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface CampaignFilters {
  college?: string;
  department?: string;
  company?: string;
  search?: string;
}

const SYSTEM_PROMPT = `You are an email composition assistant for InternHack, a career platform for students.
Your job is to help users craft professional cold-outreach emails to HR managers or IIT professors.
Ask clarifying questions about:
- Purpose (internship, research opportunity, job inquiry)
- Their background/skills they want to highlight
- Tone (formal, semi-formal)
- Any specific details they want to include

After understanding the user's needs (usually 3-5 exchanges), generate a final email template using these placeholders:
- {{recipientName}} - the recipient's name
- {{recipientDesignation}} - their job title/designation
- {{companyOrCollege}} - company name or college name
- {{department}} - department (for professors)
- {{areaOfInterest}} - area of interest (for professors)

Return the final template wrapped in <email_subject>...</email_subject> and <email_body>...</email_body> tags.
Always be helpful and guide the user through the process.`;

export class EmailCampaignService {
  async chat(message: string, history: ChatMessage[], contactType: string) {
    const contextNote = contactType === "PROFESSOR"
      ? "The user wants to email IIT professors. Available placeholders: {{recipientName}}, {{recipientDesignation}}, {{companyOrCollege}}, {{department}}, {{areaOfInterest}}"
      : "The user wants to email IT HR managers. Available placeholders: {{recipientName}}, {{recipientDesignation}}, {{companyOrCollege}}";

    const conversationParts = [
      `${SYSTEM_PROMPT}\n\n${contextNote}`,
      ...history.map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`),
      `User: ${message}`,
    ];

    const prompt = conversationParts.join("\n\n");
    const response = await gemini.generateText(prompt);
    return { reply: response.text };
  }

  async preview(
    emailTemplate: string,
    emailSubject: string,
    contactType: string,
    filters: CampaignFilters,
    count: number,
  ) {
    const contacts = await this.fetchContacts(contactType, filters, count);
    return contacts.map((c) => ({
      to: c.email,
      recipientName: c.name,
      subject: this.fillTemplate(emailSubject, c),
      body: this.fillTemplate(emailTemplate, c),
    }));
  }

  async createCampaign(
    input: {
      name: string;
      chatHistory: ChatMessage[];
      emailSubject: string;
      emailTemplate: string;
      contactType: string;
      filters: CampaignFilters;
      intervalSeconds: number;
    },
    userId: number,
  ) {
    // Verify user has app password
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { appPassword: true, email: true },
    });
    if (!user?.appPassword) {
      throw new Error("Please set your Gmail App Password in your profile settings first");
    }

    // Check concurrent campaign limit (max 3 active)
    const activeCampaigns = await prisma.emailCampaign.count({
      where: { userId, status: { in: ["QUEUED", "SENDING"] } },
    });
    if (activeCampaigns >= 3) {
      throw new Error("Maximum 3 concurrent campaigns allowed. Wait for existing campaigns to finish.");
    }

    // Fetch all matching contacts
    const contacts = await this.fetchContacts(input.contactType, input.filters, 500);
    const contactsWithEmail = contacts.filter((c) => c.email);

    if (contactsWithEmail.length === 0) {
      throw new Error("No contacts with email addresses found matching your filters");
    }

    // Create campaign
    const campaign = await prisma.emailCampaign.create({
      data: {
        userId,
        name: input.name,
        chatHistory: input.chatHistory as unknown as Record<string, unknown>[],
        emailSubject: input.emailSubject,
        emailTemplate: input.emailTemplate,
        contactType: input.contactType,
        filters: input.filters as unknown as Record<string, unknown>,
        intervalSeconds: input.intervalSeconds,
        totalEmails: contactsWithEmail.length,
        status: "DRAFT",
      },
    });

    // Create email logs for each contact
    const emailLogData = contactsWithEmail.map((c) => ({
      campaignId: campaign.id,
      recipientName: c.name,
      recipientEmail: c.email!,
      subject: this.fillTemplate(input.emailSubject, c),
      body: this.fillTemplate(input.emailTemplate, c),
      status: "PENDING" as const,
    }));

    await prisma.emailLog.createMany({ data: emailLogData });

    return campaign;
  }

  async startCampaign(campaignId: number, userId: number) {
    const campaign = await prisma.emailCampaign.findFirst({
      where: { id: campaignId, userId },
    });
    if (!campaign) throw new Error("Campaign not found");
    if (campaign.status !== "DRAFT" && campaign.status !== "QUEUED") {
      throw new Error(`Cannot start campaign with status ${campaign.status}`);
    }

    // Verify SMTP credentials
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { appPassword: true, email: true },
    });
    if (!user?.appPassword) throw new Error("App password not set");

    await prisma.emailCampaign.update({
      where: { id: campaignId },
      data: { status: "SENDING", startedAt: new Date() },
    });

    startCampaignWorker(campaignId);
    return { message: "Campaign started" };
  }

  async pauseCampaign(campaignId: number, userId: number) {
    const campaign = await prisma.emailCampaign.findFirst({
      where: { id: campaignId, userId, status: "SENDING" },
    });
    if (!campaign) throw new Error("No active campaign found to pause");

    pauseCampaignWorker(campaignId);
    await prisma.emailCampaign.update({
      where: { id: campaignId },
      data: { status: "PAUSED" },
    });
    return { message: "Campaign paused" };
  }

  async resumeCampaign(campaignId: number, userId: number) {
    const campaign = await prisma.emailCampaign.findFirst({
      where: { id: campaignId, userId, status: "PAUSED" },
    });
    if (!campaign) throw new Error("No paused campaign found to resume");

    await prisma.emailCampaign.update({
      where: { id: campaignId },
      data: { status: "SENDING" },
    });
    resumeCampaignWorker(campaignId);
    return { message: "Campaign resumed" };
  }

  async listCampaigns(userId: number) {
    return prisma.emailCampaign.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        contactType: true,
        status: true,
        totalEmails: true,
        sentCount: true,
        failedCount: true,
        intervalSeconds: true,
        startedAt: true,
        completedAt: true,
        createdAt: true,
      },
    });
  }

  async getCampaign(campaignId: number, userId: number) {
    const campaign = await prisma.emailCampaign.findFirst({
      where: { id: campaignId, userId },
      include: {
        emailLogs: {
          orderBy: { id: "asc" },
          take: 100,
          select: {
            id: true,
            recipientName: true,
            recipientEmail: true,
            subject: true,
            status: true,
            sentAt: true,
            errorMessage: true,
          },
        },
      },
    });
    if (!campaign) throw new Error("Campaign not found");
    return campaign;
  }

  async deleteCampaign(campaignId: number, userId: number) {
    const campaign = await prisma.emailCampaign.findFirst({
      where: { id: campaignId, userId },
    });
    if (!campaign) throw new Error("Campaign not found");
    if (campaign.status === "SENDING") {
      pauseCampaignWorker(campaignId);
    }
    await prisma.emailCampaign.delete({ where: { id: campaignId } });
    return { message: "Campaign deleted" };
  }

  // ── Private helpers ──

  private async fetchContacts(contactType: string, filters: CampaignFilters, limit: number) {
    if (contactType === "PROFESSOR") {
      const where: Record<string, unknown> = {};
      if (filters.college) where.collegeName = filters.college;
      if (filters.department) where.department = filters.department;
      if (filters.search) {
        where.OR = [
          { name: { contains: filters.search, mode: "insensitive" } },
          { areaOfInterest: { contains: filters.search, mode: "insensitive" } },
        ];
      }
      const profs = await prisma.iitProfessor.findMany({ where, take: limit });
      return profs.map((p) => ({
        name: p.name,
        email: p.email,
        designation: "Professor",
        companyOrCollege: p.collegeName,
        department: p.department,
        areaOfInterest: p.areaOfInterest,
      }));
    }

    // HR contacts
    const where: Record<string, unknown> = {};
    if (filters.company) where.company = filters.company;
    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search, mode: "insensitive" } },
        { company: { contains: filters.search, mode: "insensitive" } },
        { designation: { contains: filters.search, mode: "insensitive" } },
      ];
    }
    const hrs = await prisma.itHrContact.findMany({ where, take: limit });
    return hrs.map((h) => ({
      name: h.name,
      email: h.email,
      designation: h.designation,
      companyOrCollege: h.company,
      department: null as string | null,
      areaOfInterest: null as string | null,
    }));
  }

  private fillTemplate(
    template: string,
    contact: {
      name: string;
      designation: string | null;
      companyOrCollege: string | null;
      department?: string | null;
      areaOfInterest?: string | null;
    },
  ): string {
    return template
      .replace(/\{\{recipientName\}\}/g, contact.name)
      .replace(/\{\{recipientDesignation\}\}/g, contact.designation || "")
      .replace(/\{\{companyOrCollege\}\}/g, contact.companyOrCollege || "")
      .replace(/\{\{department\}\}/g, contact.department || "")
      .replace(/\{\{areaOfInterest\}\}/g, contact.areaOfInterest || "");
  }
}
