import { Globe, Network, Server, Shield, Layers } from "lucide-react"
import EngineeringLessonShell, { type EngTabDef, type EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell"
import AnimFrame from "@/components/learn/AnimFrame"
import ConceptCard from "@/components/learn/ConceptCard"
import MicroCheck from "@/components/learn/MicroCheck"
import Anim4A from "./_components/Anim4A"
import Anim4B from "./_components/Anim4B"
import Anim4C from "./_components/Anim4C"
import Anim4D from "./_components/Anim4D"

const QUIZ: EngQuizQuestion[] = [
  {
    question: "How many usable host addresses does a /26 subnet provide?",
    options: ["30", "62", "64", "126"],
    correctIndex: 1,
    explanation: "A /26 subnet has 32 - 26 = 6 host bits. 2⁶ = 64 total addresses minus 2 (network + broadcast) = 62 usable hosts. This is a common calculation for small office subnets.",
  },
  {
    question: "What is the network address of 192.168.5.130/25?",
    options: ["192.168.5.0", "192.168.5.128", "192.168.5.130", "192.168.5.255"],
    correctIndex: 1,
    explanation: "/25 means the subnet mask is 255.255.255.128. The network boundary for the second half is 192.168.5.128. ANDing 130 with 128 gives 128. So the network address is 192.168.5.128.",
  },
  {
    question: "Which IP address range belongs to the private (RFC 1918) space?",
    options: ["203.0.113.0/24", "172.16.0.0/12", "100.64.0.0/10", "8.8.8.0/24"],
    correctIndex: 1,
    explanation: "RFC 1918 defines three private ranges: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. 203.0.113.0/24 is a documentation prefix; 100.64.0.0/10 is carrier-grade NAT (RFC 6598); 8.8.8.0/24 is Google's public DNS.",
  },
  {
    question: "A packet arrives at a router destined for 10.10.5.100. The routing table has routes for 10.10.0.0/16 and 10.10.5.0/24. Which route wins?",
    options: [
      "10.10.0.0/16  it's the shorter prefix",
      "10.10.5.0/24  longest prefix match always wins",
      "Both are used equally (load-balanced)",
      "The router drops the packet due to ambiguity",
    ],
    correctIndex: 1,
    explanation: "Routers use longest prefix match: the most specific route (highest prefix length) that matches the destination wins. /24 is more specific than /16 for 10.10.5.100, so 10.10.5.0/24 is chosen.",
  },
  {
    question: "What is the purpose of the default route (0.0.0.0/0)?",
    options: [
      "It identifies the loopback interface",
      "It matches any destination when no more specific route exists",
      "It is used only for multicast traffic",
      "It blocks all traffic from reaching the router",
    ],
    correctIndex: 1,
    explanation: "The default route (0.0.0.0/0) matches any destination address. It has the shortest possible prefix (/0), so it only wins when no more specific route matches. It is the 'gateway of last resort'  typically pointing to the internet upstream.",
  },
  {
    question: "What is 127.0.0.1 used for?",
    options: [
      "The default gateway address",
      "The network broadcast address",
      "The loopback address  traffic stays within the same host",
      "An APIPA address assigned when DHCP fails",
    ],
    correctIndex: 2,
    explanation: "127.0.0.1 (loopback / localhost) sends packets back to the same machine without hitting the network. The entire 127.0.0.0/8 block is reserved for loopback. APIPA addresses are in the 169.254.0.0/16 range.",
  },
  {
    question: "PAT (Port Address Translation) allows many private IPs to share one public IP by using _____ to distinguish connections.",
    options: [
      "Different destination IP addresses",
      "Different source port numbers",
      "Different VLAN tags",
      "Different TTL values",
    ],
    correctIndex: 1,
    explanation: "PAT (also called NAT Overload) maps each private IP:port combination to the same public IP with a unique source port. The NAT device maintains a table so return traffic can be forwarded to the correct private host. This is why a home router can serve dozens of devices with one public IP.",
  },
  {
    question: "Which routing protocol uses the Dijkstra shortest-path algorithm and is classified as link-state?",
    options: ["RIP", "BGP", "OSPF", "EIGRP"],
    correctIndex: 2,
    explanation: "OSPF (Open Shortest Path First) is a link-state protocol  every router floods its links across the domain and each router independently runs Dijkstra to build a complete topology map. RIP is distance-vector (Bellman-Ford); BGP is path-vector used between autonomous systems.",
  },
  {
    question: "How many bits are in an IPv6 address?",
    options: ["32", "64", "96", "128"],
    correctIndex: 3,
    explanation: "IPv6 addresses are 128 bits long, written as 8 groups of 4 hex digits. This gives ~340 undecillion unique addresses, solving IPv4 exhaustion. IPv4 uses only 32 bits (~4.3 billion addresses).",
  },
  {
    question: "What does the '::' notation in an IPv6 address represent?",
    options: [
      "A separator between the network and host portions",
      "One or more consecutive groups of all-zero hextets (can appear only once)",
      "The link-local prefix (FE80::)",
      "A wildcard matching any address",
    ],
    correctIndex: 1,
    explanation: "In IPv6, :: compresses one contiguous run of consecutive all-zero groups. For example, 2001:0db8:0000:0000:0000:0000:0000:0001 becomes 2001:db8::1. It can only appear once in an address to avoid ambiguity.",
  },
  {
    question: "You need to split 10.0.0.0/24 into exactly 8 equal subnets. What will the new prefix length be?",
    options: ["/25", "/26", "/27", "/28"],
    correctIndex: 2,
    explanation: "8 subnets = 2³, so you borrow 3 bits from the host portion. 24 + 3 = /27. Each /27 subnet has 2⁵ - 2 = 30 usable hosts.",
  },
  {
    question: "Which address is the broadcast address for the subnet 192.168.10.0/28?",
    options: ["192.168.10.14", "192.168.10.15", "192.168.10.16", "192.168.10.31"],
    correctIndex: 1,
    explanation: "/28 has 4 host bits. Block size = 2⁴ = 16. Starting at .0, the broadcast is .0 + 16 - 1 = .15. The next subnet starts at .16. Usable hosts are .1 through .14 (14 hosts).",
  },
  {
    question: "BGP is the routing protocol of the internet. What type is it?",
    options: ["Link-state", "Distance-vector", "Path-vector", "Spanning-tree"],
    correctIndex: 2,
    explanation: "BGP (Border Gateway Protocol) is a path-vector protocol. Each route advertisement carries the full AS path, not just a metric. Routers use path attributes (AS_PATH, LOCAL_PREF, MED) to select the best path. BGP connects Autonomous Systems (ASes) across the internet.",
  },
  {
    question: "What is the APIPA address range and when is it assigned?",
    options: [
      "10.0.0.0/8  when DHCP lease expires",
      "169.254.0.0/16  when a host cannot reach a DHCP server",
      "192.168.0.0/16  when static IP is not configured",
      "127.0.0.0/8  when no network interface is present",
    ],
    correctIndex: 1,
    explanation: "APIPA (Automatic Private IP Addressing) assigns a 169.254.x.x address when a host fails to reach a DHCP server. The address is link-local  usable only within the local segment. It allows local communication but not internet access.",
  },
  {
    question: "Static NAT maps one private IP to exactly one public IP. Which NAT type is most common on home routers?",
    options: [
      "Static NAT  one private to one public",
      "Dynamic NAT  pool of public IPs",
      "PAT (NAT Overload)  many privates to one public using port numbers",
      "Twice NAT  source and destination both translated",
    ],
    correctIndex: 2,
    explanation: "Home routers use PAT (Port Address Translation / NAT Overload)  every device on your LAN shares a single public IP. The router maps each connection to a unique source port, so it can route return packets back to the correct private device.",
  },
  {
    question: "In IPv6, what replaces the ARP broadcast used in IPv4?",
    options: [
      "DNS-based address resolution",
      "Neighbor Discovery Protocol (NDP) using ICMPv6 multicast",
      "DHCPv6  it assigns MACs as well as IPs",
      "RARP (Reverse ARP)",
    ],
    correctIndex: 1,
    explanation: "IPv6 replaces ARP with NDP (Neighbor Discovery Protocol), which uses ICMPv6 messages and multicast (not broadcast). The equivalent of ARP request/reply are 'Neighbor Solicitation' and 'Neighbor Advertisement' messages sent to multicast groups.",
  },
  {
    question: "How many usable hosts are in a /30 subnet?",
    options: ["0", "2", "4", "6"],
    correctIndex: 1,
    explanation: "/30 has 2 host bits. 2² = 4 total addresses. Subtract network + broadcast = 2 usable hosts. /30 is commonly used for point-to-point router links where only two addresses are needed.",
  },
  {
    question: "Which special address does a host use when it doesn't know its own IP (e.g., during DHCP discovery)?",
    options: ["127.0.0.1", "255.255.255.255", "0.0.0.0", "169.254.0.1"],
    correctIndex: 2,
    explanation: "A host uses 0.0.0.0 as its source address before it has been assigned an IP (e.g., in a DHCP Discover message). It also appears in routing tables as the default route destination (0.0.0.0/0).",
  },
  {
    question: "Subnetting 172.16.0.0/16 with a /20 prefix gives how many subnets?",
    options: ["4", "8", "16", "32"],
    correctIndex: 2,
    explanation: "Borrowing 20 - 16 = 4 bits. 2⁴ = 16 subnets. Each /20 has 2¹² - 2 = 4094 usable hosts. Example subnets: 172.16.0.0/20, 172.16.16.0/20, 172.16.32.0/20, …",
  },
  {
    question: "What does SLAAC stand for, and which protocol uses it?",
    options: [
      "Stateless Link Auto Address Configuration  used by DHCPv6",
      "Stateless Address Autoconfiguration  used by IPv6 to self-assign addresses without DHCP",
      "Static Link Address Allocation  used by IPv4 for manual configuration",
      "Subnet Layer Aggregation and Compression  used in BGP route summarization",
    ],
    correctIndex: 1,
    explanation: "SLAAC (Stateless Address Autoconfiguration) lets IPv6 hosts generate their own addresses using the network prefix advertised by the router (via ICMPv6 Router Advertisement) combined with their interface identifier (often derived from the MAC). No DHCP server required.",
  },
]

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-lg bg-lime-400 text-stone-900 font-display font-bold text-sm flex items-center justify-center shrink-0">
        {n}
      </span>
      <h2 className="font-display text-xl font-bold text-stone-900 dark:text-stone-50 whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-stone-200" />
    </div>
  )
}

export default function Module4Page() {
  const tabs: EngTabDef[] = [
    {
      id: "s1",
      label: "IPv4 Addressing",
      icon: <Globe className="w-4 h-4" />,
      content: (
<section className="space-y-6">
          <SectionHeading n="01" title="IPv4 Addressing" />

          <div className="grid sm:grid-cols-2 gap-4">
            <ConceptCard number="4.1" title="IPv4 Address Structure" tag="Key Concept">
              <p>
                An IPv4 address is <strong>32 bits</strong> written as four decimal
                octets: <code className="text-lime-600">192.168.1.100</code>.
                Each octet is 0–255 (8 bits).
              </p>
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-50 dark:bg-stone-900/60">
                      {["Class", "Range", "Default Mask", "Use"].map(h => (
                        <th key={h} className="text-left p-2 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10 text-[10px]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      ["A", "0–127",   "/8",  "Large orgs"],
                      ["B", "128–191", "/16", "Medium orgs"],
                      ["C", "192–223", "/24", "Small networks"],
                      ["D", "224–239", "",   "Multicast"],
                    ].map(([cls, range, mask, use]) => (
                      <tr key={cls} className="hover:bg-stone-50 dark:bg-stone-900/60">
                        <td className="p-2 font-bold text-lime-600">{cls}</td>
                        <td className="p-2 text-stone-600 dark:text-stone-400 font-mono text-[10px]">{range}</td>
                        <td className="p-2 text-stone-600 dark:text-stone-400 font-mono text-[10px]">{mask}</td>
                        <td className="p-2 text-stone-500 text-[10px]">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ConceptCard>

            <ConceptCard number="4.1–4.3" title="Special &amp; Private Addresses" tag="Remember">
              <div className="space-y-1.5">
                {[
                  { addr: "10.0.0.0/8",        desc: "Private (RFC 1918)  large orgs",         color: "#7C3AED" },
                  { addr: "172.16.0.0/12",      desc: "Private (RFC 1918)  medium orgs",        color: "#7C3AED" },
                  { addr: "192.168.0.0/16",     desc: "Private (RFC 1918)  homes/small offices",color: "#7C3AED" },
                  { addr: "127.0.0.1",          desc: "Loopback  stays on same host",           color: "#2563EB" },
                  { addr: "0.0.0.0",            desc: "\"This host\" / default route",           color: "#64748B" },
                  { addr: "255.255.255.255",    desc: "Limited broadcast  all hosts on segment",color: "#EF4444" },
                  { addr: "169.254.0.0/16",     desc: "APIPA  assigned when DHCP fails",        color: "#F59E0B" },
                ].map(({ addr, desc, color }) => (
                  <div key={addr} className="flex items-start gap-1.5">
                    <span className="w-2 h-2 rounded-full shrink-0 mt-0.5" style={{ backgroundColor: color }} />
                    <div>
                      <code className="text-[10px] font-bold" style={{ color }}>{addr}</code>
                      <span className="text-[10px] text-stone-500 ml-1.5">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ConceptCard>
          </div>

          <MicroCheck
            question="Which address range is reserved for private use (not routable on the public internet)?"
            options={["203.0.113.0/24", "8.8.8.0/24", "192.168.0.0/16", "100.100.0.0/16"]}
            correct={2}
            explanation="192.168.0.0/16 is one of three RFC 1918 private ranges. The others are 10.0.0.0/8 and 172.16.0.0/12. These addresses are blocked by internet routers and used only within private networks."
          />
        </section>
      ),
    },
    {
      id: "s2",
      label: "Subnet Masks & CIDR",
      icon: <Network className="w-4 h-4" />,
      content: (
<section className="space-y-6">
          <SectionHeading n="02" title="Subnet Masks &amp; CIDR" />

          <div className="grid sm:grid-cols-2 gap-4">
            <ConceptCard number="4.2" title="CIDR Notation" tag="Key Concept">
              <p>
                CIDR (Classless Inter-Domain Routing) replaces class-based addressing.
                The <strong>prefix length</strong> (e.g. <code className="text-lime-600">/24</code>)
                tells you how many bits belong to the <em>network</em> portion.
              </p>
              <div className="bg-stone-900 rounded-xl p-3 font-mono text-[10px] text-stone-300 space-y-1 mt-2">
                <p><span className="text-lime-400">Hosts</span> = 2^(32 - prefix) - 2</p>
                <p><span className="text-amber-400">Subnets</span> = 2^(bits borrowed)</p>
                <div className="border-t border-stone-700 pt-1 mt-1 space-y-0.5">
                  <p><span className="text-stone-500">/24</span> → <span className="text-emerald-400">254</span> hosts</p>
                  <p><span className="text-stone-500">/25</span> → <span className="text-emerald-400">126</span> hosts · 2 subnets per /24</p>
                  <p><span className="text-stone-500">/26</span> → <span className="text-emerald-400">62</span> hosts · 4 subnets per /24</p>
                  <p><span className="text-stone-500">/30</span> → <span className="text-emerald-400">2</span> hosts · point-to-point links</p>
                </div>
              </div>
            </ConceptCard>

            <ConceptCard number="4.2" title="Worked Example" tag="Example">
              <p className="text-xs text-stone-600 dark:text-stone-400 mb-2">
                Split <code className="text-lime-600">192.168.1.0/24</code> into 4 equal subnets:
              </p>
              <ol className="space-y-1.5 text-xs text-stone-600 dark:text-stone-400 list-decimal list-inside">
                <li>Need 4 subnets → borrow <strong>2 bits</strong> (2² = 4)</li>
                <li>New prefix: /24 + 2 = <strong>/26</strong></li>
                <li>Block size: 2^(32-26) = <strong>64 addresses</strong> each</li>
              </ol>
              <div className="bg-stone-50 dark:bg-stone-900/60 rounded-xl p-2.5 mt-2.5 font-mono text-[10px] space-y-0.5">
                {[
                  { n: 1, range: "192.168.1.0–.63",    net: ".0",   bc: ".63" },
                  { n: 2, range: "192.168.1.64–.127",  net: ".64",  bc: ".127" },
                  { n: 3, range: "192.168.1.128–.191", net: ".128", bc: ".191" },
                  { n: 4, range: "192.168.1.192–.255", net: ".192", bc: ".255" },
                ].map(({ n, range }) => (
                  <p key={n}>
                    <span className="text-lime-600 font-bold">#{n}</span>{" "}
                    <span className="text-stone-700 dark:text-stone-300">{range}</span>
                  </p>
                ))}
              </div>
              <p className="text-[10px] text-stone-500 mt-1.5">62 usable hosts per subnet</p>
            </ConceptCard>
          </div>

          <AnimFrame
            id="anim-4a"
            title="Anim 4-A  Binary ↔ Decimal IP Converter"
            description="Toggle individual bits  watch the decimal and subnet calculations update in real time"
            totalSteps={1}
          >
            <Anim4A />
          </AnimFrame>

          <AnimFrame
            id="anim-4b"
            title="Anim 4-B  Subnetting Visualizer"
            description="Enter a network block and drag the bit-borrow slider to subdivide it"
            totalSteps={1}
          >
            <Anim4B />
          </AnimFrame>

          <MicroCheck
            question="How many usable hosts are in a /27 subnet?"
            options={["14", "30", "62", "126"]}
            correct={1}
            explanation="A /27 subnet has 32 - 27 = 5 host bits. 2⁵ = 32 total addresses. Subtract 2 (network + broadcast) = 30 usable hosts. /27 is common for small branch office LANs."
          />
        </section>
      ),
    },
    {
      id: "s3",
      label: "Routing & Routing Tables",
      icon: <Server className="w-4 h-4" />,
      content: (
<section className="space-y-6">
          <SectionHeading n="03" title="Routing &amp; Routing Tables" />

          <div className="grid sm:grid-cols-2 gap-4">
            <ConceptCard number="4.4" title="How Routers Forward Packets" tag="Key Concept">
              <p>
                A router consults its <strong>routing table</strong> for every packet.
                The table maps destination prefixes to next-hop addresses or interfaces.
              </p>
              <div className="bg-stone-900 rounded-xl p-3 font-mono text-[10px] text-stone-300 mt-2 overflow-x-auto">
                <p className="text-stone-500 mb-1"># Destination     Next Hop     Iface</p>
                <p><span className="text-lime-400">192.168.1.0/24</span>  direct       eth0</p>
                <p><span className="text-blue-400">10.0.0.0/8</span>      192.168.1.1  eth1</p>
                <p><span className="text-stone-400">0.0.0.0/0</span>       203.0.113.1  eth2</p>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                <strong>Longest prefix match:</strong> the most specific route that matches
                the destination wins. 192.168.1.50 matches both /24 and /8  /24 wins.
              </p>
            </ConceptCard>

            <ConceptCard number="4.5" title="Routing Protocols" tag="Key Concept">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-50 dark:bg-stone-900/60">
                      {["Protocol", "Type", "Algorithm", "Use"].map(h => (
                        <th key={h} className="text-left p-2 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10 text-[10px]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      { p: "RIP",  t: "Distance-vector", a: "Bellman-Ford", u: "Legacy, small", c: "#EF4444" },
                      { p: "OSPF", t: "Link-state",       a: "Dijkstra",    u: "Enterprise",    c: "#10B981" },
                      { p: "BGP",  t: "Path-vector",      a: "Best-path",   u: "Internet ASes", c: "#7C3AED" },
                    ].map(({ p, t, a, u, c }) => (
                      <tr key={p} className="hover:bg-stone-50 dark:bg-stone-900/60">
                        <td className="p-2 font-bold" style={{ color: c }}>{p}</td>
                        <td className="p-2 text-stone-500 text-[10px]">{t}</td>
                        <td className="p-2 text-stone-500 font-mono text-[10px]">{a}</td>
                        <td className="p-2 text-stone-500 text-[10px]">{u}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ConceptCard>
          </div>

          <AnimFrame
            id="anim-4c"
            title="Anim 4-C  Routing Table Simulator"
            description="Select a destination and click Trace Route  watch each router highlight its matching row"
            totalSteps={1}
          >
            <Anim4C />
          </AnimFrame>

          <MicroCheck
            question="A router has routes for 10.0.0.0/8, 10.10.0.0/16, and 0.0.0.0/0. A packet arrives for 10.10.5.99. Which route is used?"
            options={[
              "0.0.0.0/0  default route always wins",
              "10.0.0.0/8  it's the first match",
              "10.10.0.0/16  longest prefix match",
              "All three are used simultaneously",
            ]}
            correct={2}
            explanation="Longest prefix match means the most specific (highest prefix) route wins. 10.10.0.0/16 matches 10.10.5.99 with a 16-bit prefix, which is more specific than 10.0.0.0/8 (8-bit) or 0.0.0.0/0 (0-bit default). So /16 is chosen."
          />
        </section>
      ),
    },
    {
      id: "s4",
      label: "NAT  Network Address Translation",
      icon: <Shield className="w-4 h-4" />,
      content: (
<section className="space-y-6">
          <SectionHeading n="04" title="NAT  Network Address Translation" />

          <ConceptCard number="4.6" title="How NAT Extends IPv4" tag="Key Concept">
            <p>
              IPv4 provides ~4.3 billion addresses  far fewer than the devices on earth.
              NAT lets an entire private network share a <strong>single public IP</strong>.
            </p>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-50 dark:bg-stone-900/60">
                    {["Type", "Mapping", "Common use"].map(h => (
                      <th key={h} className="text-left p-2 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10 text-[10px]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    ["Static NAT",   "1 private ↔ 1 public",       "DMZ servers with fixed public IPs"],
                    ["Dynamic NAT",  "Pool of publics, assigned",   "Orgs with multiple public IPs"],
                    ["PAT / Overload","Many privates → 1 public",   "Home routers, most corporate LANs"],
                  ].map(([t, m, u]) => (
                    <tr key={t} className="hover:bg-stone-50 dark:bg-stone-900/60">
                      <td className="p-2 font-semibold text-lime-600 text-[10px]">{t}</td>
                      <td className="p-2 text-stone-500 text-[10px]">{m}</td>
                      <td className="p-2 text-stone-500 text-[10px]">{u}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ConceptCard>

          <AnimFrame
            id="anim-4d"
            title="Anim 4-D  NAT in Action"
            description="Send HTTP requests from private hosts  watch the NAT table build and see header rewrites"
            totalSteps={1}
          >
            <Anim4D />
          </AnimFrame>

          <MicroCheck
            question="Three hosts (192.168.1.10, .20, .30) share one public IP via PAT. How does the router know which return packet belongs to which host?"
            options={[
              "It uses the destination IP address",
              "It uses the source port number in the NAT table to demux",
              "It uses VLAN tags added by the switch",
              "It broadcasts the return packet to all three hosts",
            ]}
            correct={1}
            explanation="PAT maps each private IP:port combination to the same public IP with a unique source port. When a response arrives, the router looks up the destination port in its NAT table to find the original private host and rewrites the destination IP:port accordingly."
          />
        </section>
      ),
    },
    {
      id: "s5",
      label: "IPv6",
      icon: <Layers className="w-4 h-4" />,
      content: (
<section className="space-y-6">
          <SectionHeading n="05" title="IPv6" />

          <div className="grid sm:grid-cols-2 gap-4">
            <ConceptCard number="4.7" title="IPv6 Addressing" tag="Key Concept">
              <p>
                IPv6 is <strong>128 bits</strong>  8 groups of 4 hex digits separated by colons.
                This provides ~340 undecillion addresses.
              </p>
              <div className="bg-stone-900 rounded-xl p-3 font-mono text-[10px] text-stone-300 mt-2 space-y-1">
                <p className="text-stone-500">Full form:</p>
                <p className="text-lime-300">2001:0db8:85a3:0000:0000:8a2e:0370:7334</p>
                <p className="text-stone-500 mt-1">Simplified (omit leading zeros, compress ::):</p>
                <p className="text-lime-300">2001:db8:85a3::8a2e:370:7334</p>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                <code className="text-lime-600">::</code> compresses one run of consecutive all-zero groups.
                It can appear only once per address.
              </p>
            </ConceptCard>

            <ConceptCard number="4.7" title="IPv6 vs IPv4 Key Differences" tag="Key Concept">
              <div className="space-y-1.5 text-xs text-stone-600 dark:text-stone-400">
                {[
                  { label: "Address size",  v4: "32 bits (~4.3B)",    v6: "128 bits (~340 undecillion)" },
                  { label: "Broadcast",     v4: "Yes",                v6: "No  multicast + anycast" },
                  { label: "NAT",           v4: "Essential",          v6: "Not needed (huge space)" },
                  { label: "Config",        v4: "Manual or DHCP",     v6: "SLAAC (stateless autoconfigure)" },
                  { label: "IPSec",         v4: "Optional",           v6: "Built-in support" },
                  { label: "ARP",           v4: "Broadcast-based",    v6: "NDP via ICMPv6 multicast" },
                ].map(({ label, v4, v6 }) => (
                  <div key={label} className="grid grid-cols-3 gap-1 text-[10px]">
                    <span className="font-semibold text-stone-700 dark:text-stone-300">{label}</span>
                    <span className="text-stone-500">{v4}</span>
                    <span className="text-lime-600">{v6}</span>
                  </div>
                ))}
              </div>
            </ConceptCard>
          </div>

          <MicroCheck
            question="What does the IPv6 address 2001:db8::1 expand to in full form?"
            options={[
              "2001:0db8:0000:0000:0000:0000:0000:0001",
              "2001:db80:0000:0000:0001",
              "2001:0db8::0000:0001",
              "2001:db8:0:0:0:1",
            ]}
            correct={0}
            explanation="The :: compresses all the zero groups between db8 and the trailing 1. Expanding it: 2001:0db8 + six all-zero groups (0000:0000:0000:0000:0000:0000) + 0001. Full form: 2001:0db8:0000:0000:0000:0000:0000:0001."
          />
        </section>
      ),
    },
  ]

  return (
    <EngineeringLessonShell
      title="Network Layer & IP Addressing"
      level={4}
      lessonNumber={4}
      crumbLabel="computer networks"
      crumbTail="module 04"
      tabs={tabs}
      quiz={QUIZ}
    />
  )
}
