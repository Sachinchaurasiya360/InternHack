export type ExamSection = {
  id: string;
  name: string;
  durationMin: number;
  topicTags: string[];
};

export type ExamQuestion = {
  id: string;
  examId: string;
  sectionId: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Exam = {
  id: string;
  company: string;
  name: string;
  tagline: string;
  color: string; // tailwind bg color class
  logo: string; // letter
  totalDuration: number;
  sections: ExamSection[];
  passCutoff: number;
};

export const EXAMS: Exam[] = [
  {
    id: "tcs-nqt",
    company: "TCS",
    name: "TCS NQT",
    tagline: "National Qualifier Test, Numerical, Verbal, Reasoning, Coding",
    color: "bg-blue-600",
    logo: "T",
    totalDuration: 100,
    passCutoff: 60,
    sections: [
      { id: "numerical", name: "Numerical Ability", durationMin: 25, topicTags: ["arithmetic", "percentages", "ratios"] },
      { id: "verbal", name: "Verbal Ability", durationMin: 25, topicTags: ["reading", "grammar", "vocabulary"] },
      { id: "reasoning", name: "Logical Reasoning", durationMin: 25, topicTags: ["puzzles", "series", "coding-decoding"] },
      { id: "coding", name: "Coding Logic", durationMin: 25, topicTags: ["algorithms", "data-structures"] },
    ],
  },
  {
    id: "infosys",
    company: "Infosys",
    name: "Infosys InfyTQ",
    tagline: "Reasoning, Maths, Verbal, Pseudo-code",
    color: "bg-cyan-600",
    logo: "I",
    totalDuration: 100,
    passCutoff: 65,
    sections: [
      { id: "reasoning", name: "Logical Reasoning", durationMin: 25, topicTags: ["syllogism", "series"] },
      { id: "maths", name: "Mathematical Ability", durationMin: 35, topicTags: ["probability", "algebra"] },
      { id: "verbal", name: "Verbal Ability", durationMin: 20, topicTags: ["grammar", "comprehension"] },
      { id: "pseudo", name: "Pseudo-code", durationMin: 20, topicTags: ["loops", "arrays"] },
    ],
  },
  {
    id: "wipro",
    company: "Wipro",
    name: "Wipro Elite NLTH",
    tagline: "Aptitude, English, Logical, Coding",
    color: "bg-violet-600",
    logo: "W",
    totalDuration: 140,
    passCutoff: 60,
    sections: [
      { id: "aptitude", name: "Quantitative Aptitude", durationMin: 16, topicTags: ["arithmetic"] },
      { id: "english", name: "English", durationMin: 16, topicTags: ["grammar"] },
      { id: "logical", name: "Logical Ability", durationMin: 14, topicTags: ["reasoning"] },
      { id: "coding", name: "Coding Skill", durationMin: 60, topicTags: ["algorithms"] },
    ],
  },
  {
    id: "accenture",
    company: "Accenture",
    name: "Accenture Assessment",
    tagline: "Cognitive, Technical, Coding, Communication",
    color: "bg-rose-600",
    logo: "A",
    totalDuration: 90,
    passCutoff: 60,
    sections: [
      { id: "cognitive", name: "Cognitive Ability", durationMin: 25, topicTags: ["english", "reasoning"] },
      { id: "technical", name: "Technical Assessment", durationMin: 25, topicTags: ["mcq", "networking"] },
      { id: "coding", name: "Coding", durationMin: 30, topicTags: ["algorithms"] },
      { id: "communication", name: "Communication", durationMin: 10, topicTags: ["english"] },
    ],
  },
  {
    id: "capgemini",
    company: "Capgemini",
    name: "Capgemini Exam",
    tagline: "Game-based, Pseudo-code, English, Essay",
    color: "bg-indigo-600",
    logo: "C",
    totalDuration: 100,
    passCutoff: 60,
    sections: [
      { id: "game", name: "Game-based Aptitude", durationMin: 20, topicTags: ["reasoning"] },
      { id: "pseudo", name: "Pseudo-code", durationMin: 25, topicTags: ["loops"] },
      { id: "english", name: "English Comprehension", durationMin: 25, topicTags: ["grammar"] },
      { id: "essay", name: "Essay Writing", durationMin: 30, topicTags: ["writing"] },
    ],
  },
  {
    id: "cognizant",
    company: "Cognizant",
    name: "Cognizant GenC",
    tagline: "Logical, Verbal, Quantitative, Automata",
    color: "bg-teal-600",
    logo: "C",
    totalDuration: 90,
    passCutoff: 60,
    sections: [
      { id: "logical", name: "Logical Reasoning", durationMin: 20, topicTags: ["reasoning"] },
      { id: "verbal", name: "Verbal Ability", durationMin: 20, topicTags: ["grammar"] },
      { id: "quant", name: "Quantitative Ability", durationMin: 20, topicTags: ["arithmetic"] },
      { id: "automata", name: "Automata Coding", durationMin: 30, topicTags: ["algorithms"] },
    ],
  },
];

// Question bank (a curated sample; in production this would be hundreds per section)
export const QUESTIONS: ExamQuestion[] = [
  // TCS NQT - Numerical
  {
    id: "tcs-num-1",
    examId: "tcs-nqt",
    sectionId: "numerical",
    topic: "percentages",
    difficulty: "Easy",
    question: "A shopkeeper marks an item 40% above cost price and gives a 20% discount. What is his profit percentage?",
    options: ["8%", "12%", "16%", "20%"],
    correctIndex: 1,
    explanation: "Let CP=100. MP=140. SP after 20% discount = 140×0.8 = 112. Profit = 12%.",
  },
  {
    id: "tcs-num-2",
    examId: "tcs-nqt",
    sectionId: "numerical",
    topic: "time-work",
    difficulty: "Medium",
    question: "A can do a work in 12 days and B in 18 days. Working together, how many days?",
    options: ["6", "7.2", "8", "9"],
    correctIndex: 1,
    explanation: "1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days.",
  },
  {
    id: "tcs-num-3",
    examId: "tcs-nqt",
    sectionId: "numerical",
    topic: "ratios",
    difficulty: "Easy",
    question: "If a:b = 2:3 and b:c = 4:5, find a:b:c.",
    options: ["2:3:5", "8:12:15", "2:4:5", "8:15:12"],
    correctIndex: 1,
    explanation: "Scale b to common value: 2:3 → 8:12, 4:5 → 12:15. So a:b:c = 8:12:15.",
  },
  {
    id: "tcs-num-4",
    examId: "tcs-nqt",
    sectionId: "numerical",
    topic: "probability",
    difficulty: "Medium",
    question: "What is the probability of getting a sum of 7 when two dice are rolled?",
    options: ["1/6", "1/12", "5/36", "7/36"],
    correctIndex: 0,
    explanation: "Favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Total = 36. P = 6/36 = 1/6.",
  },
  {
    id: "tcs-num-5",
    examId: "tcs-nqt",
    sectionId: "numerical",
    topic: "simple-interest",
    difficulty: "Easy",
    question: "Find SI on Rs. 5000 at 8% p.a. for 2 years.",
    options: ["600", "700", "800", "900"],
    correctIndex: 2,
    explanation: "SI = PRT/100 = (5000 × 8 × 2)/100 = 800.",
  },
  // TCS NQT - Verbal
  {
    id: "tcs-verb-1",
    examId: "tcs-nqt",
    sectionId: "verbal",
    topic: "synonyms",
    difficulty: "Easy",
    question: "Choose the synonym of ABUNDANT:",
    options: ["Scarce", "Plentiful", "Empty", "Limited"],
    correctIndex: 1,
    explanation: "Abundant means existing in large quantities; plentiful.",
  },
  {
    id: "tcs-verb-2",
    examId: "tcs-nqt",
    sectionId: "verbal",
    topic: "grammar",
    difficulty: "Easy",
    question: "She ___ to the store every Sunday.",
    options: ["go", "goes", "going", "gone"],
    correctIndex: 1,
    explanation: "Third-person singular present tense uses 'goes'.",
  },
  {
    id: "tcs-verb-3",
    examId: "tcs-nqt",
    sectionId: "verbal",
    topic: "antonyms",
    difficulty: "Easy",
    question: "Antonym of BENEVOLENT:",
    options: ["Kind", "Generous", "Malevolent", "Friendly"],
    correctIndex: 2,
    explanation: "Benevolent means well-meaning; opposite is malevolent (harmful).",
  },
  // TCS NQT - Reasoning
  {
    id: "tcs-reas-1",
    examId: "tcs-nqt",
    sectionId: "reasoning",
    topic: "series",
    difficulty: "Easy",
    question: "Find next: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    correctIndex: 1,
    explanation: "Differences: 4, 6, 8, 10, 12. So next is 30+12 = 42.",
  },
  {
    id: "tcs-reas-2",
    examId: "tcs-nqt",
    sectionId: "reasoning",
    topic: "coding-decoding",
    difficulty: "Medium",
    question: "If CAT = 24 (C=3, A=1, T=20; sum×... actually 3+1+20=24), then DOG = ?",
    options: ["24", "26", "27", "30"],
    correctIndex: 1,
    explanation: "D=4, O=15, G=7. Sum = 4+15+7 = 26.",
  },
  {
    id: "tcs-reas-3",
    examId: "tcs-nqt",
    sectionId: "reasoning",
    topic: "blood-relations",
    difficulty: "Medium",
    question: "A is B's sister. C is B's mother. D is C's father. How is D related to A?",
    options: ["Father", "Grandfather", "Uncle", "Brother"],
    correctIndex: 1,
    explanation: "D is C's father, C is A's mother, so D is A's maternal grandfather.",
  },
  // TCS NQT - Coding
  {
    id: "tcs-code-1",
    examId: "tcs-nqt",
    sectionId: "coding",
    topic: "complexity",
    difficulty: "Easy",
    question: "Time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctIndex: 1,
    explanation: "Binary search halves the search space each step: O(log n).",
  },
  {
    id: "tcs-code-2",
    examId: "tcs-nqt",
    sectionId: "coding",
    topic: "arrays",
    difficulty: "Medium",
    question: "Which sort has worst-case O(n²) but is in-place and stable?",
    options: ["Quick sort", "Merge sort", "Insertion sort", "Heap sort"],
    correctIndex: 2,
    explanation: "Insertion sort is in-place, stable, O(n²) worst, O(n) best.",
  },
  {
    id: "tcs-code-3",
    examId: "tcs-nqt",
    sectionId: "coding",
    topic: "data-structures",
    difficulty: "Easy",
    question: "Which data structure uses LIFO order?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    correctIndex: 1,
    explanation: "Stack follows Last-In-First-Out.",
  },
  // Infosys samples
  {
    id: "inf-reas-1",
    examId: "infosys",
    sectionId: "reasoning",
    topic: "syllogism",
    difficulty: "Medium",
    question: "All roses are flowers. Some flowers fade quickly. Conclusion?",
    options: ["All roses fade quickly", "Some roses fade quickly", "No roses fade", "Cannot conclude"],
    correctIndex: 3,
    explanation: "Since only 'some' flowers fade, we cannot conclude anything specific about roses.",
  },
  {
    id: "inf-math-1",
    examId: "infosys",
    sectionId: "maths",
    topic: "algebra",
    difficulty: "Easy",
    question: "If x + 1/x = 3, then x² + 1/x² = ?",
    options: ["5", "7", "9", "11"],
    correctIndex: 1,
    explanation: "(x + 1/x)² = x² + 2 + 1/x² = 9. So x² + 1/x² = 7.",
  },
  {
    id: "inf-pseudo-1",
    examId: "infosys",
    sectionId: "pseudo",
    topic: "loops",
    difficulty: "Easy",
    question: "for i = 1 to 5: print(i*i). What is printed?",
    options: ["1 2 3 4 5", "1 4 9 16 25", "2 4 6 8 10", "1 3 5 7 9"],
    correctIndex: 1,
    explanation: "Prints squares: 1, 4, 9, 16, 25.",
  },
  // Wipro
  {
    id: "wip-apt-1",
    examId: "wipro",
    sectionId: "aptitude",
    topic: "averages",
    difficulty: "Easy",
    question: "Average of first 10 natural numbers?",
    options: ["5", "5.5", "6", "6.5"],
    correctIndex: 1,
    explanation: "Sum = 55, average = 55/10 = 5.5.",
  },
  {
    id: "wip-log-1",
    examId: "wipro",
    sectionId: "logical",
    topic: "series",
    difficulty: "Easy",
    question: "1, 1, 2, 3, 5, 8, ?",
    options: ["11", "12", "13", "14"],
    correctIndex: 2,
    explanation: "Fibonacci: each number is sum of previous two. 5+8 = 13.",
  },
  // Accenture
  {
    id: "acc-tech-1",
    examId: "accenture",
    sectionId: "technical",
    topic: "networking",
    difficulty: "Easy",
    question: "What does HTTP stand for?",
    options: ["Hyper Text Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Protocol", "Host Transfer Text Protocol"],
    correctIndex: 0,
    explanation: "HTTP = Hyper Text Transfer Protocol.",
  },
  {
    id: "acc-cog-1",
    examId: "accenture",
    sectionId: "cognitive",
    topic: "reasoning",
    difficulty: "Easy",
    question: "Odd one out: Apple, Orange, Banana, Carrot",
    options: ["Apple", "Orange", "Banana", "Carrot"],
    correctIndex: 3,
    explanation: "Carrot is a vegetable; the others are fruits.",
  },
  // Capgemini
  {
    id: "cap-pseudo-1",
    examId: "capgemini",
    sectionId: "pseudo",
    topic: "conditionals",
    difficulty: "Easy",
    question: "if (5 > 3 AND 2 < 1) print('yes') else print('no')",
    options: ["yes", "no", "error", "nothing"],
    correctIndex: 1,
    explanation: "2 < 1 is false, so the AND is false. Output: no.",
  },
  // Cognizant
  {
    id: "cog-quant-1",
    examId: "cognizant",
    sectionId: "quant",
    topic: "arithmetic",
    difficulty: "Easy",
    question: "LCM of 12 and 18?",
    options: ["6", "24", "36", "72"],
    correctIndex: 2,
    explanation: "12 = 2²·3, 18 = 2·3². LCM = 2²·3² = 36.",
  },
];

export function getExam(id: string) {
  return EXAMS.find((e) => e.id === id);
}
export function getQuestionsForSection(examId: string, sectionId: string) {
  return QUESTIONS.filter((q) => q.examId === examId && q.sectionId === sectionId);
}
export function getQuestionsForExam(examId: string) {
  return QUESTIONS.filter((q) => q.examId === examId);
}
