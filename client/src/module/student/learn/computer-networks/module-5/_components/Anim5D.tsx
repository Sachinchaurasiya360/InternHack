
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, RotateCcw } from "lucide-react"

const TOTAL   = 20   // packets to send
const LOSS_AT = [7, 13, 17] // 0-indexed packets that UDP "drops"

interface Packet {
  id: number
  protocol: "tcp" | "udp"
  state: "sent" | "acked" | "lost" | "retransmit"
}

export default function Anim5D() {
  const [tcpPkts,  setTcpPkts]  = useState<Packet[]>([])
  const [udpPkts,  setUdpPkts]  = useState<Packet[]>([])
  const [running,  setRunning]  = useState(false)
  const [done,     setDone]     = useState(false)
  const [tcpMs,    setTcpMs]    = useState(0)
  const [udpMs,    setUdpMs]    = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function clearT() { if (timerRef.current) clearTimeout(timerRef.current) }

  useEffect(() => () => clearT(), [])

  function start() {
    clearT()
    setTcpPkts([])
    setUdpPkts([])
    setDone(false)
    setTcpMs(0)
    setUdpMs(0)
    setRunning(true)

    let i = 0
    let extraDelay = 0 // TCP retransmit pauses

    function sendNext() {
      if (i >= TOTAL) {
        // finish UDP immediately, TCP gets retransmit delays
        setUdpMs(i * 80)
        setTcpMs(i * 80 + extraDelay)
        setRunning(false)
        setDone(true)
        return
      }

      const isLost = LOSS_AT.includes(i)
      const pid    = i

      // UDP always fires
      setUdpPkts(prev => [...prev, { id: pid, protocol: "udp", state: isLost ? "lost" : "sent" }])

      // TCP: if lost, show sent → pause → retransmit → acked
      if (isLost) {
        setTcpPkts(prev => [...prev, { id: pid, protocol: "tcp", state: "sent" }])
        extraDelay += 400
        timerRef.current = setTimeout(() => {
          setTcpPkts(prev => prev.map(p => p.id === pid ? { ...p, state: "retransmit" } : p))
          timerRef.current = setTimeout(() => {
            setTcpPkts(prev => prev.map(p => p.id === pid ? { ...p, state: "acked" } : p))
            i++
            timerRef.current = setTimeout(sendNext, 80)
          }, 400)
        }, 400)
      } else {
        setTcpPkts(prev => [...prev, { id: pid, protocol: "tcp", state: "acked" }])
        i++
        timerRef.current = setTimeout(sendNext, 80)
      }
    }

    timerRef.current = setTimeout(sendNext, 200)
  }

  function reset() {
    clearT()
    setTcpPkts([])
    setUdpPkts([])
    setRunning(false)
    setDone(false)
    setTcpMs(0)
    setUdpMs(0)
  }

  const tcpDelivered = tcpPkts.filter(p => p.state === "acked").length
  const udpDelivered = udpPkts.filter(p => p.state === "sent").length

  function PktGrid({ packets, proto }: { packets: Packet[]; proto: "tcp"|"udp" }) {
    return (
      <div className="flex flex-wrap gap-1">
        {Array.from({ length: TOTAL }, (_, i) => {
          const p = packets.find(x => x.id === i)
          const color = !p
            ? "#1E293B"
            : p.state === "acked"
              ? "#10B981"
              : p.state === "lost"
                ? "#EF4444"
                : p.state === "retransmit"
                  ? "#F59E0B"
                  : proto === "tcp" ? "#7C3AED" : "#2563EB"
          return (
            <motion.div
              key={i}
              animate={{ backgroundColor: color }}
              transition={{ duration: 0.2 }}
              className="w-7 h-7 rounded flex items-center justify-center border border-[#0F172A]"
              title={p?.state ?? "pending"}
            >
              <span className="text-[8px] text-white/60 font-mono">{i + 1}</span>
              {p?.state === "retransmit" && (
                <span className="absolute text-[6px] text-amber-200">↺</span>
              )}
            </motion.div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="bg-[#0F172A] p-5 flex flex-col gap-5 min-h-[400px]">

      {/* controls */}
      <div className="flex items-center gap-2">
        <button
          disabled={running}
          onClick={start}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-lime-600 hover:bg-lime-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          <Play size={10} /> Race!
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-1 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors"
        >
          <RotateCcw size={10} /> Reset
        </button>
        <span className="text-[10px] text-stone-500 ml-2">
          Sending {TOTAL} packets  {LOSS_AT.length} are dropped
        </span>
      </div>

      {/* side by side */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {/* TCP */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-lime-300 font-display">TCP</span>
            <span className="text-[9px] text-stone-500">reliable, ordered</span>
          </div>
          <PktGrid packets={tcpPkts} proto="tcp" />
          <div className="flex flex-col gap-1 text-[10px]">
            <div className="flex justify-between">
              <span className="text-stone-400">Delivered:</span>
              <span className="text-emerald-300 font-mono">{tcpDelivered} / {TOTAL}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Retransmits:</span>
              <span className="text-amber-300 font-mono">{tcpPkts.filter(p => p.state === "retransmit" || (LOSS_AT.includes(p.id) && p.state === "acked")).length}</span>
            </div>
            {done && (
              <div className="flex justify-between">
                <span className="text-stone-400">Time:</span>
                <span className="text-lime-300 font-mono">~{tcpMs} ms</span>
              </div>
            )}
          </div>
          {done && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-2 py-1 bg-lime-900/30 border border-lime-700/40 rounded-lg text-[9px] text-lime-300"
            >
              ✓ 100% delivery  retransmits cause {((tcpMs - udpMs) / tcpMs * 100).toFixed(0)}% latency overhead
            </motion.div>
          )}
        </div>

        {/* UDP */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-300 font-display">UDP</span>
            <span className="text-[9px] text-stone-500">fast, no guarantee</span>
          </div>
          <PktGrid packets={udpPkts} proto="udp" />
          <div className="flex flex-col gap-1 text-[10px]">
            <div className="flex justify-between">
              <span className="text-stone-400">Delivered:</span>
              <span className="text-emerald-300 font-mono">{udpDelivered} / {TOTAL}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Lost:</span>
              <span className="text-red-400 font-mono">{LOSS_AT.length}</span>
            </div>
            {done && (
              <div className="flex justify-between">
                <span className="text-stone-400">Time:</span>
                <span className="text-blue-300 font-mono">~{udpMs} ms</span>
              </div>
            )}
          </div>
          {done && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-2 py-1 bg-blue-900/30 border border-blue-700/40 rounded-lg text-[9px] text-blue-300"
            >
              ✗ {LOSS_AT.length} packets lost silently  no retransmit, no error
            </motion.div>
          )}
        </div>
      </div>

      {/* legend */}
      <div className="flex flex-wrap gap-3 pt-3 border-t border-[#334155]">
        {[
          { color: "#10B981", label: "Delivered" },
          { color: "#7C3AED", label: "In-flight (TCP)" },
          { color: "#F59E0B", label: "Retransmitting" },
          { color: "#EF4444", label: "Lost (UDP)" },
          { color: "#1E293B", label: "Pending" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm border border-[#334155]" style={{ backgroundColor: color }} />
            <span className="text-[9px] text-stone-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
