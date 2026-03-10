import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ChevronDown, Search, ExternalLink, Code2,
  Zap, Flame, Shield, Clock, Layers, Github,
} from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../../../components/SEO";

// ─── Types ─────────────────────────────────────────────────────
type Difficulty = "Beginner" | "Intermediate" | "Advanced";

interface ProjectIdea {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  ecosystem: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
  estimatedTime: string;
  resources: { title: string; url: string }[];
  tags: string[];
  githubUrl?: string;
}

// ─── Data ──────────────────────────────────────────────────────
const DIFFICULTY_CONFIG: Record<Difficulty, { color: string; bg: string; icon: typeof Zap }> = {
  Beginner: { color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/30", icon: Zap },
  Intermediate: { color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/30", icon: Flame },
  Advanced: { color: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-900/30", icon: Shield },
};

const PROJECTS: ProjectIdea[] = [
  // ── Beginner ────────────────────────────────────────────────
  {
    id: 1,
    title: "ERC-20 Token with Faucet",
    description: "Create your own token and build a faucet dApp that distributes free tokens to users on a testnet. Covers the full token lifecycle from creation to distribution.",
    difficulty: "Beginner",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "ethers.js"],
    features: [
      "Deploy an ERC-20 token using OpenZeppelin",
      "Build a faucet contract that drips tokens every 24 hours per address",
      "Frontend with wallet connection and claim button",
      "Display user's token balance in real-time",
      "Rate-limiting to prevent abuse (one claim per day per address)",
    ],
    learningOutcomes: [
      "ERC-20 standard and token mechanics",
      "Mapping-based access patterns in Solidity",
      "Frontend-to-contract interaction with ethers.js",
      "Block timestamp usage for time-based logic",
    ],
    estimatedTime: "1-2 weeks",
    resources: [
      { title: "OpenZeppelin ERC-20 Docs", url: "https://docs.openzeppelin.com/contracts/erc20" },
      { title: "Hardhat Tutorial", url: "https://hardhat.org/tutorial" },
    ],
    tags: ["ERC-20", "Token", "Faucet", "Beginner"],
    githubUrl: "https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20",
  },
  {
    id: 2,
    title: "NFT Minting Page",
    description: "Build a complete NFT collection with metadata on IPFS and a minting page. Users connect their wallet, pay a mint price, and receive a unique NFT.",
    difficulty: "Beginner",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "IPFS/Pinata", "wagmi"],
    features: [
      "ERC-721 contract with configurable supply cap and mint price",
      "Upload art and metadata to IPFS via Pinata",
      "Minting page with wallet connection and transaction status",
      "Gallery view showing all minted NFTs",
      "Owner-only withdraw function for collected ETH",
    ],
    learningOutcomes: [
      "ERC-721 standard and token URIs",
      "IPFS for decentralized file storage",
      "Payable functions and ETH handling in contracts",
      "Supply management and minting limits",
    ],
    estimatedTime: "1-2 weeks",
    resources: [
      { title: "OpenZeppelin ERC-721", url: "https://docs.openzeppelin.com/contracts/erc721" },
      { title: "Pinata IPFS Docs", url: "https://docs.pinata.cloud" },
    ],
    tags: ["NFT", "ERC-721", "IPFS", "Minting"],
    githubUrl: "https://github.com/scaffold-eth/scaffold-eth-2",
  },
  {
    id: 3,
    title: "On-Chain Voting System",
    description: "A decentralized voting contract where the contract creator defines proposals and any token holder can cast one vote per proposal. Results are transparent and immutable.",
    difficulty: "Beginner",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "ethers.js"],
    features: [
      "Create proposals with title and description",
      "One vote per address per proposal (enforced on-chain)",
      "Real-time vote counts displayed on frontend",
      "Voting deadline per proposal using block timestamps",
      "Event emission for vote tracking",
    ],
    learningOutcomes: [
      "Mapping and struct patterns in Solidity",
      "Access control with msg.sender",
      "Event emission and frontend event listening",
      "Time-based contract logic",
    ],
    estimatedTime: "1 week",
    resources: [
      { title: "Solidity by Example - Voting", url: "https://solidity-by-example.org/app/simple-vote/" },
    ],
    tags: ["Voting", "Governance", "DAO"],
    githubUrl: "https://github.com/solidity-by-example/solidity-by-example.github.io",
  },
  {
    id: 4,
    title: "Tip Jar dApp",
    description: "A simple dApp where users can send ETH tips to a creator's address with a message. The creator can withdraw accumulated tips at any time.",
    difficulty: "Beginner",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "wagmi"],
    features: [
      "Accept ETH tips with an on-chain message",
      "Display all tips with sender address and message",
      "Owner-only withdrawal function",
      "Total tips counter on the frontend",
      "Responsive UI with tip history feed",
    ],
    learningOutcomes: [
      "Payable functions and receiving ETH",
      "Struct arrays for on-chain data storage",
      "Withdrawal patterns (pull over push)",
      "Event-driven frontend updates",
    ],
    estimatedTime: "3-5 days",
    resources: [
      { title: "Solidity by Example - Sending ETH", url: "https://solidity-by-example.org/sending-ether/" },
    ],
    tags: ["Payments", "ETH", "Social"],
    githubUrl: "https://github.com/PatrickAlpworworths/hardhat-fund-me-fcc",
  },
  {
    id: 5,
    title: "On-Chain Todo List",
    description: "Store and manage a personal todo list entirely on-chain. Each user has their own list, and tasks can be added, toggled, and deleted.",
    difficulty: "Beginner",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "viem"],
    features: [
      "Add, toggle, and delete tasks per user address",
      "Tasks stored as structs with title, completed status, and timestamp",
      "Frontend CRUD interface synced with contract state",
      "Gas-efficient storage patterns",
      "Filter by completed/pending tasks on frontend",
    ],
    learningOutcomes: [
      "CRUD operations in Solidity",
      "Per-user data isolation with mappings",
      "Gas optimization for storage operations",
      "State synchronization between contract and UI",
    ],
    estimatedTime: "3-5 days",
    resources: [
      { title: "Foundry Book - Getting Started", url: "https://book.getfoundry.sh/getting-started/installation" },
    ],
    tags: ["CRUD", "Storage", "Utility"],
    githubUrl: "https://github.com/foundry-rs/foundry",
  },
  {
    id: 6,
    title: "Multi-Signature Wallet (Basic)",
    description: "A wallet that requires multiple owners to approve a transaction before it executes. The simplest version of the multi-sig pattern used by Gnosis Safe.",
    difficulty: "Beginner",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "ethers.js"],
    features: [
      "Set owners and required approval count at deployment",
      "Submit transaction proposals (destination, value, data)",
      "Owners approve or revoke approval",
      "Execute when approval threshold is met",
      "View pending and executed transactions",
    ],
    learningOutcomes: [
      "Multi-party authorization patterns",
      "Array and mapping combinations for access control",
      "Low-level call execution",
      "State machine patterns in contracts",
    ],
    estimatedTime: "1-2 weeks",
    resources: [
      { title: "Solidity by Example - Multi-Sig", url: "https://solidity-by-example.org/app/multi-sig-wallet/" },
      { title: "Safe (Gnosis) Documentation", url: "https://docs.safe.global" },
    ],
    tags: ["Multi-sig", "Security", "Wallet"],
    githubUrl: "https://github.com/safe-global/safe-smart-account",
  },
  {
    id: 7,
    title: "Token Airdrop Contract",
    description: "Build a contract that distributes ERC-20 tokens to a list of addresses in a single transaction using a Merkle tree for gas-efficient proof verification.",
    difficulty: "Beginner",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "merkletreejs"],
    features: [
      "Generate Merkle tree from list of eligible addresses and amounts",
      "On-chain Merkle proof verification for claims",
      "Prevent double-claiming with a bitmap or mapping",
      "Claim page where users connect wallet and claim their allocation",
      "Admin function to set the Merkle root",
    ],
    learningOutcomes: [
      "Merkle tree construction and verification",
      "Gas-efficient airdrop distribution",
      "Cryptographic proofs in smart contracts",
      "Off-chain data with on-chain verification",
    ],
    estimatedTime: "1-2 weeks",
    resources: [
      { title: "OpenZeppelin MerkleProof", url: "https://docs.openzeppelin.com/contracts/utilities#MerkleProof" },
    ],
    tags: ["Airdrop", "Merkle", "Distribution"],
    githubUrl: "https://github.com/Uniswap/merkle-distributor",
  },
  {
    id: 8,
    title: "ERC-4626 Tokenized Vault",
    description: "Build a standard yield-bearing vault that accepts deposits, invests in a strategy, and issues shares proportional to the depositor's contribution.",
    difficulty: "Beginner",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "wagmi"],
    features: [
      "Implement the full ERC-4626 interface for deposit/withdraw/mint/redeem",
      "Share price calculation based on total assets and total supply",
      "Simple mock yield strategy (e.g., fixed 5% APY per block)",
      "Frontend showing vault TVL, share price, and user balance",
      "Preview functions for estimating deposit/withdrawal amounts",
    ],
    learningOutcomes: [
      "ERC-4626 tokenized vault standard",
      "Share-based accounting for DeFi",
      "Rounding and precision in financial contracts",
      "Composable DeFi building blocks",
    ],
    estimatedTime: "1 week",
    resources: [
      { title: "EIP-4626 Specification", url: "https://eips.ethereum.org/EIPS/eip-4626" },
      { title: "Solmate ERC-4626 Implementation", url: "https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC4626.sol" },
    ],
    tags: ["ERC-4626", "Vault", "Yield", "DeFi"],
    githubUrl: "https://github.com/transmissions11/solmate",
  },
  {
    id: 9,
    title: "Escrow Contract",
    description: "A trustless escrow that holds funds until both buyer and seller confirm, with dispute resolution through a neutral arbiter and automatic timeout refunds.",
    difficulty: "Beginner",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "ethers.js"],
    features: [
      "Buyer deposits ETH or ERC-20 tokens into escrow",
      "Seller confirms delivery, triggering release of funds",
      "Dispute mechanism with arbiter voting",
      "Auto-refund if seller doesn't confirm within deadline",
      "Escrow status tracking (Created, Funded, Delivered, Disputed, Resolved)",
    ],
    learningOutcomes: [
      "State machine design patterns",
      "Three-party interaction models",
      "Timeout-based refund mechanisms",
      "Role-based access control",
    ],
    estimatedTime: "1 week",
    resources: [
      { title: "Solidity by Example - Escrow", url: "https://solidity-by-example.org" },
    ],
    tags: ["Escrow", "Payments", "Trust"],
    githubUrl: "https://github.com/OpenZeppelin/openzeppelin-contracts",
  },
  {
    id: 10,
    title: "Soulbound Token (SBT) Badge System",
    description: "Issue non-transferable tokens as achievement badges or credentials. Organizations attest and users display them as on-chain reputation.",
    difficulty: "Beginner",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "wagmi"],
    features: [
      "ERC-5192 soulbound token that reverts on transfer",
      "Issuer contract where authorized addresses mint badges",
      "Multiple badge types with metadata and images on IPFS",
      "Profile page showing all SBTs held by an address",
      "Revocation mechanism for issuers",
    ],
    learningOutcomes: [
      "Non-transferable token design (ERC-5192)",
      "On-chain identity and reputation",
      "Issuer-authority model",
      "Metadata standards for badges",
    ],
    estimatedTime: "1 week",
    resources: [
      { title: "EIP-5192 Minimal Soulbound NFTs", url: "https://eips.ethereum.org/EIPS/eip-5192" },
      { title: "Vitalik's Soulbound Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763" },
    ],
    tags: ["SBT", "Identity", "Reputation", "Credentials"],
    githubUrl: "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-5192.md",
  },

  // ── Intermediate ────────────────────────────────────────────
  {
    id: 11,
    title: "DEX / Automated Market Maker",
    description: "Build a simplified Uniswap V2-style AMM with token pair pools, liquidity provision, and token swaps using the constant product formula (x * y = k).",
    difficulty: "Intermediate",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "wagmi", "viem"],
    features: [
      "Factory contract that creates pair pools for any two ERC-20 tokens",
      "Add and remove liquidity (mint/burn LP tokens)",
      "Token-to-token swaps with constant product formula",
      "0.3% swap fee distributed to liquidity providers",
      "Price impact calculation and slippage protection",
      "Frontend with swap interface, pool creation, and liquidity management",
    ],
    learningOutcomes: [
      "Constant product AMM mathematics",
      "Factory-clone deployment pattern",
      "LP token minting and burning",
      "Price calculation and slippage mechanics",
    ],
    estimatedTime: "3-5 weeks",
    resources: [
      { title: "Uniswap V2 Whitepaper", url: "https://uniswap.org/whitepaper.pdf" },
      { title: "Programming DeFi: Uniswap V2", url: "https://jeiwan.net/posts/programming-defi-uniswapv2-1/" },
    ],
    tags: ["DEX", "AMM", "DeFi", "Liquidity"],
    githubUrl: "https://github.com/Uniswap/v2-core",
  },
  {
    id: 12,
    title: "NFT Marketplace",
    description: "A peer-to-peer marketplace where users list NFTs for sale, other users buy them, and the platform takes a small fee. Supports ERC-721 tokens from any collection.",
    difficulty: "Intermediate",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "The Graph", "wagmi"],
    features: [
      "List any ERC-721 NFT for a fixed price",
      "Buy listed NFTs with automatic royalty distribution",
      "Cancel listings and update prices",
      "Platform fee (2-5%) on each sale",
      "Collection pages showing all NFTs from a contract",
      "Activity feed of recent sales and listings",
    ],
    learningOutcomes: [
      "Escrow and marketplace patterns",
      "ERC-721 approval and transfer flows",
      "Fee distribution in smart contracts",
      "Indexing on-chain events with The Graph",
    ],
    estimatedTime: "4-6 weeks",
    resources: [
      { title: "The Graph - Subgraph Development", url: "https://thegraph.com/docs/en/developing/creating-a-subgraph/" },
      { title: "OpenZeppelin ERC-721 Utils", url: "https://docs.openzeppelin.com/contracts/erc721" },
    ],
    tags: ["NFT", "Marketplace", "ERC-721"],
    githubUrl: "https://github.com/ProjectOpenSea/seaport",
  },
  {
    id: 13,
    title: "DAO Governance Dashboard",
    description: "Build a governance platform where token holders create proposals, vote, and execute on-chain actions. Uses OpenZeppelin Governor as the foundation.",
    difficulty: "Intermediate",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "wagmi", "ethers.js"],
    features: [
      "Governance token (ERC-20Votes) with delegation",
      "Governor contract with configurable voting period and quorum",
      "Timelock controller for delayed execution",
      "Proposal creation, voting, and execution UI",
      "Delegate voting power to another address",
      "Proposal history with status tracking",
    ],
    learningOutcomes: [
      "OpenZeppelin Governor architecture",
      "Token-based voting and delegation",
      "Timelock patterns for secure execution",
      "Governance proposal lifecycle",
    ],
    estimatedTime: "3-5 weeks",
    resources: [
      { title: "OpenZeppelin Governor Guide", url: "https://docs.openzeppelin.com/contracts/governance" },
      { title: "Tally - Governance Explorer", url: "https://www.tally.xyz" },
    ],
    tags: ["DAO", "Governance", "Voting", "OpenZeppelin"],
    githubUrl: "https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/governance",
  },
  {
    id: 14,
    title: "Staking Platform",
    description: "Users deposit ERC-20 tokens into a staking contract and earn rewards over time. Supports flexible and locked staking periods with different APY tiers.",
    difficulty: "Intermediate",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "wagmi"],
    features: [
      "Stake tokens with flexible or locked (30/60/90 day) periods",
      "Reward calculation based on staking duration and amount",
      "Claim rewards without unstaking",
      "Early withdrawal penalty for locked stakes",
      "Dashboard showing APY, total staked, and earned rewards",
      "Admin functions to add rewards to the pool",
    ],
    learningOutcomes: [
      "Reward distribution mathematics",
      "Time-locked financial contracts",
      "Precision math with fixed-point arithmetic",
      "Staking and reward claim patterns",
    ],
    estimatedTime: "2-4 weeks",
    resources: [
      { title: "Synthetix StakingRewards (reference)", url: "https://github.com/Synthetixio/synthetix/blob/develop/contracts/StakingRewards.sol" },
    ],
    tags: ["Staking", "DeFi", "Rewards", "Yield"],
    githubUrl: "https://github.com/Synthetixio/synthetix",
  },
  {
    id: 15,
    title: "Token-Gated Content Platform",
    description: "A content platform where specific content is only accessible to holders of certain NFTs or tokens. Combines on-chain verification with off-chain content delivery.",
    difficulty: "Intermediate",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "wagmi", "IPFS"],
    features: [
      "Token-gated access verification (check NFT or ERC-20 balance)",
      "Content creators set which tokens grant access",
      "Sign-In with Ethereum (SIWE) for authentication",
      "Encrypted content stored on IPFS, decrypted client-side",
      "Creator dashboard for managing gated content",
      "Tiered access based on token quantity",
    ],
    learningOutcomes: [
      "Token-gating patterns and balance verification",
      "Sign-In with Ethereum (EIP-4361)",
      "Client-side encryption and decryption",
      "Combining on-chain and off-chain data",
    ],
    estimatedTime: "3-4 weeks",
    resources: [
      { title: "Sign-In with Ethereum", url: "https://login.xyz" },
      { title: "Lit Protocol - Token Gating", url: "https://developer.litprotocol.com" },
    ],
    tags: ["Token-Gating", "Content", "Access Control"],
    githubUrl: "https://github.com/spruceid/siwe",
  },
  {
    id: 16,
    title: "On-Chain Subscription Service",
    description: "A recurring payment contract where users subscribe by approving token spending, and the service provider can pull payments at regular intervals.",
    difficulty: "Intermediate",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "viem"],
    features: [
      "Subscribe with ERC-20 token approval",
      "Configurable billing periods (weekly, monthly, annual)",
      "Automatic payment collection by service provider",
      "Grace period before cancellation for failed payments",
      "Subscriber dashboard with payment history",
      "Multiple subscription tiers with different pricing",
    ],
    learningOutcomes: [
      "ERC-20 approve/transferFrom pattern",
      "Recurring payment logic in smart contracts",
      "Time-based state transitions",
      "Pull payment patterns",
    ],
    estimatedTime: "2-3 weeks",
    resources: [
      { title: "EIP-1337: Subscriptions on Ethereum", url: "https://eips.ethereum.org/EIPS/eip-1337" },
    ],
    tags: ["Subscription", "Payments", "SaaS"],
    githubUrl: "https://github.com/ethereum/EIPs",
  },
  {
    id: 17,
    title: "Cross-Chain Token Bridge UI",
    description: "Build a frontend for bridging tokens between L1 and L2 (e.g., Ethereum to Arbitrum). Uses existing bridge contracts - you build the UI and tracking layer.",
    difficulty: "Intermediate",
    ecosystem: "Multi-chain",
    techStack: ["React", "wagmi", "viem", "TypeScript"],
    features: [
      "Network selector (source and destination chain)",
      "Token selection with balance display on both chains",
      "Bridge transaction execution with step-by-step status",
      "Transaction history tracking (pending, confirmed, finalized)",
      "Estimated time and fees display",
      "Chain switching prompts when user is on wrong network",
    ],
    learningOutcomes: [
      "Multi-chain frontend architecture",
      "Chain switching and network management with wagmi",
      "Bridge API integration (Across, Socket, LI.FI)",
      "Transaction lifecycle tracking across chains",
    ],
    estimatedTime: "3-4 weeks",
    resources: [
      { title: "LI.FI SDK - Cross-Chain Bridging", url: "https://docs.li.fi" },
      { title: "wagmi Multi-Chain Config", url: "https://wagmi.sh/react/guides/chain-properties" },
    ],
    tags: ["Bridge", "Cross-Chain", "L2", "Multi-chain"],
    githubUrl: "https://github.com/lifinance/sdk",
  },
  {
    id: 18,
    title: "Yield Aggregator",
    description: "Automatically routes user deposits to the highest-yielding lending protocol. Periodically rebalances across Aave, Compound, and other ERC-4626 vaults.",
    difficulty: "Intermediate",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "wagmi", "Chainlink"],
    features: [
      "ERC-4626 vault wrapping multiple yield sources",
      "Strategy comparison: query APY from Aave, Compound, etc.",
      "Auto-rebalance when yield differential exceeds threshold",
      "Harvest function that compounds earned rewards",
      "Performance fee (10-20%) on profits",
      "Dashboard showing current allocation, APY, and historical returns",
    ],
    learningOutcomes: [
      "Yield farming strategy architecture",
      "Multi-protocol integration patterns",
      "ERC-4626 composability in practice",
      "Gas-aware rebalancing logic",
    ],
    estimatedTime: "4-6 weeks",
    resources: [
      { title: "Yearn V3 Architecture", url: "https://docs.yearn.fi/developers/v3/overview" },
      { title: "ERC-4626 Alliance", url: "https://erc4626.info" },
    ],
    tags: ["Yield", "Aggregator", "DeFi", "Vault"],
    githubUrl: "https://github.com/yearn/yearn-vaults-v3",
  },
  {
    id: 19,
    title: "On-Chain Auction House",
    description: "A decentralized auction platform supporting English (ascending) and Dutch (descending) auction types for NFTs and token bundles.",
    difficulty: "Intermediate",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "wagmi", "The Graph"],
    features: [
      "English auction: bids increase, highest bidder wins at deadline",
      "Dutch auction: price decreases over time, first buyer wins",
      "Reserve price and minimum bid increment enforcement",
      "Automatic refund of outbid deposits",
      "Auction extension if bid placed in final minutes",
      "Auction history and analytics dashboard",
    ],
    learningOutcomes: [
      "Auction mechanism design",
      "Time-dependent pricing logic",
      "Reentrancy protection for refunds",
      "Pull vs push payment patterns in auctions",
    ],
    estimatedTime: "2-4 weeks",
    resources: [
      { title: "Solidity by Example - English Auction", url: "https://solidity-by-example.org/app/english-auction/" },
      { title: "Solidity by Example - Dutch Auction", url: "https://solidity-by-example.org/app/dutch-auction/" },
    ],
    tags: ["Auction", "NFT", "Marketplace", "Mechanism Design"],
    githubUrl: "https://github.com/Zora-Community/zora-protocol",
  },
  {
    id: 20,
    title: "Decentralized Identity (DID) Resolver",
    description: "Build a DID registry where users anchor identity documents on-chain and resolvers look up public keys, service endpoints, and credentials for any DID.",
    difficulty: "Intermediate",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Hardhat", "React", "did-jwt", "ethers.js"],
    features: [
      "ERC-1056-compatible DID registry contract",
      "Attribute management (set, revoke public keys and service endpoints)",
      "DID document resolution from on-chain events",
      "JWT issuance and verification using DID keys",
      "Profile lookup page: enter DID, see resolved document",
      "Credential issuance UI for verified claims",
    ],
    learningOutcomes: [
      "W3C DID specification and resolution",
      "On-chain identity registry design",
      "JWT signing with Ethereum keys",
      "Verifiable credentials architecture",
    ],
    estimatedTime: "3-4 weeks",
    resources: [
      { title: "ERC-1056 Ethereum DID Registry", url: "https://github.com/uport-project/ethr-did-registry" },
      { title: "W3C DID Core Spec", url: "https://www.w3.org/TR/did-core/" },
    ],
    tags: ["DID", "Identity", "Credentials", "W3C"],
    githubUrl: "https://github.com/uport-project/ethr-did-registry",
  },

  // ── Advanced ────────────────────────────────────────────────
  {
    id: 21,
    title: "Lending and Borrowing Protocol",
    description: "A simplified Aave-style lending protocol where users deposit collateral, borrow other tokens, and face liquidation if their health factor drops below 1.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "Chainlink", "The Graph"],
    features: [
      "Multi-asset lending pools with supply and borrow",
      "Variable interest rates based on utilization",
      "Collateral factor and health factor calculation",
      "Liquidation mechanism with liquidator incentives",
      "Chainlink price feeds for asset valuation",
      "Dashboard showing positions, rates, and liquidation risk",
    ],
    learningOutcomes: [
      "Lending protocol architecture and math",
      "Interest rate models (utilization curve)",
      "Oracle integration for price feeds",
      "Liquidation mechanics and MEV considerations",
    ],
    estimatedTime: "6-10 weeks",
    resources: [
      { title: "Aave V3 Technical Paper", url: "https://github.com/aave/aave-v3-core/blob/master/techpaper/Aave_V3_Technical_Paper.pdf" },
      { title: "Chainlink Price Feeds", url: "https://docs.chain.link/data-feeds" },
    ],
    tags: ["Lending", "DeFi", "Liquidation", "Oracle"],
    githubUrl: "https://github.com/aave/aave-v3-core",
  },
  {
    id: 22,
    title: "ZK-Proof Verifier dApp",
    description: "Build a circuit in Circom that proves knowledge of a secret without revealing it, generate proofs client-side, and verify them on-chain with a Solidity verifier.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["Circom", "SnarkJS", "Solidity", "React"],
    features: [
      "Write a Circom circuit (e.g., prove you know preimage of a hash)",
      "Trusted setup ceremony for generating proving/verification keys",
      "Client-side proof generation with SnarkJS",
      "On-chain Groth16 verifier contract",
      "Frontend that generates proofs and submits to the verifier",
      "Use case: private voting, identity verification, or age proof",
    ],
    learningOutcomes: [
      "Zero-knowledge proof fundamentals",
      "Circom circuit design and constraints",
      "Trusted setup and key generation",
      "On-chain proof verification costs and patterns",
    ],
    estimatedTime: "4-6 weeks",
    resources: [
      { title: "Circom Documentation", url: "https://docs.circom.io" },
      { title: "SnarkJS - ZK Proof Library", url: "https://github.com/iden3/snarkjs" },
      { title: "ZK Learning Resources (0xPARC)", url: "https://learn.0xparc.org" },
    ],
    tags: ["ZK", "Privacy", "Circom", "Cryptography"],
    githubUrl: "https://github.com/iden3/circom",
  },
  {
    id: 23,
    title: "MEV Protection Tool",
    description: "Build a tool that detects potential sandwich attacks on pending transactions and submits them through Flashbots Protect to bypass the public mempool.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["TypeScript", "ethers.js", "Flashbots", "React"],
    features: [
      "Monitor pending mempool transactions for DEX swaps",
      "Simulate transactions to detect sandwich attack profitability",
      "Submit transactions via Flashbots Protect RPC",
      "Dashboard showing protected vs unprotected transaction stats",
      "Alert system for high-value transactions at risk",
      "Gas price analysis and optimal submission timing",
    ],
    learningOutcomes: [
      "Mempool monitoring and transaction analysis",
      "MEV (Maximal Extractable Value) mechanics",
      "Flashbots bundle submission",
      "Transaction simulation with state overrides",
    ],
    estimatedTime: "4-6 weeks",
    resources: [
      { title: "Flashbots Documentation", url: "https://docs.flashbots.net" },
      { title: "MEV Explore", url: "https://explore.flashbots.net" },
    ],
    tags: ["MEV", "Flashbots", "Security", "Mempool"],
    githubUrl: "https://github.com/flashbots/mev-share-client-ts",
  },
  {
    id: 24,
    title: "Cross-Chain Messaging Protocol",
    description: "Build a protocol that sends arbitrary messages between two EVM chains. Messages are verified using a relay network and can trigger contract execution on the destination chain.",
    difficulty: "Advanced",
    ecosystem: "Multi-chain",
    techStack: ["Solidity", "Foundry", "TypeScript", "Chainlink CCIP"],
    features: [
      "Sender contract on source chain that emits message events",
      "Relayer service that watches for events and submits proofs",
      "Receiver contract on destination chain that verifies and executes",
      "Message queue with retry logic for failed deliveries",
      "Dashboard showing message status across chains",
      "Fee estimation for cross-chain message delivery",
    ],
    learningOutcomes: [
      "Cross-chain communication architecture",
      "Event monitoring and relay design",
      "Message verification and replay protection",
      "Multi-chain deployment and testing",
    ],
    estimatedTime: "6-8 weeks",
    resources: [
      { title: "Chainlink CCIP Docs", url: "https://docs.chain.link/ccip" },
      { title: "LayerZero Documentation", url: "https://docs.layerzero.network" },
    ],
    tags: ["Cross-Chain", "Messaging", "Interoperability"],
    githubUrl: "https://github.com/LayerZero-Labs/LayerZero-v2",
  },
  {
    id: 25,
    title: "Concentrated Liquidity AMM",
    description: "Build a Uniswap V3-style AMM where liquidity providers choose a specific price range for their liquidity, dramatically improving capital efficiency.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "D3.js", "wagmi"],
    features: [
      "Tick-based price ranges for concentrated positions",
      "Position NFTs representing liquidity ranges",
      "Dynamic fee accumulation based on position bounds",
      "Swap routing through active tick ranges",
      "Liquidity depth visualization with D3.js charts",
      "Position management: add, remove, and collect fees",
    ],
    learningOutcomes: [
      "Concentrated liquidity mathematics",
      "Tick and price range mechanics",
      "Fixed-point math at Q96 precision",
      "Complex DeFi protocol architecture",
    ],
    estimatedTime: "8-12 weeks",
    resources: [
      { title: "Uniswap V3 Whitepaper", url: "https://uniswap.org/whitepaper-v3.pdf" },
      { title: "Uniswap V3 Development Book", url: "https://uniswapv3book.com" },
    ],
    tags: ["AMM", "DeFi", "Concentrated Liquidity", "Uniswap"],
    githubUrl: "https://github.com/Uniswap/v3-core",
  },
  {
    id: 26,
    title: "Decentralized Oracle Network",
    description: "Build a simplified oracle that aggregates price data from multiple off-chain sources, reaches consensus, and posts the result on-chain for other contracts to consume.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "Node.js", "TypeScript"],
    features: [
      "Oracle nodes fetch prices from multiple APIs (CoinGecko, CoinMarketCap)",
      "On-chain aggregation contract that accepts reports from whitelisted nodes",
      "Median calculation for price consensus",
      "Heartbeat updates at regular intervals",
      "Deviation-triggered updates for volatile price movements",
      "Consumer contract interface for reading aggregated prices",
    ],
    learningOutcomes: [
      "Oracle problem and trust assumptions",
      "Off-chain data aggregation strategies",
      "On-chain consensus mechanisms",
      "Economic incentives for honest reporting",
    ],
    estimatedTime: "5-8 weeks",
    resources: [
      { title: "Chainlink Architecture Overview", url: "https://docs.chain.link/architecture-overview/architecture-overview" },
      { title: "UMA Oracle Design", url: "https://docs.uma.xyz" },
    ],
    tags: ["Oracle", "Data Feeds", "Infrastructure"],
    githubUrl: "https://github.com/smartcontractkit/chainlink",
  },
  {
    id: 27,
    title: "Layer-2 Rollup Explorer",
    description: "Build a block explorer specifically for L2 rollups that shows batch submissions, state roots, challenge periods, and cross-layer message status.",
    difficulty: "Advanced",
    ecosystem: "Multi-chain",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "viem"],
    features: [
      "Index L2 blocks, transactions, and state roots",
      "Display batch submissions to L1 with proof status",
      "Track optimistic rollup challenge periods",
      "Cross-layer deposit and withdrawal status",
      "Contract interaction page with ABI decoding",
      "Address portfolio showing L2 token balances",
    ],
    learningOutcomes: [
      "Rollup architecture (optimistic vs ZK)",
      "State root verification and batch submission",
      "Chain indexing and data pipeline design",
      "L1-L2 message bridge mechanics",
    ],
    estimatedTime: "6-10 weeks",
    resources: [
      { title: "Optimism Docs - How Optimism Works", url: "https://docs.optimism.io" },
      { title: "Arbitrum Docs - Inside Arbitrum", url: "https://docs.arbitrum.io" },
    ],
    tags: ["L2", "Explorer", "Rollup", "Infrastructure"],
    githubUrl: "https://github.com/ethereum-optimism/optimism",
  },
  {
    id: 28,
    title: "Perpetual Futures DEX",
    description: "Build a simplified perpetual futures exchange with leverage, funding rates, and liquidation. Traders go long or short on assets with up to 10x leverage.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "Chainlink", "D3.js"],
    features: [
      "Open long/short positions with configurable leverage (1-10x)",
      "Mark price from Chainlink oracle vs index price for P&L",
      "Funding rate calculation (longs pay shorts or vice versa)",
      "Automatic liquidation when margin ratio drops below threshold",
      "Insurance fund to cover socialized losses",
      "Trading interface with candlestick chart and order book",
    ],
    learningOutcomes: [
      "Perpetual futures mechanics and funding rates",
      "Margin and leverage accounting",
      "Liquidation engine architecture",
      "Real-time financial data visualization",
    ],
    estimatedTime: "8-12 weeks",
    resources: [
      { title: "GMX V2 Architecture", url: "https://docs.gmx.io" },
      { title: "Perpetual Protocol Docs", url: "https://docs.perp.com" },
    ],
    tags: ["Perpetuals", "DeFi", "Leverage", "Trading"],
    githubUrl: "https://github.com/gmx-io/gmx-synthetics",
  },
  {
    id: 29,
    title: "Account Abstraction Wallet (ERC-4337)",
    description: "Build a smart contract wallet with social recovery, gas sponsorship, and batched transactions using the ERC-4337 standard. No EOA needed to get started.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "wagmi", "Pimlico"],
    features: [
      "Smart account contract implementing IAccount interface",
      "UserOperation bundling and submission to EntryPoint",
      "Paymaster for gasless transactions (sponsor user gas fees)",
      "Social recovery: guardians can rotate signing keys",
      "Batch multiple contract calls in a single UserOp",
      "Session keys for dApp permissions without wallet popups",
    ],
    learningOutcomes: [
      "ERC-4337 account abstraction architecture",
      "UserOperation lifecycle and validation",
      "Paymaster and gas sponsorship patterns",
      "Smart account security and recovery models",
    ],
    estimatedTime: "6-10 weeks",
    resources: [
      { title: "ERC-4337 Specification", url: "https://eips.ethereum.org/EIPS/eip-4337" },
      { title: "Pimlico Documentation", url: "https://docs.pimlico.io" },
      { title: "Alchemy Account Kit", url: "https://accountkit.alchemy.com" },
    ],
    tags: ["Account Abstraction", "ERC-4337", "Wallet", "Gasless"],
    githubUrl: "https://github.com/eth-infinitism/account-abstraction",
  },
  {
    id: 30,
    title: "On-Chain Options Protocol",
    description: "Build a European-style options protocol where users can write covered calls and cash-secured puts, with automated settlement at expiry using oracle prices.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "Chainlink", "wagmi"],
    features: [
      "Write covered call options (lock collateral, mint option tokens)",
      "Write cash-secured put options (lock stablecoins)",
      "Option token trading on a simple order book",
      "Automated settlement at expiry using Chainlink price at expiry",
      "Exercise ITM options and claim profit",
      "Greeks display (delta, implied volatility) on frontend",
    ],
    learningOutcomes: [
      "Options pricing and payoff structures",
      "Collateral locking and settlement patterns",
      "Time-dependent financial instruments on-chain",
      "Oracle-based automated settlement",
    ],
    estimatedTime: "8-12 weeks",
    resources: [
      { title: "Opyn Documentation", url: "https://docs.opyn.co" },
      { title: "Black-Scholes on Ethereum", url: "https://github.com/vyper-protocol/vyper-otc" },
    ],
    tags: ["Options", "DeFi", "Derivatives", "Settlement"],
    githubUrl: "https://github.com/opynfinance/squeeth-monorepo",
  },
  {
    id: 31,
    title: "Decentralized Insurance Pool",
    description: "Build a mutual insurance protocol where users stake into risk pools to cover smart contract exploits. Claim assessors vote on payouts and stakers earn premiums.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "The Graph", "wagmi"],
    features: [
      "Create insurance pools for specific protocols or risk categories",
      "Users purchase cover by paying premiums in ETH or stablecoins",
      "Stakers provide capital and earn premium yield",
      "Claim submission with evidence and on-chain voting by assessors",
      "Payout execution after successful claim vote",
      "Capital efficiency: underwrite multiple risks with single stake",
    ],
    learningOutcomes: [
      "Insurance protocol architecture",
      "Capital pooling and risk management",
      "Voting-based claim assessment",
      "Premium pricing and actuarial basics on-chain",
    ],
    estimatedTime: "8-12 weeks",
    resources: [
      { title: "Nexus Mutual Documentation", url: "https://docs.nexusmutual.io" },
      { title: "InsurAce Protocol Docs", url: "https://docs.insurace.io" },
    ],
    tags: ["Insurance", "DeFi", "Risk", "Staking"],
    githubUrl: "https://github.com/NexusMutual/smart-contracts",
  },
  {
    id: 32,
    title: "Prediction Market",
    description: "Build a decentralized prediction market where users bet on real-world outcomes. Markets resolve via oracle feeds or decentralized resolution mechanisms.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "UMA", "The Graph"],
    features: [
      "Create binary markets (Yes/No) on any event",
      "Automated market maker for continuous pricing of outcomes",
      "Oracle-based resolution using UMA optimistic oracle",
      "Liquidity provision for market making",
      "Market portfolio page showing open positions and P&L",
      "Market creation UI with resolution criteria and deadline",
    ],
    learningOutcomes: [
      "Prediction market mathematics (LMSR/CPMM)",
      "Optimistic oracle resolution patterns",
      "Market making and liquidity dynamics",
      "Information markets and price discovery",
    ],
    estimatedTime: "6-10 weeks",
    resources: [
      { title: "Polymarket Architecture", url: "https://docs.polymarket.com" },
      { title: "UMA Optimistic Oracle", url: "https://docs.uma.xyz/protocol-overview/how-does-umas-oracle-work" },
    ],
    tags: ["Prediction", "Oracle", "DeFi", "Markets"],
    githubUrl: "https://github.com/UMAprotocol/protocol",
  },
  {
    id: 33,
    title: "Privacy Mixer (Tornado-style)",
    description: "Build a privacy tool that breaks the on-chain link between sender and receiver using zero-knowledge proofs. Users deposit a fixed amount and withdraw to a new address.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Circom", "SnarkJS", "React", "MerkleTree"],
    features: [
      "Fixed-denomination deposits (0.1, 1, 10 ETH pools)",
      "Commitment-nullifier scheme for privacy",
      "Merkle tree of commitments stored on-chain",
      "ZK proof of membership without revealing which deposit is yours",
      "Withdrawal to any address with on-chain proof verification",
      "Relayer support so withdrawer doesn't need gas on new address",
    ],
    learningOutcomes: [
      "Privacy protocol architecture from first principles",
      "Commitment-nullifier cryptographic scheme",
      "Incremental Merkle tree implementation",
      "ZK circuit design for set membership proofs",
    ],
    estimatedTime: "8-12 weeks",
    resources: [
      { title: "Tornado Cash Architecture", url: "https://docs.tornado.ws" },
      { title: "Semaphore Protocol", url: "https://semaphore.pse.dev" },
    ],
    tags: ["Privacy", "ZK", "Mixer", "Cryptography"],
    githubUrl: "https://github.com/semaphore-protocol/semaphore",
  },
  {
    id: 34,
    title: "Liquid Staking Derivative",
    description: "Build an ETH liquid staking protocol that mints a receipt token (stETH-like) representing staked ETH, allowing users to earn staking yield while keeping liquidity.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "React", "wagmi", "Beacon Chain API"],
    features: [
      "Accept ETH deposits and mint proportional receipt tokens (lstETH)",
      "Rebasing or exchange-rate model for yield accrual",
      "Validator registration via deposit contract (testnet)",
      "Withdrawal queue with claim mechanism",
      "Oracle reporting of beacon chain balances",
      "Dashboard showing TVL, APR, and user positions",
    ],
    learningOutcomes: [
      "Liquid staking architecture and economics",
      "Rebasing vs exchange-rate token models",
      "Beacon chain interaction and validator management",
      "Withdrawal queue design for large-scale protocols",
    ],
    estimatedTime: "8-14 weeks",
    resources: [
      { title: "Lido Architecture", url: "https://docs.lido.fi/guides/steth-integration-guide" },
      { title: "Rocket Pool Documentation", url: "https://docs.rocketpool.net" },
    ],
    tags: ["Liquid Staking", "DeFi", "ETH", "Yield"],
    githubUrl: "https://github.com/lidofinance/lido-dao",
  },
  {
    id: 35,
    title: "Autonomous Trading Agent",
    description: "Build an on-chain trading bot that executes DCA (dollar-cost averaging) and limit order strategies via Gelato or Chainlink Automation, fully non-custodial.",
    difficulty: "Advanced",
    ecosystem: "Ethereum",
    techStack: ["Solidity", "Foundry", "Gelato", "React", "wagmi"],
    features: [
      "DCA strategy: auto-buy a token at regular intervals",
      "Limit orders: execute swap when price hits target",
      "Stop-loss: auto-sell if price drops below threshold",
      "Gelato/Chainlink Automation for keeper-based execution",
      "Strategy vault: users deposit and configure parameters",
      "Execution history and P&L tracking dashboard",
    ],
    learningOutcomes: [
      "Automated contract execution patterns",
      "Keeper network integration (Gelato, Chainlink Keepers)",
      "DCA and limit order mechanics on-chain",
      "Non-custodial strategy vault design",
    ],
    estimatedTime: "6-8 weeks",
    resources: [
      { title: "Gelato Automate Docs", url: "https://docs.gelato.network/web3-services/web3-functions" },
      { title: "Chainlink Automation", url: "https://docs.chain.link/chainlink-automation" },
    ],
    tags: ["Automation", "Trading", "DeFi", "Keepers"],
    githubUrl: "https://github.com/gelatodigital/automate",
  },
];

const ECOSYSTEMS = Array.from(new Set(PROJECTS.map((p) => p.ecosystem))).sort();

// ─── Project Card ────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: ProjectIdea; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = DIFFICULTY_CONFIG[project.difficulty];
  const DiffIcon = cfg.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-gray-100/50 dark:hover:shadow-gray-900/50 transition-all duration-300"
    >
      {/* Header */}
      <div
        className="flex items-start gap-4 px-5 py-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className={`w-9 h-9 rounded-xl ${cfg.bg} flex items-center justify-center shrink-0 mt-0.5`}>
          <DiffIcon className={`w-4 h-4 ${cfg.color}`} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-500 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${cfg.bg} ${cfg.color}`}>{project.difficulty}</span>
            <span className="px-2 py-0.5 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">{project.ecosystem}</span>
            <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
              <Clock className="w-3 h-3" />
              {project.estimatedTime}
            </span>
          </div>
        </div>

        <ChevronDown className={`w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 mt-1 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4">
              <div className="border-t border-gray-100 dark:border-gray-800 pt-4" />

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-3 h-3" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features to Build */}
              <div>
                <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Code2 className="w-3 h-3" />
                  Features to Build
                </h4>
                <ul className="space-y-1.5">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning Outcomes */}
              <div>
                <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">What You'll Learn</h4>
                <div className="space-y-1.5">
                  {project.learningOutcomes.map((lo, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      {lo}
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture & Source Code */}
              {project.githubUrl && (
                <div>
                  <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Github className="w-3 h-3" />
                    Architecture Reference
                  </h4>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 no-underline transition-all"
                  >
                    <Github className="w-4 h-4 shrink-0" />
                    <span className="truncate">{project.githubUrl.replace("https://github.com/", "")}</span>
                    <ExternalLink className="w-3 h-3 shrink-0 ml-auto" />
                  </a>
                </div>
              )}

              {/* Resources */}
              {project.resources.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Resources</h4>
                  <div className="space-y-1.5">
                    {project.resources.map((r, i) => (
                      <a
                        key={i}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 no-underline transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 shrink-0" />
                        {r.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-gray-50 dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export default function ProjectIdeasPage() {
  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | "ALL">("ALL");
  const [ecosystemFilter, setEcosystemFilter] = useState<string>("ALL");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (difficultyFilter !== "ALL" && p.difficulty !== difficultyFilter) return false;
      if (ecosystemFilter !== "ALL" && p.ecosystem !== ecosystemFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q)) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [search, difficultyFilter, ecosystemFilter]);

  const counts = {
    Beginner: PROJECTS.filter((p) => p.difficulty === "Beginner").length,
    Intermediate: PROJECTS.filter((p) => p.difficulty === "Intermediate").length,
    Advanced: PROJECTS.filter((p) => p.difficulty === "Advanced").length,
  };

  return (
    <div className="relative pb-12">
      <SEO title="Smart Contract Project Ideas - Grants" noIndex />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-pink-100 dark:bg-pink-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-violet-100 dark:bg-violet-900/20 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10 mt-6"
      >
        <Link to="/student/grants" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4 no-underline">
          <ArrowLeft className="w-4 h-4" />
          Grants
        </Link>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          Project <span className="text-gradient-accent">Ideas</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-lg mx-auto">
          {PROJECTS.length} smart contract projects from beginner to advanced - pick one and start building
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        {(["Beginner", "Intermediate", "Advanced"] as Difficulty[]).map((diff, i) => {
          const cfg = DIFFICULTY_CONFIG[diff];
          const DiffIcon = cfg.icon;
          return (
            <motion.div
              key={diff}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
            >
              <DiffIcon className={`w-6 h-6 ${cfg.color} mx-auto mb-3`} />
              <p className="font-display text-2xl font-bold text-gray-950 dark:text-white">{counts[diff]}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">{diff}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Search + Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="space-y-4 mb-8"
      >
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search projects - DEX, NFT, staking, oracle..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-5 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-300 transition-all"
          />
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setDifficultyFilter("ALL")}
            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all border ${
              difficultyFilter === "ALL"
                ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 border-gray-950 dark:border-white"
                : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            All Levels
          </button>
          {(["Beginner", "Intermediate", "Advanced"] as Difficulty[]).map((diff) => (
            <button
              key={diff}
              onClick={() => setDifficultyFilter(diff === difficultyFilter ? "ALL" : diff)}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all border ${
                difficultyFilter === diff
                  ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 border-gray-950 dark:border-white"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {diff}
            </button>
          ))}

          <select
            value={ecosystemFilter}
            onChange={(e) => setEcosystemFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          >
            <option value="ALL">All Ecosystems</option>
            {ECOSYSTEMS.map((eco) => (
              <option key={eco} value={eco}>{eco}</option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Results */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          <span className="font-semibold text-gray-900 dark:text-white">{filtered.length}</span> project{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
          <Code2 className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">No projects found</h3>
          <p className="text-sm text-gray-400 dark:text-gray-500">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
