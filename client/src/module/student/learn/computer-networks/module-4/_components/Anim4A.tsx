
import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PRESETS = [
  { label: "192.168.1.1 /24",  ip: [192, 168, 1, 1],  cidr: 24 },
  { label: "10.0.0.1 /8",      ip: [10, 0, 0, 1],     cidr: 8  },
  { label: "172.16.5.50 /16",  ip: [172, 16, 5, 50],  cidr: 16 },
  { label: "203.0.113.42 /26", ip: [203, 0, 113, 42], cidr: 26 },
]

function toBits(n: number): boolean[] {
  return Array.from({ length: 8 }, (_, i) => !!(n & (1 << (7 - i))))
}

function fromBits(bits: boolean[]): number {
  return bits.reduce((acc, b, i) => acc + (b ? 1 << (7 - i) : 0), 0)
}

function calcNetwork(ip: number[], cidr: number): number[] {
  const mask = Array.from({ length: 4 }, (_, i) => {
    const bits = Math.min(8, Math.max(0, cidr - i * 8))
    return bits === 8 ? 255 : bits === 0 ? 0 : (0xff << (8 - bits)) & 0xff
  })
  return ip.map((o, i) => o & mask[i])
}

function calcBroadcast(network: number[], cidr: number): number[] {
  return network.map((o, i) => {
    const hostBits = Math.max(0, Math.min(8, 32 - cidr - i * 8))
    return hostBits === 0 ? o : o | ((1 << hostBits) - 1)
  })
}

function ipStr(a: number[]) { return a.join(".") }

export default function Anim4A() {
  const [ip,   setIp]   = useState([192, 168, 1, 1])
  const [cidr, setCidr] = useState(24)

  const allBits: boolean[][] = ip.map(toBits)

  const toggleBit = useCallback((octet: number, bit: number) => {
    setIp(prev => {
      const next = [...prev]
      const bits = toBits(next[octet])
      bits[bit] = !bits[bit]
      next[octet] = fromBits(bits)
      return next
    })
  }, [])

  const network   = calcNetwork(ip, cidr)
  const broadcast = calcBroadcast(network, cidr)
  const firstHost = network.map((o, i) => i === 3 ? o + 1 : o)
  const lastHost  = broadcast.map((o, i) => i === 3 ? o - 1 : o)
  const hostCount = Math.max(0, Math.pow(2, 32 - cidr) - 2)

  function applyPreset(idx: number) {
    const p = PRESETS[idx]
    setIp([...p.ip])
    setCidr(p.cidr)
  }

  return (
    <div className="bg-[#0F172A] p-5 flex flex-col gap-5 min-h-[420px]">

      {/* presets */}
      <div className="flex flex-wrap gap-1.5">
        {PRESETS.map((p, i) => (
          <button
            key={i}
            onClick={() => applyPreset(i)}
            className="px-2.5 py-1 rounded-lg bg-[#1E293B] hover:bg-[#334155] text-[9px] font-mono text-stone-400 border border-[#334155] transition-colors"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* bit grid */}
      <div className="flex flex-col gap-3">
        {allBits.map((bits, oi) => (
          <div key={oi} className="flex items-center gap-2">
            <span className="w-5 text-[9px] text-stone-500 text-right shrink-0">
              {oi + 1}
            </span>
            <div className="flex gap-0.5">
              {bits.map((b, bi) => {
                const globalBit = oi * 8 + bi
                const isNetBit  = globalBit < cidr
                return (
                  <motion.button
                    key={bi}
                    onClick={() => toggleBit(oi, bi)}
                    animate={{
                      backgroundColor: b
                        ? isNetBit ? "#7C3AED" : "#2563EB"
                        : "#1E293B",
                      borderColor: isNetBit ? "#5B21B6" : "#1D4ED8",
                    }}
                    transition={{ duration: 0.15 }}
                    className="w-7 h-7 rounded text-[10px] font-bold text-white border transition-colors"
                  >
                    {b ? "1" : "0"}
                  </motion.button>
                )
              })}
            </div>
            <motion.span
              key={ip[oi]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-8 text-[11px] font-mono font-bold text-amber-300 shrink-0"
            >
              {ip[oi]}
            </motion.span>
          </div>
        ))}
      </div>

      {/* legend */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-lime-600" />
          <span className="text-[9px] text-stone-400">Network bits</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-blue-600" />
          <span className="text-[9px] text-stone-400">Host bits</span>
        </div>
      </div>

      {/* CIDR slider */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] text-stone-400 w-8 shrink-0">/{cidr}</span>
        <input
          type="range" min={1} max={30} value={cidr}
          onChange={e => setCidr(+e.target.value)}
          className="flex-1 accent-lime-500"
        />
        <span className="text-[10px] text-stone-500 w-20 shrink-0 text-right">
          {hostCount.toLocaleString()} hosts
        </span>
      </div>

      {/* address info */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {[
          { label: "IP Address",      value: ipStr(ip),        color: "#F59E0B" },
          { label: "Network Address", value: ipStr(network),   color: "#7C3AED" },
          { label: "Broadcast",       value: ipStr(broadcast), color: "#EF4444" },
          { label: "First Host",      value: ipStr(firstHost), color: "#10B981" },
          { label: "Last Host",       value: ipStr(lastHost),  color: "#10B981" },
          { label: "Usable Hosts",    value: hostCount.toLocaleString(), color: "#2563EB" },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-[#1E293B] rounded-xl p-2.5 border border-[#334155]">
            <p className="text-[8px] text-stone-500 font-bold uppercase tracking-wider mb-1">{label}</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={value}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="text-[11px] font-mono font-bold"
                style={{ color }}
              >
                {value}
              </motion.p>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
