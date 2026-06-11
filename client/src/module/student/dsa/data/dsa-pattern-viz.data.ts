export interface PatternVizStep {
  description: string;
  array: (number | null)[];
  pointers?: { label: string; index: number; color: string }[];
  highlights?: number[];
  variables?: Record<string, string | number>;
}

export interface PatternVizData {
  title: string;
  summary: string;
  exampleInput: string;
  steps: PatternVizStep[];
}

export const PATTERN_VIZ: Record<string, PatternVizData> = {
  "sliding-window": {
    title: "Sliding Window",
    summary: "Maintain a window of elements that expands/contracts as you iterate. Used for subarray/substring problems.",
    exampleInput: "[2, 1, 3, 4, 1, 2, 1, 5, 4]",
    steps: [
      {
        description: "Start with left=0, right=0, window_sum=0. We're looking for the maximum sum of any subarray of size 3.",
        array: [2, 1, 3, 4, 1, 2, 1, 5, 4],
        pointers: [
          { label: "L", index: 0, color: "bg-lime-500" },
          { label: "R", index: -1, color: "bg-sky-500" },
        ],
        variables: { "window sum": 0, "max sum": -Infinity, "window size": 3 },
      },
      {
        description: "Expand right pointer to index 0. Add arr[0]=2 to window_sum.",
        array: [2, 1, 3, 4, 1, 2, 1, 5, 4],
        pointers: [
          { label: "L", index: 0, color: "bg-lime-500" },
          { label: "R", index: 0, color: "bg-sky-500" },
        ],
        highlights: [0],
        variables: { "window sum": 2, "max sum": -Infinity, "window size": 3 },
      },
      {
        description: "Expand right to index 1. Add arr[1]=1 to window_sum = 3.",
        array: [2, 1, 3, 4, 1, 2, 1, 5, 4],
        pointers: [
          { label: "L", index: 0, color: "bg-lime-500" },
          { label: "R", index: 1, color: "bg-sky-500" },
        ],
        highlights: [0, 1],
        variables: { "window sum": 3, "max sum": -Infinity, "window size": 3 },
      },
      {
        description: "Expand right to index 2. Window is now size 3. window_sum = 6. Update max_sum = 6.",
        array: [2, 1, 3, 4, 1, 2, 1, 5, 4],
        pointers: [
          { label: "L", index: 0, color: "bg-lime-500" },
          { label: "R", index: 2, color: "bg-sky-500" },
        ],
        highlights: [0, 1, 2],
        variables: { "window sum": 6, "max sum": 6, "window size": 3 },
      },
      {
        description: "Slide window: remove arr[0]=2 from sum, advance L to 1. Expand R to 3, add arr[3]=4. window_sum = 8. Update max_sum = 8.",
        array: [2, 1, 3, 4, 1, 2, 1, 5, 4],
        pointers: [
          { label: "L", index: 1, color: "bg-lime-500" },
          { label: "R", index: 3, color: "bg-sky-500" },
        ],
        highlights: [1, 2, 3],
        variables: { "window sum": 8, "max sum": 8, "window size": 3 },
      },
      {
        description: "Slide: remove arr[1]=1, L=2. Expand R=4, add arr[4]=1. window_sum = 8. max_sum stays 8.",
        array: [2, 1, 3, 4, 1, 2, 1, 5, 4],
        pointers: [
          { label: "L", index: 2, color: "bg-lime-500" },
          { label: "R", index: 4, color: "bg-sky-500" },
        ],
        highlights: [2, 3, 4],
        variables: { "window sum": 8, "max sum": 8, "window size": 3 },
      },
      {
        description: "Slide: remove arr[2]=3, L=3. Expand R=5, add arr[5]=2. window_sum = 7. max_sum stays 8.",
        array: [2, 1, 3, 4, 1, 2, 1, 5, 4],
        pointers: [
          { label: "L", index: 3, color: "bg-lime-500" },
          { label: "R", index: 5, color: "bg-sky-500" },
        ],
        highlights: [3, 4, 5],
        variables: { "window sum": 7, "max sum": 8, "window size": 3 },
      },
      {
        description: "Slide: remove arr[3]=4, L=4. Expand R=6, add arr[6]=1. window_sum = 4. max_sum stays 8.",
        array: [2, 1, 3, 4, 1, 2, 1, 5, 4],
        pointers: [
          { label: "L", index: 4, color: "bg-lime-500" },
          { label: "R", index: 6, color: "bg-sky-500" },
        ],
        highlights: [4, 5, 6],
        variables: { "window sum": 4, "max sum": 8, "window size": 3 },
      },
      {
        description: "Slide: remove arr[4]=1, L=5. Expand R=7, add arr[7]=5. window_sum = 8. max_sum stays 8.",
        array: [2, 1, 3, 4, 1, 2, 1, 5, 4],
        pointers: [
          { label: "L", index: 5, color: "bg-lime-500" },
          { label: "R", index: 7, color: "bg-sky-500" },
        ],
        highlights: [5, 6, 7],
        variables: { "window sum": 8, "max sum": 8, "window size": 3 },
      },
      {
        description: "Slide: remove arr[5]=2, L=6. Expand R=8, add arr[8]=4. window_sum = 10. Update max_sum = 10.",
        array: [2, 1, 3, 4, 1, 2, 1, 5, 4],
        pointers: [
          { label: "L", index: 6, color: "bg-lime-500" },
          { label: "R", index: 8, color: "bg-sky-500" },
        ],
        highlights: [6, 7, 8],
        variables: { "window sum": 10, "max sum": 10, "window size": 3 },
      },
      {
        description: "Done! The maximum sum of any subarray of size 3 is 10 (subarray [1, 5, 4]).",
        array: [2, 1, 3, 4, 1, 2, 1, 5, 4],
        highlights: [6, 7, 8],
        variables: { "window sum": 10, "max sum": 10, "window size": 3 },
      },
    ],
  },

  "two-pointers": {
    title: "Two Pointers",
    summary: "Use two pointers to traverse an array from both ends (or same end at different speeds) to find a pair that satisfies a condition.",
    exampleInput: "sorted [1, 2, 3, 4, 5, 6, 7, 8, 9], target sum = 10",
    steps: [
      {
        description: "Sorted array. Place left at index 0, right at last index. Looking for two numbers that sum to 10.",
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        pointers: [
          { label: "L", index: 0, color: "bg-lime-500" },
          { label: "R", index: 8, color: "bg-rose-500" },
        ],
        variables: { "arr[L]": 1, "arr[R]": 9, sum: 10, target: 10 },
      },
      {
        description: "Check sum = 1 + 9 = 10. Found the pair! Return [0, 8].",
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        pointers: [
          { label: "L", index: 0, color: "bg-lime-500" },
          { label: "R", index: 8, color: "bg-rose-500" },
        ],
        highlights: [0, 8],
        variables: { "arr[L]": 1, "arr[R]": 9, sum: 10, target: 10 },
      },
    ],
  },

  "binary-search": {
    title: "Binary Search",
    summary: "Repeatedly divide the search space in half by comparing the target to the middle element.",
    exampleInput: "sorted [1, 3, 5, 7, 9, 11, 13, 15], target = 7",
    steps: [
      {
        description: "Sorted array. Set low=0, high=7. Target = 7.",
        array: [1, 3, 5, 7, 9, 11, 13, 15],
        pointers: [
          { label: "L", index: 0, color: "bg-lime-500" },
          { label: "H", index: 7, color: "bg-rose-500" },
        ],
        variables: { low: 0, high: 7, mid: "-", "arr[mid]": "-", target: 7 },
      },
      {
        description: "mid = (0 + 7) / 2 = 3. arr[3] = 7. Target found! Return index 3.",
        array: [1, 3, 5, 7, 9, 11, 13, 15],
        pointers: [
          { label: "L", index: 0, color: "bg-lime-500" },
          { label: "M", index: 3, color: "bg-sky-500" },
          { label: "H", index: 7, color: "bg-rose-500" },
        ],
        highlights: [3],
        variables: { low: 0, high: 7, mid: 3, "arr[mid]": 7, target: 7 },
      },
    ],
  },
};
