import type {
  ReadingComprehensionPassage,
  VerbalQuestionItem,
} from "../../../../lib/types/verbal-ability.types"; 

export const mockReadingComprehension: ReadingComprehensionPassage[] = [
  {
    "id": 1,
    "title": "The Impact of Artificial Intelligence on Modern Workforces",
    "paragraphs": [
      "The rapid evolution of Artificial Intelligence (AI) has ushered in a transformative era for global employment markets. While historical industrial revolutions replaced manual labor with machines, the digital automation wave challenges cognitive domains previously deemed uniquely human. Generative models, neural networks, and sophisticated machine learning algorithms are now capable of composing prose, debugging codebase files, analyzing complex financial indices, and even diagnosing medical anomalies.",
      "Economists are divided on the net impact of this automation. Optimists argue that AI will act as a cognitive enhancer, automating mundane, repetitive administrative tasks and freeing humans to focus on higher-level strategic planning, creative execution, and empathetic engagement. For instance, in healthcare, diagnostics engines can filter through thousands of medical scans in seconds, leaving physicians with more time to consult directly with patients and personalize treatment regimens.",
      "Conversely, pessimists predict severe structural unemployment, particularly for mid-level knowledge workers whose tasks are highly structured and rule-based. Paralegals, content creators, junior software engineers, and entry-level data analysts are finding that software can produce comparable outcomes at a fraction of the cost and time. Re-skilling the workforce to meet the demands of an AI-centric economy is a monumental task requiring coordinated efforts from academic institutions, private enterprises, and regulatory bodies.",
      "Furthermore, the ethical dimensions of AI deployment remain a hotly debated topic. Bias in machine learning algorithms, which often inherit prejudices present in their training data, has led to discriminatory outcomes in hiring, lending, and law enforcement. Addressing these biases requires transparent algorithmic auditing, diverse training datasets, and robust regulatory frameworks that prioritize fairness over pure efficiency.",
      "Ultimately, the trajectory of the AI revolution will be determined by policy choices and corporate responsibility rather than technological determinism alone. If managed responsibly, AI has the potential to democratize access to education and healthcare, reduce poverty, and accelerate scientific discovery. However, without proactive interventions, it risks exacerbating existing inequalities and creating an entrenched divide between those who control the algorithms and those whose lives are governed by them."
    ],
    "companies": [
      "TCS",
      "Infosys",
      "Wipro",
      "Accenture",
      "Google"
    ],
    "questions": [
      {
        "id": 101,
        "questionText": "According to the first paragraph, how does the current AI revolution differ from historical industrial revolutions?",
        "options": [
          "It primarily replaces manual labor with mechanized assembly lines.",
          "It challenges cognitive domains rather than just physical manual labor.",
          "It has a negligible impact on white-collar job sectors.",
          "It focuses entirely on agricultural automation and food production."
        ],
        "correctOptionIndex": 1,
        "explanation": "Paragraph 1 states: 'While historical industrial revolutions replaced manual labor with machines, the digital automation wave challenges cognitive domains previously deemed uniquely human.'",
        "difficulty": "Easy"
      },
      {
        "id": 102,
        "questionText": "Which of the following best describes the optimistic viewpoint regarding AI's role in the workforce?",
        "options": [
          "AI will completely replace human workers, leading to a leisure-based society.",
          "AI will fail to automate complex tasks, keeping human roles completely secure.",
          "AI will serve as a helper, taking over routine tasks and allowing humans to focus on creative and strategy roles.",
          "AI will decrease corporate profits by requiring heavy infrastructure spending."
        ],
        "correctOptionIndex": 2,
        "explanation": "Paragraph 2 states: 'Optimists argue that AI will act as a cognitive enhancer, automating mundane... and freeing humans to focus on higher-level strategic planning...'",
        "difficulty": "Medium"
      },
      {
        "id": 103,
        "questionText": "Which group of workers is identified as being at the highest risk of structural unemployment in the pessimistic view?",
        "options": [
          "Manual laborers working in construction and agriculture.",
          "Highly specialized executives making intuitive decisions.",
          "Mid-level knowledge workers performing structured, rule-based tasks.",
          "Artists and novelists working on abstract conceptual designs."
        ],
        "correctOptionIndex": 2,
        "explanation": "Paragraph 3 states: '...pessimists predict severe structural unemployment, particularly for mid-level knowledge workers whose tasks are highly structured and rule-based.'",
        "difficulty": "Medium"
      },
      {
        "id": 104,
        "questionText": "What is mentioned as a major ethical concern regarding AI deployment in the fourth paragraph?",
        "options": [
          "The excessive energy consumption of neural networks.",
          "The inheritance of prejudices leading to discriminatory outcomes.",
          "The high cost of maintaining transparent algorithmic audits.",
          "The lack of diverse training datasets available globally."
        ],
        "correctOptionIndex": 1,
        "explanation": "Paragraph 4 states: 'Bias in machine learning algorithms, which often inherit prejudices present in their training data, has led to discriminatory outcomes...'",
        "difficulty": "Medium"
      },
      {
        "id": 105,
        "questionText": "According to the final paragraph, what will ultimately determine the trajectory of the AI revolution?",
        "options": [
          "Technological determinism and raw computational power.",
          "The complete eradication of structural unemployment.",
          "Policy choices and corporate responsibility.",
          "The democratization of access to education."
        ],
        "correctOptionIndex": 2,
        "explanation": "Paragraph 5 states: 'Ultimately, the trajectory of the AI revolution will be determined by policy choices and corporate responsibility rather than technological determinism alone.'",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "id": 2,
    "title": "The Economics and Ecology of Sustainable Energy Transition",
    "paragraphs": [
      "Transitioning the global energy grid from fossil fuels to renewable sources is one of the most critical ecological and economic challenges of the twenty-first century. Solar, wind, and hydroelectric power are often praised as the pillars of a clean energy future. However, the intermittent nature of solar irradiance and wind velocity presents grid operators with massive challenges. Without efficient grid-scale storage solutions, heavy reliance on renewables can result in either supply deficits during peak demand or wasteful overproduction.",
      "Furthermore, the transition is not resource-free. Building photovoltaic panels, wind turbine generators, and electric vehicle batteries requires vast amounts of lithium, cobalt, nickel, and rare-earth elements. Mining these minerals is highly concentrated in specific regions, raising geopolitical concerns reminiscent of twentieth-century oil conflicts. In addition, the extraction processes themselves carry high environmental costs, including water contamination, habitat destruction, and greenhouse emissions from heavy machinery.",
      "To address these issues, economists propose carbon pricing mechanisms to incentivize cleaner production, while engineers focus on next-generation grid designs. Smart grids utilizing decentralized energy resources, local microgrids, and green hydrogen storage systems present promising paths forward. However, implementing these solutions at scale requires trillions of dollars of capital expenditure and international consensus on trade and carbon regulations.",
      "Despite these hurdles, the economic argument for renewables is strengthening. The levelized cost of energy (LCOE) for utility-scale solar and onshore wind has plummeted over the last decade, making them highly competitive with, or even cheaper than, new coal and natural gas plants in many jurisdictions. This cost parity is driving a surge in private investment and prompting major corporations to commit to net-zero emissions targets.",
      "Looking ahead, the success of the sustainable energy transition will hinge on a multi-faceted approach. It requires not only technological innovation and massive capital deployment but also significant behavioral shifts in consumption patterns. Energy efficiency measures, circular economy principles, and widespread electrification of transport and heating sectors are just as crucial as expanding renewable generation capacity."
    ],
    "companies": [
      "TCS",
      "Infosys",
      "Wipro",
      "Accenture",
      "Cognizant"
    ],
    "questions": [
      {
        "id": 201,
        "questionText": "What is the primary challenge associated with solar and wind energy mentioned in the first paragraph?",
        "options": [
          "Their high cost compared to nuclear energy.",
          "Their inability to generate high-voltage currents.",
          "The intermittent nature of their power generation.",
          "The localized noise pollution generated by solar arrays."
        ],
        "correctOptionIndex": 2,
        "explanation": "Paragraph 1 highlights that: '...the intermittent nature of solar irradiance and wind velocity presents grid operators with massive challenges.'",
        "difficulty": "Medium"
      },
      {
        "id": 202,
        "questionText": "Why does the author argue that the transition to sustainable energy is not entirely 'resource-free'?",
        "options": [
          "It requires massive public subsidies that strain federal budgets.",
          "It relies on heavy machinery powered entirely by coal plants.",
          "It demands substantial amounts of minerals like lithium, cobalt, and nickel.",
          "It accelerates the consumption of natural gas in electricity plants."
        ],
        "correctOptionIndex": 2,
        "explanation": "Paragraph 2 states: 'Building photovoltaic panels... requires vast amounts of lithium, cobalt, nickel, and rare-earth elements.'",
        "difficulty": "Medium"
      },
      {
        "id": 203,
        "questionText": "According to the third paragraph, what is a proposed economic solution to incentivize cleaner production?",
        "options": [
          "Decentralized energy resources.",
          "Carbon pricing mechanisms.",
          "Green hydrogen storage systems.",
          "Local microgrids."
        ],
        "correctOptionIndex": 1,
        "explanation": "Paragraph 3 explicitly states: 'To address these issues, economists propose carbon pricing mechanisms to incentivize cleaner production...'",
        "difficulty": "Easy"
      },
      {
        "id": 204,
        "questionText": "What factor is driving a surge in private investment in renewable energy, according to paragraph 4?",
        "options": [
          "The discovery of new rare-earth mineral deposits.",
          "The plummeting levelized cost of energy (LCOE) for solar and wind.",
          "Government mandates prohibiting the use of coal.",
          "The immediate availability of grid-scale storage solutions."
        ],
        "correctOptionIndex": 1,
        "explanation": "Paragraph 4 notes that the LCOE has plummeted, making renewables highly competitive, and adds: 'This cost parity is driving a surge in private investment...'",
        "difficulty": "Medium"
      },
      {
        "id": 205,
        "questionText": "Based on the final paragraph, which of the following is NOT mentioned as crucial for the success of the energy transition?",
        "options": [
          "Technological innovation.",
          "Massive capital deployment.",
          "Expansion of nuclear power generation.",
          "Significant behavioral shifts in consumption patterns."
        ],
        "correctOptionIndex": 2,
        "explanation": "Paragraph 5 lists technological innovation, capital deployment, behavioral shifts, energy efficiency, circular economy principles, and electrification. It does not mention nuclear power.",
        "difficulty": "Hard"
      }
    ]
  }
];

export const mockSentenceCorrection: VerbalQuestionItem[] = [
  {
    "id": 300,
    "questionText": "Choose the grammatically correct version of the sentence:\n'If the manager would have listened to the employee, the mistake would not happen.'",
    "options": [
      "If the manager would have listened to the employee, the mistake would not happen.",
      "If the manager had listened to the employee, the mistake would not have happened.",
      "If the manager listened to the employee, the mistake would not have happened.",
      "If the manager had listened to the employee, the mistake would not happen."
    ],
    "correctOptionIndex": 1,
    "explanation": "Third conditional requires 'If + past perfect, would have + past participle'.",
    "difficulty": "Hard",
    "companies": [
      "Wipro",
      "Google",
      "Accenture"
    ]
  },
  {
    "id": 301,
    "questionText": "Identify the correction needed:\n'The team of developers is ready to present their prototype.'",
    "options": [
      "Replace 'is ready' with 'are ready'.",
      "Replace 'their prototype' with 'its prototype'.",
      "Replace 'present' with 'presenting'.",
      "No correction needed."
    ],
    "correctOptionIndex": 1,
    "explanation": "'The team' is a collective noun acting as a single unit, taking a singular verb 'is' and singular pronoun 'its'.",
    "difficulty": "Medium",
    "companies": [
      "Wipro",
      "TCS",
      "Cognizant",
      "Google"
    ]
  },
  {
    "id": 302,
    "questionText": "Choose the best alternative to replace the underlined portion:\n'She is different than her sister in many ways.'",
    "options": [
      "different from her sister",
      "different to her sister",
      "differently than her sister",
      "No improvement needed"
    ],
    "correctOptionIndex": 0,
    "explanation": "The standard idiom is 'different from', not 'different than'.",
    "difficulty": "Medium",
    "companies": [
      "Infosys",
      "Amazon",
      "Google"
    ]
  },
  {
    "id": 303,
    "questionText": "Which sentence is grammatically correct?",
    "options": [
      "Neither of the boys are going to the party.",
      "Neither of the boys is going to the party.",
      "Neither of the boy is going to the party.",
      "Neither of the boys were going to the party."
    ],
    "correctOptionIndex": 1,
    "explanation": "'Neither of' is followed by a plural noun but takes a singular verb.",
    "difficulty": "Hard",
    "companies": [
      "TCS",
      "Cognizant",
      "Accenture",
      "Wipro"
    ]
  },
  {
    "id": 304,
    "questionText": "Correct the sentence:\n'Scarcely had he entered the room than the phone started ringing.'",
    "options": [
      "Scarcely had he entered the room when the phone started ringing.",
      "Scarcely he had entered the room than the phone started ringing.",
      "Scarcely had he entered the room then the phone started ringing.",
      "No correction required."
    ],
    "correctOptionIndex": 0,
    "explanation": "'Scarcely... when' is the correct correlative conjunction pair.",
    "difficulty": "Medium",
    "companies": [
      "Accenture",
      "Cognizant",
      "TCS"
    ]
  },
  {
    "id": 305,
    "questionText": "Choose the correct sentence:",
    "options": [
      "He is one of the men who does the work.",
      "He is one of the men who do the work.",
      "He is one of the man who does the work.",
      "He is one of the man who do the work."
    ],
    "correctOptionIndex": 1,
    "explanation": "The relative pronoun 'who' refers to the plural antecedent 'men', so the plural verb 'do' is required.",
    "difficulty": "Medium",
    "companies": [
      "TCS",
      "Cognizant",
      "Google",
      "Accenture",
      "Wipro"
    ]
  },
  {
    "id": 306,
    "questionText": "Identify the error:\n'The climate of Shimla is better than Delhi.'",
    "options": [
      "The climate of Shimla",
      "is better",
      "than Delhi",
      "No error"
    ],
    "correctOptionIndex": 2,
    "explanation": "You must compare climate with climate, so it should be 'than that of Delhi'.",
    "difficulty": "Hard",
    "companies": [
      "TCS",
      "Cognizant",
      "Infosys",
      "Google"
    ]
  },
  {
    "id": 307,
    "questionText": "Improve the sentence:\n'Walking along the road, a car ran over him.'",
    "options": [
      "While he was walking along the road, a car ran over him.",
      "Walking along the road, he was run over by a car.",
      "Both A and B are correct improvements.",
      "No improvement needed."
    ],
    "correctOptionIndex": 2,
    "explanation": "The original sentence has a dangling participle. Both A and B fix it by clarifying the subject of the action.",
    "difficulty": "Medium",
    "companies": [
      "TCS",
      "Cognizant",
      "Infosys",
      "Google"
    ]
  },
  {
    "id": 308,
    "questionText": "Choose the grammatically correct version:",
    "options": [
      "Not only the students but also the teacher were present.",
      "Not only the students but also the teacher was present.",
      "Not only the teacher but also the students was present.",
      "Not only the student but also the teachers was present."
    ],
    "correctOptionIndex": 1,
    "explanation": "When two subjects are joined by 'not only... but also', the verb agrees with the subject closer to it ('the teacher' -> singular 'was').",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "TCS"
    ]
  },
  {
    "id": 309,
    "questionText": "Identify the correct sentence:",
    "options": [
      "I have been living here since five years.",
      "I am living here for five years.",
      "I have been living here for five years.",
      "I live here since five years."
    ],
    "correctOptionIndex": 2,
    "explanation": "'For' is used for a period of time, and the present perfect continuous tense is correct for an action starting in the past and continuing into the present.",
    "difficulty": "Hard",
    "companies": [
      "TCS",
      "Cognizant",
      "Infosys",
      "Amazon"
    ]
  }
];

export const mockParaJumbles: VerbalQuestionItem[] = [
  {
    "id": 400,
    "questionText": "Rearrange the following sentences (P, Q, R, S) into a logical paragraph:\n\nP. Sentence P context.\nQ. Sentence Q context.\nR. Sentence R context.\nS. Sentence S context.",
    "options": [
      "Q - S - R - P",
      "P - Q - R - S",
      "S - Q - R - P",
      "R - P - S - Q"
    ],
    "correctOptionIndex": 2,
    "explanation": "Logical flow requires identifying the opening statement and following transitions.",
    "difficulty": "Medium",
    "companies": [
      "TCS",
      "Wipro",
      "Google",
      "Amazon",
      "Infosys"
    ]
  },
  {
    "id": 401,
    "questionText": "Rearrange the following sentences (P, Q, R, S) into a logical paragraph:\n\nP. Sentence P context.\nQ. Sentence Q context.\nR. Sentence R context.\nS. Sentence S context.",
    "options": [
      "Q - S - R - P",
      "P - Q - R - S",
      "S - Q - R - P",
      "R - P - S - Q"
    ],
    "correctOptionIndex": 1,
    "explanation": "Logical flow requires identifying the opening statement and following transitions.",
    "difficulty": "Medium",
    "companies": [
      "Cognizant",
      "Amazon",
      "Accenture",
      "Google",
      "Infosys"
    ]
  },
  {
    "id": 402,
    "questionText": "Rearrange the following sentences (P, Q, R, S) into a logical paragraph:\n\nP. Sentence P context.\nQ. Sentence Q context.\nR. Sentence R context.\nS. Sentence S context.",
    "options": [
      "Q - S - R - P",
      "P - Q - R - S",
      "S - Q - R - P",
      "R - P - S - Q"
    ],
    "correctOptionIndex": 2,
    "explanation": "Logical flow requires identifying the opening statement and following transitions.",
    "difficulty": "Medium",
    "companies": [
      "Cognizant",
      "Amazon",
      "Google",
      "TCS"
    ]
  },
  {
    "id": 403,
    "questionText": "Rearrange the following sentences (P, Q, R, S) into a logical paragraph:\n\nP. Sentence P context.\nQ. Sentence Q context.\nR. Sentence R context.\nS. Sentence S context.",
    "options": [
      "Q - S - R - P",
      "P - Q - R - S",
      "S - Q - R - P",
      "R - P - S - Q"
    ],
    "correctOptionIndex": 0,
    "explanation": "Logical flow requires identifying the opening statement and following transitions.",
    "difficulty": "Medium",
    "companies": [
      "Infosys",
      "Wipro",
      "TCS"
    ]
  },
  {
    "id": 404,
    "questionText": "Rearrange the following sentences (P, Q, R, S) into a logical paragraph:\n\nP. Sentence P context.\nQ. Sentence Q context.\nR. Sentence R context.\nS. Sentence S context.",
    "options": [
      "Q - S - R - P",
      "P - Q - R - S",
      "S - Q - R - P",
      "R - P - S - Q"
    ],
    "correctOptionIndex": 2,
    "explanation": "Logical flow requires identifying the opening statement and following transitions.",
    "difficulty": "Medium",
    "companies": [
      "TCS",
      "Amazon",
      "Wipro",
      "Infosys",
      "Accenture"
    ]
  },
  {
    "id": 405,
    "questionText": "Rearrange the following sentences (P, Q, R, S) into a logical paragraph:\n\nP. Sentence P context.\nQ. Sentence Q context.\nR. Sentence R context.\nS. Sentence S context.",
    "options": [
      "Q - S - R - P",
      "P - Q - R - S",
      "S - Q - R - P",
      "R - P - S - Q"
    ],
    "correctOptionIndex": 1,
    "explanation": "Logical flow requires identifying the opening statement and following transitions.",
    "difficulty": "Medium",
    "companies": [
      "Infosys",
      "Wipro",
      "Google",
      "Amazon",
      "Cognizant"
    ]
  },
  {
    "id": 406,
    "questionText": "Rearrange the following sentences (P, Q, R, S) into a logical paragraph:\n\nP. Sentence P context.\nQ. Sentence Q context.\nR. Sentence R context.\nS. Sentence S context.",
    "options": [
      "Q - S - R - P",
      "P - Q - R - S",
      "S - Q - R - P",
      "R - P - S - Q"
    ],
    "correctOptionIndex": 0,
    "explanation": "Logical flow requires identifying the opening statement and following transitions.",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Amazon",
      "Cognizant",
      "Wipro"
    ]
  },
  {
    "id": 407,
    "questionText": "Rearrange the following sentences (P, Q, R, S) into a logical paragraph:\n\nP. Sentence P context.\nQ. Sentence Q context.\nR. Sentence R context.\nS. Sentence S context.",
    "options": [
      "Q - S - R - P",
      "P - Q - R - S",
      "S - Q - R - P",
      "R - P - S - Q"
    ],
    "correctOptionIndex": 1,
    "explanation": "Logical flow requires identifying the opening statement and following transitions.",
    "difficulty": "Medium",
    "companies": [
      "Wipro",
      "Amazon",
      "Infosys"
    ]
  },
  {
    "id": 408,
    "questionText": "Rearrange the following sentences (P, Q, R, S) into a logical paragraph:\n\nP. Sentence P context.\nQ. Sentence Q context.\nR. Sentence R context.\nS. Sentence S context.",
    "options": [
      "Q - S - R - P",
      "P - Q - R - S",
      "S - Q - R - P",
      "R - P - S - Q"
    ],
    "correctOptionIndex": 2,
    "explanation": "Logical flow requires identifying the opening statement and following transitions.",
    "difficulty": "Medium",
    "companies": [
      "Wipro",
      "Amazon",
      "TCS",
      "Infosys"
    ]
  },
  {
    "id": 409,
    "questionText": "Rearrange the following sentences (P, Q, R, S) into a logical paragraph:\n\nP. Sentence P context.\nQ. Sentence Q context.\nR. Sentence R context.\nS. Sentence S context.",
    "options": [
      "Q - S - R - P",
      "P - Q - R - S",
      "S - Q - R - P",
      "R - P - S - Q"
    ],
    "correctOptionIndex": 3,
    "explanation": "Logical flow requires identifying the opening statement and following transitions.",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Wipro",
      "TCS",
      "Amazon"
    ]
  }
];

export const mockErrorSpotting: VerbalQuestionItem[] = [
  {
    "id": 500,
    "questionText": "Identify the segment containing a grammatical error:\n\n(A) Segment A / (B) Segment B / (C) Segment C / (D) No Error",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D) No Error"
    ],
    "correctOptionIndex": 0,
    "explanation": "Detailed grammar rule explanation for why the segment is incorrect.",
    "difficulty": "Medium",
    "companies": [
      "Accenture",
      "Infosys",
      "TCS",
      "Google"
    ]
  },
  {
    "id": 501,
    "questionText": "Identify the segment containing a grammatical error:\n\n(A) Segment A / (B) Segment B / (C) Segment C / (D) No Error",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D) No Error"
    ],
    "correctOptionIndex": 2,
    "explanation": "Detailed grammar rule explanation for why the segment is incorrect.",
    "difficulty": "Medium",
    "companies": [
      "Cognizant",
      "Wipro",
      "Amazon"
    ]
  },
  {
    "id": 502,
    "questionText": "Identify the segment containing a grammatical error:\n\n(A) Segment A / (B) Segment B / (C) Segment C / (D) No Error",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D) No Error"
    ],
    "correctOptionIndex": 1,
    "explanation": "Detailed grammar rule explanation for why the segment is incorrect.",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Cognizant",
      "TCS",
      "Google",
      "Wipro"
    ]
  },
  {
    "id": 503,
    "questionText": "Identify the segment containing a grammatical error:\n\n(A) Segment A / (B) Segment B / (C) Segment C / (D) No Error",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D) No Error"
    ],
    "correctOptionIndex": 1,
    "explanation": "Detailed grammar rule explanation for why the segment is incorrect.",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Amazon",
      "Wipro",
      "Cognizant"
    ]
  },
  {
    "id": 504,
    "questionText": "Identify the segment containing a grammatical error:\n\n(A) Segment A / (B) Segment B / (C) Segment C / (D) No Error",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D) No Error"
    ],
    "correctOptionIndex": 1,
    "explanation": "Detailed grammar rule explanation for why the segment is incorrect.",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Amazon",
      "Wipro",
      "Cognizant"
    ]
  },
  {
    "id": 505,
    "questionText": "Identify the segment containing a grammatical error:\n\n(A) Segment A / (B) Segment B / (C) Segment C / (D) No Error",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D) No Error"
    ],
    "correctOptionIndex": 0,
    "explanation": "Detailed grammar rule explanation for why the segment is incorrect.",
    "difficulty": "Medium",
    "companies": [
      "TCS",
      "Cognizant",
      "Amazon",
      "Google",
      "Accenture"
    ]
  },
  {
    "id": 506,
    "questionText": "Identify the segment containing a grammatical error:\n\n(A) Segment A / (B) Segment B / (C) Segment C / (D) No Error",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D) No Error"
    ],
    "correctOptionIndex": 1,
    "explanation": "Detailed grammar rule explanation for why the segment is incorrect.",
    "difficulty": "Medium",
    "companies": [
      "Accenture",
      "Google",
      "TCS"
    ]
  },
  {
    "id": 507,
    "questionText": "Identify the segment containing a grammatical error:\n\n(A) Segment A / (B) Segment B / (C) Segment C / (D) No Error",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D) No Error"
    ],
    "correctOptionIndex": 1,
    "explanation": "Detailed grammar rule explanation for why the segment is incorrect.",
    "difficulty": "Medium",
    "companies": [
      "Wipro",
      "Amazon",
      "Cognizant",
      "TCS",
      "Google"
    ]
  },
  {
    "id": 508,
    "questionText": "Identify the segment containing a grammatical error:\n\n(A) Segment A / (B) Segment B / (C) Segment C / (D) No Error",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D) No Error"
    ],
    "correctOptionIndex": 0,
    "explanation": "Detailed grammar rule explanation for why the segment is incorrect.",
    "difficulty": "Medium",
    "companies": [
      "Wipro",
      "TCS",
      "Amazon",
      "Cognizant"
    ]
  },
  {
    "id": 509,
    "questionText": "Identify the segment containing a grammatical error:\n\n(A) Segment A / (B) Segment B / (C) Segment C / (D) No Error",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D) No Error"
    ],
    "correctOptionIndex": 0,
    "explanation": "Detailed grammar rule explanation for why the segment is incorrect.",
    "difficulty": "Medium",
    "companies": [
      "Wipro",
      "Google",
      "TCS"
    ]
  }
];

export const mockSynonymsAntonyms: VerbalQuestionItem[] = [
  {
    "id": 600,
    "questionText": "Choose the word most SIMILAR (Synonym) in meaning to:\n\nABUNDANT",
    "options": [
      "Scarce",
      "Plentiful",
      "Rare",
      "Meager"
    ],
    "correctOptionIndex": 1,
    "explanation": "The word 'Abundant' means the same as 'Plentiful'.",
    "difficulty": "Easy",
    "companies": [
      "Wipro",
      "Cognizant",
      "Google",
      "Amazon",
      "TCS"
    ]
  },
  {
    "id": 601,
    "questionText": "Choose the word most SIMILAR (Synonym) in meaning to:\n\nBENEVOLENT",
    "options": [
      "Cruel",
      "Kind",
      "Malicious",
      "Spiteful"
    ],
    "correctOptionIndex": 1,
    "explanation": "The word 'Benevolent' means the same as 'Kind'.",
    "difficulty": "Easy",
    "companies": [
      "Cognizant",
      "Infosys",
      "Google",
      "Wipro"
    ]
  },
  {
    "id": 602,
    "questionText": "Choose the word most SIMILAR (Synonym) in meaning to:\n\nCACOPHONY",
    "options": [
      "Harmony",
      "Noise",
      "Melody",
      "Silence"
    ],
    "correctOptionIndex": 1,
    "explanation": "The word 'Cacophony' means the same as 'Noise'.",
    "difficulty": "Easy",
    "companies": [
      "Wipro",
      "Accenture",
      "Google",
      "Infosys",
      "Cognizant"
    ]
  },
  {
    "id": 603,
    "questionText": "Choose the word most SIMILAR (Synonym) in meaning to:\n\nDEXTEROUS",
    "options": [
      "Clumsy",
      "Skillful",
      "Awkward",
      "Inept"
    ],
    "correctOptionIndex": 1,
    "explanation": "The word 'Dexterous' means the same as 'Skillful'.",
    "difficulty": "Easy",
    "companies": [
      "TCS",
      "Amazon",
      "Cognizant",
      "Infosys"
    ]
  },
  {
    "id": 604,
    "questionText": "Choose the word most SIMILAR (Synonym) in meaning to:\n\nEPHEMERAL",
    "options": [
      "Permanent",
      "Fleeting",
      "Eternal",
      "Endless"
    ],
    "correctOptionIndex": 1,
    "explanation": "The word 'Ephemeral' means the same as 'Fleeting'.",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "TCS",
      "Accenture"
    ]
  },
  {
    "id": 605,
    "questionText": "Choose the word most SIMILAR (Synonym) in meaning to:\n\nFASTIDIOUS",
    "options": [
      "Careless",
      "Meticulous",
      "Sloppy",
      "Negligent"
    ],
    "correctOptionIndex": 1,
    "explanation": "The word 'Fastidious' means the same as 'Meticulous'.",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "TCS",
      "Google",
      "Cognizant",
      "Wipro"
    ]
  },
  {
    "id": 606,
    "questionText": "Choose the word most SIMILAR (Synonym) in meaning to:\n\nGARRULOUS",
    "options": [
      "Silent",
      "Talkative",
      "Reserved",
      "Quiet"
    ],
    "correctOptionIndex": 1,
    "explanation": "The word 'Garrulous' means the same as 'Talkative'.",
    "difficulty": "Easy",
    "companies": [
      "Infosys",
      "Accenture",
      "Cognizant",
      "Amazon"
    ]
  },
  {
    "id": 607,
    "questionText": "Choose the word most SIMILAR (Synonym) in meaning to:\n\nHACKNEYED",
    "options": [
      "Original",
      "Clichéd",
      "Fresh",
      "Novel"
    ],
    "correctOptionIndex": 1,
    "explanation": "The word 'Hackneyed' means the same as 'Clichéd'.",
    "difficulty": "Easy",
    "companies": [
      "Accenture",
      "Google",
      "Infosys",
      "Cognizant"
    ]
  },
  {
    "id": 608,
    "questionText": "Choose the word most SIMILAR (Synonym) in meaning to:\n\nINEFFABLE",
    "options": [
      "Expressible",
      "Indescribable",
      "Utterable",
      "Definable"
    ],
    "correctOptionIndex": 1,
    "explanation": "The word 'Ineffable' means the same as 'Indescribable'.",
    "difficulty": "Easy",
    "companies": [
      "Accenture",
      "Infosys",
      "Wipro",
      "TCS",
      "Google"
    ]
  },
  {
    "id": 609,
    "questionText": "Choose the word most SIMILAR (Synonym) in meaning to:\n\nJUXTAPOSE",
    "options": [
      "Separate",
      "Compare",
      "Divide",
      "Detach"
    ],
    "correctOptionIndex": 1,
    "explanation": "The word 'Juxtapose' means the same as 'Compare'.",
    "difficulty": "Easy",
    "companies": [
      "Cognizant",
      "Accenture",
      "Amazon"
    ]
  }
];

export const mockClozeTest: VerbalQuestionItem[] = [
  {
    "id": 700,
    "questionText": "Fill in the blank (1) in the passage:\n\n\"The quick brown fox ___(1)___ over the lazy dog.\"",
    "options": [
      "jumps",
      "runs",
      "walks",
      "sleeps"
    ],
    "correctOptionIndex": 0,
    "explanation": "The context of the famous pangram requires the word 'jumps'.",
    "difficulty": "Easy",
    "companies": [
      "Google",
      "Infosys",
      "Amazon",
      "Cognizant"
    ]
  },
  {
    "id": 701,
    "questionText": "Fill in the blank (2) in the passage:\n\n\"The quick brown fox ___(2)___ over the lazy dog.\"",
    "options": [
      "jumps",
      "runs",
      "walks",
      "sleeps"
    ],
    "correctOptionIndex": 0,
    "explanation": "The context of the famous pangram requires the word 'jumps'.",
    "difficulty": "Easy",
    "companies": [
      "Wipro",
      "Cognizant",
      "TCS",
      "Google",
      "Accenture"
    ]
  },
  {
    "id": 702,
    "questionText": "Fill in the blank (3) in the passage:\n\n\"The quick brown fox ___(3)___ over the lazy dog.\"",
    "options": [
      "jumps",
      "runs",
      "walks",
      "sleeps"
    ],
    "correctOptionIndex": 0,
    "explanation": "The context of the famous pangram requires the word 'jumps'.",
    "difficulty": "Easy",
    "companies": [
      "Wipro",
      "Google",
      "Cognizant"
    ]
  },
  {
    "id": 703,
    "questionText": "Fill in the blank (4) in the passage:\n\n\"The quick brown fox ___(4)___ over the lazy dog.\"",
    "options": [
      "jumps",
      "runs",
      "walks",
      "sleeps"
    ],
    "correctOptionIndex": 0,
    "explanation": "The context of the famous pangram requires the word 'jumps'.",
    "difficulty": "Easy",
    "companies": [
      "TCS",
      "Amazon",
      "Accenture"
    ]
  },
  {
    "id": 704,
    "questionText": "Fill in the blank (5) in the passage:\n\n\"The quick brown fox ___(5)___ over the lazy dog.\"",
    "options": [
      "jumps",
      "runs",
      "walks",
      "sleeps"
    ],
    "correctOptionIndex": 0,
    "explanation": "The context of the famous pangram requires the word 'jumps'.",
    "difficulty": "Easy",
    "companies": [
      "TCS",
      "Amazon",
      "Accenture",
      "Wipro"
    ]
  },
  {
    "id": 705,
    "questionText": "Fill in the blank (6) in the passage:\n\n\"The quick brown fox ___(6)___ over the lazy dog.\"",
    "options": [
      "jumps",
      "runs",
      "walks",
      "sleeps"
    ],
    "correctOptionIndex": 0,
    "explanation": "The context of the famous pangram requires the word 'jumps'.",
    "difficulty": "Easy",
    "companies": [
      "Cognizant",
      "TCS",
      "Google"
    ]
  },
  {
    "id": 706,
    "questionText": "Fill in the blank (7) in the passage:\n\n\"The quick brown fox ___(7)___ over the lazy dog.\"",
    "options": [
      "jumps",
      "runs",
      "walks",
      "sleeps"
    ],
    "correctOptionIndex": 0,
    "explanation": "The context of the famous pangram requires the word 'jumps'.",
    "difficulty": "Easy",
    "companies": [
      "Infosys",
      "Accenture",
      "Wipro"
    ]
  },
  {
    "id": 707,
    "questionText": "Fill in the blank (8) in the passage:\n\n\"The quick brown fox ___(8)___ over the lazy dog.\"",
    "options": [
      "jumps",
      "runs",
      "walks",
      "sleeps"
    ],
    "correctOptionIndex": 0,
    "explanation": "The context of the famous pangram requires the word 'jumps'.",
    "difficulty": "Easy",
    "companies": [
      "Cognizant",
      "Accenture",
      "Infosys",
      "TCS"
    ]
  },
  {
    "id": 708,
    "questionText": "Fill in the blank (9) in the passage:\n\n\"The quick brown fox ___(9)___ over the lazy dog.\"",
    "options": [
      "jumps",
      "runs",
      "walks",
      "sleeps"
    ],
    "correctOptionIndex": 0,
    "explanation": "The context of the famous pangram requires the word 'jumps'.",
    "difficulty": "Easy",
    "companies": [
      "Wipro",
      "Amazon",
      "Google"
    ]
  },
  {
    "id": 709,
    "questionText": "Fill in the blank (10) in the passage:\n\n\"The quick brown fox ___(10)___ over the lazy dog.\"",
    "options": [
      "jumps",
      "runs",
      "walks",
      "sleeps"
    ],
    "correctOptionIndex": 0,
    "explanation": "The context of the famous pangram requires the word 'jumps'.",
    "difficulty": "Easy",
    "companies": [
      "Infosys",
      "Amazon",
      "Cognizant",
      "TCS",
      "Accenture"
    ]
  }
];

export const mockOneWordSubstitution: VerbalQuestionItem[] = [
  {
    "id": 800,
    "questionText": "Select the most appropriate ONE-WORD SUBSTITUTION for:\n\n\"A person who loves books\"",
    "options": [
      "Bibliophile",
      "Distractor 3",
      "Distractor 1",
      "Distractor 2"
    ],
    "correctOptionIndex": 0,
    "explanation": "Bibliophile is the precise term for \"A person who loves books\".",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Infosys",
      "Google"
    ]
  },
  {
    "id": 801,
    "questionText": "Select the most appropriate ONE-WORD SUBSTITUTION for:\n\n\"One who compiles a dictionary\"",
    "options": [
      "Lexicographer",
      "Distractor 2",
      "Distractor 1",
      "Distractor 3"
    ],
    "correctOptionIndex": 0,
    "explanation": "Lexicographer is the precise term for \"One who compiles a dictionary\".",
    "difficulty": "Medium",
    "companies": [
      "Wipro",
      "Amazon",
      "Accenture",
      "Cognizant",
      "TCS"
    ]
  },
  {
    "id": 802,
    "questionText": "Select the most appropriate ONE-WORD SUBSTITUTION for:\n\n\"A place where coins are made\"",
    "options": [
      "Distractor 2",
      "Distractor 3",
      "Distractor 1",
      "Mint"
    ],
    "correctOptionIndex": 3,
    "explanation": "Mint is the precise term for \"A place where coins are made\".",
    "difficulty": "Medium",
    "companies": [
      "Cognizant",
      "Google",
      "Infosys"
    ]
  },
  {
    "id": 803,
    "questionText": "Select the most appropriate ONE-WORD SUBSTITUTION for:\n\n\"A study of ancient things\"",
    "options": [
      "Distractor 1",
      "Distractor 2",
      "Distractor 3",
      "Archaeology"
    ],
    "correctOptionIndex": 3,
    "explanation": "Archaeology is the precise term for \"A study of ancient things\".",
    "difficulty": "Medium",
    "companies": [
      "Cognizant",
      "Wipro",
      "TCS",
      "Google",
      "Infosys"
    ]
  },
  {
    "id": 804,
    "questionText": "Select the most appropriate ONE-WORD SUBSTITUTION for:\n\n\"Fear of confined spaces\"",
    "options": [
      "Claustrophobia",
      "Distractor 1",
      "Distractor 2",
      "Distractor 3"
    ],
    "correctOptionIndex": 0,
    "explanation": "Claustrophobia is the precise term for \"Fear of confined spaces\".",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Cognizant",
      "Google",
      "Infosys",
      "Wipro"
    ]
  },
  {
    "id": 805,
    "questionText": "Select the most appropriate ONE-WORD SUBSTITUTION for:\n\n\"One who walks on foot\"",
    "options": [
      "Distractor 3",
      "Pedestrian",
      "Distractor 1",
      "Distractor 2"
    ],
    "correctOptionIndex": 1,
    "explanation": "Pedestrian is the precise term for \"One who walks on foot\".",
    "difficulty": "Medium",
    "companies": [
      "Cognizant",
      "Amazon",
      "Google",
      "Wipro",
      "Infosys"
    ]
  },
  {
    "id": 806,
    "questionText": "Select the most appropriate ONE-WORD SUBSTITUTION for:\n\n\"A person who does not believe in God\"",
    "options": [
      "Distractor 3",
      "Distractor 2",
      "Atheist",
      "Distractor 1"
    ],
    "correctOptionIndex": 2,
    "explanation": "Atheist is the precise term for \"A person who does not believe in God\".",
    "difficulty": "Medium",
    "companies": [
      "Accenture",
      "Wipro",
      "TCS"
    ]
  },
  {
    "id": 807,
    "questionText": "Select the most appropriate ONE-WORD SUBSTITUTION for:\n\n\"A government by the people\"",
    "options": [
      "Distractor 2",
      "Distractor 1",
      "Distractor 3",
      "Democracy"
    ],
    "correctOptionIndex": 3,
    "explanation": "Democracy is the precise term for \"A government by the people\".",
    "difficulty": "Medium",
    "companies": [
      "Cognizant",
      "Accenture",
      "Wipro",
      "TCS",
      "Google"
    ]
  },
  {
    "id": 808,
    "questionText": "Select the most appropriate ONE-WORD SUBSTITUTION for:\n\n\"An instrument for measuring atmospheric pressure\"",
    "options": [
      "Distractor 3",
      "Barometer",
      "Distractor 1",
      "Distractor 2"
    ],
    "correctOptionIndex": 1,
    "explanation": "Barometer is the precise term for \"An instrument for measuring atmospheric pressure\".",
    "difficulty": "Medium",
    "companies": [
      "Wipro",
      "Infosys",
      "TCS"
    ]
  },
  {
    "id": 809,
    "questionText": "Select the most appropriate ONE-WORD SUBSTITUTION for:\n\n\"A person who travels to space\"",
    "options": [
      "Astronaut",
      "Distractor 3",
      "Distractor 1",
      "Distractor 2"
    ],
    "correctOptionIndex": 0,
    "explanation": "Astronaut is the precise term for \"A person who travels to space\".",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Cognizant",
      "Infosys",
      "Accenture"
    ]
  }
];
