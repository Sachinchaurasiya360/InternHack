import type {
  ReadingComprehensionPassage,
  VerbalQuestionItem,
} from "../../../../lib/types/verbal-ability.types";

export const mockReadingComprehension: ReadingComprehensionPassage[] = [
  {
    id: 1,
    title: "The Impact of Artificial Intelligence on Modern Workforces",
    paragraphs: [
      "The rapid evolution of Artificial Intelligence (AI) has ushered in a transformative era for global employment markets. While historical industrial revolutions replaced manual labor with machines, the digital automation wave challenges cognitive domains previously deemed uniquely human. Generative models, neural networks, and sophisticated machine learning algorithms are now capable of composing prose, debugging codebase files, analyzing complex financial indices, and even diagnosing medical anomalies. This shift raises profound questions about job displacement and the future role of human professionals.",
      "Economists are divided on the net impact of this automation. Optimists argue that AI will act as a cognitive enhancer, automating mundane, repetitive administrative tasks and freeing humans to focus on higher-level strategic planning, creative execution, and empathetic engagement. For instance, in healthcare, diagnostics engines can filter through thousands of medical scans in seconds, leaving physicians with more time to consult directly with patients and personalize treatment regimens. In this view, AI is not a competitor but an assistant.",
      "Conversely, pessimists predict severe structural unemployment, particularly for mid-level knowledge workers whose tasks are highly structured and rule-based. Paralegals, content creators, junior software engineers, and entry-level data analysts are finding that software can produce comparable outcomes at a fraction of the cost and time. Re-skilling the workforce to meet the demands of an AI-centric economy is a monumental task requiring coordinated efforts from academic institutions, private enterprises, and regulatory bodies.",
    ],
    companies: ["TCS", "Infosys", "Wipro", "Accenture", "Google"],
    questions: [
      {
        id: 101,
        questionText: "According to the first paragraph, how does the current AI revolution differ from historical industrial revolutions?",
        options: [
          "It primarily replaces manual labor with mechanized assembly lines.",
          "It challenges cognitive domains rather than just physical manual labor.",
          "It has a negligible impact on white-collar job sectors.",
          "It focuses entirely on agricultural automation and food production."
        ],
        correctOptionIndex: 1,
        explanation: "Paragraph 1 states: 'While historical industrial revolutions replaced manual labor with machines, the digital automation wave challenges cognitive domains previously deemed uniquely human.'",
        difficulty: "Easy"
      },
      {
        id: 102,
        questionText: "Which of the following best describes the optimistic viewpoint regarding AI's role in the workforce?",
        options: [
          "AI will completely replace human workers, leading to a leisure-based society.",
          "AI will fail to automate complex tasks, keeping human roles completely secure.",
          "AI will serve as a helper, taking over routine tasks and allowing humans to focus on creative and strategy roles.",
          "AI will decrease corporate profits by requiring heavy infrastructure spending."
        ],
        correctOptionIndex: 2,
        explanation: "Paragraph 2 states: 'Optimists argue that AI will act as a cognitive enhancer, automating mundane, repetitive administrative tasks and freeing humans to focus on higher-level strategic planning, creative execution, and empathetic engagement.'",
        difficulty: "Medium"
      },
      {
        id: 103,
        questionText: "Which group of workers is identified as being at the highest risk of structural unemployment in the pessimistic view?",
        options: [
          "Manual laborers working in construction and agriculture.",
          "Highly specialized executives making intuitive decisions.",
          "Mid-level knowledge workers performing structured, rule-based tasks.",
          "Artists and novelists working on abstract conceptual designs."
        ],
        correctOptionIndex: 2,
        explanation: "Paragraph 3 states: '...pessimists predict severe structural unemployment, particularly for mid-level knowledge workers whose tasks are highly structured and rule-based.'",
        difficulty: "Hard"
      }
    ]
  },
  {
    id: 2,
    title: "The Economics and Ecology of Sustainable Energy Transition",
    paragraphs: [
      "Transitioning the global energy grid from fossil fuels to renewable sources is one of the most critical ecological and economic challenges of the twenty-first century. Solar, wind, and hydroelectric power are often praised as the pillars of a clean energy future. However, the intermittent nature of solar irradiance and wind velocity presents grid operators with massive challenges. Without efficient grid-scale storage solutions, heavy reliance on renewables can result in either supply deficits during peak demand or wasteful overproduction.",
      "Furthermore, the transition is not resource-free. Building photovoltaic panels, wind turbine generators, and electric vehicle batteries requires vast amounts of lithium, cobalt, nickel, and rare-earth elements. Mining these minerals is highly concentrated in specific regions, raising geopolitical concerns reminiscent of twentieth-century oil conflicts. In addition, the extraction processes themselves carry high environmental costs, including water contamination, habitat destruction, and greenhouse emissions from heavy machinery.",
      "To address these issues, economists propose carbon pricing mechanisms to incentivize cleaner production, while engineers focus on next-generation grid designs. Smart grids utilizing decentralized energy resources, local microgrids, and green hydrogen storage systems present promising paths forward. However, implementing these solutions at scale requires trillions of dollars of capital expenditure and international consensus on trade and carbon regulations.",
    ],
    companies: ["TCS", "Cognizant", "Infosys", "Wipro"],
    questions: [
      {
        id: 201,
        questionText: "What is the primary challenge associated with solar and wind energy mentioned in the first paragraph?",
        options: [
          "Their high cost compared to nuclear energy.",
          "Their inability to generate high-voltage currents.",
          "The intermittent nature of their power generation.",
          "The localized noise pollution generated by solar arrays."
        ],
        correctOptionIndex: 2,
        explanation: "Paragraph 1 highlights that: '...the intermittent nature of solar irradiance and wind velocity presents grid operators with massive challenges. Without efficient grid-scale storage solutions, heavy reliance on renewables can result in supply deficits.'",
        difficulty: "Medium"
      },
      {
        id: 202,
        questionText: "Why does the author argue that the transition to sustainable energy is not entirely 'resource-free'?",
        options: [
          "It requires massive public subsidies that strain federal budgets.",
          "It relies on heavy machinery powered entirely by coal plants.",
          "It demands substantial amounts of minerals like lithium, cobalt, and nickel, which carry extraction costs.",
          "It accelerates the consumption of natural gas in electricity plants."
        ],
        correctOptionIndex: 2,
        explanation: "Paragraph 2 states: 'Building photovoltaic panels, wind turbine generators, and electric vehicle batteries requires vast amounts of lithium, cobalt, nickel, and rare-earth elements... extraction processes themselves carry high environmental costs.'",
        difficulty: "Medium"
      }
    ]
  }
];

export const mockSentenceCorrection: VerbalQuestionItem[] = [
  {
    id: 301,
    questionText: "Choose the grammatically correct version of the sentence:\n'If the manager would have listened to the employee, the mistake would not happen.'",
    options: [
      "If the manager would have listened to the employee, the mistake would not happen.",
      "If the manager had listened to the employee, the mistake would not have happened.",
      "If the manager listened to the employee, the mistake would not have happened.",
      "If the manager had listened to the employee, the mistake would not happen."
    ],
    correctOptionIndex: 1,
    explanation: "This is a third conditional sentence expressing a hypothetical past event. The correct form is 'If + past perfect, would have + past participle'. Therefore, 'If the manager had listened... the mistake would not have happened' is correct.",
    difficulty: "Medium",
    companies: ["TCS", "Accenture", "Infosys"]
  },
  {
    id: 302,
    questionText: "Identify the correction needed:\n'The team of developers is ready to present their prototype.'",
    options: [
      "Replace 'is ready' with 'are ready'.",
      "Replace 'their prototype' with 'its prototype'.",
      "Replace 'present' with 'presenting'.",
      "No correction needed."
    ],
    correctOptionIndex: 1,
    explanation: "'The team' is a collective noun acting as a single unit. It correctly takes the singular verb 'is', but requires the singular possessive pronoun 'its' instead of the plural 'their'.",
    difficulty: "Easy",
    companies: ["Wipro", "Infosys"]
  },
  {
    id: 303,
    questionText: "Choose the best alternative to replace the underlined portion:\n'She is different than her sister in many ways.'",
    options: [
      "different from her sister",
      "different to her sister",
      "differently than her sister",
      "No improvement needed"
    ],
    correctOptionIndex: 0,
    explanation: "The standard idiom in English is 'different from', not 'different than'.",
    difficulty: "Easy",
    companies: ["TCS", "Cognizant"]
  }
];

export const mockParaJumbles: VerbalQuestionItem[] = [
  {
    id: 401,
    questionText: "Rearrange the following sentences (P, Q, R, S) into a logical paragraph:\n\nP. However, in the long run, consistent efforts yield compounded rewards.\nQ. Learning complex algorithms can feel incredibly frustrating at the beginning.\nR. This is why many aspiring programmers quit within the first few weeks.\nS. It demands high cognitive capacity and patience.",
    options: [
      "Q - S - R - P",
      "Q - R - S - P",
      "S - Q - R - P",
      "Q - S - P - R"
    ],
    correctOptionIndex: 0,
    explanation: "Q introduces the main topic (algorithms feeling frustrating at the beginning). S defines the reason for this ('It demands...'). R details the consequence ('This is why many quit...'). P concludes with a contrasting, positive outlook ('However, in the long run...'). This forms the sequence Q-S-R-P.",
    difficulty: "Medium",
    companies: ["TCS", "Accenture", "Wipro"]
  },
  {
    id: 402,
    questionText: "Determine the correct logical sequence of the sentences:\n\nP. Thus, the database must be structured to avoid redundant records.\nQ. An efficient database design is essential for scaling applications.\nR. High redundancy leads to sync conflicts and slow queries.\nS. It ensures that storage is optimal and operations execute quickly.",
    options: [
      "Q - S - R - P",
      "Q - R - S - P",
      "S - Q - R - P",
      "P - R - S - Q"
    ],
    correctOptionIndex: 0,
    explanation: "Q introduces the topic of database design. S explains what it ensures. R contrasts it by explaining what happens with redundancy. P concludes with 'Thus...' indicating the database should avoid redundancy.",
    difficulty: "Medium",
    companies: ["Infosys", "Cognizant"]
  }
];

export const mockErrorSpotting: VerbalQuestionItem[] = [
  {
    id: 501,
    questionText: "Identify the part of the sentence containing a grammatical error:\n\n'(A) Neither the software developers / (B) nor the system architect / (C) have approved the release. / (D) No error.'",
    options: [
      "Part (A)",
      "Part (B)",
      "Part (C)",
      "Part (D) - No error"
    ],
    correctOptionIndex: 2,
    explanation: "When subjects are joined by 'neither...nor', the verb agrees with the subject closest to it. 'The system architect' is singular, so the verb should be singular 'has approved', not 'have approved'.",
    difficulty: "Medium",
    companies: ["TCS", "Wipro", "Infosys"]
  },
  {
    id: 502,
    questionText: "Identify the part of the sentence containing a grammatical error:\n\n'(A) The information received / (B) from the clients / (C) were highly confidential. / (D) No error.'",
    options: [
      "Part (A)",
      "Part (B)",
      "Part (C)",
      "Part (D) - No error"
    ],
    correctOptionIndex: 2,
    explanation: "'Information' is an uncountable noun and always takes a singular verb. Therefore, 'were' should be replaced with 'was'.",
    difficulty: "Easy",
    companies: ["Cognizant", "Accenture"]
  }
];

export const mockSynonymsAntonyms: VerbalQuestionItem[] = [
  {
    id: 601,
    questionText: "Choose the word that is most nearly SYNONYMOUS with:\n'Meticulous'",
    options: [
      "Careless",
      "Scrupulous",
      "Hasty",
      "Indifferent"
    ],
    correctOptionIndex: 1,
    explanation: "'Meticulous' means showing great attention to detail; very careful and precise. 'Scrupulous' has a similar meaning of being extremely attentive to details and correct behavior.",
    difficulty: "Easy",
    companies: ["TCS", "Infosys", "Wipro"]
  },
  {
    id: 602,
    questionText: "Choose the word that is most nearly ANTONYMOUS to:\n'Ephemeral'",
    options: [
      "Transient",
      "Fleeting",
      "Permanent",
      "Brief"
    ],
    correctOptionIndex: 2,
    explanation: "'Ephemeral' means lasting for a very short time. Its antonym is 'Permanent', which means lasting or remaining unchanged indefinitely.",
    difficulty: "Medium",
    companies: ["Accenture", "Cognizant"]
  }
];

export const mockClozeTest: VerbalQuestionItem[] = [
  {
    id: 701,
    questionText: "Read the passage and select the best word to fill in blank (1):\n\n'In the realm of software engineering, testing is (1)______ to ensuring code quality. Developers often write unit tests to verify that individual components behave as expected. Skipping this stage can lead to (2)______ defects reaching the production environment.'",
    options: [
      "optional",
      "redundant",
      "indispensable",
      "harmful"
    ],
    correctOptionIndex: 2,
    explanation: "The passage asserts testing is key to ensuring code quality. Therefore, testing is 'indispensable' (absolutely necessary). 'Optional' or 'redundant' would contradict the passage tone.",
    difficulty: "Easy",
    companies: ["TCS", "Infosys"]
  },
  {
    id: 702,
    questionText: "Read the passage and select the best word to fill in blank (2):\n\n'In the realm of software engineering, testing is (1)______ to ensuring code quality. Developers often write unit tests to verify that individual components behave as expected. Skipping this stage can lead to (2)______ defects reaching the production environment.'",
    options: [
      "minor",
      "catastrophic",
      "beneficial",
      "frequent"
    ],
    correctOptionIndex: 1,
    explanation: "Skipping testing can lead to major, destructive defects. 'Catastrophic' is the best choice to convey the severity of untested production issues.",
    difficulty: "Medium",
    companies: ["Infosys", "Wipro"]
  }
];

export const mockOneWordSubstitution: VerbalQuestionItem[] = [
  {
    id: 801,
    questionText: "Find the single word that best substitutes the given phrase:\n'One who looks at the bright side of things'",
    options: [
      "Pessimist",
      "Optimist",
      "Altruist",
      "Pacifist"
    ],
    correctOptionIndex: 1,
    explanation: "An 'Optimist' is a person who tends to be hopeful and confident about the future or the success of something. A 'Pessimist' looks at the dark side.",
    difficulty: "Easy",
    companies: ["TCS", "Infosys", "Cognizant"]
  },
  {
    id: 802,
    questionText: "Find the single word that best substitutes the given phrase:\n'A solution or remedy for all difficulties or diseases'",
    options: [
      "Panacea",
      "Antidote",
      "Placebo",
      "Elixir"
    ],
    correctOptionIndex: 0,
    explanation: "A 'Panacea' is a remedy or solution for all difficulties, diseases, or ills.",
    difficulty: "Medium",
    companies: ["Accenture", "Wipro"]
  }
];

// Helper to fetch topics by slug
export const getMockVerbalQuestions = (slug: string): VerbalQuestionItem[] => {
  switch (slug) {
    case "sentence-correction":
      return mockSentenceCorrection;
    case "para-jumbles":
      return mockParaJumbles;
    case "error-spotting":
      return mockErrorSpotting;
    case "synonyms-antonyms":
      return mockSynonymsAntonyms;
    case "cloze-test":
      return mockClozeTest;
    case "one-word-substitution":
      return mockOneWordSubstitution;
    default:
      return [];
  }
};
