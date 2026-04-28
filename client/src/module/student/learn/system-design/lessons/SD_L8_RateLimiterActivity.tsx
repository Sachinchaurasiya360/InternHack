import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Pause, Play, RotateCcw, Server as ServerIcon, Zap } from "lucide-react";
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
/*  TAB 1 - Framework                                                  */
/* ================================================================== */

const STEPS = [
  {
    k: "1. Requirements",
    color: SD,
    items: [
      "Functional: limit each user / API key to N requests per window. Common quotas: 100/min, 10k/hour, 1M/day.",
      "Non-functional: limiter check < 5ms, fair across multiple servers, accurate to within ~1%.",
      "Out of scope (the easy version): per-endpoint quotas, dynamic tier upgrades, cost-per-request weighting.",
    ],
  },
  {
    k: "2. Estimation",
    color: WARN,
    items: [
      "100M users × 10 reqs/sec/user peak → 1B checks/sec (most apps far less; this is the upper bound).",
      "Limiter state: per-user (key, count, reset_time) ≈ 64 bytes. 100M users → 6 GB total — fits in Redis.",
      "Latency budget: limiter check + downstream call must fit in API response SLA. 5ms for the limiter is the target.",
    ],
  },
  {
    k: "3. API + Data Model",
    color: PURPLE,
    items: [
      "Per-user: key = `rl:user:{user_id}`. Value = (count, window_start) or token_bucket(tokens, last_refill).",
      "Lua script for atomic check-and-decrement on Redis.",
      "Sliding window log: sorted set of timestamps, ZRANGEBYSCORE for accurate counts.",
    ],
  },
  {
    k: "4. High-level Diagram",
    color: SD,
    items: [
      "Tier 1 (edge): coarse IP-based limiting at the CDN.",
      "Tier 2 (gateway): per-API-key check via Redis Lua. Sub-5ms.",
      "Tier 3 (service): fine-grained per-endpoint via in-memory token buckets, sync'd via Redis for cluster-wide accuracy.",
    ],
  },
];

function FrameworkApplied() {
  return (
    <div>
      <h3 style={sectionTitle}>The 4-step framework, applied to a distributed rate limiter</h3>
      <p style={sectionDesc}>
        L5.6 introduced the algorithms (token bucket, leaky bucket, sliding window). This lesson
        is about <i>productionizing</i> them across a fleet — atomic Redis operations, sharding,
        multi-tier defense.
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
/*  TAB 2 - Per-instance vs distributed comparison                     */
/* ================================================================== */

type Mode = "per-instance" | "redis-shared";
const LIMIT = 10;
const WINDOW_MS = 1000;

interface Server { id: number; counter: number; resetAt: number; }

function DistributedDemo() {
  const [mode, setMode] = useState<Mode>("per-instance");
  const [servers, setServers] = useState<Server[]>([{ id: 1, counter: 0, resetAt: Date.now() + WINDOW_MS }, { id: 2, counter: 0, resetAt: Date.now() + WINDOW_MS }, { id: 3, counter: 0, resetAt: Date.now() + WINDOW_MS }]);
  const [redisCounter, setRedisCounter] = useState(0);
  const [redisResetAt, setRedisResetAt] = useState(Date.now() + WINDOW_MS);
  const [running, setRunning] = useState(false);
  const [stats, setStats] = useState({ totalRequests: 0, allowed: 0, blocked: 0 });

  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      // simulate 30 incoming requests per second across 3 servers
      const reqsThisTick = 6;
      let allowed = 0;
      let blocked = 0;

      if (mode === "per-instance") {
        setServers((sv) => {
          const now = Date.now();
          return sv.map((s, idx) => {
            if (idx >= reqsThisTick / 2) return s;
            // reset if window expired
            let counter = s.counter;
            let resetAt = s.resetAt;
            if (now > resetAt) {
              counter = 0;
              resetAt = now + WINDOW_MS;
            }
            // 2 requests on this server this tick
            for (let i = 0; i < 2; i++) {
              if (counter < LIMIT) {
                counter++;
                allowed++;
              } else {
                blocked++;
              }
            }
            return { ...s, counter, resetAt };
          });
        });
      } else {
        setRedisCounter((c) => {
          let counter = c;
          let now = Date.now();
          if (now > redisResetAt) {
            counter = 0;
            setRedisResetAt(now + WINDOW_MS);
          }
          for (let i = 0; i < reqsThisTick; i++) {
            if (counter < LIMIT) {
              counter++;
              allowed++;
            } else {
              blocked++;
            }
          }
          return counter;
        });
      }

      setStats((s) => ({ totalRequests: s.totalRequests + reqsThisTick, allowed: s.allowed + allowed, blocked: s.blocked + blocked }));
    }, 200);
    return () => clearInterval(handle);
  }, [running, mode, redisResetAt]);

  const reset = () => {
    setServers([{ id: 1, counter: 0, resetAt: Date.now() + WINDOW_MS }, { id: 2, counter: 0, resetAt: Date.now() + WINDOW_MS }, { id: 3, counter: 0, resetAt: Date.now() + WINDOW_MS }]);
    setRedisCounter(0);
    setRedisResetAt(Date.now() + WINDOW_MS);
    setStats({ totalRequests: 0, allowed: 0, blocked: 0 });
    setRunning(false);
  };

  const effectiveLimit = mode === "per-instance" ? LIMIT * servers.length : LIMIT;
  const isLeaky = mode === "per-instance";

  return (
    <div>
      <h3 style={sectionTitle}>Three servers. One user. One quota of {LIMIT}/sec.</h3>
      <p style={sectionDesc}>
        Toggle between per-instance counters (each server tracks independently) vs Redis-shared
        counters (atomic Lua check). With per-instance, the user effectively gets 3× the limit.
        With Redis, the limit is honored cluster-wide.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>strategy:</span>
        {(["per-instance", "redis-shared"] as Mode[]).map((m) => {
          const active = mode === m;
          const c = m === "per-instance" ? WARN : SD;
          return (
            <button
              key={m}
              type="button"
              onClick={() => { setMode(m); reset(); }}
              disabled={running}
              style={{
                padding: "8px 14px",
                borderRadius: 6,
                cursor: running ? "not-allowed" : "pointer",
                border: `1.5px solid ${active ? c : "var(--eng-border)"}`,
                background: active ? `${c}18` : "transparent",
                color: active ? c : "var(--eng-text-muted)",
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                opacity: running ? 0.5 : 1,
              }}
            >
              {m === "per-instance" ? "Per-instance (broken)" : "Redis-shared (correct)"}
            </button>
          );
        })}
      </div>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        {/* Servers */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {servers.map((s) => {
            const pct = Math.min(100, (s.counter / LIMIT) * 100);
            return (
              <div key={s.id} style={{ padding: "12px 14px", borderRadius: 8, border: `1.5px solid ${(mode === "per-instance" ? WARN : SD)}33`, background: `${(mode === "per-instance" ? WARN : SD)}10` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <ServerIcon className="w-3.5 h-3.5" style={{ color: SD }} />
                  <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 700, color: "#e5e7eb" }}>SERVER {s.id}</span>
                </div>
                {mode === "per-instance" ? (
                  <>
                    <div style={{ height: 6, background: "rgba(148,163,184,0.15)", borderRadius: 3, overflow: "hidden", marginBottom: 4 }}>
                      <motion.div animate={{ width: `${pct}%` }} transition={{ duration: 0.1, ease: "linear" }} style={{ height: "100%", background: pct >= 100 ? WARN : SD }} />
                    </div>
                    <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
                      counter: <span style={{ color: pct >= 100 ? WARN : SD, fontWeight: 700 }}>{s.counter}</span> / {LIMIT}
                    </div>
                  </>
                ) : (
                  <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
                    delegates to Redis
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Redis (if shared) */}
        {mode === "redis-shared" && (
          <div style={{ padding: "12px 14px", borderRadius: 8, border: `1.5px solid ${SD}55`, background: `${SD}14`, marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <Zap className="w-3.5 h-3.5" style={{ color: SD }} />
              <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 700, color: SD }}>REDIS · atomic Lua check</span>
            </div>
            <div style={{ height: 8, background: "rgba(148,163,184,0.15)", borderRadius: 3, overflow: "hidden", marginBottom: 4 }}>
              <motion.div animate={{ width: `${Math.min(100, (redisCounter / LIMIT) * 100)}%` }} transition={{ duration: 0.1, ease: "linear" }} style={{ height: "100%", background: redisCounter >= LIMIT ? WARN : SD }} />
            </div>
            <div style={{ fontFamily: MONO, fontSize: "0.74rem", color: "#e5e7eb" }}>
              shared counter: <span style={{ color: redisCounter >= LIMIT ? WARN : SD, fontWeight: 700 }}>{redisCounter}</span> / {LIMIT} per second
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <Stat label="effective limit/s" value={String(effectiveLimit)} color={isLeaky ? WARN : SD} />
          <Stat label="requests sent" value={String(stats.totalRequests)} color={SD} />
          <Stat label="allowed" value={String(stats.allowed)} color={SD} />
          <Stat label="blocked" value={String(stats.blocked)} color={WARN} />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setRunning((r) => !r)} style={btn(SD)}>
            {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {running ? "pause" : "send 30 req/s"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 14, padding: "12px 14px", background: `${(mode === "per-instance" ? WARN : SD)}14`, border: `1.5px solid ${(mode === "per-instance" ? WARN : SD)}55`, borderRadius: 8, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: mode === "per-instance" ? WARN : SD, letterSpacing: "0.12em", marginRight: 8 }}>
              {mode === "per-instance" ? "BROKEN" : "CORRECT"}
            </span>
            {mode === "per-instance"
              ? "Each server only sees its own slice. The user is supposed to get 10 req/s — they're actually getting up to 30 (3× the configured limit). This is the silent bug behind every horizontally-scaled service that uses local counters."
              : "All servers consult Redis with an atomic Lua script. The check + decrement happens as one operation, so the cluster-wide counter is exact. Configured 10 req/s means actual 10 req/s."}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${color}55`, background: `${color}10`, textAlign: "center" }}>
      <div style={{ fontFamily: MONO, fontSize: "0.62rem", color, letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>
        {label}
      </div>
      <div style={{ fontFamily: MONO, fontSize: "0.95rem", fontWeight: 800, color: "var(--eng-text)" }}>
        {value}
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
/*  TAB 3 - The Lua script + multi-tier defense                        */
/* ================================================================== */

function MultiTier() {
  return (
    <div>
      <h3 style={sectionTitle}>The atomic Lua script</h3>
      <p style={sectionDesc}>
        The standard distributed-rate-limiter pattern. Lua runs atomically inside Redis — no
        race between the read, the decision, and the increment.
      </p>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22, marginBottom: 18 }}>
        <pre style={{ margin: 0, fontFamily: MONO, fontSize: "0.78rem", color: "#e5e7eb", lineHeight: 1.7, overflowX: "auto" }}>
          <span style={{ color: NEUTRAL }}>{`-- KEYS[1] = "rl:user:42", ARGV[1] = limit, ARGV[2] = window_seconds`}</span>
          {"\n"}
          <span style={{ color: SD }}>local</span> count = tonumber(redis.call(<span style={{ color: WARN }}>"GET"</span>, KEYS[<span style={{ color: WARN }}>1</span>])) <span style={{ color: SD }}>or</span> <span style={{ color: WARN }}>0</span>
          {"\n"}
          <span style={{ color: SD }}>if</span> count &gt;= tonumber(ARGV[<span style={{ color: WARN }}>1</span>]) <span style={{ color: SD }}>then</span>
          {"\n  "}<span style={{ color: SD }}>return</span> <span style={{ color: WARN }}>0</span>  <span style={{ color: NEUTRAL }}>{`-- denied`}</span>
          {"\n"}<span style={{ color: SD }}>end</span>
          {"\n"}redis.call(<span style={{ color: WARN }}>"INCR"</span>, KEYS[<span style={{ color: WARN }}>1</span>])
          {"\n"}<span style={{ color: SD }}>if</span> count == <span style={{ color: WARN }}>0</span> <span style={{ color: SD }}>then</span>
          {"\n  "}redis.call(<span style={{ color: WARN }}>"EXPIRE"</span>, KEYS[<span style={{ color: WARN }}>1</span>], ARGV[<span style={{ color: WARN }}>2</span>])
          {"\n"}<span style={{ color: SD }}>end</span>
          {"\n"}<span style={{ color: SD }}>return</span> <span style={{ color: WARN }}>1</span>  <span style={{ color: NEUTRAL }}>{`-- allowed`}</span>
        </pre>
      </div>

      <h3 style={sectionTitle}>Multi-tier defense</h3>
      <p style={sectionDesc}>
        Real systems put limiters at multiple layers — defense in depth. Each catches different
        attacks, with different identity and different cost.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-1 gap-3"
      >
        {[
          { tier: "Tier 1 · Edge / CDN", what: "Coarse IP-based limit (1k req/min/IP). Drops obvious bots before they hit your origin.", color: SD, ex: "Cloudflare rate-limit rules." },
          { tier: "Tier 2 · API Gateway", what: "Per-API-key limit (10k req/hour/key for the basic plan, 100k for premium). The SLA enforcement layer.", color: SD, ex: "AWS API Gateway throttling, Kong, Tyk." },
          { tier: "Tier 3 · Per-service", what: "Per-user, per-endpoint fine-grained checks. Backed by the Redis Lua pattern. Catches anything tier 1 + 2 missed.", color: SD, ex: "Express middleware + ioredis." },
          { tier: "Tier 4 · Per-resource", what: "Per-row / per-document locks on hot resources (e.g. 'no more than 5 writes/sec to this single SKU').", color: SD, ex: "DB-level advisory locks, in-memory token buckets per resource." },
        ].map((t, i) => (
          <motion.div
            key={t.tier}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10, display: "grid", gridTemplateColumns: "44px 1fr", gap: 14, alignItems: "flex-start" }}
          >
            <div style={{ width: 36, height: 36, borderRadius: 8, background: `${t.color}18`, border: `1.5px solid ${t.color}55`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontSize: "1rem", fontWeight: 800, color: t.color }}>
              {i + 1}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.92rem", marginBottom: 4 }}>{t.tier}</div>
              <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55, marginBottom: 6 }}>{t.what}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.74rem", color: t.color }}>
                <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
                <span style={{ color: "var(--eng-text)" }}>{t.ex}</span>
              </div>
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

export default function SD_L8_RateLimiterActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "framework", label: "Framework", icon: <BookOpen className="w-4 h-4" />, content: <FrameworkApplied /> },
    { id: "demo", label: "Per-instance vs Redis", icon: <Zap className="w-4 h-4" />, content: <DistributedDemo /> },
    { id: "tiers", label: "Code + Tiers", icon: <Globe className="w-4 h-4" />, content: <MultiTier /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "A rate limiter implemented as in-process counters on each of 4 horizontally-scaled servers. Configured 100 req/s. Actual user-perceived limit?",
      options: [
        "100/sec.",
        "Up to 400/sec — each server only sees its own slice; combined they let through 4× the configured limit.",
        "0/sec.",
        "10/sec.",
      ],
      correctIndex: 1,
      explanation: "Per-instance limiters become per-instance silos. The fix is shared state — Redis with an atomic Lua script — so the count is global, not per-server.",
    },
    {
      question: "Why does the Redis rate-limiter implementation use a Lua script instead of two separate calls (GET then INCR)?",
      options: [
        "Lua is faster.",
        "Lua runs atomically inside Redis. Without it, two clients could both GET the count, both see < limit, and both INCR — letting through 2× the limit.",
        "Required by Redis.",
        "It's encrypted.",
      ],
      correctIndex: 1,
      explanation: "Two-step (GET then INCR) is racy — concurrent calls can both read 'below limit' then both increment past it. Lua bundles both into one atomic operation.",
    },
    {
      question: "Why is multi-tier rate limiting (edge + gateway + service) better than a single tight limiter?",
      options: [
        "Decoration.",
        "Each tier filters out a class of abuse cheaply. Edge drops bots before they cost your origin. Gateway enforces SLA. Service catches what got through. Defense in depth.",
        "It's faster.",
        "Cheaper licensing.",
      ],
      correctIndex: 1,
      explanation: "Edge handles huge-volume cheap drops. Gateway handles per-key SLA. Service catches subtle abuse. A single layer would either be too coarse (lots gets through) or too expensive (every tiny request pays the most-expensive check).",
    },
    {
      question: "Redis goes down. The rate-limiter's tier-3 service-level check now fails. Best fallback?",
      options: [
        "Reject all requests.",
        "Allow all requests (fail-open) for that tier — your edge / gateway tiers still enforce coarser limits, so traffic isn't completely unprotected.",
        "Crash the service.",
        "Retry forever.",
      ],
      correctIndex: 1,
      explanation: "Fail-open is usually the right choice — locking out all traffic on a Redis blip would cause a self-inflicted outage. The other tiers (which have their own state) keep some protection in place.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Design a Distributed Rate Limiter"
      level={8}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'design a rate limiter at scale' interview question, productionized"
      onQuizComplete={onQuizComplete}
    />
  );
}
