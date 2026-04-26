import type { BlockchainSection } from "./types";

export const blockchainSections: BlockchainSection[] = [
  {
    id: "blockchain-fundamentals",
    title: "Blockchain Fundamentals",
    description: "Core concepts, distributed ledgers, hashing, consensus, blocks, and transactions.",
    orderIndex: 0,
    level: "Beginner",
  },
  {
    id: "ethereum-and-evm",
    title: "Ethereum & EVM",
    description: "Ethereum architecture, the EVM, gas model, accounts, and transaction lifecycle.",
    orderIndex: 1,
    level: "Beginner",
  },
  {
    id: "solidity-basics",
    title: "Solidity Basics",
    description: "Solidity syntax, data types, functions, modifiers, storage vs memory, and error handling.",
    orderIndex: 2,
    level: "Beginner",
  },
  {
    id: "smart-contract-patterns",
    title: "Smart Contract Patterns",
    description: "Factory, proxy, access control, state machine, and reentrancy guard patterns.",
    orderIndex: 3,
    level: "Intermediate",
  },
  {
    id: "tokens-and-standards",
    title: "Tokens & Standards",
    description: "ERC-20, ERC-721, ERC-1155, and ERC-4626 token standards and implementations.",
    orderIndex: 4,
    level: "Intermediate",
  },
  {
    id: "defi-concepts",
    title: "DeFi Concepts",
    description: "AMMs, lending protocols, oracles, flash loans, and yield farming mechanics.",
    orderIndex: 5,
    level: "Intermediate",
  },
  {
    id: "nfts-and-digital-assets",
    title: "NFTs & Digital Assets",
    description: "NFT metadata, IPFS storage, minting strategies, marketplaces, and royalties.",
    orderIndex: 6,
    level: "Intermediate",
  },
  {
    id: "security-and-auditing",
    title: "Security & Auditing",
    description: "Common vulnerabilities, reentrancy, overflow, access control exploits, and audit methods.",
    orderIndex: 7,
    level: "Advanced",
  },
  {
    id: "testing-and-deployment",
    title: "Testing & Deployment",
    description: "Hardhat/Foundry setup, writing tests, deployment scripts, verification, and gas optimization.",
    orderIndex: 8,
    level: "Advanced",
  },
  {
    id: "advanced-topics",
    title: "Advanced Topics",
    description: "Account abstraction (ERC-4337), cross-chain messaging, MEV, and zero-knowledge proofs.",
    orderIndex: 9,
    level: "Advanced",
  },
];
