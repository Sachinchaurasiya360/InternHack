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

export function getGenericPrepMaterial(topic: MockInterviewTopic): MockInterviewGenericPrep | null {
  switch (topic) {
    case "SYSTEM_DESIGN":
      return SYSTEM_DESIGN_PREP;
    case "FRONTEND":
      return FRONTEND_PREP;
    case "DSA":
    default:
      return null;
  }
}
