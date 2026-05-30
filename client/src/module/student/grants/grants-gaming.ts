import type { Grant } from "./grantsData";

export const grantsGaming: Grant[] = [
  {
    id: 22,
    name: "Champion Grants",
     deadline: "2026-07-20",
    organization: "TON Foundation",
    logo: "https://cryptologos.cc/logos/toncoin-ton-logo.svg",
    description:
      "TON Foundation focuses on high-impact 'Champion' teams with momentum and vision. Grants are prioritized across five high-growth verticals including GameFi. STON.fi offers additional DeFi-specific grants up to $10K.",
    fundingAmount: "Varies (invite-based)",
    category: "Gaming",
    tags: ["TON", "Telegram", "GameFi", "Mini Apps"],
    website: "https://ton.foundation",
    eligibility: [
      "Champion teams identified through active ecosystem engagement",
      "No open applications - teams selected based on real traction",
      "Experienced leadership required",
      "Early-stage projects can participate via IdeaTON challenges",
    ],
    status: "Invite Only",
    ecosystem: "TON",
    highlights: [
      "Five high-growth verticals including GameFi",
      "Telegram integration opportunities",
      "IdeaTON challenges for early-stage (up to $5K)",
    ],
  },
  {
    id: 34,
    name: "Ecosystem Fund",
     deadline: "2026-07-20",
    organization: "Flow / Dapper Labs",
    logo: "https://cryptologos.cc/logos/flow-flow-logo.svg",
    description:
      "A $725M fund driving innovation across the Flow blockchain. Provides investments, FLOW token grants, mentorship, and subsidized office space. Features a $1M grant program for Black developers and college scholarships.",
    fundingAmount: "$725M total fund",
    category: "Gaming",
    tags: ["Flow", "NFTs", "Gaming", "Consumer Apps"],
    website: "https://flow.com",
    eligibility: [
      "Developers and teams building on Flow blockchain",
      "$1M dedicated for Black developers and creators",
      "College scholarships for students working on Flow projects",
      "7,500+ developer community",
    ],
    status: "Active",
    ecosystem: "Flow",
    highlights: [
      "$725M ecosystem fund",
      "$1M for Black developers",
      "College student scholarships available",
    ],
  },
  {
    id: 35,
    name: "Ventures & Developer Fund",
     deadline: "2026-07-20",
    organization: "Immutable",
    logo: "https://assets-global.website-files.com/646557ee455c3e16e4a9bcb3/646557ee455c3e16e4a9bd55_immutable-icon.svg",
    description:
      "A $500M fund allocating IMX token grants and cash investments to promising Web3 games. Provides tokenomics advisory, game design consulting, community and marketing support. $100M joint fund with GameStop.",
    fundingAmount: "$100K - $500K+",
    category: "Gaming",
    tags: ["Immutable", "Gaming", "NFTs", "zkEVM"],
    website: "https://www.immutable.com",
    eligibility: [
      "Game developers with launched games",
      "AAA studios/publishers and metaverse projects",
      "Content producers and eSports companies",
      "Rolling applications reviewed by Immutable panel",
    ],
    status: "Active",
    ecosystem: "Immutable",
    highlights: [
      "$500M fund deployed over 4 years",
      "$100M joint fund with GameStop",
      "Full game development support included",
    ],
  },
];
