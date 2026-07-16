import { GenericAdapter } from "./generic";

export class WorkdayAdapter extends GenericAdapter {
  siteType = "WORKDAY" as const;
  detect() {
    return /workdayjobs\.com/i.test(location.hostname) || Boolean(document.querySelector("[data-automation-id], form[action*='workday']"));
  }
}

