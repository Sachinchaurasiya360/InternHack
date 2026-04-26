import { BaseSignalSource } from "./base.source.js";
import type { FundingSignalData, SourceResult } from "./base.source.js";

/**
 * YC Launches RSS: newly launched YC-backed companies. Not strictly a
 * funding announcement, but YC companies carry implicit seed funding
 * (standard deal) and are almost always hiring.
 */
export class YcLaunchesSource extends BaseSignalSource {
  readonly source = "yc-launches";
  readonly displayName = "Y Combinator Launches";

  private readonly feedUrl = "https://www.ycombinator.com/launches/rss";

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

      const announcedAt = pubDate ? new Date(pubDate) : new Date();
      const descText = this.stripHtml(description ?? "");

      items.push({
        companyName: title.split(" - ")[0]?.trim() ?? title,
        sourceUrl: link,
        sourceId: guid,
        announcedAt,
        description: this.truncate(descText, 2000),
        fundingRound: "YC Batch",
        tags: ["yc", "startup"],
        hiringSignal: true,
        metadata: { rawTitle: title },
      });
    }
    return items;
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
