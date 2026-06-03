import type { TopicTheory } from "./types";

export const aptitudeTheoryCombinatorics: TopicTheory[] = [
  {
    slug: "permutation-and-combination",
    categorySlug: "aptitude",
    introduction:
      "Permutation and Combination are counting principles used to determine the number of ways to arrange or select items. A permutation is an arrangement where order matters, while a combination is a selection where order does not matter.\n\nThe fundamental principle of counting states: if one event can occur in m ways and another in n ways, they can occur together in m x n ways (multiplication principle). Permutations answer 'in how many ways can we arrange r items from n?' while combinations answer 'in how many ways can we choose r items from n?'\n\nThese concepts are crucial for probability, which builds directly on counting. Competitive exams frequently test arrangements with restrictions (e.g., certain items must be together or apart), circular permutations, and combinations with conditions. Understanding the distinction between 'arrange' and 'select' is the most important first step.",
    concepts: [
      "Factorial: n! = n x (n-1) x (n-2) x ... x 1. 0! = 1.",
      "Permutation: arrangement where order matters.",
      "Combination: selection where order does not matter.",
      "nPr = n! / (n-r)!",
      "nCr = n! / [r! x (n-r)!]",
      "nCr = nPr / r!",
    ],
    formulas: [
      { name: "Permutation", formula: "nPr = n! / (n-r)!" },
      { name: "Combination", formula: "nCr = n! / [r!(n-r)!]" },
      { name: "Circular permutation", formula: "(n-1)!" },
      {
        name: "Permutation with repetition",
        formula: "n^r (r items from n with repetition allowed)",
      },
      {
        name: "Permutation of items with duplicates",
        formula: "n! / (p! x q! x r!...) where p, q, r are frequencies of duplicates",
      },
      {
        name: "nCr properties",
        formula: "nC0 = nCn = 1; nCr = nC(n-r); nCr + nC(r-1) = (n+1)Cr",
      },
    ],
    methods: [
      {
        name: "Deciding Permutation vs Combination",
        steps: [
          "Ask: does the order of selection matter?",
          "If yes (arrangements, rankings, positions), use permutation.",
          "If no (groups, teams, committees), use combination.",
        ],
      },
      {
        name: "Handling Restrictions",
        steps: [
          "For 'always together': treat the group as one unit, arrange, then multiply by internal arrangements.",
          "For 'never together': Total arrangements - Arrangements where they are together.",
          "For 'always include' or 'always exclude': adjust n and r accordingly.",
        ],
      },
    ],
    quickTricks: [
      "nCr = nC(n-r). Use whichever is smaller for easier calculation. E.g., 10C8 = 10C2 = 45.",
      "Number of ways to divide n items into groups of r: nCr. If groups are identical, divide by k! (k = number of groups).",
      "Total subsets of a set of n elements = 2^n (each element either included or not).",
      "Number of diagonals in an n-sided polygon = nC2 - n = n(n-3)/2.",
      "For 'at least one' problems: Total - None = at least one.",
    ],
    solvedExamples: [
      {
        problem:
          "In how many ways can 5 students be arranged in a row?",
        solution:
          "Step 1: This is a permutation of 5 items in 5 positions.\nStep 2: Number of ways = 5! = 120.",
        answer: "120",
      },
      {
        problem:
          "From a group of 8 people, a committee of 3 is to be formed. In how many ways can this be done?",
        solution:
          "Step 1: Order does not matter (committee), so use combination.\nStep 2: 8C3 = 8! / (3! x 5!) = (8 x 7 x 6) / (3 x 2 x 1) = 336/6 = 56.",
        answer: "56",
      },
      {
        problem:
          "How many 4-letter words can be formed using the letters of 'APPLE'?",
        solution:
          "Step 1: APPLE has 5 letters: A, P, P, L, E (P repeats twice).\nStep 2: Case 1, all 4 letters different (choose from A, P, L, E): 4C4 x 4! = 1 x 24 = 24.\nStep 3: Case 2, two P's and 2 from {A, L, E}: 3C2 x 4!/2! = 3 x 12 = 36.\nStep 4: Total = 24 + 36 = 60.",
        answer: "60",
      },
    ],
    commonMistakes: [
      "Using permutation when the problem asks for selection (combination) and vice versa.",
      "Forgetting to account for duplicate items in arrangements.",
      "In circular permutations, using n! instead of (n-1)!.",
    ],
    keyTakeaways: [
      "Permutation = arrangement (order matters). Combination = selection (order doesn't matter).",
      "nPr = n!/(n-r)!. nCr = n!/[r!(n-r)!].",
      "For circular arrangements, use (n-1)!.",
      "For 'never together,' use Total - Together.",
      "Always check for duplicate elements and divide by their factorials.",
    ],
  },
  {
    slug: "probability",
    categorySlug: "aptitude",
    introduction:
      "Probability measures the likelihood of an event occurring, expressed as a number between 0 and 1 (or 0% to 100%). A probability of 0 means the event is impossible, and a probability of 1 means it is certain.\n\nThe basic formula is P(E) = Number of favorable outcomes / Total number of possible outcomes. This assumes all outcomes are equally likely. For example, when rolling a fair die, each face has a probability of 1/6. Probability problems require a strong foundation in counting (permutations and combinations) to determine favorable and total outcomes.\n\nKey concepts include complementary probability (P(not E) = 1 - P(E)), independent events (P(A and B) = P(A) x P(B)), and mutually exclusive events (P(A or B) = P(A) + P(B)). For non-mutually exclusive events, P(A or B) = P(A) + P(B) - P(A and B). Conditional probability, where the probability of one event depends on another, is also commonly tested.",
    concepts: [
      "P(E) = Favorable outcomes / Total outcomes.",
      "0 ≤ P(E) ≤ 1.",
      "P(not E) = 1 - P(E).",
      "Independent events: occurrence of one doesn't affect the other.",
      "Mutually exclusive events: cannot happen simultaneously.",
    ],
    formulas: [
      { name: "Basic probability", formula: "P(E) = n(E) / n(S)" },
      { name: "Complementary", formula: "P(E') = 1 - P(E)" },
      { name: "Addition rule (general)", formula: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)" },
      { name: "Addition rule (mutually exclusive)", formula: "P(A ∪ B) = P(A) + P(B)" },
      { name: "Multiplication rule (independent)", formula: "P(A ∩ B) = P(A) x P(B)" },
      {
        name: "Conditional probability",
        formula: "P(A|B) = P(A ∩ B) / P(B)",
      },
    ],
    methods: [
      {
        name: "Classical Probability",
        steps: [
          "Define the sample space (all possible outcomes).",
          "Count the favorable outcomes.",
          "P(E) = Favorable / Total.",
        ],
      },
      {
        name: "Using Complement",
        steps: [
          "If directly counting favorable outcomes is hard, count unfavorable ones.",
          "P(at least one) = 1 - P(none).",
          "This is often easier for 'at least' problems.",
        ],
      },
    ],
    quickTricks: [
      "P(at least one) = 1 - P(none). This is the most useful shortcut.",
      "For 'or' problems with mutually exclusive events, just add the probabilities.",
      "For cards: total = 52, each suit = 13, face cards = 12, aces = 4.",
      "For dice: total outcomes for n dice = 6^n.",
      "If events are independent: P(all occur) = product of individual probabilities.",
    ],
    solvedExamples: [
      {
        problem:
          "Two dice are thrown. What is the probability that the sum is 7?",
        solution:
          "Step 1: Total outcomes = 6 x 6 = 36.\nStep 2: Favorable outcomes for sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6.\nStep 3: P(sum = 7) = 6/36 = 1/6.",
        answer: "1/6",
      },
      {
        problem:
          "A bag has 3 red, 5 blue, and 2 green balls. One ball is drawn. Find P(not green).",
        solution:
          "Step 1: Total balls = 3 + 5 + 2 = 10.\nStep 2: P(green) = 2/10 = 1/5.\nStep 3: P(not green) = 1 - 1/5 = 4/5.",
        answer: "4/5",
      },
      {
        problem:
          "A card is drawn from a standard deck. What is the probability of getting a king or a heart?",
        solution:
          "Step 1: P(king) = 4/52. P(heart) = 13/52. P(king and heart) = 1/52.\nStep 2: P(king or heart) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13.",
        answer: "4/13",
      },
    ],
    commonMistakes: [
      "Adding probabilities of non-mutually exclusive events without subtracting the overlap.",
      "Multiplying probabilities of dependent events as if they were independent.",
      "Forgetting that probability can never exceed 1, if your answer is > 1, recheck.",
    ],
    keyTakeaways: [
      "P(E) = Favorable / Total. Always ensure outcomes are equally likely.",
      "Use P(at least one) = 1 - P(none) for 'at least' problems.",
      "For 'and' (both): multiply. For 'or' (either): add (and subtract overlap).",
      "Independent events: P(A and B) = P(A) x P(B).",
      "Always check: 0 ≤ P ≤ 1 and P(E) + P(E') = 1.",
    ],
  },
];
