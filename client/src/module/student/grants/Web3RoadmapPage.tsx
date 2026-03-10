import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Circle, ArrowLeft, Blocks, ChevronDown,
  Copy, Check, ExternalLink, BookOpen, Terminal, Lightbulb, Link2, Trophy,
} from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../../../components/SEO";

// ─── Types ─────────────────────────────────────────────────────
interface Resource {
  title: string;
  url: string;
  type: "article" | "tool" | "video" | "docs" | "interactive";
}

interface Command {
  label: string;
  code: string;
}

interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
  details: string[];
  commands: Command[];
  resources: Resource[];
  tips: string[];
}

// ─── Data ──────────────────────────────────────────────────────
const STEPS: Step[] = [
  {
    id: "blockchain-basics",
    number: 1,
    title: "Understand Blockchain Fundamentals",
    description: "Before writing code, understand what makes blockchains different from regular databases - immutability, consensus, and decentralization.",
    details: [
      "A blockchain is a distributed ledger shared across thousands of computers. No single entity controls it, and every participant can verify every transaction.",
      "Blocks contain batches of transactions. Each block references the previous one via a cryptographic hash, forming a chain that's practically impossible to tamper with.",
      "Consensus mechanisms (Proof of Work, Proof of Stake) are how the network agrees on which transactions are valid without a central authority.",
      "Smart contracts are programs stored on the blockchain. Once deployed, they run exactly as written - nobody can change or censor them.",
      "Gas is the fee you pay to execute operations on the network. Every computation costs gas, which incentivizes efficient code.",
      "The EVM (Ethereum Virtual Machine) is the runtime that executes smart contracts on Ethereum and compatible chains (Polygon, Arbitrum, Base, etc.).",
    ],
    commands: [],
    resources: [
      { title: "Ethereum.org - What is Ethereum?", url: "https://ethereum.org/en/what-is-ethereum/", type: "docs" },
      { title: "3Blue1Brown - How does Bitcoin work?", url: "https://www.youtube.com/watch?v=bBC-nXj3Ng4", type: "video" },
      { title: "Blockchain Demo (visual, interactive)", url: "https://andersbrownworth.com/blockchain/", type: "interactive" },
      { title: "Mastering Ethereum (free book)", url: "https://github.com/ethereumbook/ethereumbook", type: "article" },
    ],
    tips: [
      "You don't need to understand cryptography deeply. Knowing that hashes are one-way fingerprints and private keys sign transactions is enough to start building.",
      "Think of smart contracts like vending machines - you put in coins and press a button, the machine does exactly what it's programmed to do, every time, no human needed.",
    ],
  },
  {
    id: "wallets-testnets",
    number: 2,
    title: "Set Up Wallets and Testnets",
    description: "Install MetaMask, get test ETH from a faucet, and learn to read transactions on a block explorer. This is your Web3 development environment.",
    details: [
      "Install the MetaMask browser extension. This is your primary tool for interacting with dApps and deploying contracts during development.",
      "Never use your real wallet for development. Create a separate MetaMask account specifically for testing. Label it clearly so you never confuse it with your main wallet.",
      "Add testnet networks to MetaMask: Sepolia (Ethereum testnet), Mumbai (Polygon testnet), or Arbitrum Sepolia. These work identically to mainnet but with free test tokens.",
      "Get free test ETH from faucets. Sepolia faucets include Google Cloud's faucet, Alchemy's faucet, and Infura's faucet. You'll need test ETH to deploy contracts and send transactions.",
      "Learn to use Etherscan (or the testnet equivalent). Paste any address or transaction hash to see full details - this is how you debug on-chain activity.",
      "Understand the difference between EOA (Externally Owned Account - your wallet) and contract accounts. Both have addresses, but contracts hold executable code.",
    ],
    commands: [
      { label: "Check your MetaMask setup with a test connection", code: "# In browser console on any dApp:\nconsole.log(window.ethereum)\n# Should output the MetaMask provider object" },
      { label: "View your test wallet balance programmatically", code: "// Using ethers.js in Node or browser\nconst provider = new ethers.BrowserProvider(window.ethereum);\nconst balance = await provider.getBalance(\"YOUR_ADDRESS\");\nconsole.log(ethers.formatEther(balance), \"ETH\");" },
    ],
    resources: [
      { title: "MetaMask - Official Download", url: "https://metamask.io/download/", type: "tool" },
      { title: "Google Cloud Web3 Faucet (Sepolia)", url: "https://cloud.google.com/application/web3/faucet/ethereum/sepolia", type: "tool" },
      { title: "Sepolia Etherscan", url: "https://sepolia.etherscan.io", type: "tool" },
      { title: "Alchemy Faucet", url: "https://www.alchemy.com/faucets", type: "tool" },
    ],
    tips: [
      "Bookmark your testnet block explorer. You'll use it constantly to verify whether your transactions succeeded, check contract state, and debug failed calls.",
      "If a faucet is dry, try another one. Multiple faucets exist for each testnet, and they rotate availability.",
    ],
  },
  {
    id: "solidity-basics",
    number: 3,
    title: "Learn Solidity Basics",
    description: "Solidity is the primary language for Ethereum smart contracts. If you know JavaScript or TypeScript, you can pick up Solidity in a weekend.",
    details: [
      "Solidity is statically typed and looks like a mix of JavaScript and C++. If you know TypeScript, the syntax will feel familiar.",
      "Key types: uint256 (unsigned integer), address (20-byte Ethereum address), string, bool, mapping (key-value store), and arrays.",
      "Every contract has state variables (stored on-chain, cost gas to modify), functions (can be public/private/internal/external), and events (cheap logs).",
      "The 'msg.sender' global gives you the address that called the function. 'msg.value' gives you the ETH sent with the call. These are your primary security tools.",
      "Modifiers are reusable access controls. 'onlyOwner' is the classic example - it restricts a function so only the contract deployer can call it.",
      "Storage vs memory: state variables are in storage (persistent, expensive), function parameters and local variables are in memory (temporary, cheap).",
      "Solidity has no floating point numbers. Use fixed-point math with 18 decimals (1 ETH = 1e18 wei). This is the biggest gotcha for new developers.",
    ],
    commands: [
      { label: "A minimal Solidity contract", code: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\n\ncontract HelloWorld {\n    string public greeting = \"Hello, Web3!\";\n\n    function setGreeting(string calldata _greeting) external {\n        greeting = _greeting;\n    }\n}" },
      { label: "Contract with access control", code: "contract Owned {\n    address public owner;\n\n    modifier onlyOwner() {\n        require(msg.sender == owner, \"Not owner\");\n        _;\n    }\n\n    constructor() {\n        owner = msg.sender;\n    }\n}" },
    ],
    resources: [
      { title: "CryptoZombies - Learn Solidity by building a game", url: "https://cryptozombies.io", type: "interactive" },
      { title: "Solidity by Example - clean, runnable examples", url: "https://solidity-by-example.org", type: "docs" },
      { title: "Solidity Official Docs", url: "https://docs.soliditylang.org", type: "docs" },
      { title: "Remix IDE - browser-based Solidity editor", url: "https://remix.ethereum.org", type: "tool" },
    ],
    tips: [
      "Start with Remix IDE in your browser. No setup needed - write, compile, and deploy contracts in minutes. Move to Hardhat or Foundry once you're comfortable.",
      "CryptoZombies is the single best way to learn Solidity. It teaches through building a game, and you'll have a working project at the end.",
      "Every on-chain write costs gas. Design your contracts to minimize storage writes - read operations are free.",
    ],
  },
  {
    id: "first-contract",
    number: 4,
    title: "Deploy Your First Smart Contract",
    description: "Set up Hardhat or Foundry, write a contract, run tests, and deploy to a testnet. This is the full smart contract development cycle.",
    details: [
      "Hardhat (JavaScript/TypeScript) and Foundry (Rust-based, uses Solidity for tests) are the two main dev frameworks. Pick one - Hardhat is easier for JS developers, Foundry is faster.",
      "Initialize a project with 'npx hardhat init' or 'forge init'. Both scaffold a complete project with example contracts, tests, and deployment scripts.",
      "Write your contract. Start simple - a storage contract that lets you set and get a value. Get the workflow right before building complex logic.",
      "Write tests. In Hardhat, tests are in JavaScript/TypeScript using Mocha + Chai. In Foundry, tests are written in Solidity. Test every public function and edge case.",
      "Deploy to a local network first (Hardhat Network or Anvil). This is instant and free - perfect for rapid iteration.",
      "Deploy to a testnet (Sepolia or Mumbai) using your test wallet. You'll need to set up an RPC provider (Alchemy or Infura free tier) and export your private key.",
      "Verify your contract on Etherscan after deployment. This makes your source code publicly readable and lets anyone interact with your contract through the explorer.",
    ],
    commands: [
      { label: "Set up a Hardhat project", code: "mkdir my-contract && cd my-contract\nnpx hardhat init\n# Choose 'TypeScript project'" },
      { label: "Set up a Foundry project", code: "forge init my-contract\ncd my-contract" },
      { label: "Compile your contracts", code: "npx hardhat compile\n# or: forge build" },
      { label: "Run tests", code: "npx hardhat test\n# or: forge test -vvv" },
      { label: "Deploy to local network", code: "npx hardhat node\n# In another terminal:\nnpx hardhat run scripts/deploy.ts --network localhost" },
      { label: "Deploy to Sepolia testnet", code: "npx hardhat run scripts/deploy.ts --network sepolia\n# or: forge script script/Deploy.s.sol --rpc-url sepolia --broadcast" },
    ],
    resources: [
      { title: "Hardhat Getting Started", url: "https://hardhat.org/hardhat-runner/docs/getting-started", type: "docs" },
      { title: "Foundry Book", url: "https://book.getfoundry.sh", type: "docs" },
      { title: "Alchemy - Free RPC Provider", url: "https://www.alchemy.com", type: "tool" },
      { title: "Etherscan Contract Verification", url: "https://docs.etherscan.io/tutorials/verifying-contracts-programmatically", type: "docs" },
    ],
    tips: [
      "Never commit your private key to Git. Use .env files and add .env to .gitignore. Hardhat and Foundry both support dotenv.",
      "Write tests before deploying. On-chain bugs can't be patched - once deployed, the contract is permanent. Tests are your only safety net.",
      "Start with Hardhat if you come from JavaScript. The tooling and community resources are larger, and most tutorials use Hardhat.",
    ],
  },
  {
    id: "frontend-integration",
    number: 5,
    title: "Connect a Frontend with ethers.js or wagmi",
    description: "Build a React frontend that connects to MetaMask, reads contract state, and sends transactions. wagmi + viem is the modern stack; ethers.js is the classic choice.",
    details: [
      "wagmi is a React hooks library for Ethereum. It handles wallet connection, chain switching, transaction state, and caching out of the box. Pair it with viem for low-level calls.",
      "ethers.js is the standalone alternative. It's more verbose but gives you full control. Good for non-React projects or learning how things work under the hood.",
      "The basic flow: connect wallet -> read contract state -> let user sign a transaction -> wait for confirmation -> update UI.",
      "ABI (Application Binary Interface) is the contract's API definition. You generate it when you compile your contract. Your frontend uses the ABI to know which functions exist and their types.",
      "Always handle the three transaction states: pending (user is signing), submitted (waiting for block confirmation), confirmed (done). Show a spinner or status for each.",
      "Network switching matters. If the user is on Ethereum mainnet but your contract is on Sepolia, prompt them to switch. wagmi handles this with useChainId() and useSwitchChain().",
    ],
    commands: [
      { label: "Install wagmi + viem (recommended for React)", code: "npm install wagmi viem @tanstack/react-query" },
      { label: "Install ethers.js (alternative)", code: "npm install ethers" },
      { label: "Read contract state with wagmi", code: "import { useReadContract } from 'wagmi';\n\nconst { data: greeting } = useReadContract({\n  address: '0x...',\n  abi: contractABI,\n  functionName: 'greeting',\n});" },
      { label: "Send a transaction with wagmi", code: "import { useWriteContract } from 'wagmi';\n\nconst { writeContract } = useWriteContract();\n\nwriteContract({\n  address: '0x...',\n  abi: contractABI,\n  functionName: 'setGreeting',\n  args: ['Hello from my dApp!'],\n});" },
    ],
    resources: [
      { title: "wagmi Documentation", url: "https://wagmi.sh", type: "docs" },
      { title: "viem Documentation", url: "https://viem.sh", type: "docs" },
      { title: "ethers.js v6 Docs", url: "https://docs.ethers.org/v6/", type: "docs" },
      { title: "RainbowKit - wallet connection UI", url: "https://www.rainbowkit.com", type: "tool" },
    ],
    tips: [
      "Use RainbowKit or ConnectKit for wallet connection UI. They give you a polished modal with MetaMask, WalletConnect, Coinbase Wallet, and more - no custom UI needed.",
      "Always show transaction hashes as links to the block explorer. Users need to verify what happened on-chain.",
      "Cache contract reads aggressively. Reading the same value 100 times costs nothing on-chain, but hammering RPC providers gets you rate-limited.",
    ],
  },
  {
    id: "testing-security",
    number: 6,
    title: "Testing and Security Best Practices",
    description: "Smart contract bugs can lose real money. Learn to write comprehensive tests, use static analysis tools, and avoid the most common vulnerability patterns.",
    details: [
      "Reentrancy is the #1 vulnerability. It happens when your contract calls an external address before updating its own state. The external contract calls back into yours and drains funds. Use the checks-effects-interactions pattern.",
      "Integer overflow/underflow was critical before Solidity 0.8. Now arithmetic reverts on overflow by default, but be aware when using 'unchecked' blocks for gas optimization.",
      "Access control bugs: forgetting to add onlyOwner or similar modifiers to admin functions. Every function is public by default - mark functions as internal or private if they shouldn't be called externally.",
      "Front-running: on public blockchains, pending transactions are visible. Attackers can see your transaction and submit theirs first with a higher gas fee. Use commit-reveal schemes for sensitive operations.",
      "Use OpenZeppelin contracts. They provide audited, battle-tested implementations of ERC-20, ERC-721, access control, and more. Don't reinvent these - use the library.",
      "Slither (static analyzer) and Mythril (symbolic execution) catch common bugs automatically. Run them before every deployment.",
      "Test coverage should be as close to 100% as possible. Test happy paths, edge cases, and especially revert conditions (expect reverts for invalid inputs).",
    ],
    commands: [
      { label: "Install OpenZeppelin contracts", code: "npm install @openzeppelin/contracts\n# or: forge install openzeppelin/openzeppelin-contracts" },
      { label: "Run Slither static analysis", code: "pip install slither-analyzer\nslither ." },
      { label: "Run test coverage (Hardhat)", code: "npx hardhat coverage" },
      { label: "Run test coverage (Foundry)", code: "forge coverage" },
      { label: "Fuzz test with Foundry", code: "// In your test file:\nfunction testFuzz_Deposit(uint256 amount) public {\n    vm.assume(amount > 0 && amount < 1e24);\n    vault.deposit{value: amount}();\n    assertEq(vault.balances(address(this)), amount);\n}" },
    ],
    resources: [
      { title: "OpenZeppelin Contracts", url: "https://docs.openzeppelin.com/contracts", type: "docs" },
      { title: "SWC Registry - Smart Contract Weakness Classification", url: "https://swcregistry.io", type: "docs" },
      { title: "Damn Vulnerable DeFi - practice hacking challenges", url: "https://www.damnvulnerabledefi.xyz", type: "interactive" },
      { title: "Slither - Static Analysis Framework", url: "https://github.com/crytic/slither", type: "tool" },
    ],
    tips: [
      "Assume every external call is malicious. Never trust return values from unknown contracts. Verify, don't trust.",
      "Foundry's fuzz testing is incredibly powerful. Instead of writing one test with one input, you write the property and Foundry tests it with thousands of random inputs.",
      "Read post-mortems of real hacks (Rekt.news). Understanding how real exploits work teaches more than any tutorial.",
    ],
  },
  {
    id: "defi-patterns",
    number: 7,
    title: "Understand DeFi Patterns and Protocols",
    description: "DeFi is where most Web3 grants focus. Learn how AMMs, lending pools, and token standards work - these are the building blocks of every DeFi project.",
    details: [
      "ERC-20 is the standard for fungible tokens (USDC, DAI, UNI). It defines transfer(), approve(), transferFrom(), and balanceOf(). Most grant projects involve ERC-20 tokens.",
      "ERC-721 is the standard for NFTs. Each token is unique with its own ID. ERC-1155 supports both fungible and non-fungible tokens in a single contract.",
      "AMMs (Automated Market Makers) like Uniswap use the constant product formula: x * y = k. Liquidity providers deposit token pairs, traders swap against the pool.",
      "Lending protocols (Aave, Compound) let users deposit collateral and borrow other tokens. Liquidation happens when collateral value drops below the required ratio.",
      "Oracles (Chainlink) bring off-chain data on-chain. Price feeds, weather data, sports results - anything a smart contract needs from the real world comes through oracles.",
      "Flash loans let you borrow any amount with zero collateral, as long as you repay in the same transaction. They're used for arbitrage, liquidations, and collateral swaps.",
      "Understanding these patterns is essential for grant proposals. Foundations want to see that you understand the ecosystem you're building in.",
    ],
    commands: [
      { label: "Import OpenZeppelin ERC-20 base", code: "import \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\n\ncontract MyToken is ERC20 {\n    constructor() ERC20(\"MyToken\", \"MTK\") {\n        _mint(msg.sender, 1_000_000 * 10**18);\n    }\n}" },
      { label: "Read a Chainlink price feed", code: "import \"@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol\";\n\nAggregatorV3Interface feed = AggregatorV3Interface(0x...);\n(, int256 price, , , ) = feed.latestRoundData();\n// price has 8 decimals for USD pairs" },
    ],
    resources: [
      { title: "Uniswap V3 Docs - how AMMs work", url: "https://docs.uniswap.org", type: "docs" },
      { title: "Aave V3 Docs - lending protocol mechanics", url: "https://docs.aave.com", type: "docs" },
      { title: "Chainlink Docs - oracle integration", url: "https://docs.chain.link", type: "docs" },
      { title: "DeFi MOOC - free Stanford course", url: "https://defi-learning.org", type: "video" },
    ],
    tips: [
      "Read the Uniswap V2 whitepaper. It's only 8 pages and explains the constant product formula clearly. V3 adds concentrated liquidity on top of V2's foundation.",
      "Stanford's DeFi MOOC is the best free course on DeFi mechanics. It covers AMMs, lending, stablecoins, and governance in depth.",
    ],
  },
  {
    id: "daos-governance",
    number: 8,
    title: "DAOs and On-Chain Governance",
    description: "Most grant programs are run by DAOs. Understanding governance tokens, proposals, and voting mechanics helps you write better proposals and build governance tools.",
    details: [
      "A DAO (Decentralized Autonomous Organization) is a group governed by smart contracts and token voting instead of a traditional board of directors.",
      "Governance tokens (UNI, COMP, ARB) give holders voting power. More tokens = more votes. Some DAOs use quadratic voting to reduce whale dominance.",
      "The proposal lifecycle: draft -> discussion -> on-chain vote -> execution. Most DAOs use Snapshot for off-chain voting (gasless) and Governor contracts for on-chain execution.",
      "OpenZeppelin Governor is the standard implementation. It handles proposal creation, voting periods, quorum checks, and timelock execution.",
      "Timelocks add a delay between a vote passing and the action executing. This gives the community time to react to potentially harmful proposals.",
      "Multi-sig wallets (Gnosis Safe) are used by smaller DAOs and grant committees. They require M-of-N signatures to execute transactions.",
      "Understanding DAO governance is valuable for grant proposals because you can articulate how your project fits into the ecosystem's governance structure.",
    ],
    commands: [
      { label: "Deploy a Governor contract (OpenZeppelin)", code: "import \"@openzeppelin/contracts/governance/Governor.sol\";\nimport \"@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol\";\nimport \"@openzeppelin/contracts/governance/extensions/GovernorVotes.sol\";\n\ncontract MyGovernor is Governor, GovernorCountingSimple, GovernorVotes {\n    // Configure voting delay, period, and quorum\n}" },
      { label: "Create a proposal with Governor", code: "governor.propose(\n    [targetAddress],\n    [0], // value in ETH\n    [encodedFunctionCall],\n    \"Proposal: Fund ecosystem development\"\n);" },
    ],
    resources: [
      { title: "OpenZeppelin Governor Docs", url: "https://docs.openzeppelin.com/contracts/governance", type: "docs" },
      { title: "Snapshot - gasless voting platform", url: "https://snapshot.org", type: "tool" },
      { title: "Tally - DAO governance dashboard", url: "https://www.tally.xyz", type: "tool" },
      { title: "Gnosis Safe (now Safe) - multi-sig wallet", url: "https://safe.global", type: "tool" },
    ],
    tips: [
      "Before applying for a grant, participate in the DAO's governance. Vote on proposals, join Discord discussions, and attend community calls. Active participation dramatically increases your grant approval chances.",
      "Many DAOs publish their treasury and spending publicly on Tally or DeepDAO. Research how much they've given to similar projects before writing your proposal.",
    ],
  },
  {
    id: "grant-application",
    number: 9,
    title: "Research and Apply for Grants",
    description: "You've built skills. Now find the right grant, write a compelling proposal with clear milestones, and submit. Most grants want builders who understand their ecosystem.",
    details: [
      "Match your skills to the ecosystem. If you learned Solidity, apply to Ethereum/Polygon/Arbitrum/Base grants. If you learned Move, apply to Sui/Aptos grants.",
      "Read 3-5 successful proposals before writing yours. Most foundations publish past recipients. Study what worked - structure, scope, and milestone granularity.",
      "Your proposal needs: problem statement, proposed solution, technical architecture, team background, milestones with deliverables, budget breakdown, and timeline.",
      "Start small. Apply for $5K-$25K grants first. Smaller grants have faster review cycles and higher acceptance rates. Build credibility, then apply for larger funding.",
      "Milestones must be specific and measurable. Bad: 'Build the frontend'. Good: 'Deploy React frontend with wallet connection, token swap UI, and liquidity pool dashboard. Deliverable: live testnet URL and GitHub repo.'",
      "Include a working prototype or proof of concept. A live demo on a testnet speaks louder than any written proposal. Even a basic version shows you can execute.",
      "Join the ecosystem's Discord/Telegram before applying. Ask questions in the grants channel, attend community calls, and introduce yourself. Many grant committees remember applicants who participated in the community.",
      "Apply to multiple grants simultaneously. Acceptance rates range from 10-30%. Diversify your applications across 3-5 programs to increase your chances.",
    ],
    commands: [],
    resources: [
      { title: "InternHack Grants Directory", url: "/student/grants", type: "tool" },
      { title: "Questbook - multi-ecosystem grant platform", url: "https://questbook.app", type: "tool" },
      { title: "DeepDAO - DAO analytics and treasury data", url: "https://deepdao.io", type: "tool" },
      { title: "How to Write a Grant Proposal (Ethereum Foundation)", url: "https://blog.ethereum.org/2024/01/03/how-to-write-a-grant-proposal", type: "article" },
    ],
    tips: [
      "Budget transparency matters. Itemize costs: smart contract development (X hours at $Y/hr), frontend development, auditing, infrastructure, and documentation. Vague budgets get rejected.",
      "Follow up after submitting. If you haven't heard back in 2-3 weeks, send a polite follow-up to the grants team. Many programs have small review teams and applications slip through.",
      "If rejected, ask for feedback. Most grant committees will tell you what was missing. Use that feedback to improve and reapply in the next cycle.",
    ],
  },
];

const RESOURCE_LIBRARY = [
  {
    category: "Learning Platforms",
    items: [
      { title: "CryptoZombies", url: "https://cryptozombies.io", desc: "Learn Solidity by building a zombie game - the classic starter course" },
      { title: "Speedrun Ethereum", url: "https://speedrunethereum.com", desc: "Build and ship dApps through progressive challenges" },
      { title: "Alchemy University", url: "https://university.alchemy.com", desc: "Free 7-week blockchain developer bootcamp" },
      { title: "Cyfrin Updraft", url: "https://updraft.cyfrin.io", desc: "Patrick Collins' comprehensive Solidity and Foundry course" },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { title: "Remix IDE", url: "https://remix.ethereum.org", desc: "Browser-based Solidity editor - write, compile, deploy instantly" },
      { title: "Hardhat", url: "https://hardhat.org", desc: "JavaScript/TypeScript smart contract development framework" },
      { title: "Foundry", url: "https://book.getfoundry.sh", desc: "Blazing fast Rust-based toolkit with Solidity testing" },
      { title: "Tenderly", url: "https://tenderly.co", desc: "Debug transactions, simulate contract calls, set up alerts" },
    ],
  },
  {
    category: "Security Resources",
    items: [
      { title: "Damn Vulnerable DeFi", url: "https://www.damnvulnerabledefi.xyz", desc: "Practice smart contract hacking through challenges" },
      { title: "Ethernaut by OpenZeppelin", url: "https://ethernaut.openzeppelin.com", desc: "Learn security by exploiting vulnerable contracts" },
      { title: "Rekt News", url: "https://rekt.news", desc: "Post-mortems of real DeFi hacks - learn from actual exploits" },
    ],
  },
  {
    category: "Grant Directories",
    items: [
      { title: "InternHack Grants", url: "/student/grants", desc: "50+ curated Web3 grants with details and direct links" },
      { title: "Questbook", url: "https://questbook.app", desc: "Multi-ecosystem grant discovery and application platform" },
      { title: "DeepDAO", url: "https://deepdao.io", desc: "DAO treasury data and governance analytics" },
      { title: "DeveloperDAO", url: "https://developerdao.com", desc: "Community of Web3 builders with resources and networking" },
    ],
  },
];

const STORAGE_KEY = "web3-roadmap-completed";

// ─── Code Block ──────────────────────────────────────────────────
function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="relative group bg-gray-950 dark:bg-gray-950 rounded-xl overflow-hidden">
      <pre className="text-xs text-gray-200 p-3 pr-10 overflow-x-auto leading-relaxed font-mono">{code}</pre>
      <button
        onClick={copy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
      >
        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
      </button>
    </div>
  );
}

// ─── Step Card ───────────────────────────────────────────────────
function StepCard({
  step, completed, onToggle, index,
}: { step: Step; completed: boolean; onToggle: () => void; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "commands" | "resources" | "tips">("details");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.03 }}
      id={`step-${step.id}`}
      className={`bg-white dark:bg-gray-900 border rounded-2xl overflow-hidden transition-all duration-300 ${
        completed
          ? "border-green-200 dark:border-green-800 hover:shadow-xl hover:shadow-green-100/50 dark:hover:shadow-green-900/20"
          : "border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50"
      }`}
    >
      {/* Header */}
      <div
        className="flex items-center gap-4 px-5 py-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <button
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          className="shrink-0"
        >
          {completed ? (
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5 text-gray-300 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-500 transition-colors" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <span className={`text-sm font-medium ${
            completed
              ? "text-gray-400 dark:text-gray-500 line-through"
              : "text-gray-950 dark:text-white"
          }`}>
            {step.title}
          </span>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 line-clamp-1">
            {step.description}
          </p>
        </div>

        <span className={`text-xs font-bold shrink-0 ${
          completed ? "text-green-500" : "text-gray-400 dark:text-gray-500"
        }`}>
          {step.number}/{STEPS.length}
        </span>

        <ChevronDown className={`w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
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

              {/* Tabs */}
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-1">
                {(["details", "commands", "resources", "tips"] as const).filter((tab) => {
                  if (tab === "commands") return step.commands.length > 0;
                  if (tab === "resources") return step.resources.length > 0;
                  if (tab === "tips") return step.tips.length > 0;
                  return true;
                }).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === tab
                        ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    {tab === "details" && <BookOpen className="w-3 h-3" />}
                    {tab === "commands" && <Terminal className="w-3 h-3" />}
                    {tab === "resources" && <Link2 className="w-3 h-3" />}
                    {tab === "tips" && <Lightbulb className="w-3 h-3" />}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              {activeTab === "details" && (
                <ul className="space-y-2">
                  {step.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "commands" && (
                <div className="space-y-3">
                  {step.commands.map((cmd, i) => (
                    <div key={i}>
                      <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">{cmd.label}</p>
                      <CodeBlock code={cmd.code} />
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "resources" && (
                <div className="space-y-2">
                  {step.resources.map((r, i) => (
                    <a
                      key={i}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 no-underline group transition-all"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{r.title}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 capitalize">{r.type}</p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-amber-500 shrink-0" />
                    </a>
                  ))}
                </div>
              )}

              {activeTab === "tips" && (
                <div className="space-y-2">
                  {step.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export default function Web3RoadmapPage() {
  const [completed, setCompleted] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  const saveCompleted = useCallback((next: Set<string>) => {
    setCompleted(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch { /* ignore */ }
  }, []);

  const toggle = (id: string) => {
    const next = new Set(completed);
    next.has(id) ? next.delete(id) : next.add(id);
    saveCompleted(next);
  };

  const resetAll = () => saveCompleted(new Set());

  const pct = Math.round((completed.size / STEPS.length) * 100);
  const allDone = completed.size === STEPS.length;

  return (
    <div className="relative pb-12">
      <SEO title="Web3 Learning Roadmap - Grants" noIndex />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-amber-100 dark:bg-amber-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
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
        <Link to="/student/grants" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4 no-underline">
          <ArrowLeft className="w-4 h-4" />
          Grants
        </Link>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          Web3 Learning <span className="text-gradient-accent">Roadmap</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-lg mx-auto">
          9 steps from blockchain basics to your first grant application
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        {[
          { icon: Blocks, value: STEPS.length, label: "Steps", iconColor: "text-amber-500" },
          { icon: CheckCircle2, value: completed.size, label: "Completed", iconColor: "text-green-500" },
          { icon: Trophy, value: `${pct}%`, label: "Progress", iconColor: "text-orange-500" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
          >
            <stat.icon className={`w-6 h-6 ${stat.iconColor} mx-auto mb-3`} />
            <p className="font-display text-2xl font-bold text-gray-950 dark:text-white">{stat.value}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 mb-8"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Progress</span>
          <div className="flex items-center gap-3">
            {completed.size > 0 && (
              <button onClick={resetAll} className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Reset
              </button>
            )}
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {completed.size} / {STEPS.length} ({pct}%)
            </span>
          </div>
        </div>
        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.6 }}
            className={`h-full rounded-full ${pct === 100 ? "bg-green-500" : "bg-amber-500"}`}
          />
        </div>
      </motion.div>

      {/* Completion banner */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mb-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-5 flex items-center gap-4"
          >
            <Trophy className="w-8 h-8 text-green-500 shrink-0" />
            <div>
              <p className="text-base font-bold text-green-900 dark:text-green-300">You're ready to build in Web3!</p>
              <p className="text-sm text-green-700 dark:text-green-400 mt-0.5">You've completed all 9 steps. Browse our grants directory, pick a project idea, and start applying.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Steps */}
      <div className="space-y-2 mb-12">
        {STEPS.map((step, i) => (
          <StepCard
            key={step.id}
            step={step}
            completed={completed.has(step.id)}
            onToggle={() => toggle(step.id)}
            index={i}
          />
        ))}
      </div>

      {/* Resource Library */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">
          Resource Library
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {RESOURCE_LIBRARY.map((cat) => (
            <div key={cat.category} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">{cat.category}</h3>
              <div className="space-y-2.5">
                {cat.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group no-underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-tight">{item.title}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
