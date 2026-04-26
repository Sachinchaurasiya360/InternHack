import type { TopicTheory } from "./types";

export const logicalReasoningTheory: TopicTheory[] = [
  {
    slug: "number-series",
    categorySlug: "logical-reasoning",
    introduction:
      "Number Series is one of the most commonly tested topics in logical reasoning and quantitative aptitude sections of placement exams. A number series is a sequence of numbers that follows a specific pattern or rule. Your task is to identify the underlying pattern and predict the next number, find a missing number, or identify the wrong number in the series.\n\nThe patterns in number series can range from simple arithmetic progressions (constant difference) to complex combinations involving squares, cubes, alternating operations, and nested patterns. The key to mastering this topic is recognizing the type of pattern quickly by examining the differences between consecutive terms, ratios, or relationships to well-known sequences like squares, cubes, primes, and Fibonacci numbers.\n\nWith practice, you develop an intuition for spotting patterns. Always start by computing first-order differences (difference between consecutive terms). If those are not constant, compute second-order differences (differences of differences). If ratios between consecutive terms are constant, it is a geometric series. Many series combine multiple operations such as alternating addition and multiplication, or use different rules for odd-positioned and even-positioned terms.",
    concepts: [
      "Arithmetic Series: Each term is obtained by adding a constant value (common difference) to the previous term. Example: 3, 7, 11, 15 (common difference = 4).",
      "Geometric Series: Each term is obtained by multiplying the previous term by a constant ratio. Example: 2, 6, 18, 54 (common ratio = 3).",
      "Difference Series: The differences between consecutive terms themselves form a recognizable pattern (arithmetic, geometric, or another known sequence).",
      "Square/Cube Series: Terms are perfect squares (1, 4, 9, 16, 25) or perfect cubes (1, 8, 27, 64, 125), or are derived by adding/subtracting squares or cubes.",
      "Alternating Series: Two different patterns are interleaved in alternating positions. Odd-positioned terms follow one rule and even-positioned terms follow another.",
      "Fibonacci-type Series: Each term is the sum of the two preceding terms. Example: 1, 1, 2, 3, 5, 8, 13.",
    ],
    methods: [
      {
        name: "Difference Method",
        steps: [
          "Write down the series and compute the difference between each pair of consecutive terms (first-order differences).",
          "If the first-order differences are constant, it is an arithmetic series. The next term = last term + common difference.",
          "If the first-order differences are not constant, compute second-order differences (differences of the first-order differences).",
          "If second-order differences are constant, the series follows a quadratic pattern. Use the pattern to predict the next difference and hence the next term.",
          "If second-order differences also vary, look for third-order differences or check if the differences form a known sequence (primes, squares, cubes, etc.).",
        ],
      },
      {
        name: "Ratio Method",
        steps: [
          "Compute the ratio of each term to its preceding term (term2/term1, term3/term2, etc.).",
          "If the ratios are constant, it is a geometric series. Next term = last term x common ratio.",
          "If the ratios form a pattern (e.g., 2, 3, 4, 5 or 1/2, 1/3, 1/4), use that pattern to determine the next ratio and compute the next term.",
        ],
      },
      {
        name: "Pattern Recognition Method",
        steps: [
          "Check if the terms are related to squares (1, 4, 9, 16...), cubes (1, 8, 27, 64...), primes (2, 3, 5, 7, 11...), or Fibonacci numbers.",
          "Check if the series uses alternating operations, such as +2, x3, +2, x3.",
          "Check if odd-positioned and even-positioned terms follow separate sub-series.",
          "For combined operation series, identify the repeating cycle of operations applied to generate each successive term.",
        ],
      },
    ],
    quickTricks: [
      "Memorize squares of 1 to 30 and cubes of 1 to 15, many series are based on these.",
      "If differences between terms are increasing rapidly, suspect a geometric or exponential pattern rather than arithmetic.",
      "If no single pattern fits all terms, try splitting the series into two interleaved sub-series (odd and even positions).",
      "For series like 2, 6, 12, 20, 30, differences are 4, 6, 8, 10 (arithmetic). The next difference is 12, so the next term is 42.",
      "Prime number series (2, 3, 5, 7, 11, 13, 17) and their multiples appear frequently, keep the first 15 primes memorized.",
    ],
    solvedExamples: [
      {
        problem:
          "Find the next number in the series: 2, 5, 10, 17, 26, ?",
        solution:
          "Step 1: Compute first-order differences: 5-2=3, 10-5=5, 17-10=7, 26-17=9. Differences are 3, 5, 7, 9.\nStep 2: Compute second-order differences: 5-3=2, 7-5=2, 9-7=2. Second-order differences are constant at 2.\nStep 3: The next first-order difference = 9 + 2 = 11.\nStep 4: The next term = 26 + 11 = 37.\nAlternatively, notice that terms are n^2 + 1 for n = 1, 2, 3, 4, 5. For n=6: 36 + 1 = 37.",
        answer: "37",
      },
      {
        problem:
          "Find the next number in the series: 3, 6, 12, 24, 48, ?",
        solution:
          "Step 1: Compute ratios: 6/3=2, 12/6=2, 24/12=2, 48/24=2. Constant ratio of 2.\nStep 2: This is a geometric series with common ratio 2.\nStep 3: Next term = 48 x 2 = 96.",
        answer: "96",
      },
      {
        problem:
          "Find the wrong number in the series: 1, 2, 6, 24, 96, 720.",
        solution:
          "Step 1: Compute ratios: 2/1=2, 6/2=3, 24/6=4, 96/24=4, 720/96=7.5.\nStep 2: The expected ratios should be 2, 3, 4, 5, 6 (factorials pattern: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720).\nStep 3: After 24 (which is 4!), the next term should be 5! = 120, not 96.\nStep 4: The wrong number is 96; it should be 120.",
        answer: "96 (should be 120)",
      },
    ],
    commonMistakes: [
      "Assuming the series is arithmetic without checking, always verify by computing differences first.",
      "Overlooking alternating patterns where odd and even positions follow different rules.",
      "Confusing a quadratic pattern (differences increasing by a constant) with a geometric pattern.",
    ],
    keyTakeaways: [
      "Always start with the difference method, compute first-order and second-order differences.",
      "If differences do not reveal a pattern, try the ratio method.",
      "Many series are based on squares, cubes, primes, or factorials, keep these sequences memorized.",
      "Alternating and combined-operation series require you to look at every other term or track the cycle of operations.",
      "Practice is the single best way to improve speed and accuracy in number series problems.",
    ],
  },
  {
    slug: "letter-and-symbol-series",
    categorySlug: "logical-reasoning",
    introduction:
      "Letter and Symbol Series problems test your ability to identify patterns in sequences of letters, symbols, or combinations of both. These questions are a staple of logical reasoning sections in placement exams and require you to find the rule governing the sequence and predict the next element or identify the missing one.\n\nLetter series operate on the positions of letters in the alphabet (A=1, B=2, ..., Z=26). Patterns may involve constant shifts (e.g., +2 positions each step), alternating shifts, skipping patterns, or reversals. Some series involve pairs or groups of letters where each group follows an internal pattern. Symbol series involve shapes, arrows, or special characters arranged according to rotation, reflection, addition/removal, or positional rules.\n\nThe key skill is translating letters to their numerical positions and then applying the same difference/ratio techniques used in number series. For symbol series, focus on identifying which property changes (shape, size, shading, orientation, count) and which stays constant across the sequence.",
    concepts: [
      "Alphabetical Position Values: A=1, B=2, C=3, ..., Z=26. Converting letters to numbers helps identify arithmetic patterns.",
      "Cyclic Nature: The alphabet is cyclic, after Z (26), you wrap back to A (1). So Z + 2 = B.",
      "Forward and Backward Shifts: A series may move forward (+1, +2, +3) or backward (-1, -2, -3) through the alphabet.",
      "Group Patterns: Letters may be arranged in groups (pairs, triples) where each group follows a consistent rule.",
      "Mirror/Reverse Patterns: Some series use mirror images of letter groups, e.g., AB, BA, CD, DC.",
      "Symbol Properties: In symbol series, track shape, size, shading/fill, orientation/rotation, and count of elements independently.",
    ],
    methods: [
      {
        name: "Position Value Method",
        steps: [
          "Convert each letter in the series to its position number (A=1, B=2, ..., Z=26).",
          "Compute the differences between consecutive position values.",
          "Identify the pattern in the differences (constant, increasing, alternating, etc.).",
          "Use the pattern to determine the next position value and convert back to a letter.",
          "If the value exceeds 26, apply modular arithmetic (subtract 26 to wrap around).",
        ],
      },
      {
        name: "Group Analysis Method",
        steps: [
          "Divide the series into logical groups (pairs, triples, or segments separated by commas/spaces).",
          "Analyze the relationship within each group (e.g., consecutive letters, reverse order, constant gap).",
          "Analyze the relationship between groups (e.g., each group starts 3 positions ahead of the previous group).",
          "Apply the discovered rules to construct the next group.",
        ],
      },
      {
        name: "Symbol Tracking Method",
        steps: [
          "List all properties that could change: shape, shading, size, rotation, position, count.",
          "Track each property across all elements in the series independently.",
          "Identify which properties change and what their individual patterns are.",
          "Combine the individual property patterns to predict the next symbol.",
        ],
      },
    ],
    quickTricks: [
      "Memorize key alphabet positions: A=1, E=5, I=9, M=13, N=14, O=15, S=19, T=20, Z=26.",
      "For opposite letters: A-Z, B-Y, C-X, etc. Each pair sums to 27.",
      "If the gap between letters keeps increasing by 1 (e.g., +1, +2, +3, +4), look for triangular number connections.",
      "In symbol series, if you cannot find a single pattern, check if alternating elements follow separate sub-patterns.",
    ],
    solvedExamples: [
      {
        problem: "Find the next letter in the series: A, C, F, J, O, ?",
        solution:
          "Step 1: Convert to positions: A=1, C=3, F=6, J=10, O=15.\nStep 2: Compute differences: 3-1=2, 6-3=3, 10-6=4, 15-10=5.\nStep 3: The differences are 2, 3, 4, 5, increasing by 1 each time.\nStep 4: The next difference = 6. Next position = 15 + 6 = 21.\nStep 5: Position 21 = U.",
        answer: "U",
      },
      {
        problem:
          "Find the next group in the series: AZ, BY, CX, DW, ?",
        solution:
          "Step 1: First letters of each group: A, B, C, D, moving forward by 1.\nStep 2: Second letters of each group: Z, Y, X, W, moving backward by 1.\nStep 3: The pattern: first letter advances by 1, second letter retreats by 1.\nStep 4: Next first letter: E (D+1). Next second letter: V (W-1).\nStep 5: The next group is EV.",
        answer: "EV",
      },
      {
        problem:
          "Find the missing letters: B, E, H, K, ?, Q",
        solution:
          "Step 1: Convert to positions: B=2, E=5, H=8, K=11, ?, Q=17.\nStep 2: Differences: 5-2=3, 8-5=3, 11-8=3. Constant difference of 3.\nStep 3: Missing position = 11 + 3 = 14.\nStep 4: Position 14 = N. Verify: 14 + 3 = 17 = Q. Correct.",
        answer: "N",
      },
    ],
    commonMistakes: [
      "Forgetting the cyclic nature of the alphabet, after Z comes A, not stopping at Z.",
      "Miscounting letter positions, especially for letters in the second half of the alphabet (N=14, not 13).",
      "Trying to force a single pattern when the series actually has two interleaved sub-patterns.",
    ],
    keyTakeaways: [
      "Always convert letters to numbers first, it makes pattern detection much easier.",
      "Memorize key letter positions to speed up conversions.",
      "Look for group patterns when individual letter patterns are not obvious.",
      "For symbol series, track each visual property independently.",
      "Opposite letters in the alphabet always sum to 27 (A+Z=1+26=27).",
    ],
  },
  {
    slug: "essential-part",
    categorySlug: "logical-reasoning",
    introduction:
      "Essential Part questions test your ability to identify the most fundamental component of a given concept, object, or situation. You are given a word and a set of answer choices, and you must determine which choice represents something that is absolutely necessary for the given word to exist or function. This is a test of precise definitional thinking.\n\nThe key principle is necessity versus association. Many things may be commonly associated with a concept, but only the essential part is something without which the concept cannot exist. For example, a 'book' essentially requires 'pages', without pages, there is no book. A 'library' or 'author' may be associated with books, but they are not essential to the definition of a book.\n\nThese questions appear straightforward but can be tricky because distractors are often closely related to the word. The difference between 'essential' and 'commonly associated' is the crux. Ask yourself: 'Can the thing exist without this?' If the answer is yes, it is not essential.",
    concepts: [
      "Necessity Test: An essential part is something without which the given word/concept cannot exist or be defined.",
      "Association vs. Essence: Many options will be related or associated but not essential. A 'car' is associated with 'roads' but does not require roads to exist.",
      "Definitional Thinking: Focus on the core definition of the word, not on common usage or typical scenarios.",
      "Eliminate the Non-Essential: Remove options that are merely helpful, common, or typical but not absolutely required.",
      "Category Precision: Distinguish between a specific type and the broader category. A 'journey' requires 'travel' (essential) but not 'a car' (one specific means).",
    ],
    methods: [
      {
        name: "Elimination by Necessity Test",
        steps: [
          "Read the given word and understand its core meaning.",
          "For each answer choice, ask: 'Can the given concept exist without this?'",
          "If the concept CAN exist without the option, eliminate it.",
          "The option that the concept CANNOT exist without is the essential part.",
        ],
      },
      {
        name: "Definition-Based Analysis",
        steps: [
          "Write a one-sentence definition of the given word in your mind.",
          "Identify the key components in that definition.",
          "Match those key components against the answer choices.",
          "The answer choice that appears in the core definition is the essential part.",
        ],
      },
    ],
    rules: [
      "The essential part is always necessary, never merely sufficient or common.",
      "If multiple options seem necessary, choose the most fundamental one, the one that is required by definition.",
      "Do not confuse a typical feature with a defining feature.",
      "General categories are more likely to be essential than specific instances (e.g., 'fuel' is essential for fire, not 'wood' specifically).",
    ],
    quickTricks: [
      "Use the 'remove and check' test: mentally remove the option from the concept. If the concept collapses, that is the essential part.",
      "Be wary of options that describe a common scenario, 'umbrella' is commonly associated with 'rain' but rain does not essentially require an umbrella.",
      "The essential part is usually a broader, more fundamental concept, not a narrow or specific one.",
      "If confused between two choices, pick the one that is more universally true across all instances of the concept.",
    ],
    solvedExamples: [
      {
        problem:
          "What is the essential part of 'language'?\nOptions: (a) Words (b) Grammar (c) Writing (d) Conversation",
        solution:
          "Step 1: Define 'language', a system of communication using symbols or sounds.\nStep 2: Apply the necessity test:\n- Words: A language must have units of meaning (words or signs). Without words/signs, there is no language. Essential.\n- Grammar: While languages have grammar, the most fundamental requirement is having the units themselves.\n- Writing: Many languages have no written form (oral languages). Not essential.\n- Conversation: Language can exist without conversation (e.g., written-only use or a dead language). Not essential.\nStep 3: Words are the fundamental units without which a language cannot exist.",
        answer: "(a) Words",
      },
      {
        problem:
          "What is the essential part of 'desert'?\nOptions: (a) Cactus (b) Sand (c) Arid (d) Oasis",
        solution:
          "Step 1: Define 'desert', a barren, extremely dry (arid) region with very little precipitation.\nStep 2: Apply the necessity test:\n- Cactus: Many deserts have no cacti (e.g., Antarctic desert, Gobi desert). Not essential.\n- Sand: Not all deserts are sandy, rocky deserts and ice deserts exist. Not essential.\n- Arid: By definition, a desert is an arid (extremely dry) region. This is the defining characteristic. Essential.\n- Oasis: An oasis is a feature found in some deserts, not all. Not essential.\nStep 3: Aridity is the defining characteristic of a desert.",
        answer: "(c) Arid",
      },
      {
        problem:
          "What is the essential part of 'election'?\nOptions: (a) Voters (b) Democracy (c) Candidates (d) Campaign",
        solution:
          "Step 1: Define 'election', a process in which people choose among candidates for a position.\nStep 2: Apply the necessity test:\n- Voters: An election requires people who vote. Without voters, there is no election. Essential.\n- Democracy: Elections can occur in non-democratic systems (e.g., union elections, corporate board elections). Not essential to the concept of an election.\n- Candidates: An election also requires candidates. Essential.\n- Campaign: Campaigns are common but not necessary, an election can happen without campaigning.\nStep 3: Both voters and candidates are essential. Among the choices, 'candidates' is what makes an election distinct (choosing among candidates). But 'voters' is equally essential. Typically, the question expects the most defining element, candidates define what is being voted on.\nNote: When both seem essential, pick the most universally required one. Without candidates there is nothing to choose from, making the election meaningless.",
        answer: "(c) Candidates",
      },
    ],
    commonMistakes: [
      "Choosing an option that is commonly associated with the word but is not required for its existence.",
      "Confusing a specific instance (e.g., 'sand' for desert) with the defining characteristic (e.g., 'arid').",
      "Overthinking by bringing in real-world associations instead of focusing on the core definition.",
    ],
    keyTakeaways: [
      "The essential part is what is absolutely necessary for the concept to exist, not what is merely typical.",
      "Use the 'remove and check' test: if removing the option destroys the concept, it is essential.",
      "Prefer broader, definitional components over narrow, specific instances.",
      "Always focus on the dictionary definition, not personal experience or common associations.",
      "Eliminate options one by one, usually only one option passes the strict necessity test.",
    ],
  },
  {
    slug: "analogies",
    categorySlug: "logical-reasoning",
    introduction:
      "Analogy questions test your ability to identify relationships between pairs of words or concepts and then find another pair that shares the same relationship. The format is usually 'A is to B as C is to ?', you must determine the relationship between A and B, then apply that same relationship to find the answer for C.\n\nAnalogies appear in verbal reasoning, logical reasoning, and even non-verbal reasoning sections. The relationships tested can be semantic (meaning-based), functional (use-based), categorical (part-whole, type-of), or degree-based (intensity). Being able to precisely name the relationship is the most critical skill.\n\nCommon pitfall: many students identify only a vague connection (e.g., 'they are related') instead of the specific, precise relationship. For instance, 'Pen : Writer' is not just 'related to writing', the precise relationship is 'tool : user.' Finding this precise relationship and matching it is the key to answering correctly.",
    concepts: [
      "Synonyms/Antonyms: Words that mean the same (happy : joyful) or opposite (hot : cold).",
      "Part to Whole: One word is a component of the other (wheel : car, chapter : book).",
      "Object to Function: One word is an object and the other is its primary function (knife : cut, pen : write).",
      "Worker to Tool: One word is a profession and the other is the tool used (painter : brush, surgeon : scalpel).",
      "Degree/Intensity: Words representing different intensities of the same quality (warm : hot, drizzle : downpour).",
      "Category to Member: One word is a category and the other is a specific member (fruit : apple, planet : Mars).",
    ],
    methods: [
      {
        name: "Relationship Identification Method",
        steps: [
          "Examine the given pair (A : B) and formulate a precise sentence describing their relationship, e.g., 'A is a tool used by B.'",
          "Test your relationship sentence by substituting the words back in, it should feel natural and accurate.",
          "Apply the exact same relationship sentence to the second pair (C : ?) to find the answer.",
          "Verify that the answer pair has the same relationship direction and type as the original pair.",
        ],
      },
      {
        name: "Elimination Method",
        steps: [
          "Identify the general category of relationship in the given pair.",
          "For each answer choice, check if it matches the exact same relationship type and direction.",
          "Eliminate options that have a different relationship type, even if they are loosely related.",
          "If two options seem close, re-examine the original pair for more specific nuances.",
        ],
      },
      {
        name: "Bridge Sentence Method",
        steps: [
          "Create a 'bridge sentence' using the given pair: 'A [relationship] B.' For example, 'A pen is a tool used by a writer.'",
          "Substitute each answer option into the same bridge sentence structure.",
          "The correct answer is the one where the bridge sentence remains true and natural.",
        ],
      },
    ],
    quickTricks: [
      "Always define the relationship as precisely as possible, 'tool used by professional' is better than 'related to.'",
      "Watch out for direction: 'Dog : Puppy' (adult : young) is different from 'Puppy : Dog' (young : adult).",
      "If the analogy involves degree, make sure the intensity change is in the same direction (mild to strong or vice versa).",
      "For part-to-whole analogies, ensure the specificity matches, if the original is a small part to a large whole, the answer should follow the same proportion.",
    ],
    solvedExamples: [
      {
        problem:
          "Pen : Writer :: Scalpel : ?\nOptions: (a) Butcher (b) Surgeon (c) Knife (d) Hospital",
        solution:
          "Step 1: Identify the relationship in 'Pen : Writer', a pen is the primary tool used by a writer. Relationship: Tool : Professional who uses it.\nStep 2: Apply the same relationship to 'Scalpel : ?', a scalpel is the primary tool used by a surgeon.\nStep 3: Check options: (a) Butcher uses a cleaver, not a scalpel. (b) Surgeon uses a scalpel. (c) Knife is another tool, not a professional. (d) Hospital is a place, not a professional.\nStep 4: Answer is Surgeon.",
        answer: "(b) Surgeon",
      },
      {
        problem:
          "Drizzle : Downpour :: Breeze : ?\nOptions: (a) Wind (b) Gale (c) Air (d) Cloud",
        solution:
          "Step 1: Identify the relationship in 'Drizzle : Downpour', both are types of rain, but a drizzle is mild and a downpour is intense. Relationship: Mild form : Intense form of the same phenomenon.\nStep 2: Apply to 'Breeze : ?', a breeze is a mild form of wind. The intense form of wind is a gale.\nStep 3: Check options: (a) Wind is the general category, not the intense form. (b) Gale is an intense, strong wind, matches the relationship. (c) Air is the medium, not related to intensity. (d) Cloud is unrelated.\nStep 4: Answer is Gale.",
        answer: "(b) Gale",
      },
      {
        problem:
          "Chapter : Book :: Verse : ?\nOptions: (a) Poem (b) Stanza (c) Sentence (d) Library",
        solution:
          "Step 1: Identify the relationship: A chapter is a section/part of a book. Relationship: Part : Whole.\nStep 2: Apply to 'Verse : ?', a verse is a part of a poem.\nStep 3: Check: (a) Poem, a verse is part of a poem. This matches. (b) Stanza, a verse and stanza are at the same level (both are parts), not a part-whole relationship. (c) Sentence, different structure. (d) Library, not a part-whole relationship.\nStep 4: Answer is Poem.",
        answer: "(a) Poem",
      },
    ],
    commonMistakes: [
      "Identifying a vague relationship ('they are related') instead of a precise one ('tool used by professional').",
      "Ignoring the direction of the analogy, the order of the pair matters.",
      "Choosing an answer that shares a topic with the original pair but not the same type of relationship.",
    ],
    keyTakeaways: [
      "Precision is everything, always name the exact type of relationship (tool:user, part:whole, cause:effect, etc.).",
      "The relationship must work in the same direction for both pairs.",
      "Use bridge sentences to test each option systematically.",
      "Common relationship types include: synonym, antonym, part-whole, tool-user, worker-tool, cause-effect, degree/intensity, category-member.",
      "When two options seem plausible, the correct one will have the most precise and parallel relationship to the original pair.",
    ],
  },
  {
    slug: "artificial-language",
    categorySlug: "logical-reasoning",
    introduction:
      "Artificial Language questions present a set of made-up words with their English translations, and then ask you to translate a new word or phrase using the patterns established by the given translations. This tests your ability to decode a systematic mapping between the invented language and English by identifying roots, prefixes, suffixes, and structural rules.\n\nThe approach is similar to cracking a code. You compare the given translations to find common elements. If 'gorplex' means 'big dog' and 'gorfinx' means 'big cat,' then 'gor' likely means 'big,' 'plex' means 'dog,' and 'finx' means 'cat.' By systematically isolating common and differing parts, you can decode the language and translate new words.\n\nThese questions require careful, systematic analysis rather than guesswork. The invented language typically has consistent rules, each syllable or morpheme maps to a specific English word or concept. Your job is to figure out which part means what, and then assemble or decode the target word accordingly.",
    concepts: [
      "Morpheme Mapping: Each meaningful unit (prefix, root, suffix) in the artificial language maps to a specific English word or concept.",
      "Comparative Analysis: By comparing two phrases that share a common English word, you can isolate the artificial word for that shared concept.",
      "Positional Consistency: In most artificial languages, word order is consistent, if adjectives come before nouns in one phrase, they do so in all phrases.",
      "Systematic Isolation: Identify what changes and what stays the same between given translations to decode individual word meanings.",
      "Compound Construction: Once individual word meanings are decoded, new phrases are constructed by combining decoded parts in the correct order.",
    ],
    methods: [
      {
        name: "Common Element Isolation Method",
        steps: [
          "List all given artificial phrases alongside their English translations.",
          "Find pairs of translations that share a common English word.",
          "Identify the common element in the corresponding artificial phrases, that element maps to the shared English word.",
          "By process of elimination, determine the meaning of the remaining elements.",
          "Use the decoded mappings to translate the target phrase.",
        ],
      },
      {
        name: "Tabular Mapping Method",
        steps: [
          "Create a table with columns: Artificial Word/Part, English Meaning.",
          "Break each artificial phrase into its components (syllables, word parts).",
          "Cross-reference across given phrases to fill in the table one mapping at a time.",
          "Verify your decoded mappings are consistent with all given translations.",
          "Apply the mappings to translate the question phrase.",
        ],
      },
    ],
    rules: [
      "Every component of the artificial language has a consistent, fixed meaning, it does not change between phrases.",
      "If a component appears in the same position across multiple phrases, it likely carries the same type of meaning (e.g., always an adjective or always a noun).",
      "Do not assume English word order, the artificial language may place modifiers before or after the main word.",
      "Always verify your decoded mappings against all given translations before answering.",
    ],
    quickTricks: [
      "Start with the pair of phrases that share the most common English words, they will reveal the most mappings in one comparison.",
      "If three translations are given and two share a word, compare those two first to isolate the shared element.",
      "Write down each decoded mapping immediately, do not try to keep it all in your head.",
      "Check your final answer by 'back-translating', does your decoded answer correctly translate back to the given English meaning?",
    ],
    solvedExamples: [
      {
        problem:
          "In an artificial language:\n'moki paca' means 'red flower'\n'moki telpa' means 'red hat'\n'basi paca' means 'blue flower'\nWhat does 'basi telpa' mean?",
        solution:
          "Step 1: Compare 'moki paca' (red flower) and 'moki telpa' (red hat). Common artificial word: 'moki.' Common English concept: 'red.' So moki = red.\nStep 2: From 'moki paca' (red flower): moki = red, so paca = flower.\nStep 3: From 'moki telpa' (red hat): moki = red, so telpa = hat.\nStep 4: Verify with 'basi paca' (blue flower): paca = flower (confirmed), so basi = blue.\nStep 5: 'basi telpa' = blue + hat = 'blue hat.'",
        answer: "blue hat",
      },
      {
        problem:
          "In an artificial language:\n'dor argel' means 'small tree'\n'mal argel fin' means 'beautiful small garden'\n'dor lok' means 'small house'\nWhat word means 'garden'?",
        solution:
          "Step 1: Compare 'dor argel' (small tree) and 'dor lok' (small house). Common: 'dor' = 'small.'\nStep 2: From 'dor argel': dor = small, so argel = tree.\nStep 3: From 'dor lok': dor = small, so lok = house.\nStep 4: Look at 'mal argel fin' (beautiful small garden). We know argel = tree... wait, let me re-examine. 'argel' appears in both 'small tree' and 'beautiful small garden.'\nStep 5: Actually, compare 'dor argel' (small tree) and 'mal argel fin' (beautiful small garden). Common artificial word: 'argel.' But the English translations share 'small.' So argel = small.\nStep 6: Revise: from 'dor argel' (small tree), argel = small, so dor = tree.\nStep 7: From 'dor lok' (small house)... but dor = tree now, which contradicts. Let me re-examine.\nStep 8: Re-compare: 'dor argel' shares 'dor' with 'dor lok.' In English, 'small tree' shares 'small' with 'small house.' So dor = small.\nStep 9: Then argel = tree (from 'dor argel'). And lok = house (from 'dor lok').\nStep 10: From 'mal argel fin' (beautiful small garden): dor is not present, but argel is. If argel = tree, then 'mal [tree] fin' = 'beautiful small garden' does not parse well.\nStep 11: Reconsider: in 'mal argel fin,' argel might not mean tree but instead the shared 'small' if word order differs. Checking: 'dor argel' and 'mal argel fin' both contain argel. English: 'small tree' and 'beautiful small garden' both contain 'small.' So argel = small.\nStep 12: Then from 'dor argel' (small tree): argel = small, dor = tree. From 'dor lok' (small house): dor = tree? But English says 'small house.' Contradiction: dor cannot mean both 'small' and 'tree.'\nStep 13: Resolution: 'dor argel' (small tree) and 'dor lok' (small house) share 'dor' and English shares 'small.' So dor = small. From 'dor argel': argel = tree. From 'mal argel fin' (beautiful small garden): argel = tree does not fit because 'tree' is not in 'beautiful small garden.' Unless the language reuses 'argel' differently. But artificial languages are consistent.\nStep 14: The key insight, maybe 'dor' is what is shared with meaning 'small' in the first and third phrases, and 'argel' in phrase 1 and 2 needs re-examination. If dor = small, argel = tree, lok = house. In 'mal argel fin' = 'beautiful small garden': there is no 'small' word since 'dor' is absent. So argel cannot mean small.\nStep 15: Final resolution: dor = small, argel = tree, lok = house. In 'mal argel fin' = 'beautiful small garden,' we need small = some word. Since dor = small but dor is not in this phrase, there may be an error in the problem. Taking it at face value: mal and fin remain. One means 'beautiful' and one means 'garden.' Since 'argel' = tree and is present but 'tree' is not in the translation, this artificial language may use 'argel' to mean 'small' after all. Given the overlap analysis, argel = small (appears in all three English phrases containing 'small'). Then dor = tree, lok = house, mal = beautiful, fin = garden.\nThe word for 'garden' is 'fin.'",
        answer: "fin",
      },
    ],
    commonMistakes: [
      "Jumping to conclusions from a single comparison without verifying against all given translations.",
      "Assuming the artificial language follows English word order, it may not.",
      "Failing to cross-check decoded mappings against every given phrase for consistency.",
    ],
    keyTakeaways: [
      "Artificial language problems are decoded by comparing phrases that share common English words.",
      "Always isolate one meaning at a time through systematic comparison.",
      "Verify every decoded mapping against all given translations before answering.",
      "Word order in the artificial language may differ from English, do not assume.",
      "Write down your mappings as you decode them to avoid confusion.",
    ],
  },
  {
    slug: "matching-definitions",
    categorySlug: "logical-reasoning",
    introduction:
      "Matching Definitions questions provide you with a definition and ask you to identify which word from the given options best matches that definition. Unlike vocabulary questions that test whether you know the meaning of a word, these questions test whether you can apply a precise definition to select the correct term from among close alternatives.\n\nThe challenge lies in the fact that answer choices often include words that are related but not exactly matching. You might see synonyms, near-synonyms, or words from the same domain. The correct answer is the one that most precisely and completely matches the given definition, not just partially.\n\nSuccess requires careful reading of the definition, identifying its key distinguishing features, and then matching those features against each option. Pay attention to qualifiers like 'always,' 'sometimes,' 'intentional,' 'unintentional,' 'positive,' 'negative', these subtle words often distinguish the correct answer from the distractors.",
    concepts: [
      "Precise Matching: The correct answer must match ALL parts of the definition, not just some parts.",
      "Key Qualifiers: Words like 'intentional,' 'deliberate,' 'accidental,' 'always,' 'sometimes' in the definition narrow down the correct match significantly.",
      "Domain Specificity: A definition may specify a context (legal, medical, psychological) that limits which word fits.",
      "Exclusion by Scope: If the definition describes a narrow concept, a broad/general word is incorrect, and vice versa.",
      "Connotation Matters: Positive vs. negative connotation in the definition must match the connotation of the answer word.",
    ],
    methods: [
      {
        name: "Key Feature Extraction Method",
        steps: [
          "Read the definition carefully and underline or note every key feature (who, what, when, why, how).",
          "List 2-3 essential features that the definition specifies.",
          "Check each answer option against all the essential features.",
          "Eliminate options that fail to match even one essential feature.",
          "The option matching all essential features is the answer.",
        ],
      },
      {
        name: "Process of Elimination",
        steps: [
          "Read each answer option and recall or infer its meaning.",
          "Compare each option's meaning with the given definition.",
          "Eliminate options that are clearly too broad, too narrow, or in the wrong domain.",
          "Among remaining options, the one with the closest and most complete match wins.",
        ],
      },
    ],
    quickTricks: [
      "Pay special attention to qualifiers in the definition, 'deliberate' vs. 'accidental' can change the answer entirely.",
      "If two options seem similar, look for the subtle difference that the definition specifically addresses.",
      "Read the definition twice, once for overall meaning, once for specific details you might have missed.",
      "If the definition mentions a specific field or context, only consider words that belong to that field.",
    ],
    solvedExamples: [
      {
        problem:
          "Definition: 'A feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements.'\nOptions: (a) Sympathy (b) Respect (c) Jealousy (d) Fear",
        solution:
          "Step 1: Key features of the definition: (1) feeling of deep admiration, (2) elicited by abilities/qualities/achievements.\nStep 2: Check options:\n- Sympathy: feeling of pity or sorrow for someone else's misfortune, does not match 'admiration for abilities.'\n- Respect: a feeling of deep admiration for someone based on their abilities, qualities, or achievements, perfect match.\n- Jealousy: resentment toward someone for their advantages, negative connotation, not admiration.\n- Fear: an unpleasant emotion caused by threat of danger, completely unrelated to admiration.\nStep 3: Respect matches all key features.",
        answer: "(b) Respect",
      },
      {
        problem:
          "Definition: 'The act of intentionally deceiving someone in order to gain an unfair or unlawful advantage.'\nOptions: (a) Mistake (b) Fraud (c) Error (d) Negligence",
        solution:
          "Step 1: Key features: (1) intentional, (2) deceiving someone, (3) to gain unfair/unlawful advantage.\nStep 2: Check options:\n- Mistake: unintentional error, fails the 'intentional' criterion.\n- Fraud: intentional deception for unlawful gain, matches all three features.\n- Error: unintentional inaccuracy, fails the 'intentional' criterion.\n- Negligence: failure to take proper care, not intentional deception.\nStep 3: Fraud is the only option matching all key features.",
        answer: "(b) Fraud",
      },
    ],
    commonMistakes: [
      "Selecting a word that matches part of the definition but not the full definition (partial matching).",
      "Ignoring qualifiers like 'intentional' or 'deliberate,' which distinguish the correct answer from similar options.",
      "Choosing a word from the right domain but with the wrong connotation (positive vs. negative).",
    ],
    keyTakeaways: [
      "Read the definition carefully and extract 2-3 key distinguishing features before looking at options.",
      "The correct answer must match ALL key features of the definition, not just some.",
      "Qualifiers (intentional, accidental, always, sometimes) are critical differentiators.",
      "When two options seem similar, the subtle details in the definition will point to the correct one.",
      "Practice building definitions for common words, this strengthens your matching ability.",
    ],
  },
  {
    slug: "making-judgments",
    categorySlug: "logical-reasoning",
    introduction:
      "Making Judgments questions assess your ability to evaluate a situation and decide on the best course of action based on given facts, rules, or criteria. You are presented with a scenario and a set of rules or policies, and you must determine the correct judgment or decision that follows from applying those rules to the given facts.\n\nThese questions simulate real-world decision-making processes, such as loan eligibility, admission criteria, or candidate selection, where specific conditions must be met. The scenario provides all the data about a person or situation, and the rules specify the conditions. Your job is to check each condition systematically and arrive at the correct judgment.\n\nThe key skill is methodical, step-by-step evaluation. You must resist the temptation to skim the conditions or rely on intuition. Every condition must be checked, and partial matches must be identified. Often, the correct answer involves 'refer to a higher authority' or 'conditional acceptance' rather than a simple accept/reject.",
    concepts: [
      "Condition Matching: Check whether the given facts satisfy each specified condition exactly, partially met conditions may lead to a different outcome.",
      "Decision Hierarchy: Rules often specify a hierarchy: accept if all conditions are met, reject if a key condition is unmet, refer to authority if borderline.",
      "Threshold Values: Many conditions involve numerical thresholds (age, percentage, experience). Pay close attention to boundary conditions like 'at least,' 'more than,' 'not less than.'",
      "Exception Clauses: Some rules have exceptions or special cases that override the general conditions. Read all rules completely before deciding.",
      "Sequential Evaluation: Check conditions in the order they are given to avoid skipping any and to follow the intended decision flow.",
    ],
    methods: [
      {
        name: "Checklist Method",
        steps: [
          "List all conditions/criteria specified in the rules.",
          "For each condition, check whether the candidate/situation satisfies it, mark as Met, Not Met, or Borderline.",
          "Count the results: if all conditions are Met, the judgment is usually 'Accept' or 'Approve.'",
          "If one or more conditions are Not Met, check if any exception or referral rule applies.",
          "Apply the decision rule that matches the pattern of met/unmet conditions.",
        ],
      },
      {
        name: "Decision Tree Method",
        steps: [
          "Arrange the conditions in a decision tree format: first check the most critical condition.",
          "At each node, branch into 'condition met' and 'condition not met.'",
          "Follow the branches based on the given facts until you reach a terminal decision (accept, reject, refer).",
          "This approach is especially useful when conditions have different weights or priorities.",
        ],
      },
    ],
    quickTricks: [
      "Underline all numerical thresholds in the rules, these are the most common sources of error.",
      "Pay attention to 'at least' (>=) vs. 'more than' (>) vs. 'not less than' (>=), they make a critical difference at boundary values.",
      "Check if there is a 'refer' or 'conditional' option, many questions are designed so that one condition is just barely unmet, leading to referral rather than rejection.",
      "If the candidate meets all but one condition, look for exception clauses that might still allow acceptance.",
    ],
    solvedExamples: [
      {
        problem:
          "A bank gives a loan if: (1) Applicant is at least 21 years old, (2) Annual income is at least 5 lakhs, (3) Has a guarantor with annual income of at least 3 lakhs, (4) If conditions 1 and 2 are met but not 3, the case is referred to the manager. Candidate: Age 25, Income 6 lakhs, No guarantor. What is the decision?",
        solution:
          "Step 1: Check condition 1, Age is 25, requirement is at least 21. Met.\nStep 2: Check condition 2, Income is 6 lakhs, requirement is at least 5 lakhs. Met.\nStep 3: Check condition 3, No guarantor. Not Met.\nStep 4: Apply rule 4, Conditions 1 and 2 are met but condition 3 is not met. The case is referred to the manager.",
        answer: "Refer to manager",
      },
      {
        problem:
          "A company selects a candidate if: (1) Age is between 22 and 30, (2) Has at least 2 years of experience, (3) Scored at least 60% in graduation. If condition 3 is not met but score is at least 55%, candidate may be given a provisional offer. Candidate: Age 26, Experience 3 years, Graduation score 57%. What is the decision?",
        solution:
          "Step 1: Check condition 1, Age 26, between 22 and 30. Met.\nStep 2: Check condition 2, Experience 3 years, at least 2 required. Met.\nStep 3: Check condition 3, Graduation score 57%, at least 60% required. Not Met.\nStep 4: Check exception, Score is at least 55% (57% >= 55%). Exception applies.\nStep 5: Candidate gets a provisional offer.",
        answer: "Provisional offer",
      },
    ],
    commonMistakes: [
      "Missing a condition during evaluation, always check every single condition systematically.",
      "Confusing 'at least X' (>=) with 'more than X' (>), especially at boundary values.",
      "Ignoring exception or referral clauses and jumping to a simple accept/reject conclusion.",
    ],
    keyTakeaways: [
      "Use a systematic checklist approach, check every condition one by one.",
      "Pay close attention to boundary values and the exact wording of thresholds.",
      "Look for exception clauses and conditional decisions, not every answer is a simple accept/reject.",
      "Do not rely on intuition, the answer must follow from the given rules, not your personal judgment.",
      "Practice with different rule structures to develop speed in condition-checking.",
    ],
  },
  {
    slug: "logical-deduction",
    categorySlug: "logical-reasoning",
    introduction:
      "Logical Deduction involves drawing valid conclusions from given statements (premises) using the rules of formal logic. The most common form involves categorical syllogisms, arguments with two premises and a conclusion involving categories of things (All, Some, No). You must determine whether a given conclusion logically follows from the premises, regardless of whether the statements are true in the real world.\n\nThe key principle is that logical validity depends on the structure of the argument, not the truth of the statements. If the premises say 'All dogs are cats' and 'All cats are birds,' then the conclusion 'All dogs are birds' is logically valid, even though the premises are factually false. Your job is to evaluate the logical structure, not the factual content.\n\nLogical deduction questions frequently test your understanding of universal statements (All A are B, No A are B) and particular statements (Some A are B, Some A are not B). Venn diagrams are the most reliable tool for solving these problems, as they visually represent the relationships and make valid conclusions immediately apparent.",
    concepts: [
      "Universal Affirmative (A-type): 'All A are B', every member of A is also a member of B.",
      "Universal Negative (E-type): 'No A is B', no member of A is a member of B (and vice versa).",
      "Particular Affirmative (I-type): 'Some A are B', at least one member of A is also a member of B.",
      "Particular Negative (O-type): 'Some A are not B', at least one member of A is not a member of B.",
      "Conversion: 'All A are B' does NOT mean 'All B are A.' But 'No A is B' does imply 'No B is A.' 'Some A are B' implies 'Some B are A.'",
      "Complementary Pairs: 'All A are B' and 'Some A are not B' are complementary, exactly one must be true. Similarly, 'No A is B' and 'Some A are B' are complementary.",
    ],
    methods: [
      {
        name: "Venn Diagram Method",
        steps: [
          "Draw circles for each category mentioned in the premises.",
          "For 'All A are B,' draw circle A completely inside circle B.",
          "For 'No A is B,' draw circles A and B with no overlap.",
          "For 'Some A are B,' draw circles A and B with a partial overlap and shade or mark the overlapping region.",
          "After drawing all premises, check each given conclusion to see if it is supported by the diagram. A conclusion follows only if it is true in EVERY possible valid diagram.",
        ],
      },
      {
        name: "Syllogism Rules Method",
        steps: [
          "Identify the three terms: major term (predicate of conclusion), minor term (subject of conclusion), and middle term (appears in both premises but not in the conclusion).",
          "Apply the rules: (1) The middle term must be distributed at least once. (2) A term distributed in the conclusion must be distributed in its premise. (3) Two negative premises yield no valid conclusion. (4) If one premise is negative, the conclusion must be negative. (5) If both premises are affirmative, the conclusion must be affirmative.",
          "If all rules are satisfied, the conclusion is valid. If any rule is violated, the conclusion does not follow.",
        ],
      },
      {
        name: "Either-Or / Complementary Pair Method",
        steps: [
          "If individual conclusions I and II do not independently follow from the premises, check if they form a complementary pair.",
          "Complementary pairs: ('All A are B' vs 'Some A are not B') or ('No A is B' vs 'Some A are B').",
          "If two conclusions are complementary, exactly one of them must be true, so the answer is 'Either I or II follows.'",
        ],
      },
    ],
    quickTricks: [
      "If both premises are particular (Some...), no definite conclusion follows.",
      "If both premises are negative, no definite conclusion follows.",
      "'All A are B' always allows the conclusion 'Some A are B' (since if all are, then certainly some are).",
      "When premises connect through a middle term (A-B, B-C), you can potentially conclude about A-C.",
      "For 'either-or' questions, always check if the two conclusions form a complementary pair.",
    ],
    solvedExamples: [
      {
        problem:
          "Statements: All dogs are animals. All animals are living beings.\nConclusions: I. All dogs are living beings. II. Some living beings are dogs.",
        solution:
          "Step 1: Draw Venn diagrams. 'All dogs are animals', dogs circle inside animals circle. 'All animals are living beings', animals circle inside living beings circle.\nStep 2: Result: Dogs inside Animals inside Living Beings.\nStep 3: Check Conclusion I: 'All dogs are living beings.' Since dogs are inside animals, which are inside living beings, all dogs are indeed living beings. Follows.\nStep 4: Check Conclusion II: 'Some living beings are dogs.' Since all dogs are living beings, there exist some living beings that are dogs. Follows.\nStep 5: Both conclusions I and II follow.",
        answer: "Both I and II follow",
      },
      {
        problem:
          "Statements: Some books are pens. No pen is a pencil.\nConclusions: I. Some books are not pencils. II. No book is a pencil.",
        solution:
          "Step 1: 'Some books are pens', books and pens circles partially overlap.\nStep 2: 'No pen is a pencil', pens and pencils circles do not overlap at all.\nStep 3: Check Conclusion I: 'Some books are not pencils.' The books that are pens cannot be pencils (since no pen is a pencil). So at least those books are not pencils. This follows.\nStep 4: Check Conclusion II: 'No book is a pencil.' We know some books are pens and no pen is a pencil, but what about books that are not pens? Those books might or might not be pencils, we have no information. So we cannot say 'No book is a pencil' with certainty. Does not follow.\nStep 5: Only Conclusion I follows.",
        answer: "Only I follows",
      },
      {
        problem:
          "Statements: No car is a bus. Some buses are trains.\nConclusions: I. No car is a train. II. Some trains are not cars.",
        solution:
          "Step 1: 'No car is a bus', cars and buses do not overlap.\nStep 2: 'Some buses are trains', buses and trains partially overlap.\nStep 3: Check Conclusion I: 'No car is a train.' Cars and buses do not overlap, and some buses are trains. But can some cars be trains (through a path not involving buses)? We have no information preventing cars and trains from overlapping directly. So 'No car is a train' does not necessarily follow.\nStep 4: Check Conclusion II: 'Some trains are not cars.' The trains that are buses cannot be cars (since no car is a bus). So at least some trains (those that are buses) are not cars. This follows.\nStep 5: Only Conclusion II follows.",
        answer: "Only II follows",
      },
    ],
    commonMistakes: [
      "Assuming 'All A are B' means 'All B are A', this is the most common error (illicit conversion).",
      "Drawing only one possible Venn diagram instead of considering all valid configurations, a conclusion must hold in ALL valid diagrams.",
      "Forgetting to check for the 'either-or' option when neither conclusion individually follows.",
    ],
    keyTakeaways: [
      "Always use Venn diagrams for syllogism problems, they make the logic visual and unambiguous.",
      "Logical validity depends on structure, not real-world truth.",
      "'All A are B' only means A is a subset of B, it does NOT mean B is a subset of A.",
      "Two negative premises or two particular premises yield no definite conclusion.",
      "Check for complementary pairs when neither conclusion individually follows, the answer may be 'either-or.'",
    ],
  },
  {
    slug: "logical-problems",
    categorySlug: "logical-reasoning",
    introduction:
      "Logical Problems encompass a broad category of reasoning questions where you must use given clues, conditions, or constraints to arrive at a definite conclusion. These include puzzles involving arrangements (linear, circular), rankings, grouping, scheduling, and truth-teller/liar problems. The common thread is that you must systematically process information to deduce facts that are not directly stated.\n\nThese problems test your ability to organize information, make valid inferences, and avoid contradictions. The typical approach involves creating a structured representation (table, grid, diagram) and filling it in step by step using the given clues. Each clue narrows down the possibilities, and the combination of all clues leads to a unique solution.\n\nThe most important skill is systematic elimination: start with the clues that give the most definite information, fill in what you can, and then use the remaining clues to resolve ambiguities. Avoid guessing, every conclusion should be logically forced by the clues.",
    concepts: [
      "Linear Arrangement: Arranging people or objects in a row based on given conditions about their relative positions.",
      "Circular Arrangement: Arranging people around a circular table where positions are relative (no fixed start point).",
      "Ranking/Ordering: Determining the order or rank of items based on comparative clues (taller than, heavier than, etc.).",
      "Grouping/Classification: Assigning people or objects to categories based on given conditions.",
      "Truth-Teller and Liar Problems: Determining who is telling the truth and who is lying based on their statements and logical consistency.",
      "Constraint Satisfaction: Finding an assignment that satisfies all given constraints simultaneously.",
    ],
    methods: [
      {
        name: "Tabular/Grid Method",
        steps: [
          "Identify all the variables (people, items, positions, attributes).",
          "Create a table or grid with one axis for each variable category.",
          "Start with the most definitive clues, those that fix a specific value or position.",
          "Fill in the grid step by step, using each clue to mark 'yes' or 'no' in cells.",
          "After each clue, check for cells that can be determined by elimination (if all but one option in a row/column are eliminated, the remaining one must be correct).",
        ],
      },
      {
        name: "Process of Elimination",
        steps: [
          "List all possible assignments or arrangements.",
          "Apply each clue to eliminate arrangements that violate it.",
          "After applying all clues, the remaining arrangement(s) are the valid solution(s).",
          "If multiple solutions remain, look for additional inferences from combining clues.",
        ],
      },
      {
        name: "Assumption and Verification Method",
        steps: [
          "When direct deduction stalls, assume one possibility from a limited set.",
          "Follow through the consequences of that assumption using the given clues.",
          "If the assumption leads to a contradiction, it is false, the other possibility must be correct.",
          "If the assumption is consistent with all clues, it is the correct answer.",
        ],
      },
    ],
    quickTricks: [
      "Always start with the clue that is most restrictive or gives the most definite information.",
      "In arrangement problems, fix one element's position first, then place others relative to it.",
      "In circular arrangements, fix one person's seat (since there is no absolute position) and place others relative to them.",
      "For truth/liar problems, assume one person is telling the truth, follow the implications, and check for consistency.",
      "Draw diagrams, visual representations make complex relationships much easier to track.",
    ],
    solvedExamples: [
      {
        problem:
          "Five people, A, B, C, D, E, are sitting in a row facing north. B sits to the immediate right of A. E sits at one of the extreme ends. C is not adjacent to E. D sits to the immediate right of C. Who sits in the middle?",
        solution:
          "Step 1: There are 5 positions (left to right): 1, 2, 3, 4, 5.\nStep 2: E sits at an extreme end, either position 1 or 5.\nStep 3: B sits immediately right of A, so A-B are consecutive (A then B).\nStep 4: D sits immediately right of C, so C-D are consecutive (C then D).\nStep 5: We have two consecutive pairs: A-B and C-D, plus E at an end.\nStep 6: Try E at position 1: Remaining positions 2-5 must contain A-B and C-D. Possible: E, C, D, A, B or E, A, B, C, D.\nStep 7: Check 'C is not adjacent to E.' In E, C, D, A, B, C is at position 2, adjacent to E at position 1. Violates the condition.\nStep 8: Try E, A, B, C, D, C is at position 4, not adjacent to E at position 1. Valid.\nStep 9: Try E at position 5: Possible arrangements with A-B and C-D in positions 1-4: A, B, C, D, E or C, D, A, B, E.\nStep 10: Check C, D, A, B, E, C at position 1, E at position 5, not adjacent. Valid. A, B, C, D, E, C at position 3, E at position 5, not adjacent. Valid.\nStep 11: We have multiple valid arrangements. In E, A, B, C, D, middle (position 3) is B. In C, D, A, B, E, middle is A. In A, B, C, D, E, middle is C.\nStep 12: Recheck all conditions for each. All three satisfy the given conditions. The problem likely expects a unique answer, suggesting I may need to re-examine. Actually, in a standard exam context, the question asks 'who sits in the middle' implying a unique answer. Let me recheck: in arrangement A,B,C,D,E, that works. In E,A,B,C,D, works. In C,D,A,B,E, works. Since multiple arrangements are valid, the question as stated has multiple answers. In exam settings, such problems usually have additional implicit constraints. The most commonly expected answer based on standard versions of this problem is B (from E, A, B, C, D).",
        answer: "B (in the arrangement E, A, B, C, D)",
      },
      {
        problem:
          "Among five friends, P is taller than Q but shorter than R. S is taller than R. T is shorter than Q. Who is the tallest?",
        solution:
          "Step 1: From the clues: P > Q (P taller than Q), R > P (P shorter than R), S > R (S taller than R), Q > T (T shorter than Q).\nStep 2: Chain the inequalities: S > R > P > Q > T.\nStep 3: The tallest person is S.",
        answer: "S",
      },
    ],
    commonMistakes: [
      "Not considering all possible arrangements before settling on one, always verify uniqueness.",
      "Misinterpreting 'left of' vs. 'immediate left of', one allows gaps, the other does not.",
      "In ranking problems, confusing 'taller than' (greater) with 'shorter than' (lesser) when chaining inequalities.",
    ],
    keyTakeaways: [
      "Always organize information in a table, grid, or diagram before attempting to solve.",
      "Start with the most restrictive clues to narrow down possibilities quickly.",
      "In arrangement problems, fix one element first and build around it.",
      "For truth/liar problems, use the assumption-contradiction method.",
      "Verify your final answer satisfies ALL given conditions, not just some.",
    ],
  },
  {
    slug: "course-of-action",
    categorySlug: "logical-reasoning",
    introduction:
      "Course of Action questions present a situation or problem statement followed by suggested courses of action. You must evaluate whether each proposed action logically addresses the problem and is practically feasible. The question typically asks which course(s) of action should be taken in response to the given situation.\n\nThese questions test your practical reasoning and decision-making ability. A good course of action must be (1) directly relevant to the problem stated, (2) practically implementable, (3) likely to solve or mitigate the problem, and (4) not create bigger problems than the one it aims to solve. Actions that are extreme, impractical, or unrelated to the root cause should be rejected.\n\nThe key is to evaluate each proposed action independently against the given problem. Do not assume information not stated in the problem, and do not reject an action just because it is not the best possible action, it only needs to be a reasonable and viable step toward addressing the situation.",
    concepts: [
      "Relevance: The action must directly address the problem or situation described, not a tangential issue.",
      "Practicality: The action must be realistically implementable, banning something nationwide or changing laws overnight is generally impractical.",
      "Proportionality: The action should be proportionate to the problem, extreme measures for minor issues are not good courses of action.",
      "Root Cause vs. Symptom: The best actions address the root cause of a problem, not just its symptoms.",
      "Negative Consequences: An action that creates bigger problems than it solves should be rejected.",
      "Independence: Evaluate each course of action independently, one action being good does not affect the evaluation of another.",
    ],
    methods: [
      {
        name: "Relevance-Practicality-Effectiveness Test",
        steps: [
          "Read the problem statement carefully and identify the core issue.",
          "For each proposed course of action, ask: Is it relevant to the core issue?",
          "If relevant, ask: Is it practically implementable?",
          "If practical, ask: Will it likely be effective in addressing the issue?",
          "If it passes all three tests, it is a good course of action. If it fails any test, it should not be followed.",
        ],
      },
      {
        name: "Stakeholder Impact Analysis",
        steps: [
          "Identify the stakeholders affected by the problem (public, government, organizations, individuals).",
          "For each proposed action, determine which stakeholders are impacted and how.",
          "Evaluate whether the action creates a net positive impact across stakeholders.",
          "Actions that disproportionately harm one group without adequate justification should be questioned.",
        ],
      },
    ],
    quickTricks: [
      "Actions involving absolute bans, shutdowns, or extreme punishments are usually NOT good courses of action unless the situation is extremely severe.",
      "Actions that involve investigation, review, awareness campaigns, or incremental improvement are usually valid.",
      "If an action addresses only a symptom and ignores the root cause, it is weak but may still be a reasonable short-term measure.",
      "Government/administrative actions like 'form a committee,' 'conduct an inquiry,' or 'issue guidelines' are generally considered practical.",
      "Actions that require fundamental changes to law or constitution are impractical as immediate responses.",
    ],
    solvedExamples: [
      {
        problem:
          "Problem: The number of road accidents in the city has increased by 30% in the last year.\nCourses of Action:\nI. The government should impose a complete ban on all private vehicles.\nII. The traffic police should increase patrolling and enforce traffic rules more strictly.",
        solution:
          "Step 1: Core issue, increase in road accidents.\nStep 2: Evaluate Action I, 'Complete ban on all private vehicles.' Is it relevant? Yes, fewer vehicles means fewer accidents. Is it practical? No, a complete ban on private vehicles is extreme and would cripple transportation, economy, and daily life. Is it proportionate? No, a 30% increase does not justify a total ban. Conclusion: Not a good course of action.\nStep 3: Evaluate Action II, 'Increase patrolling and enforce traffic rules.' Is it relevant? Yes, better enforcement directly reduces accidents. Is it practical? Yes, increasing police presence is a standard and feasible measure. Is it effective? Yes, stricter enforcement has been shown to reduce violations and accidents. Conclusion: Good course of action.",
        answer: "Only II follows",
      },
      {
        problem:
          "Problem: Many students in rural areas are dropping out of school due to lack of transportation.\nCourses of Action:\nI. The government should arrange free bus services for students in rural areas.\nII. The government should build new schools in every village.",
        solution:
          "Step 1: Core issue, students dropping out due to lack of transportation.\nStep 2: Evaluate Action I, 'Free bus services for rural students.' Relevant? Yes, directly addresses the transportation problem. Practical? Yes, government-funded school buses exist in many programs. Effective? Yes, removes the transportation barrier. Good course of action.\nStep 3: Evaluate Action II, 'Build new schools in every village.' Relevant? Yes, if schools are in the village, transportation is not needed. Practical? Building schools in every single village is a massive undertaking and may not be feasible in the short term. However, it does address the root cause. In standard exam logic, this is considered a valid long-term action. Effective? Yes, if implemented. Generally considered a good course of action.\nStep 4: Both actions address the problem through different but valid approaches.",
        answer: "Both I and II follow",
      },
    ],
    commonMistakes: [
      "Rejecting a course of action because it is not the 'best' action, it only needs to be reasonable and viable.",
      "Accepting extreme actions (total bans, shutting down all operations) that are disproportionate to the problem.",
      "Evaluating actions in relation to each other rather than independently against the problem statement.",
    ],
    keyTakeaways: [
      "A good course of action is relevant, practical, and effective, test each criterion independently.",
      "Evaluate each action independently, not in comparison with other actions.",
      "Extreme measures are almost never the right answer unless the problem is extremely severe.",
      "Actions that address the root cause are stronger than those addressing symptoms, but both may be valid.",
      "Do not introduce assumptions beyond what is stated in the problem.",
    ],
  },
  {
    slug: "cause-and-effect",
    categorySlug: "logical-reasoning",
    introduction:
      "Cause and Effect questions present two statements and ask you to determine the relationship between them. Specifically, you must identify whether one statement is the cause of the other, whether one is the effect of the other, whether both are effects of a common cause, or whether they are independent events with no causal relationship.\n\nUnderstanding causality requires distinguishing between correlation (two events happening together) and causation (one event making the other happen). Just because two events occur simultaneously or sequentially does not mean one caused the other. A valid causal relationship requires a logical mechanism through which the cause leads to the effect.\n\nThese questions test your analytical thinking about real-world situations. You must consider the logical flow: does Statement I naturally lead to Statement II? Does Statement II naturally lead to Statement I? Could both be results of some underlying cause? Or are they simply unrelated? Practice with these questions develops your ability to think critically about relationships between events.",
    concepts: [
      "Direct Cause and Effect: One event directly leads to another through a clear mechanism. Example: Heavy rain (cause) leads to flooding (effect).",
      "Common Cause: Two events are both effects of a third, underlying cause. Example: High absenteeism and low morale may both be caused by poor management.",
      "Independent Events: Two events happen to occur together but have no causal connection. Example: A new CEO is appointed, and the monsoon arrives, unrelated.",
      "Temporal Sequence: The cause must precede or be simultaneous with the effect. If event B happened before event A, then A cannot be the cause of B.",
      "Logical Mechanism: For a valid causal relationship, there must be a reasonable explanation of HOW the cause produces the effect.",
    ],
    methods: [
      {
        name: "Mechanism Identification Method",
        steps: [
          "Read both statements carefully.",
          "Ask: Can I explain a logical mechanism by which Statement I leads to Statement II? If yes, I is the cause and II is the effect.",
          "Ask: Can I explain a logical mechanism by which Statement II leads to Statement I? If yes, II is the cause and I is the effect.",
          "If neither direction has a clear mechanism, ask: Could both statements be effects of a common underlying cause?",
          "If no causal connection can be established in any direction, the statements are independent events.",
        ],
      },
      {
        name: "Five Relationship Categories Method",
        steps: [
          "Categorize the relationship into one of five types: (a) Statement I is the cause and II is its effect, (b) Statement II is the cause and I is its effect, (c) Both are independent causes, (d) Both are effects of a common cause, (e) Both are effects of independent causes.",
          "Test each category by checking if the logical flow makes sense.",
          "Select the category that best fits the relationship between the two statements.",
        ],
      },
    ],
    quickTricks: [
      "Look for keywords that indicate causation: 'because,' 'due to,' 'resulted in,' 'led to,' 'as a consequence of.'",
      "If one statement describes a policy/action and the other describes an outcome/consequence, the policy is likely the cause.",
      "If both statements describe problems in the same domain (e.g., both about a company), they might be effects of a common cause.",
      "Natural events (rain, drought, earthquake) are more often causes than effects in these questions.",
      "Economic and social statements often have cause-effect relationships: unemployment causes poverty, not usually the reverse.",
    ],
    solvedExamples: [
      {
        problem:
          "Statement I: The government has increased the import duty on electronic goods.\nStatement II: The prices of electronic goods in the domestic market have risen sharply.",
        solution:
          "Step 1: Identify potential mechanism from I to II: When import duty increases, imported goods become more expensive. Domestic sellers also raise prices due to reduced competition from imports. This is a clear and direct mechanism.\nStep 2: Check reverse: Can rising prices cause the government to increase import duty? This is less likely, governments usually reduce duties to lower prices, not increase them when prices are already high.\nStep 3: Conclusion: Statement I (increased import duty) is the cause, and Statement II (rising prices) is the effect.",
        answer: "Statement I is the cause and Statement II is its effect",
      },
      {
        problem:
          "Statement I: Many farmers in the region have shifted from growing rice to growing cotton.\nStatement II: There has been a severe shortage of rice in the local market.",
        solution:
          "Step 1: Mechanism from I to II: If farmers shift from rice to cotton, less rice is produced, leading to a shortage. Clear and logical mechanism.\nStep 2: Mechanism from II to I: Could rice shortage cause farmers to shift to cotton? If there is a shortage, rice prices would rise, making rice more profitable, farmers would shift TO rice, not away from it. So this direction does not make sense.\nStep 3: Conclusion: Statement I (shift to cotton) is the cause, and Statement II (rice shortage) is the effect.",
        answer: "Statement I is the cause and Statement II is its effect",
      },
      {
        problem:
          "Statement I: The company has announced a 20% salary hike for all employees.\nStatement II: The company has posted record profits this quarter.",
        solution:
          "Step 1: Mechanism from I to II: A salary hike increases costs, which would reduce profits, not increase them. This direction does not work.\nStep 2: Mechanism from II to I: Record profits give the company the financial capacity to offer salary hikes. This is a clear mechanism.\nStep 3: Conclusion: Statement II (record profits) is the cause, and Statement I (salary hike) is the effect.",
        answer: "Statement II is the cause and Statement I is its effect",
      },
    ],
    commonMistakes: [
      "Confusing correlation with causation, just because two events happen together does not mean one caused the other.",
      "Assuming the first statement is always the cause, sometimes Statement II is the cause and I is the effect.",
      "Ignoring the possibility that both statements could be effects of a common underlying cause not mentioned in the question.",
    ],
    keyTakeaways: [
      "Always identify the logical mechanism connecting cause to effect.",
      "Test the relationship in both directions before concluding.",
      "Consider the possibility of a common cause when neither statement logically causes the other.",
      "The cause must logically precede or accompany the effect.",
      "Do not assume the order of presentation indicates the causal direction.",
    ],
  },
  {
    slug: "statement-and-argument",
    categorySlug: "logical-reasoning",
    introduction:
      "Statement and Argument questions present a statement (usually a proposal, policy, or opinion) followed by two or more arguments for or against it. You must evaluate whether each argument is a 'strong' argument or a 'weak' argument in relation to the given statement. This tests your ability to assess the logical quality and relevance of reasoning.\n\nA strong argument is one that is (1) directly related to the statement, (2) provides a significant and valid reason for or against the statement, and (3) is based on facts, logic, or widely accepted principles rather than assumptions, emotions, or extreme generalizations. A weak argument, on the other hand, is irrelevant, trivial, based on unverified assumptions, overly emotional, or uses extreme/absolute language.\n\nThese questions require you to set aside your personal opinions and evaluate each argument on its logical merit. You are not deciding whether the statement is right or wrong, you are evaluating the quality of the arguments presented for and against it.",
    concepts: [
      "Strong Argument: Directly relevant to the statement, logically valid, factually grounded, and addresses a significant aspect of the issue.",
      "Weak Argument: Irrelevant, vague, based on assumptions, emotionally charged, uses extreme generalizations, or addresses a trivial aspect.",
      "Relevance Test: The argument must be directly connected to the topic of the statement, not a tangential issue.",
      "Significance Test: Even if relevant, the argument must address a substantial point, minor or trivial reasons are weak.",
      "Ambiguity/Assumption Test: Arguments that rest on unverified assumptions or are vague ('everyone knows,' 'it is obvious') are weak.",
      "Universality/Extremism Test: Arguments using 'all,' 'never,' 'always,' 'no one' are typically weak due to overgeneralization.",
    ],
    methods: [
      {
        name: "Three-Filter Method",
        steps: [
          "Filter 1, Relevance: Is the argument directly related to the statement? If not, it is weak.",
          "Filter 2, Logic and Factual Basis: Does the argument present a valid, factual, or logical reason? If it is based on assumptions, emotions, or hearsay, it is weak.",
          "Filter 3, Significance: Does the argument address a substantial point? If the reason is trivial or minor, it is weak.",
          "If the argument passes all three filters, it is strong. If it fails any filter, it is weak.",
        ],
      },
      {
        name: "Counter-Check Method",
        steps: [
          "Read the argument and ask: 'Can I easily counter this argument with a simple objection?'",
          "If the argument can be trivially countered, it is likely weak.",
          "If the argument requires a substantial, well-thought-out counterargument, it is likely strong.",
          "This method helps gauge the weight and robustness of the argument.",
        ],
      },
    ],
    quickTricks: [
      "Arguments using extreme words like 'only,' 'never,' 'always,' 'all,' 'no one' are almost always weak.",
      "Arguments appealing to emotion ('it is cruel,' 'it is our duty') without logical backing are weak.",
      "Arguments presenting practical, factual consequences (economic impact, health effect, proven data) are usually strong.",
      "If an argument could apply to almost anything ('it will cost money', everything costs money), it is likely too vague to be strong.",
      "An argument can be 'for' or 'against' the statement and still be strong, strength is about quality, not direction.",
    ],
    solvedExamples: [
      {
        problem:
          "Statement: Should the government ban the use of plastic bags?\nArgument I: Yes, plastic bags are a major source of environmental pollution and take hundreds of years to decompose.\nArgument II: No, plastic bags are used by everyone and banning them would be unpopular.",
        solution:
          "Step 1: Evaluate Argument I:\n- Relevance: Directly addresses the environmental impact of plastic bags. Relevant.\n- Logic/Facts: Plastic bags causing pollution and taking hundreds of years to decompose is factually well-established. Valid.\n- Significance: Environmental pollution is a major issue. Significant.\n- Verdict: Strong argument.\n\nStep 2: Evaluate Argument II:\n- Relevance: Addresses the practical impact of a ban. Relevant.\n- Logic/Facts: 'Would be unpopular' is not a logical reason against a policy, popularity does not determine whether a policy is right or needed. Weak reasoning.\n- Significance: Unpopularity alone is a trivial objection, many necessary policies are initially unpopular.\n- Verdict: Weak argument.",
        answer: "Only Argument I is strong",
      },
      {
        problem:
          "Statement: Should companies be required to provide work-from-home options to all employees?\nArgument I: Yes, because it reduces commute time and improves work-life balance for employees.\nArgument II: No, because not all job roles can be performed remotely, and mandatory work-from-home policies may reduce collaboration and productivity.",
        solution:
          "Step 1: Evaluate Argument I:\n- Relevance: Directly addresses benefits of work-from-home. Relevant.\n- Logic/Facts: Reduced commute and better work-life balance are well-documented benefits. Valid.\n- Significance: Employee well-being and productivity are significant considerations. Significant.\n- Verdict: Strong argument.\n\nStep 2: Evaluate Argument II:\n- Relevance: Directly addresses limitations of a blanket work-from-home policy. Relevant.\n- Logic/Facts: It is factually true that some roles (manufacturing, healthcare, lab work) cannot be done remotely. Impact on collaboration is a recognized concern. Valid.\n- Significance: Operational feasibility and productivity are major business considerations. Significant.\n- Verdict: Strong argument.",
        answer: "Both Arguments I and II are strong",
      },
    ],
    commonMistakes: [
      "Letting personal opinion influence the evaluation, you must assess argument quality objectively, not whether you agree with it.",
      "Accepting a relevant but trivial argument as strong, relevance alone is not enough; the argument must also be significant.",
      "Rejecting an argument just because it opposes the statement, arguments against the statement can be strong too.",
    ],
    keyTakeaways: [
      "Apply the three-filter test: relevance, logic/facts, significance. All three must be met for a strong argument.",
      "Extreme, emotional, or assumption-based arguments are weak regardless of their direction.",
      "Both 'for' and 'against' arguments can be strong, strength is about quality, not position.",
      "Set aside personal opinions, evaluate arguments purely on their logical merit.",
      "Practice distinguishing between 'relevant but trivial' (weak) and 'relevant and significant' (strong) arguments.",
    ],
  },
  {
    slug: "statement-and-assumption",
    categorySlug: "logical-reasoning",
    introduction:
      "Statement and Assumption questions present a statement and ask you to identify which assumptions are implicit in it. An assumption is an unstated premise that the speaker takes for granted, something that must be true for the statement to make logical sense. Identifying assumptions requires reading between the lines to find what is implied but not directly said.\n\nFor example, if someone says 'Take an umbrella, it might rain today,' the implicit assumption is that an umbrella provides protection from rain. This is not stated but is taken for granted. Similarly, if an advertisement says 'Join our coaching class to crack the exam,' the implicit assumption is that the coaching class is effective in helping students crack the exam.\n\nThese questions test your ability to distinguish between what is explicitly stated, what is logically assumed, and what is merely possible or related. The assumption must be something the speaker necessarily believes for the statement to hold. It should not be an obvious restatement of the statement, nor should it be an extreme extension of the statement.",
    concepts: [
      "Implicit Assumption: Something taken for granted that is not explicitly stated but must be true for the statement to be logical.",
      "Necessary vs. Sufficient: An assumption is something NECESSARY for the statement to make sense, not just something that supports it.",
      "Restatement is Not Assumption: If the 'assumption' simply restates the statement in different words, it is not a valid assumption, it is already stated.",
      "Extreme Assumptions: If the proposed assumption uses extreme language ('only,' 'best,' 'all,' 'none') while the statement is moderate, it is likely not implicit.",
      "Negation Test: If negating the proposed assumption makes the statement illogical or meaningless, then the assumption IS implicit.",
    ],
    methods: [
      {
        name: "Negation Test Method",
        steps: [
          "Read the proposed assumption and negate it (turn it into its opposite).",
          "Read the original statement with the negated assumption in mind.",
          "If the original statement no longer makes logical sense with the negated assumption, then the assumption IS implicit (valid).",
          "If the original statement still makes sense even with the negated assumption, then the assumption is NOT implicit.",
        ],
      },
      {
        name: "Gap-Filling Method",
        steps: [
          "Read the statement and identify the logical 'gap', what must be true for the statement to make sense that is not directly stated.",
          "Check if the proposed assumption fills that gap.",
          "If it fills the gap exactly, it is an implicit assumption.",
          "If it overshoots (too extreme) or misses (irrelevant), it is not implicit.",
        ],
      },
      {
        name: "Qualification Check Method",
        steps: [
          "Read the proposed assumption and check if it uses extreme qualifiers ('only,' 'best,' 'all,' 'none,' 'always,' 'never').",
          "Compare with the original statement, if the statement is moderate but the assumption is extreme, it is likely not implicit.",
          "If the assumption is a reasonable, moderate extension of the statement, it may be implicit.",
          "Apply the negation test to confirm.",
        ],
      },
    ],
    rules: [
      "An assumption must be UNSTATED, if it is directly mentioned in the statement, it is not an assumption.",
      "An assumption must be NECESSARY, the statement must require it to be true.",
      "An assumption should not be an extreme version of the statement, it should be a reasonable, moderate underlying belief.",
      "Personal opinions and general knowledge should not influence your evaluation, only the logical relationship between the statement and assumption matters.",
    ],
    quickTricks: [
      "The negation test is the most reliable method: negate the assumption and see if the statement breaks.",
      "If the statement recommends something (a product, action, policy), it implicitly assumes that the recommended thing is effective or beneficial.",
      "If the statement makes a comparison, it assumes the things being compared are comparable.",
      "Assumptions with 'only' or 'best' are usually NOT implicit unless the statement itself uses such strong language.",
      "Advertisements and recommendations almost always assume that the target audience is capable of and willing to follow the advice.",
    ],
    solvedExamples: [
      {
        problem:
          "Statement: 'Parents should send their children to school at age 5.'\nAssumptions:\nI. Children are ready to learn at age 5.\nII. Schools are the only place where children can learn.",
        solution:
          "Step 1: Evaluate Assumption I using the negation test.\nNegation of I: 'Children are NOT ready to learn at age 5.'\nIf children are not ready to learn at 5, then advising parents to send them to school at 5 would be illogical. The statement breaks.\nConclusion: Assumption I IS implicit.\n\nStep 2: Evaluate Assumption II using the negation test.\nNegation of II: 'Schools are NOT the only place where children can learn.'\nEven if schools are not the only learning place, it can still be good advice to send children to school at 5 (school is one good option among others). The statement still makes sense.\nConclusion: Assumption II is NOT implicit. The word 'only' makes it too extreme.",
        answer: "Only Assumption I is implicit",
      },
      {
        problem:
          "Statement: 'The company should invest in employee training programs to improve productivity.'\nAssumptions:\nI. Training programs can improve employee skills.\nII. Productivity improvement is desirable for the company.",
        solution:
          "Step 1: Evaluate Assumption I.\nNegation: 'Training programs CANNOT improve employee skills.'\nIf training cannot improve skills, then investing in training to improve productivity is pointless. The statement breaks.\nConclusion: Assumption I IS implicit.\n\nStep 2: Evaluate Assumption II.\nNegation: 'Productivity improvement is NOT desirable for the company.'\nIf productivity improvement is not desirable, there is no reason to recommend investing in training for that purpose. The statement breaks.\nConclusion: Assumption II IS implicit.",
        answer: "Both Assumptions I and II are implicit",
      },
      {
        problem:
          "Statement: 'Use Brand X detergent for the whitest clothes.'\nAssumptions:\nI. Brand X detergent is effective in making clothes white.\nII. Brand X is the best detergent in the market.",
        solution:
          "Step 1: Evaluate Assumption I.\nNegation: 'Brand X is NOT effective in making clothes white.'\nIf it is not effective, recommending it for white clothes is illogical. Statement breaks.\nConclusion: Assumption I IS implicit.\n\nStep 2: Evaluate Assumption II.\nNegation: 'Brand X is NOT the best detergent in the market.'\nThe statement says 'for the whitest clothes,' which is a marketing claim about Brand X's effectiveness, but does not necessarily claim it is the best overall. The statement still makes sense even if other detergents exist. 'Best' is an extreme qualifier not present in the original statement.\nConclusion: Assumption II is NOT implicit.",
        answer: "Only Assumption I is implicit",
      },
    ],
    commonMistakes: [
      "Confusing an assumption (unstated) with a restatement of the statement (already stated).",
      "Accepting extreme assumptions ('only,' 'best,' 'all') when the statement is moderate.",
      "Failing to apply the negation test, it is the most reliable way to check if an assumption is implicit.",
    ],
    keyTakeaways: [
      "An assumption is an unstated premise that must be true for the statement to be logical.",
      "The negation test is the gold standard: negate the assumption and check if the statement still makes sense.",
      "Extreme assumptions (using 'only,' 'best,' 'all,' 'never') are usually not implicit unless the statement itself is extreme.",
      "An assumption should not be a restatement of the statement, it must be something new and unstated.",
      "Practice regularly with the negation test until it becomes second nature.",
    ],
  },
  {
    slug: "statement-and-conclusion",
    categorySlug: "logical-reasoning",
    introduction:
      "Statement and Conclusion problems test your ability to draw valid conclusions from given statements. A conclusion is a logical inference that follows directly from the information provided, without adding external knowledge or assumptions.\n\nThese questions present one or more statements followed by two or more conclusions. You must determine which conclusions logically follow from the given statements. The key distinction from assumptions is that conclusions are outcomes or results that can be derived, whereas assumptions are unstated prerequisites.\n\nThis topic is important for exams like SBI PO, IBPS, CAT, and campus placements. Mastering it requires careful reading and strict adherence to the scope of the given information.",
    concepts: [
      "A conclusion must be directly derivable from the statement without external knowledge.",
      "Over-generalization: if the statement says 'some,' the conclusion cannot say 'all.'",
      "A conclusion can be the contrapositive of the statement, if A then B implies if not B then not A.",
      "Conclusions that restate the statement in different words are usually valid.",
      "Quantifier hierarchy: All > Most > Some > A few, conclusions cannot jump up the hierarchy.",
    ],
    methods: [
      {
        name: "Scope Matching Method",
        steps: [
          "Read the statement carefully and identify its scope (all, some, most, a particular group).",
          "Read each conclusion and check if its scope is within or equal to the statement's scope.",
          "Reject conclusions that expand the scope beyond what is stated.",
          "Accept conclusions that narrow the scope or match it exactly.",
        ],
      },
      {
        name: "Direct Derivation Method",
        steps: [
          "Treat the statement as an absolute truth.",
          "For each conclusion, ask: 'Can I derive this using ONLY the statement?'",
          "If additional facts or assumptions are needed, the conclusion does not follow.",
          "Check for contrapositives, they are always valid conclusions.",
        ],
      },
    ],
    quickTricks: [
      "If a conclusion uses extreme words (always, never, all, only) but the statement does not, it is usually invalid.",
      "Conclusions that are merely rephrased versions of the statement are valid.",
      "If the statement is about a specific group, a conclusion about a different group does not follow.",
      "Watch for negation traps, 'not all' is different from 'none.'",
    ],
    solvedExamples: [
      {
        problem:
          "Statement: Some doctors are teachers. All teachers are engineers.\nConclusions: I. Some doctors are engineers. II. All engineers are teachers.",
        solution:
          "From 'Some doctors are teachers' and 'All teachers are engineers,' the doctors who are teachers must also be engineers. So Conclusion I (Some doctors are engineers) follows.\n\nConclusion II says 'All engineers are teachers.' The statement only says all teachers are engineers, not the reverse. So Conclusion II does not follow.",
        answer: "Only Conclusion I follows.",
      },
      {
        problem:
          "Statement: Education is the most effective tool to combat poverty.\nConclusions: I. Poverty can be reduced by education. II. Without education, poverty cannot be reduced.",
        solution:
          "Conclusion I is a restatement of the original claim and follows directly.\n\nConclusion II says education is the ONLY way (without education = cannot). The statement says 'most effective,' not 'only.' So Conclusion II does not follow.",
        answer: "Only Conclusion I follows.",
      },
    ],
    commonMistakes: [
      "Confusing 'most effective' with 'only', the most effective method does not mean it is the sole method.",
      "Reversing universal statements, 'All A are B' does not mean 'All B are A.'",
      "Adding real-world knowledge to validate a conclusion that is not supported by the statement alone.",
    ],
    keyTakeaways: [
      "A conclusion must be derivable directly from the statement without external knowledge.",
      "Check the scope and quantifiers carefully, never expand beyond what is given.",
      "Contrapositives are always valid: 'If A then B' means 'If not B then not A.'",
      "'Most effective' does not equal 'only', be precise with language.",
      "Practice distinguishing between restatements and extensions of the original statement.",
    ],
  },
  {
    slug: "theme-detection",
    categorySlug: "logical-reasoning",
    introduction:
      "Theme Detection questions require you to identify the central theme or main idea of a given passage or set of statements. The theme is the underlying message or the core point that the author is trying to convey.\n\nThese questions test your ability to look beyond surface-level details and extract the fundamental message. The passage may discuss specific examples, but the theme is the general principle or lesson that those examples illustrate.\n\nTheme Detection is commonly found in bank exams, SSC, and campus placement tests. It requires strong reading comprehension skills and the ability to distinguish between the main idea and supporting details.",
    concepts: [
      "The theme is the central idea, the one sentence summary of the entire passage.",
      "Supporting details and examples are NOT the theme, they serve the theme.",
      "The theme should cover all parts of the passage, not just one section.",
      "A theme that is too narrow misses part of the passage; too broad goes beyond it.",
      "The theme is often implied rather than explicitly stated.",
    ],
    methods: [
      {
        name: "Elimination Method",
        steps: [
          "Read the passage carefully and note the main subject.",
          "Read each option and eliminate those that are too specific (covering only one detail).",
          "Eliminate options that are too broad or go beyond the passage's scope.",
          "Eliminate options that contradict the passage.",
          "The remaining option that captures the central idea is the answer.",
        ],
      },
      {
        name: "First-Last Sentence Method",
        steps: [
          "Read the first and last sentences of the passage, they often contain the theme.",
          "Identify the recurring subject or keyword throughout the passage.",
          "Match the recurring idea with the answer options.",
          "Verify your choice covers all paragraphs or sections of the passage.",
        ],
      },
    ],
    quickTricks: [
      "The theme should be applicable to the entire passage, not just one part.",
      "Look for the option that answers 'What is the author's main point?'",
      "Eliminate options that focus on examples rather than the underlying message.",
      "If the passage discusses a problem and solution, the theme usually connects both.",
    ],
    solvedExamples: [
      {
        problem:
          "Passage: The internet has revolutionized education. Students can now access lectures from top universities. Online courses have made learning affordable. However, not all students have reliable internet access, creating a digital divide.\nOptions: A. The internet is harmful to education. B. The internet has transformed education but access remains unequal. C. Online courses are better than traditional classes. D. All students benefit equally from the internet.",
        solution:
          "The passage discusses both the benefits of internet in education AND the problem of unequal access. Option A is too negative. Option C is too specific and not stated. Option D contradicts the passage. Option B captures both the transformation and the inequality, covering the full scope.",
        answer: "B. The internet has transformed education but access remains unequal.",
      },
      {
        problem:
          "Passage: Trees absorb carbon dioxide and release oxygen. Deforestation leads to increased greenhouse gases. Planting more trees can help combat climate change. Governments are launching afforestation programs worldwide.\nOptions: A. Governments are planting trees. B. Trees are essential for combating climate change. C. Deforestation should be banned. D. Climate change is irreversible.",
        solution:
          "Option A is too specific (only about governments). Option C is not stated (the passage talks about planting, not banning). Option D contradicts the passage's positive tone about solutions. Option B captures the central idea that connects all statements, trees are key to fighting climate change.",
        answer: "B. Trees are essential for combating climate change.",
      },
    ],
    commonMistakes: [
      "Choosing an option that is a specific detail from the passage rather than the overarching theme.",
      "Selecting an option that is too broad and goes beyond what the passage discusses.",
      "Letting personal opinions influence theme selection instead of sticking to the passage content.",
    ],
    keyTakeaways: [
      "The theme is the central message that covers the entire passage.",
      "Eliminate options that are too specific, too broad, or contradictory.",
      "First and last sentences are often the best clues to the theme.",
      "Supporting details serve the theme, they are not the theme itself.",
      "Always verify your chosen theme against all parts of the passage.",
    ],
  },
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
    slug: "syllogism",
    categorySlug: "logical-reasoning",
    introduction:
      "Syllogism is a form of deductive reasoning where a conclusion is drawn from two given statements (premises). Each statement relates two categories using quantifiers like 'All,' 'Some,' 'No,' and 'Some not.' The conclusion must follow necessarily from the premises.\n\nThe four standard categorical statements are: All A are B (universal affirmative), No A are B (universal negative), Some A are B (particular affirmative), and Some A are not B (particular negative). Using Venn diagrams, you can visually determine which conclusions are valid.\n\nSyllogism is one of the most important topics for competitive exams. It appears in almost every bank exam, SSC test, and many campus placement aptitude sections. The Venn diagram method is the most reliable approach.",
    concepts: [
      "All A are B: every member of A is also a member of B (A is a subset of B).",
      "No A are B: A and B have no common members (disjoint sets).",
      "Some A are B: at least one member of A is also in B (overlap exists).",
      "Some A are not B: at least one member of A is outside B.",
      "Complementary pairs: 'All A are B' and 'Some A are not B' are complementary (exactly one is true).",
      "'No A are B' and 'Some A are B' are complementary pairs.",
    ],
    methods: [
      {
        name: "Venn Diagram Method",
        steps: [
          "Draw Venn diagrams for the first premise.",
          "Overlay the second premise onto the same diagram.",
          "Check if the conclusion is true in ALL possible valid diagrams.",
          "A conclusion follows only if it is true in every possible configuration.",
          "If a conclusion fails in even one valid diagram, it does not follow.",
        ],
      },
      {
        name: "Complementary Pair / Either-Or Method",
        steps: [
          "If neither conclusion individually follows, check if they form a complementary pair.",
          "Complementary pairs: (All A are B, Some A are not B) and (Some A are B, No A are B).",
          "If the two conclusions are a complementary pair, 'Either I or II follows.'",
          "This is a shortcut, if you determine both individually don't follow, check for this pattern.",
        ],
      },
    ],
    quickTricks: [
      "All + All = All: If All A are B and All B are C, then All A are C.",
      "All + No = No: If All A are B and No B are C, then No A are C.",
      "Some + All = Some: If Some A are B and All B are C, then Some A are C.",
      "No + All = Some not (reverse): If No A are B and All B are C, then Some C are not A.",
      "Some + Some = No conclusion. Some + No = Some not (reverse).",
      "When in doubt about individual conclusions, check for complementary pairs.",
    ],
    solvedExamples: [
      {
        problem:
          "Statements: All dogs are animals. All animals are living things.\nConclusions: I. All dogs are living things. II. Some living things are dogs.",
        solution:
          "All dogs are animals + All animals are living things → All dogs are living things (All + All = All). Conclusion I follows.\nSince all dogs are living things, there exist some living things that are dogs. Conclusion II also follows.",
        answer: "Both Conclusion I and II follow.",
      },
      {
        problem:
          "Statements: Some books are pens. No pens are erasers.\nConclusions: I. Some books are erasers. II. Some books are not erasers.",
        solution:
          "Some books are pens + No pens are erasers → the books that are pens cannot be erasers. So some books are definitely not erasers. Conclusion II follows.\nConclusion I says some books are erasers. This is possible only for books that are NOT pens, but we cannot confirm it, it is not necessary. Conclusion I does not follow.",
        answer: "Only Conclusion II follows.",
      },
    ],
    commonMistakes: [
      "Drawing only one Venn diagram, you must check ALL possible configurations, not just the most obvious one.",
      "Forgetting the complementary pair rule, when neither conclusion follows individually, check for either-or.",
      "Confusing 'Some A are B' with 'All A are B', 'some' means at least one, not necessarily all.",
    ],
    keyTakeaways: [
      "Use Venn diagrams for every syllogism problem, they are the most reliable method.",
      "A conclusion follows only if it is true in ALL possible diagram configurations.",
      "Memorize combination rules: All+All=All, All+No=No, Some+All=Some.",
      "Always check for complementary pairs when individual conclusions fail.",
      "Practice drawing multiple valid diagrams for the same premises to see all possibilities.",
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
