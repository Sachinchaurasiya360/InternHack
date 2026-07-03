import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "../../database/db.js";
import { jobIndexService } from "../job-index/job-index.service.js";
import { sendEmail } from "../../utils/email.utils.js";
import { buildUnsubscribeUrl } from "../../utils/unsubscribe.utils.js";
import { jobAgentJobsEmailHtml, jobAgentJobsEmailText } from "../../utils/email-templates.js";

const genAI = new GoogleGenerativeAI(process.env["GEMINI_API_KEY"]!);
const JOB_EMAIL_COOLDOWN_SECONDS = 60;
const JOB_EMAIL_DAILY_LIMIT = 5;
const MAX_CONVERSATION_MESSAGES = 50;

export class JobAgentEmailError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public retryAfter?: number,
  ) {
    super(message);
  }
}

const SYSTEM_PROMPT = (user: any, pref: any) => `You are InternHack AI, the user's friendly, supportive job hunting assistant. You're like that one well-connected friend who's always got leads and genuinely wants to see them succeed. You're warm, encouraging, and professional while still being approachable and conversational.

YOUR VIBE:
- You're EXCITED to help them find jobs, like you're in this together
- Keep it short and punchy, 1-3 sentences max, no essays
- Hype them up when they share their skills ("React + Node? You're the full package!")
- Be real and honest, if the search is broad, say so ("that's a wide net, let me narrow it down for you")
- Always respond in clear, professional English, no slang, no Hindi, no Hinglish
- Match the user's energy, if they're casual, be casual. If they're specific, get down to business

CURRENT USER PROFILE:
- Name: ${user?.name || "Unknown"}
- College: ${user?.college || "Not set"}
- Graduating: ${user?.graduationYear || "Not set"}
- Skills: ${user?.skills?.join(", ") || "None listed"}
- Location: ${user?.location || "Not set"}
- Bio: ${user?.bio || "Not set"}

CURRENT PREFERENCES:
- Desired Roles: ${pref?.desiredRoles?.join(", ") || "Not set"}
- Desired Skills: ${pref?.desiredSkills?.join(", ") || "Not set"}
- Locations: ${pref?.desiredLocations?.join(", ") || "Not set"}
- Min Salary: ${pref?.minSalary ? `₹${(pref.minSalary / 100000).toFixed(1)} LPA` : "Not set"}
- Work Mode: ${pref?.workMode?.join(", ") || "Not set"}

CRITICAL, OUTPUT FORMAT:
You MUST respond with ONLY a valid JSON object. No text before or after it. No markdown fences. Just the raw JSON:
{
  "reply": "Your chill, excited response to the user",
  "searchFilters": {
    "query": "natural language search query or null",
    "skills": ["extracted skills"] or null,
    "location": "location or null",
    "workMode": "REMOTE|HYBRID|ONSITE or null",
    "experienceLevel": "INTERN|ENTRY|MID|SENIOR or null",
    "domain": "frontend|backend|fullstack|devops|data|ml|mobile|other or null",
    "salaryMin": number_or_null
  },
  "updatedPreferences": {
    "desiredRoles": ["roles"] or null,
    "desiredSkills": ["skills"] or null,
    "desiredLocations": ["locations"] or null,
    "minSalary": number_or_null,
    "workMode": ["modes"] or null,
    "experienceLevel": ["levels"] or null,
    "domains": ["domains"] or null
  }
}

RULES:
1. ONLY output the JSON object above. No extra text, no explanation, no markdown.
2. Set searchFilters when the user asks for jobs or you can infer what they want.
3. Set updatedPreferences when the user explicitly states a preference.
4. If the user is just chatting or asking a question, set both to null.
5. Use the user's profile to fill gaps, if they have React in skills and ask for "remote jobs", search for remote React jobs.
6. The "reply" field is what the user sees, make it fun, hype, and helpful.`;

const INITIAL_CHAT_HISTORY = [
  {
    role: "user" as const,
    parts: [{ text: "System context: (will be replaced per call)" }],
  },
  {
    role: "model" as const,
    parts: [
      {
        text: JSON.stringify({
          reply:
            "Ayyy let's gooo! I'm InternHack AI, your job hunting buddy. Tell me what you're looking for and I'll find the best stuff for you!",
          searchFilters: null,
          updatedPreferences: null,
        }),
      },
    ],
  },
];

function parseGeminiResponse(text: string): any {
  try {
    const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    const jsonMatch = text.match(/\{[\s\S]*"reply"\s*:\s*"[\s\S]*\}/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[0]);
      } catch {
        // fall through
      }
    }
    return { reply: text.replace(/\{[\s\S]*$/, "").trim() || text, searchFilters: null, updatedPreferences: null };
  }
}

async function searchJobsFromFilters(filters: any): Promise<any[]> {
  if (!filters) return [];

  const searchResult = await jobIndexService.searchJobs({
    query: filters.query,
    skills: filters.skills,
    location: filters.location,
    workMode: filters.workMode,
    experienceLevel: filters.experienceLevel,
    domain: filters.domain,
    salaryMin: filters.salaryMin,
    limit: 5,
  });

  if (searchResult.jobs.length < 3) {
    const semanticQuery = [filters.query, ...(filters.skills || []), filters.domain]
      .filter(Boolean)
      .join(" ");
    if (semanticQuery) {
      const semanticJobs = await jobIndexService.semanticSearch(semanticQuery, 5);
      const existingIds = new Set(searchResult.jobs.map((j: any) => j.id));
      for (const sj of semanticJobs) {
        if (!existingIds.has(sj.id)) {
          searchResult.jobs.push(sj);
          existingIds.add(sj.id);
        }
      }
    }
  }

  return searchResult.jobs.slice(0, 5).map((j: any) => ({
    id: j.id,
    title: j.title,
    company: j.company,
    location: j.location,
    salary: j.salary,
    skills: j.skills,
    workMode: j.workMode,
    applicationUrl: j.applicationUrl,
    tags: j.tags,
    createdAt: j.createdAt,
  }));
}

async function upsertPreferences(userId: number, updatedPreferences: any): Promise<boolean> {
  if (!updatedPreferences) return false;
  const updates: Record<string, any> = {};
  for (const [key, val] of Object.entries(updatedPreferences)) {
    if (val !== null && val !== undefined) updates[key] = val;
  }
  if (Object.keys(updates).length === 0) return false;
  await prisma.userJobPreference.upsert({
    where: { userId },
    create: { userId, ...updates, hasEmbedding: false },
    update: { ...updates, hasEmbedding: false },
  });
  return true;
}

async function persistCappedConversation(convId: number, history: any[], context: any) {
  const cappedHistory = history.slice(-MAX_CONVERSATION_MESSAGES);
  await prisma.jobAgentConversation.update({
    where: { id: convId },
    data: { messages: cappedHistory, context },
  });
}

function truncateContext(context?: string | null): string | null {
  const trimmed = context?.replace(/\s+/g, " ").trim();
  if (!trimmed) return null;
  return trimmed.length > 200 ? `${trimmed.slice(0, 199).trimEnd()}...` : trimmed;
}

function startOfToday(): Date {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

function appUrl(): string {
  return (process.env["CLIENT_URL"] || "https://www.internhack.xyz").replace(/\/+$/, "");
}

function buildFallbackJobUrl(): string {
  return `${appUrl()}/jobs`;
}

function buildJobUrl(job: { sourceType: string; sourceId: number }, adminSlugs: Map<number, string | null>): string {
  const baseUrl = appUrl();

  if (job.sourceType === "INTERNAL") {
    return `${baseUrl}/jobs/${job.sourceId}`;
  }

  if (job.sourceType === "ADMIN") {
    const slug = adminSlugs.get(job.sourceId);
    return slug ? `${baseUrl}/jobs/ext/${slug}` : buildFallbackJobUrl();
  }

  if (job.sourceType === "SCRAPED") {
    return `${baseUrl}/external-jobs/${job.sourceId}`;
  }

  return buildFallbackJobUrl();
}

export class JobAgentService {
  async chat(
    userId: number,
    message: string,
  ): Promise<{ reply: string; jobs: any[]; preferencesUpdated: boolean }> {
    // 1. Get or create conversation
    let conv = await prisma.jobAgentConversation.findFirst({
      where: { userId, isActive: true },
      orderBy: { updatedAt: "desc" },
    });
    if (!conv) {
      conv = await prisma.jobAgentConversation.create({
        data: { userId, messages: [], context: {} },
      });
    }

    // 2. Get user profile & preferences
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        name: true, skills: true, college: true,
        graduationYear: true, bio: true, location: true,
      },
    });
    const pref = await prisma.userJobPreference.findUnique({ where: { userId } });

    // 3. Build history
    const history = (conv.messages as any[]) || [];
    history.push({ role: "user", content: message, timestamp: new Date().toISOString() });

    // 4. Call Gemini
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const chatHistory = history.map((m: any) => ({
      role: m.role === "user" ? ("user" as const) : ("model" as const),
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({
      history: [
        { role: "user" as const, parts: [{ text: "System context: " + SYSTEM_PROMPT(user, pref) }] },
        INITIAL_CHAT_HISTORY[1],
        ...chatHistory.slice(0, -1),
      ],
    });

    const result = await chat.sendMessage(message);
    const parsed = parseGeminiResponse(result.response.text());

    // 5. Update preferences & search jobs
    const preferencesUpdated = await upsertPreferences(userId, parsed.updatedPreferences);
    const jobs = await searchJobsFromFilters(parsed.searchFilters);

    // 6. Save conversation
    history.push({
      role: "assistant",
      content: parsed.reply,
      timestamp: new Date().toISOString(),
      jobIds: jobs.map((j: any) => j.id),
    });

    await persistCappedConversation(conv.id, history, parsed.updatedPreferences || conv.context);

    return { reply: parsed.reply, jobs, preferencesUpdated };
  }

  async chatStream(
    userId: number,
    message: string,
    onToken: (delta: string) => void,
    onJobs: (jobs: any[]) => void,
    signal?: AbortSignal,
  ): Promise<void> {
    // 1. Get or create conversation
    let conv = await prisma.jobAgentConversation.findFirst({
      where: { userId, isActive: true },
      orderBy: { updatedAt: "desc" },
    });
    if (!conv) {
      conv = await prisma.jobAgentConversation.create({
        data: { userId, messages: [], context: {} },
      });
    }

    // 2. Get user profile & preferences
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        name: true, skills: true, college: true,
        graduationYear: true, bio: true, location: true,
      },
    });
    const pref = await prisma.userJobPreference.findUnique({ where: { userId } });

    // 3. Build history
    const history = (conv.messages as any[]) || [];
    history.push({ role: "user", content: message, timestamp: new Date().toISOString() });

    // 4. Start streaming
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const chatHistory = history.map((m: any) => ({
      role: m.role === "user" ? ("user" as const) : ("model" as const),
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({
      history: [
        { role: "user" as const, parts: [{ text: "System context: " + SYSTEM_PROMPT(user, pref) }] },
        INITIAL_CHAT_HISTORY[1],
        ...chatHistory.slice(0, -1),
      ],
    });

    const streamResult = await chat.sendMessageStream(message);

    // 5. Stream tokens — extract reply field incrementally
    let accumulatedText = "";
    let lastSentReplyLength = 0;
    let replyStarted = false;

    for await (const chunk of streamResult.stream) {
      if (signal?.aborted) break;
      const text = chunk.text();
      if (!text) continue;
      accumulatedText += text;

      // Find the "reply": "..." field and stream only new characters of its value
      if (!replyStarted) {
        const replyKeyIdx = accumulatedText.indexOf('"reply"');
        if (replyKeyIdx !== -1) {
          const colonIdx = accumulatedText.indexOf(':', replyKeyIdx);
          if (colonIdx !== -1) {
            const quoteIdx = accumulatedText.indexOf('"', colonIdx + 1);
            if (quoteIdx !== -1) replyStarted = true;
          }
        }
      }

      if (replyStarted) {
        // Extract current reply value (handles partial JSON)
        const replyMatch = accumulatedText.match(/"reply"\s*:\s*"((?:[^"\\]|\\.)*)"/);
        if (replyMatch) {
          const currentReply = replyMatch[1]
            .replace(/\\n/g, "\n")
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, "\\");
          const delta = currentReply.slice(lastSentReplyLength);
          if (delta) {
            onToken(delta);
            lastSentReplyLength = currentReply.length;
          }
        }
      }
    }

    // 6. Parse final full response
    const parsed = parseGeminiResponse(accumulatedText);

    // 7. Update preferences
    await upsertPreferences(userId, parsed.updatedPreferences);

    // 8. Search and emit jobs
    const jobs = await searchJobsFromFilters(parsed.searchFilters);
    onJobs(jobs);

    // 9. Persist conversation
    history.push({
      role: "assistant",
      content: parsed.reply,
      timestamp: new Date().toISOString(),
      jobIds: jobs.map((j: any) => j.id),
    });

    await persistCappedConversation(conv.id, history, parsed.updatedPreferences || conv.context);
  }

  async getConversation(userId: number) {
    const conv = await prisma.jobAgentConversation.findFirst({
      where: { userId, isActive: true },
      orderBy: { updatedAt: "desc" },
    });
    if (!conv) return null;

    let messages = conv.messages as any[];
    if (messages.length > MAX_CONVERSATION_MESSAGES) messages = messages.slice(-MAX_CONVERSATION_MESSAGES);
    const allJobIds: number[] = [];
    for (const m of messages) {
      if (m.jobIds?.length) allJobIds.push(...m.jobIds);
    }

    if (allJobIds.length > 0) {
      const uniqueIds = [...new Set(allJobIds)];
      const jobRows = await prisma.jobIndex.findMany({
        where: { id: { in: uniqueIds } },
        select: {
          id: true, title: true, company: true, location: true,
          salary: true, skills: true, workMode: true,
          applicationUrl: true, tags: true, createdAt: true,
        },
      });
      const jobMap = new Map(jobRows.map((j) => [j.id, j]));
      for (const m of messages) {
        if (m.jobIds?.length) {
          m.jobs = m.jobIds.map((id: number) => jobMap.get(id)).filter(Boolean);
        }
      }
    }

    return { ...conv, messages };
  }

  async resetConversation(userId: number) {
    await prisma.jobAgentConversation.updateMany({
      where: { userId, isActive: true },
      data: { isActive: false },
    });
  }

  async emailJobs(userId: number, input: { jobIds: number[]; context?: string }) {
    const now = new Date();
    const context = truncateContext(input.context);

    const [user, lastEmail, sentToday] = await Promise.all([
      prisma.user.findUnique({
        where: { id: userId },
        select: { name: true, email: true },
      }),
      prisma.jobAgentEmailLog.findFirst({
        where: { userId },
        orderBy: { createdAt: "desc" },
        select: { createdAt: true },
      }),
      prisma.jobAgentEmailLog.count({
        where: { userId, createdAt: { gte: startOfToday() } },
      }),
    ]);

    if (!user) {
      throw new JobAgentEmailError(401, "User not found");
    }

    if (lastEmail) {
      const secondsSinceLastSend = Math.floor((now.getTime() - lastEmail.createdAt.getTime()) / 1000);
      if (secondsSinceLastSend < JOB_EMAIL_COOLDOWN_SECONDS) {
        throw new JobAgentEmailError(
          429,
          "Email sent recently. Please wait before trying again.",
          JOB_EMAIL_COOLDOWN_SECONDS - secondsSinceLastSend,
        );
      }
    }

    if (sentToday >= JOB_EMAIL_DAILY_LIMIT) {
      const tomorrow = startOfToday();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const retryAfter = Math.max(1, Math.ceil((tomorrow.getTime() - now.getTime()) / 1000));
      throw new JobAgentEmailError(429, "Daily email limit reached. Try again tomorrow.", retryAfter);
    }

    const uniqueJobIds = [...new Set(input.jobIds)];
    const jobs = await prisma.jobIndex.findMany({
      where: {
        id: { in: uniqueJobIds },
        isActive: true,
        OR: [{ deadline: null }, { deadline: { gte: now } }],
      },
      select: {
        id: true,
        sourceType: true,
        sourceId: true,
        title: true,
        company: true,
        location: true,
        salary: true,
        description: true,
        deadline: true,
      },
    });

    const jobMap = new Map(jobs.map((job) => [job.id, job]));
    const orderedJobs = uniqueJobIds.map((id) => jobMap.get(id)).filter((job): job is (typeof jobs)[number] => Boolean(job));

    if (orderedJobs.length === 0) {
      throw new JobAgentEmailError(400, "No active jobs to email");
    }

    const adminSourceIds = orderedJobs
      .filter((job) => job.sourceType === "ADMIN")
      .map((job) => job.sourceId);
    const adminRows = adminSourceIds.length
      ? await prisma.adminJob.findMany({
          where: { id: { in: adminSourceIds }, isActive: true, expiresAt: { gt: now } },
          select: { id: true, slug: true },
        })
      : [];
    const adminSlugs = new Map(adminRows.map((job) => [job.id, job.slug]));

    const emailJobs = orderedJobs.map((job) => ({
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      deadline: job.deadline,
      description: job.description,
      url: buildJobUrl(job, adminSlugs),
    }));

    const count = emailJobs.length;
    const subject = `${count} job${count === 1 ? "" : "s"} from your InternHack search`;
    const settingsUrl = `${appUrl()}/student/profile`;
    const emailArgs = {
      studentName: user.name,
      context,
      jobs: emailJobs,
      settingsUrl,
    };

    let emailSent = false;
    try {
      emailSent = await sendEmail({
        to: user.email,
        subject,
        html: jobAgentJobsEmailHtml(emailArgs),
        text: jobAgentJobsEmailText(emailArgs),
        unsubscribeUrl: buildUnsubscribeUrl(userId),
      });
    } catch (err) {
      console.error("[JobAgent] Failed to send jobs email:", err);
      throw new JobAgentEmailError(503, "Email service is temporarily unavailable");
    }

    if (!emailSent) {
      throw new JobAgentEmailError(503, "Email service is not configured");
    }

    await prisma.jobAgentEmailLog.create({
      data: {
        userId,
        jobIds: orderedJobs.map((job) => job.id),
        context,
        sentCount: count,
      },
    });

    return { sent: true, count };
  }
}

export const jobAgentService = new JobAgentService();
