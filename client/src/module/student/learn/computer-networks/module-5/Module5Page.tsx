import { Layers, Network, Shield, Server, Globe, Cpu } from "lucide-react"
import AnimFrame from "@/components/learn/AnimFrame"
import ConceptCard from "@/components/learn/ConceptCard"
import MicroCheck from "@/components/learn/MicroCheck"
import ExitQuiz, { type QuizQuestion } from "@/components/learn/ExitQuiz"
import ObjectivesCard from "@/components/learn/ObjectivesCard"
import Anim5A from "./_components/Anim5A"
import Anim5B from "./_components/Anim5B"
import Anim5C from "./_components/Anim5C"
import Anim5D from "./_components/Anim5D"

// ── Exit Quiz ──────────────────────────────────────────────────────────────────

const QUIZ: QuizQuestion[] = [
  {
    question: "What is the correct sequence of the TCP 3-way handshake?",
    options: [
      "SYN → ACK → SYN-ACK",
      "SYN → SYN-ACK → ACK",
      "ACK → SYN → SYN-ACK",
      "SYN-ACK → SYN → ACK",
    ],
    correct: 1,
    explanation: "The 3-way handshake is SYN → SYN-ACK → ACK. The client initiates with SYN, the server acknowledges and sends its own SYN in SYN-ACK, and the client confirms with ACK. This exchange ensures both sides can send and receive before data flows.",
  },
  {
    question: "A TCP ACK=1501 means the receiver is telling the sender:",
    options: [
      "1501 packets have been received",
      "Send segment number 1501 next",
      "I have received all bytes up to 1500  send byte 1501 next",
      "The window size is 1501 bytes",
    ],
    correct: 2,
    explanation: "TCP ACK numbers are cumulative byte counters. ACK=1501 means 'I have successfully received everything up to and including byte 1500, please send byte 1501 next.' TCP numbers individual bytes, not segments.",
  },
  {
    question: "What triggers TCP Fast Retransmit without waiting for a timeout?",
    options: [
      "A FIN segment from the receiver",
      "Three duplicate ACKs for the same byte",
      "The sliding window reaching zero",
      "An ICMP Destination Unreachable message",
    ],
    correct: 1,
    explanation: "When the sender receives 3 duplicate ACKs (all acknowledging the same byte), it infers a segment was lost and immediately retransmits  no need to wait for the RTO timer. This is TCP Fast Retransmit, and it significantly reduces recovery time.",
  },
  {
    question: "Which phase of TCP congestion control grows the window exponentially?",
    options: [
      "Congestion Avoidance",
      "Fast Recovery",
      "Slow Start",
      "Fast Retransmit",
    ],
    correct: 2,
    explanation: "Slow Start doubles cwnd each RTT (exponential growth) until it reaches ssthresh. Despite its name, Slow Start is only 'slow' compared to an unbounded burst  it begins at cwnd=1 MSS. Congestion Avoidance grows linearly (+1 MSS per RTT).",
  },
  {
    question: "What happens to TCP's congestion window (cwnd) when a timeout occurs?",
    options: [
      "cwnd is halved and slow start resumes from there",
      "cwnd resets to 1 MSS and ssthresh is halved",
      "cwnd stays the same and fast recovery begins",
      "cwnd doubles to compensate for the lost segment",
    ],
    correct: 1,
    explanation: "On timeout (the most severe congestion signal), TCP sets cwnd=1 and ssthresh=cwnd/2, then re-enters Slow Start. This is more aggressive than the 3-dup-ACK response because a timeout suggests serious congestion  the network needs to drain.",
  },
  {
    question: "TCP flow control uses a receiver-advertised window. What happens when that window reaches zero?",
    options: [
      "The connection is reset (RST)",
      "The sender sends a FIN to close the connection",
      "The sender pauses and periodically sends Zero Window Probes to check for window updates",
      "The sender switches to UDP for the remaining data",
    ],
    correct: 2,
    explanation: "When the receiver's buffer is full it sets window=0 in the ACK. The sender stops transmitting but sends periodic Zero Window Probes to keep the connection alive. Once the receiver drains its buffer it sends a window update and data transfer resumes.",
  },
  {
    question: "Which transport-layer protocol is best for a live video streaming application that prioritises low latency?",
    options: [
      "TCP  because it guarantees delivery",
      "UDP  because lost frames are acceptable and retransmits would add unacceptable latency",
      "TCP with a very large window size",
      "ICMP  it has no connection overhead",
    ],
    correct: 1,
    explanation: "Live video can tolerate occasional dropped frames far better than delayed ones. UDP fires packets immediately with no handshake, retransmit, or ordering overhead. TCP's reliability mechanisms would introduce jitter and stalls on loss events  unacceptable for real-time media.",
  },
  {
    question: "What is the range of well-known (reserved) port numbers?",
    options: ["0–1023", "1024–49151", "49152–65535", "0–65535"],
    correct: 0,
    explanation: "Ports 0–1023 are IANA-assigned well-known ports: HTTP=80, HTTPS=443, SSH=22, DNS=53, SMTP=25. Ports 1024–49151 are registered (e.g. MySQL=3306). Ports 49152–65535 are dynamic/ephemeral  assigned by the OS for outgoing client connections.",
  },
  {
    question: "A TCP socket is uniquely identified by a 4-tuple. Which 4-tuple is correct?",
    options: [
      "Source MAC, Destination MAC, Source Port, Destination Port",
      "Source IP, Destination IP, Source Port, Destination Port",
      "Source IP, Destination IP, Protocol, Sequence Number",
      "Source Port, Destination Port, TTL, Window Size",
    ],
    correct: 1,
    explanation: "A TCP connection is identified by the 4-tuple: (Source IP, Source Port, Destination IP, Destination Port). This allows a server to maintain thousands of simultaneous connections on the same port because each client has a different source IP and ephemeral port.",
  },
  {
    question: "What does the TIME_WAIT state ensure during TCP 4-way teardown?",
    options: [
      "The server has enough time to flush its send buffer",
      "The final ACK reaches the server before the port is reused",
      "Both sides confirm the connection is closed simultaneously",
      "The client can still receive retransmitted data segments",
    ],
    correct: 1,
    explanation: "TIME_WAIT lasts 2×MSL (Maximum Segment Lifetime, typically 2 minutes). It ensures the final ACK the client sent actually reaches the server. If it was lost, the server would retransmit its FIN and the client  still in TIME_WAIT  can re-send the ACK instead of sending a confusing RST.",
  },
  {
    question: "QUIC (used by HTTP/3) is built on top of UDP. Why use UDP instead of TCP?",
    options: [
      "UDP is encrypted by default, TCP is not",
      "UDP avoids TCP's head-of-line blocking and allows reliability to be implemented in userspace with better control",
      "UDP supports larger packet sizes than TCP",
      "UDP has a built-in 3-way handshake that QUIC reuses",
    ],
    correct: 1,
    explanation: "TCP multiplexes streams but a single lost segment blocks all streams (head-of-line blocking). QUIC implements per-stream reliability over UDP in userspace, so a lost packet only stalls its own stream. QUIC also combines the TLS and transport handshakes into 0–1 RTT, vs TCP+TLS's 2–3 RTT.",
  },
  {
    question: "TCP Reno reduces cwnd to ssthresh+3 on 3-dup-ACKs and enters Fast Recovery. How does this differ from TCP Tahoe's response?",
    options: [
      "Tahoe also enters Fast Recovery, but from a higher starting cwnd",
      "Tahoe resets cwnd to 1 and re-enters Slow Start, which is more aggressive",
      "Reno resets to 1; Tahoe keeps cwnd at ssthresh",
      "There is no difference  both use the same algorithm",
    ],
    correct: 1,
    explanation: "TCP Tahoe treats 3-dup-ACKs the same as a timeout: cwnd=1, re-enter Slow Start. TCP Reno distinguishes them  3-dup-ACKs are a 'mild' signal so it halves cwnd to ssthresh and enters Fast Recovery (staying in CA phase). Reno recovers faster because it doesn't drop back to 1.",
  },
  {
    question: "What is the purpose of TCP sequence numbers?",
    options: [
      "To identify each TCP connection uniquely across the network",
      "To number each byte so the receiver can detect gaps, reorder segments, and ACK correctly",
      "To set the priority of each segment in the queue",
      "To map port numbers to socket descriptors in the OS",
    ],
    correct: 1,
    explanation: "Sequence numbers let TCP track exactly which bytes have been received. If segment 1001–2000 arrives before 501–1000, the receiver can reorder them. If a gap exists (501–1000 missing), the receiver keeps ACKing 500  triggering fast retransmit for the lost segment.",
  },
  {
    question: "UDP header size is _____ bytes. TCP header (minimum) is _____ bytes.",
    options: ["8 … 20", "20 … 8", "4 … 16", "12 … 24"],
    correct: 0,
    explanation: "UDP has a fixed 8-byte header: Source Port (2B), Dest Port (2B), Length (2B), Checksum (2B). TCP's minimum header is 20 bytes, with optional fields extending it to 60 bytes. This overhead difference is why UDP is faster for small, latency-sensitive messages.",
  },
  {
    question: "DNS uses UDP for standard queries. What makes UDP appropriate here?",
    options: [
      "DNS queries require ordered delivery to resolve correctly",
      "DNS requests are short, fit in a single datagram, and the application can retry on timeout",
      "UDP provides encryption for DNS records",
      "UDP is required by the IANA standard for all lookup protocols",
    ],
    correct: 1,
    explanation: "DNS queries are tiny request-response pairs that fit in a single UDP datagram. If no reply arrives, the client simply retries. There's no need for TCP's connection setup and retransmission machinery for such short exchanges  it would add needless latency.",
  },
  {
    question: "What does 'additive increase, multiplicative decrease' (AIMD) describe in TCP?",
    options: [
      "Slow Start: cwnd doubles each RTT, drops to 1 on loss",
      "Congestion Avoidance: cwnd increases +1/RTT, halves on loss signal",
      "Fast Recovery: cwnd jumps to ssthresh, resets on timeout",
      "Window scaling: receiver window grows additively, resets on overflow",
    ],
    correct: 1,
    explanation: "AIMD describes TCP Congestion Avoidance: increase cwnd by 1 MSS per RTT (additive increase) when no congestion is detected; halve cwnd when a loss signal arrives (multiplicative decrease). This gentle sawtooth pattern allows many TCP flows to share a bottleneck link fairly.",
  },
  {
    question: "Which TCP flag is used to initiate a connection?",
    options: ["ACK", "FIN", "RST", "SYN"],
    correct: 3,
    explanation: "SYN (synchronise) is set in the first segment of a TCP connection. It tells the receiver 'I want to establish a connection and here is my initial sequence number.' ACK acknowledges data, FIN gracefully closes, and RST abruptly resets/terminates a connection.",
  },
  {
    question: "In TCP congestion control, what is ssthresh and how is it used?",
    options: [
      "Slow-start threshold  cwnd below it grows exponentially; above it grows linearly",
      "The maximum advertised receiver window",
      "The retransmission timeout value in milliseconds",
      "The number of duplicate ACKs before fast retransmit fires",
    ],
    correct: 0,
    explanation: "ssthresh (slow-start threshold) divides Slow Start from Congestion Avoidance. When cwnd < ssthresh, TCP doubles cwnd each RTT (Slow Start). When cwnd >= ssthresh, TCP adds 1 MSS per RTT (Congestion Avoidance). After loss, ssthresh is halved so CA kicks in sooner on recovery.",
  },
]

// ── Section heading ────────────────────────────────────────────────────────────

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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Module5Page() {
  return (
    <div className="px-6 lg:px-10">

      {/* hero */}
      <div className="pt-8 pb-2">
        <div className="relative overflow-hidden rounded-2xl bg-stone-900 px-8 py-10 text-white">
          <Layers  size={180} className="pointer-events-none absolute -right-8 -top-6 text-white opacity-[0.04]" aria-hidden />
          <Network size={80}  className="pointer-events-none absolute right-40 top-4 text-white opacity-[0.05] rotate-12" aria-hidden />
          <Shield  size={64}  className="pointer-events-none absolute right-24 bottom-3 text-white opacity-[0.05] -rotate-6" aria-hidden />
          <Globe   size={72}  className="pointer-events-none absolute right-6 bottom-4 text-white opacity-[0.04]" aria-hidden />
          <Server  size={52}  className="pointer-events-none absolute right-64 top-6 text-white opacity-[0.05] rotate-3" aria-hidden />
          <Cpu     size={44}  className="pointer-events-none absolute right-52 bottom-5 text-white opacity-[0.04] -rotate-12" aria-hidden />

          <div className="relative flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center font-display font-extrabold text-3xl shrink-0">
              5
            </div>
            <div>
              <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-2">
                Computer Networks · Module 5 of 8
              </p>
              <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight">
                Transport Layer: TCP &amp; UDP
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-3">
                <span className="bg-blue-500/30 text-blue-300 border border-blue-500/30 px-2.5 py-0.5 rounded-md text-xs font-semibold">
                  Intermediate
                </span>
                <span className="text-white/50 text-xs">18 quiz questions</span>
              </div>
            </div>
          </div>

          <p className="relative text-white/60 text-sm leading-relaxed mt-6 max-w-2xl">
            Understand how TCP delivers data reliably with handshakes, sequence numbers, flow
            control, and congestion control  and when UDP's speed makes it the right choice.
          </p>
        </div>
      </div>

      {/* body */}
      <div className="py-10 space-y-14">

        <ObjectivesCard objectives={[
          "Trace the TCP 3-way handshake and 4-way teardown step by step.",
          "Explain sequence numbers, cumulative ACKs, and retransmission.",
          "Describe TCP flow control using the sliding window mechanism.",
          "Explain congestion control: Slow Start, Congestion Avoidance, and Fast Recovery.",
          "Know when UDP outperforms TCP and understand key protocol differences.",
          "Identify well-known port numbers and the role of sockets.",
        ]} />

        {/* ── Section 01: Ports & Sockets */}
        <section className="space-y-6">
          <SectionHeading n="01" title="Port Numbers &amp; Sockets" />

          <div className="grid sm:grid-cols-2 gap-4">
            <ConceptCard number="5.1" title="Ports  Service Multiplexing" tag="Key Concept">
              <p>
                A single IP can run many services simultaneously using
                <strong> port numbers</strong>. The OS routes incoming segments to the
                correct application by destination port.
              </p>
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-50 dark:bg-stone-900/60">
                      {["Range", "Name", "Examples"].map(h => (
                        <th key={h} className="text-left p-2 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10 text-[10px]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      ["0–1023",       "Well-known",  "HTTP=80, HTTPS=443, SSH=22, DNS=53"],
                      ["1024–49151",   "Registered",  "MySQL=3306, Redis=6379, Postgres=5432"],
                      ["49152–65535",  "Ephemeral",   "OS-assigned for outgoing connections"],
                    ].map(([r, n, e]) => (
                      <tr key={r} className="hover:bg-stone-50 dark:bg-stone-900/60">
                        <td className="p-2 font-mono text-lime-600 text-[10px]">{r}</td>
                        <td className="p-2 text-stone-700 dark:text-stone-300 text-[10px]">{n}</td>
                        <td className="p-2 text-stone-500 text-[10px]">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ConceptCard>

            <ConceptCard number="5.1" title="Sockets" tag="Definition">
              <p>
                A <strong>socket</strong> = IP address + Port + Protocol. It is the endpoint
                of a network connection in the OS.
              </p>
              <p className="mt-2">
                A <strong>TCP connection</strong> is uniquely identified by a 4-tuple:
              </p>
              <div className="bg-stone-900 rounded-xl p-3 font-mono text-[10px] text-stone-300 mt-2 space-y-1">
                <p><span className="text-lime-400">Source IP</span>  : 192.168.1.10</p>
                <p><span className="text-lime-400">Source Port</span>: 54321 (ephemeral)</p>
                <p><span className="text-amber-400">Dest IP</span>    : 93.184.216.34</p>
                <p><span className="text-amber-400">Dest Port</span>  : 443 (HTTPS)</p>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                A server can serve thousands of clients on port 443 simultaneously because
                each connection has a unique source (IP + port) combination.
              </p>
            </ConceptCard>
          </div>

          <MicroCheck
            question="A web server listens on port 443. Client A uses ephemeral port 54321 and Client B uses 54322. Can the server handle both at once?"
            options={[
              "No  two clients cannot use the same destination port",
              "Yes  each connection is a different 4-tuple (different source ports), so they are distinct",
              "Only if the server opens a new port for each client",
              "Only if the clients have different IP addresses",
            ]}
            correct={1}
            explanation="The server distinguishes connections by the full 4-tuple. Even though both clients connect to port 443, their source ports differ (54321 vs 54322), so the OS routes responses to the correct socket. This is how a single server serves millions of concurrent connections."
          />
        </section>

        {/* ── Section 02: TCP Handshake */}
        <section className="space-y-6">
          <SectionHeading n="02" title="TCP Connection &amp; Teardown" />

          <div className="grid sm:grid-cols-2 gap-4">
            <ConceptCard number="5.3" title="3-Way Handshake" tag="Key Concept">
              <div className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
                {[
                  { step: 1, color: "#7C3AED", arrow: "Client → Server", msg: "SYN (seq=x)", desc: "Client picks a random initial sequence number and sets the SYN flag." },
                  { step: 2, color: "#F59E0B", arrow: "Server → Client", msg: "SYN-ACK (seq=y, ack=x+1)", desc: "Server acknowledges the client's SYN and sends its own." },
                  { step: 3, color: "#10B981", arrow: "Client → Server", msg: "ACK (ack=y+1)", desc: "Client ACKs the server's SYN. Both sides: ESTABLISHED." },
                ].map(({ step, color, arrow, msg, desc }) => (
                  <div key={step} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full text-white text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: color }}>
                      {step}
                    </span>
                    <div>
                      <p className="text-[10px] font-bold" style={{ color }}>{arrow}: <code>{msg}</code></p>
                      <p className="text-[10px] text-stone-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ConceptCard>

            <ConceptCard number="5.4" title="4-Way Teardown" tag="Key Concept">
              <div className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
                {[
                  { step: 1, color: "#7C3AED", msg: "Client → FIN", desc: "Client is done sending data." },
                  { step: 2, color: "#64748B", msg: "Server → ACK", desc: "Server acknowledges; may still send data." },
                  { step: 3, color: "#F59E0B", msg: "Server → FIN", desc: "Server is also done." },
                  { step: 4, color: "#10B981", msg: "Client → ACK", desc: "Client confirms. Enters TIME_WAIT (2×MSL) to handle late FIN retransmits." },
                ].map(({ step, color, msg, desc }) => (
                  <div key={step} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full text-white text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: color }}>
                      {step}
                    </span>
                    <div>
                      <p className="text-[10px] font-bold" style={{ color }}>{msg}</p>
                      <p className="text-[10px] text-stone-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-stone-500 mt-2 border-t border-stone-100 dark:border-white/5 pt-2">
                <strong>Why 4 steps?</strong> FIN only closes one direction  each side must
                independently signal it is done sending.
              </p>
            </ConceptCard>
          </div>

          <AnimFrame
            id="anim-5a"
            title="Anim 5-A  TCP 3-Way Handshake"
            description="Step through normal and dropped-SYN scenarios  watch state machine transitions"
            totalSteps={1}
          >
            <Anim5A />
          </AnimFrame>

          <MicroCheck
            question="Why does TCP use 3 steps to establish a connection instead of just 2?"
            options={[
              "2-way handshake is not defined by the TCP standard",
              "Both sides must confirm they can both send AND receive  a 2-way handshake only confirms one direction",
              "3 steps are required to exchange encryption keys",
              "The third step carries the initial data payload",
            ]}
            correct={1}
            explanation="A 2-way handshake (SYN + SYN-ACK) would only prove the client can send and the server can receive. The third ACK proves the server's SYN-ACK reached the client, confirming the reverse path. Without it, the server couldn't know the client got its SYN-ACK."
          />
        </section>

        {/* ── Section 03: Reliability */}
        <section className="space-y-6">
          <SectionHeading n="03" title="Reliability: Seq Numbers &amp; ACKs" />

          <ConceptCard number="5.5" title="How TCP Guarantees Delivery" tag="Key Concept">
            <p>
              TCP numbers every <strong>byte</strong> (not segment) with a sequence number.
              The receiver sends cumulative ACKs and the sender retransmits anything not acknowledged.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-3">
              {[
                { title: "Cumulative ACK", color: "#10B981", desc: "ACK=1001 means all bytes up to 1000 received. Send byte 1001 next." },
                { title: "Retransmission Timeout", color: "#F59E0B", desc: "If no ACK within RTO (calculated from RTT samples), the segment is resent." },
                { title: "Fast Retransmit", color: "#7C3AED", desc: "3 duplicate ACKs → retransmit immediately without waiting for RTO." },
              ].map(({ title, color, desc }) => (
                <div key={title} className="bg-stone-50 dark:bg-stone-900/60 rounded-xl p-3 border border-stone-100 dark:border-white/5">
                  <p className="text-[10px] font-bold mb-1" style={{ color }}>{title}</p>
                  <p className="text-[10px] text-stone-500">{desc}</p>
                </div>
              ))}
            </div>
          </ConceptCard>

          <MicroCheck
            question="TCP receives a segment with bytes 1–500 and then bytes 1001–1500. Bytes 501–1000 are missing. What ACK does it send?"
            options={[
              "ACK=1001  it acknowledges everything it has",
              "ACK=501  it only acknowledges up to the first gap",
              "ACK=1501  it acknowledges all received segments regardless of order",
              "No ACK  TCP waits until the gap is filled",
            ]}
            correct={1}
            explanation="TCP uses cumulative ACKs  it can only acknowledge a contiguous byte stream. After receiving 1–500, it sends ACK=501. When 1001–1500 arrives out of order, it still sends ACK=501 (a duplicate ACK) because bytes 501–1000 are still missing. Three of these duplicates trigger fast retransmit."
          />
        </section>

        {/* ── Section 04: Flow Control */}
        <section className="space-y-6">
          <SectionHeading n="04" title="Flow Control  Sliding Window" />

          <ConceptCard number="5.6" title="The Sliding Window" tag="Key Concept">
            <p>
              The receiver advertises a <strong>window size</strong>  how many unacknowledged
              bytes it can buffer. The sender must not exceed this limit.
            </p>
            <div className="bg-stone-900 rounded-xl p-3 font-mono text-[10px] text-stone-300 mt-2 space-y-0.5">
              <p><span className="text-stone-500">|</span><span className="text-stone-500"> Ack'd </span><span className="text-stone-500">|</span><span className="text-lime-400"> Sent,unACK'd </span><span className="text-stone-500">|</span><span className="text-blue-400"> Can send (window) </span><span className="text-stone-500">|</span><span className="text-stone-600 dark:text-stone-400"> Cannot send yet </span><span className="text-stone-500">|</span></p>
            </div>
            <p className="text-xs text-stone-500 mt-2">
              As ACKs arrive the window <em>slides</em> right, allowing more data to be sent.
              If the receiver&apos;s buffer fills, window=0 → sender pauses and sends periodic
              <strong> Zero Window Probes</strong>.
            </p>
          </ConceptCard>

          <AnimFrame
            id="anim-5b"
            title="Anim 5-B  Sliding Window Visualizer"
            description="Send segments, receive ACKs, fill the buffer  observe the window slide and zero-window probe"
            totalSteps={1}
          >
            <Anim5B />
          </AnimFrame>

          <MicroCheck
            question="The receiver's advertised window is 8 KB and 3 KB is already unacknowledged in flight. How much more data can the sender transmit right now?"
            options={["8 KB", "11 KB", "5 KB", "3 KB"]}
            correct={2}
            explanation="The sender can have at most window_size bytes unacknowledged. With 3 KB already in-flight and a window of 8 KB, the sender can send 8 - 3 = 5 KB more before it must wait for ACKs."
          />
        </section>

        {/* ── Section 05: Congestion Control */}
        <section className="space-y-6">
          <SectionHeading n="05" title="Congestion Control" />

          <div className="grid sm:grid-cols-2 gap-4">
            <ConceptCard number="5.7" title="Four Phases" tag="Key Concept">
              <div className="space-y-2">
                {[
                  { phase: "Slow Start",          color: "#7C3AED", desc: "cwnd starts at 1 MSS, doubles every RTT. Exponential growth until ssthresh." },
                  { phase: "Congestion Avoidance", color: "#2563EB", desc: "cwnd ≥ ssthresh: add 1 MSS per RTT. Linear growth (AIMD)." },
                  { phase: "Fast Retransmit",      color: "#F59E0B", desc: "3 dup-ACKs → retransmit immediately. ssthresh=cwnd/2." },
                  { phase: "Fast Recovery",        color: "#10B981", desc: "Reno: cwnd=ssthresh+3, stay in CA. Tahoe: cwnd=1, restart Slow Start." },
                ].map(({ phase, color, desc }) => (
                  <div key={phase} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: color }} />
                    <div>
                      <p className="text-[10px] font-bold" style={{ color }}>{phase}</p>
                      <p className="text-[10px] text-stone-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ConceptCard>

            <ConceptCard number="5.7" title="Timeout vs 3-Dup-ACK" tag="Key Concept">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-50 dark:bg-stone-900/60">
                      {["Event", "Severity", "cwnd", "ssthresh"].map(h => (
                        <th key={h} className="text-left p-2 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10 text-[10px]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    <tr className="hover:bg-stone-50 dark:bg-stone-900/60">
                      <td className="p-2 text-amber-600 font-semibold text-[10px]">3 dup-ACKs</td>
                      <td className="p-2 text-stone-500 text-[10px]">Mild</td>
                      <td className="p-2 text-stone-500 font-mono text-[10px]">→ ssthresh (Reno)</td>
                      <td className="p-2 text-stone-500 font-mono text-[10px]">cwnd / 2</td>
                    </tr>
                    <tr className="hover:bg-stone-50 dark:bg-stone-900/60">
                      <td className="p-2 text-red-600 font-semibold text-[10px]">Timeout</td>
                      <td className="p-2 text-stone-500 text-[10px]">Severe</td>
                      <td className="p-2 text-stone-500 font-mono text-[10px]">→ 1 MSS</td>
                      <td className="p-2 text-stone-500 font-mono text-[10px]">cwnd / 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                A timeout means the network is severely congested  TCP backs all the way off to
                1 MSS. Three dup-ACKs suggest a single lost segment while the path is still
                usable  a less drastic response.
              </p>
            </ConceptCard>
          </div>

          <AnimFrame
            id="anim-5c"
            title="Anim 5-C  Congestion Control Graph"
            description="Click Simulate  watch cwnd grow, react to loss events, and compare Tahoe vs Reno vs CUBIC"
            totalSteps={1}
          >
            <Anim5C />
          </AnimFrame>

          <MicroCheck
            question="After a timeout event, TCP Reno sets cwnd=1 and ssthresh=cwnd/2, then enters Slow Start. True or false?"
            options={[
              "True  timeout is handled identically by all TCP variants",
              "False  Reno sets cwnd=ssthresh on timeout and stays in Congestion Avoidance",
              "True  on timeout all TCP variants reset cwnd to 1 and halve ssthresh",
              "False  only TCP Tahoe resets cwnd to 1; Reno keeps cwnd at ssthresh",
            ]}
            correct={2}
            explanation="All major TCP variants (Tahoe, Reno, CUBIC) treat a timeout identically: cwnd=1, ssthresh=cwnd/2, re-enter Slow Start. The variants differ only in their response to 3-dup-ACKs (a milder signal). Reno's Fast Recovery is only triggered by 3-dup-ACKs, not timeouts."
          />
        </section>

        {/* ── Section 06: UDP */}
        <section className="space-y-6">
          <SectionHeading n="06" title="UDP &amp; TCP vs UDP" />

          <div className="grid sm:grid-cols-2 gap-4">
            <ConceptCard number="5.8" title="UDP  User Datagram Protocol" tag="Key Concept">
              <p>
                UDP is <strong>connectionless</strong>, <strong>unreliable</strong>, and
                <strong> unordered</strong>  but extremely <strong>fast</strong>.
                Its header is only <strong>8 bytes</strong>.
              </p>
              <div className="bg-stone-900 rounded-xl p-2.5 font-mono text-[9px] text-stone-300 mt-2">
                <p className="text-stone-500 mb-0.5">UDP Header (8 bytes total):</p>
                <p><span className="text-amber-400">Src Port</span>(2) | <span className="text-amber-400">Dst Port</span>(2) | <span className="text-blue-400">Length</span>(2) | <span className="text-emerald-400">Checksum</span>(2)</p>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                No handshake. No retransmit. No ordering. Use when latency beats reliability:
                VoIP, video calls, gaming, DNS, DHCP, QUIC (HTTP/3).
              </p>
            </ConceptCard>

            <ConceptCard number="5.9" title="TCP vs UDP" tag="Key Concept">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-50 dark:bg-stone-900/60">
                      {["Property", "TCP", "UDP"].map(h => (
                        <th key={h} className="text-left p-2 font-bold text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-white/10 text-[10px]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      ["Connection",  "3-way handshake",       "None"],
                      ["Reliability", "Guaranteed delivery",   "Best-effort"],
                      ["Order",       "Maintained",            "Not guaranteed"],
                      ["Speed",       "Slower (overhead)",     "Faster"],
                      ["Header",      "20+ bytes",             "8 bytes"],
                      ["Use cases",   "HTTP, SSH, email",      "DNS, VoIP, gaming"],
                    ].map(([prop, tcp, udp]) => (
                      <tr key={prop} className="hover:bg-stone-50 dark:bg-stone-900/60">
                        <td className="p-2 font-semibold text-stone-700 dark:text-stone-300 text-[10px]">{prop}</td>
                        <td className="p-2 text-lime-600 text-[10px]">{tcp}</td>
                        <td className="p-2 text-blue-600 text-[10px]">{udp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ConceptCard>
          </div>

          <AnimFrame
            id="anim-5d"
            title="Anim 5-D  TCP vs UDP Race"
            description="Click Race!  watch both protocols send 20 packets with 3 intentional drops"
            totalSteps={1}
          >
            <Anim5D />
          </AnimFrame>

          <MicroCheck
            question="A gaming application sends position updates 60 times per second. Should it use TCP or UDP?"
            options={[
              "TCP  players must receive every update in order",
              "UDP  old position updates are worthless once stale; retransmits would cause lag",
              "TCP with a very small window size to limit retransmits",
              "Either  they perform identically for small, frequent messages",
            ]}
            correct={1}
            explanation="In real-time games, a position update from 100 ms ago is useless  the player has already moved. A TCP retransmit would delay all subsequent updates (head-of-line blocking), causing visible lag. UDP sends each update immediately and the game simply uses the most recent received state."
          />
        </section>

        {/* ── Exit Quiz */}
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
            Score <strong className="text-stone-700 dark:text-stone-300">13 / 18</strong> or higher to unlock Module 6.
          </p>

          <ExitQuiz
            moduleName="Module 5  Transport Layer: TCP &amp; UDP"
            questions={QUIZ}
            passThreshold={13}
          />
        </section>

      </div>
    </div>
  )
}
