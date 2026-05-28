import type { TopicTheory } from "./types";

export const logicalReasoningTheoryCodingPuzzles: TopicTheory[] = [
  {
    slug: "coding-and-decoding",
    categorySlug: "logical-reasoning",
    introduction:
      "Coding and Decoding involves encoding and decoding words or numbers using specific rules. In these problems, a word or number is converted into a code using a pattern, and you must identify the pattern to decode a new word or encode a given word.\n\nCommon coding types include letter shifting (each letter moves by a fixed number), positional coding (letters are replaced by their alphabet positions), reverse order coding, and symbol-based substitution. Some problems use a combination of these methods.\n\nThis topic appears frequently in banking exams, SSC, and campus placements. The key is to quickly identify the coding rule by comparing the original word with its code.",
    concepts: [
      "Letter shifting: each letter is moved forward or backward by a fixed number (e.g., A+2=C).",
      "Positional values: A=1, B=2, C=3, ..., Z=26.",
      "Reverse alphabet coding: A=26, B=25, ..., Z=1 (i.e., position = 27 - original position).",
      "Conditional coding: different rules apply based on the position of the letter (odd/even).",
      "Number coding: letters are replaced by their positional numbers or by arithmetic operations on positions.",
    ],
    methods: [
      {
        name: "Difference Method",
        steps: [
          "Write down the original word and the code side by side.",
          "Convert both to positional values (A=1, B=2, etc.).",
          "Calculate the difference between each pair: code position - original position.",
          "If the difference is constant, it is a simple shift cipher.",
          "If the difference varies, look for a pattern (e.g., +1, +2, +3 or alternating).",
        ],
      },
      {
        name: "Pattern Recognition Method",
        steps: [
          "Check if the code is the reverse of the word.",
          "Check if vowels and consonants are coded differently.",
          "Check if odd-positioned and even-positioned letters follow different rules.",
          "Test if the code uses the reverse alphabet (A↔Z, B↔Y, etc.).",
          "Apply the discovered rule to the new word to get the answer.",
        ],
      },
    ],
    quickTricks: [
      "Reverse alphabet shortcut: a letter's reverse = 27 - position (e.g., D=4, reverse = 27-4 = 23 = W).",
      "For shift ciphers, check the first and last letter pair to quickly find the shift value.",
      "If the code looks like random letters, try converting to numbers first.",
      "Common shifts in exams: +1, +2, -1, -2, reverse alphabet.",
      "For number codes, check if the number equals the sum or product of letter positions.",
    ],
    solvedExamples: [
      {
        problem:
          "If COMPUTER is coded as DPNQVUFS, how is MACHINE coded?",
        solution:
          "Compare: C→D (+1), O→P (+1), M→N (+1), P→Q (+1), U→V (+1), T→U (+1), E→F (+1), R→S (+1).\nEach letter is shifted by +1.\nApply to MACHINE: M→N, A→B, C→D, H→I, I→J, N→O, E→F.",
        answer: "NBDIJOF",
      },
      {
        problem:
          "In a certain code, CLOUD is written as XOLFW. How is STORM written in that code?",
        solution:
          "C=3→X=24 (27-3=24), L=12→O=15 (12+3=15)... Let me check reverse alphabet: C(3)→X(24)=27-3. L(12)→O(15)≠27-12=15. Yes! 27-12=15=O.\nO(15)→L(12)=27-15=12. U(21)→F(6)=27-21=6. D(4)→W(23)=27-4=23.\nThis is reverse alphabet coding (each letter → 27 minus its position).\nS(19)→27-19=8=H, T(20)→27-20=7=G, O(15)→27-15=12=L, R(18)→27-18=9=I, M(13)→27-13=14=N.",
        answer: "HGLIN",
      },
    ],
    commonMistakes: [
      "Assuming a constant shift without verifying all letters, some codes use variable shifts.",
      "Confusing reverse alphabet (A↔Z) with simple backward shift (each letter -1).",
      "Making arithmetic errors in positional calculations, double-check A=1 through Z=26.",
    ],
    keyTakeaways: [
      "Always compare original and coded letters side by side using positional values.",
      "The most common coding types are shift cipher and reverse alphabet.",
      "Reverse alphabet: position + reverse position = 27 (A↔Z, B↔Y, etc.).",
      "If a simple pattern doesn't emerge, check for conditional rules (odd/even positions).",
      "Speed comes from quickly recognizing common patterns, practice multiple types.",
    ],
  },
  {
    slug: "input-output",
    categorySlug: "logical-reasoning",
    introduction:
      "Input-Output problems involve tracing the transformation of a sequence of words or numbers through a series of operations. A 'machine' applies a specific rule at each step, rearranging the elements until a final output is reached.\n\nThe key is to identify the rule being applied at each step by comparing consecutive stages. Common operations include sorting (ascending/descending), swapping positions, or moving specific elements (smallest, largest, alphabetically first) to specific positions.\n\nThis topic is very important for bank exams (SBI PO, IBPS PO) and campus placement tests. Once you identify the pattern, the questions become straightforward.",
    concepts: [
      "Each step applies exactly one operation to the previous step's result.",
      "Common operations: move the smallest number to the left, move a word alphabetically, swap two elements.",
      "The number of steps usually equals the number of elements minus one.",
      "The final output is typically a fully sorted sequence (ascending or descending).",
      "Both numbers and words can be present in the same input, with different rules for each.",
    ],
    methods: [
      {
        name: "Pattern Identification Method",
        steps: [
          "Write the input and all given steps one below the other, aligned by position.",
          "Compare Step 1 with Input: identify which element moved and where.",
          "Compare Step 2 with Step 1: identify the next operation.",
          "Look for a consistent rule: smallest number first? Alphabetical order?",
          "Once the rule is identified, apply it to the given input to find the required step.",
        ],
      },
      {
        name: "Position Tracking Method",
        steps: [
          "Number each position from left to right.",
          "Track where each element ends up at each step.",
          "Identify the pattern: is position 1 always filled first, then position 2, etc.?",
          "Determine if the rule alternates (e.g., smallest number, then first word alphabetically).",
          "Apply the rule step by step to reach the required step number.",
        ],
      },
    ],
    quickTricks: [
      "If the final output is fully sorted, the machine is performing a sorting algorithm.",
      "If one element moves per step, count which step you need and apply the rule that many times.",
      "Look at Step 1 carefully, the first operation reveals the primary sorting criterion.",
      "If words and numbers are intermixed, they may be sorted by separate rules (words alphabetically, numbers numerically).",
      "Count total steps needed: for N elements, usually N-1 steps are needed for full sorting.",
    ],
    solvedExamples: [
      {
        problem:
          "Input: 45 love 32 nice 67 act 18\nStep 1: act 45 love 32 nice 67 18\nStep 2: act 18 45 love 32 nice 67\nStep 3: act 18 love 45 32 nice 67\nWhat is Step 4?",
        solution:
          "Step 1: 'act' (alphabetically first word) moved to position 1.\nStep 2: 18 (smallest number) moved to position 2.\nStep 3: 'love' (next alphabetically among remaining words) moved to position 3.\nPattern: alternating, first alphabetical word, then smallest number, then next word, then next number.\nStep 4: next smallest number among remaining = 32. Move 32 to position 4.\nResult: act 18 love 32 45 nice 67.",
        answer: "act 18 love 32 45 nice 67",
      },
    ],
    commonMistakes: [
      "Assuming the rule before checking all steps, always verify your pattern against at least 2 transitions.",
      "Confusing the sorting order (ascending vs descending, A-Z vs Z-A).",
      "Miscounting positions, always number positions explicitly.",
    ],
    keyTakeaways: [
      "Compare consecutive steps to identify the single operation applied at each step.",
      "Most input-output machines perform a variant of sorting (numbers ascending, words alphabetically).",
      "The rule often alternates between two criteria (e.g., word then number).",
      "Once the rule is clear, applying it mechanically step by step gives the answer.",
      "Write neatly and align elements by position to avoid tracking errors.",
    ],
  },
  {
    slug: "puzzles",
    categorySlug: "logical-reasoning",
    introduction:
      "Puzzle problems in logical reasoning involve arranging data based on multiple conditions. These are more complex than simple seating arrangements because they combine multiple dimensions, such as name, profession, age, city, and floor number, all of which must be determined from the given clues.\n\nCommon types include floor-based puzzles (who lives on which floor), scheduling puzzles (who does what on which day), comparison puzzles (ranking by age, height, salary), and multi-parameter puzzles that combine several attributes.\n\nPuzzles are heavily weighted in bank exams and campus placements. They require systematic organization, careful clue processing, and patience. The key is creating a clear table or grid and filling it in methodically.",
    concepts: [
      "Each puzzle has a fixed set of entities (people) and attributes (floor, color, profession, etc.).",
      "Each attribute value is assigned to exactly one entity (one-to-one mapping).",
      "Definite clues (exact assignments) should be processed before relative clues (comparisons).",
      "Negative clues (A is NOT on floor 3) help eliminate possibilities.",
      "When only two possibilities remain for a slot, other clues may resolve the ambiguity.",
    ],
    methods: [
      {
        name: "Table/Grid Method",
        steps: [
          "Create a table with entities as rows and attributes as columns.",
          "First, fill in all definite information from the clues.",
          "Use negative clues to mark cells that are impossible.",
          "Apply relative clues (above, below, between) to narrow down positions.",
          "When a cell has only one possibility left, fill it in and propagate the constraint.",
        ],
      },
      {
        name: "Case Splitting Method",
        steps: [
          "Process all definite clues first.",
          "When stuck, identify a clue with two possible interpretations.",
          "Create Case 1 and Case 2 for the two possibilities.",
          "Continue processing clues in each case separately.",
          "Eliminate the case that leads to a contradiction.",
        ],
      },
    ],
    quickTricks: [
      "Always count: if 8 people and 8 floors, each floor has exactly one person.",
      "Process the most restrictive clue first, it eliminates the most possibilities.",
      "If a clue says 'A is two floors above B,' in a 5-floor building, B can only be on floors 1-3.",
      "Cross-reference clues: if two clues both involve person X, combine their constraints.",
      "Read ALL clues before starting, some clues make more sense after reading others.",
    ],
    solvedExamples: [
      {
        problem:
          "Four friends A, B, C, D live on floors 1-4 (1=ground). A lives above B. C lives on floor 3. D does not live on floor 1. Who lives on floor 1?",
        solution:
          "C is on floor 3 (given).\nD is not on floor 1. Remaining floors: 1, 2, 4 for A, B, D.\nA lives above B, so A's floor > B's floor.\nIf B is on floor 1, A could be on 2 or 4. D takes the remaining.\nIf B is on floor 2, A must be on floor 4 (only floor above 2 that is available). D takes floor 1. But D is not on floor 1, contradiction.\nSo B must be on floor 1. A is on 2 or 4, D takes the other.\nIf A is on floor 2, D is on floor 4. A(2) > B(1) ✓.\nIf A is on floor 4, D is on floor 2. A(4) > B(1) ✓. Both work.\nBut the question only asks floor 1: B.",
        answer: "B lives on floor 1.",
      },
    ],
    commonMistakes: [
      "Not reading all clues before starting, a later clue might make an earlier one easier.",
      "Forgetting the one-to-one constraint, once an attribute is assigned, it cannot be used again.",
      "Making assumptions without basis, only fill cells that are logically determined.",
    ],
    keyTakeaways: [
      "Create a clear table or grid before processing any clues.",
      "Process definite clues first, then relative clues, then negative clues.",
      "Use case splitting when stuck, one case will always lead to a contradiction.",
      "Verify your final answer against EVERY clue to ensure consistency.",
      "Practice regularly, speed in puzzles comes from pattern recognition across many problem types.",
    ],
  },
  {
    slug: "inequality-reasoning",
    categorySlug: "logical-reasoning",
    introduction:
      "Inequality Reasoning problems involve determining relationships between elements using coded inequality symbols or direct inequality statements. You are given a chain of inequalities and must determine which conclusions are definitely true.\n\nIn coded inequality problems, symbols like @, #, $, %, * replace standard comparison operators (>, <, =, >=, <=). The first step is to decode the symbols, and then evaluate the given conclusions.\n\nThis topic is a staple in bank exams (SBI PO, IBPS, RBI) and appears in campus placements as well. With practice, these can be solved very quickly by chaining inequalities.",
    concepts: [
      "Standard inequality symbols: > (greater than), < (less than), = (equal to), >= (greater than or equal to), <= (less than or equal to).",
      "Chaining: if A > B and B > C, then A > C (transitive property).",
      "A chain breaks at contradictions: A > B and B < C tells us nothing about A vs C.",
      "Complementary pairs: 'A > B' and 'A <= B' are complementary (exactly one is true).",
      "Either-or: if neither conclusion follows individually but they form a complementary pair, 'Either I or II' follows.",
    ],
    methods: [
      {
        name: "Chain Building Method",
        steps: [
          "Decode any symbols to standard operators (>, <, =, >=, <=).",
          "Write the full chain of inequalities connecting all elements.",
          "For each conclusion, trace the path between the two elements in the chain.",
          "If the path maintains a consistent direction (all > or all <), the conclusion follows.",
          "If the path reverses direction or has conflicting operators, the conclusion does not follow.",
        ],
      },
      {
        name: "Complementary Pair Check",
        steps: [
          "If Conclusion I and II both don't follow individually, check if they are complementary.",
          "Complementary pairs: (A > B, A <= B), (A < B, A >= B), (A = B, A ≠ B).",
          "If they are complementary, answer is 'Either I or II follows.'",
          "If they are not complementary, answer is 'Neither follows.'",
        ],
      },
    ],
    quickTricks: [
      "A chain is only valid if all operators point in the same direction between the two elements.",
      "If any '=' appears in the chain, the conclusion must use '>=' or '<=' (not strict > or <).",
      "Complementary pairs: > and <=, < and >=, = and ≠.",
      "Read the chain left to right: A > B = C < D means A > B, B = C, C < D. You can conclude A > C but NOT A > D.",
      "Decode symbols FIRST before attempting any analysis.",
    ],
    solvedExamples: [
      {
        problem:
          "Statements: P >= Q, Q > R, R = S, S < T.\nConclusions: I. P > S. II. T > Q.",
        solution:
          "Chain: P >= Q > R = S < T.\nConclusion I: P >= Q > R = S → P >= Q > S → P > S. ✓ Follows.\nConclusion II: T > S = R < Q. The chain reverses at R (R = S < T but R < Q). Path from T to Q: T > S = R < Q. Direction reverses, so we can't determine T vs Q. Does not follow.",
        answer: "Only Conclusion I follows.",
      },
      {
        problem:
          "Statements: A > B, B >= C, C = D, D < E.\nConclusions: I. A > D. II. E > B.",
        solution:
          "Chain: A > B >= C = D < E.\nConclusion I: A > B >= C = D → A > D. ✓ Follows.\nConclusion II: E > D = C <= B. Path: E > D = C <= B. Direction reverses at C (E > D = C but C <= B). Cannot determine E vs B. Does not follow.",
        answer: "Only Conclusion I follows.",
      },
    ],
    commonMistakes: [
      "Chaining through a direction reversal, A > B < C does NOT tell you A > C or A < C.",
      "Forgetting that >= includes equality, if the chain has >=, conclusions using strict > may not hold.",
      "Not checking for complementary pairs when both conclusions fail individually.",
    ],
    keyTakeaways: [
      "Always write the full chain before evaluating conclusions.",
      "A conclusion is valid only if the chain between the two elements has consistent direction.",
      "If any link is >= or <=, the overall conclusion can only be >= or <= (not strict).",
      "Check complementary pairs when individual conclusions fail.",
      "Decode symbols immediately, don't try to work with coded operators.",
    ],
  },
];
