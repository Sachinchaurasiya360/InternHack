import { prisma } from "../../database/db.js";
import { sendEmail } from "../../utils/email.utils.js";
import { milestoneEmailHtml } from "../../utils/email-templates.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger("Milestone");

const VALID_INTERVIEW_SECTIONS = new Set([
  "javascript-interview",
  "react-interview",
  "nodejs-interview",
  "typescript-interview",
  "python-interview",
  "sql-database-interview",
  "system-design-interview",
  "behavioral-interview",
  "html-css-interview",
  "git-devops-interview",
  "fastapi-interview",
]);

const VALID_COURSES = new Set([
  "javascript",
  "html",
  "css",
  "typescript",
  "react",
  "python",
  "nodejs",
  "django",
  "flask",
  "fastapi",
  "blockchain",
  "data-analytics",
]);

interface MilestoneContent {
  subject: string;
  title: string;
  message: string;
  ctaText: string;
}

const SECTION_LABELS: Record<string, string> = {
  "javascript-interview": "JavaScript Interview",
  "react-interview": "React Interview",
  "nodejs-interview": "Node.js Interview",
  "typescript-interview": "TypeScript Interview",
  "python-interview": "Python Interview",
  "sql-database-interview": "SQL & Database Interview",
  "system-design-interview": "System Design Interview",
  "behavioral-interview": "Behavioral Interview",
  "html-css-interview": "HTML & CSS Interview",
  "git-devops-interview": "Git & DevOps Interview",
  "fastapi-interview": "FastAPI Interview",
};

const COURSE_LABELS: Record<string, string> = {
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  typescript: "TypeScript",
  react: "React",
  python: "Python",
  nodejs: "Node.js",
  django: "Django",
  flask: "Flask",
  fastapi: "FastAPI",
  blockchain: "Blockchain",
  "data-analytics": "Data Analytics",
};

function getMilestoneContent(
  milestoneType: string,
  milestoneKey: string
): MilestoneContent {
  switch (milestoneType) {
    case "APTITUDE_30":
      return {
        subject: "You just crushed 30 aptitude questions!",
        title: "30 down, you're warming up!",
        message:
          "That's serious momentum you've built. 30 aptitude questions done means you're already ahead of most students. The patterns are starting to click — keep pushing and you'll be unstoppable in any placement test.",
        ctaText: "Solve More Questions",
      };
    case "APTITUDE_100":
      return {
        subject: "100 aptitude questions — you're unstoppable!",
        title: "Triple digits. Respect.",
        message:
          "100 aptitude questions solved — most people never get this far. Your quantitative and logical reasoning skills are levelling up fast. Companies test exactly these skills in their screening rounds, and you're nailing them.",
        ctaText: "Keep the Streak Going",
      };
    case "APTITUDE_ALL":
      return {
        subject: "You completed every aptitude question!",
        title: "You did it. Every single one.",
        message:
          "100% completion is rare and you just pulled it off. You've mastered every aptitude topic we have — quantitative, logical, verbal, the works. You're placement-ready. Time to conquer the next challenge.",
        ctaText: "Explore Interview Prep",
      };
    case "INTERVIEW_SECTION": {
      const label = SECTION_LABELS[milestoneKey] ?? milestoneKey;
      return {
        subject: `You mastered ${label}!`,
        title: `${label} — done!`,
        message: `One more section in the bag! You've completed every question in ${label}. Interviewers love candidates who go deep on topics. Each section you finish makes you a stronger candidate — what's next?`,
        ctaText: "Start Next Section",
      };
    }
    case "COURSE_COMPLETE": {
      const label = COURSE_LABELS[milestoneKey] ?? milestoneKey;
      return {
        subject: `You finished the ${label} course!`,
        title: `${label} — complete!`,
        message: `You just wrapped up an entire course on ${label}. That's not just reading — that's understanding. Add this to your resume, mention it in interviews, and keep building. The best engineers never stop learning.`,
        ctaText: "Browse More Courses",
      };
    }
    default:
      return {
        subject: "Milestone achieved on InternHack!",
        title: "You hit a milestone!",
        message:
          "Great work on reaching this milestone. Keep going — every step brings you closer to your dream career.",
        ctaText: "Continue Learning",
      };
  }
}

async function tryRecordAndSend(
  studentId: number,
  milestoneType: string,
  milestoneKey: string
): Promise<boolean> {
  try {
    await prisma.milestoneEmail.create({
      data: { studentId, milestoneType, milestoneKey },
    });
  } catch (err: any) {
    if (err?.code === "P2002") return false; // already sent
    logger.error("Failed to record milestone", err);
    return false;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: studentId },
      select: { name: true, email: true },
    });
    if (!user) return false;

    const content = getMilestoneContent(milestoneType, milestoneKey);
    await sendEmail({
      to: user.email,
      subject: content.subject,
      html: milestoneEmailHtml(
        user.name,
        content.title,
        content.message,
        content.ctaText
      ),
    });
    logger.info(
      `Sent ${milestoneType}/${milestoneKey} email to student ${studentId}`
    );
    return true;
  } catch (err) {
    logger.error("Failed to send milestone email", err);
    return false;
  }
}

export class MilestoneService {
  async checkAptitudeMilestone(
    studentId: number,
    totalAnswered: number,
    totalQuestions: number
  ): Promise<void> {
    const milestones: { type: string; key: string }[] = [];

    if (totalAnswered === 30) {
      milestones.push({ type: "APTITUDE_30", key: "aptitude-30" });
    }
    if (totalAnswered === 100) {
      milestones.push({ type: "APTITUDE_100", key: "aptitude-100" });
    }
    if (totalAnswered === totalQuestions && totalQuestions > 0) {
      milestones.push({ type: "APTITUDE_ALL", key: "aptitude-all" });
    }

    for (const m of milestones) {
      await tryRecordAndSend(studentId, m.type, m.key);
    }
  }

  async reportMilestone(
    studentId: number,
    type: string,
    key: string
  ): Promise<{ sent: boolean }> {
    if (type === "INTERVIEW_SECTION_COMPLETE") {
      if (!VALID_INTERVIEW_SECTIONS.has(key)) {
        throw new Error(`Invalid interview section: ${key}`);
      }
      const sent = await tryRecordAndSend(studentId, "INTERVIEW_SECTION", key);
      return { sent };
    }

    if (type === "COURSE_COMPLETE") {
      if (!VALID_COURSES.has(key)) {
        throw new Error(`Invalid course: ${key}`);
      }
      const sent = await tryRecordAndSend(studentId, "COURSE_COMPLETE", key);
      return { sent };
    }

    throw new Error(`Unknown milestone type: ${type}`);
  }
}
