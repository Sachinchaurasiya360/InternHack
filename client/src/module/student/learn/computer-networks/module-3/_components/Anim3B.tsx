
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RotateCcw } from "lucide-react"

const PORTS = [
  { id: 1, label: "Port 1", host: "Host A", mac: "AA:11:22:33:44:55", x: 60,  y: 50 },
  { id: 2, label: "Port 2", host: "Host B", mac: "BB:11:22:33:44:55", x: 60,  y: 150 },
  { id: 3, label: "Port 3", host: "Host C", mac: "CC:11:22:33:44:55", x: 280, y: 50 },
  { id: 4, label: "Port 4", host: "Host D", mac: "DD:11:22:33:44:55", x: 280, y: 150 },
]
const SW = { x: 170, y: 100 }

interface MacEntry { mac: string; port: number; ttl: number }
interface Scenario {
  from: number; to: number; label: string
  desc: string
}

const SCENARIOS: Scenario[] = [
  { from: 1, to: 4, label: "A → D (first time)", desc: "MAC table is empty. Switch floods all ports. Learns A is on Port 1." },
  { from: 4, to: 1, label: "D → A (reply)",      desc: "D replies. Switch learns D is on Port 4. Knows A on Port 1, so unicasts." },
  { from: 1, to: 4, label: "A → D (again)",       desc: "Now switch knows both MACs  forwards only to Port 4. Ports 2 & 3 silent." },
]

export default function Anim3B() {
  const [table, setTable]       = useState<MacEntry[]>([])
  const [step, setStep]         = useState(-1)   // which scenario step
  const [phase, setPhase]       = useState<"idle"|"traveling"|"done">("idle")
  const [flooded, setFlooded]   = useState(false)
  const [unicastTo, setUnicastTo] = useState<number | null>(null)
  const [blocked, setBlocked]   = useState<number[]>([])
  const [ttlDemo, setTtlDemo]   = useState(false)
  const [ttlVal, setTtlVal]     = useState(300)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function clearT() { if (timerRef.current) clearTimeout(timerRef.current) }

  function runScenario(idx: number) {
    clearT()
    if (idx >= SCENARIOS.length) return
    const sc = SCENARIOS[idx]
    setStep(idx)
    setPhase("traveling")
    setFlooded(false)
    setUnicastTo(null)
    setBlocked([])

    const fromPort = PORTS.find(p => p.id === sc.from)!
    const toPort   = PORTS.find(p => p.id === sc.to)!
    const knowsDest = table.some(e => e.port === sc.to)

    // learn source
    timerRef.current = setTimeout(() => {
      setTable(prev => {
        if (prev.some(e => e.mac === fromPort.mac)) return prev
        return [...prev, { mac: fromPort.mac, port: fromPort.id, ttl: 300 }]
      })

      if (knowsDest || idx >= 2) {
        // unicast
        setUnicastTo(toPort.id)
        const others = PORTS.filter(p => p.id !== sc.from && p.id !== sc.to).map(p => p.id)
        setBlocked(others)
      } else {
        // flood
        setFlooded(true)
      }

      timerRef.current = setTimeout(() => {
        // learn destination on reply-step
        if (idx === 1) {
          setTable(prev => {
            if (prev.some(e => e.mac === toPort.mac)) return prev
            return [...prev, { mac: toPort.mac, port: toPort.id, ttl: 300 }]
          })
        }
        setPhase("done")
      }, 1200)
    }, 800)
  }

  function reset() {
    clearT()
    setTable([])
    setStep(-1)
    setPhase("idle")
    setFlooded(false)
    setUnicastTo(null)
    setBlocked([])
    setTtlDemo(false)
    setTtlVal(300)
  }

  const nextIdx = step + 1
  const canNext = nextIdx < SCENARIOS.length && (phase === "idle" || phase === "done")

  const displayTable = ttlDemo
    ? table.map(e => ({ ...e, ttl: Math.max(0, Math.round(e.ttl * (ttlVal / 300))) }))
    : table

  return (
    <div className="bg-[#0F172A] min-h-[420px] p-5 flex flex-col gap-4">

      {/* controls */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          disabled={!canNext}
          onClick={() => runScenario(nextIdx)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-lime-600 hover:bg-lime-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          {nextIdx < SCENARIOS.length ? SCENARIOS[nextIdx].label : "Done"}
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors"
        >
          <RotateCcw size={10} /> Reset
        </button>

        {step >= 2 && phase === "done" && (
          <div className="flex items-center gap-2 ml-2">
            <span className="text-[10px] text-stone-400">Aging TTL:</span>
            <input
              type="range" min={0} max={300} value={ttlVal}
              onChange={e => { setTtlVal(+e.target.value); setTtlDemo(true) }}
              className="w-20 accent-lime-500"
            />
            <span className="text-[10px] font-mono text-amber-300">{ttlVal}s</span>
          </div>
        )}
      </div>

      {/* body */}
      <div className="flex gap-4 flex-1">

        {/* SVG */}
        <div className="flex-1 relative">
          <svg viewBox="0 0 360 220" className="w-full h-full" style={{ minHeight: 200 }}>

            {/* switch box */}
            <rect x={SW.x-30} y={SW.y-18} width={60} height={36} rx={6} fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
            <text x={SW.x} y={SW.y-3}  textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="bold">Switch</text>
            <text x={SW.x} y={SW.y+10} textAnchor="middle" fill="#475569" fontSize="7">4-port</text>

            {/* port connections */}
            {PORTS.map(p => (
              <line key={p.id}
                x1={p.x + 30} y1={p.y + 18}
                x2={SW.x + (p.x < 170 ? -30 : 30)} y2={SW.y}
                stroke="#334155" strokeWidth="1.5"
              />
            ))}

            {/* flood rays */}
            {flooded && PORTS.map(p => {
              const sc = SCENARIOS[step]
              if (p.id === sc.from) return null
              return (
                <motion.line key={p.id}
                  x1={SW.x + (p.x < 170 ? -30 : 30)} y1={SW.y}
                  x2={p.x + 30} y2={p.y + 18}
                  stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )
            })}

            {/* sender ray to switch */}
            {phase === "traveling" && step >= 0 && (
              <motion.line
                x1={PORTS.find(p => p.id === SCENARIOS[step].from)!.x + 30}
                y1={PORTS.find(p => p.id === SCENARIOS[step].from)!.y + 18}
                x2={SW.x + (SCENARIOS[step].from <= 2 ? -30 : 30)}
                y2={SW.y}
                stroke="#7C3AED" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}

            {/* unicast ray switch→dest */}
            {unicastTo !== null && (() => {
              const dest = PORTS.find(p => p.id === unicastTo)!
              return (
                <motion.line
                  x1={SW.x + (dest.x < 170 ? -30 : 30)} y1={SW.y}
                  x2={dest.x + 30} y2={dest.y + 18}
                  stroke="#10B981" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )
            })()}

            {/* hosts */}
            {PORTS.map(p => {
              const sc = step >= 0 ? SCENARIOS[step] : null
              const isSrc  = sc?.from === p.id && phase !== "idle"
              const isDest = sc?.to   === p.id && unicastTo !== null
              const isBlk  = blocked.includes(p.id)
              const isFlooded = flooded && sc?.from !== p.id

              return (
                <g key={p.id}>
                  <rect
                    x={p.x} y={p.y} width={60} height={36} rx={6}
                    fill={isSrc ? "#3B0764" : isDest ? "#064E3B" : "#1E293B"}
                    stroke={isSrc ? "#7C3AED" : isDest ? "#10B981" : isBlk ? "#334155" : isFlooded ? "#92400E" : "#334155"}
                    strokeWidth={isSrc || isDest ? 2 : 1.5}
                    opacity={isBlk ? 0.5 : 1}
                  />
                  <text x={p.x + 30} y={p.y + 14} textAnchor="middle" fill={isBlk ? "#475569" : "#E2E8F0"} fontSize="8" fontWeight="bold">{p.host}</text>
                  <text x={p.x + 30} y={p.y + 26} textAnchor="middle" fill="#475569" fontSize="6">{p.mac.slice(0, 11)}…</text>
                  {isBlk && (
                    <text x={p.x + 30} y={p.y - 4} textAnchor="middle" fill="#475569" fontSize="7">blocked</text>
                  )}
                </g>
              )
            })}

            {/* flood label */}
            {flooded && (
              <motion.text x={SW.x} y={SW.y + 45} textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Flooding all ports (MAC unknown)
              </motion.text>
            )}
            {unicastTo !== null && (
              <motion.text x={SW.x} y={SW.y + 45} textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Unicast to Port {unicastTo} only
              </motion.text>
            )}
          </svg>
        </div>

        {/* MAC table + step info */}
        <div className="w-52 shrink-0 flex flex-col gap-3">

          {/* step description */}
          {step >= 0 && (
            <div className="bg-[#1E293B] rounded-xl p-3 border border-[#334155]">
              <p className="text-[9px] font-bold text-lime-400 uppercase tracking-wider mb-1">
                Step {step + 1}  {SCENARIOS[step].label}
              </p>
              <p className="text-[9px] text-stone-400 leading-relaxed">{SCENARIOS[step].desc}</p>
            </div>
          )}

          {/* MAC table */}
          <div className="bg-[#1E293B] rounded-xl p-3 border border-[#334155] flex-1">
            <p className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">MAC Address Table</p>
            {displayTable.length === 0 ? (
              <p className="text-[9px] text-stone-600 italic">empty</p>
            ) : (
              <div className="space-y-1.5">
                <div className="grid grid-cols-3 text-[8px] text-stone-500 font-bold pb-1 border-b border-[#334155]">
                  <span>MAC</span><span>Port</span><span>TTL</span>
                </div>
                <AnimatePresence>
                  {displayTable.map(e => (
                    <motion.div
                      key={e.mac}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: e.ttl > 0 ? 1 : 0.3, x: 0 }}
                      className="grid grid-cols-3 text-[8px] font-mono gap-1"
                    >
                      <span className="text-lime-300 truncate">{e.mac.slice(0, 5)}…</span>
                      <span className="text-amber-300">{e.port}</span>
                      <span className={e.ttl > 0 ? "text-emerald-300" : "text-red-400"}>{e.ttl}s</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
            {ttlVal === 0 && ttlDemo && (
              <p className="text-[9px] text-red-400 mt-2">All entries expired  next frame will flood again</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
