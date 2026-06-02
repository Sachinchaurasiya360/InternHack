import type { TopicTheory } from "./types";

export const aptitudeTheoryTimeWorkMotion: TopicTheory[] = [
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
];
