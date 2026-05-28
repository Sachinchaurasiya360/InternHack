import type { TopicTheory } from "./types";

export const aptitudeTheoryArithmetic: TopicTheory[] = [
  {
    slug: "numbers",
    categorySlug: "aptitude",
    introduction:
      "The Numbers topic covers the fundamental properties and classifications of numbers that form the foundation of all mathematical reasoning. This includes natural numbers, whole numbers, integers, rational numbers, irrational numbers, prime numbers, composite numbers, and their various properties.\n\nUnderstanding divisibility rules is essential for quick calculations. For instance, a number is divisible by 3 if the sum of its digits is divisible by 3; divisible by 4 if the last two digits form a number divisible by 4; divisible by 8 if the last three digits form a number divisible by 8.\n\nThis topic also covers important concepts like the number of factors, the sum of factors, unit digits, and remainders. These concepts appear frequently in competitive exams and form the basis for more advanced topics like HCF, LCM, and number theory problems.",
    concepts: [
      "Natural numbers: 1, 2, 3, ... (positive integers).",
      "Whole numbers: 0, 1, 2, 3, ...",
      "Prime numbers: Numbers with exactly 2 factors (1 and itself). 2 is the only even prime.",
      "Composite numbers: Numbers with more than 2 factors.",
      "Co-prime: Two numbers whose HCF is 1.",
      "Even numbers are divisible by 2; odd numbers are not.",
    ],
    formulas: [
      {
        name: "Sum of first n natural numbers",
        formula: "n(n+1)/2",
      },
      {
        name: "Sum of squares of first n natural numbers",
        formula: "n(n+1)(2n+1)/6",
      },
      {
        name: "Sum of cubes of first n natural numbers",
        formula: "[n(n+1)/2]²",
      },
      {
        name: "Number of factors",
        formula: "If N = p^a x q^b x r^c, then factors = (a+1)(b+1)(c+1)",
        description: "p, q, r are prime factors with powers a, b, c",
      },
      {
        name: "Sum of factors",
        formula: "[(p^(a+1)-1)/(p-1)] x [(q^(b+1)-1)/(q-1)] x ...",
      },
    ],
    methods: [
      {
        name: "Divisibility Rules",
        steps: [
          "By 2: Last digit is even.",
          "By 3: Sum of digits is divisible by 3.",
          "By 4: Last two digits form a number divisible by 4.",
          "By 5: Last digit is 0 or 5.",
          "By 6: Divisible by both 2 and 3.",
          "By 8: Last three digits form a number divisible by 8.",
          "By 9: Sum of digits is divisible by 9.",
          "By 11: Difference of sums of alternate digits is 0 or divisible by 11.",
        ],
      },
      {
        name: "Finding Unit Digit",
        steps: [
          "Unit digit of a product depends only on unit digits of the factors.",
          "Find the cyclicity of the unit digit of the base.",
          "Most digits have cyclicity of 4: e.g., 2^1=2, 2^2=4, 2^3=8, 2^4=6, 2^5=2 (repeats).",
          "Divide the power by cyclicity, use remainder to find unit digit.",
        ],
      },
    ],
    quickTricks: [
      "Unit digit cyclicity: 2→{2,4,8,6}, 3→{3,9,7,1}, 7→{7,9,3,1}, 8→{8,4,2,6}. Cyclicity = 4.",
      "Any number ending in 0, 1, 5, or 6 always has the same unit digit when raised to any power.",
      "Product of n consecutive integers is always divisible by n!.",
      "To check if a large number is prime, test divisibility by all primes up to √n.",
      "a² - b² = (a+b)(a-b) is useful for quick mental calculations.",
    ],
    solvedExamples: [
      {
        problem: "Find the unit digit of 7^253.",
        solution:
          "Step 1: Cyclicity of 7 is 4: 7^1=7, 7^2=9, 7^3=3, 7^4=1, then repeats.\nStep 2: 253 divided by 4 gives remainder 1.\nStep 3: So unit digit of 7^253 = unit digit of 7^1 = 7.",
        answer: "7",
      },
      {
        problem: "How many factors does 360 have?",
        solution:
          "Step 1: Prime factorization: 360 = 2³ x 3² x 5¹.\nStep 2: Number of factors = (3+1)(2+1)(1+1) = 4 x 3 x 2 = 24.",
        answer: "24",
      },
      {
        problem: "Find the remainder when 47^32 is divided by 5.",
        solution:
          "Step 1: 47 mod 5 = 2. So we need remainder of 2^32 / 5.\nStep 2: Cyclicity of powers of 2 mod 5: 2,4,3,1 (cycle of 4).\nStep 3: 32 / 4 = 8 remainder 0. When remainder is 0, use the last in cycle = 1.\nStep 4: Remainder = 1. Alternatively, 2^4 = 16 ≡ 1 (mod 5), so 2^32 = (2^4)^8 ≡ 1^8 = 1.",
        answer: "1",
      },
    ],
    commonMistakes: [
      "Assuming 1 is a prime number, 1 is neither prime nor composite.",
      "Forgetting that 2 is the only even prime number.",
      "In unit digit problems, not recognizing the cyclicity pattern and doing full exponentiation.",
    ],
    keyTakeaways: [
      "Memorize divisibility rules for 2 through 11, they save enormous time.",
      "Unit digit cyclicity for most digits is 4. Memorize the cycles.",
      "Number of factors of N = product of (power + 1) for each prime factor.",
      "Sum of first n natural numbers = n(n+1)/2.",
      "1 is not prime. 2 is the smallest and only even prime.",
    ],
  },
  {
    slug: "problems-on-numbers",
    categorySlug: "aptitude",
    introduction:
      "Problems on Numbers involve forming equations from verbal descriptions about numbers and solving them. These are essentially word problems that translate English statements into algebraic expressions. The numbers involved can be single-digit, multi-digit, or involve special properties like consecutive numbers.\n\nA common type involves a two-digit number where the digits are swapped: if the tens digit is x and units digit is y, the number is 10x + y, and the reversed number is 10y + x. The difference between a number and its reverse is always 9 times the difference of the digits.\n\nOther common types include problems on consecutive numbers, problems involving the sum, difference, or product of numbers, and digit-based puzzles. The key skill is translating the English description into one or more equations and solving them systematically.",
    concepts: [
      "A two-digit number with tens digit a and units digit b = 10a + b.",
      "A three-digit number with digits a, b, c = 100a + 10b + c.",
      "Consecutive numbers: n, n+1, n+2, ...",
      "Consecutive even/odd numbers differ by 2: n, n+2, n+4, ...",
    ],
    formulas: [
      {
        name: "Two-digit number",
        formula: "Number = 10 x (tens digit) + (units digit)",
      },
      {
        name: "Reversed two-digit number",
        formula: "Reversed = 10 x (units digit) + (tens digit)",
      },
      {
        name: "Difference between number and reverse",
        formula: "9 x |tens digit - units digit|",
      },
      {
        name: "Sum of n consecutive numbers starting from a",
        formula: "n x a + n(n-1)/2",
      },
    ],
    methods: [
      {
        name: "Digit-Based Problems",
        steps: [
          "Let the digits be variables (e.g., tens = x, units = y).",
          "Express the number as 10x + y.",
          "Translate conditions into equations.",
          "Solve the system of equations.",
        ],
      },
      {
        name: "Consecutive Number Problems",
        steps: [
          "Let the first number be n.",
          "Express others in terms of n (n+1, n+2, etc.).",
          "Form the equation from the given condition.",
          "Solve and list all numbers.",
        ],
      },
    ],
    quickTricks: [
      "For 3 consecutive numbers with a given sum, let them be (a-1), a, (a+1). The sum = 3a.",
      "For 3 consecutive odd/even numbers with a given sum, let them be (a-2), a, (a+2). Sum = 3a.",
      "The difference between a two-digit number and its reverse is always divisible by 9.",
      "If sum of digits = S and difference = D, then the two digits are (S+D)/2 and (S-D)/2.",
    ],
    solvedExamples: [
      {
        problem:
          "A two-digit number is 7 times the sum of its digits. If 27 is subtracted from the number, the digits are reversed. Find the number.",
        solution:
          "Step 1: Let tens digit = x, units = y. Number = 10x + y.\nStep 2: 10x + y = 7(x + y) → 10x + y = 7x + 7y → 3x = 6y → x = 2y.\nStep 3: 10x + y - 27 = 10y + x → 9x - 9y = 27 → x - y = 3.\nStep 4: From x = 2y: 2y - y = 3, so y = 3, x = 6. Number = 63.",
        answer: "63",
      },
      {
        problem:
          "The sum of three consecutive even numbers is 78. Find the numbers.",
        solution:
          "Step 1: Let the numbers be n, n+2, n+4.\nStep 2: n + n + 2 + n + 4 = 78 → 3n + 6 = 78 → 3n = 72 → n = 24.\nStep 3: Numbers are 24, 26, 28.",
        answer: "24, 26, 28",
      },
      {
        problem:
          "The product of two numbers is 120 and their sum is 23. Find the numbers.",
        solution:
          "Step 1: Let the numbers be x and (23 - x).\nStep 2: x(23 - x) = 120 → 23x - x² = 120 → x² - 23x + 120 = 0.\nStep 3: Factoring: (x - 8)(x - 15) = 0, so x = 8 or x = 15.\nStep 4: The numbers are 8 and 15.",
        answer: "8 and 15",
      },
    ],
    commonMistakes: [
      "Confusing a two-digit number with the sum of its digits, 10x + y is not x + y.",
      "Using consecutive numbers (n, n+1) when the problem says consecutive even/odd (n, n+2).",
      "Forgetting that digits must be between 0 and 9 (and tens digit cannot be 0).",
    ],
    keyTakeaways: [
      "Always express the number in terms of its digits: 10a + b for two-digit numbers.",
      "Translate English statements into equations carefully.",
      "For consecutive number problems, center the variable for simpler equations.",
      "Digit-based conditions often give two equations, solve simultaneously.",
      "Verify the answer satisfies all given conditions.",
    ],
  },
  {
    slug: "problems-on-hcf-and-lcm",
    categorySlug: "aptitude",
    introduction:
      "HCF (Highest Common Factor, also called GCD) and LCM (Least Common Multiple) are fundamental concepts in number theory. HCF of two or more numbers is the largest number that divides all of them exactly. LCM is the smallest number that is exactly divisible by all of them.\n\nThe relationship HCF x LCM = Product of two numbers (valid for exactly two numbers) is one of the most important formulas. HCF is found using prime factorization (take common primes with lowest powers) or the division method. LCM is found using prime factorization (take all primes with highest powers).\n\nCommon exam problems include finding HCF/LCM, using the product relationship, finding the greatest number that divides given numbers leaving specific remainders, and finding the least number divisible by given numbers with specific remainders.",
    concepts: [
      "HCF = Highest Common Factor = Greatest number that divides all given numbers.",
      "LCM = Least Common Multiple = Smallest number divisible by all given numbers.",
      "HCF of co-prime numbers is 1.",
      "LCM of co-prime numbers is their product.",
      "HCF always divides the LCM.",
    ],
    formulas: [
      {
        name: "Product relationship",
        formula: "HCF x LCM = a x b (for two numbers a and b)",
      },
      {
        name: "HCF by prime factorization",
        formula: "Product of common prime factors with lowest powers",
      },
      {
        name: "LCM by prime factorization",
        formula: "Product of all prime factors with highest powers",
      },
      {
        name: "Greatest number dividing a, b, c leaving remainders x, y, z",
        formula: "HCF of (a-x), (b-y), (c-z)",
      },
      {
        name: "Least number divisible by a, b, c leaving remainder r",
        formula: "LCM(a, b, c) + r",
      },
    ],
    methods: [
      {
        name: "Prime Factorization Method",
        steps: [
          "Find the prime factorization of each number.",
          "HCF: take common primes with the minimum power.",
          "LCM: take all primes with the maximum power.",
        ],
      },
      {
        name: "Division Method for HCF",
        steps: [
          "Divide the larger number by the smaller.",
          "Divide the previous divisor by the remainder.",
          "Continue until remainder is 0.",
          "The last non-zero remainder is the HCF.",
        ],
      },
    ],
    quickTricks: [
      "HCF of fractions = HCF of numerators / LCM of denominators.",
      "LCM of fractions = LCM of numerators / HCF of denominators.",
      "If HCF(a,b) = h, then a = hx and b = hy where HCF(x,y) = 1.",
      "The greatest number dividing a and b leaving same remainder r = HCF(a-r, b-r). If remainder is not given: HCF(|a-b|).",
      "For the least number leaving remainder r when divided by a, b, c: find LCM(a,b,c) + r.",
    ],
    solvedExamples: [
      {
        problem: "Find the HCF and LCM of 12, 18, and 24.",
        solution:
          "Step 1: 12 = 2² x 3, 18 = 2 x 3², 24 = 2³ x 3.\nStep 2: HCF = 2^min(2,1,3) x 3^min(1,2,1) = 2¹ x 3¹ = 6.\nStep 3: LCM = 2^max(2,1,3) x 3^max(1,2,1) = 2³ x 3² = 8 x 9 = 72.",
        answer: "HCF = 6, LCM = 72",
      },
      {
        problem:
          "The HCF and LCM of two numbers are 6 and 180 respectively. If one number is 36, find the other.",
        solution:
          "Step 1: HCF x LCM = Product of the two numbers.\nStep 2: 6 x 180 = 36 x other number.\nStep 3: 1080 = 36 x other. Other = 1080/36 = 30.",
        answer: "30",
      },
      {
        problem:
          "Find the greatest number that divides 65 and 117, leaving remainders 5 and 7 respectively.",
        solution:
          "Step 1: The number must divide (65-5) = 60 and (117-7) = 110.\nStep 2: Required number = HCF(60, 110).\nStep 3: 60 = 2² x 3 x 5, 110 = 2 x 5 x 11. HCF = 2 x 5 = 10.",
        answer: "10",
      },
    ],
    commonMistakes: [
      "Applying HCF x LCM = product for more than two numbers, this only works for exactly two numbers.",
      "Confusing when to find HCF vs LCM, 'greatest number that divides' = HCF, 'least number divisible by' = LCM.",
      "In remainder problems, forgetting to subtract the remainder from each number before finding HCF.",
    ],
    keyTakeaways: [
      "HCF: common primes, minimum powers. LCM: all primes, maximum powers.",
      "HCF x LCM = a x b (only for two numbers).",
      "'Greatest number that divides' = HCF problem. 'Smallest number divisible by' = LCM problem.",
      "Division method for HCF: keep dividing divisor by remainder until remainder = 0.",
      "HCF always divides LCM. If it doesn't in your calculation, recheck.",
    ],
  },
  {
    slug: "average",
    categorySlug: "aptitude",
    introduction:
      "Average (or Arithmetic Mean) is one of the simplest yet most frequently tested concepts in aptitude exams. The average of a set of numbers is their sum divided by the count. It represents the central tendency of the data.\n\nThe key relationship is: Sum = Average x Count. This three-way relationship allows you to find any one quantity if the other two are known. Many problems involve finding a new average when elements are added or removed, or finding a missing number given the average.\n\nWeighted average is an extension where different values have different weights (frequencies). The formula is: Weighted Average = Sum of (value x weight) / Sum of weights. This concept is used in problems involving class averages, mixtures, and combined groups.",
    concepts: [
      "Average = Sum of observations / Number of observations.",
      "Sum = Average x Number of observations.",
      "Weighted Average = Sum(value x weight) / Sum(weights).",
      "If each element increases by k, the average also increases by k.",
      "If each element is multiplied by k, the average is also multiplied by k.",
    ],
    formulas: [
      { name: "Average", formula: "Average = Sum / n" },
      { name: "Sum from Average", formula: "Sum = Average x n" },
      {
        name: "Weighted Average",
        formula: "WA = (n1.a1 + n2.a2) / (n1 + n2)",
        description: "For two groups with averages a1, a2 and sizes n1, n2",
      },
      {
        name: "Average of first n natural numbers",
        formula: "(n + 1) / 2",
      },
      {
        name: "Average of first n even numbers",
        formula: "n + 1",
      },
      {
        name: "Average of first n odd numbers",
        formula: "n",
      },
      {
        name: "Average of consecutive numbers from a to b",
        formula: "(a + b) / 2",
      },
    ],
    methods: [
      {
        name: "Finding Average",
        steps: [
          "Add all the numbers.",
          "Divide by the count of numbers.",
        ],
      },
      {
        name: "Finding Missing Number",
        steps: [
          "Calculate total sum from given average and count: Sum = Avg x n.",
          "Subtract the sum of known numbers.",
          "The difference is the missing number.",
        ],
      },
      {
        name: "New Average After Addition/Removal",
        steps: [
          "Find original sum = old average x old count.",
          "Add or subtract the element's value.",
          "Divide by new count to get new average.",
        ],
      },
    ],
    quickTricks: [
      "Average of an arithmetic progression = (first term + last term) / 2.",
      "If a new member joins a group and the average increases by d, new member's value = old average + d x (new count).",
      "Average of first n natural numbers = (n+1)/2. Example: avg of 1-100 = 50.5.",
      "If one number is replaced and average changes, difference = change in average x count.",
    ],
    solvedExamples: [
      {
        problem:
          "The average of 5 numbers is 42. If one number is excluded, the average becomes 38. Find the excluded number.",
        solution:
          "Step 1: Sum of 5 numbers = 42 x 5 = 210.\nStep 2: Sum of 4 remaining numbers = 38 x 4 = 152.\nStep 3: Excluded number = 210 - 152 = 58.",
        answer: "58",
      },
      {
        problem:
          "The average weight of a class of 30 students is 40 kg. A new student joins and the average becomes 40.5 kg. Find the weight of the new student.",
        solution:
          "Step 1: Original sum = 30 x 40 = 1200 kg.\nStep 2: New sum = 31 x 40.5 = 1255.5 kg.\nStep 3: New student's weight = 1255.5 - 1200 = 55.5 kg.",
        answer: "55.5 kg",
      },
      {
        problem:
          "Find the average of the first 20 multiples of 7.",
        solution:
          "Step 1: First 20 multiples of 7: 7, 14, 21, ..., 140.\nStep 2: This is an AP with a = 7, l = 140.\nStep 3: Average = (a + l) / 2 = (7 + 140) / 2 = 147/2 = 73.5.",
        answer: "73.5",
      },
    ],
    commonMistakes: [
      "Using the wrong count after adding or removing elements.",
      "Confusing the average with the median, they are not always the same.",
      "Forgetting that average of first n natural numbers is (n+1)/2, not n/2.",
    ],
    keyTakeaways: [
      "Sum = Average x Count is the most useful rearrangement.",
      "When elements are added/removed, recalculate the sum and divide by the new count.",
      "Average of an AP (or any equally spaced series) = (first + last) / 2.",
      "Weighted averages are needed when groups of different sizes are combined.",
      "If every element changes by a constant, the average changes by the same constant.",
    ],
  },
  {
    slug: "square-root-and-cube-root",
    categorySlug: "aptitude",
    introduction:
      "Square root and cube root are the inverse operations of squaring and cubing respectively. The square root of a number n is the value that, when multiplied by itself, gives n. The cube root of n is the value that, when cubed, gives n.\n\nFinding square roots and cube roots quickly is an important skill for competitive exams. For perfect squares and cubes, memorization is key: know squares up to at least 30 (900) and cubes up to at least 15 (3375). For non-perfect squares, estimation and the long division method are used.\n\nProperties of square roots include: √(ab) = √a x √b, √(a/b) = √a/√b, and (√a)² = a. For cube roots: ³√(ab) = ³√a x ³√b. These properties help simplify expressions. The last digit of a perfect square can only be 0, 1, 4, 5, 6, or 9, never 2, 3, 7, or 8. This helps quickly eliminate non-perfect squares.",
    concepts: [
      "√n x √n = n. If √n = x, then x² = n.",
      "³√n x ³√n x ³√n = n.",
      "A perfect square ends in 0, 1, 4, 5, 6, or 9.",
      "A perfect square has an even number of each prime factor.",
      "Cube root of a negative number is negative.",
    ],
    formulas: [
      { name: "Square root product", formula: "√(a x b) = √a x √b" },
      { name: "Square root quotient", formula: "√(a/b) = √a / √b" },
      { name: "Cube root product", formula: "³√(a x b) = ³√a x ³√b" },
      {
        name: "Approximation",
        formula: "√(a² + b) ≈ a + b/(2a) for small b relative to a²",
      },
    ],
    methods: [
      {
        name: "Prime Factorization Method",
        steps: [
          "Find the prime factorization of the number.",
          "For square root: pair the prime factors. Each pair gives one factor outside the root.",
          "For cube root: group in triplets. Each triplet gives one factor outside.",
        ],
      },
      {
        name: "Estimation Method",
        steps: [
          "Find the nearest perfect square/cube below and above the number.",
          "Interpolate between them for an approximation.",
          "Example: √50 is between √49=7 and √64=8, closer to 7. √50 ≈ 7.07.",
        ],
      },
    ],
    quickTricks: [
      "Last digit of √: if number ends in 1→1or9, 4→2or8, 5→5, 6→4or6, 9→3or7, 0→0.",
      "Memorize: √2≈1.414, √3≈1.732, √5≈2.236, √7≈2.646.",
      "To find √ of large numbers: group digits in pairs from right and process.",
      "Cube roots: memorize cubes of 1-15. Unit digit of cube root depends on unit digit of number.",
      "A number is a perfect cube if each prime factor appears a multiple of 3 times.",
    ],
    solvedExamples: [
      {
        problem: "Find the square root of 1764.",
        solution:
          "Step 1: Prime factorize: 1764 = 2² x 3² x 7².\nStep 2: √1764 = 2 x 3 x 7 = 42.",
        answer: "42",
      },
      {
        problem: "Find the cube root of 2744.",
        solution:
          "Step 1: Prime factorize: 2744 = 2³ x 7³.\nStep 2: ³√2744 = 2 x 7 = 14.",
        answer: "14",
      },
      {
        problem: "Simplify: √(50) + √(18) - √(8).",
        solution:
          "Step 1: √50 = √(25x2) = 5√2.\nStep 2: √18 = √(9x2) = 3√2.\nStep 3: √8 = √(4x2) = 2√2.\nStep 4: 5√2 + 3√2 - 2√2 = 6√2.",
        answer: "6√2",
      },
    ],
    commonMistakes: [
      "Assuming √(a+b) = √a + √b, this is WRONG. √(a+b) ≠ √a + √b.",
      "Forgetting that a number ending in 2, 3, 7, or 8 cannot be a perfect square.",
      "Not simplifying surds fully, e.g., leaving √12 instead of 2√3.",
    ],
    keyTakeaways: [
      "Memorize squares (1-30) and cubes (1-15) for quick recognition.",
      "Use prime factorization for exact square/cube roots.",
      "√(ab) = √a x √b, but √(a+b) ≠ √a + √b.",
      "Perfect squares end in 0, 1, 4, 5, 6, or 9 only.",
      "For estimation, use the nearest known root and interpolate.",
    ],
  },
  {
    slug: "decimal-fraction",
    categorySlug: "aptitude",
    introduction:
      "Decimal fractions are fractions whose denominators are powers of 10 (10, 100, 1000, etc.), represented using a decimal point. For example, 0.5 = 5/10 = 1/2, and 0.25 = 25/100 = 1/4. Understanding the conversion between fractions and decimals is fundamental.\n\nA recurring (repeating) decimal is one where a digit or group of digits repeats infinitely, like 1/3 = 0.333... = 0.3̄. Converting recurring decimals to fractions is an important skill: for a pure recurring decimal like 0.x̄, the fraction is x/9; for 0.xȳ (two digits repeating), the fraction is xy/99.\n\nDecimal fraction problems in competitive exams test conversions between fractions and decimals, comparison of decimal numbers, and arithmetic operations with decimals. Pay special attention to place value, each position after the decimal point represents tenths, hundredths, thousandths, etc.",
    concepts: [
      "0.1 = 1/10 (tenths place).",
      "0.01 = 1/100 (hundredths place).",
      "Terminating decimal: ends after a finite number of digits (e.g., 0.25).",
      "Recurring decimal: digits repeat infinitely (e.g., 0.333...).",
      "A fraction p/q gives a terminating decimal only if q (in simplest form) has no prime factors other than 2 and 5.",
    ],
    formulas: [
      { name: "Fraction to decimal", formula: "Divide numerator by denominator" },
      { name: "Pure recurring decimal", formula: "0.abc̄ (all repeating) = abc / 999" },
      { name: "Mixed recurring", formula: "0.ab̄c̄ = (abc - a) / 990 (non-repeating part subtracted)" },
      {
        name: "Converting recurring decimal to fraction",
        formula: "For 0.x̄ = x/9, 0.xȳ = xy/99, 0.xȳz = xyz/999",
      },
    ],
    methods: [
      {
        name: "Converting Recurring Decimal to Fraction",
        steps: [
          "Let x = the recurring decimal.",
          "Multiply x by 10^(number of repeating digits) to shift the repeating block.",
          "Subtract the original equation to eliminate the repeating part.",
          "Solve for x.",
        ],
      },
      {
        name: "Comparing Decimals",
        steps: [
          "Make the number of decimal places equal by appending zeros.",
          "Compare as whole numbers.",
          "Example: 0.5 vs 0.48 → 0.50 vs 0.48 → 50 > 48 → 0.5 > 0.48.",
        ],
      },
    ],
    quickTricks: [
      "Memorize: 1/3 = 0.333..., 1/6 = 0.1666..., 1/7 = 0.142857 (repeating), 1/9 = 0.111...",
      "1/11 = 0.0909..., 1/12 = 0.0833..., 1/13 ≈ 0.0769.",
      "Multiplying by 10 shifts decimal one place right. Dividing by 10 shifts one place left.",
      "To convert a fraction to decimal quickly, make the denominator a power of 10 if possible.",
    ],
    solvedExamples: [
      {
        problem: "Convert 0.363636... (0.36 repeating) to a fraction.",
        solution:
          "Step 1: Let x = 0.363636...\nStep 2: 100x = 36.363636...\nStep 3: 100x - x = 36 → 99x = 36.\nStep 4: x = 36/99 = 4/11.",
        answer: "4/11",
      },
      {
        problem: "Arrange in ascending order: 0.6, 0.06, 0.606, 0.66.",
        solution:
          "Step 1: Write with 3 decimal places: 0.600, 0.060, 0.606, 0.660.\nStep 2: Compare: 60 < 600 < 606 < 660.\nStep 3: Order: 0.06 < 0.6 < 0.606 < 0.66.",
        answer: "0.06 < 0.6 < 0.606 < 0.66",
      },
      {
        problem: "What is 0.025 x 0.4?",
        solution:
          "Step 1: Multiply ignoring decimals: 25 x 4 = 100.\nStep 2: Total decimal places = 3 + 1 = 4.\nStep 3: Place decimal: 0.0100 = 0.01.",
        answer: "0.01",
      },
    ],
    commonMistakes: [
      "Confusing 0.5 (one-half) with 0.05 (one-twentieth).",
      "Incorrect decimal placement when multiplying, count total decimal places in both numbers.",
      "Not simplifying the fraction after converting from a recurring decimal.",
    ],
    keyTakeaways: [
      "Every fraction can be expressed as either a terminating or recurring decimal.",
      "Recurring decimals convert to fractions using multiples of 9 (9, 99, 999, ...).",
      "When multiplying decimals, count total decimal places and place the point accordingly.",
      "For comparison, equalize decimal places by appending zeros.",
      "Memorize common fraction-decimal equivalents for speed.",
    ],
  },
  {
    slug: "surds-and-indices",
    categorySlug: "aptitude",
    introduction:
      "Surds and Indices deal with powers, roots, and their properties. An index (or exponent) tells you how many times a base is multiplied by itself. A surd is an irrational root that cannot be simplified to a rational number, such as √2, ³√5, etc.\n\nThe laws of indices (exponents) are essential: aᵐ x aⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ. These laws enable simplification of complex expressions with exponents.\n\nSurds follow their own rules: √a x √b = √(ab), √a/√b = √(a/b). Rationalizing the denominator (removing surds from the denominator) is a key skill. For binomial surds like 1/(√a + √b), multiply numerator and denominator by the conjugate (√a - √b). These topics are fundamental for algebra and appear frequently in simplification problems.",
    concepts: [
      "aⁿ means a multiplied by itself n times.",
      "a^(1/n) = ⁿ√a (nth root of a).",
      "A surd is an irrational root: √2, ³√3, etc.",
      "Like surds have the same radicand: 2√3 and 5√3 are like surds.",
      "Rationalizing: removing surds from the denominator.",
    ],
    formulas: [
      { name: "Product rule", formula: "aᵐ x aⁿ = aᵐ⁺ⁿ" },
      { name: "Quotient rule", formula: "aᵐ / aⁿ = aᵐ⁻ⁿ" },
      { name: "Power rule", formula: "(aᵐ)ⁿ = aᵐⁿ" },
      { name: "Zero exponent", formula: "a⁰ = 1 (a ≠ 0)" },
      { name: "Negative exponent", formula: "a⁻ⁿ = 1/aⁿ" },
      { name: "Fractional exponent", formula: "a^(m/n) = ⁿ√(aᵐ)" },
      { name: "Surd multiplication", formula: "√a x √b = √(ab)" },
      { name: "Rationalizing binomial surd", formula: "1/(√a + √b) = (√a - √b)/(a - b)" },
    ],
    methods: [
      {
        name: "Simplifying Expressions with Indices",
        steps: [
          "Express all terms with the same base if possible.",
          "Apply the laws of indices to combine exponents.",
          "Simplify the resulting expression.",
        ],
      },
      {
        name: "Rationalizing the Denominator",
        steps: [
          "Identify the surd in the denominator.",
          "Multiply numerator and denominator by the conjugate.",
          "Simplify using (a+b)(a-b) = a² - b².",
        ],
      },
    ],
    quickTricks: [
      "To compare surds like ³√4 and ⁴√5, raise both to a common root (LCM of 3 and 4 = 12): ³√4 = 4^(1/3) = 4^(4/12) = (4⁴)^(1/12) = 256^(1/12); ⁴√5 = 5^(3/12) = 125^(1/12). So ³√4 > ⁴√5.",
      "√2 ≈ 1.414, √3 ≈ 1.732, √5 ≈ 2.236. Memorize for quick approximations.",
      "(√a + √b)(√a - √b) = a - b. This eliminates surds quickly.",
      "If bases are same, equate exponents. If exponents are same, equate bases.",
      "aᵐ x bᵐ = (ab)ᵐ, useful for combining different bases with same exponent.",
    ],
    solvedExamples: [
      {
        problem: "Simplify: (2³ x 2⁵) / 2⁴",
        solution:
          "Step 1: Numerator: 2³ x 2⁵ = 2^(3+5) = 2⁸.\nStep 2: 2⁸ / 2⁴ = 2^(8-4) = 2⁴ = 16.",
        answer: "16",
      },
      {
        problem: "Rationalize: 1 / (√5 + √3)",
        solution:
          "Step 1: Multiply by conjugate: [1 x (√5 - √3)] / [(√5 + √3)(√5 - √3)].\nStep 2: Denominator = 5 - 3 = 2.\nStep 3: Result = (√5 - √3) / 2.",
        answer: "(√5 - √3) / 2",
      },
      {
        problem: "If 3^(x+2) = 243, find x.",
        solution:
          "Step 1: 243 = 3⁵.\nStep 2: 3^(x+2) = 3⁵.\nStep 3: x + 2 = 5, so x = 3.",
        answer: "3",
      },
    ],
    commonMistakes: [
      "Adding exponents when bases are different: 2³ x 3³ ≠ 6⁶ (correct: (2x3)³ = 6³).",
      "Applying (aᵐ)ⁿ = a^(m+n) instead of a^(mn).",
      "Forgetting to rationalize, leaving surds in the denominator in final answers.",
    ],
    keyTakeaways: [
      "Memorize all laws of indices, they are used everywhere.",
      "Same base: add/subtract exponents. Same exponent: multiply/divide bases.",
      "Rationalizing removes surds from the denominator using conjugates.",
      "To compare surds of different orders, convert to a common root.",
      "a⁰ = 1 for any non-zero a. This is a common exam question.",
    ],
  },
  {
    slug: "simplification",
    categorySlug: "aptitude",
    introduction:
      "Simplification involves reducing complex mathematical expressions to their simplest form using the order of operations (BODMAS/PEMDAS) and arithmetic shortcuts. This is one of the most frequently tested topics as it appears directly or indirectly in almost every aptitude question.\n\nBODMAS stands for Brackets, Orders (powers/roots), Division, Multiplication, Addition, Subtraction. This is the order in which operations must be performed. Within brackets, the same order applies. Division and Multiplication are performed left to right (equal priority), as are Addition and Subtraction.\n\nSpeed in simplification comes from knowing multiplication tables, squares, cubes, fraction-decimal equivalents, and applying algebraic identities. Questions in this category range from straightforward arithmetic to expressions involving fractions, decimals, surds, and nested brackets.",
    concepts: [
      "BODMAS: Brackets → Orders → Division/Multiplication → Addition/Subtraction.",
      "Within brackets: (), {}, [], innermost first.",
      "Division and Multiplication have equal priority (left to right).",
      "Addition and Subtraction have equal priority (left to right).",
    ],
    formulas: [
      { name: "(a+b)²", formula: "a² + 2ab + b²" },
      { name: "(a-b)²", formula: "a² - 2ab + b²" },
      { name: "a² - b²", formula: "(a+b)(a-b)" },
      { name: "(a+b)³", formula: "a³ + 3a²b + 3ab² + b³" },
      { name: "a³ + b³", formula: "(a+b)(a² - ab + b²)" },
      { name: "a³ - b³", formula: "(a-b)(a² + ab + b²)" },
    ],
    methods: [
      {
        name: "BODMAS Approach",
        steps: [
          "Solve innermost brackets first.",
          "Evaluate powers and roots.",
          "Perform division and multiplication from left to right.",
          "Perform addition and subtraction from left to right.",
        ],
      },
      {
        name: "Using Algebraic Identities",
        steps: [
          "Recognize patterns like a² - b², (a+b)², etc.",
          "Apply the identity to simplify directly.",
          "This avoids long calculations.",
        ],
      },
    ],
    quickTricks: [
      "999 x 47 = (1000-1) x 47 = 47000 - 47 = 46953. Use (a-1) x b = ab - b.",
      "a² - b² = (a+b)(a-b). E.g., 53² - 47² = (53+47)(53-47) = 100 x 6 = 600.",
      "To multiply by 25: multiply by 100, divide by 4. To multiply by 125: multiply by 1000, divide by 8.",
      "Memorize squares up to 30 and cubes up to 15.",
      "For fractions: convert to decimals or find LCM of denominators for quick comparison.",
    ],
    solvedExamples: [
      {
        problem: "Simplify: 15 + 5 x 3 - 8 ÷ 2.",
        solution:
          "Step 1: Apply BODMAS. No brackets or orders.\nStep 2: Division: 8 ÷ 2 = 4. Multiplication: 5 x 3 = 15.\nStep 3: Expression becomes: 15 + 15 - 4.\nStep 4: Addition and subtraction left to right: 15 + 15 = 30, 30 - 4 = 26.",
        answer: "26",
      },
      {
        problem: "Find the value of (4.7)² + (5.3)² + 2 x 4.7 x 5.3.",
        solution:
          "Step 1: Recognize the pattern: a² + b² + 2ab = (a+b)².\nStep 2: (4.7 + 5.3)² = (10)² = 100.",
        answer: "100",
      },
      {
        problem: "Simplify: (256)^(3/4).",
        solution:
          "Step 1: 256 = 4⁴.\nStep 2: (4⁴)^(3/4) = 4^(4 x 3/4) = 4³ = 64.",
        answer: "64",
      },
    ],
    commonMistakes: [
      "Not following BODMAS order, e.g., adding before multiplying.",
      "Treating division and multiplication as different priority, they are equal, processed left to right.",
      "Misapplying algebraic identities, e.g., using (a+b)² = a² + b² instead of a² + 2ab + b².",
    ],
    keyTakeaways: [
      "BODMAS is the golden rule, always follow the order of operations.",
      "Recognize algebraic identity patterns for instant simplification.",
      "Speed tricks: multiply by breaking numbers into simpler components.",
      "Memorize squares (1-30), cubes (1-15), and common fraction-decimal conversions.",
      "Division and multiplication are same priority; addition and subtraction are same priority.",
    ],
  },
  {
    slug: "logarithm",
    categorySlug: "aptitude",
    introduction:
      "A logarithm answers the question: 'To what power must the base be raised to get a given number?' If aˣ = N, then log_a(N) = x. Logarithms convert multiplication into addition and exponentiation into multiplication, making them powerful tools for simplifying complex calculations.\n\nThe two most common bases are 10 (common logarithm, written as log) and e ≈ 2.718 (natural logarithm, written as ln). The properties of logarithms, product rule, quotient rule, and power rule, are essential for simplification. Log_a(MN) = log_a(M) + log_a(N), log_a(M/N) = log_a(M) - log_a(N), and log_a(Mⁿ) = n.log_a(M).\n\nCompetitive exams test your ability to simplify logarithmic expressions, solve logarithmic equations, and apply the change of base formula. A key identity to remember: log_a(b) x log_b(a) = 1, and the change of base formula: log_a(b) = log_c(b) / log_c(a).",
    concepts: [
      "If aˣ = N, then log_a(N) = x.",
      "log_a(1) = 0 for any base a.",
      "log_a(a) = 1 for any base a.",
      "Logarithm is defined only for positive numbers with a positive base (not equal to 1).",
    ],
    formulas: [
      { name: "Product rule", formula: "log_a(MN) = log_a(M) + log_a(N)" },
      { name: "Quotient rule", formula: "log_a(M/N) = log_a(M) - log_a(N)" },
      { name: "Power rule", formula: "log_a(Mⁿ) = n x log_a(M)" },
      { name: "Change of base", formula: "log_a(b) = log_c(b) / log_c(a)" },
      { name: "Reciprocal", formula: "log_a(b) = 1 / log_b(a)" },
      { name: "Base-exponent identity", formula: "a^(log_a(N)) = N" },
    ],
    methods: [
      {
        name: "Simplifying Logarithmic Expressions",
        steps: [
          "Apply product, quotient, and power rules to combine or expand logs.",
          "Convert all logs to the same base using the change of base formula if needed.",
          "Simplify the resulting expression.",
        ],
      },
      {
        name: "Solving Logarithmic Equations",
        steps: [
          "Use log properties to combine the equation into a single logarithm.",
          "Convert to exponential form: if log_a(x) = k, then x = aᵏ.",
          "Solve for x and verify (x must be positive).",
        ],
      },
    ],
    quickTricks: [
      "log_a(b) x log_b(c) = log_a(c), the 'chain rule' for logarithms.",
      "log_a(b) x log_b(a) = 1.",
      "log 2 ≈ 0.301, log 3 ≈ 0.477, log 5 ≈ 0.699, log 7 ≈ 0.845. Memorize these for quick calculations.",
      "If log(x) = n, then x = 10ⁿ (for common logarithm base 10).",
      "log_a(a^n) = n. This simplifies many expressions instantly.",
    ],
    solvedExamples: [
      {
        problem: "Find the value of log₂(64).",
        solution:
          "Step 1: We need x such that 2ˣ = 64.\nStep 2: 64 = 2⁶.\nStep 3: Therefore log₂(64) = 6.",
        answer: "6",
      },
      {
        problem: "Simplify: log 36 - log 4 + log 5.",
        solution:
          "Step 1: log 36 - log 4 = log(36/4) = log 9.\nStep 2: log 9 + log 5 = log(9 x 5) = log 45.",
        answer: "log 45",
      },
      {
        problem:
          "If log_x(81) = 4, find x.",
        solution:
          "Step 1: log_x(81) = 4 means x⁴ = 81.\nStep 2: 81 = 3⁴.\nStep 3: x⁴ = 3⁴, so x = 3.",
        answer: "3",
      },
    ],
    commonMistakes: [
      "Writing log(a + b) = log(a) + log(b), this is WRONG. The product rule is log(ab) = log(a) + log(b).",
      "Forgetting that log is undefined for negative numbers and zero.",
      "Confusing log_a(b) with log_b(a), they are reciprocals, not equal.",
    ],
    keyTakeaways: [
      "log converts multiplication to addition, division to subtraction, powers to multiplication.",
      "log_a(1) = 0 and log_a(a) = 1 are the two fundamental identities.",
      "Change of base: log_a(b) = log(b)/log(a) lets you convert between any bases.",
      "Logarithm is only defined for positive arguments and positive base (not 1).",
      "Memorize log values of 2, 3, 5, 7 for quick calculations.",
    ],
  },
];
