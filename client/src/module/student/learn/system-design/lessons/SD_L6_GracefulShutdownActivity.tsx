import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Power, RotateCcw } from "lucide-react";
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

const STEPS = [
  { k: "1. SIGTERM received", v: "Orchestrator (Kubernetes, ECS, systemd) sends SIGTERM. The pod is being asked to exit." },
  { k: "2. Mark unhealthy", v: "Pod fails its readiness probe. Load balancer stops sending new traffic almost immediately." },
  { k: "3. Drain in-flight", v: "Existing requests keep running until they finish, normally up to 30 seconds." },
  { k: "4. Close connections", v: "After drain, gracefully close keepalive connections, flush logs, commit offsets, close DB pools." },
  { k: "5. Exit cleanly", v: "Process exits. If not done before grace-period (default 30s in K8s), SIGKILL hits and in-flight work is dropped." },
];

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>Don&rsquo;t hang up on requests mid-flight</h3>
      <p style={sectionDesc}>
        Every deploy or autoscale event takes pods out of service. Done badly, that drops in-flight
        requests on the floor — users see 502s, payments fail mid-write, queues lose messages.
        Done well, the pod cooperates: it goes unhealthy, drains existing work, then exits.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"
      >
        {STEPS.map((s) => (
          <motion.div
            key={s.k}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginBottom: 6 }}>
              {s.k}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{s.v}</div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Kubernetes</b> sends SIGTERM, waits <code style={{ fontFamily: MONO }}>terminationGracePeriodSeconds</code>{" "}
          (30s default), then SIGKILLs. Use a <b>preStop</b> hook to delay before mark-unhealthy
          so the LB has time to update. <b>Envoy / Istio</b> support
          <code style={{ fontFamily: MONO }}> /healthcheck/fail</code> to flip a sidecar unhealthy
          before the app exits. <b>nginx</b> has <code style={{ fontFamily: MONO }}>nginx -s quit</code>{" "}
          for graceful shutdown.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Animated rolling deploy                                    */
/* ================================================================== */

type PodPhase = "ready" | "draining" | "down" | "starting";

interface Pod {
  id: number;
  phase: PodPhase;
  inFlight: number;
  drainElapsed: number; // ms
}

const POD_COUNT = 4;
const NEW_REQ_PER_TICK = 0.6; // probability of a new request landing on a pod per tick
const TICK_MS = 200;
const DRAIN_MS = 4000; // simulated drain time
const REQ_DURATION_MS = 1800; // simulated in-flight request duration

function GracefulDemo() {
  const [pods, setPods] = useState<Pod[]>(() =>
    Array.from({ length: POD_COUNT }, (_, i) => ({ id: i, phase: "ready", inFlight: 0, drainElapsed: 0 })),
  );
  const [running, setRunning] = useState(true);
  const [strategy, setStrategy] = useState<"graceful" | "abrupt">("graceful");
  const [stats, setStats] = useState({ ok: 0, lost: 0 });
  const [deploying, setDeploying] = useState(false);
  const deployIdxRef = useRef(0);

  // Simulation tick
  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      setPods((ps) => {
        return ps.map((p) => {
          let { phase, inFlight, drainElapsed } = p;
          // Distribute new requests to ready pods
          if (phase === "ready" && Math.random() < NEW_REQ_PER_TICK / POD_COUNT) {
            inFlight = Math.min(8, inFlight + 1);
          }
          // Complete in-flight at a steady rate (~1.8s avg)
          if (inFlight > 0 && Math.random() < TICK_MS / REQ_DURATION_MS) {
            inFlight -= 1;
            setStats((st) => ({ ...st, ok: st.ok + 1 }));
          }
          if (phase === "draining") {
            drainElapsed += TICK_MS;
            // Drain phase: no new requests, in-flight finishes
            if (drainElapsed >= DRAIN_MS || inFlight === 0) {
              phase = "down";
              setTimeout(() => {
                setPods((qs) => qs.map((q) => (q.id === p.id ? { ...q, phase: "starting" as PodPhase, drainElapsed: 0 } : q)));
                setTimeout(() => {
                  setPods((qs) => qs.map((q) => (q.id === p.id ? { ...q, phase: "ready" as PodPhase, inFlight: 0 } : q)));
                }, 700);
              }, 350);
            }
          }
          return { ...p, phase, inFlight, drainElapsed };
        });
      });
    }, TICK_MS);
    return () => clearInterval(handle);
  }, [running]);

  const startDeploy = () => {
    if (deploying) return;
    setDeploying(true);
    deployIdxRef.current = 0;
    rollNext(0);
  };

  const rollNext = (idx: number) => {
    if (idx >= POD_COUNT) {
      setDeploying(false);
      return;
    }
    setPods((ps) =>
      ps.map((p) => {
        if (p.id !== idx) return p;
        if (strategy === "graceful") {
          return { ...p, phase: "draining" as PodPhase, drainElapsed: 0 };
        } else {
          // Abrupt: drop in-flight
          setStats((st) => ({ ...st, lost: st.lost + p.inFlight }));
          return { ...p, phase: "down" as PodPhase, inFlight: 0 };
        }
      }),
    );

    if (strategy === "abrupt") {
      // Restart immediately for the demo
      setTimeout(() => {
        setPods((qs) => qs.map((q) => (q.id === idx ? { ...q, phase: "starting" as PodPhase } : q)));
        setTimeout(() => {
          setPods((qs) => qs.map((q) => (q.id === idx ? { ...q, phase: "ready" as PodPhase, inFlight: 0 } : q)));
        }, 700);
      }, 300);

      setTimeout(() => rollNext(idx + 1), 1500);
    } else {
      setTimeout(() => rollNext(idx + 1), DRAIN_MS + 1500);
    }
  };

  const reset = () => {
    setPods(Array.from({ length: POD_COUNT }, (_, i) => ({ id: i, phase: "ready" as PodPhase, inFlight: 0, drainElapsed: 0 })));
    setStats({ ok: 0, lost: 0 });
    setDeploying(false);
    deployIdxRef.current = 0;
  };

  return (
    <div>
      <h3 style={sectionTitle}>Roll a deploy. Compare graceful vs abrupt.</h3>
      <p style={sectionDesc}>
        4 pods serve traffic. Click &ldquo;deploy&rdquo;. The orchestrator restarts them one at a time.
        Toggle the strategy: graceful drains for 4s before exiting; abrupt kills instantly,
        dropping in-flight requests.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>shutdown:</span>
        {(["graceful", "abrupt"] as const).map((m) => {
          const active = strategy === m;
          const c = m === "graceful" ? SD : WARN;
          return (
            <button
              key={m}
              type="button"
              onClick={() => setStrategy(m)}
              disabled={deploying}
              style={{
                padding: "8px 14px",
                borderRadius: 6,
                cursor: deploying ? "not-allowed" : "pointer",
                border: `1.5px solid ${active ? c : "var(--eng-border)"}`,
                background: active ? `${c}18` : "transparent",
                color: active ? c : "var(--eng-text-muted)",
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                opacity: deploying ? 0.5 : 1,
              }}
            >
              {m}
            </button>
          );
        })}
        <div style={{ flex: 1 }} />
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={startDeploy}
          disabled={deploying}
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "8px 14px", borderRadius: 6,
            cursor: deploying ? "not-allowed" : "pointer",
            border: `1.5px solid ${deploying ? "rgba(148,163,184,0.25)" : SD}`,
            background: deploying ? "transparent" : `${SD}18`,
            color: deploying ? NEUTRAL : SD,
            fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700,
            letterSpacing: "0.08em", textTransform: "uppercase",
            opacity: deploying ? 0.5 : 1,
          }}
        >
          <Power className="w-3.5 h-3.5" />
          {deploying ? "deploying…" : "rolling deploy"}
        </motion.button>
      </div>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {pods.map((p) => <PodCard key={p.id} pod={p} />)}
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div style={{ padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${SD}33`, background: `${SD}10`, textAlign: "center" }}>
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", color: SD, letterSpacing: "0.1em", marginBottom: 4 }}>SUCCESSFUL</div>
            <div style={{ fontFamily: MONO, fontSize: "1.4rem", fontWeight: 800, color: "var(--eng-text)" }}>{stats.ok}</div>
          </div>
          <div style={{ padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${stats.lost > 0 ? WARN : NEUTRAL}33`, background: `${stats.lost > 0 ? WARN : NEUTRAL}10`, textAlign: "center" }}>
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", color: stats.lost > 0 ? WARN : NEUTRAL, letterSpacing: "0.1em", marginBottom: 4 }}>DROPPED</div>
            <div style={{ fontFamily: MONO, fontSize: "1.4rem", fontWeight: 800, color: stats.lost > 0 ? WARN : "var(--eng-text)" }}>{stats.lost}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setRunning((r) => !r)} style={btn(SD)}>
            {running ? "pause traffic" : "resume traffic"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={strategy}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: strategy === "graceful" ? SD : WARN, letterSpacing: "0.12em", marginRight: 8 }}>
              {strategy === "graceful" ? "GRACEFUL" : "ABRUPT"}
            </span>
            {strategy === "graceful"
              ? "Pod marked unhealthy → LB stops sending new traffic → in-flight requests finish (up to 4s drain) → pod exits cleanly. Zero dropped requests during deploy."
              : "Pod killed instantly. Any in-flight requests are dropped on the floor. The LB sees the pod disappear; clients get 502 / connection-reset until the next pod takes over."}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function PodCard({ pod }: { pod: Pod }) {
  const c =
    pod.phase === "ready" ? SD :
    pod.phase === "draining" ? PURPLE :
    pod.phase === "starting" ? WARN :
    NEUTRAL;
  const label =
    pod.phase === "ready" ? "READY" :
    pod.phase === "draining" ? "DRAINING" :
    pod.phase === "starting" ? "STARTING" :
    "DOWN";

  return (
    <motion.div
      animate={{ borderColor: `${c}55`, backgroundColor: `${c}10` }}
      transition={{ duration: 0.3 }}
      style={{
        padding: "12px 14px",
        borderRadius: 8,
        border: `1.5px solid`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {pod.phase === "ready" && (
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
          style={{ position: "absolute", inset: 0, background: c, borderRadius: 8 }}
        />
      )}
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: c, letterSpacing: "0.06em" }}>
            POD-{pod.id}
          </span>
          <span style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 700, color: c, letterSpacing: "0.1em" }}>
            {label}
          </span>
        </div>
        <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL, marginBottom: 6 }}>
          in-flight: <span style={{ color: pod.inFlight > 0 ? c : NEUTRAL, fontWeight: 700 }}>{pod.inFlight}</span>
        </div>
        {pod.phase === "draining" && (
          <div style={{ height: 4, background: "rgba(148,163,184,0.15)", borderRadius: 2, overflow: "hidden" }}>
            <motion.div
              animate={{ width: `${Math.min(100, (pod.drainElapsed / DRAIN_MS) * 100)}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
              style={{ height: "100%", background: c }}
            />
          </div>
        )}
      </div>
    </motion.div>
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
/*  TAB 3 - The actual code pattern                                    */
/* ================================================================== */

function CodePattern() {
  return (
    <div>
      <h3 style={sectionTitle}>What graceful shutdown actually looks like</h3>
      <p style={sectionDesc}>
        Every production HTTP server should look something like this. Trap SIGTERM, stop accepting
        new work, drain in-flight, close resources, exit.
      </p>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        <pre style={{ margin: 0, fontFamily: MONO, fontSize: "0.82rem", color: "#e5e7eb", lineHeight: 1.75, overflowX: "auto" }}>
          <span style={{ color: NEUTRAL }}>{`// Express.js example`}</span>
          {"\n"}
          <span style={{ color: SD }}>const</span> server = app.listen(<span style={{ color: WARN }}>3000</span>);
          {"\n\n"}
          process.on(<span style={{ color: WARN }}>"SIGTERM"</span>, <span style={{ color: SD }}>async</span> () =&gt; {"{"}
          {"\n  "}<span style={{ color: NEUTRAL }}>{`// 1. flip readiness to false`}</span>
          {"\n  "}healthy = <span style={{ color: WARN }}>false</span>;
          {"\n\n  "}<span style={{ color: NEUTRAL }}>{`// 2. wait a beat for LB / mesh to notice`}</span>
          {"\n  "}<span style={{ color: SD }}>await</span> sleep(<span style={{ color: WARN }}>2_000</span>);
          {"\n\n  "}<span style={{ color: NEUTRAL }}>{`// 3. stop accepting new connections, drain existing`}</span>
          {"\n  "}server.close(<span style={{ color: SD }}>async</span> () =&gt; {"{"}
          {"\n    "}<span style={{ color: NEUTRAL }}>{`// 4. close downstreams (DB pool, Redis, broker)`}</span>
          {"\n    "}<span style={{ color: SD }}>await</span> db.end();
          {"\n    "}<span style={{ color: SD }}>await</span> redis.quit();
          {"\n    "}<span style={{ color: SD }}>await</span> kafka.disconnect();
          {"\n    "}process.exit(<span style={{ color: WARN }}>0</span>);
          {"\n  "}{"}"});
          {"\n\n  "}<span style={{ color: NEUTRAL }}>{`// 5. last-resort: hard exit if something is stuck`}</span>
          {"\n  "}setTimeout(() =&gt; process.exit(<span style={{ color: WARN }}>1</span>), <span style={{ color: WARN }}>25_000</span>);
          {"\n"}{"}"});
        </pre>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5"
      >
        {[
          { k: "Why the 2s sleep", v: "Kubernetes propagates the readiness change asynchronously. Without a small wait, you might still receive new traffic for the first second." },
          { k: "Why the hard timeout", v: "If a hung request blocks server.close, the K8s grace period (30s default) will SIGKILL anyway. Better to force-exit at 25s and log the offender." },
          { k: "Order matters", v: "Drain HTTP first (no new work), THEN close DB pools. Closing the DB while requests still need it just turns gracefulness into errors." },
          { k: "PreStop hook", v: "K8s lets you run a script before SIGTERM. Use it for the readiness flip + sleep so the LB updates BEFORE the server stops accepting." },
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

export default function SD_L6_GracefulShutdownActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Roll the Deploy", icon: <Power className="w-4 h-4" />, content: <GracefulDemo /> },
    { id: "code", label: "Code Pattern", icon: <Globe className="w-4 h-4" />, content: <CodePattern /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why flip the readiness probe to unhealthy BEFORE you stop accepting connections?",
      options: [
        "It's faster.",
        "Otherwise the LB keeps sending you new requests for a few seconds — exactly the requests that get dropped.",
        "Logs require it.",
        "It cleans memory.",
      ],
      correctIndex: 1,
      explanation: "Readiness propagation is async. Mark unhealthy first, wait long enough for the LB to notice, THEN stop accepting. Otherwise new requests arrive after you've stopped serving and time out.",
    },
    {
      question: "Kubernetes default terminationGracePeriodSeconds is 30. What happens at 30s if your pod hasn't exited?",
      options: [
        "Pod is asked nicely again.",
        "SIGKILL — the kernel terminates the process. In-flight work is lost.",
        "Pod restarts.",
        "Nothing.",
      ],
      correctIndex: 1,
      explanation: "After the grace period, SIGKILL is non-negotiable. If your shutdown logic exceeds 30s, increase the grace period or fix the slow shutdown path.",
    },
    {
      question: "An order is being processed when SIGTERM arrives. The pod has 3 seconds to drain. Best behavior?",
      options: [
        "Cancel the order and retry on a new pod.",
        "Finish the current order, then exit. The next order goes to a different pod.",
        "Drop it.",
        "Restart the pod.",
      ],
      correctIndex: 1,
      explanation: "In-flight requests should finish where they started. New traffic is already being routed elsewhere (because readiness flipped). Drain time exists exactly to let in-flight work complete.",
    },
    {
      question: "After server.close() finishes, what should happen NEXT?",
      options: [
        "Exit immediately.",
        "Close DB / Redis / message-broker connections, then exit.",
        "Send a Slack message.",
        "Nothing else.",
      ],
      correctIndex: 1,
      explanation: "HTTP drain comes first (no new work). Then close downstream connections in reverse-order of dependence. Exiting before closing them can leave unflushed buffers, partial commits, or connection leaks.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Graceful Shutdown"
      level={6}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'how do you do zero-downtime deploys' answer"
      onQuizComplete={onQuizComplete}
    />
  );
}
