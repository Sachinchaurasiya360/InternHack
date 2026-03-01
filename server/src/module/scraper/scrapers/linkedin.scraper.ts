import * as cheerio from "cheerio";
import { BaseScraper } from "./base.scraper.js";
import type { ScrapeResult, ScrapedJobData } from "./base.scraper.js";

export class LinkedInScraper extends BaseScraper {
  readonly source = "linkedin";
  readonly displayName = "LinkedIn";

  private readonly baseUrl =
    "https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search";
  private readonly geoId = "102713980"; // India
  private readonly pageSize = 25;
  private readonly maxPages = 2;
  private readonly delayMs = 2000;

  async scrape(): Promise<ScrapeResult> {
    try {
      const allJobs: ScrapedJobData[] = [];

      for (let pageIndex = 0; pageIndex < this.maxPages; pageIndex++) {
        const start = pageIndex * this.pageSize;
        const url = `${this.baseUrl}?keywords=${encodeURIComponent("software intern")}&location=India&geoId=${this.geoId}&start=${String(start)}`;

        const response = await fetch(url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; InternHack/1.0)",
          },
        });

        if (!response.ok) {
          if (pageIndex === 0) {
            return {
              source: this.source,
              jobs: [],
              error: `HTTP ${String(response.status)}: ${response.statusText}`,
            };
          }
          break;
        }

        const html = await response.text();
        const jobs = this.parseJobCards(html);
        allJobs.push(...jobs);

        // Delay between requests to avoid rate limiting
        if (pageIndex < this.maxPages - 1) {
          await new Promise((resolve) => setTimeout(resolve, this.delayMs));
        }
      }

      return { source: this.source, jobs: allJobs };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { source: this.source, jobs: [], error: message };
    }
  }

  private parseJobCards(html: string): ScrapedJobData[] {
    const $ = cheerio.load(html);
    const jobs: ScrapedJobData[] = [];

    $("li").each((_index, element) => {
      try {
        const card = $(element);
        const title = card.find(".base-search-card__title").text().trim();
        const company = card
          .find(".base-search-card__subtitle a")
          .first()
          .text()
          .trim();
        const location = card
          .find(".job-search-card__location")
          .text()
          .trim();

        const link =
          card.find("a.base-card__full-link").attr("href") ??
          card.find("a.base-search-card__full-link").attr("href") ??
          "";

        // Extract job ID from data attribute or URL
        const jobId =
          card
            .find(".base-card")
            .attr("data-entity-urn")
            ?.split(":")
            .pop() ??
          link.match(/(\d+)\??/)?.[1] ??
          "";

        if (!title || !jobId) return;

        const dateText = card.find("time").attr("datetime") ?? "";
        const cleanUrl = link.split("?")[0] ?? link;

        jobs.push({
          title,
          description: `${title} at ${company} - ${location}`,
          company: company || "Unknown Company",
          location: location || "India",
          tags: ["LinkedIn", "India"],
          applicationUrl: cleanUrl,
          sourceId: jobId,
          sourceUrl: cleanUrl,
          metadata: {
            postedDate: dateText,
          },
        });
      } catch {
        // Skip malformed cards
      }
    });

    return jobs;
  }
}
