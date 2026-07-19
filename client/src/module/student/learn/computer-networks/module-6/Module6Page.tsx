import { Globe, Lock, Search, Network, Layers, Zap } from "lucide-react"
import EngineeringLessonShell, { type EngTabDef, type EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell"
import AnimFrame from "@/components/learn/AnimFrame"
import ConceptCard from "@/components/learn/ConceptCard"
import MicroCheck from "@/components/learn/MicroCheck"
import Anim6A from "./_components/Anim6A"
import Anim6B from "./_components/Anim6B"
import Anim6C from "./_components/Anim6C"
import Anim6D from "./_components/Anim6D"
import Anim6E from "./_components/Anim6E"

const QUIZ: EngQuizQuestion[] = [
  {
    question: "Which HTTP method is both safe AND idempotent?",
    options: ["POST", "PUT", "GET", "PATCH"],
    correctIndex: 2,
    explanation: "GET is safe (does not modify server state) and idempotent (making the same request multiple times produces the same result). POST is neither  it creates new resources. PUT is idempotent but not safe. PATCH is neither.",
  },
  {
    question: "An API returns HTTP 403. What does this mean?",
    options: [
      "The resource was not found",
      "The client needs to authenticate first",
      "The server is down for maintenance",
      "The client is authenticated but lacks permission",
    ],
    correctIndex: 3,
    explanation: "403 Forbidden means the server understood the request and the user is authenticated, but they lack the permission to access the resource. 401 Unauthorized means the client must authenticate first. 404 means not found. 503 means service unavailable.",
  },
  {
    question: "What is the key improvement of HTTP/2 over HTTP/1.1 that eliminates head-of-line blocking at the application layer?",
    options: [
      "Encrypted connections by default",
      "Multiplexing  multiple streams over one TCP connection",
      "Larger TCP windows",
      "DNS-over-HTTPS",
    ],
    correctIndex: 1,
    explanation: "HTTP/2 introduces stream multiplexing: multiple request/response pairs can be in-flight simultaneously over a single TCP connection. HTTP/1.1 pipelining still blocked behind a slow response. Note: HTTP/2 still has TCP-level HOL blocking, which HTTP/3 (QUIC) solves.",
  },
  {
    question: "TLS 1.3 reduces the handshake to how many round-trips compared to TLS 1.2?",
    options: ["4 RTT → 2 RTT", "3 RTT → 1 RTT", "2 RTT → 1 RTT", "2 RTT → 0 RTT"],
    correctIndex: 2,
    explanation: "TLS 1.2 required 2 RTTs for the handshake. TLS 1.3 cuts this to 1 RTT by combining the key exchange into the first message. With session resumption (0-RTT), a returning client can send application data on the very first message, though at some replay-attack risk.",
  },
  {
    question: "What does a DNS A record store?",
    options: [
      "An alias pointing to another domain name",
      "The IPv4 address of a domain",
      "The mail server for a domain",
      "The authoritative nameserver for a zone",
    ],
    correctIndex: 1,
    explanation: "An A record maps a domain name to an IPv4 address (e.g., internhack.xyz → 203.0.113.42). CNAME stores an alias to another name. MX stores mail server entries. NS stores nameserver references. AAAA stores IPv6 addresses.",
  },
  {
    question: "In recursive DNS resolution, what is the role of the Recursive Resolver?",
    options: [
      "It stores the zone file for a specific domain",
      "It answers queries directly from a static table",
      "It contacts Root, TLD, and Authoritative servers on behalf of the client",
      "It is the first server contacted in a DHCP lease",
    ],
    correctIndex: 2,
    explanation: "The Recursive Resolver (typically provided by your ISP or public resolvers like 8.8.8.8) does the heavy lifting: it queries the root nameservers, follows referrals to TLD nameservers, then queries the authoritative nameserver, caches the result, and returns it to the client. The client only talks to the recursive resolver.",
  },
  {
    question: "What is the correct order of the DHCP DORA process?",
    options: [
      "Offer → Discover → Request → Acknowledge",
      "Discover → Request → Offer → Acknowledge",
      "Discover → Offer → Request → Acknowledge",
      "Request → Discover → Offer → Acknowledge",
    ],
    correctIndex: 2,
    explanation: "DORA: Discover (client broadcasts looking for servers), Offer (server offers an IP), Request (client broadcasts requesting that specific IP  broadcast notifies all servers), Acknowledge (server confirms the lease with full config: IP, gateway, DNS, lease time).",
  },
  {
    question: "A device's DHCP lease is at 87.5% of its duration. What does this indicate?",
    options: [
      "T1  the device should attempt to renew with its original DHCP server",
      "T2  the device should broadcast to any available DHCP server",
      "The lease has expired and the IP is invalid",
      "The device is in the DORA discovery phase",
    ],
    correctIndex: 1,
    explanation: "At T2 (87.5% of lease duration), the device must try to rebind with any available DHCP server via broadcast, because its attempt to unicast-renew at T1 (50%) may have failed. If T2 also fails, the lease expires and the device must start DORA again from the beginning.",
  },
  {
    question: "Which API paradigm sends all queries to a single endpoint and lets the client specify exactly which fields to return?",
    options: ["REST", "gRPC", "GraphQL", "SOAP"],
    correctIndex: 2,
    explanation: "GraphQL uses a single endpoint (typically POST /graphql) and the client writes a query specifying exactly which fields it needs. This eliminates over-fetching (receiving unused fields) and under-fetching (needing multiple requests to get all required data). REST uses multiple resource-based endpoints.",
  },
  {
    question: "What is the primary advantage of gRPC over REST for microservice communication?",
    options: [
      "gRPC uses JSON which is human-readable",
      "gRPC requires no schema definition",
      "gRPC uses Protocol Buffers over HTTP/2  binary, typed, and highly efficient",
      "gRPC is better for public-facing APIs",
    ],
    correctIndex: 2,
    explanation: "gRPC uses Protocol Buffers (binary format) over HTTP/2, making it significantly more efficient than JSON over HTTP/1.1. It provides strong type safety via .proto schemas, supports streaming, and generates client/server code automatically. The trade-off is it's harder to debug (binary, not human-readable) and less suitable for browser clients without a proxy.",
  },
  {
    question: "What HTTP status code indicates a WebSocket upgrade was accepted?",
    options: ["200 OK", "101 Switching Protocols", "301 Moved Permanently", "204 No Content"],
    correctIndex: 1,
    explanation: "The WebSocket handshake begins with an HTTP upgrade request (Upgrade: websocket header). If the server accepts, it returns 101 Switching Protocols. After this, the connection is no longer HTTP  it becomes a full-duplex WebSocket connection.",
  },
  {
    question: "Why does HTTP polling often waste bandwidth compared to WebSockets?",
    options: [
      "HTTP uses TCP which has more overhead than UDP",
      "HTTP polling re-sends the full HTML page every request",
      "Most poll responses contain no new data  the client pays HTTP overhead even for empty responses",
      "WebSockets use a more efficient compression algorithm",
    ],
    correctIndex: 2,
    explanation: "In HTTP polling, the client sends a full HTTP request (headers, cookies, etc.) every interval regardless of whether there is new data. The server often responds with an empty body and status code  still paying the HTTP header overhead (~300–500 bytes) for nothing. WebSockets send compact binary frames (2–14 bytes overhead) only when data actually needs to be pushed.",
  },
  {
    question: "Which HTTP method should be used to partially update a resource?",
    options: ["PUT", "POST", "PATCH", "UPDATE"],
    correctIndex: 2,
    explanation: "PATCH is designed for partial updates  you send only the fields you want to change. PUT replaces the entire resource (idempotent  sending the same PUT multiple times has the same result). POST creates new resources. UPDATE is not an HTTP method.",
  },
  {
    question: "A DNS record's TTL is set to 60 seconds. What is the trade-off?",
    options: [
      "Faster resolution, but records can't be changed",
      "More DNS queries per user, but DNS changes propagate within 60 seconds",
      "Fewer DNS queries, but changes take 60 minutes to propagate",
      "No caching  every request hits the authoritative nameserver",
    ],
    correctIndex: 1,
    explanation: "Short TTL (60s) means resolvers expire cache quickly → more queries to authoritative nameservers → higher DNS infrastructure load. The benefit: DNS changes (failover, IP migration) propagate to users within 60 seconds. Long TTL reduces queries but means stale records persist longer after a change.",
  },
  {
    question: "HTTP/3 uses which transport protocol instead of TCP?",
    options: ["UDP via QUIC", "Raw IP", "SCTP", "TLS 1.3 directly"],
    correctIndex: 0,
    explanation: "HTTP/3 runs over QUIC, which is built on UDP. QUIC implements reliable delivery, congestion control, and TLS 1.3 in user space. The benefit: no TCP-level head-of-line blocking  a lost packet only blocks its own stream, not all multiplexed streams. Connection migration (e.g., phone switching Wi-Fi to cellular) also works seamlessly.",
  },
  {
    question: "The Certificate Chain in TLS has this structure:",
    options: [
      "Root CA → Site cert → Intermediate CA",
      "Site cert → Root CA → Intermediate CA",
      "Site cert → Intermediate CA → Root CA",
      "Intermediate CA → Root CA → Site cert",
    ],
    correctIndex: 2,
    explanation: "The trust chain goes: Site certificate → Intermediate CA → Root CA. Browsers ship with a list of trusted Root CAs. The site presents its cert plus the intermediate cert(s). The browser walks the chain up to a trusted root to verify the site's identity. Root CAs are heavily protected and rarely sign site certs directly.",
  },
  {
    question: "Which DNS record type would you use to point www.example.com to example.com?",
    options: ["A record", "MX record", "CNAME record", "TXT record"],
    correctIndex: 2,
    explanation: "A CNAME (Canonical Name) record creates an alias from one name to another. www.example.com CNAME example.com means 'resolve www.example.com the same as example.com'. The resolver follows the CNAME chain until it reaches an A or AAAA record. Note: CNAMEs cannot coexist with other record types at the same name.",
  },
  {
    question: "What is the N+1 problem in REST APIs?",
    options: [
      "Sending N+1 bytes per request due to HTTP overhead",
      "Needing 1 request per resource plus N requests for related resources",
      "REST supports N endpoints but needs +1 for authentication",
      "Each REST response contains N+1 status codes",
    ],
    correctIndex: 1,
    explanation: "The N+1 problem: you fetch a list of N items (1 request), then need N more requests to fetch details for each item. Example: GET /posts returns 20 posts, then you need 20 more GET /posts/:id/author calls. GraphQL and gRPC solve this through graph-aware query resolution. REST can mitigate it with endpoint composition or sparse fieldsets.",
  },
  {
    question: "Which statement about HTTP status code 301 is correct?",
    options: [
      "The resource was temporarily moved  clients should not update bookmarks",
      "The resource was permanently moved  clients and caches should update to the new URL",
      "The request succeeded but there is no content to return",
      "The client must authenticate before accessing the resource",
    ],
    correctIndex: 1,
    explanation: "301 Moved Permanently tells the client (and caches) that the resource has a new permanent URL. Browsers and search engines update their records. The Location header provides the new URL. 302 Found is the temporary redirect (don't update bookmarks). 204 No Content means success with no response body.",
  },
  {
    question: "TLS provides three security properties. Which one ensures that a message was not tampered with in transit?",
    options: ["Confidentiality", "Authentication", "Integrity", "Non-repudiation"],
    correctIndex: 2,
    explanation: "TLS provides: Confidentiality (encryption prevents eavesdropping), Integrity (message authentication codes / MACs detect tampering), and Authentication (certificates prove server identity). Integrity is what ensures the data arriving is exactly what was sent  any modification breaks the MAC verification.",
  },
]

function SectionHeading({ n, title, icon }: { n: string; title: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[11px] font-mono text-lime-500 bg-lime-950/60 border border-lime-800/40 px-2 py-1 rounded-lg">
        {n}
      </span>
      {icon && <span className="text-lime-400">{icon}</span>}
      <h2 className="text-xl font-bold text-white font-display">{title}</h2>
    </div>
  )
}

export default function Module6Page() {
  const tabs: EngTabDef[] = [
    {
      id: "s1",
      label: "HTTP  The Language of the Web",
      icon: <Globe className="w-4 h-4" />,
      content: (
<section className="space-y-6">
        <SectionHeading n="01" title="HTTP  The Language of the Web" icon={<Globe size={18} />} />

        <ConceptCard number="6.1" title="HTTP Request & Response" tag="Key Concept">
          HTTP is a stateless, request-response protocol. Every interaction follows the same pattern: the client sends a request with a method, URL, headers, and optional body; the server replies with a status code, headers, and body.

          ```
          GET /api/modules HTTP/1.1
          Host: internhack.xyz
          Accept: application/json
          Authorization: Bearer eyJ...
          ```

          The server replies:
          ```
          HTTP/1.1 200 OK
          Content-Type: application/json
          Content-Length: 348

          {`{"modules": [...]}`}
          ```
        </ConceptCard>

        <ConceptCard number="6.2" title="HTTP Methods" tag="Remember">
          | Method | Purpose | Idempotent | Safe |
          |--------|---------|-----------|------|
          | **GET** | Retrieve resource | Yes | Yes |
          | **POST** | Create resource | No | No |
          | **PUT** | Replace resource | Yes | No |
          | **PATCH** | Partial update | No | No |
          | **DELETE** | Remove resource | Yes | No |
          | **HEAD** | Headers only | Yes | Yes |
          | **OPTIONS** | CORS preflight | Yes | Yes |

          **Safe** = no side effects on the server. **Idempotent** = multiple identical requests have the same effect as one.
        </ConceptCard>

        <ConceptCard number="6.3" title="HTTP Status Code Families" tag="Remember">
          | Range | Meaning | Key Codes |
          |-------|---------|-----------|
          | 1xx | Informational | 100 Continue |
          | 2xx | Success | 200 OK · 201 Created · 204 No Content |
          | 3xx | Redirection | 301 Permanent · 302 Temporary · 304 Not Modified |
          | 4xx | Client Error | 400 Bad Request · 401 Unauthorized · 403 Forbidden · 404 Not Found · 429 Too Many Requests |
          | 5xx | Server Error | 500 Internal Error · 502 Bad Gateway · 503 Unavailable |
        </ConceptCard>

        <ConceptCard number="6.4" title="HTTP Versions" tag="Key Concept">
          | Version | Key Change |
          |---------|-----------|
          | HTTP/1.0 | New TCP connection per request |
          | HTTP/1.1 | Persistent connections (`Keep-Alive`), pipelining |
          | HTTP/2 | **Multiplexing**  many streams over 1 TCP connection, HPACK header compression, server push |
          | HTTP/3 | Runs over **QUIC** (UDP)  no TCP head-of-line blocking, built-in TLS 1.3, connection migration |

          HTTP/2 multiplexing solves application-layer HOL blocking. HTTP/3 (QUIC) further eliminates transport-layer HOL blocking.
        </ConceptCard>

        <MicroCheck
          question="An HTTP/1.1 client sends 4 requests in a pipeline. The first request's response is slow. What happens to requests 2, 3, 4?"
          options={[
            "They are processed in parallel  HTTP/1.1 multiplexes automatically",
            "They are blocked waiting for request 1  this is head-of-line blocking",
            "They are sent over separate TCP connections automatically",
            "HTTP/1.1 cancels requests 2–4 and retries after request 1 completes",
          ]}
          correct={1}
          explanation="HTTP/1.1 pipelining is sequential at the application layer  responses must arrive in order. A slow response to request 1 blocks 2, 3, and 4, even if the server could have processed them faster. This is HOL blocking. HTTP/2 multiplexing solves this by interleaving frames from different streams."
        />
      </section>
      ),
    },
    {
      id: "s2",
      label: "HTTPS & TLS  Security on the Web",
      icon: <Lock className="w-4 h-4" />,
      content: (
<section className="space-y-6">
        <SectionHeading n="02" title="HTTPS & TLS  Security on the Web" icon={<Lock size={18} />} />

        <ConceptCard number="6.5" title="What TLS Provides" tag="Definition">
          TLS (Transport Layer Security) wraps HTTP to provide three guarantees:

          - **Confidentiality**  data is encrypted; eavesdroppers see ciphertext only.
          - **Integrity**  message authentication codes (MACs) detect any tampering in transit.
          - **Authentication**  the server's certificate proves its identity; clients can verify they're talking to the real server.

          TLS sits between TCP and HTTP. The port convention: HTTP on 80, HTTPS on 443.
        </ConceptCard>

        <ConceptCard number="6.6" title="TLS 1.3 Handshake" tag="Key Concept">
          TLS 1.3 reduced the handshake from 2 RTTs (TLS 1.2) to **1 RTT**:

          1. **ClientHello**  TLS version, supported cipher suites, client random, key share.
          2. **ServerHello + Certificate + ServerFinished**  server's key share, its certificate, finished MAC.
          3. Client validates certificate against the CA chain.
          4. Client computes session keys from both key shares.
          5. **Encrypted data transfer begins**  no extra round-trip.

          With **0-RTT resumption**, a returning client can send application data on the very first packet (with some replay-attack caveats).
        </ConceptCard>

        <ConceptCard number="6.7" title="Certificate Chain" tag="Key Concept">
          Trust is established through a chain:

          **Site cert** → signed by → **Intermediate CA** → signed by → **Root CA**

          - Browsers ship with a trusted Root CA list (~100–200 CAs).
          - Root CAs are air-gapped and only sign Intermediate CA certs.
          - Intermediates sign site certificates.
          - If any cert in the chain is revoked (CRL / OCSP) or expired, the browser shows an error.
        </ConceptCard>

        <AnimFrame
          id="anim-6a"
          title="Full HTTP Request Lifecycle"
          description="Trace every phase of a browser request  DNS, TCP, TLS, HTTP  with timing. Click any phase to expand."
          totalSteps={7}
        >
          <Anim6A />
        </AnimFrame>

        <MicroCheck
          question="TLS 1.3 cuts the handshake to 1 RTT. What was the RTT count in TLS 1.2, and why was it higher?"
          options={[
            "TLS 1.2 needed 1 RTT  the same as TLS 1.3",
            "TLS 1.2 needed 2 RTTs  it separated the key exchange from the cipher negotiation into distinct round-trips",
            "TLS 1.2 needed 3 RTTs  one for each of certificate, key exchange, and authentication",
            "TLS 1.2 needed 4 RTTs because it required mutual authentication",
          ]}
          correct={1}
          explanation="TLS 1.2 required 2 RTTs: first the cipher suite negotiation (ClientHello / ServerHello), then the key exchange (ClientKeyExchange / Finished). TLS 1.3 merged these into a single round-trip by including the key share in the ClientHello. This cuts ~30 ms on a typical 15 ms RTT connection."
        />
      </section>
      ),
    },
    {
      id: "s3",
      label: "DNS  The Internet's Phone Book",
      icon: <Search className="w-4 h-4" />,
      content: (
<section className="space-y-6">
        <SectionHeading n="03" title="DNS  The Internet's Phone Book" icon={<Search size={18} />} />

        <ConceptCard number="6.8" title="DNS Record Types" tag="Remember">
          | Type | Purpose | Example |
          |------|---------|---------|
          | **A** | IPv4 address | `internhack.xyz → 203.0.113.42` |
          | **AAAA** | IPv6 address | `internhack.xyz → 2001:db8::1` |
          | **CNAME** | Alias to another name | `www → internhack.xyz` |
          | **MX** | Mail server | `internhack.xyz → mail.google.com` |
          | **TXT** | Arbitrary text | `"v=spf1 include:google.com ~all"` |
          | **NS** | Authoritative nameservers | `internhack.xyz → ns1.cloudflare.com` |
          | **SOA** | Zone authority / serial | Start-of-Authority record |
        </ConceptCard>

        <ConceptCard number="6.9" title="Recursive Resolution Flow" tag="Key Concept">
          When you type `internhack.xyz` in a browser:

          1. **Browser cache**  check local DNS cache (TTL still valid?).
          2. **OS stub resolver** → queries your **Recursive Resolver** (ISP or 8.8.8.8).
          3. Resolver asks **Root Nameserver** (13 clusters): "Who handles `.in`?"
          4. Root refers to **TLD Nameserver** for `.in`.
          5. TLD refers to **Authoritative Nameserver** for `internhack.xyz`.
          6. Authoritative returns the **A record** with the IP.
          7. Resolver **caches** the result per TTL, returns IP to browser.

          Uncached: ~50–200 ms. Cached: &lt;5 ms.
        </ConceptCard>

        <AnimFrame
          id="anim-6b"
          title="DNS Resolution Tracer"
          description="Watch each hop of a DNS query  first lookup vs cache hit. Adjust TTL to see propagation trade-offs."
          totalSteps={8}
        >
          <Anim6B />
        </AnimFrame>

        <MicroCheck
          question="A DNS TTL is set to 30 seconds for internhack.xyz. What is the consequence?"
          options={[
            "Faster initial DNS resolution for all users globally",
            "DNS changes (e.g. IP migration) take at most 30 s to propagate, but resolvers query the authoritative server very frequently",
            "The record can never be cached  all users always hit the authoritative server",
            "DNS resolution fails after 30 seconds and the user must reload the page",
          ]}
          correct={1}
          explanation="TTL is the cache lifetime. At 30s, every resolver discards the cached record every 30 seconds and re-queries the authoritative server. This means failovers and IP changes propagate within 30s (great for reliability) but the authoritative nameserver sees much higher query volume. The trade-off: short TTL = fast propagation, high load. Long TTL = low load, slow propagation."
        />
      </section>
      ),
    },
    {
      id: "s4",
      label: "DHCP  Automatic IP Configuration",
      icon: <Network className="w-4 h-4" />,
      content: (
<section className="space-y-6">
        <SectionHeading n="04" title="DHCP  Automatic IP Configuration" icon={<Network size={18} />} />

        <ConceptCard number="6.10" title="DHCP DORA Process" tag="Key Concept">
          DHCP (Dynamic Host Configuration Protocol) automatically assigns IP configuration when a device joins a network:

          | Step | From | To | Message | Content |
          |------|------|----|---------|---------|
          | **D**iscover | Client | Broadcast | "Any DHCP servers?" | src=0.0.0.0, dst=255.255.255.255 |
          | **O**ffer | Server | Client | "I offer 192.168.1.50" | Lease duration, offered IP |
          | **R**equest | Client | Broadcast | "I want 192.168.1.50" | Broadcast so other servers know |
          | **A**cknowledge | Server | Client | "It's yours!" | IP, gateway, DNS, lease time |

          **Why broadcast for Request?** Multiple DHCP servers may have made offers. Broadcasting tells all of them which offer was accepted.
        </ConceptCard>

        <ConceptCard number="6.11" title="DHCP Lease Lifecycle" tag="Key Concept">
          The IP address is temporary  a **lease**. Key timers:

          - **T1 = 50% of lease time**  client unicasts the original server to renew.
          - **T2 = 87.5% of lease time**  if T1 renewal failed, client broadcasts to any DHCP server.
          - **Expiry = 100%**  if T2 also failed, client releases the IP and starts DORA from scratch.

          Typical lease: 24 hours for wired networks, 8 hours for Wi-Fi (higher device churn).
        </ConceptCard>

        <AnimFrame
          id="anim-6c"
          title="DHCP DORA Visualizer"
          description="Watch a new device join the network and get its IP configuration through the four DORA steps."
          totalSteps={4}
        >
          <Anim6C />
        </AnimFrame>

        <MicroCheck
          question="A client's DHCP lease is at 55% of its duration. What should it be doing?"
          options={[
            "Nothing  lease renewal only begins at T2 (87.5%)",
            "Broadcasting a Discover packet to find a new DHCP server",
            "It should have unicasted a renewal to its original DHCP server at T1 (50%)  it may now be retrying",
            "The lease is about to expire  the client must restart DORA immediately",
          ]}
          correct={2}
          explanation="T1 is at 50% of lease duration. At T1, the client should unicast a DHCP Request to the original server to renew. At 55%, T1 has already passed  the client should have sent a renewal and may be waiting for a response. If no response arrives by T2 (87.5%), it broadcasts to any DHCP server. Lease expiry only happens if both T1 and T2 renewals fail."
        />
      </section>
      ),
    },
    {
      id: "s5",
      label: "API Paradigms  REST, GraphQL, gRPC",
      icon: <Layers className="w-4 h-4" />,
      content: (
<section className="space-y-6">
        <SectionHeading n="05" title="API Paradigms  REST, GraphQL, gRPC" icon={<Layers size={18} />} />

        <ConceptCard number="6.12" title="REST vs GraphQL vs gRPC" tag="Key Concept">
          | Dimension | REST | GraphQL | gRPC |
          |-----------|------|---------|------|
          | Protocol | HTTP/1.1–2 | HTTP/1.1–2 | HTTP/2 |
          | Format | JSON / XML | JSON | Protocol Buffers (binary) |
          | Endpoints | Multiple | Single `/graphql` | Generated methods |
          | Over-fetching | Common | None | None |
          | Under-fetching | Common (N+1) | None | None |
          | Real-time | WebSockets / SSE | Subscriptions | Streaming |
          | Type safety | OpenAPI/Swagger | Schema introspection | `.proto` schema |
          | Best for | Public APIs, CRUD | Complex graphs, mobile | Microservices, performance |
        </ConceptCard>

        <ConceptCard number="6.13" title="The N+1 Problem" tag="Warning">
          Classic REST pitfall: fetch a list of N items, then make N more requests for each item's details.

          Example: `GET /posts` returns 20 posts → 20 × `GET /posts/:id/author` = **21 requests total**.

          GraphQL resolves this in a single query with nested fields. REST can mitigate it with compound documents, sparse fieldsets, or BFF (Backend-for-Frontend) patterns.
        </ConceptCard>

        <AnimFrame
          id="anim-6d"
          title="REST vs GraphQL Request Comparison"
          description="Same query, two paradigms. Adjust number of posts and fields to see how data usage scales."
          totalSteps={1}
        >
          <Anim6D />
        </AnimFrame>

        <MicroCheck
          question="Your mobile app needs only a user's name and profile picture from an endpoint that returns 25 fields. Which problem is this?"
          options={[
            "Under-fetching  you need to make a second request to get the missing fields",
            "Over-fetching  you receive far more data than you need, wasting bandwidth",
            "N+1 problem  you need one request per user",
            "Cache invalidation  the profile picture URL expires after each response",
          ]}
          correct={1}
          explanation="Over-fetching: the API returns 25 fields but the mobile client only uses 2. This wastes bandwidth  critical on mobile connections. GraphQL solves over-fetching by letting the client specify exactly which fields to return in the query. REST can partially address it with sparse fieldsets (?fields=name,avatar) but GraphQL makes this first-class."
        />
      </section>
      ),
    },
    {
      id: "s6",
      label: "WebSockets  Full-Duplex Real-Time",
      icon: <Zap className="w-4 h-4" />,
      content: (
<section className="space-y-6">
        <SectionHeading n="06" title="WebSockets  Full-Duplex Real-Time" icon={<Zap size={18} />} />

        <ConceptCard number="6.14" title="WebSocket Upgrade Handshake" tag="Definition">
          WebSockets begin with an HTTP upgrade:

          ```
          GET /chat HTTP/1.1
          Upgrade: websocket
          Connection: Upgrade
          Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
          ```

          Server responds with:
          ```
          HTTP/1.1 101 Switching Protocols
          Upgrade: websocket
          Connection: Upgrade
          Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
          ```

          After `101`, the connection is **full-duplex**  both sides can send at any time with no HTTP overhead per message (frames have 2–14 bytes of overhead).
        </ConceptCard>

        <ConceptCard number="6.15" title="WebSocket vs Polling vs SSE" tag="Key Concept">
          | Method | Direction | Use Case |
          |--------|-----------|---------|
          | **HTTP Long Polling** | Server→Client | Legacy compatibility; high latency |
          | **Server-Sent Events (SSE)** | Server→Client only | Feeds, notifications, live dashboards |
          | **WebSocket** | Full-duplex | Chat, collaborative editors, live games, stock tickers |

          WebSocket overhead: ~2–14 bytes per frame. HTTP request overhead: ~300–800 bytes (headers, cookies). For real-time updates, WebSockets use **&gt;70% less bandwidth** than polling.
        </ConceptCard>

        <AnimFrame
          id="anim-6e"
          title="WebSocket vs HTTP Polling"
          description="Live counter updating every second. Watch bandwidth accumulate over 30 simulated seconds."
          totalSteps={1}
        >
          <Anim6E />
        </AnimFrame>

        <MicroCheck
          question="A live sports app updates scores every second. HTTP polling every 1 s sends ~380 B requests and receives ~42 B empty responses. A WebSocket sends ~28 B frames only on score changes (avg 1 per second). After 60 s with 45 empty polls, which is more efficient?"
          options={[
            "HTTP polling  more connections means better fault tolerance",
            "WebSocket  one handshake + 60 small frames vs 120 HTTP request/response pairs",
            "They use roughly the same bandwidth in this scenario",
            "HTTP polling is more efficient when update frequency is high",
          ]}
          correct={1}
          explanation="HTTP polling: 60 × (380 B req + 42 B empty resp) = 25,320 B + some actual data responses ≈ ~27 KB. WebSocket: ~120 B handshake + 60 × 28 B = ~1,800 B ≈ 1.8 KB. WebSocket uses ~93% less bandwidth here. The advantage grows with update frequency and connection duration. HTTP polling's strength is simplicity and firewall compatibility."
        />
      </section>
      ),
    },
  ]

  return (
    <EngineeringLessonShell
      title="Application Layer Protocols"
      level={6}
      lessonNumber={6}
      crumbLabel="computer networks"
      crumbTail="module 06"
      tabs={tabs}
      quiz={QUIZ}
    />
  )
}
