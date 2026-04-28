import type { ComponentType, LazyExoticComponent } from "react";
import { lazy } from "react";

export interface LessonEntry {
  slug: string;
  title: string;
  summary: string;
  load: LazyExoticComponent<ComponentType<{ onQuizComplete?: (score: number) => void }>>;
}

export interface LevelEntry {
  id: string;
  number: number;
  title: string;
  summary: string;
  topics: string[];
  lessons: LessonEntry[];
}

export const LEVELS: LevelEntry[] = [
  {
    id: "level-1",
    number: 1,
    title: "Foundations",
    summary:
      "What System Design actually is, how HLD and LLD differ, and the framework you use in every architecture round.",
    topics: ["scope", "hld", "lld", "requirements", "framework", "estimation", "diagrams"],
    lessons: [
      {
        slug: "what-is-system-design",
        title: "What is System Design?",
        summary:
          "Where System Design sits between DSA and operations, what it actually means as a discipline, and where it shows up in interviews.",
        load: lazy(() => import("./lessons/SD_L1_WhatIsSystemDesignActivity")),
      },
      {
        slug: "hld-vs-lld",
        title: "HLD vs LLD - The Two Lenses",
        summary:
          "High-level architecture vs low-level class design. Two distinct interview rounds tested at every product company.",
        load: lazy(() => import("./lessons/SD_L1_HLDvsLLDActivity")),
      },
      {
        slug: "requirements",
        title: "Functional vs Non-Functional Requirements",
        summary:
          "Read the prompt before drawing boxes. Functional asks 'what', non-functional asks 'how well' (latency, throughput, availability).",
        load: lazy(() => import("./lessons/SD_L1_RequirementsActivity")),
      },
      {
        slug: "design-framework",
        title: "The 4-Step Design Framework",
        summary:
          "Requirements → Estimation → API + data model → High-level diagram. The literal structure of a 45-min HLD round.",
        load: lazy(() => import("./lessons/SD_L1_DesignFrameworkActivity")),
      },
      {
        slug: "architecture-diagrams",
        title: "Drawing Architecture Diagrams",
        summary:
          "Boxes, arrows, and the small set of conventions that make a whiteboard diagram readable under interview pressure.",
        load: lazy(() => import("./lessons/SD_L1_ArchitectureDiagramsActivity")),
      },
      {
        slug: "back-of-envelope",
        title: "Back-of-Envelope Estimation",
        summary:
          "Fermi math for QPS, storage, and bandwidth. The numbers that justify every component you draw.",
        load: lazy(() => import("./lessons/SD_L1_BackOfEnvelopeActivity")),
      },
    ],
  },
  {
    id: "level-2",
    number: 2,
    title: "Networking & Scaling Primitives",
    summary:
      "How a request actually reaches your server, and the building blocks (load balancers, caches, statelessness) that let it serve millions.",
    topics: ["http", "dns", "scaling", "load-balancing", "stateless", "caching"],
    lessons: [
      {
        slug: "client-server-http",
        title: "Client-Server & HTTP",
        summary:
          "Request-response, methods, status codes, and the headers every web system interview assumes you know cold.",
        load: lazy(() => import("./lessons/SD_L2_ClientServerHTTPActivity")),
      },
      {
        slug: "dns-journey",
        title: "DNS & The Journey of a Request",
        summary:
          "The classic 'what happens when you type google.com' walkthrough: resolver, root, TLD, authoritative, TCP, TLS, HTTP.",
        load: lazy(() => import("./lessons/SD_L2_DNSJourneyActivity")),
      },
      {
        slug: "scaling",
        title: "Vertical vs Horizontal Scaling",
        summary:
          "Bigger box vs more boxes. The trade you make first in any capacity-planning discussion.",
        load: lazy(() => import("./lessons/SD_L2_ScalingActivity")),
      },
      {
        slug: "load-balancing",
        title: "Load Balancing Basics",
        summary:
          "L4 vs L7, round-robin vs least-connections, health checks, and the first box you draw after the client.",
        load: lazy(() => import("./lessons/SD_L2_LoadBalancingActivity")),
      },
      {
        slug: "stateless",
        title: "Stateless vs Stateful Services",
        summary:
          "The hidden precondition that makes horizontal scaling actually work. Where state goes when servers cannot hold it.",
        load: lazy(() => import("./lessons/SD_L2_StatelessActivity")),
      },
      {
        slug: "caching",
        title: "Caching 101",
        summary:
          "Browser, CDN, app, and DB caches. Hit/miss, eviction policies, invalidation, and 'how do you make this faster?'",
        load: lazy(() => import("./lessons/SD_L2_CachingActivity")),
      },
    ],
  },
  {
    id: "level-3",
    number: 3,
    title: "Data & Persistence",
    summary:
      "Where state lives once you can no longer fit it on one machine. Relational vs document shapes, replication, and sharding.",
    topics: ["sql", "nosql", "replication", "sharding", "consistency"],
    lessons: [
      {
        slug: "sql-vs-nosql",
        title: "SQL vs NoSQL",
        summary:
          "Same data, two shapes. Watch a user record morph between a relational row and a document, and learn when each one wins.",
        load: lazy(() => import("./lessons/SD_L3_SQLvsNoSQLActivity")),
      },
      {
        slug: "replication",
        title: "Database Replication",
        summary:
          "Animated write fan-out from primary to replicas, replica lag, and what failover actually looks like under load.",
        load: lazy(() => import("./lessons/SD_L3_ReplicationActivity")),
      },
      {
        slug: "sharding",
        title: "Sharding & Partitioning",
        summary:
          "Consistent hashing on a ring, the rebalance dance when shards are added, and why hot shards still bite you.",
        load: lazy(() => import("./lessons/SD_L3_ShardingActivity")),
      },
      {
        slug: "indexes",
        title: "Indexes",
        summary:
          "B-tree drilldown animation. Race a full table scan against an index seek and see why every interview answer involves the magic word INDEX.",
        load: lazy(() => import("./lessons/SD_L3_IndexesActivity")),
      },
      {
        slug: "transactions",
        title: "Transactions & ACID",
        summary:
          "Two concurrent transactions on a parallel timeline. Slide the isolation level — dirty reads, non-repeatable reads, and phantom reads flicker into existence.",
        load: lazy(() => import("./lessons/SD_L3_TransactionsActivity")),
      },
      {
        slug: "consistency-spectrum",
        title: "The Consistency Spectrum",
        summary:
          "Eventual → read-your-writes → monotonic → linearizable. Slide the consistency knob and watch what reads return from a 3-replica cluster.",
        load: lazy(() => import("./lessons/SD_L3_ConsistencyActivity")),
      },
    ],
  },
  {
    id: "level-4",
    number: 4,
    title: "Distributed Systems Fundamentals",
    summary:
      "The vocabulary of distributed correctness. CAP, consensus, quorums, vector clocks, distributed transactions, and idempotency.",
    topics: ["cap", "consensus", "raft", "quorum", "vector-clocks", "2pc", "saga", "idempotency"],
    lessons: [
      {
        slug: "cap-theorem",
        title: "The CAP Theorem",
        summary:
          "Consistency, availability, partition tolerance — pick two. Drag the partition cut and watch a system flip between CP and AP modes.",
        load: lazy(() => import("./lessons/SD_L4_CAPTheoremActivity")),
      },
      {
        slug: "consensus-raft",
        title: "Consensus & Leader Election",
        summary:
          "Five nodes electing a leader, replicating logs, and recovering after the leader dies. The Raft protocol, animated.",
        load: lazy(() => import("./lessons/SD_L4_ConsensusActivity")),
      },
      {
        slug: "quorum",
        title: "Quorum Reads & Writes",
        summary:
          "The W + R > N rule that gives Cassandra and DynamoDB their tunable consistency. Drag the sliders and see what reads return.",
        load: lazy(() => import("./lessons/SD_L4_QuorumActivity")),
      },
      {
        slug: "vector-clocks",
        title: "Vector Clocks & Conflicts",
        summary:
          "How distributed systems detect concurrent writes without a global clock — and what to do when two clients edit the same key.",
        load: lazy(() => import("./lessons/SD_L4_VectorClocksActivity")),
      },
      {
        slug: "2pc-vs-sagas",
        title: "2PC vs Sagas",
        summary:
          "Two-phase commit's blocking prepare/commit dance vs the saga's compensating-actions trail. Inject failures and watch each respond.",
        load: lazy(() => import("./lessons/SD_L4_DistributedTxActivity")),
      },
      {
        slug: "idempotency",
        title: "Idempotency & Exactly-Once",
        summary:
          "Why your charge-card endpoint must be safe to retry, and how a single idempotency key turns at-least-once into exactly-once.",
        load: lazy(() => import("./lessons/SD_L4_IdempotencyActivity")),
      },
    ],
  },
  {
    id: "level-5",
    number: 5,
    title: "Async & Messaging",
    summary:
      "Decouple producers from consumers. Queues, pub/sub, event-driven services, partitioned logs, delivery guarantees, and rate limiting.",
    topics: ["queue", "pub-sub", "event-driven", "kafka", "delivery", "rate-limit"],
    lessons: [
      {
        slug: "message-queues",
        title: "Message Queues 101",
        summary:
          "Producer → broker → consumer with adjustable consumer speed. Slow the consumer down and watch the queue fill.",
        load: lazy(() => import("./lessons/SD_L5_MessageQueuesActivity")),
      },
      {
        slug: "pub-sub-vs-queue",
        title: "Pub/Sub vs Queue",
        summary:
          "Same message, two routing models. Toggle modes and watch one consumer win (queue) vs all subscribers get a copy (pub/sub).",
        load: lazy(() => import("./lessons/SD_L5_PubSubActivity")),
      },
      {
        slug: "event-driven",
        title: "Event-Driven Architecture",
        summary:
          "Services emit and react to events instead of calling each other. Click any service in the graph to see what flows in and out.",
        load: lazy(() => import("./lessons/SD_L5_EventDrivenActivity")),
      },
      {
        slug: "kafka-log",
        title: "Kafka Partitioned Log",
        summary:
          "Append-only log per partition. Two consumer groups read independently with their own offset cursors. Replay from any point.",
        load: lazy(() => import("./lessons/SD_L5_KafkaActivity")),
      },
      {
        slug: "delivery-guarantees",
        title: "Delivery Guarantees",
        summary:
          "At-most-once, at-least-once, exactly-once. Inject failures and watch what each guarantee does to your message log.",
        load: lazy(() => import("./lessons/SD_L5_DeliveryGuaranteesActivity")),
      },
      {
        slug: "rate-limiting",
        title: "Rate Limiting",
        summary:
          "Token bucket, leaky bucket, sliding window — three algorithms running on the same burst input. Pick which fits which workload.",
        load: lazy(() => import("./lessons/SD_L5_RateLimitingActivity")),
      },
    ],
  },
  {
    id: "level-6",
    number: 6,
    title: "Reliability & Failure Modes",
    summary:
      "Stop a single failing dependency from taking down your entire system. Circuit breakers, retries, bulkheads, graceful shutdown, chaos, observability.",
    topics: ["circuit-breaker", "retry", "bulkhead", "deploy", "chaos", "observability"],
    lessons: [
      {
        slug: "circuit-breakers",
        title: "Circuit Breakers",
        summary:
          "Closed → Open → Half-open state machine. Inject failures past the threshold and watch the breaker trip, traffic stop, and probes restore service.",
        load: lazy(() => import("./lessons/SD_L6_CircuitBreakerActivity")),
      },
      {
        slug: "retries-jitter",
        title: "Retries, Timeouts, Jitter",
        summary:
          "Three retry strategies racing: no jitter (thundering herd), exponential backoff, full jitter. Compare the aggregate retry storm.",
        load: lazy(() => import("./lessons/SD_L6_RetryJitterActivity")),
      },
      {
        slug: "bulkheads",
        title: "Bulkheads & Isolation",
        summary:
          "Shared vs partitioned thread pools. Inject a slow downstream and watch failures cascade — or get contained to a single lane.",
        load: lazy(() => import("./lessons/SD_L6_BulkheadActivity")),
      },
      {
        slug: "graceful-shutdown",
        title: "Graceful Shutdown",
        summary:
          "Rolling deploy with connection draining. Pod gets SIGTERM, drains in-flight, fails health check, gets removed from LB, then exits.",
        load: lazy(() => import("./lessons/SD_L6_GracefulShutdownActivity")),
      },
      {
        slug: "chaos-engineering",
        title: "Chaos Engineering",
        summary:
          "Click any node, network edge, or disk to break it. Watch the cluster either absorb or cascade. A miniature Chaos Monkey playground.",
        load: lazy(() => import("./lessons/SD_L6_ChaosActivity")),
      },
      {
        slug: "observability",
        title: "Metrics, Logs & Traces",
        summary:
          "Three observability pillars on one screen. A spike in the metric line, the matching error in the log, the failing span in the trace tree.",
        load: lazy(() => import("./lessons/SD_L6_ObservabilityActivity")),
      },
    ],
  },
  {
    id: "level-7",
    number: 7,
    title: "Search, Geo & Real-time",
    summary:
      "How search engines index documents, how geo systems find what's nearby, and how real-time updates reach a million browsers.",
    topics: ["search", "ranking", "geohash", "websocket", "cdc", "fanout"],
    lessons: [
      {
        slug: "inverted-index",
        title: "Inverted Index",
        summary:
          "Tokenize documents → posting lists. Type a query, watch the index light up matching docs and rank them by score.",
        load: lazy(() => import("./lessons/SD_L7_InvertedIndexActivity")),
      },
      {
        slug: "ranking",
        title: "TF-IDF & BM25 Ranking",
        summary:
          "Slide query terms and weights. Document rankings reorder live. See which terms in which docs contributed which boost.",
        load: lazy(() => import("./lessons/SD_L7_RankingActivity")),
      },
      {
        slug: "geo-indexes",
        title: "Geohash & Quadtree",
        summary:
          "Drag a pin on a map. Geohash precision tiles around it. 'Find nearby' sweeps a radius and lights up matching cells.",
        load: lazy(() => import("./lessons/SD_L7_GeoActivity")),
      },
      {
        slug: "websockets",
        title: "WebSockets vs Long Polling",
        summary:
          "Three timelines under matching traffic: short polling, long polling, WebSockets. Latency, server cost, connection counts.",
        load: lazy(() => import("./lessons/SD_L7_WebSocketsActivity")),
      },
      {
        slug: "cdc-pipeline",
        title: "Change Data Capture",
        summary:
          "DB → CDC → search index → client. Animated change propagation with lag readings at each hop. Consistent denormalization.",
        load: lazy(() => import("./lessons/SD_L7_CDCActivity")),
      },
      {
        slug: "notification-fanout",
        title: "Notification Fan-out",
        summary:
          "Push vs pull at scale. The celebrity-fanout problem and the hybrid solution that powers Twitter, Instagram, and Whatsapp.",
        load: lazy(() => import("./lessons/SD_L7_FanoutActivity")),
      },
    ],
  },
  {
    id: "level-8",
    number: 8,
    title: "End-to-End Case Studies",
    summary:
      "Six classic interview designs built end-to-end: TinyURL, Twitter feed, Uber dispatch, WhatsApp, YouTube, distributed rate limiter.",
    topics: ["tinyurl", "twitter", "uber", "whatsapp", "youtube", "rate-limiter"],
    lessons: [
      {
        slug: "design-tinyurl",
        title: "Design TinyURL",
        summary:
          "Short-code generation, the redirect path, hot-key cache ratio, and the back-of-envelope numbers that justify every box.",
        load: lazy(() => import("./lessons/SD_L8_TinyURLActivity")),
      },
      {
        slug: "design-twitter-feed",
        title: "Design Twitter Feed",
        summary:
          "Push timeline for normal users, pull merge for celebrities. Hybrid fan-out animated end-to-end with realistic latencies.",
        load: lazy(() => import("./lessons/SD_L8_TwitterActivity")),
      },
      {
        slug: "design-uber",
        title: "Design Uber Dispatch",
        summary:
          "Live map with drivers + riders. Geohash matching, surge zones, the dispatch loop, and how 1 trip becomes 50 service calls.",
        load: lazy(() => import("./lessons/SD_L8_UberActivity")),
      },
      {
        slug: "design-whatsapp",
        title: "Design WhatsApp",
        summary:
          "Connection box per user, broker routing, delivery state machine (sent → delivered → read). What '2 ticks' actually mean.",
        load: lazy(() => import("./lessons/SD_L8_WhatsAppActivity")),
      },
      {
        slug: "design-youtube",
        title: "Design YouTube",
        summary:
          "Upload → transcoding pipeline → CDN edge selection → adaptive bitrate playback that downshifts mid-video on a slow link.",
        load: lazy(() => import("./lessons/SD_L8_YouTubeActivity")),
      },
      {
        slug: "design-rate-limiter",
        title: "Design a Distributed Rate Limiter",
        summary:
          "Move from in-process to multi-instance: Redis Lua scripts, sharded counters, edge + service tiers, atomic checks across the fleet.",
        load: lazy(() => import("./lessons/SD_L8_RateLimiterActivity")),
      },
    ],
  },
];

export function findLevel(levelId: string): LevelEntry | undefined {
  return LEVELS.find((l) => l.id === levelId);
}

export function findLesson(levelId: string, lessonSlug: string): {
  level: LevelEntry;
  lesson: LessonEntry;
  lessonIndex: number;
} | undefined {
  const level = findLevel(levelId);
  if (!level) return undefined;
  const lessonIndex = level.lessons.findIndex((l) => l.slug === lessonSlug);
  if (lessonIndex === -1) return undefined;
  return { level, lesson: level.lessons[lessonIndex], lessonIndex };
}

export function getNeighbours(levelId: string, lessonSlug: string): {
  prev?: { levelId: string; slug: string; title: string };
  next?: { levelId: string; slug: string; title: string };
} {
  const found = findLesson(levelId, lessonSlug);
  if (!found) return {};
  const { level, lessonIndex } = found;
  const levelIdx = LEVELS.findIndex((l) => l.id === level.id);

  let prev: { levelId: string; slug: string; title: string } | undefined;
  if (lessonIndex > 0) {
    const p = level.lessons[lessonIndex - 1];
    prev = { levelId: level.id, slug: p.slug, title: p.title };
  } else if (levelIdx > 0) {
    const prevLevel = LEVELS[levelIdx - 1];
    const p = prevLevel.lessons[prevLevel.lessons.length - 1];
    if (p) prev = { levelId: prevLevel.id, slug: p.slug, title: p.title };
  }

  let next: { levelId: string; slug: string; title: string } | undefined;
  if (lessonIndex < level.lessons.length - 1) {
    const n = level.lessons[lessonIndex + 1];
    next = { levelId: level.id, slug: n.slug, title: n.title };
  } else if (levelIdx < LEVELS.length - 1) {
    const nextLevel = LEVELS[levelIdx + 1];
    const n = nextLevel.lessons[0];
    if (n) next = { levelId: nextLevel.id, slug: n.slug, title: n.title };
  }

  return { prev, next };
}
