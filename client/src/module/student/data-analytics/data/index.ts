import type { DataAnalyticsSection, DataAnalyticsLesson } from "./types";
import { dataAnalyticsSections } from "./sections";

import fundamentalsData from "./lessons/data-fundamentals.json";
import numpyData from "./lessons/numpy-essentials.json";
import pandasData from "./lessons/pandas-core.json";
import cleaningData from "./lessons/data-cleaning.json";
import vizData from "./lessons/data-visualization.json";
import statsData from "./lessons/statistics-foundations.json";
import edaData from "./lessons/exploratory-data-analysis.json";
import sqlData from "./lessons/sql-for-analytics.json";
import mlData from "./lessons/machine-learning-basics.json";

export const sections: DataAnalyticsSection[] = dataAnalyticsSections;

export const lessons: DataAnalyticsLesson[] = [
  ...(fundamentalsData as DataAnalyticsLesson[]),
  ...(numpyData as DataAnalyticsLesson[]),
  ...(pandasData as DataAnalyticsLesson[]),
  ...(cleaningData as DataAnalyticsLesson[]),
  ...(vizData as DataAnalyticsLesson[]),
  ...(statsData as DataAnalyticsLesson[]),
  ...(edaData as DataAnalyticsLesson[]),
  ...(sqlData as DataAnalyticsLesson[]),
  ...(mlData as DataAnalyticsLesson[]),
];
