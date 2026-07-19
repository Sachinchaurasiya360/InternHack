import { GenericAdapter } from "./generic";

export class LeverAdapter extends GenericAdapter {
  siteType = "LEVER" as const;
  detect() {
    return /lever\.co/i.test(location.hostname) || Boolean(document.querySelector(".posting, form[action*='lever']"));
  }
}

