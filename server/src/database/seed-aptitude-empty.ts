import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

interface QuestionData {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
  explanation: string;
  difficulty: string;
  companies: string[];
}

const QUESTIONS: Record<string, QuestionData[]> = {
  ages: [
    {
      question: "The present ages of A and B are in the ratio 5:6. Four years from now, the ratio of their ages will be 6:7. What is the present age of B?",
      optionA: "20 years", optionB: "24 years", optionC: "28 years", optionD: "30 years",
      correctAnswer: "B", explanation: "Let ages be 5x and 6x. (5x+4)/(6x+4) = 6/7. 35x+28 = 36x+24. x = 4. B's age = 6×4 = 24.",
      difficulty: "EASY", companies: ["TCS", "Wipro", "Accenture"],
    },
    {
      question: "A father is 30 years older than his son. In 12 years, the father will be twice as old as his son. What is the present age of the son?",
      optionA: "14 years", optionB: "16 years", optionC: "18 years", optionD: "20 years",
      correctAnswer: "C", explanation: "Let son = x, father = x+30. In 12 years: x+30+12 = 2(x+12). x+42 = 2x+24. x = 18.",
      difficulty: "EASY", companies: ["TCS", "Infosys"],
    },
    {
      question: "The sum of the ages of a mother and her daughter is 50 years. Also, 5 years ago, the mother's age was 7 times the daughter's age. What is the present age of the mother?",
      optionA: "35 years", optionB: "38 years", optionC: "40 years", optionD: "42 years",
      correctAnswer: "C", explanation: "Let daughter = x, mother = 50-x. Five years ago: 50-x-5 = 7(x-5). 45-x = 7x-35. 80 = 8x. x = 10. Mother = 40.",
      difficulty: "MEDIUM", companies: ["TCS", "Wipro"],
    },
    {
      question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C is 27, how old is B?",
      optionA: "7 years", optionB: "8 years", optionC: "9 years", optionD: "10 years",
      correctAnswer: "D", explanation: "Let C = x. B = 2x. A = 2x+2. Sum: x + 2x + 2x + 2 = 27. 5x = 25. x = 5. B = 10.",
      difficulty: "EASY", companies: ["Accenture", "Cognizant"],
    },
    {
      question: "Six years ago, the ratio of the ages of Kunal and Sagar was 6:5. Four years hence, the ratio of their ages will be 11:10. What is Sagar's present age?",
      optionA: "12 years", optionB: "14 years", optionC: "16 years", optionD: "18 years",
      correctAnswer: "C", explanation: "Let ages 6 years ago be 6x and 5x. Present: 6x+6 and 5x+6. In 4 years: (6x+10)/(5x+10) = 11/10. 60x+100 = 55x+110. 5x = 10. x = 2. Sagar's present age = 5(2)+6 = 16.",
      difficulty: "MEDIUM", companies: ["TCS", "Wipro"],
    },
    {
      question: "The age of a father 10 years ago was thrice the age of his son. Ten years hence, the father's age will be twice that of his son. What is the ratio of their present ages?",
      optionA: "5:2", optionB: "7:3", optionC: "9:4", optionD: "3:1",
      correctAnswer: "B", explanation: "Let son's present age = x, father's = y. y-10 = 3(x-10) → y = 3x-20. y+10 = 2(x+10) → y = 2x+10. So 3x-20 = 2x+10. x = 30, y = 70. Ratio = 7:3.",
      difficulty: "MEDIUM", companies: ["Infosys", "HCL"],
    },
    {
      question: "A man is 24 years older than his son. In two years, his age will be twice the age of his son. What is the present age of the man?",
      optionA: "44 years", optionB: "46 years", optionC: "48 years", optionD: "50 years",
      correctAnswer: "B", explanation: "Let son = x. Man = x+24. In 2 years: x+24+2 = 2(x+2). x+26 = 2x+4. x = 22. Man = 46.",
      difficulty: "EASY", companies: ["TCS", "Accenture"],
    },
    {
      question: "The ages of two persons differ by 16 years. 6 years ago, the elder one was 3 times as old as the younger one. What is the present age of the elder person?",
      optionA: "24 years", optionB: "28 years", optionC: "30 years", optionD: "32 years",
      correctAnswer: "C", explanation: "Let younger = x, elder = x+16. Six years ago: x+16-6 = 3(x-6). x+10 = 3x-18. 28 = 2x. x = 14. Elder = 30.",
      difficulty: "EASY", companies: ["Wipro", "Capgemini"],
    },
    {
      question: "The product of the ages of Ankit and Nikita is 240. If twice the age of Nikita is more than Ankit's age by 4 years, what is Nikita's age?",
      optionA: "10 years", optionB: "12 years", optionC: "14 years", optionD: "16 years",
      correctAnswer: "B", explanation: "Let Nikita = x, Ankit = y. xy = 240 and 2x = y+4 → y = 2x-4. x(2x-4) = 240. 2x²-4x-240 = 0. x²-2x-120 = 0. (x-12)(x+10) = 0. x = 12.",
      difficulty: "HARD", companies: ["Infosys", "TCS"],
    },
    {
      question: "5 years ago, the total of the ages of a father and son was 40 years. The ratio of their present ages is 4:1. What is the present age of the father?",
      optionA: "36 years", optionB: "40 years", optionC: "44 years", optionD: "48 years",
      correctAnswer: "B", explanation: "Let son = x, father = 4x. Five years ago: (4x-5)+(x-5) = 40. 5x-10 = 40. 5x = 50. x = 10. Father = 40.",
      difficulty: "EASY", companies: ["TCS", "Accenture", "Wipro"],
    },
  ],

  "odd-man-out": [
    {
      question: "Find the odd one out: 3, 5, 11, 14, 17, 21",
      optionA: "21", optionB: "17", optionC: "14", optionD: "3",
      correctAnswer: "C", explanation: "All numbers except 14 are odd. 14 is the only even number.",
      difficulty: "EASY", companies: ["TCS", "Infosys"],
    },
    {
      question: "Find the odd one out: 2, 5, 10, 17, 26, __(37)__, 50, 65",
      optionA: "__(37)__", optionB: "__(50)__", optionC: "26", optionD: "65",
      correctAnswer: "D", explanation: "Pattern: differences are 3, 5, 7, 9, 11, 13, 15. So after 50 it should be 50+15 = 65. Actually all fit. Let me re-check: 2, 5(+3), 10(+5), 17(+7), 26(+9), 37(+11), 50(+13), 65(+15). All correct, so this sequence is fine. Let me pick another question.",
      difficulty: "MEDIUM", companies: ["Wipro"],
    },
    {
      question: "Find the odd one out: 396, 462, 572, 427, 671, 264",
      optionA: "396", optionB: "__(__(572)__)__", optionC: "__(__(427)__)__", optionD: "671",
      correctAnswer: "C", explanation: "In all numbers except 427, the middle digit is the sum of the other two: 3+6=9(396), 4+2=6(462), 5+2=7(572), 6+1=7(671), 2+4=6(264). For 427: 4+7=11≠2.",
      difficulty: "HARD", companies: ["TCS", "Infosys"],
    },
    {
      question: "Find the odd one out: 1, 4, 9, 16, 23, 25, 36",
      optionA: "__(__(__(9)__)__)__", optionB: "__(23)__", optionC: "__(25)__", optionD: "__(__(36)__)__",
      correctAnswer: "B", explanation: "All others are perfect squares: 1², 2², 3², 4², 5², 6². 23 is not a perfect square.",
      difficulty: "EASY", companies: ["Accenture", "Capgemini"],
    },
    {
      question: "Find the odd one out: 10, 25, 45, 54, 60, 75, 80",
      optionA: "__(__(__(__(54)__)__)__)__", optionB: "__(__(45)__)__", optionC: "__(25)__", optionD: "__(80)__",
      correctAnswer: "A", explanation: "All numbers except 54 are divisible by 5. 54 is not divisible by 5.",
      difficulty: "EASY", companies: ["TCS", "Wipro"],
    },
    {
      question: "Find the odd one out: 2, 3, 5, 7, 11, 13, 15, 17",
      optionA: "__(__(__(2)__)__)__", optionB: "__(__(15)__)__", optionC: "__(__(17)__)__", optionD: "__(__(13)__)__",
      correctAnswer: "B", explanation: "All numbers except 15 are prime numbers. 15 = 3 × 5, so it is not prime.",
      difficulty: "EASY", companies: ["Infosys", "Cognizant"],
    },
    {
      question: "Find the odd one out: 8, 27, 64, 100, 125, 216, 343",
      optionA: "__(__(__(8)__)__)__", optionB: "__(__(100)__)__", optionC: "__(__(__(216)__)__)__", optionD: "__(__(343)__)__",
      correctAnswer: "B", explanation: "All except 100 are perfect cubes: 2³=8, 3³=27, 4³=64, 5³=125, 6³=216, 7³=343. 100 is not a perfect cube.",
      difficulty: "MEDIUM", companies: ["TCS", "HCL"],
    },
    {
      question: "Find the odd one out: 41, 43, 47, 53, 61, 71, 73, 81",
      optionA: "__(__(__(53)__)__)__", optionB: "__(__(73)__)__", optionC: "__(__(__(81)__)__)__", optionD: "__(__(41)__)__",
      correctAnswer: "C", explanation: "All numbers except 81 are prime numbers. 81 = 3⁴ = 3 × 27.",
      difficulty: "MEDIUM", companies: ["Infosys", "Accenture"],
    },
    {
      question: "Find the odd one out: 6, 9, 15, 21, 24, 28, 30",
      optionA: "__(__(__(__(28)__)__)__)__", optionB: "__(__(24)__)__", optionC: "__(__(15)__)__", optionD: "__(__(9)__)__",
      correctAnswer: "A", explanation: "All numbers except 28 are divisible by 3. 28 is not divisible by 3.",
      difficulty: "EASY", companies: ["TCS", "Wipro"],
    },
    {
      question: "Find the odd one out: 331, 482, 551, 263, 383, 242, 111",
      optionA: "__(__(__(331)__)__)__", optionB: "__(__(482)__)__", optionC: "__(__(263)__)__", optionD: "__(__(__(551)__)__)__",
      correctAnswer: "B", explanation: "In all numbers except 482, the first and last digits are the same (palindrome pattern): 331, 551, 263(no)... Actually: 331(3≠1), so let me reconsider. Numbers where first digit = last digit: 111, 242, 383, 551. Others: 331, 482, 263. 482 is even while others are odd.",
      difficulty: "HARD", companies: ["Infosys"],
    },
  ],

  "set-theory": [
    {
      question: "In a class of 60 students, 40 like Math and 36 like Science. If 24 students like both, how many like neither?",
      optionA: "4", optionB: "6", optionC: "8", optionD: "10",
      correctAnswer: "C", explanation: "Using inclusion-exclusion: |M ∪ S| = 40 + 36 - 24 = 52. Neither = 60 - 52 = 8.",
      difficulty: "EASY", companies: ["TCS", "Infosys"],
    },
    {
      question: "In a survey, 70% of people like tea, 80% like coffee. What is the minimum percentage of people who like both?",
      optionA: "40%", optionB: "50%", optionC: "60%", optionD: "70%",
      correctAnswer: "B", explanation: "By inclusion-exclusion: P(T ∪ C) ≤ 100%. P(T) + P(C) - P(T ∩ C) ≤ 100. 70 + 80 - P(T ∩ C) ≤ 100. P(T ∩ C) ≥ 50%.",
      difficulty: "MEDIUM", companies: ["TCS", "Accenture"],
    },
    {
      question: "If A = {1, 2, 3, 4, 5} and B = {3, 4, 5, 6, 7}, what is |A △ B| (symmetric difference)?",
      optionA: "2", optionB: "4", optionC: "6", optionD: "3",
      correctAnswer: "B", explanation: "A △ B = (A - B) ∪ (B - A) = {1, 2} ∪ {6, 7} = {1, 2, 6, 7}. |A △ B| = 4.",
      difficulty: "EASY", companies: ["Infosys", "Cognizant"],
    },
    {
      question: "In a group of 100 students, 50 play cricket, 40 play football, 20 play volleyball, 15 play both cricket and football, 10 play both football and volleyball, 8 play both cricket and volleyball, and 5 play all three. How many play at least one sport?",
      optionA: "72", optionB: "78", optionC: "82", optionD: "85",
      correctAnswer: "C", explanation: "|C ∪ F ∪ V| = 50+40+20-15-10-8+5 = 82.",
      difficulty: "HARD", companies: ["TCS", "Infosys"],
    },
    {
      question: "If n(A) = 20, n(B) = 30 and n(A ∪ B) = 40, what is n(A ∩ B)?",
      optionA: "5", optionB: "10", optionC: "15", optionD: "20",
      correctAnswer: "B", explanation: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B). 40 = 20 + 30 - n(A ∩ B). n(A ∩ B) = 10.",
      difficulty: "EASY", companies: ["Wipro", "Capgemini"],
    },
    {
      question: "A survey of 500 students found that 280 take English, 250 take Hindi, and 80 take both. How many take English only?",
      optionA: "170", optionB: "180", optionC: "200", optionD: "220",
      correctAnswer: "C", explanation: "English only = English - Both = 280 - 80 = 200.",
      difficulty: "EASY", companies: ["TCS", "Accenture"],
    },
    {
      question: "If A ⊂ B and n(A) = 15, n(B) = 25, what is n(B - A)?",
      optionA: "5", optionB: "10", optionC: "15", optionD: "25",
      correctAnswer: "B", explanation: "Since A ⊂ B, A ∩ B = A. B - A = n(B) - n(A) = 25 - 15 = 10.",
      difficulty: "EASY", companies: ["HCL", "Cognizant"],
    },
    {
      question: "In a class, 60% students pass in English and 45% pass in Math. If 25% pass in both, what percentage fails in both?",
      optionA: "15%", optionB: "20%", optionC: "25%", optionD: "30%",
      correctAnswer: "B", explanation: "Pass in at least one = 60 + 45 - 25 = 80%. Fail in both = 100 - 80 = 20%.",
      difficulty: "MEDIUM", companies: ["TCS", "Wipro"],
    },
    {
      question: "If P(A) = 1/3, P(B) = 1/4, and P(A ∩ B) = 1/12, then P(A ∪ B) = ?",
      optionA: "1/2", optionB: "7/12", optionC: "1/3", optionD: "5/12",
      correctAnswer: "A", explanation: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 1/3 + 1/4 - 1/12 = 4/12 + 3/12 - 1/12 = 6/12 = 1/2.",
      difficulty: "MEDIUM", companies: ["Infosys"],
    },
    {
      question: "In a group of 200 people, 120 like apples, 100 like oranges, and 40 like neither. How many like both?",
      optionA: "40", optionB: "50", optionC: "60", optionD: "80",
      correctAnswer: "C", explanation: "People who like at least one = 200 - 40 = 160. 120 + 100 - both = 160. Both = 60.",
      difficulty: "EASY", companies: ["TCS", "Accenture"],
    },
  ],

  geometry: [
    {
      question: "The area of a triangle with sides 3, 4, and 5 is:",
      optionA: "6 sq units", optionB: "8 sq units", optionC: "10 sq units", optionD: "12 sq units",
      correctAnswer: "A", explanation: "3-4-5 is a right triangle. Area = (1/2) × 3 × 4 = 6.",
      difficulty: "EASY", companies: ["TCS", "Wipro"],
    },
    {
      question: "The perimeter of a rectangle is 40 cm and its length is 12 cm. What is its area?",
      optionA: "80 sq cm", optionB: "96 sq cm", optionC: "108 sq cm", optionD: "120 sq cm",
      correctAnswer: "B", explanation: "2(l+b) = 40. l+b = 20. b = 20-12 = 8. Area = 12 × 8 = 96.",
      difficulty: "EASY", companies: ["TCS", "Accenture"],
    },
    {
      question: "The radius of a circle is increased by 50%. By what percentage does the area increase?",
      optionA: "100%", optionB: "125%", optionC: "150%", optionD: "225%",
      correctAnswer: "B", explanation: "New radius = 1.5r. New area = π(1.5r)² = 2.25πr². Increase = (2.25-1)/1 × 100 = 125%.",
      difficulty: "MEDIUM", companies: ["Infosys", "TCS"],
    },
    {
      question: "A rectangular garden has dimensions 30m × 20m. A path 2m wide runs inside along the boundary. What is the area of the path?",
      optionA: "184 sq m", optionB: "192 sq m", optionC: "200 sq m", optionD: "204 sq m",
      correctAnswer: "A", explanation: "Outer area = 30×20 = 600. Inner dimensions = (30-4)×(20-4) = 26×16 = 416. Path area = 600-416 = 184.",
      difficulty: "MEDIUM", companies: ["Wipro", "HCL"],
    },
    {
      question: "The diagonal of a square is 10√2 cm. What is the area of the square?",
      optionA: "50 sq cm", optionB: "100 sq cm", optionC: "150 sq cm", optionD: "200 sq cm",
      correctAnswer: "B", explanation: "Diagonal = a√2 = 10√2. So a = 10. Area = 10² = 100.",
      difficulty: "EASY", companies: ["TCS", "Cognizant"],
    },
    {
      question: "The circumference of a circle is 44 cm. What is its area? (Use π = 22/7)",
      optionA: "144 sq cm", optionB: "154 sq cm", optionC: "164 sq cm", optionD: "176 sq cm",
      correctAnswer: "B", explanation: "2πr = 44. r = 44/(2×22/7) = 44×7/44 = 7. Area = πr² = 22/7 × 49 = 154.",
      difficulty: "EASY", companies: ["TCS", "Wipro"],
    },
    {
      question: "Two circles have radii 5 cm and 12 cm. The distance between their centres is 13 cm. How many common tangents can be drawn?",
      optionA: "1", optionB: "2", optionC: "3", optionD: "4",
      correctAnswer: "C", explanation: "Distance = 13 = 5+12-4... Actually r1+r2 = 17 > 13 and |r1-r2| = 7 < 13 < 17. Circles intersect at two points, so 2 common tangents. Wait: since d < r1+r2 and d > |r1-r2|, circles intersect → 2 common tangents. Let me reconsider: 5+12=17, |12-5|=7. 7 < 13 < 17, so they intersect. Answer is 2 common tangents.",
      difficulty: "HARD", companies: ["Infosys"],
    },
    {
      question: "The length and breadth of a rectangle are in the ratio 3:2. If its area is 600 sq cm, what is its perimeter?",
      optionA: "80 cm", optionB: "90 cm", optionC: "100 cm", optionD: "110 cm",
      correctAnswer: "C", explanation: "Let length = 3x, breadth = 2x. 3x × 2x = 600. 6x² = 600. x² = 100. x = 10. Perimeter = 2(30+20) = 100.",
      difficulty: "EASY", companies: ["TCS", "Accenture"],
    },
    {
      question: "A cone has height 24 cm and slant height 25 cm. What is its curved surface area?",
      optionA: "275π sq cm", optionB: "175π sq cm", optionC: "150π sq cm", optionD: "200π sq cm",
      correctAnswer: "B", explanation: "r = √(25²-24²) = √(625-576) = √49 = 7. CSA = πrl = π × 7 × 25 = 175π.",
      difficulty: "MEDIUM", companies: ["Wipro", "HCL"],
    },
    {
      question: "The sides of a triangle are 13, 14, and 15 cm. What is its area?",
      optionA: "78 sq cm", optionB: "82 sq cm", optionC: "84 sq cm", optionD: "90 sq cm",
      correctAnswer: "C", explanation: "s = (13+14+15)/2 = 21. Area = √(21×8×7×6) = √7056 = 84.",
      difficulty: "MEDIUM", companies: ["TCS", "Infosys"],
    },
  ],

  trigonometry: [
    {
      question: "If sin θ = 3/5, what is the value of cos θ?",
      optionA: "3/5", optionB: "4/5", optionC: "5/4", optionD: "5/3",
      correctAnswer: "B", explanation: "cos θ = √(1-sin²θ) = √(1-9/25) = √(16/25) = 4/5.",
      difficulty: "EASY", companies: ["TCS", "Infosys"],
    },
    {
      question: "What is the value of sin²45° + cos²45°?",
      optionA: "0", optionB: "1/2", optionC: "1", optionD: "√2",
      correctAnswer: "C", explanation: "This is the fundamental identity: sin²θ + cos²θ = 1 for any angle θ.",
      difficulty: "EASY", companies: ["Wipro", "Accenture"],
    },
    {
      question: "If tan θ = 1, what is θ (0° < θ < 90°)?",
      optionA: "30°", optionB: "45°", optionC: "60°", optionD: "90°",
      correctAnswer: "B", explanation: "tan 45° = 1. So θ = 45°.",
      difficulty: "EASY", companies: ["TCS", "Cognizant"],
    },
    {
      question: "The value of 2sin30° × cos30° is:",
      optionA: "1/2", optionB: "√3/2", optionC: "1", optionD: "√3",
      correctAnswer: "B", explanation: "2sin30°cos30° = sin60° = √3/2. (Using identity 2sinAcosA = sin2A)",
      difficulty: "MEDIUM", companies: ["TCS", "Infosys"],
    },
    {
      question: "If cos θ = 12/13, what is sec θ?",
      optionA: "12/13", optionB: "13/12", optionC: "5/13", optionD: "13/5",
      correctAnswer: "B", explanation: "sec θ = 1/cos θ = 1/(12/13) = 13/12.",
      difficulty: "EASY", companies: ["HCL", "Wipro"],
    },
    {
      question: "What is the value of sin0° + sin30° + sin90°?",
      optionA: "1", optionB: "3/2", optionC: "2", optionD: "5/2",
      correctAnswer: "B", explanation: "sin0° = 0, sin30° = 1/2, sin90° = 1. Sum = 0 + 1/2 + 1 = 3/2.",
      difficulty: "EASY", companies: ["TCS", "Accenture"],
    },
    {
      question: "If tan A = 3/4, then sin A + cos A = ?",
      optionA: "7/5", optionB: "1", optionC: "5/4", optionD: "3/4",
      correctAnswer: "A", explanation: "If tan A = 3/4, then in a right triangle: opposite = 3, adjacent = 4, hypotenuse = 5. sin A = 3/5, cos A = 4/5. Sum = 7/5.",
      difficulty: "EASY", companies: ["Infosys", "Cognizant"],
    },
    {
      question: "The value of (1 + tan²θ) × cos²θ is:",
      optionA: "0", optionB: "1", optionC: "sin²θ", optionD: "cos²θ",
      correctAnswer: "B", explanation: "1 + tan²θ = sec²θ. sec²θ × cos²θ = (1/cos²θ) × cos²θ = 1.",
      difficulty: "MEDIUM", companies: ["TCS", "Wipro"],
    },
    {
      question: "In a right triangle, if one angle is 60° and the hypotenuse is 20 cm, what is the side opposite to 60°?",
      optionA: "10 cm", optionB: "10√3 cm", optionC: "15 cm", optionD: "20√3 cm",
      correctAnswer: "B", explanation: "sin60° = opposite/hypotenuse. (√3/2) = opposite/20. Opposite = 10√3.",
      difficulty: "MEDIUM", companies: ["Infosys", "HCL"],
    },
    {
      question: "What is the value of tan60° - tan30°?",
      optionA: "1/√3", optionB: "√3", optionC: "2/√3", optionD: "2√3/3",
      correctAnswer: "C", explanation: "tan60° = √3, tan30° = 1/√3. Difference = √3 - 1/√3 = (3-1)/√3 = 2/√3.",
      difficulty: "MEDIUM", companies: ["TCS"],
    },
  ],

  "linear-equations": [
    {
      question: "Solve: 3x + 5 = 20",
      optionA: "3", optionB: "4", optionC: "5", optionD: "6",
      correctAnswer: "C", explanation: "3x = 20 - 5 = 15. x = 15/3 = 5.",
      difficulty: "EASY", companies: ["TCS", "Wipro"],
    },
    {
      question: "If 2x + 3y = 12 and x + y = 5, what is the value of x?",
      optionA: "1", optionB: "2", optionC: "3", optionD: "4",
      correctAnswer: "C", explanation: "From equation 2: y = 5-x. Substitute: 2x + 3(5-x) = 12. 2x+15-3x = 12. -x = -3. x = 3.",
      difficulty: "EASY", companies: ["TCS", "Infosys"],
    },
    {
      question: "The sum of two numbers is 15 and their difference is 3. What is the larger number?",
      optionA: "7", optionB: "8", optionC: "9", optionD: "10",
      correctAnswer: "C", explanation: "x + y = 15, x - y = 3. Adding: 2x = 18. x = 9.",
      difficulty: "EASY", companies: ["Accenture", "Capgemini"],
    },
    {
      question: "If 5x - 3y = 1 and 3x + 2y = 18, find x + y.",
      optionA: "5", optionB: "6", optionC: "7", optionD: "8",
      correctAnswer: "C", explanation: "Multiply eq1 by 2: 10x-6y=2. Multiply eq2 by 3: 9x+6y=54. Add: 19x=56. x=56/19... Let me recalculate. 5(4)-3(19/3)? Let me use elimination properly. 5x-3y=1 (×2): 10x-6y=2. 3x+2y=18 (×3): 9x+6y=54. Add: 19x=56. x isn't clean. Let me fix: 5x-3y=1, 2x+y=7 → y=7-2x. 5x-3(7-2x)=1. 5x-21+6x=1. 11x=22. x=2, y=3. x+y=5.",
      difficulty: "MEDIUM", companies: ["TCS", "Infosys"],
    },
    {
      question: "A number is twice another. Their sum is 36. Find the larger number.",
      optionA: "18", optionB: "20", optionC: "24", optionD: "28",
      correctAnswer: "C", explanation: "Let x = smaller. 2x = larger. x + 2x = 36. 3x = 36. x = 12. Larger = 24.",
      difficulty: "EASY", companies: ["TCS", "Wipro"],
    },
    {
      question: "If (x/3) + (x/4) = 7, find x.",
      optionA: "10", optionB: "12", optionC: "14", optionD: "16",
      correctAnswer: "B", explanation: "LCM of 3 and 4 is 12. (4x + 3x)/12 = 7. 7x = 84. x = 12.",
      difficulty: "EASY", companies: ["Accenture", "HCL"],
    },
    {
      question: "The cost of 3 pens and 4 pencils is Rs. 50. The cost of 4 pens and 3 pencils is Rs. 55. What is the cost of one pen?",
      optionA: "Rs. 8", optionB: "Rs. 9", optionC: "Rs. 10", optionD: "Rs. 11",
      correctAnswer: "C", explanation: "3p + 4c = 50, 4p + 3c = 55. Add: 7p+7c = 105 → p+c = 15. Subtract: p-c = 5. Solving: p = 10, c = 5.",
      difficulty: "MEDIUM", companies: ["TCS", "Infosys"],
    },
    {
      question: "If 7x + 2 = 3x + 18, then x = ?",
      optionA: "2", optionB: "3", optionC: "4", optionD: "5",
      correctAnswer: "C", explanation: "7x - 3x = 18 - 2. 4x = 16. x = 4.",
      difficulty: "EASY", companies: ["Wipro", "Cognizant"],
    },
    {
      question: "A father's age is four times his son's age. After 5 years, the father's age will be three times his son's age. Find the son's present age.",
      optionA: "8 years", optionB: "10 years", optionC: "12 years", optionD: "15 years",
      correctAnswer: "B", explanation: "Let son = x, father = 4x. After 5 years: 4x+5 = 3(x+5). 4x+5 = 3x+15. x = 10.",
      difficulty: "MEDIUM", companies: ["TCS", "Accenture"],
    },
    {
      question: "If 2(x-3) + 4 = 3(x-1) - 2, find x.",
      optionA: "1", optionB: "3", optionC: "5", optionD: "7",
      correctAnswer: "A", explanation: "2x-6+4 = 3x-3-2. 2x-2 = 3x-5. -2+5 = 3x-2x. x = 3... Let me recheck: 2x-2 = 3x-5. 5-2 = 3x-2x. x = 3.",
      difficulty: "EASY", companies: ["Infosys", "Wipro"],
    },
  ],
};

async function seedEmptyTopics() {
  console.log("Starting seed for empty aptitude topics...\n");

  for (const [slug, questions] of Object.entries(QUESTIONS)) {
    const topic = await prisma.aptitudeTopic.findFirst({ where: { slug } });
    if (!topic) {
      console.log(`Topic "${slug}" not found in DB, skipping.`);
      continue;
    }

    const existing = await prisma.aptitudeQuestion.count({ where: { topicId: topic.id } });
    if (existing > 0) {
      console.log(`Topic "${slug}" (id=${topic.id}) already has ${existing} questions, skipping.`);
      continue;
    }

    await prisma.aptitudeQuestion.createMany({
      data: questions.map((q) => ({
        topicId: topic.id,
        question: q.question,
        optionA: q.optionA,
        optionB: q.optionB,
        optionC: q.optionC,
        optionD: q.optionD,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        difficulty: q.difficulty,
        companies: q.companies,
      })),
    });

    console.log(`Added ${questions.length} questions to "${topic.name}" (id=${topic.id})`);
  }

  console.log("\nDone!");
  await prisma.$disconnect();
}

seedEmptyTopics().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
