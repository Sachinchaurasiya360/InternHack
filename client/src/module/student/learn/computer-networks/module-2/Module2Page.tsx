import { Layers, Network, Shield } from "lucide-react"
import EngineeringLessonShell, { type EngTabDef, type EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell"
import AnimFrame from "@/components/learn/AnimFrame"
import ConceptCard from "@/components/learn/ConceptCard"
import MicroCheck from "@/components/learn/MicroCheck"
import Anim2A from "./_components/Anim2A"
import Anim2B from "./_components/Anim2B"
import Anim2C from "./_components/Anim2C"

const QUIZ: EngQuizQuestion[] = [
  {
    question: "Which OSI layer is responsible for logical (IP) addressing and routing between networks?",
    options: ["Data Link (L2)", "Transport (L4)", "Network (L3)", "Session (L5)"],
    correctIndex: 2,
    explanation: "The Network layer (L3) handles logical IP addressing and makes routing decisions. The Data Link layer uses MAC addresses within a single network segment.",
  },
  {
    question: "What is the correct PDU name for data at the Transport layer when using TCP?",
    options: ["Bit", "Frame", "Segment", "Packet"],
    correctIndex: 2,
    explanation: "TCP produces Segments at Layer 4. A Frame is the Data Link PDU, a Packet is the Network PDU, and Bits are the Physical PDU.",
  },
  {
    question: "Which OSI layer converts data into bits for physical transmission?",
    options: ["Data Link", "Session", "Presentation", "Physical"],
    correctIndex: 3,
    explanation: "The Physical layer (L1) converts frames into electrical, optical, or radio signals  the actual bits on the wire. Data Link creates the frame, but Physical transmits it.",
  },
  {
    question: "Which OSI layer handles encryption, decryption, and data format conversion?",
    options: ["Application", "Transport", "Presentation", "Session"],
    correctIndex: 2,
    explanation: "The Presentation layer (L6) is responsible for TLS/SSL encryption, data compression, and translating formats (e.g. JPEG, ASCII). It presents data in a usable format to the Application layer.",
  },
  {
    question: "What does encapsulation mean in the context of the OSI model?",
    options: [
      "Stripping headers as data travels up the stack",
      "Encrypting data at each layer",
      "Adding headers as data travels down the stack",
      "Splitting data into equal-sized packets",
    ],
    correctIndex: 2,
    explanation: "Encapsulation means each layer wraps the data with its own header (and sometimes trailer) as it travels down the sender's stack. The reverse  stripping headers going up  is called decapsulation.",
  },
  {
    question: "The 'Internet' layer in the TCP/IP model is equivalent to which OSI layer?",
    options: ["Transport (L4)", "Data Link (L2)", "Network (L3)", "Physical (L1)"],
    correctIndex: 2,
    explanation: "TCP/IP's Internet layer handles IP addressing and routing  exactly what OSI's Network layer (L3) does. The TCP/IP model was designed around real protocols, so it maps directly to L3.",
  },
  {
    question: "Which device operates at OSI Layer 3 and makes forwarding decisions based on IP addresses?",
    options: ["Hub", "Switch", "Repeater", "Router"],
    correctIndex: 3,
    explanation: "A router operates at Layer 3 and uses IP routing tables to forward packets between networks. A switch operates at Layer 2 using MAC addresses; a hub is Layer 1.",
  },
  {
    question: "HTTP operates at which OSI layer?",
    options: ["Layer 4 (Transport)", "Layer 5 (Session)", "Layer 6 (Presentation)", "Layer 7 (Application)"],
    correctIndex: 3,
    explanation: "HTTP is an Application layer (L7) protocol. It defines how web clients and servers exchange resources. Transport (TCP) and Network (IP) are lower layers that carry the HTTP data.",
  },
  {
    question: "Reading an Ethernet frame from outermost to innermost, what is the correct header order?",
    options: [
      "App Data → TCP Hdr → IP Hdr → Eth Hdr",
      "Eth Hdr → IP Hdr → TCP Hdr → App Data",
      "TCP Hdr → IP Hdr → App Data → Eth Hdr",
      "IP Hdr → Eth Hdr → TCP Hdr → App Data",
    ],
    correctIndex: 1,
    explanation: "Ethernet is the outermost wrapper (Data Link). Inside is the IP header (Network), then TCP header (Transport), then the Application data. This reflects the encapsulation order: each lower layer wraps the layer above.",
  },
  {
    question: "The TCP/IP Application layer combines which OSI layers?",
    options: ["Layers 1 and 2", "Layers 3 and 4", "Layers 4 and 5", "Layers 5, 6, and 7"],
    correctIndex: 3,
    explanation: "TCP/IP's Application layer is a consolidation of OSI's Session (L5), Presentation (L6), and Application (L7) layers. TCP/IP is a practical 4-layer model designed for real-world implementation.",
  },
  {
    question: "A switch makes forwarding decisions based on:",
    options: ["IP addresses (L3)", "Port numbers (L4)", "MAC addresses (L2)", "Domain names (L7)"],
    correctIndex: 2,
    explanation: "A switch is a Layer 2 device. It learns which MAC address is reachable via which port (MAC address table) and forwards frames only to the correct port  avoiding the flooding a hub would do.",
  },
  {
    question: "When data travels up the receiver's OSI stack, each layer removes its header. This process is called:",
    options: ["Encapsulation", "Multiplexing", "Decapsulation", "Fragmentation"],
    correctIndex: 2,
    explanation: "Decapsulation is the reverse of encapsulation. As data travels up the receiver's stack, each layer peels off and processes its own header before passing the payload to the layer above.",
  },
  {
    question: "The TCP/IP 'Network Access' layer covers which OSI layers?",
    options: ["Layers 1 and 2", "Layers 2 and 3", "Layers 1, 2, and 3", "Layers 3 and 4"],
    correctIndex: 0,
    explanation: "TCP/IP's Network Access layer combines OSI's Physical (L1) and Data Link (L2) layers. It deals with physical transmission and local network framing (e.g. Ethernet), which the TCP/IP model treats as a single concern.",
  },
  {
    question: "Which PDU is produced at the Data Link layer?",
    options: ["Segment", "Bit", "Packet", "Frame"],
    correctIndex: 3,
    explanation: "The Data Link layer (L2) produces Frames  the PDU that includes MAC addresses and an FCS checksum for error detection. Packets are Network (L3) PDUs, Segments are Transport (L4), and Bits are Physical (L1).",
  },
  {
    question: "After a Network layer router processes a TCP segment and adds an IP header, the resulting PDU is called a:",
    options: ["Frame", "Segment", "Packet", "Datagram"],
    correctIndex: 2,
    explanation: "When the Network layer (L3) adds an IP header to a TCP Segment, the result is a Packet. 'Datagram' typically refers to UDP's Transport-layer PDU. Packets are then handed to Data Link as Frames.",
  },
]

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-lg bg-lime-500 text-stone-900 font-display font-bold text-sm flex items-center justify-center shrink-0">
        {n}
      </span>
      <h2 className="font-display text-xl font-bold text-stone-900 dark:text-stone-50 whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-stone-200" />
    </div>
  )
}

export default function Module2Page() {
  const tabs: EngTabDef[] = [
    {
      id: "s1",
      label: "The OSI Model",
      icon: <Layers className="w-4 h-4" />,
      content: (
<section className="space-y-6">
          <SectionHeading n="01" title="The OSI Model" />

          <ConceptCard number="2.1" title="Seven Layers, One Framework" tag="Key Concept">
            <p>
              The OSI (Open Systems Interconnection) model divides network communication
              into <strong>7 ordered layers</strong>. Each layer serves the layer above it
              and is served by the layer below. This separation lets engineers design,
              troubleshoot, and replace one layer without touching the others.
            </p>
            <p className="text-xs text-stone-500 font-semibold">
              Mnemonic (top→bottom): <span className="text-lime-600">A</span>ll{" "}
              <span className="text-lime-600">P</span>eople{" "}
              <span className="text-lime-600">S</span>eem{" "}
              <span className="text-lime-600">T</span>o{" "}
              <span className="text-lime-600">N</span>eed{" "}
              <span className="text-lime-600">D</span>ata{" "}
              <span className="text-lime-600">P</span>rocessing
            </p>
            <div className="overflow-x-auto mt-1">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-50 dark:bg-stone-900/60">
                    {["Layer", "Name", "PDU", "Key Protocols / Devices"].map(h => (
                      <th key={h} className="text-left p-2.5 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    ["7", "Application",  "Data",    "HTTP, FTP, DNS, SMTP"],
                    ["6", "Presentation", "Data",    "TLS, JPEG, ASCII"],
                    ["5", "Session",      "Data",    "NetBIOS, RPC"],
                    ["4", "Transport",    "Segment", "TCP, UDP"],
                    ["3", "Network",      "Packet",  "IP, ICMP, Router"],
                    ["2", "Data Link",    "Frame",   "Ethernet, MAC, Switch"],
                    ["1", "Physical",     "Bits",    "Cables, Wi-Fi, Hub"],
                  ].map(([n, name, pdu, protos]) => (
                    <tr key={n} className="hover:bg-stone-50 dark:bg-stone-900/60 transition-colors">
                      <td className="p-2.5 font-bold text-lime-700">{n}</td>
                      <td className="p-2.5 font-semibold text-stone-800">{name}</td>
                      <td className="p-2.5 font-mono text-amber-600">{pdu}</td>
                      <td className="p-2.5 text-stone-500">{protos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ConceptCard>

          <AnimFrame
            id="anim-2a"
            title="Anim 2-A  OSI Encapsulation Visualizer"
            description="Watch data travel down the sender stack and up the receiver stack  click any layer to jump"
            totalSteps={15}
            showSpeed
          >
            <Anim2A />
          </AnimFrame>

          <MicroCheck
            question="At which OSI layer does an IP address operate?"
            options={["Layer 2  Data Link", "Layer 3  Network", "Layer 4  Transport", "Layer 7  Application"]}
            correct={1}
            explanation="IP addresses are a Layer 3 (Network) concept. They provide logical addressing to route packets across multiple networks. MAC addresses are Layer 2 and only work within a single local network segment."
          />
        </section>
      ),
    },
    {
      id: "s2",
      label: "Encapsulation & PDU Names",
      icon: <Network className="w-4 h-4" />,
      content: (
<section className="space-y-6">
          <SectionHeading n="02" title="Encapsulation &amp; PDU Names" />

          <div className="grid sm:grid-cols-2 gap-4">
            <ConceptCard number="2.2" title="Encapsulation" tag="Key Concept">
              <p>
                As data travels <strong>down</strong> the sender's stack, each layer wraps it
                with its own <strong>header</strong> (and sometimes a trailer). This is
                encapsulation  the data grows with every layer.
              </p>
              <p>
                On the <strong>receiver</strong>, each layer strips its own header as data
                travels <em>up</em> the stack. This is <strong>decapsulation</strong>.
              </p>
              <div className="bg-stone-900 rounded-xl p-3 font-mono text-[10px] text-stone-300 space-y-0.5 mt-1">
                <p><span className="text-lime-400">App:</span>   [HTTP Data]</p>
                <p><span className="text-amber-400">Trans:</span>  [TCP Hdr | HTTP Data]</p>
                <p><span className="text-blue-400">Net:</span>    [IP Hdr | TCP Hdr | HTTP Data]</p>
                <p><span className="text-emerald-400">DL:</span>    [Eth Hdr | IP Hdr | TCP Hdr | HTTP Data | FCS]</p>
                <p><span className="text-stone-400">Phys:</span>  01001101 01110010 … (bits)</p>
              </div>
            </ConceptCard>

            <ConceptCard number="2.4" title="PDU Names" tag="Remember">
              <p>
                Each layer gives the data a specific name called a{" "}
                <strong>Protocol Data Unit (PDU)</strong>. Knowing PDU names is essential
                for exam questions and real-world troubleshooting.
              </p>
              <div className="space-y-1.5 mt-2">
                {[
                  { layer: "Application (L7–L5)", pdu: "Message / Data",         color: "#7C3AED" },
                  { layer: "Transport (L4)",       pdu: "Segment (TCP) / Datagram (UDP)", color: "#F59E0B" },
                  { layer: "Network (L3)",          pdu: "Packet",                color: "#2563EB" },
                  { layer: "Data Link (L2)",        pdu: "Frame",                 color: "#10B981" },
                  { layer: "Physical (L1)",         pdu: "Bits",                  color: "#64748B" },
                ].map(({ layer, pdu, color }) => (
                  <div key={layer} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
                    <span className="text-xs text-stone-500 w-36 shrink-0">{layer}</span>
                    <span className="text-xs font-mono font-bold" style={{ color }}>{pdu}</span>
                  </div>
                ))}
              </div>
            </ConceptCard>
          </div>

          <AnimFrame
            id="anim-2b"
            title="Anim 2-B  Layer Classification Game"
            description="Select an item, then click the correct OSI layer  test your knowledge"
            totalSteps={1}
          >
            <Anim2B />
          </AnimFrame>

          <MicroCheck
            question="What is the PDU name at the Data Link layer (Layer 2)?"
            options={["Packet", "Segment", "Frame", "Bits"]}
            correct={2}
            explanation="The Data Link layer produces Frames  they contain the source and destination MAC addresses, the payload, and an FCS (Frame Check Sequence) for error detection. Packets are Network layer PDUs, Segments are Transport, and Bits are Physical."
          />
        </section>
      ),
    },
    {
      id: "s3",
      label: "The TCP/IP Model",
      icon: <Shield className="w-4 h-4" />,
      content: (
<section className="space-y-6">
          <SectionHeading n="03" title="The TCP/IP Model" />

          <ConceptCard number="2.3" title="OSI vs TCP/IP  The Practical Model" tag="Key Concept">
            <p>
              The <strong>TCP/IP model</strong> is the model actually used on the internet.
              It consolidates OSI's 7 layers into <strong>4 layers</strong>.
              OSI is the <em>conceptual</em> reference; TCP/IP is the <em>practical</em>
              implementation.
            </p>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-50 dark:bg-stone-900/60">
                    {["TCP/IP Layer", "OSI Equivalent", "Key Protocols"].map(h => (
                      <th key={h} className="text-left p-2.5 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    ["Application",    "L5 + L6 + L7",  "HTTP, DNS, SMTP, TLS"],
                    ["Transport",      "L4",            "TCP, UDP"],
                    ["Internet",       "L3",            "IP, ICMP, ARP"],
                    ["Network Access", "L1 + L2",       "Ethernet, Wi-Fi, MAC"],
                  ].map(([tcp, osi, protos]) => (
                    <tr key={tcp} className="hover:bg-stone-50 dark:bg-stone-900/60 transition-colors">
                      <td className="p-2.5 font-semibold text-lime-700">{tcp}</td>
                      <td className="p-2.5 text-stone-500 font-mono text-[11px]">{osi}</td>
                      <td className="p-2.5 text-stone-600 dark:text-stone-400">{protos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-stone-500 mt-2">
              <strong>Rule of thumb:</strong> use OSI to understand and troubleshoot;
              use TCP/IP to understand what actually runs on the internet.
            </p>
          </ConceptCard>

          <AnimFrame
            id="anim-2c"
            title="Anim 2-C  HTTP Request Trace"
            description="Click 'Trace Request'  watch a full HTTP/TLS request step by step with layer labels"
            totalSteps={1}
          >
            <Anim2C />
          </AnimFrame>

          <MicroCheck
            question="How many layers does the TCP/IP model have?"
            options={["5", "7", "4", "6"]}
            correct={2}
            explanation="The TCP/IP model has 4 layers: Application (covers OSI L5–L7), Transport (L4), Internet (L3), and Network Access (L1–L2). The OSI model has 7 layers. TCP/IP was designed around real internet protocols, so it's leaner."
          />
        </section>
      ),
    },
  ]

  return (
    <EngineeringLessonShell
      title="OSI & TCP/IP Models"
      level={2}
      lessonNumber={2}
      crumbLabel="computer networks"
      crumbTail="module 02"
      tabs={tabs}
      quiz={QUIZ}
    />
  )
}
