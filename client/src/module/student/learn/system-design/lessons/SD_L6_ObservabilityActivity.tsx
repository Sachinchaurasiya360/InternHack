import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, BookOpen, FileText, GitBranch, Globe, Pause, Play, RotateCcw } from "lucide-react";
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

const PILLARS = [
  {
    k: "Metrics",
    color: SD,
    short: "What's broken? How broken?",
    long: "Numerical samples over time. Cheap to store, fast to query, perfect for dashboards and alerts. Loses individual events — you can see CPU is at 95% but not which request caused it.",
    ex: "Prometheus, Datadog, CloudWatch. Latency p99, request rate, error rate, queue depth.",
  },
  {
    k: "Logs",
    color: PURPLE,
    short: "What exactly happened?",
    long: "Discrete events with structured fields. High-fidelity for individual occurrences but expensive to query at scale. Show you the literal exception that fired.",
    ex: "ELK / Loki / CloudWatch Logs. Stack traces, request bodies, user actions.",
  },
  {
    k: "Traces",
    color: WARN,
    short: "Where did the time go?",
    long: "Distributed span trees. One request becomes one trace; each service hop is a span with timing. Shows which service/DB query owned the latency.",
    ex: "Jaeger, Tempo, AWS X-Ray. Span graphs, critical path analysis.",
  },
];

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>Three pillars. Each answers a different question.</h3>
      <p style={sectionDesc}>
        Observability is being able to answer questions about your system you didn&rsquo;t plan for.
        Metrics tell you something is wrong. Logs tell you exactly what happened. Traces tell you
        where the time went. Modern systems combine all three.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {PILLARS.map((p) => (
          <motion.div
            key={p.k}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "16px 18px", border: `1.5px solid ${p.color}55`, borderRadius: 10, background: `${p.color}08`, display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div>
              <div style={{ fontWeight: 700, color: p.color, fontSize: "1rem", marginBottom: 4 }}>{p.k}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL, fontStyle: "italic" }}>
                {p.short}
              </div>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{p.long}</div>
            <div style={{ paddingTop: 8, borderTop: `1px dashed ${p.color}33`, fontFamily: MONO, fontSize: "0.74rem", color: p.color }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{p.ex}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          THE WORKFLOW
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          A metric alert fires (latency p99 spiked). You glance at the dashboard, find the time
          window, then look at logs from that window for errors. Then you grab a trace from a
          slow request to see which downstream owned the latency. The three pillars cooperate via
          shared <b>correlation IDs</b> — the same request has the same ID across metric, log,
          and trace.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Three linked panes                                         */
/* ================================================================== */

interface MetricPoint { t: number; p99: number; }

interface LogLine {
  t: number;
  level: "info" | "error";
  msg: string;
  traceId: string;
}

interface Span {
  service: string;
  op: string;
  start: number;
  duration: number;
  depth: number;
  bad?: boolean;
}

const TIMELINE: MetricPoint[] = (() => {
  const out: MetricPoint[] = [];
  for (let t = 0; t <= 60; t += 1) {
    let v = 80 + Math.sin(t / 5) * 15 + Math.random() * 8;
    if (t >= 32 && t <= 38) v += 400 + Math.random() * 60;
    out.push({ t, p99: Math.round(v) });
  }
  return out;
})();

const ERROR_LOGS: LogLine[] = [
  { t: 33, level: "error", msg: "checkout: timeout calling auth (2000ms)", traceId: "trace-abc-001" },
  { t: 34, level: "error", msg: "checkout: timeout calling auth (2000ms)", traceId: "trace-abc-002" },
  { t: 34, level: "error", msg: "checkout: 503 from payment-gateway", traceId: "trace-abc-003" },
  { t: 35, level: "error", msg: "checkout: timeout calling auth (2000ms)", traceId: "trace-abc-004" },
  { t: 36, level: "error", msg: "auth: pool exhausted, no connection available", traceId: "trace-abc-005" },
  { t: 37, level: "error", msg: "checkout: circuit breaker OPEN for auth", traceId: "trace-abc-006" },
];

const HEALTHY_LOGS: LogLine[] = [
  { t: 10, level: "info", msg: "checkout: order accepted", traceId: "trace-abc-100" },
  { t: 22, level: "info", msg: "auth: token issued", traceId: "trace-abc-101" },
  { t: 45, level: "info", msg: "checkout: order completed", traceId: "trace-abc-102" },
];

const SLOW_TRACE: Span[] = [
  { service: "checkout", op: "POST /checkout", start: 0, duration: 2050, depth: 0 },
  { service: "checkout", op: "validate cart", start: 5, duration: 12, depth: 1 },
  { service: "auth", op: "verify token", start: 20, duration: 2000, depth: 1, bad: true },
  { service: "payment", op: "charge card", start: 2025, duration: 18, depth: 1 },
];

const FAST_TRACE: Span[] = [
  { service: "checkout", op: "POST /checkout", start: 0, duration: 65, depth: 0 },
  { service: "checkout", op: "validate cart", start: 5, duration: 8, depth: 1 },
  { service: "auth", op: "verify token", start: 14, duration: 22, depth: 1 },
  { service: "payment", op: "charge card", start: 38, duration: 25, depth: 1 },
];

function ThreePanes() {
  const [tNow, setTNow] = useState(0);
  const [running, setRunning] = useState(false);
  const [selectedT, setSelectedT] = useState<number | null>(null);

  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      setTNow((t) => {
        const next = t + 1;
        if (next > 60) {
          setRunning(false);
          return 60;
        }
        return next;
      });
    }, 200);
    return () => clearInterval(handle);
  }, [running]);

  const reset = () => {
    setTNow(0);
    setSelectedT(null);
    setRunning(false);
  };

  const visibleMetrics = TIMELINE.filter((p) => p.t <= tNow);
  const visibleErrors = ERROR_LOGS.filter((l) => l.t <= tNow);
  const visibleHealthy = HEALTHY_LOGS.filter((l) => l.t <= tNow);
  const allLogs = [...visibleHealthy, ...visibleErrors].sort((a, b) => a.t - b.t);

  const isInSpike = selectedT !== null && selectedT >= 32 && selectedT <= 38;
  const trace = isInSpike ? SLOW_TRACE : FAST_TRACE;
  const traceTotal = trace[0]?.duration ?? 1;

  return (
    <div>
      <h3 style={sectionTitle}>Press play. Watch the spike, the log flood, the slow trace.</h3>
      <p style={sectionDesc}>
        A 60-second window with a latency spike at t=32-38s. The metric line jumps. Errors flood
        the log. A trace from inside the spike shows where the time went. Click any second on the
        chart to drill in.
      </p>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        {/* Metric chart */}
        <div style={{ marginBottom: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontFamily: MONO, fontSize: "0.74rem", fontWeight: 700, color: SD, display: "flex", alignItems: "center", gap: 6 }}>
              <Activity className="w-3.5 h-3.5" />
              METRIC · checkout latency p99
            </span>
            <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
              t = <span style={{ color: SD, fontWeight: 700 }}>{tNow}s</span> / 60s
            </span>
          </div>
          <svg viewBox="0 0 600 140" width="100%" style={{ display: "block" }}>
            {/* gridlines */}
            {[0, 100, 200, 300, 400, 500].map((y) => (
              <line key={y} x1={0} x2={600} y1={140 - (y / 500) * 120 - 10} y2={140 - (y / 500) * 120 - 10} stroke="rgba(148,163,184,0.08)" strokeWidth={1} />
            ))}
            {/* spike highlight */}
            <rect x={(32 / 60) * 600} y={0} width={((38 - 32) / 60) * 600} height={140} fill={`${WARN}14`} />
            {/* line path */}
            <polyline
              points={visibleMetrics.map((p) => `${(p.t / 60) * 600},${140 - (p.p99 / 500) * 120 - 10}`).join(" ")}
              stroke={SD}
              strokeWidth={1.5}
              fill="none"
            />
            {/* dots, clickable */}
            {visibleMetrics.map((p) => {
              const x = (p.t / 60) * 600;
              const y = 140 - (p.p99 / 500) * 120 - 10;
              const isSpikeArea = p.t >= 32 && p.t <= 38;
              const sel = selectedT === p.t;
              return (
                <circle
                  key={p.t}
                  cx={x}
                  cy={y}
                  r={sel ? 5 : 2.5}
                  fill={isSpikeArea ? WARN : SD}
                  stroke={sel ? "#0b1220" : "none"}
                  strokeWidth={sel ? 2 : 0}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedT(p.t)}
                />
              );
            })}
            {/* selected vertical line */}
            {selectedT !== null && (
              <motion.line
                animate={{ x1: (selectedT / 60) * 600, x2: (selectedT / 60) * 600 }}
                y1={0}
                y2={140}
                stroke={SD}
                strokeWidth={1}
                strokeDasharray="3 3"
              />
            )}
          </svg>
          {selectedT !== null && (
            <motion.div
              key={selectedT}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ marginTop: 6, fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}
            >
              t={selectedT}s · p99 = <span style={{ color: isInSpike ? WARN : SD, fontWeight: 700 }}>{TIMELINE[selectedT]?.p99}ms</span>
              {isInSpike && <span style={{ color: WARN, marginLeft: 12 }}>(inside the spike)</span>}
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Logs pane */}
          <div style={{ padding: "12px 14px", borderRadius: 8, border: `1.5px solid ${PURPLE}33`, background: `${PURPLE}08`, minHeight: 220 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
              <FileText className="w-3.5 h-3.5" style={{ color: PURPLE }} />
              <span style={{ fontFamily: MONO, fontSize: "0.74rem", fontWeight: 700, color: PURPLE }}>LOG · checkout-service</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, fontFamily: MONO, fontSize: "0.7rem" }}>
              <AnimatePresence>
                {allLogs.map((l, i) => {
                  const c = l.level === "error" ? WARN : NEUTRAL;
                  return (
                    <motion.div
                      key={`${l.t}-${i}`}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ display: "grid", gridTemplateColumns: "30px 50px 1fr", gap: 8, padding: "4px 6px", borderRadius: 4, background: `${c}10`, border: `1px solid ${c}22` }}
                    >
                      <span style={{ color: NEUTRAL }}>{String(l.t).padStart(2, "0")}s</span>
                      <span style={{ color: c, fontWeight: 700, letterSpacing: "0.04em" }}>{l.level.toUpperCase()}</span>
                      <span style={{ color: "#e5e7eb" }}>{l.msg}</span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              {allLogs.length === 0 && (
                <span style={{ color: NEUTRAL, fontStyle: "italic" }}>press play to start streaming logs</span>
              )}
            </div>
          </div>

          {/* Trace pane */}
          <div style={{ padding: "12px 14px", borderRadius: 8, border: `1.5px solid ${WARN}33`, background: `${WARN}08`, minHeight: 220 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
              <GitBranch className="w-3.5 h-3.5" style={{ color: WARN }} />
              <span style={{ fontFamily: MONO, fontSize: "0.74rem", fontWeight: 700, color: WARN }}>TRACE · {selectedT !== null ? (isInSpike ? "trace-abc-002 · slow" : "trace-abc-100 · healthy") : "(click a metric point)"}</span>
            </div>
            {selectedT !== null ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL, marginBottom: 4 }}>
                  total: <span style={{ color: isInSpike ? WARN : SD, fontWeight: 700 }}>{traceTotal}ms</span>
                </div>
                {trace.map((s, i) => {
                  const left = (s.start / traceTotal) * 100;
                  const width = (s.duration / traceTotal) * 100;
                  const c = s.bad ? WARN : SD;
                  return (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr 60px", gap: 6, alignItems: "center" }}>
                      <span style={{ fontFamily: MONO, fontSize: "0.66rem", color: c, paddingLeft: s.depth * 8 }}>
                        {s.depth > 0 ? "└ " : ""}{s.service}
                      </span>
                      <div style={{ position: "relative", height: 18, background: "rgba(148,163,184,0.08)", borderRadius: 3 }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${width}%` }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            position: "absolute",
                            left: `${left}%`,
                            top: 0,
                            bottom: 0,
                            background: c,
                            borderRadius: 3,
                            opacity: 0.85,
                          }}
                        />
                      </div>
                      <span style={{ fontFamily: MONO, fontSize: "0.66rem", color: c, fontWeight: 700, textAlign: "right" }}>{s.duration}ms</span>
                    </div>
                  );
                })}
                {isInSpike && (
                  <div style={{ marginTop: 6, padding: "6px 8px", borderRadius: 4, background: `${WARN}14`, border: `1px solid ${WARN}55`, fontFamily: MONO, fontSize: "0.68rem", color: WARN }}>
                    auth span owned 97% of the latency. Check auth pool / DB.
                  </div>
                )}
              </div>
            ) : (
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL, fontStyle: "italic" }}>
                click any point on the metric chart to load its trace
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setRunning((r) => !r)} style={btn(SD)}>
            {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {running ? "pause" : tNow >= 60 ? "replay" : tNow > 0 ? "resume" : "play"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>
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
/*  TAB 3 - The four golden signals                                    */
/* ================================================================== */

const SIGNALS = [
  { k: "Latency", v: "How long requests take. Track p50, p95, p99 — averages lie. p99 surfaces the slow tail users complain about.", ex: "p99 latency ≤ 200ms. Alert at 400ms." },
  { k: "Traffic", v: "Request rate or throughput. The denominator behind every other ratio.", ex: "RPS, queries/sec, concurrent users." },
  { k: "Errors", v: "Rate of failed requests, by HTTP code or app-level reason. Distinguish 4xx (client) from 5xx (server).", ex: "5xx rate > 1% for 5 min → page." },
  { k: "Saturation", v: "How full your resources are. CPU, memory, queue depth, connection pool. The leading indicator of latency degradation.", ex: "Pod CPU > 80% for 10 min." },
];

function GoldenSignals() {
  return (
    <div>
      <h3 style={sectionTitle}>The four signals every service should expose</h3>
      <p style={sectionDesc}>
        From Google&rsquo;s SRE book. Every service should expose these four metrics; every alert
        should derive from them. They cover what users see (latency, errors), how loaded the
        system is (traffic, saturation), and tell you the difference between a real outage and a
        capacity problem.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {SIGNALS.map((s) => (
          <motion.div
            key={s.k}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.95rem", marginBottom: 6 }}>{s.k}</div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55, marginBottom: 8 }}>{s.v}</div>
            <div style={{ fontFamily: MONO, fontSize: "0.74rem", padding: "6px 10px", borderRadius: 4, background: `${SD}10`, border: `1px solid ${SD}33`, color: "var(--eng-text)" }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4, color: SD }}>SLO ·</span>
              {s.ex}
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

export default function SD_L6_ObservabilityActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "panes", label: "Three Panes", icon: <Activity className="w-4 h-4" />, content: <ThreePanes /> },
    { id: "golden", label: "Golden Signals", icon: <Globe className="w-4 h-4" />, content: <GoldenSignals /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "You can only afford one of metrics, logs, or traces. The team is small. Pick one for production alerting.",
      options: [
        "Logs — they have everything.",
        "Metrics — cheap to query at scale, perfect for alerts and dashboards. Add logs and traces as you scale.",
        "Traces — they show everything.",
        "None.",
      ],
      correctIndex: 1,
      explanation: "Metrics are the most cost-effective starting point. They tell you what's broken and how broken. Logs and traces add cost but become invaluable for the 'exactly what happened' and 'where did the time go' questions.",
    },
    {
      question: "The metric dashboard shows p99 latency spiked at 14:32. Best next step?",
      options: [
        "Restart the service.",
        "Pull logs from 14:32 ± 30s for errors, then sample a slow trace from the same window.",
        "Increase replicas.",
        "Wait.",
      ],
      correctIndex: 1,
      explanation: "Metrics tell you something is wrong. Logs and traces tell you what and where. Without that drill-down, you're guessing at the cause and risk making it worse.",
    },
    {
      question: "Why are correlation IDs (trace IDs) on log lines so important?",
      options: [
        "Decoration.",
        "They link a single user request across services so you can find every log line and span for one trace, even when 1000s of users are concurrent.",
        "They speed up logs.",
        "They compress data.",
      ],
      correctIndex: 1,
      explanation: "Without a trace ID, you can't tell which logs across services belong to which request. With it, one click jumps from a slow trace to all logs from that request, in every service.",
    },
    {
      question: "Why do SREs prefer p99 latency over average latency?",
      options: [
        "It's bigger.",
        "Averages hide tail latency. A few extreme outliers (the slow requests users actually complain about) get drowned out by thousands of fast ones.",
        "It's standard.",
        "It uses less storage.",
      ],
      correctIndex: 1,
      explanation: "If 99% of requests complete in 50ms and 1% take 5s, the average looks fine but 1 in 100 users is angry. p99 surfaces that tail. p999 (99.9%) goes one further for high-traffic services.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Metrics, Logs & Traces"
      level={6}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'how do you debug a production issue' answer"
      onQuizComplete={onQuizComplete}
    />
  );
}
