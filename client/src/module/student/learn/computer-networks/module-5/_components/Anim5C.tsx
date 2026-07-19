
import { useState, useRef, useCallback } from "react"
import { Play, RotateCcw, Zap, AlertTriangle } from "lucide-react"

type Algorithm = "tahoe" | "reno" | "cubic"

interface Point { rtt: number; cwnd: number; event?: "loss" | "timeout" }

const MAX_RTT   = 40
const MAX_CWND  = 32
const SSTHRESH0 = 16

function simulate(algo: Algorithm): Point[] {
  const pts: Point[] = []
  let cwnd     = 1
  let ssthresh = SSTHRESH0
  let rtt      = 0
  let lossAt   = 12
  let timeoutAt= 28

  while (rtt < MAX_RTT) {
    pts.push({ rtt, cwnd: Math.min(cwnd, MAX_CWND) })

    if (rtt === timeoutAt) {
      pts.push({ rtt, cwnd: 1, event: "timeout" })
      ssthresh = Math.max(1, Math.floor(cwnd / 2))
      cwnd     = 1
      rtt++
      continue
    }

    if (rtt === lossAt) {
      pts.push({ rtt, cwnd: Math.max(1, Math.floor(cwnd / 2)), event: "loss" })
      ssthresh = Math.max(1, Math.floor(cwnd / 2))
      if (algo === "tahoe") {
        cwnd = 1
      } else if (algo === "reno") {
        cwnd = ssthresh + 3
      } else {
        cwnd = ssthresh
      }
      rtt++
      continue
    }

    // growth
    if (cwnd < ssthresh) {
      cwnd = Math.min(cwnd * 2, MAX_CWND) // slow start: exponential
    } else {
      if (algo === "cubic") {
        // CUBIC grows faster in congestion avoidance
        cwnd = Math.min(cwnd + Math.max(1, Math.ceil(cwnd * 0.3)), MAX_CWND)
      } else {
        cwnd = Math.min(cwnd + 1, MAX_CWND) // CA: linear +1
      }
    }
    rtt++
  }
  return pts
}

const ALGO_COLORS: Record<Algorithm, string> = {
  tahoe: "#EF4444",
  reno:  "#7C3AED",
  cubic: "#10B981",
}

export default function Anim5C() {
  const [algos,    setAlgos]   = useState<Algorithm[]>(["reno"])
  const [points,   setPoints]  = useState<Record<Algorithm, Point[]>>({ tahoe: [], reno: [], cubic: [] })
  const [drawn,    setDrawn]   = useState<Record<Algorithm, number>>({ tahoe: 0, reno: 0, cubic: 0 })
  const [running,  setRunning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function clearT() { if (timerRef.current) clearInterval(timerRef.current) }

  const startSim = useCallback(() => {
    clearT()
    const allPts: Record<Algorithm, Point[]> = {
      tahoe: simulate("tahoe"),
      reno:  simulate("reno"),
      cubic: simulate("cubic"),
    }
    setPoints(allPts)
    setDrawn({ tahoe: 0, reno: 0, cubic: 0 })
    setRunning(true)

    let idx = 0
    timerRef.current = setInterval(() => {
      idx++
      setDrawn({ tahoe: idx, reno: idx, cubic: idx })
      const maxLen = Math.max(...(["tahoe","reno","cubic"] as Algorithm[]).map(a => allPts[a].length))
      if (idx >= maxLen) {
        clearT()
        setRunning(false)
      }
    }, 80)
  }, [])

  function reset() {
    clearT()
    setPoints({ tahoe: [], reno: [], cubic: [] })
    setDrawn({ tahoe: 0, reno: 0, cubic: 0 })
    setRunning(false)
  }

  function toggleAlgo(a: Algorithm) {
    setAlgos(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a])
  }

  // SVG coordinate helpers
  const W = 440, H = 200
  const padL = 36, padB = 24, padT = 12, padR = 12
  const plotW = W - padL - padR
  const plotH = H - padT - padB

  function px(rtt: number) { return padL + (rtt / MAX_RTT) * plotW }
  function py(cwnd: number) { return H - padB - (cwnd / MAX_CWND) * plotH }

  function buildPath(pts: Point[], n: number): string {
    const vis = pts.slice(0, n)
    if (vis.length < 2) return ""
    return vis.map((p, i) => `${i === 0 ? "M" : "L"} ${px(p.rtt)} ${py(p.cwnd)}`).join(" ")
  }

  return (
    <div className="bg-[#0F172A] p-5 flex flex-col gap-4 min-h-[400px]">

      {/* controls */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] text-stone-400">Algorithm:</span>
        {(["tahoe","reno","cubic"] as Algorithm[]).map(a => (
          <button
            key={a}
            onClick={() => toggleAlgo(a)}
            className="px-3 py-1 rounded-lg text-[10px] font-bold border transition-all"
            style={{
              backgroundColor: algos.includes(a) ? ALGO_COLORS[a] + "22" : "transparent",
              borderColor: algos.includes(a) ? ALGO_COLORS[a] : "#334155",
              color: algos.includes(a) ? ALGO_COLORS[a] : "#64748B",
            }}
          >
            TCP {a.charAt(0).toUpperCase() + a.slice(1)}
          </button>
        ))}

        <button
          disabled={running}
          onClick={startSim}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-lime-600 hover:bg-lime-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors ml-auto"
        >
          <Play size={10} /> Simulate
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-1 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors"
        >
          <RotateCcw size={10} />
        </button>
      </div>

      {/* graph */}
      <div className="flex-1 flex gap-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="flex-1" style={{ minHeight: 180 }}>
          {/* grid */}
          {[0, 8, 16, 24, 32].map(v => (
            <g key={v}>
              <line x1={padL} y1={py(v)} x2={W - padR} y2={py(v)} stroke="#1E293B" strokeWidth="1" />
              <text x={padL - 4} y={py(v) + 3} textAnchor="end" fill="#475569" fontSize="7">{v}</text>
            </g>
          ))}
          {[0, 10, 20, 30, 40].map(v => (
            <g key={v}>
              <line x1={px(v)} y1={padT} x2={px(v)} y2={H - padB} stroke="#1E293B" strokeWidth="1" />
              <text x={px(v)} y={H - padB + 12} textAnchor="middle" fill="#475569" fontSize="7">{v}</text>
            </g>
          ))}

          {/* axes */}
          <line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="#334155" strokeWidth="1" />
          <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="#334155" strokeWidth="1" />
          <text x={padL - 28} y={H / 2} textAnchor="middle" fill="#475569" fontSize="8" transform={`rotate(-90, ${padL - 28}, ${H / 2})`}>cwnd (MSS)</text>
          <text x={W / 2} y={H - 2} textAnchor="middle" fill="#475569" fontSize="8">RTT</text>

          {/* ssthresh reference line */}
          <line x1={padL} y1={py(SSTHRESH0)} x2={W - padR} y2={py(SSTHRESH0)} stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 3" />
          <text x={padL + 3} y={py(SSTHRESH0) - 3} fill="#F59E0B" fontSize="7">ssthresh</text>

          {/* event markers */}
          {[12, 28].map((rtt, i) => (
            <g key={rtt}>
              <line x1={px(rtt)} y1={padT} x2={px(rtt)} y2={H - padB} stroke={i === 0 ? "#EF4444" : "#F97316"} strokeWidth="1" strokeDasharray="3 2" />
              <text x={px(rtt) + 2} y={padT + 10} fill={i === 0 ? "#EF4444" : "#F97316"} fontSize="7">
                {i === 0 ? "3-dup-ACK" : "Timeout"}
              </text>
            </g>
          ))}

          {/* algorithm lines */}
          {(["tahoe","reno","cubic"] as Algorithm[]).filter(a => algos.includes(a)).map(a => {
            const d = buildPath(points[a] ?? [], drawn[a])
            return d ? (
              <path key={a} d={d} fill="none" stroke={ALGO_COLORS[a]} strokeWidth="2" strokeLinejoin="round" />
            ) : null
          })}

          {/* event dots on active lines */}
          {(["tahoe","reno","cubic"] as Algorithm[]).filter(a => algos.includes(a)).map(a =>
            (points[a] ?? []).slice(0, drawn[a]).filter(p => p.event).map((p, i) => (
              <circle
                key={`${a}-${i}`}
                cx={px(p.rtt)} cy={py(p.cwnd)} r={4}
                fill={p.event === "loss" ? "#EF4444" : "#F97316"}
                stroke="#0F172A" strokeWidth="1.5"
              />
            ))
          )}
        </svg>

        {/* legend */}
        <div className="w-40 shrink-0 flex flex-col gap-3">
          <div className="bg-[#1E293B] rounded-xl p-3 border border-[#334155] space-y-2">
            <p className="text-[9px] font-bold text-stone-400 uppercase tracking-wider">Legend</p>
            {(["tahoe","reno","cubic"] as Algorithm[]).map(a => (
              <div key={a} className="flex items-center gap-1.5">
                <div className="w-4 h-0.5" style={{ backgroundColor: ALGO_COLORS[a] }} />
                <span className="text-[9px] text-stone-400">TCP {a.charAt(0).toUpperCase() + a.slice(1)}</span>
              </div>
            ))}
            <div className="flex items-center gap-1.5 pt-1 border-t border-[#334155]">
              <Zap size={9} className="text-red-400" />
              <span className="text-[9px] text-stone-400">3-dup-ACK (RTT 12)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <AlertTriangle size={9} className="text-orange-400" />
              <span className="text-[9px] text-stone-400">Timeout (RTT 28)</span>
            </div>
          </div>

          <div className="bg-[#1E293B] rounded-xl p-3 border border-[#334155] text-[9px] text-stone-400 space-y-2">
            <p className="font-bold text-stone-300">On 3-dup-ACK:</p>
            <p><span className="text-red-400">Tahoe:</span> cwnd→1, slow start</p>
            <p><span className="text-lime-400">Reno:</span> cwnd→ssthresh, fast recovery</p>
            <p><span className="text-emerald-400">CUBIC:</span> concave growth, less drastic cut</p>
            <p className="border-t border-[#334155] pt-2 font-bold text-stone-300">On Timeout:</p>
            <p>All: cwnd→1, ssthresh halved</p>
          </div>
        </div>
      </div>
    </div>
  )
}
