import type { MockInterviewTopic } from "@prisma/client";

export interface MockInterviewGenericPrep {
  prompt: string;
  requirements: string[];
  objectives?: string[];
  followUpQuestions: string[];
}

export const SYSTEM_DESIGN_PREP: MockInterviewGenericPrep = {
  prompt: "Design a URL shortening service like Bitly.",
  requirements: [
    "Users should be able to enter a long URL and get a short URL back.",
    "Clicking the short URL should redirect to the original long URL.",
    "Links should expire after a configurable default timespan.",
    "The system should be highly available and handle high read volume."
  ],
  objectives: [
    "Identify read vs. write heavy characteristics (e.g. 100:1 read/write ratio).",
    "Estimate storage size for 5 years.",
    "Discuss the tradeoffs between Base62 vs. MD5 for URL encoding.",
    "Explain caching layers (e.g. Redis/Memcached) for fast redirects."
  ],
  followUpQuestions: [
    "How would you handle malicious or spam URLs?",
    "How does your design change if users want custom vanity aliases?",
    "How would you shard the database as the data grows?"
  ]
};

export const FRONTEND_PREP: MockInterviewGenericPrep = {
  prompt: "Implement an auto-complete search component.",
  requirements: [
    "The component should accept user input and fetch suggestions asynchronously.",
    "Display a dropdown of results as the user types.",
    "Handle loading states, empty results, and error handling gracefully.",
    "Ensure keyboard navigation (Up, Down, Enter, Escape) works for the dropdown."
  ],
  objectives: [
    "Implement debouncing to limit API calls during rapid typing.",
    "Address potential race conditions from out-of-order API responses.",
    "Ensure semantic HTML (e.g. ARIA roles) is used for screen readers.",
    "Discuss how you would style the component to be responsive."
  ],
  followUpQuestions: [
    "How would you optimize performance if the list of results is very large (e.g., thousands of items)?",
    "What strategies would you use to test this component (Unit vs E2E)?",
    "How would you extract this into a reusable UI library?"
  ]
};

export const BACKEND_PREP: MockInterviewGenericPrep = {
  prompt: "Design and implement a rate limiter for a public REST API.",
  requirements: [
    "Limit requests per API key (e.g. 100 requests per minute).",
    "Return HTTP 429 with a Retry-After header when the limit is exceeded.",
    "Allow different limits per endpoint or subscription plan.",
    "The limiter must keep working correctly when the API runs on multiple servers."
  ],
  objectives: [
    "Compare fixed window, sliding window, and token bucket algorithms.",
    "Discuss where the counters live (in-memory vs. Redis) and the tradeoffs.",
    "Handle race conditions when two requests hit the limit at the same time.",
    "Explain how to test the limiter under burst traffic."
  ],
  followUpQuestions: [
    "How would you exempt internal services or health checks from the limit?",
    "What changes if you need per-user limits across a fleet of 50 servers?",
    "How do you keep latency low when the rate-limit store is remote?"
  ]
};

export const BEHAVIORAL_PREP: MockInterviewGenericPrep = {
  prompt: "Run a behavioral interview using the STAR method (Situation, Task, Action, Result).",
  requirements: [
    "Prepare 4-5 questions covering teamwork, conflict, failure, and deadlines.",
    "As the interviewer, probe for specifics: what did YOU do, not the team.",
    "As the candidate, structure every answer as Situation, Task, Action, Result.",
    "Take notes so you can give concrete feedback at the end."
  ],
  objectives: [
    "Practice keeping answers under 2-3 minutes without losing the story.",
    "Spot vague answers and ask one follow-up that forces a concrete example.",
    "Evaluate ownership: does the candidate describe their own contribution?",
    "End with actionable feedback: one strength, one thing to improve."
  ],
  followUpQuestions: [
    "Tell me about a time you disagreed with a teammate. How was it resolved?",
    "Describe a project that failed. What would you do differently?",
    "Tell me about a time you had to deliver with an impossible deadline."
  ]
};

export const DEVOPS_PREP: MockInterviewGenericPrep = {
  prompt: "Design a CI/CD pipeline for a web application deployed to the cloud.",
  requirements: [
    "Cover build, automated tests, and deploy stages triggered on every merge.",
    "Support separate staging and production environments.",
    "Deploys must be reversible: describe your rollback strategy.",
    "Secrets (API keys, DB credentials) must never live in the repository."
  ],
  objectives: [
    "Compare rolling, blue-green, and canary deployment strategies.",
    "Discuss containerization and why reproducible builds matter.",
    "Explain how monitoring and alerts decide when a deploy is 'done'.",
    "Touch on infrastructure-as-code for keeping environments identical."
  ],
  followUpQuestions: [
    "How do you ship an urgent hotfix while a long pipeline run is in progress?",
    "How would you handle a database migration with zero downtime?",
    "What do you do about flaky tests that block the pipeline?"
  ]
};

export const DATA_SCIENCE_PREP: MockInterviewGenericPrep = {
  prompt: "Walk through an end-to-end ML approach to predict which students will drop out of an online course.",
  requirements: [
    "Frame the problem: what exactly is the prediction target and when is it made?",
    "Propose features from activity data (logins, submissions, watch time).",
    "Pick an evaluation metric and justify it for an imbalanced dataset.",
    "Start with a simple baseline model before anything complex."
  ],
  objectives: [
    "Identify data leakage risks in the proposed features.",
    "Discuss the precision/recall tradeoff for an intervention use case.",
    "Explain train/validation/test splits when data has a time dimension.",
    "Consider how the model's predictions would actually be used by the product."
  ],
  followUpQuestions: [
    "How would you detect the model degrading after deployment (drift)?",
    "What would you do for brand-new students with no activity history?",
    "How do you check the model is not unfair to a subgroup of students?"
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
