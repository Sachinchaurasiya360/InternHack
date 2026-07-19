import { GenericAdapter } from "./generic";

export class LinkedInAdapter extends GenericAdapter {
  siteType = "LINKEDIN" as const;
  detect() {
    if (!/linkedin\.com/i.test(location.hostname)) return false;
    // Only a job posting / apply context, never the feed, messaging, profile, etc.
    const onJobsPath = /\/jobs\//i.test(location.pathname);
    const hasJobUi = Boolean(
      document.querySelector(
        ".jobs-easy-apply-modal, .jobs-apply-button, .job-details-jobs-unified-top-card, .jobs-search__job-details, .jobs-details, [data-job-id]",
      ),
    );
    return onJobsPath || hasJobUi;
  }
}

