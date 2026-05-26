import type { TopicTheory } from "./types";

export const logicalReasoningTheorySpatialArrangement: TopicTheory[] = [
  {
    slug: "blood-relations",
    categorySlug: "logical-reasoning",
    introduction:
      "Blood Relations problems test your ability to determine family relationships from given information. These questions provide a set of clues about how people are related, and you must figure out the relationship between specific individuals.\n\nThere are three main types: conversation-based (using dialogue), coded relationships (symbols represent relationships), and family tree puzzles. The key skill is building a family tree diagram from the given clues and then reading off the required relationship.\n\nBlood Relations is one of the most frequently tested topics in bank exams, SSC, and campus placements. With a systematic approach, these questions can be solved quickly and accurately.",
    concepts: [
      "Every relationship has a complementary pair, if A is B's father, B is A's son/daughter.",
      "Gender indicators: father, mother, brother, sister, husband, wife, uncle, aunt, nephew, niece.",
      "Generations: grandparents (2 above), parents (1 above), self (0), children (1 below), grandchildren (2 below).",
      "Sibling relationships: brother/sister share at least one parent.",
      "In-law relationships: formed through marriage (mother-in-law, father-in-law, brother-in-law, sister-in-law).",
      "Paternal side: father's relatives. Maternal side: mother's relatives.",
    ],
    methods: [
      {
        name: "Family Tree Diagram Method",
        steps: [
          "Start with the first clue and draw two people with the stated relationship (use + for male, - for female).",
          "Use horizontal lines for same-generation relations (siblings, spouses).",
          "Use vertical lines for parent-child relations (parent above, child below).",
          "Add each new clue to the diagram, connecting people step by step.",
          "Once the tree is complete, trace the path between the two people in question.",
        ],
      },
      {
        name: "Coded Relationship Method",
        steps: [
          "First decode the symbols: memorize what each symbol means (e.g., + = father, - = mother, * = spouse).",
          "Start from left to right, building the relationship chain.",
          "At each step, determine the gender and generation change.",
          "Combine all steps to find the final relationship.",
        ],
      },
    ],
    quickTricks: [
      "Always draw the diagram, do not try to solve blood relations mentally.",
      "Use conventions: males as squares/+, females as circles/-, marriages as double lines.",
      "If the question says 'A is the son of B's father,' A is B's brother (or A is B himself).",
      "Count generations: same generation = sibling/cousin, one up = parent/uncle/aunt, one down = child/nephew/niece.",
      "'Only son/daughter' is a critical clue that eliminates other siblings.",
    ],
    solvedExamples: [
      {
        problem:
          "Pointing to a photograph, Arun said, 'She is the daughter of my grandfather's only son.' How is the girl in the photograph related to Arun?",
        solution:
          "My grandfather's only son = my father (since grandfather has only one son).\nThe daughter of my father = my sister.\nSo the girl is Arun's sister.",
        answer: "Sister",
      },
      {
        problem:
          "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
        solution:
          "B's mother is C. A is B's sister, so C is also A's mother.\nD is C's father, meaning D is A's grandfather (maternal grandfather).\nSo A is D's granddaughter.",
        answer: "Granddaughter",
      },
      {
        problem:
          "If P $ Q means P is the father of Q, P # Q means P is the mother of Q, P * Q means P is the sister of Q, then what does A $ B * C # D mean?",
        solution:
          "A $ B: A is the father of B.\nB * C: B is the sister of C (so B is female, and B and C share the same parent A).\nC # D: C is the mother of D (so C is female).\nA is the father of B, B is sister of C, so A is also the father of C. C is the mother of D, so D is A's grandchild. A is D's grandfather.",
        answer: "A is the grandfather of D.",
      },
    ],
    commonMistakes: [
      "Assuming gender without evidence, 'child' does not specify gender; only 'son' or 'daughter' does.",
      "Confusing paternal and maternal relationships, always track which side of the family you are on.",
      "Overlooking the word 'only', 'only son' means there are no other sons, which is a crucial constraint.",
    ],
    keyTakeaways: [
      "Always draw a family tree diagram, it prevents errors and saves time.",
      "Pay close attention to gender-specific terms and the word 'only.'",
      "Trace relationships step by step through the tree rather than trying to jump directly.",
      "In coded questions, decode symbols first before building the chain.",
      "Practice with increasingly complex family trees to build speed.",
    ],
  },
  {
    slug: "direction-sense-test",
    categorySlug: "logical-reasoning",
    introduction:
      "Direction Sense Test problems require you to determine the final position or direction of a person after a series of movements and turns. These questions test your spatial reasoning and ability to track compass directions.\n\nThe four main directions are North, South, East, and West, with four secondary directions: North-East, North-West, South-East, and South-West. Problems typically describe a person walking in various directions, turning left or right, and you must find the final direction faced or the shortest distance from the starting point.\n\nThis topic is a staple in bank exams, SSC, and placement tests. Drawing a diagram is essential for solving these problems accurately.",
    concepts: [
      "Cardinal directions: North (up), South (down), East (right), West (left) on a standard map.",
      "Right turn from North → East → South → West → North (clockwise).",
      "Left turn from North → West → South → East → North (counter-clockwise).",
      "Opposite directions: North↔South, East↔West.",
      "Shortest distance uses the Pythagorean theorem: √(horizontal² + vertical²).",
      "Shadow-based direction: morning sun is in the East, evening sun is in the West. Shadow falls opposite to the sun.",
    ],
    methods: [
      {
        name: "Diagram Drawing Method",
        steps: [
          "Draw a compass rose showing N, S, E, W on your paper.",
          "Mark the starting point and face the initial direction.",
          "For each instruction, draw the movement on the diagram with the distance.",
          "For turns, update the direction faced (right = clockwise, left = counter-clockwise).",
          "After all movements, determine the final position relative to the start.",
        ],
      },
      {
        name: "Coordinate Method",
        steps: [
          "Set starting point as origin (0, 0). North = +y, East = +x.",
          "For each movement, update coordinates: North adds to y, East adds to x, South subtracts from y, West subtracts from x.",
          "After all movements, final position gives direction: positive x = East, positive y = North, etc.",
          "Shortest distance = √(x² + y²).",
        ],
      },
    ],
    quickTricks: [
      "Right turn sequence: N→E→S→W→N. Left turn sequence: N→W→S→E→N.",
      "About turn (180°) reverses direction: N→S, E→W.",
      "Morning shadow falls to the West (sun in East). Evening shadow falls to the East (sun in West).",
      "If asked 'in which direction is the starting point,' flip the final direction.",
      "For shortest distance, always use Pythagoras, don't trace the walking path.",
    ],
    solvedExamples: [
      {
        problem:
          "A man walks 5 km North, then turns right and walks 3 km, then turns right again and walks 5 km. In which direction is he from the starting point?",
        solution:
          "Start facing North, walk 5 km North.\nTurn right → now facing East, walk 3 km East.\nTurn right → now facing South, walk 5 km South.\nNow he is at the same North-South level as the start (5 km North - 5 km South = 0) but 3 km to the East.\nSo he is due East of the starting point.",
        answer: "East",
      },
      {
        problem:
          "Ravi walks 4 km East, then turns left and walks 3 km. What is the shortest distance from the starting point?",
        solution:
          "Walk 4 km East: position (4, 0).\nTurn left from East → now facing North, walk 3 km: position (4, 3).\nShortest distance = √(4² + 3²) = √(16 + 9) = √25 = 5 km.",
        answer: "5 km",
      },
    ],
    commonMistakes: [
      "Confusing left and right turns, always use the compass rose, not your body orientation.",
      "Forgetting to update the facing direction after a turn before calculating the next movement.",
      "Calculating total walking distance instead of shortest (straight-line) distance.",
    ],
    keyTakeaways: [
      "Always draw a diagram, do not attempt direction problems mentally.",
      "Right turns go clockwise, left turns go counter-clockwise.",
      "Use Pythagorean theorem for shortest distance calculations.",
      "Shadow direction is opposite to the sun: morning shadows point West, evening shadows point East.",
      "Track both position and facing direction at each step.",
    ],
  },
  {
    slug: "seating-arrangement",
    categorySlug: "logical-reasoning",
    introduction:
      "Seating Arrangement problems require you to determine the positions of people seated in a row, circle, or around a table based on given clues. These are among the most common and scoring topics in competitive exams.\n\nThere are two main types: linear arrangements (people sit in a row, facing one direction or facing both directions) and circular arrangements (people sit around a round table, facing inward or outward). Each type has its own set of rules and approach.\n\nSeating Arrangement problems test logical deduction, attention to detail, and systematic approach. They appear heavily in bank exams, MBA entrance tests, and campus placement aptitude rounds.",
    concepts: [
      "Linear arrangement: positions are numbered left to right (or right to left). 'Left of' and 'right of' are relative to the facing direction.",
      "Circular arrangement: there is no fixed start. 'Left' and 'right' depend on whether people face inward or outward.",
      "Facing inward (toward center): left is clockwise, right is counter-clockwise.",
      "Facing outward (away from center): left is counter-clockwise, right is clockwise.",
      "'Immediately left/right' means adjacent. 'Second to the left' means two seats away.",
      "'Opposite' in circular = diametrically opposite (N/2 seats away for N people).",
    ],
    methods: [
      {
        name: "Fixed Point Method",
        steps: [
          "Identify the most constrained person (most clues about their position) and fix them first.",
          "Use definite clues (exact positions) before conditional clues (relative positions).",
          "For circular arrangements, fix one person and build around them.",
          "For each clue, mark all possible positions and narrow down.",
          "Use elimination: if person A cannot be in position X based on a clue, cross it out.",
        ],
      },
      {
        name: "Case-Based Method",
        steps: [
          "When multiple arrangements are possible, create Case 1 and Case 2.",
          "Continue adding clues to each case. One case will eventually lead to a contradiction.",
          "Discard the contradicted case and proceed with the valid one.",
          "Verify the final arrangement against ALL given clues.",
        ],
      },
    ],
    quickTricks: [
      "In a row of N people, person at position K from the left is at position (N-K+1) from the right.",
      "In a circle of N people, the person opposite to someone is N/2 seats away.",
      "Start with the clue that gives the most definite information.",
      "For 'between' clues, the two people on either side could be in either order, consider both cases.",
      "Count total seats and people, sometimes not all seats are filled.",
    ],
    solvedExamples: [
      {
        problem:
          "Five friends A, B, C, D, E sit in a row facing North. C sits in the middle. A sits to the immediate left of C. B does not sit at any end. Who sits at the extreme right?",
        solution:
          "Row: _ _ _ _ _ (positions 1-5 from left)\nC is in position 3 (middle).\nA is immediately left of C → A is in position 2.\nB is not at any end (not position 1 or 5), and positions 2 and 3 are taken. So B is in position 4.\nD and E fill positions 1 and 5.\nExtreme right is position 5, which is either D or E. Since no more constraints, either could be at position 5.\nBut the question asks who sits at extreme right, since B is at position 4, the answer needs more info. However, given no other constraint, D or E sit at the ends.",
        answer: "D or E (insufficient constraints to determine exactly which one)",
      },
      {
        problem:
          "Eight people A-H sit around a circular table facing the center. A sits opposite D. B is immediately to the right of A. C is second to the left of D. E sits opposite B. Where does F sit relative to A?",
        solution:
          "Fix A at the top. Opposite A = D (4 seats away in 8-person circle).\nB is immediately right of A → B is at position 2 (clockwise from A).\nE sits opposite B → E is at position 6.\nC is second to the left of D. D is at position 5. Left of D (facing center) = counter-clockwise. Second to left of D = position 7. So C is at position 7.\nRemaining: F, G, H for positions 3, 4, 8.\nF could be at position 3, 4, or 8.",
        answer: "F's exact position depends on additional constraints for G and H.",
      },
    ],
    commonMistakes: [
      "Confusing left and right in circular arrangements, always check if people face inward or outward.",
      "Forgetting that 'immediate left' and 'second to the left' are different, one is adjacent, the other skips one seat.",
      "Not considering both possible cases when a clue allows two arrangements.",
    ],
    keyTakeaways: [
      "Always draw the arrangement, rows as numbered boxes, circles as clock positions.",
      "Fix the most constrained person first and build the arrangement around them.",
      "In circular arrangements, left/right depend on facing direction (inward vs outward).",
      "Use case-based approach when a clue has two possible interpretations.",
      "Verify your final answer against every single clue before selecting it.",
    ],
  },
  {
    slug: "ranking-and-order",
    categorySlug: "logical-reasoning",
    introduction:
      "Ranking and Order problems involve determining the position or rank of a person in a row, queue, or group based on given information. These problems typically provide the rank from one end and ask for the rank from the other end, or provide relative rankings and ask for the total count.\n\nCommon scenarios include finding a person's position in a class, row, or queue from the top/bottom/left/right. The problems may also involve interchanging positions between two people and finding new rankings.\n\nThis topic is straightforward but requires careful reading to avoid off-by-one errors. It appears regularly in bank exams, SSC, and placement tests.",
    concepts: [
      "Rank from left + Rank from right = Total + 1.",
      "If two people interchange positions, only their individual ranks change, others remain the same.",
      "When finding total people between two positions: |Rank1 - Rank2| - 1.",
      "Rank from top + Rank from bottom = Total students + 1.",
      "If ranks overlap (the same person is counted from both ends), avoid double counting.",
    ],
    formulas: [
      {
        name: "Total from two ranks",
        formula: "Total = Rank from Left + Rank from Right - 1",
        description: "When you know a person's rank from both ends of the same row.",
      },
      {
        name: "People between two ranks",
        formula: "Between = |Rank1 - Rank2| - 1",
        description: "Number of people between two positions (from the same end).",
      },
    ],
    methods: [
      {
        name: "Direct Formula Method",
        steps: [
          "Identify what is given: rank from left, rank from right, or both.",
          "If both ranks of the same person are known: Total = Left rank + Right rank - 1.",
          "If two different people's ranks are given from the same end, calculate the gap.",
          "For interchange problems: swap the two people's positions and recalculate.",
        ],
      },
      {
        name: "Number Line Method",
        steps: [
          "Draw a number line representing positions 1 to N.",
          "Mark the given positions on the number line.",
          "Count or calculate the required value visually.",
          "This method helps avoid confusion in complex multi-person problems.",
        ],
      },
    ],
    quickTricks: [
      "Total = Left rank + Right rank - 1 (memorize this formula).",
      "People between A and B = |A's rank - B's rank| - 1 (from the same end).",
      "After interchange: new rank of A = old rank of B, and vice versa.",
      "If the question asks for minimum total, and ranks from both ends are given for different people, Total = max(rank_left, rank_right) if their positions could overlap.",
      "Read carefully: 'from the top' vs 'from the bottom' vs 'from the left.'",
    ],
    solvedExamples: [
      {
        problem:
          "In a row of 40 students, Rahul is 15th from the left end. What is his position from the right end?",
        solution:
          "Total = 40. Rank from left = 15.\nRank from right = Total - Rank from left + 1 = 40 - 15 + 1 = 26.",
        answer: "26th from the right end.",
      },
      {
        problem:
          "Priya is 12th from the top and 18th from the bottom in a class. How many students are there in the class?",
        solution:
          "Total = Rank from top + Rank from bottom - 1 = 12 + 18 - 1 = 29.",
        answer: "29 students.",
      },
      {
        problem:
          "In a queue, A is 10th from the front and B is 8th from the end. If they interchange positions, A becomes 15th from the front. How many people are in the queue?",
        solution:
          "After interchange, A takes B's position. A is now 15th from front.\nB was 8th from the end, so B's original position from front = Total - 8 + 1 = Total - 7.\nAfter interchange, A is at B's original position: Total - 7 = 15. So Total = 22.",
        answer: "22 people.",
      },
    ],
    commonMistakes: [
      "Forgetting the '-1' in the total formula, this accounts for the person being counted twice.",
      "Confusing 'from the left' with 'from the right', always clarify which end is referenced.",
      "In interchange problems, confusing whose position goes where, A goes to B's old spot and vice versa.",
    ],
    keyTakeaways: [
      "Core formula: Total = Rank from one end + Rank from other end - 1.",
      "People between two positions (same end) = |Rank1 - Rank2| - 1.",
      "In interchange problems, A's new position = B's old position.",
      "Always draw a number line for complex multi-person problems.",
      "Read the question carefully, 'from the top' and 'from the left' are different dimensions.",
    ],
  },
  {
    slug: "data-arrangement",
    categorySlug: "logical-reasoning",
    introduction:
      "Data Arrangement problems involve organizing a set of data based on given conditions and constraints. Unlike simple puzzles, data arrangement often involves scheduling, ordering, or distributing items among people or categories with multiple interacting conditions.\n\nThese problems may include assigning tasks to days, distributing items among people, or arranging events in a sequence. The conditions may be positive (A must be on Monday) or negative (B cannot be on Wednesday), and they often interact with each other.\n\nData Arrangement is a critical topic for bank exams and management entrance tests. Success requires a systematic approach: organize the data in a table, process the most definitive clues first, and use elimination to resolve ambiguities.",
    concepts: [
      "Each entity is assigned to exactly one slot (day, position, category) unless stated otherwise.",
      "Conditions can be definite (A is on Monday), negative (B is not on Tuesday), or relative (C is after D).",
      "Linked conditions: two clues about the same entity can be combined for stronger constraints.",
      "Process of elimination: when all but one option is ruled out, the remaining option must be correct.",
      "Boundary conditions: first/last positions, minimum/maximum values have fewer options.",
    ],
    methods: [
      {
        name: "Tabular Method",
        steps: [
          "Create a table with slots (days/positions) as columns and attributes as rows.",
          "Fill in all definite assignments from the clues.",
          "Apply negative conditions to eliminate impossible assignments.",
          "Use relative conditions to narrow down positions.",
          "Iterate until every slot is filled.",
        ],
      },
      {
        name: "Elimination Method",
        steps: [
          "List all possible assignments for each entity.",
          "Apply each condition to remove invalid assignments.",
          "When an entity has only one possible slot remaining, assign it.",
          "Propagate the assignment: remove that slot from all other entities.",
          "Repeat until the arrangement is complete.",
        ],
      },
    ],
    quickTricks: [
      "Start with entities that have the most conditions, they are the most constrained.",
      "Boundary positions (first and last) are the easiest to resolve, start there.",
      "If two conditions are contradictory, one case is impossible, eliminate it immediately.",
      "Count remaining options: if N entities remain for N slots, each has limited choices.",
    ],
    solvedExamples: [
      {
        problem:
          "Five tasks P, Q, R, S, T are scheduled on Monday to Friday. R is on Wednesday. P is before Q. T is not on Monday. S is on Friday. On which day is P?",
        solution:
          "R = Wednesday, S = Friday (given).\nRemaining: P, Q, T for Monday, Tuesday, Thursday.\nT is not on Monday → T is on Tuesday or Thursday.\nP is before Q → P's day comes before Q's day.\nIf P = Monday, Q can be Tuesday or Thursday, and T takes the remaining.\nIf P = Tuesday, T must be Thursday (since T ≠ Monday), and Q = Monday? But P must be before Q, and Tuesday is after Monday. Contradiction.\nIf P = Thursday, Q must be after Thursday, but no day is available after Thursday (Friday is S). Contradiction.\nSo P = Monday.",
        answer: "P is on Monday.",
      },
    ],
    commonMistakes: [
      "Processing clues in order of appearance rather than order of definiteness, always start with the most definite clues.",
      "Forgetting to propagate constraints after making an assignment.",
      "Not considering all possible cases when a clue allows multiple interpretations.",
    ],
    keyTakeaways: [
      "Use a table or grid to organize the data systematically.",
      "Process definite clues first, then relative clues, then negative clues.",
      "Boundary positions are often the easiest to determine, start with them.",
      "Always verify the final arrangement against all conditions.",
      "Practice builds speed, the more puzzle types you see, the faster you recognize patterns.",
    ],
  },
];
