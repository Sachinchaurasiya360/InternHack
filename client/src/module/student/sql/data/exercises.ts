import { exercisesSelect } from "./exercises-select";
import { exercisesSubqueryAggregate } from "./exercises-subquery-aggregate";
import { exercisesJoins } from "./exercises-joins";
import { exercisesWindowDdlDml } from "./exercises-window-ddl-dml";
import { exercisesFunctionsSetops } from "./exercises-functions-setops";
import { exercisesAdvancedReview } from "./exercises-advanced-review";

export interface SqlExercise {
  id: string;
  sectionId: string;
  orderIndex: number;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  starterCode: string;
  solution: string;
  hints: string[];
  concepts: string[];
  dataset: string;
}

export interface SqlSection {
  id: string;
  title: string;
  description: string;
  dataset: string;
  orderIndex: number;
}

export const sections: SqlSection[] = [
  {
    id: "select-basics",
    title: "SELECT Basics",
    description:
      "Learn the fundamentals of retrieving data with SELECT, WHERE, IN, and BETWEEN.",
    dataset: "world",
    orderIndex: 0,
  },
  {
    id: "select-names",
    title: "SELECT Names",
    description:
      "Practice pattern matching with LIKE, wildcards, LENGTH, and string functions.",
    dataset: "world",
    orderIndex: 1,
  },
  {
    id: "select-world",
    title: "SELECT from World",
    description:
      "Query the world table using arithmetic, rounding, CASE, and string operations.",
    dataset: "world",
    orderIndex: 2,
  },
  {
    id: "select-nobel",
    title: "SELECT from Nobel",
    description:
      "Query Nobel Prize data with filtering, ordering, and special character handling.",
    dataset: "nobel",
    orderIndex: 3,
  },
  {
    id: "select-in-select",
    title: "SELECT within SELECT",
    description:
      "Use subqueries inside WHERE and SELECT clauses to answer complex questions.",
    dataset: "world",
    orderIndex: 4,
  },
  {
    id: "sum-and-count",
    title: "SUM and COUNT",
    description:
      "Aggregate functions: SUM, COUNT, AVG, GROUP BY, and HAVING.",
    dataset: "world",
    orderIndex: 5,
  },
  {
    id: "join",
    title: "JOIN",
    description:
      "Combine rows from multiple tables using INNER JOIN and LEFT JOIN.",
    dataset: "football",
    orderIndex: 6,
  },
  {
    id: "more-join",
    title: "More JOIN",
    description:
      "Advanced JOIN queries on a movie database with multiple table relationships.",
    dataset: "movie",
    orderIndex: 7,
  },
  {
    id: "using-null",
    title: "Using NULL",
    description:
      "Handle NULL values with IS NULL, COALESCE, LEFT JOIN, and CASE expressions.",
    dataset: "school",
    orderIndex: 8,
  },
  {
    id: "window-functions",
    title: "Window Functions",
    description:
      "Use RANK, ROW_NUMBER, PARTITION BY, and other window functions for analytics.",
    dataset: "election",
    orderIndex: 9,
  },
  {
    id: "self-join",
    title: "Self JOIN",
    description:
      "Join a table to itself to find routes, connections, and hierarchical data.",
    dataset: "transport",
    orderIndex: 10,
  },
  {
    id: "ddl-basics",
    title: "DDL Basics",
    description:
      "Create, alter, and drop tables using Data Definition Language statements.",
    dataset: "world",
    orderIndex: 11,
  },
  {
    id: "dml-practice",
    title: "DML Practice",
    description:
      "Insert, update, and delete data using Data Manipulation Language statements.",
    dataset: "world",
    orderIndex: 12,
  },
  {
    id: "string-functions",
    title: "String Functions",
    description:
      "Manipulate text with UPPER, LOWER, LENGTH, SUBSTR, REPLACE, TRIM, and concatenation.",
    dataset: "world",
    orderIndex: 13,
  },
  {
    id: "numeric-functions",
    title: "Numeric Functions",
    description:
      "Work with numbers using ROUND, ABS, CAST, integer division, and mathematical expressions.",
    dataset: "world",
    orderIndex: 14,
  },
  {
    id: "union-operations",
    title: "UNION Operations",
    description:
      "Combine result sets with UNION, UNION ALL, INTERSECT, and EXCEPT.",
    dataset: "world",
    orderIndex: 15,
  },
  {
    id: "cte-practice",
    title: "Common Table Expressions",
    description:
      "Write cleaner queries using WITH clauses and CTEs for step-by-step data transformations.",
    dataset: "world",
    orderIndex: 16,
  },
  {
    id: "advanced-sql-review",
    title: "Advanced SQL Review",
    description:
      "Practice mixed interview-style SQL cases using window functions, CTEs, joins, NULL handling, string cleanup, and query plans.",
    dataset: "mixed",
    orderIndex: 17,
  },
];

export const exercises: SqlExercise[] = [
  ...exercisesSelect,
  ...exercisesSubqueryAggregate,
  ...exercisesJoins,
  ...exercisesWindowDdlDml,
  ...exercisesFunctionsSetops,
  ...exercisesAdvancedReview,
];
