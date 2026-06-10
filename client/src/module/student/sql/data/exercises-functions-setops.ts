import type { SqlExercise } from "./exercises";

export const exercisesFunctionsSetops: SqlExercise[] = [
  {
    id: "string-functions-1",
    sectionId: "string-functions",
    orderIndex: 0,
    title: "Uppercase Names",
    description: "Show the name of every country in uppercase.",
    difficulty: "Easy",
    starterCode: "SELECT ___(name) FROM world",
    solution: "SELECT UPPER(name) FROM world",
    hints: [
      "UPPER(text) converts text to uppercase.",
      "Also known as UCASE in some databases.",
    ],
    concepts: ["UPPER"],
    dataset: "world",
  },
  {
    id: "string-functions-2",
    sectionId: "string-functions",
    orderIndex: 1,
    title: "Lowercase Continents",
    description: "Show each continent in lowercase, without duplicates.",
    difficulty: "Easy",
    starterCode: "SELECT DISTINCT ___(continent) FROM world",
    solution: "SELECT DISTINCT LOWER(continent) FROM world",
    hints: [
      "LOWER(text) converts text to lowercase.",
      "DISTINCT removes duplicate rows.",
    ],
    concepts: ["LOWER", "DISTINCT"],
    dataset: "world",
  },
  {
    id: "string-functions-3",
    sectionId: "string-functions",
    orderIndex: 2,
    title: "Name Length",
    description:
      "Show the name and the number of characters in each country name. Order by length descending.",
    difficulty: "Easy",
    starterCode:
      "SELECT name, ___(name) AS name_length\nFROM world\nORDER BY name_length DESC",
    solution:
      "SELECT name, LENGTH(name) AS name_length FROM world ORDER BY name_length DESC",
    hints: [
      "LENGTH(text) returns the number of characters.",
      "Use an alias (AS name_length) to reference it in ORDER BY.",
    ],
    concepts: ["LENGTH", "ORDER BY", "alias"],
    dataset: "world",
  },
  {
    id: "string-functions-4",
    sectionId: "string-functions",
    orderIndex: 3,
    title: "First Three Letters",
    description:
      "Show the first 3 letters of each country name as 'code' and the full name.",
    difficulty: "Easy",
    starterCode:
      "SELECT SUBSTR(name, ___, ___) AS code, name FROM world",
    solution:
      "SELECT SUBSTR(name, 1, 3) AS code, name FROM world",
    hints: [
      "SUBSTR(text, start, length) extracts a substring.",
      "Position 1 is the first character.",
    ],
    concepts: ["SUBSTR"],
    dataset: "world",
  },
  {
    id: "string-functions-5",
    sectionId: "string-functions",
    orderIndex: 4,
    title: "Replace in Capital",
    description:
      "Show the capital of each country, but replace all spaces with hyphens. Show the original name too.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, REPLACE(capital, ___, ___) AS hyphenated_capital\nFROM world",
    solution:
      "SELECT name, REPLACE(capital, ' ', '-') AS hyphenated_capital FROM world",
    hints: [
      "REPLACE(text, old, new) replaces all occurrences.",
      "REPLACE(capital, ' ', '-') swaps spaces for hyphens.",
    ],
    concepts: ["REPLACE"],
    dataset: "world",
  },
  {
    id: "string-functions-6",
    sectionId: "string-functions",
    orderIndex: 5,
    title: "Concatenate Name and Capital",
    description:
      "Show a column that reads 'The capital of France is Paris' for each country. Use the || concatenation operator.",
    difficulty: "Medium",
    starterCode:
      "SELECT 'The capital of ' || ___ || ' is ' || ___\nFROM world",
    solution:
      "SELECT 'The capital of ' || name || ' is ' || capital FROM world",
    hints: [
      "|| concatenates strings in SQL.",
      "Combine literal strings with column values.",
    ],
    concepts: ["||", "concatenation"],
    dataset: "world",
  },
  {
    id: "string-functions-7",
    sectionId: "string-functions",
    orderIndex: 6,
    title: "Countries with Long Capitals",
    description:
      "Show name and capital for countries where the capital name is longer than the country name.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, capital FROM world\n WHERE LENGTH(___) > LENGTH(___)",
    solution:
      "SELECT name, capital FROM world WHERE LENGTH(capital) > LENGTH(name)",
    hints: [
      "Compare LENGTH of two columns in the WHERE clause.",
      "LENGTH(capital) > LENGTH(name) finds longer capitals.",
    ],
    concepts: ["LENGTH", "WHERE", "comparison"],
    dataset: "world",
  },
  {
    id: "string-functions-8",
    sectionId: "string-functions",
    orderIndex: 7,
    title: "Capital Starts with Country Name",
    description:
      "Find countries where the capital starts with the country name (like 'Mexico' → 'Mexico City'). Show both columns.",
    difficulty: "Hard",
    starterCode:
      "SELECT name, capital FROM world\n WHERE capital LIKE ___ || '%'\n   AND capital <> name",
    solution:
      "SELECT name, capital FROM world WHERE capital LIKE name || '%' AND capital <> name",
    hints: [
      "LIKE name || '%' matches capitals that start with the country name.",
      "AND capital <> name excludes countries where capital equals name.",
    ],
    concepts: ["LIKE", "||", "WHERE", "<>"],
    dataset: "world",
  },
  {
    id: "numeric-functions-1",
    sectionId: "numeric-functions",
    orderIndex: 0,
    title: "GDP per Capita",
    description:
      "Show the name and GDP per capita (gdp/population) for countries with population > 10 million. Round to the nearest whole number.",
    difficulty: "Easy",
    starterCode:
      "SELECT name, ROUND(gdp / population) AS gdp_per_capita\nFROM world\nWHERE population > ___",
    solution:
      "SELECT name, ROUND(gdp / population) AS gdp_per_capita FROM world WHERE population > 10000000",
    hints: [
      "ROUND(value) rounds to the nearest integer.",
      "gdp / population gives per-capita GDP.",
    ],
    concepts: ["ROUND", "arithmetic", "WHERE"],
    dataset: "world",
  },
  {
    id: "numeric-functions-2",
    sectionId: "numeric-functions",
    orderIndex: 1,
    title: "Round to 2 Decimals",
    description:
      "Show name and population in millions (population / 1000000) rounded to 2 decimal places for Asian countries.",
    difficulty: "Easy",
    starterCode:
      "SELECT name, ROUND(population / 1000000.0, ___) AS pop_millions\nFROM world\nWHERE continent = 'Asia'",
    solution:
      "SELECT name, ROUND(population / 1000000.0, 2) AS pop_millions FROM world WHERE continent = 'Asia'",
    hints: [
      "ROUND(value, 2) rounds to 2 decimal places.",
      "Divide by 1000000.0 (not 1000000) to get decimal results.",
    ],
    concepts: ["ROUND", "arithmetic", "decimal division"],
    dataset: "world",
  },
  {
    id: "numeric-functions-3",
    sectionId: "numeric-functions",
    orderIndex: 2,
    title: "Absolute Difference",
    description:
      "Show the name and the absolute difference between a country's area and 1,000,000. Order by this difference ascending.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, ABS(area - ___) AS area_diff\nFROM world\nORDER BY area_diff ___",
    solution:
      "SELECT name, ABS(area - 1000000) AS area_diff FROM world ORDER BY area_diff ASC",
    hints: [
      "ABS(value) returns the absolute (non-negative) value.",
      "ORDER BY area_diff ASC puts the closest to 1M first.",
    ],
    concepts: ["ABS", "arithmetic", "ORDER BY"],
    dataset: "world",
  },
  {
    id: "numeric-functions-4",
    sectionId: "numeric-functions",
    orderIndex: 3,
    title: "Population Density",
    description:
      "Show name, population, area, and population density (population / area) rounded to 1 decimal. Show only the 10 most densely populated countries.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, population, area,\n  ROUND(population * 1.0 / area, ___) AS density\nFROM world\nWHERE area > 0\nORDER BY density DESC\nLIMIT ___",
    solution:
      "SELECT name, population, area, ROUND(population * 1.0 / area, 1) AS density FROM world WHERE area > 0 ORDER BY density DESC LIMIT 10",
    hints: [
      "Multiply by 1.0 to force decimal division.",
      "ROUND(..., 1) keeps one decimal place.",
      "LIMIT 10 restricts to top 10.",
    ],
    concepts: ["ROUND", "arithmetic", "ORDER BY", "LIMIT"],
    dataset: "world",
  },
  {
    id: "numeric-functions-5",
    sectionId: "numeric-functions",
    orderIndex: 4,
    title: "Trillion-Dollar Economies",
    description:
      "Show the name and GDP in trillions (gdp / 1e12) rounded to 2 decimal places for countries with GDP > 1 trillion. Order by GDP descending.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, ROUND(gdp / ___, 2) AS gdp_trillions\nFROM world\nWHERE gdp > ___\nORDER BY gdp_trillions DESC",
    solution:
      "SELECT name, ROUND(gdp / 1000000000000.0, 2) AS gdp_trillions FROM world WHERE gdp > 1000000000000 ORDER BY gdp_trillions DESC",
    hints: [
      "1 trillion = 1,000,000,000,000.",
      "Divide by 1000000000000.0 for decimal result.",
    ],
    concepts: ["ROUND", "arithmetic", "WHERE", "ORDER BY"],
    dataset: "world",
  },
  {
    id: "numeric-functions-6",
    sectionId: "numeric-functions",
    orderIndex: 5,
    title: "Percentage of World Population",
    description:
      "Show the name and the percentage of world population each country represents. Round to 4 decimal places. Use a subquery for total population.",
    difficulty: "Hard",
    starterCode:
      "SELECT name,\n  ROUND(population * 100.0 / (SELECT ___(population) FROM world), 4) AS pct\nFROM world\nORDER BY pct DESC",
    solution:
      "SELECT name, ROUND(population * 100.0 / (SELECT SUM(population) FROM world), 4) AS pct FROM world ORDER BY pct DESC",
    hints: [
      "SUM(population) in a subquery gives the world total.",
      "Multiply by 100.0 before dividing for a percentage.",
      "ROUND(..., 4) keeps 4 decimal places.",
    ],
    concepts: ["ROUND", "SUM", "subquery", "arithmetic"],
    dataset: "world",
  },
  {
    id: "numeric-functions-7",
    sectionId: "numeric-functions",
    orderIndex: 6,
    title: "GDP Ranking Category",
    description:
      "Show name, gdp, and a category: 'High' if GDP > 1 trillion, 'Medium' if GDP > 100 billion, else 'Low'. Use CASE.",
    difficulty: "Hard",
    starterCode:
      "SELECT name, gdp,\n  CASE\n    WHEN gdp > ___ THEN 'High'\n    WHEN gdp > ___ THEN 'Medium'\n    ELSE 'Low'\n  END AS gdp_category\nFROM world\nORDER BY gdp DESC",
    solution:
      "SELECT name, gdp, CASE WHEN gdp > 1000000000000 THEN 'High' WHEN gdp > 100000000000 THEN 'Medium' ELSE 'Low' END AS gdp_category FROM world ORDER BY gdp DESC",
    hints: [
      "CASE WHEN evaluates conditions in order.",
      "The first matching WHEN wins.",
      "1 trillion = 1000000000000, 100 billion = 100000000000.",
    ],
    concepts: ["CASE", "WHEN", "THEN", "ELSE", "ORDER BY"],
    dataset: "world",
  },
  {
    id: "numeric-functions-8",
    sectionId: "numeric-functions",
    orderIndex: 7,
    title: "MIN and MAX Area per Continent",
    description:
      "For each continent, show the continent, the smallest country area (min_area), and the largest country area (max_area).",
    difficulty: "Medium",
    starterCode:
      "SELECT continent,\n  MIN(___) AS min_area,\n  MAX(___) AS max_area\nFROM world\nGROUP BY ___",
    solution:
      "SELECT continent, MIN(area) AS min_area, MAX(area) AS max_area FROM world GROUP BY continent",
    hints: [
      "MIN(area) returns the smallest area.",
      "MAX(area) returns the largest area.",
      "GROUP BY continent aggregates per continent.",
    ],
    concepts: ["MIN", "MAX", "GROUP BY"],
    dataset: "world",
  },
  {
    id: "union-operations-1",
    sectionId: "union-operations",
    orderIndex: 0,
    title: "Basic UNION",
    description:
      "Show the names of countries in Europe and the names of countries in Asia in a single result set using UNION.",
    difficulty: "Easy",
    starterCode:
      "SELECT name FROM world WHERE continent = 'Europe'\n___\nSELECT name FROM world WHERE continent = 'Asia'",
    solution:
      "SELECT name FROM world WHERE continent = 'Europe' UNION SELECT name FROM world WHERE continent = 'Asia'",
    hints: [
      "UNION combines two SELECT statements into one result.",
      "Both SELECTs must have the same number of columns.",
      "UNION removes duplicates automatically.",
    ],
    concepts: ["UNION"],
    dataset: "world",
  },
  {
    id: "union-operations-2",
    sectionId: "union-operations",
    orderIndex: 1,
    title: "UNION ALL",
    description:
      "Show all continent values from the world table using two queries: one for countries with population > 100M and one for countries with area > 1M. Use UNION ALL to keep duplicates.",
    difficulty: "Easy",
    starterCode:
      "SELECT continent FROM world WHERE population > 100000000\nUNION ___\nSELECT continent FROM world WHERE area > 1000000",
    solution:
      "SELECT continent FROM world WHERE population > 100000000 UNION ALL SELECT continent FROM world WHERE area > 1000000",
    hints: [
      "UNION ALL keeps all rows including duplicates.",
      "UNION ALL is faster than UNION because it skips deduplication.",
    ],
    concepts: ["UNION ALL"],
    dataset: "world",
  },
  {
    id: "union-operations-3",
    sectionId: "union-operations",
    orderIndex: 2,
    title: "UNION with Labels",
    description:
      "Create a combined list with a 'source' column: show Nobel Peace prize winners labeled 'Nobel' and country names with population > 500M labeled 'Country'. Show source and name.",
    difficulty: "Medium",
    starterCode:
      "SELECT '___' AS source, winner AS name FROM nobel WHERE subject = 'Peace'\nUNION\nSELECT '___' AS source, name FROM world WHERE population > 500000000",
    solution:
      "SELECT 'Nobel' AS source, winner AS name FROM nobel WHERE subject = 'Peace' UNION SELECT 'Country' AS source, name FROM world WHERE population > 500000000",
    hints: [
      "Use a literal string as a column: 'Nobel' AS source.",
      "Both SELECTs must have matching column counts and types.",
    ],
    concepts: ["UNION", "literal column", "alias"],
    dataset: "world",
  },
  {
    id: "union-operations-4",
    sectionId: "union-operations",
    orderIndex: 3,
    title: "UNION with ORDER BY",
    description:
      "Combine the names of African countries and South American countries into one list, ordered alphabetically.",
    difficulty: "Easy",
    starterCode:
      "SELECT name FROM world WHERE continent = 'Africa'\nUNION\nSELECT name FROM world WHERE continent = 'South America'\nORDER BY ___",
    solution:
      "SELECT name FROM world WHERE continent = 'Africa' UNION SELECT name FROM world WHERE continent = 'South America' ORDER BY name",
    hints: [
      "ORDER BY applies to the final combined result.",
      "Place ORDER BY after the last SELECT.",
    ],
    concepts: ["UNION", "ORDER BY"],
    dataset: "world",
  },
  {
    id: "union-operations-5",
    sectionId: "union-operations",
    orderIndex: 4,
    title: "INTERSECT-style Query",
    description:
      "Find country names that appear in both a list of countries with population > 50M AND a list of countries with GDP > 500 billion. Use INTERSECT.",
    difficulty: "Medium",
    starterCode:
      "SELECT name FROM world WHERE population > 50000000\n___\nSELECT name FROM world WHERE gdp > 500000000000",
    solution:
      "SELECT name FROM world WHERE population > 50000000 INTERSECT SELECT name FROM world WHERE gdp > 500000000000",
    hints: [
      "INTERSECT returns only rows that appear in both result sets.",
      "It is the set intersection of two queries.",
    ],
    concepts: ["INTERSECT"],
    dataset: "world",
  },
  {
    id: "union-operations-6",
    sectionId: "union-operations",
    orderIndex: 5,
    title: "EXCEPT Query",
    description:
      "Find European countries that do NOT have a GDP greater than 500 billion. Use EXCEPT to subtract the high-GDP set from all European countries.",
    difficulty: "Medium",
    starterCode:
      "SELECT name FROM world WHERE continent = 'Europe'\n___\nSELECT name FROM world WHERE gdp > 500000000000",
    solution:
      "SELECT name FROM world WHERE continent = 'Europe' EXCEPT SELECT name FROM world WHERE gdp > 500000000000",
    hints: [
      "EXCEPT returns rows from the first query that are NOT in the second.",
      "It is the set difference: A minus B.",
    ],
    concepts: ["EXCEPT"],
    dataset: "world",
  },
  {
    id: "union-operations-7",
    sectionId: "union-operations",
    orderIndex: 6,
    title: "Three-Way UNION",
    description:
      "Combine three lists: (1) countries with population > 200M, (2) countries with area > 5M sq km, (3) countries with GDP > 5 trillion. Show name only, no duplicates.",
    difficulty: "Medium",
    starterCode:
      "SELECT name FROM world WHERE population > 200000000\nUNION\nSELECT name FROM world WHERE area > 5000000\n___\nSELECT name FROM world WHERE gdp > 5000000000000",
    solution:
      "SELECT name FROM world WHERE population > 200000000 UNION SELECT name FROM world WHERE area > 5000000 UNION SELECT name FROM world WHERE gdp > 5000000000000",
    hints: [
      "You can chain multiple UNION statements.",
      "UNION automatically removes duplicates across all sets.",
    ],
    concepts: ["UNION", "multiple sets"],
    dataset: "world",
  },
  {
    id: "union-operations-8",
    sectionId: "union-operations",
    orderIndex: 7,
    title: "UNION with Aggregates",
    description:
      "Show a summary: the total population of Asia labeled 'Asia Pop', and the total population of Europe labeled 'Europe Pop'. Each row should have a label and a total.",
    difficulty: "Hard",
    starterCode:
      "SELECT 'Asia Pop' AS label, SUM(population) AS total FROM world WHERE continent = ___\nUNION\nSELECT '___' AS label, SUM(population) AS total FROM world WHERE continent = ___",
    solution:
      "SELECT 'Asia Pop' AS label, SUM(population) AS total FROM world WHERE continent = 'Asia' UNION SELECT 'Europe Pop' AS label, SUM(population) AS total FROM world WHERE continent = 'Europe'",
    hints: [
      "Each SELECT can use aggregate functions independently.",
      "The UNION combines the two summary rows.",
    ],
    concepts: ["UNION", "SUM", "aggregate", "literal column"],
    dataset: "world",
  },
  {
    id: "cte-practice-1",
    sectionId: "cte-practice",
    orderIndex: 0,
    title: "Basic CTE",
    description:
      "Use a CTE called 'big' to find countries with population > 100 million, then SELECT all from the CTE.",
    difficulty: "Easy",
    starterCode:
      "WITH big AS (\n  SELECT name, population FROM world\n  WHERE population > ___\n)\nSELECT * FROM big",
    solution:
      "WITH big AS (SELECT name, population FROM world WHERE population > 100000000) SELECT * FROM big",
    hints: [
      "WITH name AS (query) defines a CTE.",
      "You can then SELECT from the CTE like a regular table.",
    ],
    concepts: ["WITH", "CTE"],
    dataset: "world",
  },
  {
    id: "cte-practice-2",
    sectionId: "cte-practice",
    orderIndex: 1,
    title: "CTE with Aggregation",
    description:
      "Use a CTE called 'continent_stats' to compute the total population and average GDP per continent. Then show only continents with total population > 500 million.",
    difficulty: "Medium",
    starterCode:
      "WITH continent_stats AS (\n  SELECT continent,\n    SUM(population) AS total_pop,\n    ROUND(AVG(gdp)) AS avg_gdp\n  FROM world\n  GROUP BY ___\n)\nSELECT * FROM continent_stats\nWHERE total_pop > ___",
    solution:
      "WITH continent_stats AS (SELECT continent, SUM(population) AS total_pop, ROUND(AVG(gdp)) AS avg_gdp FROM world GROUP BY continent) SELECT * FROM continent_stats WHERE total_pop > 500000000",
    hints: [
      "GROUP BY continent inside the CTE aggregates per continent.",
      "The outer query filters the CTE results.",
    ],
    concepts: ["WITH", "CTE", "SUM", "AVG", "GROUP BY"],
    dataset: "world",
  },
  {
    id: "cte-practice-3",
    sectionId: "cte-practice",
    orderIndex: 2,
    title: "Multiple CTEs",
    description:
      "Define two CTEs: 'rich' (countries with GDP > 1 trillion) and 'big' (countries with population > 100M). Then find countries that are in both CTEs using a JOIN.",
    difficulty: "Medium",
    starterCode:
      "WITH rich AS (\n  SELECT name FROM world WHERE gdp > 1000000000000\n),\nbig AS (\n  SELECT name FROM world WHERE population > ___\n)\nSELECT rich.name FROM rich\nJOIN big ON rich.name = big.___",
    solution:
      "WITH rich AS (SELECT name FROM world WHERE gdp > 1000000000000), big AS (SELECT name FROM world WHERE population > 100000000) SELECT rich.name FROM rich JOIN big ON rich.name = big.name",
    hints: [
      "Separate multiple CTEs with commas, no extra WITH keyword.",
      "JOIN the two CTEs on the common column (name).",
    ],
    concepts: ["WITH", "CTE", "multiple CTEs", "JOIN"],
    dataset: "world",
  },
  {
    id: "cte-practice-4",
    sectionId: "cte-practice",
    orderIndex: 3,
    title: "CTE for Ranking",
    description:
      "Use a CTE to add a rank column to European countries by population (descending). Then show only the top 5.",
    difficulty: "Medium",
    starterCode:
      "WITH ranked AS (\n  SELECT name, population,\n    ROW_NUMBER() OVER (ORDER BY population ___) AS rnk\n  FROM world\n  WHERE continent = 'Europe'\n)\nSELECT name, population, rnk FROM ranked\nWHERE rnk <= ___",
    solution:
      "WITH ranked AS (SELECT name, population, ROW_NUMBER() OVER (ORDER BY population DESC) AS rnk FROM world WHERE continent = 'Europe') SELECT name, population, rnk FROM ranked WHERE rnk <= 5",
    hints: [
      "ROW_NUMBER() OVER (ORDER BY population DESC) assigns 1 to the largest.",
      "Filter rnk <= 5 in the outer query to get top 5.",
    ],
    concepts: ["WITH", "CTE", "ROW_NUMBER", "OVER", "ORDER BY"],
    dataset: "world",
  },
  {
    id: "cte-practice-5",
    sectionId: "cte-practice",
    orderIndex: 4,
    title: "CTE Replacing Subquery",
    description:
      "Rewrite this query using a CTE: SELECT name FROM world WHERE population > (SELECT AVG(population) FROM world). Name the CTE 'avg_pop'.",
    difficulty: "Easy",
    starterCode:
      "WITH avg_pop AS (\n  SELECT AVG(population) AS avg_val FROM world\n)\nSELECT name FROM world, avg_pop\nWHERE population > ___",
    solution:
      "WITH avg_pop AS (SELECT AVG(population) AS avg_val FROM world) SELECT name FROM world, avg_pop WHERE population > avg_pop.avg_val",
    hints: [
      "Cross join the CTE with world to access the avg_val.",
      "avg_pop.avg_val references the computed average.",
    ],
    concepts: ["WITH", "CTE", "AVG", "cross join"],
    dataset: "world",
  },
  {
    id: "cte-practice-6",
    sectionId: "cte-practice",
    orderIndex: 5,
    title: "CTE with CASE",
    description:
      "Use a CTE called 'classified' to add a 'size' column: 'Large' if population > 100M, 'Medium' if > 10M, else 'Small'. Then count countries per size category.",
    difficulty: "Hard",
    starterCode:
      "WITH classified AS (\n  SELECT name,\n    CASE\n      WHEN population > 100000000 THEN '___'\n      WHEN population > 10000000 THEN '___'\n      ELSE '___'\n    END AS size\n  FROM world\n)\nSELECT size, COUNT(*) AS cnt\nFROM classified\nGROUP BY ___\nORDER BY cnt DESC",
    solution:
      "WITH classified AS (SELECT name, CASE WHEN population > 100000000 THEN 'Large' WHEN population > 10000000 THEN 'Medium' ELSE 'Small' END AS size FROM world) SELECT size, COUNT(*) AS cnt FROM classified GROUP BY size ORDER BY cnt DESC",
    hints: [
      "CASE in the CTE classifies each row.",
      "The outer query groups by the computed 'size' column.",
    ],
    concepts: ["WITH", "CTE", "CASE", "COUNT", "GROUP BY"],
    dataset: "world",
  },
  {
    id: "cte-practice-7",
    sectionId: "cte-practice",
    orderIndex: 6,
    title: "Chained CTEs",
    description:
      "Define CTE 'european' for European countries, then CTE 'ranked_european' that ranks them by GDP. Show the top 3.",
    difficulty: "Hard",
    starterCode:
      "WITH european AS (\n  SELECT name, gdp FROM world\n  WHERE continent = 'Europe' AND gdp IS NOT NULL\n),\nranked_european AS (\n  SELECT name, gdp,\n    RANK() OVER (ORDER BY gdp ___) AS rnk\n  FROM european\n)\nSELECT name, gdp, rnk FROM ranked_european\nWHERE rnk <= ___",
    solution:
      "WITH european AS (SELECT name, gdp FROM world WHERE continent = 'Europe' AND gdp IS NOT NULL), ranked_european AS (SELECT name, gdp, RANK() OVER (ORDER BY gdp DESC) AS rnk FROM european) SELECT name, gdp, rnk FROM ranked_european WHERE rnk <= 3",
    hints: [
      "A second CTE can reference the first CTE.",
      "This creates a pipeline: filter → rank → select top.",
    ],
    concepts: ["WITH", "CTE", "chained CTEs", "RANK", "OVER"],
    dataset: "world",
  },
  {
    id: "cte-practice-8",
    sectionId: "cte-practice",
    orderIndex: 7,
    title: "CTE for Continent Summary",
    description:
      "Use a CTE 'cont_summary' to get each continent's total GDP and country count. Then find continents where the average GDP per country exceeds 500 billion.",
    difficulty: "Hard",
    starterCode:
      "WITH cont_summary AS (\n  SELECT continent,\n    SUM(gdp) AS total_gdp,\n    COUNT(*) AS country_count\n  FROM world\n  WHERE gdp IS NOT NULL\n  GROUP BY continent\n)\nSELECT continent, total_gdp, country_count,\n  ROUND(total_gdp * 1.0 / country_count) AS avg_gdp_per_country\nFROM cont_summary\nWHERE total_gdp * 1.0 / country_count > ___",
    solution:
      "WITH cont_summary AS (SELECT continent, SUM(gdp) AS total_gdp, COUNT(*) AS country_count FROM world WHERE gdp IS NOT NULL GROUP BY continent) SELECT continent, total_gdp, country_count, ROUND(total_gdp * 1.0 / country_count) AS avg_gdp_per_country FROM cont_summary WHERE total_gdp * 1.0 / country_count > 500000000000",
    hints: [
      "total_gdp / country_count gives the average GDP per country.",
      "Multiply by 1.0 for decimal division.",
      "500 billion = 500000000000.",
    ],
    concepts: ["WITH", "CTE", "SUM", "COUNT", "ROUND", "GROUP BY"],
    dataset: "world",
  },
];
