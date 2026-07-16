import type { Adapter, JobContext, SiteType } from "../../lib/types";
import { findGenericFields } from "../mapping";

function pageTitleParts() {
  const title = document.title.replace(/\s+/g, " ").trim();
  const [role, company] = title.split(/\s[-|]\s/);
  return {
    role: role || "Open role",
    company: company || location.hostname.replace(/^www\./, ""),
  };
}

function firstText(selectors: string[]) {
  for (const selector of selectors) {
    const text = document.querySelector(selector)?.textContent?.replace(/\s+/g, " ").trim();
    if (text) return text;
  }
  return "";
}

export class GenericAdapter implements Adapter {
  siteType: SiteType = "GENERIC";

  detect() {
    return document.querySelectorAll("form, input, textarea, select").length > 0;
  }

  extractJobContext(): JobContext {
    const title = pageTitleParts();
    const role = firstText(["h1", "[data-testid*=title]", ".job-title"]) || title.role;
    const company = firstText(["[data-testid*=company]", ".company", ".company-name"]) || title.company;
    const description = firstText(["[data-testid*=description]", ".job-description", "main"]);
    return {
      company,
      role,
      jobUrl: location.href,
      applicationUrl: location.href,
      jobDescription: description || null,
      siteType: this.siteType,
      host: location.hostname,
    };
  }

  findFields() {
    return findGenericFields(document);
  }
}

