import { GenericAdapter } from "./generic";

export class AshbyAdapter extends GenericAdapter {
  siteType = "ASHBY" as const;
  detect() {
    return /ashbyhq\.com/i.test(location.hostname) || Boolean(document.querySelector("[data-ashby], form[action*='ashby']"));
  }
}

