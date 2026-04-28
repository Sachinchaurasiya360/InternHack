import { useMemo, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, FileText, Globe, Search } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const WARN = "#f59e0b";
const PURPLE = "#8b5cf6";
const MONO = '"JetBrains Mono", Menlo, Consolas, monospace';

const sectionTitle: CSSProperties = {
  fontFamily: "var(--eng-font)", fontWeight: 700, fontSize: "1.15rem",
  color: "var(--eng-text)", margin: "0 0 12px",
};
const sectionDesc: CSSProperties = {
  fontFamily: "var(--eng-font)", fontSize: "0.92rem",
  color: "var(--eng-text-muted)", margin: "0 0 20px", lineHeight: 1.65,
};

/* ================================================================== */
/*  TAB 1 - Definition                                                 */
/* ================================================================== */

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>The data structure that powers every search bar</h3>
      <p style={sectionDesc}>
        An <b>inverted index</b> maps each term to the list of documents containing it. The
        opposite of a forward index (doc → terms), it&rsquo;s the reason Google can search billions
        of pages in 0.3 seconds. Every document is tokenized once at write-time; queries become
        cheap intersections of pre-built lists.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {[
          {
            name: "Forward index",
            color: NEUTRAL,
            ex: "doc-1 → ['python', 'web', 'framework']",
            why: "Natural shape but useless for search — you'd scan every doc to find which ones contain 'python'.",
          },
          {
            name: "Inverted index",
            color: SD,
            ex: "'python' → [doc-1, doc-7, doc-42]",
            why: "Look up the term once, get every matching doc. Two-term query = intersect two lists. O(matches), not O(corpus).",
          },
        ].map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: "16px 18px", border: `1.5px solid ${p.color}55`, borderRadius: 10, background: `${p.color}08`, display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div style={{ fontWeight: 700, color: p.color, fontSize: "0.95rem" }}>{p.name}</div>
            <div style={{ fontFamily: MONO, fontSize: "0.78rem", padding: "8px 10px", borderRadius: 6, background: "var(--eng-surface)", border: `1px solid ${p.color}33`, color: "var(--eng-text)" }}>
              {p.ex}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{p.why}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {[
          { k: "Tokenize", v: "Split text into terms. 'The quick brown fox' → ['the', 'quick', 'brown', 'fox']." },
          { k: "Normalize", v: "Lowercase, remove stopwords ('the', 'a'), stem ('running' → 'run'). Smaller index, better recall." },
          { k: "Posting list", v: "For each term, the sorted list of doc IDs that contain it. Often with positions and term frequency for ranking." },
        ].map((c) => (
          <motion.div
            key={c.k}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
              {c.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.55 }}>{c.v}</div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Lucene</b> is the canonical inverted-index library. <b>Elasticsearch</b>,
          <b> OpenSearch</b>, and <b>Solr</b> all wrap Lucene. <b>Postgres</b> ships full-text
          search with GIN indexes (an inverted index under the hood). <b>SQLite</b> has FTS5.
          Same idea everywhere: each token points at the docs that contain it.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Live tokenization + query                                  */
/* ================================================================== */

const DOCS = [
  { id: 1, title: "Python Web Frameworks", text: "Django and Flask are popular Python web frameworks for building web apps." },
  { id: 2, title: "JavaScript on the Server", text: "Node.js lets you write server-side JavaScript with frameworks like Express." },
  { id: 3, title: "Python for Data", text: "Python with pandas and numpy is the standard for data analysis and ML." },
  { id: 4, title: "Go Microservices", text: "Go is a popular language for building fast, concurrent microservices." },
  { id: 5, title: "Web Performance", text: "Caching and CDN strategies improve web performance for users worldwide." },
];

const STOPWORDS = new Set(["a", "an", "the", "and", "or", "for", "of", "to", "in", "on", "is", "are", "with", "like"]);

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 0 && !STOPWORDS.has(t));
}

function buildIndex(): Record<string, number[]> {
  const idx: Record<string, number[]> = {};
  for (const d of DOCS) {
    const tokens = new Set(tokenize(`${d.title} ${d.text}`));
    for (const t of tokens) {
      if (!idx[t]) idx[t] = [];
      idx[t].push(d.id);
    }
  }
  for (const k of Object.keys(idx)) idx[k].sort();
  return idx;
}

function LiveIndex() {
  const [query, setQuery] = useState("python web");
  const index = useMemo(buildIndex, []);
  const queryTerms = tokenize(query);
  const matches = queryTerms.length === 0 ? [] : queryTerms.map((t) => ({ term: t, docs: index[t] ?? [] }));
  const intersection = useMemo(() => {
    if (matches.length === 0) return [];
    let result = new Set(matches[0].docs);
    for (let i = 1; i < matches.length; i++) {
      result = new Set([...result].filter((id) => matches[i].docs.includes(id)));
    }
    return Array.from(result).sort((a, b) => a - b);
  }, [matches]);

  return (
    <div>
      <h3 style={sectionTitle}>Type a query. Watch the index light up.</h3>
      <p style={sectionDesc}>
        Five short documents. Each term in the search bar is a separate posting list. The result
        is the intersection of those lists — the docs containing every query term.
      </p>

      <div className="mb-5">
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "var(--eng-surface)", border: `1.5px solid ${SD}55`, borderRadius: 10 }}>
          <Search className="w-4 h-4" style={{ color: SD }} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search…"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--eng-text)",
              fontFamily: MONO,
              fontSize: "0.9rem",
            }}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              style={{ fontFamily: MONO, fontSize: "0.66rem", color: NEUTRAL, background: "transparent", border: "none", cursor: "pointer" }}
            >
              clear
            </button>
          )}
        </div>
        <div style={{ marginTop: 8, fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
          tokens: {queryTerms.length === 0 ? <i style={{ color: NEUTRAL }}>(empty)</i> : queryTerms.map((t, i) => (
            <span key={t} style={{ color: SD, fontWeight: 700 }}>
              {i > 0 ? " · " : ""}{t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Posting lists */}
        <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 18 }}>
          <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.12em", marginBottom: 10 }}>
            POSTING LISTS · per query term
          </div>
          {matches.length === 0 ? (
            <div style={{ fontFamily: MONO, fontSize: "0.78rem", color: NEUTRAL, fontStyle: "italic" }}>
              type to look up posting lists
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <AnimatePresence mode="popLayout">
                {matches.map((m) => (
                  <motion.div
                    key={m.term}
                    layout
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 10, alignItems: "center" }}
                  >
                    <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 700, color: SD }}>{m.term}</span>
                    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                      {m.docs.length === 0 ? (
                        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL, fontStyle: "italic" }}>(no matches)</span>
                      ) : (
                        m.docs.map((id) => (
                          <motion.span
                            key={id}
                            layout
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 22 }}
                            style={{
                              fontFamily: MONO,
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              padding: "3px 8px",
                              borderRadius: 4,
                              background: intersection.includes(id) ? `${SD}33` : "rgba(148,163,184,0.12)",
                              color: intersection.includes(id) ? SD : NEUTRAL,
                              border: `1px solid ${intersection.includes(id) ? `${SD}55` : "rgba(148,163,184,0.2)"}`,
                            }}
                          >
                            doc-{id}
                          </motion.span>
                        ))
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Result documents */}
        <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 18 }}>
          <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.12em", marginBottom: 10 }}>
            RESULTS · {intersection.length} match{intersection.length === 1 ? "" : "es"}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <AnimatePresence>
              {DOCS.map((d) => {
                const matched = intersection.includes(d.id);
                if (matches.length > 0 && !matched) return null;
                return (
                  <motion.div
                    key={d.id}
                    layout
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    style={{ padding: "10px 12px", borderRadius: 6, background: matched ? `${SD}10` : "rgba(148,163,184,0.06)", border: `1px solid ${matched ? `${SD}55` : "rgba(148,163,184,0.2)"}` }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <FileText className="w-3.5 h-3.5" style={{ color: matched ? SD : NEUTRAL }} />
                      <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL, fontWeight: 700 }}>doc-{d.id}</span>
                      <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 700, color: matched ? SD : "var(--eng-text)" }}>
                        {d.title}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--eng-text-muted)", lineHeight: 1.45 }}>{highlightTerms(d.text, queryTerms)}</div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}>
        <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
          KEY INSIGHT
        </span>
        Without an inverted index, this query would scan all 5 docs. With it, you read 2 short
        posting lists and intersect — O(matches), not O(corpus). At 100M docs, the difference is
        between feasible and impossible.
      </div>
    </div>
  );
}

function highlightTerms(text: string, terms: string[]): React.ReactNode {
  if (terms.length === 0) return text;
  const regex = new RegExp(`\\b(${terms.map((t) => t.replace(/[^\w]/g, "")).filter(Boolean).join("|")})\\b`, "gi");
  const parts = text.split(regex);
  return parts.map((p, i) =>
    regex.test(p) ? (
      <span key={i} style={{ color: SD, fontWeight: 700 }}>{p}</span>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

/* ================================================================== */
/*  TAB 3 - Index design knobs                                         */
/* ================================================================== */

const KNOBS = [
  { k: "Stemming", v: "Reduce 'running', 'ran', 'runs' → 'run'. Bigger recall but loses tense; usually a win for prose.", color: SD },
  { k: "Stopwords", v: "Drop very common terms ('the', 'a'). Smaller index, faster queries; lose phrase searches that need them.", color: SD },
  { k: "Synonyms", v: "Index 'NYC' alongside 'New York'. Improves recall but bloats lists.", color: SD },
  { k: "n-grams", v: "Index sub-strings ('quick' → 'qui', 'uic', 'ick'). Enables substring search at the cost of huge indexes.", color: WARN },
  { k: "Phrase / position", v: "Store positions inside docs so 'new york' matches phrases, not just both terms anywhere.", color: PURPLE },
  { k: "Compression", v: "Posting lists are mostly increasing integers — delta-encode them. 50%+ smaller indexes for free.", color: SD },
];

function Knobs() {
  return (
    <div>
      <h3 style={sectionTitle}>Knobs every search index has</h3>
      <p style={sectionDesc}>
        Picking these well separates a good search index from a slow, irrelevant one. Every
        production search engine exposes most of these as configurable analyzers.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {KNOBS.map((k) => (
          <motion.div
            key={k.k}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: k.color, letterSpacing: "0.1em", marginBottom: 6 }}>
              {k.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{k.v}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L7_InvertedIndexActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "live", label: "Live Search", icon: <Search className="w-4 h-4" />, content: <LiveIndex /> },
    { id: "knobs", label: "Index Knobs", icon: <Globe className="w-4 h-4" />, content: <Knobs /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why is an inverted index faster than scanning every document?",
      options: [
        "It compresses data.",
        "Each term has a pre-built sorted list of doc IDs. Query = look up term lists and intersect, O(matches) not O(corpus).",
        "It's stored on SSD.",
        "It uses less RAM.",
      ],
      correctIndex: 1,
      explanation: "The whole point. At index time you do the heavy work; at query time you read short pre-built lists. 100M docs × 1µs scan would be 100s. Two posting lists of 1k IDs intersected: microseconds.",
    },
    {
      question: "A two-term AND query 'python web'. The inverted index returns:",
      options: [
        "All docs containing 'python' OR 'web'.",
        "The intersection of two posting lists — docs containing BOTH terms.",
        "Only the first match.",
        "Random docs.",
      ],
      correctIndex: 1,
      explanation: "AND queries intersect. OR queries union. Both are linear in the size of the input lists, much smaller than the corpus.",
    },
    {
      question: "Stemming reduces 'running', 'ran', 'runs' to 'run'. Trade-off?",
      options: [
        "No trade-off.",
        "Bigger recall (finds related terms) but loses precision when tense matters.",
        "Faster only.",
        "Smaller index only.",
      ],
      correctIndex: 1,
      explanation: "Stemming maps morphological variants to one term. A search for 'ran' finds 'running' too — usually what users want, but bad for code search where 'run' and 'runs' are different methods.",
    },
    {
      question: "Why are posting lists usually delta-encoded?",
      options: [
        "Prettier.",
        "They're sorted increasing integers, so deltas are small and compress to a fraction of the raw size, saving disk and RAM.",
        "Required by Lucene.",
        "Encryption.",
      ],
      correctIndex: 1,
      explanation: "Doc IDs in a posting list are sorted ascending. Differences between adjacent IDs are small numbers that variable-byte encode in 1-2 bytes each. 50-90% size reduction with negligible decode cost.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Inverted Index"
      level={7}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The data structure behind every search engine — Google, Elasticsearch, Lucene"
      onQuizComplete={onQuizComplete}
    />
  );
}
