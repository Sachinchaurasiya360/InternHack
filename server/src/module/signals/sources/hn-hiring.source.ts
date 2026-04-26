import { BaseSignalSource } from "./base.source.js";
import type { FundingSignalData, SourceResult } from "./base.source.js";

interface AlgoliaHit {
  objectID: string;
  title?: string;
  created_at: string;
}

interface AlgoliaSearchResponse {
  hits: AlgoliaHit[];
}

interface HnItem {
  id: number;
  type: string;
  text?: string;
  url?: string;
  time?: number;
  kids?: number[];
}

/**
 * Hacker News "Who is hiring" monthly threads via Algolia + Firebase API.
 * Each top-level comment in the monthly thread is a company posting.
 * We treat each comment as a "hiring signal", not funding per se, but
 * matches Anti Job Board's "live hiring posts from founders" feed.
 */
export class HnHiringSource extends BaseSignalSource {
  readonly source = "hn-hiring";
  readonly displayName = "Hacker News, Who is hiring";

  private readonly algoliaUrl =
    "https://hn.algolia.com/api/v1/search_by_date?query=Ask%20HN%3A%20Who%20is%20hiring&tags=story&hitsPerPage=3";
  private readonly itemUrl = "https://hacker-news.firebaseio.com/v0/item";
  private readonly maxCommentsPerThread = 60;

  async fetch(): Promise<SourceResult> {
    try {
      const threadRes = await fetch(this.algoliaUrl, {
        headers: { "User-Agent": "InternHack-Signals/1.0" },
      });
      if (!threadRes.ok) {
        return {
          source: this.source,
          signals: [],
          error: `HTTP ${String(threadRes.status)}: ${threadRes.statusText}`,
        };
      }
      const threadData = (await threadRes.json()) as AlgoliaSearchResponse;
      const threads = threadData.hits
        .filter((h) => h.title?.toLowerCase().startsWith("ask hn: who is hiring"))
        .slice(0, 2);

      const signals: FundingSignalData[] = [];
      for (const thread of threads) {
        const threadId = Number(thread.objectID);
        if (!Number.isFinite(threadId)) continue;
        const threadItem = await this.fetchItem(threadId);
        if (!threadItem?.kids?.length) continue;

        const commentIds = threadItem.kids.slice(0, this.maxCommentsPerThread);
        const comments = await Promise.all(commentIds.map((id) => this.fetchItem(id)));

        for (const comment of comments) {
          if (!comment?.text) continue;
          const signal = this.commentToSignal(comment);
          if (signal) signals.push(signal);
        }
      }
      return { source: this.source, signals };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { source: this.source, signals: [], error: message };
    }
  }

  private async fetchItem(id: number): Promise<HnItem | null> {
    try {
      const res = await fetch(`${this.itemUrl}/${String(id)}.json`);
      if (!res.ok) return null;
      return (await res.json()) as HnItem;
    } catch {
      return null;
    }
  }

  private commentToSignal(comment: HnItem): FundingSignalData | null {
    const text = this.stripHtml(comment.text ?? "");
    if (text.length < 40) return null;

    const firstLine = text.split(/\s*\|\s*|\n|\. /)[0]?.trim();
    if (!firstLine) return null;
    const companyName = firstLine.split(/\s*\(|,\s|\s-\s/)[0]?.trim();
    if (!companyName || companyName.length > 80) return null;

    const urlMatch = /https?:\/\/[^\s)]+/i.exec(text);

    return {
      companyName,
      companyWebsite: urlMatch?.[0],
      sourceUrl: `https://news.ycombinator.com/item?id=${String(comment.id)}`,
      sourceId: `hn-${String(comment.id)}`,
      announcedAt: comment.time ? new Date(comment.time * 1000) : new Date(),
      description: this.truncate(text, 2000),
      tags: ["hiring-post", "hn"],
      hiringSignal: true,
      metadata: { hnId: comment.id },
    };
  }
}
