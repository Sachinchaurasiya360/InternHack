import { BaseScraper } from "./base.scraper.js";
import type { ScrapeResult, ScrapedJobData } from "./base.scraper.js";

interface ArbeitnowJob {
  slug: string;
  company_name: string;
  title: string;
  description: string;
  remote: boolean;
  url: string;
  tags: string[];
  job_types: string[];
  location: string;
  created_at: number;
}

interface ArbeitnowResponse {
  data: ArbeitnowJob[];
  links: { next: string | null };
  meta: { current_page: number; last_page: number };
}

export class ArbeitnowScraper extends BaseScraper {
  readonly source = "arbeitnow";
  readonly displayName = "Arbeitnow";

  private readonly apiUrl = "https://www.arbeitnow.com/api/job-board-api";

  async scrape(): Promise<ScrapeResult> {
    try {
      const allJobs: ScrapedJobData[] = [];

      // Fetch first 2 pages to keep it reasonable
      for (let page = 1; page <= 2; page++) {
        const response = await fetch(`${this.apiUrl}?page=${String(page)}`);

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

        const data = (await response.json()) as ArbeitnowResponse;

        for (const job of data.data) {
          const location = job.remote ? "Remote" : (job.location || "Not specified");

          allJobs.push({
            title: job.title,
            description: this.truncate(this.stripHtml(job.description), 5000),
            company: job.company_name,
            location,
            tags: [
              ...(job.tags || []),
              ...(job.job_types || []),
              ...(job.remote ? ["Remote"] : []),
            ].filter(Boolean),
            applicationUrl: job.url,
            sourceId: job.slug,
            sourceUrl: job.url,
            metadata: {
              remote: job.remote,
              jobTypes: job.job_types,
              createdAt: job.created_at,
            },
          });
        }

        if (!data.links.next || data.meta.current_page >= data.meta.last_page) break;
      }

      return { source: this.source, jobs: allJobs };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { source: this.source, jobs: [], error: message };
    }
  }
}
