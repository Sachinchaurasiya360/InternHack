import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, RotateCcw, Skull, Zap } from "lucide-react";
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
      <h3 style={sectionTitle}>Break it on purpose. Find out before users do.</h3>
      <p style={sectionDesc}>
        <b>Chaos engineering</b> is the practice of deliberately injecting failures into a running
        system to test that the resilience patterns (circuit breakers, retries, bulkheads,
        graceful shutdown) actually work. Pioneered by Netflix with <b>Chaos Monkey</b>, which
        randomly terminates production instances during business hours.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {[
          { k: "Hypothesize", v: "Predict the steady state. 'Killing one cart-service pod won't drop requests above 0.1%.'" },
          { k: "Inject", v: "Run the experiment in production (or staging that mirrors it). Kill a pod, sever a network, slow a disk." },
          { k: "Verify", v: "Compare actual to hypothesis. If reality is worse, you've found a missing resilience pattern." },
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
          <b>Netflix Chaos Monkey</b> kills random EC2 instances during business hours. <b>Chaos
          Mesh</b> and <b>Litmus</b> bring the same to Kubernetes. <b>Gremlin</b> is the
          commercial offering. <b>AWS Fault Injection Simulator</b> ships managed chaos for
          AWS. The whole point: don&rsquo;t wait for a 3 AM page to find out your fallbacks don&rsquo;t
          work — find out at 2 PM with the team in the room.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Click-to-break playground                                  */
/* ================================================================== */

type NodeId = "lb" | "api1" | "api2" | "api3" | "cache" | "db" | "auth";

interface Node {
  id: NodeId;
  label: string;
  x: number;
  y: number;
  kind: "lb" | "api" | "cache" | "db" | "auth";
}

const NODES: Node[] = [
  { id: "lb", label: "Load Balancer", x: 60, y: 160, kind: "lb" },
  { id: "api1", label: "API · 1", x: 240, y: 60, kind: "api" },
  { id: "api2", label: "API · 2", x: 240, y: 160, kind: "api" },
  { id: "api3", label: "API · 3", x: 240, y: 260, kind: "api" },
  { id: "auth", label: "Auth", x: 440, y: 60, kind: "auth" },
  { id: "cache", label: "Cache", x: 440, y: 160, kind: "cache" },
  { id: "db", label: "Database", x: 440, y: 260, kind: "db" },
];

const EDGES: [NodeId, NodeId][] = [
  ["lb", "api1"], ["lb", "api2"], ["lb", "api3"],
  ["api1", "auth"], ["api2", "auth"], ["api3", "auth"],
  ["api1", "cache"], ["api2", "cache"], ["api3", "cache"],
  ["api1", "db"], ["api2", "db"], ["api3", "db"],
];

interface Failure {
  type: "node" | "edge";
  target: string;
}

function ChaosPlayground() {
  const [failures, setFailures] = useState<Failure[]>([]);
  const [tick, setTick] = useState(0);

  // System health computation
  const isNodeDead = (id: NodeId) => failures.some((f) => f.type === "node" && f.target === id);
  const isEdgeDead = (a: NodeId, b: NodeId) =>
    failures.some(
      (f) =>
        f.type === "edge" &&
        (f.target === `${a}-${b}` || f.target === `${b}-${a}`),
    );

  const liveApis = (["api1", "api2", "api3"] as NodeId[]).filter((id) => !isNodeDead(id) && !isEdgeDead("lb", id));
  const dbReachable = !isNodeDead("db") && liveApis.some((id) => !isEdgeDead(id, "db"));
  const authReachable = !isNodeDead("auth") && liveApis.some((id) => !isEdgeDead(id, "auth"));
  const cacheReachable = !isNodeDead("cache") && liveApis.some((id) => !isEdgeDead(id, "cache"));

  const lbDead = isNodeDead("lb");
  const overallStatus: "ok" | "degraded" | "down" =
    lbDead || liveApis.length === 0 || !authReachable || !dbReachable
      ? "down"
      : !cacheReachable || liveApis.length < 3
        ? "degraded"
        : "ok";

  const toggleNode = (id: NodeId) => {
    if (failures.some((f) => f.type === "node" && f.target === id)) {
      setFailures(failures.filter((f) => !(f.type === "node" && f.target === id)));
    } else {
      setFailures([...failures, { type: "node", target: id }]);
    }
  };

  const toggleEdge = (a: NodeId, b: NodeId) => {
    const key = `${a}-${b}`;
    const existing = failures.find((f) => f.type === "edge" && (f.target === key || f.target === `${b}-${a}`));
    if (existing) {
      setFailures(failures.filter((f) => f !== existing));
    } else {
      setFailures([...failures, { type: "edge", target: key }]);
    }
  };

  const reset = () => setFailures([]);

  // tick to drive packet animations
  useEffect(() => {
    const handle = setInterval(() => setTick((t) => t + 1), 1100);
    return () => clearInterval(handle);
  }, []);

  return (
    <div>
      <h3 style={sectionTitle}>Click any node or edge to break it</h3>
      <p style={sectionDesc}>
        A 7-node system: LB → 3 APIs → auth + cache + db. Click any node to take it down. Click
        any edge to sever the network between two nodes. Watch the overall status flip and the
        red strikes appear. Build your intuition for what&rsquo;s redundant and what&rsquo;s a single
        point of failure.
      </p>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        <div style={{ marginBottom: 14, padding: "12px 14px", borderRadius: 8, border: `1.5px solid ${overallStatus === "ok" ? SD : overallStatus === "degraded" ? WARN : "#dc2626"}55`, background: `${overallStatus === "ok" ? SD : overallStatus === "degraded" ? WARN : "#dc2626"}10` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.1em" }}>SYSTEM STATUS</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={overallStatus}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                style={{
                  fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.12em",
                  color: overallStatus === "ok" ? SD : overallStatus === "degraded" ? WARN : "#dc2626",
                }}
              >
                {overallStatus === "ok" ? "✓ HEALTHY" : overallStatus === "degraded" ? "⚠ DEGRADED" : "✕ DOWN"}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <svg viewBox="0 0 600 360" width="100%" style={{ maxWidth: 700, display: "block", margin: "0 auto" }}>
          {EDGES.map(([a, b]) => {
            const na = NODES.find((n) => n.id === a)!;
            const nb = NODES.find((n) => n.id === b)!;
            const dead = isEdgeDead(a, b) || isNodeDead(a) || isNodeDead(b);
            return (
              <g key={`${a}-${b}`}>
                <line
                  x1={na.x + 50}
                  y1={na.y + 22}
                  x2={nb.x + 50}
                  y2={nb.y + 22}
                  stroke={dead ? "#dc2626" : NEUTRAL}
                  strokeWidth={dead ? 1 : 1.3}
                  strokeDasharray={dead ? "5 4" : "0"}
                  strokeOpacity={dead ? 0.5 : 0.6}
                />
                <line
                  x1={na.x + 50}
                  y1={na.y + 22}
                  x2={nb.x + 50}
                  y2={nb.y + 22}
                  stroke="transparent"
                  strokeWidth={20}
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleEdge(a, b)}
                />
                {!dead && tick % 2 === 0 && (
                  <motion.circle
                    key={`pkt-${a}-${b}-${tick}`}
                    r={3}
                    fill={SD}
                    initial={{ cx: na.x + 50, cy: na.y + 22 }}
                    animate={{ cx: nb.x + 50, cy: nb.y + 22 }}
                    transition={{ duration: 0.9, ease: "linear" }}
                  />
                )}
                {isEdgeDead(a, b) && (
                  <text
                    x={(na.x + nb.x) / 2 + 50}
                    y={(na.y + nb.y) / 2 + 22}
                    textAnchor="middle"
                    fill="#dc2626"
                    fontSize={16}
                    fontWeight={800}
                  >
                    ✕
                  </text>
                )}
              </g>
            );
          })}

          {NODES.map((n) => {
            const dead = isNodeDead(n.id);
            const c = dead ? "#dc2626" : kindColor(n.kind);
            return (
              <g
                key={n.id}
                transform={`translate(${n.x}, ${n.y})`}
                style={{ cursor: "pointer" }}
                onClick={() => toggleNode(n.id)}
              >
                {!dead && (
                  <motion.rect
                    width={100}
                    height={44}
                    rx={6}
                    fill={c}
                    initial={{ opacity: 0.25, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <rect
                  width={100}
                  height={44}
                  rx={6}
                  fill={`${c}22`}
                  stroke={c}
                  strokeWidth={1.5}
                  strokeDasharray={dead ? "4 3" : "0"}
                  opacity={dead ? 0.6 : 1}
                />
                <text x={50} y={20} textAnchor="middle" fill="#e5e7eb" fontSize={11} fontWeight={700} fontFamily={MONO} opacity={dead ? 0.5 : 1}>
                  {dead ? `✕ ${n.label}` : n.label}
                </text>
                <text x={50} y={34} textAnchor="middle" fill={c} fontSize={9} fontFamily={MONO}>
                  {dead ? "DOWN" : "ok"}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
            failures injected: <span style={{ color: failures.length > 0 ? WARN : SD, fontWeight: 700 }}>{failures.length}</span>
          </span>
          <div style={{ flex: 1 }} />
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(SD)}>
            <RotateCcw className="w-3.5 h-3.5" />
            heal everything
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={overallStatus}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: overallStatus === "ok" ? SD : overallStatus === "degraded" ? WARN : "#dc2626", letterSpacing: "0.12em", marginRight: 8 }}>
              ANALYSIS
            </span>
            {overallStatus === "ok" && "All required services reachable. The 3 APIs give redundancy — kill one and the other two pick up the slack."}
            {overallStatus === "degraded" && "Cache is down or only some APIs are alive. Service still works but slower / more DB load. This is what 'degraded' looks like in production."}
            {overallStatus === "down" && "A required dependency is unreachable: load balancer, all APIs, auth, or DB. The system can't serve users until this heals."}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function kindColor(k: Node["kind"]): string {
  switch (k) {
    case "lb": return SD;
    case "api": return SD;
    case "auth": return PURPLE;
    case "cache": return WARN;
    case "db": return SD;
  }
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
/*  TAB 3 - Real chaos experiments to run                              */
/* ================================================================== */

const EXPERIMENTS = [
  { k: "Kill a random pod", what: "Tests that the deployment has multiple replicas and the LB removes failed ones quickly." },
  { k: "Add 200ms latency to one downstream", what: "Tests circuit breakers + timeouts + retry policies on the caller." },
  { k: "Drop 5% of network packets between AZs", what: "Tests retry behavior and exposes apps that can't tolerate partial network failures." },
  { k: "Fill a disk on one node", what: "Tests that monitoring catches it and that workloads reschedule cleanly." },
  { k: "Crash a leader node", what: "Tests Raft / Paxos failover time and whether write availability holds." },
  { k: "Block DNS for 10s", what: "Tests caching of DNS lookups and what happens when fresh resolution fails." },
];

function Experiments() {
  return (
    <div>
      <h3 style={sectionTitle}>Real chaos experiments worth running</h3>
      <p style={sectionDesc}>
        Each one targets a specific resilience pattern. If you can&rsquo;t survive the experiment, you
        just learned what to fix.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {EXPERIMENTS.map((e) => (
          <motion.div
            key={e.k}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10, display: "flex", gap: 12 }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 8, background: `${SD}18`, border: `1.5px solid ${SD}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Skull className="w-5 h-5" style={{ color: SD }} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem", marginBottom: 6 }}>{e.k}</div>
              <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{e.what}</div>
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

export default function SD_L6_ChaosActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "play", label: "Click to Break", icon: <Zap className="w-4 h-4" />, content: <ChaosPlayground /> },
    { id: "exp", label: "Real Experiments", icon: <Globe className="w-4 h-4" />, content: <Experiments /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why does Netflix run Chaos Monkey during BUSINESS HOURS, not nights and weekends?",
      options: [
        "Because users are awake.",
        "So the engineers responsible can investigate and fix issues immediately, instead of being paged at 3 AM.",
        "It's faster during the day.",
        "Logs are cheaper.",
      ],
      correctIndex: 1,
      explanation: "The point is to find weaknesses while the team is around, not when they're asleep. A failure caught at 2 PM with engineers in the room becomes a fix; the same failure at 3 AM is a paged outage.",
    },
    {
      question: "First chaos experiment in a system. Best target?",
      options: [
        "Kill the entire production database.",
        "Kill one pod of a redundant stateless service in staging.",
        "Drop all internet.",
        "Format disks.",
      ],
      correctIndex: 1,
      explanation: "Start small, in a controlled environment, with redundancy in place. Increase blast radius gradually as confidence grows. Day-1 'kill the DB' is a postmortem, not chaos engineering.",
    },
    {
      question: "What's the difference between chaos engineering and load testing?",
      options: [
        "None.",
        "Load testing checks behavior under heavy traffic; chaos checks behavior when components fail. Both are needed for reliability.",
        "Chaos is faster.",
        "Load testing finds bugs; chaos doesn't.",
      ],
      correctIndex: 1,
      explanation: "Load testing answers 'can we handle X req/s?' Chaos answers 'what happens when this thing breaks?' Together they cover the two failure modes of distributed systems.",
    },
    {
      question: "Your chaos experiment kills one pod and 30% of traffic immediately fails. What's the most likely missing piece?",
      options: [
        "More pods.",
        "The load balancer's health check is too slow to detect the dead pod and stops sending traffic with a long delay.",
        "Bigger CPU.",
        "More disk.",
      ],
      correctIndex: 1,
      explanation: "If pod death drops a chunk of traffic, the LB is sending requests to a dead address. Tighten readiness probe interval + connection-draining + retry config in the caller.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Chaos Engineering"
      level={6}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'how do you know your fallbacks work' answer"
      onQuizComplete={onQuizComplete}
    />
  );
}

