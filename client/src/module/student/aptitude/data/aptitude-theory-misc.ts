import type { TopicTheory } from "./types";

export const aptitudeTheoryMisc: TopicTheory[] = [
  {
    slug: "ages",
    categorySlug: "aptitude",
    introduction:
      "Problems on Ages involve finding the present, past, or future ages of people based on given relationships. These problems are essentially algebraic in nature, you set up variables for unknown ages and form equations from the given conditions.\n\nThe key insight is that the difference between two people's ages remains constant throughout their lives. If A is 5 years older than B today, A was 5 years older 10 years ago and will be 5 years older 20 years from now. This constant difference is often the key to setting up equations.\n\nMost age problems can be solved by assuming the present age as x and translating the word problem into one or two equations. Problems may involve ratios of ages at different times, sums of ages, or conditions like 'n years ago' or 'n years hence.' Linear equation skills are essential here.",
    concepts: [
      "The age difference between two people remains constant over time.",
      "If present age is x, age n years ago = x - n, age n years hence = x + n.",
      "Ratio of ages changes over time even though the difference stays constant.",
    ],
    formulas: [
      {
        name: "Age n years ago",
        formula: "Past age = Present age - n",
      },
      {
        name: "Age n years hence",
        formula: "Future age = Present age + n",
      },
      {
        name: "If ratio of ages after t years is a:b",
        formula: "(x + t) / (y + t) = a / b, where x and y are present ages",
      },
    ],
    methods: [
      {
        name: "Single Variable Method",
        steps: [
          "Let the unknown age be x.",
          "Express other ages in terms of x using given conditions.",
          "Form an equation from the remaining condition.",
          "Solve for x and verify.",
        ],
      },
      {
        name: "Ratio-Based Method",
        steps: [
          "If present ages are in ratio a:b, let them be ak and bk.",
          "Use the condition about past/future ages to form an equation in k.",
          "Solve for k, then find actual ages.",
        ],
      },
    ],
    quickTricks: [
      "If the ratio of ages of A and B is a:b now and c:d after t years, then A's present age = at(c-d) / (ad - bc).",
      "The difference in ages always remains constant, use this to quickly verify answers.",
      "If 'A is twice as old as B was when A was as old as B is now,' set up the timeline carefully with variables.",
      "For sum-based problems, if sum of present ages = S, then sum of ages n years ago = S - 2n (for 2 people).",
    ],
    solvedExamples: [
      {
        problem:
          "The present ages of A and B are in the ratio 5:3. After 6 years, their ages will be in the ratio 7:5. Find their present ages.",
        solution:
          "Step 1: Let present ages be 5k and 3k.\nStep 2: After 6 years: (5k + 6)/(3k + 6) = 7/5.\nStep 3: Cross multiply: 5(5k + 6) = 7(3k + 6).\nStep 4: 25k + 30 = 21k + 42.\nStep 5: 4k = 12, so k = 3.\nStep 6: A's age = 15, B's age = 9.",
        answer: "A = 15 years, B = 9 years",
      },
      {
        problem:
          "A father is 30 years older than his son. In 12 years, the father will be twice as old as his son. Find their present ages.",
        solution:
          "Step 1: Let son's present age = x. Father's present age = x + 30.\nStep 2: In 12 years: (x + 30 + 12) = 2(x + 12).\nStep 3: x + 42 = 2x + 24.\nStep 4: x = 18. Father = 48.",
        answer: "Son = 18 years, Father = 48 years",
      },
      {
        problem:
          "The sum of the ages of a mother and daughter is 50 years. Five years ago, the mother's age was 7 times the daughter's age. Find their present ages.",
        solution:
          "Step 1: Let daughter's age = x. Mother's age = 50 - x.\nStep 2: Five years ago: (50 - x - 5) = 7(x - 5).\nStep 3: 45 - x = 7x - 35.\nStep 4: 80 = 8x, so x = 10.\nStep 5: Daughter = 10, Mother = 40.",
        answer: "Daughter = 10 years, Mother = 40 years",
      },
    ],
    commonMistakes: [
      "Forgetting to add/subtract the same number of years to BOTH people's ages.",
      "Setting up the wrong equation, carefully read whether it says 'years ago' or 'years hence.'",
      "Getting confused with complex wordings like 'A was as old as B is now', draw a timeline.",
    ],
    keyTakeaways: [
      "Age difference between two people is always constant.",
      "Let the unknown be x and translate English to algebra carefully.",
      "Ratio problems: use ak and bk, then solve for k.",
      "Always verify your answer by checking all conditions.",
      "Sum of ages of n people changes by n x t after t years.",
    ],
  },
  {
    slug: "calendar",
    categorySlug: "aptitude",
    introduction:
      "Calendar problems involve finding the day of the week for a given date, counting odd days, and understanding leap years. The concept of 'odd days' is central: odd days are the number of days more than complete weeks in a given period.\n\nA normal year has 365 days = 52 weeks + 1 odd day. A leap year has 366 days = 52 weeks + 2 odd days. A leap year occurs every 4 years, except century years, century years are leap years only if divisible by 400. So 1900 is not a leap year, but 2000 is.\n\nTo find the day of the week for any date, calculate the total odd days from a reference point. The coding is: 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday. This topic requires memorizing a few key values and applying a systematic method.",
    concepts: [
      "Odd days = remaining days after complete weeks.",
      "Ordinary year: 1 odd day. Leap year: 2 odd days.",
      "Leap year: divisible by 4, except centuries (must be divisible by 400).",
      "100 years = 76 ordinary + 24 leap = 76 + 48 = 124 odd days = 5 odd days.",
      "200 years = 3 odd days. 300 years = 1 odd day. 400 years = 0 odd days.",
    ],
    formulas: [
      {
        name: "Odd days in a year",
        formula: "Ordinary year: 1 odd day. Leap year: 2 odd days.",
      },
      {
        name: "Odd days in centuries",
        formula: "100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0 odd days",
      },
      {
        name: "Day code",
        formula: "0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat",
      },
      {
        name: "Month codes (Jan-Dec for non-leap year)",
        formula: "Jan=0, Feb=3, Mar=3, Apr=6, May=1, Jun=4, Jul=6, Aug=2, Sep=5, Oct=0, Nov=3, Dec=5",
      },
    ],
    methods: [
      {
        name: "Finding Day of the Week",
        steps: [
          "Count the total odd days from a known reference day (e.g., 1 Jan 0001 AD was Monday).",
          "Calculate odd days for complete centuries.",
          "Add odd days for remaining years (count leap years separately).",
          "Add odd days for complete months of the current year.",
          "Add the remaining days.",
          "Total odd days mod 7 gives the day (0=Sun, 1=Mon, etc.).",
        ],
      },
      {
        name: "Leap Year Check",
        steps: [
          "If not a century year: divisible by 4 → leap year.",
          "If a century year: divisible by 400 → leap year.",
          "Examples: 2024 (leap), 1900 (not leap), 2000 (leap).",
        ],
      },
    ],
    quickTricks: [
      "400 years have exactly 0 odd days, so the day pattern repeats every 400 years.",
      "January and October always start on the same day in a non-leap year.",
      "In a leap year, January and July start on the same day.",
      "The last day of a century cannot be Tuesday, Thursday, or Saturday.",
      "For quick calculations, memorize the odd days for each month: 31→3, 28→0, 31→3, 30→2, 31→3, 30→2, 31→3, 31→3, 30→2, 31→3, 30→2, 31→3.",
    ],
    solvedExamples: [
      {
        problem: "What day of the week was 15 August 1947?",
        solution:
          "Step 1: Count odd days. 1600 years = 0 odd days. 300 years (1601-1900) = 1 odd day.\nStep 2: 1901-1946 = 46 years = 35 ordinary + 11 leap = 35 + 22 = 57 odd days = 57 mod 7 = 1 odd day.\nStep 3: Jan-Jul 1947: Jan(3) + Feb(0) + Mar(3) + Apr(2) + May(3) + Jun(2) + Jul(3) = 16. 16 mod 7 = 2.\nStep 4: Aug 1-15 = 15 days. 15 mod 7 = 1.\nStep 5: Total = 0 + 1 + 1 + 2 + 1 = 5 odd days. 5 = Friday.",
        answer: "Friday",
      },
      {
        problem: "If January 1, 2020 is Wednesday, what day is March 1, 2020?",
        solution:
          "Step 1: 2020 is a leap year (divisible by 4).\nStep 2: Days from Jan 1 to Mar 1: Jan has 31 days + Feb has 29 days (leap year) = 60 days.\nStep 3: 60 mod 7 = 4. Wednesday + 4 = Sunday.",
        answer: "Sunday",
      },
    ],
    commonMistakes: [
      "Forgetting that century years are NOT leap years unless divisible by 400.",
      "Not accounting for February having 29 days in a leap year when counting days.",
      "Confusing odd days coding, mixing up which number corresponds to which day.",
    ],
    keyTakeaways: [
      "Odd days concept is the key to all calendar problems.",
      "Ordinary year = 1 odd day, Leap year = 2 odd days.",
      "100 years = 5 odd days, 200 = 3, 300 = 1, 400 = 0.",
      "Leap year rule: divisible by 4, but centuries must be divisible by 400.",
      "Practice with historical dates (Independence Day, Republic Day) for familiarity.",
    ],
  },
  {
    slug: "clock",
    categorySlug: "aptitude",
    introduction:
      "Clock problems involve finding the angles between the hour and minute hands, and determining the times at which the hands coincide, are at right angles, or are in a straight line. These problems require understanding the speeds of both hands.\n\nThe minute hand moves at 6° per minute (360°/60 min), while the hour hand moves at 0.5° per minute (360°/720 min). The relative speed of the minute hand with respect to the hour hand is 5.5° per minute. This means the minute hand gains 5.5° on the hour hand every minute.\n\nThe basic formula for the angle between the hands at h hours and m minutes is: Angle = |30h - 5.5m|. If this exceeds 180°, subtract from 360° to get the reflex angle's supplement. The hands coincide (0°) 11 times in 12 hours and are at 180° (straight line) 11 times in 12 hours.",
    concepts: [
      "Minute hand speed: 6° per minute (360° in 60 min).",
      "Hour hand speed: 0.5° per minute (360° in 12 hours = 0.5°/min).",
      "Relative speed: minute hand gains 5.5° per minute on the hour hand.",
      "The hands coincide 11 times every 12 hours (not 12, because they overlap near 12).",
      "The hands are at right angle (90°) 22 times every 12 hours.",
    ],
    formulas: [
      {
        name: "Angle between hands",
        formula: "Angle = |30H - 5.5M|",
        description: "H = hour, M = minutes past the hour. If > 180°, subtract from 360°.",
      },
      {
        name: "Time between coincidences",
        formula: "12/11 hours = 65 5/11 minutes",
      },
      {
        name: "Hands at right angle",
        formula: "Solve |30H - 5.5M| = 90°",
      },
      {
        name: "Hands opposite (180°)",
        formula: "Solve |30H - 5.5M| = 180°",
      },
    ],
    methods: [
      {
        name: "Finding Angle at a Given Time",
        steps: [
          "Note H (hour) and M (minutes).",
          "Apply: Angle = |30H - 5.5M|.",
          "If result > 180°, subtract from 360° for the smaller angle.",
        ],
      },
      {
        name: "Finding Time for a Specific Angle",
        steps: [
          "Set up equation: 30H - 5.5M = θ or 30H - 5.5M = -θ.",
          "Solve for M (minutes past H o'clock).",
          "Check that M is between 0 and 60.",
        ],
      },
    ],
    quickTricks: [
      "At 12:00, angle = 0°. At 6:00, angle = 180°. At 3:00 or 9:00, angle = 90°.",
      "The hands overlap every 65 5/11 minutes, not every 65 minutes.",
      "In a 12-hour period: 11 coincidences, 22 right angles, 11 straight lines.",
      "For a clock gaining/losing: if it gains x min/hr, in t hours it shows t + xt/60 hours.",
      "Mirror image time: subtract the given time from 11:60 (adjust if needed) to find the mirror image.",
    ],
    solvedExamples: [
      {
        problem: "Find the angle between the hands of a clock at 3:20.",
        solution:
          "Step 1: H = 3, M = 20.\nStep 2: Angle = |30(3) - 5.5(20)| = |90 - 110| = |-20| = 20°.",
        answer: "20°",
      },
      {
        problem:
          "At what time between 4 and 5 o'clock will the hands of a clock be at right angle?",
        solution:
          "Step 1: At 4:00, angle = 30 x 4 = 120°. Minute hand needs to close or widen to 90°.\nStep 2: Case 1: 30(4) - 5.5M = 90 → 120 - 5.5M = 90 → 5.5M = 30 → M = 30/5.5 = 60/11 = 5 5/11 min.\nStep 3: Case 2: 30(4) - 5.5M = -90 → 120 - 5.5M = -90 → 5.5M = 210 → M = 210/5.5 = 420/11 = 38 2/11 min.\nStep 4: Both times: 4:5 5/11 and 4:38 2/11.",
        answer: "4:05 5/11 and 4:38 2/11",
      },
      {
        problem: "How many times do the hands of a clock coincide in 24 hours?",
        solution:
          "Step 1: In 12 hours, the hands coincide 11 times.\nStep 2: In 24 hours = 11 x 2 = 22 times.",
        answer: "22 times",
      },
    ],
    commonMistakes: [
      "Thinking hands coincide 12 times in 12 hours, it is 11 (the 12th coincidence is at the start of the next cycle).",
      "Forgetting to take the absolute value or check if angle > 180°.",
      "In gain/loss problems, not converting the error rate to actual time difference correctly.",
    ],
    keyTakeaways: [
      "Angle = |30H - 5.5M| is the master formula.",
      "Minute hand gains 5.5° per minute over the hour hand.",
      "Coincidences: 11 per 12 hours (22 per day). Right angles: 22 per 12 hours (44 per day).",
      "If angle > 180°, the actual acute/obtuse angle = 360° - calculated angle.",
      "Mirror image questions: subtract from 11:60 (i.e., 12:00).",
    ],
  },
  {
    slug: "races-and-games",
    categorySlug: "aptitude",
    introduction:
      "Races and Games problems involve competitors in a race or a game, where one gives the other a head start or handicap. The key idea is expressing the relative abilities of competitors in terms of how much distance one covers while the other covers a different amount.\n\nIn a race of 1000 m, if A can beat B by 50 m, it means when A finishes 1000 m, B has covered only 950 m. Their speed ratio is therefore 1000:950 = 20:19. Dead heat means both finish at the same time. A start of x meters means B starts x meters ahead.\n\nFor games (like snooker, carrom, etc.), if A can give B 10 points in a game of 100, it means when A scores 100, B scores 90. The ratio of their scoring rates is 100:90 = 10:9. These problems are essentially ratio and proportion problems applied to competitive scenarios.",
    concepts: [
      "A beats B by x meters: when A finishes the race, B is x meters behind.",
      "A gives B a start of x meters: B starts x meters ahead of A.",
      "Dead heat: both finish at the same time.",
      "In a game: 'A gives B n points' means A's score : B's score = Game points : (Game points - n).",
    ],
    formulas: [
      {
        name: "Speed ratio from beating distance",
        formula: "If A beats B by x in a race of D, Speed ratio = D : (D - x)",
      },
      {
        name: "Time relationship",
        formula: "If A beats B by t seconds, B takes (A's time + t) to finish",
      },
      {
        name: "Equivalent start",
        formula: "A can give B a start of x meters = A beats B by x meters",
      },
    ],
    methods: [
      {
        name: "Finding Who Beats Whom",
        steps: [
          "From given data, find the speed ratio of A and B.",
          "In the time A covers D meters, B covers D x (B's speed / A's speed).",
          "Difference = beating distance.",
        ],
      },
      {
        name: "Three-Person Race",
        steps: [
          "Find speed ratios of A:B and B:C.",
          "Combine to get A:B:C.",
          "Use the combined ratio to find how much A beats C by.",
        ],
      },
    ],
    quickTricks: [
      "If A beats B by x m and B beats C by y m in a D-meter race, A does NOT beat C by (x+y) m. You must use ratios.",
      "A gives B a start of x m in D-m race means: when A runs D m, B runs (D-x) m to tie.",
      "In a 100-m race, if A beats B by 10 m, speed ratio = 100:90 = 10:9.",
      "For games: if A gives B 15 points in a game of 100, A:B scoring = 100:85 = 20:17.",
    ],
    solvedExamples: [
      {
        problem:
          "In a 1 km race, A beats B by 50 m and B beats C by 40 m. By how much does A beat C?",
        solution:
          "Step 1: When A runs 1000 m, B runs 950 m.\nStep 2: When B runs 1000 m, C runs 960 m. So when B runs 950 m, C runs 960 x 950/1000 = 912 m.\nStep 3: When A runs 1000 m, C runs 912 m. A beats C by 1000 - 912 = 88 m.",
        answer: "88 m",
      },
      {
        problem:
          "A can run 200 m in 35 seconds and B in 40 seconds. By how much distance does A beat B?",
        solution:
          "Step 1: A's speed = 200/35 m/s. B's speed = 200/40 = 5 m/s.\nStep 2: In 35 seconds (when A finishes), B covers = 5 x 35 = 175 m.\nStep 3: A beats B by 200 - 175 = 25 m.",
        answer: "25 m",
      },
    ],
    commonMistakes: [
      "Adding beating distances directly in a three-person race instead of using ratios.",
      "Confusing 'A gives B a start of x meters' (B starts ahead) with 'A beats B by x meters' (B finishes behind).",
      "Not using the correct time frame, always use the winner's time as the reference.",
    ],
    keyTakeaways: [
      "Convert beating distances to speed ratios for multi-person calculations.",
      "A beats B by x in D meters means ratio = D:(D-x).",
      "For three-person races, chain the ratios correctly.",
      "Dead heat means both finish at the same time, their speeds times their respective distances are equal.",
      "In game problems, scoring ratio = Game points : (Game points - handicap).",
    ],
  },
  {
    slug: "odd-man-out",
    categorySlug: "aptitude",
    introduction:
      "Odd Man Out problems require you to identify which number in a given series does not fit the pattern that the other numbers follow. These are pattern recognition problems that test your ability to spot sequences, relationships, and anomalies.\n\nThe numbers in the series usually follow a specific rule: arithmetic progression (constant difference), geometric progression (constant ratio), squares, cubes, primes, or more complex patterns like alternating operations. The 'odd man out' is the number that breaks this pattern.\n\nTo solve these problems, first look at the differences between consecutive terms. If the differences form a pattern, you can identify the rule. If not, look at ratios, or check if the numbers are related to squares, cubes, primes, or other number properties. Sometimes the pattern involves two interleaved sequences or alternating operations (add, multiply, add, multiply, etc.).",
    concepts: [
      "Series can follow arithmetic, geometric, or mixed patterns.",
      "The odd number is the one that breaks the established pattern.",
      "Look for differences, ratios, squares, cubes, primes.",
      "Some series alternate between two different operations.",
    ],
    formulas: [
      {
        name: "Arithmetic progression check",
        formula: "Differences between consecutive terms should be constant",
      },
      {
        name: "Geometric progression check",
        formula: "Ratios between consecutive terms should be constant",
      },
      {
        name: "Square series",
        formula: "Terms should be n², (n+1)², (n+2)², ...",
      },
      {
        name: "Cube series",
        formula: "Terms should be n³, (n+1)³, (n+2)³, ...",
      },
    ],
    methods: [
      {
        name: "Difference Method",
        steps: [
          "Calculate the differences between consecutive terms.",
          "Check if the differences follow a pattern (constant, increasing by a fixed amount, etc.).",
          "The term where the difference breaks the pattern is the odd one.",
        ],
      },
      {
        name: "Property-Based Method",
        steps: [
          "Check if all numbers share a property (all prime, all even, all perfect squares, etc.).",
          "Identify the number that does not share this property.",
          "That number is the odd one out.",
        ],
      },
    ],
    quickTricks: [
      "If differences are 1, 2, 3, 4, ... or 2, 4, 6, 8, ... the series is based on incrementally increasing differences.",
      "If terms are close to perfect squares or cubes, check for an off-by-one error.",
      "Memorize primes up to 100 for quick identification: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97.",
      "If no simple pattern, check if the series uses alternating operations (+, x, +, x, ...).",
    ],
    solvedExamples: [
      {
        problem: "Find the odd one out: 2, 5, 10, 17, 26, 38, 50.",
        solution:
          "Step 1: Differences: 3, 5, 7, 9, 12, 12.\nStep 2: Differences should be 3, 5, 7, 9, 11, 13 (consecutive odd numbers).\nStep 3: 38 breaks the pattern. The correct number should be 26 + 11 = 37.\nStep 4: 38 is the odd one out.",
        answer: "38 (should be 37)",
      },
      {
        problem: "Find the odd one out: 1, 4, 9, 16, 23, 36, 49.",
        solution:
          "Step 1: These look like perfect squares: 1², 2², 3², 4², ?, 6², 7².\nStep 2: 5² = 25, but we have 23.\nStep 3: 23 is the odd one out, it should be 25.",
        answer: "23 (should be 25)",
      },
      {
        problem: "Find the odd one out: 3, 5, 11, 13, 17, 21, 23.",
        solution:
          "Step 1: Check if all are prime: 3(P), 5(P), 11(P), 13(P), 17(P), 21 = 3x7 (NOT prime), 23(P).\nStep 2: 21 is the only non-prime number.",
        answer: "21 (not a prime number)",
      },
    ],
    commonMistakes: [
      "Looking at only the first few terms to identify the pattern, check ALL terms.",
      "Assuming the series is always arithmetic or geometric, it could be based on squares, cubes, or mixed operations.",
      "Not checking if the 'odd' number is actually a calculation error in the question (read carefully).",
    ],
    keyTakeaways: [
      "Start by computing differences between consecutive terms.",
      "If differences don't reveal a pattern, try ratios or check for square/cube relationships.",
      "Memorize primes, perfect squares, and cubes for quick identification.",
      "Some series alternate between two operations, look for patterns in odd and even positions.",
      "Always verify the identified pattern works for ALL terms except the odd one.",
    ],
  },
];
