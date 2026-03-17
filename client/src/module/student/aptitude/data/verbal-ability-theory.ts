import type { TopicTheory } from "./types";

export const verbalAbilityTheory: TopicTheory[] = [
  // ─── 1. Spotting Errors ───────────────────────────────────────────────
  {
    slug: "spotting-errors",
    categorySlug: "verbal-ability",
    introduction:
      "Spotting Errors is one of the most frequently tested topics in verbal ability sections of competitive and placement exams. In these questions, a sentence is divided into parts (usually three or four), and you must identify the part that contains a grammatical or contextual error. If no part contains an error, the answer is 'No error.'\n\nThis topic tests your command over English grammar fundamentals such as subject-verb agreement, correct use of tenses, articles, prepositions, pronouns, and modifiers. Mastering error spotting requires a systematic approach: read the full sentence first for meaning, then examine each part for specific grammar violations.\n\nRegular practice with diverse sentence patterns is key. Many errors are subtle and involve commonly confused constructions. Developing an ear for correct English through reading and practice will significantly improve your accuracy in this section.",
    concepts: [
      "Subject-verb agreement: A singular subject takes a singular verb, and a plural subject takes a plural verb.",
      "Tense consistency: All verbs in a sentence should maintain a consistent tense unless the context clearly requires a shift.",
      "Pronoun-antecedent agreement: A pronoun must agree with its antecedent in number, gender, and person.",
      "Correct use of articles: 'A' before consonant sounds, 'an' before vowel sounds, 'the' for specific nouns.",
      "Preposition usage: Many verbs and adjectives pair with specific prepositions (e.g., 'interested in', not 'interested on').",
      "Parallel structure: Items in a list or comparison must follow the same grammatical form.",
      "Misplaced and dangling modifiers: A modifier should be placed next to the word it describes.",
      "Correct use of conjunctions: Correlative conjunctions (either...or, neither...nor) must pair correctly.",
    ],
    rules: [
      "A singular subject joined by 'and' takes a plural verb. Example: 'Ram and Shyam are friends.'",
      "When two subjects are joined by 'or', 'nor', 'either...or', 'neither...nor', the verb agrees with the subject closer to it.",
      "Collective nouns (team, committee, jury) take a singular verb when acting as one unit, and a plural verb when members act individually.",
      "'Each', 'every', 'everyone', 'everybody', 'neither', 'either' always take singular verbs.",
      "'Many a' is followed by a singular noun and singular verb. Example: 'Many a student has failed.'",
      "Uncountable nouns like 'information', 'advice', 'furniture', 'luggage' never take a plural form.",
      "'No sooner' is followed by 'than', not 'when'. 'Hardly/Scarcely' is followed by 'when', not 'than'.",
      "After 'if' and 'wish', use the subjunctive mood: 'If I were' (not 'If I was') for hypothetical situations.",
      "The comparative degree is used for two items; the superlative degree is used for three or more.",
      "Avoid double negatives: 'He does not know nothing' should be 'He does not know anything.'",
    ],
    methods: [
      {
        name: "Systematic Error Detection",
        steps: [
          "Read the complete sentence to understand its overall meaning and context.",
          "Check subject-verb agreement in each clause.",
          "Verify tense consistency throughout the sentence.",
          "Examine pronoun references and ensure they agree with their antecedents.",
          "Check preposition usage with verbs and adjectives.",
          "Look for parallel structure in lists and comparisons.",
          "Verify correct use of articles (a, an, the).",
          "If no error is found after checking all parts, select 'No error.'",
        ],
      },
      {
        name: "Part-by-Part Analysis",
        steps: [
          "Isolate each labelled part of the sentence.",
          "For each part, identify the grammatical elements (subject, verb, object, modifier).",
          "Apply the relevant grammar rule to test correctness.",
          "Compare questionable parts against standard English usage.",
          "Mark the part that violates a grammar rule as the answer.",
        ],
      },
    ],
    quickTricks: [
      "Always check subject-verb agreement first. It accounts for the majority of errors in these questions.",
      "Watch for 'one of the' followed by a plural noun but a singular verb: 'One of the boys is absent.'",
      "Words like 'news', 'mathematics', 'physics', 'economics' look plural but take singular verbs.",
      "If the sentence sounds awkward when read aloud, there is likely a grammatical error hidden in it.",
      "Look out for commonly confused pairs: affect/effect, principal/principle, complement/compliment.",
    ],
    solvedExamples: [
      {
        problem:
          "Identify the error: (A) Each of the boys / (B) have completed / (C) their assignments. / (D) No error.",
        solution:
          "'Each' is a singular indefinite pronoun. When 'each' is the subject, it requires a singular verb. 'Have completed' is a plural verb form. The correct form should be 'has completed.' Additionally, since 'each' is singular, the pronoun should technically be 'his' in formal grammar, but 'their' is widely accepted in modern usage. The primary error is in part (B).",
        answer: "(B) — 'have completed' should be 'has completed'",
      },
      {
        problem:
          "Identify the error: (A) The furniture in the rooms / (B) are made of / (C) the finest teak wood. / (D) No error.",
        solution:
          "The subject of this sentence is 'furniture', which is an uncountable noun and always takes a singular verb. The prepositional phrase 'in the rooms' is a modifier and does not affect subject-verb agreement. 'Are made' is a plural verb, which is incorrect. It should be 'is made.'",
        answer: "(B) — 'are made of' should be 'is made of'",
      },
      {
        problem:
          "Identify the error: (A) No sooner did he arrive / (B) when it started / (C) raining heavily. / (D) No error.",
        solution:
          "The correct correlative construction is 'No sooner...than', not 'No sooner...when.' 'Hardly/Scarcely' pairs with 'when/before', but 'No sooner' always pairs with 'than.' The correction is: 'No sooner did he arrive than it started raining heavily.'",
        answer: "(B) — 'when' should be 'than'",
      },
    ],
    commonMistakes: [
      "Ignoring the prepositional phrase between the subject and verb, which can mislead you about the true subject. Example: 'The bouquet of roses is (not are) beautiful.'",
      "Confusing 'fewer' (countable) with 'less' (uncountable). Example: 'fewer books' but 'less water.'",
      "Selecting 'No error' too quickly without thoroughly checking each part against grammar rules.",
    ],
    keyTakeaways: [
      "Subject-verb agreement is the single most tested concept in spotting errors questions.",
      "Uncountable nouns (advice, information, furniture, luggage) always take singular verbs and never have a plural form.",
      "Correlative conjunctions must be used in correct pairs: either...or, neither...nor, not only...but also, no sooner...than.",
      "Read the full sentence for meaning first, then apply grammar rules part by part.",
      "Practice regularly with diverse question types to develop an instinct for common error patterns.",
    ],
  },

  // ─── 2. Sentence Correction ──────────────────────────────────────────
  {
    slug: "sentence-correction",
    categorySlug: "verbal-ability",
    introduction:
      "Sentence Correction questions present a sentence with an underlined portion (or the entire sentence) and ask you to choose the best replacement from the given options. One of the options is usually identical to the original, meaning the sentence may already be correct. This topic evaluates your ability to identify and fix grammatical errors, awkward constructions, and unclear meanings.\n\nThe key difference between sentence correction and spotting errors is that here you must not only identify the problem but also select the correct version. This requires a deeper understanding of grammar rules, idiomatic expressions, and standard written English conventions.\n\nTo excel in sentence correction, develop a checklist of common error types: subject-verb agreement, pronoun reference, parallelism, modifier placement, verb tense, and idiomatic usage. Eliminate answer choices that introduce new errors, and always prefer the option that is grammatically correct, clear, and concise.",
    concepts: [
      "Grammatical correctness: The sentence must follow standard English grammar rules.",
      "Clarity: The sentence should convey its intended meaning without ambiguity.",
      "Conciseness: Prefer shorter, clearer constructions over wordy ones when meaning is preserved.",
      "Idiomatic expression: Certain word combinations are considered standard in English (e.g., 'different from', not 'different than').",
      "Effective expression: Among grammatically correct options, choose the one that best expresses the intended meaning.",
      "Logical predication: The sentence structure should logically connect its parts.",
    ],
    rules: [
      "The correct answer must be grammatically flawless; never trade one error for another.",
      "Maintain the original meaning of the sentence. A grammatically correct option that changes the meaning is wrong.",
      "Prefer active voice over passive voice when both are grammatically correct and meaning is the same.",
      "Avoid redundancy: 'return back', 'revert back', 'repeat again' are all redundant.",
      "Use 'who' for people and 'which/that' for things. 'That' is for restrictive clauses; 'which' is for non-restrictive clauses.",
      "A comparison must be between like things: 'The salary of a doctor is higher than that of a teacher' (not 'than a teacher').",
      "'Being' at the start of a sentence often signals an error or awkward construction.",
      "Gerunds (-ing forms) used as subjects take singular verbs: 'Running is good exercise.'",
    ],
    methods: [
      {
        name: "Elimination Strategy",
        steps: [
          "Read the original sentence and identify the potential error or awkwardness.",
          "Categorize the error type (agreement, tense, parallelism, idiom, etc.).",
          "Eliminate options that contain the same error or introduce new errors.",
          "Among remaining options, choose the one that is clearest and most concise.",
          "Re-read the full sentence with your chosen option to verify it sounds natural and correct.",
        ],
      },
      {
        name: "Split and Compare Method",
        steps: [
          "Look at how the options differ from each other.",
          "Identify the decision points (e.g., singular vs. plural verb, different prepositions).",
          "Apply the relevant grammar rule to decide which form is correct at each decision point.",
          "Select the option that is correct at all decision points.",
        ],
      },
    ],
    quickTricks: [
      "If the underlined portion has 'being', check carefully. It is often a signal for a wrong or awkward construction.",
      "When two or more options are grammatically correct, pick the most concise one.",
      "Check for pronoun ambiguity. If a pronoun could refer to multiple nouns, the sentence needs correction.",
      "Parallel structure errors are extremely common. Ensure all items in a list share the same grammatical form.",
      "Trust your ear, but verify with rules. If an option sounds wrong, it probably is, but always confirm with a grammar principle.",
    ],
    solvedExamples: [
      {
        problem:
          "The team of researchers have published their findings in a prestigious journal.\n(A) have published their findings\n(B) has published their findings\n(C) has published its findings\n(D) have published its findings",
        solution:
          "The subject is 'team', which is a collective noun. When a collective noun acts as a single unit, it takes a singular verb. So 'have published' should be 'has published.' The pronoun referring to 'team' (a single unit) should also be singular: 'its', not 'their.' Option (C) corrects both the verb and the pronoun.",
        answer: "(C) has published its findings",
      },
      {
        problem:
          "She is not only a talented singer but also dances gracefully.\n(A) not only a talented singer but also dances gracefully\n(B) not only a talented singer but also a graceful dancer\n(C) not only talented in singing but also dances gracefully\n(D) not only sings with talent but also a graceful dancer",
        solution:
          "The correlative conjunction 'not only...but also' requires parallel structure on both sides. In the original, 'a talented singer' (noun phrase) is paired with 'dances gracefully' (verb phrase), which is not parallel. Option (B) pairs 'a talented singer' with 'a graceful dancer', creating perfect parallelism with two noun phrases.",
        answer: "(B) not only a talented singer but also a graceful dancer",
      },
      {
        problem:
          "The reason he failed is because he did not study.\n(A) is because he did not study\n(B) is that he did not study\n(C) is due to he did not study\n(D) is since he did not study",
        solution:
          "'The reason is because' is a redundant construction since 'reason' already implies cause. The correct idiom is 'The reason is that.' Option (B) fixes this by replacing 'because' with 'that.' Options (C) and (D) are grammatically incorrect constructions.",
        answer: "(B) is that he did not study",
      },
    ],
    commonMistakes: [
      "Choosing an option that fixes one error but introduces another. Always re-read the complete sentence with your chosen answer.",
      "Picking a wordy option when a concise one expresses the same meaning correctly.",
      "Ignoring meaning changes. A grammatically correct option that distorts the original meaning is not the right answer.",
    ],
    keyTakeaways: [
      "The correct option must be grammatically correct, clear, concise, and faithful to the original meaning.",
      "Parallel structure and subject-verb agreement are the two most commonly tested concepts.",
      "When in doubt, eliminate options with obvious errors first and compare the remaining choices.",
      "Standard English idioms must be preserved: 'different from', 'regard as', 'the reason is that'.",
      "Always re-read the entire sentence with your chosen answer before finalizing.",
    ],
  },

  // ─── 3. Sentence Improvement ─────────────────────────────────────────
  {
    slug: "sentence-improvement",
    categorySlug: "verbal-ability",
    introduction:
      "Sentence Improvement questions present a sentence with a part (usually underlined or bolded) that may need to be replaced with a better alternative. The options include improved versions, and one option is typically 'No improvement needed.' The goal is to select the option that makes the sentence grammatically correct, clearer, or more idiomatic.\n\nThis topic is closely related to sentence correction, but the emphasis here is on improvement rather than error detection. Sometimes the original sentence is grammatically correct but awkward, wordy, or non-idiomatic. The best answer is the one that improves the sentence without changing its meaning.\n\nApproach these questions by first understanding what the underlined part is trying to say, then evaluating whether any option says it better. Focus on grammar, idiom, clarity, and conciseness as your evaluation criteria.",
    concepts: [
      "Grammatical improvement: Correcting verb forms, pronoun usage, article errors, or agreement issues.",
      "Idiomatic improvement: Replacing non-standard expressions with standard English idioms.",
      "Structural improvement: Restructuring for clarity, removing ambiguity, or fixing misplaced modifiers.",
      "Conciseness improvement: Removing redundancy or wordiness while preserving meaning.",
      "Tone and register: Ensuring the expression matches the formality level of the sentence.",
    ],
    rules: [
      "'No improvement' is the answer only when the original is grammatically correct, idiomatic, and clear. Do not assume 'no improvement' without checking.",
      "The replacement must maintain the original meaning. An option that changes the meaning is incorrect regardless of grammar.",
      "Avoid double comparatives: 'more better' is always wrong. Use 'better' or 'more + adjective.'",
      "'Would' should not be used in an 'if' clause in conditional sentences. Say 'If I were' not 'If I would be.'",
      "Avoid unnecessary use of passive voice. 'The book was read by her' is weaker than 'She read the book.'",
      "'Despite' is followed by a noun or gerund, never by 'of'. 'In spite of' requires 'of', but 'despite' does not.",
      "Use 'fewer' with countable nouns and 'less' with uncountable nouns.",
    ],
    methods: [
      {
        name: "Compare and Evaluate",
        steps: [
          "Read the original sentence carefully and understand its intended meaning.",
          "Identify any grammar error, awkwardness, or non-idiomatic usage in the underlined part.",
          "Read each option as a replacement within the full sentence.",
          "Eliminate options that introduce errors or change the meaning.",
          "Select the option that results in the most correct, clear, and concise sentence.",
          "If all replacement options are worse or introduce errors, select 'No improvement.'",
        ],
      },
    ],
    quickTricks: [
      "If the original sentence sounds natural and follows all grammar rules, 'No improvement' is likely correct.",
      "Look for common errors first: wrong preposition, wrong tense, wrong article, or redundancy.",
      "In placement exams, about 20-25% of sentence improvement questions have 'No improvement' as the answer.",
      "Replace the underlined part mentally with each option and read the full sentence aloud (in your mind) to test for naturalness.",
    ],
    solvedExamples: [
      {
        problem:
          "He is more smarter than his brother.\n(A) more smart\n(B) smarter\n(C) most smarter\n(D) No improvement",
        solution:
          "'More smarter' is a double comparative, which is grammatically incorrect. 'Smarter' already contains the comparative form. We should not add 'more' before it. Option (B) 'smarter' is the correct comparative form. Option (A) 'more smart' is non-standard for a short adjective. Option (C) 'most smarter' combines superlative with comparative, which is also wrong.",
        answer: "(B) smarter",
      },
      {
        problem:
          "Despite of the heavy rain, they continued the match.\n(A) Despite the heavy rain\n(B) In spite the heavy rain\n(C) Despite with heavy rain\n(D) No improvement",
        solution:
          "'Despite of' is incorrect. 'Despite' is never followed by 'of.' The correct form is simply 'despite + noun/gerund.' Alternatively, 'in spite of + noun' can be used, but 'in spite' without 'of' (option B) is also wrong. Option (A) 'Despite the heavy rain' is the correct form.",
        answer: "(A) Despite the heavy rain",
      },
      {
        problem:
          "The company has been operating since the past five years.\n(A) for the past five years\n(B) from the past five years\n(C) since five years\n(D) No improvement",
        solution:
          "'Since' is used with a specific point in time (since 2020, since Monday). 'For' is used with a duration or period of time (for five years, for two hours). Here, 'the past five years' is a duration, so 'for' is the correct preposition. Option (A) 'for the past five years' is correct.",
        answer: "(A) for the past five years",
      },
    ],
    commonMistakes: [
      "Choosing 'No improvement' too quickly without carefully checking for subtle errors like wrong prepositions or redundancy.",
      "Selecting an option that sounds formal or fancy but actually changes the meaning of the original sentence.",
      "Confusing 'since' (point in time) with 'for' (duration of time) is a very common error in this topic.",
    ],
    keyTakeaways: [
      "The best improvement preserves the original meaning while being grammatically correct, idiomatic, and concise.",
      "Always check for double comparatives, wrong prepositions, and redundant words in the underlined part.",
      "About one-fourth of questions have 'No improvement' as the correct answer, so do not assume every sentence has an error.",
      "Read the full sentence with each option substituted before making your choice.",
      "Common idiom and preposition errors are the most frequently tested patterns.",
    ],
  },

  // ─── 4. Completing Statements ─────────────────────────────────────────
  {
    slug: "completing-statements",
    categorySlug: "verbal-ability",
    introduction:
      "Completing Statements questions provide an incomplete sentence with a blank at the end (or occasionally in the middle) and ask you to select the phrase or clause that best completes the statement. The correct answer must be logically consistent with the given context and grammatically correct.\n\nThis topic tests your ability to comprehend the meaning and direction of a sentence and predict how it should logically conclude. The incomplete portion often sets up a cause-effect relationship, a contrast, a condition, or a continuation. Understanding transitional words and logical connectors is essential.\n\nTo solve these questions effectively, pay close attention to keywords and tone in the given portion of the sentence. Words like 'although', 'because', 'therefore', 'however', and 'despite' are strong indicators of the logical relationship the completion should follow.",
    concepts: [
      "Logical consistency: The completion must align with the meaning and direction established by the sentence.",
      "Cause and effect: Sentences using 'because', 'since', 'therefore', 'as a result' need completions that follow causal logic.",
      "Contrast and concession: Sentences with 'although', 'however', 'despite', 'but' need completions that present an opposing idea.",
      "Continuation: Sentences that set up a list or progression need completions that maintain the same direction.",
      "Grammatical fit: The completion must fit grammatically with the existing structure (matching tense, number, part of speech).",
    ],
    rules: [
      "The answer must be both logically and grammatically consistent with the incomplete sentence.",
      "If the sentence begins with a negative or contrasting clause, the completion usually provides a positive or opposing idea.",
      "Conditional sentences ('if...then') require completions that match the conditional structure.",
      "Cause-effect connectors (because, so, therefore) demand that the completion provides the appropriate cause or effect.",
      "Maintain tense consistency between the given portion and the completion.",
      "Avoid options that introduce ideas completely unrelated to the topic of the sentence.",
    ],
    methods: [
      {
        name: "Context-Logic Approach",
        steps: [
          "Read the incomplete sentence carefully and identify the main subject and idea.",
          "Identify any transitional or connecting words that indicate the logical relationship (cause, contrast, condition, etc.).",
          "Predict the type of completion needed based on the logical relationship.",
          "Evaluate each option for both logical fit and grammatical correctness.",
          "Eliminate options that contradict the sentence's logic or are grammatically inconsistent.",
          "Select the option that provides the most natural, logical, and grammatically sound completion.",
        ],
      },
    ],
    quickTricks: [
      "Keywords like 'although', 'even though', 'despite' signal that the completion will contrast with the first part.",
      "Keywords like 'because', 'since', 'as' signal that the completion will provide a reason or cause.",
      "If the sentence mentions a problem, the completion likely discusses the consequence or a solution.",
      "Eliminate options that are off-topic or introduce unrelated subjects before analyzing grammar.",
    ],
    solvedExamples: [
      {
        problem:
          "Although he practiced every day, ___________.\n(A) he won the championship easily\n(B) he could not improve his performance\n(C) his coach was very proud\n(D) he was the best player on the team",
        solution:
          "The keyword 'Although' sets up a contrast. 'Although he practiced every day' describes a positive effort, so the completion must present a negative or unexpected outcome to create the contrast. Option (B) 'he could not improve his performance' provides this contrast. Options (A), (C), and (D) are all positive outcomes that do not contrast with daily practice.",
        answer: "(B) he could not improve his performance",
      },
      {
        problem:
          "The manager decided to postpone the meeting because ___________.\n(A) everyone was present and ready\n(B) several key members were absent\n(C) the agenda had been circulated\n(D) the conference room was well-equipped",
        solution:
          "'Because' introduces a reason. The action is 'postpone the meeting', which is a negative or disruptive decision. The reason must logically justify why the meeting was postponed. Option (B) 'several key members were absent' provides a valid reason for postponement. The other options describe favorable conditions that would not warrant postponement.",
        answer: "(B) several key members were absent",
      },
    ],
    commonMistakes: [
      "Ignoring contrast words like 'although' and 'despite' and choosing a completion that continues in the same direction instead of providing a contrast.",
      "Selecting an option that is grammatically correct but logically inconsistent with the sentence's meaning.",
      "Not reading all options carefully and picking the first one that seems plausible.",
    ],
    keyTakeaways: [
      "Always identify the logical relationship (cause, contrast, condition, continuation) before evaluating options.",
      "Transitional words are the strongest clues for determining the correct completion.",
      "The correct answer must satisfy both logical consistency and grammatical correctness.",
      "Eliminate clearly illogical options first to narrow down your choices quickly.",
      "Practice recognizing common transitional words and the logical patterns they signal.",
    ],
  },

  // ─── 5. Ordering of Sentences ─────────────────────────────────────────
  {
    slug: "ordering-of-sentences",
    categorySlug: "verbal-ability",
    introduction:
      "Ordering of Sentences (also called sentence rearrangement or para-jumbles) presents a set of sentences in a jumbled order, and you must arrange them into a coherent, logical paragraph. These questions test your understanding of logical flow, coherence, and how ideas connect to form meaningful prose.\n\nTypically, you are given 4 to 6 sentences labelled with letters (P, Q, R, S or A through F), and you must determine the correct sequence. Some questions provide a fixed opening sentence (S1) and/or closing sentence (S6), which serves as an anchor for your arrangement.\n\nSuccess in this topic comes from identifying structural clues: opening statements, concluding statements, pronoun references, transitional words, chronological markers, and cause-effect chains. With practice, you can quickly identify mandatory pairs (two sentences that must follow each other) and use them to eliminate wrong sequences.",
    concepts: [
      "Topic sentence: The opening sentence introduces the main subject or theme of the paragraph.",
      "Logical flow: Ideas progress from general to specific, from cause to effect, or chronologically.",
      "Coherence: Sentences connect through pronouns, demonstratives (this, that, these), transitions, and repeated keywords.",
      "Mandatory pairs: Two sentences that must be adjacent due to pronoun reference, continuation, or explanation.",
      "Concluding sentence: The final sentence summarizes, concludes, or states the result.",
    ],
    rules: [
      "The first sentence typically introduces the topic without using pronouns like 'he', 'she', 'they', or 'it' without prior reference.",
      "A sentence with a pronoun (he, she, it, they, this, that) must follow a sentence that establishes the noun it refers to.",
      "Sentences with 'however', 'but', 'on the other hand' signal a contrast and must follow the statement they are contrasting.",
      "Sentences with 'therefore', 'hence', 'thus', 'consequently' must follow the cause they conclude from.",
      "Chronological markers (first, then, later, finally) must appear in their natural time order.",
      "Specific examples follow general statements, not the other way around.",
      "If a sentence begins with 'This' or 'Such', the preceding sentence must contain the concept being referred to.",
    ],
    methods: [
      {
        name: "Anchor and Link Method",
        steps: [
          "If S1 (opening) and/or S6 (closing) are given, use them as anchors.",
          "Read all jumbled sentences to identify the main topic.",
          "Find the sentence that most naturally follows the opening (or starts the paragraph if no opening is given).",
          "Look for mandatory pairs by identifying pronoun references, demonstratives, and transitional words.",
          "Use these pairs to eliminate answer choices that separate them.",
          "Verify your chosen sequence by reading the full paragraph aloud to check for smooth, logical flow.",
        ],
      },
      {
        name: "Elimination Method",
        steps: [
          "Identify one or two mandatory pairs from the sentences.",
          "Check the answer options and eliminate those that do not keep these pairs together.",
          "Among remaining options, check which sequence creates the most logical flow.",
          "Verify by reading the complete paragraph in the chosen order.",
        ],
      },
    ],
    quickTricks: [
      "A sentence beginning with 'He', 'She', 'It', 'They', 'This', or 'Such' is never the first sentence unless the noun is already introduced in a fixed opening.",
      "Look for the most general or introductory sentence as the opener.",
      "Find mandatory pairs first and use them to eliminate wrong options quickly.",
      "Transitional words (however, moreover, furthermore, consequently) are strong indicators of sentence order.",
      "If stuck, try reading different sequences aloud. The correct order will sound the most natural.",
    ],
    solvedExamples: [
      {
        problem:
          "Arrange the following sentences in correct order:\nP. However, the long-term benefits far outweigh the initial difficulties.\nQ. Learning a new language can be challenging at first.\nR. Studies show that bilingual individuals have better cognitive flexibility.\nS. Many people give up during the early stages due to frustration.",
        solution:
          "Start with Q, which introduces the topic ('Learning a new language can be challenging'). S logically follows, elaborating on the challenge ('Many people give up during the early stages'). P then provides the contrast with 'However', stating that long-term benefits outweigh difficulties. R concludes with a specific benefit (cognitive flexibility) that supports the claim in P. The order is Q-S-P-R.",
        answer: "Q-S-P-R",
      },
      {
        problem:
          "S1: The invention of the printing press was a turning point in history.\nP. This made books affordable and accessible to the common people.\nQ. Before its invention, books were copied by hand, making them rare and expensive.\nR. As literacy spread, new ideas began to challenge established authorities.\nS. Johannes Gutenberg developed the first movable-type printing press around 1440.\nS6: The printing press thus laid the foundation for the modern information age.",
        solution:
          "After S1 (the printing press was a turning point), Q provides background ('Before its invention...'). Then S introduces Gutenberg's invention chronologically. P follows with 'This made books affordable' referring to the printing press. R describes the consequence ('As literacy spread...'). The correct order is Q-S-P-R, and this flows naturally into S6 about the modern information age.",
        answer: "Q-S-P-R",
      },
    ],
    commonMistakes: [
      "Placing a sentence with a pronoun ('This', 'He', 'Such') before the noun it refers to has been introduced.",
      "Ignoring transitional words that indicate mandatory sequence relationships between sentences.",
      "Spending too much time trying to build the paragraph from scratch instead of using elimination with mandatory pairs.",
    ],
    keyTakeaways: [
      "Mandatory pairs are the most powerful tool for solving sentence ordering questions quickly.",
      "Pronouns and demonstratives (this, that, such, these) always point back to something stated earlier.",
      "Use the anchor (S1/S6) and link strategy for efficiency.",
      "Transitional words reveal the logical relationship and sequence between sentences.",
      "Practice reading well-structured paragraphs to develop an intuition for natural sentence flow.",
    ],
  },

  // ─── 6. Paragraph Formation ───────────────────────────────────────────
  {
    slug: "paragraph-formation",
    categorySlug: "verbal-ability",
    introduction:
      "Paragraph Formation is closely related to Ordering of Sentences but operates at a slightly higher level. Instead of rearranging individual sentences, you may be asked to arrange a set of sentence groups, identify the best opening or closing sentence, or determine which sentence does not belong in the paragraph. Some variants ask you to identify the theme or choose the sentence that best fits a gap in an existing paragraph.\n\nThis topic tests your ability to understand how paragraphs are structured: a topic sentence introduces the main idea, body sentences develop and support it with details and examples, and a concluding sentence wraps up the discussion. Understanding this structure helps you identify which sentence belongs where.\n\nStrong reading comprehension skills and familiarity with paragraph structure are essential. Practice identifying topic sentences, supporting details, and conclusions in everything you read. This will build the intuition needed to solve these questions quickly.",
    concepts: [
      "Topic sentence: The sentence that introduces the central idea of the paragraph, usually first.",
      "Supporting sentences: Sentences that provide details, examples, explanations, or evidence for the topic sentence.",
      "Concluding sentence: The sentence that summarizes or closes the discussion, usually last.",
      "Unity: All sentences in a paragraph should relate to the same central idea.",
      "Coherence: Sentences should connect smoothly using transitions, pronouns, and logical progression.",
      "Outlier detection: In some questions, one sentence does not belong to the paragraph theme.",
    ],
    rules: [
      "The topic sentence is typically the most general statement and does not refer back to previously stated ideas.",
      "Supporting sentences are more specific than the topic sentence and provide elaboration.",
      "The concluding sentence often uses words like 'thus', 'therefore', 'in conclusion', or restates the main idea.",
      "A sentence that introduces an entirely new or unrelated topic does not belong in the paragraph.",
      "Maintain a consistent point of view and tense throughout the paragraph.",
      "Each sentence should flow naturally from the previous one without abrupt topic shifts.",
    ],
    methods: [
      {
        name: "Theme-Based Formation",
        steps: [
          "Read all the given sentences to determine the central theme.",
          "Identify the topic sentence (the most general, introductory statement).",
          "Group supporting sentences by their sub-topics or the aspects they address.",
          "Arrange supporting sentences in a logical order (chronological, general-to-specific, or cause-to-effect).",
          "Identify the concluding sentence (summary, result, or final thought).",
          "If asked to find the outlier, identify the sentence whose topic differs from the rest.",
        ],
      },
    ],
    quickTricks: [
      "The topic sentence usually does not start with 'This', 'That', 'Such', 'Moreover', or 'However.'",
      "If all sentences revolve around one concept and one does not, that is the outlier.",
      "Sentences with specific data or examples are supporting sentences, not topic sentences.",
      "The concluding sentence often mirrors or echoes the topic sentence in some way.",
    ],
    solvedExamples: [
      {
        problem:
          "Which of the following sentences would best start the paragraph?\n(A) This policy has been praised by economists worldwide.\n(B) The government recently announced a new economic reform policy.\n(C) Moreover, it includes provisions for tax relief to small businesses.\n(D) Critics, however, argue that implementation will be challenging.",
        solution:
          "The paragraph is about a government economic reform policy. Option (B) introduces the topic clearly without referring to any previously mentioned concept. Option (A) uses 'This policy,' which means the policy must already have been mentioned. Option (C) uses 'Moreover,' indicating it follows a previous point. Option (D) uses 'however,' indicating it contrasts with something already stated. Only (B) works as an opening.",
        answer: "(B) The government recently announced a new economic reform policy.",
      },
      {
        problem:
          "Identify the sentence that does NOT belong in the paragraph:\n(A) Yoga has been practiced for thousands of years.\n(B) It combines physical postures, breathing exercises, and meditation.\n(C) The Indian cricket team won the World Cup in 2011.\n(D) Regular practice of yoga improves flexibility and reduces stress.",
        solution:
          "Sentences (A), (B), and (D) all relate to the theme of yoga, its history, components, and benefits. Sentence (C) about the Indian cricket team's World Cup victory is completely unrelated to yoga. It is the outlier.",
        answer: "(C) The Indian cricket team won the World Cup in 2011.",
      },
    ],
    commonMistakes: [
      "Choosing a sentence with a pronoun reference or transition word as the opening sentence.",
      "Failing to recognize the central theme and grouping sentences by surface-level word similarity instead of meaning.",
      "In outlier detection questions, choosing a sentence that seems slightly off-topic but still relates to the central theme.",
    ],
    keyTakeaways: [
      "Every paragraph has a structure: topic sentence, supporting sentences, and concluding sentence.",
      "The topic sentence is the most general statement that introduces the paragraph's theme.",
      "Unity means every sentence must relate to the central idea. An unrelated sentence is the outlier.",
      "Transition words and pronoun references are the strongest clues for ordering sentences within a paragraph.",
      "Practice reading and deconstructing paragraphs from newspapers and editorials to build structural awareness.",
    ],
  },

  // ─── 7. Cloze Test ────────────────────────────────────────────────────
  {
    slug: "closet-test",
    categorySlug: "verbal-ability",
    introduction:
      "A Cloze Test presents a passage with several blanks (usually 5 to 10), and you must fill each blank with the most appropriate word from the given options. This comprehensive exercise tests vocabulary, grammar, contextual understanding, and reading comprehension simultaneously.\n\nUnlike individual fill-in-the-blank questions, a cloze test requires understanding the passage as a whole. Each blank's answer depends not just on the immediate sentence but on the broader context, tone, and meaning of the entire passage. This makes the cloze test one of the most holistic assessments of English language proficiency.\n\nTo approach cloze tests effectively, first read the entire passage (ignoring the blanks) to understand the general theme and tone. Then go back and fill in the blanks one by one, using context clues from surrounding sentences. If unsure about one blank, skip it and return after filling in others, as later answers often provide clues for earlier blanks.",
    concepts: [
      "Contextual vocabulary: Choosing words that fit the meaning of the passage, not just the grammar of the sentence.",
      "Collocations: Certain words naturally pair together (e.g., 'make a decision', not 'do a decision').",
      "Tone and register: The word must match the formality and tone of the passage.",
      "Grammatical fit: The word must be the correct part of speech (noun, verb, adjective, preposition, etc.) for the blank.",
      "Coherence: The filled passage should read smoothly as a unified whole.",
    ],
    rules: [
      "Read the full passage before attempting any blank. Understanding the overall theme is crucial.",
      "Each blank is influenced by both the immediate sentence and the broader passage context.",
      "Check that the chosen word fits grammatically (correct part of speech, correct form) in the blank.",
      "Ensure the chosen word maintains the meaning, tone, and logic of the passage.",
      "Collocations and idiomatic expressions often determine the correct choice when multiple options seem grammatically correct.",
      "Prepositions in blanks are determined by the verbs or nouns they pair with, not by general meaning.",
    ],
    methods: [
      {
        name: "Two-Pass Strategy",
        steps: [
          "First pass: Read the entire passage without looking at the blanks to understand the theme, tone, and flow.",
          "Second pass: Start filling blanks from the beginning. For each blank, re-read the sentence and consider surrounding sentences.",
          "Identify the part of speech needed for the blank (noun, verb, adjective, adverb, preposition, conjunction).",
          "Evaluate each option for meaning, grammar, and tone fit.",
          "If stuck on a blank, skip it and continue. Return to difficult blanks after filling easier ones.",
          "Final check: Re-read the complete passage with all blanks filled to ensure overall coherence.",
        ],
      },
    ],
    quickTricks: [
      "If the blank is after an article (a, an, the), it likely needs a noun or adjective.",
      "If the blank is between a subject and an object, it likely needs a verb.",
      "Look at words before and after the blank for collocation clues.",
      "Eliminate options that create redundancy or contradiction with the passage content.",
      "If two options are close in meaning, the one that matches the passage's tone better is usually correct.",
    ],
    solvedExamples: [
      {
        problem:
          "Fill in the blank: The company has made significant _____ in reducing its carbon footprint over the past decade. Its commitment to sustainability has _____ recognition from environmental organizations.\n\nBlank 1: (A) progress (B) regress (C) damage (D) changes\nBlank 2: (A) earned (B) lost (C) denied (D) ignored",
        solution:
          "For Blank 1: The passage describes the company reducing its carbon footprint, which is a positive achievement. 'Progress' fits because you 'make progress' (common collocation), and it aligns with the positive tone. 'Regress' and 'damage' are negative. 'Changes' is possible but 'make progress' is more idiomatic than 'make changes in reducing.' For Blank 2: The company's positive commitment has led to 'recognition' from environmental organizations. 'Earned' fits because you 'earn recognition' (standard collocation), and it is a positive outcome matching the passage tone.",
        answer: "Blank 1: (A) progress; Blank 2: (A) earned",
      },
      {
        problem:
          "Fill in the blank: Education is not merely about acquiring knowledge; it is about _____ character and developing the ability to think _____.\n\nBlank 1: (A) destroying (B) building (C) forgetting (D) selling\nBlank 2: (A) critically (B) never (C) slowly (D) loudly",
        solution:
          "For Blank 1: The sentence discusses what education is about beyond knowledge. 'Building character' is a well-known collocation and fits the positive, constructive tone. The other options are either negative or nonsensical in this context. For Blank 2: The sentence describes developing 'the ability to think' in a certain way. 'Critically' (think critically) is a standard educational goal and makes logical sense. 'Never', 'slowly', and 'loudly' do not describe a desirable thinking ability in an educational context.",
        answer: "Blank 1: (B) building; Blank 2: (A) critically",
      },
    ],
    commonMistakes: [
      "Filling blanks in isolation without reading the full passage first, which leads to choices that fit one sentence but not the overall context.",
      "Choosing a word that is a synonym of the correct answer but does not collocate properly with surrounding words.",
      "Ignoring the tone of the passage. A formal passage requires formal vocabulary; an informal one requires casual vocabulary.",
    ],
    keyTakeaways: [
      "Always read the full passage before filling any blanks. Context is everything in cloze tests.",
      "Collocations are often the deciding factor between options that seem equally grammatically correct.",
      "The two-pass strategy (read for understanding, then fill blanks) is the most effective approach.",
      "Building a strong vocabulary and reading regularly are the best long-term preparations for cloze tests.",
      "When stuck, fill the easier blanks first. Their answers often provide clues for the harder blanks.",
    ],
  },

  // ─── 8. One Word Substitution ─────────────────────────────────────────
  {
    slug: "one-word-substitution",
    categorySlug: "verbal-ability",
    introduction:
      "One Word Substitution is a vocabulary-focused topic where you are given a phrase or description and must identify the single word that can replace it. For example, 'a person who loves books' can be substituted with 'bibliophile.' This topic is a staple of placement exams, SSC, bank exams, and other competitive tests.\n\nThese questions test your vocabulary breadth and your knowledge of English words derived from Latin, Greek, and other origins. Many one-word substitutions follow predictable patterns based on roots, prefixes, and suffixes. For instance, '-phile' means 'lover of', '-phobia' means 'fear of', '-cide' means 'killing', and '-ology' means 'study of.'\n\nThe best preparation strategy is systematic study of common one-word substitutions grouped by category (people, places, actions, studies, fears, etc.) combined with understanding word roots. This approach lets you deduce the meaning of unfamiliar words during the exam rather than relying solely on memorization.",
    concepts: [
      "Word roots: Latin and Greek roots that form the base of many English words (e.g., 'graph' = write, 'bio' = life, 'anthrop' = human).",
      "Prefixes: Word beginnings that modify meaning (e.g., 'mis-' = wrong, 'pre-' = before, 'anti-' = against).",
      "Suffixes: Word endings that indicate category (e.g., '-ist' = person who, '-ism' = belief, '-ment' = result of action).",
      "Categories of substitution: People (bibliophile, misanthrope), studies (-ology words), fears (-phobia words), killings (-cide words), governments (-archy/-cracy words).",
      "Context-based selection: When multiple options seem plausible, the precise meaning of the description determines the answer.",
    ],
    rules: [
      "The substitution word must capture the full meaning of the given phrase, not just part of it.",
      "Pay attention to specifics in the description. 'A person who hates mankind' is 'misanthrope', not 'pessimist.'",
      "Words ending in '-phile' mean 'one who loves' something: bibliophile (books), audiophile (sound quality).",
      "Words ending in '-phobia' mean 'fear of' something: claustrophobia (enclosed spaces), acrophobia (heights).",
      "Words ending in '-cide' mean 'killing of': homicide (human), genocide (race), infanticide (infant), suicide (self).",
      "Words ending in '-ology' mean 'study of': biology (life), psychology (mind), sociology (society).",
      "Words ending in '-archy' or '-cracy' relate to governance: monarchy (one ruler), democracy (people rule), anarchy (no ruler).",
    ],
    methods: [
      {
        name: "Root Analysis Method",
        steps: [
          "Read the given phrase carefully and identify the key concept.",
          "Break down each answer option into its root components (prefix + root + suffix).",
          "Match the root meaning to the given description.",
          "Verify that the option captures the complete meaning, not just a partial match.",
          "If multiple options seem close, focus on the specific distinguishing detail in the description.",
        ],
      },
      {
        name: "Category Matching Method",
        steps: [
          "Determine the category of the description (person, study, fear, killing, government, etc.).",
          "Recall common one-word substitutions in that category.",
          "Match the specific description to the most precise word.",
          "Eliminate options from wrong categories.",
        ],
      },
    ],
    quickTricks: [
      "Learn the top 100 one-word substitutions grouped by category. These cover most exam questions.",
      "Understanding just 20-30 common roots (bio, graph, phil, phob, cide, anthrop, poly, mono, etc.) helps you decode unfamiliar words.",
      "If you do not know the answer, eliminate options whose root meanings clearly do not match the description.",
      "'Ible/able' words often describe capability: edible (can be eaten), audible (can be heard).",
      "Words starting with 'omni-' mean 'all': omnivore (eats all), omnipresent (present everywhere), omniscient (knows all).",
    ],
    solvedExamples: [
      {
        problem:
          "One word for 'a person who can speak two languages':\n(A) Linguist\n(B) Bilingual\n(C) Polyglot\n(D) Translator",
        solution:
          "'Bi-' means 'two' and 'lingual' relates to 'language.' A bilingual person speaks two languages. A linguist is an expert in linguistics (the study of language) and may or may not speak multiple languages. A polyglot speaks many languages (poly = many, glot = tongue). A translator converts text from one language to another. The description specifically says 'two languages,' so 'bilingual' is the precise match.",
        answer: "(B) Bilingual",
      },
      {
        problem:
          "One word for 'a government by the rich':\n(A) Democracy\n(B) Aristocracy\n(C) Plutocracy\n(D) Theocracy",
        solution:
          "'Pluto-' comes from the Greek 'ploutos' meaning 'wealth,' and '-cracy' means 'rule/government.' A plutocracy is government by the wealthy. Democracy (demos = people) is government by the people. Aristocracy (aristos = best) is government by the elite/nobility. Theocracy (theo = god) is government by religious leaders. The description specifically says 'by the rich,' making plutocracy the correct answer.",
        answer: "(C) Plutocracy",
      },
      {
        problem:
          "One word for 'that which cannot be corrected':\n(A) Illegible\n(B) Incorrigible\n(C) Indelible\n(D) Ineligible",
        solution:
          "'In-' means 'not' and 'corrigible' comes from the Latin 'corrigere' meaning 'to correct.' Incorrigible means 'cannot be corrected or reformed.' Illegible means 'cannot be read.' Indelible means 'cannot be erased.' Ineligible means 'not qualified.' The description says 'cannot be corrected,' which precisely matches 'incorrigible.'",
        answer: "(B) Incorrigible",
      },
    ],
    commonMistakes: [
      "Confusing similar-sounding words like 'illicit' (illegal) and 'elicit' (to draw out), or 'emigrate' (leave a country) and 'immigrate' (enter a country).",
      "Choosing a word that partially matches the description but misses a key detail. For example, choosing 'polyglot' when the description says 'two languages' instead of 'many languages.'",
      "Not paying attention to the exact phrasing of the description. 'Fear of water' is hydrophobia, but 'fear of drowning' is a different concept.",
    ],
    keyTakeaways: [
      "Learning common roots, prefixes, and suffixes is the most efficient preparation strategy.",
      "Study one-word substitutions in thematic groups (people, phobias, studies, governments) for better retention.",
      "The correct answer must match the full meaning of the description, not just part of it.",
      "Practice regularly with flashcards or categorized lists to build vocabulary systematically.",
      "In exams, use root analysis to decode unfamiliar words when you cannot recall the exact substitution.",
    ],
  },

  // ─── 9. Idioms and Phrases ────────────────────────────────────────────
  {
    slug: "idioms-and-phrases",
    categorySlug: "verbal-ability",
    introduction:
      "Idioms and Phrases are fixed expressions whose meanings cannot be deduced from the literal meanings of their individual words. For example, 'to burn the midnight oil' does not literally mean burning oil at midnight; it means to work late into the night. Placement exams frequently test your knowledge of common English idioms and phrases.\n\nQuestions on this topic typically present an idiom in a sentence and ask you to choose the option that best explains its meaning. Alternatively, you may be given a meaning and asked to select the correct idiom. In either format, you need a solid vocabulary of common idioms.\n\nThe most effective strategy is to study idioms in context rather than as isolated definitions. Read sentences and short passages where idioms are used naturally. Group them by theme (success/failure, money, relationships, effort, time) to create meaningful associations that aid retention.",
    concepts: [
      "Literal vs. figurative meaning: Idioms have figurative meanings that differ from their literal word-by-word translation.",
      "Fixed expressions: Idioms are set phrases. Changing a word often destroys the idiom (e.g., 'kick the bucket' works, but 'kick the pail' does not).",
      "Cultural context: Many idioms originate from specific cultural, historical, or literary contexts.",
      "Phrasal verbs: Multi-word verbs like 'give up', 'look after', 'put off' whose meaning differs from the individual words.",
      "Proverbs vs. idioms: Proverbs are complete sentences expressing general truths, while idioms are phrases used within sentences.",
    ],
    rules: [
      "Never try to interpret an idiom literally. Its meaning is always figurative or metaphorical.",
      "Learn idioms in sentence context, not as isolated definitions, for better retention and understanding.",
      "Some idioms have near-synonyms: 'bite the dust' and 'kick the bucket' both mean 'to die.' Know the nuances.",
      "Phrasal verbs change meaning with different prepositions: 'look up' (search), 'look after' (take care of), 'look down on' (despise).",
      "Many exam questions test the most common 200-300 idioms. Mastering this set covers the majority of questions.",
      "Context clues in the sentence can help you guess the meaning of an unfamiliar idiom.",
    ],
    methods: [
      {
        name: "Context Deduction Method",
        steps: [
          "Read the complete sentence containing the idiom.",
          "Identify the tone and subject of the sentence (positive/negative, formal/informal).",
          "Consider the situation described in the sentence and what meaning would make logical sense.",
          "Evaluate each option against the sentence context.",
          "Select the option that makes the overall sentence meaningful and coherent.",
        ],
      },
      {
        name: "Thematic Association Method",
        steps: [
          "When studying idioms, group them by theme (money, time, effort, success, failure, relationships).",
          "For each theme, create a mental map connecting related idioms.",
          "During the exam, identify the theme of the sentence and recall idioms from that theme group.",
          "Match the recalled idiom or meaning with the given options.",
        ],
      },
    ],
    quickTricks: [
      "If the idiom mentions a body part (cold feet, lend an ear, turn a blind eye), the meaning is almost always figurative.",
      "Idioms with 'black' or 'dark' often have negative connotations (black sheep, in the dark, dark horse).",
      "When guessing, the meaning that fits the tone of the sentence (positive or negative) is usually correct.",
      "Common exam idioms: 'a piece of cake' (easy), 'break the ice' (initiate conversation), 'once in a blue moon' (rarely), 'in hot water' (in trouble).",
      "Create flashcards with the idiom on one side and meaning + example sentence on the other for efficient revision.",
    ],
    solvedExamples: [
      {
        problem:
          "What does the idiom 'to burn the midnight oil' mean?\n(A) To waste resources\n(B) To work or study late into the night\n(C) To start a fire at night\n(D) To cook food at midnight",
        solution:
          "'To burn the midnight oil' is an idiom that originated from the time when people used oil lamps for light. Burning oil at midnight means staying up late working or studying. It has nothing to do with wasting resources, starting fires, or cooking. The correct meaning is to work or study late into the night.",
        answer: "(B) To work or study late into the night",
      },
      {
        problem:
          "Choose the correct idiom: He was nervous about the interview, but his friend helped him ___________.\n(A) break the ice\n(B) beat around the bush\n(C) bite the bullet\n(D) burn bridges",
        solution:
          "The sentence describes someone who was nervous and a friend who helped. 'Break the ice' means to initiate conversation or ease tension in an uncomfortable situation, which fits perfectly. 'Beat around the bush' means to avoid the main topic. 'Bite the bullet' means to endure something painful. 'Burn bridges' means to destroy relationships. The context of easing nervousness aligns with 'break the ice.'",
        answer: "(A) break the ice",
      },
      {
        problem:
          "What does the idiom 'a blessing in disguise' mean?\n(A) A religious ceremony\n(B) A hidden curse\n(C) Something that seems bad at first but turns out to be good\n(D) A secret gift",
        solution:
          "'A blessing in disguise' means something that initially appears to be a problem or misfortune but ultimately turns out to be beneficial. The 'disguise' part indicates that the good thing (blessing) is hidden behind something that looks bad. It is not about religion, curses, or secret gifts. The correct meaning is an apparently bad event that turns out to be good.",
        answer:
          "(C) Something that seems bad at first but turns out to be good",
      },
    ],
    commonMistakes: [
      "Interpreting idioms literally. 'Let the cat out of the bag' means to reveal a secret, not anything about actual cats.",
      "Confusing similar idioms: 'break the ice' (ease tension) vs. 'break the bank' (cost too much) vs. 'break a leg' (good luck).",
      "Memorizing definitions without context, which makes it harder to apply idioms correctly in sentences.",
    ],
    keyTakeaways: [
      "Idioms have figurative meanings that cannot be guessed from the literal words.",
      "Study idioms in context (within sentences) rather than as isolated definitions.",
      "Group idioms by theme for better organization and retention.",
      "The top 200-300 idioms cover the vast majority of exam questions.",
      "When encountering an unfamiliar idiom, use the sentence context and tone to make an educated guess.",
    ],
  },

  // ─── 10. Change of Voice ──────────────────────────────────────────────
  {
    slug: "change-of-voice",
    categorySlug: "verbal-ability",
    introduction:
      "Change of Voice refers to converting sentences between active voice and passive voice. In active voice, the subject performs the action ('The cat caught the mouse'). In passive voice, the subject receives the action ('The mouse was caught by the cat'). This topic is a staple of grammar-based verbal ability sections.\n\nUnderstanding voice change requires knowing how to identify the subject, verb, and object in a sentence, and how to restructure the sentence while preserving its meaning. The key transformation involves making the object of the active sentence the subject of the passive sentence, changing the verb to its past participle form with an appropriate auxiliary (is, am, are, was, were, been, being), and optionally including the original subject with 'by.'\n\nVoice change rules vary by tense. Each tense has a specific passive construction. Additionally, special structures like imperatives, modals, and questions have their own passive voice patterns. Mastering the tense-based conversion table is the key to solving these questions accurately.",
    concepts: [
      "Active voice: The subject performs the action. Structure: Subject + Verb + Object.",
      "Passive voice: The subject receives the action. Structure: Object (becomes subject) + Auxiliary + Past Participle + by + Subject.",
      "Past participle: The V3 form of the verb (eaten, written, caught, built) used in passive constructions.",
      "Agent: The doer of the action, introduced by 'by' in passive voice. It can be omitted when unknown or unimportant.",
      "Intransitive verbs: Verbs without objects (sleep, arrive, die) cannot be converted to passive voice.",
    ],
    rules: [
      "Simple Present: Active 'He writes a letter' becomes Passive 'A letter is written by him.'",
      "Simple Past: Active 'She sang a song' becomes Passive 'A song was sung by her.'",
      "Present Continuous: Active 'They are building a house' becomes Passive 'A house is being built by them.'",
      "Past Continuous: Active 'He was reading a book' becomes Passive 'A book was being read by him.'",
      "Present Perfect: Active 'She has completed the work' becomes Passive 'The work has been completed by her.'",
      "Past Perfect: Active 'They had finished the project' becomes Passive 'The project had been finished by them.'",
      "Future Simple: Active 'He will write a letter' becomes Passive 'A letter will be written by him.'",
      "Modals: Active 'She can solve this problem' becomes Passive 'This problem can be solved by her.'",
      "Imperative sentences: 'Close the door' becomes 'Let the door be closed.'",
      "Questions: 'Did he write the letter?' becomes 'Was the letter written by him?'",
      "Change pronouns appropriately: I/me, we/us, he/him, she/her, they/them.",
    ],
    methods: [
      {
        name: "Step-by-Step Voice Conversion",
        steps: [
          "Identify the subject, verb, and object in the active sentence.",
          "Make the object of the active sentence the new subject of the passive sentence.",
          "Determine the tense of the active verb.",
          "Use the appropriate auxiliary verb(s) for that tense in passive voice.",
          "Convert the main verb to its past participle (V3) form.",
          "Add 'by' + the original subject (in object pronoun form) if the agent is relevant.",
          "Verify that the passive sentence preserves the original meaning.",
        ],
      },
    ],
    quickTricks: [
      "Memorize the passive auxiliary for each tense: Simple Present = is/am/are + V3, Simple Past = was/were + V3, etc.",
      "If there is no object in the active sentence, it cannot be converted to passive voice.",
      "The 'by' phrase can be dropped when the agent is obvious, unknown, or unimportant: 'The window was broken' (we don't know by whom).",
      "For modal verbs (can, may, should, must, will), the passive structure is always: modal + be + V3.",
      "Pronoun changes: I becomes 'by me', he becomes 'by him', she becomes 'by her', we becomes 'by us', they becomes 'by them.'",
    ],
    solvedExamples: [
      {
        problem:
          "Convert to passive voice: 'The students are preparing the project.'",
        solution:
          "Step 1: Subject = 'The students', Verb = 'are preparing' (Present Continuous), Object = 'the project'. Step 2: Make 'the project' the new subject. Step 3: Present Continuous passive uses 'is/am/are + being + V3.' Since 'the project' is singular, use 'is being.' Step 4: Past participle of 'prepare' is 'prepared.' Step 5: Add 'by the students.' Result: 'The project is being prepared by the students.'",
        answer: "The project is being prepared by the students.",
      },
      {
        problem:
          "Convert to active voice: 'The novel had been read by all the students before the exam.'",
        solution:
          "Step 1: The passive subject is 'the novel', auxiliary is 'had been' (Past Perfect passive), V3 = 'read', agent = 'all the students.' Step 2: Make the agent ('all the students') the new subject. Step 3: Past Perfect active uses 'had + V3.' Step 4: 'The novel' becomes the object. Result: 'All the students had read the novel before the exam.'",
        answer: "All the students had read the novel before the exam.",
      },
      {
        problem:
          "Convert to passive voice: 'Open the window.'",
        solution:
          "This is an imperative sentence (a command). Imperative sentences in passive voice follow the pattern: 'Let + object + be + V3.' The object is 'the window.' The past participle of 'open' is 'opened.' Result: 'Let the window be opened.' An alternative formal passive: 'You are requested to open the window' (for polite requests).",
        answer: "Let the window be opened.",
      },
    ],
    commonMistakes: [
      "Forgetting to change the pronoun form when converting: 'He' in active must become 'by him' in passive, not 'by he.'",
      "Using the wrong tense auxiliary in passive. Each tense has a specific passive structure that must be memorized.",
      "Trying to convert intransitive verbs (sleep, arrive, die, laugh) to passive, which is not possible because they have no object.",
    ],
    keyTakeaways: [
      "Active voice: Subject does the action. Passive voice: Subject receives the action.",
      "The fundamental transformation: Object becomes subject, verb becomes auxiliary + past participle, subject becomes 'by' phrase.",
      "Each tense has a specific passive construction. Memorize the tense-to-passive conversion table.",
      "Intransitive verbs cannot be converted to passive voice because they lack an object.",
      "The 'by' agent can be omitted when the doer is unknown, obvious, or unimportant.",
    ],
  },

  // ─── 11. Synonyms ────────────────────────────────────────────────────
  {
    slug: "synonyms",
    categorySlug: "verbal-ability",
    introduction:
      "Synonyms are words that have the same or nearly the same meaning as another word. In verbal ability exams, synonym questions present a word and ask you to identify the option that is closest in meaning. For example, 'happy' has synonyms like 'joyful', 'elated', 'cheerful', and 'content.'\n\nSynonym questions test vocabulary breadth and your ability to understand subtle differences in meaning (connotation) and usage context. While 'big' and 'enormous' are both synonyms for 'large,' they differ in degree. Understanding these nuances is what distinguishes good answers from great ones.\n\nBuilding a strong vocabulary for synonyms requires consistent reading and active word study. Use a vocabulary journal, learn words in context (not just definitions), and practice with word groups. Knowing common roots, prefixes, and suffixes also helps you infer meanings of unfamiliar words during exams.",
    concepts: [
      "Denotation: The dictionary meaning of a word. Synonyms share similar denotations.",
      "Connotation: The emotional or implied meaning of a word. 'Slender' and 'skinny' denote thinness but have different connotations (positive vs. negative).",
      "Degree of intensity: Synonyms may differ in strength. 'Angry' < 'furious' < 'livid' are synonyms with increasing intensity.",
      "Context-dependent synonyms: A word may have different synonyms depending on context. 'Light' can mean not heavy (synonym: lightweight) or not dark (synonym: bright).",
      "Word families: Groups of related words sharing a common root.",
    ],
    rules: [
      "Choose the word that is closest in meaning, not just somewhat related.",
      "Consider the context if the word is given in a sentence. The synonym must fit that specific usage.",
      "If the given word has multiple meanings, identify which meaning is being tested (often indicated by a sentence or context clue).",
      "Watch out for words that look similar but have different meanings (e.g., 'affect' and 'effect' are not synonyms).",
      "Degree matters: 'Warm' is not a synonym for 'boiling.' Select the option that matches the intensity of the given word.",
      "Part of speech must match: A noun synonym is needed for a noun, a verb synonym for a verb, etc.",
    ],
    methods: [
      {
        name: "Substitution Method",
        steps: [
          "Read the given word and understand its meaning (use the sentence context if provided).",
          "Try substituting each option into the sentence (or into a sentence you create) in place of the given word.",
          "The option that preserves the meaning of the sentence most faithfully is the correct synonym.",
          "Eliminate options that change the meaning, tone, or intensity significantly.",
        ],
      },
      {
        name: "Root Analysis Method",
        steps: [
          "Break the given word into its root, prefix, and suffix.",
          "Determine the core meaning from the root.",
          "Look for options that share a similar root or meaning pattern.",
          "Verify by checking if the option can replace the given word in context.",
        ],
      },
    ],
    quickTricks: [
      "If two options are very close in meaning, one is usually a distractor. Choose the one that more precisely matches the given word.",
      "Eliminate antonyms first (words with opposite meanings). This quickly narrows your choices.",
      "Words with Latin or Greek roots often have synonyms from Anglo-Saxon origins and vice versa: 'commence' (Latin) = 'begin' (Anglo-Saxon).",
      "Learn high-frequency synonym pairs: abundant/plentiful, arduous/difficult, benevolent/kind, candid/frank, diligent/hardworking.",
      "Read the given word's meaning as a simple definition, then find the option whose definition matches best.",
    ],
    solvedExamples: [
      {
        problem:
          "Choose the synonym of 'Benevolent':\n(A) Malicious\n(B) Kind-hearted\n(C) Indifferent\n(D) Stingy",
        solution:
          "'Benevolent' comes from Latin 'bene' (good/well) + 'volent' (wishing). It means 'kind, generous, wishing good for others.' Option (A) 'Malicious' means intending harm (the opposite). Option (C) 'Indifferent' means not caring. Option (D) 'Stingy' means unwilling to spend. Option (B) 'Kind-hearted' means having a kind and sympathetic nature, which is the closest synonym.",
        answer: "(B) Kind-hearted",
      },
      {
        problem:
          "Choose the synonym of 'Ubiquitous':\n(A) Rare\n(B) Unique\n(C) Omnipresent\n(D) Invisible",
        solution:
          "'Ubiquitous' means 'present, appearing, or found everywhere.' 'Omnipresent' means 'present everywhere at the same time,' which is the closest match. 'Rare' is the opposite (found infrequently). 'Unique' means one of a kind. 'Invisible' means cannot be seen. The correct synonym is 'Omnipresent.'",
        answer: "(C) Omnipresent",
      },
    ],
    commonMistakes: [
      "Choosing a word that is related to the given word but not a synonym. For example, 'rain' and 'umbrella' are related but not synonyms.",
      "Confusing a word with its antonym because they look or sound similar (e.g., choosing 'malicious' as a synonym for 'benevolent').",
      "Ignoring context when the word has multiple meanings. 'Light' can mean 'not heavy' or 'illumination,' and the synonym depends on which meaning is intended.",
    ],
    keyTakeaways: [
      "A synonym must have the same (or very close) meaning AND match the part of speech.",
      "Context determines which synonym is correct when a word has multiple meanings.",
      "Knowing roots, prefixes, and suffixes helps you decode unfamiliar words and identify synonyms.",
      "Eliminate antonyms and unrelated words first to narrow your options.",
      "Build vocabulary systematically through reading, flashcards, and learning words in thematic groups.",
    ],
  },

  // ─── 12. Antonyms ────────────────────────────────────────────────────
  {
    slug: "antonyms",
    categorySlug: "verbal-ability",
    introduction:
      "Antonyms are words that have opposite meanings. In verbal ability exams, antonym questions present a word and ask you to select the option that is most opposite in meaning. For example, the antonym of 'brave' is 'cowardly,' and the antonym of 'abundant' is 'scarce.'\n\nAntonym questions test the same vocabulary skills as synonym questions but require you to think in the opposite direction. Understanding a word's meaning precisely is crucial because you need to identify not just any different word, but the one that is most directly opposite. For instance, the antonym of 'hot' is 'cold' (not 'warm' or 'cool,' which are less extreme).\n\nThe preparation strategies for antonyms mirror those for synonyms: build vocabulary through reading, learn word roots, and study words in pairs (synonym + antonym together). Many students find it helpful to learn antonym pairs together, such as 'optimistic/pessimistic,' 'benevolent/malevolent,' 'generous/miserly.'",
    concepts: [
      "Direct antonyms: Words that are exact opposites (hot/cold, alive/dead, true/false).",
      "Gradable antonyms: Words at opposite ends of a scale (hot/cold, with warm and cool in between).",
      "Complementary antonyms: Pairs where one negates the other completely (alive/dead, on/off, pass/fail).",
      "Relational antonyms: Pairs where one implies the other from a different perspective (buy/sell, teacher/student, parent/child).",
      "Prefix-based antonyms: Words made opposite by adding a prefix (happy/unhappy, possible/impossible, regular/irregular).",
    ],
    rules: [
      "Choose the most direct opposite, not just a different word.",
      "If the given word has multiple meanings, determine which meaning is being tested and find the antonym of that specific meaning.",
      "Part of speech must match: The antonym of a noun must be a noun, a verb for a verb, etc.",
      "Degree matters: The antonym of 'freezing' is 'boiling' (both extreme), not 'warm' (moderate).",
      "Common antonym prefixes: un- (happy/unhappy), in-/im-/il-/ir- (possible/impossible), dis- (agree/disagree), mis- (fortune/misfortune).",
      "Do not confuse the antonym with a word that is merely different. 'Red' and 'blue' are different colors, not antonyms.",
    ],
    methods: [
      {
        name: "Meaning Reversal Method",
        steps: [
          "Determine the precise meaning of the given word.",
          "Think of the direct opposite of that meaning.",
          "Look for the option that best matches your predicted opposite.",
          "Verify by checking that the selected word truly opposes the given word in meaning and intensity.",
        ],
      },
      {
        name: "Prefix Analysis Method",
        steps: [
          "Check if the given word has a common prefix (un-, in-, dis-, mis-, etc.).",
          "If it does, the antonym might be the word without the prefix (or vice versa).",
          "If the word has no prefix, consider whether adding a negative prefix creates the antonym.",
          "Verify that the prefix-modified word is a real English word with the opposite meaning.",
        ],
      },
    ],
    quickTricks: [
      "Learn antonyms in pairs alongside synonyms for maximum efficiency: brave (synonym: courageous; antonym: cowardly).",
      "If the given word is positive, the antonym is negative, and vice versa.",
      "For words with the prefix 'bene-' (good), the antonym often has 'mal-' or 'male-' (bad): benevolent/malevolent.",
      "Words ending in '-ful' often have antonyms ending in '-less': hopeful/hopeless, careful/careless.",
      "When stuck, try using both the given word and each option in the same sentence with 'not.' The correct antonym makes the sentence true: 'Brave means NOT cowardly.'",
    ],
    solvedExamples: [
      {
        problem:
          "Choose the antonym of 'Gregarious':\n(A) Sociable\n(B) Friendly\n(C) Reclusive\n(D) Talkative",
        solution:
          "'Gregarious' means 'fond of company, sociable, enjoying being with others.' The antonym should mean the opposite: someone who avoids company and prefers solitude. Options (A) 'Sociable' and (B) 'Friendly' are synonyms of gregarious, not antonyms. (D) 'Talkative' is related but not opposite. (C) 'Reclusive' means 'avoiding the company of other people, solitary,' which is the direct opposite.",
        answer: "(C) Reclusive",
      },
      {
        problem:
          "Choose the antonym of 'Ephemeral':\n(A) Brief\n(B) Permanent\n(C) Temporary\n(D) Fleeting",
        solution:
          "'Ephemeral' means 'lasting for a very short time.' The antonym should mean 'lasting for a very long time or forever.' (A) 'Brief,' (C) 'Temporary,' and (D) 'Fleeting' are all synonyms of ephemeral. (B) 'Permanent' means 'lasting or intended to last indefinitely,' which is the direct antonym.",
        answer: "(B) Permanent",
      },
    ],
    commonMistakes: [
      "Choosing a synonym instead of an antonym because the words seem related. Always verify that the option means the OPPOSITE.",
      "Selecting a word that is merely different rather than truly opposite. 'Tall' and 'thin' are different but not antonyms.",
      "Matching the wrong sense of a word when it has multiple meanings. 'Light' meaning 'not heavy' has the antonym 'heavy,' but 'light' meaning 'bright' has the antonym 'dark.'",
    ],
    keyTakeaways: [
      "An antonym must be the most direct opposite in meaning, not just a different word.",
      "Learn antonyms in pairs with synonyms for comprehensive vocabulary building.",
      "Prefix-based antonyms (un-, in-, dis-, mis-) are common and easy to master.",
      "Match the intensity of the given word. The antonym of an extreme word should also be extreme.",
      "When the given word has multiple meanings, context determines which antonym is correct.",
    ],
  },

  // ─── 13. Fill in the Blanks ───────────────────────────────────────────
  {
    slug: "fill-in-the-blanks",
    categorySlug: "verbal-ability",
    introduction:
      "Fill in the Blanks questions present a sentence with one or more missing words, and you must choose the option that best completes the sentence. These questions test vocabulary, grammar, contextual understanding, and collocations. They are among the most common question types across all verbal ability sections of placement and competitive exams.\n\nSingle-blank questions test your ability to select a word that fits both grammatically and contextually. Double-blank questions add complexity by requiring both words to fit the sentence simultaneously. The correct answer must make the sentence grammatically sound, logically coherent, and contextually appropriate.\n\nTo excel in fill-in-the-blanks questions, develop a strong vocabulary and practice identifying context clues within the sentence. Keywords, tone indicators, and logical connectors in the sentence often point directly to the type of word needed.",
    concepts: [
      "Context clues: Words and phrases in the sentence that hint at the meaning of the missing word.",
      "Tone indicators: Words that suggest whether the blank requires a positive, negative, or neutral word.",
      "Collocations: Fixed word partnerships that sound natural (e.g., 'make a decision', 'take a chance', 'pay attention').",
      "Grammar fit: The blank must be filled with the correct part of speech and correct form (tense, number, etc.).",
      "Logical coherence: The completed sentence must make logical sense as a whole.",
      "Double blanks: Both words must work together to create a coherent sentence. Test both simultaneously.",
    ],
    rules: [
      "Read the entire sentence before looking at options. Understand the overall meaning first.",
      "Identify the part of speech required by the blank (noun, verb, adjective, adverb, preposition).",
      "Look for context clues: contrast words (but, however, although) suggest the blank is opposite to something stated; continuation words (and, moreover, also) suggest similarity.",
      "For double-blank questions, eliminate options where even one word does not fit the context.",
      "Check collocations: Some verbs pair with specific prepositions or nouns. The right word must form a natural combination.",
      "Maintain tense consistency between the blank and the rest of the sentence.",
    ],
    methods: [
      {
        name: "Context-First Approach",
        steps: [
          "Read the complete sentence, treating the blank as a gap to be understood from context.",
          "Predict the type of word needed (positive/negative, specific part of speech, approximate meaning).",
          "Scan the options and compare each against your prediction.",
          "Substitute the most likely option into the sentence and read it fully.",
          "Verify that the sentence is grammatically correct, logically coherent, and contextually appropriate.",
          "For double blanks, test both words together. Both must fit simultaneously.",
        ],
      },
      {
        name: "Elimination by Grammar",
        steps: [
          "Determine the grammatical requirements of the blank (part of speech, tense, singular/plural).",
          "Eliminate options that do not match the grammatical requirement.",
          "Among remaining options, select the one that best fits the context and meaning.",
        ],
      },
    ],
    quickTricks: [
      "Contrast words (but, however, although, despite) mean the blank will have a meaning opposite to another part of the sentence.",
      "If a sentence describes a problem, the blank likely holds a negative word. If it describes a solution, the blank likely holds a positive word.",
      "For double-blank questions, if you can eliminate one word in a pair, the entire option is eliminated.",
      "Read the sentence with each option substituted. The correct answer will sound the most natural.",
      "Common collocations: 'exert influence', 'pose a threat', 'yield results', 'draw a conclusion', 'raise concerns.'",
    ],
    solvedExamples: [
      {
        problem:
          "The manager's _____ approach to problem-solving earned her the respect of the entire team.\n(A) haphazard\n(B) systematic\n(C) careless\n(D) reckless",
        solution:
          "The sentence states that the approach 'earned her the respect of the entire team,' which is a positive outcome. The blank must contain a positive adjective describing her approach. 'Haphazard' (lacking order), 'careless,' and 'reckless' are all negative words that would not earn respect. 'Systematic' (methodical, organized) is a positive quality that would logically earn respect in problem-solving.",
        answer: "(B) systematic",
      },
      {
        problem:
          "Despite his _____ preparation, he felt _____ about the outcome of the exam.\n(A) thorough ... confident\n(B) poor ... confident\n(C) thorough ... anxious\n(D) poor ... anxious",
        solution:
          "The keyword 'Despite' sets up a contrast between the two blanks. If preparation was thorough (positive), the contrasting feeling should be negative (anxious). If preparation was poor (negative), the contrasting feeling should be positive (confident). Both (B) poor-confident and (C) thorough-anxious create valid contrasts. However, (C) is the better answer because 'Despite thorough preparation, he felt anxious' describes a more natural and commonly tested scenario where unexpected anxiety follows good preparation.",
        answer: "(C) thorough ... anxious",
      },
      {
        problem:
          "The scientist's groundbreaking research _____ new possibilities in the field of genetics.\n(A) closed\n(B) opened up\n(C) destroyed\n(D) ignored",
        solution:
          "'Groundbreaking research' is a highly positive phrase. The blank must describe a positive action performed on 'new possibilities.' 'Closed,' 'destroyed,' and 'ignored' are all negative actions. 'Opened up new possibilities' is a common positive collocation that fits perfectly with groundbreaking research. The sentence describes how innovative research created new opportunities in genetics.",
        answer: "(B) opened up",
      },
    ],
    commonMistakes: [
      "Ignoring the tone of the sentence. A sentence with positive context requires a positive word in the blank, and vice versa.",
      "In double-blank questions, testing each blank independently instead of checking that both words work together in the sentence.",
      "Choosing a word that fits grammatically but not contextually. The word must make sense in the meaning of the sentence, not just its structure.",
    ],
    keyTakeaways: [
      "Always read the complete sentence for context before looking at options.",
      "Contrast words (but, however, despite) are the strongest clues for predicting the blank's meaning.",
      "For double-blank questions, both words must create a coherent sentence together. Eliminate options where either word fails.",
      "Collocations often determine the correct answer when multiple options seem grammatically acceptable.",
      "Build vocabulary by reading extensively and noting how words are used in context.",
    ],
  },

  // ─── 14. Reading Comprehension ────────────────────────────────────────
  {
    slug: "reading-comprehension",
    categorySlug: "verbal-ability",
    introduction:
      "Reading Comprehension (RC) is one of the most important and heavily weighted sections in verbal ability exams. You are given a passage (typically 200-500 words) followed by questions that test your understanding of the passage's content, main idea, author's tone, inferences, and vocabulary in context.\n\nRC questions can be broadly categorized into: factual (directly stated in the passage), inferential (requires you to read between the lines), vocabulary-based (meaning of a word as used in the passage), and main idea/title questions. Each type requires a slightly different approach, but all rely on careful reading and accurate comprehension.\n\nThe key to RC success is active reading: as you read the passage, identify the main idea, note the author's tone and purpose, and mark key points mentally. Do not rush through the passage to get to the questions. A thorough first reading saves time because you will not need to re-read the entire passage for each question.",
    concepts: [
      "Main idea: The central theme or argument of the passage. Often stated in the first or last paragraph.",
      "Supporting details: Facts, examples, and evidence used to develop the main idea.",
      "Author's tone: The attitude of the author toward the subject (objective, critical, supportive, sarcastic, optimistic, etc.).",
      "Inference: A conclusion drawn from the information given, even though it is not directly stated.",
      "Vocabulary in context: The meaning of a word as used in a specific passage, which may differ from its most common definition.",
      "Passage structure: How the passage is organized (chronological, compare-contrast, problem-solution, cause-effect).",
    ],
    rules: [
      "Base your answers on the passage, not on outside knowledge. Even if you know something about the topic, the answer must be supported by the passage.",
      "For factual questions, the answer is directly stated in the passage. Look for the relevant paragraph and find the exact information.",
      "For inferential questions, the answer is not directly stated but can be logically deduced from the given information.",
      "For main idea questions, consider the passage as a whole. The main idea encompasses all paragraphs, not just one section.",
      "For tone questions, look at the author's word choices (positive, negative, neutral words) to determine attitude.",
      "Avoid extreme answer choices (always, never, completely, totally) unless the passage explicitly supports such absolutes.",
      "For vocabulary questions, re-read the sentence containing the word and use context to determine its meaning in that specific usage.",
    ],
    methods: [
      {
        name: "Active Reading Strategy",
        steps: [
          "Read the passage carefully once, noting the main idea of each paragraph.",
          "Identify the overall theme, author's purpose, and tone.",
          "Read each question and classify it (factual, inferential, vocabulary, main idea).",
          "For factual questions, locate the relevant part of the passage and verify the answer directly.",
          "For inferential questions, identify the relevant information and draw a logical conclusion.",
          "For vocabulary questions, re-read the sentence containing the word and test each option as a replacement.",
          "Eliminate options that are not supported by the passage or that contradict it.",
        ],
      },
      {
        name: "Question-First Strategy (for time pressure)",
        steps: [
          "Quickly skim the questions (not the options) to know what to look for.",
          "Read the passage with these questions in mind, noting relevant sections.",
          "Answer the questions, referring back to the passage for verification.",
          "This approach works best when time is limited but should be supplemented with a full reading when possible.",
        ],
      },
    ],
    quickTricks: [
      "The main idea is usually in the first or last paragraph. Topic sentences of each paragraph support it.",
      "If an answer choice uses extreme language (always, never, all, none), it is usually wrong unless the passage explicitly states it.",
      "For 'what can be inferred' questions, the correct answer is a small logical step from what is stated, not a big leap.",
      "The author's tone is revealed by adjective and adverb choices. Look for loaded words.",
      "For title questions, the best title captures the entire passage, not just one part of it.",
    ],
    solvedExamples: [
      {
        problem:
          "Passage: 'The rapid advancement of artificial intelligence has transformed numerous industries. Healthcare, in particular, has benefited significantly from AI-powered diagnostic tools that can detect diseases earlier and more accurately than traditional methods. However, experts caution that these technologies should augment, not replace, human medical professionals. The human elements of empathy, ethical judgment, and patient communication remain irreplaceable in quality healthcare.'\n\nQuestion: What is the author's primary argument?",
        solution:
          "The passage discusses AI in healthcare, noting its benefits (earlier and more accurate disease detection) while cautioning that it should augment, not replace, human doctors. The emphasis on irreplaceable human qualities (empathy, ethical judgment, communication) reveals the primary argument: AI is valuable in healthcare but should complement human professionals rather than replace them. The passage does not argue that AI is bad or that it should be avoided entirely.",
        answer:
          "AI technology should complement human medical professionals in healthcare, not replace them.",
      },
      {
        problem:
          "Based on the same passage: What does the word 'augment' most likely mean as used in the passage?\n(A) Eliminate\n(B) Supplement and enhance\n(C) Compete with\n(D) Ignore",
        solution:
          "The passage states that AI 'should augment, not replace, human medical professionals.' The contrast with 'replace' tells us that 'augment' is being positioned as an alternative to replacement. It means to work alongside and enhance rather than to substitute. Option (B) 'Supplement and enhance' captures this meaning. Option (A) is close to 'replace.' Options (C) and (D) do not fit the context.",
        answer: "(B) Supplement and enhance",
      },
    ],
    commonMistakes: [
      "Bringing in outside knowledge to answer questions. The answer must always be supported by the passage content.",
      "Choosing an answer that is true in general but not stated or implied in the specific passage.",
      "Confusing an inference (logically deduced from the passage) with an assumption (not supported by the passage).",
    ],
    keyTakeaways: [
      "Always base your answers on the passage, not on personal knowledge or general truth.",
      "Read the passage actively, noting main ideas, tone, and key details.",
      "Classify each question (factual, inferential, vocabulary, main idea) and apply the appropriate strategy.",
      "Extreme answer choices are usually wrong. Look for moderate, well-supported answers.",
      "Practice regularly with diverse passages (science, social science, literature, economics) to build reading speed and comprehension.",
    ],
  },

  // ─── 15. Verbal Analogies ────────────────────────────────────────────
  {
    slug: "verbal-analogies",
    categorySlug: "verbal-ability",
    introduction:
      "Verbal Analogies test your ability to identify relationships between pairs of words and then find another pair with the same relationship. A typical analogy question looks like: 'Bird : Nest :: Dog : ?' where the answer is 'Kennel' because a bird lives in a nest, and a dog lives in a kennel. The relationship is 'animal : its dwelling.'\n\nAnalogy questions assess both vocabulary and logical reasoning. You need to precisely define the relationship between the given pair and then find an option that replicates that exact relationship. Common analogy relationships include: synonyms, antonyms, part-whole, category-member, cause-effect, degree, tool-user, product-source, and action-object.\n\nThe key skill is identifying the precise relationship. 'Pen : Writer' could seem like 'tool : user,' but it could also be interpreted differently. The correct approach is to form a specific sentence describing the relationship (e.g., 'A writer uses a pen as their primary tool') and test which option fits the same sentence pattern.",
    concepts: [
      "Word pair relationship: The specific logical connection between two words (synonym, antonym, part-whole, cause-effect, etc.).",
      "Parallel relationship: The answer pair must have the exact same type of relationship as the given pair.",
      "Common relationship types: synonym, antonym, part to whole, whole to part, cause to effect, tool to user, worker to product, degree (hot to warm = cold to cool), category to example, object to function.",
      "Bridge sentence: A sentence that describes the relationship between the given pair. The same sentence structure should work for the answer pair.",
      "Order matters: 'Cat : Kitten' (adult : young) is different from 'Kitten : Cat' (young : adult).",
    ],
    rules: [
      "First, determine the precise relationship between the given pair. Be as specific as possible.",
      "The relationship must be applied in the same order. If the first pair is 'larger : smaller,' the answer must also follow that order.",
      "Create a bridge sentence connecting the given pair. Test each option with the same bridge sentence.",
      "Eliminate options where the relationship is similar but not identical. Precision is key.",
      "If multiple options seem to work, choose the one where the relationship most closely mirrors the given pair in type, degree, and specificity.",
      "Consider the part of speech and word category. The answer pair should match the grammatical and categorical pattern of the given pair.",
    ],
    methods: [
      {
        name: "Bridge Sentence Method",
        steps: [
          "Create a precise sentence describing the relationship: 'A [word 1] is a [relationship] of [word 2].'",
          "Test each answer option by substituting it into the same sentence structure.",
          "The option that fits the sentence most naturally and accurately is the correct answer.",
          "If multiple options fit loosely, refine your bridge sentence to be more specific.",
        ],
      },
      {
        name: "Relationship Classification Method",
        steps: [
          "Identify the relationship type (synonym, antonym, part-whole, cause-effect, etc.).",
          "Eliminate options that have a different relationship type.",
          "Among remaining options, verify the direction and specificity of the relationship.",
          "Select the option with the most parallel relationship.",
        ],
      },
    ],
    quickTricks: [
      "Always define the relationship as precisely as possible. 'Related to' is too vague; 'is the young one of' is precise.",
      "Common analogy patterns: Doctor : Hospital :: Teacher : School (worker : workplace), Pen : Write :: Knife : Cut (tool : function).",
      "If the given pair has a strong relationship (synonyms or antonyms), the answer pair should also have an equally strong relationship.",
      "Direction matters: 'Cow : Calf' (parent : offspring) requires an answer like 'Horse : Foal,' not 'Foal : Horse.'",
      "When stuck, categorize the relationship first, then compare options within that category.",
    ],
    solvedExamples: [
      {
        problem:
          "Painter : Canvas :: Writer : ?\n(A) Pen\n(B) Paper\n(C) Book\n(D) Story",
        solution:
          "A painter creates art on a canvas. The canvas is the medium on which the painter works. Similarly, a writer writes on paper. A pen is the tool (not the medium), a book is the final product, and a story is the content. The relationship is 'creator : medium they work on.' Bridge sentence: 'A painter creates on a canvas, just as a writer creates on paper.'",
        answer: "(B) Paper",
      },
      {
        problem:
          "Elated : Happy :: Furious : ?\n(A) Sad\n(B) Calm\n(C) Angry\n(D) Annoyed",
        solution:
          "'Elated' is an extreme degree of 'happy.' The relationship is 'extreme degree : moderate degree' of the same emotion. Applying this to 'furious': 'furious' is an extreme form of anger. 'Angry' is the moderate degree. 'Sad' is a different emotion. 'Calm' is the opposite. 'Annoyed' is a lesser degree than angry, not the moderate form. Bridge sentence: 'Elated is an extreme form of happy, just as furious is an extreme form of angry.'",
        answer: "(C) Angry",
      },
      {
        problem:
          "Calf : Cow :: Puppy : ?\n(A) Cat\n(B) Dog\n(C) Kitten\n(D) Bone",
        solution:
          "A calf is the young one of a cow. The relationship is 'young animal : adult animal.' Applying this to 'puppy': a puppy is the young one of a dog. Option (B) 'Dog' correctly completes the analogy. 'Cat' is a different species. 'Kitten' is a young cat, not the adult form of a puppy. 'Bone' has no young-adult relationship with puppy.",
        answer: "(B) Dog",
      },
    ],
    commonMistakes: [
      "Defining the relationship too loosely (e.g., 'they are related') instead of precisely (e.g., 'young one of').",
      "Ignoring the order of the relationship. 'A : B' and 'B : A' represent different relationships.",
      "Choosing an option that has a plausible but different relationship type from the given pair.",
    ],
    keyTakeaways: [
      "The bridge sentence method is the most reliable technique for solving analogies.",
      "Be as precise as possible when defining the relationship between the given pair.",
      "Order and direction of the relationship must be maintained in the answer pair.",
      "Common relationship types include: synonym, antonym, part-whole, degree, cause-effect, tool-function, and worker-workplace.",
      "Practice identifying relationship types quickly, as this skill improves speed and accuracy in exams.",
    ],
  },

  // ─── 16. Direct and Indirect Speech ───────────────────────────────────
  {
    slug: "direct-and-indirect-speech",
    categorySlug: "verbal-ability",
    introduction:
      "Direct and Indirect Speech (also called quoted and reported speech) refers to two ways of conveying what someone said. Direct speech quotes the exact words of the speaker within quotation marks: He said, 'I am going home.' Indirect speech reports what was said without quotation marks, often with changes to pronouns, tenses, and time expressions: He said that he was going home.\n\nConverting between direct and indirect speech requires understanding systematic rules for changing tenses, pronouns, and adverbs of time and place. These rules are consistent and predictable, making this topic very scoring once the conversion patterns are mastered.\n\nPlacement exams test this topic through conversion questions (convert direct to indirect or vice versa) and error identification questions (find the mistake in a reported speech sentence). Both formats require a thorough understanding of the tense shift rules, pronoun changes, and special structures for questions, commands, and exclamations.",
    concepts: [
      "Direct speech: The exact words of the speaker, enclosed in quotation marks.",
      "Indirect speech: A report of what was said, without quotation marks, with appropriate changes.",
      "Reporting verb: The verb that introduces the speech (said, told, asked, exclaimed, ordered, etc.).",
      "Tense backshift: In indirect speech, the tense generally moves one step back (present becomes past, past becomes past perfect, etc.).",
      "Pronoun change: Pronouns shift to match the perspective of the reporter.",
      "Time and place changes: Time expressions like 'today', 'tomorrow', 'here' change to 'that day', 'the next day', 'there' in indirect speech.",
    ],
    rules: [
      "Tense changes: Simple Present becomes Simple Past ('I go' becomes 'he went').",
      "Present Continuous becomes Past Continuous ('I am going' becomes 'he was going').",
      "Present Perfect becomes Past Perfect ('I have gone' becomes 'he had gone').",
      "Simple Past becomes Past Perfect ('I went' becomes 'he had gone').",
      "Past Continuous becomes Past Perfect Continuous ('I was going' becomes 'he had been going').",
      "Will becomes Would, Can becomes Could, May becomes Might, Shall becomes Should.",
      "Past Perfect and Past Perfect Continuous do not change further in indirect speech.",
      "Pronoun changes follow reporting perspective: first person pronouns change based on the subject; second person pronouns change based on the object.",
      "Time/place changes: today -> that day, tomorrow -> the next day, yesterday -> the previous day/the day before, now -> then, here -> there, this -> that, these -> those, ago -> before.",
      "For questions: Yes/No questions use 'if' or 'whether'; Wh-questions retain the question word. Both use declarative word order (not question order).",
      "For commands/requests: Use 'told/ordered/requested + to + infinitive.' Negative commands: 'told not to + infinitive.'",
      "For exclamations: Use 'exclaimed that' and convert the exclamation into a statement.",
      "If the reporting verb is in the present tense ('He says'), no tense change is needed.",
      "Universal truths, habitual actions, and historical facts do not require tense change: He said, 'The earth revolves around the sun' becomes He said that the earth revolves around the sun.",
    ],
    methods: [
      {
        name: "Systematic Conversion (Direct to Indirect)",
        steps: [
          "Identify the reporting verb and determine the type of sentence (statement, question, command, or exclamation).",
          "Remove the quotation marks and add an appropriate conjunction ('that' for statements, 'if/whether' for yes/no questions, the Wh-word for Wh-questions).",
          "Apply the tense backshift rule to all verbs in the reported clause.",
          "Change pronouns to match the reporting perspective (first person changes based on the subject of the reporting verb, second person based on the object).",
          "Change time and place expressions according to the standard conversion table.",
          "Adjust the sentence structure: questions become declarative order, commands use infinitive structure.",
          "Read the final sentence to verify it sounds natural and grammatically correct.",
        ],
      },
      {
        name: "Systematic Conversion (Indirect to Direct)",
        steps: [
          "Identify the reporting verb and conjunction to determine the original sentence type.",
          "Remove the conjunction ('that', 'if', 'whether') and add quotation marks.",
          "Reverse the tense backshift (Past becomes Present, Past Perfect becomes Past, etc.).",
          "Change pronouns back to the speaker's perspective.",
          "Restore original time and place expressions.",
          "Add appropriate punctuation (period for statements, question mark for questions, exclamation mark for exclamations).",
        ],
      },
    ],
    quickTricks: [
      "Memorize the tense backshift ladder: Present -> Past -> Past Perfect. Will -> Would. Can -> Could. May -> Might.",
      "For yes/no questions, always use 'asked if/whether' and declarative word order. Never keep the question mark in indirect speech.",
      "Commands use 'told/ordered + object + to + verb.' Negative commands: 'told + object + not to + verb.'",
      "Universal truths keep their original tense even in indirect speech.",
      "If the reporting verb is in present tense, do not change the tense of the reported speech.",
    ],
    solvedExamples: [
      {
        problem:
          "Convert to indirect speech: She said, 'I am preparing for my exam tomorrow.'",
        solution:
          "Step 1: Reporting verb is 'said' (past tense), sentence type is a statement. Step 2: Remove quotation marks, add 'that.' Step 3: Tense backshift: 'am preparing' (Present Continuous) becomes 'was preparing' (Past Continuous). Step 4: Pronoun change: 'I' refers to 'she', so it becomes 'she.' 'My' becomes 'her.' Step 5: Time change: 'tomorrow' becomes 'the next day.' Result: She said that she was preparing for her exam the next day.",
        answer: "She said that she was preparing for her exam the next day.",
      },
      {
        problem:
          "Convert to indirect speech: The teacher asked, 'Have you completed your homework?'",
        solution:
          "Step 1: Reporting verb is 'asked' (past tense), sentence type is a yes/no question. Step 2: Remove quotation marks, add 'if' or 'whether.' Use declarative word order (not question order). Step 3: Tense backshift: 'have completed' (Present Perfect) becomes 'had completed' (Past Perfect). Step 4: Pronoun change: 'you' (addressed person) changes based on context. Assuming the student was addressed: 'you' might become 'he/she' or 'I' depending on who is reporting. In a general context: The teacher asked if he/she had completed his/her homework. Step 5: 'Your' becomes 'his/her.' Result: The teacher asked if he had completed his homework.",
        answer: "The teacher asked if he had completed his homework.",
      },
      {
        problem:
          "Convert to indirect speech: The captain said to the soldiers, 'Do not move until I give the order.'",
        solution:
          "Step 1: Reporting verb is 'said to' (a command context), sentence type is a negative command. Step 2: Change 'said to' to 'ordered/commanded.' Remove quotation marks. Step 3: Negative command structure: 'ordered + object + not to + verb.' Step 4: 'Do not move' becomes 'not to move.' Step 5: 'Until I give the order' needs tense backshift and pronoun change: 'I give' becomes 'he gave.' Result: The captain ordered the soldiers not to move until he gave the order.",
        answer:
          "The captain ordered the soldiers not to move until he gave the order.",
      },
    ],
    commonMistakes: [
      "Forgetting to change the tense when the reporting verb is in the past. This is the most common error in speech conversion.",
      "Keeping question word order in indirect speech. 'He asked where is the station' is wrong; it should be 'He asked where the station was.'",
      "Not changing time and place expressions. 'Today', 'tomorrow', 'here', and 'now' must change to 'that day', 'the next day', 'there', and 'then' in indirect speech.",
    ],
    keyTakeaways: [
      "Master the tense backshift rules: this single skill solves the majority of direct/indirect speech questions.",
      "Different sentence types (statement, question, command, exclamation) have different indirect speech structures.",
      "Pronouns, time expressions, and place expressions must all be adjusted when converting speech.",
      "Universal truths and present-tense reporting verbs are exceptions to the tense backshift rule.",
      "Practice conversions in both directions (direct to indirect and indirect to direct) for complete mastery.",
    ],
  },
];
