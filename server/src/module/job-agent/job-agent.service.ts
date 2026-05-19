import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "../../database/db.js";
import { jobIndexService } from "../job-index/job-index.service.js";

const genAI = new GoogleGenerativeAI(process.env["GEMINI_API_KEY"]!);

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
- Job Status: ${user?.jobStatus || "Not set"}
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
        graduationYear: true, bio: true, location: true, jobStatus: true,
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

    await prisma.jobAgentConversation.update({
      where: { id: conv.id },
      data: { messages: history, context: parsed.updatedPreferences || conv.context },
    });

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
        graduationYear: true, bio: true, location: true, jobStatus: true,
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

    await prisma.jobAgentConversation.update({
      where: { id: conv.id },
      data: { messages: history, context: parsed.updatedPreferences || conv.context },
    });
  }

  async getConversation(userId: number) {
    const conv = await prisma.jobAgentConversation.findFirst({
      where: { userId, isActive: true },
      orderBy: { updatedAt: "desc" },
    });
    if (!conv) return null;

    const messages = conv.messages as any[];
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
}

export const jobAgentService = new JobAgentService();