import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Zap, Clock, AlertTriangle, Layers, RefreshCw, Trash2,
} from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  SD,
  SD_SOFT,
  MONO,
  sectionTitle,
  sectionDesc,
  staggerContainer,
  cardEntrance,
} from "./_shared/styles";

const OK = "#10b981";
const WARN = "#f59e0b";
const PURPLE = "#8b5cf6";

/* ================================================================== */
/*  TAB 1 - Hit vs Miss simulator                                       */
/* ================================================================== */

type Req = { id: number; key: string; hit: boolean; ms: number };

const KEYS = ["user:42", "post:7", "feed:home", "user:42", "user:99", "post:7", "feed:home", "user:42"];

function HitMiss() {
  const [cache, setCache] = useState<Set<string>>(new Set());
  const [reqs, setReqs] = useState<Req[]>([]);
  const [running, setRunning] = useState(false);
  const idxRef = useRef(0);
  const nextIdRef = useRef(1);

  useEffect(() => {
    if (!running) return;
    const t = window.setInterval(() => {
      const key = KEYS[idxRef.current % KEYS.length];
      idxRef.current += 1;

      setCache((prevCache) => {
        const inCache = prevCache.has(key);
        const hit = inCache;
        const latencyHit = 1 + Math.floor(Math.random() * 3);
        const latencyMiss = 60 + Math.floor(Math.random() * 80);
        const ms = hit ? latencyHit : latencyMiss;
        const req: Req = { id: nextIdRef.current++, key, hit, ms };
        setReqs((prevReqs) => [req, ...prevReqs].slice(0, 10));

        if (!inCache) {
          const next = new Set(prevCache);
          next.add(key);
          return next;
        }
        return prevCache;
      });
    }, 700);
    return () => window.clearInterval(t);
  }, [running]);

  const totalCount = reqs.length;
  const hitCount = reqs.filter((r) => r.hit).length;
  const avgLatency = totalCount === 0 ? 0 : Math.round(reqs.reduce((s, r) => s + r.ms, 0) / totalCount);
  const observedHit = totalCount === 0 ? 0 : Math.round((hitCount / totalCount) * 100);

  function clearAll() {
    setCache(new Set());
    setReqs([]);
    idxRef.current = 0;
  }

  return (
    <div>
      <h3 style={sectionTitle}>Cache hit = fast. Cache miss = slow.</h3>
      <p style={sectionDesc}>
        A cache sits in front of the slow store (database, API, disk). If the data is there
        (hit), you answer in microseconds. If not (miss), you go all the way to the slow path
        and come back with the answer - and usually cache it for next time.
      </p>

      {/* Controls */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
        <button
          onClick={() => setRunning((r) => !r)}
          style={{
            padding: "8px 16px", borderRadius: 8, cursor: "pointer",
            fontFamily: "var(--eng-font)", fontSize: "0.9rem", fontWeight: 600,
            border: `1.5px solid ${running ? SD : OK}`,
            background: running ? SD_SOFT : "rgba(16,185,129,0.10)",
            color: running ? SD : OK,
          }}
        >
          {running ? "Pause traffic" : "Start traffic"}
        </button>
        <button
          onClick={clearAll}
          style={{
            padding: "8px 14px", borderRadius: 8, cursor: "pointer",
            fontFamily: "var(--eng-font)", fontSize: "0.88rem",
            border: "1.5px solid var(--eng-border)", background: "var(--eng-surface)",
            color: "var(--eng-text-muted)", display: "flex", gap: 6, alignItems: "center",
          }}
        >
          <Trash2 className="w-3.5 h-3.5" /> Clear cache
        </button>
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 18 }}>
        <div
          style={{
            padding: "10px 14px", borderRadius: 10,
            background: "var(--eng-surface)", border: "1px solid var(--eng-border)",
          }}
        >
          <div style={{ fontSize: "0.72rem", color: "var(--eng-text-muted)", marginBottom: 4 }}>HIT RATE</div>
          <div style={{ fontFamily: MONO, fontSize: "1.4rem", fontWeight: 700, color: observedHit >= 70 ? OK : observedHit >= 40 ? WARN : SD }}>
            {observedHit}%
          </div>
        </div>
        <div
          style={{
            padding: "10px 14px", borderRadius: 10,
            background: "var(--eng-surface)", border: "1px solid var(--eng-border)",
          }}
        >
          <div style={{ fontSize: "0.72rem", color: "var(--eng-text-muted)", marginBottom: 4 }}>AVG LATENCY</div>
          <div style={{ fontFamily: MONO, fontSize: "1.4rem", fontWeight: 700, color: avgLatency < 20 ? OK : avgLatency < 60 ? WARN : SD }}>
            {avgLatency}<span style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--eng-text-muted)", marginLeft: 3 }}>ms</span>
          </div>
        </div>
        <div
          style={{
            padding: "10px 14px", borderRadius: 10,
            background: "var(--eng-surface)", border: "1px solid var(--eng-border)",
          }}
        >
          <div style={{ fontSize: "0.72rem", color: "var(--eng-text-muted)", marginBottom: 4 }}>CACHE SIZE</div>
          <div style={{ fontFamily: MONO, fontSize: "1.4rem", fontWeight: 700, color: PURPLE }}>
            {cache.size}<span style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--eng-text-muted)", marginLeft: 3 }}>keys</span>
          </div>
        </div>
      </div>

      {/* Request log */}
      <div
        style={{
          padding: 14, borderRadius: 10, background: "var(--eng-surface)",
          border: "1px solid var(--eng-border)",
        }}
      >
        <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--eng-text-muted)", marginBottom: 8 }}>
          RECENT REQUESTS
        </div>
        {reqs.length === 0 && (
          <div style={{ fontSize: "0.85rem", color: "var(--eng-text-muted)", fontStyle: "italic", padding: "10px 0" }}>
            Press &ldquo;Start traffic&rdquo; to begin.
          </div>
        )}
        {reqs.map((r) => (
          <div
            key={r.id}
            style={{
              display: "flex", gap: 10, alignItems: "center", padding: "6px 0",
              borderBottom: "1px dashed var(--eng-border)", fontSize: "0.85rem",
            }}
          >
            <span
              style={{
                minWidth: 56, padding: "2px 8px", borderRadius: 6, fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700,
                color: r.hit ? OK : SD,
                background: r.hit ? "rgba(16,185,129,0.12)" : SD_SOFT,
              }}
            >
              {r.hit ? "HIT" : "MISS"}
            </span>
            <span style={{ fontFamily: MONO, color: "var(--eng-text)", flex: 1 }}>
              GET {r.key}
            </span>
            <span style={{ fontFamily: MONO, color: r.hit ? OK : SD, fontWeight: 700 }}>
              {r.ms}ms
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 16, padding: "12px 16px", borderRadius: 10,
          border: `1.5px solid ${SD}`, background: SD_SOFT,
          display: "flex", gap: 10, alignItems: "flex-start",
        }}
      >
        <AlertTriangle className="w-5 h-5 shrink-0" style={{ color: SD, marginTop: 2 }} />
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          <b>Why senior engineers obsess over hit rate:</b> a 5ms cache + 100ms DB at 90% hit
          rate averages <b>~14.5ms</b>. Drop hit rate to 50% and you&rsquo;re at <b>~52.5ms</b> -
          almost 4&times; slower. Small % changes cause huge latency shifts.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Where to put a cache                                        */
/* ================================================================== */

type Layer = {
  id: string;
  name: string;
  where: string;
  latency: string;
  example: string;
  color: string;
  tradeoff: string;
};

const LAYERS: Layer[] = [
  {
    id: "browser",
    name: "Browser cache",
    where: "On the user's device",
    latency: "~0ms",
    example: "Cache-Control headers, Service Workers",
    color: OK,
    tradeoff: "Fastest possible - but you have zero control once sent. Mistakes live in users' browsers until the TTL expires.",
  },
  {
    id: "cdn",
    name: "CDN edge cache",
    where: "At a POP close to the user",
    latency: "~10-50ms",
    example: "Cloudflare, Fastly, CloudFront",
    color: PURPLE,
    tradeoff: "Great for static assets and images. Invalidation across 200+ edge locations is the tricky part.",
  },
  {
    id: "app",
    name: "Application / in-memory cache",
    where: "Inside each app server",
    latency: "~0.1ms",
    example: "local Map, Caffeine, lru-cache",
    color: WARN,
    tradeoff: "Fastest server-side option. But each server has its own copy → stale data, wasted memory, hard to invalidate.",
  },
  {
    id: "distributed",
    name: "Distributed cache",
    where: "Separate cluster, shared by all app servers",
    latency: "~1-5ms",
    example: "Redis, Memcached",
    color: SD,
    tradeoff: "The workhorse of modern backends. One source of truth, easy to invalidate. Adds a network hop and becomes critical infra.",
  },
  {
    id: "db",
    name: "Database buffer cache",
    where: "Inside the database",
    latency: "~1-10ms",
    example: "Postgres shared_buffers, MySQL InnoDB buffer pool",
    color: "#06b6d4",
    tradeoff: "Free and automatic - the DB keeps hot pages in RAM. Opaque, with no app-level control. Helps, but rarely enough on its own. (MySQL's old query cache was removed in 8.0.)",
  },
];

function Layers4() {
  const [open, setOpen] = useState<string>("distributed");

  return (
    <div>
      <h3 style={sectionTitle}>Caching isn&rsquo;t one thing. It&rsquo;s five.</h3>
      <p style={sectionDesc}>
        A real-world request touches caches at multiple layers. Each layer has its own rules and
        failure modes. Knowing which layer to add a cache at is half the interview.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gap: 10 }}
      >
        {LAYERS.map((l) => {
          const isOpen = open === l.id;
          return (
            <motion.div
              key={l.id}
              variants={cardEntrance}
              layout
              style={{
                borderRadius: 12, overflow: "hidden",
                border: `1.5px solid ${isOpen ? l.color : "var(--eng-border)"}`,
                background: "var(--eng-surface)",
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? "" : l.id)}
                style={{
                  width: "100%", padding: "12px 14px", textAlign: "left", cursor: "pointer",
                  background: isOpen ? "var(--eng-surface-alt)" : "transparent",
                  border: "none", display: "flex", gap: 12, alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 34, height: 34, borderRadius: 8, display: "grid", placeItems: "center",
                    background: `${l.color}1A`, color: l.color, flexShrink: 0,
                    fontFamily: MONO, fontWeight: 700, fontSize: "0.9rem",
                  }}
                >
                  <Layers className="w-4 h-4" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.95rem" }}>
                    {l.name}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--eng-text-muted)", marginTop: 2 }}>
                    {l.where} &middot; <span style={{ color: l.color, fontFamily: MONO, fontWeight: 700 }}>{l.latency}</span>
                  </div>
                </div>
              </button>

              {isOpen && (
                <div style={{ padding: "12px 16px 16px", borderTop: "1px solid var(--eng-border)" }}>
                  <div style={{ fontSize: "0.85rem", color: "var(--eng-text)", marginBottom: 8 }}>
                    <b style={{ color: l.color }}>Example tech:</b>{" "}
                    <span style={{ fontFamily: MONO }}>{l.example}</span>
                  </div>
                  <div
                    style={{
                      padding: "8px 12px", borderRadius: 8,
                      background: `${l.color}14`,
                      fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.55,
                    }}
                  >
                    {l.tradeoff}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - Invalidation & eviction                                     */
/* ================================================================== */

type Strategy = {
  name: string;
  desc: string;
  when: string;
  color: string;
};

const EVICTION: Strategy[] = [
  {
    name: "LRU",
    desc: "Evict the Least Recently Used key when full.",
    when: "Default choice. Most workloads have temporal locality - recent keys are more likely to be re-read.",
    color: OK,
  },
  {
    name: "LFU",
    desc: "Evict the Least Frequently Used key.",
    when: "Good when access pattern is stable and popular keys stay popular (e.g., product catalogs).",
    color: PURPLE,
  },
  {
    name: "TTL",
    desc: "Every key has a time-to-live. When it expires, it's gone.",
    when: "For data that goes stale on a predictable schedule (feeds, prices, configs).",
    color: WARN,
  },
  {
    name: "FIFO",
    desc: "Evict whatever came in first, regardless of access.",
    when: "Rare. Simpler than LRU but ignores usage - usually the wrong answer.",
    color: SD,
  },
];

function InvalidationAndEviction() {
  return (
    <div>
      <h3 style={sectionTitle}>The hard part isn&rsquo;t caching. It&rsquo;s staying fresh.</h3>
      <p style={sectionDesc}>
        Phil Karlton said there are only two hard problems in computer science: cache
        invalidation and naming things. Caching data is a one-line call. Making sure that data
        is <em>still right</em> - that&rsquo;s the real work.
      </p>

      {/* Invalidation patterns */}
      <div
        style={{
          padding: 16, borderRadius: 12, background: "var(--eng-surface)",
          border: "1px solid var(--eng-border)", marginBottom: 18,
        }}
      >
        <div style={{ fontWeight: 700, color: "var(--eng-text)", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
          <RefreshCw className="w-4 h-4" style={{ color: SD }} /> Three common invalidation patterns
        </div>
        <div style={{ display: "grid", gap: 10 }}>
          <div
            style={{
              padding: "10px 14px", borderRadius: 8,
              background: "rgba(16,185,129,0.08)", borderLeft: `3px solid ${OK}`,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: OK, marginBottom: 3 }}>
              Write-through
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.5 }}>
              On every write: update the DB <em>and</em> the cache in the same operation. Cache
              is always fresh. Cost: writes get slower.
            </div>
          </div>
          <div
            style={{
              padding: "10px 14px", borderRadius: 8,
              background: "rgba(139,92,246,0.08)", borderLeft: `3px solid ${PURPLE}`,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: PURPLE, marginBottom: 3 }}>
              Cache-aside (read-through, lazy populate)
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.5 }}>
              This is a <em>read</em> pattern: app checks cache → miss → reads DB → populates cache.
              Usually paired with <em>write-around</em> (writes skip the cache, go straight to DB,
              and you invalidate/update the cache key). Most common combo in the wild. Risk: stale
              reads right after a write if you forget to invalidate.
            </div>
          </div>
          <div
            style={{
              padding: "10px 14px", borderRadius: 8,
              background: "rgba(245,158,11,0.08)", borderLeft: `3px solid ${WARN}`,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: WARN, marginBottom: 3 }}>
              Write-back (write-behind)
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.5 }}>
              Writes go only to cache; cache flushes to DB async. Fastest writes. Risk: if the
              cache dies before flush, you lose data. Rarely worth it.
            </div>
          </div>
        </div>
      </div>

      {/* Eviction policies */}
      <div
        style={{
          padding: 16, borderRadius: 12, background: "var(--eng-surface)",
          border: "1px solid var(--eng-border)", marginBottom: 18,
        }}
      >
        <div style={{ fontWeight: 700, color: "var(--eng-text)", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
          <Clock className="w-4 h-4" style={{ color: SD }} /> Eviction: the cache is full, who goes?
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {EVICTION.map((e) => (
            <div
              key={e.name}
              style={{
                padding: "10px 14px", borderRadius: 8,
                background: `${e.color}14`, borderLeft: `3px solid ${e.color}`,
              }}
            >
              <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: "0.95rem", color: e.color, marginBottom: 3 }}>
                {e.name}
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--eng-text)", lineHeight: 1.5, marginBottom: 4 }}>
                {e.desc}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--eng-text-muted)", fontStyle: "italic" }}>
                {e.when}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gotchas */}
      <div
        style={{
          padding: 16, borderRadius: 12,
          background: SD_SOFT, border: `1.5px solid ${SD}`,
        }}
      >
        <div style={{ fontWeight: 700, color: SD, marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
          <AlertTriangle className="w-4 h-4" /> Three caching failure modes interviewers love
        </div>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.65 }}>
          <li>
            <b>Thundering herd:</b> a hot key expires → thousands of requests all miss at once →
            they all slam the DB. Fix: request coalescing or probabilistic early refresh.
          </li>
          <li>
            <b>Cache stampede on cold start:</b> deploy clears all caches → every request is a
            miss → DB melts. Fix: warm the cache before taking traffic.
          </li>
          <li>
            <b>Stale data after writes:</b> write-around means the cache still has the old value
            until TTL. Fix: invalidate explicitly on write, or use short TTLs.
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MAIN                                                                */
/* ================================================================== */

export default function SD_L2_CachingActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "hitmiss", label: "Hits vs Misses",    icon: <Zap className="w-4 h-4" />,     content: <HitMiss /> },
    { id: "layers",  label: "Where to Cache",    icon: <Layers className="w-4 h-4" />,  content: <Layers4 /> },
    { id: "invalid", label: "Invalidation & Eviction", icon: <RefreshCw className="w-4 h-4" />, content: <InvalidationAndEviction /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "A cache sits in front of the database. What's the main reason?",
      options: [
        "To reduce the amount of code in the app server.",
        "To serve hot data faster and reduce load on the slower store.",
        "To replace the database entirely.",
        "To make the system stateless.",
      ],
      correctIndex: 1,
      explanation: "A cache is a faster copy of the 'hot' subset of data. It protects the slower store (DB/API) and cuts tail latency dramatically.",
    },
    {
      question: "Your cache hits at 95%, misses at 5%. Cache is 2ms, DB is 100ms. Rough average latency?",
      options: [
        "~2ms",
        "~7ms",
        "~50ms",
        "~100ms",
      ],
      correctIndex: 1,
      explanation: "0.95 × 2ms + 0.05 × 100ms = 1.9 + 5 = 6.9ms. ~7ms. Small miss rates still dominate latency because misses are so much more expensive.",
    },
    {
      question: "You want to cache the home feed for logged-in users, invalidated when they post. Which strategy fits best?",
      options: [
        "Write-back - fastest writes.",
        "Cache-aside with explicit invalidation on post.",
        "Browser cache with long TTL.",
        "Database query cache only.",
      ],
      correctIndex: 1,
      explanation: "Cache-aside (read-through + lazy populate) is the standard. Pair it with explicit invalidation on write to keep the feed fresh.",
    },
    {
      question: "Your most popular cached key expires. Within 1ms, 10,000 requests all miss and hit the DB, which falls over. This is:",
      options: [
        "Cache-aside failure",
        "A thundering herd / cache stampede",
        "LRU eviction",
        "Cache poisoning",
      ],
      correctIndex: 1,
      explanation: "Thundering herd: many concurrent misses for the same key hammer the backing store. Fix with request coalescing, mutex on miss, or probabilistic early refresh.",
    },
    {
      question: "Which eviction policy is the sensible default for a general-purpose cache?",
      options: [
        "FIFO - simplest to implement",
        "LRU - recently used is a good predictor of future use",
        "Random - fast and fair",
        "No eviction - let it grow forever",
      ],
      correctIndex: 1,
      explanation: "Most workloads have temporal locality: if you accessed a key recently, you're likely to access it again soon. LRU exploits that. LFU wins for very stable access patterns.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Caching 101"
      level={2}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Appears in every interview that asks 'how do you make this faster?'"
      onQuizComplete={onQuizComplete}
    />
  );
}
