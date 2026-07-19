import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap } from "lucide-react"

// ─── topology data ─────────────────────────────────────────────────────────

type TopoKey = "bus" | "ring" | "star" | "mesh" | "hybrid"

interface Node { x: number; y: number }
interface Edge { a: number; b: number }
interface Topo {
  label:     string
  nodes:     Node[]
  edges:     Edge[]
  spof:      boolean
  faultTol:  "LOW" | "MEDIUM" | "HIGH"
  info:      string
}

const TOPOLOGIES: Record<TopoKey, Topo> = {
  bus: {
    label: "Bus",
    nodes: [
      { x: 70,  y: 190 },
      { x: 180, y: 190 },
      { x: 290, y: 190 },
      { x: 400, y: 190 },
      { x: 510, y: 190 },
    ],
    edges: [{ a: 0, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 }],
    spof: false,
    faultTol: "LOW",
    info: "A single cable break disconnects all downstream nodes. Simple and cheap.",
  },
  ring: {
    label: "Ring",
    nodes: [
      { x: 290, y:  55 },
      { x: 450, y: 135 },
      { x: 400, y: 305 },
      { x: 180, y: 305 },
      { x: 130, y: 135 },
    ],
    edges: [{ a: 0, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 }, { a: 4, b: 0 }],
    spof: false,
    faultTol: "LOW",
    info: "Any single break can isolate nodes. Dual-ring improves resilience.",
  },
  star: {
    label: "Star",
    nodes: [
      { x: 290, y: 190 },  // hub
      { x: 290, y:  55 },
      { x: 450, y: 190 },
      { x: 290, y: 325 },
      { x: 130, y: 190 },
    ],
    edges: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }],
    spof: true,
    faultTol: "MEDIUM",
    info: "Hub failure takes down the whole network (SPOF). Individual node failures are isolated.",
  },
  mesh: {
    label: "Mesh",
    nodes: [
      { x: 290, y:  55 },
      { x: 450, y: 135 },
      { x: 400, y: 305 },
      { x: 180, y: 305 },
      { x: 130, y: 135 },
    ],
    edges: [
      { a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 },
      { a: 1, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 4 },
      { a: 2, b: 3 }, { a: 2, b: 4 },
      { a: 3, b: 4 },
    ],
    spof: false,
    faultTol: "HIGH",
    info: "Every node has a direct path to every other. Highly redundant but expensive.",
  },
  hybrid: {
    label: "Hybrid",
    nodes: [
      { x: 190, y: 190 },  // star hub
      { x: 100, y:  90 },
      { x: 100, y: 290 },
      { x: 340, y: 190 },  // bus chain
      { x: 470, y: 190 },
    ],
    edges: [
      { a: 0, b: 1 }, { a: 0, b: 2 }, // star arms
      { a: 0, b: 3 }, { a: 3, b: 4 }, // bus extension
    ],
    spof: true,
    faultTol: "MEDIUM",
    info: "Star hub is SPOF; the bus extension adds connectivity without full mesh cost.",
  },
}

const FAULT_COLOR = { LOW: "#F43F5E", MEDIUM: "#F59E0B", HIGH: "#10B981" } as const

// ─── component ─────────────────────────────────────────────────────────────

export default function Anim1B() {
  const [topo,    setTopo]    = useState<TopoKey>("star")
  const [broken,  setBroken]  = useState<number | null>(null)
  const [tooltip, setTooltip] = useState<{ node: number; x: number; y: number } | null>(null)

  const t = TOPOLOGIES[topo]

  function breakNode() {
    // break a non-hub, non-first node for effect
    const candidates = t.nodes
      .map((_, i) => i)
      .filter(i => !(topo === "star" && i === 0) && i !== 0)
    if (candidates.length === 0) { setBroken(1); return }
    setBroken(candidates[Math.floor(Math.random() * candidates.length)])
  }

  function isDisconnected(nodeIdx: number): boolean {
    if (broken === null || nodeIdx === broken) return false
    // simple BFS from node 0 ignoring broken node
    const adj: number[][] = Array.from({ length: t.nodes.length }, () => [])
    for (const e of t.edges) {
      if (e.a !== broken && e.b !== broken) {
        adj[e.a].push(e.b)
        adj[e.b].push(e.a)
      }
    }
    const visited = new Set<number>()
    const queue   = [0]
    while (queue.length) {
      const cur = queue.shift()!
      if (visited.has(cur)) continue
      visited.add(cur)
      adj[cur].forEach(n => queue.push(n))
    }
    return !visited.has(nodeIdx)
  }

  function edgeBroken(e: Edge) {
    return broken !== null && (e.a === broken || e.b === broken)
  }

  return (
    <div className="flex flex-col md:flex-row min-h-95">

      {/* ── SVG canvas ── */}
      <div className="flex-1 relative bg-[#0F172A] overflow-hidden min-h-80">

        {/* dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-b" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#475569" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-b)" />
        </svg>

        <svg
          viewBox="0 0 580 380"
          className="relative z-10 w-full h-full"
          onClick={() => setTooltip(null)}
        >
          {/* edges */}
          {t.edges.map((e, i) => {
            const na = t.nodes[e.a], nb = t.nodes[e.b]
            const broken_ = edgeBroken(e)
            return (
              <motion.line
                key={`${topo}-e${i}`}
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                stroke={broken_ ? "#F43F5E" : "#475569"}
                strokeWidth={broken_ ? 2 : 2}
                strokeDasharray={broken_ ? "6 4" : "none"}
                opacity={broken_ ? 0.7 : 0.9}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: broken_ ? 0.7 : 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              />
            )
          })}

          {/* nodes */}
          {t.nodes.map((n, i) => {
            const isBroken = broken === i
            const isDisco  = isDisconnected(i)
            const isHub    = topo === "star" && i === 0

            let fill   = isHub ? "#84CC16" : "#E2E8F0"
            let stroke = isHub ? "#65A30D" : "#94A3B8"
            if (isBroken) { fill = "#F43F5E"; stroke = "#E11D48" }
            if (isDisco)  { fill = "#334155"; stroke = "#475569" }

            return (
              <g key={`${topo}-n${i}`}>
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.08, type: "spring", stiffness: 200 }}
                  style={{ originX: n.x, originY: n.y }}
                >
                  {/* glow for broken */}
                  {isBroken && (
                    <motion.circle
                      cx={n.x} cy={n.y} r={22}
                      fill="#F43F5E"
                      opacity={0.2}
                      animate={{ r: [22, 28, 22], opacity: [0.2, 0.05, 0.2] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}

                  <circle
                    cx={n.x} cy={n.y} r={16}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={2}
                    style={{ cursor: "pointer" }}
                    onClick={e => {
                      e.stopPropagation()
                      setTooltip(prev =>
                        prev?.node === i ? null : { node: i, x: n.x, y: n.y }
                      )
                    }}
                  />

                  {/* laptop icon (simple SVG) */}
                  {!isBroken && (
                    <g transform={`translate(${n.x - 7}, ${n.y - 6})`} pointerEvents="none">
                      <rect x={1} y={1} width={12} height={8} rx={1} fill="none" stroke={isHub ? "#A3E635" : "#64748B"} strokeWidth={1.2} />
                      <rect x={0} y={9} width={14} height={1.5} rx={0.5} fill={isHub ? "#A3E635" : "#64748B"} />
                    </g>
                  )}

                  {/* node label */}
                  <text
                    x={n.x}
                    y={n.y + 28}
                    textAnchor="middle"
                    fill={isDisco ? "#475569" : isBroken ? "#F43F5E" : "#94A3B8"}
                    fontSize={9}
                    fontWeight={isHub ? "bold" : "normal"}
                  >
                    {isHub ? "Hub" : `Node ${i}`}
                  </text>
                </motion.g>

                {/* tooltip */}
                <AnimatePresence>
                  {tooltip?.node === i && (
                    <motion.g
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <rect
                        x={n.x - 52} y={n.y - 60}
                        width={104} height={44}
                        rx={6} fill="#1E293B" stroke="#334155" strokeWidth={1}
                      />
                      <text x={n.x} y={n.y - 44} textAnchor="middle" fill="#E2E8F0" fontSize={9} fontWeight="bold">
                        {isHub ? "Hub / Switch" : `Node ${i}`}
                      </text>
                      <text x={n.x} y={n.y - 30} textAnchor="middle" fill={isDisco ? "#F43F5E" : isBroken ? "#F43F5E" : "#10B981"} fontSize={8}>
                        {isBroken ? "FAILED" : isDisco ? "DISCONNECTED" : "ONLINE"}
                      </text>
                    </motion.g>
                  )}
                </AnimatePresence>
              </g>
            )
          })}
        </svg>

        {/* break-node button */}
        <button
          onClick={() => broken === null ? breakNode() : setBroken(null)}
          className={`absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
            broken !== null
              ? "bg-emerald-600 text-white hover:bg-emerald-500"
              : "bg-rose-600 text-white hover:bg-rose-500"
          }`}
        >
          <Zap size={11} />
          {broken !== null ? "Restore" : "Break a node"}
        </button>
      </div>

      {/* ── right panel ── */}
      <div className="md:w-56 shrink-0 bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-white/10 p-4 flex flex-col gap-4">
        {/* topology selector */}
        <div>
          <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Topology</p>
          <div className="space-y-1">
            {(Object.keys(TOPOLOGIES) as TopoKey[]).map(k => (
              <button
                key={k}
                onClick={() => { setTopo(k); setBroken(null) }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  topo === k
                    ? "bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400"
                    : "text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-white/5"
                }`}
              >
                {TOPOLOGIES[k].label}
              </button>
            ))}
          </div>
        </div>

        {/* stats */}
        <AnimatePresence mode="wait">
          <motion.div
            key={topo + String(broken)}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            <div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Stats</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-500">Fault tolerance</span>
                  <span
                    className="text-xs font-bold px-1.5 py-0.5 rounded"
                    style={{
                      backgroundColor: FAULT_COLOR[t.faultTol] + "22",
                      color: FAULT_COLOR[t.faultTol],
                    }}
                  >
                    {t.faultTol}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-500">Links</span>
                  <span className="text-xs font-semibold text-stone-700 dark:text-stone-300">{t.edges.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-500">SPOF</span>
                  <span className={`text-xs font-semibold ${t.spof ? "text-rose-500" : "text-emerald-500"}`}>
                    {t.spof ? "Yes" : "No"}
                  </span>
                </div>
                {broken !== null && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-stone-500">Disconnected</span>
                    <span className="text-xs font-semibold text-rose-500">
                      {t.nodes.filter((_, i) => isDisconnected(i)).length} node(s)
                    </span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs text-stone-500 leading-relaxed border-t border-stone-100 dark:border-white/5 pt-3">
              {t.info}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
