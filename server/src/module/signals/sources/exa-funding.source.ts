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

  async fetch(signal?: AbortSignal): Promise<SourceResult> {
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
      const result = await this.search(key, query, startDate, signal);
      if (result.error) {
        // Log but continue with remaining queries
        console.warn(`[ExaFundingSource] query "${query}" error: ${result.error}`);
        continue;
      }
      for (const item of result.results) {
        // Dedupe by the stable URL-derived id, not Exa's volatile result id,
        // so the same article from the two queries collapses to one signal.
        const id = this.stableId(item.url);
        if (seen.has(id)) continue;
        seen.add(id);
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
    signal?: AbortSignal,
  ): Promise<ExaResponse> {
    try {
      const res = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        signal,
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

  /**
   * Exa hands back a fresh `id` for the same article on every search, so it
   * cannot dedupe across cron runs. Derive a stable id from the canonical
   * article URL (host + path, lowercased, query/hash stripped) so the unique
   * (source, sourceId) constraint collapses repeat ingests into updates instead
   * of inserting a new row each run.
   */
  private stableId(url: string): string {
    try {
      const u = new URL(url);
      const path = u.pathname.replace(/\/+$/, "");
      return `${u.host}${path}`.toLowerCase();
    } catch {
      return url.trim().toLowerCase();
    }
  }

  private toSignal(item: ExaResult): FundingSignalData | null {
    const parsed = extractFundingFromTitle(item.title);
    if (!parsed) return null;

    const announcedAt = item.publishedDate ? new Date(item.publishedDate) : new Date();
    const highlightText = (item.highlights ?? []).join(" ");
    const description = this.truncate(highlightText || item.title, 2000);

    return {
      companyName: parsed.companyName,
      sourceUrl: item.url,
      sourceId: this.stableId(item.url),
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

}

/**
 * Leading editorial labels news outlets prepend to funding headlines, e.g.
 * "Exclusive:", "Breaking:", "Report:". Stripped so they never leak into the
 * stored company name.
 */
const EDITORIAL_PREFIX =
  /^\s*(?:exclusive|breaking|update(?:d)?|report(?:ed)?|scoop|just in|watch|video|opinion|analysis|explained|explainer|interview|profile|q&a|news|deal|deals|funding|startups?)\s*:\s*/i;

/**
 * Descriptor nouns that separate a "<nationality> <sector> startup" style
 * preamble from the actual company name. We strip everything up to and
 * including one of these, but only when a name follows it, so real names that
 * merely end in one of these words (e.g. "Palantir Technologies") are kept.
 */
const DESCRIPTOR_ANCHOR =
  /^.*\b(?:startups?|start-ups?|compan(?:y|ies)|firms?|scale-?ups?|unicorns?|makers?|providers?|developers?)\s+/i;

/**
 * Common nationality/demonym adjectives that get prepended to a name without a
 * descriptor noun, e.g. "Serbian SuperPlane". Deliberately scoped to the funding
 * feed: stripping a leading demonym is the right call for early-stage startup
 * headlines even though it could over-trim a rare established brand that starts
 * with one.
 */
const DEMONYMS = new Set([
  "american", "british", "english", "scottish", "irish", "welsh", "french",
  "german", "spanish", "italian", "dutch", "belgian", "swiss", "swedish",
  "norwegian", "danish", "finnish", "portuguese", "austrian", "polish",
  "czech", "slovak", "slovenian", "serbian", "croatian", "greek", "turkish",
  "russian", "ukrainian", "romanian", "bulgarian", "hungarian", "estonian",
  "latvian", "lithuanian", "icelandic", "israeli", "indian", "chinese",
  "japanese", "korean", "taiwanese", "singaporean", "indonesian", "malaysian",
  "vietnamese", "thai", "filipino", "pakistani", "bangladeshi", "australian",
  "canadian", "brazilian", "mexican", "argentine", "argentinian", "chilean",
  "colombian", "nigerian", "kenyan", "egyptian", "emirati", "saudi",
  "european", "african", "asian", "nordic",
]);

/**
 * Normalise a company name captured from a headline into a clean brand name,
 * or return null when the residue still looks like a sentence (skip the signal
 * rather than store junk). See issue #2562.
 */
export function cleanCompanyName(raw: string): string | null {
  if (!raw) return null;
  let name = raw.trim();

  // 1. Strip repeated leading editorial labels ("Exclusive: Breaking: X").
  let prev: string;
  do {
    prev = name;
    name = name.replace(EDITORIAL_PREFIX, "").trim();
  } while (name !== prev);

  // 2. Drop a trailing explanatory clause: "Seltz, a startup ..." -> "Seltz".
  const comma = name.indexOf(",");
  if (comma > 0) name = name.slice(0, comma).trim();

  // 3. Strip a "<nationality> <sector> startup" preamble up to the anchor noun:
  //    "French observability startup Tsuga" -> "Tsuga".
  name = name.replace(DESCRIPTOR_ANCHOR, "").trim();

  // 4. Strip a bare leading demonym: "Serbian SuperPlane" -> "SuperPlane".
  const firstWord = name.split(/\s+/)[0]?.toLowerCase().replace(/[^a-z]/g, "");
  if (firstWord && DEMONYMS.has(firstWord) && name.includes(" ")) {
    name = name.slice(name.indexOf(" ") + 1).trim();
  }

  // 5. Strip a leading article left behind by the anchor strip ("the startup X").
  name = name.replace(/^(?:the|a|an)\s+/i, "").trim();

  // 6. Normalise whitespace and shave surrounding quotes/brackets/punctuation.
  name = name
    .replace(/\s+/g, " ")
    .replace(/^["'“”‘’`(\[{\s]+/, "")
    .replace(/["'“”‘’`)\]}.,:;\s-]+$/, "")
    .trim();

  if (!name) return null;

  // 7. Guard: a real brand is a handful of words. Anything longer is sentence
  //    residue we failed to parse, so skip rather than persist it.
  if (name.split(/\s+/).length > 6 || name.length > 80) return null;

  return name;
}

/**
 * Extract (company, amount, round) from titles like:
 *   "Acme raises $10M Series A to build X"
 *   "Beta closes $50 million seed round"
 *   "Gamma secures €2.5B in Series C"
 */
export function extractFundingFromTitle(
  title: string,
): { companyName: string; amountText?: string; round?: string } | null {
  const pattern =
    /^(.+?)\s+(?:raises|closes|secures|lands|nabs|bags|scores|announces)\s+((?:\$|USD|EUR|€|£)?\s*[\d.,]+\s*(?:k|K|m|M|b|B|million|billion|thousand)?)\s*(?:in\s+)?((?:seed|pre-seed|series\s+[a-z]|bridge|growth)(?:\s+(?:round|funding))?)?/i;
  const m = pattern.exec(title);
  if (!m) return null;
  const rawName = m[1]?.trim();
  if (!rawName) return null;
  const companyName = cleanCompanyName(rawName);
  if (!companyName) return null;
  return {
    companyName,
    amountText: m[2]?.trim(),
    round: m[3]?.trim(),
  };
}
