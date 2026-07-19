
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const USE_CASES = ["Engineering", "HR", "Guest", "Management"]
const COLORS = ["#7C3AED", "#2563EB", "#10B981", "#F59E0B"]

interface Subnet {
  network: string
  first: string
  last: string
  broadcast: string
  hosts: number
}

function parseBaseIP(cidr: string): { octets: number[]; prefix: number } | null {
  const m = cidr.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)\/(\d+)$/)
  if (!m) return null
  const octets = [+m[1], +m[2], +m[3], +m[4]]
  const prefix = +m[5]
  if (octets.some(o => o < 0 || o > 255) || prefix < 1 || prefix > 30) return null
  return { octets, prefix }
}

function toNum(octets: number[]) {
  return ((octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3]) >>> 0
}

function fromNum(n: number): number[] {
  return [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff]
}

function ipStr(a: number[]) { return a.join(".") }

function calcSubnets(octets: number[], prefix: number, borrow: number): Subnet[] {
  if (borrow === 0) return []
  const newPrefix = prefix + borrow
  if (newPrefix > 30) return []
  const count = Math.pow(2, borrow)
  const blockSize = Math.pow(2, 32 - newPrefix)
  const base = toNum(octets) & (0xffffffff << (32 - prefix)) >>> 0
  return Array.from({ length: count }, (_, i) => {
    const netNum = (base + i * blockSize) >>> 0
    const bcastNum = (netNum + blockSize - 1) >>> 0
    return {
      network:   ipStr(fromNum(netNum)),
      first:     ipStr(fromNum((netNum + 1) >>> 0)),
      last:      ipStr(fromNum((bcastNum - 1) >>> 0)),
      broadcast: ipStr(fromNum(bcastNum)),
      hosts:     Math.max(0, blockSize - 2),
    }
  })
}

export default function Anim4B() {
  const [input,  setInput]  = useState("192.168.1.0/24")
  const [borrow, setBorrow] = useState(2)
  const [selected, setSelected] = useState<number | null>(null)
  const [useCase,  setUseCase]  = useState(false)
  const [error,  setError]  = useState("")

  const parsed = parseBaseIP(input)
  const subnets = parsed ? calcSubnets(parsed.octets, parsed.prefix, borrow) : []
  const maxBorrow = parsed ? Math.min(4, 30 - parsed.prefix) : 4
  const newPrefix = parsed ? parsed.prefix + borrow : 0

  function handleInput(v: string) {
    setInput(v)
    setError("")
    const p = parseBaseIP(v)
    if (!p && v.includes("/")) setError("Invalid CIDR (e.g. 192.168.1.0/24)")
  }

  return (
    <div className="bg-[#0F172A] p-5 flex flex-col gap-4 min-h-[420px]">

      {/* controls */}
      <div className="flex flex-wrap gap-3 items-end">
        <div className="flex flex-col gap-1">
          <label className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">Network block</label>
          <input
            value={input}
            onChange={e => handleInput(e.target.value)}
            className="bg-[#1E293B] border border-[#334155] rounded-lg px-3 py-1.5 text-xs font-mono text-stone-200 outline-none focus:border-lime-500 w-44"
          />
          {error && <span className="text-[9px] text-red-400">{error}</span>}
        </div>

        <div className="flex flex-col gap-1 flex-1 min-w-32">
          <label className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">
            Borrow {borrow} bit{borrow !== 1 ? "s" : ""} → /{newPrefix} · {subnets.length} subnets
          </label>
          <input
            type="range" min={1} max={maxBorrow} value={borrow}
            onChange={e => { setBorrow(+e.target.value); setSelected(null) }}
            className="accent-lime-500"
            disabled={!parsed}
          />
        </div>

        <label className="flex items-center gap-1.5 cursor-pointer">
          <input type="checkbox" checked={useCase} onChange={e => setUseCase(e.target.checked)}
            className="accent-lime-500" />
          <span className="text-[10px] text-stone-400">Use-case labels</span>
        </label>
      </div>

      {/* bar chart of subnets */}
      {subnets.length > 0 ? (
        <div className="flex flex-col gap-2">
          <p className="text-[9px] text-stone-500 uppercase font-bold tracking-wider">Click a subnet to inspect</p>
          <div className="flex h-14 rounded-xl overflow-hidden border border-[#334155] gap-px">
            {subnets.map((s, i) => (
              <motion.button
                key={i}
                onClick={() => setSelected(selected === i ? null : i)}
                className="flex-1 flex flex-col items-center justify-center gap-0.5 transition-all"
                animate={{
                  backgroundColor: selected === i
                    ? COLORS[i % COLORS.length]
                    : COLORS[i % COLORS.length] + "33",
                  outline: selected === i ? `2px solid ${COLORS[i % COLORS.length]}` : "none",
                }}
                transition={{ duration: 0.15 }}
              >
                <span className="text-[8px] font-bold text-white truncate px-0.5">
                  {useCase ? USE_CASES[i % USE_CASES.length] : `/${newPrefix}`}
                </span>
                <span className="text-[7px] text-white/60">{s.hosts} hosts</span>
              </motion.button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-[10px] text-stone-600 text-center py-4">
          {parsed ? "Cannot borrow that many bits (prefix would exceed /30)" : "Enter a valid CIDR block above"}
        </p>
      )}

      {/* detail panel */}
      <AnimatePresence>
        {selected !== null && subnets[selected] && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-[#1E293B] rounded-xl p-4 border"
            style={{ borderColor: COLORS[selected % COLORS.length] + "55" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: COLORS[selected % COLORS.length] }}
              />
              <span className="font-display font-bold text-sm text-white">
                Subnet {selected + 1}
                {useCase ? `  ${USE_CASES[selected % USE_CASES.length]}` : ""}
              </span>
              <span className="ml-auto text-[10px] font-mono text-stone-400">/{newPrefix}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: "Network",   value: subnets[selected].network,   color: "#7C3AED" },
                { label: "First Host",value: subnets[selected].first,     color: "#10B981" },
                { label: "Last Host", value: subnets[selected].last,      color: "#10B981" },
                { label: "Broadcast", value: subnets[selected].broadcast, color: "#EF4444" },
              ].map(({ label, value, color }) => (
                <div key={label}>
                  <p className="text-[8px] text-stone-500 font-bold uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-[11px] font-mono font-bold" style={{ color }}>{value}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-stone-400 mt-2">
              {subnets[selected].hosts} usable hosts per subnet
              {useCase ? ` (${USE_CASES[selected % USE_CASES.length]} department)` : ""}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* summary */}
      {parsed && subnets.length > 0 && (
        <div className="flex flex-wrap gap-3 text-[10px] text-stone-400 border-t border-[#334155] pt-3">
          <span>Base: <span className="text-lime-300 font-mono">{input}</span></span>
          <span>Borrowed: <span className="text-amber-300">{borrow} bits</span></span>
          <span>New prefix: <span className="text-lime-300 font-mono">/{newPrefix}</span></span>
          <span>Subnets: <span className="text-emerald-300">{subnets.length}</span></span>
          <span>Hosts/subnet: <span className="text-emerald-300">{subnets[0]?.hosts}</span></span>
        </div>
      )}
    </div>
  )
}
