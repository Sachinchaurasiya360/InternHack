import type { TopicTheory } from "./types";

export const dataInterpretationTheory: TopicTheory[] = [
  // ──────────────────────────────────────────────
  // 1. Table Charts
  // ──────────────────────────────────────────────
  {
    slug: "table-charts",
    categorySlug: "data-interpretation",
    introduction:
      "Table charts are one of the most fundamental and frequently tested formats in data interpretation. A table organizes data into rows and columns, where each row typically represents a category (such as a company, city, or year) and each column represents a measured attribute (such as revenue, population, or percentage). Unlike graphical representations, tables present exact numerical values, making them ideal for precise calculations.\n\nIn placement exams and competitive tests, table-based DI sets usually present 4 to 6 rows and 3 to 5 columns of data, followed by 3 to 5 questions that require you to compute percentages, ratios, averages, or rank values. The key challenge is not the complexity of the math but the speed at which you can locate the right cells, extract the numbers, and perform arithmetic under time pressure.\n\nMastering table charts requires two skills: quickly scanning the table to identify relevant data points, and performing mental math with shortcuts like percentage approximation and ratio simplification. Since tables give you exact values rather than estimated readings from a graph, accuracy is expected in your answers. Practice reading tables systematically, column by column, before diving into the questions.",

    concepts: [
      "A table is a structured arrangement of data in rows (horizontal) and columns (vertical), where each cell holds a specific data value.",
      "Row headers identify categories (e.g., years, departments, products), while column headers identify attributes (e.g., sales, profit, count).",
      "Questions on tables typically ask for percentage change, ratio between values, average of a row or column, ranking, or the difference between highest and lowest values.",
      "Always read the table title and column headers first to understand what units and scale the data is in (thousands, lakhs, crores, etc.).",
      "Some tables include totals or sub-totals in an extra row or column; verify whether these are present before computing your own totals.",
    ],

    formulas: [
      {
        name: "Percentage",
        formula: "Percentage = (Part / Whole) x 100",
        description:
          "Used to find what fraction of a total a particular value represents, expressed as a percentage.",
      },
      {
        name: "Percentage Change",
        formula:
          "Percentage Change = ((New Value - Old Value) / Old Value) x 100",
        description:
          "Measures increase or decrease between two values. A positive result means growth; negative means decline.",
      },
      {
        name: "Average (Arithmetic Mean)",
        formula: "Average = Sum of all values / Number of values",
        description:
          "Used when a question asks for the mean of a row, column, or any subset of table values.",
      },
      {
        name: "Ratio",
        formula: "Ratio of A to B = A : B (simplify by dividing both by GCD)",
        description:
          "Compares two quantities. Always simplify ratios to their lowest terms.",
      },
      {
        name: "Difference and Absolute Difference",
        formula: "Difference = A - B; Absolute Difference = |A - B|",
        description:
          "Used for finding the gap between two values. Absolute difference ignores sign.",
      },
    ],

    methods: [
      {
        name: "Systematic Table Reading",
        steps: [
          "Read the title and footnotes to understand the context, units, and scale of the data.",
          "Scan column headers to know what each column represents.",
          "Scan row headers to know the categories being compared.",
          "Before solving any question, identify exactly which cells you need by matching the row and column from the question.",
          "Extract the required numbers and then apply the appropriate formula.",
        ],
      },
      {
        name: "Solving Percentage-Based Questions",
        steps: [
          "Identify the two values being compared (old and new, or part and whole).",
          "Locate these values in the correct cells of the table.",
          "Apply the percentage or percentage change formula.",
          "Use approximation if the options are spread far apart; compute exactly if options are close.",
          "Double-check that you have not confused rows or columns.",
        ],
      },
      {
        name: "Solving Ranking / Comparison Questions",
        steps: [
          "Identify the column or row that the ranking is based on.",
          "Scan through all values in that row or column quickly.",
          "Mark or note the highest and lowest values mentally.",
          "If the question asks for the second highest or a specific rank, sort the values mentally or on scratch paper.",
          "Verify your answer by cross-checking the value against the table.",
        ],
      },
    ],

    rules: [
      "Always check the units mentioned in the table header (e.g., 'in thousands' means multiply displayed values by 1,000).",
      "When computing totals, include only the relevant rows or columns, not any pre-computed total rows.",
      "For percentage change questions, the base (denominator) is always the earlier or original value.",
      "Never assume missing values are zero unless explicitly stated.",
    ],

    quickTricks: [
      "To find 10% of a number, simply move the decimal one place to the left. For 5%, halve the 10% result. For 15%, add 10% and 5%.",
      "To approximate a fraction as a percentage: 1/3 is about 33.3%, 1/4 is 25%, 1/5 is 20%, 1/6 is about 16.7%, 1/8 is 12.5%.",
      "When comparing ratios, cross-multiply to avoid decimal division. For A/B vs C/D, compare A x D with B x C.",
      "For percentage change between close numbers, use the shortcut: change / base, and estimate using known fraction-to-percent conversions.",
      "When the question asks 'approximately', round values to the nearest convenient number before calculating to save time.",
    ],

    solvedExamples: [
      {
        problem:
          "The following table shows the number of laptops sold by 5 stores in 4 quarters:\n\n| Store   | Q1  | Q2  | Q3  | Q4  |\n|---------|-----|-----|-----|-----|\n| Alpha   | 120 | 150 | 180 | 200 |\n| Beta    | 200 | 180 | 160 | 220 |\n| Gamma   | 90  | 110 | 130 | 170 |\n| Delta   | 150 | 140 | 160 | 150 |\n| Epsilon | 180 | 200 | 210 | 190 |\n\nQuestion: What is the percentage increase in sales of Store Gamma from Q1 to Q4?",
        solution:
          "Step 1: Identify the values. Store Gamma Q1 = 90, Q4 = 170.\nStep 2: Calculate the change: 170 - 90 = 80.\nStep 3: Apply percentage change formula: (80 / 90) x 100 = 88.89%.\nStep 4: The percentage increase is approximately 88.89%.",
        answer: "Approximately 88.89%",
      },
      {
        problem:
          "Using the same table above, what is the average number of laptops sold across all stores in Q2?",
        solution:
          "Step 1: List Q2 values for all stores: Alpha = 150, Beta = 180, Gamma = 110, Delta = 140, Epsilon = 200.\nStep 2: Calculate the sum: 150 + 180 + 110 + 140 + 200 = 780.\nStep 3: Divide by number of stores: 780 / 5 = 156.\nStep 4: The average laptops sold in Q2 is 156.",
        answer: "156",
      },
      {
        problem:
          "Using the same table, what is the ratio of total sales of Store Beta to total sales of Store Delta across all four quarters?",
        solution:
          "Step 1: Total for Beta: 200 + 180 + 160 + 220 = 760.\nStep 2: Total for Delta: 150 + 140 + 160 + 150 = 600.\nStep 3: Ratio = 760 : 600. Simplify by dividing both by 20: 38 : 30. Simplify further by dividing both by 2: 19 : 15.\nStep 4: The ratio of Beta's total sales to Delta's total sales is 19 : 15.",
        answer: "19 : 15",
      },
    ],

    commonMistakes: [
      "Mixing up rows and columns when extracting values, especially under time pressure. Always trace your finger from the row header across to the correct column.",
      "Forgetting to account for the scale factor mentioned in the table header (e.g., 'figures in lakhs'). This leads to incorrect absolute calculations even if relative answers like percentages remain correct.",
      "Using the wrong base value in percentage change calculations. The base is always the original or earlier value, not the final value.",
    ],

    keyTakeaways: [
      "Tables provide exact data, so your calculations should also be exact unless the question says 'approximately'.",
      "Always read the table title, headers, and footnotes before attempting any question.",
      "Master mental math shortcuts for percentages and ratios to save critical time in exams.",
      "When in doubt, re-read the question to confirm which row, column, and operation are required.",
      "Practice scanning tables quickly to find minimum, maximum, and trends without reading every cell.",
    ],
  },

  // ──────────────────────────────────────────────
  // 2. Bar Charts
  // ──────────────────────────────────────────────
  {
    slug: "bar-charts",
    categorySlug: "data-interpretation",
    introduction:
      "Bar charts are one of the most common graphical representations in data interpretation. They use rectangular bars of varying heights (or lengths, in horizontal bar charts) to represent data values. Each bar corresponds to a category, and the length or height of the bar is proportional to the value it represents. Bar charts are excellent for visual comparison across categories or time periods.\n\nIn placement exams, bar chart questions test your ability to quickly read approximate values from the vertical or horizontal axis, compare bars visually, and perform calculations such as percentage change, total, and average. Stacked bar charts (where each bar is divided into segments) and grouped bar charts (where multiple bars sit side by side for each category) are also common and add an extra layer of complexity.\n\nThe most important skill for bar chart questions is accurate reading of the scale. Since you are estimating values from a graph rather than reading exact numbers from a table, small misreads can lead to wrong answers. Always pay attention to the scale intervals on the axis, and use gridlines if available. When answer options are close together, read values more carefully; when they are spread apart, approximation is sufficient.",

    concepts: [
      "Each bar represents a category or time period, and its height (or length) corresponds to a numerical value on the axis.",
      "The axis with the scale (usually the y-axis in vertical bar charts) determines the value. The other axis shows category labels.",
      "Grouped bar charts place multiple bars side by side for each category, allowing comparison of different series within the same category.",
      "Stacked bar charts divide each bar into segments representing sub-categories. The total bar height represents the sum of all sub-values.",
      "The baseline of a bar chart is typically zero. If the baseline is shifted, note this carefully as it can distort visual comparisons.",
    ],

    formulas: [
      {
        name: "Percentage Change",
        formula:
          "Percentage Change = ((New Value - Old Value) / Old Value) x 100",
        description:
          "Used to calculate how much a value increased or decreased between two bars (e.g., consecutive years).",
      },
      {
        name: "Average of Bar Values",
        formula: "Average = Sum of all bar values / Number of bars",
        description:
          "Calculate the mean value across multiple bars in a series.",
      },
      {
        name: "Proportion / Share",
        formula: "Share (%) = (Value of one bar / Total of all bars) x 100",
        description:
          "Used in stacked or grouped bar charts to find the contribution of one component to the total.",
      },
      {
        name: "Growth Rate (CAGR approximation)",
        formula: "Approximate CAGR = ((Final / Initial)^(1/n) - 1) x 100",
        description:
          "For bar charts showing data over multiple years, this estimates the compound annual growth rate. In exams, a simpler overall percentage change is usually sufficient.",
      },
    ],

    methods: [
      {
        name: "Reading Bar Chart Values Accurately",
        steps: [
          "Check the title to understand what the chart represents.",
          "Read the y-axis (or x-axis for horizontal bars) scale carefully, noting the intervals and units.",
          "Identify gridlines and use them as reference points for estimating bar heights.",
          "For bars that fall between two gridlines, estimate proportionally (e.g., a bar halfway between 40 and 60 is approximately 50).",
          "Write down extracted values before computing to avoid re-reading the chart multiple times.",
        ],
      },
      {
        name: "Comparing Values Across Bars",
        steps: [
          "Identify the bars being compared from the question.",
          "Read both bar values from the scale.",
          "Compute the difference (subtraction) or ratio (division) as required.",
          "For percentage-based comparisons, apply the percentage change formula using the correct base value.",
          "Verify your reading by checking if the visual difference between bars matches your computed difference.",
        ],
      },
      {
        name: "Solving Stacked Bar Chart Questions",
        steps: [
          "Understand the legend to know which segment represents which sub-category.",
          "To find the value of an individual segment, subtract the bottom boundary of that segment from its top boundary.",
          "To find the total for a category, read the top of the entire bar.",
          "For percentage contribution of a segment, divide the segment value by the total bar value and multiply by 100.",
          "Be careful: the bottom of a segment is not always zero unless it is the lowest segment in the stack.",
        ],
      },
    ],

    rules: [
      "Always check whether the y-axis starts at zero. A non-zero baseline can make small differences look large.",
      "In grouped bar charts, use the legend to distinguish which bar represents which series before reading values.",
      "When the question says 'approximately', do not spend time trying to read exact values; reasonable estimates are acceptable.",
      "For stacked bars, read segment sizes by subtraction, not by assuming each segment starts at zero.",
    ],

    quickTricks: [
      "If two bars differ by about half the height of one bar, the taller bar is roughly 150% of the shorter one (50% increase).",
      "To quickly estimate percentage change: if a bar doubles, it is a 100% increase; if it becomes 1.5 times, it is a 50% increase.",
      "For average calculations, if bars are roughly equal, the average is approximately equal to any one bar. Adjust mentally for outliers.",
      "When comparing multiple bars, first eliminate obviously wrong options by visual estimation before computing exact values.",
      "For percentage of total in a stacked bar, quickly check if the segment is about half (50%), a third (33%), or a quarter (25%) of the total bar height.",
    ],

    solvedExamples: [
      {
        problem:
          "A bar chart shows the revenue (in crores) of a company over 5 years:\n\n| Year | Revenue |\n|------|---------|\n| 2019 | 40      |\n| 2020 | 35      |\n| 2021 | 50      |\n| 2022 | 65      |\n| 2023 | 80      |\n\nQuestion: What is the percentage increase in revenue from 2020 to 2023?",
        solution:
          "Step 1: Revenue in 2020 = 35 crores, Revenue in 2023 = 80 crores.\nStep 2: Increase = 80 - 35 = 45 crores.\nStep 3: Percentage increase = (45 / 35) x 100 = 128.57%.\nStep 4: The revenue increased by approximately 128.57% from 2020 to 2023.",
        answer: "Approximately 128.57%",
      },
      {
        problem:
          "A grouped bar chart shows the number of male and female employees in 3 departments:\n\n| Department | Male | Female |\n|------------|------|--------|\n| HR         | 30   | 45     |\n| IT         | 80   | 40     |\n| Finance    | 50   | 50     |\n\nQuestion: In which department is the ratio of male to female employees the lowest?",
        solution:
          "Step 1: Calculate ratios for each department.\n  HR: Male/Female = 30/45 = 2/3 = 0.667\n  IT: Male/Female = 80/40 = 2/1 = 2.0\n  Finance: Male/Female = 50/50 = 1/1 = 1.0\nStep 2: Compare ratios: 0.667 < 1.0 < 2.0.\nStep 3: The lowest ratio of male to female employees is in the HR department.",
        answer: "HR department (ratio 2:3)",
      },
      {
        problem:
          "A stacked bar chart shows the sales of Product A and Product B for each quarter:\n\n| Quarter | Product A | Product B | Total |\n|---------|-----------|-----------|-------|\n| Q1      | 120       | 80        | 200   |\n| Q2      | 150       | 100       | 250   |\n| Q3      | 130       | 120       | 250   |\n| Q4      | 160       | 140       | 300   |\n\nQuestion: In which quarter did Product B have the highest percentage contribution to total sales?",
        solution:
          "Step 1: Calculate Product B's percentage contribution for each quarter.\n  Q1: (80/200) x 100 = 40%\n  Q2: (100/250) x 100 = 40%\n  Q3: (120/250) x 100 = 48%\n  Q4: (140/300) x 100 = 46.67%\nStep 2: Compare the percentages: 40%, 40%, 48%, 46.67%.\nStep 3: The highest percentage contribution of Product B is in Q3 at 48%.",
        answer: "Q3 (48%)",
      },
    ],

    commonMistakes: [
      "Misreading bar heights by not aligning with the gridlines properly, especially when bars fall between two grid intervals. Always use the nearest gridline as a reference.",
      "In stacked bar charts, reading the absolute position of a segment top as its value instead of computing the difference between the top and bottom of that segment.",
      "Confusing grouped bar series because of the legend. Always match the bar color or pattern to the legend before extracting a value.",
    ],

    keyTakeaways: [
      "Bar charts are about visual comparison. Train yourself to quickly estimate values by their height relative to the scale.",
      "For stacked bars, always compute segment values by subtraction rather than reading the top position directly.",
      "When answer choices are widely spaced, approximate aggressively. When they are close, read the chart more carefully.",
      "Practice reading grouped and stacked bar charts separately, as each requires a different technique.",
      "Always check the axis scale and units before performing any calculation.",
    ],
  },

  // ──────────────────────────────────────────────
  // 3. Pie Charts
  // ──────────────────────────────────────────────
  {
    slug: "pie-charts",
    categorySlug: "data-interpretation",
    introduction:
      "Pie charts represent data as slices (sectors) of a circle, where the entire circle represents 100% of a quantity. Each slice's size is proportional to the value it represents relative to the total. Pie charts are commonly used to show composition, such as budget allocation across departments, market share among companies, or distribution of expenses by category.\n\nIn placement exams, pie chart questions often provide either percentages or degree values for each sector, along with a total value. You are then asked to find the actual value of a sector, compare two sectors, or calculate the difference between sectors. Some advanced sets provide two pie charts and ask you to combine information from both. The arithmetic is straightforward, but you must be comfortable with converting between percentages, degrees, and absolute values.\n\nA full circle has 360 degrees, which corresponds to 100%. This means 1% equals 3.6 degrees. This conversion is the foundation of all pie chart calculations. Being fast with this conversion and with basic fraction-to-percentage mappings will help you solve pie chart questions quickly and accurately.",

    concepts: [
      "The entire pie (circle) represents the total quantity or 100%. Each sector represents a portion of this total.",
      "A sector's central angle is proportional to its share of the total: a 25% share corresponds to 90 degrees (25% of 360).",
      "Pie charts show composition and proportion, not absolute values, unless the total is given alongside the chart.",
      "When two pie charts are given (e.g., two different years), you must use each chart's respective total to compute absolute values before comparing.",
      "The sum of all sector percentages must equal 100%, and the sum of all central angles must equal 360 degrees.",
    ],

    formulas: [
      {
        name: "Percentage to Degrees",
        formula: "Degrees = (Percentage / 100) x 360",
        description:
          "Converts a sector's percentage share into its central angle in degrees.",
      },
      {
        name: "Degrees to Percentage",
        formula: "Percentage = (Degrees / 360) x 100",
        description:
          "Converts a sector's central angle back into its percentage share.",
      },
      {
        name: "Actual Value of a Sector",
        formula: "Value = (Percentage / 100) x Total",
        description:
          "When the total is given, this formula finds the actual value represented by a sector.",
      },
      {
        name: "Actual Value from Degrees",
        formula: "Value = (Degrees / 360) x Total",
        description:
          "Directly computes the sector value from its central angle and the total.",
      },
      {
        name: "Ratio of Two Sectors",
        formula:
          "Ratio = Percentage of A : Percentage of B (or Degrees of A : Degrees of B)",
        description:
          "The ratio of two sectors can be computed directly from their percentages or angles since both are proportional to the actual values.",
      },
    ],

    methods: [
      {
        name: "Finding Actual Values from a Pie Chart",
        steps: [
          "Read the total value given alongside the pie chart.",
          "Identify the sector in question and note its percentage or degree value.",
          "If given in degrees, convert to percentage: (Degrees / 360) x 100.",
          "Compute the actual value: (Percentage / 100) x Total.",
          "Verify by checking that sector values roughly add up to the total.",
        ],
      },
      {
        name: "Comparing Two Pie Charts",
        steps: [
          "Note the totals for each pie chart (they are often different).",
          "For the sectors being compared, compute their actual values: (Percentage / 100) x Respective Total.",
          "Perform the required comparison (difference, ratio, percentage change).",
          "Never compare percentages across two different pie charts directly unless the totals are equal.",
          "Double-check that you used the correct total for each chart.",
        ],
      },
      {
        name: "Finding the Central Angle of a Sector",
        steps: [
          "Identify the sector's percentage from the chart.",
          "Multiply by 3.6 to convert to degrees (since 1% = 3.6 degrees).",
          "If given partial data, find the unknown sector by subtracting all known percentages from 100%.",
          "Convert the resulting percentage to degrees using the same formula.",
          "Verify: all angles should sum to 360 degrees.",
        ],
      },
    ],

    rules: [
      "All sector percentages must sum to 100%, and all central angles must sum to 360 degrees. Use this to find missing sectors.",
      "When the total value changes between two pie charts, you cannot compare percentages directly; you must convert to absolute values first.",
      "1% of the pie = 3.6 degrees. Memorize this conversion for speed.",
      "If a sector is described as 'remaining', calculate it by subtracting the sum of all other sectors from 100%.",
    ],

    quickTricks: [
      "Quick degree conversions: 25% = 90 degrees, 50% = 180 degrees, 12.5% = 45 degrees, 33.33% = 120 degrees, 20% = 72 degrees.",
      "To find 15% of a total: find 10% (move decimal) + 5% (half of 10%). For example, 15% of 800 = 80 + 40 = 120.",
      "If two sectors are in ratio 2:3, and together they make up 50%, then they are 20% and 30% respectively.",
      "For quick comparison of two sectors, compare their degree values directly since degrees are proportional to actual values when the total is the same.",
      "When a pie chart gives degrees and the total, use the shortcut: Value = (Degrees x Total) / 360. For mental math, simplify the fraction first.",
    ],

    solvedExamples: [
      {
        problem:
          "A pie chart shows the distribution of monthly expenses of a family with a total expenditure of Rs. 60,000:\n\n| Category      | Percentage |\n|---------------|------------|\n| Rent          | 30%        |\n| Food          | 25%        |\n| Transport     | 15%        |\n| Education     | 20%        |\n| Miscellaneous | 10%        |\n\nQuestion: What is the central angle for the Education sector, and how much money is spent on it?",
        solution:
          "Step 1: Education = 20%.\nStep 2: Central angle = (20/100) x 360 = 72 degrees.\nStep 3: Actual expenditure = (20/100) x 60,000 = Rs. 12,000.\nStep 4: The Education sector has a central angle of 72 degrees and represents Rs. 12,000.",
        answer: "Central angle = 72 degrees; Amount = Rs. 12,000",
      },
      {
        problem:
          "Two pie charts show the revenue distribution of a company.\n\nYear 2022 (Total: Rs. 50 lakhs):\n  Product A: 40%, Product B: 35%, Product C: 25%\n\nYear 2023 (Total: Rs. 70 lakhs):\n  Product A: 30%, Product B: 40%, Product C: 30%\n\nQuestion: What is the percentage increase in the revenue of Product C from 2022 to 2023?",
        solution:
          "Step 1: Product C revenue in 2022 = 25% of 50 lakhs = (25/100) x 50 = 12.5 lakhs.\nStep 2: Product C revenue in 2023 = 30% of 70 lakhs = (30/100) x 70 = 21 lakhs.\nStep 3: Increase = 21 - 12.5 = 8.5 lakhs.\nStep 4: Percentage increase = (8.5 / 12.5) x 100 = 68%.\nStep 5: Product C's revenue increased by 68% from 2022 to 2023.",
        answer: "68%",
      },
      {
        problem:
          "A pie chart represents the market share of 5 smartphone brands. The central angles for three brands are given: Brand X = 108 degrees, Brand Y = 72 degrees, Brand Z = 54 degrees. The remaining share is split equally between Brand P and Brand Q.\n\nQuestion: What is the percentage market share of Brand P?",
        solution:
          "Step 1: Total degrees in a circle = 360.\nStep 2: Degrees used by X, Y, Z = 108 + 72 + 54 = 234 degrees.\nStep 3: Remaining degrees = 360 - 234 = 126 degrees.\nStep 4: Brand P and Brand Q share equally: 126 / 2 = 63 degrees each.\nStep 5: Brand P percentage = (63 / 360) x 100 = 17.5%.\nStep 6: Brand P has a 17.5% market share.",
        answer: "17.5%",
      },
    ],

    commonMistakes: [
      "Comparing percentages between two pie charts without converting to absolute values. If Pie Chart A has total 100 and Pie Chart B has total 200, then 30% of A (30) is not the same as 30% of B (60).",
      "Using 180 degrees instead of 360 degrees in conversion formulas. Remember that a full circle is 360 degrees, not 180.",
      "Forgetting that the 'remaining' or 'others' sector must be calculated by subtracting the sum of all given sectors from 100%. Students sometimes ignore this sector in total calculations.",
    ],

    keyTakeaways: [
      "Memorize the key conversion: 1% = 3.6 degrees. This single fact is the foundation of all pie chart calculations.",
      "Always check whether the question is about percentages or absolute values. If a total is given, you likely need absolute values.",
      "When two pie charts are involved, never compare percentages directly unless both totals are the same.",
      "The sum of all sectors must be 100% (or 360 degrees). Use this as a self-check and to find missing sectors.",
      "Practice quick mental multiplication with common percentages (10%, 20%, 25%, 33%, 50%) to speed up calculations.",
    ],
  },

  // ──────────────────────────────────────────────
  // 4. Line Charts
  // ──────────────────────────────────────────────
  {
    slug: "line-charts",
    categorySlug: "data-interpretation",
    introduction:
      "Line charts (also called line graphs) display data points connected by straight lines, typically showing how a value changes over time. The x-axis usually represents time periods (months, quarters, years) and the y-axis represents the measured quantity (revenue, temperature, population, etc.). Line charts are the best format for visualizing trends, growth patterns, and fluctuations over a continuous period.\n\nIn placement exams, line chart DI sets often include one or more lines on the same graph, allowing comparisons between different entities across the same time periods. Questions typically ask about the steepest increase, the period of decline, the point of intersection (where two lines cross), or specific calculations like percentage change and average over a range of periods. Some questions test your ability to identify overall trends rather than compute specific values.\n\nThe key advantage of line charts over bar charts is that they make trends immediately visible. A rising line indicates growth, a falling line indicates decline, and a flat line indicates stability. The steepness (slope) of the line indicates the rate of change. However, reading exact values from a line chart requires careful attention to the scale, especially when data points fall between gridlines. Practice estimating values quickly and accurately to master line chart questions.",

    concepts: [
      "Each point on the line represents a data value at a specific time period or category.",
      "The slope (steepness) of the line between two points indicates the rate of change. A steeper line means a faster rate of change.",
      "An upward slope means the value is increasing; a downward slope means it is decreasing; a flat line means no change.",
      "When multiple lines are plotted, their intersection point indicates where the two entities have equal values.",
      "The gap between two lines at any point represents the difference between the two values at that time period.",
    ],

    formulas: [
      {
        name: "Rate of Change (Slope)",
        formula:
          "Rate of Change = (Value at later point - Value at earlier point) / Number of intervals",
        description:
          "Measures the average change per period between two data points on the line. A higher value means faster change.",
      },
      {
        name: "Percentage Change Between Two Points",
        formula:
          "Percentage Change = ((Later Value - Earlier Value) / Earlier Value) x 100",
        description:
          "Calculates the percentage increase or decrease between two data points on the line.",
      },
      {
        name: "Average Over a Range",
        formula: "Average = Sum of values at all points in range / Number of points",
        description:
          "Used when the question asks for the mean value over a specified range of periods.",
      },
      {
        name: "Absolute Change",
        formula: "Absolute Change = Later Value - Earlier Value",
        description:
          "The simple difference between two data points. A positive value indicates increase; negative indicates decrease.",
      },
    ],

    methods: [
      {
        name: "Identifying Trends and Patterns",
        steps: [
          "Observe the overall direction of the line: is it generally rising, falling, or flat?",
          "Identify any turning points where the trend reverses (peaks and troughs).",
          "Note the steepest segments, which represent the periods of maximum change.",
          "For multiple lines, observe whether they move in the same direction (correlated) or opposite directions (inversely related).",
          "Summarize the trend in words before answering specific questions, as many questions are trend-based.",
        ],
      },
      {
        name: "Calculating Rate of Change",
        steps: [
          "Identify the two data points between which the rate of change is required.",
          "Read both values from the chart as accurately as possible.",
          "Subtract the earlier value from the later value to get the absolute change.",
          "Divide by the number of intervals (not points) to get the per-period rate.",
          "For percentage rate of change, use the percentage change formula instead.",
        ],
      },
      {
        name: "Finding Maximum and Minimum Values",
        steps: [
          "Scan the line from left to right, noting peaks (local maxima) and troughs (local minima).",
          "Identify the highest point on the line; this is the overall maximum.",
          "Identify the lowest point on the line; this is the overall minimum.",
          "Read both values carefully from the y-axis scale.",
          "If the question asks for the range, compute: Maximum - Minimum.",
        ],
      },
    ],

    rules: [
      "The steepest segment of a line corresponds to the largest absolute change, not necessarily the largest percentage change.",
      "When comparing two lines, a higher line does not mean a higher rate of growth. Compare slopes (steepness), not positions.",
      "If the y-axis does not start at zero, the visual magnitude of changes can be misleading. Always read actual values.",
      "The number of intervals between n data points is (n - 1). For example, 5 yearly data points span 4 years.",
    ],

    quickTricks: [
      "To quickly identify the period of maximum increase, look for the steepest upward segment of the line without reading exact values.",
      "If two lines are converging, the gap between them is decreasing. If diverging, the gap is increasing. Questions about 'least difference' correspond to convergence points.",
      "For average estimation, if the line is roughly flat with small fluctuations, the average is approximately equal to the midpoint value.",
      "To find when values are equal for two entities, look for the intersection point of their lines on the graph.",
      "For quick percentage change estimation: if a value goes from 200 to 250, that is a 25% increase (50 is one-quarter of 200).",
    ],

    solvedExamples: [
      {
        problem:
          "A line chart shows the monthly website traffic (in thousands) over 6 months:\n\n| Month | Traffic (thousands) |\n|-------|--------------------|\n| Jan   | 40                 |\n| Feb   | 55                 |\n| Mar   | 50                 |\n| Apr   | 70                 |\n| May   | 85                 |\n| Jun   | 80                 |\n\nQuestion: During which month-to-month period was the rate of increase in traffic the highest?",
        solution:
          "Step 1: Calculate the change for each consecutive month pair.\n  Jan to Feb: 55 - 40 = +15 thousand\n  Feb to Mar: 50 - 55 = -5 thousand (decrease)\n  Mar to Apr: 70 - 50 = +20 thousand\n  Apr to May: 85 - 70 = +15 thousand\n  May to Jun: 80 - 85 = -5 thousand (decrease)\nStep 2: Compare the increases: +15, +20, +15. The largest increase is +20 thousand.\nStep 3: The highest rate of increase was from March to April, with a rise of 20 thousand.",
        answer: "March to April (+20 thousand)",
      },
      {
        problem:
          "A line chart shows the sales (in lakhs) of Company X and Company Y over 4 years:\n\n| Year | Company X | Company Y |\n|------|-----------|-----------|\n| 2020 | 30        | 50        |\n| 2021 | 45        | 55        |\n| 2022 | 60        | 60        |\n| 2023 | 80        | 65        |\n\nQuestion: In which year are the sales of both companies equal, and what is the percentage growth of Company X from 2020 to 2023?",
        solution:
          "Step 1: Compare values year by year.\n  2020: X = 30, Y = 50 (Y is higher)\n  2021: X = 45, Y = 55 (Y is higher)\n  2022: X = 60, Y = 60 (Equal!)\n  2023: X = 80, Y = 65 (X is higher)\nStep 2: The sales are equal in 2022 at 60 lakhs.\nStep 3: Percentage growth of X from 2020 to 2023 = ((80 - 30) / 30) x 100 = (50/30) x 100 = 166.67%.\nStep 4: The lines intersect in 2022 (both at 60 lakhs), and Company X grew by approximately 166.67% over the period.",
        answer:
          "Equal in 2022 (60 lakhs each); Company X grew by approximately 166.67%",
      },
      {
        problem:
          "A line chart shows the temperature (in degree Celsius) recorded at noon for 7 days:\n\n| Day | Temperature |\n|-----|-------------|\n| Mon | 28          |\n| Tue | 31          |\n| Wed | 34          |\n| Thu | 33          |\n| Fri | 30          |\n| Sat | 29          |\n| Sun | 32          |\n\nQuestion: What is the average temperature over the week, and what is the range (difference between the highest and lowest temperatures)?",
        solution:
          "Step 1: Sum all temperatures: 28 + 31 + 34 + 33 + 30 + 29 + 32 = 217.\nStep 2: Average = 217 / 7 = 31 degrees Celsius.\nStep 3: Highest temperature = 34 (Wednesday). Lowest temperature = 28 (Monday).\nStep 4: Range = 34 - 28 = 6 degrees Celsius.\nStep 5: The average temperature is 31 degrees Celsius, and the range is 6 degrees.",
        answer: "Average = 31 degrees Celsius; Range = 6 degrees Celsius",
      },
    ],

    commonMistakes: [
      "Confusing the steepest segment with the highest percentage change. A line rising from 10 to 20 (100% increase) is a larger percentage change than a line rising from 100 to 150 (50% increase), even though the latter has a steeper visual appearance on the same scale.",
      "Misreading values at data points when the line passes between gridlines. Always estimate carefully using the scale intervals, and note whether the y-axis starts at zero.",
      "Assuming the trend between two data points is linear when the question does not state so. Line charts connect points with straight lines, but the actual data may have fluctuated between the plotted points.",
    ],

    keyTakeaways: [
      "Line charts are best for trend analysis. Before answering specific questions, quickly note the overall direction and any turning points.",
      "The slope of the line tells you the rate of change. Steeper slopes mean faster change; flat sections mean stability.",
      "For questions about 'maximum increase', look for the steepest upward segment. For 'maximum decrease', look for the steepest downward segment.",
      "When comparing two lines, intersection points indicate equal values. The gap between lines shows the difference at each point.",
      "Always confirm the scale and starting point of the y-axis. A non-zero start can visually exaggerate or minimize changes.",
    ],
  },
];
