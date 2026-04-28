import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Network, Send, Inbox, Monitor, Server, Code2, FileText, Hash,
  Check, X, Play, Pause, RotateCcw, ChevronLeft, ChevronRight,
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
/*  TAB 1 - Anatomy of a request                                       */
/* ================================================================== */

/* Stages:
   0 = idle
   1 = request flying client→server
   2 = server processing
   3 = response flying server→client
   4 = done (client rendered)                                          */
const ANATOMY_STAGES = [
  { n: 1, short: "Send request",     detail: "Browser opens a TCP socket and writes the HTTP request.", side: "client" },
  { n: 2, short: "Server processes", detail: "Router → auth → business logic → DB/cache → response.",    side: "server" },
  { n: 3, short: "Send response",    detail: "Server writes the response back on the same socket.",      side: "server" },
  { n: 4, short: "Client renders",   detail: "Browser parses response, paints pixels, runs scripts.",    side: "client" },
] as const;

function Anatomy() {
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(0); // 0..4

  // Auto-advance when playing
  useEffect(() => {
    if (!playing) return;
    if (step >= 4) { setPlaying(false); return; }
    const delay = step === 1 ? 1400 : step === 2 ? 1000 : step === 3 ? 1400 : 400;
    const t = setTimeout(() => setStep((s) => Math.min(4, s + 1)), delay);
    return () => clearTimeout(t);
  }, [playing, step]);

  function play() {
    if (step >= 4) setStep(0);
    setPlaying(true);
    setTimeout(() => setStep((s) => (s < 1 ? 1 : s)), 30);
  }
  function advance(dir: 1 | -1) {
    setPlaying(false);
    setStep((s) => Math.max(0, Math.min(4, s + dir)));
  }

  return (
    <div>
      <h3 style={sectionTitle}>Every web system is still just client → server → client</h3>
      <p style={sectionDesc}>
        Before load balancers, caches, or microservices - the root shape stays constant. A client
        sends a <em>request</em>. A server sends back a <em>response</em>. Everything else is an
        optimization on top of that.
      </p>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
        <button
          onClick={play}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 14px", borderRadius: 8, border: `1.5px solid ${SD}`,
            background: playing ? SD : "transparent", color: playing ? "#fff" : SD,
            fontFamily: "var(--eng-font)", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
          }}
        >
          {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          {playing ? "Pause" : step >= 4 ? "Replay" : "Play request"}
        </button>
        <button
          onClick={() => advance(-1)} disabled={step <= 0}
          style={{
            display: "flex", alignItems: "center", gap: 4,
            padding: "8px 10px", borderRadius: 8, border: "1.5px solid var(--eng-border)",
            background: "transparent", color: "var(--eng-text)",
            fontFamily: "var(--eng-font)", fontSize: "0.8rem",
            cursor: step <= 0 ? "not-allowed" : "pointer", opacity: step <= 0 ? 0.4 : 1,
          }}
        >
          <ChevronLeft className="w-3.5 h-3.5" /> Prev
        </button>
        <button
          onClick={() => advance(1)} disabled={step >= 4}
          style={{
            display: "flex", alignItems: "center", gap: 4,
            padding: "8px 10px", borderRadius: 8, border: "1.5px solid var(--eng-border)",
            background: "transparent", color: "var(--eng-text)",
            fontFamily: "var(--eng-font)", fontSize: "0.8rem",
            cursor: step >= 4 ? "not-allowed" : "pointer", opacity: step >= 4 ? 0.4 : 1,
          }}
        >
          Next <ChevronRight className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => { setStep(0); setPlaying(false); }}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 12px", borderRadius: 8, border: "1.5px solid var(--eng-border)",
            background: "transparent", color: "var(--eng-text-muted)",
            fontFamily: "var(--eng-font)", fontSize: "0.8rem", cursor: "pointer",
          }}
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
        <span style={{ marginLeft: "auto", fontFamily: MONO, fontSize: "0.78rem", color: "var(--eng-text-muted)" }}>
          Stage {Math.max(0, step)} / 4
        </span>
      </div>

      {/* Canvas */}
      <div
        style={{
          position: "relative", border: "1.5px solid var(--eng-border)", borderRadius: 12,
          background: "var(--eng-bg-subtle)", padding: "26px 20px 20px",
        }}
      >
        <svg viewBox="0 0 700 240" style={{ width: "100%", height: 240 }}>
          <defs>
            <marker id="reqArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
              <path d="M0,0 L9,4.5 L0,9 z" fill={SD} />
            </marker>
            <marker id="respArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
              <path d="M0,0 L9,4.5 L0,9 z" fill="#10b981" />
            </marker>
          </defs>

          {/* Client */}
          <rect x="30" y="80" width="140" height="80" rx="10"
            fill={step === 0 ? "#6366f115" : step === 4 ? "#6366f130" : "#6366f120"}
            stroke="#6366f1" strokeWidth={step === 0 || step === 4 ? 2.2 : 2} />
          <text x="100" y="115" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="14" fontWeight="700" fill="#6366f1">CLIENT</text>
          <text x="100" y="135" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="11" fill="var(--eng-text-muted)">browser / app</text>

          {/* Server */}
          <rect x="530" y="80" width="140" height="80" rx="10"
            fill={step === 2 ? `${SD}30` : `${SD}15`}
            stroke={SD} strokeWidth={step === 2 ? 2.5 : 2} />
          <text x="600" y="115" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="14" fontWeight="700" fill={SD}>SERVER</text>
          <text x="600" y="135" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="11" fill="var(--eng-text-muted)">app + database</text>

          {/* Request channel */}
          <line x1="175" y1="105" x2="525" y2="105"
            stroke={SD} strokeWidth="2"
            strokeDasharray="4,4"
            opacity={step >= 1 ? 0.7 : 0.25}
            markerEnd={step >= 1 ? "url(#reqArrow)" : undefined} />
          <text x="350" y="93" textAnchor="middle" fontFamily={MONO} fontSize="10" fill={SD} fontWeight="800" opacity={step >= 1 ? 1 : 0.5}>
            REQUEST  →
          </text>

          {/* Response channel */}
          <line x1="525" y1="140" x2="175" y2="140"
            stroke="#10b981" strokeWidth="2"
            strokeDasharray="4,4"
            opacity={step >= 3 ? 0.7 : 0.25}
            markerEnd={step >= 3 ? "url(#respArrow)" : undefined} />
          <text x="350" y="165" textAnchor="middle" fontFamily={MONO} fontSize="10" fill="#10b981" fontWeight="800" opacity={step >= 3 ? 1 : 0.5}>
            ←  RESPONSE
          </text>

          {/* Flying REQUEST packet */}
          {step === 1 && (
            <g>
              <animateMotion dur="1.3s" fill="freeze" path="M 180 105 L 520 105" />
              <rect x="-58" y="-18" width="116" height="36" rx="5"
                fill="#fff" stroke={SD} strokeWidth="1.5" />
              <text x="0" y="-3" textAnchor="middle" fontFamily={MONO} fontSize="10" fontWeight="800" fill={SD}>
                POST /login
              </text>
              <text x="0" y="10" textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="var(--eng-text-muted)">
                Authorization · body
              </text>
            </g>
          )}
          {/* After step 1, show a settled request card near server */}
          {step >= 2 && step < 3 && (
            <g opacity="0.85">
              <rect x="462" y="58" width="120" height="18" rx="4" fill="#fff" stroke={SD} strokeWidth="1.3" />
              <text x="522" y="71" textAnchor="middle" fontFamily={MONO} fontSize="9" fontWeight="800" fill={SD}>
                POST /login
              </text>
            </g>
          )}

          {/* Flying RESPONSE packet */}
          {step === 3 && (
            <g>
              <animateMotion dur="1.3s" fill="freeze" path="M 520 140 L 180 140" />
              <rect x="-58" y="-18" width="116" height="36" rx="5"
                fill="#fff" stroke="#10b981" strokeWidth="1.5" />
              <text x="0" y="-3" textAnchor="middle" fontFamily={MONO} fontSize="10" fontWeight="800" fill="#10b981">
                200 OK
              </text>
              <text x="0" y="10" textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="var(--eng-text-muted)">
                Set-Cookie · JSON body
              </text>
            </g>
          )}
          {/* After step 3, settled response card near client */}
          {step >= 4 && (
            <g opacity="0.85">
              <rect x="118" y="168" width="104" height="18" rx="4" fill="#fff" stroke="#10b981" strokeWidth="1.3" />
              <text x="170" y="181" textAnchor="middle" fontFamily={MONO} fontSize="9" fontWeight="800" fill="#10b981">
                200 OK
              </text>
            </g>
          )}

          {/* Server "thinking" pulse */}
          {step === 2 && (
            <>
              <circle cx="600" cy="120" r="46" fill="none" stroke={SD} strokeWidth="1.5" opacity="0.6">
                <animate attributeName="r" from="20" to="52" dur="0.9s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.8" to="0" dur="0.9s" repeatCount="indefinite" />
              </circle>
              <text x="600" y="50" textAnchor="middle" fontFamily={MONO} fontSize="10" fontWeight="800" fill={SD} letterSpacing="0.06em">
                PROCESSING…
              </text>
            </>
          )}
        </svg>

        {/* Stage pills */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginTop: 14 }}>
          {ANATOMY_STAGES.map((s) => {
            const on = step >= s.n;
            const active = step === s.n;
            return (
              <button
                key={s.n}
                onClick={() => { setPlaying(false); setStep(s.n); }}
                style={{
                  padding: "6px 10px", borderRadius: 6,
                  border: active ? `2px solid ${SD}` : on ? `1.5px solid ${SD}` : "1.5px solid var(--eng-border)",
                  background: active ? SD : on ? SD_SOFT : "var(--eng-bg)",
                  fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800,
                  color: active ? "#fff" : on ? SD : "var(--eng-text-muted)",
                  textAlign: "center", cursor: "pointer", letterSpacing: "0.02em",
                }}
              >
                {s.n}. {s.short}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step caption */}
      <div
        style={{
          marginTop: 14, padding: "10px 14px", borderRadius: 8,
          border: `1.5px solid ${SD}`, background: SD_SOFT, minHeight: 54,
        }}
      >
        {step > 0 ? (
          <>
            <div style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800, color: SD, letterSpacing: "0.08em", marginBottom: 4 }}>
              STAGE {step} · {ANATOMY_STAGES[step - 1].side === "client" ? "CLIENT" : "SERVER"}
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
              {ANATOMY_STAGES[step - 1].detail}
            </div>
          </>
        ) : (
          <div style={{ fontSize: "0.82rem", color: "var(--eng-text-muted)" }}>
            Hit <em>Play</em> to watch a full round-trip, or <em>Next</em> to step through manually.
          </div>
        )}
      </div>

      <div
        style={{
          marginTop: 14, padding: "14px 18px", borderRadius: 10,
          border: `1.5px solid ${SD}`, background: SD_SOFT,
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.68rem", fontWeight: 800, color: SD, letterSpacing: "0.08em", marginBottom: 4 }}>
          THE PROTOCOL
        </div>
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.6 }}>
          The language both sides speak is <b>HTTP</b> (HyperText Transfer Protocol). A request has
          a <b>method</b> (GET/POST), a <b>path</b> (/login), <b>headers</b>, and an optional
          <b> body</b>. A response has a <b>status code</b> (200, 404…), <b>headers</b>, and a
          <b> body</b>. Same four parts, every time.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Methods + Status codes                                     */
/* ================================================================== */

interface HTTPMethod {
  name: string;
  color: string;
  safe: boolean;
  idem: boolean;
  body: boolean;
  use: string;
  example: string;
}

const METHODS: HTTPMethod[] = [
  { name: "GET",    color: "#10b981", safe: true,  idem: true,  body: false, use: "Fetch data. Never modifies server state.", example: "GET /users/42  → returns user 42" },
  { name: "POST",   color: SD,        safe: false, idem: false, body: true,  use: "Create a resource or trigger an action.", example: "POST /orders   → creates a new order" },
  { name: "PUT",    color: "#f59e0b", safe: false, idem: true,  body: true,  use: "Replace a resource entirely at a known URL.", example: "PUT /users/42  → replaces user 42 fully" },
  { name: "PATCH",  color: "#f97316", safe: false, idem: false, body: true,  use: "Apply a partial update to a resource.", example: "PATCH /users/42 → updates only the email" },
  { name: "DELETE", color: "#84cc16", safe: false, idem: true,  body: false, use: "Remove a resource. Calling it twice = still deleted.", example: "DELETE /users/42 → removes user 42" },
];

interface StatusBand {
  range: string;
  color: string;
  name: string;
  codes: { code: number; label: string; meaning: string }[];
}

const STATUS: StatusBand[] = [
  { range: "1xx", color: "#64748b", name: "Informational", codes: [
    { code: 100, label: "Continue", meaning: "Keep sending, I'm ready." },
  ]},
  { range: "2xx", color: "#10b981", name: "Success", codes: [
    { code: 200, label: "OK", meaning: "It worked. Body has your answer." },
    { code: 201, label: "Created", meaning: "I made a new resource for you." },
    { code: 204, label: "No Content", meaning: "It worked but there's no body." },
  ]},
  { range: "3xx", color: "#06b6d4", name: "Redirection", codes: [
    { code: 301, label: "Moved Permanently", meaning: "Use this new URL from now on." },
    { code: 302, label: "Found", meaning: "Temporary redirect." },
    { code: 304, label: "Not Modified", meaning: "Your cached copy is still valid." },
  ]},
  { range: "4xx", color: "#f59e0b", name: "Client Error", codes: [
    { code: 400, label: "Bad Request", meaning: "Your request is malformed." },
    { code: 401, label: "Unauthorized", meaning: "Who are you? Log in first." },
    { code: 403, label: "Forbidden", meaning: "I know you - still no access." },
    { code: 404, label: "Not Found", meaning: "That path doesn't exist." },
    { code: 429, label: "Too Many Requests", meaning: "Slow down - you hit the rate limit." },
  ]},
  { range: "5xx", color: SD, name: "Server Error", codes: [
    { code: 500, label: "Internal Server Error", meaning: "Server crashed. My bad." },
    { code: 502, label: "Bad Gateway", meaning: "Upstream service gave me garbage." },
    { code: 503, label: "Service Unavailable", meaning: "Server is overloaded or down." },
    { code: 504, label: "Gateway Timeout", meaning: "Upstream took too long to respond." },
  ]},
];

function MethodsAndStatus() {
  const [picked, setPicked] = useState<string>("GET");
  const m = METHODS.find((x) => x.name === picked) ?? METHODS[0];

  return (
    <div>
      <h3 style={sectionTitle}>Methods tell the server <em>what</em>. Status codes tell the client <em>how it went</em>.</h3>
      <p style={sectionDesc}>
        Method = verb. Status code = outcome. Senior engineers know the 5 core methods cold and can
        cite the common status codes without Googling. Start here.
      </p>

      {/* Methods */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, marginBottom: 14 }}
      >
        {METHODS.map((meth) => {
          const on = meth.name === picked;
          return (
            <motion.button
              key={meth.name}
              variants={cardEntrance}
              whileHover={cardHover}
              onClick={() => setPicked(meth.name)}
              style={{
                padding: "10px 6px", borderRadius: 10, cursor: "pointer",
                border: on ? `1.5px solid ${meth.color}` : "1.5px solid var(--eng-border)",
                background: on ? `${meth.color}15` : "var(--eng-bg-subtle)",
                fontFamily: MONO, fontWeight: 800, fontSize: "0.82rem",
                color: on ? meth.color : "var(--eng-text-muted)",
                transition: "border-color 180ms, background 180ms",
              }}
            >
              {meth.name}
            </motion.button>
          );
        })}
      </motion.div>

      <motion.div
        key={m.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        style={{
          border: `1.5px solid ${m.color}`, borderRadius: 12,
          background: `${m.color}0f`, padding: "16px 20px", marginBottom: 22,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
          <span style={{ fontFamily: MONO, fontSize: "1.2rem", fontWeight: 800, color: m.color }}>{m.name}</span>
          <span style={{ fontSize: "0.9rem", color: "var(--eng-text)" }}>{m.use}</span>
        </div>
        <div
          style={{
            fontFamily: MONO, fontSize: "0.82rem", padding: "8px 12px", borderRadius: 6,
            background: "var(--eng-bg)", border: `1px solid ${m.color}40`,
            color: "var(--eng-text)", marginBottom: 12,
          }}
        >
          {m.example}
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {[
            { label: "Safe (no state change)", on: m.safe },
            { label: "Idempotent (same result on repeat)", on: m.idem },
            { label: "Has body", on: m.body },
          ].map((p) => (
            <div key={p.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.82rem" }}>
              {p.on ? <Check className="w-4 h-4" style={{ color: "#10b981" }} /> : <X className="w-4 h-4" style={{ color: "#f97316" }} />}
              <span style={{ color: "var(--eng-text)" }}>{p.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Status table */}
      <h4 style={{ ...sectionTitle, fontSize: "1rem", marginBottom: 10 }}>Status code ladder</h4>
      <div
        style={{
          border: "1.5px solid var(--eng-border)", borderRadius: 12, overflow: "hidden",
        }}
      >
        {STATUS.map((band) => (
          <div key={band.range}>
            <div
              style={{
                padding: "8px 14px", background: `${band.color}15`,
                borderBottom: `1px solid ${band.color}40`,
                display: "flex", alignItems: "center", gap: 10,
              }}
            >
              <span style={{ fontFamily: MONO, fontSize: "0.8rem", fontWeight: 800, color: band.color }}>{band.range}</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--eng-text)" }}>{band.name}</span>
            </div>
            {band.codes.map((c, i) => (
              <div
                key={c.code}
                style={{
                  display: "grid", gridTemplateColumns: "70px 180px 1fr", gap: 12,
                  padding: "8px 14px", alignItems: "center",
                  borderBottom: i < band.codes.length - 1 ? "1px solid var(--eng-border)" : "none",
                  background: "var(--eng-bg)",
                }}
              >
                <span style={{ fontFamily: MONO, fontWeight: 800, color: band.color, fontSize: "0.9rem" }}>{c.code}</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--eng-text)" }}>{c.label}</span>
                <span style={{ fontSize: "0.82rem", color: "var(--eng-text-muted)" }}>{c.meaning}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - Real request lifecycle                                     */
/* ================================================================== */

/* Sequence diagram messages for the HTTPS lifecycle */
type Dir = "c2s" | "s2c" | "c" | "s";
interface Msg {
  phase: "DNS" | "TCP" | "TLS" | "HTTP" | "SERVER";
  dir: Dir;          // c2s = client→server, s2c = server→client, c/s = local work
  label: string;     // main text on the arrow
  sub?: string;      // small caption under the arrow
  note: string;      // detailed explainer shown when this step is active
}

const LIFECYCLE_MSGS: Msg[] = [
  { phase: "DNS",  dir: "c",   label: "DNS lookup",              sub: "name → IP",                 note: "Browser asks the OS stub resolver for the IP of the hostname. Usually cache hit - a few ms. Cache miss can add 30–120 ms." },
  { phase: "TCP",  dir: "c2s", label: "SYN",                     sub: "I want to talk",            note: "Client sends a TCP SYN to open a reliable pipe. This is the first packet that actually travels the wire for this connection." },
  { phase: "TCP",  dir: "s2c", label: "SYN-ACK",                 sub: "I hear you, you hear me?",  note: "Server acknowledges. One round-trip has now passed." },
  { phase: "TCP",  dir: "c2s", label: "ACK",                     sub: "connected",                 note: "Client confirms. The TCP connection is now open and can carry bytes in both directions." },
  { phase: "TLS",  dir: "c2s", label: "ClientHello",             sub: "HTTPS only",                note: "If using HTTPS: client proposes TLS version + cipher list + a random number." },
  { phase: "TLS",  dir: "s2c", label: "ServerHello + Cert",      sub: "here's my identity",        note: "Server picks a cipher and sends its TLS certificate (signed by a CA the browser trusts)." },
  { phase: "TLS",  dir: "c2s", label: "Key exchange + Finished", sub: "shared secret agreed",      note: "Client verifies the cert, generates a session key, and both sides finish the handshake. All traffic after this is encrypted." },
  { phase: "HTTP", dir: "c2s", label: "HTTP Request",            sub: "POST /login + headers",     note: "NOW the actual HTTP request flies over the encrypted socket: method, path, headers, body." },
  { phase: "SERVER", dir: "s", label: "Server processes",        sub: "auth → DB → response",      note: "Routing, middleware, business logic, DB/cache reads, response build. This is where your backend code lives." },
  { phase: "HTTP", dir: "s2c", label: "HTTP Response",           sub: "200 OK + JSON/HTML",        note: "Status code + response headers + body come back. Browser parses, paints, runs JavaScript, loads subresources." },
];

const PHASE_COLORS: Record<Msg["phase"], string> = {
  DNS:    "#64748b",
  TCP:    "#f59e0b",
  TLS:    "#8b5cf6",
  HTTP:   SD,
  SERVER: "#0ea5e9",
};

function Lifecycle() {
  const [step, setStep] = useState(0);  // 0..LIFECYCLE_MSGS.length-1
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    if (step >= LIFECYCLE_MSGS.length - 1) { setPlaying(false); return; }
    const t = setTimeout(() => setStep((s) => s + 1), 1400);
    return () => clearTimeout(t);
  }, [playing, step]);

  const current = LIFECYCLE_MSGS[step];

  const req = [
    { k: "Start-line", v: "POST /api/login HTTP/1.1" },
    { k: "Host", v: "api.example.com" },
    { k: "Content-Type", v: "application/json" },
    { k: "Authorization", v: "Bearer eyJhbGc..." },
    { k: "Body", v: '{ "email": "a@b.com", "password": "***" }' },
  ];
  const resp = [
    { k: "Status line", v: "HTTP/1.1 200 OK" },
    { k: "Content-Type", v: "application/json" },
    { k: "Set-Cookie", v: "session=abc123; HttpOnly; Secure" },
    { k: "Cache-Control", v: "no-store" },
    { k: "Body", v: '{ "userId": 42, "token": "xyz..." }' },
  ];

  /* Sequence diagram layout */
  const LANE_Y0 = 44;          // first message y
  const LANE_DY = 36;           // y spacing per message
  const LANE_X_CLIENT = 90;
  const LANE_X_SERVER = 510;

  const svgH = LANE_Y0 + LIFECYCLE_MSGS.length * LANE_DY + 30;

  function advance(dir: 1 | -1) {
    setPlaying(false);
    setStep((s) => Math.max(0, Math.min(LIFECYCLE_MSGS.length - 1, s + dir)));
  }

  return (
    <div>
      <h3 style={sectionTitle}>The full round trip: DNS → TCP → TLS → HTTP</h3>
      <p style={sectionDesc}>
        A single click triggers ~10 messages across the network. Most of them finish in a blink, but
        understanding <em>which</em> are there - and in what order - is how you reason about latency,
        retries, and security.
      </p>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        <button
          onClick={() => { if (step >= LIFECYCLE_MSGS.length - 1) setStep(0); setPlaying(true); }}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 14px", borderRadius: 8, border: `1.5px solid ${SD}`,
            background: playing ? SD : "transparent", color: playing ? "#fff" : SD,
            fontFamily: "var(--eng-font)", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
          }}
        >
          {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          {playing ? "Pause" : step >= LIFECYCLE_MSGS.length - 1 ? "Replay" : "Play"}
        </button>
        <button
          onClick={() => advance(-1)} disabled={step <= 0}
          style={{
            display: "flex", alignItems: "center", gap: 4,
            padding: "8px 10px", borderRadius: 8, border: "1.5px solid var(--eng-border)",
            background: "transparent", color: "var(--eng-text)",
            fontFamily: "var(--eng-font)", fontSize: "0.8rem",
            cursor: step <= 0 ? "not-allowed" : "pointer", opacity: step <= 0 ? 0.4 : 1,
          }}
        >
          <ChevronLeft className="w-3.5 h-3.5" /> Prev
        </button>
        <button
          onClick={() => advance(1)} disabled={step >= LIFECYCLE_MSGS.length - 1}
          style={{
            display: "flex", alignItems: "center", gap: 4,
            padding: "8px 10px", borderRadius: 8, border: "1.5px solid var(--eng-border)",
            background: "transparent", color: "var(--eng-text)",
            fontFamily: "var(--eng-font)", fontSize: "0.8rem",
            cursor: step >= LIFECYCLE_MSGS.length - 1 ? "not-allowed" : "pointer",
            opacity: step >= LIFECYCLE_MSGS.length - 1 ? 0.4 : 1,
          }}
        >
          Next <ChevronRight className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => { setStep(0); setPlaying(false); }}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 12px", borderRadius: 8, border: "1.5px solid var(--eng-border)",
            background: "transparent", color: "var(--eng-text-muted)",
            fontFamily: "var(--eng-font)", fontSize: "0.8rem", cursor: "pointer",
          }}
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
        <span style={{ marginLeft: "auto", fontFamily: MONO, fontSize: "0.78rem", color: "var(--eng-text-muted)" }}>
          Message {step + 1} / {LIFECYCLE_MSGS.length}
        </span>
      </div>

      {/* Sequence diagram */}
      <div style={{
        border: "1.5px solid var(--eng-border)", borderRadius: 12,
        background: "var(--eng-bg-subtle)", padding: "18px 18px 14px",
        marginBottom: 18,
      }}>
        <svg viewBox={`0 0 700 ${svgH}`} style={{ width: "100%", height: svgH }}>
          <defs>
            <marker id="lcArrR" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
              <path d="M0,0 L9,4.5 L0,9 z" fill="currentColor" />
            </marker>
            <marker id="lcArrL" markerWidth="9" markerHeight="9" refX="2" refY="4.5" orient="auto">
              <path d="M9,0 L0,4.5 L9,9 z" fill="currentColor" />
            </marker>
          </defs>

          {/* Headers */}
          <rect x={LANE_X_CLIENT - 60} y="6" width="120" height="26" rx="6"
            fill="#6366f1" />
          <text x={LANE_X_CLIENT} y="24" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="12" fontWeight="800" fill="#fff" letterSpacing="0.06em">
            CLIENT
          </text>
          <rect x={LANE_X_SERVER - 60} y="6" width="120" height="26" rx="6"
            fill={SD} />
          <text x={LANE_X_SERVER} y="24" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="12" fontWeight="800" fill="#fff" letterSpacing="0.06em">
            SERVER
          </text>

          {/* Lifelines */}
          <line x1={LANE_X_CLIENT} y1="34" x2={LANE_X_CLIENT} y2={svgH - 10}
            stroke="#6366f1" strokeWidth="1.5" strokeDasharray="2,4" opacity="0.55" />
          <line x1={LANE_X_SERVER} y1="34" x2={LANE_X_SERVER} y2={svgH - 10}
            stroke={SD} strokeWidth="1.5" strokeDasharray="2,4" opacity="0.55" />

          {/* Messages */}
          {LIFECYCLE_MSGS.map((m, i) => {
            const y = LANE_Y0 + i * LANE_DY;
            const past = i < step;
            const active = i === step;
            const color = PHASE_COLORS[m.phase];
            const opacity = active ? 1 : past ? 0.55 : 0.2;
            const labelColor = active ? color : past ? color : "var(--eng-text-muted)";

            if (m.dir === "c2s") {
              return (
                <g key={i} opacity={opacity} style={{ color }}>
                  <line x1={LANE_X_CLIENT + 4} y1={y} x2={LANE_X_SERVER - 4} y2={y}
                    stroke={color} strokeWidth={active ? 2.25 : 1.5}
                    markerEnd="url(#lcArrR)" />
                  <text x={(LANE_X_CLIENT + LANE_X_SERVER) / 2} y={y - 5}
                    textAnchor="middle" fontFamily={MONO} fontSize="10.5" fontWeight="800" fill={labelColor}>
                    {m.label}
                  </text>
                  {m.sub && (
                    <text x={(LANE_X_CLIENT + LANE_X_SERVER) / 2} y={y + 13}
                      textAnchor="middle" fontFamily="var(--eng-font)" fontSize="9" fill="var(--eng-text-muted)">
                      {m.sub}
                    </text>
                  )}
                  {/* Phase tag */}
                  <rect x={8} y={y - 9} width="38" height="18" rx="4" fill={`${color}1a`} stroke={`${color}66`} strokeWidth="1" />
                  <text x={27} y={y + 4} textAnchor="middle" fontFamily={MONO} fontSize="8.5" fontWeight="800" fill={color} letterSpacing="0.04em">
                    {m.phase}
                  </text>
                  {/* Packet dot on active */}
                  {active && (
                    <circle r="6" fill={color}>
                      <animateMotion dur="0.9s" fill="freeze"
                        path={`M ${LANE_X_CLIENT + 4} ${y} L ${LANE_X_SERVER - 4} ${y}`} />
                    </circle>
                  )}
                </g>
              );
            }
            if (m.dir === "s2c") {
              return (
                <g key={i} opacity={opacity} style={{ color }}>
                  <line x1={LANE_X_SERVER - 4} y1={y} x2={LANE_X_CLIENT + 4} y2={y}
                    stroke={color} strokeWidth={active ? 2.25 : 1.5}
                    markerEnd="url(#lcArrR)" />
                  <text x={(LANE_X_CLIENT + LANE_X_SERVER) / 2} y={y - 5}
                    textAnchor="middle" fontFamily={MONO} fontSize="10.5" fontWeight="800" fill={labelColor}>
                    {m.label}
                  </text>
                  {m.sub && (
                    <text x={(LANE_X_CLIENT + LANE_X_SERVER) / 2} y={y + 13}
                      textAnchor="middle" fontFamily="var(--eng-font)" fontSize="9" fill="var(--eng-text-muted)">
                      {m.sub}
                    </text>
                  )}
                  <rect x={8} y={y - 9} width="38" height="18" rx="4" fill={`${color}1a`} stroke={`${color}66`} strokeWidth="1" />
                  <text x={27} y={y + 4} textAnchor="middle" fontFamily={MONO} fontSize="8.5" fontWeight="800" fill={color} letterSpacing="0.04em">
                    {m.phase}
                  </text>
                  {active && (
                    <circle r="6" fill={color}>
                      <animateMotion dur="0.9s" fill="freeze"
                        path={`M ${LANE_X_SERVER - 4} ${y} L ${LANE_X_CLIENT + 4} ${y}`} />
                    </circle>
                  )}
                </g>
              );
            }
            // Local work (client or server)
            const isClient = m.dir === "c";
            const x = isClient ? LANE_X_CLIENT : LANE_X_SERVER;
            return (
              <g key={i} opacity={opacity} style={{ color }}>
                <rect x={x - 88} y={y - 12} width="176" height="24" rx="5"
                  fill={`${color}14`} stroke={color} strokeWidth={active ? 2 : 1.2} />
                <text x={x} y={y + 4} textAnchor="middle" fontFamily={MONO} fontSize="10" fontWeight="800" fill={color}>
                  {m.label}
                </text>
                <rect x={8} y={y - 9} width="56" height="18" rx="4" fill={`${color}1a`} stroke={`${color}66`} strokeWidth="1" />
                <text x={36} y={y + 4} textAnchor="middle" fontFamily={MONO} fontSize="8.5" fontWeight="800" fill={color} letterSpacing="0.04em">
                  {m.phase}
                </text>
                {active && (
                  <circle cx={x} cy={y} r="22" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6">
                    <animate attributeName="r" from="10" to="26" dur="0.9s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.8" to="0" dur="0.9s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Caption for current step */}
      <div style={{
        marginBottom: 18, padding: "12px 16px", borderRadius: 10,
        border: `1.5px solid ${PHASE_COLORS[current.phase]}`, background: `${PHASE_COLORS[current.phase]}0e`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <span style={{
            fontFamily: MONO, fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.08em",
            padding: "2px 7px", borderRadius: 4, background: PHASE_COLORS[current.phase], color: "#fff",
          }}>
            {current.phase}
          </span>
          <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--eng-text)" }}>
            {current.label}
          </span>
        </div>
        <div style={{ fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          {current.note}
        </div>
      </div>

      {/* Dual request/response card */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {[
          { label: "REQUEST", icon: <Send className="w-4 h-4" />, rows: req, color: SD },
          { label: "RESPONSE", icon: <Inbox className="w-4 h-4" />, rows: resp, color: "#10b981" },
        ].map((card) => (
          <div
            key={card.label}
            style={{
              border: `1.5px solid ${card.color}`, borderRadius: 12, overflow: "hidden",
              background: "var(--eng-bg-subtle)",
            }}
          >
            <div style={{ padding: "10px 14px", background: `${card.color}15`, display: "flex", alignItems: "center", gap: 8, borderBottom: `1.5px solid ${card.color}` }}>
              <span style={{ color: card.color }}>{card.icon}</span>
              <span style={{ fontFamily: MONO, fontSize: "0.72rem", letterSpacing: "0.1em", color: card.color, fontWeight: 800 }}>{card.label}</span>
            </div>
            <div style={{ padding: "10px 14px" }}>
              {card.rows.map((r) => (
                <div key={r.k} style={{ padding: "4px 0", fontFamily: MONO, fontSize: "0.78rem" }}>
                  <span style={{ color: card.color, fontWeight: 700 }}>{r.k}: </span>
                  <span style={{ color: "var(--eng-text)", wordBreak: "break-all" }}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MAIN                                                                */
/* ================================================================== */

export default function SD_L2_ClientServerHTTPActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "anatomy", label: "Anatomy", icon: <Network className="w-4 h-4" />, content: <Anatomy /> },
    { id: "methods", label: "Methods & Status", icon: <Code2 className="w-4 h-4" />, content: <MethodsAndStatus /> },
    { id: "life",    label: "Real Lifecycle", icon: <FileText className="w-4 h-4" />, content: <Lifecycle /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Which HTTP method is safe AND idempotent?",
      options: ["POST", "GET", "PATCH", "DELETE"],
      correctIndex: 1,
      explanation: "GET is safe (no side effects) and idempotent (same result on retry). DELETE is idempotent but not safe. POST is neither.",
    },
    {
      question: "A client gets a `401 Unauthorized`. What does that mean?",
      options: [
        "The server crashed.",
        "The resource does not exist.",
        "The client is not authenticated - needs to log in.",
        "The rate limit was exceeded.",
      ],
      correctIndex: 2,
      explanation: "401 = 'who are you?' (authentication missing or invalid). 403 = 'I know you, but no.' 404 = 'not found.' 429 = 'too many requests.'",
    },
    {
      question: "What does `5xx` status codes signal?",
      options: ["Success", "Client mistake", "Server-side failure", "Redirect"],
      correctIndex: 2,
      explanation: "5xx = the server knows it messed up. 4xx = the client sent something bad. Flipping these in a debug session wastes hours - memorize the bands.",
    },
    {
      question: "Which of these is NOT part of a plain HTTP request (no TLS)?",
      options: ["DNS lookup to resolve the hostname", "TCP handshake with the server", "TLS handshake to encrypt the channel", "HTTP request line + headers"],
      correctIndex: 2,
      explanation: "TLS is only in HTTPS. Plain HTTP is DNS → TCP → send request → get response, no encryption layer. Connection reuse can skip DNS/TCP on subsequent requests, but TLS is the one that isn&rsquo;t part of HTTP at all.",
    },
    {
      question: "A shop wants &ldquo;create a new order.&rdquo; Which method fits best?",
      options: ["GET /orders", "POST /orders", "PUT /orders", "DELETE /orders"],
      correctIndex: 1,
      explanation: "POST creates a new resource at a collection URL. Use PUT when you know the exact URL of the item you want to replace (e.g., PUT /orders/42).",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Client-Server & HTTP"
      level={2}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Every web system interview assumes you know this cold"
      onQuizComplete={onQuizComplete}
    />
  );
}
