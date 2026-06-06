import type { SqlExercise } from "./exercises";

export const exercisesAdvancedReview: SqlExercise[] = [
  {
    id: "advanced-sql-review-1",
    sectionId: "advanced-sql-review",
    orderIndex: 0,
    title: "Population Rank by Continent",
    description:
      "Show each country's continent, name, population, and population rank within its continent. Use DENSE_RANK and show only the top 3 ranks per continent.",
    difficulty: "Hard",
    starterCode:
      "SELECT continent, name, population, population_rank FROM (\n  SELECT continent, name, population,\n    ___() OVER (PARTITION BY ___ ORDER BY population DESC) AS population_rank\n  FROM world\n) ranked\nWHERE population_rank <= ___\nORDER BY continent, population_rank, name",
    solution:
      "SELECT continent, name, population, population_rank FROM (SELECT continent, name, population, DENSE_RANK() OVER (PARTITION BY continent ORDER BY population DESC) AS population_rank FROM world) ranked WHERE population_rank <= 3 ORDER BY continent, population_rank, name",
    hints: [
      "Use DENSE_RANK() OVER to rank rows without gaps after ties.",
      "PARTITION BY continent restarts the ranking for each continent.",
      "Filter the outer query because window function aliases are not available in WHERE.",
    ],
    concepts: ["DENSE_RANK", "PARTITION BY", "subquery", "ORDER BY"],
    dataset: "world",
  },
  {
    id: "advanced-sql-review-2",
    sectionId: "advanced-sql-review",
    orderIndex: 1,
    title: "Running GDP by Continent",
    description:
      "For European countries, show name, GDP, and a running GDP total ordered by GDP descending. Exclude rows where GDP is NULL.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, gdp,\n  SUM(gdp) OVER (ORDER BY ___ DESC) AS running_gdp\nFROM world\nWHERE continent = 'Europe'\n  AND gdp IS NOT ___\nORDER BY gdp DESC",
    solution:
      "SELECT name, gdp, SUM(gdp) OVER (ORDER BY gdp DESC) AS running_gdp FROM world WHERE continent = 'Europe' AND gdp IS NOT NULL ORDER BY gdp DESC",
    hints: [
      "SUM(gdp) OVER (ORDER BY gdp DESC) creates a running total.",
      "Use IS NOT NULL for NULL checks, not <> NULL.",
      "The final ORDER BY should match the window order for readability.",
    ],
    concepts: ["SUM", "OVER", "ORDER BY", "NULL"],
    dataset: "world",
  },
  {
    id: "advanced-sql-review-3",
    sectionId: "advanced-sql-review",
    orderIndex: 2,
    title: "CTE for Trillion-Dollar Economies",
    description:
      "Use a CTE named big_economies to find countries with GDP above 1 trillion. Return name, continent, and GDP in trillions rounded to 2 decimals.",
    difficulty: "Medium",
    starterCode:
      "WITH big_economies AS (\n  SELECT name, continent, gdp\n  FROM world\n  WHERE gdp > ___\n)\nSELECT name, continent, ROUND(gdp / ___, 2) AS gdp_trillions\nFROM big_economies\nORDER BY gdp_trillions DESC",
    solution:
      "WITH big_economies AS (SELECT name, continent, gdp FROM world WHERE gdp > 1000000000000) SELECT name, continent, ROUND(gdp / 1000000000000.0, 2) AS gdp_trillions FROM big_economies ORDER BY gdp_trillions DESC",
    hints: [
      "A CTE starts with WITH name AS (...).",
      "Use 1000000000000.0 to keep decimal division.",
      "The outer query reads from the CTE like a table.",
    ],
    concepts: ["CTE", "WITH", "ROUND", "ORDER BY"],
    dataset: "world",
  },
  {
    id: "advanced-sql-review-4",
    sectionId: "advanced-sql-review",
    orderIndex: 3,
    title: "Recursive Number CTE",
    description:
      "Use a recursive CTE to generate the numbers 1 through 5, then return each number and its square.",
    difficulty: "Hard",
    starterCode:
      "WITH RECURSIVE numbers(n) AS (\n  SELECT 1\n  UNION ALL\n  SELECT n + 1 FROM numbers WHERE n < ___\n)\nSELECT n, n * n AS square\nFROM numbers",
    solution:
      "WITH RECURSIVE numbers(n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM numbers WHERE n < 5) SELECT n, n * n AS square FROM numbers",
    hints: [
      "A recursive CTE needs an anchor SELECT and a recursive SELECT.",
      "UNION ALL combines the anchor row with each generated row.",
      "Stop recursion with WHERE n < 5.",
    ],
    concepts: ["recursive CTE", "WITH RECURSIVE", "UNION ALL"],
    dataset: "utility",
  },
  {
    id: "advanced-sql-review-5",
    sectionId: "advanced-sql-review",
    orderIndex: 4,
    title: "Team Goal Counts with LEFT JOIN",
    description:
      "List every team name and its goal count, including teams with zero goals. Use a LEFT JOIN from eteam to goal and sort by goals descending, then team name.",
    difficulty: "Medium",
    starterCode:
      "SELECT teamname, COUNT(goal.matchid) AS goals\nFROM eteam\nLEFT JOIN goal ON eteam.id = goal.___\nGROUP BY ___\nORDER BY goals DESC, teamname",
    solution:
      "SELECT teamname, COUNT(goal.matchid) AS goals FROM eteam LEFT JOIN goal ON eteam.id = goal.teamid GROUP BY teamname ORDER BY goals DESC, teamname",
    hints: [
      "LEFT JOIN keeps every team even when there is no matching goal row.",
      "COUNT(goal.matchid) counts only matched goal rows, so unmatched teams count as 0.",
      "Group by teamname to produce one row per team.",
    ],
    concepts: ["LEFT JOIN", "COUNT", "GROUP BY", "ORDER BY"],
    dataset: "football",
  },
  {
    id: "advanced-sql-review-6",
    sectionId: "advanced-sql-review",
    orderIndex: 5,
    title: "Department Contact Fallback",
    description:
      "Show each teacher name, department name, and preferred contact number. Use COALESCE so mobile is preferred, phone is fallback, and 'no contact' appears if both are NULL.",
    difficulty: "Medium",
    starterCode:
      "SELECT teacher.name, COALESCE(dept.name, 'Unassigned') AS department,\n  COALESCE(___, ___, 'no contact') AS contact\nFROM teacher\nLEFT JOIN dept ON teacher.dept = dept.id\nORDER BY teacher.name",
    solution:
      "SELECT teacher.name, COALESCE(dept.name, 'Unassigned') AS department, COALESCE(teacher.mobile, teacher.phone, 'no contact') AS contact FROM teacher LEFT JOIN dept ON teacher.dept = dept.id ORDER BY teacher.name",
    hints: [
      "COALESCE returns the first non-NULL argument.",
      "Use LEFT JOIN so teachers without a department remain in the result.",
      "Mobile should appear before phone in the COALESCE call.",
    ],
    concepts: ["COALESCE", "LEFT JOIN", "NULL", "ORDER BY"],
    dataset: "school",
  },
  {
    id: "advanced-sql-review-7",
    sectionId: "advanced-sql-review",
    orderIndex: 6,
    title: "Movie Cast Size CTE",
    description:
      "Use a CTE to count cast members per movie. Return the movie title and cast_count for movies with at least 4 cast members, ordered by cast_count descending then title.",
    difficulty: "Hard",
    starterCode:
      "WITH cast_counts AS (\n  SELECT movieid, COUNT(*) AS cast_count\n  FROM casting\n  GROUP BY ___\n)\nSELECT movie.title, cast_counts.cast_count\nFROM movie\nJOIN cast_counts ON movie.id = cast_counts.movieid\nWHERE cast_counts.cast_count >= ___\nORDER BY cast_count DESC, movie.title",
    solution:
      "WITH cast_counts AS (SELECT movieid, COUNT(*) AS cast_count FROM casting GROUP BY movieid) SELECT movie.title, cast_counts.cast_count FROM movie JOIN cast_counts ON movie.id = cast_counts.movieid WHERE cast_counts.cast_count >= 4 ORDER BY cast_count DESC, movie.title",
    hints: [
      "The CTE should group casting rows by movieid.",
      "Join movie.id to cast_counts.movieid to get the title.",
      "Filter in the outer query after the cast_count has been calculated.",
    ],
    concepts: ["CTE", "JOIN", "GROUP BY", "COUNT"],
    dataset: "movie",
  },
  {
    id: "advanced-sql-review-8",
    sectionId: "advanced-sql-review",
    orderIndex: 7,
    title: "Election Vote Share",
    description:
      "For constituency 'S14000024' in 2017, show party, votes, and vote_share_pct. Use a window total and round the percentage to 2 decimals.",
    difficulty: "Hard",
    starterCode:
      "SELECT party, votes,\n  ROUND(votes * 100.0 / SUM(votes) OVER (), ___) AS vote_share_pct\nFROM ge\nWHERE constituency = 'S14000024'\n  AND yr = 2017\nORDER BY vote_share_pct DESC",
    solution:
      "SELECT party, votes, ROUND(votes * 100.0 / SUM(votes) OVER (), 2) AS vote_share_pct FROM ge WHERE constituency = 'S14000024' AND yr = 2017 ORDER BY vote_share_pct DESC",
    hints: [
      "SUM(votes) OVER () gives the total votes across the filtered result set.",
      "Multiply by 100.0 before dividing to produce a decimal percentage.",
      "ROUND(..., 2) keeps two decimal places.",
    ],
    concepts: ["SUM", "OVER", "ROUND", "percentage"],
    dataset: "election",
  },
  {
    id: "advanced-sql-review-9",
    sectionId: "advanced-sql-review",
    orderIndex: 8,
    title: "Capital Cleanup with String Functions",
    description:
      "Show country name and a normalized capital slug for countries whose capital contains a space. The slug should be lowercase with spaces replaced by hyphens.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, LOWER(REPLACE(capital, ___, ___)) AS capital_slug\nFROM world\nWHERE capital LIKE ___\nORDER BY name",
    solution:
      "SELECT name, LOWER(REPLACE(capital, ' ', '-')) AS capital_slug FROM world WHERE capital LIKE '% %' ORDER BY name",
    hints: [
      "REPLACE(capital, ' ', '-') swaps spaces for hyphens.",
      "LOWER(...) makes the slug lowercase.",
      "LIKE '% %' finds capital names containing a space.",
    ],
    concepts: ["LOWER", "REPLACE", "LIKE", "ORDER BY"],
    dataset: "world",
  },
  {
    id: "advanced-sql-review-10",
    sectionId: "advanced-sql-review",
    orderIndex: 9,
    title: "Explain Population Lookup",
    description:
      "Use EXPLAIN QUERY PLAN to inspect a lookup by country name. Return the query plan for selecting population where name = 'India'.",
    difficulty: "Hard",
    starterCode:
      "EXPLAIN QUERY PLAN\nSELECT population\nFROM world\nWHERE ___ = 'India'",
    solution:
      "EXPLAIN QUERY PLAN SELECT population FROM world WHERE name = 'India'",
    hints: [
      "EXPLAIN QUERY PLAN goes before the SELECT statement.",
      "The filter column is name.",
      "This exercise is about reading the plan output, not changing data.",
    ],
    concepts: ["EXPLAIN QUERY PLAN", "index awareness", "WHERE"],
    dataset: "world",
  },
];