import { GenericAdapter } from "./generic";

export class IndeedAdapter extends GenericAdapter {
  siteType = "INDEED" as const;
  detect() {
    return /indeed\.com/i.test(location.hostname) && Boolean(document.querySelector("form, [data-testid*='apply']"));
  }
}

