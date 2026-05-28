import type { Grant } from "./grantsData";

export const grantsEducation: Grant[] = [
  {
    id: 10,
    name: "Foundation Grants",
    organization: "NEAR Protocol",
    logo: "https://cryptologos.cc/logos/near-protocol-near-logo.svg",
    description:
      "NEAR has committed $800M in total funding spanning existing projects, startups, international communities, and a dedicated DeFi DAO. Grants cover open source, public goods, startups, and education.",
    fundingAmount: "$800M total ecosystem",
    category: "Education",
    tags: ["NEAR", "Startups", "Education", "DeFi"],
    website: "https://near.org/funding",
    eligibility: [
      "Teams submit applications and undergo evaluation and interview",
      "Multiple funding streams: grants, accelerators, and venture support",
      "$250M for existing projects over 4 years",
      "$100M dedicated to startups (20 startups)",
    ],
    status: "Active",
    ecosystem: "NEAR",
    highlights: [
      "$800M total ecosystem commitment",
      "$350M DeFi fund via Proximity Labs",
      "$100M for international communities",
    ],
  },
  {
    id: 18,
    name: "zkSync Grants & Fellowship",
    organization: "Matter Labs / ZKsync Foundation",
    logo: "https://cryptologos.cc/logos/zksync-zk-logo.svg",
    description:
      "zkSync offers multiple programs: the ZK Fellowship (4-6 month paid virtual program), the Community Program (5M ZK tokens via Gitcoin), and a Community Activation Pilot (20M ZK tokens for education and adoption).",
    fundingAmount: "$3,500/month + token pools",
    category: "Education",
    tags: ["zkSync", "ZK-Rollups", "Fellowship", "L2"],
    website: "https://zksync.io",
    eligibility: [
      "Fellowship: students, developers, researchers with strong technical backgrounds",
      "Work must be open-source and well-documented",
      "Community Program for moderators and mentors",
      "Ethereum Foundation ZK Grants pool: $900K",
    ],
    status: "Active",
    ecosystem: "zkSync",
    highlights: [
      "$3,500/month fellowship stipend",
      "20M ZK Community Activation tokens",
      "Great for students and researchers",
    ],
  },
  {
    id: 48,
    name: "Research Grants",
    organization: "Protocol Labs",
    logo: "https://protocol.ai/assets/img/pl-logo.svg",
    description:
      "Funds goal-driven research through topic-specific RFPs, PhD fellowships ($60K), and summer research grants. Supports decentralized systems, networking, and cryptography research.",
    fundingAmount: "$5,000 - $200,000",
    category: "Education",
    tags: ["Protocol Labs", "Research", "PhD", "Cryptography"],
    website: "https://research.protocol.ai/categories/grants",
    eligibility: [
      "Researchers and academics in Protocol Labs' fields of interest",
      "PhD Fellowship: early-stage researchers ($60K fixed for one year)",
      "RFP Grants: $5K-$200K per research topic",
      "Applications reviewed in two rounds (April and September)",
    ],
    status: "Active",
    ecosystem: "Multi-chain",
    highlights: [
      "$60K PhD Fellowships covering tuition",
      "Summer research grants available",
      "Focus on cryptography and decentralized systems",
    ],
  },
];
