import api from "./axios";

export function reportMilestone(type: string, key: string): void {
  api.post("/milestones/report", { type, key }).catch(() => {});
}
