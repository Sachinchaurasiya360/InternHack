import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server, Database, Key, Cookie, AlertTriangle, Check, X, Power, ArrowRight,
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

const OK = "#10b981";
const WARN = "#f59e0b";
const PURPLE = "#8b5cf6";

/* ================================================================== */
/*  TAB 1 - The definition (send to any / send to one)                  */
/* ================================================================== */

function Definition() {
  const [mode, setMode] = useState<"stateless" | "stateful">("stateless");
  const [targetIdx, setTargetIdx] = useState<number | null>(null);

  // For "stateful": assume session lives on server #1 (index 0).
  const sessionHost = 0;

  function sendTo(i: number) {
    setTargetIdx(i);
    window.setTimeout(() => setTargetIdx(null), 1400);
  }

  function result(i: number): "ok" | "fail" | null {
    if (targetIdx !== i) return null;
    if (mode === "stateless") return "ok";
    return i === sessionHost ? "ok" : "fail";
  }

  return (
    <div>
      <h3 style={sectionTitle}>Can any server answer this request?</h3>
      <p style={sectionDesc}>
        A service is <b>stateless</b> if every request carries everything the server needs. Any
        of the N servers can answer - pick one at random and it works. A service is{" "}
        <b>stateful</b> if the server holds memory between your requests (a session). Now only{" "}
        <em>one specific</em> server can answer you - the one that remembers you.
      </p>

      {/* Mode switch */}
      <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
        {(["stateless", "stateful"] as const).map((m) => {
          const active = mode === m;
          return (
            <button
              key={m}
              onClick={() => setMode(m)}
              style={{
                padding: "8px 14px", borderRadius: 8, cursor: "pointer",
                fontFamily: "var(--eng-font)", fontSize: "0.88rem", fontWeight: 600,
                border: `1.5px solid ${active ? SD : "var(--eng-border)"}`,
                background: active ? SD_SOFT : "var(--eng-surface)",
                color: active ? SD : "var(--eng-text-muted)",
              }}
            >
              {m === "stateless" ? "Stateless mode" : "Stateful mode"}
            </button>
          );
        })}
      </div>

      {/* Diagram: client + 3 servers */}
      <div
        style={{
          padding: 18, borderRadius: 12, background: "var(--eng-surface)",
          border: "1px solid var(--eng-border)", marginBottom: 14,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 22, alignItems: "center" }}>
          {/* Client */}
          <div
            style={{
              padding: "14px 16px", borderRadius: 10, textAlign: "center",
              border: `2px solid ${PURPLE}`, background: "var(--eng-surface-alt)", minWidth: 90,
            }}
          >
            <div style={{ fontSize: "0.72rem", color: "var(--eng-text-muted)", marginBottom: 4 }}>CLIENT</div>
            <div style={{ fontFamily: MONO, fontWeight: 700, color: "var(--eng-text)" }}>You</div>
            {mode === "stateful" && (
              <div
                style={{
                  marginTop: 6, fontSize: "0.7rem", color: WARN, fontFamily: MONO,
                }}
              >
                session → S1
              </div>
            )}
          </div>

          {/* Servers grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {[0, 1, 2].map((i) => {
              const res = result(i);
              const holds = mode === "stateful" && i === sessionHost;
              const borderColor =
                res === "ok" ? OK : res === "fail" ? SD : holds ? WARN : "var(--eng-border)";
              const bg =
                res === "ok" ? "rgba(16,185,129,0.10)"
                : res === "fail" ? SD_SOFT
                : holds ? "rgba(245,158,11,0.08)"
                : "var(--eng-surface-alt)";
              return (
                <button
                  key={i}
                  onClick={() => sendTo(i)}
                  style={{
                    padding: "14px 10px", borderRadius: 10, cursor: "pointer",
                    border: `2px solid ${borderColor}`, background: bg,
                    textAlign: "center", transition: "all 160ms",
                  }}
                >
                  <Server className="w-5 h-5 mx-auto" style={{ color: borderColor === "var(--eng-border)" ? "var(--eng-text-muted)" : borderColor, marginBottom: 4 }} />
                  <div style={{ fontFamily: MONO, fontWeight: 700, color: "var(--eng-text)" }}>
                    S{i + 1}
                  </div>
                  {holds && (
                    <div style={{ fontSize: "0.65rem", color: WARN, marginTop: 3, fontFamily: mono }}>
                      holds session
                    </div>
                  )}
                  {res === "ok" && (
                    <div style={{ fontSize: "0.7rem", color: OK, marginTop: 4, fontWeight: 700 }}>
                      ✓ 200 OK
                    </div>
                  )}
                  {res === "fail" && (
                    <div style={{ fontSize: "0.7rem", color: SD, marginTop: 4, fontWeight: 700 }}>
                      ✗ 401 no session
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <p
          style={{
            marginTop: 14, fontSize: "0.82rem", color: "var(--eng-text-muted)",
            textAlign: "center", fontStyle: "italic",
          }}
        >
          Click any server to send a request.
        </p>
      </div>

      {/* Takeaways */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div
          style={{
            padding: 14, borderRadius: 10, background: "rgba(16,185,129,0.08)",
            border: `1.5px solid ${OK}`,
          }}
        >
          <div style={{ fontWeight: 700, color: OK, marginBottom: 6 }}>Stateless</div>
          <div style={{ fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
            Every request is self-contained. The load balancer can send you to any server. Any
            server can die without hurting you. <b>This is the model we want.</b>
          </div>
        </div>
        <div
          style={{
            padding: 14, borderRadius: 10, background: SD_SOFT,
            border: `1.5px solid ${SD}`,
          }}
        >
          <div style={{ fontWeight: 700, color: SD, marginBottom: 6 }}>Stateful</div>
          <div style={{ fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
            The server remembers you. Requests must come back to the same box - a hidden
            coupling between client and server. Kills horizontal scaling and fault tolerance.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Kill a server demo                                          */
/* ================================================================== */

function KillServer() {
  const [mode, setMode] = useState<"stateless" | "stateful">("stateless");
  const [dead, setDead] = useState<Set<number>>(new Set());
  const sessionHost = 1; // session lives on S2

  function kill(i: number) {
    setDead((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  function reset() {
    setDead(new Set());
  }

  const alive = [0, 1, 2, 3].filter((i) => !dead.has(i));
  const sessionAlive = !dead.has(sessionHost);

  const stillWorks =
    mode === "stateless" ? alive.length > 0 : sessionAlive;

  return (
    <div>
      <h3 style={sectionTitle}>Why statelessness unlocks horizontal scaling</h3>
      <p style={sectionDesc}>
        Horizontal scaling means <em>one server dies, the rest pick up the load</em>. But that
        only works if any server can answer. If your user&rsquo;s session lives on the dead
        box&hellip; they&rsquo;re logged out.
      </p>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {(["stateless", "stateful"] as const).map((m) => {
          const active = mode === m;
          return (
            <button
              key={m}
              onClick={() => { setMode(m); reset(); }}
              style={{
                padding: "8px 14px", borderRadius: 8, cursor: "pointer",
                fontFamily: "var(--eng-font)", fontSize: "0.88rem", fontWeight: 600,
                border: `1.5px solid ${active ? SD : "var(--eng-border)"}`,
                background: active ? SD_SOFT : "var(--eng-surface)",
                color: active ? SD : "var(--eng-text-muted)",
              }}
            >
              {m === "stateless" ? "Stateless fleet" : "Stateful fleet"}
            </button>
          );
        })}
        <button
          onClick={reset}
          style={{
            padding: "8px 14px", borderRadius: 8, cursor: "pointer",
            fontFamily: "var(--eng-font)", fontSize: "0.85rem",
            border: "1.5px solid var(--eng-border)", background: "var(--eng-surface)",
            color: "var(--eng-text-muted)", marginLeft: "auto",
          }}
        >
          Reset fleet
        </button>
      </div>

      {/* Fleet */}
      <div
        style={{
          padding: 18, borderRadius: 12, background: "var(--eng-surface)",
          border: "1px solid var(--eng-border)", marginBottom: 14,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10 }}>
          {[0, 1, 2, 3].map((i) => {
            const isDead = dead.has(i);
            const holdsSession = mode === "stateful" && i === sessionHost;
            const borderColor = isDead ? "var(--eng-border)" : holdsSession ? WARN : OK;
            return (
              <button
                key={i}
                onClick={() => kill(i)}
                style={{
                  padding: "14px 10px", borderRadius: 10, cursor: "pointer",
                  border: `2px solid ${borderColor}`,
                  background: isDead ? "var(--eng-surface-alt)" : holdsSession ? "rgba(245,158,11,0.08)" : "rgba(16,185,129,0.08)",
                  opacity: isDead ? 0.45 : 1, position: "relative",
                  textAlign: "center", transition: "all 160ms",
                }}
              >
                <Server
                  className="w-5 h-5 mx-auto"
                  style={{ color: isDead ? "var(--eng-text-muted)" : holdsSession ? WARN : OK, marginBottom: 4 }}
                />
                <div style={{ fontFamily: MONO, fontWeight: 700, color: "var(--eng-text)" }}>
                  S{i + 1}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem", marginTop: 4, fontFamily: MONO,
                    color: isDead ? SD : OK, fontWeight: 700,
                  }}
                >
                  {isDead ? "DOWN" : "HEALTHY"}
                </div>
                {holdsSession && !isDead && (
                  <div style={{ fontSize: "0.65rem", color: WARN, marginTop: 2, fontFamily: mono }}>
                    has your session
                  </div>
                )}
                {holdsSession && isDead && (
                  <div style={{ fontSize: "0.65rem", color: SD, marginTop: 2, fontFamily: mono }}>
                    session lost
                  </div>
                )}
              </button>
            );
          })}
        </div>
        <p
          style={{
            marginTop: 14, fontSize: "0.82rem", color: "var(--eng-text-muted)",
            textAlign: "center", fontStyle: "italic",
          }}
        >
          Click a server to simulate it crashing. Click again to bring it back.
        </p>
      </div>

      {/* Verdict */}
      <div
        style={{
          padding: "14px 16px", borderRadius: 10,
          background: stillWorks ? "rgba(16,185,129,0.10)" : SD_SOFT,
          border: `1.5px solid ${stillWorks ? OK : SD}`,
          display: "flex", gap: 10, alignItems: "flex-start",
        }}
      >
        {stillWorks
          ? <Check className="w-5 h-5 shrink-0" style={{ color: OK, marginTop: 2 }} />
          : <Power className="w-5 h-5 shrink-0" style={{ color: SD, marginTop: 2 }} />}
        <div style={{ fontSize: "0.9rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          {mode === "stateless"
            ? (alive.length === 0
                ? <><b>Total outage.</b> Every server is down. Nothing stateless can fix this.</>
                : <><b>User keeps working.</b> {alive.length}/4 servers healthy - the load balancer routes around the dead ones. <em>Any</em> surviving box can answer.</>)
            : (sessionAlive
                ? <><b>User still logged in.</b> S2 (the box holding their session) is alive. But you&rsquo;re one crash away from disaster.</>
                : <><b>User logged out.</b> The one server that remembered them just died. The other {alive.length} healthy servers are useless to this user - they don&rsquo;t have the session.</>)}
        </div>
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
          <b>The unlock:</b> horizontal scaling = more boxes. But &ldquo;more boxes&rdquo; only
          helps if any box can serve any user. That&rsquo;s why senior engineers obsess over
          making services stateless - it&rsquo;s the precondition for everything else.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - Where state actually lives                                  */
/* ================================================================== */

type Strategy = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  how: string;
  pros: string[];
  cons: string[];
  verdict: string;
};

const STRATEGIES: Strategy[] = [
  {
    id: "redis",
    title: "External session store (Redis / Memcached)",
    subtitle: "Classic answer - move state out of the server",
    icon: <Database className="w-5 h-5" />,
    color: OK,
    how: "App servers stay stateless. On login, store session in Redis keyed by session-id. Every request looks up Redis.",
    pros: ["Any app server can answer", "Servers can die without logging anyone out", "Session survives deploys"],
    cons: ["Redis becomes critical infrastructure", "One extra network hop per request", "Now you need to scale Redis too"],
    verdict: "Default choice at most companies. Simple, proven, scales well.",
  },
  {
    id: "jwt",
    title: "JWT (self-contained tokens)",
    subtitle: "No server-side storage at all",
    icon: <Key className="w-5 h-5" />,
    color: PURPLE,
    how: "Server signs a token containing user id + claims. Client sends it on every request. Server verifies the signature - no lookup needed.",
    pros: ["Zero server-side state - truly stateless", "No session-store to scale", "Great for mobile and microservices"],
    cons: ["Can't revoke before expiry (without a blocklist)", "Token size grows with claims", "Rotating signing keys is tricky"],
    verdict: "Great for APIs and microservices. Risky for high-stakes sessions that need instant revocation.",
  },
  {
    id: "db",
    title: "Database-backed sessions",
    subtitle: "Sessions in the main DB",
    icon: <Database className="w-5 h-5" />,
    color: WARN,
    how: "Session row in a sessions table, keyed by session-id. Every request reads one row.",
    pros: ["No new infrastructure", "Easy to query / audit / revoke"],
    cons: ["High read volume on your main DB", "Slower than Redis", "DB becomes hotspot"],
    verdict: "Fine for small apps. Most teams move to Redis once traffic grows.",
  },
  {
    id: "sticky",
    title: "Sticky sessions (on the load balancer)",
    subtitle: "Escape hatch - keep state on the server but pin the user",
    icon: <Cookie className="w-5 h-5" />,
    color: SD,
    how: "Load balancer routes the same user to the same server every time (cookie or IP hash). The server holds the session in local memory.",
    pros: ["Simplest possible - no extra infra", "Fastest - zero lookups", "Works for legacy apps"],
    cons: ["Server dies = session lost", "Uneven load across servers", "Hard to deploy / restart without breaking users"],
    verdict: "Last resort. Use only when making the app stateless isn't feasible.",
  },
];

function WhereStateLives() {
  const [open, setOpen] = useState<string>("redis");

  return (
    <div>
      <h3 style={sectionTitle}>If the server can&rsquo;t hold state&hellip; where does it go?</h3>
      <p style={sectionDesc}>
        &ldquo;Stateless&rdquo; doesn&rsquo;t mean state disappears - it means state moves
        <em> out </em>of the app server. Four common places to put it, each with sharp tradeoffs.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gap: 10 }}
      >
        {STRATEGIES.map((s) => {
          const isOpen = open === s.id;
          return (
            <motion.div
              key={s.id}
              variants={cardEntrance}
              layout
              style={{
                borderRadius: 12, overflow: "hidden",
                border: `1.5px solid ${isOpen ? s.color : "var(--eng-border)"}`,
                background: "var(--eng-surface)",
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? "" : s.id)}
                style={{
                  width: "100%", padding: "12px 14px", textAlign: "left", cursor: "pointer",
                  background: isOpen ? "var(--eng-surface-alt)" : "transparent",
                  border: "none", display: "flex", gap: 12, alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 8, display: "grid", placeItems: "center",
                    background: `${s.color}1A`, color: s.color, flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.95rem" }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--eng-text-muted)", marginTop: 2 }}>
                    {s.subtitle}
                  </div>
                </div>
                <ArrowRight
                  className="w-4 h-4"
                  style={{
                    color: "var(--eng-text-muted)",
                    transform: isOpen ? "rotate(90deg)" : "none",
                    transition: "transform 160ms",
                  }}
                />
              </button>

              <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ padding: "12px 16px 16px", borderTop: "1px solid var(--eng-border)", overflow: "hidden" }}
                >
                  <div style={{ marginBottom: 10, fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
                    <b style={{ color: s.color }}>How it works:</b> {s.how}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 10 }}>
                    <div>
                      <div style={{ fontSize: "0.78rem", fontWeight: 700, color: OK, marginBottom: 4 }}>
                        PROS
                      </div>
                      {s.pros.map((p, i) => (
                        <div key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start", marginBottom: 3 }}>
                          <Check className="w-3.5 h-3.5 shrink-0" style={{ color: OK, marginTop: 3 }} />
                          <span style={{ fontSize: "0.82rem", color: "var(--eng-text)" }}>{p}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.78rem", fontWeight: 700, color: SD, marginBottom: 4 }}>
                        CONS
                      </div>
                      {s.cons.map((c, i) => (
                        <div key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start", marginBottom: 3 }}>
                          <X className="w-3.5 h-3.5 shrink-0" style={{ color: SD, marginTop: 3 }} />
                          <span style={{ fontSize: "0.82rem", color: "var(--eng-text)" }}>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "8px 12px", borderRadius: 8,
                      background: `${s.color}14`,
                      fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.5,
                    }}
                  >
                    <b>Verdict:</b> {s.verdict}
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  MAIN                                                                */
/* ================================================================== */

export default function SD_L2_StatelessActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def",   label: "Any Server vs One Server", icon: <Server className="w-4 h-4" />, content: <Definition /> },
    { id: "kill",  label: "Kill-a-Server Demo",       icon: <Power className="w-4 h-4" />,  content: <KillServer /> },
    { id: "state", label: "Where State Lives",        icon: <Database className="w-4 h-4" />, content: <WhereStateLives /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "A stateless service means:",
      options: [
        "The service never stores any data anywhere.",
        "Every request carries everything the server needs - any server instance can handle it.",
        "The service has no database.",
        "The service doesn't use HTTPS.",
      ],
      correctIndex: 1,
      explanation: "Stateless is about the app server, not the system. State still exists - it just lives somewhere external (Redis, DB, or the token itself) so any server can serve any request.",
    },
    {
      question: "Why is statelessness the precondition for horizontal scaling?",
      options: [
        "Stateless servers use less CPU.",
        "The load balancer can only route to stateless servers.",
        "You can add / remove / kill servers freely because any box can serve any user.",
        "Stateless code compiles faster.",
      ],
      correctIndex: 2,
      explanation: "Horizontal scaling only works if adding boxes actually adds capacity. If each user is pinned to one box, adding more boxes doesn't help that user - and losing a box logs them out.",
    },
    {
      question: "You move sessions from app-server memory to Redis. The main benefit is:",
      options: [
        "Lower latency per request.",
        "Less code to write.",
        "Any app server can serve any user; restarting / deploying / crashing servers no longer logs users out.",
        "You no longer need a load balancer.",
      ],
      correctIndex: 2,
      explanation: "Moving state out of app memory is what makes the fleet truly interchangeable. You add an extra network hop, but you gain deploy freedom and fault tolerance.",
    },
    {
      question: "What's the main downside of using JWTs instead of server-side sessions?",
      options: [
        "They require a database.",
        "You can't revoke a valid token before its expiry without extra machinery (a blocklist).",
        "They only work over HTTP, not HTTPS.",
        "The server has to call the client for every request.",
      ],
      correctIndex: 1,
      explanation: "JWTs are self-contained and verified by signature - no server lookup. That's also why instant revocation is hard: there's no central place to say 'this token is no longer valid'.",
    },
    {
      question: "When are sticky sessions the right call?",
      options: [
        "Always - they're the fastest option.",
        "For new greenfield apps built on microservices.",
        "Rarely - as a last-resort escape hatch when the app can't be made stateless (e.g., legacy systems).",
        "For stateless REST APIs.",
      ],
      correctIndex: 2,
      explanation: "Sticky sessions pin users to specific servers. You lose the fault-tolerance and scaling benefits of a stateless fleet. Senior engineers treat this as an escape hatch, not a default.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Stateless vs Stateful Services"
      level={2}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The hidden precondition that makes horizontal scaling actually work"
      onQuizComplete={onQuizComplete}
    />
  );
}
