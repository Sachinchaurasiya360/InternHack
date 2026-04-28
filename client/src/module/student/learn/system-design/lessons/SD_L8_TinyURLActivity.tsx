import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Link2, Pause, Play, RotateCcw } from "lucide-react";
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
/*  TAB 1 - The 4-step framework applied                               */
/* ================================================================== */

const STEPS = [
  {
    k: "1. Requirements",
    color: SD,
    items: [
      "Functional: shorten a URL, redirect on visit, optional custom alias.",
      "Non-functional: read-heavy (~10:1 reads/writes), low-latency redirects (<50ms p99), highly available.",
      "Out of scope: analytics, expiry, auth (for the interview version).",
    ],
  },
  {
    k: "2. Estimation",
    color: WARN,
    items: [
      "100M URLs created/day → ~1,200 writes/sec average, peak ~6k/sec.",
      "Reads at 10x writes → ~12k/sec average, peak ~60k/sec.",
      "Storage: 100M × 365 × 5 yrs × 500 bytes ≈ 90 TB over 5 years.",
      "Short-code length: 6 chars × 62 alphabet = 56 billion codes (plenty for years).",
    ],
  },
  {
    k: "3. API + Data Model",
    color: PURPLE,
    items: [
      "POST /shorten { long_url, alias? } → { short_url }",
      "GET /:code → 301 redirect to long_url",
      "Table: urls(short_code PRIMARY KEY, long_url, created_at, user_id?, expires_at?)",
    ],
  },
  {
    k: "4. High-level Diagram",
    color: SD,
    items: [
      "Client → CDN → LB → Stateless service → Cache (Redis) → Database (Postgres / DynamoDB).",
      "Redirect path is cache-first; DB is the cold tail.",
      "Short-code generation: counter-based + base62 (or hash + collision-check).",
    ],
  },
];

function FrameworkApplied() {
  return (
    <div>
      <h3 style={sectionTitle}>The 4-step framework, applied to TinyURL</h3>
      <p style={sectionDesc}>
        Run the framework from L1.4 against the prompt &ldquo;design a URL shortener&rdquo;. Every
        case study from L8 follows the same structure.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {STEPS.map((s) => (
          <motion.div
            key={s.k}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "16px 18px", border: `1.5px solid ${s.color}55`, borderRadius: 10, background: `${s.color}08`, display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: s.color, letterSpacing: "0.04em" }}>
              {s.k.toUpperCase()}
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
              {s.items.map((it, i) => (
                <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.84rem", color: "var(--eng-text)", lineHeight: 1.5 }}>
                  <span style={{ color: s.color, fontWeight: 800 }}>·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Animated redirect path with cache hit ratio                */
/* ================================================================== */

interface Hit { id: number; cached: boolean; latencyMs: number; }

const CACHE_HIT_RATE = 0.92;
const CACHE_LATENCY = 4;
const DB_LATENCY = 38;

function RedirectFlow() {
  const [running, setRunning] = useState(true);
  const [hits, setHits] = useState<Hit[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      const id = ++idRef.current;
      const cached = Math.random() < CACHE_HIT_RATE;
      const latencyMs = cached ? CACHE_LATENCY + Math.random() * 2 : DB_LATENCY + Math.random() * 12;
      setHits((hs) => {
        const next = [...hs, { id, cached, latencyMs }];
        return next.length > 30 ? next.slice(next.length - 30) : next;
      });
    }, 250);
    return () => clearInterval(handle);
  }, [running]);

  const reset = () => { setHits([]); idRef.current = 0; };

  const hitCount = hits.filter((h) => h.cached).length;
  const missCount = hits.length - hitCount;
  const hitRate = hits.length === 0 ? 0 : (hitCount / hits.length) * 100;
  const avgLatency = hits.length === 0 ? 0 : hits.reduce((a, b) => a + b.latencyMs, 0) / hits.length;

  return (
    <div>
      <h3 style={sectionTitle}>The redirect path is 90%+ cache</h3>
      <p style={sectionDesc}>
        Every short link is read far more times than it&rsquo;s written. With Redis in front of the
        DB, the steady-state hit rate is 90-95%. The DB sees only the long tail of cold codes
        and the trickle of new writes.
      </p>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        <svg viewBox="0 0 720 240" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto" }}>
          {/* nodes */}
          <NodeBox x={20} y={100} w={120} h={50} label="Client" sub="GET /aB3xY" color={SD} />
          <NodeBox x={200} y={100} w={120} h={50} label="LB" sub="" color={NEUTRAL} />
          <NodeBox x={380} y={50} w={130} h={50} label="Cache (Redis)" sub="92% hits" color={SD} pulse />
          <NodeBox x={380} y={150} w={130} h={50} label="DB (Postgres)" sub="cold tail" color={WARN} />

          {/* edges */}
          <line x1={140} y1={125} x2={200} y2={125} stroke={NEUTRAL} strokeWidth={1.3} strokeDasharray="3 4" />
          <line x1={320} y1={125} x2={380} y2={75} stroke={NEUTRAL} strokeWidth={1.3} strokeDasharray="3 4" />
          <line x1={320} y1={125} x2={380} y2={175} stroke={NEUTRAL} strokeWidth={1.3} strokeDasharray="3 4" />

          {/* moving packets for recent hits */}
          <AnimatePresence>
            {hits.slice(-4).map((h) => (
              <motion.circle
                key={h.id}
                r={4}
                fill={h.cached ? SD : WARN}
                initial={{ cx: 80, cy: 125 }}
                animate={{ cx: [80, 260, h.cached ? 445 : 445], cy: [125, 125, h.cached ? 75 : 175] }}
                transition={{ duration: h.latencyMs / 80, ease: "linear" }}
              />
            ))}
          </AnimatePresence>
        </svg>

        {/* stats */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          <Stat label="cache hit rate" value={`${hitRate.toFixed(1)}%`} color={SD} />
          <Stat label="cache hits" value={String(hitCount)} color={SD} />
          <Stat label="db hits" value={String(missCount)} color={WARN} />
        </div>

        <div style={{ marginTop: 8, padding: "10px 14px", background: `${SD}10`, border: `1.5px solid ${SD}55`, borderRadius: 6, textAlign: "center" }}>
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL, marginRight: 8 }}>average redirect latency:</span>
          <span style={{ fontFamily: MONO, fontSize: "0.95rem", fontWeight: 800, color: SD }}>
            {avgLatency.toFixed(1)}ms
          </span>
          <span style={{ fontFamily: MONO, fontSize: "0.66rem", color: NEUTRAL, marginLeft: 12 }}>
            (cache: ~{CACHE_LATENCY}ms · db: ~{DB_LATENCY}ms)
          </span>
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setRunning((r) => !r)} style={btn(SD)}>
            {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {running ? "pause" : "resume"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>

        <div style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}>
          <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
            DESIGN INSIGHT
          </span>
          With a 92% hit rate, the DB only sees ~8% of read traffic. At 60k peak reads/sec,
          that&rsquo;s ~5k DB reads/sec — comfortably handled by a single primary with read replicas.
          Without the cache, you&rsquo;d need 12× more DB capacity.
        </div>
      </div>
    </div>
  );
}

function NodeBox({ x, y, w, h, label, sub, color, pulse }: { x: number; y: number; w: number; h: number; label: string; sub: string; color: string; pulse?: boolean }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {pulse && (
        <motion.rect
          width={w}
          height={h}
          rx={8}
          fill={color}
          initial={{ opacity: 0.25, scale: 1 }}
          animate={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <rect width={w} height={h} rx={8} fill={`${color}22`} stroke={color} strokeWidth={1.5} />
      <text x={w / 2} y={20} textAnchor="middle" fill="#e5e7eb" fontSize={12} fontWeight={700} fontFamily={MONO}>
        {label}
      </text>
      <text x={w / 2} y={36} textAnchor="middle" fill={color} fontSize={10} fontFamily={MONO}>
        {sub}
      </text>
    </g>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${color}55`, background: `${color}10`, textAlign: "center" }}>
      <div style={{ fontFamily: MONO, fontSize: "0.66rem", color, letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>
        {label}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          style={{ fontFamily: MONO, fontSize: "1.1rem", fontWeight: 800, color: "var(--eng-text)" }}
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function btn(color: string): CSSProperties {
  return {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "8px 14px", borderRadius: 6, cursor: "pointer",
    border: `1.5px solid ${color}`, background: `${color}18`, color,
    fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700,
    letterSpacing: "0.08em", textTransform: "uppercase",
  };
}

/* ================================================================== */
/*  TAB 3 - Generation strategies                                      */
/* ================================================================== */

const GENS = [
  {
    name: "Counter + base62",
    color: SD,
    how: "Single counter (or sharded), encode as base62. e.g. counter=125 → '21' (base62).",
    pro: "Guaranteed unique. No collision check. Simple to reason about.",
    con: "Predictable codes (URLs are sequential, scrapeable).",
  },
  {
    name: "Hash (SHA-256) + truncate",
    color: PURPLE,
    how: "hash(long_url + salt), take first 6 base62 chars.",
    pro: "Same URL → same code. Built-in dedup.",
    con: "Collisions possible. Need DB collision check + retry. Salt to avoid public predictability.",
  },
  {
    name: "Random + collision check",
    color: WARN,
    how: "Generate 6 random base62 chars, INSERT IF NOT EXISTS, retry on conflict.",
    pro: "Unpredictable. Simple.",
    con: "DB hit per write. Conflict retries get expensive once codespace fills.",
  },
];

function Generation() {
  return (
    <div>
      <h3 style={sectionTitle}>Three ways to generate the short code</h3>
      <p style={sectionDesc}>
        Every URL shortener picks one of these three (or a hybrid). The trade-off is uniqueness
        guarantees vs unpredictability vs write-time cost.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3"
      >
        {GENS.map((g) => (
          <motion.div
            key={g.name}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: `1.5px solid ${g.color}55`, borderRadius: 10, background: `${g.color}08`, display: "flex", flexDirection: "column", gap: 8 }}
          >
            <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.92rem" }}>{g.name}</div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{g.how}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 6, borderTop: `1px dashed ${g.color}33` }}>
              <div style={{ fontSize: "0.76rem", color: "var(--eng-text)" }}>
                <span style={{ fontFamily: MONO, fontSize: "0.6rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginRight: 6 }}>PRO</span>
                {g.pro}
              </div>
              <div style={{ fontSize: "0.76rem", color: "var(--eng-text)" }}>
                <span style={{ fontFamily: MONO, fontSize: "0.6rem", fontWeight: 800, color: WARN, letterSpacing: "0.1em", marginRight: 6 }}>CON</span>
                {g.con}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ marginTop: 16, padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          PRODUCTION CHOICE
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          Most real systems do <b>counter + base62</b> with <b>sharded counters</b> across a few
          ID-generation services (snowflake-style). Each shard owns a range, hands out batches
          to writers. Predictability is mitigated by <b>not</b> exposing sequential creation order
          (shuffle the bits) and by rate-limiting scrapers.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L8_TinyURLActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "framework", label: "Framework", icon: <BookOpen className="w-4 h-4" />, content: <FrameworkApplied /> },
    { id: "redirect", label: "Redirect Path", icon: <Link2 className="w-4 h-4" />, content: <RedirectFlow /> },
    { id: "gen", label: "Code Generation", icon: <Globe className="w-4 h-4" />, content: <Generation /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "TinyURL: 100M URLs/day, 10:1 read:write ratio. Roughly what's the peak read RPS?",
      options: ["1k", "12k average, peaks around 60k", "1M", "100"],
      correctIndex: 1,
      explanation: "100M writes/day = ~1.2k writes/sec average. 10x reads = 12k reads/sec. Peak is typically 5x average — ~60k reads/sec.",
    },
    {
      question: "Why is the cache hit rate for redirects so high in practice (90%+)?",
      options: [
        "Random.",
        "URL access follows a power-law: a small fraction of links account for most clicks. Hot codes stay in cache.",
        "Redis is fast.",
        "Caches are big.",
      ],
      correctIndex: 1,
      explanation: "Twitter shares, news links, and viral content drive concentrated traffic. The 80/20 (or 99/1) rule applies — caching even modest hot sets gives massive hit rates.",
    },
    {
      question: "Counter+base62 vs hash-based code generation: a key difference?",
      options: [
        "Hash is faster.",
        "Counter is collision-free by construction; hash needs a DB collision check on every write.",
        "Counter is bigger.",
        "Hash uses more disk.",
      ],
      correctIndex: 1,
      explanation: "Counter increments and encodes — guaranteed unique. Hash truncates to 6 chars and may collide as the codespace fills, requiring a DB read-then-insert dance per write.",
    },
    {
      question: "Estimating storage: 100M URLs/day × 5 years × ~500 bytes per row ≈ ?",
      options: ["1 GB", "About 90 TB", "1 PB", "10 GB"],
      correctIndex: 1,
      explanation: "100M × 365 × 5 × 500 ≈ 91 TB. With indexes, typically ~1.5x that. Sharded across 4-8 nodes at 20-30 TB each, fits comfortably.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Design TinyURL"
      level={8}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The classic 'design a URL shortener' interview question, applied end-to-end"
      onQuizComplete={onQuizComplete}
    />
  );
}
