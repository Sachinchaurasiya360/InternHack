import { BaseSignalSource } from "./base.source.js";
import type { FundingSignalData, SourceResult } from "./base.source.js";

interface ExaResult {
  id: string;
  url: string;
  title: string;
  publishedDate?: string | null;
  highlights?: string[];
}

interface ExaResponse {
  results: ExaResult[];
  error?: string;
}

/**
 * Exa Funding Source: uses the Exa neural search API (https://exa.ai) to
 * discover startup funding announcements from the last 2 days.
 *
 * Runs two complementary news queries so early-stage (seed) and
 * growth-stage (Series A/B/C) rounds are both captured.
 *
 * Requires EXA_API_KEY in the environment.
 */
export class ExaFundingSource extends BaseSignalSource {
  readonly source = "exa-funding";
  readonly displayName = "Exa Funding News";

  private readonly apiUrl = "https://api.exa.ai/search";

  private get apiKey(): string | undefined {
    return process.env["EXA_API_KEY"];
  }

  async fetch(): Promise<SourceResult> {
    const key = this.apiKey;
    if (!key) {
      return {
        source: this.source,
        signals: [],
        error: "EXA_API_KEY not set — skipping Exa funding source",
      };
    }

    // Rolling 2-day window so we never miss events between cron runs
    const startDate = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);

    const queries = [
      "startup raises seed funding round announcement",
      "startup raises Series A Series B Series C funding",
    ];

    const seen = new Set<string>();
    const signals: FundingSignalData[] = [];

    for (const query of queries) {
      const result = await this.search(key, query, startDate);
      if (result.error) {
        // Log but continue with remaining queries
        console.warn(`[ExaFundingSource] query "${query}" error: ${result.error}`);
        continue;
      }
      for (const item of result.results) {
        if (seen.has(item.id)) continue;
        seen.add(item.id);
        const signal = this.toSignal(item);
        if (signal) signals.push(signal);
      }
    }

    return { source: this.source, signals };
  }

  private async search(
    apiKey: string,
    query: string,
    startPublishedDate: string,
  ): Promise<ExaResponse> {
    try {
      const res = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({
          query,
          type: "auto",
          category: "news",
          numResults: 25,
          startPublishedDate,
          contents: {
            highlights: true,
          },
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => res.statusText);
        return { results: [], error: `HTTP ${String(res.status)}: ${text}` };
      }

      return (await res.json()) as ExaResponse;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { results: [], error: message };
    }
  }

  private toSignal(item: ExaResult): FundingSignalData | null {
    const parsed = this.extractFundingFromTitle(item.title);
    if (!parsed) return null;

    const announcedAt = item.publishedDate ? new Date(item.publishedDate) : new Date();
    const highlightText = (item.highlights ?? []).join(" ");
    const description = this.truncate(highlightText || item.title, 2000);

    return {
      companyName: parsed.companyName,
      sourceUrl: item.url,
      sourceId: item.id,
      announcedAt,
      description,
      fundingRound: parsed.round,
      fundingAmount: parsed.amountText,
      amountUsd: parsed.amountText ? this.parseAmountUsd(parsed.amountText) : undefined,
      tags: ["funding", "venture", "exa"],
      hiringSignal: this.detectHiringIntent(`${item.title} ${highlightText}`),
      metadata: { rawTitle: item.title },
    };
  }

  /**
   * Extract (company, amount, round) from titles like:
   *   "Acme raises $10M Series A to build X"
   *   "Beta closes $50 million seed round"
   *   "Gamma secures €2.5B in Series C"
   */
  private extractFundingFromTitle(
    title: string,
  ): { companyName: string; amountText?: string; round?: string } | null {
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
}
