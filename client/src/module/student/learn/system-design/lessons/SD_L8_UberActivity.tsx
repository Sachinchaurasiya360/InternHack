import { useEffect, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { BookOpen, Car, Globe, MapPin, RotateCcw } from "lucide-react";
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
/*  TAB 1 - Framework                                                  */
/* ================================================================== */

const STEPS = [
  {
    k: "1. Requirements",
    color: SD,
    items: [
      "Functional: rider requests trip, system finds nearest driver, both track each other live.",
      "Non-functional: dispatch latency p99 < 5s, location updates every 4s, scale to 10M concurrent users.",
      "Out of scope: payments, surge pricing, ratings, fraud (each is a multi-lesson topic).",
    ],
  },
  {
    k: "2. Estimation",
    color: WARN,
    items: [
      "10M active drivers + riders. 4s location pings → 2.5M location updates/sec at peak.",
      "1M trips/day → ~12 trips/sec average, peak ~100/sec.",
      "Per-trip events: 50+ (request, match, accept, en-route, arrived, started, ended, paid, rated…).",
      "Geo data: H3 cells at resolution 9 (~150m hexagons) — 220M cells worldwide.",
    ],
  },
  {
    k: "3. API + Data Model",
    color: PURPLE,
    items: [
      "POST /trip-request { lat, lng } · WS /driver-stream · POST /accept-trip · POST /location-ping",
      "drivers(id, location, status) — live state in Redis keyed by H3 cell",
      "trips(id, rider, driver, state, …) — Postgres for durable trip lifecycle",
      "events stream (Kafka) — every state change for downstream services",
    ],
  },
  {
    k: "4. High-level Diagram",
    color: SD,
    items: [
      "Driver app → location-stream → Redis sharded by H3 cell.",
      "Rider request → dispatch service → query nearby cells → score + offer to driver via push.",
      "Trip lifecycle in Postgres with events to Kafka, fanned to billing / fraud / ETA / surge / analytics.",
    ],
  },
];

function FrameworkApplied() {
  return (
    <div>
      <h3 style={sectionTitle}>The 4-step framework, applied to Uber</h3>
      <p style={sectionDesc}>
        Uber is interesting because it&rsquo;s a real-time matching system, not a CRUD app. Every
        component touches geo and most are async.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {STEPS.map((s) => (
          <motion.div
            key={s.k}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "16px 18px", border: `1.5px solid ${s.color}55`, borderRadius: 10, background: `${s.color}08`, display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: s.color, letterSpacing: "0.04em" }}>
              {s.k.toUpperCase()}
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
              {s.items.map((it, i) => (
                <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.84rem", color: "var(--eng-text)", lineHeight: 1.5 }}>
                  <span style={{ color: s.color, fontWeight: 800 }}>·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Live map dispatch                                          */
/* ================================================================== */

const MAP_W = 600;
const MAP_H = 360;

interface DriverPos { id: number; x: number; y: number; busy: boolean; }

const INITIAL_DRIVERS: DriverPos[] = [
  { id: 1, x: 100, y: 90, busy: false },
  { id: 2, x: 200, y: 200, busy: false },
  { id: 3, x: 320, y: 130, busy: false },
  { id: 4, x: 400, y: 270, busy: false },
  { id: 5, x: 480, y: 100, busy: false },
  { id: 6, x: 550, y: 220, busy: false },
  { id: 7, x: 250, y: 310, busy: false },
];

type Phase = "idle" | "searching" | "offered" | "matched" | "enroute";

function DispatchDemo() {
  const [drivers, setDrivers] = useState<DriverPos[]>(INITIAL_DRIVERS);
  const [rider, setRider] = useState({ x: 280, y: 200 });
  const [phase, setPhase] = useState<Phase>("idle");
  const [selectedDriverId, setSelectedDriverId] = useState<number | null>(null);

  const SEARCH_RADIUS = 140;

  const nearbyDrivers = drivers.filter((d) => {
    if (d.busy) return false;
    const dx = d.x - rider.x;
    const dy = d.y - rider.y;
    return Math.sqrt(dx * dx + dy * dy) <= SEARCH_RADIUS;
  });

  const requestTrip = () => {
    if (phase !== "idle") return;
    setPhase("searching");
    // After 800ms, score nearby drivers and pick the closest
    setTimeout(() => {
      if (nearbyDrivers.length === 0) {
        setPhase("idle");
        return;
      }
      const closest = nearbyDrivers
        .map((d) => ({ d, dist: Math.sqrt((d.x - rider.x) ** 2 + (d.y - rider.y) ** 2) }))
        .sort((a, b) => a.dist - b.dist)[0].d;
      setSelectedDriverId(closest.id);
      setPhase("offered");
      // Driver accepts after 1s
      setTimeout(() => {
        setPhase("matched");
        // Drive to rider
        setTimeout(() => setPhase("enroute"), 1200);
      }, 1000);
    }, 800);
  };

  // Animate matched driver toward rider
  useEffect(() => {
    if (phase !== "enroute" || selectedDriverId === null) return;
    const handle = setInterval(() => {
      setDrivers((ds) => {
        return ds.map((d) => {
          if (d.id !== selectedDriverId) return d;
          const dx = rider.x - d.x;
          const dy = rider.y - d.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 6) {
            // arrived
            setTimeout(() => {
              setPhase("idle");
              setDrivers((qs) => qs.map((q) => (q.id === selectedDriverId ? { ...q, busy: true } : q)));
              setSelectedDriverId(null);
            }, 600);
            return { ...d, x: rider.x, y: rider.y };
          }
          return { ...d, x: d.x + (dx / dist) * 4, y: d.y + (dy / dist) * 4 };
        });
      });
    }, 60);
    return () => clearInterval(handle);
  }, [phase, selectedDriverId, rider]);

  const moveRider = (e: React.MouseEvent<SVGSVGElement>) => {
    if (phase !== "idle") return;
    const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * MAP_W;
    const y = ((e.clientY - rect.top) / rect.height) * MAP_H;
    setRider({ x, y });
  };

  const reset = () => {
    setDrivers(INITIAL_DRIVERS);
    setRider({ x: 280, y: 200 });
    setPhase("idle");
    setSelectedDriverId(null);
  };

  return (
    <div>
      <h3 style={sectionTitle}>Click anywhere on the map to move the rider, then request</h3>
      <p style={sectionDesc}>
        7 drivers on the map. The dispatch service queries nearby H3 cells (lime ring), scores
        candidates, sends an offer to the closest, waits for acceptance, then routes the driver
        to the rider.
      </p>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 18 }}>
        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          width="100%"
          style={{ display: "block", borderRadius: 8, background: "rgba(15,23,42,0.6)", cursor: phase === "idle" ? "crosshair" : "default" }}
          onClick={moveRider}
        >
          {/* H3-like grid */}
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`gx${i}`} x1={i * 60} x2={i * 60} y1={0} y2={MAP_H} stroke="rgba(148,163,184,0.06)" strokeWidth={1} />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`gy${i}`} x1={0} x2={MAP_W} y1={i * 60} y2={i * 60} stroke="rgba(148,163,184,0.06)" strokeWidth={1} />
          ))}

          {/* search radius */}
          {(phase === "searching" || phase === "offered") && (
            <motion.circle cx={rider.x} cy={rider.y} r={SEARCH_RADIUS} fill={SD} fillOpacity={0.08} stroke={SD} strokeWidth={1.5} strokeDasharray="6 4" />
          )}

          {/* drivers */}
          {drivers.map((d) => {
            const isSelected = d.id === selectedDriverId;
            const c = isSelected ? SD : d.busy ? NEUTRAL : "#fff";
            return (
              <motion.g key={d.id} animate={{ x: d.x, y: d.y }} transition={{ duration: 0.06, ease: "linear" }}>
                <circle cx={0} cy={0} r={isSelected ? 12 : 8} fill={`${c}22`} stroke={c} strokeWidth={1.5} />
                <Car width={isSelected ? 14 : 11} height={isSelected ? 14 : 11} x={isSelected ? -7 : -5.5} y={isSelected ? -7 : -5.5} style={{ color: c }} />
                {isSelected && phase === "offered" && (
                  <motion.circle
                    initial={{ r: 12, opacity: 0.5 }}
                    animate={{ r: 22, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                    cx={0}
                    cy={0}
                    fill="none"
                    stroke={SD}
                    strokeWidth={1.5}
                  />
                )}
              </motion.g>
            );
          })}

          {/* rider */}
          <motion.g animate={{ x: rider.x, y: rider.y }} transition={{ type: "spring", stiffness: 320, damping: 28 }}>
            <motion.circle r={14} cx={0} cy={0} fill={WARN} fillOpacity={0.15} initial={{ scale: 0.95 }} animate={{ scale: 1.1 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} />
            <circle cx={0} cy={0} r={9} fill={WARN} stroke="#0b1220" strokeWidth={2} />
            <MapPin width={11} height={11} x={-5.5} y={-5.5} style={{ color: "#0b1220" }} />
          </motion.g>

          {/* Status text */}
          <text x={MAP_W / 2} y={20} textAnchor="middle" fill={NEUTRAL} fontSize={12} fontFamily={MONO}>
            {phase === "idle" && "click on the map to move rider · then request a trip"}
            {phase === "searching" && `searching ${nearbyDrivers.length} nearby drivers…`}
            {phase === "offered" && "trip offered to closest driver…"}
            {phase === "matched" && "matched · driver en route"}
            {phase === "enroute" && "driver en route…"}
          </text>
        </svg>

        <div className="grid grid-cols-3 gap-2 mt-4">
          <Stat label="phase" value={phase.toUpperCase()} color={phase === "idle" ? NEUTRAL : SD} />
          <Stat label="nearby drivers" value={String(nearbyDrivers.length)} color={SD} />
          <Stat label="busy drivers" value={String(drivers.filter((d) => d.busy).length)} color={WARN} />
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={requestTrip} disabled={phase !== "idle"} style={btn(SD, phase !== "idle")}>
            <MapPin className="w-3.5 h-3.5" />
            request trip
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL, false)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>

        <div style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}>
          <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
            UNDER THE HOOD
          </span>
          The search radius queries Redis for all drivers in the rider&rsquo;s H3 cell + 6 neighbor
          rings. Candidates are scored on distance + ETA + driver score. Top candidate gets a
          push offer; on accept, the trip flips to matched and the lifecycle continues through
          Kafka events to billing, ETA, and analytics services.
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${color}55`, background: `${color}10`, textAlign: "center" }}>
      <div style={{ fontFamily: MONO, fontSize: "0.66rem", color, letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>
        {label}
      </div>
      <div style={{ fontFamily: MONO, fontSize: "0.95rem", fontWeight: 800, color: "var(--eng-text)" }}>
        {value}
      </div>
    </div>
  );
}

function btn(color: string, disabled: boolean): CSSProperties {
  return {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "8px 14px", borderRadius: 6,
    cursor: disabled ? "not-allowed" : "pointer",
    border: `1.5px solid ${color}`, background: `${color}18`, color,
    fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700,
    letterSpacing: "0.08em", textTransform: "uppercase",
    opacity: disabled ? 0.5 : 1,
  };
}

/* ================================================================== */
/*  TAB 3 - One trip = many services                                   */
/* ================================================================== */

const SERVICES = [
  { k: "Dispatch", v: "Matches rider to driver. Reads driver locations from Redis, scores candidates." },
  { k: "Location stream", v: "Ingests 4-second pings from every driver. Updates Redis cell index." },
  { k: "Trip service", v: "Owns the trip state machine in Postgres. Emits state-change events to Kafka." },
  { k: "ETA service", v: "Consumes location pings, predicts ETA, surfaces back to rider app." },
  { k: "Pricing / surge", v: "Watches supply/demand per cell, decides multipliers. Runs a Kafka stream job." },
  { k: "Payments", v: "Consumes 'trip_ended' events, settles fare with PSP. Idempotency-keyed." },
  { k: "Fraud", v: "Stream job watches for anomalies (5 trips in 5 min, spoofed GPS, etc.). Flags trips." },
  { k: "Analytics", v: "Every event also goes to a data warehouse via CDC for reporting." },
];

function ServiceMap() {
  return (
    <div>
      <h3 style={sectionTitle}>One trip touches eight services</h3>
      <p style={sectionDesc}>
        The dispatch animation is just the front end. The backbone is event-driven — every
        state change emits an event, and a constellation of services react.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {SERVICES.map((s) => (
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

export default function SD_L8_UberActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "framework", label: "Framework", icon: <BookOpen className="w-4 h-4" />, content: <FrameworkApplied /> },
    { id: "map", label: "Live Dispatch", icon: <MapPin className="w-4 h-4" />, content: <DispatchDemo /> },
    { id: "services", label: "Service Map", icon: <Globe className="w-4 h-4" />, content: <ServiceMap /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why does Uber use H3 hexagons instead of geohash rectangles?",
      options: [
        "Hexagons look better.",
        "Hex cells have 6 equidistant neighbors — uniform neighbor distance is important for fair surge zones and accurate ETAs.",
        "Hex compresses better.",
        "Required by the GPS spec.",
      ],
      correctIndex: 1,
      explanation: "Geohash rectangles have 8 neighbors at varying distances, which causes weird artifacts in dispatch math. H3's hexagonal tessellation gives 6 equidistant neighbors and clean nesting at multiple resolutions.",
    },
    {
      question: "Why is the trip lifecycle event-driven (Kafka) instead of synchronous calls?",
      options: [
        "It's faster.",
        "A trip touches 8+ services. Synchronous chains would be brittle and slow. Events let each service react independently and scale on its own.",
        "Cheaper to license.",
        "Required by AWS.",
      ],
      correctIndex: 1,
      explanation: "Synchronous = tight coupling, slow checkout, cascading failures. Events let billing, fraud, analytics, ETA all consume the same trip state changes without the trip service even knowing they exist.",
    },
    {
      question: "Driver location updates come every 4 seconds. With 5M active drivers, what's the location-update rate?",
      options: ["1k/sec", "About 1.25M/sec", "100/sec", "10M/sec"],
      correctIndex: 1,
      explanation: "5M / 4s = 1.25M location updates/sec. This is why locations live in Redis (sharded by H3 cell), not in Postgres. The hot write path can't be a transactional DB.",
    },
    {
      question: "A driver disconnects mid-trip (lost signal). Best system response?",
      options: [
        "Cancel the trip.",
        "Hold the trip in 'connection lost' state, retry GPS pings, only mark it failed after a timeout. App shows a 'reconnecting' UI.",
        "Charge the rider.",
        "Crash.",
      ],
      correctIndex: 1,
      explanation: "Network blips happen in cars constantly (tunnels, basements). Tolerate brief disconnects with a state and a timeout, not an immediate fail. The trip service's state machine has explicit 'unknown' / 'reconnecting' states.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Design Uber Dispatch"
      level={8}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The classic 'design Uber / Lyft / DoorDash' interview question"
      onQuizComplete={onQuizComplete}
    />
  );
}

