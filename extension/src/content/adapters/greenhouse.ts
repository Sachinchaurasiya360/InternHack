import { GenericAdapter } from "./generic";

export class GreenhouseAdapter extends GenericAdapter {
  siteType = "GREENHOUSE" as const;
  detect() {
    return /greenhouse\.io/i.test(location.hostname) || Boolean(document.querySelector("#grnhse_app, form[action*='greenhouse']"));
  }
}

