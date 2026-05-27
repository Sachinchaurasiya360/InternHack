import type { TopicTheory } from "./types";

export const aptitudeTheoryCommercial: TopicTheory[] = [
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
];
