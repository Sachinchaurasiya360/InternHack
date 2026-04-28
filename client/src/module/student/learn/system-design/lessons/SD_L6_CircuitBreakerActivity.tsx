import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Pause, Play, RotateCcw, ShieldAlert, Zap } from "lucide-react";
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

const STATES = [
  { k: "Closed", color: SD, what: "Normal. Requests flow through. Failures are counted." },
  { k: "Open", color: WARN, what: "Threshold tripped. All requests instantly fail without hitting the downstream. Saves the downstream from death by retry storm." },
  { k: "Half-Open", color: PURPLE, what: "After cooldown, a few probe requests are allowed. If they succeed, close. If they fail, open again." },
];

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>A breaker that trips before your downstream dies</h3>
      <p style={sectionDesc}>
        A circuit breaker watches the success/failure rate of calls to a downstream service. When
        failures exceed a threshold, it <b>opens</b> — every subsequent call fails fast without
        hitting the downstream. After a cooldown, it lets a few requests probe (<b>half-open</b>);
        if they succeed, it closes. Three states. One job: stop a slow death from becoming a fast
        cascade.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {STATES.map((s) => (
          <motion.div
            key={s.k}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "16px 18px", border: `1.5px solid ${s.color}55`, borderRadius: 10, background: `${s.color}08` }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: `${s.color}22`, border: `1.5px solid ${s.color}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShieldAlert className="w-4 h-4" style={{ color: s.color }} />
              </div>
              <div style={{ fontWeight: 700, color: s.color, fontSize: "0.95rem" }}>{s.k}</div>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{s.what}</div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Netflix Hystrix</b> made the pattern famous (now in maintenance; <b>Resilience4j</b>{" "}
          is the JVM successor). <b>Istio</b> exposes circuit-breaker rules per
          destination. <b>AWS App Mesh</b> ships them at the sidecar. Whenever an outage
          postmortem says &ldquo;a downstream slowdown caused our service to fall over,&rdquo; the
          missing piece is usually a circuit breaker.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Animated state machine                                     */
/* ================================================================== */

type CBState = "closed" | "open" | "half-open";

const FAIL_THRESHOLD = 5;
const COOLDOWN_MS = 4000;

interface Call {
  id: number;
  result: "ok" | "fail" | "fast-fail";
  state: CBState;
}

function CircuitBreakerDemo() {
  const [state, setState] = useState<CBState>("closed");
  const [running, setRunning] = useState(true);
  const [downstreamHealth, setDownstreamHealth] = useState<"healthy" | "failing">("healthy");
  const [recentFails, setRecentFails] = useState(0);
  const [calls, setCalls] = useState<Call[]>([]);
  const idRef = useRef(0);
  const openedAtRef = useRef<number>(0);

  // Tick: send a call every 500ms
  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      const id = ++idRef.current;
      const now = Date.now();

      // Half-open transition after cooldown
      if (state === "open" && now - openedAtRef.current >= COOLDOWN_MS) {
        setState("half-open");
      }

      let result: Call["result"];
      let nextState: CBState = state;

      if (state === "open") {
        result = "fast-fail";
      } else if (state === "half-open") {
        // probe
        if (downstreamHealth === "healthy") {
          result = "ok";
          nextState = "closed";
          setRecentFails(0);
        } else {
          result = "fail";
          nextState = "open";
          openedAtRef.current = now;
        }
      } else {
        // closed
        if (downstreamHealth === "healthy") {
          result = "ok";
          setRecentFails((f) => Math.max(0, f - 1));
        } else {
          result = "fail";
          setRecentFails((f) => {
            const nf = f + 1;
            if (nf >= FAIL_THRESHOLD) {
              nextState = "open";
              openedAtRef.current = now;
            }
            return nf;
          });
        }
      }

      if (nextState !== state) setState(nextState);
      setCalls((cs) => {
        const next = [...cs, { id, result, state: nextState }];
        return next.length > 18 ? next.slice(next.length - 18) : next;
      });
    }, 500);
    return () => clearInterval(handle);
  }, [running, state, downstreamHealth]);

  const reset = () => {
    setState("closed");
    setRecentFails(0);
    setCalls([]);
    setDownstreamHealth("healthy");
    idRef.current = 0;
    openedAtRef.current = 0;
  };

  const stateColor = state === "closed" ? SD : state === "open" ? WARN : PURPLE;

  return (
    <div>
      <h3 style={sectionTitle}>Inject failures. Watch the breaker trip.</h3>
      <p style={sectionDesc}>
        Toggle the downstream between healthy and failing. With 5 consecutive failures the breaker{" "}
        <b>opens</b> — every subsequent call fast-fails for 4s. After cooldown it goes{" "}
        <b>half-open</b> and probes. If you&rsquo;ve flipped the downstream back to healthy by then,
        it closes.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>downstream:</span>
        {(["healthy", "failing"] as const).map((h) => {
          const active = downstreamHealth === h;
          const c = h === "healthy" ? SD : WARN;
          return (
            <button
              key={h}
              type="button"
              onClick={() => setDownstreamHealth(h)}
              style={{
                padding: "6px 12px",
                borderRadius: 6,
                cursor: "pointer",
                border: `1.5px solid ${active ? c : "rgba(148,163,184,0.25)"}`,
                background: active ? `${c}18` : "transparent",
                color: active ? c : "#94a3b8",
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {h}
            </button>
          );
        })}
      </div>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        {/* State machine viz */}
        <svg viewBox="0 0 720 200" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto 18px" }}>
          {(["closed", "half-open", "open"] as CBState[]).map((s, i) => {
            const x = 80 + i * 280;
            const c = s === "closed" ? SD : s === "open" ? WARN : PURPLE;
            const active = state === s;
            return (
              <g key={s} transform={`translate(${x}, 60)`}>
                {active && (
                  <motion.circle
                    r={56}
                    fill={c}
                    initial={{ opacity: 0.3, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.4 }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <motion.circle
                  r={42}
                  animate={{ fill: active ? `${c}33` : `${c}10`, stroke: c, strokeWidth: active ? 2.5 : 1.5 }}
                  transition={{ duration: 0.3 }}
                />
                <text x={0} y={-4} textAnchor="middle" fill={c} fontSize={12} fontWeight={800} fontFamily={MONO} letterSpacing="0.04em">
                  {s.toUpperCase()}
                </text>
                <text x={0} y={14} textAnchor="middle" fill={NEUTRAL} fontSize={9} fontFamily={MONO}>
                  {s === "closed" ? "normal" : s === "open" ? "fast-fail" : "probing"}
                </text>
              </g>
            );
          })}
          {/* arrows between states */}
          <line x1={120} y1={60} x2={340} y2={60} stroke={NEUTRAL} strokeWidth={1.2} strokeDasharray="3 4" markerEnd="url(#cb-arrow)" />
          <line x1={400} y1={60} x2={620} y2={60} stroke={NEUTRAL} strokeWidth={1.2} strokeDasharray="3 4" markerEnd="url(#cb-arrow)" />
          <path d="M 620 90 Q 360 160 120 90" stroke={NEUTRAL} strokeWidth={1.2} fill="none" strokeDasharray="3 4" markerEnd="url(#cb-arrow)" />
          <defs>
            <marker id="cb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill={NEUTRAL} />
            </marker>
          </defs>
          <text x={220} y={50} textAnchor="middle" fill={NEUTRAL} fontSize={10} fontFamily={MONO}>{FAIL_THRESHOLD} fails</text>
          <text x={500} y={50} textAnchor="middle" fill={NEUTRAL} fontSize={10} fontFamily={MONO}>cooldown</text>
          <text x={370} y={172} textAnchor="middle" fill={NEUTRAL} fontSize={10} fontFamily={MONO}>probe ok</text>
        </svg>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <Stat label="state" textValue={state.toUpperCase()} color={stateColor} />
          <Stat label="fail count" textValue={`${recentFails} / ${FAIL_THRESHOLD}`} color={recentFails >= FAIL_THRESHOLD - 1 ? WARN : SD} />
          <Stat label="calls seen" textValue={String(calls.length)} color={SD} />
        </div>

        {/* Recent calls strip */}
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 14 }}>
          <AnimatePresence initial={false}>
            {calls.map((c) => {
              const cc = c.result === "ok" ? SD : c.result === "fast-fail" ? PURPLE : WARN;
              return (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: "4px 8px",
                    borderRadius: 4,
                    fontFamily: MONO,
                    fontSize: "0.66rem",
                    fontWeight: 700,
                    color: cc,
                    background: `${cc}14`,
                    border: `1px solid ${cc}55`,
                  }}
                >
                  {c.result === "ok" ? "✓" : c.result === "fast-fail" ? "⚡" : "✕"} #{c.id}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
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
            key={state}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: stateColor, letterSpacing: "0.12em", marginRight: 8 }}>
              CURRENT
            </span>
            {state === "closed" && "Normal operation. Failures are counted; if 5 in a row, the breaker opens."}
            {state === "open" && "Breaker tripped. Calls fail instantly without touching the downstream — saves it from a retry storm. Cooldown is 4s."}
            {state === "half-open" && "Cooldown elapsed. Sending probe requests. If they succeed, close; otherwise reopen for another 4s."}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Stat({ label, textValue, color }: { label: string; textValue: string; color: string }) {
  return (
    <motion.div
      animate={{ borderColor: `${color}55`, backgroundColor: `${color}10` }}
      transition={{ duration: 0.25 }}
      style={{ padding: "10px 12px", borderRadius: 8, border: `1.5px solid`, textAlign: "center" }}
    >
      <div style={{ fontFamily: MONO, fontSize: "0.66rem", color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
        {label}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={textValue}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          style={{ fontFamily: MONO, fontSize: "1rem", fontWeight: 800, color: "var(--eng-text)" }}
        >
          {textValue}
        </motion.div>
      </AnimatePresence>
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
/*  TAB 3 - Tuning + real configurations                               */
/* ================================================================== */

const TUNING = [
  {
    k: "Failure threshold",
    v: "How many failures (or % failure rate) over how big a window before opening. Too low → false trips on a blip. Too high → too slow to protect.",
    typical: "5 consecutive failures, or 50% over 20 calls.",
  },
  {
    k: "Cooldown / sleep window",
    v: "How long the breaker stays open before probing. Long enough for the downstream to recover; short enough to retry quickly.",
    typical: "5-30s depending on downstream recovery time.",
  },
  {
    k: "Probe count",
    v: "How many requests are allowed in half-open. Usually 1-3.",
    typical: "1 probe; succeed → close, fail → reopen.",
  },
  {
    k: "Per-host vs global",
    v: "Track failures per downstream host (so one bad node doesn't open the breaker for the whole fleet) or globally per service.",
    typical: "Per-host for upstream pools; global for external APIs.",
  },
];

function Tuning() {
  return (
    <div>
      <h3 style={sectionTitle}>Tuning the breaker for your downstream</h3>
      <p style={sectionDesc}>
        The four knobs that decide how aggressive your breaker is. Pick wrong and it either flaps
        on every minor blip or fails to protect during a real outage.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {TUNING.map((t) => (
          <motion.div
            key={t.k}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.92rem", marginBottom: 8 }}>{t.k}</div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55, marginBottom: 8 }}>{t.v}</div>
            <div style={{ fontFamily: MONO, fontSize: "0.74rem", color: SD, padding: "6px 10px", borderRadius: 4, background: `${SD}10`, border: `1px solid ${SD}33` }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>TYPICAL ·</span>
              <span style={{ color: "var(--eng-text)" }}>{t.typical}</span>
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

export default function SD_L6_CircuitBreakerActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Trip the Breaker", icon: <Zap className="w-4 h-4" />, content: <CircuitBreakerDemo /> },
    { id: "tune", label: "Tuning", icon: <Globe className="w-4 h-4" />, content: <Tuning /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why does an OPEN breaker fail requests instantly instead of forwarding them?",
      options: [
        "It's faster to fail.",
        "Forwarding requests to a known-failing downstream just adds latency for the caller and load for the dying service.",
        "Random.",
        "To save bandwidth.",
      ],
      correctIndex: 1,
      explanation: "Fast-fail protects both sides. The caller gets a quick error and can fall back; the downstream gets a chance to recover without a thundering herd of retries.",
    },
    {
      question: "What's the purpose of HALF-OPEN state?",
      options: [
        "Decoration.",
        "A controlled probe — let one (or a few) requests through to test if the downstream has recovered, before fully closing.",
        "To slow traffic.",
        "Replace logs.",
      ],
      correctIndex: 1,
      explanation: "If the breaker went straight from open → closed, the moment cooldown ends a flood of held-up traffic would slam the downstream. Half-open does a controlled probe instead.",
    },
    {
      question: "Cooldown is 60s. Failure threshold is 50% over 100 calls. Downstream recovers in 5s. What's the symptom?",
      options: [
        "Breaker behaves perfectly.",
        "Breaker stays open way longer than necessary; users see errors for 55 unnecessary seconds.",
        "Faster recovery.",
        "Memory leak.",
      ],
      correctIndex: 1,
      explanation: "Cooldown should match downstream recovery time. Too long means the breaker is overly conservative; too short and it flaps. Production default is 5-30s with adaptive tuning.",
    },
    {
      question: "Without a circuit breaker, what's the classic cascade failure pattern?",
      options: [
        "Database stops.",
        "Downstream slows → caller's threads block waiting → caller's thread pool exhausts → caller starts failing all requests → failure cascades upstream.",
        "Servers reboot.",
        "DNS dies.",
      ],
      correctIndex: 1,
      explanation: "The classic 'one slow dependency takes down the whole system'. The slow downstream holds threads; the thread pool fills; healthy traffic now also fails because there are no threads. Circuit breaker opens before threads exhaust.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Circuit Breakers"
      level={6}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The first answer in any 'how do you handle a failing downstream' question"
      onQuizComplete={onQuizComplete}
    />
  );
}

