import { BaseScraper } from "./base.scraper.js";
import type { ScrapeResult, ScrapedJobData } from "./base.scraper.js";

interface AdzunaJob {
  id: string;
  title: string;
  company: { display_name: string };
  location: { display_name: string };
  salary_min?: number;
  salary_max?: number;
  salary_is_predicted?: boolean;
  description: string;
  created: string;
  category: { label: string };
  redirect_url: string;
}

interface AdzunaResponse {
  count: number;
  results: AdzunaJob[];
}

export class AdzunaScraper extends BaseScraper {
  readonly source = "adzuna";
  readonly displayName = "Adzuna India";

  private readonly baseUrl = "https://api.adzuna.com/v1/api/jobs/in/search";
  private readonly appId: string | undefined;
  private readonly appKey: string | undefined;

  constructor() {
    super();
    this.appId = process.env["ADZUNA_APP_ID"];
    this.appKey = process.env["ADZUNA_APP_KEY"];

    if (!this.appId || !this.appKey) {
      console.warn("[Scraper] Adzuna: ADZUNA_APP_ID or ADZUNA_APP_KEY not set. Scraper will be skipped.");
    }
  }

  async scrape(): Promise<ScrapeResult> {
    if (!this.appId || !this.appKey) {
      return {
        source: this.source,
        jobs: [],
        error: "Adzuna API credentials not configured (ADZUNA_APP_ID, ADZUNA_APP_KEY)",
      };
    }

    try {
      const allJobs: ScrapedJobData[] = [];

      for (let page = 1; page <= 3; page++) {
        const url = `${this.baseUrl}/${String(page)}?app_id=${this.appId}&app_key=${this.appKey}&results_per_page=50`;
        const response = await fetch(url);

        if (!response.ok) {
          if (page === 1) {
            return {
              source: this.source,
              jobs: [],
              error: `HTTP ${String(response.status)}: ${response.statusText}`,
            };
          }
          break;
        }

        const data = (await response.json()) as AdzunaResponse;

        for (const job of data.results) {
          let salary: string | undefined;
          if (job.salary_min && job.salary_max) {
            salary = `INR ${String(Math.round(job.salary_min))} - ${String(Math.round(job.salary_max))}`;
          } else if (job.salary_min) {
            salary = `INR ${String(Math.round(job.salary_min))}+`;
          }

          allJobs.push({
            title: job.title,
            description: this.truncate(this.stripHtml(job.description), 5000),
            company: job.company.display_name,
            location: job.location.display_name || "India",
            salary,
            tags: [job.category?.label].filter(Boolean) as string[],
            applicationUrl: job.redirect_url,
            sourceId: String(job.id),
            sourceUrl: job.redirect_url,
            metadata: {
              category: job.category?.label,
              salaryMin: job.salary_min,
              salaryMax: job.salary_max,
              salaryPredicted: job.salary_is_predicted,
              createdDate: job.created,
            },
          });
        }

        if (data.results.length < 50) break;
      }

      return { source: this.source, jobs: allJobs };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { source: this.source, jobs: [], error: message };
    }
  }
}
