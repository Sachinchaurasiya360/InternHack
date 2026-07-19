import { Network, Cpu, Shield, Server, Globe, Layers } from "lucide-react"
import AnimFrame from "@/components/learn/AnimFrame"
import ConceptCard from "@/components/learn/ConceptCard"
import MicroCheck from "@/components/learn/MicroCheck"
import ExitQuiz, { type QuizQuestion } from "@/components/learn/ExitQuiz"
import ObjectivesCard from "@/components/learn/ObjectivesCard"
import Anim3A from "./_components/Anim3A"
import Anim3B from "./_components/Anim3B"
import Anim3C from "./_components/Anim3C"

// ── Exit Quiz ─────────────────────────────────────────────────────────────────

const QUIZ: QuizQuestion[] = [
  {
    question: "What does ARP stand for and what problem does it solve?",
    options: [
      "Address Routing Protocol  maps IP addresses to domain names",
      "Address Resolution Protocol  maps IP addresses to MAC addresses",
      "Address Resolution Protocol  maps MAC addresses to IP addresses",
      "Automatic Routing Protocol  assigns IP addresses dynamically",
    ],
    correct: 1,
    explanation: "ARP (Address Resolution Protocol) resolves a known IP address to its corresponding MAC address. You need the MAC address to actually send a frame on a local Ethernet network.",
  },
  {
    question: "An ARP request is sent as a _____ frame; the ARP reply is sent as a _____ frame.",
    options: [
      "Unicast … Broadcast",
      "Multicast … Unicast",
      "Broadcast … Unicast",
      "Broadcast … Broadcast",
    ],
    correct: 2,
    explanation: "ARP requests are broadcast (FF:FF:FF:FF:FF:FF) because the sender doesn't yet know the destination MAC. The reply is unicast  the target now knows who asked and replies directly.",
  },
  {
    question: "A switch receives a frame destined for a MAC address not in its table. What does it do?",
    options: [
      "Drops the frame",
      "Sends an ARP request",
      "Floods the frame to all ports except the source port",
      "Forwards it to the default gateway",
    ],
    correct: 2,
    explanation: "When a switch encounters an unknown destination MAC, it floods the frame to every port except the one it arrived on. This is called 'unknown unicast flooding'. The switch learns the destination MAC when that device replies.",
  },
  {
    question: "What is the maximum payload size (MTU) of a standard Ethernet frame?",
    options: ["512 bytes", "1500 bytes", "9000 bytes", "65535 bytes"],
    correct: 1,
    explanation: "The standard Ethernet MTU is 1500 bytes. Frames larger than this must be fragmented at the IP layer before transmission. Jumbo frames (up to 9000 bytes) require explicit switch/NIC support.",
  },
  {
    question: "Which field in an Ethernet frame identifies what Layer 3 protocol is inside the payload?",
    options: ["FCS", "Preamble", "EtherType", "SFD"],
    correct: 2,
    explanation: "The EtherType field (2 bytes) identifies the encapsulated protocol: 0x0800 = IPv4, 0x86DD = IPv6, 0x0806 = ARP. The receiver uses this to know which upper-layer handler to pass the payload to.",
  },
  {
    question: "What is the purpose of the FCS field in an Ethernet frame?",
    options: [
      "Synchronise the clock before frame arrival",
      "Mark the start of a frame",
      "Detect bit errors introduced during transmission",
      "Identify the source port on the switch",
    ],
    correct: 2,
    explanation: "The Frame Check Sequence (FCS) is a 32-bit CRC computed over the frame contents. If a receiver's computed CRC doesn't match the FCS, the frame is silently dropped  Ethernet does not request retransmission (that's TCP's job).",
  },
  {
    question: "How does a MAC address differ from an IP address?",
    options: [
      "MAC addresses are 32-bit; IP addresses are 48-bit",
      "MAC addresses are globally routable; IP addresses are local",
      "MAC addresses are hardware identifiers used within a LAN; IP addresses are logical and route across networks",
      "MAC addresses change every session; IP addresses are permanent",
    ],
    correct: 2,
    explanation: "A MAC address is burned into the NIC hardware and used only for communication within a single network segment (Layer 2). An IP address is a logical address assigned by software and used to route packets across multiple networks (Layer 3).",
  },
  {
    question: "What is a MAC address table aging timer used for?",
    options: [
      "To throttle broadcast traffic",
      "To remove stale entries for devices that have moved or disconnected",
      "To track how many times a port has been used",
      "To prioritise certain MAC addresses",
    ],
    correct: 1,
    explanation: "Entries in a switch's MAC table expire (typically after ~300 s) to handle devices that have disconnected, moved to a different port, or changed MAC addresses. Without aging, the table would fill with stale entries and the switch could no longer forward accurately.",
  },
  {
    question: "Which device operates at OSI Layer 2 and creates a separate collision domain per port?",
    options: ["Hub", "Bridge", "Switch", "Router"],
    correct: 2,
    explanation: "A switch creates a separate collision domain for each port  only the two devices on that segment compete for the medium. A hub (Layer 1) has one shared collision domain for all ports. A bridge creates per-segment collision domains but typically has fewer ports.",
  },
  {
    question: "What are the first 24 bits of a MAC address called, and what do they identify?",
    options: [
      "Host Identifier  unique to the device",
      "OUI (Organisationally Unique Identifier)  identifies the manufacturer",
      "VLAN tag  identifies the virtual LAN",
      "EtherType  identifies the Layer 3 protocol",
    ],
    correct: 1,
    explanation: "The first 24 bits (3 bytes) of a MAC address form the OUI (Organisationally Unique Identifier), assigned by IEEE to each NIC manufacturer. The remaining 24 bits are assigned by the manufacturer to uniquely identify each device.",
  },
  {
    question: "What does a switch do when it receives a frame from Host A on Port 3?",
    options: [
      "Broadcasts an ARP request for Host A's IP",
      "Records Host A's MAC address → Port 3 in its MAC table",
      "Sends the frame to the default gateway",
      "Drops the frame until the destination is known",
    ],
    correct: 1,
    explanation: "Source learning  when a frame arrives, the switch records the source MAC address and the port it came in on. This way, the switch knows where to send future frames destined for that MAC without flooding.",
  },
  {
    question: "A VLANs isolates traffic on a switch. What is required for traffic to pass between two VLANs?",
    options: [
      "A hub connecting both VLANs",
      "A longer aging timer",
      "A router (or Layer 3 switch) to route between them",
      "An additional FCS check",
    ],
    correct: 2,
    explanation: "VLANs are Layer 2 constructs  traffic within a VLAN stays within it. To route between VLANs you need a Layer 3 device (router or Layer 3 switch) to move packets between the logical networks, just like routing between physical networks.",
  },
]

// ── Section heading ───────────────────────────────────────────────────────────

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-lg bg-lime-400 text-stone-900 font-display font-bold text-sm flex items-center justify-center shrink-0">
        {n}
      </span>
      <h2 className="font-display text-xl font-bold text-stone-900 dark:text-stone-50 whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-stone-200 dark:bg-white/10" />
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Module3Page() {
  return (
    <div className="px-6 lg:px-10">

      {/* ── Module hero ── */}
      <div className="pt-8 pb-2">
        <div className="relative overflow-hidden rounded-2xl bg-stone-900 px-8 py-10 text-white">
          <Network size={180} className="pointer-events-none absolute -right-8 -top-6 text-white opacity-[0.04]" aria-hidden="true" />
          <Cpu     size={80}  className="pointer-events-none absolute right-40 top-4 text-white opacity-[0.05] rotate-12" aria-hidden="true" />
          <Shield  size={64}  className="pointer-events-none absolute right-24 bottom-3 text-white opacity-[0.05] -rotate-6" aria-hidden="true" />
          <Globe   size={72}  className="pointer-events-none absolute right-6 bottom-4 text-white opacity-[0.04]" aria-hidden="true" />
          <Server  size={52}  className="pointer-events-none absolute right-64 top-6 text-white opacity-[0.05] rotate-3" aria-hidden="true" />
          <Layers  size={44}  className="pointer-events-none absolute right-52 bottom-5 text-white opacity-[0.04] -rotate-12" aria-hidden="true" />

          <div className="relative flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center font-display font-extrabold text-3xl shrink-0">
              3
            </div>
            <div>
              <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-2">
                Computer Networks · Module 3 of 8
              </p>
              <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight">
                Data Link Layer
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-3">
                <span className="bg-amber-500/30 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-md text-xs font-semibold">
                  Intermediate
                </span>
                <span className="text-white/50 text-xs">12 quiz questions</span>
              </div>
            </div>
          </div>

          <p className="relative text-white/60 text-sm leading-relaxed mt-6 max-w-2xl">
            Understand how data moves between adjacent devices on a network  MAC addressing,
            Ethernet framing, ARP, and how switches learn to forward frames intelligently.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="py-10 space-y-14">

        {/* Learning objectives */}
        <ObjectivesCard objectives={[
          "Explain what a MAC address is and how it differs from an IP address.",
          "Describe the structure of an Ethernet frame field by field.",
          "Trace an ARP request and response, including ARP caching.",
          "Contrast hubs, bridges, and switches by layer and collision domain.",
          "Explain how a switch builds and ages its MAC address table.",
        ]} />

        {/* ──────────────────────────────── Section 01 */}
        <section className="space-y-6">
          <SectionHeading n="01" title="MAC Addresses" />

          <div className="grid sm:grid-cols-2 gap-4">
            <ConceptCard number="3.1" title="Hardware Addresses" tag="Key Concept">
              <p>
                A <strong>MAC address</strong> (Media Access Control) is a hardware identifier
                burned into every NIC. It is <strong>48 bits</strong> long, written as six
                colon-separated hex pairs: <code className="text-lime-600">A4:C3:F0:85:7D:21</code>.
              </p>
              <div className="bg-stone-50 dark:bg-stone-900/60 rounded-xl p-3 mt-2 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-16 text-[10px] font-bold text-lime-600">Bits 0–23</span>
                  <span className="text-[10px] text-stone-600 dark:text-stone-400">OUI  identifies the manufacturer (IEEE-assigned)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-16 text-[10px] font-bold text-amber-600">Bits 24–47</span>
                  <span className="text-[10px] text-stone-600 dark:text-stone-400">Device-specific  assigned by the manufacturer</span>
                </div>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                MAC addresses are <strong>local</strong>  they only matter within a single
                network segment. IP addresses are used for cross-network routing.
              </p>
            </ConceptCard>

            <ConceptCard number="3.1" title="MAC vs IP" tag="Key Concept">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-50 dark:bg-stone-900/60">
                      {["Property", "MAC", "IP"].map(h => (
                        <th key={h} className="text-left p-2 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      ["Layer",    "Layer 2",          "Layer 3"],
                      ["Scope",    "Local segment",    "Global / routable"],
                      ["Format",   "48-bit hex",       "32-bit decimal (v4)"],
                      ["Assigned", "By manufacturer",  "By network admin / DHCP"],
                      ["Changes?", "Fixed (burned-in)","Yes (DHCP lease, static)"],
                    ].map(([prop, mac, ip]) => (
                      <tr key={prop} className="hover:bg-stone-50 dark:bg-stone-900/60">
                        <td className="p-2 font-semibold text-stone-700 dark:text-stone-300">{prop}</td>
                        <td className="p-2 text-lime-600 font-mono text-[11px]">{mac}</td>
                        <td className="p-2 text-blue-600 font-mono text-[11px]">{ip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ConceptCard>
          </div>

          <MicroCheck
            question="Which part of a MAC address identifies the device manufacturer?"
            options={[
              "The last 24 bits (device-specific portion)",
              "The first 24 bits  the OUI (Organisationally Unique Identifier)",
              "The EtherType field",
              "The entire 48-bit address",
            ]}
            correct={1}
            explanation="The first 24 bits of a MAC address are the OUI (Organisationally Unique Identifier), assigned by IEEE to each NIC manufacturer. Apple, Intel, and Cisco each have their own OUI prefix. The remaining 24 bits uniquely identify the specific device."
          />
        </section>

        {/* ──────────────────────────────── Section 02 */}
        <section className="space-y-6">
          <SectionHeading n="02" title="Ethernet Frame Structure" />

          <ConceptCard number="3.2" title="Anatomy of an Ethernet Frame" tag="Key Concept">
            <p>
              Every Ethernet frame has the same structure. Each field has a specific purpose
              in getting data reliably from one NIC to another on the same network segment.
            </p>
            <div className="font-mono text-[10px] bg-stone-900 text-stone-300 rounded-xl p-3 mt-2 overflow-x-auto">
              <span className="text-stone-500">| </span>
              <span className="text-stone-400">Preamble(7B)</span>
              <span className="text-stone-500"> | </span>
              <span className="text-stone-400">SFD(1B)</span>
              <span className="text-stone-500"> | </span>
              <span className="text-amber-400">Dst MAC(6B)</span>
              <span className="text-stone-500"> | </span>
              <span className="text-lime-400">Src MAC(6B)</span>
              <span className="text-stone-500"> | </span>
              <span className="text-purple-400">EtherType(2B)</span>
              <span className="text-stone-500"> | </span>
              <span className="text-blue-400">Payload(46–1500B)</span>
              <span className="text-stone-500"> | </span>
              <span className="text-emerald-400">FCS(4B)</span>
              <span className="text-stone-500"> |</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 mt-3">
              {[
                { name: "Preamble + SFD", color: "#64748B", desc: "Clock sync  7 bytes of alternating bits + 1 byte start delimiter." },
                { name: "Dest MAC",       color: "#F59E0B", desc: "Who should receive this frame. FF:FF:FF:FF:FF:FF = broadcast." },
                { name: "Src MAC",        color: "#7C3AED", desc: "Which NIC sent the frame. Switch uses this for source learning." },
                { name: "EtherType",      color: "#8B5CF6", desc: "0x0800 = IPv4, 0x86DD = IPv6, 0x0806 = ARP." },
                { name: "Payload",        color: "#2563EB", desc: "46–1500 bytes. The encapsulated IP packet (or ARP message)." },
                { name: "FCS",            color: "#10B981", desc: "32-bit CRC checksum. Mismatch → frame silently dropped." },
              ].map(({ name, color, desc }) => (
                <div key={name} className="flex items-start gap-1.5">
                  <span className="w-2 h-2 rounded-full shrink-0 mt-0.5" style={{ backgroundColor: color }} />
                  <div>
                    <span className="text-[10px] font-bold" style={{ color }}>{name}: </span>
                    <span className="text-[10px] text-stone-500">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </ConceptCard>

          <AnimFrame
            id="anim-3c"
            title="Anim 3-C  Ethernet Frame Dissector"
            description="Send a frame then click Dissect  inspect each field, corrupt the FCS, and check the result"
            totalSteps={1}
          >
            <Anim3C />
          </AnimFrame>

          <MicroCheck
            question="What happens when a receiver's recomputed CRC does not match the FCS field?"
            options={[
              "The receiver sends a NACK and requests retransmission",
              "The frame is passed up with an error flag set",
              "The frame is silently dropped  Layer 2 does not retransmit",
              "The switch floods the frame to all ports",
            ]}
            correct={2}
            explanation="Ethernet's FCS detects errors but does not correct them  the frame is simply dropped. Error recovery (retransmission) is handled by higher layers, specifically TCP at Layer 4. This keeps Layer 2 fast and simple."
          />
        </section>

        {/* ──────────────────────────────── Section 03 */}
        <section className="space-y-6">
          <SectionHeading n="03" title="ARP  Address Resolution Protocol" />

          <ConceptCard number="3.3" title="The ARP Problem" tag="Key Concept">
            <p>
              You know the IP address of a host on your LAN, but to build an Ethernet frame
              you need its <strong>MAC address</strong>. ARP solves this.
            </p>
            <ol className="space-y-1.5 mt-2 list-none">
              {[
                { n: 1, color: "#F59E0B", text: 'Host A broadcasts: "Who has 192.168.1.5? Tell 192.168.1.1."  every device on the LAN receives it.' },
                { n: 2, color: "#7C3AED", text: 'Host B (192.168.1.5) replies unicast: "I\'m at AA:BB:CC:DD:EE:FF."' },
                { n: 3, color: "#10B981", text: "Host A stores the mapping in its ARP cache. Future frames skip the broadcast." },
              ].map(({ n, color, text }) => (
                <li key={n} className="flex items-start gap-2">
                  <span
                    className="w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: color }}
                  >
                    {n}
                  </span>
                  <span className="text-xs text-stone-600 dark:text-stone-400">{text}</span>
                </li>
              ))}
            </ol>
            <p className="text-xs text-stone-500 mt-2">
              Run <code className="text-lime-600">arp -a</code> in any terminal to see your current ARP cache.
            </p>
          </ConceptCard>

          <AnimFrame
            id="anim-3a"
            title="Anim 3-A  ARP Request &amp; Response"
            description="Click 'Send ARP Request', then replay to see how ARP caching eliminates the broadcast"
            totalSteps={1}
          >
            <Anim3A />
          </AnimFrame>

          <MicroCheck
            question="Why is an ARP request sent as a broadcast rather than a unicast?"
            options={[
              "To inform the router about the IP-to-MAC mapping",
              "Because the sender doesn't yet know the destination's MAC address",
              "Because unicast frames are slower on Ethernet",
              "To update all devices' ARP caches simultaneously",
            ]}
            correct={1}
            explanation="The whole point of ARP is to discover an unknown MAC address. Since the sender doesn't know the MAC, it can't send a unicast (which requires the MAC). A broadcast (FF:FF:FF:FF:FF:FF) reaches every device on the segment  the correct one will reply."
          />
        </section>

        {/* ──────────────────────────────── Section 04 */}
        <section className="space-y-6">
          <SectionHeading n="04" title="Hubs, Bridges &amp; Switches" />

          <div className="grid sm:grid-cols-2 gap-4">
            <ConceptCard number="3.4" title="Layer 2 Devices Compared" tag="Key Concept">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-50 dark:bg-stone-900/60">
                      {["Device", "Layer", "Intelligence", "Collision Domain"].map(h => (
                        <th key={h} className="text-left p-2 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10 text-[10px]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      { d: "Hub",    l: "L1", i: "None  floods all ports",           c: "One shared domain", color: "#EF4444" },
                      { d: "Bridge", l: "L2", i: "Learns MACs, 2 segments",           c: "Per segment",       color: "#F59E0B" },
                      { d: "Switch", l: "L2", i: "Full MAC table, per-port forward",  c: "Per port",          color: "#10B981" },
                    ].map(({ d, l, i, c, color }) => (
                      <tr key={d} className="hover:bg-stone-50 dark:bg-stone-900/60">
                        <td className="p-2 font-bold" style={{ color }}>{d}</td>
                        <td className="p-2 text-stone-500 font-mono text-[10px]">{l}</td>
                        <td className="p-2 text-stone-600 dark:text-stone-400 text-[10px]">{i}</td>
                        <td className="p-2 text-stone-600 dark:text-stone-400 text-[10px]">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                A <strong>collision domain</strong> is a network segment where only one device
                can transmit at a time. More domains = less contention = better performance.
              </p>
            </ConceptCard>

            <ConceptCard number="3.5–3.6" title="How a Switch Learns + VLANs" tag="Key Concept">
              <p className="text-xs text-stone-600 dark:text-stone-400 mb-2">
                A switch starts with an <strong>empty MAC table</strong> and builds it through
                source learning:
              </p>
              <ol className="space-y-1 list-decimal list-inside text-xs text-stone-600 dark:text-stone-400">
                <li>Frame arrives on Port 3 from <code className="text-lime-600">AA:BB:…</code></li>
                <li>Switch records: <code className="text-lime-600">AA:BB:… → Port 3</code></li>
                <li>Destination unknown? <strong>Flood</strong> all other ports.</li>
                <li>Destination known? <strong>Forward</strong> to that port only.</li>
                <li>Entries expire after ~300 s (aging timer).</li>
              </ol>
              <div className="bg-lime-50 border border-lime-100 rounded-xl p-2.5 mt-3">
                <p className="text-[10px] font-bold text-lime-700 mb-1">VLANs (802.1Q)</p>
                <p className="text-[10px] text-lime-600">
                  A VLAN divides one physical switch into multiple logical LANs.
                  A 4-byte VLAN tag is added to frames. Traffic between VLANs requires a
                  router (Layer 3).
                </p>
              </div>
            </ConceptCard>
          </div>

          <AnimFrame
            id="anim-3b"
            title="Anim 3-B  Switch MAC Table Builder"
            description="Step through frames  watch flooding become unicast as the switch learns"
            totalSteps={1}
          >
            <Anim3B />
          </AnimFrame>

          <MicroCheck
            question="A switch has Host A on Port 1 and Host D on Port 4 in its MAC table. It receives a frame from A destined for D. What does it do?"
            options={[
              "Floods the frame to all 4 ports",
              "Sends the frame only to Port 4",
              "Sends an ARP request to find D",
              "Drops the frame and waits for a re-send",
            ]}
            correct={1}
            explanation="Since the switch already knows D is on Port 4 (source learning), it forwards the frame only to Port 4. This is the key advantage of a switch over a hub  no unnecessary flooding when the destination is known."
          />
        </section>

        {/* ──────────────────────────────── Exit Quiz */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-stone-200" />
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-md bg-stone-900 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
              <span className="text-xs font-bold uppercase tracking-widest">Module Exit Quiz</span>
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
            </div>
            <div className="flex-1 h-px bg-stone-200" />
          </div>

          <p className="text-sm text-stone-500 text-center mb-8">
            Score <strong className="text-stone-700 dark:text-stone-300">9 / 12</strong> or higher to unlock Module 4.
          </p>

          <ExitQuiz
            moduleName="Module 3  Data Link Layer"
            questions={QUIZ}
            passThreshold={9}
          />
        </section>

      </div>
    </div>
  )
}
