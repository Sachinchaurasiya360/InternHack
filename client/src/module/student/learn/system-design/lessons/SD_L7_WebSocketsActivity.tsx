import { useEffect, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { Activity, BookOpen, Globe, Pause, Play, RotateCcw } from "lucide-react";
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

const PATTERNS = [
  {
    name: "Short polling",
    color: NEUTRAL,
    tagline: "client asks every N seconds",
    pro: "Trivial to implement. Stateless server.",
    con: "High latency (up to N), wasteful when there's nothing to send. Most polls return empty.",
    ex: "Old chat apps, status pages. Nearly extinct in modern apps.",
  },
  {
    name: "Long polling",
    color: WARN,
    tagline: "request held open until data arrives",
    pro: "Better latency than short polling. Works through proxies. No special protocol.",
    con: "Each connection holds a server thread/socket. Many users = many idle holds. Reconnect latency on each event.",
    ex: "Earlier Facebook chat, Slack fallback when WebSockets fail.",
  },
  {
    name: "WebSockets",
    color: SD,
    tagline: "persistent bidirectional connection",
    pro: "Lowest latency. Real-time bidirectional. One connection per user, not per event.",
    con: "Stateful server (sticky sessions or shared state). Connection-count scaling. Reconnect logic on the client.",
    ex: "Slack, Discord, WhatsApp Web, real-time multiplayer games.",
  },
  {
    name: "Server-Sent Events (SSE)",
    color: PURPLE,
    tagline: "one-way push from server to client",
    pro: "Simpler than WebSockets. Works over plain HTTP. Auto-reconnect built in.",
    con: "Server → client only. Can't push from client without a separate POST.",
    ex: "Stripe webhooks fallback, ChatGPT streaming responses, news tickers.",
  },
];

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>Four ways to push updates to a browser</h3>
      <p style={sectionDesc}>
        HTTP is request/response. Real-time apps need the server to push data to the client
        without being asked. Four patterns evolved, each with a different latency/cost trade.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"
      >
        {PATTERNS.map((p) => (
          <motion.div
            key={p.name}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "16px 18px", border: `1.5px solid ${p.color}55`, borderRadius: 10, background: `${p.color}08`, display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.95rem", marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: p.color, fontWeight: 700 }}>
                {p.tagline}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: "0.82rem", color: "var(--eng-text)" }}>
                <span style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginRight: 6 }}>PRO</span>
                {p.pro}
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--eng-text)" }}>
                <span style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800, color: WARN, letterSpacing: "0.1em", marginRight: 6 }}>CON</span>
                {p.con}
              </div>
            </div>
            <div style={{ fontFamily: MONO, fontSize: "0.74rem", color: p.color, paddingTop: 6, borderTop: `1px dashed ${p.color}33` }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{p.ex}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          THE 2026 DEFAULT
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          For interactive bidirectional flows: <b>WebSockets</b>. For one-way streams from server
          (notifications, live counters, AI streaming): <b>SSE</b>. Long polling is the
          fallback when neither is available (corporate proxies that strip WS upgrades).
          Short polling is essentially never the right answer in 2026 except for very-low-frequency status checks.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Three timelines under the same event stream                */
/* ================================================================== */

type Strategy = "short" | "long" | "ws";

interface Lane {
  id: Strategy;
  label: string;
  color: string;
}

const LANES: Lane[] = [
  { id: "short", label: "Short polling · poll every 2s", color: NEUTRAL },
  { id: "long", label: "Long polling · request held until event", color: WARN },
  { id: "ws", label: "WebSocket · persistent connection", color: SD },
];

interface Marker {
  t: number; // 0..100 (% of timeline)
  kind: "request" | "response" | "event" | "ws-msg";
}

const TIMELINE_S = 12;
const EVENTS_S = [3, 5.5, 9]; // seconds when server has data to send

function buildMarkers(strategy: Strategy): Marker[] {
  const marks: Marker[] = [];
  if (strategy === "short") {
    // Poll every 2s
    for (let t = 0; t <= TIMELINE_S; t += 2) {
      marks.push({ t: (t / TIMELINE_S) * 100, kind: "request" });
      const respT = Math.min(t + 0.15, TIMELINE_S);
      marks.push({ t: (respT / TIMELINE_S) * 100, kind: "response" });
    }
  } else if (strategy === "long") {
    // Long-poll: request opens, holds until next event, returns, immediately reopens
    let cursor = 0;
    while (cursor < TIMELINE_S) {
      marks.push({ t: (cursor / TIMELINE_S) * 100, kind: "request" });
      const nextEvent = EVENTS_S.find((e) => e > cursor) ?? TIMELINE_S;
      const respT = Math.min(nextEvent + 0.05, TIMELINE_S);
      marks.push({ t: (respT / TIMELINE_S) * 100, kind: "response" });
      cursor = respT + 0.1;
    }
  } else {
    // WebSocket: one open at t=0, then messages arrive whenever events happen
    marks.push({ t: 0, kind: "request" });
    for (const e of EVENTS_S) {
      marks.push({ t: (e / TIMELINE_S) * 100, kind: "ws-msg" });
    }
  }
  return marks;
}

function ThreeTimelines() {
  const [tNow, setTNow] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      setTNow((t) => {
        const next = t + 1;
        if (next >= 100) {
          setRunning(false);
          return 100;
        }
        return next;
      });
    }, TIMELINE_S * 10);
    return () => clearInterval(handle);
  }, [running]);

  const reset = () => {
    setTNow(0);
    setRunning(false);
  };

  // Stats
  const computeStats = (s: Strategy, t: number) => {
    const all = buildMarkers(s);
    const seen = all.filter((m) => m.t <= t);
    const reqs = seen.filter((m) => m.kind === "request").length;
    const resps = seen.filter((m) => m.kind === "response" || m.kind === "ws-msg").length;
    // Compute average latency from event to delivery
    const events = EVENTS_S;
    const latencies: number[] = [];
    for (const e of events) {
      const ePct = (e / TIMELINE_S) * 100;
      if (ePct > t) continue;
      const delivery = all.find((m) => (m.kind === "response" || m.kind === "ws-msg") && m.t >= ePct);
      if (delivery) latencies.push(((delivery.t - ePct) / 100) * TIMELINE_S * 1000);
    }
    const avgLatency = latencies.length === 0 ? 0 : latencies.reduce((a, b) => a + b, 0) / latencies.length;
    return { reqs, resps, avgLatency };
  };

  return (
    <div>
      <h3 style={sectionTitle}>Three patterns. Same event stream. Watch latency and cost.</h3>
      <p style={sectionDesc}>
        Server has data to push at t=3s, t=5.5s, and t=9s. Each lane shows how that pattern
        delivers. Counters track requests sent and average end-to-end latency.
      </p>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 18 }}>
        {LANES.map((lane) => {
          const markers = buildMarkers(lane.id);
          const stats = computeStats(lane.id, tNow);
          return (
            <div key={lane.id} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontFamily: MONO, fontSize: "0.74rem", fontWeight: 700, color: lane.color }}>{lane.label}</span>
                <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
                  reqs: <span style={{ color: lane.color, fontWeight: 700 }}>{stats.reqs}</span>
                  {" · "}
                  avg latency: <span style={{ color: stats.avgLatency > 1000 ? WARN : SD, fontWeight: 700 }}>{stats.avgLatency.toFixed(0)}ms</span>
                </span>
              </div>
              <div style={{ position: "relative", height: 36, background: `${lane.color}10`, borderRadius: 6, border: `1px solid ${lane.color}33` }}>
                {/* event markers (server has data) */}
                {EVENTS_S.map((e) => {
                  const pct = (e / TIMELINE_S) * 100;
                  if (pct > tNow) return null;
                  return (
                    <motion.div
                      key={`evt-${e}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        position: "absolute",
                        left: `${pct}%`,
                        top: 0,
                        bottom: 0,
                        width: 2,
                        background: WARN,
                        boxShadow: `0 0 6px ${WARN}`,
                      }}
                    />
                  );
                })}
                {/* request / response markers */}
                {markers.map((m, i) => {
                  if (m.t > tNow) return null;
                  if (m.kind === "request") {
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ position: "absolute", left: `${m.t}%`, top: 4, transform: "translateX(-50%)", fontFamily: MONO, fontSize: "0.7rem", color: lane.color, fontWeight: 700 }}
                      >
                        ↑
                      </motion.div>
                    );
                  }
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ position: "absolute", left: `${m.t}%`, bottom: 4, transform: "translateX(-50%)", fontFamily: MONO, fontSize: "0.7rem", color: lane.color, fontWeight: 700 }}
                    >
                      {m.kind === "ws-msg" ? "●" : "↓"}
                    </motion.div>
                  );
                })}
                {/* current time cursor */}
                <motion.div
                  animate={{ left: `${tNow}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  style={{ position: "absolute", top: 0, bottom: 0, width: 1, background: lane.color, opacity: 0.4 }}
                />
              </div>
            </div>
          );
        })}

        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setRunning((r) => !r)} style={btn(SD)}>
            {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {running ? "pause" : tNow >= 100 ? "replay" : tNow > 0 ? "resume" : "play"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
            t = <span style={{ color: SD, fontWeight: 700 }}>{((tNow / 100) * TIMELINE_S).toFixed(1)}s</span> / {TIMELINE_S}s
          </span>
        </div>

        <div style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}>
          <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
            LEGEND
          </span>
          <span style={{ color: WARN }}>│</span> server event &nbsp;
          <span style={{ color: SD }}>↑</span> client request &nbsp;
          <span style={{ color: SD }}>↓</span> server response &nbsp;
          <span style={{ color: SD }}>●</span> WebSocket message
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
/*  TAB 3 - Scaling considerations                                     */
/* ================================================================== */

const SCALE = [
  { k: "Connection-count limits", v: "A single Linux box typically tops out around 50k-100k concurrent WebSockets. To serve 5M users, you need 50+ connection servers behind a sticky load balancer." },
  { k: "Sticky sessions", v: "WebSockets are stateful. The LB must route reconnects to the same server (or use a shared pub/sub like Redis to fan out across servers)." },
  { k: "Heartbeats / ping-pong", v: "TCP doesn't tell you when the user closes the laptop lid. Send pings every 30s; close the connection on missed pongs to free resources." },
  { k: "Reconnection logic", v: "Exponential backoff with jitter. When 100k clients reconnect after a brief outage, the LB needs to absorb a thundering herd." },
  { k: "Backpressure", v: "Slow client = WebSocket buffer fills on the server. Drop oldest, close connection, or apply per-client rate limit. Without it, one bad client can OOM the server." },
  { k: "Auth & authorization", v: "Standard pattern: HTTP authenticates, returns a short-lived token. Token sent in the WS handshake; server verifies and pins user-id to the connection." },
];

function Scaling() {
  return (
    <div>
      <h3 style={sectionTitle}>Scaling WebSockets to millions of users</h3>
      <p style={sectionDesc}>
        WebSockets are dramatically more efficient per message than HTTP polling, but each open
        connection still costs a file descriptor and some RAM. Six things production systems get
        right.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {SCALE.map((s) => (
          <motion.div
            key={s.k}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginBottom: 6 }}>
              {s.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{s.v}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L7_WebSocketsActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "lanes", label: "Three Timelines", icon: <Activity className="w-4 h-4" />, content: <ThreeTimelines /> },
    { id: "scale", label: "Scaling", icon: <Globe className="w-4 h-4" />, content: <Scaling /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "WebSockets are ideal for chat. Why do they generally beat long polling?",
      options: [
        "WebSockets compress messages.",
        "One persistent connection per user, not one per message. Lower per-event latency, fewer requests, less server overhead.",
        "WebSockets are encrypted; long polling isn't.",
        "Long polling is deprecated.",
      ],
      correctIndex: 1,
      explanation: "Long polling reopens a request for every event. WebSockets stay open. For a busy chat with one event/second, long polling = 60 connections/min/user; WebSocket = 1 connection.",
    },
    {
      question: "ChatGPT streams its response token-by-token. Best fit?",
      options: [
        "Short polling.",
        "Long polling.",
        "Server-Sent Events (SSE) — one-way push from server, simpler than WebSockets, works over plain HTTP.",
        "Direct file write.",
      ],
      correctIndex: 2,
      explanation: "Streaming a server-generated response is one-way; SSE handles it perfectly with auto-reconnect and standard HTTP. WebSockets work too but are overkill since the client doesn't need to push mid-stream.",
    },
    {
      question: "You scale WebSocket users from 10k to 5M. What's the FIRST infrastructure change?",
      options: [
        "Bigger CPUs.",
        "Multiple connection servers behind a sticky load balancer; per-server limit of ~100k WS connections.",
        "More disks.",
        "Switch to short polling.",
      ],
      correctIndex: 1,
      explanation: "Each server hits a connection-count ceiling well before CPU/disk become the issue. Horizontal scale-out with sticky LB routing is the standard answer. Inter-server pub/sub (Redis) handles cross-server fan-out.",
    },
    {
      question: "Why do production WebSocket servers send heartbeat pings every 30s?",
      options: [
        "Decoration.",
        "TCP doesn't reliably detect a client that disappeared (closed laptop, dead WiFi). Pings + missed-pong timeout free server resources for stale connections.",
        "To compress data.",
        "To rotate keys.",
      ],
      correctIndex: 1,
      explanation: "Without heartbeats, a server can hold thousands of connections to long-gone clients, eating file descriptors. Periodic pings + a strict pong timeout cleanly evict them.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="WebSockets vs Long Polling"
      level={7}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'how do you push real-time updates' answer in any chat / live system"
      onQuizComplete={onQuizComplete}
    />
  );
}

