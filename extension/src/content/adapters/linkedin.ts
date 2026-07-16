import { GenericAdapter } from "./generic";

export class LinkedInAdapter extends GenericAdapter {
  siteType = "LINKEDIN" as const;
  detect() {
    return /linkedin\.com/i.test(location.hostname) && Boolean(document.querySelector("form, .jobs-easy-apply-modal"));
  }
}

