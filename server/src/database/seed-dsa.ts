import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// ============================================================
// DSA Practice - Complete Seed Data
// ============================================================

interface Problem {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  leetcodeUrl: string | null;
  gfgUrl: string | null;
  articleUrl: string | null;
  videoUrl: string | null;
}

interface EnrichedProblem extends Problem {
  hackerrankUrl: string | null;
  codechefUrl: string | null;
  tags: string[];
  companies: string[];
  hints: string | null;
  sheets: string[];
}

interface SubTopic {
  name: string;
  problems: Problem[];
}

interface Topic {
  name: string;
  slug: string;
  description: string;
  subTopics: SubTopic[];
}

const LC = (slug: string) => `https://leetcode.com/problems/${slug}/`;

// ── Tag mapping by topic slug ──
const TOPIC_TAGS: Record<string, string[]> = {
  "learn-the-basics": ["math"],
  "sorting": ["sorting"],
  "arrays": ["arrays"],
  "binary-search": ["binary-search"],
  "strings": ["strings"],
  "linked-list": ["linked-list"],
  "recursion-backtracking": ["recursion"],
  "bit-manipulation": ["bit-manipulation"],
  "stack-queues": ["stack", "queue"],
  "sliding-window": ["sliding-window", "two-pointers"],
  "heaps": ["heap"],
  "greedy": ["greedy"],
  "binary-trees": ["binary-tree"],
  "bst": ["bst", "binary-tree"],
  "graphs": ["graph"],
  "dynamic-programming": ["dynamic-programming"],
  "tries": ["trie"],
};

// ── Sub-topic name tag overrides ──
const SUBTOPIC_TAGS: Record<string, string[]> = {
  "Learn Basic Hashing": ["hashing"],
  "Learn Basic Recursion": ["recursion"],
  "Learn Basic Maths": ["math"],
  "Monotonic Stack / Queue": ["monotonic-stack", "stack"],
  "Prefix / Infix / Postfix": ["stack"],
  "Learning / BFS / DFS": ["bfs", "dfs"],
  "Topo Sort": ["graph", "bfs", "dfs"],
  "Shortest Path": ["graph"],
  "MST / Disjoint Set": ["graph", "union-find"],
  "Other Algorithms": ["graph"],
  "DP on Subsequences": ["dynamic-programming"],
  "DP on Strings": ["dynamic-programming", "strings"],
  "DP on Stocks": ["dynamic-programming"],
  "DP on LIS": ["dynamic-programming"],
  "MCM / Partition DP": ["dynamic-programming"],
  "Subsequences Pattern": ["recursion", "backtracking"],
  "BS on 2D Arrays": ["binary-search", "matrix"],
};

// ── Company tags by problem title ──
const COMPANY_MAP: Record<string, string[]> = {
  // ── Arrays ──
  "Two Sum": ["amazon", "google", "meta", "microsoft", "apple", "bloomberg", "adobe"],
  "Remove Duplicates from Sorted Array": ["meta", "amazon", "microsoft", "bloomberg"],
  "Move Zeroes to End": ["meta", "amazon", "bloomberg", "apple"],
  "Missing Number": ["amazon", "microsoft", "apple", "bloomberg"],
  "Max Consecutive Ones": ["google", "amazon"],
  "Single Number": ["amazon", "microsoft", "google", "apple"],
  "Longest Subarray with Sum K (Positives)": ["amazon", "microsoft"],
  "Sort Colors (Dutch National Flag)": ["amazon", "microsoft", "adobe", "google", "meta"],
  "Majority Element (> n/2 times)": ["amazon", "google", "microsoft", "adobe", "bloomberg"],
  "Maximum Subarray Sum (Kadane's Algorithm)": ["amazon", "google", "microsoft", "apple", "bloomberg", "goldman-sachs"],
  "Stock Buy and Sell": ["amazon", "google", "meta", "microsoft", "goldman-sachs", "uber"],
  "Best Time to Buy and Sell Stock": ["amazon", "google", "meta", "microsoft", "goldman-sachs", "uber"],
  "Best Time to Buy and Sell Stock II": ["amazon", "google", "bloomberg", "uber"],
  "Best Time to Buy and Sell Stock III": ["amazon", "google", "goldman-sachs"],
  "Best Time to Buy and Sell Stock with Cooldown": ["amazon", "google", "goldman-sachs"],
  "Rearrange Elements by Sign": ["amazon", "google"],
  "Next Permutation": ["google", "amazon", "microsoft", "meta"],
  "Leaders in an Array": ["amazon", "adobe", "microsoft"],
  "Longest Consecutive Sequence": ["amazon", "google", "meta", "bloomberg", "uber"],
  "Set Matrix Zeroes": ["amazon", "microsoft", "meta", "bloomberg"],
  "Rotate Matrix by 90 Degrees": ["amazon", "google", "microsoft", "apple"],
  "Spiral Matrix": ["amazon", "google", "microsoft", "apple", "uber"],
  "Count Subarrays with Sum K": ["google", "meta", "amazon"],
  "Pascal's Triangle": ["amazon", "google", "microsoft", "adobe"],
  "3Sum": ["amazon", "google", "meta", "microsoft", "bloomberg", "uber", "apple"],
  "4Sum": ["amazon", "google", "microsoft"],
  "Merge Overlapping Intervals": ["google", "meta", "microsoft", "amazon", "bloomberg", "uber"],
  "Merge Sorted Arrays Without Extra Space": ["amazon", "google", "microsoft"],
  "Count Inversions": ["amazon", "google", "uber"],
  "Reverse Pairs": ["amazon", "google", "microsoft"],
  "Maximum Product Subarray": ["amazon", "google", "microsoft", "bloomberg", "uber"],

  // ── Binary Search ──
  "Binary Search to Find X in Sorted Array": ["amazon", "microsoft", "google", "apple"],
  "Search Insert Position": ["amazon", "google", "bloomberg"],
  "Find First and Last Position of Element": ["amazon", "google", "meta", "microsoft", "bloomberg"],
  "Search in Rotated Sorted Array I": ["amazon", "google", "meta", "microsoft", "uber", "bloomberg"],
  "Find Minimum in Rotated Sorted Array": ["amazon", "google", "meta", "microsoft"],
  "Single Element in a Sorted Array": ["amazon", "google", "microsoft"],
  "Find Peak Element": ["google", "meta", "amazon", "microsoft"],
  "Find Square Root of a Number": ["amazon", "google", "apple", "bloomberg"],
  "Koko Eating Bananas": ["google", "amazon", "meta"],
  "Capacity to Ship Packages Within D Days": ["amazon", "google"],
  "Split Array Largest Sum": ["google", "amazon", "meta"],
  "Search a 2D Matrix": ["amazon", "microsoft", "bloomberg", "meta"],
  "Search a 2D Matrix II": ["amazon", "google", "microsoft", "apple"],
  "Kth Missing Positive Number": ["amazon", "meta"],

  // ── Strings ──
  "Reverse Words in a String": ["amazon", "microsoft", "bloomberg", "apple"],
  "Longest Common Prefix": ["amazon", "google", "microsoft", "adobe"],
  "Isomorphic Strings": ["amazon", "google", "bloomberg"],
  "Valid Anagram": ["amazon", "google", "microsoft", "bloomberg", "uber"],
  "Sort Characters by Frequency": ["amazon", "google", "bloomberg"],
  "Roman to Integer": ["amazon", "microsoft", "bloomberg", "apple", "adobe"],
  "String to Integer (atoi)": ["amazon", "microsoft", "bloomberg", "uber"],
  "Longest Palindromic Substring": ["amazon", "google", "microsoft", "meta", "uber"],

  // ── Linked List ──
  "Middle of the Linked List": ["amazon", "microsoft", "apple"],
  "Reverse Linked List": ["amazon", "microsoft", "apple", "bloomberg", "google", "meta"],
  "Detect Cycle in Linked List": ["amazon", "microsoft", "google", "meta", "bloomberg"],
  "Find Starting Point of Cycle": ["amazon", "microsoft", "google"],
  "Check if Linked List is Palindrome": ["amazon", "meta", "microsoft", "bloomberg"],
  "Odd Even Linked List": ["amazon", "bloomberg"],
  "Remove Nth Node from End of List": ["amazon", "meta", "google", "microsoft"],
  "Delete the Middle Node of a Linked List": ["amazon", "microsoft"],
  "Sort List": ["amazon", "google", "meta"],
  "Intersection of Two Linked Lists": ["amazon", "microsoft", "bloomberg", "meta"],
  "Add Two Numbers": ["amazon", "google", "meta", "microsoft", "bloomberg", "uber"],
  "Reverse Nodes in K-Group": ["amazon", "google", "meta", "microsoft", "uber"],
  "Rotate List": ["amazon", "google"],
  "Copy List with Random Pointer": ["amazon", "microsoft", "bloomberg", "meta"],
  "Design Browser History": ["amazon", "google"],
  "Flatten a Linked List": ["amazon", "microsoft"],

  // ── Recursion & Backtracking ──
  "Pow(x, n)": ["amazon", "google", "meta", "microsoft", "bloomberg"],
  "Generate Parentheses": ["amazon", "google", "meta", "microsoft", "uber"],
  "Subsets I": ["amazon", "google", "meta", "bloomberg", "uber"],
  "Subsets II": ["amazon", "google", "meta"],
  "Combination Sum I": ["amazon", "microsoft", "google", "meta"],
  "Combination Sum II": ["amazon", "google"],
  "Letter Combinations of a Phone Number": ["amazon", "google", "meta", "uber"],
  "Palindrome Partitioning": ["amazon", "google", "meta"],
  "N-Queens": ["amazon", "google", "meta", "microsoft"],
  "Sudoku Solver": ["amazon", "google", "uber"],
  "Word Break": ["amazon", "google", "meta", "microsoft", "bloomberg", "uber"],
  "Word Search": ["amazon", "microsoft", "bloomberg", "google"],
  "Expression Add Operators": ["google", "meta", "amazon"],

  // ── Bit Manipulation ──
  "Check if Number is Power of 2": ["amazon", "google", "apple"],
  "Count Number of Set Bits": ["amazon", "microsoft", "apple"],
  "Single Number II": ["amazon", "google"],
  "Single Number III": ["amazon", "google"],
  "Divide Two Integers": ["amazon", "meta", "microsoft"],

  // ── Stack & Queues ──
  "Implement Stack using Queues": ["amazon", "microsoft", "bloomberg"],
  "Implement Queue using Stacks": ["amazon", "microsoft", "bloomberg", "apple"],
  "Valid Parentheses": ["amazon", "meta", "microsoft", "bloomberg", "google", "uber"],
  "Min Stack": ["amazon", "google", "microsoft", "bloomberg", "uber"],
  "Next Greater Element I": ["amazon", "google", "bloomberg"],
  "Next Greater Element II": ["amazon", "google"],
  "Trapping Rain Water": ["amazon", "google", "meta", "microsoft", "goldman-sachs", "bloomberg", "uber", "apple"],
  "Sum of Subarray Minimums": ["amazon", "google"],
  "Online Stock Span": ["amazon", "bloomberg"],
  "Asteroid Collision": ["amazon", "google", "uber"],
  "Largest Rectangle in Histogram": ["amazon", "google", "microsoft", "bloomberg"],
  "Sliding Window Maximum": ["amazon", "google", "microsoft", "uber"],
  "LFU Cache": ["amazon", "google", "meta"],
  "LRU Cache": ["amazon", "google", "meta", "microsoft", "bloomberg", "uber"],
  "Maximal Rectangle": ["amazon", "google", "microsoft"],

  // ── Sliding Window & Two Pointer ──
  "Longest Substring Without Repeating Characters": ["amazon", "google", "meta", "microsoft", "bloomberg", "uber", "apple"],
  "Maximum Points You Can Obtain from Cards": ["google", "amazon"],
  "Longest Repeating Character Replacement": ["google", "amazon", "uber"],
  "Max Consecutive Ones III": ["google", "amazon", "meta"],
  "Fruit Into Baskets": ["google", "amazon"],
  "Minimum Window Substring": ["amazon", "google", "meta", "microsoft", "uber", "bloomberg"],
  "Subarrays with K Different Integers": ["amazon", "google"],

  // ── Heaps ──
  "Kth Largest Element in an Array": ["amazon", "google", "meta", "microsoft", "bloomberg", "uber"],
  "Kth Smallest Element": ["amazon", "google", "microsoft"],
  "Merge K Sorted Lists": ["amazon", "google", "meta", "microsoft", "uber"],
  "Task Scheduler": ["amazon", "meta", "microsoft", "bloomberg"],
  "Hand of Straights": ["google", "amazon"],
  "Design Twitter": ["amazon", "google"],
  "Find Median from Data Stream": ["amazon", "google", "meta", "microsoft", "bloomberg"],
  "Top K Frequent Elements": ["amazon", "google", "meta", "microsoft", "uber"],

  // ── Greedy ──
  "Assign Cookies": ["amazon", "google"],
  "Lemonade Change": ["amazon", "google"],
  "Valid Parenthesis String": ["amazon", "meta"],
  "N Meetings in One Room": ["amazon", "microsoft"],
  "Job Sequencing Problem": ["amazon", "microsoft"],
  "Candy": ["amazon", "google", "uber"],
  "Insert Interval": ["google", "meta", "amazon", "microsoft"],
  "Merge Intervals": ["google", "meta", "microsoft", "amazon", "bloomberg", "uber"],
  "Non-overlapping Intervals": ["google", "amazon", "meta"],
  "Jump Game": ["amazon", "google", "microsoft", "uber"],
  "Jump Game II": ["amazon", "google", "microsoft"],

  // ── Binary Trees ──
  "Binary Tree Inorder Traversal": ["amazon", "microsoft", "bloomberg"],
  "Binary Tree Preorder Traversal": ["amazon", "microsoft"],
  "Binary Tree Level Order Traversal": ["amazon", "meta", "microsoft", "bloomberg"],
  "Maximum Depth of Binary Tree": ["amazon", "google", "microsoft", "apple"],
  "Balanced Binary Tree": ["amazon", "google", "bloomberg"],
  "Diameter of Binary Tree": ["amazon", "google", "meta", "bloomberg"],
  "Binary Tree Maximum Path Sum": ["amazon", "google", "meta", "microsoft", "uber"],
  "Same Tree": ["amazon", "microsoft", "bloomberg"],
  "Binary Tree Zigzag Level Order Traversal": ["amazon", "meta", "microsoft", "bloomberg"],
  "Vertical Order Traversal of a Binary Tree": ["amazon", "meta", "google"],
  "Symmetric Tree": ["amazon", "microsoft", "bloomberg"],
  "Lowest Common Ancestor of a Binary Tree": ["amazon", "google", "meta", "microsoft", "uber"],
  "Maximum Width of Binary Tree": ["amazon", "google"],
  "All Nodes Distance K in Binary Tree": ["amazon", "google", "meta"],
  "Count Complete Tree Nodes": ["amazon", "google"],
  "Flatten Binary Tree to Linked List": ["amazon", "meta", "microsoft"],
  "Construct BST from Preorder Traversal": ["amazon", "google"],

  // ── BST ──
  "Search in a Binary Search Tree": ["amazon", "microsoft"],
  "Insert into a Binary Search Tree": ["amazon", "google"],
  "Delete Node in a BST": ["amazon", "google", "microsoft"],
  "Kth Smallest Element in a BST": ["amazon", "google", "meta", "uber"],
  "Validate Binary Search Tree": ["amazon", "google", "meta", "microsoft", "bloomberg"],
  "Lowest Common Ancestor of a BST": ["amazon", "google", "meta"],
  "Two Sum IV - Input is a BST": ["amazon", "microsoft"],
  "Recover Binary Search Tree": ["amazon", "google", "microsoft"],

  // ── Graphs ──
  "Number of Islands": ["amazon", "google", "meta", "microsoft", "bloomberg", "uber"],
  "Number of Provinces": ["amazon", "google", "meta"],
  "Rotting Oranges": ["amazon", "google", "microsoft"],
  "Flood Fill": ["amazon", "google", "microsoft"],
  "Surrounded Regions": ["amazon", "google", "microsoft"],
  "Number of Enclaves": ["amazon", "google"],
  "Word Ladder": ["amazon", "google", "meta", "uber"],
  "Course Schedule": ["amazon", "google", "meta", "microsoft", "uber"],
  "Course Schedule II": ["amazon", "google", "meta"],
  "Find Eventual Safe States": ["google", "amazon"],
  "Dijkstra's Algorithm": ["amazon", "google", "microsoft", "uber"],
  "Bellman-Ford Algorithm": ["amazon", "google"],
  "Network Delay Time": ["amazon", "google", "uber"],
  "Cheapest Flights Within K Stops": ["amazon", "google", "meta", "uber"],
  "Path with Minimum Effort": ["google", "amazon"],
  "Shortest Path in Binary Matrix": ["amazon", "google", "meta"],
  "Number of Operations to Make Network Connected": ["google", "amazon"],
  "Most Stones Removed with Same Row or Column": ["google", "amazon"],
  "Check if Graph is Bipartite (BFS)": ["amazon", "google", "meta"],

  // ── Dynamic Programming ──
  "Climbing Stairs": ["amazon", "google", "apple", "adobe", "microsoft", "bloomberg"],
  "House Robber": ["amazon", "google", "microsoft", "uber"],
  "House Robber II": ["amazon", "google", "microsoft"],
  "Unique Paths": ["amazon", "google", "bloomberg", "meta"],
  "Unique Paths II": ["amazon", "google"],
  "Minimum Path Sum": ["amazon", "google", "microsoft", "goldman-sachs"],
  "Triangle": ["amazon", "google"],
  "Coin Change": ["amazon", "google", "microsoft", "bloomberg", "uber"],
  "Coin Change II": ["amazon", "google"],
  "Partition Equal Subset Sum": ["amazon", "meta", "google"],
  "Target Sum": ["amazon", "meta", "google"],
  "0/1 Knapsack": ["amazon", "google", "microsoft"],
  "Longest Common Subsequence": ["amazon", "google", "microsoft"],
  "Shortest Common Supersequence": ["amazon", "google"],
  "Distinct Subsequences": ["amazon", "google"],
  "Longest Increasing Subsequence": ["amazon", "google", "microsoft", "meta"],
  "Largest Divisible Subset": ["google", "amazon"],
  "Longest String Chain": ["google", "amazon", "meta"],
  "Burst Balloons": ["google", "amazon", "uber"],
  "Minimum Cost to Cut a Stick": ["amazon", "google"],
  "Palindrome Partitioning II": ["amazon", "google"],
  "Maximal Rectangle (Area with All 1s)": ["amazon", "google", "microsoft"],

  // ── Tries ──
  "Implement Trie (Prefix Tree)": ["amazon", "google", "microsoft", "bloomberg"],
  "Maximum XOR of Two Numbers in an Array": ["google", "amazon", "microsoft"],
};

// ── Indian Companies overlay (merged into COMPANY_MAP) ──
const INDIAN_COMPANY_MAP: Record<string, string[]> = {
  // Arrays
  "Two Sum": ["tcs", "infosys", "wipro", "accenture", "cognizant", "flipkart", "paytm", "zoho"],
  "Remove Duplicates from Sorted Array": ["tcs", "infosys", "wipro", "accenture", "hcl", "lti", "cognizant"],
  "Move Zeroes to End": ["tcs", "infosys", "wipro", "accenture", "cognizant"],
  "Missing Number": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant", "zoho"],
  "Max Consecutive Ones": ["tcs", "infosys", "wipro", "cognizant"],
  "Single Number": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant"],
  "Sort Colors (Dutch National Flag)": ["tcs", "infosys", "flipkart", "paytm", "zoho"],
  "Majority Element (> n/2 times)": ["tcs", "infosys", "accenture", "flipkart", "zoho"],
  "Maximum Subarray Sum (Kadane's Algorithm)": ["tcs", "infosys", "wipro", "accenture", "flipkart", "paytm", "zoho", "ola"],
  "Stock Buy and Sell": ["tcs", "infosys", "accenture", "flipkart", "paytm", "zoho"],
  "Best Time to Buy and Sell Stock": ["tcs", "infosys", "accenture", "flipkart", "paytm", "zoho"],
  "Rearrange Elements by Sign": ["tcs", "infosys", "wipro"],
  "Next Permutation": ["flipkart", "paytm", "zoho"],
  "Leaders in an Array": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant", "zoho"],
  "Longest Consecutive Sequence": ["flipkart", "paytm", "razorpay"],
  "Set Matrix Zeroes": ["tcs", "infosys", "flipkart", "zoho"],
  "Rotate Matrix by 90 Degrees": ["tcs", "infosys", "flipkart", "zoho"],
  "Spiral Matrix": ["tcs", "infosys", "flipkart", "zoho"],
  "Pascal's Triangle": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant"],
  "3Sum": ["flipkart", "paytm", "zoho", "razorpay"],
  "Merge Overlapping Intervals": ["flipkart", "paytm", "swiggy", "razorpay"],
  "Maximum Product Subarray": ["flipkart", "paytm", "zoho"],
  "Count Subarrays with Sum K": ["flipkart", "zoho"],

  // Binary Search
  "Binary Search to Find X in Sorted Array": ["tcs", "infosys", "wipro", "accenture", "hcl", "lti", "cognizant"],
  "Search Insert Position": ["tcs", "infosys", "wipro", "cognizant"],
  "Find First and Last Position of Element": ["tcs", "infosys", "flipkart", "zoho"],
  "Search in Rotated Sorted Array I": ["flipkart", "paytm", "zoho", "phonepe"],
  "Find Minimum in Rotated Sorted Array": ["flipkart", "paytm"],
  "Find Peak Element": ["flipkart", "zoho"],
  "Find Square Root of a Number": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant", "zoho"],
  "Search a 2D Matrix": ["tcs", "infosys", "flipkart", "zoho"],
  "Search a 2D Matrix II": ["flipkart", "zoho"],

  // Strings
  "Reverse Words in a String": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant", "zoho"],
  "Longest Common Prefix": ["tcs", "infosys", "wipro", "accenture", "cognizant", "zoho"],
  "Valid Anagram": ["tcs", "infosys", "wipro", "accenture", "cognizant", "flipkart"],
  "Roman to Integer": ["tcs", "infosys", "wipro", "accenture", "cognizant"],
  "String to Integer (atoi)": ["tcs", "infosys", "flipkart", "zoho"],
  "Longest Palindromic Substring": ["flipkart", "paytm", "zoho", "ola"],
  "Isomorphic Strings": ["tcs", "infosys", "wipro", "cognizant"],
  "Sort Characters by Frequency": ["flipkart", "zoho"],

  // Linked List
  "Middle of the Linked List": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant"],
  "Reverse Linked List": ["tcs", "infosys", "wipro", "accenture", "hcl", "lti", "cognizant", "flipkart", "zoho"],
  "Detect Cycle in Linked List": ["tcs", "infosys", "wipro", "accenture", "flipkart", "zoho"],
  "Find Starting Point of Cycle": ["flipkart", "zoho"],
  "Check if Linked List is Palindrome": ["tcs", "infosys", "accenture", "flipkart", "zoho"],
  "Remove Nth Node from End of List": ["tcs", "infosys", "flipkart"],
  "Sort List": ["flipkart", "paytm"],
  "Intersection of Two Linked Lists": ["tcs", "infosys", "wipro", "accenture", "flipkart"],
  "Add Two Numbers": ["flipkart", "paytm", "zoho", "razorpay"],
  "Reverse Nodes in K-Group": ["flipkart", "paytm"],
  "Copy List with Random Pointer": ["flipkart", "zoho"],
  "Flatten a Linked List": ["flipkart", "zoho"],

  // Recursion & Backtracking
  "Pow(x, n)": ["tcs", "infosys", "wipro", "accenture", "zoho"],
  "Generate Parentheses": ["flipkart", "paytm", "zoho"],
  "Subsets I": ["flipkart", "zoho"],
  "Combination Sum I": ["flipkart", "zoho"],
  "Letter Combinations of a Phone Number": ["flipkart", "paytm"],
  "Palindrome Partitioning": ["flipkart", "zoho"],
  "N-Queens": ["flipkart", "zoho"],
  "Sudoku Solver": ["flipkart", "zoho"],
  "Word Break": ["flipkart", "paytm", "razorpay", "phonepe"],
  "Word Search": ["flipkart", "zoho"],

  // Bit Manipulation
  "Check if Number is Power of 2": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant"],
  "Count Number of Set Bits": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant"],

  // Stack & Queues
  "Valid Parentheses": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant", "flipkart", "zoho"],
  "Min Stack": ["flipkart", "zoho"],
  "Trapping Rain Water": ["flipkart", "paytm", "zoho", "swiggy", "phonepe", "razorpay"],
  "Largest Rectangle in Histogram": ["flipkart", "paytm", "zoho"],
  "Sliding Window Maximum": ["flipkart", "paytm"],
  "LRU Cache": ["flipkart", "paytm", "swiggy", "phonepe", "razorpay", "ola"],
  "Next Greater Element I": ["tcs", "infosys", "accenture", "flipkart"],
  "Implement Stack using Queues": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant"],
  "Implement Queue using Stacks": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant"],

  // Sliding Window
  "Longest Substring Without Repeating Characters": ["flipkart", "paytm", "zoho", "swiggy", "phonepe", "razorpay"],
  "Minimum Window Substring": ["flipkart", "paytm", "razorpay"],
  "Longest Repeating Character Replacement": ["flipkart", "paytm"],

  // Heaps
  "Kth Largest Element in an Array": ["flipkart", "paytm", "zoho"],
  "Merge K Sorted Lists": ["flipkart", "paytm"],
  "Top K Frequent Elements": ["flipkart", "paytm", "zoho", "swiggy"],
  "Find Median from Data Stream": ["flipkart", "paytm", "razorpay"],
  "Task Scheduler": ["flipkart", "swiggy"],

  // Greedy
  "N Meetings in One Room": ["tcs", "infosys", "wipro", "accenture", "flipkart", "zoho"],
  "Job Sequencing Problem": ["tcs", "infosys", "flipkart", "zoho"],
  "Assign Cookies": ["tcs", "infosys", "wipro", "accenture"],
  "Lemonade Change": ["tcs", "infosys", "wipro"],
  "Merge Intervals": ["flipkart", "paytm", "swiggy", "razorpay"],
  "Jump Game": ["flipkart", "paytm", "zoho"],
  "Candy": ["flipkart", "zoho"],

  // Binary Trees
  "Binary Tree Inorder Traversal": ["tcs", "infosys", "wipro", "accenture", "flipkart", "zoho"],
  "Binary Tree Preorder Traversal": ["tcs", "infosys", "wipro", "accenture"],
  "Binary Tree Level Order Traversal": ["tcs", "infosys", "flipkart", "zoho", "paytm"],
  "Maximum Depth of Binary Tree": ["tcs", "infosys", "wipro", "accenture", "flipkart"],
  "Balanced Binary Tree": ["tcs", "infosys", "flipkart", "zoho"],
  "Diameter of Binary Tree": ["flipkart", "paytm", "zoho"],
  "Binary Tree Maximum Path Sum": ["flipkart", "paytm", "zoho"],
  "Symmetric Tree": ["tcs", "infosys", "wipro", "accenture"],
  "Same Tree": ["tcs", "infosys", "wipro"],
  "Lowest Common Ancestor of a Binary Tree": ["flipkart", "paytm", "zoho"],
  "Binary Tree Zigzag Level Order Traversal": ["flipkart", "paytm"],
  "Vertical Order Traversal of a Binary Tree": ["flipkart", "zoho"],
  "Flatten Binary Tree to Linked List": ["flipkart", "zoho"],

  // BST
  "Search in a Binary Search Tree": ["tcs", "infosys", "wipro", "accenture"],
  "Validate Binary Search Tree": ["flipkart", "paytm", "zoho"],
  "Kth Smallest Element in a BST": ["flipkart", "paytm", "zoho"],
  "Lowest Common Ancestor of a BST": ["flipkart", "zoho"],
  "Implement Trie (Prefix Tree)": ["flipkart"],

  // Graphs
  "Number of Islands": ["flipkart", "paytm", "swiggy", "phonepe", "razorpay", "ola"],
  "Course Schedule": ["flipkart", "paytm", "razorpay"],
  "Rotting Oranges": ["flipkart", "paytm", "zoho"],
  "Flood Fill": ["tcs", "infosys", "flipkart", "zoho"],
  "Number of Provinces": ["flipkart", "paytm"],
  "Word Ladder": ["flipkart", "paytm"],
  "Dijkstra's Algorithm": ["flipkart", "paytm", "ola", "swiggy"],
  "Cheapest Flights Within K Stops": ["flipkart", "paytm", "ola"],
  "Surrounded Regions": ["flipkart", "zoho"],
  "Shortest Path in Binary Matrix": ["flipkart", "paytm"],

  // Dynamic Programming
  "Climbing Stairs": ["tcs", "infosys", "wipro", "accenture", "hcl", "cognizant", "flipkart", "zoho"],
  "House Robber": ["flipkart", "paytm", "zoho"],
  "Unique Paths": ["tcs", "infosys", "flipkart", "zoho"],
  "Minimum Path Sum": ["flipkart", "zoho"],
  "Coin Change": ["flipkart", "paytm", "zoho", "razorpay", "phonepe"],
  "Partition Equal Subset Sum": ["flipkart", "paytm"],
  "Longest Common Subsequence": ["tcs", "infosys", "flipkart", "zoho"],
  "Longest Increasing Subsequence": ["flipkart", "paytm", "zoho"],
  "0/1 Knapsack": ["tcs", "infosys", "wipro", "accenture", "flipkart", "zoho"],
  "Target Sum": ["flipkart", "paytm"],
  "Burst Balloons": ["flipkart"],
};

// ── Hints by problem title ──
const HINTS_MAP: Record<string, string> = {
  // ── Step 1: Learn the Basics ──
  "User Input / Output": "Learn how your language reads from stdin and writes to stdout.",
  "Data Types": "Understand integer, float, char, string, and boolean types and their ranges.",
  "If Else Statements": "Practice branching logic with conditions, else-if chains, and nested ifs.",
  "Switch Statement": "Use switch for multi-way branching on a single variable.",
  "Arrays and Strings": "Arrays are contiguous memory; strings are char arrays. Practice indexing and iteration.",
  "Pattern 1 - Rectangular Star": "Use nested loops: outer for rows, inner for columns. Print '*' each iteration.",
  "Pattern 2 - Right-Angled Triangle": "Inner loop runs from 1 to current row number.",
  "Pattern 3 - Right-Angled Number Triangle": "Print the column number instead of '*' in the inner loop.",
  "Pattern 4 - Right-Angled Number Triangle II": "Print the row number repeatedly in the inner loop.",
  "Pattern 5 - Inverted Right-Angled Triangle": "Inner loop runs from current row to N (decreasing count).",
  "Pattern 6 - Inverted Number Triangle": "Same as inverted triangle but print column numbers.",
  "Pattern 7 - Star Pyramid": "Print spaces first (N-row), then stars (2*row-1).",
  "Pattern 8 - Inverted Star Pyramid": "Reverse the pyramid: row goes from N down to 1.",
  "Pattern 9 - Diamond Star": "Combine pyramid and inverted pyramid patterns.",
  "Pattern 10 - Half Diamond Star": "Print increasing stars then decreasing stars.",
  "Pattern 11 - Binary Number Triangle": "Alternate between 1 and 0. Start value flips each row.",
  "Pattern 12 - Number Crown": "Print numbers ascending, spaces in middle, then numbers descending.",
  "Pattern 13 - Increasing Number Triangle": "Maintain a counter that increments across rows.",
  "Pattern 14 - Increasing Letter Triangle": "Use char arithmetic: 'A' + column index.",
  "Pattern 15 - Reverse Letter Triangle": "Start from 'A' + (N - row) and go to 'A'.",
  "Pattern 16 - Alpha-Ramp": "Print the same letter (based on row) repeated row times.",
  "Pattern 17 - Alpha-Hill": "Print letters ascending then descending in each row.",
  "Pattern 18 - Alpha-Triangle": "Start from 'E' (or N-th letter) minus row offset.",
  "Pattern 19 - Symmetric-Void": "Print stars, then spaces (increasing), then stars again.",
  "Pattern 20 - Symmetric-Butterfly": "Combine increasing and decreasing symmetric patterns.",
  "Pattern 21 - Hollow Rectangle": "Print '*' only on borders (first/last row/column), spaces inside.",
  "Pattern 22 - The Number Pattern": "For each cell, value = N - min(row, col, N-1-row, N-1-col).",
  "Count Digits": "Repeatedly divide by 10 and count iterations, or convert to string and get length.",
  "Reverse a Number": "Extract last digit with mod 10, build reversed number by multiplying by 10.",
  "Check Palindrome": "Reverse the number and compare with original.",
  "GCD or HCF": "Euclidean algorithm: gcd(a, b) = gcd(b, a % b). Base case: gcd(a, 0) = a.",
  "Armstrong Numbers": "Sum of digits each raised to the power of digit count equals the number.",
  "Print all Divisors": "Loop from 1 to sqrt(n). If i divides n, both i and n/i are divisors.",
  "Check for Prime": "Check divisibility from 2 to sqrt(n). If no divisor found, it's prime.",
  "Print 1 to N using Recursion": "Base case: if n == 0 return. Recurse with n-1, then print n.",
  "Print N to 1 using Recursion": "Print n first, then recurse with n-1. Base case: n == 0.",
  "Sum of First N Numbers": "Return n + sum(n-1). Base case: sum(0) = 0.",
  "Factorial of N Numbers": "Return n * factorial(n-1). Base case: factorial(0) = 1.",
  "Reverse an Array using Recursion": "Swap elements at start and end indices, recurse inward.",
  "Check if String is Palindrome": "Compare characters at start and end, recurse inward.",
  "Fibonacci Number": "fib(n) = fib(n-1) + fib(n-2). Base cases: fib(0)=0, fib(1)=1.",
  "Print All Subsequences": "At each index, choose to include or exclude the element, recurse.",
  "Print All Subsequences with Sum K": "Track running sum; only print when sum equals K at end.",
  "Counting Frequencies of Array Elements": "Use a hash map: iterate array, increment count for each element.",
  "Find Highest / Lowest Frequency Element": "Build frequency map, then scan for max/min values.",
  "Hashing on Characters": "Use an array of size 26 (for lowercase) as a frequency counter.",
  "Count Frequency of Each Element in Array": "Use a hash map or array to count occurrences of each element.",

  // ── Step 2: Sorting ──
  "Selection Sort": "Find the minimum in unsorted portion, swap it to the front. Repeat.",
  "Bubble Sort": "Repeatedly swap adjacent elements if out of order. Largest bubbles to end.",
  "Insertion Sort": "Take each element, insert it into its correct position in the sorted portion.",
  "Merge Sort": "Divide array in half, recursively sort each half, merge sorted halves.",
  "Quick Sort": "Pick a pivot, partition elements around it, recursively sort partitions.",
  "Recursive Bubble Sort": "Do one pass of bubble sort, then recurse on n-1 elements.",
  "Recursive Insertion Sort": "Sort first n-1 elements recursively, insert nth element in correct position.",

  // ── Step 3: Arrays ──
  "Largest Element in an Array": "Single pass: track the maximum seen so far.",
  "Second Largest Element in an Array": "Track both largest and second largest in a single pass.",
  "Check if Array is Sorted": "Check if each element is <= the next. One violation means not sorted.",
  "Remove Duplicates from Sorted Array": "Two pointers: slow pointer tracks unique position, fast scans ahead.",
  "Left Rotate an Array by One Place": "Store first element, shift all left by one, place stored at end.",
  "Left Rotate an Array by K Places": "Reverse first K, reverse remaining, reverse entire array.",
  "Move Zeroes to End": "Two pointers: move non-zero elements forward, fill rest with zeros.",
  "Linear Search": "Scan each element sequentially until target is found or array ends.",
  "Union of Two Sorted Arrays": "Two pointers on sorted arrays, pick smaller, skip duplicates.",
  "Missing Number": "Sum formula: n*(n+1)/2 minus array sum gives the missing number. Or XOR all.",
  "Max Consecutive Ones": "Track current streak and max streak. Reset streak on 0.",
  "Single Number": "XOR all elements. Pairs cancel out, leaving the single number.",
  "Longest Subarray with Sum K (Positives)": "Sliding window: expand right, shrink left when sum exceeds K.",
  "Longest Subarray with Sum K (Positives + Negatives)": "Prefix sum with hash map: store first occurrence of each prefix sum.",
  "Two Sum": "Use a hash map to store complement values as you iterate.",
  "Sort Colors (Dutch National Flag)": "Three pointers: low, mid, high. Swap elements to partition into 0s, 1s, 2s.",
  "Majority Element (> n/2 times)": "Boyer-Moore voting: maintain candidate and count. Verify at end.",
  "Maximum Subarray Sum (Kadane's Algorithm)": "Kadane's algorithm: track current sum and max sum, reset current when negative.",
  "Stock Buy and Sell": "Track minimum price so far, compute profit at each step, keep maximum.",
  "Best Time to Buy and Sell Stock": "Track minimum price so far, compute profit at each step, keep maximum.",
  "Rearrange Elements by Sign": "Use two pointers: one for positive positions, one for negative.",
  "Next Permutation": "Find rightmost ascending pair, swap with next larger from right, reverse suffix.",
  "Leaders in an Array": "Traverse right to left, track maximum. An element is a leader if it's >= current max.",
  "Longest Consecutive Sequence": "Put all in a set. For each start of sequence (no n-1 exists), count consecutive.",
  "Set Matrix Zeroes": "Use first row/col as markers. Two passes: mark then zero out.",
  "Rotate Matrix by 90 Degrees": "Transpose the matrix, then reverse each row.",
  "Spiral Matrix": "Use four boundaries (top, bottom, left, right), shrink inward after each layer.",
  "Count Subarrays with Sum K": "Prefix sum with hash map: count how many times prefix_sum - K appeared before.",
  "Pascal's Triangle": "Each cell = C(row, col). Or build row by row: cell = left-above + above.",
  "3Sum": "Sort array, fix one element, use two pointers for the remaining pair.",
  "4Sum": "Sort array, fix two elements with nested loops, use two pointers for remaining pair.",
  "Largest Subarray with 0 Sum": "Prefix sum with hash map: if same prefix sum repeats, subarray between them sums to 0.",
  "Count Subarrays with XOR K": "Prefix XOR with hash map: count occurrences of prefix_xor ^ K.",
  "Merge Overlapping Intervals": "Sort by start time, then merge overlapping intervals greedily.",
  "Merge Sorted Arrays Without Extra Space": "Use gap method (Shell sort idea) or start from ends of both arrays.",
  "Count Inversions": "Modified merge sort: count while merging when left element > right element.",
  "Reverse Pairs": "Modified merge sort: count pairs where nums[i] > 2*nums[j] before merging.",
  "Maximum Product Subarray": "Track both max and min products (min can become max after negative).",

  // ── Step 4: Binary Search ──
  "Binary Search to Find X in Sorted Array": "Compare mid element with target, narrow search space by half each iteration.",
  "Implement Lower Bound": "Binary search: if mid >= target, answer = mid, search left. Else search right.",
  "Implement Upper Bound": "Binary search: if mid > target, answer = mid, search left. Else search right.",
  "Search Insert Position": "Binary search for lower bound: position where target would be inserted.",
  "Floor and Ceil in Sorted Array": "Two binary searches: floor is largest <= target, ceil is smallest >= target.",
  "Find First and Last Position of Element": "Two binary searches: one for first occurrence (go left), one for last (go right).",
  "Count Occurrences in Sorted Array": "Find first and last positions, count = last - first + 1.",
  "Search in Rotated Sorted Array I": "Binary search: determine which half is sorted, check if target is in that half.",
  "Search in Rotated Sorted Array II": "Same as I but handle duplicates: when nums[lo]==nums[mid]==nums[hi], shrink both.",
  "Find Minimum in Rotated Sorted Array": "Binary search: if mid > right, min is in right half. Else left half.",
  "Single Element in a Sorted Array": "Binary search on pairs: check if mid's pair is on left or right side.",
  "Find Peak Element": "Binary search: if mid < mid+1, peak is on right. Else on left.",
  "Search in Rotated Sorted Array with Duplicates": "Handle duplicates by trimming when arr[lo]==arr[mid]==arr[hi].",
  "Find Square Root of a Number": "Binary search on answer: find largest x where x*x <= n.",
  "Find Nth Root of a Number": "Binary search on answer: find x where x^n == target.",
  "Koko Eating Bananas": "Binary search on speed: minimum speed where total hours <= h.",
  "Minimum Days to Make M Bouquets": "Binary search on days: check if m bouquets of k flowers can be formed.",
  "Find the Smallest Divisor Given a Threshold": "Binary search on divisor: find smallest where ceil-division sum <= threshold.",
  "Capacity to Ship Packages Within D Days": "Binary search on capacity: minimum capacity to ship all in D days.",
  "Kth Missing Positive Number": "Binary search: at index i, missing count = arr[i] - (i+1). Find where missing >= k.",
  "Aggressive Cows": "Binary search on minimum distance: check if cows can be placed with at least mid distance.",
  "Book Allocation Problem": "Binary search on max pages: find minimum max-pages such that allocation is possible.",
  "Split Array Largest Sum": "Binary search on answer: minimize the largest sum when splitting into k subarrays.",
  "Search a 2D Matrix": "Treat 2D matrix as 1D sorted array. Binary search with row = mid/cols, col = mid%cols.",
  "Search a 2D Matrix II": "Start from top-right corner: go left if target is smaller, down if larger.",
  "Find Peak Element in 2D Grid": "Binary search on columns, find max in mid column, compare with neighbors.",
  "Median in a Row-wise Sorted Matrix": "Binary search on value: count elements <= mid across all rows.",

  // ── Step 5: Strings ──
  "Remove Outermost Parentheses": "Track depth counter: skip chars when depth transitions to/from 0.",
  "Reverse Words in a String": "Split by spaces, reverse the array of words, join back.",
  "Largest Odd Number in String": "Scan from right: first odd digit means the substring up to it is the answer.",
  "Longest Common Prefix": "Compare characters column by column across all strings. Stop at first mismatch.",
  "Isomorphic Strings": "Use two maps to track char-to-char mapping in both directions.",
  "Rotate String": "Concatenate s with itself: s+s. Check if goal is a substring.",
  "Valid Anagram": "Count character frequencies for both strings. They must match.",
  "Sort Characters by Frequency": "Count frequencies, sort by count descending, build result.",
  "Maximum Nesting Depth of the Parentheses": "Track current depth with counter, record the maximum.",
  "Roman to Integer": "Scan right to left. If current < next, subtract. Else add.",
  "String to Integer (atoi)": "Skip whitespace, handle sign, convert digits. Clamp to 32-bit range.",
  "Count Number of Substrings": "Use sliding window to count substrings with at most K distinct chars.",
  "Longest Palindromic Substring": "Expand around center for each position (odd and even length).",
  "Sum of Beauty of All Substrings": "For each substring, track max and min frequency. Sum their differences.",
  "Reverse Every Word in a String": "Split string into words, reverse each word individually.",

  // ── Step 6: Linked List ──
  "Introduction to Linked List": "Create a node class with value and next pointer. Build by linking nodes.",
  "Insert Node at Head of Linked List": "Create new node, point its next to current head, update head.",
  "Insert Node at Tail of Linked List": "Traverse to last node, set its next to new node.",
  "Delete Node at Head of Linked List": "Move head to head.next. Old head is garbage collected.",
  "Delete Node at Tail of Linked List": "Traverse to second-to-last node, set its next to null.",
  "Search an Element in Linked List": "Traverse from head, compare each node's value with target.",
  "Introduction to Doubly Linked List": "Each node has prev, value, and next pointers.",
  "Insert Node at Head of DLL": "New node's next = head, head's prev = new node, update head.",
  "Insert Node at Tail of DLL": "Traverse to tail, set tail.next = new node, new node.prev = tail.",
  "Delete Node at Head of DLL": "Move head to head.next, set new head's prev to null.",
  "Delete Node at Tail of DLL": "Traverse to tail, set tail.prev.next = null.",
  "Middle of the Linked List": "Slow and fast pointers: slow moves 1 step, fast moves 2. Slow ends at middle.",
  "Reverse Linked List": "Use three pointers: prev, curr, next. Reassign links as you traverse.",
  "Detect Cycle in Linked List": "Floyd's algorithm: slow pointer moves 1 step, fast moves 2. If they meet, cycle exists.",
  "Find Starting Point of Cycle": "After detection, reset one pointer to head. Move both by 1 until they meet.",
  "Length of Loop in Linked List": "After detecting cycle meeting point, count nodes until you return to that point.",
  "Check if Linked List is Palindrome": "Find middle, reverse second half, compare with first half.",
  "Odd Even Linked List": "Separate odd-indexed and even-indexed nodes into two lists, concatenate.",
  "Remove Nth Node from End of List": "Two pointers: advance fast by N, then move both until fast hits end.",
  "Delete the Middle Node of a Linked List": "Slow and fast pointers. When fast reaches end, slow is at middle.",
  "Sort List": "Use merge sort: find middle, split, sort halves, merge.",
  "Intersection of Two Linked Lists": "Calculate lengths, align starts, then traverse together until nodes match.",
  "Add 1 to a Number Represented by LL": "Reverse list, add 1 with carry, reverse back.",
  "Add Two Numbers": "Traverse both lists simultaneously, sum digits with carry.",
  "Delete All Occurrences of a Key in DLL": "Traverse and unlink matching nodes by updating prev/next pointers.",
  "Reverse Nodes in K-Group": "Reverse k nodes at a time using iterative or recursive approach.",
  "Rotate List": "Connect tail to head (circular), then break at length-k position.",
  "Flatten a Linked List": "Merge sorted down-lists one by one, similar to merge two sorted lists.",
  "Copy List with Random Pointer": "Interleave cloned nodes, set random pointers, then separate lists.",
  "Design Browser History": "Use a doubly linked list or two stacks (back/forward).",

  // ── Step 7: Recursion & Backtracking ──
  "Recursive Implementation of atoi": "Process one digit at a time recursively, accumulating the result.",
  "Pow(x, n)": "Binary exponentiation: if n is even, pow(x*x, n/2). If odd, x * pow(x, n-1).",
  "Count Good Numbers": "Even positions: 5 choices (0,2,4,6,8). Odd positions: 4 choices (2,3,5,7). Use fast power.",
  "Sort a Stack using Recursion": "Pop top, recursively sort remaining, insert popped element in correct position.",
  "Reverse a Stack using Recursion": "Pop top, recursively reverse remaining, insert popped at bottom.",
  "Generate Parentheses": "Backtrack: add '(' if open < n, add ')' if close < open.",
  "Subsets I": "At each index, include or exclude the element. Recurse to next index.",
  "Subsets II": "Sort first. Skip duplicates at same recursion level to avoid duplicate subsets.",
  "Combination Sum I": "Include current element (stay at index) or skip it. Recurse.",
  "Combination Sum II": "Sort first. Include once, move to next index. Skip consecutive duplicates.",
  "Combination Sum III": "Find k numbers from 1-9 summing to n. Backtrack with decreasing target.",
  "Subsequence with Sum K": "Include/exclude each element. Track running sum, print when equals K.",
  "Letter Combinations of a Phone Number": "Map digits to letters. Backtrack through each digit's possible chars.",
  "Palindrome Partitioning": "Backtracking: try all prefixes, if palindrome, recurse on remaining.",
  "N-Queens": "Backtracking: place queens row by row, check column and diagonal conflicts.",
  "Sudoku Solver": "Backtracking: try digits 1-9 in each empty cell, validate row/col/box constraints.",
  "M-Coloring Problem": "Backtracking: try each color for current node, check no adjacent node has same color.",
  "Rat in a Maze": "Backtracking: try all four directions, mark visited, backtrack if dead end.",
  "Word Break": "DP: dp[i] = true if s[0..i] can be segmented. Check all prefixes in dictionary.",
  "Word Search": "DFS from each cell matching first char. Mark visited, backtrack.",
  "Expression Add Operators": "Backtracking: try +, -, * between digits. Track running value and last operand for *.",

  // ── Step 8: Bit Manipulation ──
  "Introduction to Bit Manipulation": "Learn AND, OR, XOR, NOT, left shift, right shift operations.",
  "Check if i-th Bit is Set or Not": "AND the number with (1 << i). If result is non-zero, bit is set.",
  "Set / Clear / Toggle the i-th Bit": "Set: OR with (1<<i). Clear: AND with ~(1<<i). Toggle: XOR with (1<<i).",
  "Check if Number is Odd or Even": "AND with 1: if result is 1, odd. If 0, even.",
  "Check if Number is Power of 2": "n > 0 && (n & (n-1)) == 0. Power of 2 has exactly one set bit.",
  "Count Number of Set Bits": "Brian Kernighan's: n = n & (n-1) clears lowest set bit. Count iterations.",
  "Swap Two Numbers Without Temp Variable": "XOR swap: a ^= b; b ^= a; a ^= b.",
  "Single Number II": "Count bits: for each position, sum all bits mod 3 gives the single number's bit.",
  "Single Number III": "XOR all gives a^b. Find a differing bit, split numbers into two groups by that bit.",
  "XOR of Numbers in a Given Range": "XOR(1..n) has a pattern repeating every 4: n, 1, n+1, 0.",
  "Divide Two Integers": "Bit shifting: find largest (divisor << k) <= dividend, subtract and repeat.",
  "Count Set Bits from 1 to N": "Pattern: every 2^k numbers contribute 2^(k-1) set bits at k-th position.",
  "Find Two Missing Numbers": "XOR all elements and 1..n. XOR result differentiates the two missing numbers.",
  "Minimum Flips to Convert A to B": "XOR A and B, count set bits in the result.",
  "Power Set (Generate All Subsets)": "Iterate from 0 to 2^n - 1. Each bit pattern represents a subset.",
  "Find XOR of Numbers in a Range": "XOR(L..R) = XOR(1..R) ^ XOR(1..L-1).",
  "Minimize XOR": "Greedily set bits from most significant to match target's bit count.",

  // ── Step 9: Stack & Queues ──
  "Implement Stack using Arrays": "Use array with top pointer. Push: arr[++top] = val. Pop: return arr[top--].",
  "Implement Queue using Arrays": "Use circular array with front and rear pointers.",
  "Implement Stack using Queues": "Push to q2, transfer all from q1 to q2, swap q1 and q2.",
  "Implement Queue using Stacks": "Two stacks: push to s1. For pop, transfer s1 to s2 if s2 empty, pop s2.",
  "Valid Parentheses": "Use a stack: push opening brackets, pop and compare for closing brackets.",
  "Min Stack": "Keep a parallel stack tracking the minimum at each level.",
  "Implement Stack using Linked List": "Push: insert at head. Pop: remove head. Top: return head value.",
  "Implement Queue using Linked List": "Enqueue: insert at tail. Dequeue: remove from head.",
  "Infix to Postfix Conversion": "Use operator stack. Pop higher/equal precedence operators before pushing.",
  "Prefix to Infix Conversion": "Scan right to left. For operator, pop two operands, combine with parens.",
  "Prefix to Postfix Conversion": "Scan right to left. For operator, pop two, concatenate as op1+op2+operator.",
  "Postfix to Infix Conversion": "Scan left to right. For operator, pop two operands, combine with parens.",
  "Postfix to Prefix Conversion": "Scan left to right. For operator, pop two, concatenate as operator+op1+op2.",
  "Infix to Prefix Conversion": "Reverse infix, swap parens, apply infix-to-postfix, reverse result.",
  "Next Greater Element I": "Stack: traverse right to left, pop smaller elements, top of stack is NGE.",
  "Next Greater Element II": "Circular array: iterate twice (2*n), use modulo. Same monotonic stack approach.",
  "Next Smaller Element": "Stack: traverse left to right, pop greater elements, top is next smaller.",
  "Trapping Rain Water": "For each bar, water = min(maxLeft, maxRight) - height. Use two pointers.",
  "Sum of Subarray Minimums": "Monotonic stack: find previous/next smaller for each element, compute contribution.",
  "Online Stock Span": "Monotonic stack: pop elements with price <= current, accumulate their spans.",
  "Asteroid Collision": "Stack: push positive. For negative, pop smaller positives. Equal sizes destroy both.",
  "Largest Rectangle in Histogram": "Use a stack to find next smaller element on both sides for each bar.",
  "Sliding Window Maximum": "Use a monotonic deque to maintain max in current window.",
  "LFU Cache": "Hash map + frequency map + doubly linked lists per frequency for O(1) operations.",
  "LRU Cache": "Combine a hash map with a doubly linked list for O(1) get and put.",
  "Celebrity Problem": "Two pointers from both ends: if A knows B, A is not celebrity. Narrow down.",
  "Maximal Rectangle": "For each row, build histogram heights. Apply largest rectangle in histogram.",

  // ── Step 10: Sliding Window & Two Pointer ──
  "Longest Substring Without Repeating Characters": "Sliding window with a set to track characters in current window.",
  "Maximum Points You Can Obtain from Cards": "Take from front and back. Minimize the window of n-k middle elements.",
  "Longest Repeating Character Replacement": "Sliding window: track max frequency char. Shrink when window - maxFreq > k.",
  "Binary Subarrays with Sum": "atMost(goal) - atMost(goal-1). Use sliding window for atMost.",
  "Count Number of Nice Subarrays": "Replace odd with 1, even with 0. Problem reduces to subarrays with sum K.",
  "Max Consecutive Ones III": "Sliding window: allow up to k zeros. Shrink when zero count exceeds k.",
  "Fruit Into Baskets": "Sliding window with at most 2 distinct types. Shrink when 3rd type enters.",
  "Number of Substrings Containing All Three Characters": "Sliding window: once all 3 present, all extensions to right are valid.",
  "Longest Substring with At Most K Distinct Characters": "Sliding window with hash map. Shrink when distinct count exceeds K.",
  "Subarrays with K Different Integers": "exactly(K) = atMost(K) - atMost(K-1).",
  "Minimum Window Substring": "Sliding window: expand to include all target chars, shrink to minimize.",
  "Minimum Window Subsequence": "Two pointers: find subsequence forward, then optimize backward.",

  // ── Step 11: Heaps ──
  "Introduction to Priority Queues / Heaps": "Heap is a complete binary tree. Parent >= children (max) or <= (min).",
  "Min Heap and Max Heap Implementation": "Insert: add at end, bubble up. Delete: swap root with last, bubble down.",
  "Heap Sort": "Build max heap, repeatedly extract max and place at end.",
  "Kth Largest Element in an Array": "Use a min-heap of size k, or QuickSelect for average O(n).",
  "Kth Smallest Element": "Use a max-heap of size k, or sort and return k-th element.",
  "Merge K Sorted Lists": "Use a min-heap to always pick the smallest head among k lists.",
  "Task Scheduler": "Greedily schedule most frequent tasks. Gap = (maxFreq-1) * (n+1) + countOfMax.",
  "Hand of Straights": "Sort and greedily form consecutive groups. Use a map to track counts.",
  "Design Twitter": "Merge k sorted feeds using a heap. Store tweets with timestamps.",
  "Find Median from Data Stream": "Use two heaps: max-heap for lower half, min-heap for upper half.",
  "Top K Frequent Elements": "Count frequencies, use a min-heap of size k or bucket sort.",
  "Top K Frequent Words": "Count frequencies, use heap with custom comparator for ties (lexicographic).",

  // ── Step 12: Greedy ──
  "Assign Cookies": "Sort both arrays. Greedily assign smallest cookie that satisfies each child.",
  "Fractional Knapsack": "Sort by value/weight ratio. Take greedily, fraction allowed for last item.",
  "Greedy Algorithm Introduction": "Make locally optimal choice at each step hoping for global optimum.",
  "Minimum Coins (Greedy)": "Use largest denomination first. Note: greedy doesn't always work for arbitrary coins.",
  "Lemonade Change": "Track $5 and $10 bills. Prefer giving $10+$5 change over three $5s.",
  "Valid Parenthesis String": "Track low and high possible open counts. * can be (, ), or empty.",
  "N Meetings in One Room": "Sort by end time. Greedily pick non-overlapping meetings.",
  "Minimum Number of Platforms": "Sort arrival and departure. Use two pointers to count overlapping trains.",
  "Job Sequencing Problem": "Sort by profit descending. Assign each job to latest available slot before deadline.",
  "Candy": "Two passes: left-to-right (compare with left neighbor), right-to-left (compare with right).",
  "Insert Interval": "Add all intervals before, merge overlapping, add all intervals after.",
  "Merge Intervals": "Sort by start, merge overlapping intervals by comparing end times.",
  "Non-overlapping Intervals": "Sort by end time. Greedily keep intervals that end earliest.",
  "Jump Game": "Track farthest reachable index. If current index > farthest, can't reach end.",
  "Jump Game II": "BFS-style: track current reach and farthest reach. Increment jumps at boundary.",

  // ── Step 13: Binary Trees ──
  "Introduction to Binary Trees": "Each node has value, left child, and right child pointers.",
  "Binary Tree Inorder Traversal": "Left → Root → Right. Use recursion or stack-based iteration.",
  "Binary Tree Preorder Traversal": "Root → Left → Right. Use recursion or stack-based iteration.",
  "Binary Tree Postorder Traversal": "Left → Right → Root. Use two stacks or modified iterative approach.",
  "Binary Tree Level Order Traversal": "BFS with queue: process each level, enqueue children.",
  "Iterative Preorder Traversal": "Stack: push root, pop and process, push right then left children.",
  "Iterative Inorder Traversal": "Stack: go left until null, pop and process, then go right.",
  "Iterative Postorder Traversal (1 Stack)": "Track last visited node. Process node only when right child is null or visited.",
  "Iterative Postorder Traversal (2 Stacks)": "Push to stack1, pop to stack2 (push left then right). Stack2 has postorder.",
  "Maximum Depth of Binary Tree": "DFS: return 1 + max(depth(left), depth(right)). Base: null = 0.",
  "Balanced Binary Tree": "DFS: check if |height(left) - height(right)| <= 1 at every node.",
  "Diameter of Binary Tree": "DFS: diameter through node = leftHeight + rightHeight. Track global max.",
  "Binary Tree Maximum Path Sum": "DFS returning max single-path sum; update global max with left+right+node.",
  "Same Tree": "DFS: both null = true. One null = false. Compare values, recurse on children.",
  "Binary Tree Zigzag Level Order Traversal": "BFS with level tracking. Reverse every alternate level.",
  "Boundary Traversal of Binary Tree": "Collect left boundary, leaves, and right boundary (reversed) separately.",
  "Vertical Order Traversal of a Binary Tree": "BFS/DFS with column index. Group by column, sort within same position.",
  "Top View of Binary Tree": "BFS with column index. Store first node encountered at each column.",
  "Bottom View of Binary Tree": "BFS with column index. Store last node encountered at each column.",
  "Left / Right View of Binary Tree": "BFS: last node in each level = right view. First = left view.",
  "Symmetric Tree": "Recursively compare left.left with right.right and left.right with right.left.",
  "Root to Node Path in Binary Tree": "DFS: build path while going down. Backtrack if target not in subtree.",
  "Lowest Common Ancestor of a Binary Tree": "DFS: if current is p or q, return it. If found in both subtrees, current is LCA.",
  "Maximum Width of Binary Tree": "BFS with indices: width = rightmost - leftmost + 1 at each level.",
  "Check for Children Sum Property": "At each node, check if node.val == left.val + right.val.",
  "All Nodes Distance K in Binary Tree": "Convert to graph (parent pointers), BFS from target node K levels.",
  "Minimum Time to Burn Entire Binary Tree": "Convert to graph, BFS from source. Max BFS depth = burn time.",
  "Count Complete Tree Nodes": "Compare left and right heights. If equal, nodes = 2^h - 1. Else recurse.",
  "Morris Traversal (Inorder & Preorder)": "Thread the tree: connect inorder predecessor's right to current node. O(1) space.",
  "Flatten Binary Tree to Linked List": "Preorder: connect each node's right to its preorder successor. Set left to null.",

  // ── Step 14: BST ──
  "Search in a Binary Search Tree": "Compare with root: go left if smaller, right if larger.",
  "Ceil in a BST": "If node >= key, it's a candidate. Go left. Else go right.",
  "Floor in a BST": "If node <= key, it's a candidate. Go right. Else go left.",
  "Insert into a Binary Search Tree": "BST property: go left/right until null, insert there.",
  "Delete Node in a BST": "Three cases: leaf (remove), one child (replace), two children (inorder successor).",
  "Kth Smallest Element in a BST": "Inorder traversal gives sorted order. Return k-th element.",
  "Validate Binary Search Tree": "Inorder traversal must be strictly increasing, or pass min/max bounds.",
  "Lowest Common Ancestor of a BST": "If both < node, go left. If both > node, go right. Else current is LCA.",
  "Construct BST from Preorder Traversal": "Use upper bound: first element is root, recurse with updated bounds.",
  "Inorder Successor / Predecessor in BST": "Successor: go right then leftmost. Or track last left-turn ancestor.",
  "Two Sum IV - Input is a BST": "Inorder to sorted array, then two pointers. Or use set with BFS/DFS.",
  "Recover Binary Search Tree": "Inorder traversal: find two swapped nodes (violations), swap values back.",

  // ── Step 15: Graphs ──
  "Graph Introduction and Representation": "Adjacency list or matrix. List is space-efficient for sparse graphs.",
  "BFS of Graph": "Use queue: process node, enqueue unvisited neighbors. Level-by-level traversal.",
  "DFS of Graph": "Use stack or recursion: go deep into one path before backtracking.",
  "Number of Provinces": "Count connected components using DFS/BFS or Union-Find.",
  "Connected Components in an Undirected Graph": "DFS/BFS from each unvisited node. Each traversal finds one component.",
  "Rotting Oranges": "Multi-source BFS from all rotten oranges simultaneously. Count minutes.",
  "Flood Fill": "DFS/BFS from starting cell, change color of all connected same-color cells.",
  "Detect Cycle in Undirected Graph (BFS)": "BFS: if a neighbor is visited and not the parent, cycle exists.",
  "Detect Cycle in Undirected Graph (DFS)": "DFS: if a neighbor is visited and not the parent, cycle exists.",
  "Detect Cycle in Directed Graph (DFS)": "Track recursion stack. If neighbor is in current recursion stack, cycle exists.",
  "01 Matrix / Distance of Nearest Cell Having 1": "Multi-source BFS from all 0-cells. Update distance layer by layer.",
  "Surrounded Regions": "DFS/BFS from border O's (mark safe). Everything else gets captured.",
  "Number of Enclaves": "Count land cells not reachable from border. DFS/BFS from border lands.",
  "Number of Islands": "Use BFS/DFS to explore connected land cells, mark visited.",
  "Word Ladder": "BFS: try changing each character to a-z, check if in word list.",
  "Topological Sort (DFS)": "DFS post-order: add to stack after all descendants processed. Pop for order.",
  "Topological Sort (BFS / Kahn's Algorithm)": "Track in-degrees. Start with 0 in-degree nodes. Remove edges, add new 0s.",
  "Course Schedule": "Topological sort using BFS (Kahn's algorithm) or DFS cycle detection.",
  "Course Schedule II": "Topological sort: return the order. If cycle exists, return empty.",
  "Alien Dictionary (Order of Characters)": "Compare adjacent words to build graph edges. Topological sort for order.",
  "Find Eventual Safe States": "Reverse graph + topological sort, or DFS with cycle detection.",
  "Dijkstra's Algorithm": "Greedy BFS with priority queue. Always process the closest unvisited node.",
  "Bellman-Ford Algorithm": "Relax all edges V-1 times. Detects negative cycles on V-th iteration.",
  "Floyd Warshall Algorithm": "All-pairs shortest path: dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j]) for each k.",
  "City with Smallest Number of Neighbours at Threshold Distance": "Floyd-Warshall, then count reachable cities within threshold for each city.",
  "Cheapest Flights Within K Stops": "BFS with level limit (K+1 levels) or Bellman-Ford with K+1 iterations.",
  "Network Delay Time": "Dijkstra's from source. Answer is max distance to any node.",
  "Path with Minimum Effort": "Binary search + BFS, or Dijkstra with effort as edge weight.",
  "Shortest Path in Binary Matrix": "BFS from (0,0) to (n-1,n-1). Move in 8 directions.",
  "Kruskal's Algorithm (MST)": "Sort edges by weight. Union-Find to add edges that don't create cycles.",
  "Prim's Algorithm (MST)": "Start from any node. Greedily add cheapest edge connecting to unvisited node.",
  "Disjoint Set Union (Union-Find)": "Union by rank + path compression for near O(1) operations.",
  "Number of Operations to Make Network Connected": "Need n-1 edges. Extra edges = edges - (n-1). Redistribute extras to connect components.",
  "Most Stones Removed with Same Row or Column": "Union-Find: connect stones sharing row/col. Answer = total - components.",
  "Bridges in Graph (Tarjan's Algorithm)": "DFS with discovery and low times. Edge (u,v) is bridge if low[v] > disc[u].",
  "Articulation Points": "DFS with discovery and low times. Node is AP if low[child] >= disc[node].",
  "Strongly Connected Components (Kosaraju's)": "DFS for finish order, transpose graph, DFS in reverse finish order.",
  "Check if Graph is Bipartite (BFS)": "BFS coloring: alternate colors. If neighbor has same color, not bipartite.",
  "Check if Graph is Bipartite (DFS)": "DFS coloring: assign opposite color to neighbors. Conflict = not bipartite.",

  // ── Step 16: Dynamic Programming ──
  "Climbing Stairs": "DP or Fibonacci: ways(n) = ways(n-1) + ways(n-2).",
  "Frog Jump (DP on Steps)": "dp[i] = min cost to reach step i. Try 1 or 2 steps back.",
  "Frog Jump with K Distances": "dp[i] = min(dp[i-j] + |height[i]-height[i-j]|) for j = 1..k.",
  "Maximum Sum of Non-Adjacent Elements": "dp[i] = max(dp[i-1], dp[i-2] + arr[i]). Same as House Robber.",
  "House Robber": "DP: rob(i) = max(rob(i-1), rob(i-2) + nums[i]).",
  "House Robber II": "Circular: max(rob(0..n-2), rob(1..n-1)). Apply House Robber on two ranges.",
  "Decode Ways": "dp[i] depends on single digit (if valid) and two digits (if 10-26).",
  "Maximum Sum of Non-Adjacent Elements (Circular)": "Same as House Robber II: two linear passes excluding first or last.",
  "Ninja's Training (2D DP)": "dp[day][task] = points[day][task] + max(dp[day-1][other tasks]).",
  "Unique Paths": "DP grid: dp[i][j] = dp[i-1][j] + dp[i][j-1]. Base case: first row/col = 1.",
  "Unique Paths II": "Same as Unique Paths but dp[i][j] = 0 if obstacle at (i,j).",
  "Minimum Path Sum": "dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]).",
  "Triangle": "Bottom-up: dp[i][j] = triangle[i][j] + min(dp[i+1][j], dp[i+1][j+1]).",
  "Minimum Falling Path Sum": "dp[i][j] = matrix[i][j] + min(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1]).",
  "Cherry Pickup II": "3D DP: dp[row][col1][col2] for two robots moving down simultaneously.",
  "3D DP - Chocolates Pickup": "Same as Cherry Pickup II: two paths, maximize sum, handle overlap.",
  "Subset Sum Problem": "dp[i][sum] = can we achieve sum using first i elements? Include or exclude.",
  "Partition Equal Subset Sum": "Check if total is even, then find subset with sum = total/2.",
  "Coin Change": "Bottom-up DP: dp[amount] = min coins needed. Try each coin denomination.",
  "Coin Change II": "dp[amount] = number of combinations. Process one coin at a time to avoid duplicates.",
  "Target Sum": "Transform to subset sum: find subset with sum = (total + target) / 2.",
  "Rod Cutting Problem": "dp[length] = max revenue. Try all cut positions.",
  "Unbounded Knapsack": "Same as 0/1 but can reuse items: dp[w] = max(dp[w], dp[w-wt[i]] + val[i]).",
  "0/1 Knapsack": "dp[i][w] = max(exclude item i, include if fits). Classic DP.",
  "Longest Common Subsequence": "2D DP table: if chars match, dp[i][j] = dp[i-1][j-1]+1, else max of skip either.",
  "Print Longest Common Subsequence": "Backtrack through the DP table from dp[m][n] to reconstruct the sequence.",
  "Longest Common Substring": "2D DP: if chars match, dp[i][j] = dp[i-1][j-1]+1. Reset to 0 on mismatch.",
  "Shortest Common Supersequence": "Length = m + n - LCS length. Reconstruct by merging both strings using LCS.",
  "Minimum Insertions to Make String Palindrome": "Answer = length - LPS length. LPS = LCS of string and its reverse.",
  "Minimum Insertions / Deletions to Convert String": "Insertions + Deletions = m + n - 2 * LCS(s1, s2).",
  "Distinct Subsequences": "dp[i][j] = dp[i-1][j] + (if match) dp[i-1][j-1]. Count ways to form t from s.",
  "Best Time to Buy and Sell Stock II": "DP with state (holding/not holding). Or greedy: sum all positive diffs.",
  "Best Time to Buy and Sell Stock III": "DP with at most 2 transactions. Track buy1, sell1, buy2, sell2.",
  "Best Time to Buy and Sell Stock IV": "Generalize Stock III to k transactions. dp[k][day] with buy/sell states.",
  "Best Time to Buy and Sell Stock with Cooldown": "DP with 3 states: hold, sold (cooldown), rest. Transitions between them.",
  "Best Time to Buy and Sell Stock with Transaction Fee": "DP: hold[i] = max(hold[i-1], cash[i-1]-price). cash[i] = max(cash[i-1], hold[i-1]+price-fee).",
  "Longest Increasing Subsequence": "DP O(n^2) or patience sorting with binary search O(n log n).",
  "Print Longest Increasing Subsequence": "Track parent pointers during DP, backtrack from max-length position.",
  "Largest Divisible Subset": "Sort, then LIS-like DP where condition is divisibility instead of <.",
  "Longest String Chain": "Sort by length. DP: for each word, try removing one char and look up predecessor.",
  "Longest Bitonic Subsequence": "Compute LIS from left and LIS from right. Answer = max(left[i]+right[i]-1).",
  "Matrix Chain Multiplication": "dp[i][j] = min cost to multiply matrices i..j. Try all split points k.",
  "Minimum Cost to Cut a Stick": "dp[i][j] = min cost for cuts between positions i and j. Try each cut point.",
  "Burst Balloons": "dp[i][j] = max coins from bursting balloons i..j. Last balloon to burst = split point.",
  "Evaluate Boolean Expression to True": "dp[i][j] = ways to get True/False. Split at each operator.",
  "Palindrome Partitioning II": "dp[i] = min cuts for s[0..i]. Check all palindrome prefixes ending at i.",
  "Partition Array for Maximum Sum": "dp[i] = max sum for first i elements. Try partitions of size 1..k ending at i.",
  "Maximal Rectangle (Area with All 1s)": "Build histogram per row, apply largest rectangle in histogram.",

  // ── Step 17: Tries ──
  "Implement Trie (Prefix Tree)": "Each node has children map and isEnd flag. Insert char by char.",
  "Implement Trie II (Count Words / Prefixes)": "Add countEnd and countPrefix to each node. Increment during insert.",
  "Longest Word with All Prefixes (Complete String)": "Insert all words in trie. DFS to find longest word where every prefix is also a word.",
  "Number of Distinct Substrings in a String": "Insert all suffixes into trie. Count total trie nodes = distinct substrings + 1.",
  "Maximum XOR of Two Numbers in an Array": "Insert all numbers bit by bit into trie. For each number, greedily pick opposite bits.",
};

// ── Blind 75 problems (by title) ──
const BLIND_75: Set<string> = new Set([
  "Two Sum", "Best Time to Buy and Sell Stock", "Stock Buy and Sell",
  "Maximum Subarray Sum (Kadane's Algorithm)", "Maximum Product Subarray",
  "3Sum", "Merge Overlapping Intervals", "Set Matrix Zeroes", "Spiral Matrix",
  "Rotate Matrix by 90 Degrees", "Missing Number", "Single Number",
  "Climbing Stairs", "House Robber", "House Robber II", "Unique Paths",
  "Coin Change", "Longest Increasing Subsequence", "Longest Common Subsequence",
  "Word Break", "Combination Sum I", "Reverse Linked List",
  "Merge K Sorted Lists", "Remove Nth Node from End of List",
  "Detect Cycle in Linked List", "Find Starting Point of Cycle",
  "Reverse Nodes in K-Group", "Number of Islands", "Course Schedule",
  "Longest Substring Without Repeating Characters", "Minimum Window Substring",
  "Longest Repeating Character Replacement", "Valid Parentheses",
  "Valid Anagram", "Longest Palindromic Substring",
  "Binary Search to Find X in Sorted Array", "Search in Rotated Sorted Array I",
  "Find Minimum in Rotated Sorted Array", "Implement Trie (Prefix Tree)",
  "Maximum Depth of Binary Tree", "Same Tree",
  "Binary Tree Level Order Traversal", "Binary Tree Maximum Path Sum",
  "Validate Binary Search Tree", "Kth Smallest Element in a BST",
  "Lowest Common Ancestor of a BST", "Top K Frequent Elements",
  "Find Median from Data Stream", "Add Two Numbers",
  "Flatten Binary Tree to Linked List",
  "Construct BST from Preorder Traversal", "Number of Provinces",
  "Partition Equal Subset Sum", "Target Sum", "Jump Game",
]);

// ── NeetCode 150 (everything in Blind 75 plus these) ──
const NEETCODE_150_EXTRA: Set<string> = new Set([
  "Sort Colors (Dutch National Flag)", "Majority Element (> n/2 times)",
  "Next Permutation", "Pascal's Triangle", "Longest Consecutive Sequence",
  "Move Zeroes to End", "Search Insert Position",
  "Find First and Last Position of Element", "Koko Eating Bananas",
  "Capacity to Ship Packages Within D Days", "Search a 2D Matrix",
  "Min Stack", "Trapping Rain Water", "Largest Rectangle in Histogram",
  "Sliding Window Maximum", "Check if Linked List is Palindrome",
  "Odd Even Linked List", "LRU Cache", "Subsets I", "Subsets II",
  "Combination Sum II", "Letter Combinations of a Phone Number",
  "Palindrome Partitioning", "N-Queens", "Balanced Binary Tree",
  "Diameter of Binary Tree",
  "Binary Tree Zigzag Level Order Traversal",
  "Vertical Order Traversal of a Binary Tree",
  "Count Complete Tree Nodes",
  "Lowest Common Ancestor of a Binary Tree",
  "Dijkstra's Algorithm", "Network Delay Time",
  "Cheapest Flights Within K Stops", "Rotting Oranges",
  "Surrounded Regions", "Check if Graph is Bipartite (BFS)",
  "Longest String Chain", "Distinct Subsequences",
  "Best Time to Buy and Sell Stock II",
  "Best Time to Buy and Sell Stock with Cooldown",
  "Non-overlapping Intervals", "Insert Interval",
  "Task Scheduler", "Hand of Straights", "Design Twitter",
  "Palindrome Partitioning II",
  "Maximum XOR of Two Numbers in an Array",
  "Kth Largest Element in an Array",
]);

// ── Enrichment function ──
function enrichProblem(
  p: Problem,
  topicSlug: string,
  subTopicName: string,
): EnrichedProblem {
  const baseTags = [
    ...(TOPIC_TAGS[topicSlug] || []),
    ...(SUBTOPIC_TAGS[subTopicName] || []),
  ];
  // Dedupe tags
  const tags = [...new Set(baseTags)];

  const companies = [...new Set([
    ...(COMPANY_MAP[p.title] || []),
    ...(INDIAN_COMPANY_MAP[p.title] || []),
  ])];
  const hints = HINTS_MAP[p.title] || null;

  const sheets: string[] = ["a2z"];
  if (BLIND_75.has(p.title)) sheets.push("blind75");
  if (NEETCODE_150_EXTRA.has(p.title) || BLIND_75.has(p.title)) sheets.push("neetcode150");

  return {
    ...p,
    hackerrankUrl: null,
    codechefUrl: null,
    tags,
    companies,
    hints,
    sheets,
  };
}

const topics: Topic[] = [
  // ================================================================
  // Topic 1: Learn the Basics
  // ================================================================
  {
    name: "Step 1: Learn the Basics",
    slug: "learn-the-basics",
    description: "Build a strong foundation - data types, loops, conditionals, basic math, recursion, and hashing.",
    subTopics: [
      {
        name: "Things to Know",
        problems: [
          { title: "User Input / Output", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Data Types", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "If Else Statements", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Switch Statement", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Arrays and Strings", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Build-up Logical Thinking / Pattern Problems",
        problems: [
          { title: "Pattern 1 - Rectangular Star", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 2 - Right-Angled Triangle", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 3 - Right-Angled Number Triangle", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 4 - Right-Angled Number Triangle II", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 5 - Inverted Right-Angled Triangle", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 6 - Inverted Number Triangle", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 7 - Star Pyramid", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 8 - Inverted Star Pyramid", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 9 - Diamond Star", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 10 - Half Diamond Star", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 11 - Binary Number Triangle", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 12 - Number Crown", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 13 - Increasing Number Triangle", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 14 - Increasing Letter Triangle", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 15 - Reverse Letter Triangle", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 16 - Alpha-Ramp", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 17 - Alpha-Hill", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 18 - Alpha-Triangle", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 19 - Symmetric-Void", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 20 - Symmetric-Butterfly", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 21 - Hollow Rectangle", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pattern 22 - The Number Pattern", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Learn Basic Maths",
        problems: [
          { title: "Count Digits", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Reverse a Number", difficulty: "Easy", leetcodeUrl: LC("reverse-integer"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Check Palindrome", difficulty: "Easy", leetcodeUrl: LC("palindrome-number"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "GCD or HCF", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Armstrong Numbers", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Print all Divisors", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Check for Prime", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Learn Basic Recursion",
        problems: [
          { title: "Print 1 to N using Recursion", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Print N to 1 using Recursion", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Sum of First N Numbers", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Factorial of N Numbers", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Reverse an Array using Recursion", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Check if String is Palindrome", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Fibonacci Number", difficulty: "Easy", leetcodeUrl: LC("fibonacci-number"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Print All Subsequences", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Print All Subsequences with Sum K", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Learn Basic Hashing",
        problems: [
          { title: "Counting Frequencies of Array Elements", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Find Highest / Lowest Frequency Element", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Hashing on Characters", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Count Frequency of Each Element in Array", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 2: Sorting Techniques
  // ================================================================
  {
    name: "Step 2: Sorting Techniques",
    slug: "sorting",
    description: "Master sorting algorithms from basic to advanced - selection, bubble, insertion, merge, and quick sort.",
    subTopics: [
      {
        name: "Sorting-I",
        problems: [
          { title: "Selection Sort", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Bubble Sort", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Insertion Sort", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Sorting-II",
        problems: [
          { title: "Merge Sort", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Quick Sort", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Recursive Bubble Sort", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Recursive Insertion Sort", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 3: Arrays
  // ================================================================
  {
    name: "Step 3: Arrays",
    slug: "arrays",
    description: "From basic array operations to advanced sub-array problems - the most frequently asked topic in interviews.",
    subTopics: [
      {
        name: "Easy",
        problems: [
          { title: "Largest Element in an Array", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Second Largest Element in an Array", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Check if Array is Sorted", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Remove Duplicates from Sorted Array", difficulty: "Easy", leetcodeUrl: LC("remove-duplicates-from-sorted-array"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Left Rotate an Array by One Place", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Left Rotate an Array by K Places", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Move Zeroes to End", difficulty: "Easy", leetcodeUrl: LC("move-zeroes"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Linear Search", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Union of Two Sorted Arrays", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Missing Number", difficulty: "Easy", leetcodeUrl: LC("missing-number"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Max Consecutive Ones", difficulty: "Easy", leetcodeUrl: LC("max-consecutive-ones"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Single Number", difficulty: "Easy", leetcodeUrl: LC("single-number"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Longest Subarray with Sum K (Positives)", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Longest Subarray with Sum K (Positives + Negatives)", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Medium",
        problems: [
          { title: "Two Sum", difficulty: "Medium", leetcodeUrl: LC("two-sum"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Sort Colors (Dutch National Flag)", difficulty: "Medium", leetcodeUrl: LC("sort-colors"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Majority Element (> n/2 times)", difficulty: "Medium", leetcodeUrl: LC("majority-element"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Maximum Subarray Sum (Kadane's Algorithm)", difficulty: "Medium", leetcodeUrl: LC("maximum-subarray"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Stock Buy and Sell", difficulty: "Medium", leetcodeUrl: LC("best-time-to-buy-and-sell-stock"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Rearrange Elements by Sign", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Next Permutation", difficulty: "Medium", leetcodeUrl: LC("next-permutation"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Leaders in an Array", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Longest Consecutive Sequence", difficulty: "Medium", leetcodeUrl: LC("longest-consecutive-sequence"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Set Matrix Zeroes", difficulty: "Medium", leetcodeUrl: LC("set-matrix-zeroes"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Rotate Matrix by 90 Degrees", difficulty: "Medium", leetcodeUrl: LC("rotate-image"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Spiral Matrix", difficulty: "Medium", leetcodeUrl: LC("spiral-matrix"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Count Subarrays with Sum K", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pascal's Triangle", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Hard",
        problems: [
          { title: "3Sum", difficulty: "Hard", leetcodeUrl: LC("3sum"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "4Sum", difficulty: "Hard", leetcodeUrl: LC("4sum"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Largest Subarray with 0 Sum", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Count Subarrays with XOR K", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Merge Overlapping Intervals", difficulty: "Hard", leetcodeUrl: LC("merge-intervals"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Merge Sorted Arrays Without Extra Space", difficulty: "Hard", leetcodeUrl: LC("merge-sorted-array"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Count Inversions", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Reverse Pairs", difficulty: "Hard", leetcodeUrl: LC("reverse-pairs"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Maximum Product Subarray", difficulty: "Hard", leetcodeUrl: LC("maximum-product-subarray"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 4: Binary Search
  // ================================================================
  {
    name: "Step 4: Binary Search",
    slug: "binary-search",
    description: "Binary search on arrays and on answer space - essential for optimisation problems in interviews.",
    subTopics: [
      {
        name: "BS on 1D Arrays",
        problems: [
          { title: "Binary Search to Find X in Sorted Array", difficulty: "Easy", leetcodeUrl: LC("binary-search"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Implement Lower Bound", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Implement Upper Bound", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Search Insert Position", difficulty: "Easy", leetcodeUrl: LC("search-insert-position"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Floor and Ceil in Sorted Array", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Find First and Last Position of Element", difficulty: "Medium", leetcodeUrl: LC("find-first-and-last-position-of-element-in-sorted-array"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Count Occurrences in Sorted Array", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Search in Rotated Sorted Array I", difficulty: "Medium", leetcodeUrl: LC("search-in-rotated-sorted-array"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Search in Rotated Sorted Array II", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", leetcodeUrl: LC("find-minimum-in-rotated-sorted-array"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Single Element in a Sorted Array", difficulty: "Medium", leetcodeUrl: LC("single-element-in-a-sorted-array"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Find Peak Element", difficulty: "Medium", leetcodeUrl: LC("find-peak-element"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Search in Rotated Sorted Array with Duplicates", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "BS on Answers",
        problems: [
          { title: "Find Square Root of a Number", difficulty: "Easy", leetcodeUrl: LC("sqrtx"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Find Nth Root of a Number", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Koko Eating Bananas", difficulty: "Medium", leetcodeUrl: LC("koko-eating-bananas"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimum Days to Make M Bouquets", difficulty: "Medium", leetcodeUrl: LC("minimum-number-of-days-to-make-m-bouquets"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Find the Smallest Divisor Given a Threshold", difficulty: "Medium", leetcodeUrl: LC("find-the-smallest-divisor-given-a-threshold"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Capacity to Ship Packages Within D Days", difficulty: "Medium", leetcodeUrl: LC("capacity-to-ship-packages-within-d-days"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Kth Missing Positive Number", difficulty: "Easy", leetcodeUrl: LC("kth-missing-positive-number"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Aggressive Cows", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Book Allocation Problem", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Split Array Largest Sum", difficulty: "Hard", leetcodeUrl: LC("split-array-largest-sum"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "BS on 2D Arrays",
        problems: [
          { title: "Search a 2D Matrix", difficulty: "Medium", leetcodeUrl: LC("search-a-2d-matrix"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Search a 2D Matrix II", difficulty: "Medium", leetcodeUrl: LC("search-a-2d-matrix-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Find Peak Element in 2D Grid", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Median in a Row-wise Sorted Matrix", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 5: Strings
  // ================================================================
  {
    name: "Step 5: Strings",
    slug: "strings",
    description: "String manipulation from basics to advanced - pattern matching, palindromes, and substring problems.",
    subTopics: [
      {
        name: "Basic String Problems",
        problems: [
          { title: "Remove Outermost Parentheses", difficulty: "Easy", leetcodeUrl: LC("remove-outermost-parentheses"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Reverse Words in a String", difficulty: "Easy", leetcodeUrl: LC("reverse-words-in-a-string"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Largest Odd Number in String", difficulty: "Easy", leetcodeUrl: LC("largest-odd-number-in-string"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Longest Common Prefix", difficulty: "Easy", leetcodeUrl: LC("longest-common-prefix"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Isomorphic Strings", difficulty: "Easy", leetcodeUrl: LC("isomorphic-strings"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Rotate String", difficulty: "Easy", leetcodeUrl: LC("rotate-string"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Valid Anagram", difficulty: "Easy", leetcodeUrl: LC("valid-anagram"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Medium String Problems",
        problems: [
          { title: "Sort Characters by Frequency", difficulty: "Medium", leetcodeUrl: LC("sort-characters-by-frequency"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Maximum Nesting Depth of the Parentheses", difficulty: "Easy", leetcodeUrl: LC("maximum-nesting-depth-of-the-parentheses"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Roman to Integer", difficulty: "Easy", leetcodeUrl: LC("roman-to-integer"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "String to Integer (atoi)", difficulty: "Medium", leetcodeUrl: LC("string-to-integer-atoi"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Count Number of Substrings", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Longest Palindromic Substring", difficulty: "Medium", leetcodeUrl: LC("longest-palindromic-substring"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Sum of Beauty of All Substrings", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Reverse Every Word in a String", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 6: Linked List
  // ================================================================
  {
    name: "Step 6: Linked List",
    slug: "linked-list",
    description: "Singly and doubly linked lists - traversal, reversal, cycle detection, and classic interview problems.",
    subTopics: [
      {
        name: "Learn 1D Linked List",
        problems: [
          { title: "Introduction to Linked List", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Insert Node at Head of Linked List", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Insert Node at Tail of Linked List", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Delete Node at Head of Linked List", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Delete Node at Tail of Linked List", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Search an Element in Linked List", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Learn Doubly Linked List",
        problems: [
          { title: "Introduction to Doubly Linked List", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Insert Node at Head of DLL", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Insert Node at Tail of DLL", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Delete Node at Head of DLL", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Delete Node at Tail of DLL", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Medium Problems",
        problems: [
          { title: "Middle of the Linked List", difficulty: "Easy", leetcodeUrl: LC("middle-of-the-linked-list"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Reverse Linked List", difficulty: "Easy", leetcodeUrl: LC("reverse-linked-list"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Detect Cycle in Linked List", difficulty: "Medium", leetcodeUrl: LC("linked-list-cycle"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Find Starting Point of Cycle", difficulty: "Medium", leetcodeUrl: LC("linked-list-cycle-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Length of Loop in Linked List", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Check if Linked List is Palindrome", difficulty: "Medium", leetcodeUrl: LC("palindrome-linked-list"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Odd Even Linked List", difficulty: "Medium", leetcodeUrl: LC("odd-even-linked-list"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Remove Nth Node from End of List", difficulty: "Medium", leetcodeUrl: LC("remove-nth-node-from-end-of-list"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Delete the Middle Node of a Linked List", difficulty: "Medium", leetcodeUrl: LC("delete-the-middle-node-of-a-linked-list"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Sort List", difficulty: "Medium", leetcodeUrl: LC("sort-list"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Intersection of Two Linked Lists", difficulty: "Medium", leetcodeUrl: LC("intersection-of-two-linked-lists"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Add 1 to a Number Represented by LL", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Add Two Numbers", difficulty: "Medium", leetcodeUrl: LC("add-two-numbers"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Delete All Occurrences of a Key in DLL", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Hard Problems",
        problems: [
          { title: "Reverse Nodes in K-Group", difficulty: "Hard", leetcodeUrl: LC("reverse-nodes-in-k-group"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Rotate List", difficulty: "Hard", leetcodeUrl: LC("rotate-list"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Flatten a Linked List", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Copy List with Random Pointer", difficulty: "Hard", leetcodeUrl: LC("copy-list-with-random-pointer"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Design Browser History", difficulty: "Hard", leetcodeUrl: LC("design-browser-history"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 7: Recursion & Backtracking
  // ================================================================
  {
    name: "Step 7: Recursion & Backtracking",
    slug: "recursion-backtracking",
    description: "Strengthen recursion and learn backtracking - subsequences, permutations, and constraint satisfaction.",
    subTopics: [
      {
        name: "Get Strong Hold",
        problems: [
          { title: "Recursive Implementation of atoi", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Pow(x, n)", difficulty: "Medium", leetcodeUrl: LC("powx-n"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Count Good Numbers", difficulty: "Medium", leetcodeUrl: LC("count-good-numbers"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Sort a Stack using Recursion", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Reverse a Stack using Recursion", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Generate Parentheses", difficulty: "Medium", leetcodeUrl: LC("generate-parentheses"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Subsequences Pattern",
        problems: [
          { title: "Subsets I", difficulty: "Medium", leetcodeUrl: LC("subsets"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Subsets II", difficulty: "Medium", leetcodeUrl: LC("subsets-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Combination Sum I", difficulty: "Medium", leetcodeUrl: LC("combination-sum"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Combination Sum II", difficulty: "Medium", leetcodeUrl: LC("combination-sum-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Combination Sum III", difficulty: "Medium", leetcodeUrl: LC("combination-sum-iii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Subsequence with Sum K", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Letter Combinations of a Phone Number", difficulty: "Medium", leetcodeUrl: LC("letter-combinations-of-a-phone-number"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Palindrome Partitioning", difficulty: "Medium", leetcodeUrl: LC("palindrome-partitioning"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Hard Problems",
        problems: [
          { title: "N-Queens", difficulty: "Hard", leetcodeUrl: LC("n-queens"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Sudoku Solver", difficulty: "Hard", leetcodeUrl: LC("sudoku-solver"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "M-Coloring Problem", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Rat in a Maze", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Word Break", difficulty: "Hard", leetcodeUrl: LC("word-break"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Word Search", difficulty: "Hard", leetcodeUrl: LC("word-search"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Expression Add Operators", difficulty: "Hard", leetcodeUrl: LC("expression-add-operators"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 8: Bit Manipulation
  // ================================================================
  {
    name: "Step 8: Bit Manipulation",
    slug: "bit-manipulation",
    description: "Learn bitwise operations - XOR tricks, bit counting, and classic interview bit manipulation problems.",
    subTopics: [
      {
        name: "Learn Bit Manipulation",
        problems: [
          { title: "Introduction to Bit Manipulation", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Check if i-th Bit is Set or Not", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Set / Clear / Toggle the i-th Bit", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Check if Number is Odd or Even", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Check if Number is Power of 2", difficulty: "Easy", leetcodeUrl: LC("power-of-two"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Count Number of Set Bits", difficulty: "Easy", leetcodeUrl: LC("number-of-1-bits"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Swap Two Numbers Without Temp Variable", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Interview Problems",
        problems: [
          { title: "Single Number", difficulty: "Easy", leetcodeUrl: LC("single-number"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Single Number II", difficulty: "Medium", leetcodeUrl: LC("single-number-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Single Number III", difficulty: "Medium", leetcodeUrl: LC("single-number-iii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "XOR of Numbers in a Given Range", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Divide Two Integers", difficulty: "Medium", leetcodeUrl: LC("divide-two-integers"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Count Set Bits from 1 to N", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Find Two Missing Numbers", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimum Flips to Convert A to B", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Advanced",
        problems: [
          { title: "Power Set (Generate All Subsets)", difficulty: "Medium", leetcodeUrl: LC("subsets"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Find XOR of Numbers in a Range", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimize XOR", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 9: Stack & Queues
  // ================================================================
  {
    name: "Step 9: Stack & Queues",
    slug: "stack-queues",
    description: "Stack and queue fundamentals, expression conversions, monotonic stacks, and advanced implementations.",
    subTopics: [
      {
        name: "Learning",
        problems: [
          { title: "Implement Stack using Arrays", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Implement Queue using Arrays", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Implement Stack using Queues", difficulty: "Easy", leetcodeUrl: LC("implement-stack-using-queues"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Implement Queue using Stacks", difficulty: "Easy", leetcodeUrl: LC("implement-queue-using-stacks"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Valid Parentheses", difficulty: "Easy", leetcodeUrl: LC("valid-parentheses"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Min Stack", difficulty: "Medium", leetcodeUrl: LC("min-stack"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Implement Stack using Linked List", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Implement Queue using Linked List", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Prefix / Infix / Postfix",
        problems: [
          { title: "Infix to Postfix Conversion", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Prefix to Infix Conversion", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Prefix to Postfix Conversion", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Postfix to Infix Conversion", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Postfix to Prefix Conversion", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Infix to Prefix Conversion", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Monotonic Stack / Queue",
        problems: [
          { title: "Next Greater Element I", difficulty: "Medium", leetcodeUrl: LC("next-greater-element-i"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Next Greater Element II", difficulty: "Medium", leetcodeUrl: LC("next-greater-element-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Next Smaller Element", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Trapping Rain Water", difficulty: "Hard", leetcodeUrl: LC("trapping-rain-water"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Sum of Subarray Minimums", difficulty: "Medium", leetcodeUrl: LC("sum-of-subarray-minimums"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Online Stock Span", difficulty: "Medium", leetcodeUrl: LC("online-stock-span"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Asteroid Collision", difficulty: "Medium", leetcodeUrl: LC("asteroid-collision"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Largest Rectangle in Histogram", difficulty: "Hard", leetcodeUrl: LC("largest-rectangle-in-histogram"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Implementation",
        problems: [
          { title: "Sliding Window Maximum", difficulty: "Hard", leetcodeUrl: LC("sliding-window-maximum"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "LFU Cache", difficulty: "Hard", leetcodeUrl: LC("lfu-cache"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "LRU Cache", difficulty: "Hard", leetcodeUrl: LC("lru-cache"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Celebrity Problem", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Maximal Rectangle", difficulty: "Hard", leetcodeUrl: LC("maximal-rectangle"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 10: Sliding Window & Two Pointer
  // ================================================================
  {
    name: "Step 10: Sliding Window & Two Pointer",
    slug: "sliding-window",
    description: "Master the sliding window and two pointer techniques for optimal subarray/substring solutions.",
    subTopics: [
      {
        name: "Medium Problems",
        problems: [
          { title: "Longest Substring Without Repeating Characters", difficulty: "Medium", leetcodeUrl: LC("longest-substring-without-repeating-characters"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Maximum Points You Can Obtain from Cards", difficulty: "Medium", leetcodeUrl: LC("maximum-points-you-can-obtain-from-cards"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Longest Repeating Character Replacement", difficulty: "Medium", leetcodeUrl: LC("longest-repeating-character-replacement"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Binary Subarrays with Sum", difficulty: "Medium", leetcodeUrl: LC("binary-subarrays-with-sum"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Count Number of Nice Subarrays", difficulty: "Medium", leetcodeUrl: LC("count-number-of-nice-subarrays"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Max Consecutive Ones III", difficulty: "Medium", leetcodeUrl: LC("max-consecutive-ones-iii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Fruit Into Baskets", difficulty: "Medium", leetcodeUrl: LC("fruit-into-baskets"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Number of Substrings Containing All Three Characters", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Hard Problems",
        problems: [
          { title: "Longest Substring with At Most K Distinct Characters", difficulty: "Hard", leetcodeUrl: LC("longest-substring-with-at-most-k-distinct-characters"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Subarrays with K Different Integers", difficulty: "Hard", leetcodeUrl: LC("subarrays-with-k-different-integers"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimum Window Substring", difficulty: "Hard", leetcodeUrl: LC("minimum-window-substring"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimum Window Subsequence", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 11: Heaps
  // ================================================================
  {
    name: "Step 11: Heaps",
    slug: "heaps",
    description: "Heap / priority queue operations and classic problems - Kth element, merge K lists, and medians.",
    subTopics: [
      {
        name: "Learning",
        problems: [
          { title: "Introduction to Priority Queues / Heaps", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Min Heap and Max Heap Implementation", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Heap Sort", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Kth Largest Element in an Array", difficulty: "Medium", leetcodeUrl: LC("kth-largest-element-in-an-array"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Medium Problems",
        problems: [
          { title: "Kth Smallest Element", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Merge K Sorted Lists", difficulty: "Hard", leetcodeUrl: LC("merge-k-sorted-lists"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Task Scheduler", difficulty: "Medium", leetcodeUrl: LC("task-scheduler"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Hand of Straights", difficulty: "Medium", leetcodeUrl: LC("hand-of-straights"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Design Twitter", difficulty: "Medium", leetcodeUrl: LC("design-twitter"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Hard Problems",
        problems: [
          { title: "Find Median from Data Stream", difficulty: "Hard", leetcodeUrl: LC("find-median-from-data-stream"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Top K Frequent Elements", difficulty: "Medium", leetcodeUrl: LC("top-k-frequent-elements"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Top K Frequent Words", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 12: Greedy Algorithms
  // ================================================================
  {
    name: "Step 12: Greedy Algorithms",
    slug: "greedy",
    description: "Greedy strategies for optimization - interval scheduling, activity selection, and jump games.",
    subTopics: [
      {
        name: "Easy Problems",
        problems: [
          { title: "Assign Cookies", difficulty: "Easy", leetcodeUrl: LC("assign-cookies"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Fractional Knapsack", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Greedy Algorithm Introduction", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimum Coins (Greedy)", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Lemonade Change", difficulty: "Easy", leetcodeUrl: LC("lemonade-change"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Valid Parenthesis String", difficulty: "Medium", leetcodeUrl: LC("valid-parenthesis-string"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Medium / Hard",
        problems: [
          { title: "N Meetings in One Room", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimum Number of Platforms", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Job Sequencing Problem", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Candy", difficulty: "Hard", leetcodeUrl: LC("candy"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Insert Interval", difficulty: "Medium", leetcodeUrl: LC("insert-interval"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Merge Intervals", difficulty: "Medium", leetcodeUrl: LC("merge-intervals"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Non-overlapping Intervals", difficulty: "Medium", leetcodeUrl: LC("non-overlapping-intervals"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Jump Game", difficulty: "Medium", leetcodeUrl: LC("jump-game"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Jump Game II", difficulty: "Medium", leetcodeUrl: LC("jump-game-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 13: Binary Trees
  // ================================================================
  {
    name: "Step 13: Binary Trees",
    slug: "binary-trees",
    description: "Tree traversals, views, properties, and advanced tree problems - a staple of technical interviews.",
    subTopics: [
      {
        name: "Traversals",
        problems: [
          { title: "Introduction to Binary Trees", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Binary Tree Inorder Traversal", difficulty: "Easy", leetcodeUrl: LC("binary-tree-inorder-traversal"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Binary Tree Preorder Traversal", difficulty: "Easy", leetcodeUrl: LC("binary-tree-preorder-traversal"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Binary Tree Postorder Traversal", difficulty: "Easy", leetcodeUrl: LC("binary-tree-postorder-traversal"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Binary Tree Level Order Traversal", difficulty: "Medium", leetcodeUrl: LC("binary-tree-level-order-traversal"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Iterative Preorder Traversal", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Iterative Inorder Traversal", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Iterative Postorder Traversal (1 Stack)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Iterative Postorder Traversal (2 Stacks)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Medium Problems",
        problems: [
          { title: "Maximum Depth of Binary Tree", difficulty: "Easy", leetcodeUrl: LC("maximum-depth-of-binary-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Balanced Binary Tree", difficulty: "Easy", leetcodeUrl: LC("balanced-binary-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Diameter of Binary Tree", difficulty: "Medium", leetcodeUrl: LC("diameter-of-binary-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Binary Tree Maximum Path Sum", difficulty: "Hard", leetcodeUrl: LC("binary-tree-maximum-path-sum"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Same Tree", difficulty: "Easy", leetcodeUrl: LC("same-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Binary Tree Zigzag Level Order Traversal", difficulty: "Medium", leetcodeUrl: LC("binary-tree-zigzag-level-order-traversal"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Boundary Traversal of Binary Tree", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Vertical Order Traversal of a Binary Tree", difficulty: "Hard", leetcodeUrl: LC("vertical-order-traversal-of-a-binary-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Top View of Binary Tree", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Bottom View of Binary Tree", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Left / Right View of Binary Tree", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Symmetric Tree", difficulty: "Easy", leetcodeUrl: LC("symmetric-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Hard Problems",
        problems: [
          { title: "Root to Node Path in Binary Tree", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium", leetcodeUrl: LC("lowest-common-ancestor-of-a-binary-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Maximum Width of Binary Tree", difficulty: "Medium", leetcodeUrl: LC("maximum-width-of-binary-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Check for Children Sum Property", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "All Nodes Distance K in Binary Tree", difficulty: "Medium", leetcodeUrl: LC("all-nodes-distance-k-in-binary-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimum Time to Burn Entire Binary Tree", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Count Complete Tree Nodes", difficulty: "Medium", leetcodeUrl: LC("count-complete-tree-nodes"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Morris Traversal (Inorder & Preorder)", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Flatten Binary Tree to Linked List", difficulty: "Medium", leetcodeUrl: LC("flatten-binary-tree-to-linked-list"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 14: Binary Search Trees
  // ================================================================
  {
    name: "Step 14: Binary Search Trees",
    slug: "bst",
    description: "BST fundamentals - search, insert, delete, validation, and classic BST interview problems.",
    subTopics: [
      {
        name: "Concept & Problems",
        problems: [
          { title: "Search in a Binary Search Tree", difficulty: "Easy", leetcodeUrl: LC("search-in-a-binary-search-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Ceil in a BST", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Floor in a BST", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Insert into a Binary Search Tree", difficulty: "Medium", leetcodeUrl: LC("insert-into-a-binary-search-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Delete Node in a BST", difficulty: "Medium", leetcodeUrl: LC("delete-node-in-a-bst"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Kth Smallest Element in a BST", difficulty: "Medium", leetcodeUrl: LC("kth-smallest-element-in-a-bst"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Validate Binary Search Tree", difficulty: "Medium", leetcodeUrl: LC("validate-binary-search-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Lowest Common Ancestor of a BST", difficulty: "Medium", leetcodeUrl: LC("lowest-common-ancestor-of-a-binary-search-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Construct BST from Preorder Traversal", difficulty: "Medium", leetcodeUrl: LC("construct-binary-search-tree-from-preorder-traversal"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Inorder Successor / Predecessor in BST", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Two Sum IV - Input is a BST", difficulty: "Easy", leetcodeUrl: LC("two-sum-iv-input-is-a-bst"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Recover Binary Search Tree", difficulty: "Medium", leetcodeUrl: LC("recover-binary-search-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 15: Graphs
  // ================================================================
  {
    name: "Step 15: Graphs",
    slug: "graphs",
    description: "BFS, DFS, topological sort, shortest paths, MST, and advanced graph algorithms.",
    subTopics: [
      {
        name: "Learning / BFS / DFS",
        problems: [
          { title: "Graph Introduction and Representation", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "BFS of Graph", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "DFS of Graph", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Number of Provinces", difficulty: "Medium", leetcodeUrl: LC("number-of-provinces"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Connected Components in an Undirected Graph", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Rotting Oranges", difficulty: "Medium", leetcodeUrl: LC("rotting-oranges"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Flood Fill", difficulty: "Easy", leetcodeUrl: LC("flood-fill"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Detect Cycle in Undirected Graph (BFS)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Detect Cycle in Undirected Graph (DFS)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Detect Cycle in Directed Graph (DFS)", difficulty: "Medium", leetcodeUrl: LC("course-schedule"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "01 Matrix / Distance of Nearest Cell Having 1", difficulty: "Medium", leetcodeUrl: LC("01-matrix"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Surrounded Regions", difficulty: "Medium", leetcodeUrl: LC("surrounded-regions"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Number of Enclaves", difficulty: "Medium", leetcodeUrl: LC("number-of-enclaves"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Number of Islands", difficulty: "Medium", leetcodeUrl: LC("number-of-islands"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Word Ladder", difficulty: "Hard", leetcodeUrl: LC("word-ladder"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Topo Sort",
        problems: [
          { title: "Topological Sort (DFS)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Topological Sort (BFS / Kahn's Algorithm)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Course Schedule", difficulty: "Medium", leetcodeUrl: LC("course-schedule"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Course Schedule II", difficulty: "Medium", leetcodeUrl: LC("course-schedule-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Alien Dictionary (Order of Characters)", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Find Eventual Safe States", difficulty: "Medium", leetcodeUrl: LC("find-eventual-safe-states"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Shortest Path",
        problems: [
          { title: "Dijkstra's Algorithm", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Bellman-Ford Algorithm", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Floyd Warshall Algorithm", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "City with Smallest Number of Neighbours at Threshold Distance", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Cheapest Flights Within K Stops", difficulty: "Medium", leetcodeUrl: LC("cheapest-flights-within-k-stops"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Network Delay Time", difficulty: "Medium", leetcodeUrl: LC("network-delay-time"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Path with Minimum Effort", difficulty: "Medium", leetcodeUrl: LC("path-with-minimum-effort"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Shortest Path in Binary Matrix", difficulty: "Medium", leetcodeUrl: LC("shortest-path-in-binary-matrix"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "MST / Disjoint Set",
        problems: [
          { title: "Kruskal's Algorithm (MST)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Prim's Algorithm (MST)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Disjoint Set Union (Union-Find)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Number of Operations to Make Network Connected", difficulty: "Medium", leetcodeUrl: LC("number-of-operations-to-make-network-connected"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Most Stones Removed with Same Row or Column", difficulty: "Medium", leetcodeUrl: LC("most-stones-removed-with-same-row-or-column"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "Other Algorithms",
        problems: [
          { title: "Bridges in Graph (Tarjan's Algorithm)", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Articulation Points", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Strongly Connected Components (Kosaraju's)", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Check if Graph is Bipartite (BFS)", difficulty: "Medium", leetcodeUrl: LC("is-graph-bipartite"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Check if Graph is Bipartite (DFS)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 16: Dynamic Programming
  // ================================================================
  {
    name: "Step 16: Dynamic Programming",
    slug: "dynamic-programming",
    description: "Complete DP mastery - 1D, 2D, grid, subsequences, strings, stocks, LIS, and partition DP.",
    subTopics: [
      {
        name: "Introduction",
        problems: [
          { title: "Climbing Stairs", difficulty: "Easy", leetcodeUrl: LC("climbing-stairs"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Frog Jump (DP on Steps)", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Frog Jump with K Distances", difficulty: "Easy", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Maximum Sum of Non-Adjacent Elements", difficulty: "Easy", leetcodeUrl: LC("house-robber"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "1D DP",
        problems: [
          { title: "House Robber", difficulty: "Medium", leetcodeUrl: LC("house-robber"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "House Robber II", difficulty: "Medium", leetcodeUrl: LC("house-robber-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Decode Ways", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Maximum Sum of Non-Adjacent Elements (Circular)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "2D / 3D DP / Grid",
        problems: [
          { title: "Ninja's Training (2D DP)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Unique Paths", difficulty: "Medium", leetcodeUrl: LC("unique-paths"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Unique Paths II", difficulty: "Medium", leetcodeUrl: LC("unique-paths-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimum Path Sum", difficulty: "Medium", leetcodeUrl: LC("minimum-path-sum"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Triangle", difficulty: "Medium", leetcodeUrl: LC("triangle"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimum Falling Path Sum", difficulty: "Medium", leetcodeUrl: LC("minimum-falling-path-sum"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Cherry Pickup II", difficulty: "Hard", leetcodeUrl: LC("cherry-pickup-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "3D DP - Chocolates Pickup", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "DP on Subsequences",
        problems: [
          { title: "Subset Sum Problem", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Partition Equal Subset Sum", difficulty: "Medium", leetcodeUrl: LC("partition-equal-subset-sum"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Coin Change", difficulty: "Medium", leetcodeUrl: LC("coin-change"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Coin Change II", difficulty: "Medium", leetcodeUrl: LC("coin-change-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Target Sum", difficulty: "Medium", leetcodeUrl: LC("target-sum"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Rod Cutting Problem", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Unbounded Knapsack", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "0/1 Knapsack", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "DP on Strings",
        problems: [
          { title: "Longest Common Subsequence", difficulty: "Medium", leetcodeUrl: LC("longest-common-subsequence"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Print Longest Common Subsequence", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Longest Common Substring", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Shortest Common Supersequence", difficulty: "Hard", leetcodeUrl: LC("shortest-common-supersequence"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimum Insertions to Make String Palindrome", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimum Insertions / Deletions to Convert String", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Distinct Subsequences", difficulty: "Hard", leetcodeUrl: LC("distinct-subsequences"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "DP on Stocks",
        problems: [
          { title: "Best Time to Buy and Sell Stock", difficulty: "Easy", leetcodeUrl: LC("best-time-to-buy-and-sell-stock"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Best Time to Buy and Sell Stock II", difficulty: "Medium", leetcodeUrl: LC("best-time-to-buy-and-sell-stock-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Best Time to Buy and Sell Stock III", difficulty: "Hard", leetcodeUrl: LC("best-time-to-buy-and-sell-stock-iii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Best Time to Buy and Sell Stock IV", difficulty: "Hard", leetcodeUrl: LC("best-time-to-buy-and-sell-stock-iv"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Best Time to Buy and Sell Stock with Cooldown", difficulty: "Medium", leetcodeUrl: LC("best-time-to-buy-and-sell-stock-with-cooldown"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Best Time to Buy and Sell Stock with Transaction Fee", difficulty: "Medium", leetcodeUrl: LC("best-time-to-buy-and-sell-stock-with-transaction-fee"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "DP on LIS",
        problems: [
          { title: "Longest Increasing Subsequence", difficulty: "Medium", leetcodeUrl: LC("longest-increasing-subsequence"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Print Longest Increasing Subsequence", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Largest Divisible Subset", difficulty: "Medium", leetcodeUrl: LC("largest-divisible-subset"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Longest String Chain", difficulty: "Medium", leetcodeUrl: LC("longest-string-chain"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Longest Bitonic Subsequence", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
      {
        name: "MCM / Partition DP",
        problems: [
          { title: "Matrix Chain Multiplication", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Minimum Cost to Cut a Stick", difficulty: "Hard", leetcodeUrl: LC("minimum-cost-to-cut-a-stick"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Burst Balloons", difficulty: "Hard", leetcodeUrl: LC("burst-balloons"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Evaluate Boolean Expression to True", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Palindrome Partitioning II", difficulty: "Hard", leetcodeUrl: LC("palindrome-partitioning-ii"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Partition Array for Maximum Sum", difficulty: "Medium", leetcodeUrl: LC("partition-array-for-maximum-sum"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Maximal Rectangle (Area with All 1s)", difficulty: "Hard", leetcodeUrl: LC("maximal-rectangle"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },

  // ================================================================
  // Step 17: Tries
  // ================================================================
  {
    name: "Step 17: Tries",
    slug: "tries",
    description: "Trie data structure - implementation, prefix operations, and XOR-based problems.",
    subTopics: [
      {
        name: "Theory & Problems",
        problems: [
          { title: "Implement Trie (Prefix Tree)", difficulty: "Medium", leetcodeUrl: LC("implement-trie-prefix-tree"), gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Implement Trie II (Count Words / Prefixes)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Longest Word with All Prefixes (Complete String)", difficulty: "Medium", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Number of Distinct Substrings in a String", difficulty: "Hard", leetcodeUrl: null, gfgUrl: null, articleUrl: null, videoUrl: null },
          { title: "Maximum XOR of Two Numbers in an Array", difficulty: "Medium", leetcodeUrl: LC("maximum-xor-of-two-numbers-in-an-array"), gfgUrl: null, articleUrl: null, videoUrl: null },
        ],
      },
    ],
  },
];

// ============================================================
// Seed function
// ============================================================

async function main() {
  console.log("Cleaning existing DSA data...");
  await prisma.dsaBookmark.deleteMany();
  await prisma.studentDsaProgress.deleteMany();
  await prisma.dsaProblem.deleteMany();
  await prisma.dsaSubTopic.deleteMany();
  await prisma.dsaTopic.deleteMany();
  console.log("Existing DSA data cleared.\n");

  let totalProblems = 0;

  for (let ti = 0; ti < topics.length; ti++) {
    const t = topics[ti];
    const topicOrderIndex = ti + 1;

    const topic = await prisma.dsaTopic.upsert({
      where: { slug: t.slug },
      update: { name: t.name, description: t.description, orderIndex: topicOrderIndex },
      create: { name: t.name, slug: t.slug, description: t.description, orderIndex: topicOrderIndex },
    });

    console.log(`[${topicOrderIndex}/${topics.length}] Topic: ${t.name}`);

    for (let si = 0; si < t.subTopics.length; si++) {
      const st = t.subTopics[si];
      const subTopicOrderIndex = si + 1;

      const subTopic = await prisma.dsaSubTopic.upsert({
        where: { topicId_orderIndex: { topicId: topic.id, orderIndex: subTopicOrderIndex } },
        update: { name: st.name },
        create: { name: st.name, orderIndex: subTopicOrderIndex, topicId: topic.id },
      });

      for (let pi = 0; pi < st.problems.length; pi++) {
        const p = enrichProblem(st.problems[pi], t.slug, st.name);
        const problemOrderIndex = pi + 1;

        await prisma.dsaProblem.upsert({
          where: { subTopicId_orderIndex: { subTopicId: subTopic.id, orderIndex: problemOrderIndex } },
          update: {
            title: p.title,
            difficulty: p.difficulty,
            leetcodeUrl: p.leetcodeUrl,
            gfgUrl: p.gfgUrl,
            articleUrl: p.articleUrl,
            videoUrl: p.videoUrl,
            hackerrankUrl: p.hackerrankUrl,
            codechefUrl: p.codechefUrl,
            tags: p.tags,
            companies: p.companies,
            hints: p.hints,
            sheets: p.sheets,
          },
          create: {
            title: p.title,
            difficulty: p.difficulty,
            leetcodeUrl: p.leetcodeUrl,
            gfgUrl: p.gfgUrl,
            articleUrl: p.articleUrl,
            videoUrl: p.videoUrl,
            hackerrankUrl: p.hackerrankUrl,
            codechefUrl: p.codechefUrl,
            tags: p.tags,
            companies: p.companies,
            hints: p.hints,
            sheets: p.sheets,
            orderIndex: problemOrderIndex,
            subTopicId: subTopic.id,
          },
        });

        totalProblems++;
      }

      console.log(`   └─ SubTopic: ${st.name} (${st.problems.length} problems)`);
    }
  }

  console.log(`\nSeeding complete! ${topics.length} topics, ${totalProblems} problems total.`);
}

main()
  .then(() => {
    prisma.$disconnect();
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
