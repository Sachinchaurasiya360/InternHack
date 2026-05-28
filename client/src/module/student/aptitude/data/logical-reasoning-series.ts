import type { TopicTheory } from "./types";

export const logicalReasoningTheorySeries: TopicTheory[] = [
  {
    slug: "number-series",
    categorySlug: "logical-reasoning",
    introduction:
      "Number Series is one of the most commonly tested topics in logical reasoning and quantitative aptitude sections of placement exams. A number series is a sequence of numbers that follows a specific pattern or rule. Your task is to identify the underlying pattern and predict the next number, find a missing number, or identify the wrong number in the series.\n\nThe patterns in number series can range from simple arithmetic progressions (constant difference) to complex combinations involving squares, cubes, alternating operations, and nested patterns. The key to mastering this topic is recognizing the type of pattern quickly by examining the differences between consecutive terms, ratios, or relationships to well-known sequences like squares, cubes, primes, and Fibonacci numbers.\n\nWith practice, you develop an intuition for spotting patterns. Always start by computing first-order differences (difference between consecutive terms). If those are not constant, compute second-order differences (differences of differences). If ratios between consecutive terms are constant, it is a geometric series. Many series combine multiple operations such as alternating addition and multiplication, or use different rules for odd-positioned and even-positioned terms.",
    concepts: [
      "Arithmetic Series: Each term is obtained by adding a constant value (common difference) to the previous term. Example: 3, 7, 11, 15 (common difference = 4).",
      "Geometric Series: Each term is obtained by multiplying the previous term by a constant ratio. Example: 2, 6, 18, 54 (common ratio = 3).",
      "Difference Series: The differences between consecutive terms themselves form a recognizable pattern (arithmetic, geometric, or another known sequence).",
      "Square/Cube Series: Terms are perfect squares (1, 4, 9, 16, 25) or perfect cubes (1, 8, 27, 64, 125), or are derived by adding/subtracting squares or cubes.",
      "Alternating Series: Two different patterns are interleaved in alternating positions. Odd-positioned terms follow one rule and even-positioned terms follow another.",
      "Fibonacci-type Series: Each term is the sum of the two preceding terms. Example: 1, 1, 2, 3, 5, 8, 13.",
    ],
    methods: [
      {
        name: "Difference Method",
        steps: [
          "Write down the series and compute the difference between each pair of consecutive terms (first-order differences).",
          "If the first-order differences are constant, it is an arithmetic series. The next term = last term + common difference.",
          "If the first-order differences are not constant, compute second-order differences (differences of the first-order differences).",
          "If second-order differences are constant, the series follows a quadratic pattern. Use the pattern to predict the next difference and hence the next term.",
          "If second-order differences also vary, look for third-order differences or check if the differences form a known sequence (primes, squares, cubes, etc.).",
        ],
      },
      {
        name: "Ratio Method",
        steps: [
          "Compute the ratio of each term to its preceding term (term2/term1, term3/term2, etc.).",
          "If the ratios are constant, it is a geometric series. Next term = last term x common ratio.",
          "If the ratios form a pattern (e.g., 2, 3, 4, 5 or 1/2, 1/3, 1/4), use that pattern to determine the next ratio and compute the next term.",
        ],
      },
      {
        name: "Pattern Recognition Method",
        steps: [
          "Check if the terms are related to squares (1, 4, 9, 16...), cubes (1, 8, 27, 64...), primes (2, 3, 5, 7, 11...), or Fibonacci numbers.",
          "Check if the series uses alternating operations, such as +2, x3, +2, x3.",
          "Check if odd-positioned and even-positioned terms follow separate sub-series.",
          "For combined operation series, identify the repeating cycle of operations applied to generate each successive term.",
        ],
      },
    ],
    quickTricks: [
      "Memorize squares of 1 to 30 and cubes of 1 to 15, many series are based on these.",
      "If differences between terms are increasing rapidly, suspect a geometric or exponential pattern rather than arithmetic.",
      "If no single pattern fits all terms, try splitting the series into two interleaved sub-series (odd and even positions).",
      "For series like 2, 6, 12, 20, 30, differences are 4, 6, 8, 10 (arithmetic). The next difference is 12, so the next term is 42.",
      "Prime number series (2, 3, 5, 7, 11, 13, 17) and their multiples appear frequently, keep the first 15 primes memorized.",
    ],
    solvedExamples: [
      {
        problem:
          "Find the next number in the series: 2, 5, 10, 17, 26, ?",
        solution:
          "Step 1: Compute first-order differences: 5-2=3, 10-5=5, 17-10=7, 26-17=9. Differences are 3, 5, 7, 9.\nStep 2: Compute second-order differences: 5-3=2, 7-5=2, 9-7=2. Second-order differences are constant at 2.\nStep 3: The next first-order difference = 9 + 2 = 11.\nStep 4: The next term = 26 + 11 = 37.\nAlternatively, notice that terms are n^2 + 1 for n = 1, 2, 3, 4, 5. For n=6: 36 + 1 = 37.",
        answer: "37",
      },
      {
        problem:
          "Find the next number in the series: 3, 6, 12, 24, 48, ?",
        solution:
          "Step 1: Compute ratios: 6/3=2, 12/6=2, 24/12=2, 48/24=2. Constant ratio of 2.\nStep 2: This is a geometric series with common ratio 2.\nStep 3: Next term = 48 x 2 = 96.",
        answer: "96",
      },
      {
        problem:
          "Find the wrong number in the series: 1, 2, 6, 24, 96, 720.",
        solution:
          "Step 1: Compute ratios: 2/1=2, 6/2=3, 24/6=4, 96/24=4, 720/96=7.5.\nStep 2: The expected ratios should be 2, 3, 4, 5, 6 (factorials pattern: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720).\nStep 3: After 24 (which is 4!), the next term should be 5! = 120, not 96.\nStep 4: The wrong number is 96; it should be 120.",
        answer: "96 (should be 120)",
      },
    ],
    commonMistakes: [
      "Assuming the series is arithmetic without checking, always verify by computing differences first.",
      "Overlooking alternating patterns where odd and even positions follow different rules.",
      "Confusing a quadratic pattern (differences increasing by a constant) with a geometric pattern.",
    ],
    keyTakeaways: [
      "Always start with the difference method, compute first-order and second-order differences.",
      "If differences do not reveal a pattern, try the ratio method.",
      "Many series are based on squares, cubes, primes, or factorials, keep these sequences memorized.",
      "Alternating and combined-operation series require you to look at every other term or track the cycle of operations.",
      "Practice is the single best way to improve speed and accuracy in number series problems.",
    ],
  },
  {
    slug: "letter-and-symbol-series",
    categorySlug: "logical-reasoning",
    introduction:
      "Letter and Symbol Series problems test your ability to identify patterns in sequences of letters, symbols, or combinations of both. These questions are a staple of logical reasoning sections in placement exams and require you to find the rule governing the sequence and predict the next element or identify the missing one.\n\nLetter series operate on the positions of letters in the alphabet (A=1, B=2, ..., Z=26). Patterns may involve constant shifts (e.g., +2 positions each step), alternating shifts, skipping patterns, or reversals. Some series involve pairs or groups of letters where each group follows an internal pattern. Symbol series involve shapes, arrows, or special characters arranged according to rotation, reflection, addition/removal, or positional rules.\n\nThe key skill is translating letters to their numerical positions and then applying the same difference/ratio techniques used in number series. For symbol series, focus on identifying which property changes (shape, size, shading, orientation, count) and which stays constant across the sequence.",
    concepts: [
      "Alphabetical Position Values: A=1, B=2, C=3, ..., Z=26. Converting letters to numbers helps identify arithmetic patterns.",
      "Cyclic Nature: The alphabet is cyclic, after Z (26), you wrap back to A (1). So Z + 2 = B.",
      "Forward and Backward Shifts: A series may move forward (+1, +2, +3) or backward (-1, -2, -3) through the alphabet.",
      "Group Patterns: Letters may be arranged in groups (pairs, triples) where each group follows a consistent rule.",
      "Mirror/Reverse Patterns: Some series use mirror images of letter groups, e.g., AB, BA, CD, DC.",
      "Symbol Properties: In symbol series, track shape, size, shading/fill, orientation/rotation, and count of elements independently.",
    ],
    methods: [
      {
        name: "Position Value Method",
        steps: [
          "Convert each letter in the series to its position number (A=1, B=2, ..., Z=26).",
          "Compute the differences between consecutive position values.",
          "Identify the pattern in the differences (constant, increasing, alternating, etc.).",
          "Use the pattern to determine the next position value and convert back to a letter.",
          "If the value exceeds 26, apply modular arithmetic (subtract 26 to wrap around).",
        ],
      },
      {
        name: "Group Analysis Method",
        steps: [
          "Divide the series into logical groups (pairs, triples, or segments separated by commas/spaces).",
          "Analyze the relationship within each group (e.g., consecutive letters, reverse order, constant gap).",
          "Analyze the relationship between groups (e.g., each group starts 3 positions ahead of the previous group).",
          "Apply the discovered rules to construct the next group.",
        ],
      },
      {
        name: "Symbol Tracking Method",
        steps: [
          "List all properties that could change: shape, shading, size, rotation, position, count.",
          "Track each property across all elements in the series independently.",
          "Identify which properties change and what their individual patterns are.",
          "Combine the individual property patterns to predict the next symbol.",
        ],
      },
    ],
    quickTricks: [
      "Memorize key alphabet positions: A=1, E=5, I=9, M=13, N=14, O=15, S=19, T=20, Z=26.",
      "For opposite letters: A-Z, B-Y, C-X, etc. Each pair sums to 27.",
      "If the gap between letters keeps increasing by 1 (e.g., +1, +2, +3, +4), look for triangular number connections.",
      "In symbol series, if you cannot find a single pattern, check if alternating elements follow separate sub-patterns.",
    ],
    solvedExamples: [
      {
        problem: "Find the next letter in the series: A, C, F, J, O, ?",
        solution:
          "Step 1: Convert to positions: A=1, C=3, F=6, J=10, O=15.\nStep 2: Compute differences: 3-1=2, 6-3=3, 10-6=4, 15-10=5.\nStep 3: The differences are 2, 3, 4, 5, increasing by 1 each time.\nStep 4: The next difference = 6. Next position = 15 + 6 = 21.\nStep 5: Position 21 = U.",
        answer: "U",
      },
      {
        problem:
          "Find the next group in the series: AZ, BY, CX, DW, ?",
        solution:
          "Step 1: First letters of each group: A, B, C, D, moving forward by 1.\nStep 2: Second letters of each group: Z, Y, X, W, moving backward by 1.\nStep 3: The pattern: first letter advances by 1, second letter retreats by 1.\nStep 4: Next first letter: E (D+1). Next second letter: V (W-1).\nStep 5: The next group is EV.",
        answer: "EV",
      },
      {
        problem:
          "Find the missing letters: B, E, H, K, ?, Q",
        solution:
          "Step 1: Convert to positions: B=2, E=5, H=8, K=11, ?, Q=17.\nStep 2: Differences: 5-2=3, 8-5=3, 11-8=3. Constant difference of 3.\nStep 3: Missing position = 11 + 3 = 14.\nStep 4: Position 14 = N. Verify: 14 + 3 = 17 = Q. Correct.",
        answer: "N",
      },
    ],
    commonMistakes: [
      "Forgetting the cyclic nature of the alphabet, after Z comes A, not stopping at Z.",
      "Miscounting letter positions, especially for letters in the second half of the alphabet (N=14, not 13).",
      "Trying to force a single pattern when the series actually has two interleaved sub-patterns.",
    ],
    keyTakeaways: [
      "Always convert letters to numbers first, it makes pattern detection much easier.",
      "Memorize key letter positions to speed up conversions.",
      "Look for group patterns when individual letter patterns are not obvious.",
      "For symbol series, track each visual property independently.",
      "Opposite letters in the alphabet always sum to 27 (A+Z=1+26=27).",
    ],
  },
];
