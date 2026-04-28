import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Share2, Shuffle, Activity, Heart, Play, Pause, RotateCcw,
  AlertTriangle,
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
  cardHover,
} from "./_shared/styles";

/* ================================================================== */
/*  TAB 1 - Why + algorithm visualizer                                 */
/* ================================================================== */

type Algo = "round-robin" | "least-conn" | "ip-hash" | "weighted";

interface ServerState {
  id: string;
  color: string;
  weight: number;
  active: number; // current in-flight reqs
  served: number; // total served
}

const INITIAL_SERVERS = (): ServerState[] => [
  { id: "A", color: "#6366f1", weight: 1, active: 0, served: 0 },
  { id: "B", color: "#10b981", weight: 1, active: 0, served: 0 },
  { id: "C", color: "#f59e0b", weight: 3, active: 0, served: 0 },  // heavier box
  { id: "D", color: "#ec4899", weight: 1, active: 0, served: 0 },
];

function AlgorithmLab() {
  const [algo, setAlgo] = useState<Algo>("round-robin");
  const [servers, setServers] = useState<ServerState[]>(INITIAL_SERVERS());
  const [running, setRunning] = useState(false);
  const [reqCount, setReqCount] = useState(0);
  const rrIdx = useRef(0);
  const hashCounter = useRef(0);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      setServers((prev) => {
        const next = prev.map((s) => ({ ...s }));
        let target: ServerState | undefined;

        if (algo === "round-robin") {
          target = next[rrIdx.current % next.length];
          rrIdx.current++;
        } else if (algo === "least-conn") {
          target = [...next].sort((a, b) => a.active - b.active)[0];
        } else if (algo === "ip-hash") {
          // Simulate a small pool of repeat clients so the same client
          // consistently lands on the same server - the actual invariant IP-hash provides.
          const NUM_CLIENTS = 5;
          const clientId = Math.floor(Math.random() * NUM_CLIENTS);
          hashCounter.current = clientId; // keep ref alive (used only for clarity)
          target = next[clientId % next.length];
        } else if (algo === "weighted") {
          // expand by weight
          const pool: ServerState[] = [];
          next.forEach((s) => { for (let i = 0; i < s.weight; i++) pool.push(s); });
          target = pool[Math.floor(Math.random() * pool.length)];
        }

        if (target) {
          target.active++;
          target.served++;
        }
        return next;
      });
      setReqCount((c) => c + 1);

      // drain old requests after a delay
      setTimeout(() => {
        setServers((prev) => prev.map((s) => ({ ...s, active: Math.max(0, s.active - 1) })));
      }, algo === "least-conn" ? 700 + Math.random() * 1500 : 600);
    }, 400);
    return () => clearInterval(t);
  }, [running, algo]);

  function reset() {
    setRunning(false);
    setServers(INITIAL_SERVERS());
    setReqCount(0);
    rrIdx.current = 0;
    hashCounter.current = 0;
  }

  const ALGOS: { id: Algo; label: string; desc: string }[] = [
    { id: "round-robin", label: "Round Robin",       desc: "Rotate through servers in order. Simple, works when servers are equal." },
    { id: "least-conn",  label: "Least Connections", desc: "Send next request to whichever server has fewest active requests. Good when request durations vary." },
    { id: "ip-hash",     label: "IP Hash",           desc: "Hash the client IP → always route same client to same server. Useful for sticky sessions." },
    { id: "weighted",    label: "Weighted",          desc: "Distribute proportional to server capacity (weight). Server C has weight 3 - gets 3× the traffic." },
  ];

  const cur = ALGOS.find((a) => a.id === algo)!;
  const total = servers.reduce((sum, s) => sum + s.served, 0) || 1;

  return (
    <div>
      <h3 style={sectionTitle}>The 4 load-balancing algorithms you must know</h3>
      <p style={sectionDesc}>
        A load balancer&rsquo;s entire job is <em>pick a backend</em>. How it picks separates a
        simple LB from a production-grade one. Flip between algorithms below and watch the
        distribution change.
      </p>

      {/* Algorithm picker */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 14 }}>
        {ALGOS.map((a) => {
          const on = a.id === algo;
          return (
            <button
              key={a.id}
              onClick={() => { reset(); setAlgo(a.id); }}
              style={{
                padding: "10px 8px", borderRadius: 10, cursor: "pointer",
                border: on ? `1.5px solid ${SD}` : "1.5px solid var(--eng-border)",
                background: on ? SD_SOFT : "var(--eng-bg-subtle)",
                fontFamily: "var(--eng-font)", fontWeight: 700, fontSize: "0.82rem",
                color: on ? SD : "var(--eng-text-muted)",
                textAlign: "center",
              }}
            >
              {a.label}
            </button>
          );
        })}
      </div>

      <div
        style={{
          border: `1.5px solid ${SD}`, borderRadius: 10, padding: "10px 14px",
          background: SD_SOFT, marginBottom: 14, fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.5,
        }}
      >
        <span style={{ fontWeight: 700, color: SD }}>{cur.label}: </span>
        {cur.desc}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <button
          onClick={() => setRunning((r) => !r)}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 14px", borderRadius: 8, border: `1.5px solid ${SD}`,
            background: running ? SD : "transparent", color: running ? "#fff" : SD,
            fontFamily: "var(--eng-font)", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
          }}
        >
          {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          {running ? "Pause" : "Send traffic"}
        </button>
        <button
          onClick={reset}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 12px", borderRadius: 8, border: "1.5px solid var(--eng-border)",
            background: "transparent", color: "var(--eng-text-muted)",
            fontFamily: "var(--eng-font)", fontSize: "0.8rem", cursor: "pointer",
          }}
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
        <span style={{ fontFamily: MONO, fontSize: "0.78rem", color: "var(--eng-text-muted)" }}>
          Total dispatched: {reqCount}
        </span>
      </div>

      {/* Server grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}
      >
        {servers.map((s) => {
          const pct = (s.served / total) * 100;
          return (
            <motion.div
              key={s.id}
              variants={cardEntrance}
              whileHover={cardHover}
              style={{
                border: `1.5px solid ${s.color}`, borderRadius: 10,
                background: `${s.color}10`, padding: "12px 14px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontFamily: MONO, fontSize: "0.95rem", fontWeight: 800, color: s.color }}>
                  Server {s.id}
                </span>
                {algo === "weighted" && (
                  <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: "var(--eng-text-muted)" }}>
                    w={s.weight}
                  </span>
                )}
              </div>
              <div style={{ fontFamily: MONO, fontSize: "0.72rem", color: "var(--eng-text-muted)", marginBottom: 4 }}>
                active: <b style={{ color: s.color }}>{s.active}</b> · served: <b style={{ color: "var(--eng-text)" }}>{s.served}</b>
              </div>
              <div style={{ height: 6, background: "var(--eng-bg)", borderRadius: 3, overflow: "hidden", border: "1px solid var(--eng-border)" }}>
                <div style={{ width: `${pct}%`, height: "100%", background: s.color, transition: "width 300ms" }} />
              </div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: "var(--eng-text-muted)", marginTop: 4, textAlign: "right" }}>
                {pct.toFixed(0)}%
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - L4 vs L7                                                   */
/* ================================================================== */

function Layers4vs7() {
  return (
    <div>
      <h3 style={sectionTitle}>Load balancers come in two flavors: L4 and L7</h3>
      <p style={sectionDesc}>
        You&rsquo;ll hear &ldquo;Layer 4&rdquo; and &ldquo;Layer 7&rdquo; constantly. They refer to
        the OSI layer the LB operates at. L4 works at the transport layer (TCP). L7 works at the
        application layer (HTTP). The tradeoffs matter.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {[
          {
            label: "Layer 4 (Transport)",
            color: "#8b5cf6",
            sees: "Source IP, dest IP, ports, protocol. Nothing above that.",
            cant: "Can't look inside the packet. No idea what URL was requested.",
            pros: ["Extremely fast - just forwards packets", "Low CPU, low latency overhead", "Works for any TCP/UDP protocol"],
            cons: ["Can't route on URL path, headers, or cookies - doesn't parse HTTP", "TLS passthrough or termination is possible, but content-aware rules aren't"],
            examples: "AWS NLB, HAProxy (TCP mode), Nginx stream",
          },
          {
            label: "Layer 7 (Application)",
            color: "#10b981",
            sees: "The full HTTP request - method, path, headers, cookies.",
            cant: "Slightly slower because it terminates TCP and parses HTTP.",
            pros: ["Routes by URL: /api/* → API tier, /images/* → CDN origin", "Handles TLS termination, request rewriting, auth", "Can do sticky sessions by cookie"],
            cons: ["Higher CPU per request", "Protocol-specific (HTTP/gRPC/WebSocket/etc.) - not a generic TCP forwarder"],
            examples: "AWS ALB, Nginx, Envoy, Cloudflare",
          },
        ].map((c) => (
          <div
            key={c.label}
            style={{
              border: `1.5px solid ${c.color}`, borderRadius: 12,
              background: `${c.color}10`, padding: "16px 20px",
            }}
          >
            <div style={{ fontSize: "1.02rem", fontWeight: 800, color: c.color, marginBottom: 8 }}>
              {c.label}
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--eng-text)", lineHeight: 1.5, marginBottom: 6 }}>
              <b>Sees: </b>{c.sees}
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--eng-text-muted)", lineHeight: 1.5, marginBottom: 10 }}>
              <b>Limit: </b>{c.cant}
            </div>
            <div style={{ fontFamily: MONO, fontSize: "0.68rem", color: c.color, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 4 }}>PROS</div>
            <ul style={{ margin: "0 0 10px", paddingLeft: 16, fontSize: "0.82rem", color: "var(--eng-text)", lineHeight: 1.6 }}>
              {c.pros.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <div style={{ fontFamily: MONO, fontSize: "0.68rem", color: SD, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 4 }}>CONS</div>
            <ul style={{ margin: "0 0 10px", paddingLeft: 16, fontSize: "0.82rem", color: "var(--eng-text)", lineHeight: 1.6 }}>
              {c.cons.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <div
              style={{
                fontFamily: MONO, fontSize: "0.76rem", padding: "6px 10px", borderRadius: 6,
                background: "var(--eng-bg)", border: `1px solid ${c.color}40`,
                color: "var(--eng-text)",
              }}
            >
              <span style={{ color: c.color, fontWeight: 700 }}>examples: </span>{c.examples}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - Health checks + sticky sessions                            */
/* ================================================================== */

function Essentials() {
  return (
    <div>
      <h3 style={sectionTitle}>The 3 things an LB does beyond routing</h3>
      <p style={sectionDesc}>
        A real LB isn&rsquo;t just a traffic splitter. It&rsquo;s the thing standing between a dead
        backend and your users. Three features make it production-ready.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 22 }}>
        {[
          {
            icon: <Heart className="w-5 h-5" />,
            color: SD,
            title: "Health checks",
            body: "LB pings every backend every few seconds (e.g., GET /healthz). If the box fails N checks in a row, it&rsquo;s marked unhealthy and removed from rotation. When it recovers, it rejoins. This is how you get zero-downtime deploys - take a box out, ship, health-check it back in.",
            detail: "Interval: 5–30s · Failures before eviction: usually 2–3 · Keep the LB endpoint shallow - just &ldquo;is this process alive?&rdquo; Deep checks that ping the DB/cache can cascade-evict your whole fleet during a dependency blip.",
          },
          {
            icon: <Share2 className="w-5 h-5" />,
            color: "#8b5cf6",
            title: "Sticky sessions (session affinity)",
            body: "Normally the LB may route you to any backend. But if that backend holds session state in memory, you MUST hit the same box every time - else you appear logged-out. Sticky sessions pin a client (by cookie or IP hash) to one backend. Use it as a last resort - externalizing state is better.",
            detail: "Cookie-based is safer than IP-based (proxies, NAT make IPs unreliable). Breaks cleanly when a box dies - user loses session.",
          },
          {
            icon: <Activity className="w-5 h-5" />,
            color: "#10b981",
            title: "TLS termination",
            body: "HTTPS decryption is CPU-heavy. Doing it on every backend is wasteful. Instead, the LB terminates TLS - it holds the cert, decrypts once, then forwards plain HTTP to backends inside the private network. Backends stay simple.",
            detail: "This is why ALBs, Nginx, and Cloudflare sit in front of almost every production app. Cert rotation happens in one place.",
          },
        ].map((f) => (
          <div
            key={f.title}
            style={{
              display: "grid", gridTemplateColumns: "44px 1fr", gap: 14,
              padding: "14px 16px", borderRadius: 10,
              border: `1.5px solid ${f.color}`, background: `${f.color}10`,
            }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 8, background: f.color, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {f.icon}
            </div>
            <div>
              <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--eng-text)", marginBottom: 4 }}>
                {f.title}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--eng-text-muted)", lineHeight: 1.55, marginBottom: 6 }}>
                {f.body}
              </div>
              <div style={{ fontFamily: MONO, fontSize: "0.76rem", color: "var(--eng-text-muted)", padding: "6px 10px", background: "var(--eng-bg)", border: "1px solid var(--eng-border)", borderRadius: 6 }}>
                {f.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "14px 18px", borderRadius: 10,
          border: `1.5px solid ${SD}`, background: SD_SOFT,
          display: "flex", gap: 10, alignItems: "flex-start",
        }}
      >
        <AlertTriangle className="w-5 h-5 shrink-0" style={{ color: SD, marginTop: 2 }} />
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          <b>The SPOF trap:</b> you added a load balancer for redundancy - but now the LB itself is
          the single point of failure. Production systems run the LB in pairs (active/passive or
          active/active) with shared IPs. Cloud LBs (ALB, GCLB) hide this behind the scenes.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MAIN                                                                */
/* ================================================================== */

export default function SD_L2_LoadBalancingActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "algos",  label: "Algorithms", icon: <Shuffle className="w-4 h-4" />, content: <AlgorithmLab /> },
    { id: "layer",  label: "L4 vs L7", icon: <Share2 className="w-4 h-4" />, content: <Layers4vs7 /> },
    { id: "health", label: "Health & Essentials", icon: <Heart className="w-4 h-4" />, content: <Essentials /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "You have 4 identical backend servers. Which algorithm is simplest and fair under steady traffic?",
      options: ["IP Hash", "Round Robin", "Weighted", "Random"],
      correctIndex: 1,
      explanation: "Round Robin rotates through them evenly. It only breaks down when servers have different capacity OR request durations vary a lot - then Least Connections or Weighted wins.",
    },
    {
      question: "Your backends have in-memory session data. Which algorithm keeps a user hitting the same server?",
      options: ["Round Robin", "Least Connections", "IP Hash (or cookie-based sticky)", "Random"],
      correctIndex: 2,
      explanation: "IP Hash deterministically maps client → server. Cookie-based sticky is better (IPs are unreliable behind NAT/proxies), but both achieve affinity.",
    },
    {
      question: "A Layer 7 load balancer can do something a Layer 4 one cannot. What?",
      options: [
        "Handle TCP traffic",
        "Route requests based on URL path or HTTP headers",
        "Forward packets",
        "Listen on port 80",
      ],
      correctIndex: 1,
      explanation: "L4 only sees IPs and ports. L7 terminates TCP, parses HTTP, and can route /api/* to one pool and /static/* to another.",
    },
    {
      question: "What is the purpose of a health check?",
      options: [
        "Measure user happiness",
        "Test the LB's own CPU",
        "Periodically verify each backend is alive; take unhealthy ones out of rotation",
        "Check SSL certificate expiry",
      ],
      correctIndex: 2,
      explanation: "Health checks (e.g., GET /healthz every 5s) let the LB route away from dead backends automatically. This is the mechanism behind zero-downtime deploys.",
    },
    {
      question: "You added a load balancer in front of 3 servers. What&rsquo;s the NEW single point of failure?",
      options: [
        "The database",
        "The load balancer itself - unless run in a pair",
        "One of the backends",
        "The DNS server",
      ],
      correctIndex: 1,
      explanation: "One LB in front of N backends = the LB is now the SPOF. Production runs LBs in pairs (active/passive or active/active). Cloud LBs like ALB handle this for you.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Load Balancing Basics"
      level={2}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The first box you draw after the client in any HLD diagram"
      onQuizComplete={onQuizComplete}
    />
  );
}
