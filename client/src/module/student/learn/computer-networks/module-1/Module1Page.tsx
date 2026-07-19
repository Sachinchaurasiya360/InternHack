import { Network, Wifi, Server, Globe, Signal, Cpu } from "lucide-react"
import AnimFrame from "@/components/learn/AnimFrame"
import ConceptCard from "@/components/learn/ConceptCard"
import MicroCheck from "@/components/learn/MicroCheck"
import ExitQuiz, { type QuizQuestion } from "@/components/learn/ExitQuiz"
import ObjectivesCard from "@/components/learn/ObjectivesCard"
import Anim1A from "./_components/Anim1A"
import Anim1B from "./_components/Anim1B"
import Anim1C from "./_components/Anim1C"
import Anim1D from "./_components/Anim1D"

// ── Quiz ─────────────────────────────────────────────────────────────────────

const QUIZ: QuizQuestion[] = [
  {
    question: "Which network type typically covers a single building or campus?",
    options: ["WAN", "MAN", "LAN", "PAN"],
    correct: 2,
    explanation: "A LAN (Local Area Network) covers a single building or campus. WANs span countries, MANs cover cities, and PANs cover personal-scale distances (~10 m).",
  },
  {
    question: "In a Star topology, what is the single point of failure?",
    options: ["Any leaf node", "The connecting cable", "The central hub or switch", "The network protocol"],
    correct: 2,
    explanation: "In a star topology, the central hub/switch connects all devices. If it fails, all devices lose connectivity - making it the single point of failure (SPOF).",
  },
  {
    question: "What is the primary advantage of a Mesh topology over a Bus topology?",
    options: ["Lower cost", "Simpler to set up", "Higher fault tolerance", "Less cable required"],
    correct: 2,
    explanation: "Mesh topology provides multiple paths between nodes. If any link fails, traffic can route around it - making it far more fault-tolerant than a bus.",
  },
  {
    question: "Bluetooth earphones connecting to a smartphone is an example of which network type?",
    options: ["LAN", "MAN", "WAN", "PAN"],
    correct: 3,
    explanation: "Bluetooth operates at personal scale (~10 m). A PAN (Personal Area Network) covers devices in immediate proximity of a person.",
  },
  {
    question: "In a Client-Server model, which statement is correct?",
    options: [
      "Every node acts as both client and server",
      "Clients respond to requests from servers",
      "Clients send requests; servers respond",
      "Servers only exist on the internet",
    ],
    correct: 2,
    explanation: "In Client-Server: clients initiate requests, servers respond. This is centralised. Peer-to-peer (P2P) is the model where every node is both client and server.",
  },
  {
    question: "What does a protocol define?",
    options: [
      "The physical wiring of a network",
      "Rules for format, timing, sequencing, and error checking of data exchange",
      "The speed of a network connection",
      "The number of devices allowed on a network",
    ],
    correct: 1,
    explanation: "A protocol is a set of agreed rules covering format, timing, sequencing, and error-checking - enabling different devices and OSes to communicate reliably.",
  },
  {
    question: "A Ring topology with 5 nodes has how many links?",
    options: ["4", "5", "10", "3"],
    correct: 1,
    explanation: "A ring connects each node to exactly two neighbours, forming a closed loop. With 5 nodes: 5 links total (each node provides one link forward).",
  },
  {
    question: "Which topology requires the most cable for N nodes?",
    options: ["Bus", "Star", "Ring", "Mesh"],
    correct: 3,
    explanation: "A full mesh requires N(N-1)/2 links - every node connected to every other. For 5 nodes that's 10 links, far more than bus (4), ring (5), or star (4).",
  },
  {
    question: "What is a 'packet' in networking?",
    options: [
      "A physical box used to ship hardware",
      "A unit of data transmitted across a network",
      "A type of network cable",
      "A hardware device that routes traffic",
    ],
    correct: 1,
    explanation: "A packet is a unit of data formatted for network transmission. Large messages are split into packets, each containing source/destination addresses and a portion of the payload.",
  },
  {
    question: "Which of these is a WAN?",
    options: [
      "Office Wi-Fi connecting 30 laptops",
      "Bluetooth connection to wireless speaker",
      "The internet",
      "A city's cable TV provider backbone",
    ],
    correct: 2,
    explanation: "The internet is the largest WAN - a global network of networks. Office Wi-Fi is a LAN, Bluetooth is a PAN, and a city backbone is a MAN.",
  },
]

// ── Section heading helper ────────────────────────────────────────────────────

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

export default function Module1Page() {
  return (
    <div className="px-6 lg:px-10">

      {/* ── Module hero ── */}
      <div className="pt-8 pb-2">
        <div className="relative overflow-hidden rounded-2xl bg-stone-900 px-8 py-10 text-white">
          {/* Decorative network icons */}
          <Network size={180} className="pointer-events-none absolute -right-8 -top-6 text-white opacity-[0.04]" aria-hidden="true" />
          <Wifi    size={80}  className="pointer-events-none absolute right-40 top-4 text-white opacity-[0.05] rotate-12" aria-hidden="true" />
          <Server  size={64}  className="pointer-events-none absolute right-24 bottom-3 text-white opacity-[0.05] -rotate-6" aria-hidden="true" />
          <Globe   size={72}  className="pointer-events-none absolute right-6 bottom-4 text-white opacity-[0.04]" aria-hidden="true" />
          <Signal  size={52}  className="pointer-events-none absolute right-64 top-6 text-white opacity-[0.05] rotate-3" aria-hidden="true" />
          <Cpu     size={44}  className="pointer-events-none absolute right-52 bottom-5 text-white opacity-[0.04] -rotate-12" aria-hidden="true" />

          <div className="relative flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center font-display font-extrabold text-3xl shrink-0">
              1
            </div>
            <div>
              <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-2">
                Computer Networks · Module 1 of 8
              </p>
              <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight">
                Introduction to Networks
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-3">
                <span className="bg-lime-500/20 text-lime-300 border border-lime-500/30 px-2.5 py-0.5 rounded-md text-xs font-semibold">
                  Beginner
                </span>
                <span className="text-white/50 text-xs">10 quiz questions</span>
              </div>
            </div>
          </div>

          <p className="relative text-white/60 text-sm leading-relaxed mt-6 max-w-2xl">
            Build a mental model of what a network is, why it exists, and how devices
            communicate at the highest level. No prior networking knowledge required.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="py-10 space-y-14">

        {/* Learning objectives */}
        <ObjectivesCard objectives={[
          "Define a computer network and explain why networks exist.",
          "Distinguish between LAN, WAN, MAN, and PAN with real-world examples.",
          "Identify the five major network topologies and their trade-offs.",
          "Explain the difference between a client and a server.",
          "Describe what a protocol is and why standardisation matters.",
        ]} />

        {/* ─────────────────────────────────────────── Section 01 */}
        <section className="space-y-6">
          <SectionHeading n="01" title="What Is a Network?" />

          <ConceptCard number="1.1" title="Networks and Why They Exist" tag="Key Concept">
            <p>
              A <strong>network</strong> is two or more devices that can exchange data. At its
              simplest: two laptops connected by a cable. At its largest: the internet - a{" "}
              <em>network of networks</em> spanning billions of devices worldwide.
            </p>
            <p>
              Networks exist because isolated devices are limited. Sharing data, resources
              (printers, storage), and services (email, video calls) requires connectivity.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
              {[
                { term: "Node",       def: "Any device on the network (laptop, phone, router)" },
                { term: "Link",       def: "Connection between nodes (cable, Wi-Fi signal)"    },
                { term: "Bandwidth",  def: "Max data rate of a link (e.g. 1 Gbps)"             },
                { term: "Latency",    def: "Delay for a packet to travel from A to B"          },
                { term: "Throughput", def: "Actual data transferred per second"                },
                { term: "Packet",     def: "Unit of data sent across a network"                },
              ].map(({ term, def }) => (
                <div key={term} className="bg-stone-50 dark:bg-stone-900/60 rounded-xl p-3">
                  <p className="text-xs font-bold text-lime-700 dark:text-lime-400 mb-0.5">{term}</p>
                  <p className="text-xs text-stone-500">{def}</p>
                </div>
              ))}
            </div>
          </ConceptCard>

          <AnimFrame
            id="anim-1a"
            title="Anim 1-A  Network Types"
            description="Auto-playing  click any ring or button to jump to that network type"
            totalSteps={4}
            showSpeed
          >
            <Anim1A />
          </AnimFrame>

          <MicroCheck
            question="An office building has 80 computers all connected to the same switch. What type of network is this?"
            options={["WAN", "MAN", "LAN", "PAN"]}
            correct={2}
            explanation="Devices within a single building share a LAN (Local Area Network). WANs span countries or the globe, MANs cover a city, and PANs cover personal-scale distances (~10 m)."
          />

          <ConceptCard number="1.2" title="Types of Networks">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-50 dark:bg-stone-900/60">
                    <th className="text-left p-2.5 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10">Type</th>
                    <th className="text-left p-2.5 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10">Scope</th>
                    <th className="text-left p-2.5 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10">Real-world example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-white/5">
                  {[
                    ["PAN", "~10 m",          "Bluetooth earphones ↔ phone"],
                    ["LAN", "Building",       "Office Wi-Fi"],
                    ["MAN", "City",           "Cable TV provider backbone"],
                    ["WAN", "Country / Globe","The internet"],
                  ].map(([t, s, e]) => (
                    <tr key={t} className="hover:bg-stone-50 dark:hover:bg-white/5 transition-colors">
                      <td className="p-2.5 font-bold text-lime-700 dark:text-lime-400">{t}</td>
                      <td className="p-2.5 text-stone-600 dark:text-stone-400">{s}</td>
                      <td className="p-2.5 text-stone-600 dark:text-stone-400">{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ConceptCard>
        </section>

        {/* ─────────────────────────────────────────── Section 02 */}
        <section className="space-y-6">
          <SectionHeading n="02" title="Network Topologies" />

          <ConceptCard number="1.3" title="How Nodes Are Arranged" tag="Key Concept">
            <p>
              A <strong>topology</strong> describes the physical or logical arrangement of
              nodes and links. Choosing the right topology involves trade-offs between cost,
              fault tolerance, and complexity.
            </p>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-50 dark:bg-stone-900/60">
                    {["Topology", "Layout", "Pros", "Cons"].map(h => (
                      <th key={h} className="text-left p-2.5 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-white/5">
                  {[
                    ["Bus",    "Single shared cable",  "Simple, cheap",            "One break kills all"            ],
                    ["Ring",   "Circular chain",       "Equal access",             "One break can isolate nodes"    ],
                    ["Star",   "Hub at centre",        "Fault-isolated per node",  "Hub is single point of failure" ],
                    ["Mesh",   "Every node connected", "Highly redundant",         "Expensive, complex wiring"      ],
                    ["Hybrid", "Mix of above",         "Flexible",                 "Complex to manage"              ],
                  ].map(([t, l, p, c]) => (
                    <tr key={t} className="hover:bg-stone-50 dark:hover:bg-white/5 transition-colors">
                      <td className="p-2.5 font-semibold text-lime-700 dark:text-lime-400">{t}</td>
                      <td className="p-2.5 text-stone-600 dark:text-stone-400">{l}</td>
                      <td className="p-2.5 text-emerald-700">{p}</td>
                      <td className="p-2.5 text-rose-600">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ConceptCard>

          <AnimFrame
            id="anim-1b"
            title="Anim 1-B  Topology Builder"
            description="Pick a topology, click nodes to inspect them, or break one to see fault impact"
            totalSteps={1}
          >
            <Anim1B />
          </AnimFrame>

          <MicroCheck
            question="You are designing a network where any single cable break must NOT disconnect other devices. Which topology satisfies this requirement?"
            options={["Bus", "Ring", "Star", "Mesh"]}
            correct={3}
            explanation="A full mesh provides multiple independent paths between any two nodes. A single cable break never disconnects any device. Bus and Ring both fail on a single break. Star survives leaf failures but the hub is a SPOF."
          />
        </section>

        {/* ─────────────────────────────────────────── Section 03 */}
        <section className="space-y-6">
          <SectionHeading n="03" title="Communication Models" />

          <div className="grid sm:grid-cols-2 gap-4">
            <ConceptCard number="1.4a" title="Client–Server" tag="Definition">
              <p>
                Centralised model. <strong>Clients</strong> initiate requests;{" "}
                <strong>servers</strong> respond. Scales well with load balancing. Servers
                can be upgraded independently.
              </p>
              <p className="text-xs text-lime-700 dark:text-lime-400 font-semibold mt-2">
                Examples: HTTP (web), DNS, email (SMTP / IMAP)
              </p>
            </ConceptCard>

            <ConceptCard number="1.4b" title="Peer-to-Peer (P2P)" tag="Definition">
              <p>
                Decentralised. Every node acts as both client <em>and</em> server
                simultaneously. No central point of failure. Harder to manage and secure.
              </p>
              <p className="text-xs text-lime-700 dark:text-lime-400 font-semibold mt-2">
                Examples: BitTorrent, blockchain, WebRTC (video calls)
              </p>
            </ConceptCard>
          </div>

          <AnimFrame
            id="anim-1d"
            title="Anim 1-D  Communication Models"
            description="Toggle between Client-Server and P2P  watch the data flow live"
            totalSteps={1}
          >
            <Anim1D />
          </AnimFrame>
        </section>

        {/* ─────────────────────────────────────────── Section 04 */}
        <section className="space-y-6">
          <SectionHeading n="04" title="Protocols - The Language of Networks" />

          <ConceptCard number="1.5" title="Why Protocols Exist" tag="Key Concept">
            <p>
              A <strong>protocol</strong> is a set of rules that defines the{" "}
              <em>format, timing, sequencing, and error-checking</em> of data exchange
              between devices. Without agreed protocols, a Windows PC and a Linux server
              could never exchange data.
            </p>
            <p>
              <strong>TCP/IP</strong> is the foundational protocol suite of the internet.
              Every device on the internet speaks TCP/IP - that&apos;s what makes global
              interoperability possible.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["TCP/IP", "HTTP", "DNS", "TLS", "SMTP", "SSH", "WebSocket"].map(p => (
                <span
                  key={p}
                  className="text-xs bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-400 border border-lime-200 dark:border-lime-800 px-2.5 py-1 rounded-md font-mono"
                >
                  {p}
                </span>
              ))}
            </div>
          </ConceptCard>

          <AnimFrame
            id="anim-1c"
            title="Anim 1-C  First Packet Journey"
            description="Type a message  watch it hop through a router and arrive at its destination"
            totalSteps={1}
          >
            <Anim1C />
          </AnimFrame>

          <MicroCheck
            question="Which of the following best describes what a network protocol defines?"
            options={[
              "The physical cable used to connect devices",
              "The rules for format, timing, sequencing, and error-checking of data exchange",
              "The maximum number of devices on a network",
              "The speed at which data travels through a router",
            ]}
            correct={1}
            explanation="A protocol specifies the exact rules both parties must follow: message format, when to send, how to order messages, and how to detect/correct errors. Physical cabling is a separate concern (hardware standards like Ethernet)."
          />
        </section>

        {/* ─────────────────────────────────────────── Exit Quiz */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-stone-200 dark:bg-white/10" />
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-md bg-stone-900 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
              <span className="text-xs font-bold uppercase tracking-widest">Module Exit Quiz</span>
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
            </div>
            <div className="flex-1 h-px bg-stone-200 dark:bg-white/10" />
          </div>

          <p className="text-sm text-stone-500 text-center mb-8">
            Score <strong className="text-stone-700 dark:text-stone-300">5 / 10</strong> or higher to unlock Module 2.
          </p>

          <ExitQuiz
            moduleName="Module 1 - Introduction to Networks"
            questions={QUIZ}
            passThreshold={5}
          />
        </section>

      </div>
    </div>
  )
}
