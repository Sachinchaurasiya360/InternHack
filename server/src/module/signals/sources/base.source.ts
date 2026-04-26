export interface FundingSignalData {
  companyName: string;
  companyWebsite?: string | undefined;
  logoUrl?: string | undefined;
  fundingRound?: string | undefined;
  fundingAmount?: string | undefined;
  amountUsd?: bigint | undefined;
  announcedAt: Date;
  hqLocation?: string | undefined;
  industry?: string | undefined;
  description?: string | undefined;
  sourceUrl: string;
  sourceId: string;
  investors?: string[] | undefined;
  tags?: string[] | undefined;
  careersUrl?: string | undefined;
  hiringSignal?: boolean | undefined;
  metadata?: Record<string, unknown> | undefined;
}

export interface SourceResult {
  source: string;
  signals: FundingSignalData[];
  error?: string | undefined;
}

export abstract class BaseSignalSource {
  abstract readonly source: string;
  abstract readonly displayName: string;

  abstract fetch(): Promise<SourceResult>;

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

  protected truncate(text: string, max: number): string {
    if (text.length <= max) return text;
    return text.slice(0, max - 3) + "...";
  }

  /**
   * Parse funding amounts like "$10M", "€2.5B", "USD 500K" into an approx USD bigint.
   * Returns undefined if no amount can be parsed.
   */
  protected parseAmountUsd(text: string): bigint | undefined {
    const match = /(\$|USD|EUR|€|£)?\s*([\d.,]+)\s*(k|K|m|M|b|B|million|billion|thousand)?/.exec(
      text,
    );
    if (!match) return undefined;
    const rawNum = match[2]?.replace(/,/g, "");
    if (!rawNum) return undefined;
    const num = Number(rawNum);
    if (!Number.isFinite(num) || num <= 0) return undefined;

    const unit = (match[3] ?? "").toLowerCase();
    let multiplier = 1n;
    if (unit === "k" || unit === "thousand") multiplier = 1_000n;
    else if (unit === "m" || unit === "million") multiplier = 1_000_000n;
    else if (unit === "b" || unit === "billion") multiplier = 1_000_000_000n;

    return BigInt(Math.round(num)) * multiplier;
  }

  /**
   * Heuristic: does the text suggest the company is hiring or about to hire?
   * Used to flag signals for "likely hiring soon" filter.
   */
  protected detectHiringIntent(text: string): boolean {
    const lower = text.toLowerCase();
    const cues = [
      "hiring",
      "we're hiring",
      "we are hiring",
      "looking for",
      "join us",
      "join our team",
      "open roles",
      "careers",
      "growing the team",
      "expand the team",
      "recruit",
    ];
    return cues.some((cue) => lower.includes(cue));
  }
}
