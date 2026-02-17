import { BaseScraper } from "./base.scraper.js";
import type { ScrapeResult, ScrapedJobData } from "./base.scraper.js";

interface RemotiveJob {
  id: number;
  url: string;
  title: string;
  company_name: string;
  category: string;
  tags: string[];
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary: string;
  description: string;
}

interface RemotiveResponse {
  "job-count": number;
  jobs: RemotiveJob[];
}

export class RemotiveScraper extends BaseScraper {
  readonly source = "remotive";
  readonly displayName = "Remotive";

  private readonly apiUrl = "https://remotive.com/api/remote-jobs";

  async scrape(): Promise<ScrapeResult> {
    try {
      const response = await fetch(this.apiUrl);

      if (!response.ok) {
        return {
          source: this.source,
          jobs: [],
          error: `HTTP ${String(response.status)}: ${response.statusText}`,
        };
      }

      const data = (await response.json()) as RemotiveResponse;
      const jobs: ScrapedJobData[] = [];

      for (const job of data.jobs) {
        jobs.push({
          title: job.title,
          description: this.truncate(this.stripHtml(job.description), 5000),
          company: job.company_name,
          location: job.candidate_required_location || "Remote",
          salary: job.salary || undefined,
          tags: [
            ...(job.tags || []),
            job.category,
            job.job_type,
          ].filter(Boolean),
          applicationUrl: job.url,
          sourceId: String(job.id),
          sourceUrl: job.url,
          metadata: {
            category: job.category,
            jobType: job.job_type,
            publicationDate: job.publication_date,
          },
        });
      }

      return { source: this.source, jobs };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { source: this.source, jobs: [], error: message };
    }
  }
}
