import { BaseSignalSource } from "./base.source.js";
import type { FundingSignalData, SourceResult } from "./base.source.js";

/**
 * TechCrunch Venture feed: RSS of articles covering funding rounds.
 * We extract company name, round, and amount from article titles using
 * common patterns ("Acme raises $10M Series A").
 */
export class TechCrunchSource extends BaseSignalSource {
  readonly source = "techcrunch-venture";
  readonly displayName = "TechCrunch Venture";

  private readonly feedUrl = "https://techcrunch.com/category/venture/feed/";

  async fetch(): Promise<SourceResult> {
    try {
      const res = await fetch(this.feedUrl, {
        headers: { "User-Agent": "InternHack-Signals/1.0" },
      });
      if (!res.ok) {
        return {
          source: this.source,
          signals: [],
          error: `HTTP ${String(res.status)}: ${res.statusText}`,
        };
      }
      const xml = await res.text();
      const signals = this.parseRss(xml);
      return { source: this.source, signals };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { source: this.source, signals: [], error: message };
    }
  }

  private parseRss(xml: string): FundingSignalData[] {
    const items: FundingSignalData[] = [];
    const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

    for (const block of itemBlocks) {
      const title = this.extractTag(block, "title");
      const link = this.extractTag(block, "link");
      const description = this.extractTag(block, "description");
      const pubDate = this.extractTag(block, "pubDate");
      const guid = this.extractTag(block, "guid") ?? link;

      if (!title || !link || !guid) continue;

      const parsed = this.extractFundingFromTitle(title);
      if (!parsed) continue;

      const announcedAt = pubDate ? new Date(pubDate) : new Date();
      const descText = this.stripHtml(description ?? "");

      items.push({
        companyName: parsed.companyName,
        sourceUrl: link,
        sourceId: guid,
        announcedAt,
        description: this.truncate(descText, 2000),
        fundingRound: parsed.round,
        fundingAmount: parsed.amountText,
        amountUsd: parsed.amountText ? this.parseAmountUsd(parsed.amountText) : undefined,
        tags: ["funding", "venture"],
        hiringSignal: this.detectHiringIntent(`${title} ${descText}`),
        metadata: { rawTitle: title },
      });
    }
    return items;
  }

  /**
   * Extract (company, amount, round) from titles like:
   *   "Acme raises $10M Series A to build X"
   *   "Beta closes $50 million seed round"
   *   "Gamma secures €2.5B in Series C"
   */
  private extractFundingFromTitle(
    title: string,
  ): { companyName: string; amountText?: string | undefined; round?: string | undefined } | null {
    const pattern =
      /^(.+?)\s+(?:raises|closes|secures|lands|nabs|bags|scores|announces)\s+((?:\$|USD|EUR|€|£)?\s*[\d.,]+\s*(?:k|K|m|M|b|B|million|billion|thousand)?)\s*(?:in\s+)?((?:seed|pre-seed|series\s+[a-z]|bridge|growth)(?:\s+(?:round|funding))?)?/i;
    const m = pattern.exec(title);
    if (!m) return null;
    const companyName = m[1]?.trim();
    if (!companyName) return null;
    return {
      companyName,
      amountText: m[2]?.trim(),
      round: m[3]?.trim(),
    };
  }

  private extractTag(xml: string, tag: string): string | null {
    const m = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`).exec(xml);
    if (!m || !m[1]) return null;
    return m[1]
      .replace(/^<!\[CDATA\[/, "")
      .replace(/\]\]>$/, "")
      .trim();
  }
}
