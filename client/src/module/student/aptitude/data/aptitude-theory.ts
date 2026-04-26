import type { TopicTheory } from "./types";

export const aptitudeTheory: TopicTheory[] = [
  {
    slug: "profit-and-loss",
    categorySlug: "aptitude",
    introduction:
      "Profit and Loss is one of the most fundamental topics in quantitative aptitude, dealing with commercial and financial transactions. It revolves around the concepts of Cost Price (CP), Selling Price (SP), Marked Price (MP), and Discount. Understanding these relationships is essential for solving problems related to trade, business, and everyday transactions.\n\nThe basic principle is simple: when SP > CP, there is a profit; when CP > SP, there is a loss. The percentage of profit or loss is always calculated on the Cost Price unless stated otherwise. Many competitive exams test your ability to quickly compute these values and apply them in multi-step problems involving successive discounts, dishonest dealings, and marked price strategies.\n\nMastering this topic requires familiarity with percentage calculations and the ability to set up equations from word problems. Most questions can be solved using direct formulas, but understanding the underlying logic helps in tackling tricky variations.",
    concepts: [
      "Cost Price (CP): The price at which an article is purchased.",
      "Selling Price (SP): The price at which an article is sold.",
      "Marked Price (MP): The listed or tagged price before any discount.",
      "Profit = SP - CP (when SP > CP).",
      "Loss = CP - SP (when CP > SP).",
      "Discount = MP - SP.",
    ],
    formulas: [
      { name: "Profit", formula: "Profit = SP - CP" },
      { name: "Loss", formula: "Loss = CP - SP" },
      { name: "Profit %", formula: "Profit% = (Profit / CP) x 100" },
      { name: "Loss %", formula: "Loss% = (Loss / CP) x 100" },
      { name: "SP from Profit%", formula: "SP = CP x (1 + Profit%/100)" },
      { name: "SP from Loss%", formula: "SP = CP x (1 - Loss%/100)" },
      { name: "Discount%", formula: "Discount% = (Discount / MP) x 100" },
      {
        name: "Two successive discounts",
        formula: "Effective Price = MP x (1 - d1/100) x (1 - d2/100)",
      },
      {
        name: "Dishonest dealer profit",
        formula: "Profit% = (True Weight - False Weight) / False Weight x 100",
      },
    ],
    methods: [
      {
        name: "Standard Profit/Loss Calculation",
        steps: [
          "Identify CP and SP from the problem.",
          "Calculate Profit = SP - CP or Loss = CP - SP.",
          "Compute Profit% = (Profit/CP) x 100 or Loss% = (Loss/CP) x 100.",
        ],
      },
      {
        name: "Finding SP given Profit% or Loss%",
        steps: [
          "Note the CP and the required profit% or loss%.",
          "For profit: SP = CP x (100 + Profit%) / 100.",
          "For loss: SP = CP x (100 - Loss%) / 100.",
        ],
      },
    ],
    quickTricks: [
      "If an article is sold at x% profit and another at y% loss on the same CP, net effect = (x - y)% on total CP.",
      "If CP of x articles = SP of y articles, then Profit% = ((x-y)/y) x 100.",
      "For two successive discounts d1% and d2%, single equivalent discount = d1 + d2 - (d1 x d2)/100.",
      "When someone sells at cost price but uses a false weight, Profit% = (Error / True Value - Error) x 100.",
    ],
    solvedExamples: [
      {
        problem:
          "A shopkeeper buys a watch for Rs. 800 and sells it for Rs. 920. Find the profit percentage.",
        solution:
          "Step 1: CP = 800, SP = 920.\nStep 2: Profit = SP - CP = 920 - 800 = 120.\nStep 3: Profit% = (Profit / CP) x 100 = (120 / 800) x 100 = 15%.",
        answer: "15%",
      },
      {
        problem:
          "An item marked at Rs. 1500 is sold at successive discounts of 10% and 20%. Find the selling price.",
        solution:
          "Step 1: After first discount of 10%: Price = 1500 x (1 - 10/100) = 1500 x 0.9 = 1350.\nStep 2: After second discount of 20%: SP = 1350 x (1 - 20/100) = 1350 x 0.8 = 1080.",
        answer: "Rs. 1080",
      },
      {
        problem:
          "The cost price of 20 articles is equal to the selling price of 16 articles. Find the profit percent.",
        solution:
          "Step 1: Let CP of 1 article = C. Then CP of 20 articles = 20C.\nStep 2: SP of 16 articles = 20C, so SP of 1 article = 20C/16 = 5C/4.\nStep 3: Profit per article = 5C/4 - C = C/4.\nStep 4: Profit% = (C/4) / C x 100 = 25%.",
        answer: "25%",
      },
    ],
    commonMistakes: [
      "Calculating profit% or loss% on SP instead of CP.",
      "Forgetting that successive discounts are not additive, they must be applied one after another.",
      "Confusing Marked Price with Cost Price when discount is given.",
    ],
    keyTakeaways: [
      "Profit% and Loss% are always calculated on Cost Price.",
      "Discount% is always calculated on Marked Price.",
      "Use the multiplier method for quick calculations: multiply CP by (100+P%)/100 or (100-L%)/100.",
      "For successive discounts, multiply the discount factors sequentially.",
      "In problems involving false weights, the error is the source of profit.",
    ],
  },
  {
    slug: "percentage",
    categorySlug: "aptitude",
    introduction:
      "Percentage is the backbone of quantitative aptitude. The word 'percent' means 'per hundred,' and it represents a fraction with 100 as the denominator. Almost every other topic in aptitude, profit & loss, interest, data interpretation, requires a solid understanding of percentages.\n\nPercentages are used to express how large or small one quantity is relative to another. Converting between fractions, decimals, and percentages is a fundamental skill. For example, 1/4 = 0.25 = 25%. Competitive exams frequently test percentage increase/decrease, successive percentage changes, and percentage-based word problems.\n\nSpeed in percentage calculations comes from memorizing common fraction-to-percentage conversions and understanding the concept of base value. The 'base' is the quantity on which the percentage is calculated, getting this right is critical to avoiding errors.",
    concepts: [
      "Percentage means 'out of 100'. x% = x/100.",
      "Base value: The quantity on which the percentage is calculated.",
      "Percentage change = (Change / Original) x 100.",
      "Successive percentage changes are applied one after another, not added.",
    ],
    formulas: [
      { name: "x% of y", formula: "x% of y = (x/100) x y" },
      {
        name: "Percentage Change",
        formula: "% Change = ((New - Old) / Old) x 100",
      },
      {
        name: "Percentage Increase",
        formula: "New Value = Old Value x (1 + increase%/100)",
      },
      {
        name: "Percentage Decrease",
        formula: "New Value = Old Value x (1 - decrease%/100)",
      },
      {
        name: "Successive % Change",
        formula:
          "Net effect of a% and b% = a + b + (ab/100) [use sign for increase/decrease]",
      },
      {
        name: "If A is x% more than B",
        formula: "Then B is (x/(100+x)) x 100 % less than A",
      },
    ],
    methods: [
      {
        name: "Finding Percentage of a Number",
        steps: [
          "Convert the percentage to a fraction or decimal.",
          "Multiply by the number.",
          "Example: 15% of 240 = (15/100) x 240 = 36.",
        ],
      },
      {
        name: "Finding What Percentage One Number is of Another",
        steps: [
          "Divide the part by the whole.",
          "Multiply by 100.",
          "Example: 36 is what % of 240? (36/240) x 100 = 15%.",
        ],
      },
    ],
    quickTricks: [
      "Memorize: 1/8 = 12.5%, 1/6 = 16.67%, 1/3 = 33.33%, 3/8 = 37.5%, 5/8 = 62.5%.",
      "To find x% of y, you can also find y% of x (they are equal). Choose whichever is easier.",
      "For successive changes of +a% and -a%, net change is always -a²/100 % (a net decrease).",
      "10% of any number is just moving the decimal one place left.",
      "To increase a number by 25%, multiply by 5/4. To decrease by 25%, multiply by 3/4.",
    ],
    solvedExamples: [
      {
        problem:
          "A salary of Rs. 25,000 is increased by 20% and then decreased by 10%. Find the final salary.",
        solution:
          "Step 1: After 20% increase: 25000 x 1.20 = 30000.\nStep 2: After 10% decrease: 30000 x 0.90 = 27000.\nAlternatively, net effect = 20 - 10 + (20 x -10)/100 = 20 - 10 - 2 = 8%. Final = 25000 x 1.08 = 27000.",
        answer: "Rs. 27,000",
      },
      {
        problem:
          "If the price of sugar increases by 25%, by what percent must a household reduce consumption so that expenditure remains the same?",
        solution:
          "Step 1: Let original price = P, consumption = C. Expenditure = PC.\nStep 2: New price = 1.25P. New consumption = x. New expenditure = 1.25P x x = PC.\nStep 3: x = PC / 1.25P = C / 1.25 = 0.8C.\nStep 4: Reduction = (C - 0.8C) / C x 100 = 20%.\nShortcut: Reduction% = (increase / (100 + increase)) x 100 = (25/125) x 100 = 20%.",
        answer: "20%",
      },
      {
        problem: "What is 35% of 480?",
        solution:
          "Step 1: 35% of 480 = (35/100) x 480.\nStep 2: 35 x 480 / 100 = 16800 / 100 = 168.\nQuick method: 10% of 480 = 48. 30% = 144. 5% = 24. 35% = 144 + 24 = 168.",
        answer: "168",
      },
    ],
    commonMistakes: [
      "Adding successive percentage changes directly instead of applying them sequentially.",
      "Using the wrong base value, percentage increase is on the original, not the new value.",
      "Confusing 'A is 25% more than B' with 'B is 25% less than A', they are different statements.",
    ],
    keyTakeaways: [
      "Percentage is always relative to a base value, identify the base correctly.",
      "Successive percentage changes are multiplicative, not additive.",
      "Memorize common fraction-percentage equivalents for speed.",
      "The 'x% of y = y% of x' trick can simplify many calculations.",
      "For percentage change, always divide by the original (old) value.",
    ],
  },
  {
    slug: "ratio-and-proportion",
    categorySlug: "aptitude",
    introduction:
      "Ratio and Proportion is a fundamental concept that forms the basis for many other aptitude topics like mixtures, partnership, and time-work problems. A ratio is a comparison of two quantities by division, while a proportion states that two ratios are equal.\n\nRatios are expressed as a:b, which means for every 'a' units of the first quantity, there are 'b' units of the second. Ratios can be simplified just like fractions. Proportion is an equation that says two ratios are equal: a:b = c:d, which means a/b = c/d. The four quantities a, b, c, d are in proportion, and ad = bc (cross multiplication).\n\nThis topic frequently appears in competitive exams in the form of sharing amounts in a given ratio, finding the third proportional, mean proportional, and compound ratios. A strong grip on ratio and proportion makes many other topics significantly easier.",
    concepts: [
      "Ratio a:b represents the fraction a/b.",
      "Proportion: a:b :: c:d means a/b = c/d.",
      "In a proportion a:b::c:d, ad = bc (product of extremes = product of means).",
      "Third proportional to a and b: b²/a.",
      "Mean proportional of a and b: √(ab).",
      "Compound ratio of a:b and c:d is ac:bd.",
    ],
    formulas: [
      {
        name: "Dividing in ratio",
        formula:
          "If total T is divided in ratio a:b, parts are T×a/(a+b) and T×b/(a+b)",
      },
      {
        name: "Componendo",
        formula: "If a/b = c/d, then (a+b)/b = (c+d)/d",
      },
      {
        name: "Dividendo",
        formula: "If a/b = c/d, then (a-b)/b = (c-d)/d",
      },
      {
        name: "Componendo-Dividendo",
        formula: "If a/b = c/d, then (a+b)/(a-b) = (c+d)/(c-d)",
      },
      {
        name: "Mean Proportional",
        formula: "Mean proportional of a and b = √(ab)",
      },
      {
        name: "Third Proportional",
        formula: "Third proportional to a and b = b²/a",
      },
    ],
    methods: [
      {
        name: "Dividing a Quantity in a Given Ratio",
        steps: [
          "Add all parts of the ratio to get the total parts.",
          "Divide the quantity by total parts to get one part's value.",
          "Multiply by each ratio component to get individual shares.",
        ],
      },
      {
        name: "Finding Missing Term in Proportion",
        steps: [
          "Set up the proportion as a/b = c/d.",
          "Cross multiply: a x d = b x c.",
          "Solve for the unknown variable.",
        ],
      },
    ],
    quickTricks: [
      "To compare ratios, convert them to fractions with the same denominator or cross-multiply.",
      "If a:b = 2:3 and b:c = 4:5, make b common: a:b = 8:12, b:c = 12:15, so a:b:c = 8:12:15.",
      "If income ratio is a:b and expenditure ratio is c:d, you cannot directly find savings ratio without actual values.",
      "When dividing an amount among three in ratio a:b:c, each share = Amount x (their part) / (a+b+c).",
    ],
    solvedExamples: [
      {
        problem: "Divide Rs. 1560 among A, B, C in the ratio 1/2 : 1/3 : 1/4.",
        solution:
          "Step 1: Find LCM of denominators 2, 3, 4 = 12.\nStep 2: Convert: 1/2 = 6/12, 1/3 = 4/12, 1/4 = 3/12.\nStep 3: Ratio = 6:4:3. Sum = 13.\nStep 4: A = 1560 x 6/13 = 720, B = 1560 x 4/13 = 480, C = 1560 x 3/13 = 360.",
        answer: "A = Rs. 720, B = Rs. 480, C = Rs. 360",
      },
      {
        problem:
          "If a:b = 3:4 and b:c = 6:7, find a:b:c.",
        solution:
          "Step 1: Make b the same in both ratios. b is 4 in first and 6 in second.\nStep 2: LCM of 4 and 6 = 12.\nStep 3: a:b = 3:4 = 9:12. b:c = 6:7 = 12:14.\nStep 4: Therefore a:b:c = 9:12:14.",
        answer: "9:12:14",
      },
      {
        problem: "Find the mean proportional between 9 and 16.",
        solution:
          "Step 1: Mean proportional = √(a x b) = √(9 x 16).\nStep 2: = √144 = 12.",
        answer: "12",
      },
    ],
    commonMistakes: [
      "Forgetting to make the common term equal when combining two ratios.",
      "Adding ratios of fractions without first converting to a common denominator.",
      "Assuming ratios can be directly subtracted or added like regular numbers.",
    ],
    keyTakeaways: [
      "Ratios compare relative sizes, they do not tell you the actual quantities unless you have additional information.",
      "To combine a:b and b:c into a:b:c, equalize the common term b.",
      "Proportion problems can always be solved using cross multiplication.",
      "Ratios must be in the same units before comparison.",
      "Mean proportional of a and b is the geometric mean √(ab).",
    ],
  },
  {
    slug: "time-and-work",
    categorySlug: "aptitude",
    introduction:
      "Time and Work problems deal with the relationship between the number of workers, the amount of work, and the time taken to complete it. The fundamental concept is that if a person can complete a task in 'n' days, then in one day they complete 1/n of the work.\n\nThese problems typically ask you to find how long it takes for individuals or groups to complete a task, either working alone or together. The LCM method is the most efficient approach: take the LCM of individual completion times as the total work, then find each person's per-day work rate as a whole number.\n\nVariations include people joining or leaving partway through, efficiency-based problems, and work-wages problems where payment is distributed in proportion to the amount of work done. This topic has strong connections to Pipes and Cisterns, which uses the same logic with filling/emptying instead of working.",
    concepts: [
      "If A can do a work in 'n' days, A's one day work = 1/n.",
      "Total work = Rate x Time.",
      "If A and B work together, combined rate = 1/a + 1/b.",
      "Work and wages: Wages are distributed in the ratio of work done.",
    ],
    formulas: [
      {
        name: "Combined time (A and B together)",
        formula: "Time = (a x b) / (a + b) days",
        description: "Where a and b are individual completion times",
      },
      {
        name: "Work by A alone after B leaves",
        formula: "Remaining work = 1 - (days_together x combined_rate)",
      },
      {
        name: "If A is k times as efficient as B",
        formula: "Time taken by A = Time taken by B / k",
      },
      {
        name: "MDH formula",
        formula: "M1 x D1 x H1 / W1 = M2 x D2 x H2 / W2",
        description:
          "M=men, D=days, H=hours/day, W=work done; used for comparing two scenarios",
      },
    ],
    methods: [
      {
        name: "LCM Method",
        steps: [
          "Find LCM of individual completion times, this is total work units.",
          "Calculate each person's per-day rate = Total work / their time.",
          "Add rates for combined work, then Time = Total work / combined rate.",
        ],
      },
      {
        name: "Fraction Method",
        steps: [
          "A's one day work = 1/a, B's one day work = 1/b.",
          "Together in one day = 1/a + 1/b = (a+b)/(ab).",
          "Time together = ab/(a+b).",
        ],
      },
    ],
    quickTricks: [
      "If A can do work in x days and B in y days, together they finish in xy/(x+y) days.",
      "LCM method avoids fractions: take LCM as total work, rates become integers.",
      "If A is twice as efficient as B and they together finish in t days, A alone = 3t/2, B alone = 3t.",
      "Work done = (Number of days worked) x (Per day rate). This fraction tells you what portion is done.",
    ],
    solvedExamples: [
      {
        problem:
          "A can do a piece of work in 12 days. B can do it in 18 days. In how many days will they finish it together?",
        solution:
          "Step 1: LCM of 12 and 18 = 36 (total work).\nStep 2: A's rate = 36/12 = 3 units/day. B's rate = 36/18 = 2 units/day.\nStep 3: Combined rate = 3 + 2 = 5 units/day.\nStep 4: Time = 36/5 = 7.2 days = 7 days and 4.8 hours.",
        answer: "7.2 days (or 36/5 days)",
      },
      {
        problem:
          "A can do a work in 10 days and B can do it in 15 days. They start together, but A leaves after 4 days. In how many more days will B finish the remaining work?",
        solution:
          "Step 1: LCM of 10 and 15 = 30 (total work).\nStep 2: A's rate = 3 units/day. B's rate = 2 units/day.\nStep 3: In 4 days together, work done = 4 x (3+2) = 20 units.\nStep 4: Remaining = 30 - 20 = 10 units. B alone at 2/day takes 10/2 = 5 days.",
        answer: "5 days",
      },
      {
        problem:
          "A is twice as efficient as B. Together they finish a work in 12 days. How long would A take alone?",
        solution:
          "Step 1: Let B's rate = x, then A's rate = 2x.\nStep 2: Combined rate = 3x. Total work = 3x x 12 = 36x.\nStep 3: A alone = 36x / 2x = 18 days.",
        answer: "18 days",
      },
    ],
    commonMistakes: [
      "Adding times directly (e.g., A=10 days, B=15 days, together=25 days), you must add rates, not times.",
      "Forgetting to subtract work already done when someone leaves partway through.",
      "Confusing 'twice as efficient' with 'takes twice the time', twice as efficient means half the time.",
    ],
    keyTakeaways: [
      "Always work with rates (work per day), never add times directly.",
      "The LCM method converts fractions to whole numbers, making calculations faster.",
      "If someone leaves, calculate work done together first, then remaining work divided by the remaining person's rate.",
      "Wages are always distributed in the ratio of work done, not time spent.",
      "MDH formula is useful when comparing two different scenarios of men, days, and hours.",
    ],
  },
  {
    slug: "time-and-distance",
    categorySlug: "aptitude",
    introduction:
      "Time and Distance problems are based on the fundamental relationship: Distance = Speed x Time. This seemingly simple formula gives rise to a wide variety of problems involving relative speed, average speed, unit conversions, and meeting/overtaking scenarios.\n\nThe most important conversion to remember is: 1 km/hr = 5/18 m/s. Problems often involve two objects moving towards or away from each other, requiring the concept of relative speed. When objects move in the same direction, relative speed is the difference of their speeds; when in opposite directions, it is the sum.\n\nAverage speed is another frequently tested concept. If the same distance is covered at two different speeds, the average speed is the harmonic mean: 2ab/(a+b), not the arithmetic mean. This is a common trap in exams.",
    concepts: [
      "Distance = Speed x Time.",
      "Speed = Distance / Time.",
      "Time = Distance / Speed.",
      "1 km/hr = 5/18 m/s. 1 m/s = 18/5 km/hr.",
      "Relative speed (same direction) = |s1 - s2|.",
      "Relative speed (opposite direction) = s1 + s2.",
    ],
    formulas: [
      { name: "Distance", formula: "Distance = Speed x Time" },
      {
        name: "Average Speed (same distance)",
        formula: "Average Speed = 2ab / (a + b)",
        description: "When same distance is covered at speeds a and b",
      },
      {
        name: "Unit conversion",
        formula: "km/hr to m/s: multiply by 5/18; m/s to km/hr: multiply by 18/5",
      },
      {
        name: "Meeting time (opposite directions)",
        formula: "Time = Total Distance / (s1 + s2)",
      },
      {
        name: "Overtaking time (same direction)",
        formula: "Time = Distance gap / (s1 - s2)",
      },
    ],
    methods: [
      {
        name: "Standard Calculation",
        steps: [
          "Identify what is given (any two of speed, time, distance).",
          "Ensure units are consistent (all km/hr or all m/s).",
          "Apply D = S x T to find the unknown.",
        ],
      },
      {
        name: "Relative Speed Problems",
        steps: [
          "Determine if objects move in same or opposite directions.",
          "Calculate relative speed accordingly (sum or difference).",
          "Use Time = Distance / Relative Speed.",
        ],
      },
    ],
    quickTricks: [
      "To convert km/hr to m/s, multiply by 5/18. To convert m/s to km/hr, multiply by 18/5.",
      "Average speed for equal distances at speeds a and b = 2ab/(a+b), NOT (a+b)/2.",
      "If a person covers d km at speed s1 and returns at speed s2, total time = d/s1 + d/s2.",
      "If ratio of speeds is a:b, then ratio of times (for same distance) = b:a.",
      "If speed is halved, time doubles for the same distance.",
    ],
    solvedExamples: [
      {
        problem:
          "A car covers 240 km in 4 hours. What is its speed in m/s?",
        solution:
          "Step 1: Speed in km/hr = 240/4 = 60 km/hr.\nStep 2: Convert to m/s = 60 x 5/18 = 300/18 = 50/3 = 16.67 m/s.",
        answer: "16.67 m/s (50/3 m/s)",
      },
      {
        problem:
          "A person goes from A to B at 40 km/hr and returns at 60 km/hr. Find the average speed for the entire journey.",
        solution:
          "Step 1: Since the distance is the same both ways, use harmonic mean.\nStep 2: Average speed = 2 x 40 x 60 / (40 + 60) = 4800 / 100 = 48 km/hr.",
        answer: "48 km/hr",
      },
      {
        problem:
          "Two trains start from stations A and B, 300 km apart, and move towards each other at 50 km/hr and 70 km/hr. When will they meet?",
        solution:
          "Step 1: Relative speed (opposite directions) = 50 + 70 = 120 km/hr.\nStep 2: Time to meet = 300 / 120 = 2.5 hours.",
        answer: "2.5 hours",
      },
    ],
    commonMistakes: [
      "Using arithmetic mean instead of harmonic mean for average speed over equal distances.",
      "Mixing units, using km/hr in a problem that requires m/s.",
      "Using relative speed = sum when objects move in the same direction (should be difference).",
    ],
    keyTakeaways: [
      "D = S x T is the master formula, everything else derives from it.",
      "Average speed for equal distances = 2ab/(a+b) (harmonic mean).",
      "Always check and convert units before calculating.",
      "Same direction: subtract speeds. Opposite direction: add speeds.",
      "Speed and time are inversely proportional for a fixed distance.",
    ],
  },
  {
    slug: "simple-interest",
    categorySlug: "aptitude",
    introduction:
      "Simple Interest (SI) is the most basic form of calculating interest on a principal amount. In simple interest, the interest is calculated only on the original principal for each time period, and it does not compound. This makes the calculations straightforward and linear.\n\nThe formula SI = PRT/100 connects four quantities: Principal (P), Rate of interest per annum (R), Time in years (T), and the Simple Interest itself. Given any three of these, you can find the fourth. The total amount after T years is A = P + SI = P(1 + RT/100).\n\nSimple interest problems in competitive exams often involve finding the time for money to double or triple, comparing different investment scenarios, or working backward from the amount to find the principal or rate. These problems are generally easier than compound interest but require attention to unit consistency (time in years, rate per annum).",
    concepts: [
      "Interest is calculated only on the original principal.",
      "SI grows linearly with time.",
      "Amount = Principal + Simple Interest.",
      "Rate is always per annum unless stated otherwise.",
    ],
    formulas: [
      { name: "Simple Interest", formula: "SI = P x R x T / 100" },
      { name: "Amount", formula: "A = P + SI = P(1 + RT/100)" },
      { name: "Principal", formula: "P = (100 x SI) / (R x T)" },
      { name: "Rate", formula: "R = (100 x SI) / (P x T)" },
      { name: "Time", formula: "T = (100 x SI) / (P x R)" },
      {
        name: "Time to double",
        formula: "T = 100 / R years",
        description: "Money doubles when SI = P, so P = PRT/100 gives T = 100/R",
      },
    ],
    methods: [
      {
        name: "Direct Formula Application",
        steps: [
          "Identify P, R, T from the problem statement.",
          "Ensure time is in years (convert months: divide by 12).",
          "Apply SI = PRT/100 to find the unknown.",
          "Amount = P + SI if the total is asked.",
        ],
      },
      {
        name: "Doubling/Tripling Time",
        steps: [
          "For doubling: SI = P, so PRT/100 = P, giving T = 100/R.",
          "For tripling: SI = 2P, so T = 200/R.",
          "For n times: SI = (n-1)P, so T = (n-1) x 100/R.",
        ],
      },
    ],
    quickTricks: [
      "Money doubles in T = 100/R years at simple interest.",
      "Money triples in T = 200/R years at simple interest.",
      "If SI for 2 years is Rs. X, then SI per year = X/2 and Principal can be found using P = SI x 100/(R x T).",
      "If the rate is given per month, multiply by 12 to get per annum before using the formula.",
    ],
    solvedExamples: [
      {
        problem:
          "Find the simple interest on Rs. 5000 at 8% per annum for 3 years.",
        solution:
          "Step 1: P = 5000, R = 8, T = 3.\nStep 2: SI = PRT/100 = 5000 x 8 x 3 / 100 = 120000/100 = 1200.",
        answer: "Rs. 1200",
      },
      {
        problem:
          "A sum of money doubles itself in 10 years at simple interest. What is the rate of interest?",
        solution:
          "Step 1: If money doubles, SI = P.\nStep 2: P = P x R x 10 / 100.\nStep 3: 1 = R x 10 / 100.\nStep 4: R = 100/10 = 10%.",
        answer: "10%",
      },
      {
        problem:
          "In how many years will Rs. 1200 amount to Rs. 1560 at 6% per annum simple interest?",
        solution:
          "Step 1: SI = A - P = 1560 - 1200 = 360.\nStep 2: T = 100 x SI / (P x R) = 100 x 360 / (1200 x 6) = 36000/7200 = 5 years.",
        answer: "5 years",
      },
    ],
    commonMistakes: [
      "Forgetting to convert months to years before applying the formula.",
      "Confusing Amount with Simple Interest, Amount = Principal + SI.",
      "Using compound interest logic (interest on interest) in simple interest problems.",
    ],
    keyTakeaways: [
      "SI = PRT/100 is the master formula. Know how to rearrange it for P, R, or T.",
      "Simple interest grows linearly, the interest each year is the same.",
      "Time to become n times the principal = (n-1) x 100/R years.",
      "Always ensure rate and time are in compatible units (per annum with years).",
    ],
  },
  {
    slug: "compound-interest",
    categorySlug: "aptitude",
    introduction:
      "Compound Interest (CI) is interest calculated on both the initial principal and the accumulated interest from previous periods. Unlike simple interest where interest is constant each period, compound interest grows exponentially because you earn 'interest on interest.'\n\nThe key formula is A = P(1 + R/100)^n, where A is the amount, P is the principal, R is the rate per compounding period, and n is the number of compounding periods. CI = A - P. When interest is compounded more frequently (half-yearly, quarterly), the rate is divided and periods are multiplied accordingly.\n\nCompetitive exams test CI through direct calculations, comparison with SI, finding the difference between CI and SI for 2 or 3 years, and population growth/depreciation problems that use the same compound growth formula. Memorizing the CI-SI difference formulas for 2 and 3 years can save significant time.",
    concepts: [
      "Interest is calculated on Principal + Previously accumulated interest.",
      "Compounding frequency: annual, half-yearly, quarterly, monthly.",
      "For half-yearly compounding: rate = R/2, time periods = 2n.",
      "For quarterly compounding: rate = R/4, time periods = 4n.",
      "CI always exceeds SI for the same P, R, T (when T > 1 year).",
    ],
    formulas: [
      {
        name: "Amount (annual compounding)",
        formula: "A = P(1 + R/100)^n",
      },
      { name: "Compound Interest", formula: "CI = A - P = P[(1 + R/100)^n - 1]" },
      {
        name: "CI - SI difference (2 years)",
        formula: "CI - SI = P(R/100)^2",
      },
      {
        name: "CI - SI difference (3 years)",
        formula: "CI - SI = P(R/100)^2 x (3 + R/100)",
      },
      {
        name: "Half-yearly compounding",
        formula: "A = P(1 + R/200)^(2n)",
      },
      {
        name: "Population growth",
        formula: "P_final = P_initial x (1 + R/100)^n",
      },
      {
        name: "Depreciation",
        formula: "Value = Original x (1 - R/100)^n",
      },
    ],
    methods: [
      {
        name: "Direct Calculation",
        steps: [
          "Identify P, R, n, and compounding frequency.",
          "Adjust R and n for compounding frequency if needed.",
          "Compute A = P(1 + R/100)^n.",
          "CI = A - P.",
        ],
      },
      {
        name: "Year-by-Year Calculation",
        steps: [
          "Calculate interest for Year 1: I1 = PR/100.",
          "New principal = P + I1.",
          "Calculate interest for Year 2 on new principal.",
          "Continue for each year. CI = sum of all interests.",
        ],
      },
    ],
    quickTricks: [
      "CI - SI for 2 years = SI x R / (2 x 100). Equivalently, CI - SI = P(R/100)^2.",
      "For 2 years at R%, the effective rate = 2R + R²/100 percent.",
      "Money doubles at CI in approximately 72/R years (Rule of 72).",
      "If CI for 2 years is known, SI for 2 years = CI - P(R/100)^2. Or work year-by-year.",
      "For population problems, the same formula applies: New = Old x (1 + R/100)^n.",
    ],
    solvedExamples: [
      {
        problem:
          "Find the compound interest on Rs. 10,000 at 10% per annum for 2 years.",
        solution:
          "Step 1: A = P(1 + R/100)^n = 10000(1 + 10/100)^2 = 10000 x (1.1)^2.\nStep 2: A = 10000 x 1.21 = 12100.\nStep 3: CI = A - P = 12100 - 10000 = 2100.",
        answer: "Rs. 2100",
      },
      {
        problem:
          "The difference between CI and SI on a sum at 5% per annum for 2 years is Rs. 15. Find the sum.",
        solution:
          "Step 1: CI - SI for 2 years = P(R/100)^2.\nStep 2: 15 = P x (5/100)^2 = P x 1/400.\nStep 3: P = 15 x 400 = 6000.",
        answer: "Rs. 6000",
      },
      {
        problem:
          "A town has a population of 50,000. It grows at 4% per annum. What will the population be after 3 years?",
        solution:
          "Step 1: Population = 50000 x (1 + 4/100)^3.\nStep 2: = 50000 x (1.04)^3 = 50000 x 1.124864 = 56243.2.\nStep 3: Since population must be a whole number, approximately 56243.",
        answer: "56,243 (approximately)",
      },
    ],
    commonMistakes: [
      "Using the simple interest formula when the problem says 'compounded.'",
      "Forgetting to adjust rate and time for half-yearly or quarterly compounding.",
      "Applying the CI-SI difference formula for 2 years to a 3-year problem.",
    ],
    keyTakeaways: [
      "A = P(1 + R/100)^n is the core formula for compound interest.",
      "CI is always more than SI for the same P, R, T (when T > 1).",
      "CI - SI for 2 years = P(R/100)^2, memorize this for quick solving.",
      "The Rule of 72 gives a quick estimate: money doubles in approximately 72/R years.",
      "Depreciation uses the same formula with subtraction: Value = P(1 - R/100)^n.",
    ],
  },
  {
    slug: "problems-on-trains",
    categorySlug: "aptitude",
    introduction:
      "Problems on Trains are a specialized application of Time and Distance concepts. The key difference is that trains have a physical length, which must be accounted for when calculating the distance covered while crossing a platform, bridge, pole, or another train.\n\nWhen a train passes a stationary point (pole or person), the distance covered equals the train's own length. When passing a platform or bridge, the distance equals the train's length plus the platform's length. When two trains cross each other, the distance is the sum of both their lengths.\n\nRelative speed is crucial here: if two trains move in the same direction, relative speed is the difference of their speeds; if they move in opposite directions, relative speed is the sum. These problems frequently appear in competitive exams and require quick unit conversions between km/hr and m/s.",
    concepts: [
      "A train has physical length that must be included in distance calculations.",
      "Crossing a pole: Distance = Length of train.",
      "Crossing a platform: Distance = Length of train + Length of platform.",
      "Two trains crossing: Distance = Sum of both lengths.",
      "Relative speed applies when two moving objects are involved.",
    ],
    formulas: [
      {
        name: "Time to cross a pole",
        formula: "Time = Length of train / Speed of train",
      },
      {
        name: "Time to cross a platform",
        formula: "Time = (Length of train + Length of platform) / Speed of train",
      },
      {
        name: "Two trains crossing (opposite directions)",
        formula: "Time = (L1 + L2) / (S1 + S2)",
      },
      {
        name: "Two trains crossing (same direction)",
        formula: "Time = (L1 + L2) / |S1 - S2|",
      },
      {
        name: "Speed conversion",
        formula: "km/hr to m/s: multiply by 5/18",
      },
    ],
    methods: [
      {
        name: "Single Train Crossing Problem",
        steps: [
          "Identify what the train crosses (pole, person, platform, bridge).",
          "Calculate total distance: train length (+ platform length if applicable).",
          "Convert speed to consistent units.",
          "Apply Time = Distance / Speed.",
        ],
      },
      {
        name: "Two Trains Problem",
        steps: [
          "Total distance = L1 + L2.",
          "Determine direction: same or opposite.",
          "Calculate relative speed (sum for opposite, difference for same).",
          "Time = Total distance / Relative speed.",
        ],
      },
    ],
    quickTricks: [
      "If a train crosses a pole in t seconds, its speed = Length/t m/s.",
      "If a train crosses a platform of length P in T seconds and a pole in t seconds, platform length P = Length x (T-t)/t.",
      "Two trains of equal length L crossing in opposite directions at equal speed S: Time = 2L/(2S) = L/S.",
      "Always convert km/hr to m/s (multiply by 5/18) when lengths are in meters.",
    ],
    solvedExamples: [
      {
        problem:
          "A train 150 m long passes a pole in 10 seconds. Find its speed in km/hr.",
        solution:
          "Step 1: Distance = 150 m, Time = 10 s.\nStep 2: Speed = 150/10 = 15 m/s.\nStep 3: Convert to km/hr = 15 x 18/5 = 54 km/hr.",
        answer: "54 km/hr",
      },
      {
        problem:
          "A train 200 m long running at 72 km/hr crosses a platform in 25 seconds. Find the length of the platform.",
        solution:
          "Step 1: Speed = 72 x 5/18 = 20 m/s.\nStep 2: Distance covered = Speed x Time = 20 x 25 = 500 m.\nStep 3: Distance = Train length + Platform length, so Platform = 500 - 200 = 300 m.",
        answer: "300 m",
      },
      {
        problem:
          "Two trains of length 100 m and 150 m are running in opposite directions at 60 km/hr and 48 km/hr. In how many seconds will they cross each other?",
        solution:
          "Step 1: Total distance = 100 + 150 = 250 m.\nStep 2: Relative speed = 60 + 48 = 108 km/hr = 108 x 5/18 = 30 m/s.\nStep 3: Time = 250/30 = 25/3 = 8.33 seconds.",
        answer: "8.33 seconds (25/3 s)",
      },
    ],
    commonMistakes: [
      "Forgetting to add the platform/bridge length to the train's length.",
      "Using the wrong relative speed direction (adding when same direction or subtracting when opposite).",
      "Not converting km/hr to m/s when the answer is needed in seconds.",
    ],
    keyTakeaways: [
      "Always include the train's own length in the distance calculation.",
      "Crossing a pole: distance = train length. Crossing a platform: distance = train + platform.",
      "Two trains: distance = sum of lengths, speed = relative speed.",
      "Convert km/hr to m/s by multiplying by 5/18 for problems with meter/second units.",
      "These problems are just Time-Distance problems with the extra step of accounting for physical lengths.",
    ],
  },
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
    slug: "area",
    categorySlug: "aptitude",
    introduction:
      "Area is the measure of the space enclosed within a two-dimensional shape. Problems on area require knowledge of formulas for common geometric shapes like rectangles, squares, triangles, circles, parallelograms, trapeziums, and rhombuses.\n\nArea calculations are essential in real-world applications such as flooring, painting, farming, and construction. In competitive exams, questions often involve finding the area of composite shapes (combinations of basic shapes), calculating the area of a path or border around a shape, or relating area to perimeter.\n\nUnderstanding the relationship between dimensions and area is key. For example, if each side of a square is doubled, the area becomes four times the original. These scaling relationships are commonly tested. Also, many problems require converting units (e.g., cm² to m²) so unit awareness is critical.",
    concepts: [
      "Area is measured in square units (cm², m², km²).",
      "Perimeter is the total boundary length of a shape.",
      "For similar shapes, if dimensions scale by k, area scales by k².",
      "Area of a path = Area of outer shape - Area of inner shape.",
    ],
    formulas: [
      { name: "Rectangle", formula: "Area = length x breadth; Perimeter = 2(l + b)" },
      { name: "Square", formula: "Area = side²; Perimeter = 4 x side" },
      { name: "Triangle", formula: "Area = 1/2 x base x height" },
      {
        name: "Triangle (Heron's formula)",
        formula: "Area = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2",
      },
      { name: "Equilateral Triangle", formula: "Area = (√3/4) x side²" },
      { name: "Circle", formula: "Area = πr²; Circumference = 2πr" },
      { name: "Semicircle", formula: "Area = πr²/2; Perimeter = πr + 2r" },
      { name: "Parallelogram", formula: "Area = base x height" },
      { name: "Trapezium", formula: "Area = 1/2 x (sum of parallel sides) x height" },
      { name: "Rhombus", formula: "Area = 1/2 x d1 x d2 (product of diagonals / 2)" },
    ],
    methods: [
      {
        name: "Direct Formula Application",
        steps: [
          "Identify the shape from the problem.",
          "Note the given dimensions.",
          "Apply the appropriate area formula.",
          "Convert units if needed.",
        ],
      },
      {
        name: "Composite Shape Problems",
        steps: [
          "Break the figure into basic shapes.",
          "Calculate the area of each basic shape.",
          "Add or subtract areas as needed.",
        ],
      },
      {
        name: "Path/Border Problems",
        steps: [
          "Find the outer dimensions (original + 2 x path width on each side).",
          "Area of path = Area of outer shape - Area of inner shape.",
        ],
      },
    ],
    quickTricks: [
      "Area of a square = diagonal²/2.",
      "If the radius of a circle doubles, area becomes 4 times.",
      "Area of an equilateral triangle with side a = (√3/4)a² ≈ 0.433a².",
      "For a rectangle with given perimeter, the square has the maximum area.",
      "1 hectare = 10,000 m². 1 km² = 100 hectares.",
    ],
    solvedExamples: [
      {
        problem:
          "Find the area of a triangle with sides 13, 14, and 15 cm.",
        solution:
          "Step 1: s = (13 + 14 + 15) / 2 = 21.\nStep 2: Area = √[s(s-a)(s-b)(s-c)] = √[21 x 8 x 7 x 6].\nStep 3: = √[21 x 8 x 7 x 6] = √7056 = 84 cm².",
        answer: "84 cm²",
      },
      {
        problem:
          "A rectangular garden 60 m x 40 m has a path of width 5 m around it. Find the area of the path.",
        solution:
          "Step 1: Outer dimensions = (60 + 10) x (40 + 10) = 70 x 50 = 3500 m².\nStep 2: Inner area = 60 x 40 = 2400 m².\nStep 3: Area of path = 3500 - 2400 = 1100 m².",
        answer: "1100 m²",
      },
      {
        problem:
          "The circumference of a circle is 44 cm. Find its area.",
        solution:
          "Step 1: 2πr = 44, so r = 44/(2 x 22/7) = 44 x 7/44 = 7 cm.\nStep 2: Area = πr² = 22/7 x 49 = 154 cm².",
        answer: "154 cm²",
      },
    ],
    commonMistakes: [
      "Confusing area (square units) with perimeter (linear units).",
      "In path problems, forgetting to add path width to BOTH sides, so outer length = l + 2w, not l + w.",
      "Using diameter instead of radius in circle area formula.",
    ],
    keyTakeaways: [
      "Memorize area formulas for all standard shapes.",
      "For composite shapes, decompose into basic shapes and add/subtract.",
      "Scaling: if dimensions multiply by k, area multiplies by k².",
      "Path area = Outer area - Inner area.",
      "Always check that your units are consistent and your final answer is in square units.",
    ],
  },
  {
    slug: "volume-and-surface-area",
    categorySlug: "aptitude",
    introduction:
      "Volume and Surface Area deal with three-dimensional objects such as cubes, cuboids, cylinders, cones, spheres, and hemispheres. Volume measures the space occupied by a solid, while surface area measures the total area of its outer surface.\n\nThese concepts have practical applications in packaging, construction, storage, and manufacturing. Competitive exams test your ability to compute volumes and surface areas quickly, and often present problems involving water filling containers, melting and recasting solids, or painting surfaces.\n\nA key concept is the relationship between scaling and volume/surface area. If all linear dimensions of a solid are multiplied by k, the surface area scales by k² and the volume scales by k³. This scaling principle is frequently used in problems involving similar solids.",
    concepts: [
      "Volume is measured in cubic units (cm³, m³, litres).",
      "Surface area is measured in square units.",
      "1 litre = 1000 cm³. 1 m³ = 1000 litres.",
      "Lateral surface area excludes the top and bottom faces.",
      "Total surface area includes all faces.",
    ],
    formulas: [
      { name: "Cube volume", formula: "V = a³; TSA = 6a²; LSA = 4a²" },
      { name: "Cuboid volume", formula: "V = lbh; TSA = 2(lb + bh + lh); LSA = 2h(l + b)" },
      { name: "Cylinder volume", formula: "V = πr²h; TSA = 2πr(r + h); CSA = 2πrh" },
      { name: "Cone volume", formula: "V = (1/3)πr²h; TSA = πr(r + l); CSA = πrl, where l = √(r² + h²)" },
      { name: "Sphere volume", formula: "V = (4/3)πr³; SA = 4πr²" },
      { name: "Hemisphere volume", formula: "V = (2/3)πr³; TSA = 3πr²; CSA = 2πr²" },
    ],
    methods: [
      {
        name: "Direct Calculation",
        steps: [
          "Identify the 3D shape from the problem.",
          "Note the given dimensions.",
          "Apply the appropriate formula for volume or surface area.",
          "Convert units if necessary (especially cm³ to litres).",
        ],
      },
      {
        name: "Melting and Recasting",
        steps: [
          "Calculate the volume of the original solid.",
          "Volume of the new solid = Volume of the original (material is conserved).",
          "Use the new shape's formula to find the missing dimension.",
        ],
      },
    ],
    quickTricks: [
      "Diagonal of a cuboid = √(l² + b² + h²). Diagonal of a cube = a√3.",
      "If a sphere is melted into a cylinder of the same radius, height = 4r/3.",
      "Volume of a cone is exactly 1/3 of the cylinder with the same base and height.",
      "For water filling problems, 1 litre = 1000 cm³ = 1000 ml.",
      "If dimensions scale by k: volume scales by k³, surface area scales by k².",
    ],
    solvedExamples: [
      {
        problem:
          "Find the volume and total surface area of a cylinder with radius 7 cm and height 10 cm. (Use π = 22/7)",
        solution:
          "Step 1: Volume = πr²h = (22/7) x 7² x 10 = (22/7) x 49 x 10 = 1540 cm³.\nStep 2: TSA = 2πr(r + h) = 2 x (22/7) x 7 x (7 + 10) = 2 x 22 x 17 = 748 cm².",
        answer: "Volume = 1540 cm³, TSA = 748 cm²",
      },
      {
        problem:
          "A metallic sphere of radius 6 cm is melted and recast into a cone of radius 6 cm. Find the height of the cone.",
        solution:
          "Step 1: Volume of sphere = (4/3)πr³ = (4/3)π(6)³ = (4/3)π(216) = 288π.\nStep 2: Volume of cone = (1/3)πr²h = (1/3)π(36)h = 12πh.\nStep 3: 288π = 12πh, so h = 24 cm.",
        answer: "24 cm",
      },
      {
        problem:
          "A cube has a total surface area of 150 cm². Find its volume.",
        solution:
          "Step 1: TSA of cube = 6a² = 150.\nStep 2: a² = 25, so a = 5 cm.\nStep 3: Volume = a³ = 125 cm³.",
        answer: "125 cm³",
      },
    ],
    commonMistakes: [
      "Confusing lateral/curved surface area with total surface area.",
      "Forgetting to use the slant height (l) for cone surface area instead of the vertical height (h).",
      "Not converting units properly, especially cm³ to litres (divide by 1000).",
    ],
    keyTakeaways: [
      "Memorize volume and surface area formulas for all standard 3D shapes.",
      "Volume is conserved in melting/recasting problems.",
      "Cone volume = 1/3 of cylinder volume with same base and height.",
      "Scaling by factor k: surface area x k², volume x k³.",
      "Always verify units, volume in cubic, surface area in square units.",
    ],
  },
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
    slug: "partnership",
    categorySlug: "aptitude",
    introduction:
      "Partnership problems deal with how profits (or losses) are shared among business partners based on their investment and the duration for which the investment is maintained. This topic combines ratio concepts with business context.\n\nIn a simple partnership, all partners invest for the same duration, so profits are shared in the ratio of their investments. In a compound partnership, partners invest for different durations, so the profit share is proportional to the product of investment and time (capital x time).\n\nThese problems are straightforward once you understand the core principle: your share of profit is proportional to your 'investment units' (capital multiplied by time). Working partners who also manage the business may receive a salary or commission in addition to their profit share, which must be deducted before distributing the remaining profit.",
    concepts: [
      "Simple partnership: All invest for same time. Profit ratio = Investment ratio.",
      "Compound partnership: Different investment periods. Profit ratio = (Capital x Time) ratio.",
      "Working partner may get salary + share of remaining profit.",
      "Sleeping partner gets only their share of profit.",
    ],
    formulas: [
      {
        name: "Simple partnership profit ratio",
        formula: "A's share : B's share = A's investment : B's investment",
      },
      {
        name: "Compound partnership profit ratio",
        formula: "A's share : B's share = (A's capital x A's time) : (B's capital x B's time)",
      },
      {
        name: "Individual share",
        formula: "A's share = Total Profit x A's ratio part / Sum of ratio parts",
      },
    ],
    methods: [
      {
        name: "Standard Partnership Calculation",
        steps: [
          "Calculate each partner's investment units = capital x time.",
          "Form the ratio of investment units.",
          "Distribute the profit in this ratio.",
        ],
      },
      {
        name: "Working Partner with Salary",
        steps: [
          "Deduct the working partner's salary from total profit.",
          "Distribute the remaining profit in the investment ratio.",
          "Working partner's total = salary + their share of remaining profit.",
        ],
      },
    ],
    quickTricks: [
      "If A invests Rs. x for p months and B invests Rs. y for q months, ratio = xp : yq.",
      "If all invest for the same period, you can ignore the time factor.",
      "To find investment given profit shares, work backward: investment ratio = profit ratio / time ratio.",
      "Monthly changing investments: calculate each phase separately and add.",
    ],
    solvedExamples: [
      {
        problem:
          "A invests Rs. 5000 for 12 months and B invests Rs. 8000 for 9 months. If the total profit is Rs. 6800, find each person's share.",
        solution:
          "Step 1: A's investment units = 5000 x 12 = 60000.\nStep 2: B's investment units = 8000 x 9 = 72000.\nStep 3: Ratio = 60000 : 72000 = 5 : 6.\nStep 4: A's share = 6800 x 5/11 = 3090.9 ≈ Rs. 3091.\nStep 5: B's share = 6800 x 6/11 = 3709.1 ≈ Rs. 3709.",
        answer: "A ≈ Rs. 3091, B ≈ Rs. 3709",
      },
      {
        problem:
          "A, B, and C invest in a business in the ratio 3:5:7. If C's share of profit is Rs. 1400 more than A's share, find the total profit.",
        solution:
          "Step 1: Ratio = 3:5:7. Total parts = 15.\nStep 2: C's share - A's share = 7k - 3k = 4k = 1400, so k = 350.\nStep 3: Total profit = 15k = 15 x 350 = Rs. 5250.",
        answer: "Rs. 5250",
      },
    ],
    commonMistakes: [
      "Ignoring the time factor when partners invest for different periods.",
      "Forgetting to deduct working partner salary before splitting the remaining profit.",
      "Using profit ratio to find investments without accounting for different time periods.",
    ],
    keyTakeaways: [
      "Profit share is proportional to Capital x Time.",
      "Simple partnership (same time): ratio of capitals = ratio of profits.",
      "Compound partnership: ratio of (capital x time) = ratio of profits.",
      "Working partner's total income = Salary + their share of remaining profit.",
      "Always simplify the ratio before distributing to reduce calculation errors.",
    ],
  },
  {
    slug: "chain-rule",
    categorySlug: "aptitude",
    introduction:
      "The Chain Rule (also called the Direct-Inverse Variation method) is a powerful technique for solving problems involving multiple interrelated quantities. It helps determine how a change in one or more quantities affects another quantity.\n\nThe key concept is understanding direct and inverse proportionality. If more workers finish a job faster, workers and time are inversely proportional. If more workers produce more output, workers and output are directly proportional. The Chain Rule sets up a proportion chain that accounts for all these relationships simultaneously.\n\nThis method is particularly useful for complex problems involving men, days, hours, work output, and other variables where the MDH formula (M1D1H1/W1 = M2D2H2/W2) becomes cumbersome. By identifying which quantities are directly or inversely proportional to the unknown, you can set up the solution systematically.",
    concepts: [
      "Direct proportion: as one quantity increases, the other increases in the same ratio.",
      "Inverse proportion: as one quantity increases, the other decreases in the same ratio.",
      "Chain Rule links multiple proportional relationships to solve for an unknown.",
    ],
    formulas: [
      {
        name: "Direct proportion",
        formula: "If x ∝ y, then x1/x2 = y1/y2",
      },
      {
        name: "Inverse proportion",
        formula: "If x ∝ 1/y, then x1/x2 = y2/y1",
      },
      {
        name: "Chain Rule general",
        formula: "Unknown = Known x (product of direct ratios) x (product of inverse ratios)",
      },
    ],
    methods: [
      {
        name: "Chain Rule Method",
        steps: [
          "Identify the unknown quantity.",
          "List all other given quantities with their two scenarios.",
          "For each quantity, determine if it is directly or inversely proportional to the unknown.",
          "Set up: Unknown = Known value x product of appropriate ratios.",
          "For direct proportion: new/old. For inverse proportion: old/new.",
        ],
      },
    ],
    quickTricks: [
      "More men → less days (inverse). More hours/day → less days (inverse). More work → more days (direct).",
      "Think logically: if increasing something should increase the answer, it's direct proportion.",
      "The MDH formula M1D1H1/W1 = M2D2H2/W2 is a special case of the Chain Rule.",
      "For food/consumption problems: more men → less days food lasts (inverse).",
    ],
    solvedExamples: [
      {
        problem:
          "If 15 men can do a piece of work in 20 days working 8 hours a day, how many men are needed to do double the work in 10 days working 12 hours a day?",
        solution:
          "Step 1: We need to find the number of men.\nStep 2: Work: 1 → 2 (double, direct proportion: more work needs more men). Ratio = 2/1.\nStep 3: Days: 20 → 10 (less days, inverse: less time needs more men). Ratio = 20/10.\nStep 4: Hours: 8 → 12 (more hours, inverse: more hours means fewer men needed). Ratio = 8/12.\nStep 5: Men = 15 x (2/1) x (20/10) x (8/12) = 15 x 2 x 2 x 2/3 = 40.",
        answer: "40 men",
      },
      {
        problem:
          "A garrison of 500 men has provisions for 24 days. After 4 days, 100 more men join. How many more days will the food last?",
        solution:
          "Step 1: After 4 days, food left = for 500 men for 20 days.\nStep 2: Now men = 600. Same food.\nStep 3: Days = (500 x 20) / 600 = 10000/600 = 16.67 days.",
        answer: "16⅔ days (approximately 16 days and 16 hours)",
      },
    ],
    commonMistakes: [
      "Getting direct and inverse proportion mixed up, always think logically about the relationship.",
      "Forgetting to account for one of the variables in a multi-variable problem.",
      "Not adjusting for work already done before conditions change.",
    ],
    keyTakeaways: [
      "Identify whether each quantity is directly or inversely proportional to the unknown.",
      "Direct: ratio = new/old. Inverse: ratio = old/new.",
      "The Chain Rule generalizes the MDH formula for more complex scenarios.",
      "Think logically: 'more X means more Y' = direct; 'more X means less Y' = inverse.",
      "Always reduce ratios before multiplying to simplify calculations.",
    ],
  },
  {
    slug: "pipes-and-cistern",
    categorySlug: "aptitude",
    introduction:
      "Pipes and Cistern problems are analogous to Time and Work problems. Instead of workers completing a job, pipes fill or empty a tank (cistern). An inlet pipe fills the tank, while an outlet pipe (leak) empties it.\n\nIf a pipe can fill a tank in n hours, it fills 1/n of the tank per hour. If a leak can empty a full tank in m hours, it empties 1/m per hour. When both work simultaneously, the net effect is the difference: 1/n - 1/m per hour (if filling is faster) or negative (if emptying is faster).\n\nThese problems often involve multiple inlet and outlet pipes working together, pipes being opened or closed at different times, and finding when the tank gets full or empty. The LCM method (same as in Time and Work) is very effective here, take LCM of all times as the tank capacity for clean integer arithmetic.",
    concepts: [
      "Inlet pipe fills the tank; outlet pipe empties it.",
      "Rate of filling = 1/(time to fill entire tank).",
      "Rate of emptying = 1/(time to empty entire tank).",
      "Net rate = Sum of filling rates - Sum of emptying rates.",
    ],
    formulas: [
      {
        name: "Combined time (two inlet pipes)",
        formula: "Time = (a x b) / (a + b)",
        description: "Pipes filling in a and b hours individually",
      },
      {
        name: "Net rate with inlet and outlet",
        formula: "Net rate = 1/a - 1/b (a fills, b empties; a < b for eventual fill)",
      },
      {
        name: "Time with both inlet and outlet",
        formula: "Time = (a x b) / (b - a) [if b > a, tank fills; if a > b, tank empties]",
      },
    ],
    methods: [
      {
        name: "LCM Method",
        steps: [
          "Find LCM of all filling/emptying times = Tank capacity.",
          "Each pipe's rate = capacity / its time (positive for inlet, negative for outlet).",
          "Net rate = sum of all rates.",
          "Time = Capacity / Net rate.",
        ],
      },
      {
        name: "Sequential Pipe Operation",
        steps: [
          "Calculate work done in each phase (different pipes open).",
          "Add up work done across phases.",
          "When total work = tank capacity, the tank is full.",
        ],
      },
    ],
    quickTricks: [
      "If pipe A fills in a hours and pipe B empties in b hours, net time = ab/(b-a) hours (b > a).",
      "If a pipe fills a tank in n hours, in 1 hour it fills 1/n of the tank.",
      "A leak increases the filling time. Extra time due to leak indicates the leak rate.",
      "Use the LCM method for clean calculations, avoids fractions entirely.",
    ],
    solvedExamples: [
      {
        problem:
          "Two pipes A and B can fill a tank in 12 and 15 hours respectively. If both are opened together, how long will it take to fill the tank?",
        solution:
          "Step 1: LCM(12, 15) = 60 (tank capacity).\nStep 2: A's rate = 60/12 = 5 units/hr. B's rate = 60/15 = 4 units/hr.\nStep 3: Combined = 9 units/hr.\nStep 4: Time = 60/9 = 20/3 = 6 hours 40 minutes.",
        answer: "6 hours 40 minutes",
      },
      {
        problem:
          "A pipe can fill a tank in 10 hours. Due to a leak, it takes 12 hours. In how many hours can the leak empty a full tank?",
        solution:
          "Step 1: Pipe's rate = 1/10. Combined rate (pipe + leak) = 1/12.\nStep 2: Leak's rate = 1/10 - 1/12 = (6-5)/60 = 1/60.\nStep 3: Leak empties the full tank in 60 hours.",
        answer: "60 hours",
      },
      {
        problem:
          "Pipe A fills a tank in 6 hours, pipe B in 8 hours, and pipe C empties it in 12 hours. If all three are opened, how long to fill the tank?",
        solution:
          "Step 1: LCM(6, 8, 12) = 24 (capacity).\nStep 2: A = 24/6 = 4, B = 24/8 = 3, C = -24/12 = -2.\nStep 3: Net rate = 4 + 3 - 2 = 5 units/hr.\nStep 4: Time = 24/5 = 4.8 hours = 4 hours 48 minutes.",
        answer: "4 hours 48 minutes",
      },
    ],
    commonMistakes: [
      "Treating an outlet pipe as positive instead of negative when calculating net rate.",
      "Adding times instead of rates, two pipes filling in 10 and 15 hours don't fill together in 25 hours.",
      "Forgetting that a leak means the emptying time is longer, not shorter.",
    ],
    keyTakeaways: [
      "Pipes and Cistern is essentially Time and Work with filling/emptying.",
      "Inlet = positive rate, Outlet = negative rate.",
      "Net rate = sum of all inlet rates - sum of all outlet rates.",
      "Use the LCM method for integer arithmetic.",
      "If filling takes longer than expected, a leak is present.",
    ],
  },
  {
    slug: "boats-and-streams",
    categorySlug: "aptitude",
    introduction:
      "Boats and Streams problems deal with the effect of water current on the speed of a boat. When a boat moves downstream (in the direction of the current), the current aids the boat, increasing its effective speed. When moving upstream (against the current), the current opposes the boat, reducing its effective speed.\n\nIf the speed of the boat in still water is 'b' and the speed of the stream (current) is 's', then: Downstream speed = b + s, Upstream speed = b - s. From these, we can derive: b = (downstream + upstream)/2 and s = (downstream - upstream)/2.\n\nThese problems are a special application of the Time and Distance concept with the added element of current. They frequently appear in competitive exams and can be extended to problems involving swimmers, planes with wind (tailwind/headwind), and other similar scenarios.",
    concepts: [
      "Still water speed: speed of boat when there is no current.",
      "Downstream: boat moves with the current (faster).",
      "Upstream: boat moves against the current (slower).",
      "Current speed is uniform throughout the stream.",
    ],
    formulas: [
      { name: "Downstream speed", formula: "D = b + s" },
      { name: "Upstream speed", formula: "U = b - s" },
      { name: "Speed of boat in still water", formula: "b = (D + U) / 2" },
      { name: "Speed of stream", formula: "s = (D - U) / 2" },
      {
        name: "Round trip time",
        formula: "Total time = d/(b+s) + d/(b-s) = 2bd/(b²-s²)",
        description: "d = one-way distance",
      },
    ],
    methods: [
      {
        name: "Finding Speed of Boat and Stream",
        steps: [
          "Find downstream speed D and upstream speed U from given data.",
          "Speed of boat = (D + U) / 2.",
          "Speed of stream = (D - U) / 2.",
        ],
      },
      {
        name: "Round Trip Problems",
        steps: [
          "Downstream time = distance / (b + s).",
          "Upstream time = distance / (b - s).",
          "Total time = sum of both.",
        ],
      },
    ],
    quickTricks: [
      "If downstream speed is D and upstream speed is U, boat speed = (D+U)/2, stream speed = (D-U)/2.",
      "For a round trip of distance d, total time = 2bd/(b²-s²).",
      "If a boat takes the same time to go d1 downstream as d2 upstream, then d1/d2 = (b+s)/(b-s).",
      "A man's rowing speed in still water equals his upstream speed plus the current speed.",
    ],
    solvedExamples: [
      {
        problem:
          "A boat covers 36 km downstream in 4 hours and 24 km upstream in 4 hours. Find the speed of the boat in still water and the speed of the current.",
        solution:
          "Step 1: Downstream speed = 36/4 = 9 km/hr.\nStep 2: Upstream speed = 24/4 = 6 km/hr.\nStep 3: Boat speed = (9 + 6)/2 = 7.5 km/hr.\nStep 4: Current speed = (9 - 6)/2 = 1.5 km/hr.",
        answer: "Boat = 7.5 km/hr, Current = 1.5 km/hr",
      },
      {
        problem:
          "A man can row at 8 km/hr in still water. If the river flows at 2 km/hr, how long will it take to row 30 km upstream and return?",
        solution:
          "Step 1: Upstream speed = 8 - 2 = 6 km/hr. Time = 30/6 = 5 hours.\nStep 2: Downstream speed = 8 + 2 = 10 km/hr. Time = 30/10 = 3 hours.\nStep 3: Total time = 5 + 3 = 8 hours.",
        answer: "8 hours",
      },
    ],
    commonMistakes: [
      "Subtracting stream speed for downstream and adding for upstream, it's the opposite.",
      "Using average speed formula for round trip instead of calculating each leg separately.",
      "Forgetting that the boat cannot go upstream if stream speed exceeds boat speed (b must be > s).",
    ],
    keyTakeaways: [
      "Downstream = b + s, Upstream = b - s.",
      "Boat speed = (D + U)/2, Stream speed = (D - U)/2.",
      "Round trip time = upstream time + downstream time (cannot average speeds).",
      "The boat can only move upstream if its speed exceeds the current speed.",
      "These concepts extend to planes with wind: tailwind = downstream, headwind = upstream.",
    ],
  },
  {
    slug: "alligation-or-mixture",
    categorySlug: "aptitude",
    introduction:
      "Alligation is a method used to find the ratio in which two or more ingredients at different prices (or concentrations) must be mixed to get a mixture at a desired price (or concentration). The Alligation Rule provides a visual and mathematical shortcut for mixture problems.\n\nThe rule states: if two ingredients of price p1 and p2 are mixed to get a mixture of mean price pm, the ratio of quantities is (p2 - pm) : (pm - p1). This can be remembered using the cross-difference or criss-cross method. The ingredient with the higher price is always taken in a smaller quantity and vice versa.\n\nMixture problems extend to solutions (mixing liquids of different concentrations), replacement problems (where part of a mixture is removed and replaced with another liquid), and repeated dilution. The replacement formula is particularly important: after n operations of removing and replacing, concentration = original x (1 - k/V)^n, where k = quantity replaced each time and V = total volume.",
    concepts: [
      "Alligation: finding the mixing ratio given individual and mean prices.",
      "Mixture: combining ingredients of different qualities/prices.",
      "Mean price: the effective price/concentration of the final mixture.",
      "Replacement: removing part of mixture and adding a different ingredient.",
    ],
    formulas: [
      {
        name: "Alligation Rule",
        formula: "Ratio = (p2 - pm) : (pm - p1)",
        description: "p1 < pm < p2; ratio of cheaper : dearer",
      },
      {
        name: "Weighted average (mixture)",
        formula: "pm = (q1.p1 + q2.p2) / (q1 + q2)",
      },
      {
        name: "Repeated replacement",
        formula: "Final concentration = Initial x (1 - k/V)^n",
        description: "k = quantity removed/replaced, V = total volume, n = number of operations",
      },
    ],
    methods: [
      {
        name: "Alligation (Criss-Cross) Method",
        steps: [
          "Write the two prices/concentrations and the mean price.",
          "Take cross-differences: |p2 - pm| and |pm - p1|.",
          "The ratio of quantities (cheaper : dearer) = (p2 - pm) : (pm - p1).",
        ],
      },
      {
        name: "Replacement Method",
        steps: [
          "Let V = total volume, k = amount replaced each time.",
          "After each operation, the fraction remaining = (V-k)/V.",
          "After n operations, concentration = original x ((V-k)/V)^n.",
        ],
      },
    ],
    quickTricks: [
      "Alligation works for price, concentration, percentage, speed, any weighted average scenario.",
      "If mixing in ratio m:n, mean value = (m.v1 + n.v2)/(m+n).",
      "In replacement: after 1 operation, pure quantity left = Initial x (V-k)/V.",
      "If 1/n of the solution is replaced by water each time, after k times: concentration = original x ((n-1)/n)^k.",
    ],
    solvedExamples: [
      {
        problem:
          "In what ratio must tea at Rs. 60/kg be mixed with tea at Rs. 90/kg to get a mixture worth Rs. 70/kg?",
        solution:
          "Step 1: Using alligation: Cheaper = 60, Dearer = 90, Mean = 70.\nStep 2: Ratio = (90 - 70) : (70 - 60) = 20 : 10 = 2 : 1.",
        answer: "2:1 (cheaper : dearer)",
      },
      {
        problem:
          "A 40-litre mixture contains milk and water in the ratio 3:1. How much water must be added to make the ratio 3:2?",
        solution:
          "Step 1: Milk = 40 x 3/4 = 30 litres. Water = 40 x 1/4 = 10 litres.\nStep 2: Let x litres of water be added. New water = 10 + x.\nStep 3: Milk : Water = 30 : (10+x) = 3 : 2.\nStep 4: 30/2 = (10+x)/1 ... actually, 30/(10+x) = 3/2.\nStep 5: 60 = 3(10+x) = 30 + 3x. 3x = 30. x = 10.",
        answer: "10 litres",
      },
      {
        problem:
          "A container has 80 litres of pure milk. 8 litres are removed and replaced with water. This is done 3 times. How much milk is left?",
        solution:
          "Step 1: Using replacement formula: Milk = 80 x (1 - 8/80)^3.\nStep 2: = 80 x (72/80)^3 = 80 x (9/10)^3.\nStep 3: = 80 x 729/1000 = 58.32 litres.",
        answer: "58.32 litres",
      },
    ],
    commonMistakes: [
      "Confusing which ratio the alligation gives, it gives the ratio of quantities (cheaper:dearer), not prices.",
      "In replacement problems, forgetting that you remove mixture (not pure ingredient) each time.",
      "Not realizing that alligation can be applied to speeds, percentages, etc., not just prices.",
    ],
    keyTakeaways: [
      "Alligation ratio = (dearer - mean) : (mean - cheaper).",
      "Alligation works for any weighted average problem.",
      "Replacement formula: Final = Initial x (1 - k/V)^n.",
      "In replacement, what is removed is mixture (proportionally), not just one component.",
      "After mixing, always verify that the mean value lies between the individual values.",
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
  {
    slug: "height-and-distance",
    categorySlug: "aptitude",
    introduction:
      "Height and Distance problems use trigonometric ratios to find unknown heights, distances, and angles. These problems involve angles of elevation (looking upward from horizontal) and angles of depression (looking downward from horizontal).\n\nThe core trigonometric ratios are: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent. For most competitive exam problems, you only need the values of sin, cos, and tan for standard angles: 30°, 45°, and 60°.\n\nTypical problems involve finding the height of a tower, building, or tree given the angle of elevation from a certain distance, or finding the distance between two points given an angle of depression from a height. Some problems involve two observation points or objects moving toward/away from the base, requiring the setup of two right triangles that share a common side.",
    concepts: [
      "Angle of elevation: angle from horizontal looking UP at an object.",
      "Angle of depression: angle from horizontal looking DOWN at an object.",
      "Angle of depression from A to B = Angle of elevation from B to A (alternate angles).",
      "All height-distance problems are solved using right triangle trigonometry.",
    ],
    formulas: [
      { name: "tan θ", formula: "tan θ = Perpendicular / Base = Height / Distance" },
      { name: "sin θ", formula: "sin θ = Perpendicular / Hypotenuse" },
      { name: "cos θ", formula: "cos θ = Base / Hypotenuse" },
      { name: "Standard values", formula: "tan 30° = 1/√3, tan 45° = 1, tan 60° = √3" },
      { name: "More values", formula: "sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2" },
    ],
    methods: [
      {
        name: "Single Right Triangle",
        steps: [
          "Draw the figure with the right angle, height, and base.",
          "Identify the angle (elevation or depression).",
          "Use tan θ = height/distance (most common) to find the unknown.",
        ],
      },
      {
        name: "Two Triangle Problems",
        steps: [
          "Draw the figure with both observation points.",
          "Set up tan equations for each angle.",
          "Use the common side (usually the height) to link the two equations.",
          "Solve simultaneously.",
        ],
      },
    ],
    quickTricks: [
      "tan 45° = 1 means height = distance. If angle is 45°, it is an isosceles right triangle.",
      "tan 30° = 1/√3 ≈ 0.577. tan 60° = √3 ≈ 1.732.",
      "If angle of elevation increases, you are moving closer to the base.",
      "The shadow length of an object = height / tan(angle of elevation of the sun).",
      "For most exam problems, tan is the only ratio you need.",
    ],
    solvedExamples: [
      {
        problem:
          "A tower is 50 m high. Find the angle of elevation of the top from a point 50 m away from the base.",
        solution:
          "Step 1: tan θ = height / distance = 50/50 = 1.\nStep 2: θ = tan⁻¹(1) = 45°.",
        answer: "45°",
      },
      {
        problem:
          "From the top of a 60 m building, the angle of depression to a car on the ground is 30°. How far is the car from the building?",
        solution:
          "Step 1: Angle of depression = 30°, so angle of elevation from the car = 30°.\nStep 2: tan 30° = height/distance = 60/d.\nStep 3: 1/√3 = 60/d, so d = 60√3 ≈ 103.92 m.",
        answer: "60√3 m ≈ 103.92 m",
      },
      {
        problem:
          "The angle of elevation of the top of a tower from a point changes from 60° to 30° when the observer moves 40 m away from the tower. Find the height of the tower.",
        solution:
          "Step 1: Let height = h, initial distance = d.\nStep 2: From first point: tan 60° = h/d → √3 = h/d → d = h/√3.\nStep 3: From second point: tan 30° = h/(d+40) → 1/√3 = h/(d+40) → d + 40 = h√3.\nStep 4: Substitute d = h/√3: h/√3 + 40 = h√3.\nStep 5: 40 = h√3 - h/√3 = h(√3 - 1/√3) = h(3-1)/√3 = 2h/√3.\nStep 6: h = 40√3/2 = 20√3 ≈ 34.64 m.",
        answer: "20√3 m ≈ 34.64 m",
      },
    ],
    commonMistakes: [
      "Confusing angle of elevation with angle of depression, draw the figure first.",
      "Using sin or cos when tan is the appropriate ratio (height and distance are perpendicular and base).",
      "Forgetting standard trigonometric values for 30°, 45°, 60°.",
    ],
    keyTakeaways: [
      "Always draw the figure and mark the right angle, known sides, and angles.",
      "tan θ = opposite/adjacent = height/distance is the most used formula.",
      "Memorize tan values: tan 30° = 1/√3, tan 45° = 1, tan 60° = √3.",
      "Angle of depression from top = Angle of elevation from bottom.",
      "Two-triangle problems share a common side, use it to connect equations.",
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
    slug: "stocks-and-shares",
    categorySlug: "aptitude",
    introduction:
      "Stocks and Shares is a topic that deals with investments in the stock market. The key terms are face value (or par value), market value, dividend, and yield. The face value is the original value printed on the share, while the market value is the current trading price.\n\nDividend is the annual income earned on a share, always calculated as a percentage of the face value (not market value). If a Rs. 100 share pays a 10% dividend, the annual income is Rs. 10 per share, regardless of the market price. The yield (or return) is the effective rate of return based on the market value: Yield = (Annual Income / Market Value) x 100.\n\nShares are said to be 'at par' if market value equals face value, 'at premium' if market value exceeds face value, and 'at discount' if market value is less than face value. Problems typically ask you to calculate income, number of shares, investment amount, or compare different investment options.",
    concepts: [
      "Face value (par value): nominal value printed on the share.",
      "Market value: current trading price of the share.",
      "Dividend: income per share, calculated on face value.",
      "At par: market value = face value. Premium: market > face. Discount: market < face.",
      "Brokerage: commission paid to broker, added to purchase price or deducted from selling price.",
    ],
    formulas: [
      {
        name: "Annual income",
        formula: "Income = (Dividend% x Face Value x Number of Shares) / 100",
      },
      {
        name: "Number of shares",
        formula: "Shares = Total Investment / Market Value per share",
      },
      {
        name: "Yield (Return%)",
        formula: "Yield% = (Annual Income per share / Market Value) x 100",
      },
      {
        name: "Income from investment",
        formula: "Income = (Investment / Market Value) x (Dividend% x Face Value / 100)",
      },
    ],
    methods: [
      {
        name: "Calculating Investment and Income",
        steps: [
          "Identify face value, market value, and dividend rate.",
          "Number of shares = Investment / Market value.",
          "Income per share = Dividend% x Face value / 100.",
          "Total income = Number of shares x Income per share.",
        ],
      },
      {
        name: "Comparing Investments",
        steps: [
          "For each option, calculate income per unit invested.",
          "Income per Rs. 100 invested = (Dividend% x Face Value) / Market Value.",
          "The option with higher income per unit is better.",
        ],
      },
    ],
    quickTricks: [
      "Dividend is ALWAYS on face value. Yield is income relative to market value.",
      "Rs. 100 share at 10% means Rs. 10 income per share regardless of market price.",
      "A 'Rs. 100 share at Rs. 120' means face value 100, market value 120 (at premium of 20).",
      "To maximize return, buy shares with the highest (dividend/market price) ratio.",
    ],
    solvedExamples: [
      {
        problem:
          "A man invests Rs. 9600 in Rs. 100 shares at Rs. 80. If the company pays 12% dividend, find his annual income.",
        solution:
          "Step 1: Number of shares = 9600/80 = 120.\nStep 2: Income per share = 12% of 100 = Rs. 12.\nStep 3: Total income = 120 x 12 = Rs. 1440.",
        answer: "Rs. 1440",
      },
      {
        problem:
          "Which is a better investment: 8% stock at 90 or 9% stock at 95? (Face value Rs. 100)",
        solution:
          "Step 1: Option 1: Income per Rs. 90 invested = Rs. 8. Rate = (8/90) x 100 = 8.89%.\nStep 2: Option 2: Income per Rs. 95 invested = Rs. 9. Rate = (9/95) x 100 = 9.47%.\nStep 3: 9% stock at 95 gives better return.",
        answer: "9% stock at 95 is better",
      },
    ],
    commonMistakes: [
      "Calculating dividend on market value instead of face value.",
      "Confusing yield (return on investment) with the dividend rate.",
      "Forgetting to include brokerage in the effective purchase/selling price.",
    ],
    keyTakeaways: [
      "Dividend is always calculated on the face value, never the market value.",
      "Yield = (Income / Market Value) x 100 gives the effective return rate.",
      "At discount (market < face): yield > dividend%. At premium: yield < dividend%.",
      "To compare investments, compute income per unit of money invested.",
      "Brokerage increases effective buying price and decreases effective selling price.",
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
  {
    slug: "true-discount",
    categorySlug: "aptitude",
    introduction:
      "True Discount (TD) is a concept from financial mathematics related to the present value of money. If a sum of money is due after a certain time, its present value (PV) is the amount which, if invested today at a given rate of simple interest, would grow to the due amount in that time. The True Discount is the difference between the amount due and its present value.\n\nTrue Discount = Amount Due - Present Value. It is essentially the simple interest on the present value for the given time and rate. This is different from the common practice of calculating discount on the amount due (which is Banker's Discount).\n\nThe key relationships are: TD = SI on PV, Amount = PV + TD, and TD = (Amount x R x T) / (100 + RT). These problems often ask you to find PV, TD, or the relationship between TD and SI on the amount. True discount is a theoretical concept that represents the 'fair' discount.",
    concepts: [
      "Present Value (PV): the current worth of a future payment.",
      "True Discount (TD): the difference between Amount Due and Present Value.",
      "TD = Simple Interest on PV for the given rate and time.",
      "Amount Due = PV + TD.",
    ],
    formulas: [
      {
        name: "True Discount",
        formula: "TD = (Amount x R x T) / (100 + R x T)",
      },
      {
        name: "Present Value",
        formula: "PV = (Amount x 100) / (100 + R x T)",
      },
      {
        name: "TD as SI on PV",
        formula: "TD = PV x R x T / 100",
      },
      {
        name: "Relationship: TD, SI on Amount",
        formula: "TD = SI on Amount - SI on TD. Or: SI x PV = TD x Amount.",
      },
      {
        name: "SI and TD relationship",
        formula: "SI on Amount = TD + (TD x R x T / 100)",
      },
    ],
    methods: [
      {
        name: "Finding True Discount",
        steps: [
          "Identify Amount (A), Rate (R), and Time (T).",
          "Apply TD = A x R x T / (100 + RT).",
          "Or find PV first: PV = A x 100 / (100 + RT), then TD = A - PV.",
        ],
      },
      {
        name: "Finding Present Value",
        steps: [
          "Use PV = A x 100 / (100 + RT).",
          "This is the amount you would invest today to get A after T years at R% SI.",
        ],
      },
    ],
    quickTricks: [
      "TD = SI on PV. Banker's Discount = SI on Amount. BD > TD always.",
      "If TD and SI on a sum are given, Amount = SI x TD / (SI - TD).",
      "PV + TD = Amount. TD = Amount - PV.",
      "The relationship between SI (on amount) and TD: SI = TD + SI on TD.",
    ],
    solvedExamples: [
      {
        problem:
          "Find the present value of Rs. 1060 due in 2 years at 5% per annum simple interest.",
        solution:
          "Step 1: PV = A x 100 / (100 + RT) = 1060 x 100 / (100 + 5 x 2).\nStep 2: = 106000 / 110 = Rs. 963.64.",
        answer: "Rs. 963.64 (approximately)",
      },
      {
        problem:
          "The true discount on a bill due 9 months hence at 12% per annum is Rs. 270. Find the amount of the bill.",
        solution:
          "Step 1: T = 9/12 = 3/4 year. R = 12%.\nStep 2: TD = A x R x T / (100 + RT) → 270 = A x 12 x 3/4 / (100 + 12 x 3/4).\nStep 3: 270 = A x 9 / (100 + 9) = 9A/109.\nStep 4: A = 270 x 109/9 = 3270.",
        answer: "Rs. 3270",
      },
    ],
    commonMistakes: [
      "Confusing True Discount with Banker's Discount, TD is on PV, BD is on Amount.",
      "Using the Amount instead of PV when calculating SI for True Discount.",
      "Forgetting to convert months to years in the time period.",
    ],
    keyTakeaways: [
      "True Discount = Amount - Present Value = SI on PV.",
      "PV = Amount x 100 / (100 + RT).",
      "TD is the 'fair' discount; Banker's Discount is always more than TD.",
      "SI on Amount = TD + SI on TD.",
      "These problems are common in banking and bill discounting scenarios.",
    ],
  },
  {
    slug: "bankers-discount",
    categorySlug: "aptitude",
    introduction:
      "Banker's Discount (BD) is the simple interest on the face value (amount due) of a bill for the unexpired time. It is what a banker charges when a bill is discounted (cashed before its due date). Unlike True Discount which is calculated on the present value, Banker's Discount is calculated on the amount due.\n\nBanker's Discount is always greater than True Discount because it is SI on the full amount, while TD is SI on the smaller present value. The difference between BD and TD is called the Banker's Gain (BG), and it equals the SI on the True Discount: BG = BD - TD = SI on TD.\n\nThese concepts are used in commercial banking for bill discounting. When a trader has a bill due in the future, they can get it cashed at a bank by accepting a discount. The bank charges BD, but the fair discount would be TD, the difference (BG) is the banker's extra profit.",
    concepts: [
      "Banker's Discount = SI on the Amount (face value) for the given time.",
      "True Discount = SI on the Present Value for the given time.",
      "BD > TD always.",
      "Banker's Gain = BD - TD = SI on TD.",
    ],
    formulas: [
      {
        name: "Banker's Discount",
        formula: "BD = A x R x T / 100",
        description: "A = face value/amount due",
      },
      {
        name: "True Discount",
        formula: "TD = A x R x T / (100 + RT)",
      },
      {
        name: "Banker's Gain",
        formula: "BG = BD - TD = TD² / PV = TD x R x T / 100",
      },
      {
        name: "TD from BG",
        formula: "TD = √(BG x PV) = √(BG x A x 100 / (100 + RT))",
      },
      {
        name: "Amount from TD and BG",
        formula: "A = TD² / BG",
      },
    ],
    methods: [
      {
        name: "Calculating BD, TD, and BG",
        steps: [
          "Identify Amount (A), Rate (R), Time (T).",
          "BD = A x R x T / 100.",
          "TD = A x R x T / (100 + RT).",
          "BG = BD - TD.",
        ],
      },
      {
        name: "Finding Amount from BG and TD",
        steps: [
          "Use BG = TD² / PV, and PV = A - TD.",
          "Or directly: A = TD² / BG.",
          "Verify: BD = TD + BG.",
        ],
      },
    ],
    quickTricks: [
      "BD = SI on Amount. TD = SI on PV. BG = SI on TD.",
      "BD - TD = Banker's Gain. This is the banker's profit.",
      "Amount = TD²/BG, useful shortcut.",
      "If BD, TD are known: PV = TD x Amount / BD = TD²/(BD - TD).",
    ],
    solvedExamples: [
      {
        problem:
          "Find the Banker's Discount and True Discount on Rs. 1000 due in 1 year at 10% per annum.",
        solution:
          "Step 1: BD = A x R x T / 100 = 1000 x 10 x 1 / 100 = Rs. 100.\nStep 2: TD = A x R x T / (100 + RT) = 1000 x 10 x 1 / (100 + 10) = 10000/110 = Rs. 90.91.\nStep 3: BG = BD - TD = 100 - 90.91 = Rs. 9.09.",
        answer: "BD = Rs. 100, TD = Rs. 90.91, BG = Rs. 9.09",
      },
      {
        problem:
          "The Banker's Gain on a bill due 2 years hence at 5% per annum is Rs. 8. Find the True Discount.",
        solution:
          "Step 1: BG = TD x R x T / 100 → 8 = TD x 5 x 2 / 100 = TD/10.\nStep 2: TD = 80.",
        answer: "Rs. 80",
      },
      {
        problem:
          "The True Discount on a bill is Rs. 120 and the Banker's Gain is Rs. 3.60. Find the face value of the bill.",
        solution:
          "Step 1: Amount = TD² / BG = 120² / 3.60 = 14400 / 3.60 = 4000.",
        answer: "Rs. 4000",
      },
    ],
    commonMistakes: [
      "Confusing BD (SI on Amount) with TD (SI on PV).",
      "Thinking BD < TD, Banker's Discount is always MORE than True Discount.",
      "Not remembering that BG = BD - TD = SI on TD.",
    ],
    keyTakeaways: [
      "BD = SI on face value (amount due). TD = SI on present value.",
      "BD > TD. The difference (BG) is the banker's profit.",
      "BG = TD²/PV. Amount = TD²/BG.",
      "BD = TD + BG. Always verify this relationship.",
      "These concepts are practical in banking for bill discounting and trade finance.",
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
    slug: "geometry",
    categorySlug: "aptitude",
    introduction:
      "Geometry deals with the properties and relationships of points, lines, angles, and shapes. For competitive exams, the focus is on properties of triangles, circles, quadrilaterals, and the relationships between angles formed by parallel lines and transversals.\n\nKey triangle properties include: the angle sum property (angles add up to 180°), the exterior angle theorem (exterior angle = sum of opposite interior angles), and special properties of isosceles, equilateral, and right triangles. The Pythagorean theorem (a² + b² = c² for right triangles) is one of the most frequently used results.\n\nCircle geometry involves understanding chords, tangents, arcs, sectors, and the relationships between angles subtended by arcs. Important results include: the angle in a semicircle is 90°, tangent is perpendicular to the radius at the point of contact, and the lengths of tangents from an external point are equal. Quadrilateral properties (parallelogram, rectangle, square, rhombus, trapezium) complete the essential toolkit.",
    concepts: [
      "Sum of angles in a triangle = 180°.",
      "Exterior angle = sum of opposite interior angles.",
      "Pythagorean theorem: In a right triangle, hypotenuse² = base² + perpendicular².",
      "Sum of angles in a quadrilateral = 360°.",
      "Tangent to a circle is perpendicular to the radius at the point of contact.",
    ],
    formulas: [
      { name: "Pythagorean theorem", formula: "c² = a² + b² (right triangle)" },
      {
        name: "Basic Proportionality Theorem",
        formula: "If a line is parallel to one side of a triangle, it divides the other two sides proportionally",
      },
      { name: "Mid-point theorem", formula: "Line joining midpoints of two sides is parallel to the third side and half its length" },
      {
        name: "Angle at center",
        formula: "Angle at center = 2 x angle at circumference (for same arc)",
      },
      { name: "Tangent-secant", formula: "Tangent² = External segment x Whole secant" },
      {
        name: "Sum of interior angles of polygon",
        formula: "(n - 2) x 180° for an n-sided polygon",
      },
    ],
    methods: [
      {
        name: "Triangle Problem Solving",
        steps: [
          "Identify the type of triangle (right, isosceles, equilateral, scalene).",
          "Apply the angle sum property to find missing angles.",
          "Use the Pythagorean theorem for right triangles.",
          "Apply similarity or congruence criteria as needed.",
        ],
      },
      {
        name: "Circle Problem Solving",
        steps: [
          "Identify the relevant elements (chord, tangent, secant, arc).",
          "Apply the appropriate circle theorem.",
          "Use angle properties (inscribed angle, central angle, etc.).",
        ],
      },
    ],
    quickTricks: [
      "Common Pythagorean triplets: (3,4,5), (5,12,13), (8,15,17), (7,24,25). Multiples also work.",
      "In an equilateral triangle, height = (√3/2) x side.",
      "Angle in a semicircle is always 90°.",
      "Tangent lengths from an external point are equal.",
      "For similar triangles, ratio of areas = square of ratio of corresponding sides.",
    ],
    solvedExamples: [
      {
        problem:
          "In a triangle, if two angles are 65° and 75°, find the third angle.",
        solution:
          "Step 1: Sum of angles = 180°.\nStep 2: Third angle = 180° - 65° - 75° = 40°.",
        answer: "40°",
      },
      {
        problem:
          "A ladder 13 m long leans against a wall. The foot of the ladder is 5 m from the wall. How high does the ladder reach on the wall?",
        solution:
          "Step 1: This forms a right triangle: ladder = hypotenuse = 13, base = 5.\nStep 2: Height² = 13² - 5² = 169 - 25 = 144.\nStep 3: Height = √144 = 12 m.",
        answer: "12 m",
      },
      {
        problem:
          "Two tangents are drawn from a point 15 cm from the center of a circle with radius 9 cm. Find the length of each tangent.",
        solution:
          "Step 1: Tangent is perpendicular to radius. So we have a right triangle with hypotenuse = 15 and one side = 9.\nStep 2: Tangent² = 15² - 9² = 225 - 81 = 144.\nStep 3: Tangent = 12 cm.",
        answer: "12 cm",
      },
    ],
    commonMistakes: [
      "Applying the Pythagorean theorem to non-right triangles.",
      "Confusing the angle at center (2x) with the inscribed angle (x) for the same arc.",
      "Forgetting that the tangent-radius angle is always 90°.",
    ],
    keyTakeaways: [
      "Triangle angle sum = 180°. Quadrilateral angle sum = 360°.",
      "Pythagorean theorem only applies to right triangles.",
      "Similar triangles: sides are proportional, areas are in ratio of squares of sides.",
      "Circle theorems are essential, angle in semicircle = 90°, tangent perpendicular to radius.",
      "Memorize common Pythagorean triplets for quick recognition.",
    ],
  },
  {
    slug: "trigonometry",
    categorySlug: "aptitude",
    introduction:
      "Trigonometry is the study of relationships between the sides and angles of triangles. The six trigonometric ratios, sine, cosine, tangent, cosecant, secant, and cotangent, are defined for an acute angle in a right triangle as ratios of different pairs of sides.\n\nFor a right triangle with angle θ: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent. The reciprocal ratios are: csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ. The fundamental identity sin²θ + cos²θ = 1 connects sine and cosine.\n\nFor competitive exams, you need to memorize the values of trigonometric ratios for standard angles (0°, 30°, 45°, 60°, 90°), know the important identities, and be able to simplify trigonometric expressions. Most aptitude problems involve simplification using identities rather than complex trigonometric equations.",
    concepts: [
      "sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent.",
      "csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ.",
      "tan θ = sin θ / cos θ, cot θ = cos θ / sin θ.",
      "Complementary angles: sin(90°-θ) = cos θ, cos(90°-θ) = sin θ.",
    ],
    formulas: [
      { name: "Pythagorean identity", formula: "sin²θ + cos²θ = 1" },
      { name: "Second identity", formula: "1 + tan²θ = sec²θ" },
      { name: "Third identity", formula: "1 + cot²θ = csc²θ" },
      {
        name: "Standard values table",
        formula: "sin: 0,1/2,1/√2,√3/2,1 for 0°,30°,45°,60°,90°. cos is reverse.",
      },
      {
        name: "tan values",
        formula: "tan: 0, 1/√3, 1, √3, ∞ for 0°,30°,45°,60°,90°",
      },
    ],
    methods: [
      {
        name: "Simplifying Trigonometric Expressions",
        steps: [
          "Convert all ratios to sin and cos.",
          "Apply identities (sin²+cos²=1, etc.) to simplify.",
          "Factor and cancel common terms.",
        ],
      },
      {
        name: "Evaluating at Standard Angles",
        steps: [
          "Substitute the standard angle value.",
          "Use the memorized values of sin, cos, tan.",
          "Simplify the arithmetic.",
        ],
      },
    ],
    quickTricks: [
      "To remember sin values for 0°-90°: √0/2, √1/2, √2/2, √3/2, √4/2 = 0, 1/2, 1/√2, √3/2, 1.",
      "cos values are sin values in reverse order.",
      "sin(90°-θ) = cos θ. This converts between complementary angles instantly.",
      "sec²θ - tan²θ = 1 and csc²θ - cot²θ = 1. Useful for factoring: (sec θ + tan θ)(sec θ - tan θ) = 1.",
      "tan 45° = 1 is the most commonly used value in height and distance problems.",
    ],
    solvedExamples: [
      {
        problem: "Find the value of sin²45° + cos²45°.",
        solution:
          "Step 1: sin 45° = 1/√2, cos 45° = 1/√2.\nStep 2: sin²45° + cos²45° = 1/2 + 1/2 = 1.\nNote: This is just the identity sin²θ + cos²θ = 1.",
        answer: "1",
      },
      {
        problem: "If sin θ = 3/5, find cos θ and tan θ (θ is acute).",
        solution:
          "Step 1: sin²θ + cos²θ = 1 → (3/5)² + cos²θ = 1 → 9/25 + cos²θ = 1.\nStep 2: cos²θ = 16/25 → cos θ = 4/5 (positive, since θ is acute).\nStep 3: tan θ = sin θ / cos θ = (3/5)/(4/5) = 3/4.",
        answer: "cos θ = 4/5, tan θ = 3/4",
      },
      {
        problem: "Simplify: (sec θ + tan θ)(sec θ - tan θ).",
        solution:
          "Step 1: This is of the form (a+b)(a-b) = a² - b².\nStep 2: = sec²θ - tan²θ = 1 (by identity).",
        answer: "1",
      },
    ],
    commonMistakes: [
      "Confusing sin and cos for complementary angles, sin 60° = cos 30°, not sin 30°.",
      "Forgetting that tan 90° and sec 90° are undefined.",
      "Applying Pythagorean identity incorrectly, it is sin²+cos²=1, not sin+cos=1.",
    ],
    keyTakeaways: [
      "Memorize sin/cos/tan for 0°, 30°, 45°, 60°, 90°.",
      "sin²θ + cos²θ = 1 is the fundamental identity.",
      "Convert everything to sin and cos for simplification.",
      "Complementary angle property: sin(90°-θ) = cos θ.",
      "sec²-tan² = 1 and csc²-cot² = 1 are quick factoring tools.",
    ],
  },
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
