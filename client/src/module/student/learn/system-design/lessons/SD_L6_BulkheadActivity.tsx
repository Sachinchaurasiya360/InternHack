import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, LayoutGrid, Pause, Play, RotateCcw, Skull } from "lucide-react";
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
      <h3 style={sectionTitle}>Compartments in a ship&rsquo;s hull</h3>
      <p style={sectionDesc}>
        A bulkhead is a physical wall in a ship that stops one flooded compartment from sinking the
        whole vessel. In software, a <b>bulkhead</b> partitions resources (thread pools, connection
        pools, memory) so a slow or failing dependency can&rsquo;t exhaust them all and take the entire
        service down.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {[
          {
            name: "Shared pool (no bulkhead)",
            color: WARN,
            tagline: "One pool, all callers",
            problem: "When one downstream stalls, every thread blocks waiting for it. Healthy traffic to other downstreams now also fails because there are no threads left.",
          },
          {
            name: "Per-downstream bulkheads",
            color: SD,
            tagline: "One pool per downstream",
            problem: "A stalled downstream only fills its own pool. Other downstreams keep their threads. Failure is contained to that one lane.",
          },
        ].map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: "16px 18px", border: `1.5px solid ${p.color}55`, borderRadius: 10, background: `${p.color}08`, display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "1rem", marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: p.color, fontWeight: 700 }}>
                {p.tagline}
              </div>
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--eng-text-muted)", lineHeight: 1.6 }}>{p.problem}</div>
          </motion.div>
        ))}
      </div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Hystrix</b> made bulkheads pop by giving each downstream its own thread pool with
          configurable size and queue. <b>Resilience4j</b> ships them in semaphore and thread-pool
          flavors. <b>Envoy</b> exposes per-cluster connection pools at the proxy. The pattern
          generalizes: separate Postgres connection pools per workload, separate Redis databases
          per use case, separate K8s node pools per service tier.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Animated thread pools                                      */
/* ================================================================== */

type Mode = "shared" | "bulkheaded";

interface Slot {
  busy: boolean;
  downstream: "billing" | "search" | "recs" | null;
  /** when busy, ms remaining before slot frees */
  remainingMs: number;
}

const POOL_SIZE = 12;
const TICK_MS = 100;

function BulkheadDemo() {
  const [mode, setMode] = useState<Mode>("shared");
  const [billingSlow, setBillingSlow] = useState(false);
  const [running, setRunning] = useState(true);
  const [shared, setShared] = useState<Slot[]>(() => Array.from({ length: POOL_SIZE }, () => ({ busy: false, downstream: null, remainingMs: 0 })));
  const [billingPool, setBillingPool] = useState<Slot[]>(() => Array.from({ length: 4 }, () => ({ busy: false, downstream: null, remainingMs: 0 })));
  const [searchPool, setSearchPool] = useState<Slot[]>(() => Array.from({ length: 4 }, () => ({ busy: false, downstream: null, remainingMs: 0 })));
  const [recsPool, setRecsPool] = useState<Slot[]>(() => Array.from({ length: 4 }, () => ({ busy: false, downstream: null, remainingMs: 0 })));
  const [stats, setStats] = useState({
    billing: { ok: 0, rejected: 0 },
    search: { ok: 0, rejected: 0 },
    recs: { ok: 0, rejected: 0 },
  });

  const reset = () => {
    setShared(Array.from({ length: POOL_SIZE }, () => ({ busy: false, downstream: null, remainingMs: 0 })));
    setBillingPool(Array.from({ length: 4 }, () => ({ busy: false, downstream: null, remainingMs: 0 })));
    setSearchPool(Array.from({ length: 4 }, () => ({ busy: false, downstream: null, remainingMs: 0 })));
    setRecsPool(Array.from({ length: 4 }, () => ({ busy: false, downstream: null, remainingMs: 0 })));
    setStats({ billing: { ok: 0, rejected: 0 }, search: { ok: 0, rejected: 0 }, recs: { ok: 0, rejected: 0 } });
  };

  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      // Decrement timers on all slots and free completed ones
      const tickPool = (pool: Slot[]): Slot[] =>
        pool.map((s) => {
          if (!s.busy) return s;
          const rem = s.remainingMs - TICK_MS;
          if (rem <= 0) return { busy: false, downstream: null, remainingMs: 0 };
          return { ...s, remainingMs: rem };
        });

      // Pick a downstream to call this tick (round-robin across the three)
      const downstreams: Slot["downstream"][] = ["billing", "search", "recs"];
      const pick = downstreams[Math.floor(Math.random() * 3)] as Exclude<Slot["downstream"], null>;
      // Duration depends on slowness
      const baseDur = pick === "billing" && billingSlow ? 4000 : 600;

      if (mode === "shared") {
        setShared((p) => {
          const ticked = tickPool(p);
          const idx = ticked.findIndex((s) => !s.busy);
          if (idx === -1) {
            setStats((st) => ({ ...st, [pick]: { ...st[pick], rejected: st[pick].rejected + 1 } }));
            return ticked;
          }
          ticked[idx] = { busy: true, downstream: pick, remainingMs: baseDur };
          setStats((st) => ({ ...st, [pick]: { ...st[pick], ok: st[pick].ok + 1 } }));
          return ticked;
        });
      } else {
        const setter = pick === "billing" ? setBillingPool : pick === "search" ? setSearchPool : setRecsPool;
        setter((p) => {
          const ticked = tickPool(p);
          const idx = ticked.findIndex((s) => !s.busy);
          if (idx === -1) {
            setStats((st) => ({ ...st, [pick]: { ...st[pick], rejected: st[pick].rejected + 1 } }));
            return ticked;
          }
          ticked[idx] = { busy: true, downstream: pick, remainingMs: baseDur };
          setStats((st) => ({ ...st, [pick]: { ...st[pick], ok: st[pick].ok + 1 } }));
          return ticked;
        });
        // tick the other two pools too
        if (pick !== "billing") setBillingPool((p) => tickPool(p));
        if (pick !== "search") setSearchPool((p) => tickPool(p));
        if (pick !== "recs") setRecsPool((p) => tickPool(p));
      }
    }, TICK_MS);
    return () => clearInterval(handle);
  }, [running, mode, billingSlow]);

  return (
    <div>
      <h3 style={sectionTitle}>Slow down billing. Watch search and recs.</h3>
      <p style={sectionDesc}>
        Three downstreams (billing, search, recs) sharing or partitioning thread pools. Toggle
        billing-slow to inject 4-second latency. In shared mode, billing&rsquo;s threads fill the entire
        pool — search and recs start getting rejected. In bulkheaded mode, billing only fills its
        own lane.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>mode:</span>
        {(["shared", "bulkheaded"] as Mode[]).map((m) => {
          const active = mode === m;
          const c = m === "shared" ? WARN : SD;
          return (
            <button
              key={m}
              type="button"
              onClick={() => { setMode(m); reset(); }}
              style={{
                padding: "8px 14px",
                borderRadius: 6,
                cursor: "pointer",
                border: `1.5px solid ${active ? c : "var(--eng-border)"}`,
                background: active ? `${c}18` : "transparent",
                color: active ? c : "var(--eng-text-muted)",
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              {m}
            </button>
          );
        })}
        <div style={{ flex: 1 }} />
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setBillingSlow((b) => !b)}
          style={btn(billingSlow ? WARN : NEUTRAL)}
        >
          <Skull className="w-3.5 h-3.5" />
          billing {billingSlow ? "SLOW" : "fast"}
        </motion.button>
      </div>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        {mode === "shared" ? (
          <Pool name="Shared pool · 12 threads · all downstreams" pool={shared} totalSize={POOL_SIZE} mode="shared" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Pool name="Billing · 4 threads" pool={billingPool} totalSize={4} downstream="billing" mode="bulkheaded" />
            <Pool name="Search · 4 threads" pool={searchPool} totalSize={4} downstream="search" mode="bulkheaded" />
            <Pool name="Recs · 4 threads" pool={recsPool} totalSize={4} downstream="recs" mode="bulkheaded" />
          </div>
        )}

        <div className="grid grid-cols-3 gap-2 mt-4">
          {(["billing", "search", "recs"] as const).map((d) => {
            const isHurt = stats[d].rejected > stats[d].ok / 4;
            const c = d === "billing" ? PURPLE : d === "search" ? SD : NEUTRAL;
            return (
              <div key={d} style={{ padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${c}33`, background: `${c}10` }}>
                <div style={{ fontFamily: MONO, fontSize: "0.66rem", color: c, letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase", fontWeight: 800 }}>
                  {d}
                </div>
                <div style={{ display: "flex", gap: 12, fontFamily: MONO, fontSize: "0.74rem" }}>
                  <span style={{ color: SD }}>✓ {stats[d].ok}</span>
                  <span style={{ color: isHurt ? WARN : NEUTRAL }}>✕ {stats[d].rejected}</span>
                </div>
              </div>
            );
          })}
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

        <AnimatePresence mode="wait">
          <motion.div
            key={`${mode}-${billingSlow}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
              WHAT TO WATCH
            </span>
            {mode === "shared" && billingSlow && "Shared pool + slow billing = the slow billing requests fill ALL 12 threads. Search and recs start getting rejected even though they're fast."}
            {mode === "shared" && !billingSlow && "Shared pool, all healthy. The pool drains fast and rejection rates are low. Looks fine — until something slows down."}
            {mode === "bulkheaded" && billingSlow && "Bulkheaded + slow billing = only the billing lane (4 threads) gets clogged. Search and recs run unimpeded."}
            {mode === "bulkheaded" && !billingSlow && "Bulkheaded and healthy. Each downstream has its own lane. Total capacity is the same; isolation is the win."}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Pool({ name, pool, totalSize, downstream, mode }: { name: string; pool: Slot[]; totalSize: number; downstream?: Slot["downstream"]; mode: Mode }) {
  const busy = pool.filter((s) => s.busy).length;
  const headerColor = downstream === "billing" ? PURPLE : downstream === "search" ? SD : downstream === "recs" ? NEUTRAL : SD;

  return (
    <div style={{ padding: "12px 14px", borderRadius: 8, border: `1.5px solid ${headerColor}33`, background: `${headerColor}08` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontFamily: MONO, fontSize: "0.74rem", fontWeight: 700, color: headerColor }}>{name}</span>
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
          {busy} / {totalSize} busy
        </span>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${Math.min(totalSize, 6)}, 1fr)`,
        gap: 4,
      }}>
        {pool.map((s, i) => {
          let c = NEUTRAL;
          if (s.busy && mode === "shared") {
            c = s.downstream === "billing" ? PURPLE : s.downstream === "search" ? SD : NEUTRAL;
          } else if (s.busy) {
            c = headerColor;
          }
          return (
            <motion.div
              key={i}
              animate={{
                backgroundColor: s.busy ? `${c}33` : "rgba(148,163,184,0.08)",
                borderColor: s.busy ? c : "rgba(148,163,184,0.2)",
              }}
              transition={{ duration: 0.18 }}
              style={{
                height: 32,
                borderRadius: 4,
                border: "1px solid",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: MONO,
                fontSize: "0.6rem",
                fontWeight: 700,
                color: s.busy ? c : NEUTRAL,
              }}
            >
              {s.busy ? (s.downstream ?? "·").slice(0, 3) : "·"}
            </motion.div>
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
/*  TAB 3 - Where else bulkheads apply                                 */
/* ================================================================== */

const PLACES = [
  { k: "Thread / connection pools", v: "Per-downstream pools so a slow API doesn't choke the whole service.", ex: "Hystrix, Resilience4j thread-pool bulkheads." },
  { k: "DB connection pools", v: "Separate pools per workload class (transactional reads, analytics, batch).", ex: "PgBouncer pool per service, separate read replicas." },
  { k: "Kubernetes resources", v: "Namespaces and ResourceQuotas isolate teams. Node pools isolate workloads.", ex: "Critical control-plane pods on dedicated nodes." },
  { k: "Process / runtime", v: "Run risky workloads in separate processes or containers so a crash doesn't take down the host.", ex: "Browser tab sandboxing, Lambda functions per concern." },
  { k: "Network / queues", v: "Separate queues per priority so a flood of low-priority work doesn't block urgent traffic.", ex: "Kafka topics per priority class." },
  { k: "Tenants / customers", v: "Multi-tenant systems isolate one customer's load from another's.", ex: "Per-tenant rate limits, per-tenant DBs in extreme cases." },
];

function WhereBulkheads() {
  return (
    <div>
      <h3 style={sectionTitle}>Bulkheads aren&rsquo;t just thread pools</h3>
      <p style={sectionDesc}>
        The pattern generalizes anywhere a single shared resource could be exhausted by one
        misbehaving caller. Six places to apply it.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {PLACES.map((p) => (
          <motion.div
            key={p.k}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem", marginBottom: 6 }}>{p.k}</div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55, marginBottom: 8 }}>{p.v}</div>
            <div style={{ fontFamily: MONO, fontSize: "0.74rem", color: SD }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{p.ex}</span>
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

export default function SD_L6_BulkheadActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Slow Down Billing", icon: <LayoutGrid className="w-4 h-4" />, content: <BulkheadDemo /> },
    { id: "places", label: "Beyond Threads", icon: <Globe className="w-4 h-4" />, content: <WhereBulkheads /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Service A calls billing, search, and recs from a single shared 50-thread pool. Billing slows from 100ms to 5s. What happens to search throughput?",
      options: [
        "Unaffected.",
        "Drops to near zero — slow billing requests fill the pool and search has no threads.",
        "Doubles.",
        "Cached automatically.",
      ],
      correctIndex: 1,
      explanation: "Pool exhaustion. Slow billing requests hold threads for 5s each. The pool fills. Search and recs requests can't get a thread and time out, even though their downstreams are healthy.",
    },
    {
      question: "What's the trade-off of using bulkheads?",
      options: [
        "More memory and possibly underutilized capacity per pool — you can't pool resources globally.",
        "Slower latency.",
        "Less reliability.",
        "More bugs.",
      ],
      correctIndex: 0,
      explanation: "Per-downstream pools means each pool sized for its own peak. Idle pools aren't lent to busy ones. The win — failure containment — is usually worth it for production-critical paths.",
    },
    {
      question: "Hystrix popularized 'thread-pool bulkheads' but newer libraries also offer 'semaphore bulkheads'. What's the key difference?",
      options: [
        "Semaphores are slower.",
        "Thread-pool bulkheads run calls on dedicated threads (so timeouts can interrupt). Semaphore bulkheads just count concurrent calls without changing threads — much cheaper, but no isolation from caller's stack.",
        "Semaphores need more memory.",
        "No difference.",
      ],
      correctIndex: 1,
      explanation: "Thread-pool isolation is heavier (thread switches, separate stacks) but lets you cancel via interrupt. Semaphore isolation is just a counter — fast, but the call still runs on the caller's thread.",
    },
    {
      question: "You run 50 microservices in one Kubernetes namespace, no resource quotas. One memory leak appears. What's the bulkhead failure?",
      options: [
        "Nothing.",
        "The leaky service exhausts node memory; co-located services get OOM-killed even though they're healthy.",
        "Latency increases globally.",
        "Logs fail.",
      ],
      correctIndex: 1,
      explanation: "No resource isolation = neighbors share fate. Production layouts use ResourceLimits per pod, sometimes dedicated node pools for critical services, so one bad neighbor can't break the rest.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Bulkheads & Isolation"
      level={6}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'how do you stop a downstream from killing your service' answer"
      onQuizComplete={onQuizComplete}
    />
  );
}
