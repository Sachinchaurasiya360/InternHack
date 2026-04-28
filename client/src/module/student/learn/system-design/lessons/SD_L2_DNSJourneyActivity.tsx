import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Globe, Compass, FileStack, Play, Pause, RotateCcw,
  Check, Server, Cloud, ChevronRight, ChevronLeft,
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
/*  TAB 1 - Animated DNS resolution                                    */
/* ================================================================== */

interface Hop {
  id: string;
  label: string;
  sub: string;
  side: "left" | "right";
  x: number;
  y: number;
}

const HOPS: Hop[] = [
  { id: "client",  label: "Your Browser",          sub: "youtube.com?",            side: "left",  x: 60,  y: 40 },
  { id: "os",      label: "OS / Browser Cache",    sub: "checks local cache",      side: "left",  x: 60,  y: 120 },
  { id: "resolver",label: "Recursive Resolver",    sub: "ISP / Cloudflare 1.1.1.1", side: "left",  x: 60,  y: 200 },
  { id: "root",    label: "Root Servers",          sub: "13 clusters worldwide",   side: "right", x: 560, y: 40 },
  { id: "tld",     label: ".com TLD Servers",      sub: "knows all .com domains",  side: "right", x: 560, y: 120 },
  { id: "auth",    label: "Authoritative Server",  sub: "youtube.com's own DNS",   side: "right", x: 560, y: 200 },
];

const STEPS = [
  { from: "client",   to: "resolver", label: "What's the IP for youtube.com?", note: "Check OS cache - miss." },
  { from: "resolver", to: "root",     label: "Who knows .com?",                note: "" },
  { from: "root",     to: "resolver", label: "Ask these .com TLD servers →",  note: "" },
  { from: "resolver", to: "tld",      label: "Who knows youtube.com?",         note: "" },
  { from: "tld",      to: "resolver", label: "Ask youtube.com's auth server →", note: "" },
  { from: "resolver", to: "auth",     label: "What's the IP for youtube.com?", note: "" },
  { from: "auth",     to: "resolver", label: "142.250.190.46",                 note: "Resolver caches this per TTL." },
  { from: "resolver", to: "client",   label: "142.250.190.46",                 note: "Browser caches too. Now open TCP." },
];

function DNSAnimation() {
  const [step, setStep] = useState(-1);   // -1 = idle, 0..STEPS.length-1 = active step
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    if (step >= STEPS.length - 1) { setPlaying(false); return; }
    const t = setTimeout(() => setStep((s) => s + 1), 1700);
    return () => clearTimeout(t);
  }, [playing, step]);

  function getHop(id: string) { return HOPS.find((h) => h.id === id)!; }
  function endpoint(h: Hop, toward: "left" | "right") {
    // side = where the box SITS. Edge points are the facing sides.
    const y = h.y + 28;
    if (h.side === "left")  return { x: toward === "right" ? h.x + 140 : h.x, y };
    return { x: toward === "right" ? h.x + 140 : h.x, y };
  }

  const current = step >= 0 ? STEPS[step] : null;
  const currentFrom = current ? getHop(current.from) : null;
  const currentTo   = current ? getHop(current.to)   : null;

  function advance(dir: 1 | -1) {
    setPlaying(false);
    setStep((s) => Math.max(-1, Math.min(STEPS.length - 1, s + dir)));
  }

  return (
    <div>
      <h3 style={sectionTitle}>What happens between you typing a URL and seeing the page</h3>
      <p style={sectionDesc}>
        Before a single byte of HTML comes back, the browser has to convert
        <code style={{ fontFamily: MONO }}> youtube.com</code> into an IP address. That&rsquo;s DNS.
        It feels instant because every hop caches heavily - but there are always 3 servers
        potentially involved: root → TLD → authoritative.
      </p>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
        <button
          onClick={() => { if (step >= STEPS.length - 1) setStep(-1); setPlaying(true); setTimeout(() => setStep((s) => (s < 0 ? 0 : s)), 30); }}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 14px", borderRadius: 8, border: `1.5px solid ${SD}`,
            background: playing ? SD : "transparent", color: playing ? "#fff" : SD,
            fontFamily: "var(--eng-font)", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
          }}
        >
          {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          {playing ? "Pause" : step >= STEPS.length - 1 ? "Replay" : "Play"}
        </button>
        <button
          onClick={() => advance(-1)}
          disabled={step <= -1}
          style={{
            display: "flex", alignItems: "center", gap: 4,
            padding: "8px 10px", borderRadius: 8, border: "1.5px solid var(--eng-border)",
            background: "transparent", color: "var(--eng-text)",
            fontFamily: "var(--eng-font)", fontSize: "0.8rem",
            cursor: step <= -1 ? "not-allowed" : "pointer", opacity: step <= -1 ? 0.4 : 1,
          }}
        >
          <ChevronLeft className="w-3.5 h-3.5" /> Prev
        </button>
        <button
          onClick={() => advance(1)}
          disabled={step >= STEPS.length - 1}
          style={{
            display: "flex", alignItems: "center", gap: 4,
            padding: "8px 10px", borderRadius: 8, border: "1.5px solid var(--eng-border)",
            background: "transparent", color: "var(--eng-text)",
            fontFamily: "var(--eng-font)", fontSize: "0.8rem",
            cursor: step >= STEPS.length - 1 ? "not-allowed" : "pointer", opacity: step >= STEPS.length - 1 ? 0.4 : 1,
          }}
        >
          Next <ChevronRight className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => { setStep(-1); setPlaying(false); }}
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
          Step {Math.max(0, step + 1)} / {STEPS.length}
        </span>
      </div>

      {/* Step rail */}
      <div style={{ display: "flex", gap: 4, marginBottom: 14, flexWrap: "wrap" }}>
        {STEPS.map((_, i) => {
          const active = i === step;
          const done = i < step;
          return (
            <button
              key={i}
              onClick={() => { setPlaying(false); setStep(i); }}
              style={{
                padding: "4px 9px", borderRadius: 6,
                border: `1px solid ${active ? SD : done ? `${SD}55` : "var(--eng-border)"}`,
                background: active ? SD : done ? SD_SOFT : "var(--eng-bg)",
                color: active ? "#fff" : done ? SD : "var(--eng-text-muted)",
                fontFamily: MONO, fontSize: "0.68rem", fontWeight: 700, cursor: "pointer",
                letterSpacing: "0.04em",
              }}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      <div
        style={{
          border: "1.5px solid var(--eng-border)", borderRadius: 12,
          background: "var(--eng-bg-subtle)", padding: 20,
        }}
      >
        <svg viewBox="0 0 700 270" style={{ width: "100%", height: 290 }}>
          <defs>
            <marker id="dnsArrDone" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 z" fill={SD} fillOpacity="0.35" />
            </marker>
            <marker id="dnsArrActive" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
              <path d="M0,0 L9,4.5 L0,9 z" fill={SD} />
            </marker>
          </defs>

          {/* Persistent trail - all completed steps as faint arrows */}
          {STEPS.map((s, i) => {
            if (i >= step) return null;
            const f = getHop(s.from);
            const t = getHop(s.to);
            const fx = f.side === "left" ? f.x + 140 : f.x;
            const fy = f.y + 28;
            const tx = t.side === "left" ? t.x + 140 : t.x;
            const ty = t.y + 28;
            return (
              <line key={`trail${i}`} x1={fx} y1={fy} x2={tx} y2={ty}
                stroke={SD} strokeOpacity={0.18} strokeWidth="1.5" strokeDasharray="3,4"
                markerEnd="url(#dnsArrDone)" />
            );
          })}

          {/* Hop boxes */}
          {HOPS.map((h) => {
            const touched = step >= 0 && STEPS.slice(0, step + 1).some((s) => s.from === h.id || s.to === h.id);
            const active = current && (current.from === h.id || current.to === h.id);
            // Resolver gets a "cached" badge after step 6 (auth returns IP at step 6; resolver caches)
            const cached = h.id === "resolver" && step >= 6;
            const clientCached = h.id === "os" && step >= 7;
            return (
              <g key={h.id}>
                <rect x={h.x} y={h.y} width="140" height="56" rx="8"
                  fill={active ? `${SD}22` : touched ? `${SD}0c` : "var(--eng-bg)"}
                  stroke={active ? SD : touched ? `${SD}66` : "var(--eng-border)"} strokeWidth={active ? 2 : 1.5} />
                <text x={h.x + 70} y={h.y + 24} textAnchor="middle" fontFamily="var(--eng-font)" fontSize="12" fontWeight="700" fill={active ? SD : touched ? "var(--eng-text)" : "var(--eng-text-muted)"}>
                  {h.label}
                </text>
                <text x={h.x + 70} y={h.y + 42} textAnchor="middle" fontFamily="var(--eng-font)" fontSize="10" fill="var(--eng-text-muted)">
                  {h.sub}
                </text>
                {(cached || clientCached) && (
                  <g>
                    <rect x={h.x + 92} y={h.y - 9} width="46" height="18" rx="9"
                      fill="#10b981" />
                    <text x={h.x + 115} y={h.y + 4} textAnchor="middle" fontFamily={MONO} fontSize="9" fontWeight="800" fill="#fff" letterSpacing="0.08em">
                      CACHED
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Active arrow + flying packet */}
          {current && currentFrom && currentTo && (() => {
            const towardSide = currentTo.side === currentFrom.side ? currentFrom.side : "right";
            void towardSide;
            const fx = currentFrom.side === "left" ? currentFrom.x + 140 : currentFrom.x;
            const fy = currentFrom.y + 28;
            const tx = currentTo.side === "left" ? currentTo.x + 140 : currentTo.x;
            const ty = currentTo.y + 28;
            const isAnswer = current.from === "auth" || (current.from === "resolver" && current.to === "client");
            const color = isAnswer ? "#10b981" : SD;
            return (
              <g>
                <line x1={fx} y1={fy} x2={tx} y2={ty}
                  stroke={color} strokeWidth="2.25" markerEnd="url(#dnsArrActive)" />
                {/* Packet box flying along the line */}
                <g>
                  <animateMotion dur="1.2s" fill="freeze" path={`M ${fx} ${fy} L ${tx} ${ty}`} />
                  <rect x="-34" y="-9" width="68" height="18" rx="4"
                    fill="#fff" stroke={color} strokeWidth="1.5" />
                  <text x="0" y="4" textAnchor="middle" fontFamily={MONO} fontSize="9" fontWeight="800" fill={color} letterSpacing="0.04em">
                    {isAnswer ? "IP →" : "?"}
                  </text>
                </g>
              </g>
            );
          })()}

          {/* Divider label */}
          <text x="350" y="15" textAnchor="middle" fontFamily={MONO} fontSize="10" fill="var(--eng-text-muted)" letterSpacing="2">
            CLIENT SIDE  ←→  DNS HIERARCHY
          </text>
        </svg>

        {/* Caption */}
        <div
          style={{
            marginTop: 12, minHeight: 54, padding: "10px 14px", borderRadius: 8,
            border: `1.5px solid ${SD}`, background: SD_SOFT,
          }}
        >
          {current ? (
            <>
              <div style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800, color: SD, letterSpacing: "0.08em", marginBottom: 4 }}>
                STEP {step + 1} · {current.from.toUpperCase()} → {current.to.toUpperCase()}
              </div>
              <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", fontWeight: 600, marginBottom: current.note ? 3 : 0 }}>
                {current.label}
              </div>
              {current.note && (
                <div style={{ fontSize: "0.78rem", color: "var(--eng-text-muted)" }}>{current.note}</div>
              )}
            </>
          ) : (
            <div style={{ fontSize: "0.82rem", color: "var(--eng-text-muted)" }}>
              Hit <em>Play</em> to watch a recursive DNS lookup unfold, or use <em>Next</em> to step through manually.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Recursive vs Iterative + Caching                           */
/* ================================================================== */

function Caching() {
  const tiers = [
    { label: "Browser cache",     ttl: "seconds–minutes", hit: 90, note: "Hit on every repeat pageview." },
    { label: "OS stub cache",     ttl: "minutes",          hit: 70, note: "Shared across all apps on your machine." },
    { label: "Resolver cache",    ttl: "TTL on record (usually 5 min–24h)", hit: 40, note: "Shared by millions of users of that ISP. Root NS + TLD referrals are kept here long-term too, so most lookups never leave this box." },
  ];

  return (
    <div>
      <h3 style={sectionTitle}>DNS would be unbearably slow without caching</h3>
      <p style={sectionDesc}>
        A full lookup takes ~6 round trips. That&rsquo;s hundreds of milliseconds. DNS fixes this
        with <b>3 layers of caching</b> - browser, OS stub, and the recursive resolver. Most
        lookups stop at the first or second layer.
      </p>

      {/* Cache tiers bar */}
      <div
        style={{
          border: "1.5px solid var(--eng-border)", borderRadius: 12, overflow: "hidden",
          marginBottom: 22,
        }}
      >
        <div
          style={{
            padding: "10px 14px", background: SD_SOFT, borderBottom: `1.5px solid ${SD}`,
            fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: SD, letterSpacing: "0.08em",
          }}
        >
          CACHE HIERARCHY · HIT RATE TYPICAL
        </div>
        {tiers.map((t, i) => (
          <div
            key={t.label}
            style={{
              display: "grid", gridTemplateColumns: "200px 130px 1fr 110px",
              gap: 10, padding: "10px 14px", alignItems: "center",
              borderBottom: i < tiers.length - 1 ? "1px solid var(--eng-border)" : "none",
              background: i % 2 === 0 ? "var(--eng-bg)" : "var(--eng-bg-subtle)",
            }}
          >
            <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--eng-text)" }}>{t.label}</span>
            <span style={{ fontFamily: MONO, fontSize: "0.78rem", color: "var(--eng-text-muted)" }}>{t.ttl}</span>
            <div style={{ height: 8, background: "var(--eng-bg-subtle)", borderRadius: 4, overflow: "hidden", border: "1px solid var(--eng-border)" }}>
              <div style={{ width: `${t.hit}%`, height: "100%", background: SD }} />
            </div>
            <span style={{ fontFamily: MONO, fontSize: "0.78rem", color: SD, fontWeight: 700, textAlign: "right" }}>{t.hit}% hit</span>
            <div style={{ gridColumn: "1 / -1", fontSize: "0.78rem", color: "var(--eng-text-muted)", marginTop: -4, paddingLeft: 0 }}>
              {t.note}
            </div>
          </div>
        ))}
      </div>

      {/* Recursive vs Iterative */}
      <h4 style={{ ...sectionTitle, fontSize: "1rem", marginBottom: 10 }}>Recursive vs iterative queries</h4>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
      >
        {[
          {
            title: "Recursive query",
            color: SD,
            who: "Client → Resolver",
            desc: "Client asks the resolver one question and expects the final answer. The resolver does all the work chasing the hierarchy on the client&rsquo;s behalf.",
            example: "Your laptop → 1.1.1.1 → \"tell me the IP\" → answer returned",
          },
          {
            title: "Iterative query",
            color: "#06b6d4",
            who: "Resolver → Root / TLD / Auth",
            desc: "Resolver asks root, TLD, and authoritative servers one at a time. Each returns a referral (&ldquo;try this server next&rdquo;), not the final answer - until the auth replies.",
            example: "Resolver → root → TLD → auth → IP",
          },
        ].map((c) => (
          <motion.div
            key={c.title}
            variants={cardEntrance}
            whileHover={cardHover}
            style={{
              border: `1.5px solid ${c.color}`, borderRadius: 12, padding: "14px 16px",
            }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: c.color, letterSpacing: "0.08em", marginBottom: 4 }}>
              {c.title.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--eng-text)", marginBottom: 6 }}>{c.who}</div>
            <div style={{ fontSize: "0.82rem", color: "var(--eng-text-muted)", lineHeight: 1.55, marginBottom: 8 }}>{c.desc}</div>
            <div style={{ fontFamily: MONO, fontSize: "0.76rem", padding: "6px 10px", borderRadius: 6, background: "var(--eng-bg)", border: `1px solid ${c.color}40`, color: "var(--eng-text)" }}>
              {c.example}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - Record types                                               */
/* ================================================================== */

interface DNSRecord {
  type: string;
  color: string;
  maps: string;
  example: string;
  note: string;
}

const RECORDS: DNSRecord[] = [
  { type: "A",     color: SD,        maps: "name → IPv4 address",        example: "youtube.com.     A     142.250.190.46",  note: "The workhorse. Most lookups end here." },
  { type: "AAAA",  color: "#f59e0b", maps: "name → IPv6 address",        example: "youtube.com.     AAAA  2607:f8b0:4004::200e", note: "IPv6 equivalent of an A record. 4 A's." },
  { type: "CNAME", color: "#10b981", maps: "name → another name (alias)", example: "www.example.com.  CNAME example.com.", note: "Delegates lookup to another name. Can chain (and cost extra RTTs)." },
  { type: "MX",    color: "#8b5cf6", maps: "domain → mail server",        example: "example.com.     MX    10  mail.google.com.", note: "Tells senders where to deliver email for this domain." },
  { type: "TXT",   color: "#06b6d4", maps: "name → arbitrary text",       example: "example.com.     TXT   \"v=spf1 include:_spf.google.com ~all\"", note: "Used for SPF / DKIM / domain verification." },
  { type: "NS",    color: "#ec4899", maps: "domain → authoritative nameservers", example: "example.com.     NS    ns1.cloudflare.com.", note: "Delegates a zone to other servers." },
];

function Records() {
  const [picked, setPicked] = useState("A");
  const r = RECORDS.find((x) => x.type === picked)!;

  return (
    <div>
      <h3 style={sectionTitle}>DNS stores more than just IPs</h3>
      <p style={sectionDesc}>
        A DNS zone is a tiny database of <b>records</b>. Each record type answers a different
        question. Interviewers commonly ask about A, CNAME, and MX - the other three are extra
        credit.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8, marginBottom: 16 }}>
        {RECORDS.map((rec) => {
          const on = rec.type === picked;
          return (
            <button
              key={rec.type}
              onClick={() => setPicked(rec.type)}
              style={{
                padding: "10px 6px", borderRadius: 10, cursor: "pointer",
                border: on ? `1.5px solid ${rec.color}` : "1.5px solid var(--eng-border)",
                background: on ? `${rec.color}15` : "var(--eng-bg-subtle)",
                fontFamily: MONO, fontWeight: 800, fontSize: "0.85rem",
                color: on ? rec.color : "var(--eng-text-muted)",
              }}
            >
              {rec.type}
            </button>
          );
        })}
      </div>

      <div
        key={r.type}
        className="eng-fadeIn"
        style={{
          border: `1.5px solid ${r.color}`, borderRadius: 12, padding: "16px 20px",
          background: `${r.color}0f`,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
          <span style={{ fontFamily: MONO, fontSize: "1.3rem", fontWeight: 800, color: r.color }}>{r.type}</span>
          <span style={{ fontSize: "0.92rem", color: "var(--eng-text)", fontWeight: 600 }}>{r.maps}</span>
        </div>
        <div
          style={{
            fontFamily: MONO, fontSize: "0.8rem", padding: "10px 12px", borderRadius: 6,
            background: "var(--eng-bg)", border: `1px solid ${r.color}40`,
            color: "var(--eng-text)", marginBottom: 10, overflowX: "auto",
          }}
        >
          {r.example}
        </div>
        <div style={{ fontSize: "0.85rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>
          {r.note}
        </div>
      </div>

      <div
        style={{
          marginTop: 18, padding: "12px 16px", borderRadius: 10,
          border: `1.5px solid ${SD}`, background: SD_SOFT,
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: SD, letterSpacing: "0.08em", marginBottom: 4 }}>
          INTERVIEW QUESTION YOU WILL GET
        </div>
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          &ldquo;You add a <code style={{ fontFamily: MONO }}>CNAME</code> for
          <code style={{ fontFamily: MONO }}> www.example.com</code> pointing at
          <code style={{ fontFamily: MONO }}> example.com</code>. Why could this add latency?&rdquo;
          Answer: every resolver has to do a <em>second</em> DNS lookup to follow the alias. The
          trick is that it&rsquo;s cached, so the cost only hits cold clients.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MAIN                                                                */
/* ================================================================== */

export default function SD_L2_DNSJourneyActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "journey", label: "The Journey", icon: <Compass className="w-4 h-4" />, content: <DNSAnimation /> },
    { id: "cache",   label: "Caching & Types", icon: <Cloud className="w-4 h-4" />, content: <Caching /> },
    { id: "records", label: "Record Types", icon: <FileStack className="w-4 h-4" />, content: <Records /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "What does DNS actually convert?",
      options: [
        "HTTP requests into TCP packets",
        "Domain names (youtube.com) into IP addresses (142.250.190.46)",
        "IPs into MAC addresses",
        "HTTPS into HTTP",
      ],
      correctIndex: 1,
      explanation: "DNS = Domain Name System. Its job is name → IP resolution so machines can actually route to each other.",
    },
    {
      question: "Which cache layer usually wins the lookup and prevents any network traffic at all?",
      options: ["Root server", "Browser / OS cache", "TLD server", "Authoritative server"],
      correctIndex: 1,
      explanation: "Browser + OS caches satisfy the vast majority of repeat lookups without any DNS packets leaving your machine. That's why repeat visits feel instant.",
    },
    {
      question: "A record&rsquo;s TTL is 300 seconds. What does that mean?",
      options: [
        "The record expires permanently after 5 minutes.",
        "Resolvers may cache this record for up to 5 minutes before re-checking.",
        "The server will be down for 5 minutes.",
        "The domain is valid for 5 minutes.",
      ],
      correctIndex: 1,
      explanation: "TTL (time-to-live) controls how long a resolver is allowed to cache the record. Low TTL = faster propagation when you change IPs, but more DNS traffic.",
    },
    {
      question: "Which record type maps one name to another (an alias)?",
      options: ["A", "MX", "CNAME", "TXT"],
      correctIndex: 2,
      explanation: "CNAME = Canonical Name. It tells resolvers 'to look up X, look up Y first.' Useful for pointing subdomains at external services (Cloudflare, Vercel, etc.).",
    },
    {
      question: "In a recursive DNS query, who does the heavy lifting of chasing the hierarchy?",
      options: [
        "The root server",
        "The authoritative server for the domain",
        "The resolver (e.g., your ISP or 1.1.1.1)",
        "The browser itself",
      ],
      correctIndex: 2,
      explanation: "The resolver takes the client's single question and recursively asks root → TLD → authoritative until it has the answer. The client only sees one query and one response.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="DNS & The Journey of a Request"
      level={2}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The classic 'what happens when you type google.com' interview question"
      onQuizComplete={onQuizComplete}
    />
  );
}
