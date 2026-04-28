import { useMemo, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, MapPin } from "lucide-react";
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

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>Turning &ldquo;nearby&rdquo; into a B-tree lookup</h3>
      <p style={sectionDesc}>
        2D coordinates can&rsquo;t be indexed directly with a B-tree. Geo indexes solve this by
        encoding (lat, lng) into a 1D string (<b>geohash</b>) or a hierarchical grid (<b>quadtree</b>).
        Now &ldquo;find nearby&rdquo; becomes a prefix scan or a tree walk — both backed by indexes you
        already have.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {[
          {
            name: "Geohash",
            color: SD,
            tag: "string prefix index",
            how: "Interleave lat & lng bits → encode as base-32 string. Nearby points share long prefixes. 'tdr1y' is one neighborhood; 'tdr1z' is right next door.",
            ex: "Redis GEO commands, Postgres + GiST extensions, MongoDB 2dsphere.",
          },
          {
            name: "Quadtree",
            color: PURPLE,
            tag: "recursive subdivision",
            how: "Recursively split a region into 4 quadrants until each holds at most K points. Find-nearby = walk down to the right quadrant, scan its points + neighbors.",
            ex: "Uber's H3 (a hex variant), Google S2, OpenStreetMap.",
          },
        ].map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: "16px 18px", border: `1.5px solid ${p.color}55`, borderRadius: 10, background: `${p.color}08`, display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "1rem", marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: p.color, fontWeight: 700 }}>
                {p.tag}
              </div>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.6 }}>{p.how}</div>
            <div style={{ paddingTop: 8, borderTop: `1px dashed ${p.color}33`, fontFamily: MONO, fontSize: "0.74rem", color: p.color }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{p.ex}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Uber</b> built H3 (hexagonal grid). <b>Swiggy / Zomato</b> use geohash for delivery
          zones. <b>Google Maps / Spanner</b> use S2. <b>Tinder</b> &ldquo;nearby&rdquo; is geohash on
          Redis. Whenever you see a &ldquo;within 5 km&rdquo; query at scale, one of these is under
          the hood.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Map with draggable pin + radius search                     */
/* ================================================================== */

const MAP_W = 600;
const MAP_H = 360;

interface POI {
  id: number;
  label: string;
  x: number;
  y: number;
}

const POIS: POI[] = [
  { id: 1, label: "Cafe Mocha", x: 180, y: 130 },
  { id: 2, label: "Bombay Bistro", x: 220, y: 200 },
  { id: 3, label: "Pune Tiffin", x: 320, y: 110 },
  { id: 4, label: "Spice Box", x: 380, y: 230 },
  { id: 5, label: "Chai Point", x: 460, y: 150 },
  { id: 6, label: "Filter Coffee", x: 280, y: 290 },
  { id: 7, label: "South Indian", x: 130, y: 250 },
  { id: 8, label: "North Bites", x: 500, y: 290 },
];

function GeoDemo() {
  const [pin, setPin] = useState({ x: 280, y: 200 });
  const [radius, setRadius] = useState(120);
  const [precision, setPrecision] = useState(3); // grid precision: 1 → 8x8, 2 → 16x16, 3 → 32x32

  const cellsPerSide = Math.pow(2, precision + 2); // 8, 16, 32, 64
  const cellW = MAP_W / cellsPerSide;
  const cellH = MAP_H / cellsPerSide;
  const pinCellX = Math.floor(pin.x / cellW);
  const pinCellY = Math.floor(pin.y / cellH);

  // Find cells within search radius (the "geohash neighbors" approximation)
  const searchCells = useMemo(() => {
    const cells = new Set<string>();
    // bounding box of cells covering the radius
    const minX = Math.floor((pin.x - radius) / cellW);
    const maxX = Math.floor((pin.x + radius) / cellW);
    const minY = Math.floor((pin.y - radius) / cellH);
    const maxY = Math.floor((pin.y + radius) / cellH);
    for (let cx = minX; cx <= maxX; cx++) {
      for (let cy = minY; cy <= maxY; cy++) {
        if (cx >= 0 && cx < cellsPerSide && cy >= 0 && cy < cellsPerSide) {
          cells.add(`${cx},${cy}`);
        }
      }
    }
    return cells;
  }, [pin, radius, cellW, cellH, cellsPerSide]);

  const nearby = useMemo(() => {
    return POIS.filter((p) => {
      const dx = p.x - pin.x;
      const dy = p.y - pin.y;
      return Math.sqrt(dx * dx + dy * dy) <= radius;
    });
  }, [pin, radius]);

  const pinHash = useMemo(() => {
    // Simulated geohash: encode cell coords at the chosen precision as base32 char(s)
    const xBin = pinCellX.toString(2).padStart(precision + 2, "0");
    const yBin = pinCellY.toString(2).padStart(precision + 2, "0");
    let interleaved = "";
    for (let i = 0; i < xBin.length; i++) {
      interleaved += xBin[i] + yBin[i];
    }
    // Convert each 5 bits to base-32-ish character
    const chars = "0123456789bcdefghjkmnpqrstuvwxyz";
    let out = "";
    for (let i = 0; i < interleaved.length; i += 5) {
      const chunk = interleaved.slice(i, i + 5).padEnd(5, "0");
      out += chars[parseInt(chunk, 2)] ?? "";
    }
    return out || "0";
  }, [pinCellX, pinCellY, precision]);

  const handleMapClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * MAP_W;
    const y = ((e.clientY - rect.top) / rect.height) * MAP_H;
    setPin({ x, y });
  };

  return (
    <div>
      <h3 style={sectionTitle}>Click anywhere to drop a pin. Slide the radius.</h3>
      <p style={sectionDesc}>
        The pin&rsquo;s geohash is computed at the chosen precision. The search radius is converted
        to a bounding box of cells. The DB scans only those cells, then filters by exact distance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <Slider label="search radius" value={radius} setValue={setRadius} min={40} max={240} step={10} suffix="px" />
        <Slider label="geohash precision" value={precision} setValue={setPrecision} min={1} max={4} step={1} suffix={`= ${cellsPerSide}×${cellsPerSide} grid`} />
      </div>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 18 }}>
        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          width="100%"
          style={{ display: "block", borderRadius: 8, background: "rgba(15,23,42,0.6)", cursor: "crosshair" }}
          onClick={handleMapClick}
        >
          {/* grid */}
          {Array.from({ length: cellsPerSide + 1 }).map((_, i) => (
            <line key={`gx${i}`} x1={i * cellW} x2={i * cellW} y1={0} y2={MAP_H} stroke="rgba(148,163,184,0.08)" strokeWidth={1} />
          ))}
          {Array.from({ length: cellsPerSide + 1 }).map((_, i) => (
            <line key={`gy${i}`} x1={0} x2={MAP_W} y1={i * cellH} y2={i * cellH} stroke="rgba(148,163,184,0.08)" strokeWidth={1} />
          ))}

          {/* highlighted cells */}
          {Array.from(searchCells).map((key) => {
            const [cx, cy] = key.split(",").map(Number);
            return (
              <motion.rect
                key={key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                x={cx * cellW}
                y={cy * cellH}
                width={cellW}
                height={cellH}
                fill={SD}
                fillOpacity={0.08}
                stroke={SD}
                strokeOpacity={0.3}
                strokeWidth={1}
              />
            );
          })}

          {/* pin's cell highlighted brighter */}
          <motion.rect
            animate={{ x: pinCellX * cellW, y: pinCellY * cellH, width: cellW, height: cellH }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            fill={SD}
            fillOpacity={0.22}
            stroke={SD}
            strokeWidth={2}
          />

          {/* radius circle */}
          <motion.circle
            animate={{ cx: pin.x, cy: pin.y, r: radius }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            fill="none"
            stroke={SD}
            strokeWidth={1.5}
            strokeDasharray="6 4"
          />

          {/* POIs */}
          {POIS.map((p) => {
            const dx = p.x - pin.x;
            const dy = p.y - pin.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const inside = dist <= radius;
            const c = inside ? SD : NEUTRAL;
            return (
              <motion.g key={p.id} animate={{ opacity: inside ? 1 : 0.4 }} transition={{ duration: 0.25 }}>
                <circle cx={p.x} cy={p.y} r={5} fill={c} stroke="#0b1220" strokeWidth={2} />
                <text x={p.x + 8} y={p.y + 4} fill={c} fontSize={10} fontWeight={700} fontFamily={MONO}>
                  {p.label}
                </text>
              </motion.g>
            );
          })}

          {/* pin marker */}
          <motion.g animate={{ x: pin.x, y: pin.y }} transition={{ type: "spring", stiffness: 320, damping: 28 }}>
            <motion.circle
              r={radius}
              cx={0}
              cy={0}
              fill={SD}
              initial={{ opacity: 0.05, scale: 0.95 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            />
            <circle cx={0} cy={0} r={8} fill={WARN} stroke="#0b1220" strokeWidth={2} />
            <circle cx={0} cy={0} r={3} fill="#0b1220" />
          </motion.g>
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
          <Stat label="pin geohash" value={pinHash} color={WARN} />
          <Stat label="cells scanned" value={String(searchCells.size)} color={SD} />
          <Stat label="POIs in radius" value={`${nearby.length} / ${POIS.length}`} color={SD} />
        </div>

        <div style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}>
          <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
            HOW THE QUERY WORKS
          </span>
          1. Compute pin&rsquo;s geohash → <code style={{ color: WARN, fontFamily: MONO }}>{pinHash}</code>.
          2. Compute neighboring cells covering the search radius. 3. DB does a prefix scan on
          those geohashes and returns candidates. 4. App filters by exact great-circle distance.
          Two cheap ops, no full-table scan.
        </div>
      </div>
    </div>
  );
}

function Slider({ label, value, setValue, min, max, step, suffix }: { label: string; value: number; setValue: (v: number) => void; min: number; max: number; step: number; suffix?: string }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700, color: "var(--eng-text)" }}>{label}</span>
        <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800, color: SD }}>= {value} {suffix ?? ""}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(Number(e.target.value))} style={{ width: "100%", accentColor: SD }} />
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${color}55`, background: `${color}10`, textAlign: "center" }}>
      <div style={{ fontFamily: MONO, fontSize: "0.66rem", color, letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>
        {label}
      </div>
      <div style={{ fontFamily: MONO, fontSize: "0.95rem", fontWeight: 800, color: "var(--eng-text)", overflow: "hidden", textOverflow: "ellipsis" }}>
        {value}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - Real geo systems                                           */
/* ================================================================== */

const SYSTEMS = [
  { name: "Uber dispatch", uses: "H3 (hexagons)", why: "Hex cells have uniform neighbor distance — important for accurate ETA estimates and fair surge zones." },
  { name: "Swiggy delivery zones", uses: "Geohash on Redis", why: "Pre-warmed by city. Restaurants and customers map to a geohash; lookup is a single Redis ZRANGEBYSCORE." },
  { name: "Tinder nearby", uses: "Geohash + Postgres GiST", why: "Cheap to query, indexes well, doesn't need exact distance until the final step." },
  { name: "Google Maps / Spanner", uses: "S2 (cell IDs)", why: "Hierarchical curve covers spheres uniformly. Used by Maps, Earth, Pokemon Go." },
  { name: "Postgres + PostGIS", uses: "R-tree on geometries", why: "When you need polygon containment, intersection, and arbitrary shapes — beyond simple lat/lng radius." },
];

function RealGeo() {
  return (
    <div>
      <h3 style={sectionTitle}>Real systems pick different schemes</h3>
      <p style={sectionDesc}>
        The choice depends on the query pattern: exact polygon containment vs simple radius vs
        nearest-neighbor. Five real systems and their picks.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {SYSTEMS.map((s) => (
          <motion.div
            key={s.name}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
              <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem" }}>{s.name}</span>
              <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.06em", padding: "3px 8px", borderRadius: 4, border: `1px solid ${SD}55`, background: `${SD}14` }}>
                {s.uses}
              </span>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{s.why}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L7_GeoActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Drop a Pin", icon: <MapPin className="w-4 h-4" />, content: <GeoDemo /> },
    { id: "real", label: "Real Systems", icon: <Globe className="w-4 h-4" />, content: <RealGeo /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why can't (lat, lng) be indexed directly with a B-tree?",
      options: [
        "Floats aren't supported.",
        "B-trees order by ONE key. (lat, lng) is two-dimensional — a B-tree on lat alone can't help with 'nearby this point' queries.",
        "Latitudes are too small.",
        "Postgres prevents it.",
      ],
      correctIndex: 1,
      explanation: "B-trees are 1D. A composite (lat, lng) index works for prefix queries on lat, but a 2D 'within a km' query has no efficient prefix. Geohash maps 2D to 1D specifically so a B-tree (or string prefix index) can serve it.",
    },
    {
      question: "Two locations have geohashes 'tdr1y0' and 'tdr1y1'. What does that tell you?",
      options: [
        "They're far apart.",
        "They share a long prefix — they're geographically close, in adjacent cells at the finest precision.",
        "Random.",
        "One is in the ocean.",
      ],
      correctIndex: 1,
      explanation: "Geohash is a Z-order / Morton curve. Shared prefix means shared region. Cells with prefix 'tdr1y' are in the same neighborhood; the differing last char picks one of 32 sub-cells.",
    },
    {
      question: "A 'restaurants within 2 km' query at scale. What's the standard pipeline?",
      options: [
        "Full-scan everything.",
        "Compute pin geohash + neighbors covering 2km, prefix-scan candidates, then filter by exact great-circle distance.",
        "Use a graph DB.",
        "Cache the entire map.",
      ],
      correctIndex: 1,
      explanation: "Geohash gives an approximate set. The bounding-box scan is cheap because it's an indexed prefix scan. Exact distance filter on the candidate set is the final step. Order of magnitudes faster than scanning all locations.",
    },
    {
      question: "What's Uber's H3 trying to fix relative to plain geohash?",
      options: [
        "Disk usage.",
        "Geohash cells are rectangles with non-uniform neighbor distances, and edge cells distort. Hexagons have uniform neighbor distance and clean nesting at scale.",
        "Naming.",
        "Speed.",
      ],
      correctIndex: 1,
      explanation: "Hexagons have 6 equidistant neighbors — better for distance estimates and surge zones. Geohash 'rectangles' have 8 neighbors at varying distances, which causes weird artifacts in dispatch math.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Geohash & Quadtree"
      level={7}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'find nearby' answer for Uber, Swiggy, Tinder, and any geo app"
      onQuizComplete={onQuizComplete}
    />
  );
}
