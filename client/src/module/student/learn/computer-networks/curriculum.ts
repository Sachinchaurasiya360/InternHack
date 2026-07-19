import type { LucideIcon } from "lucide-react"
import {
  Network,
  Layers,
  Cable,
  Globe2,
  Waypoints,
  Server,
  ShieldCheck,
  Boxes,
} from "lucide-react"

export interface CnModule {
  /** Numeric module index (1-based). */
  num: number
  /** URL slug segment, e.g. "module-1". */
  slug: string
  title: string
  /** Estimated time to complete. */
  dur: string
  /** One-line summary shown on the hub. */
  desc: string
  /** Short topic labels shown as chips. */
  topics: string[]
  icon: LucideIcon
  /** Whether the module content exists yet. Unpublished modules render as "coming soon". */
  available: boolean
}

/**
 * Single source of truth for the Computer Networks track. The hub lists these and
 * the module router (ComputerNetworksModulePage) resolves `:moduleId` against the
 * `slug` field. Modules 1-6 are published; 7-8 are placeholders for the full series.
 */
export const CN_MODULES: CnModule[] = [
  {
    num: 1,
    slug: "module-1",
    title: "Introduction to Networks",
    dur: "~3h",
    desc: "Build a mental model of networks, topologies, and protocols.",
    topics: ["LAN / WAN / MAN", "Topologies", "Client-Server", "Protocols"],
    icon: Network,
    available: true,
  },
  {
    num: 2,
    slug: "module-2",
    title: "OSI & TCP/IP Models",
    dur: "~5h",
    desc: "Trace HTTP through all 7 OSI layers. Master encapsulation.",
    topics: ["7 Layers", "Encapsulation", "PDUs", "TCP/IP Stack"],
    icon: Layers,
    available: true,
  },
  {
    num: 3,
    slug: "module-3",
    title: "Data Link Layer",
    dur: "~4h",
    desc: "MAC addressing, Ethernet frames, ARP, and switches.",
    topics: ["MAC Addressing", "Ethernet", "ARP", "Switches"],
    icon: Cable,
    available: true,
  },
  {
    num: 4,
    slug: "module-4",
    title: "Network Layer & IP Addressing",
    dur: "~6h",
    desc: "IPv4, CIDR subnetting, routing tables, NAT, and IPv6.",
    topics: ["IPv4 / IPv6", "CIDR", "Routing", "NAT"],
    icon: Globe2,
    available: true,
  },
  {
    num: 5,
    slug: "module-5",
    title: "Transport Layer: TCP & UDP",
    dur: "~6h",
    desc: "3-way handshake, sliding window, and congestion control.",
    topics: ["TCP / UDP", "3-way Handshake", "Flow Control", "Congestion"],
    icon: Waypoints,
    available: true,
  },
  {
    num: 6,
    slug: "module-6",
    title: "Application Layer Protocols",
    dur: "~6h",
    desc: "HTTP/HTTPS, TLS, DNS, DHCP, REST vs GraphQL vs gRPC.",
    topics: ["HTTP/S", "DNS", "DHCP", "REST & gRPC"],
    icon: Server,
    available: true,
  },
  {
    num: 7,
    slug: "module-7",
    title: "Network Infrastructure",
    dur: "~5h",
    desc: "CDNs, load balancers, reverse proxies, and BGP.",
    topics: ["CDNs", "Load Balancers", "Reverse Proxies", "BGP"],
    icon: Boxes,
    available: false,
  },
  {
    num: 8,
    slug: "module-8",
    title: "Security & Modern Patterns",
    dur: "~5h",
    desc: "DDoS, ARP spoofing, firewalls, VPNs, Zero Trust, service meshes.",
    topics: ["Firewalls", "VPNs", "Zero Trust", "DDoS / ARP"],
    icon: ShieldCheck,
    available: false,
  },
]

/** Total published modules, used for "Module N of X" labels. */
export const CN_TOTAL_MODULES = CN_MODULES.length

export function getCnModule(slug: string | undefined): CnModule | undefined {
  return CN_MODULES.find((m) => m.slug === slug)
}
