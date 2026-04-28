import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shapes, FileCode2, Check, Eye, EyeOff,
  Monitor, Server, Database, Box, Zap, Cloud, ArrowRight,
} from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  SD,
  MONO,
  sectionTitle,
  sectionDesc,
  staggerContainer,
  cardEntrance,
  cardHover,
} from "./_shared/styles";

const GOOD = "#10b981";
const BAD = "#f97316";

/* ================================================================== */
/*  TAB 1 - Box vocabulary                                              */
/* ================================================================== */

interface BoxShape {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  desc: string;
  example: string;
}

const SHAPES: BoxShape[] = [
  {
    id: "client",
    label: "Client",
    icon: <Monitor className="w-5 h-5" />,
    color: "#6366f1",
    desc: "Anything a user holds - browser, mobile app, IoT device. Always the leftmost box.",
    example: "iOS app, React web app, smart TV",
  },
  {
    id: "lb",
    label: "Load Balancer",
    icon: <Shapes className="w-5 h-5" />,
    color: "#f59e0b",
    desc: "Spreads traffic across many servers. Makes 100 servers look like 1. Drawn as a diamond or rounded pill.",
    example: "AWS ALB, Nginx, HAProxy",
  },
  {
    id: "service",
    label: "Service / App Server",
    icon: <Server className="w-5 h-5" />,
    color: SD,
    desc: "Where your business logic runs. Usually drawn as a rectangle. Horizontally scalable.",
    example: "Tweet service, Auth service, Order service",
  },
  {
    id: "cache",
    label: "Cache",
    icon: <Zap className="w-5 h-5" />,
    color: "#ec4899",
    desc: "Fast in-memory store sitting in front of a slow DB. Reduces load on the database.",
    example: "Redis, Memcached, in-process LRU",
  },
  {
    id: "db",
    label: "Database",
    icon: <Database className="w-5 h-5" />,
    color: "#10b981",
    desc: "Durable storage. Cylinder shape is universal - never draw it as a plain box. Usually the rightmost box.",
    example: "PostgreSQL, Cassandra, MongoDB, DynamoDB",
  },
  {
    id: "queue",
    label: "Queue / Stream",
    icon: <Box className="w-5 h-5" />,
    color: "#8b5cf6",
    desc: "Buffer between producer and consumer. Decouples services. Drawn as stacked bars.",
    example: "Kafka, RabbitMQ, SQS",
  },
  {
    id: "cdn",
    label: "CDN",
    icon: <Cloud className="w-5 h-5" />,
    color: "#06b6d4",
    desc: "Caches static content (images, JS, video) close to users geographically. Reduces latency and egress cost.",
    example: "Cloudflare, CloudFront, Fastly",
  },
];

function BoxVocabulary() {
  const [picked, setPicked] = useState<string | null>("service");
  const active = SHAPES.find((s) => s.id === picked) ?? SHAPES[2];

  return (
    <div>
      <h3 style={sectionTitle}>The 7 boxes that cover 90% of HLD diagrams</h3>
      <p style={sectionDesc}>
        Every HLD diagram you draw is a rearrangement of the same 7 shapes. Memorize what each one
        means - your interviewer certainly has. Click any shape to see when to use it.
      </p>

      {/* shape palette */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8, marginBottom: 18 }}
      >
        {SHAPES.map((s) => {
          const on = picked === s.id;
          return (
            <motion.button
              key={s.id}
              variants={cardEntrance}
              whileHover={cardHover}
              onClick={() => setPicked(s.id)}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                padding: "12px 6px", borderRadius: 10, cursor: "pointer",
                border: on ? `1.5px solid ${s.color}` : "1.5px solid var(--eng-border)",
                background: on ? `${s.color}15` : "var(--eng-bg-subtle)",
                fontFamily: "var(--eng-font)", transition: "border-color 180ms, background 180ms",
              }}
            >
              <div
                style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: on ? s.color : "var(--eng-bg)",
                  color: on ? "#fff" : s.color,
                  border: on ? "none" : `1.5px solid ${s.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                {s.icon}
              </div>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--eng-text)", textAlign: "center" }}>
                {s.label}
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* detail card */}
      <AnimatePresence mode="wait">
      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        style={{
          border: `1.5px solid ${active.color}`, borderRadius: 12, padding: "18px 20px",
          background: `${active.color}0f`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <div
            style={{
              width: 40, height: 40, borderRadius: 8,
              background: active.color, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {active.icon}
          </div>
          <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--eng-text)" }}>
            {active.label}
          </div>
        </div>
        <div style={{ fontSize: "0.92rem", color: "var(--eng-text)", lineHeight: 1.6, marginBottom: 10 }}>
          {active.desc}
        </div>
        <div
          style={{
            fontFamily: MONO, fontSize: "0.8rem", padding: "8px 12px", borderRadius: 6,
            background: "var(--eng-bg)", border: `1px solid ${active.color}40`,
            color: "var(--eng-text)",
          }}
        >
          <span style={{ color: active.color, fontWeight: 700 }}>examples: </span>
          {active.example}
        </div>
      </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Arrow semantics + a reference diagram                       */
/* ================================================================== */

function ArrowsAndDiagram() {
  const [showLabels, setShowLabels] = useState(true);

  // a canonical "web app" reference diagram
  return (
    <div>
      <h3 style={sectionTitle}>Arrows mean things. Label them.</h3>
      <p style={sectionDesc}>
        An unlabeled arrow is ambiguous. Is it HTTP? Is it async? Is it one-way? Pros label every
        arrow with a verb or a protocol. Toggle labels below - notice how much the diagram loses
        when you remove them.
      </p>

      {/* legend */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 16 }}>
        {[
          { label: "Solid arrow", desc: "Synchronous request/response (HTTP, gRPC)", sample: "→" },
          { label: "Dashed arrow", desc: "Async message (queue, pub/sub, webhook)", sample: "⇢" },
          { label: "Double-ended", desc: "Bidirectional (WebSocket, replication)", sample: "↔" },
        ].map((l) => (
          <div
            key={l.label}
            style={{
              padding: "10px 12px", border: "1.5px solid var(--eng-border)", borderRadius: 8,
              background: "var(--eng-bg-subtle)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontFamily: MONO, fontSize: "1.1rem", color: SD, fontWeight: 700 }}>{l.sample}</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--eng-text)" }}>{l.label}</span>
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--eng-text-muted)", lineHeight: 1.5 }}>
              {l.desc}
            </div>
          </div>
        ))}
      </div>

      {/* toggle */}
      <button
        onClick={() => setShowLabels((v) => !v)}
        style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "6px 12px", borderRadius: 8, cursor: "pointer",
          border: `1.5px solid ${SD}`, background: showLabels ? SD : "transparent",
          color: showLabels ? "#fff" : SD,
          fontFamily: "var(--eng-font)", fontSize: "0.8rem", fontWeight: 600,
          marginBottom: 12,
        }}
      >
        {showLabels ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
        {showLabels ? "Labels ON" : "Labels OFF"}
      </button>

      {/* reference diagram */}
      <div
        style={{
          border: "1.5px solid var(--eng-border)", borderRadius: 12,
          background: "var(--eng-bg-subtle)", padding: 20,
        }}
      >
        <svg viewBox="0 0 800 320" style={{ width: "100%", height: "auto", maxHeight: 360 }}>
          {/* defs */}
          <defs>
            <marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 z" fill={SD} />
            </marker>
            <marker id="arr-muted" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 z" fill="#8b5cf6" />
            </marker>
          </defs>

          {/* Client */}
          <rect x="20" y="130" width="100" height="60" rx="8" fill="#6366f115" stroke="#6366f1" strokeWidth="1.5" />
          <text x="70" y="165" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="13" fontWeight="700" fill="#6366f1">Client</text>

          {/* CDN */}
          <rect x="170" y="30" width="90" height="50" rx="8" fill="#06b6d415" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="215" y="60" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="12" fontWeight="700" fill="#06b6d4">CDN</text>

          {/* LB */}
          <polygon points="215,140 275,160 215,180 155,160" fill="#f59e0b15" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="215" y="165" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="12" fontWeight="700" fill="#f59e0b">LB</text>

          {/* App Server */}
          <rect x="325" y="130" width="110" height="60" rx="8" fill={`${SD}15`} stroke={SD} strokeWidth="1.5" />
          <text x="380" y="158" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="13" fontWeight="700" fill={SD}>App Server</text>
          <text x="380" y="175" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="10" fill="var(--eng-text-muted)">× N replicas</text>

          {/* Cache */}
          <rect x="490" y="60" width="90" height="50" rx="8" fill="#ec489915" stroke="#ec4899" strokeWidth="1.5" />
          <text x="535" y="90" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="12" fontWeight="700" fill="#ec4899">Cache</text>

          {/* DB cylinder */}
          <ellipse cx="535" cy="170" rx="55" ry="12" fill="#10b98115" stroke="#10b981" strokeWidth="1.5" />
          <path d="M480 170 L480 215 A55 12 0 0 0 590 215 L590 170" fill="#10b98115" stroke="#10b981" strokeWidth="1.5" />
          <ellipse cx="535" cy="170" rx="55" ry="12" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <text x="535" y="200" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="12" fontWeight="700" fill="#10b981">DB</text>

          {/* Queue */}
          <g>
            <rect x="325" y="240" width="110" height="50" rx="6" fill="#8b5cf615" stroke="#8b5cf6" strokeWidth="1.5" />
            <line x1="345" y1="248" x2="345" y2="282" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="365" y1="248" x2="365" y2="282" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="385" y1="248" x2="385" y2="282" stroke="#8b5cf6" strokeWidth="1" />
            <text x="380" y="270" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="12" fontWeight="700" fill="#8b5cf6">Queue</text>
          </g>

          {/* Worker */}
          <rect x="490" y="240" width="110" height="50" rx="8" fill={`${SD}15`} stroke={SD} strokeWidth="1.5" />
          <text x="545" y="270" textAnchor="middle" fontFamily="var(--eng-font)" fontSize="12" fontWeight="700" fill={SD}>Worker</text>

          {/* arrows */}
          {/* client → CDN (static) */}
          <path d="M 90 145 Q 140 80 175 60" stroke={SD} strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
          {/* client → LB */}
          <line x1="120" y1="160" x2="155" y2="160" stroke={SD} strokeWidth="1.5" markerEnd="url(#arr)" />
          {/* LB → app */}
          <line x1="275" y1="160" x2="325" y2="160" stroke={SD} strokeWidth="1.5" markerEnd="url(#arr)" />
          {/* app → cache */}
          <line x1="435" y1="145" x2="490" y2="95" stroke={SD} strokeWidth="1.5" markerEnd="url(#arr)" />
          {/* app → DB */}
          <line x1="435" y1="170" x2="480" y2="170" stroke={SD} strokeWidth="1.5" markerEnd="url(#arr)" />
          {/* cache → DB (miss) */}
          <line x1="535" y1="110" x2="535" y2="158" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arr-muted)" />
          {/* app → queue (async) */}
          <line x1="380" y1="190" x2="380" y2="240" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arr-muted)" />
          {/* queue → worker */}
          <line x1="435" y1="265" x2="490" y2="265" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arr-muted)" />

          {/* LABELS - toggleable */}
          {showLabels && (
            <g fontFamily={MONO} fontSize="10" fill="var(--eng-text-muted)">
              <text x="135" y="95" fill="#06b6d4">GET /img.jpg</text>
              <text x="128" y="152" fill={SD}>HTTPS</text>
              <text x="283" y="152" fill={SD}>HTTP</text>
              <text x="452" y="115" fill="#ec4899">GET key</text>
              <text x="450" y="162" fill={SD}>SQL</text>
              <text x="545" y="135" fill="#10b981">on miss</text>
              <text x="388" y="220" fill="#8b5cf6">publish</text>
              <text x="445" y="258" fill="#8b5cf6">consume</text>
            </g>
          )}
        </svg>
      </div>

      <div
        style={{
          marginTop: 14, padding: "12px 16px", borderRadius: 10,
          border: `1.5px solid ${GOOD}`, background: `${GOOD}10`,
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.68rem", fontWeight: 800, color: GOOD, letterSpacing: "0.08em", marginBottom: 4 }}>
          READ THE DIAGRAM ABOVE
        </div>
        <div style={{ fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          Top path: client hits CDN for static. Middle: client → LB → App → Cache (then DB on miss).
          Bottom: App publishes async work to Queue, Worker consumes it. That&rsquo;s your default web
          architecture. Memorize the shape.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - Diagram smells (spot the mistakes)                          */
/* ================================================================== */

interface Smell {
  id: string;
  badge: string;
  title: string;
  desc: string;
  fix: string;
}

const SMELLS: Smell[] = [
  {
    id: "db-box",
    badge: "shape",
    title: "Database drawn as a plain rectangle",
    desc: "Reader can&rsquo;t tell if it&rsquo;s a service or storage. Ambiguous.",
    fix: "Always use a cylinder. It&rsquo;s the universal symbol for durable storage.",
  },
  {
    id: "no-lb",
    badge: "scale",
    title: "Multiple servers but no load balancer",
    desc: "How is traffic being distributed? DNS round-robin? Magic?",
    fix: "Any time you draw >1 app server, put an LB in front.",
  },
  {
    id: "no-labels",
    badge: "arrows",
    title: "Unlabeled arrows everywhere",
    desc: "Is it sync or async? HTTP or Kafka? Reader has to guess the protocol.",
    fix: "Label each arrow with a verb or protocol: `POST /order`, `publish`, `replicate`.",
  },
  {
    id: "stale-cache",
    badge: "flow",
    title: "Cache drawn next to DB with no direction",
    desc: "Is the app writing through? Reading around? You just punted on consistency.",
    fix: "Draw explicit arrows: app→cache (read), cache→DB (on miss), app→DB→cache (write).",
  },
  {
    id: "no-client",
    badge: "scope",
    title: "Diagram starts at the app server",
    desc: "Where are the users? Mobile? Web? You skipped the entire network layer.",
    fix: "Always start at the Client on the far left. Show at least one full request path.",
  },
];

function SpotTheSmell() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  return (
    <div>
      <h3 style={sectionTitle}>5 diagram smells that scream junior</h3>
      <p style={sectionDesc}>
        When an interviewer sees any of these, they silently mark you down. Tap each card to reveal
        the fix. These are the exact things a senior would point out in a review.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        {SMELLS.map((s) => {
          const open = revealed[s.id];
          return (
            <motion.div
              key={s.id}
              variants={cardEntrance}
              layout
              style={{
                border: `1.5px solid ${open ? GOOD : BAD}`, borderRadius: 10,
                background: open ? `${GOOD}08` : `${BAD}08`,
                padding: "14px 16px", transition: "border-color 200ms, background 200ms",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span
                  style={{
                    fontFamily: MONO, fontSize: "0.65rem", padding: "2px 8px",
                    borderRadius: 999, background: BAD, color: "#fff",
                    fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase",
                  }}
                >
                  {s.badge}
                </span>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--eng-text)" }}>
                  {s.title}
                </div>
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--eng-text-muted)", lineHeight: 1.55, marginBottom: 10 }}>
                {s.desc}
              </div>
              <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="fix"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  style={{
                    padding: "10px 12px", borderRadius: 8,
                    background: `${GOOD}15`, border: `1px solid ${GOOD}`,
                    display: "flex", alignItems: "flex-start", gap: 8,
                  }}
                >
                  <Check className="w-4 h-4 shrink-0" style={{ color: GOOD, marginTop: 2 }} />
                  <div style={{ fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
                    <span style={{ fontWeight: 700, color: GOOD }}>Fix: </span>
                    {s.fix}
                  </div>
                </motion.div>
              ) : (
                <motion.button
                  key="reveal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setRevealed((r) => ({ ...r, [s.id]: true }))}
                  style={{
                    padding: "6px 12px", borderRadius: 8, cursor: "pointer",
                    border: `1.5px solid ${SD}`, background: "transparent", color: SD,
                    fontFamily: "var(--eng-font)", fontSize: "0.8rem", fontWeight: 600,
                  }}
                >
                  Reveal the fix
                </motion.button>
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

export default function SD_L1_ArchitectureDiagramsActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "shapes", label: "The 7 Shapes", icon: <Shapes className="w-4 h-4" />, content: <BoxVocabulary /> },
    { id: "arrows", label: "Arrows & Flow", icon: <ArrowRight className="w-4 h-4" />, content: <ArrowsAndDiagram /> },
    { id: "smells", label: "Diagram Smells", icon: <FileCode2 className="w-4 h-4" />, content: <SpotTheSmell /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Which shape is universally used for a database in HLD diagrams?",
      options: ["Rectangle", "Cylinder", "Diamond", "Cloud"],
      correctIndex: 1,
      explanation: "Cylinder = durable storage. Use it every time. Rectangles are for services.",
    },
    {
      question: "You draw three App Server boxes. What must come in front of them?",
      options: ["A cache", "A load balancer", "A queue", "A CDN"],
      correctIndex: 1,
      explanation: "Multiple identical servers always sit behind an LB. Otherwise traffic distribution is undefined.",
    },
    {
      question: "In an HLD diagram, a dashed arrow between two services usually means what?",
      options: [
        "Optional connection",
        "Deprecated path",
        "Asynchronous / queued communication",
        "Same as solid - just a style choice",
      ],
      correctIndex: 2,
      explanation: "Dashed = async (queue, pub/sub, webhook). Solid = synchronous HTTP/gRPC. This is a widely-used convention.",
    },
    {
      question: "What&rsquo;s wrong with an unlabeled arrow?",
      options: [
        "Nothing - it&rsquo;s cleaner.",
        "Reader can&rsquo;t tell protocol (HTTP? Kafka?) or direction of data flow.",
        "It&rsquo;s too short.",
        "The color is missing.",
      ],
      correctIndex: 1,
      explanation: "Every arrow should have a verb or protocol: `POST /order`, `publish`, `replicate`. Ambiguity costs points.",
    },
    {
      question: "What does a CDN sit in front of?",
      options: [
        "Your database",
        "Static content (images, JS, video) close to users",
        "Your queue",
        "Your auth service",
      ],
      correctIndex: 1,
      explanation: "CDNs cache static assets at edge locations worldwide. They reduce latency for users and save egress cost for you.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Drawing Architecture Diagrams"
      level={1}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The literal surface area of an HLD whiteboard round"
      onQuizComplete={onQuizComplete}
    />
  );
}
