export interface ScrapedJobData {
  title: string;
  description: string;
  company: string;
  location: string;
  salary?: string | undefined;
  tags: string[];
  applicationUrl: string;
  sourceId: string;
  sourceUrl?: string | undefined;
  metadata?: Record<string, unknown> | undefined;
}

export interface ScrapeResult {
  source: string;
  jobs: ScrapedJobData[];
  error?: string | undefined;
}

export abstract class BaseScraper {
  abstract readonly source: string;
  abstract readonly displayName: string;

  abstract scrape(): Promise<ScrapeResult>;

  protected stripHtml(html: string): string {
    return html
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  protected truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + "...";
  }
}
