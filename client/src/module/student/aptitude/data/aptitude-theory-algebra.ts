import type { TopicTheory } from "./types";

export const aptitudeTheoryAlgebra: TopicTheory[] = [
  {
    slug: "linear-equations",
    categorySlug: "aptitude",
    introduction:
      "Linear equations are equations where the highest power of the variable is 1. A linear equation in one variable (ax + b = 0) has exactly one solution. A system of two linear equations in two variables can be solved by substitution, elimination, or cross-multiplication to find the unique values of both variables.\n\nFor a system a1x + b1y = c1 and a2x + b2y = c2: if a1/a2 ≠ b1/b2, the system has a unique solution (consistent). If a1/a2 = b1/b2 = c1/c2, the equations are identical (infinite solutions). If a1/a2 = b1/b2 ≠ c1/c2, the system is inconsistent (no solution, parallel lines).\n\nLinear equation problems in competitive exams are usually word problems that require you to set up two equations from the given conditions and solve them. Common scenarios include age problems, digit problems, fraction problems, and work-rate problems where the unknowns are linearly related.",
    concepts: [
      "Linear equation in one variable: ax + b = 0 → x = -b/a.",
      "System of two linear equations has a unique solution when the lines intersect.",
      "Parallel lines (no solution): same slope, different intercepts.",
      "Coincident lines (infinite solutions): same slope, same intercept.",
    ],
    formulas: [
      {
        name: "Solution condition",
        formula: "Unique solution: a1/a2 ≠ b1/b2",
      },
      {
        name: "No solution condition",
        formula: "a1/a2 = b1/b2 ≠ c1/c2",
      },
      {
        name: "Infinite solutions condition",
        formula: "a1/a2 = b1/b2 = c1/c2",
      },
      {
        name: "Cross-multiplication method",
        formula: "x/(b1c2-b2c1) = y/(c1a2-c2a1) = 1/(a1b2-a2b1)",
      },
    ],
    methods: [
      {
        name: "Substitution Method",
        steps: [
          "From one equation, express one variable in terms of the other.",
          "Substitute into the second equation.",
          "Solve for the remaining variable.",
          "Back-substitute to find the first variable.",
        ],
      },
      {
        name: "Elimination Method",
        steps: [
          "Multiply equations to make coefficients of one variable equal.",
          "Add or subtract equations to eliminate that variable.",
          "Solve for the remaining variable.",
          "Substitute back to find the other.",
        ],
      },
    ],
    quickTricks: [
      "For simple problems, try substitution of answer choices, it can be faster.",
      "If coefficients are small, elimination is often the fastest algebraic method.",
      "For fraction problems: let the fraction be x/y, then set up two equations from given conditions.",
      "Cross-multiplication is a formula-based method, directly gives x and y without step-by-step elimination.",
    ],
    solvedExamples: [
      {
        problem:
          "Solve: 3x + 4y = 24 and 5x - 2y = 14.",
        solution:
          "Step 1: Multiply equation 2 by 2: 10x - 4y = 28.\nStep 2: Add to equation 1: 3x + 4y + 10x - 4y = 24 + 28 → 13x = 52 → x = 4.\nStep 3: Substitute x = 4 in equation 1: 12 + 4y = 24 → 4y = 12 → y = 3.",
        answer: "x = 4, y = 3",
      },
      {
        problem:
          "A fraction becomes 1/3 if 1 is subtracted from the numerator. It becomes 1/4 if 8 is added to the denominator. Find the fraction.",
        solution:
          "Step 1: Let fraction = x/y.\nStep 2: (x-1)/y = 1/3 → 3x - 3 = y → y = 3x - 3.\nStep 3: x/(y+8) = 1/4 → 4x = y + 8.\nStep 4: Substitute y = 3x - 3: 4x = 3x - 3 + 8 = 3x + 5 → x = 5.\nStep 5: y = 3(5) - 3 = 12. Fraction = 5/12.",
        answer: "5/12",
      },
    ],
    commonMistakes: [
      "Sign errors when multiplying or adding equations in the elimination method.",
      "Setting up the wrong equation from the word problem, read carefully.",
      "Forgetting to check the solution in BOTH original equations.",
    ],
    keyTakeaways: [
      "Two equations and two unknowns: solvable if equations are independent.",
      "Substitution works best when one variable is easily isolated.",
      "Elimination works best when coefficients are easy to match.",
      "Always check a1/a2 vs b1/b2 to determine the type of solution.",
      "Verify the solution by substituting back into both equations.",
    ],
  },
  {
    slug: "quadratic-equations",
    categorySlug: "aptitude",
    introduction:
      "A quadratic equation is a polynomial equation of degree 2, in the form ax² + bx + c = 0 (where a ≠ 0). It always has exactly two roots (solutions), which may be real and distinct, real and equal, or complex conjugates.\n\nThe roots can be found using the quadratic formula: x = (-b ± √(b²-4ac)) / 2a. The expression b²-4ac is called the discriminant (D). If D > 0, roots are real and distinct. If D = 0, roots are real and equal. If D < 0, roots are complex. For competitive exams, factorization is usually faster than the quadratic formula.\n\nVieta's formulas relate the roots to the coefficients: sum of roots = -b/a, product of roots = c/a. These relationships allow you to find the sum and product of roots without actually computing the roots, which is very useful in comparison and inequality problems.",
    concepts: [
      "Standard form: ax² + bx + c = 0.",
      "Discriminant D = b² - 4ac determines the nature of roots.",
      "D > 0: two distinct real roots. D = 0: two equal real roots. D < 0: no real roots.",
      "Every quadratic can be factored as a(x - r1)(x - r2) where r1, r2 are roots.",
    ],
    formulas: [
      {
        name: "Quadratic formula",
        formula: "x = [-b ± √(b² - 4ac)] / 2a",
      },
      { name: "Sum of roots", formula: "r1 + r2 = -b/a" },
      { name: "Product of roots", formula: "r1 x r2 = c/a" },
      { name: "Discriminant", formula: "D = b² - 4ac" },
      {
        name: "Equation from roots",
        formula: "x² - (sum)x + (product) = 0",
      },
    ],
    methods: [
      {
        name: "Factorization Method",
        steps: [
          "Find two numbers whose product = ac and sum = b.",
          "Split the middle term using these numbers.",
          "Factor by grouping.",
          "Set each factor to zero for the roots.",
        ],
      },
      {
        name: "Quadratic Formula",
        steps: [
          "Identify a, b, c from the equation.",
          "Calculate D = b² - 4ac.",
          "If D ≥ 0: x = (-b ± √D) / 2a.",
          "If D < 0: no real roots.",
        ],
      },
    ],
    quickTricks: [
      "If roots are p and q, the equation is x² - (p+q)x + pq = 0.",
      "For comparing roots of two equations (common in banking exams), find both roots and compare.",
      "If sum of roots is needed, just compute -b/a without finding individual roots.",
      "If one root is k times the other: k x r² = c/a and (1+k)r = -b/a.",
      "If roots are equal: D = 0, so b² = 4ac.",
    ],
    solvedExamples: [
      {
        problem: "Solve: x² - 7x + 12 = 0.",
        solution:
          "Step 1: Find two numbers with product 12 and sum 7: 3 and 4.\nStep 2: x² - 3x - 4x + 12 = 0.\nStep 3: x(x-3) - 4(x-3) = 0 → (x-3)(x-4) = 0.\nStep 4: x = 3 or x = 4.",
        answer: "x = 3, x = 4",
      },
      {
        problem:
          "Find the nature of roots of 2x² + 3x + 5 = 0.",
        solution:
          "Step 1: a = 2, b = 3, c = 5.\nStep 2: D = b² - 4ac = 9 - 40 = -31.\nStep 3: Since D < 0, the equation has no real roots (complex conjugate roots).",
        answer: "No real roots (D = -31 < 0)",
      },
      {
        problem:
          "If one root of x² - 9x + k = 0 is twice the other, find k.",
        solution:
          "Step 1: Let roots be r and 2r.\nStep 2: Sum of roots: r + 2r = 9 → 3r = 9 → r = 3.\nStep 3: Product of roots: r x 2r = 2r² = k → k = 2(9) = 18.",
        answer: "k = 18",
      },
    ],
    commonMistakes: [
      "Forgetting that a ≠ 0 (otherwise it's a linear equation, not quadratic).",
      "Sign errors in the quadratic formula, the -b term means negating b.",
      "Dividing by x without considering that x = 0 might be a root.",
    ],
    keyTakeaways: [
      "Quadratic formula: x = (-b ± √D) / 2a. Discriminant D = b² - 4ac.",
      "Sum of roots = -b/a, Product = c/a (Vieta's formulas).",
      "Factorization is faster than the formula for integer roots.",
      "D > 0: distinct real roots. D = 0: equal roots. D < 0: no real roots.",
      "Given roots p,q: equation is x² - (p+q)x + pq = 0.",
    ],
  },
  {
    slug: "progressions",
    categorySlug: "aptitude",
    introduction:
      "Progressions are sequences of numbers that follow a specific pattern. The three main types are Arithmetic Progression (AP), Geometric Progression (GP), and Harmonic Progression (HP). Each has its own formulas for the nth term and the sum of n terms.\n\nIn an AP, each term differs from the previous by a constant called the common difference (d). The nth term is a + (n-1)d and the sum of n terms is n/2 x [2a + (n-1)d] or equivalently n/2 x (first + last). In a GP, each term is obtained by multiplying the previous by a constant ratio (r). The nth term is ar^(n-1) and the sum of n terms is a(r^n - 1)/(r - 1) for r ≠ 1.\n\nHP is the reciprocal of an AP, if a, b, c are in HP, then 1/a, 1/b, 1/c are in AP. There is no direct formula for HP sums; convert to AP first. The relationship between Arithmetic Mean (AM), Geometric Mean (GM), and Harmonic Mean (HM) is important: AM ≥ GM ≥ HM for positive numbers, with equality only when all numbers are equal.",
    concepts: [
      "AP: constant difference d. Example: 2, 5, 8, 11, ... (d = 3).",
      "GP: constant ratio r. Example: 3, 6, 12, 24, ... (r = 2).",
      "HP: reciprocals form an AP. Example: 1, 1/2, 1/3, ... (reciprocals are 1, 2, 3, AP).",
      "AM ≥ GM ≥ HM (for positive numbers).",
    ],
    formulas: [
      { name: "AP nth term", formula: "Tn = a + (n-1)d" },
      { name: "AP sum", formula: "Sn = n/2 x [2a + (n-1)d] = n/2 x (first + last)" },
      { name: "GP nth term", formula: "Tn = ar^(n-1)" },
      { name: "GP sum (r ≠ 1)", formula: "Sn = a(r^n - 1)/(r - 1) if r > 1; a(1 - r^n)/(1 - r) if r < 1" },
      { name: "Infinite GP sum (|r| < 1)", formula: "S∞ = a / (1 - r)" },
      { name: "AM of a and b", formula: "AM = (a + b) / 2" },
      { name: "GM of a and b", formula: "GM = √(ab)" },
      { name: "HM of a and b", formula: "HM = 2ab / (a + b)" },
    ],
    methods: [
      {
        name: "AP Problems",
        steps: [
          "Identify a (first term) and d (common difference).",
          "Use Tn = a + (n-1)d for nth term.",
          "Use Sn = n/2 x (first + last) for sum.",
        ],
      },
      {
        name: "GP Problems",
        steps: [
          "Identify a (first term) and r (common ratio = second/first).",
          "Use Tn = ar^(n-1) for nth term.",
          "Use Sn = a(r^n - 1)/(r - 1) for sum.",
        ],
      },
    ],
    quickTricks: [
      "For 3 numbers in AP, let them be (a-d), a, (a+d). Sum = 3a.",
      "For 3 numbers in GP, let them be a/r, a, ar. Product = a³.",
      "Sum of infinite GP with |r| < 1: S = a/(1-r). E.g., 1 + 1/2 + 1/4 + ... = 1/(1-1/2) = 2.",
      "In an AP, the average of the first and last term equals the average of any two terms equidistant from the ends.",
      "AM x HM = GM². This relates all three means.",
    ],
    solvedExamples: [
      {
        problem: "Find the sum of the first 20 terms of the AP: 3, 7, 11, 15, ...",
        solution:
          "Step 1: a = 3, d = 4, n = 20.\nStep 2: Sn = n/2 x [2a + (n-1)d] = 20/2 x [6 + 19 x 4] = 10 x [6 + 76] = 10 x 82 = 820.",
        answer: "820",
      },
      {
        problem: "In a GP, the first term is 5 and the common ratio is 3. Find the 6th term.",
        solution:
          "Step 1: a = 5, r = 3, n = 6.\nStep 2: T6 = ar^(n-1) = 5 x 3^5 = 5 x 243 = 1215.",
        answer: "1215",
      },
      {
        problem: "Find the sum of the infinite GP: 8, 4, 2, 1, 1/2, ...",
        solution:
          "Step 1: a = 8, r = 4/8 = 1/2. Since |r| < 1, sum converges.\nStep 2: S∞ = a/(1-r) = 8/(1 - 1/2) = 8/(1/2) = 16.",
        answer: "16",
      },
    ],
    commonMistakes: [
      "Using the AP sum formula for a GP or vice versa.",
      "Forgetting that infinite GP sum formula only works when |r| < 1.",
      "In the nth term formula, using n instead of (n-1) in the exponent/multiplier.",
    ],
    keyTakeaways: [
      "AP: Tn = a + (n-1)d, Sn = n/2(first + last).",
      "GP: Tn = ar^(n-1), Sn = a(r^n-1)/(r-1).",
      "Infinite GP sum = a/(1-r) only when |r| < 1.",
      "AM ≥ GM ≥ HM for positive numbers. AM x HM = GM².",
      "For 3 terms: AP uses (a-d, a, a+d); GP uses (a/r, a, ar).",
    ],
  },
  {
    slug: "inequalities",
    categorySlug: "aptitude",
    introduction:
      "Inequalities express the relative order of two values using symbols: < (less than), > (greater than), ≤ (less than or equal), ≥ (greater than or equal). Solving inequalities is similar to solving equations, but with one critical difference: multiplying or dividing both sides by a negative number reverses the inequality sign.\n\nLinear inequalities (ax + b > 0) are solved just like linear equations with the sign-reversal rule. Quadratic inequalities (ax² + bx + c > 0) require finding the roots and testing intervals. The solution is the set of x-values that make the inequality true.\n\nCompetitive exams test both algebraic inequalities and coded inequalities (where symbols represent relationships). For coded inequality problems, you must deduce the relationship between elements from a chain of given relationships. Understanding transitive properties (if A > B and B > C, then A > C) is essential for these problems.",
    concepts: [
      "Multiplying/dividing by a negative number reverses the inequality.",
      "Transitive property: if a > b and b > c, then a > c.",
      "Adding the same number to both sides preserves the inequality.",
      "Squaring both sides is valid only when both sides are non-negative.",
    ],
    formulas: [
      {
        name: "Linear inequality solution",
        formula: "ax + b > c → x > (c-b)/a (if a > 0); x < (c-b)/a (if a < 0)",
      },
      {
        name: "Quadratic inequality",
        formula: "For ax² + bx + c > 0 with roots r1 < r2: if a > 0, solution is x < r1 or x > r2",
      },
      {
        name: "AM-GM Inequality",
        formula: "(a + b)/2 ≥ √(ab) for positive a, b. Equality when a = b.",
      },
      {
        name: "Triangle inequality",
        formula: "|a + b| ≤ |a| + |b| and |a - b| ≥ ||a| - |b||",
      },
    ],
    methods: [
      {
        name: "Solving Linear Inequalities",
        steps: [
          "Treat it like an equation, isolate the variable.",
          "If you multiply/divide by a negative, flip the sign.",
          "Express the solution as an interval.",
        ],
      },
      {
        name: "Solving Quadratic Inequalities",
        steps: [
          "Find the roots of ax² + bx + c = 0.",
          "Mark roots on a number line.",
          "Test a value in each interval to determine the sign.",
          "Select intervals that satisfy the inequality.",
        ],
      },
      {
        name: "Coded Inequality Problems",
        steps: [
          "Decode the symbols into standard inequality signs.",
          "Write out the chain: A > B = C < D, etc.",
          "Check each conclusion using the transitive property.",
          "If the chain has opposite directions (> and <), no definite relationship exists.",
        ],
      },
    ],
    quickTricks: [
      "For quadratic ax² + bx + c ≤ 0 (a > 0): solution is between the roots [r1, r2].",
      "For quadratic ax² + bx + c ≥ 0 (a > 0): solution is outside the roots (-∞, r1] ∪ [r2, ∞).",
      "In coded inequalities, if the chain has a break (e.g., A > B and C > B), you cannot compare A and C.",
      "AM-GM: for positive numbers, arithmetic mean is always ≥ geometric mean.",
    ],
    solvedExamples: [
      {
        problem: "Solve: 3x - 7 > 2x + 5.",
        solution:
          "Step 1: 3x - 2x > 5 + 7.\nStep 2: x > 12.\nStep 3: Solution: x ∈ (12, ∞).",
        answer: "x > 12",
      },
      {
        problem: "Solve: x² - 5x + 6 < 0.",
        solution:
          "Step 1: Factor: (x-2)(x-3) < 0.\nStep 2: Roots are x = 2 and x = 3.\nStep 3: The product is negative when x is between the roots.\nStep 4: Solution: 2 < x < 3.",
        answer: "2 < x < 3",
      },
      {
        problem:
          "If A > B, B ≥ C, C = D, D > E, which of the following is true? (a) A > D (b) B > E (c) A > E",
        solution:
          "Step 1: Chain: A > B ≥ C = D > E.\nStep 2: A > B ≥ C = D → A > D. True.\nStep 3: B ≥ C = D > E → B > E. True.\nStep 4: A > B ≥ C = D > E → A > E. True.\nAll three are true.",
        answer: "All three (a), (b), (c) are true",
      },
    ],
    commonMistakes: [
      "Forgetting to flip the inequality sign when multiplying/dividing by a negative number.",
      "In quadratic inequalities, choosing the wrong intervals (outside instead of between roots or vice versa).",
      "In coded inequalities, claiming a relationship when the chain has a direction break.",
    ],
    keyTakeaways: [
      "Multiplying/dividing by negative → flip the sign. This is the most important rule.",
      "Quadratic inequality: find roots, test intervals, choose the right ones.",
      "Coded inequalities: follow the chain direction; a break means 'no conclusion.'",
      "AM-GM inequality is useful for finding minimum/maximum values.",
      "Always express solutions as intervals or on a number line.",
    ],
  },
  {
    slug: "set-theory",
    categorySlug: "aptitude",
    introduction:
      "Set Theory is the mathematical study of collections of objects called sets. A set is a well-defined collection of distinct elements. Sets are denoted by capital letters and elements are listed within curly braces: A = {1, 2, 3}. The key operations on sets are union (A ∪ B), intersection (A ∩ B), difference (A - B), and complement (A').\n\nThe union of two sets contains all elements that are in either set. The intersection contains only elements that are in both sets. The difference A - B contains elements in A but not in B. The complement of A contains all elements in the universal set that are not in A.\n\nVenn diagrams are the primary visual tool for set theory problems. For two sets, the key formula is: n(A ∪ B) = n(A) + n(B) - n(A ∩ B). For three sets: n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A∩B) - n(B∩C) - n(A∩C) + n(A∩B∩C). These formulas are essential for solving problems about surveys, group memberships, and categorization.",
    concepts: [
      "Set: a well-defined collection of distinct elements.",
      "Empty set (∅): a set with no elements.",
      "Universal set (U): the set containing all elements under consideration.",
      "Subset: A ⊆ B means every element of A is in B.",
      "Power set: the set of all subsets. |P(A)| = 2^n where n = |A|.",
    ],
    formulas: [
      {
        name: "Union of two sets",
        formula: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
      },
      {
        name: "Union of three sets",
        formula: "n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A∩B) - n(B∩C) - n(A∩C) + n(A∩B∩C)",
      },
      {
        name: "Only A (not B)",
        formula: "n(A only) = n(A) - n(A ∩ B)",
      },
      {
        name: "Neither A nor B",
        formula: "n(A' ∩ B') = n(U) - n(A ∪ B)",
      },
      {
        name: "De Morgan's Laws",
        formula: "(A ∪ B)' = A' ∩ B' and (A ∩ B)' = A' ∪ B'",
      },
    ],
    methods: [
      {
        name: "Venn Diagram Approach (Two Sets)",
        steps: [
          "Draw two overlapping circles within a rectangle (universal set).",
          "Fill in the intersection first: n(A ∩ B).",
          "Fill in 'only A' = n(A) - n(A ∩ B) and 'only B' = n(B) - n(A ∩ B).",
          "Fill in 'neither' = n(U) - n(A ∪ B).",
        ],
      },
      {
        name: "Formula Approach (Three Sets)",
        steps: [
          "Use the inclusion-exclusion formula.",
          "Carefully identify what each given value represents (at least, exactly, only).",
          "Solve for the unknown.",
        ],
      },
    ],
    quickTricks: [
      "For 'at least one' = n(A ∪ B). For 'neither' = Total - n(A ∪ B).",
      "For 'exactly one of A or B' = n(A) + n(B) - 2n(A ∩ B).",
      "Number of subsets of a set with n elements = 2^n.",
      "Start filling Venn diagrams from the innermost region (intersection of all).",
      "De Morgan's Laws are useful for complement problems.",
    ],
    solvedExamples: [
      {
        problem:
          "In a class of 60 students, 35 play cricket, 25 play football, and 10 play both. How many play neither?",
        solution:
          "Step 1: n(C ∪ F) = n(C) + n(F) - n(C ∩ F) = 35 + 25 - 10 = 50.\nStep 2: Neither = 60 - 50 = 10.",
        answer: "10 students",
      },
      {
        problem:
          "In a survey, 70% like tea, 60% like coffee, and 40% like both. What percentage likes at least one?",
        solution:
          "Step 1: n(T ∪ C) = n(T) + n(C) - n(T ∩ C) = 70 + 60 - 40 = 90%.\nStep 2: 90% like at least one of tea or coffee.",
        answer: "90%",
      },
      {
        problem:
          "In a group of 100 people, 60 speak Hindi, 45 speak English, 30 speak Tamil. 20 speak Hindi and English, 15 speak English and Tamil, 10 speak Hindi and Tamil, and 5 speak all three. How many speak none?",
        solution:
          "Step 1: n(H ∪ E ∪ T) = 60 + 45 + 30 - 20 - 15 - 10 + 5 = 95.\nStep 2: None = 100 - 95 = 5.",
        answer: "5 people",
      },
    ],
    commonMistakes: [
      "Forgetting to subtract the intersection when finding the union, double counting.",
      "Confusing 'n(A ∩ B)' (both) with 'n(A only)', A only = n(A) - n(A ∩ B).",
      "In three-set problems, forgetting to add back n(A ∩ B ∩ C) in the inclusion-exclusion formula.",
    ],
    keyTakeaways: [
      "n(A ∪ B) = n(A) + n(B) - n(A ∩ B), the most important formula.",
      "For three sets, inclusion-exclusion adds and subtracts alternately.",
      "Venn diagrams: always fill from the innermost region outward.",
      "De Morgan's Laws connect unions and intersections through complements.",
      "'At least one' = Union. 'Neither' = Total - Union.",
    ],
  },
  {
    slug: "data-sufficiency",
    categorySlug: "aptitude",
    introduction:
      "Data Sufficiency is a unique type of problem where you are not asked to solve a question but to determine whether the given data is sufficient to answer it. Typically, a question is posed followed by two statements. You must decide if Statement 1 alone is sufficient, Statement 2 alone is sufficient, both together are sufficient, or neither is sufficient.\n\nThe standard answer choices are: (A) Statement 1 alone is sufficient. (B) Statement 2 alone is sufficient. (C) Both together are sufficient. (D) Each alone is sufficient. (E) Neither is sufficient, even together. This format tests logical and analytical thinking rather than computation.\n\nThe key skill is recognizing what information is needed to answer the question and whether each statement provides that information. You should not actually solve the problem, just determine if it CAN be solved. This saves time and is the intended approach. Look for whether statements provide unique values or leave ambiguity.",
    concepts: [
      "You must determine sufficiency, not compute the answer.",
      "A statement is sufficient if it leads to a unique answer.",
      "If a statement gives two possible answers, it is NOT sufficient.",
      "Even if you can narrow down the answer, 'sufficient' requires a single definite answer.",
    ],
    formulas: [
      {
        name: "Answer framework",
        formula: "(A) Stmt 1 alone sufficient. (B) Stmt 2 alone. (C) Both needed. (D) Each alone sufficient. (E) Neither sufficient.",
      },
    ],
    methods: [
      {
        name: "Systematic Approach",
        steps: [
          "Understand what the question is asking, what do you need to find?",
          "Analyze Statement 1 alone: Can it uniquely answer the question? (Ignore Statement 2).",
          "Analyze Statement 2 alone: Can it uniquely answer the question? (Ignore Statement 1).",
          "If neither alone works, combine both: Can they together uniquely answer it?",
          "Select the appropriate answer choice.",
        ],
      },
      {
        name: "Testing with Examples",
        steps: [
          "Try to find two different scenarios that satisfy the statement but give different answers.",
          "If you can find two such scenarios, the statement is NOT sufficient.",
          "If every valid scenario gives the same answer, the statement IS sufficient.",
        ],
      },
    ],
    quickTricks: [
      "If the question asks for a specific value (like 'what is x?'), the statement must give exactly one value.",
      "If the question asks yes/no, the statement is sufficient if it always gives the same answer (always yes or always no).",
      "Two linear equations with two unknowns generally give a unique solution, both together are usually sufficient.",
      "One equation with two unknowns is usually NOT sufficient (infinite solutions).",
      "Inequalities often leave multiple possibilities, check carefully.",
    ],
    solvedExamples: [
      {
        problem:
          "Question: What is the value of x? Statement 1: x² = 25. Statement 2: x > 0.",
        solution:
          "Step 1: Statement 1 alone: x² = 25 → x = 5 or x = -5. Two values, NOT sufficient.\nStep 2: Statement 2 alone: x > 0. Just tells x is positive, infinite values. NOT sufficient.\nStep 3: Both together: x² = 25 AND x > 0 → x = 5. Unique answer.\nStep 4: Answer: (C) Both statements together are sufficient.",
        answer: "C (Both together are sufficient)",
      },
      {
        problem:
          "Question: Is n divisible by 6? Statement 1: n is divisible by 3. Statement 2: n is divisible by 2.",
        solution:
          "Step 1: Statement 1 alone: n divisible by 3. Could be 3 (not div by 6) or 6 (div by 6). NOT sufficient.\nStep 2: Statement 2 alone: n divisible by 2. Could be 2 (not div by 6) or 6 (div by 6). NOT sufficient.\nStep 3: Both together: n divisible by 3 AND by 2 → n divisible by 6. Definite YES.\nStep 4: Answer: (C).",
        answer: "C (Both together are sufficient)",
      },
      {
        problem:
          "Question: What is the perimeter of rectangle R? Statement 1: The area of R is 48. Statement 2: The length of R is twice its width.",
        solution:
          "Step 1: Statement 1: Area = 48 = l x w. Many possible (l,w) pairs. NOT sufficient alone.\nStep 2: Statement 2: l = 2w. Without area or another equation, infinite possibilities. NOT sufficient alone.\nStep 3: Both: 48 = 2w x w → w² = 24 → w = 2√6. l = 4√6. Perimeter = 2(l+w) = 2(6√6) = 12√6. Unique answer.\nStep 4: Answer: (C).",
        answer: "C (Both together are sufficient)",
      },
    ],
    commonMistakes: [
      "Actually solving the problem instead of just determining sufficiency, this wastes time.",
      "Forgetting to consider both positive and negative solutions (e.g., x² = 9 gives x = 3 or -3).",
      "Not considering all possible cases, one counterexample is enough to show insufficiency.",
    ],
    keyTakeaways: [
      "Do NOT solve, just determine if the data is sufficient for a unique answer.",
      "Analyze each statement independently first, then combine if needed.",
      "Sufficient means a single definite answer, not two possible answers.",
      "For yes/no questions, consistent yes or consistent no is sufficient.",
      "Use counterexamples to disprove sufficiency quickly.",
    ],
  },
];
