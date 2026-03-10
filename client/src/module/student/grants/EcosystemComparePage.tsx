import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  Target,
  BookOpen,
  Layers,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../../../components/SEO";

// ─── Types ─────────────────────────────────────────────────────
interface Ecosystem {
  id: number;
  name: string;
  logo: string;
  language: string;
  consensusMechanism: string;
  tps: string;
  avgTxCost: string;
  tvl: string;
  developerCount: string;
  grantFunding: string;
  launchYear: string;
  finality: string;
  governance: string;
  nftStandard: string;
  interoperability: string;
  keyProtocols: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  resources: { title: string; url: string }[];
}

// ─── Data ──────────────────────────────────────────────────────
const ECOSYSTEMS: Ecosystem[] = [
  {
    id: 1,
    name: "Ethereum",
    logo: "https://cdn.dribbble.com/userupload/9964326/file/still-963bb3814dd11f45ad91d707e91bc8c4.png",
    language: "Solidity, Vyper",
    consensusMechanism: "Proof of Stake",
    tps: "15-30",
    finality: "~12 minutes",
    avgTxCost: "$1-$20",
    tvl: "$55B+",
    developerCount: "4,000+",
    grantFunding: "$100M+",
    launchYear: "2015",
    nftStandard: "ERC-721, ERC-1155",
    governance: "Off-chain (EIPs + core devs)",
    interoperability: "L2 bridges, cross-chain messaging",
    keyProtocols: "Uniswap, Aave, Lido, MakerDAO",
    pros: [
      "Largest developer community and ecosystem",
      "Most battle-tested smart contract platform",
      "Strongest network effects and composability",
      "Robust tooling (Hardhat, Foundry, Remix)",
    ],
    cons: [
      "High gas fees during network congestion",
      "Relatively low throughput compared to newer chains",
      "Scalability relies heavily on Layer 2 solutions",
    ],
    bestFor: [
      "DeFi protocols requiring maximum security",
      "NFT marketplaces and digital collectibles",
      "DAO governance and treasury management",
    ],
    resources: [
      { title: "Ethereum Foundation Grants", url: "https://ethereum.org/en/community/grants/" },
      { title: "Ethereum Developer Docs", url: "https://ethereum.org/en/developers/docs/" },
      { title: "EF Ecosystem Support Program", url: "https://esp.ethereum.foundation" },
    ],
  },
  {
    id: 2,
    name: "Solana",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.svg",
    language: "Rust, C, C++",
    consensusMechanism: "Proof of History + PoS",
    tps: "4,000+",
    finality: "~400ms",
    avgTxCost: "$0.00025",
    tvl: "$8B+",
    developerCount: "2,500+",
    grantFunding: "$100M+",
    launchYear: "2020",
    nftStandard: "Metaplex (SPL tokens)",
    governance: "Off-chain (SIMDs)",
    interoperability: "Wormhole, deBridge",
    keyProtocols: "Jupiter, Raydium, Marinade, Jito",
    pros: [
      "Extremely high throughput and low latency",
      "Sub-cent transaction fees",
      "Growing ecosystem with strong DeFi and NFT activity",
      "Parallel transaction processing via Sealevel",
    ],
    cons: [
      "Historical network outages have raised reliability concerns",
      "Steeper learning curve with Rust-based development",
      "Validator hardware requirements are high",
    ],
    bestFor: [
      "High-frequency trading and DeFi applications",
      "Consumer-facing apps requiring fast finality",
      "NFT minting at scale with low costs",
    ],
    resources: [
      { title: "Solana Foundation Grants", url: "https://solana.org/grants" },
      { title: "Solana Developer Docs", url: "https://solana.com/docs" },
      { title: "Solana Cookbook", url: "https://solanacookbook.com" },
    ],
  },
  {
    id: 3,
    name: "Polygon",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
    language: "Solidity, Vyper",
    consensusMechanism: "Proof of Stake",
    tps: "7,000+",
    finality: "~2 seconds",
    avgTxCost: "$0.01-$0.05",
    tvl: "$3B+",
    developerCount: "2,000+",
    grantFunding: "$50M+",
    launchYear: "2020",
    nftStandard: "ERC-721, ERC-1155",
    governance: "PIP governance forum",
    interoperability: "Polygon Bridge, AggLayer",
    keyProtocols: "QuickSwap, Aavegotchi, Polymarket",
    pros: [
      "Full EVM compatibility - easy migration from Ethereum",
      "Very low transaction fees",
      "Strong partnerships with major brands (Starbucks, Nike, Reddit)",
      "Multiple scaling solutions (PoS, zkEVM, CDK)",
    ],
    cons: [
      "Dependent on Ethereum for final settlement security",
      "Network can experience congestion during peak usage",
      "Transition between different Polygon products can be confusing",
    ],
    bestFor: [
      "Enterprise blockchain adoption and brand integrations",
      "Gaming and metaverse applications",
      "EVM dApps seeking lower fees without re-architecture",
    ],
    resources: [
      { title: "Polygon Village Grants", url: "https://polygon.technology/village/grants" },
      { title: "Polygon Developer Docs", url: "https://docs.polygon.technology" },
      { title: "Polygon zkEVM Docs", url: "https://zkevm.polygon.technology" },
    ],
  },
  {
    id: 4,
    name: "Arbitrum",
    logo: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg",
    language: "Solidity, Vyper",
    consensusMechanism: "Optimistic Rollup",
    tps: "4,000+",
    finality: "~1 week (L1), instant (soft)",
    avgTxCost: "$0.10-$0.50",
    tvl: "$10B+",
    developerCount: "1,500+",
    grantFunding: "$50M+",
    launchYear: "2021",
    nftStandard: "ERC-721, ERC-1155",
    governance: "On-chain DAO (ARB token)",
    interoperability: "Arbitrum Bridge, L2 messaging",
    keyProtocols: "GMX, Camelot, Radiant, Pendle",
    pros: [
      "Inherits Ethereum security as a Layer 2",
      "Full EVM equivalence - deploy existing contracts unchanged",
      "Highest TVL among L2 solutions",
      "Active DAO governance with ARB token",
    ],
    cons: [
      "7-day withdrawal period for bridging back to Ethereum",
      "Relies on centralized sequencer (decentralization in progress)",
      "Transaction fees, while low, fluctuate with Ethereum gas prices",
    ],
    bestFor: [
      "DeFi protocols seeking Ethereum security with lower costs",
      "Existing Ethereum dApps migrating to L2",
      "Projects wanting the largest L2 user base",
    ],
    resources: [
      { title: "Arbitrum Foundation Grants", url: "https://arbitrum.foundation/grants" },
      { title: "Arbitrum Developer Docs", url: "https://docs.arbitrum.io" },
      { title: "Arbitrum DAO", url: "https://forum.arbitrum.foundation" },
    ],
  },
  {
    id: 5,
    name: "Base",
    logo: "https://cryptologos.cc/logos/base-base-logo.svg",
    language: "Solidity, Vyper",
    consensusMechanism: "Optimistic Rollup",
    tps: "2,000+",
    finality: "~1 week (L1), instant (soft)",
    avgTxCost: "$0.01-$0.10",
    tvl: "$6B+",
    developerCount: "1,000+",
    grantFunding: "$25M+",
    launchYear: "2023",
    nftStandard: "ERC-721, ERC-1155",
    governance: "Coinbase-operated (no token)",
    interoperability: "OP Stack Superchain, Base Bridge",
    keyProtocols: "Aerodrome, friend.tech, Farcaster",
    pros: [
      "Backed by Coinbase with 100M+ user onramp",
      "Full EVM compatibility via OP Stack",
      "No native token - reduces speculation, focuses on utility",
      "Strong onchain social and creator economy",
    ],
    cons: [
      "Relatively newer chain with less battle-testing",
      "Centralized sequencer operated by Coinbase",
      "Smaller ecosystem compared to Arbitrum and Polygon",
    ],
    bestFor: [
      "Consumer apps targeting mainstream Coinbase users",
      "Onchain social and creator economy projects",
      "Developers wanting easy fiat onramp integration",
    ],
    resources: [
      { title: "Base Builder Grants", url: "https://base.org/grants" },
      { title: "Base Developer Docs", url: "https://docs.base.org" },
      { title: "Base Camp (Learn)", url: "https://base.org/camp" },
    ],
  },
  {
    id: 6,
    name: "Optimism",
    logo: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg",
    language: "Solidity, Vyper",
    consensusMechanism: "Optimistic Rollup",
    tps: "2,000+",
    finality: "~1 week (L1), instant (soft)",
    avgTxCost: "$0.05-$0.30",
    tvl: "$7B+",
    developerCount: "1,200+",
    grantFunding: "$250M+",
    launchYear: "2021",
    nftStandard: "ERC-721, ERC-1155",
    governance: "On-chain bicameral (Token + Citizens House)",
    interoperability: "OP Stack Superchain, Standard Bridge",
    keyProtocols: "Velodrome, Synthetix, Aave, Sonne",
    pros: [
      "Pioneering retroactive public goods funding (RetroPGF)",
      "OP Stack powers multiple chains (Base, Zora, Mode)",
      "Strong governance model with two-house system",
      "Massive grant funding through RPGF rounds",
    ],
    cons: [
      "7-day withdrawal period for L1 finality",
      "Centralized sequencer (decentralization roadmap in progress)",
      "Lower TVL than Arbitrum despite being first mover",
    ],
    bestFor: [
      "Public goods and open-source projects (via RPGF)",
      "Teams wanting to launch their own OP Stack chain",
      "Governance-focused protocols and DAOs",
    ],
    resources: [
      { title: "Optimism RetroPGF", url: "https://optimism.io/retropgf" },
      { title: "Optimism Developer Docs", url: "https://docs.optimism.io" },
      { title: "OP Stack Documentation", url: "https://stack.optimism.io" },
    ],
  },
  {
    id: 7,
    name: "Sui",
    logo: "https://cryptologos.cc/logos/sui-sui-logo.svg",
    language: "Move",
    consensusMechanism: "Delegated PoS (Mysticeti)",
    tps: "120,000+",
    finality: "~480ms",
    avgTxCost: "$0.001",
    tvl: "$1.5B+",
    developerCount: "800+",
    grantFunding: "$50M+",
    launchYear: "2023",
    nftStandard: "Sui Object Display",
    governance: "Sui Foundation led",
    interoperability: "Wormhole, Axelar",
    keyProtocols: "Cetus, NAVI, Scallop, Turbos",
    pros: [
      "Object-centric data model simplifies asset ownership",
      "Parallel transaction execution for massive throughput",
      "Move language prevents common smart contract bugs",
      "Sub-second finality",
    ],
    cons: [
      "Move is a new language with smaller developer pool",
      "Younger ecosystem with fewer battle-tested protocols",
      "Less tooling and library support compared to EVM chains",
    ],
    bestFor: [
      "Gaming and interactive applications requiring high TPS",
      "Novel asset ownership models (dynamic NFTs, composables)",
      "Developers prioritizing safety-first smart contract design",
    ],
    resources: [
      { title: "Sui Foundation Grants", url: "https://sui.io/grants-hub" },
      { title: "Sui Developer Docs", url: "https://docs.sui.io" },
      { title: "Move Language Book", url: "https://move-book.com" },
    ],
  },
  {
    id: 8,
    name: "Aptos",
    logo: "https://cryptologos.cc/logos/aptos-apt-logo.svg",
    language: "Move",
    consensusMechanism: "AptosBFT (PoS)",
    tps: "160,000+",
    finality: "~900ms",
    avgTxCost: "$0.001",
    tvl: "$1B+",
    developerCount: "600+",
    grantFunding: "$50M+",
    launchYear: "2022",
    nftStandard: "Aptos Token Standard",
    governance: "On-chain proposals (AIP process)",
    interoperability: "LayerZero, Wormhole",
    keyProtocols: "Thala, Liquidswap, Aries, Econia",
    pros: [
      "Built by former Meta/Diem engineers",
      "Block-STM parallel execution engine",
      "Move language with strong formal verification support",
      "Modular architecture for future upgradability",
    ],
    cons: [
      "Smaller ecosystem than Sui in the Move space",
      "Community growth has been slower than expected",
      "Limited DeFi composability compared to EVM chains",
    ],
    bestFor: [
      "Enterprise-grade applications needing high reliability",
      "Projects requiring formal verification of smart contracts",
      "Developers coming from the Meta/Diem ecosystem",
    ],
    resources: [
      { title: "Aptos Foundation Grants", url: "https://aptosfoundation.org/grants" },
      { title: "Aptos Developer Docs", url: "https://aptos.dev" },
      { title: "Aptos Explorer", url: "https://explorer.aptoslabs.com" },
    ],
  },
  {
    id: 9,
    name: "Avalanche",
    logo: "https://cryptologos.cc/logos/avalanche-avax-logo.svg",
    language: "Solidity, Vyper",
    consensusMechanism: "Avalanche Consensus (PoS)",
    tps: "4,500+",
    finality: "~1 second",
    avgTxCost: "$0.05-$0.25",
    tvl: "$1.5B+",
    developerCount: "1,200+",
    grantFunding: "$50M+",
    launchYear: "2020",
    nftStandard: "ERC-721, ERC-1155",
    governance: "On-chain proposals + Foundation",
    interoperability: "Avalanche Warp Messaging, Teleporter",
    keyProtocols: "Trader Joe, Benqi, GMX, Platypus",
    pros: [
      "Sub-second finality with Avalanche consensus",
      "Subnet architecture allows custom, app-specific chains",
      "Full EVM compatibility on C-Chain",
      "Strong enterprise partnerships (AWS, Deloitte)",
    ],
    cons: [
      "Ecosystem fragmentation across subnets",
      "Higher validator staking requirements (2,000 AVAX)",
      "C-Chain gas fees can spike during high activity",
    ],
    bestFor: [
      "Enterprise and institutional blockchain deployments",
      "Projects needing custom app-specific blockchains (subnets)",
      "Gaming studios wanting dedicated chain performance",
    ],
    resources: [
      { title: "Avalanche Multiverse Fund", url: "https://www.avax.network/ecosystem-grants" },
      { title: "Avalanche Developer Docs", url: "https://docs.avax.network" },
      { title: "Avalanche Academy", url: "https://academy.avax.network" },
    ],
  },
  {
    id: 10,
    name: "BNB Chain",
    logo: "https://cryptologos.cc/logos/bnb-bnb-logo.svg",
    language: "Solidity, Vyper",
    consensusMechanism: "Proof of Staked Authority",
    tps: "2,200+",
    finality: "~3 seconds",
    avgTxCost: "$0.05-$0.20",
    tvl: "$5B+",
    developerCount: "1,500+",
    grantFunding: "$100M+",
    launchYear: "2020",
    nftStandard: "BEP-721, BEP-1155",
    governance: "BEP proposals + Binance oversight",
    interoperability: "BNB Bridge, LayerZero",
    keyProtocols: "PancakeSwap, Venus, Alpaca Finance",
    pros: [
      "Massive user base from Binance exchange",
      "EVM compatible with low fees",
      "Strong TVL and trading volume",
      "Extensive Binance infrastructure support",
    ],
    cons: [
      "More centralized with only 21 validators",
      "Heavy dependence on Binance ecosystem",
      "Regulatory risks tied to Binance",
    ],
    bestFor: [
      "DeFi projects targeting high-volume trading users",
      "Projects wanting large existing user base via Binance",
      "EVM dApps seeking affordable deployment",
    ],
    resources: [
      { title: "BNB Chain Grants (MVB Program)", url: "https://www.bnbchain.org/en/bsc-mvb-program" },
      { title: "BNB Chain Developer Docs", url: "https://docs.bnbchain.org" },
      { title: "BNB Chain Ecosystem", url: "https://www.bnbchain.org/en/ecosystem" },
    ],
  },
  {
    id: 11,
    name: "Polkadot",
    logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg",
    language: "Rust (Substrate), ink!",
    consensusMechanism: "Nominated PoS (GRANDPA/BABE)",
    tps: "1,000+ per parachain",
    finality: "~12-60 seconds",
    avgTxCost: "$0.01-$0.10",
    tvl: "$800M+",
    developerCount: "2,000+",
    grantFunding: "$50M+",
    launchYear: "2020",
    nftStandard: "RMRK, Unique Network",
    governance: "On-chain (OpenGov referendum)",
    interoperability: "XCM (Cross-Consensus Messaging)",
    keyProtocols: "Acala, Moonbeam, Astar, Hydration",
    pros: [
      "True cross-chain interoperability via parachains",
      "Shared security model across all connected chains",
      "Substrate framework makes building custom chains easy",
      "On-chain governance with transparent treasury",
    ],
    cons: [
      "Parachain slot auctions are expensive and competitive",
      "Complex architecture has steep learning curve",
      "Slower mainstream adoption compared to EVM chains",
    ],
    bestFor: [
      "Cross-chain and interoperability-focused protocols",
      "Teams wanting to build application-specific blockchains",
      "Projects needing shared security without running validators",
    ],
    resources: [
      { title: "Web3 Foundation Grants", url: "https://grants.web3.foundation" },
      { title: "Polkadot Developer Docs", url: "https://docs.polkadot.network" },
      { title: "Substrate Documentation", url: "https://docs.substrate.io" },
    ],
  },
  {
    id: 12,
    name: "Cosmos",
    logo: "https://cryptologos.cc/logos/cosmos-atom-logo.svg",
    language: "Go (Cosmos SDK), Rust (CosmWasm)",
    consensusMechanism: "CometBFT (PoS)",
    tps: "10,000+ per zone",
    finality: "~6 seconds",
    avgTxCost: "$0.01",
    tvl: "$2B+",
    developerCount: "1,800+",
    grantFunding: "$40M+",
    launchYear: "2019",
    nftStandard: "CW-721 (CosmWasm)",
    governance: "On-chain (per-chain governance)",
    interoperability: "IBC (Inter-Blockchain Communication)",
    keyProtocols: "Osmosis, dYdX, Injective, Stride",
    pros: [
      "IBC protocol enables seamless cross-chain communication",
      "Cosmos SDK is the most popular framework for building L1s",
      "Sovereign chains with full governance independence",
      "Active developer community with mature tooling",
    ],
    cons: [
      "No shared security by default (each chain secures itself)",
      "ATOM token value proposition is debated",
      "Ecosystem can feel fragmented across many sovereign zones",
    ],
    bestFor: [
      "Building sovereign application-specific blockchains",
      "DeFi protocols needing cross-chain liquidity (via IBC)",
      "Projects prioritizing chain independence and governance",
    ],
    resources: [
      { title: "Interchain Foundation Grants", url: "https://interchain.io/funding" },
      { title: "Cosmos Developer Docs", url: "https://docs.cosmos.network" },
      { title: "CosmWasm Documentation", url: "https://docs.cosmwasm.com" },
    ],
  },
  {
    id: 13,
    name: "NEAR",
    logo: "https://cryptologos.cc/logos/near-protocol-near-logo.svg",
    language: "Rust, JavaScript/TypeScript",
    consensusMechanism: "Nightshade (Sharded PoS)",
    tps: "100,000+ (with sharding)",
    finality: "~1-2 seconds",
    avgTxCost: "$0.001",
    tvl: "$500M+",
    developerCount: "1,200+",
    grantFunding: "$50M+",
    launchYear: "2020",
    nftStandard: "NEP-171",
    governance: "NEAR Digital Collective (NDC)",
    interoperability: "Rainbow Bridge (Ethereum), Aurora",
    keyProtocols: "Ref Finance, Burrow, Meta Pool",
    pros: [
      "JavaScript SDK lowers barrier for web developers",
      "Human-readable account names (alice.near)",
      "Dynamic sharding for scalability",
      "Strong focus on developer experience and onboarding",
    ],
    cons: [
      "Smaller DeFi ecosystem than leading chains",
      "Sharding implementation is still evolving",
      "Less visibility compared to Ethereum L2s",
    ],
    bestFor: [
      "Web2 developers transitioning to Web3",
      "Social and community-driven applications",
      "Projects prioritizing user-friendly onboarding",
    ],
    resources: [
      { title: "NEAR Foundation Grants", url: "https://near.org/ecosystem/get-funding" },
      { title: "NEAR Developer Docs", url: "https://docs.near.org" },
      { title: "NEAR Academy", url: "https://near.academy" },
    ],
  },
  {
    id: 14,
    name: "zkSync Era",
    logo: "https://placehold.co/100x100/EEE/999?text=zk",
    language: "Solidity, Vyper, Zinc",
    consensusMechanism: "ZK Rollup",
    tps: "2,000+",
    finality: "~1 hour (L1 proof), instant (soft)",
    avgTxCost: "$0.05-$0.25",
    tvl: "$900M+",
    developerCount: "800+",
    grantFunding: "$200M+",
    launchYear: "2023",
    nftStandard: "ERC-721, ERC-1155",
    governance: "ZK Nation (ZK token governance)",
    interoperability: "zkSync Bridge, Hyperchain architecture",
    keyProtocols: "SyncSwap, Mute, SpaceFi, ZeroLend",
    pros: [
      "ZK proofs provide stronger security guarantees than optimistic rollups",
      "Native account abstraction built into the protocol",
      "No 7-day withdrawal period — faster L1 finality",
      "Hyperchain vision for network of ZK-powered chains",
    ],
    cons: [
      "ZK proof generation is computationally expensive",
      "Some Solidity features have limited compatibility",
      "Smaller ecosystem compared to Arbitrum and Optimism",
    ],
    bestFor: [
      "Privacy-focused applications leveraging ZK proofs",
      "Projects needing faster withdrawal to L1",
      "Account abstraction and gasless transaction UX",
    ],
    resources: [
      { title: "zkSync Grants & Fellowship", url: "https://zknation.io" },
      { title: "zkSync Developer Docs", url: "https://docs.zksync.io" },
      { title: "Matter Labs GitHub", url: "https://github.com/matter-labs" },
    ],
  },
  {
    id: 15,
    name: "StarkNet",
    logo: "https://placehold.co/100x100/EEE/999?text=SN",
    language: "Cairo",
    consensusMechanism: "ZK Rollup (STARK proofs)",
    tps: "1,000+",
    finality: "~2 hours (L1 proof), instant (soft)",
    avgTxCost: "$0.01-$0.10",
    tvl: "$400M+",
    developerCount: "700+",
    grantFunding: "$50M+",
    launchYear: "2022",
    nftStandard: "SRC-5 (StarkNet)",
    governance: "Starknet Foundation + STRK token",
    interoperability: "StarkGate Bridge, L1-L2 messaging",
    keyProtocols: "JediSwap, mySwap, zkLend, Ekubo",
    pros: [
      "STARK proofs are quantum-resistant (no trusted setup)",
      "Cairo language designed for provable computation",
      "Native account abstraction from day one",
      "Strong academic and cryptographic foundations",
    ],
    cons: [
      "Cairo is a completely new language — steep learning curve",
      "Slower proving times than some ZK competitors",
      "Smaller DeFi TVL and user base",
    ],
    bestFor: [
      "Applications requiring provable computation",
      "Projects needing quantum-resistant security",
      "Teams with strong cryptographic expertise",
    ],
    resources: [
      { title: "Starknet Foundation Grants", url: "https://www.starknet.io/grants" },
      { title: "Starknet Developer Docs", url: "https://docs.starknet.io" },
      { title: "Cairo Book", url: "https://book.cairo-lang.org" },
    ],
  },
  {
    id: 16,
    name: "TON",
    logo: "https://placehold.co/100x100/EEE/999?text=TON",
    language: "FunC, Tact",
    consensusMechanism: "BFT PoS (Catchain)",
    tps: "100,000+",
    finality: "~5 seconds",
    avgTxCost: "$0.005",
    tvl: "$700M+",
    developerCount: "1,000+",
    grantFunding: "$25M+",
    launchYear: "2022",
    nftStandard: "TEP-62 (TON NFT)",
    governance: "TON Foundation led",
    interoperability: "TON Bridge, cross-chain swaps",
    keyProtocols: "STON.fi, DeDust, Evaa Protocol",
    pros: [
      "Deep Telegram integration — 900M+ potential users",
      "Dynamic sharding for unlimited scalability",
      "Built-in TON DNS for human-readable addresses",
      "Mini-apps ecosystem within Telegram",
    ],
    cons: [
      "FunC language is unconventional and harder to learn",
      "Centralized around Telegram ecosystem",
      "Asynchronous messaging model differs from most chains",
    ],
    bestFor: [
      "Telegram bots and mini-app games",
      "Consumer apps targeting Telegram's massive user base",
      "Payment and micropayment applications",
    ],
    resources: [
      { title: "TON Foundation Grants", url: "https://ton.org/grants" },
      { title: "TON Developer Docs", url: "https://docs.ton.org" },
      { title: "Tact Language Docs", url: "https://docs.tact-lang.org" },
    ],
  },
  {
    id: 17,
    name: "Cardano",
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.svg",
    language: "Plutus (Haskell), Aiken",
    consensusMechanism: "Ouroboros (PoS)",
    tps: "250+",
    finality: "~20 seconds",
    avgTxCost: "$0.10-$0.30",
    tvl: "$500M+",
    developerCount: "1,500+",
    grantFunding: "$30M+",
    launchYear: "2017",
    nftStandard: "Native tokens (CIP-25)",
    governance: "On-chain (Project Catalyst, Voltaire)",
    interoperability: "Cardano Bridge, Milkomeda (EVM sidechain)",
    keyProtocols: "Minswap, SundaeSwap, Liqwid, JPG Store",
    pros: [
      "Peer-reviewed, research-driven development approach",
      "Extended UTXO model enables deterministic transactions",
      "Native tokens without smart contracts (low-cost minting)",
      "Project Catalyst is one of the largest DAOs ($1B+ treasury)",
    ],
    cons: [
      "Haskell/Plutus has a very steep learning curve",
      "Slower development pace due to academic rigor",
      "Lower TPS than most modern chains",
    ],
    bestFor: [
      "Projects in developing nations (Africa, Southeast Asia)",
      "Applications requiring formal verification",
      "Community-governed projects via Project Catalyst",
    ],
    resources: [
      { title: "Project Catalyst Funding", url: "https://projectcatalyst.io" },
      { title: "Cardano Developer Docs", url: "https://developers.cardano.org" },
      { title: "Aiken Smart Contracts", url: "https://aiken-lang.org" },
    ],
  },
];

const MAX_SELECTED = 4;

const COMPARISON_ROWS: { key: keyof Ecosystem; label: string }[] = [
  { key: "launchYear", label: "Launch Year" },
  { key: "language", label: "Language" },
  { key: "consensusMechanism", label: "Consensus" },
  { key: "tps", label: "TPS" },
  { key: "finality", label: "Finality" },
  { key: "avgTxCost", label: "Avg Tx Cost" },
  { key: "tvl", label: "TVL" },
  { key: "developerCount", label: "Developers" },
  { key: "grantFunding", label: "Grant Funding" },
  { key: "nftStandard", label: "NFT Standard" },
  { key: "governance", label: "Governance" },
  { key: "interoperability", label: "Interoperability" },
  { key: "keyProtocols", label: "Key Protocols" },
];

// ─── Sub-Components ────────────────────────────────────────────

function EcosystemChip({
  ecosystem,
  isSelected,
  onToggle,
  disabled,
}: {
  ecosystem: Ecosystem;
  isSelected: boolean;
  onToggle: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onToggle}
      disabled={disabled && !isSelected}
      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
        isSelected
          ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 border-gray-950 dark:border-white"
          : disabled
            ? "bg-gray-50 dark:bg-gray-900 text-gray-300 dark:text-gray-600 border-gray-100 dark:border-gray-800 cursor-not-allowed opacity-60"
            : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
      }`}
    >
      <img
        src={ecosystem.logo}
        alt={ecosystem.name}
        className="w-5 h-5 object-contain"
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.style.display = "none";
          const span = document.createElement("span");
          span.className = "text-xs font-bold text-gray-400 dark:text-gray-500";
          span.textContent = ecosystem.name.charAt(0);
          img.parentElement?.appendChild(span);
        }}
      />
      {ecosystem.name}
    </button>
  );
}

function ComparisonTable({ ecosystems }: { ecosystems: Ecosystem[] }) {
  const rowsWithDiff = useMemo(() => {
    return COMPARISON_ROWS.map((row) => {
      const values = ecosystems.map((eco) => eco[row.key] as string);
      const allSame = values.every((v) => v === values[0]);
      return { ...row, differs: !allSame };
    });
  }, [ecosystems]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-150">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider px-5 py-4 w-40">
                Metric
              </th>
              {ecosystems.map((eco) => (
                <th key={eco.id} className="text-left px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={eco.logo}
                      alt={eco.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = "none";
                      }}
                    />
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {eco.name}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowsWithDiff.map((row, i) => (
              <tr
                key={row.key}
                className={`border-b border-gray-50 dark:border-gray-800/50 last:border-b-0 ${
                  row.differs
                    ? "bg-amber-50 dark:bg-amber-900/20"
                    : i % 2 === 1
                      ? "bg-gray-50/50 dark:bg-gray-800/20"
                      : ""
                }`}
              >
                <td className="px-5 py-3.5 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {row.label}
                </td>
                {ecosystems.map((eco) => (
                  <td
                    key={eco.id}
                    className="px-5 py-3.5 text-sm text-gray-900 dark:text-white font-medium"
                  >
                    {eco[row.key] as string}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function EcosystemDetailCard({
  ecosystem,
  index,
}: {
  ecosystem: Ecosystem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      {/* Card header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-800">
        <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden shrink-0">
          <img
            src={ecosystem.logo}
            alt={ecosystem.name}
            className="w-6 h-6 object-contain"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = "none";
              const span = document.createElement("span");
              span.className = "text-sm font-bold text-gray-400";
              span.textContent = ecosystem.name.charAt(0);
              img.parentElement?.appendChild(span);
            }}
          />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">{ecosystem.name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-500">{ecosystem.language}</p>
        </div>
      </div>

      <div className="px-5 py-5 space-y-5">
        {/* Pros */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2.5 flex items-center gap-1.5">
            <ThumbsUp className="w-4 h-4 text-emerald-500" />
            Pros
          </h4>
          <div className="space-y-1.5">
            {ecosystem.pros.map((pro, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="w-1.5 h-1.5 rounded-sm bg-emerald-400 dark:bg-emerald-500 mt-1.5 shrink-0" />
                {pro}
              </div>
            ))}
          </div>
        </div>

        {/* Cons */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2.5 flex items-center gap-1.5">
            <ThumbsDown className="w-4 h-4 text-red-500" />
            Cons
          </h4>
          <div className="space-y-1.5">
            {ecosystem.cons.map((con, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="w-1.5 h-1.5 rounded-sm bg-red-400 dark:bg-red-500 mt-1.5 shrink-0" />
                {con}
              </div>
            ))}
          </div>
        </div>

        {/* Best for */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2.5 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-blue-500" />
            Best For
          </h4>
          <div className="space-y-1.5">
            {ecosystem.bestFor.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="w-1.5 h-1.5 rounded-sm bg-blue-400 dark:bg-blue-500 mt-1.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2.5 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            Resources
          </h4>
          <div className="space-y-2">
            {ecosystem.resources.map((res, i) => (
              <a
                key={i}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 no-underline group transition-all"
              >
                <span className="flex-1 min-w-0 text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                  {res.title}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function EcosystemComparePage() {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggleEcosystem = (id: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else if (next.size < MAX_SELECTED) {
        next.add(id);
      }
      return next;
    });
  };

  const selectedEcosystems = useMemo(
    () => ECOSYSTEMS.filter((eco) => selected.has(eco.id)),
    [selected]
  );

  return (
    <div className="relative pb-12">
      <SEO
        title="Ecosystem Compare"
        description="Compare blockchain ecosystems side-by-side. Analyze language, TPS, fees, TVL, developer activity, and grant funding across Ethereum, Solana, Polygon, and more."
        keywords="blockchain compare, ecosystem comparison, Ethereum vs Solana, blockchain grants, web3 ecosystems, DeFi ecosystems, blockchain TPS, developer grants"
        noIndex
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-amber-100 dark:bg-amber-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10 mt-6"
      >
        <Link
          to="/student/grants"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4 no-underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Grants
        </Link>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          Ecosystem Compare
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-lg mx-auto">
          Compare blockchain ecosystems side-by-side to find the best fit for your project
        </p>
      </motion.div>

      {/* Ecosystem selector */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
            Select Ecosystems
          </h2>
          <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
            {selected.size} / {MAX_SELECTED} selected
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {ECOSYSTEMS.map((eco) => (
            <EcosystemChip
              key={eco.id}
              ecosystem={eco}
              isSelected={selected.has(eco.id)}
              onToggle={() => toggleEcosystem(eco.id)}
              disabled={selected.size >= MAX_SELECTED}
            />
          ))}
        </div>

        {selected.size > 0 && (
          <button
            onClick={() => setSelected(new Set())}
            className="mt-3 text-xs text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline underline-offset-2 transition-colors"
          >
            Clear selection
          </button>
        )}
      </motion.div>

      {/* Comparison table */}
      {selectedEcosystems.length >= 2 ? (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <h2 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              Comparison
            </h2>
          </div>
          <ComparisonTable ecosystems={selectedEcosystems} />
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 flex items-center gap-1.5">
            <span className="inline-block w-3 h-2 rounded-sm bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800" />
            Highlighted rows indicate differing values across selected ecosystems
          </p>
        </div>
      ) : selected.size === 1 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-center"
        >
          <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Select at least one more ecosystem to see the comparison table
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            You can compare up to {MAX_SELECTED} ecosystems at once
          </p>
        </motion.div>
      ) : null}

      {/* Detail cards */}
      {selectedEcosystems.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <h2 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              Ecosystem Details
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {selectedEcosystems.map((eco, i) => (
              <EcosystemDetailCard key={eco.id} ecosystem={eco} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {selected.size === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700"
        >
          <Layers className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
            No ecosystems selected
          </h3>
          <p className="text-sm text-gray-400 dark:text-gray-500 max-w-sm mx-auto">
            Select 2-4 ecosystems above to compare them side-by-side. You will see a detailed
            breakdown of language, performance, costs, and grant opportunities.
          </p>
        </motion.div>
      )}
    </div>
  );
}
