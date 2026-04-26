import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "../../database/db.js";
import { jobIndexService } from "../job-index/job-index.service.js";

const genAI = new GoogleGenerativeAI(process.env["GEMINI_API_KEY"]!);

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

    // 2. Get user profile
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        name: true,
        skills: true,
        college: true,
        graduationYear: true,
        bio: true,
        location: true,
        jobStatus: true,
      },
    });

    // 3. Get existing preferences
    const pref = await prisma.userJobPreference.findUnique({ where: { userId } });

    // 4. Build history
    const history = (conv.messages as any[]) || [];
    history.push({ role: "user", content: message, timestamp: new Date().toISOString() });

    // 5. Call Gemini
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemPrompt = `You are InternHack AI, the user's friendly, supportive job hunting assistant. You're like that one well-connected friend who's always got leads and genuinely wants to see them succeed. You're warm, encouraging, and professional while still being approachable and conversational.

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

    const chatHistory = history.map((m: any) => ({
      role: m.role === "user" ? ("user" as const) : ("model" as const),
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({
      history: [
        { role: "user" as const, parts: [{ text: "System context: " + systemPrompt }] },
        {
          role: "model" as const,
          parts: [
            {
              text: JSON.stringify({
                reply: "Ayyy let's gooo! I'm InternHack AI, your job hunting buddy. Tell me what you're looking for and I'll find the best stuff for you!",
                searchFilters: null,
                updatedPreferences: null,
              }),
            },
          ],
        },
        ...chatHistory.slice(0, -1), // all except latest user message
      ],
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    // 6. Parse AI response, extract JSON even if surrounded by text
    let parsed: any;
    try {
      const cleaned = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      // Try direct parse first
      parsed = JSON.parse(cleaned);
    } catch {
      // AI may prefix conversational text before the JSON object, extract it
      const jsonMatch = responseText.match(/\{[\s\S]*"reply"\s*:\s*"[\s\S]*\}/);
      if (jsonMatch) {
        try {
          parsed = JSON.parse(jsonMatch[0]);
        } catch {
          parsed = { reply: responseText.replace(/\{[\s\S]*$/, "").trim() || responseText, searchFilters: null, updatedPreferences: null };
        }
      } else {
        parsed = { reply: responseText, searchFilters: null, updatedPreferences: null };
      }
    }

    // 7. Update preferences if extracted
    let preferencesUpdated = false;
    if (parsed.updatedPreferences) {
      const updates: Record<string, any> = {};
      for (const [key, val] of Object.entries(parsed.updatedPreferences)) {
        if (val !== null && val !== undefined) updates[key] = val;
      }
      if (Object.keys(updates).length > 0) {
        await prisma.userJobPreference.upsert({
          where: { userId },
          create: { userId, ...updates, hasEmbedding: false },
          update: { ...updates, hasEmbedding: false },
        });
        preferencesUpdated = true;
      }
    }

    // 8. Search jobs, filter-based first, then semantic fallback
    let jobs: any[] = [];
    if (parsed.searchFilters) {
      const searchResult = await jobIndexService.searchJobs({
        query: parsed.searchFilters.query,
        skills: parsed.searchFilters.skills,
        location: parsed.searchFilters.location,
        workMode: parsed.searchFilters.workMode,
        experienceLevel: parsed.searchFilters.experienceLevel,
        domain: parsed.searchFilters.domain,
        salaryMin: parsed.searchFilters.salaryMin,
        limit: 5,
      });

      // If filter search returned few results, augment with semantic search
      if (searchResult.jobs.length < 3) {
        const semanticQuery = [
          parsed.searchFilters.query,
          ...(parsed.searchFilters.skills || []),
          parsed.searchFilters.domain,
        ].filter(Boolean).join(" ");

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

      jobs = searchResult.jobs.slice(0, 5).map((j: any) => ({
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

    // 9. Save conversation (persist job IDs so we can reload them later)
    history.push({
      role: "assistant",
      content: parsed.reply,
      timestamp: new Date().toISOString(),
      jobIds: jobs.map((j: any) => j.id),
    });

    await prisma.jobAgentConversation.update({
      where: { id: conv.id },
      data: {
        messages: history,
        context: parsed.updatedPreferences || conv.context,
      },
    });

    return { reply: parsed.reply, jobs, preferencesUpdated };
  }

  async getConversation(userId: number) {
    const conv = await prisma.jobAgentConversation.findFirst({
      where: { userId, isActive: true },
      orderBy: { updatedAt: "desc" },
    });
    if (!conv) return null;

    // Re-hydrate job data for assistant messages that had jobs
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
