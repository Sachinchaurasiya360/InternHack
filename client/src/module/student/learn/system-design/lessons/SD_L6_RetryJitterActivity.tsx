import { useEffect, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, Globe, Pause, Play, RotateCcw } from "lucide-react";
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

const STRATS = [
  {
    name: "Fixed retry",
    color: WARN,
    formula: "delay = constant",
    note: "Every retry waits the same fixed amount. Simple. Causes the thundering herd: 1000 clients hit the downstream at the same moments forever.",
  },
  {
    name: "Exponential backoff",
    color: PURPLE,
    formula: "delay = base × 2^attempt",
    note: "Each retry waits longer than the last. Reduces overall load but synchronized clients still align their retries on the same exponential schedule.",
  },
  {
    name: "Full jitter",
    color: SD,
    formula: "delay = random(0, base × 2^attempt)",
    note: "Pick a random value within the exponential window. Spreads retries uniformly across time. The standard for production.",
  },
];

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>Why naive retries make outages worse</h3>
      <p style={sectionDesc}>
        Retries are how distributed systems heal from transient failures. Done wrong, they turn a
        small downstream blip into an unrecoverable retry storm. Three strategies, ordered by
        sophistication.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {STRATS.map((s) => (
          <motion.div
            key={s.name}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            style={{
              padding: "16px 18px",
              border: `1.5px solid ${s.color}55`,
              borderRadius: 10,
              background: `${s.color}08`,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ fontWeight: 700, color: s.color, fontSize: "0.95rem" }}>{s.name}</div>
            <div style={{ fontFamily: MONO, fontSize: "0.78rem", padding: "8px 10px", borderRadius: 6, background: "var(--eng-surface)", border: `1px solid ${s.color}33`, color: "var(--eng-text)" }}>
              {s.formula}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{s.note}</div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "16px 18px", borderRadius: 10, border: `1.5px solid ${SD}55`, background: `${SD}10`, marginBottom: 16 }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 8 }}>
          THE THREE RULES
        </div>
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>1. Always cap retry count.</b> 3-5 attempts is plenty. Infinite retry queues are a
          bug.
          <br />
          <b>2. Always set a timeout.</b> A retry without a timeout is just a hung connection
          waiting to retry.
          <br />
          <b>3. Always add jitter.</b> Synchronized retries are how outages stay outages.
        </div>
      </div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          AWS SDK ships full-jitter exponential backoff by default. <b>Stripe</b> SDKs
          retry idempotent requests with full jitter. <b>gRPC</b> retry policies are
          configurable per-service. <b>Polly</b> (.NET) and <b>Resilience4j</b> (JVM) are the
          canonical libraries.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Three strategies racing                                    */
/* ================================================================== */

interface Hit { t: number; client: number; }

const CLIENTS = 30;
const ATTEMPTS = 4;
const BASE_MS = 500;
const SIM_MS = 12000;

function precompute(strategy: "fixed" | "expo" | "jitter"): Hit[] {
  const hits: Hit[] = [];
  for (let c = 0; c < CLIENTS; c++) {
    let t = 0;
    for (let a = 0; a < ATTEMPTS; a++) {
      let delay: number;
      if (strategy === "fixed") delay = BASE_MS;
      else if (strategy === "expo") delay = BASE_MS * Math.pow(2, a);
      else {
        const cap = BASE_MS * Math.pow(2, a);
        delay = Math.random() * cap;
      }
      t += delay;
      if (t > SIM_MS) break;
      hits.push({ t, client: c });
    }
  }
  return hits;
}

function ThreeStrategies() {
  const [running, setRunning] = useState(false);
  const [tNow, setTNow] = useState(0);
  const [seed, setSeed] = useState(0);
  const [hits, setHits] = useState<{ fixed: Hit[]; expo: Hit[]; jitter: Hit[] }>({
    fixed: [],
    expo: [],
    jitter: [],
  });

  useEffect(() => {
    setHits({
      fixed: precompute("fixed"),
      expo: precompute("expo"),
      jitter: precompute("jitter"),
    });
    setTNow(0);
    setRunning(false);
    // seed used to force re-precompute even if other deps are equal
    void seed;
  }, [seed]);

  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      setTNow((t) => {
        const next = t + 80;
        if (next >= SIM_MS) {
          setRunning(false);
          return SIM_MS;
        }
        return next;
      });
    }, 80);
    return () => clearInterval(handle);
  }, [running]);

  const reset = () => {
    setTNow(0);
    setRunning(false);
    setSeed((s) => s + 1);
  };

  return (
    <div>
      <h3 style={sectionTitle}>Same outage. Same 30 clients. Three retry strategies.</h3>
      <p style={sectionDesc}>
        At t=0 the downstream rejects all 30 clients at once. Each strategy retries up to 4 times.
        Press play and watch when those retries actually arrive at the downstream — look for the
        spikes.
      </p>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        <Lane name="Fixed retry · same delay every attempt" color={WARN} hits={hits.fixed} tNow={tNow} />
        <Lane name="Exponential backoff · doubles each attempt" color={PURPLE} hits={hits.expo} tNow={tNow} />
        <Lane name="Full jitter · randomized within exponential window" color={SD} hits={hits.jitter} tNow={tNow} />

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setRunning((r) => !r)} style={btn(SD)}>
            {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {running ? "pause" : tNow >= SIM_MS ? "replay" : tNow > 0 ? "resume" : "play"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset · new seed
          </motion.button>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
            t = <span style={{ color: SD, fontWeight: 700 }}>{(tNow / 1000).toFixed(1)}s</span> / 12.0s
          </span>
        </div>

        {tNow >= SIM_MS && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
              SUMMARY
            </span>
            Notice how <b style={{ color: WARN }}>fixed retry</b> shows tall spikes — every client retried at the
            same moments, hammering the downstream. <b style={{ color: PURPLE }}>Exponential backoff</b> spreads
            them along the doubling schedule but spikes still align. <b style={{ color: SD }}>Full jitter</b>{" "}
            dissolves the spikes into a uniform load — the downstream gets a chance to recover.
          </motion.div>
        )}
      </div>
    </div>
  );
}

function Lane({ name, color, hits, tNow }: { name: string; color: string; hits: Hit[]; tNow: number }) {
  // Aggregate hits into 250ms buckets for the histogram
  const bucketMs = 250;
  const buckets = Math.ceil(SIM_MS / bucketMs);
  const counts = Array(buckets).fill(0);
  for (const h of hits) {
    if (h.t > tNow) continue;
    const i = Math.floor(h.t / bucketMs);
    if (i < buckets) counts[i]++;
  }
  const max = Math.max(1, ...counts);

  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <span style={{ fontFamily: MONO, fontSize: "0.74rem", fontWeight: 700, color }}>{name}</span>
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
          retries so far: <span style={{ color, fontWeight: 700 }}>{hits.filter((h) => h.t <= tNow).length}</span>
          {" · "}peak: <span style={{ color, fontWeight: 700 }}>{Math.max(...counts)}/250ms</span>
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 1, height: 64, background: "rgba(148,163,184,0.08)", borderRadius: 6, padding: 4, border: `1px solid ${color}22` }}>
        {counts.map((c, i) => {
          const tBucket = i * bucketMs;
          const isPast = tBucket <= tNow;
          const pct = max === 0 ? 0 : (c / max) * 100;
          return (
            <motion.div
              key={i}
              animate={{ height: `${pct}%`, opacity: isPast ? 1 : 0.2 }}
              transition={{ duration: 0.1, ease: "linear" }}
              style={{
                flex: 1,
                background: color,
                borderRadius: 1,
                minHeight: c > 0 ? 2 : 0,
              }}
            />
          );
        })}
      </div>
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
/*  TAB 3 - The full retry policy                                      */
/* ================================================================== */

function FullPolicy() {
  return (
    <div>
      <h3 style={sectionTitle}>A retry policy you&rsquo;d ship</h3>
      <p style={sectionDesc}>
        The minimum policy for any production HTTP client: bounded retries, per-attempt timeout,
        full jitter, retry only on safe codes.
      </p>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        <pre style={{ margin: 0, fontFamily: MONO, fontSize: "0.82rem", color: "#e5e7eb", lineHeight: 1.75, overflowX: "auto" }}>
          <span style={{ color: NEUTRAL }}>{`// retry config`}</span>
          {"\n"}
          <span style={{ color: SD }}>const</span> policy = {"{"}
          {"\n  "}maxAttempts:    <span style={{ color: WARN }}>4</span>,                      <span style={{ color: NEUTRAL }}>{`// 1 try + 3 retries`}</span>
          {"\n  "}perAttemptTimeout: <span style={{ color: WARN }}>"2s"</span>,
          {"\n  "}totalTimeout:   <span style={{ color: WARN }}>"10s"</span>,                  <span style={{ color: NEUTRAL }}>{`// hard cap`}</span>
          {"\n  "}backoff:        <span style={{ color: WARN }}>"full-jitter"</span>,
          {"\n  "}base:           <span style={{ color: WARN }}>500</span>,                    <span style={{ color: NEUTRAL }}>{`// ms`}</span>
          {"\n  "}cap:            <span style={{ color: WARN }}>10_000</span>,                 <span style={{ color: NEUTRAL }}>{`// ms (never wait more than 10s)`}</span>
          {"\n  "}retryOn:        [<span style={{ color: WARN }}>500</span>, <span style={{ color: WARN }}>502</span>, <span style={{ color: WARN }}>503</span>, <span style={{ color: WARN }}>504</span>, <span style={{ color: WARN }}>"network-error"</span>],
          {"\n  "}doNotRetryOn:   [<span style={{ color: WARN }}>400</span>, <span style={{ color: WARN }}>401</span>, <span style={{ color: WARN }}>403</span>, <span style={{ color: WARN }}>404</span>, <span style={{ color: WARN }}>409</span>, <span style={{ color: WARN }}>422</span>],
          {"\n  "}retryNonIdempotent: <span style={{ color: WARN }}>false</span>,         <span style={{ color: NEUTRAL }}>{`// only retry GET, PUT, DELETE`}</span>
          {"\n"}{"}"};
        </pre>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5"
      >
        {[
          { k: "Why bounded attempts", v: "An infinite-retry loop is just a queue of doomed work. 3-5 attempts catches transient failures; beyond that, real failure is signaled." },
          { k: "Why per-attempt timeout", v: "Without it, a hung TCP connection means each retry burns its own minutes before failing. Per-attempt timeout makes failures fast." },
          { k: "Why retry only safe codes", v: "Retrying a 4xx is pointless (the client is wrong) and dangerous on non-idempotent operations." },
          { k: "Why total timeout", v: "User is waiting. After 10s of retries they're gone anyway. Cap the total so you fail visibly instead of silently lingering." },
        ].map((c) => (
          <motion.div
            key={c.k}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginBottom: 6 }}>
              {c.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{c.v}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L6_RetryJitterActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Watch the Storms", icon: <Clock className="w-4 h-4" />, content: <ThreeStrategies /> },
    { id: "policy", label: "Real Policy", icon: <Globe className="w-4 h-4" />, content: <FullPolicy /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why is full jitter strictly better than exponential backoff alone for retries?",
      options: [
        "Random feels nicer.",
        "Exponential backoff still synchronizes retries: 1000 clients retry at t=1, t=2, t=4 — all together. Jitter dissolves those spikes into a uniform distribution.",
        "Jitter is faster.",
        "It uses less memory.",
      ],
      correctIndex: 1,
      explanation: "The thundering herd issue isn't solved by spacing retries — it's solved by desynchronizing them. Exponential backoff spaces but doesn't desynchronize. Random jitter does both.",
    },
    {
      question: "You retry a non-idempotent POST that succeeded but the response was lost. What happens without idempotency keys?",
      options: ["Nothing.", "The action runs twice — duplicate charge, duplicate email, duplicate booking.", "The retry fails silently.", "The server detects it."],
      correctIndex: 1,
      explanation: "Without an idempotency key, the server can't tell a retry apart from a fresh request. This is exactly why payment SDKs require idempotency keys on all retries.",
    },
    {
      question: "A retry policy has maxAttempts=10 and base=100ms with full jitter cap of 10s. What's the worst-case total wait time?",
      options: ["1 second", "About 60-90 seconds in the worst case", "Forever", "100ms"],
      correctIndex: 1,
      explanation: "Each retry can wait up to the cap. 10 attempts × up to 10s = up to 100s total wait. This is why you also set a TOTAL timeout — otherwise a chatty downstream blocks the user for minutes.",
    },
    {
      question: "Which of these should NEVER be retried?",
      options: [
        "A 500 from the server",
        "A network timeout on a GET",
        "A 400 Bad Request — the client is wrong, retrying won't fix it",
        "A 503 Service Unavailable",
      ],
      correctIndex: 2,
      explanation: "4xx codes (except 408 Request Timeout and 429 Too Many Requests) signal client error. Retrying them just wastes time. 5xx and connection errors are typically transient and worth retrying.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Retries, Timeouts, Jitter"
      level={6}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'how do you handle a flaky downstream' question's correct answer"
      onQuizComplete={onQuizComplete}
    />
  );
}
