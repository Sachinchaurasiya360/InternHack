export interface ApproachEntry {
  title: string;
  complexity: string;
  content: string;
}

const APPROACHES: Record<string, ApproachEntry[]> = {
  "two-sum": [
    {
      title: "Brute Force — O(n²)",
      complexity: "Time: O(n²) | Space: O(1)",
      content:
        "Check every pair using two nested loops. For each element at index i, look through all elements after it (j = i + 1) and check if nums[i] + nums[j] == target. Return the indices when found.",
    },
    {
      title: "Hash Map — O(n)",
      complexity: "Time: O(n) | Space: O(n)",
      content:
        "Iterate through the array once. For each element, compute the complement (target - nums[i]). If the complement exists in the hash map, return the current index and the complement's index. Otherwise, store the current element and its index in the map.",
    },
  ],
  "best-time-to-buy-sell-stock": [
    {
      title: "Brute Force — O(n²)",
      complexity: "Time: O(n²) | Space: O(1)",
      content: "For each day as a potential buy day, iterate through all future days to find the maximum profit. Track the global maximum.",
    },
    {
      title: "One Pass — O(n)",
      complexity: "Time: O(n) | Space: O(1)",
      content: "Maintain the minimum price seen so far and the maximum profit achievable. Iterate once: update minPrice if current price is lower, otherwise update maxProfit if selling today yields more profit.",
    },
  ],
  "valid-parentheses": [
    {
      title: "Stack — O(n)",
      complexity: "Time: O(n) | Space: O(n)",
      content: "Use a stack. Push opening brackets onto the stack. When a closing bracket is encountered, check if the stack top matches the corresponding opening bracket. If it matches, pop; otherwise return false. At the end, the stack must be empty.",
    },
  ],
  "merge-two-sorted-lists": [
    {
      title: "Iterative — O(n + m)",
      complexity: "Time: O(n + m) | Space: O(1)",
      content: "Use a dummy head node. Compare the heads of both lists and append the smaller node to the result. Advance the pointer of the list whose node was taken. When one list is exhausted, append the remainder of the other list.",
    },
    {
      title: "Recursive — O(n + m)",
      complexity: "Time: O(n + m) | Space: O(n + m)",
      content: "Base case: if either list is null, return the other. Compare the head values: the smaller head becomes the result node, and its next pointer is set recursively using the next node of that list and the other list. Return the smaller head.",
    },
  ],
  "maximum-subarray": [
    {
      title: "Kadane's Algorithm — O(n)",
      complexity: "Time: O(n) | Space: O(1)",
      content: "Iterate through the array. Maintain current_sum (max ending here) and max_sum (global max). At each element, set current_sum = max(num, current_sum + num). Update max_sum = max(max_sum, current_sum). Return max_sum.",
    },
    {
      title: "Divide & Conquer — O(n log n)",
      complexity: "Time: O(n log n) | Space: O(log n)",
      content: "Split the array in half. Recursively find the max subarray sum for the left half, right half, and the crossing subarray that spans the midpoint. Return the maximum of the three. The crossing subarray is found by expanding outward from the midpoint.",
    },
  ],
  "3sum": [
    {
      title: "Two Pointers — O(n²)",
      complexity: "Time: O(n²) | Space: O(1) ignoring output",
      content: "Sort the array. Fix one element at index i. Use two pointers (left = i + 1, right = n - 1) to find pairs that sum to -nums[i]. Skip duplicates at each level. If sum < 0 move left forward; if sum > 0 move right backward.",
    },
  ],
  "binary-tree-level-order-traversal": [
    {
      title: "BFS — O(n)",
      complexity: "Time: O(n) | Space: O(n)",
      content: "Use a queue initialized with the root. While the queue is not empty, record the current level size. Pop that many nodes, add their values to the current level list, and enqueue their children. Append each level to the result.",
    },
  ],
  "number-of-islands": [
    {
      title: "DFS — O(m × n)",
      complexity: "Time: O(m × n) | Space: O(m × n)",
      content: "Iterate through every cell. When '1' is found, increment the island count and run DFS to mark all adjacent '1's as visited (by changing them to '0' or using a visited set). DFS recurses in four directions.",
    },
    {
      title: "BFS — O(m × n)",
      complexity: "Time: O(m × n) | Space: O(min(m, n))",
      content: "Same outer loop as DFS, but use a queue instead of recursion. When '1' is found, BFS from that cell to mark the entire island. BFS uses less stack space than DFS on large grids.",
    },
  ],
  "longest-increasing-subsequence": [
    {
      title: "DP — O(n²)",
      complexity: "Time: O(n²) | Space: O(n)",
      content: "Let dp[i] = length of LIS ending at index i. Initialize dp[i] = 1 for all i. For each i, check all j < i: if nums[j] < nums[i], update dp[i] = max(dp[i], dp[j] + 1). Answer is max(dp).",
    },
    {
      title: "Patience Sorting — O(n log n)",
      complexity: "Time: O(n log n) | Space: O(n)",
      content: "Maintain an array tails where tails[i] is the smallest possible tail value for an increasing subsequence of length i+1. For each num, binary search in tails for the first element >= num and replace it. The length of tails is the LIS length.",
    },
  ],
  "trapping-rain-water": [
    {
      title: "Two Pointers — O(n)",
      complexity: "Time: O(n) | Space: O(1)",
      content: "Use left and right pointers. Track maxLeft and maxRight. At each step, process the side with the smaller max. If current height is less than the corresponding max, add the difference to the water count. Otherwise, update the max. Move the pointer inward.",
    },
    {
      title: "Prefix Max — O(n)",
      complexity: "Time: O(n) | Space: O(n)",
      content: "Precompute leftMax[i] (max height to the left of i) and rightMax[i] (max height to the right of i). Water at position i = min(leftMax[i], rightMax[i]) - height[i]. Sum over all i.",
    },
  ],
};

export function getApproaches(slug: string): ApproachEntry[] {
  return APPROACHES[slug] ?? [];
}
