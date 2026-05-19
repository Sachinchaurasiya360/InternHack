import api from "./axios";

export function reportMilestone(type: string, key: string): void {
  api.post("/milestones/report", { type, key }).catch((err) => {
    console.error("Failed to report milestone:", err);
  });
}
