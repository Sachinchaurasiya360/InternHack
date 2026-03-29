import type { DataAnalyticsSection } from "./types";

export const dataAnalyticsSections: DataAnalyticsSection[] = [
  {
    id: "data-fundamentals",
    title: "Data Fundamentals",
    description: "Data types, CSV/JSON formats, data lifecycle, and Python data basics.",
    orderIndex: 0,
    level: "Beginner",
  },
  {
    id: "numpy-essentials",
    title: "NumPy Essentials",
    description: "Arrays, vectorized operations, broadcasting, indexing, and reshaping.",
    orderIndex: 1,
    level: "Beginner",
  },
  {
    id: "pandas-core",
    title: "Pandas Core",
    description: "DataFrames, Series, indexing, filtering, sorting, and basic aggregations.",
    orderIndex: 2,
    level: "Beginner",
  },
  {
    id: "data-cleaning",
    title: "Data Cleaning & Wrangling",
    description: "Missing data, duplicates, merging, reshaping, and type conversion.",
    orderIndex: 3,
    level: "Intermediate",
  },
  {
    id: "data-visualization",
    title: "Data Visualization",
    description: "Matplotlib, Seaborn, chart types, customization, and storytelling with data.",
    orderIndex: 4,
    level: "Intermediate",
  },
  {
    id: "statistics-foundations",
    title: "Statistics Foundations",
    description: "Descriptive stats, distributions, probability, and hypothesis testing.",
    orderIndex: 5,
    level: "Intermediate",
  },
  {
    id: "exploratory-data-analysis",
    title: "Exploratory Data Analysis",
    description: "Correlation, outliers, feature analysis, and systematic EDA workflows.",
    orderIndex: 6,
    level: "Intermediate",
  },
  {
    id: "sql-for-analytics",
    title: "SQL for Analytics",
    description: "Queries, joins, window functions, CTEs, and analytical SQL patterns.",
    orderIndex: 7,
    level: "Advanced",
  },
  {
    id: "machine-learning-basics",
    title: "Machine Learning Basics",
    description: "Regression, classification, evaluation metrics, and scikit-learn intro.",
    orderIndex: 8,
    level: "Advanced",
  },
];
