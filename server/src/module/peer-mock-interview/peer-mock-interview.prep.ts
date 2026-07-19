import type { MockInterviewTopic } from "@prisma/client";

export interface MockInterviewGenericPrep {
  prompt: string;
  requirements: string[];
  objectives?: string[];
  followUpQuestions: string[];
}

export const SYSTEM_DESIGN_PREP: MockInterviewGenericPrep = {
  prompt: "Here are some sample System Design interview questions to run through.",
  requirements: [
    "How would you design a URL shortening service like Bitly? Walk through the core components.",
    "What's the difference between horizontal and vertical scaling, and when would you choose each?",
    "How would you design a rate limiter that works correctly across multiple servers?",
    "Explain the CAP theorem and how it shapes database choice for a distributed system.",
    "How would you design a notification system that fans out to millions of users?"
  ],
  followUpQuestions: [
    "How would you shard a database as it grows, and how do you handle resharding?",
    "What's the difference between a message queue and a pub/sub system? When would you use each?",
    "How would you design a caching layer, and what invalidation strategy would you use?"
  ]
};

export const FRONTEND_PREP: MockInterviewGenericPrep = {
  prompt: "Here are some sample Frontend interview questions to run through.",
  requirements: [
    "What's the difference between let, const, and var, and how does hoisting affect each?",
    "Explain how the virtual DOM works and why it improves rendering performance.",
    "What triggers a component to re-render in React, and how would you prevent unnecessary re-renders?",
    "How does event delegation work in the DOM, and when would you use it?",
    "What's the difference between flexbox and grid, and when would you reach for each?"
  ],
  followUpQuestions: [
    "How would you debug a memory leak in a long-running single-page app?",
    "What's the difference between debouncing and throttling? Give an example use case for each.",
    "How do you make a custom dropdown or modal accessible to screen readers and keyboard users?"
  ]
};

export const BACKEND_PREP: MockInterviewGenericPrep = {
  prompt: "Here are some sample Backend interview questions to run through.",
  requirements: [
    "What's the difference between SQL and NoSQL databases, and how would you choose between them for a given system?",
    "Explain the difference between authentication and authorization, and how JWTs fit in.",
    "How would you design a database schema for a many-to-many relationship, e.g. students enrolled in courses?",
    "What happens when two requests try to update the same row at the same time? How do you prevent that race condition?",
    "How would you paginate an API that returns millions of rows efficiently?"
  ],
  followUpQuestions: [
    "How would you design a rate limiter for a public API?",
    "What's the N+1 query problem, and how do you fix it?",
    "How do you keep a cache consistent with the source of truth when data changes frequently?"
  ]
};

export const BEHAVIORAL_PREP: MockInterviewGenericPrep = {
  prompt: "Here are some sample Behavioral interview questions to run through.",
  requirements: [
    "Tell me about a time you disagreed with a teammate. How was it resolved?",
    "Describe a project that failed. What would you do differently?",
    "Tell me about a time you had to deliver under an impossible deadline.",
    "Describe a situation where you had to convince others to adopt your idea.",
    "Tell me about a time you made a mistake at work. How did you handle it?"
  ],
  followUpQuestions: [
    "Tell me about a time you received tough feedback. How did you respond?",
    "Describe a time you had to make a decision with incomplete information.",
    "Tell me about a time you had to manage competing priorities."
  ]
};

export const DEVOPS_PREP: MockInterviewGenericPrep = {
  prompt: "Here are some sample DevOps interview questions to run through.",
  requirements: [
    "Walk through what happens in a CI/CD pipeline from a merged PR to a production deploy.",
    "What's the difference between blue-green, canary, and rolling deployments?",
    "How do you handle secrets (API keys, DB credentials) in a deployment pipeline without committing them to the repo?",
    "What's the difference between a container and a virtual machine?",
    "How would you roll back a bad deploy that's already serving production traffic?"
  ],
  followUpQuestions: [
    "How would you debug a service that's healthy in staging but crashing in production?",
    "What's infrastructure as code, and why does it matter for keeping environments identical?",
    "How do you handle a database migration with zero downtime?"
  ]
};

export const DATA_SCIENCE_PREP: MockInterviewGenericPrep = {
  prompt: "Here are some sample Data Science interview questions to run through.",
  requirements: [
    "What's the difference between precision and recall, and when would you optimize for one over the other?",
    "How do you detect and prevent data leakage when building a training pipeline?",
    "Walk through how you'd evaluate a classification model on an imbalanced dataset.",
    "What's the bias-variance tradeoff, and how do you diagnose which one you're dealing with?",
    "How would you design an A/B test to measure whether a new feature improves retention?"
  ],
  followUpQuestions: [
    "How would you detect a model degrading in production (drift)?",
    "How do you handle a feature that's highly predictive in training but leaks the label?",
    "How would you explain a black-box model's prediction to a non-technical stakeholder?"
  ]
};

export function getGenericPrepMaterial(topic: MockInterviewTopic): MockInterviewGenericPrep | null {
  switch (topic) {
    case "SYSTEM_DESIGN":
      return SYSTEM_DESIGN_PREP;
    case "FRONTEND":
      return FRONTEND_PREP;
    case "BACKEND":
      return BACKEND_PREP;
    case "BEHAVIORAL":
      return BEHAVIORAL_PREP;
    case "DEVOPS":
      return DEVOPS_PREP;
    case "DATA_SCIENCE":
      return DATA_SCIENCE_PREP;
    case "DSA":
    default:
      return null;
  }
}
