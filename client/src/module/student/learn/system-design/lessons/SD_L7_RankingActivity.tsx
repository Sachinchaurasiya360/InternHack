import { useMemo, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, BookOpen, Globe } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const WARN = "#f59e0b";
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
      <h3 style={sectionTitle}>Once you have matches, which one wins?</h3>
      <p style={sectionDesc}>
        Inverted indexes give you the documents containing the query terms. Ranking decides
        which one shows up first. Two formulas dominate: <b>TF-IDF</b> (the classic) and{" "}
        <b>BM25</b> (the modern default in Lucene/Elasticsearch).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {[
          { k: "TF · term frequency", v: "How often the term appears in this document. More mentions → more relevant. Capped to avoid keyword stuffing.", color: SD },
          { k: "IDF · inverse doc frequency", v: "Rare terms are more informative. 'python' is everywhere; 'tornado' narrows down sharply.", color: WARN },
          { k: "Length normalization", v: "A term in a 50-word doc is more concentrated than the same term in a 5,000-word doc. Penalize the long doc.", color: NEUTRAL },
        ].map((c, i) => (
          <motion.div
            key={c.k}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: "16px 18px", border: `1.5px solid ${c.color}55`, borderRadius: 10, background: `${c.color}08` }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: c.color, letterSpacing: "0.1em", marginBottom: 8 }}>
              {c.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text)", lineHeight: 1.55 }}>{c.v}</div>
          </motion.div>
        ))}
      </div>

      <div style={{ padding: "16px 18px", borderRadius: 10, border: `1.5px solid ${SD}55`, background: `${SD}10`, marginBottom: 16 }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 8 }}>
          TF-IDF FORMULA
        </div>
        <div style={{ fontFamily: MONO, fontSize: "0.95rem", color: "var(--eng-text)", lineHeight: 1.6 }}>
          score(<i>doc</i>, <i>query</i>) = Σ<sub>term ∈ query</sub> tf(term, doc) × idf(term)
        </div>
      </div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Lucene</b> defaults to BM25. <b>Elasticsearch</b> uses BM25 with per-field
          tuning. <b>Postgres ts_rank</b> uses a TF-IDF variant. The ranking in Google&rsquo;s
          early days was extended-TF-IDF + PageRank; modern Google uses neural rankers but the
          pre-filter is still BM25-style.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Live ranking demo                                          */
/* ================================================================== */

const CORPUS = [
  { id: 1, title: "Python web frameworks", text: "django flask fastapi python web framework python python web" },
  { id: 2, title: "Python data analysis", text: "python pandas numpy data analysis machine learning python" },
  { id: 3, title: "JavaScript frameworks", text: "react vue angular svelte javascript framework web frontend" },
  { id: 4, title: "Tornado framework", text: "tornado python async web framework non-blocking" },
  { id: 5, title: "Web performance", text: "caching cdn web performance latency optimization" },
];

const STOPWORDS = new Set(["a", "an", "the", "and", "or", "for", "of", "to", "in", "on"]);
function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 0 && !STOPWORDS.has(t));
}

interface DocStats { id: number; title: string; tokens: string[]; tf: Map<string, number>; len: number; }

function buildStats(): DocStats[] {
  return CORPUS.map((d) => {
    const tokens = tokenize(`${d.title} ${d.text}`);
    const tf = new Map<string, number>();
    for (const t of tokens) tf.set(t, (tf.get(t) ?? 0) + 1);
    return { id: d.id, title: d.title, tokens, tf, len: tokens.length };
  });
}

function buildIdf(docs: DocStats[]): Map<string, number> {
  const idf = new Map<string, number>();
  const N = docs.length;
  const df = new Map<string, number>();
  for (const d of docs) {
    for (const term of new Set(d.tokens)) {
      df.set(term, (df.get(term) ?? 0) + 1);
    }
  }
  for (const [term, count] of df.entries()) {
    idf.set(term, Math.log(1 + (N - count + 0.5) / (count + 0.5)));
  }
  return idf;
}

function bm25Score(q: string[], d: DocStats, idf: Map<string, number>, avgLen: number, k1: number, b: number): { score: number; perTerm: { term: string; contribution: number }[] } {
  let score = 0;
  const perTerm: { term: string; contribution: number }[] = [];
  for (const term of q) {
    const tf = d.tf.get(term) ?? 0;
    if (tf === 0) {
      perTerm.push({ term, contribution: 0 });
      continue;
    }
    const idfVal = idf.get(term) ?? 0;
    const denom = tf + k1 * (1 - b + (b * d.len) / avgLen);
    const c = idfVal * ((tf * (k1 + 1)) / denom);
    score += c;
    perTerm.push({ term, contribution: c });
  }
  return { score, perTerm };
}

function RankingDemo() {
  const [query, setQuery] = useState("python web framework");
  const [k1, setK1] = useState(1.5);
  const [b, setB] = useState(0.75);

  const docs = useMemo(buildStats, []);
  const idf = useMemo(() => buildIdf(docs), [docs]);
  const avgLen = useMemo(() => docs.reduce((s, d) => s + d.len, 0) / docs.length, [docs]);
  const queryTerms = tokenize(query);

  const ranked = useMemo(() => {
    if (queryTerms.length === 0) return [];
    return docs
      .map((d) => ({
        d,
        ...bm25Score(queryTerms, d, idf, avgLen, k1, b),
      }))
      .filter((r) => r.score > 0)
      .sort((a, b2) => b2.score - a.score);
  }, [docs, idf, avgLen, queryTerms, k1, b]);

  const maxScore = ranked.length > 0 ? ranked[0].score : 1;

  return (
    <div>
      <h3 style={sectionTitle}>Type a query, slide BM25 knobs. Watch the ranking change.</h3>
      <p style={sectionDesc}>
        BM25 has two parameters. <b>k1</b> controls how much extra repetition is rewarded
        (larger = more reward). <b>b</b> controls how strongly long documents are penalized
        (1.0 = full penalty, 0 = no penalty).
      </p>

      <div className="mb-5">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search query…"
          style={{
            width: "100%",
            padding: "10px 14px",
            background: "var(--eng-surface)",
            border: `1.5px solid ${SD}55`,
            borderRadius: 10,
            outline: "none",
            color: "var(--eng-text)",
            fontFamily: MONO,
            fontSize: "0.9rem",
          }}
        />
        <div style={{ marginTop: 8, fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
          tokens: {queryTerms.map((t, i) => (
            <span key={t} style={{ color: SD, fontWeight: 700 }}>
              {i > 0 ? " · " : ""}{t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <Slider label="k1 · TF saturation" value={k1} setValue={setK1} min={0.1} max={3} step={0.1} />
        <Slider label="b · length penalty" value={b} setValue={setB} min={0} max={1} step={0.05} />
      </div>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 18 }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.12em", marginBottom: 12 }}>
          RANKED RESULTS · {ranked.length}
        </div>
        {ranked.length === 0 ? (
          <div style={{ fontFamily: MONO, fontSize: "0.78rem", color: NEUTRAL, fontStyle: "italic" }}>
            no matches — try different terms
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <AnimatePresence>
              {ranked.map((r, i) => (
                <motion.div
                  key={r.d.id}
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 25 }}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 8,
                    background: i === 0 ? `${SD}14` : "rgba(148,163,184,0.06)",
                    border: `1px solid ${i === 0 ? `${SD}55` : "rgba(148,163,184,0.2)"}`,
                  }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "30px 1fr 80px", gap: 10, alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: i === 0 ? SD : NEUTRAL }}>
                      #{i + 1}
                    </span>
                    <span style={{ fontFamily: MONO, fontSize: "0.86rem", fontWeight: 700, color: "var(--eng-text)" }}>
                      {r.d.title}
                    </span>
                    <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: SD, textAlign: "right" }}>
                      {r.score.toFixed(2)}
                    </span>
                  </div>
                  {/* contribution bars */}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {r.perTerm.map((pt) => {
                      if (pt.contribution === 0) return null;
                      const pct = (pt.contribution / maxScore) * 100;
                      return (
                        <div key={pt.term} style={{ flex: "1 1 auto", minWidth: 90 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: "0.66rem", marginBottom: 2 }}>
                            <span style={{ color: NEUTRAL }}>{pt.term}</span>
                            <span style={{ color: SD }}>{pt.contribution.toFixed(2)}</span>
                          </div>
                          <div style={{ height: 4, background: "rgba(148,163,184,0.15)", borderRadius: 2, overflow: "hidden" }}>
                            <motion.div
                              animate={{ width: `${Math.min(100, pct)}%` }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              style={{ height: "100%", background: SD }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <div style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}>
        <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
          TUNING
        </span>
        Try b=0 (no length penalty) — long docs win even if the term is buried. Try b=1 — short
        docs win even if the term appears once. The default <b>b=0.75</b> is a good balance for
        prose. Try k1=0.5 (low TF saturation) — repeating a term helps less; harder to
        keyword-stuff your way to the top.
      </div>
    </div>
  );
}

function Slider({ label, value, setValue, min, max, step }: { label: string; value: number; setValue: (v: number) => void; min: number; max: number; step: number }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700, color: "var(--eng-text)" }}>{label}</span>
        <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800, color: SD }}>= {value.toFixed(2)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{ width: "100%", accentColor: SD }}
      />
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - Beyond BM25                                                */
/* ================================================================== */

const BEYOND = [
  { k: "Field weighting", v: "Match in the title is more important than match in the body. Multiply by 3-5x.", ex: "Elasticsearch field-level boosts" },
  { k: "Recency boost", v: "For news / feeds, fresher = better. Decay older docs by exp(-age × λ).", ex: "Twitter, Hacker News" },
  { k: "Quality signals", v: "PageRank, click-through rate, domain authority. Apply as a multiplicative or additive bonus.", ex: "Google, eBay, Amazon" },
  { k: "Personalization", v: "Boost docs the user has shown interest in. User-vector × doc-vector dot product.", ex: "Netflix, YouTube, Pinterest" },
  { k: "Neural rerankers", v: "BM25 prefilters top-1000; a transformer reranks top-10. The fast/accurate split.", ex: "Modern Google, Bing" },
  { k: "Learning to Rank", v: "Train a model on (query, doc, click) tuples to predict ideal ordering.", ex: "LightGBM, XGBoost ranking" },
];

function Beyond() {
  return (
    <div>
      <h3 style={sectionTitle}>What real search engines layer on top</h3>
      <p style={sectionDesc}>
        BM25 is the strong baseline. Production search adds these signals on top, often as a
        hybrid where BM25 picks candidates and a learned ranker reorders them.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {BEYOND.map((b) => (
          <motion.div
            key={b.k}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem", marginBottom: 6 }}>{b.k}</div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55, marginBottom: 8 }}>{b.v}</div>
            <div style={{ fontFamily: MONO, fontSize: "0.74rem", color: SD }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{b.ex}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L7_RankingActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Tune the Ranking", icon: <BarChart3 className="w-4 h-4" />, content: <RankingDemo /> },
    { id: "beyond", label: "Beyond BM25", icon: <Globe className="w-4 h-4" />, content: <Beyond /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why does IDF (inverse document frequency) reward rare terms?",
      options: [
        "Rare looks nicer.",
        "Common terms appear everywhere and don't distinguish docs. Rare terms identify a small relevant set, so a match on them is more informative.",
        "Rare terms are bigger.",
        "Random.",
      ],
      correctIndex: 1,
      explanation: "If 'the' appears in every doc, matching it tells you nothing. If 'tornado' appears in 5 docs, matching it narrows the result set sharply. IDF mathematically captures this 'discriminating power'.",
    },
    {
      question: "What does the BM25 'b' parameter do?",
      options: [
        "Decoration.",
        "Controls how much long documents are penalized. b=0 means no length normalization; b=1 means full normalization. 0.75 is the typical default.",
        "Sets the cache size.",
        "Encrypts the index.",
      ],
      correctIndex: 1,
      explanation: "Without b, a 5,000-word doc that mentions 'python' once and a 50-word doc that mentions it once would tie. b normalizes for length so the shorter, more focused doc ranks higher.",
    },
    {
      question: "Which is closer to how modern Google ranks results?",
      options: [
        "Pure TF-IDF.",
        "Pure BM25.",
        "BM25-style filter + learned/neural reranker on the top-K candidates.",
        "Random.",
      ],
      correctIndex: 2,
      explanation: "Neural rankers are too slow to score billions of docs. Lexical retrieval (BM25-style) cheaply prefilters to top-1000; a learned model reranks the top-10. Speed × accuracy.",
    },
    {
      question: "Why do search engines apply field-level boosts?",
      options: [
        "Decoration.",
        "A match in the title or H1 is much stronger evidence of relevance than a match in the body. Multiplying field scores reflects that.",
        "It speeds up queries.",
        "It saves disk.",
      ],
      correctIndex: 1,
      explanation: "Authors put what a doc is about in the title. Matching there is high-signal. Production search engines expose per-field boosts (title × 5, body × 1) so this signal flows through.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="TF-IDF & BM25 Ranking"
      level={7}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The relevance scoring inside Lucene, Elasticsearch, and every search bar"
      onQuizComplete={onQuizComplete}
    />
  );
}
