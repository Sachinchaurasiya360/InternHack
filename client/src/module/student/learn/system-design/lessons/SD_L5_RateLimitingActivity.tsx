import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, Pause, Play, RotateCcw, Zap } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const WARN = "#f59e0b";
const PURPLE = "#8b5cf6";
const MONO = '"JetBrains Mono", Menlo, Consolas, monospace';

const sectionTitle: CSSProperties = {
  fontFamily: "var(--eng-font)",
  fontWeight: 700,
  fontSize: "1.15rem",
  color: "var(--eng-text)",
  margin: "0 0 12px",
};
const sectionDesc: CSSProperties = {
  fontFamily: "var(--eng-font)",
  fontSize: "0.92rem",
  color: "var(--eng-text-muted)",
  margin: "0 0 20px",
  lineHeight: 1.65,
};

/* ================================================================== */
/*  TAB 1 - Definition                                                 */
/* ================================================================== */

const ALGOS = [
  {
    name: "Token Bucket",
    color: SD,
    short: "burst-friendly",
    long: "Bucket holds up to N tokens. Refills at R tokens/sec. Each request consumes a token. Allows bursts up to N when the bucket is full.",
    pro: "Bursts allowed (good for human traffic).",
    con: "A user can drain the bucket then idle for a while to refill — gameable for sustained attack via timed bursts.",
    ex: "AWS API Gateway, Stripe, most public APIs.",
  },
  {
    name: "Leaky Bucket",
    color: PURPLE,
    short: "smooth output",
    long: "Requests enter a queue (the bucket). Drained at fixed rate R. If the queue overflows capacity N, requests are dropped.",
    pro: "Output is perfectly smooth — protects downstream from bursts.",
    con: "Genuine bursts get queued or dropped. User-perceived latency can spike during bursts.",
    ex: "Network shaping, anything where downstream MUST not see bursts.",
  },
  {
    name: "Sliding Window",
    color: WARN,
    short: "honest count",
    long: "Count requests in the last T seconds. If count > limit, reject. Window slides continuously.",
    pro: "Most accurate enforcement of 'X req/min' SLA.",
    con: "Higher memory cost (per-user request log) and CPU per check.",
    ex: "GitHub API limits, Twitter API limits.",
  },
];

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>Three algorithms. One job: cap traffic per identity.</h3>
      <p style={sectionDesc}>
        Rate limiters protect downstream services from being overwhelmed and protect APIs from
        abusive clients. The algorithm you pick decides how bursts behave: allowed, smoothed, or
        strictly capped.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {ALGOS.map((a) => (
          <motion.div
            key={a.name}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            style={{
              padding: "16px 18px",
              border: `1.5px solid ${a.color}55`,
              borderRadius: 10,
              background: `${a.color}08`,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "1rem", marginBottom: 4 }}>{a.name}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: a.color, fontWeight: 700 }}>
                {a.short}
              </div>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{a.long}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 8, borderTop: `1px dashed ${a.color}33` }}>
              <div style={{ fontSize: "0.78rem", color: "var(--eng-text)" }}>
                <span style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginRight: 6 }}>PRO</span>
                {a.pro}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--eng-text)" }}>
                <span style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800, color: WARN, letterSpacing: "0.1em", marginRight: 6 }}>CON</span>
                {a.con}
              </div>
            </div>
            <div style={{ fontFamily: MONO, fontSize: "0.72rem", color: a.color }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{a.ex}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Stripe</b> uses token bucket per API key. <b>Cloudflare</b> uses sliding window for
          DDoS detection. <b>nginx</b> ships a leaky-bucket shaper out of the box. <b>Redis</b>{" "}
          + a Lua script is the canonical distributed implementation, atomic across nodes.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Three algorithms running side-by-side                      */
/* ================================================================== */

interface RequestEvent {
  t: number; // ms since start
  algo: "token" | "leaky" | "sliding";
  result: "allowed" | "rejected" | "queued";
}

const TICK_MS = 100;
const SIM_DURATION_MS = 12000;

interface SimResult {
  events: RequestEvent[];
  tokenSamples: { t: number; tokens: number }[];
  leakySamples: { t: number; queued: number }[];
  slidingSamples: { t: number; count: number }[];
}

function simulate(burst: number): SimResult {
  // Burst pattern: 8 req/s baseline, then a spike of `burst` req/s for 2s, then back to 8.
  const events: RequestEvent[] = [];
  const tokenSamples: { t: number; tokens: number }[] = [];
  const leakySamples: { t: number; queued: number }[] = [];
  const slidingSamples: { t: number; count: number }[] = [];

  // Token bucket params: cap=10, refill=10/s
  let tokens = 10;
  const tokenCap = 10;
  const tokenRefillPerMs = 10 / 1000;

  // Leaky bucket: cap=20, leak=10/s
  let queue = 0;
  const leakyCap = 20;
  const leakPerMs = 10 / 1000;

  // Sliding window: 10 req/s = 10 in last 1000ms
  const slidingHistory: number[] = [];
  const slidingLimit = 10;
  const slidingWindow = 1000;

  let lastReq = 0;
  for (let t = 0; t <= SIM_DURATION_MS; t += TICK_MS) {
    // Refill / leak between ticks
    tokens = Math.min(tokenCap, tokens + tokenRefillPerMs * TICK_MS);
    queue = Math.max(0, queue - leakPerMs * TICK_MS);

    // Decide rate at this moment
    const inSpike = t >= 4000 && t <= 6000;
    const reqPerSec = inSpike ? burst : 8;
    const interval = 1000 / reqPerSec;

    while (lastReq + interval <= t) {
      lastReq += interval;

      // Token bucket
      if (tokens >= 1) {
        tokens -= 1;
        events.push({ t: lastReq, algo: "token", result: "allowed" });
      } else {
        events.push({ t: lastReq, algo: "token", result: "rejected" });
      }

      // Leaky bucket
      if (queue + 1 <= leakyCap) {
        queue += 1;
        events.push({ t: lastReq, algo: "leaky", result: "queued" });
      } else {
        events.push({ t: lastReq, algo: "leaky", result: "rejected" });
      }

      // Sliding window
      // prune
      while (slidingHistory.length && slidingHistory[0] < lastReq - slidingWindow) {
        slidingHistory.shift();
      }
      if (slidingHistory.length < slidingLimit) {
        slidingHistory.push(lastReq);
        events.push({ t: lastReq, algo: "sliding", result: "allowed" });
      } else {
        events.push({ t: lastReq, algo: "sliding", result: "rejected" });
      }
    }

    tokenSamples.push({ t, tokens });
    leakySamples.push({ t, queued: queue });
    slidingSamples.push({ t, count: slidingHistory.filter((x) => x >= t - slidingWindow).length });
  }

  return { events, tokenSamples, leakySamples, slidingSamples };
}

function ThreeAlgos() {
  const [burst, setBurst] = useState(40);
  const [running, setRunning] = useState(false);
  const [tNow, setTNow] = useState(0);
  const sim = useRef<SimResult>({ events: [], tokenSamples: [], leakySamples: [], slidingSamples: [] });

  useEffect(() => {
    sim.current = simulate(burst);
    setTNow(0);
    setRunning(false);
  }, [burst]);

  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      setTNow((t) => {
        const next = t + 100;
        if (next >= SIM_DURATION_MS) {
          setRunning(false);
          return SIM_DURATION_MS;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(handle);
  }, [running]);

  const reset = () => {
    setTNow(0);
    setRunning(false);
  };

  // Stats up to tNow
  const upTo = sim.current.events.filter((e) => e.t <= tNow);
  const stats = {
    token: { allowed: upTo.filter((e) => e.algo === "token" && e.result === "allowed").length, rejected: upTo.filter((e) => e.algo === "token" && e.result === "rejected").length },
    leaky: { allowed: upTo.filter((e) => e.algo === "leaky" && e.result === "queued").length, rejected: upTo.filter((e) => e.algo === "leaky" && e.result === "rejected").length },
    sliding: { allowed: upTo.filter((e) => e.algo === "sliding" && e.result === "allowed").length, rejected: upTo.filter((e) => e.algo === "sliding" && e.result === "rejected").length },
  };

  const tokenSampleAtT = sim.current.tokenSamples.find((s) => s.t >= tNow) ?? sim.current.tokenSamples[sim.current.tokenSamples.length - 1];
  const leakySampleAtT = sim.current.leakySamples.find((s) => s.t >= tNow) ?? sim.current.leakySamples[sim.current.leakySamples.length - 1];
  const slidingSampleAtT = sim.current.slidingSamples.find((s) => s.t >= tNow) ?? sim.current.slidingSamples[sim.current.slidingSamples.length - 1];

  const inSpike = tNow >= 4000 && tNow <= 6000;

  return (
    <div>
      <h3 style={sectionTitle}>Same burst. Three algorithms react.</h3>
      <p style={sectionDesc}>
        All three are configured for 10 req/s. Steady traffic at 8 req/s, then a spike at <b>{burst} req/s</b> from
        t=4s to t=6s. Press play. Watch the bucket level, queue, and rolling count diverge.
      </p>

      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700, color: "var(--eng-text)" }}>burst rate:</span>
        <input
          type="range"
          min={20}
          max={80}
          step={10}
          value={burst}
          onChange={(e) => setBurst(Number(e.target.value))}
          disabled={running}
          style={{ accentColor: SD, flex: 1, maxWidth: 240 }}
        />
        <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800, color: SD }}>{burst} req/s</span>
      </div>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
        }}
      >
        {/* Timeline */}
        <div style={{ position: "relative", height: 24, marginBottom: 14 }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(148,163,184,0.12)", borderRadius: 4 }} />
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${(4000 / SIM_DURATION_MS) * 100}%`,
              width: `${((6000 - 4000) / SIM_DURATION_MS) * 100}%`,
              background: `${WARN}33`,
              border: `1px solid ${WARN}55`,
              borderRadius: 4,
            }}
          />
          <motion.div
            animate={{ left: `${(tNow / SIM_DURATION_MS) * 100}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
            style={{ position: "absolute", top: 0, bottom: 0, width: 2, background: SD }}
          />
          <span style={{ position: "absolute", left: `${(4000 / SIM_DURATION_MS) * 100}%`, top: -18, fontFamily: MONO, fontSize: "0.66rem", color: WARN, fontWeight: 700 }}>
            burst
          </span>
        </div>

        {/* Three lanes */}
        <div className="grid grid-cols-1 gap-3">
          <Lane
            name="Token Bucket"
            color={SD}
            metric={`tokens: ${(tokenSampleAtT?.tokens ?? 0).toFixed(1)} / 10`}
            barPct={Math.min(100, ((tokenSampleAtT?.tokens ?? 0) / 10) * 100)}
            allowed={stats.token.allowed}
            rejected={stats.token.rejected}
          />
          <Lane
            name="Leaky Bucket"
            color={PURPLE}
            metric={`queued: ${(leakySampleAtT?.queued ?? 0).toFixed(1)} / 20`}
            barPct={Math.min(100, ((leakySampleAtT?.queued ?? 0) / 20) * 100)}
            allowed={stats.leaky.allowed}
            rejected={stats.leaky.rejected}
            barIsBackpressure
          />
          <Lane
            name="Sliding Window"
            color={WARN}
            metric={`last 1s: ${slidingSampleAtT?.count ?? 0} / 10`}
            barPct={Math.min(100, ((slidingSampleAtT?.count ?? 0) / 10) * 100)}
            allowed={stats.sliding.allowed}
            rejected={stats.sliding.rejected}
          />
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setRunning((r) => !r)}
            style={btn(SD)}
          >
            {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {running ? "pause" : tNow >= SIM_DURATION_MS ? "replay" : tNow > 0 ? "resume" : "play"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
            t = <span style={{ color: inSpike ? WARN : SD, fontWeight: 700 }}>{(tNow / 1000).toFixed(1)}s</span>
            {" / 12.0s"}
          </span>
        </div>

        {tNow >= SIM_DURATION_MS && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
              SUMMARY
            </span>
            Token bucket: {stats.token.allowed} allowed, {stats.token.rejected} rejected (allowed the burst until tokens drained, then strict).
            Leaky bucket: {stats.leaky.allowed} queued, {stats.leaky.rejected} dropped (smooth output rate, backpressure on burst).
            Sliding: {stats.sliding.allowed} allowed, {stats.sliding.rejected} rejected (cleanest cap; rejects burst overflow immediately).
          </motion.div>
        )}
      </div>
    </div>
  );
}

function Lane({ name, color, metric, barPct, allowed, rejected, barIsBackpressure }: { name: string; color: string; metric: string; barPct: number; allowed: number; rejected: number; barIsBackpressure?: boolean }) {
  return (
    <div style={{ padding: "12px 14px", borderRadius: 8, border: `1.5px solid ${color}33`, background: `${color}08` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 700, color }}>
          {name}
        </span>
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: "#e5e7eb" }}>
          {metric}
        </span>
      </div>
      <div style={{ height: 14, background: "rgba(148,163,184,0.15)", borderRadius: 4, overflow: "hidden", marginBottom: 6 }}>
        <motion.div
          animate={{ width: `${barPct}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
          style={{ height: "100%", background: barIsBackpressure ? `linear-gradient(90deg, ${color}, ${WARN})` : color, opacity: 0.9 }}
        />
      </div>
      <div style={{ display: "flex", gap: 14, fontFamily: MONO, fontSize: "0.7rem" }}>
        <span style={{ color: SD }}>✓ {allowed} allowed</span>
        <span style={{ color: WARN }}>✕ {rejected} rejected</span>
      </div>
    </div>
  );
}

function btn(color: string): CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
    border: `1.5px solid ${color}`,
    background: `${color}18`,
    color,
    fontFamily: MONO,
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  };
}

/* ================================================================== */
/*  TAB 3 - Where to put rate limiters                                 */
/* ================================================================== */

const PLACEMENTS = [
  {
    where: "Edge / CDN",
    pick: "First line of defense",
    ex: "Cloudflare rate-limit rules. Drops bots before they hit your origin.",
  },
  {
    where: "API Gateway",
    pick: "Per-API-key, per-route",
    ex: "AWS API Gateway throttling, Kong, Tyk. Where SaaS plans get enforced.",
  },
  {
    where: "Application middleware",
    pick: "Per-user, per-action",
    ex: "Express middleware + Redis. Per-user login attempts, per-IP signups.",
  },
  {
    where: "Per-service",
    pick: "Last line of defense",
    ex: "Internal RPCs that protect a fragile downstream (legacy DB, third-party API).",
  },
];

function Placement() {
  return (
    <div>
      <h3 style={sectionTitle}>Where do you actually put a rate limiter?</h3>
      <p style={sectionDesc}>
        Real systems use rate limiters at multiple layers — defense in depth. Each layer protects
        different things and uses different identity (IP, API key, user, route).
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5"
      >
        {PLACEMENTS.map((p) => (
          <motion.div
            key={p.where}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 6 }}>
              <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem" }}>{p.where}</span>
              <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: 4, border: `1px solid ${SD}55`, background: `${SD}14`, whiteSpace: "nowrap" }}>
                {p.pick}
              </span>
            </div>
            <div style={{ fontFamily: MONO, fontSize: "0.74rem", color: NEUTRAL, lineHeight: 1.5 }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4, color: SD }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{p.ex}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: `1.5px solid ${SD}55`, background: `${SD}10` }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          DISTRIBUTED RATE LIMITING
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.65 }}>
          Single-node limiters break with horizontally-scaled servers — each instance only sees
          its own traffic. The standard fix: <b>Redis with an atomic Lua script</b>. Each request
          fetches and decrements a counter atomically across all server instances. For massive
          scale, sharded by user ID or hashed identity.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L5_RateLimitingActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Three Algorithms", icon: <Zap className="w-4 h-4" />, content: <ThreeAlgos /> },
    { id: "where", label: "Where to Put It", icon: <Globe className="w-4 h-4" />, content: <Placement /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "An API has a 'human-friendly' usage pattern: bursts of 5-10 requests when a user opens the app, then idle. Which algorithm fits?",
      options: ["Leaky bucket — must smooth output", "Token bucket — allows bursts when bucket is full", "Strict per-second cap", "No limiter"],
      correctIndex: 1,
      explanation: "Token bucket lets the user burn down accumulated tokens during a burst, then refill while idle. Matches human-driven UI traffic naturally. Leaky bucket would queue or drop the burst.",
    },
    {
      question: "You need to protect a fragile legacy database that physically cannot handle bursts. Which algorithm?",
      options: ["Token bucket", "Leaky bucket — output is perfectly smooth", "Sliding window", "Doesn't matter"],
      correctIndex: 1,
      explanation: "Leaky bucket guarantees the downstream sees a strictly bounded rate regardless of input pattern. Bursts queue up (or are dropped), but the database's view is uniform.",
    },
    {
      question: "Your rate limiter runs in a single Node.js instance. You scale to 4 instances. What breaks?",
      options: [
        "Nothing.",
        "Each instance only sees its own traffic, so the effective limit becomes 4× the configured limit.",
        "Memory usage drops.",
        "Latency improves.",
      ],
      correctIndex: 1,
      explanation: "Per-instance limiters become per-instance silos. The fix is shared state — Redis with an atomic INCR/Lua script across all instances. Each request hits Redis to coordinate.",
    },
    {
      question: "Why is sliding window more memory-expensive than token bucket?",
      options: [
        "Bigger code.",
        "It needs to track timestamps of recent requests per identity (often a list or sorted set), while token bucket needs just two numbers.",
        "It uses GPU.",
        "It compresses data.",
      ],
      correctIndex: 1,
      explanation: "Token bucket per identity: tokens count + last-refill timestamp = 16 bytes. Sliding window: list of every recent request timestamp, can grow to thousands per identity. Memory difference is 100-1000×.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Rate Limiting"
      level={5}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'how do you protect this API from abuse' standard answer"
      onQuizComplete={onQuizComplete}
    />
  );
}

