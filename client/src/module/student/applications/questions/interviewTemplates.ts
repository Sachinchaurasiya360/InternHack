import type { Question } from "./interviewQuestions";

export const dsaTemplates = {
  question: [
    "Explain how {concept} works internally.",
    "When would you use {concept} over alternatives?",
    "What is the time complexity of {concept}?",
    "Where is {concept} used in real systems?",
    "What problems does {concept} solve?",
  ],
  answer: [
    "{concept} is used to optimize performance and structure data efficiently.",
    "It improves efficiency by reducing time complexity in operations.",
    "It is designed to handle specific constraints like speed or memory.",
  ],
  tips: [
    ["Focus on complexity", "Give real-world use"],
    ["Compare with alternatives", "Mention tradeoffs"],
    ["Explain internal working", "Keep it structured"],
  ],
};

export const behavioralTemplates = {
  question: [
    "Tell me about a time you handled {situation}.",
    "Describe a situation where you showed {skill}.",
    "How do you handle {challenge} under pressure?",
    "Give an example of learning {skill} quickly.",
  ],
  answer: [
    "Use STAR method: Situation, Task, Action, Result.",
    "Explain structured real-world experience clearly.",
  ],
  tips: [
    ["Use STAR method", "Be specific"],
    ["Focus on impact", "Show learning"],
  ],
};

export const systemTemplates = {
  question: [
    "Design a scalable {system}.",
    "How would you build a {system} for millions of users?",
    "Explain architecture of {system}.",
  ],
  answer: [
    "Break system into API, DB, cache, and messaging layers.",
    "Focus on scalability, reliability, and fault tolerance.",
  ],
  tips: [
    ["Think in components", "Mention scaling"],
    ["Discuss bottlenecks", "Add caching layer"],
  ],
};

export const frontendTemplates = {
  question: [
    "What happens when React renders a {concept}?",
    "Explain how {concept} works in browser.",
    "How does {concept} affect performance?",
  ],
  answer: [
    "{concept} affects rendering, state updates, and UI performance.",
  ],
  tips: [
    ["Mention DOM", "Explain re-rendering"],
    ["Talk about optimization", "Browser internals"],
  ],
};

export const backendTemplates = {
  question: [
    "How does {concept} work in backend systems?",
    "Why is {concept} important in APIs?",
    "Explain role of {concept} in scaling.",
  ],
  answer: [
    "{concept} improves system reliability and scalability.",
  ],
  tips: [
    ["Mention latency", "Talk about DB impact"],
    ["Explain architecture", "Add tradeoffs"],
  ],
};

export const hrTemplates = {
  question: [
    "How do you handle {situation}?",
    "What motivates you during {challenge}?",
    "How do you prioritize tasks in {scenario}?",
  ],
  answer: [
    "Explain structured thinking with real examples.",
  ],
  tips: [
    ["Be honest", "Stay structured"],
    ["Show growth", "Use examples"],
  ],
};