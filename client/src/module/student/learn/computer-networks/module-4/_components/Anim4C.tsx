
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RotateCcw, Plus, X } from "lucide-react"

// topology: 4 routers, each with connected subnets
const ROUTERS = [
  { id: "R1", label: "R1", x: 80,  y: 100, color: "#7C3AED" },
  { id: "R2", label: "R2", x: 240, y: 60,  color: "#2563EB" },
  { id: "R3", label: "R3", x: 240, y: 160, color: "#10B981" },
  { id: "R4", label: "R4", x: 380, y: 110, color: "#F59E0B" },
]
const LINKS = [
  { from: "R1", to: "R2", broken: false },
  { from: "R1", to: "R3", broken: false },
  { from: "R2", to: "R4", broken: false },
  { from: "R3", to: "R4", broken: false },
  { from: "R2", to: "R3", broken: false },
]
const SUBNETS = [
  { router: "R1", prefix: "10.0.0.0/24",   host: "H1", hx: 30,  hy: 40 },
  { router: "R4", prefix: "10.0.3.0/24",   host: "H2", hx: 430, hy: 60 },
  { router: "R4", prefix: "10.0.4.0/24",   host: "H3", hx: 430, hy: 160 },
]

// routing table per router  {dest, mask, nextHop, iface, metric}
const ROUTING_TABLES: Record<string, { dest: string; mask: string; nextHop: string; iface: string }[]> = {
  R1: [
    { dest: "10.0.0.0/24", mask: "/24", nextHop: "", iface: "eth0 (direct)" },
    { dest: "10.0.1.0/24", mask: "/24", nextHop: "R2", iface: "eth1" },
    { dest: "10.0.2.0/24", mask: "/24", nextHop: "R3", iface: "eth2" },
    { dest: "10.0.3.0/24", mask: "/24", nextHop: "R2", iface: "eth1" },
    { dest: "10.0.4.0/24", mask: "/24", nextHop: "R3", iface: "eth2" },
    { dest: "0.0.0.0/0",   mask: "/0",  nextHop: "R2", iface: "eth1 (default)" },
  ],
  R2: [
    { dest: "10.0.0.0/24", mask: "/24", nextHop: "R1", iface: "eth0" },
    { dest: "10.0.1.0/24", mask: "/24", nextHop: "",  iface: "eth1 (direct)" },
    { dest: "10.0.2.0/24", mask: "/24", nextHop: "R3", iface: "eth2" },
    { dest: "10.0.3.0/24", mask: "/24", nextHop: "R4", iface: "eth3" },
    { dest: "10.0.4.0/24", mask: "/24", nextHop: "R4", iface: "eth3" },
  ],
  R3: [
    { dest: "10.0.0.0/24", mask: "/24", nextHop: "R1", iface: "eth0" },
    { dest: "10.0.2.0/24", mask: "/24", nextHop: "",  iface: "eth1 (direct)" },
    { dest: "10.0.1.0/24", mask: "/24", nextHop: "R2", iface: "eth2" },
    { dest: "10.0.3.0/24", mask: "/24", nextHop: "R4", iface: "eth3" },
    { dest: "10.0.4.0/24", mask: "/24", nextHop: "R4", iface: "eth3" },
  ],
  R4: [
    { dest: "10.0.3.0/24", mask: "/24", nextHop: "",  iface: "eth0 (direct)" },
    { dest: "10.0.4.0/24", mask: "/24", nextHop: "",  iface: "eth1 (direct)" },
    { dest: "10.0.0.0/24", mask: "/24", nextHop: "R2", iface: "eth2" },
    { dest: "10.0.1.0/24", mask: "/24", nextHop: "R2", iface: "eth2" },
    { dest: "10.0.2.0/24", mask: "/24", nextHop: "R3", iface: "eth3" },
  ],
}

// known routes through topology
const PATHS: Record<string, string[]> = {
  "10.0.3.0/24": ["R1", "R2", "R4"],
  "10.0.4.0/24": ["R1", "R3", "R4"],
}

type Step = { router: string; rowIdx: number }

export default function Anim4C() {
  const [dest,     setDest]    = useState("10.0.3.0/24")
  const [path,     setPath]    = useState<string[]>([])
  const [curStep,  setCurStep] = useState(-1)
  const [steps,    setSteps]   = useState<Step[]>([])
  const [brokenLink, setBrokenLink] = useState<string | null>(null)
  const [running,  setRunning] = useState(false)
  const [done,     setDone]    = useState(false)
  const [showAdd,  setShowAdd] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function clearT() { if (timerRef.current) clearTimeout(timerRef.current) }

  function traceRoute() {
    clearT()
    setDone(false)
    setRunning(true)
    const p = PATHS[dest] ?? ["R1"]
    setPath(p)
    // build steps: for each router in path, find which row matches dest
    const stepList: Step[] = p.map(rid => {
      const tbl = ROUTING_TABLES[rid]
      const idx = tbl.findIndex(r => r.dest === dest)
      return { router: rid, rowIdx: idx }
    })
    setSteps(stepList)
    setCurStep(0)

    function advance(i: number) {
      if (i >= stepList.length) {
        setRunning(false)
        setDone(true)
        return
      }
      setCurStep(i)
      timerRef.current = setTimeout(() => advance(i + 1), 1400)
    }
    timerRef.current = setTimeout(() => advance(0), 400)
  }

  function reset() {
    clearT()
    setPath([])
    setCurStep(-1)
    setSteps([])
    setRunning(false)
    setDone(false)
  }

  function breakLink() {
    setBrokenLink(brokenLink ? null : "R2-R4")
    setPath([])
    setCurStep(-1)
    setSteps([])
    setDone(false)
  }

  const activeRouter = curStep >= 0 && curStep < steps.length ? steps[curStep].router : null
  const activeRowIdx = curStep >= 0 && curStep < steps.length ? steps[curStep].rowIdx : -1

  function routerPos(id: string) { return ROUTERS.find(r => r.id === id)! }

  return (
    <div className="bg-[#0F172A] p-5 flex flex-col gap-4 min-h-[440px]">

      {/* controls */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-col gap-0.5">
          <label className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">Destination</label>
          <select
            value={dest}
            onChange={e => { setDest(e.target.value); reset() }}
            className="bg-[#1E293B] border border-[#334155] rounded-lg px-2 py-1.5 text-xs font-mono text-stone-200 outline-none focus:border-lime-500"
          >
            <option value="10.0.3.0/24">10.0.3.0/24 (H2 subnet)</option>
            <option value="10.0.4.0/24">10.0.4.0/24 (H3 subnet)</option>
          </select>
        </div>
        <button
          disabled={running}
          onClick={traceRoute}
          className="px-3 py-1.5 bg-lime-600 hover:bg-lime-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors self-end"
        >
          Trace Route
        </button>
        <button
          onClick={breakLink}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors self-end ${brokenLink ? "bg-red-700 hover:bg-red-600 text-white" : "bg-[#1E293B] hover:bg-[#334155] text-stone-400 border border-[#334155]"}`}
        >
          {brokenLink ? "Restore Link" : "Break R2–R4"}
        </button>
        <button
          onClick={reset}
          className="px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors self-end"
        >
          <RotateCcw size={10} />
        </button>
        <button
          onClick={() => setShowAdd(s => !s)}
          className="flex items-center gap-1 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors self-end"
        >
          <Plus size={10} /> Static route
        </button>
      </div>

      {showAdd && (
        <div className="flex items-center gap-2 bg-[#1E293B] p-3 rounded-xl border border-[#334155] text-[10px] text-stone-400">
          <span>Injecting a static route would redirect traffic. In a real router: <code className="text-lime-300">ip route add 10.0.3.0/24 via 10.0.1.2</code></span>
          <button onClick={() => setShowAdd(false)} className="ml-auto text-stone-500 hover:text-stone-300"><X size={12} /></button>
        </div>
      )}

      <div className="flex gap-4 flex-1">

        {/* topology SVG */}
        <div className="flex-1 relative" style={{ minWidth: 0 }}>
          <svg viewBox="0 0 480 220" className="w-full h-full" style={{ minHeight: 180 }}>

            {/* subnet hosts */}
            {SUBNETS.map(s => {
              const r = routerPos(s.router)
              return (
                <g key={s.host}>
                  <line x1={s.hx + 16} y1={s.hy + 12} x2={r.x + 16} y2={r.y + 12} stroke="#334155" strokeWidth="1" strokeDasharray="4 2" />
                  <rect x={s.hx} y={s.hy} width={32} height={24} rx={4} fill="#1E293B" stroke="#334155" strokeWidth="1" />
                  <text x={s.hx + 16} y={s.hy + 10} textAnchor="middle" fill="#64748B" fontSize="6" fontWeight="bold">{s.host}</text>
                  <text x={s.hx + 16} y={s.hy + 20} textAnchor="middle" fill="#475569" fontSize="5.5">{s.prefix.split("/")[0].split(".").slice(0, 3).join(".")}.x</text>
                </g>
              )
            })}

            {/* links */}
            {LINKS.map(l => {
              const a = routerPos(l.from)
              const b = routerPos(l.to)
              const isBroken = brokenLink === `${l.from}-${l.to}` || brokenLink === `${l.to}-${l.from}`
              const isActive = path.length > 1 && path.some((_r, i) =>
                i < path.length - 1 &&
                ((path[i] === l.from && path[i + 1] === l.to) ||
                 (path[i] === l.to   && path[i + 1] === l.from))
              )
              return (
                <g key={`${l.from}-${l.to}`}>
                  <line
                    x1={a.x + 16} y1={a.y + 12} x2={b.x + 16} y2={b.y + 12}
                    stroke={isBroken ? "#EF4444" : isActive ? "#7C3AED" : "#334155"}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    strokeDasharray={isBroken ? "4 3" : undefined}
                  />
                  {isBroken && (
                    <text
                      x={(a.x + b.x) / 2 + 16} y={(a.y + b.y) / 2 + 12}
                      textAnchor="middle" fill="#EF4444" fontSize="9"
                    >✕</text>
                  )}
                </g>
              )
            })}

            {/* packet traveling */}
            <AnimatePresence>
              {running && curStep > 0 && curStep < path.length && (() => {
                const from = routerPos(path[curStep - 1])
                const to   = routerPos(path[curStep])
                return (
                  <motion.circle
                    key={curStep}
                    cx={from.x + 16} cy={from.y + 12} r={5} fill="#7C3AED"
                    animate={{ cx: to.x + 16, cy: to.y + 12 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                )
              })()}
            </AnimatePresence>

            {/* routers */}
            {ROUTERS.map(r => {
              const isActive = r.id === activeRouter
              const inPath   = path.includes(r.id)
              return (
                <g key={r.id}>
                  <motion.rect
                    x={r.x} y={r.y} width={32} height={24} rx={6}
                    animate={{
                      fill:        isActive ? r.color + "33" : inPath ? r.color + "15" : "#1E293B",
                      stroke:      isActive ? r.color : inPath ? r.color + "88" : "#475569",
                      strokeWidth: isActive ? 2 : 1.5,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <text x={r.x + 16} y={r.y + 15} textAnchor="middle" fill={inPath ? "#E2E8F0" : "#94A3B8"} fontSize="9" fontWeight="bold">{r.label}</text>
                </g>
              )
            })}

            {/* done check */}
            {done && path.length > 0 && (() => {
              const last = routerPos(path[path.length - 1])
              return (
                <motion.text
                  x={last.x + 16} y={last.y - 6}
                  textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="bold"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                >✓</motion.text>
              )
            })()}
          </svg>
        </div>

        {/* routing table panel */}
        <div className="w-52 shrink-0 flex flex-col gap-2">
          <p className="text-[9px] text-stone-500 font-bold uppercase tracking-wider">
            {activeRouter ? `${activeRouter} Routing Table` : "Routing Table"}
          </p>
          <div className="bg-[#1E293B] rounded-xl border border-[#334155] overflow-hidden flex-1">
            {activeRouter ? (
              <div className="overflow-auto">
                <div className="grid grid-cols-2 text-[7px] text-stone-500 font-bold px-2 py-1.5 border-b border-[#334155] bg-[#0F172A]">
                  <span>Destination</span><span>Next Hop</span>
                </div>
                {ROUTING_TABLES[activeRouter].map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-2 text-[8px] px-2 py-1.5 border-b border-[#0F172A] transition-colors"
                    style={{
                      backgroundColor: i === activeRowIdx ? "#3B0764" : "transparent",
                    }}
                  >
                    <span className={`font-mono ${i === activeRowIdx ? "text-lime-300 font-bold" : "text-stone-400"}`}>{row.dest}</span>
                    <span className={`font-mono ${i === activeRowIdx ? "text-amber-300 font-bold" : "text-stone-500"}`}>{row.nextHop}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[9px] text-stone-600 p-3 italic">Start a trace to see live table lookups</p>
            )}
          </div>
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-emerald-900/30 border border-emerald-700/40 rounded-xl p-2 text-[9px] text-emerald-300"
            >
              ✓ Packet delivered via {path.join(" → ")}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
