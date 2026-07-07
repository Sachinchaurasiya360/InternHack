import type { GuideProgressAdapter } from "./components/GuideListPage";
import { fetchFirstPRProgress, patchFirstPRProgress } from "./api/opensource.api";

// First PR progress is server-backed per step, unlike the other guides which
// sync a full id array through the guide-progress API. Shared by
// FirstPRRoadmapPage and FirstPRSectionPage so both read/write the same backend.
export const firstPrAdapter: GuideProgressAdapter = {
  load: fetchFirstPRProgress,
  persist: (stepId, completed) => patchFirstPRProgress(stepId, completed),
  reset: (completedIds) => Promise.all(completedIds.map((id) => patchFirstPRProgress(id, false))),
};
