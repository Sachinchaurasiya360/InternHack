import {
  dsaTemplates,
  behavioralTemplates,
  systemTemplates,
  frontendTemplates,
  backendTemplates,
  hrTemplates,
} from "./interviewTemplates";

export interface Question {
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  answer: string;
  tips: string[];
}

/* ───────────────────────────────
   BASE QUESTIONS (seed only)
─────────────────────────────── */

const DSA: Question[] = [
  {
    category: "DSA",
    difficulty: "Easy",
    question: "What is an array?",
    answer: "A linear structure with contiguous memory.",
    tips: ["O(1) access", "Fixed size"],
  },
  {
    category: "DSA",
    difficulty: "Easy",
    question: "What is a stack?",
    answer: "LIFO data structure.",
    tips: ["Used in recursion"],
  },
];

const BEHAVIORAL: Question[] = [
  {
    category: "Behavioral",
    difficulty: "Easy",
    question: "Tell me about yourself.",
    answer: "Short structured intro.",
    tips: ["Past → Present → Future"],
  },
];

const SYSTEM_DESIGN: Question[] = [
  {
    category: "System Design",
    difficulty: "Medium",
    question: "Design a URL shortener.",
    answer: "Map long URL to short key.",
    tips: ["Use cache + DB"],
  },
];

const FRONTEND: Question[] = [
  {
    category: "Frontend",
    difficulty: "Easy",
    question: "What is DOM?",
    answer: "Browser representation of HTML.",
    tips: ["JS interacts with DOM"],
  },
];

const BACKEND: Question[] = [
  {
    category: "Backend",
    difficulty: "Easy",
    question: "What is REST API?",
    answer: "HTTP-based API design style.",
    tips: ["GET POST PUT DELETE"],
  },
];

const HR: Question[] = [
  {
    category: "HR",
    difficulty: "Easy",
    question: "What are your strengths?",
    answer: "Skills relevant to role.",
    tips: ["Be specific"],
  },
];

function fillTemplate(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (acc, [key, val]) => acc.replaceAll(`{${key}}`, val),
    template
  );
}

const valuePool: Record<string, string[]> = {
  concept: ["array", "stack", "queue", "graph", "React", "API"],

  system: ["URL shortener", "chat system", "file storage", "feed system"],

  skill: ["leadership", "communication", "debugging", "ownership"],

  situation: [ "a tight deadline", "a team conflict", "a production bug","a failure",],

  challenge: [ "tight deadlines", "production failures", "unexpected bugs", ],

  scenario: [ "a high-pressure interview", "a client escalation","a project delay", ],
};
/* ───────────────────────────────
   GENERATOR
─────────────────────────────── */

function generate(
  base: Question[],
  templates: { question: string[]; answer: string[]; tips: string[][] },
  category: string,
  target = 30
): Question[] {
  const result = [...base];

  let i = 0;


  while (result.length < target) {
  const concept = valuePool.concept[i % valuePool.concept.length];
  const system = valuePool.system[i % valuePool.system.length];
  const skill = valuePool.skill[i % valuePool.skill.length];
  const situation = valuePool.situation[i % valuePool.situation.length];
  const challenge = valuePool.challenge[i % valuePool.challenge.length];
  const scenario = valuePool.scenario[i % valuePool.scenario.length];

  const variables: Record<string, string> = {
    concept,
    system,
    skill,
    situation,
    challenge,
    scenario,
    };
    result.push({
        category,
        difficulty: i % 3 === 0 ? "Easy" : i % 3 === 1 ? "Medium" : "Hard",

        question: fillTemplate(
        templates.question[i % templates.question.length],
        variables
        ),

        answer: fillTemplate(
        templates.answer[i % templates.answer.length],
        variables
        ),

        tips: templates.tips[i % templates.tips.length],
    });

    i++;
  }

  return result;
}

/* ───────────────────────────────
   FINAL EXPORT (30 EACH)
─────────────────────────────── */

export const QUESTIONS: Question[] = [
  ...generate(DSA, dsaTemplates, "DSA"),
  ...generate(BEHAVIORAL, behavioralTemplates, "Behavioral"),
  ...generate(SYSTEM_DESIGN, systemTemplates, "System Design"),
  ...generate(FRONTEND, frontendTemplates, "Frontend"),
  ...generate(BACKEND, backendTemplates, "Backend"),
  ...generate(HR, hrTemplates, "HR"),
];