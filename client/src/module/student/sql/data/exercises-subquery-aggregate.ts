import type { SqlExercise } from "./exercises";

export const exercisesSubqueryAggregate: SqlExercise[] = [
  {
    id: "select-in-select-1",
    sectionId: "select-in-select",
    orderIndex: 0,
    title: "Bigger than Russia",
    description:
      "List each country name where the population is larger than that of Russia.",
    difficulty: "Medium",
    starterCode:
      "SELECT name FROM world\n WHERE population > (\n   SELECT population FROM world WHERE name = ___\n )",
    solution:
      "SELECT name FROM world WHERE population > (SELECT population FROM world WHERE name = 'Russia')",
    hints: [
      "Use a subquery to get Russia's population.",
      "The subquery goes inside parentheses in the WHERE clause.",
      "SELECT population FROM world WHERE name = 'Russia' gives you the value to compare against.",
    ],
    concepts: ["SELECT", "WHERE", "subquery"],
    dataset: "world",
  },
  {
    id: "select-in-select-2",
    sectionId: "select-in-select",
    orderIndex: 1,
    title: "Richer than UK",
    description:
      "Show the countries in Europe with a per capita GDP greater than that of the United Kingdom. Per capita GDP is gdp/population.",
    difficulty: "Medium",
    starterCode:
      "SELECT name FROM world\n WHERE continent = 'Europe'\n   AND gdp/population > (\n     SELECT ___ FROM world WHERE name = ___\n   )",
    solution:
      "SELECT name FROM world WHERE continent = 'Europe' AND gdp/population > (SELECT gdp/population FROM world WHERE name = 'United Kingdom')",
    hints: [
      "Calculate per capita GDP as gdp/population.",
      "The subquery also calculates gdp/population for the UK.",
      "Filter to Europe with continent = 'Europe'.",
    ],
    concepts: ["SELECT", "WHERE", "subquery", "arithmetic"],
    dataset: "world",
  },
  {
    id: "select-in-select-3",
    sectionId: "select-in-select",
    orderIndex: 2,
    title: "Neighbours of Argentina and Australia",
    description:
      "List the name and continent of countries in the continents containing either Argentina or Australia. Order by country name.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, continent FROM world\n WHERE continent IN (\n   SELECT continent FROM world WHERE name IN (___)\n )\n ORDER BY name",
    solution:
      "SELECT name, continent FROM world WHERE continent IN (SELECT continent FROM world WHERE name IN ('Argentina', 'Australia')) ORDER BY name",
    hints: [
      "First find the continents of Argentina and Australia using a subquery.",
      "Then select all countries in those continents.",
      "The subquery returns the continent values to match against.",
    ],
    concepts: ["SELECT", "WHERE", "IN", "subquery", "ORDER BY"],
    dataset: "world",
  },
  {
    id: "select-in-select-4",
    sectionId: "select-in-select",
    orderIndex: 3,
    title: "Between Canada and Poland",
    description:
      "Show the countries with a population between that of Canada and Poland (exclusive). Show name and population.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, population FROM world\n WHERE population > (SELECT population FROM world WHERE name = ___)\n   AND population < (SELECT population FROM world WHERE name = ___)",
    solution:
      "SELECT name, population FROM world WHERE population > (SELECT population FROM world WHERE name = 'Canada') AND population < (SELECT population FROM world WHERE name = 'Poland')",
    hints: [
      "Use two subqueries: one for Canada's population, one for Poland's.",
      "Compare using > and < (exclusive range).",
      "Check which country has the larger population to set the correct direction.",
    ],
    concepts: ["SELECT", "WHERE", "subquery", "AND"],
    dataset: "world",
  },
  {
    id: "select-in-select-5",
    sectionId: "select-in-select",
    orderIndex: 4,
    title: "Population as Percentage of Germany",
    description:
      "Show the name and population of each country in Europe as a percentage of Germany's population. Format it using the || operator and '%' sign.",
    difficulty: "Hard",
    starterCode:
      "SELECT name,\n  ___ || '%'\n FROM world\n WHERE continent = 'Europe'",
    solution:
      "SELECT name, CAST(ROUND(population * 100.0 / (SELECT population FROM world WHERE name = 'Germany'), 0) AS INTEGER) || '%' FROM world WHERE continent = 'Europe'",
    hints: [
      "Calculate percentage: population * 100.0 / germany_population.",
      "Use a subquery for Germany's population.",
      "In SQLite, use || to concatenate the '%' symbol.",
    ],
    concepts: ["SELECT", "WHERE", "subquery", "arithmetic", "ROUND", "string concatenation"],
    dataset: "world",
  },
  {
    id: "select-in-select-6",
    sectionId: "select-in-select",
    orderIndex: 5,
    title: "Bigger than Every Country in Europe",
    description:
      "Which countries have a GDP greater than every country in Europe? List the name only. (Some countries may have NULL GDP.)",
    difficulty: "Hard",
    starterCode:
      "SELECT name FROM world\n WHERE gdp > (\n   SELECT MAX(___) FROM world WHERE continent = ___\n )",
    solution:
      "SELECT name FROM world WHERE gdp > (SELECT MAX(gdp) FROM world WHERE continent = 'Europe')",
    hints: [
      "Use MAX(gdp) to find the largest GDP in Europe.",
      "'Greater than every' means greater than the maximum.",
      "A subquery with MAX avoids needing ALL keyword.",
    ],
    concepts: ["SELECT", "WHERE", "subquery", "MAX"],
    dataset: "world",
  },
  {
    id: "select-in-select-7",
    sectionId: "select-in-select",
    orderIndex: 6,
    title: "Largest in Each Continent",
    description:
      "Find the largest country (by area) in each continent. Show the continent, name, and area. Use a correlated subquery.",
    difficulty: "Hard",
    starterCode:
      "SELECT continent, name, area FROM world x\n WHERE area >= ALL (\n   SELECT area FROM world y\n   WHERE ___\n )",
    solution:
      "SELECT continent, name, area FROM world x WHERE area = (SELECT MAX(area) FROM world y WHERE y.continent = x.continent)",
    hints: [
      "A correlated subquery references the outer query's row.",
      "For each row, find the MAX area in the same continent.",
      "Use table aliases: x for outer, y for inner.",
    ],
    concepts: ["SELECT", "WHERE", "correlated subquery", "MAX"],
    dataset: "world",
  },
  {
    id: "select-in-select-8",
    sectionId: "select-in-select",
    orderIndex: 7,
    title: "First Alphabetically in Each Continent",
    description:
      "List each continent and the name of the country that comes first alphabetically.",
    difficulty: "Hard",
    starterCode:
      "SELECT continent, name FROM world x\n WHERE name = (\n   SELECT MIN(___) FROM world y\n   WHERE ___\n )",
    solution:
      "SELECT continent, name FROM world x WHERE name = (SELECT MIN(name) FROM world y WHERE y.continent = x.continent)",
    hints: [
      "MIN(name) gives the alphabetically first name.",
      "Correlate the subquery by matching continents.",
      "Use x.continent = y.continent to correlate.",
    ],
    concepts: ["SELECT", "WHERE", "correlated subquery", "MIN"],
    dataset: "world",
  },
  {
    id: "sum-and-count-1",
    sectionId: "sum-and-count",
    orderIndex: 0,
    title: "Total World Population",
    description:
      "Show the total population of the world.",
    difficulty: "Easy",
    starterCode: "SELECT ___(population) FROM world",
    solution: "SELECT SUM(population) FROM world",
    hints: [
      "SUM() adds up all values in a column.",
      "SELECT SUM(population) FROM world.",
    ],
    concepts: ["SELECT", "SUM"],
    dataset: "world",
  },
  {
    id: "sum-and-count-2",
    sectionId: "sum-and-count",
    orderIndex: 1,
    title: "List of Continents",
    description:
      "List all the continents - just once each. Use DISTINCT.",
    difficulty: "Easy",
    starterCode: "SELECT ___ continent FROM world",
    solution: "SELECT DISTINCT continent FROM world",
    hints: [
      "DISTINCT removes duplicate values.",
      "Place DISTINCT after SELECT.",
    ],
    concepts: ["SELECT", "DISTINCT"],
    dataset: "world",
  },
  {
    id: "sum-and-count-3",
    sectionId: "sum-and-count",
    orderIndex: 2,
    title: "GDP of Africa",
    description: "Show the total GDP of Africa.",
    difficulty: "Easy",
    starterCode:
      "SELECT SUM(gdp) FROM world\n WHERE continent = ___",
    solution:
      "SELECT SUM(gdp) FROM world WHERE continent = 'Africa'",
    hints: [
      "Filter to Africa, then SUM the gdp column.",
      "Use WHERE continent = 'Africa'.",
    ],
    concepts: ["SELECT", "SUM", "WHERE"],
    dataset: "world",
  },
  {
    id: "sum-and-count-4",
    sectionId: "sum-and-count",
    orderIndex: 3,
    title: "Count Big Countries",
    description:
      "How many countries have an area of at least 1,000,000 sq km?",
    difficulty: "Easy",
    starterCode: "SELECT COUNT(___) FROM world\n WHERE area >= ___",
    solution: "SELECT COUNT(name) FROM world WHERE area >= 1000000",
    hints: [
      "COUNT() counts the number of rows.",
      "Filter first with WHERE, then count.",
    ],
    concepts: ["SELECT", "COUNT", "WHERE"],
    dataset: "world",
  },
  {
    id: "sum-and-count-5",
    sectionId: "sum-and-count",
    orderIndex: 4,
    title: "Baltic States Population",
    description:
      "Show the total population of Estonia, Latvia, and Lithuania.",
    difficulty: "Easy",
    starterCode:
      "SELECT SUM(population) FROM world\n WHERE name IN (___)",
    solution:
      "SELECT SUM(population) FROM world WHERE name IN ('Estonia', 'Latvia', 'Lithuania')",
    hints: [
      "Use IN to filter to the three Baltic states.",
      "Then SUM their populations.",
    ],
    concepts: ["SELECT", "SUM", "WHERE", "IN"],
    dataset: "world",
  },
  {
    id: "sum-and-count-6",
    sectionId: "sum-and-count",
    orderIndex: 5,
    title: "Count by Continent",
    description:
      "For each continent, show the continent and the number of countries. Use GROUP BY.",
    difficulty: "Medium",
    starterCode:
      "SELECT continent, COUNT(___)\n FROM world\n GROUP BY ___",
    solution:
      "SELECT continent, COUNT(name) FROM world GROUP BY continent",
    hints: [
      "GROUP BY groups rows with the same value.",
      "COUNT(name) counts countries in each group.",
      "Group by continent to get one row per continent.",
    ],
    concepts: ["SELECT", "COUNT", "GROUP BY"],
    dataset: "world",
  },
  {
    id: "sum-and-count-7",
    sectionId: "sum-and-count",
    orderIndex: 6,
    title: "Big Countries by Continent",
    description:
      "For each continent, show the number of countries that have a population of at least 10 million.",
    difficulty: "Medium",
    starterCode:
      "SELECT continent, COUNT(name)\n FROM world\n WHERE population >= ___\n GROUP BY ___",
    solution:
      "SELECT continent, COUNT(name) FROM world WHERE population >= 10000000 GROUP BY continent",
    hints: [
      "Filter BEFORE grouping using WHERE.",
      "WHERE runs before GROUP BY; HAVING runs after.",
      "10 million = 10000000.",
    ],
    concepts: ["SELECT", "COUNT", "WHERE", "GROUP BY"],
    dataset: "world",
  },
  {
    id: "sum-and-count-8",
    sectionId: "sum-and-count",
    orderIndex: 7,
    title: "Counting Big Continents",
    description:
      "List the continents that have a total population of at least 100 million. Use HAVING to filter groups.",
    difficulty: "Medium",
    starterCode:
      "SELECT continent FROM world\n GROUP BY continent\n HAVING SUM(___) >= ___",
    solution:
      "SELECT continent FROM world GROUP BY continent HAVING SUM(population) >= 100000000",
    hints: [
      "HAVING filters groups (after GROUP BY). WHERE filters rows (before GROUP BY).",
      "Use HAVING SUM(population) >= 100000000.",
      "100 million = 100000000.",
    ],
    concepts: ["SELECT", "GROUP BY", "HAVING", "SUM"],
    dataset: "world",
  },
];
