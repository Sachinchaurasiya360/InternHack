import type { BlockchainSection, BlockchainLesson } from "./types";
import { blockchainSections } from "./sections";

import fundamentalsData from "./lessons/blockchain-fundamentals.json";
import ethereumData from "./lessons/ethereum-and-evm.json";
import solidityData from "./lessons/solidity-basics.json";
import patternsData from "./lessons/smart-contract-patterns.json";
import tokensData from "./lessons/tokens-and-standards.json";
import defiData from "./lessons/defi-concepts.json";
import nftsData from "./lessons/nfts-and-digital-assets.json";
import securityData from "./lessons/security-and-auditing.json";
import testingData from "./lessons/testing-and-deployment.json";
import advancedData from "./lessons/advanced-topics.json";

export const sections: BlockchainSection[] = blockchainSections;

export const lessons: BlockchainLesson[] = [
  ...(fundamentalsData as BlockchainLesson[]),
  ...(ethereumData as BlockchainLesson[]),
  ...(solidityData as BlockchainLesson[]),
  ...(patternsData as BlockchainLesson[]),
  ...(tokensData as BlockchainLesson[]),
  ...(defiData as BlockchainLesson[]),
  ...(nftsData as BlockchainLesson[]),
  ...(securityData as BlockchainLesson[]),
  ...(testingData as BlockchainLesson[]),
  ...(advancedData as BlockchainLesson[]),
];
