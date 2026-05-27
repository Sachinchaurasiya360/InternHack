import type { TopicTheory } from "./types";

export const logicalReasoningTheoryVerbal: TopicTheory[] = [
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
];
