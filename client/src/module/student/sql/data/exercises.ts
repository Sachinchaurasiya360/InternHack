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
];

export const exercises: SqlExercise[] = [
  // ─── Section 0: SELECT Basics ───────────────────────────────────────
  {
    id: "select-basics-1",
    sectionId: "select-basics",
    orderIndex: 0,
    title: "Population of Germany",
    description:
      "The example uses a WHERE clause to show the population of France. Modify it to show the population of Germany.",
    difficulty: "Easy",
    starterCode: "SELECT population FROM world\n WHERE name = 'France'",
    solution: "SELECT population FROM world WHERE name = 'Germany'",
    hints: [
      "Change the country name in the WHERE clause.",
      "Use single quotes around the country name: 'Germany'.",
    ],
    concepts: ["SELECT", "WHERE"],
    dataset: "world",
  },
  {
    id: "select-basics-2",
    sectionId: "select-basics",
    orderIndex: 1,
    title: "Scandinavia",
    description:
      "Show the name and population for Sweden, Norway, and Denmark. Use the IN keyword to check against a list of values.",
    difficulty: "Easy",
    starterCode: "SELECT name, population FROM world\n WHERE name IN ( )",
    solution:
      "SELECT name, population FROM world WHERE name IN ('Sweden', 'Norway', 'Denmark')",
    hints: [
      "The IN keyword lets you test against a list of values.",
      "Put each country name in single quotes, separated by commas.",
      "IN ('Sweden', 'Norway', 'Denmark')",
    ],
    concepts: ["SELECT", "WHERE", "IN"],
    dataset: "world",
  },
  {
    id: "select-basics-3",
    sectionId: "select-basics",
    orderIndex: 2,
    title: "Just the Right Size",
    description:
      "Show the country name and area for countries with an area between 200,000 and 250,000 (inclusive).",
    difficulty: "Easy",
    starterCode: "SELECT name, area FROM world\n WHERE area BETWEEN ___ AND ___",
    solution:
      "SELECT name, area FROM world WHERE area BETWEEN 200000 AND 250000",
    hints: [
      "BETWEEN includes both boundary values.",
      "Use numeric values without commas: 200000 and 250000.",
    ],
    concepts: ["SELECT", "WHERE", "BETWEEN"],
    dataset: "world",
  },

  // ─── Section 1: SELECT Names ────────────────────────────────────────
  {
    id: "select-names-1",
    sectionId: "select-names",
    orderIndex: 0,
    title: "Countries Starting with Y",
    description: "Find the countries that start with the letter Y.",
    difficulty: "Easy",
    starterCode: "SELECT name FROM world\n WHERE name LIKE ''",
    solution: "SELECT name FROM world WHERE name LIKE 'Y%'",
    hints: [
      "Use the LIKE operator for pattern matching.",
      "The % wildcard matches any sequence of characters.",
      "'Y%' matches any string starting with Y.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE"],
    dataset: "world",
  },
  {
    id: "select-names-2",
    sectionId: "select-names",
    orderIndex: 1,
    title: "Countries Ending with y",
    description: "Find the countries that end with the letter y.",
    difficulty: "Easy",
    starterCode: "SELECT name FROM world\n WHERE name LIKE ''",
    solution: "SELECT name FROM world WHERE name LIKE '%y'",
    hints: [
      "Put the % wildcard before the letter to match endings.",
      "'%y' matches any string ending with y.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE"],
    dataset: "world",
  },
  {
    id: "select-names-3",
    sectionId: "select-names",
    orderIndex: 2,
    title: "Countries Containing x",
    description:
      "Find the countries that contain the letter x. Luxembourg is one such country.",
    difficulty: "Easy",
    starterCode: "SELECT name FROM world\n WHERE name LIKE ''",
    solution: "SELECT name FROM world WHERE name LIKE '%x%'",
    hints: [
      "Place % on both sides of the character to search anywhere in the string.",
      "'%x%' matches x in any position.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE"],
    dataset: "world",
  },
  {
    id: "select-names-4",
    sectionId: "select-names",
    orderIndex: 3,
    title: "Countries Ending with land",
    description:
      "Find the countries that end with 'land'. Iceland and Switzerland are examples.",
    difficulty: "Easy",
    starterCode: "SELECT name FROM world\n WHERE name LIKE ''",
    solution: "SELECT name FROM world WHERE name LIKE '%land'",
    hints: [
      "Use the LIKE operator with % before the pattern.",
      "'%land' matches any name ending with 'land'.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE"],
    dataset: "world",
  },
  {
    id: "select-names-5",
    sectionId: "select-names",
    orderIndex: 4,
    title: "Countries Starting with C Ending with ia",
    description:
      "Find the countries that start with 'C' and end with 'ia'. Colombia is one.",
    difficulty: "Easy",
    starterCode: "SELECT name FROM world\n WHERE name LIKE ''",
    solution: "SELECT name FROM world WHERE name LIKE 'C%ia'",
    hints: [
      "You can combine fixed characters with the % wildcard.",
      "'C%ia' means starts with C, ends with ia, anything in between.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE"],
    dataset: "world",
  },
  {
    id: "select-names-6",
    sectionId: "select-names",
    orderIndex: 5,
    title: "Countries with oo in Name",
    description:
      "Find the countries that have 'oo' in the name. Cameroon is one.",
    difficulty: "Easy",
    starterCode: "SELECT name FROM world\n WHERE name LIKE ''",
    solution: "SELECT name FROM world WHERE name LIKE '%oo%'",
    hints: [
      "Search for 'oo' anywhere in the name.",
      "Use '%oo%' to match oo in any position.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE"],
    dataset: "world",
  },
  {
    id: "select-names-7",
    sectionId: "select-names",
    orderIndex: 6,
    title: "Countries with Three or More a",
    description:
      "Find the countries that have three or more 'a' in the name. Canada has three a's.",
    difficulty: "Medium",
    starterCode: "SELECT name FROM world\n WHERE name LIKE ''",
    solution: "SELECT name FROM world WHERE name LIKE '%a%a%a%'",
    hints: [
      "Each 'a' needs a surrounding % wildcard to allow other characters.",
      "Three a's with wildcards between them: '%a%a%a%'.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE"],
    dataset: "world",
  },
  {
    id: "select-names-8",
    sectionId: "select-names",
    orderIndex: 7,
    title: "Countries with t as Second Character",
    description:
      "Find the countries that have 't' as the second character. Use the underscore _ wildcard for a single character.",
    difficulty: "Easy",
    starterCode: "SELECT name FROM world\n WHERE name LIKE ''",
    solution: "SELECT name FROM world WHERE name LIKE '_t%'",
    hints: [
      "The _ wildcard matches exactly one character.",
      "'_t%' means: any single character, then t, then anything.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE", "underscore wildcard"],
    dataset: "world",
  },
  {
    id: "select-names-9",
    sectionId: "select-names",
    orderIndex: 8,
    title: "Two o Separated by Two Characters",
    description:
      "Find the countries that have two 'o' characters separated by exactly two other characters.",
    difficulty: "Medium",
    starterCode: "SELECT name FROM world\n WHERE name LIKE ''",
    solution: "SELECT name FROM world WHERE name LIKE '%o__o%'",
    hints: [
      "Use _ for each single character between the two o letters.",
      "'%o__o%' means: o, then any two characters, then o.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE", "underscore wildcard"],
    dataset: "world",
  },
  {
    id: "select-names-10",
    sectionId: "select-names",
    orderIndex: 9,
    title: "Countries with Exactly Four Characters",
    description:
      "Find the countries that have exactly four characters. Cuba, Iran, and Iraq are examples.",
    difficulty: "Easy",
    starterCode: "SELECT name FROM world\n WHERE",
    solution: "SELECT name FROM world WHERE LENGTH(name) = 4",
    hints: [
      "Use the LENGTH() function to count characters in a string.",
      "You could also use LIKE '____' (four underscores).",
    ],
    concepts: ["SELECT", "WHERE", "LENGTH"],
    dataset: "world",
  },

  // ─── Section 2: SELECT from World ───────────────────────────────────
  {
    id: "select-world-1",
    sectionId: "select-world",
    orderIndex: 0,
    title: "Introduction",
    description:
      "Show the name, continent, and population of all countries in the world table.",
    difficulty: "Easy",
    starterCode: "SELECT ___, ___, ___\n FROM world",
    solution: "SELECT name, continent, population FROM world",
    hints: [
      "List the three column names separated by commas after SELECT.",
      "The columns are: name, continent, population.",
    ],
    concepts: ["SELECT"],
    dataset: "world",
  },
  {
    id: "select-world-2",
    sectionId: "select-world",
    orderIndex: 1,
    title: "Large Countries",
    description:
      "Show the name of countries that have a population of at least 200 million (200000000).",
    difficulty: "Easy",
    starterCode: "SELECT name FROM world\n WHERE population ___",
    solution: "SELECT name FROM world WHERE population >= 200000000",
    hints: [
      "Use >= for 'at least'.",
      "200 million is written as 200000000 (no commas in SQL).",
    ],
    concepts: ["SELECT", "WHERE", "comparison operators"],
    dataset: "world",
  },
  {
    id: "select-world-3",
    sectionId: "select-world",
    orderIndex: 2,
    title: "Per Capita GDP",
    description:
      "Show the name and per capita GDP (gdp/population) for countries with population >= 200 million.",
    difficulty: "Easy",
    starterCode:
      "SELECT name, ___\n FROM world\n WHERE population >= 200000000",
    solution:
      "SELECT name, gdp/population FROM world WHERE population >= 200000000",
    hints: [
      "Per capita GDP is calculated by dividing gdp by population.",
      "Use gdp/population as a computed column.",
    ],
    concepts: ["SELECT", "WHERE", "arithmetic"],
    dataset: "world",
  },
  {
    id: "select-world-4",
    sectionId: "select-world",
    orderIndex: 3,
    title: "South America in Millions",
    description:
      "Show the name and population in millions for the countries of South America. Divide population by 1000000 to get the value in millions.",
    difficulty: "Easy",
    starterCode: "SELECT name, ___\n FROM world\n WHERE continent = ___",
    solution:
      "SELECT name, population/1000000 FROM world WHERE continent = 'South America'",
    hints: [
      "Divide population by 1000000 to convert to millions.",
      "Filter continent = 'South America'.",
    ],
    concepts: ["SELECT", "WHERE", "arithmetic"],
    dataset: "world",
  },
  {
    id: "select-world-5",
    sectionId: "select-world",
    orderIndex: 4,
    title: "France, Germany, Italy",
    description:
      "Show the name and population for France, Germany, and Italy.",
    difficulty: "Easy",
    starterCode: "SELECT name, population\n FROM world\n WHERE name IN (___)",
    solution:
      "SELECT name, population FROM world WHERE name IN ('France', 'Germany', 'Italy')",
    hints: [
      "Use the IN operator with a list of country names.",
      "Each country name must be in single quotes.",
    ],
    concepts: ["SELECT", "WHERE", "IN"],
    dataset: "world",
  },
  {
    id: "select-world-6",
    sectionId: "select-world",
    orderIndex: 5,
    title: "United",
    description:
      "Show the countries that have a name that includes the word 'United'.",
    difficulty: "Easy",
    starterCode: "SELECT name FROM world\n WHERE name LIKE ___",
    solution: "SELECT name FROM world WHERE name LIKE '%United%'",
    hints: [
      "Use LIKE with % wildcards on both sides.",
      "'%United%' matches United anywhere in the name.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE"],
    dataset: "world",
  },
  {
    id: "select-world-7",
    sectionId: "select-world",
    orderIndex: 6,
    title: "Two Ways to be Big",
    description:
      "A country is big if it has an area of more than 3 million sq km or a population of more than 250 million. Show the countries that are big by area or big by population. Show name, population, and area.",
    difficulty: "Easy",
    starterCode:
      "SELECT name, population, area\n FROM world\n WHERE area > ___ OR population > ___",
    solution:
      "SELECT name, population, area FROM world WHERE area > 3000000 OR population > 250000000",
    hints: [
      "Use OR to combine two conditions.",
      "3 million = 3000000, 250 million = 250000000.",
    ],
    concepts: ["SELECT", "WHERE", "OR"],
    dataset: "world",
  },
  {
    id: "select-world-8",
    sectionId: "select-world",
    orderIndex: 7,
    title: "One or the Other (XOR)",
    description:
      "Exclusive OR (XOR): Show countries that are big by area (> 3 million) or big by population (> 250 million), but not both. Show name, population, and area.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, population, area\n FROM world\n WHERE (area > 3000000 OR population > 250000000)\n   AND NOT (___)",
    solution:
      "SELECT name, population, area FROM world WHERE (area > 3000000 OR population > 250000000) AND NOT (area > 3000000 AND population > 250000000)",
    hints: [
      "XOR means one condition is true but not both.",
      "Use (A OR B) AND NOT (A AND B) to express XOR.",
      "Exclude rows where both conditions are true using AND NOT.",
    ],
    concepts: ["SELECT", "WHERE", "OR", "AND", "NOT", "XOR logic"],
    dataset: "world",
  },
  {
    id: "select-world-9",
    sectionId: "select-world",
    orderIndex: 8,
    title: "Rounding",
    description:
      "For South America, show population in millions and GDP in billions, both rounded to 2 decimal places. Divide population by 1000000 and gdp by 1000000000.",
    difficulty: "Medium",
    starterCode:
      "SELECT name,\n  ROUND(___, 2),\n  ROUND(___, 2)\n FROM world\n WHERE continent = 'South America'",
    solution:
      "SELECT name, ROUND(population/1000000.0, 2), ROUND(gdp/1000000000.0, 2) FROM world WHERE continent = 'South America'",
    hints: [
      "Use ROUND(value, 2) to round to 2 decimal places.",
      "Divide by 1000000.0 (with decimal) to get floating point division in SQLite.",
    ],
    concepts: ["SELECT", "WHERE", "ROUND", "arithmetic"],
    dataset: "world",
  },
  {
    id: "select-world-10",
    sectionId: "select-world",
    orderIndex: 9,
    title: "Trillion Dollar Economies",
    description:
      "Show the per-capita GDP for those countries with a GDP of at least one trillion (1000000000000). Round the value to the nearest $1000. Per-capita GDP is gdp/population.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, ROUND(___)\n FROM world\n WHERE gdp >= ___",
    solution:
      "SELECT name, ROUND(gdp/population, -3) FROM world WHERE gdp >= 1000000000000",
    hints: [
      "A trillion is 1000000000000.",
      "ROUND(value, -3) rounds to the nearest thousand.",
      "Per-capita GDP = gdp/population.",
    ],
    concepts: ["SELECT", "WHERE", "ROUND", "arithmetic"],
    dataset: "world",
  },
  {
    id: "select-world-11",
    sectionId: "select-world",
    orderIndex: 10,
    title: "Name and Capital Same Length",
    description:
      "Show the name and capital where the name and the capital have the same number of characters. Use the LENGTH() function.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, capital FROM world\n WHERE LENGTH(___) = LENGTH(___)",
    solution:
      "SELECT name, capital FROM world WHERE LENGTH(name) = LENGTH(capital)",
    hints: [
      "LENGTH(string) returns the number of characters.",
      "Compare LENGTH(name) with LENGTH(capital).",
    ],
    concepts: ["SELECT", "WHERE", "LENGTH"],
    dataset: "world",
  },
  {
    id: "select-world-12",
    sectionId: "select-world",
    orderIndex: 11,
    title: "Matching Name and Capital",
    description:
      "Show the name and capital where the first letter of each match. Do not include countries where the name and capital are the same word. Use SUBSTR(str, start, len).",
    difficulty: "Medium",
    starterCode:
      "SELECT name, capital FROM world\n WHERE SUBSTR(___, 1, 1) = SUBSTR(___, 1, 1)\n   AND ___",
    solution:
      "SELECT name, capital FROM world WHERE SUBSTR(name, 1, 1) = SUBSTR(capital, 1, 1) AND name <> capital",
    hints: [
      "SUBSTR(name, 1, 1) gives the first letter of name.",
      "Use <> (not equal) to exclude countries where name equals capital.",
      "In SQLite, use SUBSTR instead of LEFT.",
    ],
    concepts: ["SELECT", "WHERE", "SUBSTR", "comparison operators"],
    dataset: "world",
  },
  {
    id: "select-world-13",
    sectionId: "select-world",
    orderIndex: 12,
    title: "All Vowels No Spaces",
    description:
      "Find the country that has all the vowels (a, e, i, o, u) in its name and no spaces. Equatorial Guinea and Dominican Republic have all vowels but also have spaces.",
    difficulty: "Hard",
    starterCode:
      "SELECT name FROM world\n WHERE name LIKE '%a%'\n   AND name LIKE '%e%'\n   AND ___",
    solution:
      "SELECT name FROM world WHERE name LIKE '%a%' AND name LIKE '%e%' AND name LIKE '%i%' AND name LIKE '%o%' AND name LIKE '%u%' AND name NOT LIKE '% %'",
    hints: [
      "Check for each vowel individually using LIKE '%vowel%'.",
      "Exclude spaces with NOT LIKE '% %'.",
      "You need five LIKE conditions (one per vowel) plus one NOT LIKE.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE", "AND", "NOT LIKE"],
    dataset: "world",
  },

  // ─── Section 3: SELECT from Nobel ───────────────────────────────────
  {
    id: "select-nobel-1",
    sectionId: "select-nobel",
    orderIndex: 0,
    title: "Winners from 1950",
    description:
      "Show the year, subject, and winner for Nobel prizes awarded in 1950.",
    difficulty: "Easy",
    starterCode:
      "SELECT yr, subject, winner\n FROM nobel\n WHERE yr = ___",
    solution: "SELECT yr, subject, winner FROM nobel WHERE yr = 1950",
    hints: [
      "Filter the yr column to 1950.",
      "No quotes needed around numbers.",
    ],
    concepts: ["SELECT", "WHERE"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-2",
    sectionId: "select-nobel",
    orderIndex: 1,
    title: "1962 Literature",
    description:
      "Show who won the 1962 prize for Literature.",
    difficulty: "Easy",
    starterCode:
      "SELECT winner FROM nobel\n WHERE yr = ___ AND subject = ___",
    solution:
      "SELECT winner FROM nobel WHERE yr = 1962 AND subject = 'Literature'",
    hints: [
      "Combine two conditions with AND.",
      "Subject is a string, so use single quotes.",
    ],
    concepts: ["SELECT", "WHERE", "AND"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-3",
    sectionId: "select-nobel",
    orderIndex: 2,
    title: "Albert Einstein",
    description:
      "Show the year and subject that Albert Einstein won his prize.",
    difficulty: "Easy",
    starterCode: "SELECT yr, subject FROM nobel\n WHERE winner = ___",
    solution:
      "SELECT yr, subject FROM nobel WHERE winner = 'Albert Einstein'",
    hints: [
      "Filter by the winner column.",
      "Use single quotes around 'Albert Einstein'.",
    ],
    concepts: ["SELECT", "WHERE"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-4",
    sectionId: "select-nobel",
    orderIndex: 3,
    title: "Recent Peace Prizes",
    description: "Show the winners of the Peace prize since the year 2000 (inclusive).",
    difficulty: "Easy",
    starterCode:
      "SELECT winner FROM nobel\n WHERE subject = ___ AND yr >= ___",
    solution:
      "SELECT winner FROM nobel WHERE subject = 'Peace' AND yr >= 2000",
    hints: [
      "Use >= for 'since' (inclusive).",
      "Filter by subject = 'Peace' and yr >= 2000.",
    ],
    concepts: ["SELECT", "WHERE", "AND", "comparison operators"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-5",
    sectionId: "select-nobel",
    orderIndex: 4,
    title: "Literature in the 1980s",
    description:
      "Show all details (yr, subject, winner) of the Literature prize winners for 1980 to 1989 inclusive.",
    difficulty: "Easy",
    starterCode:
      "SELECT yr, subject, winner FROM nobel\n WHERE subject = 'Literature'\n   AND yr BETWEEN ___ AND ___",
    solution:
      "SELECT yr, subject, winner FROM nobel WHERE subject = 'Literature' AND yr BETWEEN 1980 AND 1989",
    hints: [
      "BETWEEN is inclusive of both endpoints.",
      "Use BETWEEN 1980 AND 1989.",
    ],
    concepts: ["SELECT", "WHERE", "AND", "BETWEEN"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-6",
    sectionId: "select-nobel",
    orderIndex: 5,
    title: "Presidential Winners",
    description:
      "Show all details of the presidential winners: Theodore Roosevelt, Woodrow Wilson, Jimmy Carter, and Barack Obama.",
    difficulty: "Easy",
    starterCode:
      "SELECT * FROM nobel\n WHERE winner IN (___)",
    solution:
      "SELECT * FROM nobel WHERE winner IN ('Theodore Roosevelt', 'Woodrow Wilson', 'Jimmy Carter', 'Barack Obama')",
    hints: [
      "Use IN with a list of names.",
      "Each name goes in single quotes, separated by commas.",
    ],
    concepts: ["SELECT", "WHERE", "IN"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-7",
    sectionId: "select-nobel",
    orderIndex: 6,
    title: "Winners Named John",
    description: "Show the winners whose first name is John.",
    difficulty: "Easy",
    starterCode: "SELECT winner FROM nobel\n WHERE winner LIKE ___",
    solution: "SELECT winner FROM nobel WHERE winner LIKE 'John %'",
    hints: [
      "First name John followed by a space and any last name.",
      "Use 'John %' to match John followed by anything.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-8",
    sectionId: "select-nobel",
    orderIndex: 7,
    title: "Physics 1980 or Chemistry 1984",
    description:
      "Show the year, subject, and winner for Physics winners in 1980 together with Chemistry winners in 1984.",
    difficulty: "Medium",
    starterCode:
      "SELECT yr, subject, winner FROM nobel\n WHERE (___)\n    OR (___)",
    solution:
      "SELECT yr, subject, winner FROM nobel WHERE (subject = 'Physics' AND yr = 1980) OR (subject = 'Chemistry' AND yr = 1984)",
    hints: [
      "Use OR to combine two compound conditions.",
      "Each condition uses AND to pair a subject with a year.",
      "Use parentheses to group: (subject = 'Physics' AND yr = 1980) OR ...",
    ],
    concepts: ["SELECT", "WHERE", "AND", "OR"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-9",
    sectionId: "select-nobel",
    orderIndex: 8,
    title: "Exclude Chemistry and Medicine",
    description:
      "Show year, subject, and winner for 1980 winners, excluding Chemistry and Medicine.",
    difficulty: "Medium",
    starterCode:
      "SELECT yr, subject, winner FROM nobel\n WHERE yr = 1980\n   AND subject NOT IN (___)",
    solution:
      "SELECT yr, subject, winner FROM nobel WHERE yr = 1980 AND subject NOT IN ('Chemistry', 'Medicine')",
    hints: [
      "Use NOT IN to exclude multiple values.",
      "NOT IN ('Chemistry', 'Medicine') filters out those two subjects.",
    ],
    concepts: ["SELECT", "WHERE", "NOT IN"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-10",
    sectionId: "select-nobel",
    orderIndex: 9,
    title: "Early Medicine, Late Literature",
    description:
      "Show year, subject, and winner for Medicine prizes before 1910 together with Literature prizes from 2004 onwards (inclusive).",
    difficulty: "Medium",
    starterCode:
      "SELECT yr, subject, winner FROM nobel\n WHERE (___)\n    OR (___)",
    solution:
      "SELECT yr, subject, winner FROM nobel WHERE (subject = 'Medicine' AND yr < 1910) OR (subject = 'Literature' AND yr >= 2004)",
    hints: [
      "Combine two conditions with OR.",
      "Before 1910: yr < 1910. From 2004 onwards: yr >= 2004.",
    ],
    concepts: ["SELECT", "WHERE", "AND", "OR", "comparison operators"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-11",
    sectionId: "select-nobel",
    orderIndex: 10,
    title: "Umlaut: PETER GRUNBERG",
    description:
      "Find all details of the prize won by PETER GRUNBERG. Note: the answer includes an umlaut character. In the dataset this may be stored as 'Peter Grunberg' without the umlaut.",
    difficulty: "Medium",
    starterCode: "SELECT * FROM nobel\n WHERE winner = ___",
    solution:
      "SELECT * FROM nobel WHERE winner LIKE 'Peter Gr%nberg'",
    hints: [
      "Special characters can be tricky. Use LIKE with a wildcard for the umlaut position.",
      "Try LIKE 'Peter Gr%nberg' to match regardless of the umlaut.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE", "special characters"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-12",
    sectionId: "select-nobel",
    orderIndex: 11,
    title: "Apostrophe: EUGENE O'NEILL",
    description:
      "Find all details of the prize won by EUGENE O'NEILL. You will need to handle the apostrophe in the name.",
    difficulty: "Medium",
    starterCode: "SELECT * FROM nobel\n WHERE winner = ___",
    solution:
      "SELECT * FROM nobel WHERE winner = 'Eugene O''Neill'",
    hints: [
      "In SQL, to include a single quote inside a string, double it: ''.",
      "Use 'Eugene O''Neill' (two single quotes for the apostrophe).",
    ],
    concepts: ["SELECT", "WHERE", "string escaping"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-13",
    sectionId: "select-nobel",
    orderIndex: 12,
    title: "Knights of the Realm",
    description:
      "List the winners, year, and subject where the winner starts with 'Sir'. Show the most recent winners first.",
    difficulty: "Medium",
    starterCode:
      "SELECT winner, yr, subject FROM nobel\n WHERE winner LIKE ___\n ORDER BY ___",
    solution:
      "SELECT winner, yr, subject FROM nobel WHERE winner LIKE 'Sir%' ORDER BY yr DESC",
    hints: [
      "Use LIKE 'Sir%' to find names starting with Sir.",
      "Use ORDER BY yr DESC for most recent first.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE", "ORDER BY"],
    dataset: "nobel",
  },
  {
    id: "select-nobel-14",
    sectionId: "select-nobel",
    orderIndex: 13,
    title: "Chemistry and Physics Last",
    description:
      "Show the 1984 winners ordered by subject and winner name, but with Chemistry and Physics listed last. Use a CASE expression in ORDER BY.",
    difficulty: "Hard",
    starterCode:
      "SELECT winner, subject FROM nobel\n WHERE yr = 1984\n ORDER BY\n   CASE WHEN subject IN ('Chemistry', 'Physics') THEN 1 ELSE 0 END,\n   ___,\n   ___",
    solution:
      "SELECT winner, subject FROM nobel WHERE yr = 1984 ORDER BY CASE WHEN subject IN ('Chemistry', 'Physics') THEN 1 ELSE 0 END, subject, winner",
    hints: [
      "CASE in ORDER BY lets you control sort priority.",
      "Assign 1 to Chemistry/Physics (sorts after 0).",
      "Then sort by subject and winner name within each group.",
    ],
    concepts: ["SELECT", "WHERE", "ORDER BY", "CASE"],
    dataset: "nobel",
  },

  // ─── Section 4: SELECT within SELECT ────────────────────────────────
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

  // ─── Section 5: SUM and COUNT ───────────────────────────────────────
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

  // ─── Section 6: JOIN ────────────────────────────────────────────────
  {
    id: "join-1",
    sectionId: "join",
    orderIndex: 0,
    title: "Goals by a Player",
    description:
      "Show the matchid and player name for all goals scored by Germany (teamid = 'GER').",
    difficulty: "Easy",
    starterCode:
      "SELECT matchid, player FROM goal\n WHERE teamid = ___",
    solution:
      "SELECT matchid, player FROM goal WHERE teamid = 'GER'",
    hints: [
      "Filter the goal table where teamid = 'GER'.",
      "The goal table has columns: matchid, teamid, player, gtime.",
    ],
    concepts: ["SELECT", "WHERE"],
    dataset: "football",
  },
  {
    id: "join-2",
    sectionId: "join",
    orderIndex: 1,
    title: "Match 1012",
    description:
      "Show id, stadium, team1, and team2 for match 1012 from the game table.",
    difficulty: "Easy",
    starterCode:
      "SELECT id, stadium, team1, team2 FROM game\n WHERE id = ___",
    solution:
      "SELECT id, stadium, team1, team2 FROM game WHERE id = 1012",
    hints: [
      "Filter the game table by id.",
      "id is a number, no quotes needed.",
    ],
    concepts: ["SELECT", "WHERE"],
    dataset: "football",
  },
  {
    id: "join-3",
    sectionId: "join",
    orderIndex: 2,
    title: "Player and Team",
    description:
      "Show the player, teamid, stadium, and mdate for every German goal. Join the game table to the goal table using matchid = id.",
    difficulty: "Medium",
    starterCode:
      "SELECT player, teamid, stadium, mdate\n FROM game\n JOIN goal ON (game.id = goal.matchid)\n WHERE teamid = ___",
    solution:
      "SELECT player, teamid, stadium, mdate FROM game JOIN goal ON game.id = goal.matchid WHERE teamid = 'GER'",
    hints: [
      "JOIN connects rows from two tables based on a condition.",
      "Match game.id with goal.matchid.",
      "Then filter for Germany: teamid = 'GER'.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE"],
    dataset: "football",
  },
  {
    id: "join-4",
    sectionId: "join",
    orderIndex: 3,
    title: "Goals by Mario",
    description:
      "Show team1, team2, and player for every goal scored by a player whose name starts with 'Mario'.",
    difficulty: "Medium",
    starterCode:
      "SELECT team1, team2, player\n FROM game\n JOIN goal ON (game.id = goal.matchid)\n WHERE player LIKE ___",
    solution:
      "SELECT team1, team2, player FROM game JOIN goal ON game.id = goal.matchid WHERE player LIKE 'Mario%'",
    hints: [
      "Join game to goal on id = matchid.",
      "Use LIKE 'Mario%' to find players whose name starts with Mario.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE", "LIKE"],
    dataset: "football",
  },
  {
    id: "join-5",
    sectionId: "join",
    orderIndex: 4,
    title: "Early Goals with Details",
    description:
      "Show player, teamid, coach, and gtime for goals scored in the first 10 minutes (gtime <= 10). Join the goal table to the eteam table.",
    difficulty: "Medium",
    starterCode:
      "SELECT player, teamid, coach, gtime\n FROM goal\n JOIN eteam ON (goal.teamid = eteam.id)\n WHERE gtime <= ___",
    solution:
      "SELECT player, teamid, coach, gtime FROM goal JOIN eteam ON goal.teamid = eteam.id WHERE gtime <= 10",
    hints: [
      "Join goal to eteam using teamid = eteam.id.",
      "Filter for goals in the first 10 minutes: gtime <= 10.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE"],
    dataset: "football",
  },
  {
    id: "join-6",
    sectionId: "join",
    orderIndex: 5,
    title: "Match Dates for a Coach",
    description:
      "List the dates and team names for every match where 'Fernando Santos' was the team1 coach. Join game to eteam using team1 = eteam.id.",
    difficulty: "Medium",
    starterCode:
      "SELECT mdate, teamname\n FROM game\n JOIN eteam ON (game.team1 = eteam.id)\n WHERE coach = ___",
    solution:
      "SELECT mdate, teamname FROM game JOIN eteam ON game.team1 = eteam.id WHERE coach = 'Fernando Santos'",
    hints: [
      "Join game.team1 to eteam.id to get the team1 name.",
      "Filter where coach = 'Fernando Santos'.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE"],
    dataset: "football",
  },
  {
    id: "join-7",
    sectionId: "join",
    orderIndex: 6,
    title: "Goals at National Stadium",
    description:
      "List the player for every goal scored at 'National Stadium, Warsaw'.",
    difficulty: "Medium",
    starterCode:
      "SELECT player\n FROM goal\n JOIN game ON (goal.matchid = game.id)\n WHERE stadium = ___",
    solution:
      "SELECT player FROM goal JOIN game ON goal.matchid = game.id WHERE stadium = 'National Stadium, Warsaw'",
    hints: [
      "Join goal to game using matchid = id.",
      "Filter by the stadium name.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE"],
    dataset: "football",
  },
  {
    id: "join-8",
    sectionId: "join",
    orderIndex: 7,
    title: "Scorers Against Germany",
    description:
      "Show the name of all players who scored a goal against Germany. Exclude German players. Germany's teamid is 'GER'.",
    difficulty: "Hard",
    starterCode:
      "SELECT DISTINCT player\n FROM goal\n JOIN game ON (goal.matchid = game.id)\n WHERE (team1 = 'GER' OR team2 = 'GER')\n   AND teamid ___ 'GER'",
    solution:
      "SELECT DISTINCT player FROM goal JOIN game ON goal.matchid = game.id WHERE (team1 = 'GER' OR team2 = 'GER') AND teamid <> 'GER'",
    hints: [
      "Germany is involved when team1 or team2 is 'GER'.",
      "Exclude German players with teamid <> 'GER'.",
      "Use DISTINCT to avoid duplicate player names.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE", "OR", "DISTINCT"],
    dataset: "football",
  },
  {
    id: "join-9",
    sectionId: "join",
    orderIndex: 8,
    title: "Team Goal Counts",
    description:
      "Show teamname and the total number of goals scored by that team. Join eteam to goal.",
    difficulty: "Medium",
    starterCode:
      "SELECT teamname, COUNT(*)\n FROM eteam\n JOIN goal ON (eteam.id = goal.teamid)\n GROUP BY ___",
    solution:
      "SELECT teamname, COUNT(*) FROM eteam JOIN goal ON eteam.id = goal.teamid GROUP BY teamname",
    hints: [
      "Join eteam to goal on id = teamid.",
      "Use GROUP BY teamname to count goals per team.",
      "COUNT(*) counts all rows in each group.",
    ],
    concepts: ["SELECT", "JOIN", "GROUP BY", "COUNT"],
    dataset: "football",
  },
  {
    id: "join-10",
    sectionId: "join",
    orderIndex: 9,
    title: "Stadium Goal Counts",
    description:
      "Show the stadium and the number of goals scored in each stadium.",
    difficulty: "Medium",
    starterCode:
      "SELECT stadium, COUNT(*)\n FROM game\n JOIN goal ON (game.id = goal.matchid)\n GROUP BY ___",
    solution:
      "SELECT stadium, COUNT(*) FROM game JOIN goal ON game.id = goal.matchid GROUP BY stadium",
    hints: [
      "Join game to goal to link goals to stadiums.",
      "Group by stadium to count goals per stadium.",
    ],
    concepts: ["SELECT", "JOIN", "GROUP BY", "COUNT"],
    dataset: "football",
  },
  {
    id: "join-11",
    sectionId: "join",
    orderIndex: 10,
    title: "Goals Per Match for Poland",
    description:
      "For every match involving Poland (POL), show the matchid, date, and the number of goals scored.",
    difficulty: "Hard",
    starterCode:
      "SELECT matchid, mdate, COUNT(*)\n FROM game\n JOIN goal ON (game.id = goal.matchid)\n WHERE (team1 = 'POL' OR team2 = 'POL')\n GROUP BY ___",
    solution:
      "SELECT matchid, mdate, COUNT(*) FROM game JOIN goal ON game.id = goal.matchid WHERE (team1 = 'POL' OR team2 = 'POL') GROUP BY matchid, mdate",
    hints: [
      "Poland appears as team1 or team2.",
      "Group by matchid and mdate together.",
      "COUNT(*) gives total goals per match.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE", "OR", "GROUP BY", "COUNT"],
    dataset: "football",
  },
  {
    id: "join-12",
    sectionId: "join",
    orderIndex: 11,
    title: "German Goals Per Match",
    description:
      "For every match where Germany (GER) scored, show matchid, mdate, and the number of goals scored by Germany.",
    difficulty: "Hard",
    starterCode:
      "SELECT matchid, mdate, COUNT(*)\n FROM game\n JOIN goal ON (game.id = goal.matchid)\n WHERE teamid = ___\n GROUP BY ___",
    solution:
      "SELECT matchid, mdate, COUNT(*) FROM game JOIN goal ON game.id = goal.matchid WHERE teamid = 'GER' GROUP BY matchid, mdate",
    hints: [
      "Filter goals where teamid = 'GER'.",
      "Group by matchid and mdate.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE", "GROUP BY", "COUNT"],
    dataset: "football",
  },
  {
    id: "join-13",
    sectionId: "join",
    orderIndex: 12,
    title: "Match Scoreboard",
    description:
      "Show mdate, team1, the score for team1, team2, and the score for team2 for every match. Use CASE and LEFT JOIN so that all matches appear even if there are no goals. Sort by mdate, matchid, team1, and team2.",
    difficulty: "Hard",
    starterCode:
      "SELECT mdate, team1,\n  SUM(CASE WHEN teamid = team1 THEN 1 ELSE 0 END) AS score1,\n  team2,\n  SUM(CASE WHEN teamid = team2 THEN 1 ELSE 0 END) AS score2\n FROM game\n LEFT JOIN goal ON (game.id = goal.matchid)\n GROUP BY ___\n ORDER BY mdate, game.id, team1, team2",
    solution:
      "SELECT mdate, team1, SUM(CASE WHEN teamid = team1 THEN 1 ELSE 0 END) AS score1, team2, SUM(CASE WHEN teamid = team2 THEN 1 ELSE 0 END) AS score2 FROM game LEFT JOIN goal ON game.id = goal.matchid GROUP BY mdate, game.id, team1, team2 ORDER BY mdate, game.id, team1, team2",
    hints: [
      "LEFT JOIN keeps all matches, even those with no goals.",
      "CASE WHEN teamid = team1 THEN 1 ELSE 0 END counts goals for team1.",
      "Group by mdate, game.id, team1, team2 to get one row per match.",
    ],
    concepts: ["SELECT", "LEFT JOIN", "CASE", "SUM", "GROUP BY", "ORDER BY"],
    dataset: "football",
  },

  // ─── Section 7: More JOIN ───────────────────────────────────────────
  {
    id: "more-join-1",
    sectionId: "more-join",
    orderIndex: 0,
    title: "1962 Films",
    description: "List the films where the yr is 1962. Show id and title.",
    difficulty: "Easy",
    starterCode: "SELECT id, title FROM movie\n WHERE yr = ___",
    solution: "SELECT id, title FROM movie WHERE yr = 1962",
    hints: [
      "Filter the movie table by yr.",
      "yr is a number, no quotes needed.",
    ],
    concepts: ["SELECT", "WHERE"],
    dataset: "movie",
  },
  {
    id: "more-join-2",
    sectionId: "more-join",
    orderIndex: 1,
    title: "When Was Citizen Kane",
    description: "Give the year of 'Citizen Kane'.",
    difficulty: "Easy",
    starterCode: "SELECT yr FROM movie\n WHERE title = ___",
    solution: "SELECT yr FROM movie WHERE title = 'Citizen Kane'",
    hints: [
      "Filter by the movie title.",
      "Use single quotes around the title string.",
    ],
    concepts: ["SELECT", "WHERE"],
    dataset: "movie",
  },
  {
    id: "more-join-3",
    sectionId: "more-join",
    orderIndex: 2,
    title: "Star Trek Movies",
    description:
      "List all of the Star Trek movies, including the id, title, and yr. Order results by year.",
    difficulty: "Easy",
    starterCode:
      "SELECT id, title, yr FROM movie\n WHERE title LIKE ___\n ORDER BY yr",
    solution:
      "SELECT id, title, yr FROM movie WHERE title LIKE '%Star Trek%' ORDER BY yr",
    hints: [
      "Use LIKE '%Star Trek%' to find all Star Trek movies.",
      "ORDER BY yr sorts chronologically.",
    ],
    concepts: ["SELECT", "WHERE", "LIKE", "ORDER BY"],
    dataset: "movie",
  },
  {
    id: "more-join-4",
    sectionId: "more-join",
    orderIndex: 3,
    title: "Glenn Close ID",
    description: "What id number does the actor 'Glenn Close' have?",
    difficulty: "Easy",
    starterCode: "SELECT id FROM actor\n WHERE name = ___",
    solution: "SELECT id FROM actor WHERE name = 'Glenn Close'",
    hints: [
      "Query the actor table.",
      "Filter by name = 'Glenn Close'.",
    ],
    concepts: ["SELECT", "WHERE"],
    dataset: "movie",
  },
  {
    id: "more-join-5",
    sectionId: "more-join",
    orderIndex: 4,
    title: "Casablanca ID",
    description: "What is the id of the film 'Casablanca'?",
    difficulty: "Easy",
    starterCode: "SELECT id FROM movie\n WHERE title = ___",
    solution: "SELECT id FROM movie WHERE title = 'Casablanca'",
    hints: [
      "Query the movie table.",
      "Filter by title.",
    ],
    concepts: ["SELECT", "WHERE"],
    dataset: "movie",
  },
  {
    id: "more-join-6",
    sectionId: "more-join",
    orderIndex: 5,
    title: "Casablanca Cast List",
    description:
      "Obtain the cast list for 'Casablanca'. Use movieid = 11768 (or use a subquery to find it). The casting table links actor to movie.",
    difficulty: "Medium",
    starterCode:
      "SELECT name\n FROM actor\n JOIN casting ON (actor.id = casting.actorid)\n WHERE movieid = (SELECT id FROM movie WHERE title = ___)",
    solution:
      "SELECT name FROM actor JOIN casting ON actor.id = casting.actorid WHERE movieid = (SELECT id FROM movie WHERE title = 'Casablanca')",
    hints: [
      "Join actor to casting on actor.id = casting.actorid.",
      "Filter by movieid using a subquery or the known id.",
      "The casting table has movieid and actorid columns.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE", "subquery"],
    dataset: "movie",
  },
  {
    id: "more-join-7",
    sectionId: "more-join",
    orderIndex: 6,
    title: "Alien Cast List",
    description:
      "Obtain the cast list for the film 'Alien'.",
    difficulty: "Medium",
    starterCode:
      "SELECT name\n FROM actor\n JOIN casting ON (actor.id = casting.actorid)\n WHERE movieid = (SELECT id FROM movie WHERE title = ___)",
    solution:
      "SELECT name FROM actor JOIN casting ON actor.id = casting.actorid WHERE movieid = (SELECT id FROM movie WHERE title = 'Alien')",
    hints: [
      "Same pattern as the Casablanca cast list.",
      "Change the title to 'Alien'.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE", "subquery"],
    dataset: "movie",
  },
  {
    id: "more-join-8",
    sectionId: "more-join",
    orderIndex: 7,
    title: "Harrison Ford Films",
    description:
      "List the films in which 'Harrison Ford' has appeared. Show the movie title.",
    difficulty: "Medium",
    starterCode:
      "SELECT title\n FROM movie\n JOIN casting ON (movie.id = casting.movieid)\n JOIN actor ON (casting.actorid = actor.id)\n WHERE name = ___",
    solution:
      "SELECT title FROM movie JOIN casting ON movie.id = casting.movieid JOIN actor ON casting.actorid = actor.id WHERE name = 'Harrison Ford'",
    hints: [
      "Join three tables: movie, casting, actor.",
      "casting links movie to actor via movieid and actorid.",
      "Filter by the actor name.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE"],
    dataset: "movie",
  },
  {
    id: "more-join-9",
    sectionId: "more-join",
    orderIndex: 8,
    title: "Harrison Ford Supporting Roles",
    description:
      "List the films where 'Harrison Ford' has appeared but not as a starring role. The ord column in casting indicates position: ord = 1 means lead role.",
    difficulty: "Medium",
    starterCode:
      "SELECT title\n FROM movie\n JOIN casting ON (movie.id = casting.movieid)\n JOIN actor ON (casting.actorid = actor.id)\n WHERE name = 'Harrison Ford'\n   AND ord ___ 1",
    solution:
      "SELECT title FROM movie JOIN casting ON movie.id = casting.movieid JOIN actor ON casting.actorid = actor.id WHERE name = 'Harrison Ford' AND ord <> 1",
    hints: [
      "ord = 1 means the lead/starring role.",
      "Use <> 1 or != 1 to exclude lead roles.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE", "comparison operators"],
    dataset: "movie",
  },
  {
    id: "more-join-10",
    sectionId: "more-join",
    orderIndex: 9,
    title: "Lead Actors in 1962",
    description:
      "List the film title and lead actor (ord = 1) for all 1962 films.",
    difficulty: "Medium",
    starterCode:
      "SELECT title, name\n FROM movie\n JOIN casting ON (movie.id = casting.movieid)\n JOIN actor ON (casting.actorid = actor.id)\n WHERE yr = ___\n   AND ord = ___",
    solution:
      "SELECT title, name FROM movie JOIN casting ON movie.id = casting.movieid JOIN actor ON casting.actorid = actor.id WHERE yr = 1962 AND ord = 1",
    hints: [
      "Filter by yr = 1962 and ord = 1.",
      "ord = 1 gives the lead actor for each film.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE"],
    dataset: "movie",
  },
  {
    id: "more-join-11",
    sectionId: "more-join",
    orderIndex: 10,
    title: "Busy Years for Rock Hudson",
    description:
      "Which were the busiest years for 'Rock Hudson'? Show the year and the number of movies he made each year for any year in which he made more than 2 movies.",
    difficulty: "Hard",
    starterCode:
      "SELECT yr, COUNT(title)\n FROM movie\n JOIN casting ON (movie.id = casting.movieid)\n JOIN actor ON (casting.actorid = actor.id)\n WHERE name = 'Rock Hudson'\n GROUP BY yr\n HAVING COUNT(title) > ___",
    solution:
      "SELECT yr, COUNT(title) FROM movie JOIN casting ON movie.id = casting.movieid JOIN actor ON casting.actorid = actor.id WHERE name = 'Rock Hudson' GROUP BY yr HAVING COUNT(title) > 2",
    hints: [
      "Group by year to count films per year.",
      "HAVING filters groups after aggregation.",
      "HAVING COUNT(title) > 2 keeps only busy years.",
    ],
    concepts: ["SELECT", "JOIN", "GROUP BY", "HAVING", "COUNT"],
    dataset: "movie",
  },
  {
    id: "more-join-12",
    sectionId: "more-join",
    orderIndex: 11,
    title: "Lead Actor in Julie Andrews Films",
    description:
      "List the film title and the lead actor for all of the films 'Julie Andrews' played in. The lead actor is the one with ord = 1.",
    difficulty: "Hard",
    starterCode:
      "SELECT title, name FROM movie\n JOIN casting ON (movie.id = casting.movieid)\n JOIN actor ON (casting.actorid = actor.id)\n WHERE ord = 1\n   AND movieid IN (\n     SELECT movieid FROM casting\n     WHERE actorid = (SELECT id FROM actor WHERE name = ___)\n   )",
    solution:
      "SELECT title, name FROM movie JOIN casting ON movie.id = casting.movieid JOIN actor ON casting.actorid = actor.id WHERE ord = 1 AND movieid IN (SELECT movieid FROM casting WHERE actorid = (SELECT id FROM actor WHERE name = 'Julie Andrews'))",
    hints: [
      "First find Julie Andrews' actor id with a subquery.",
      "Then find all movieids she appeared in.",
      "Finally, show the lead actor (ord = 1) for those movies.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE", "subquery", "IN"],
    dataset: "movie",
  },
  {
    id: "more-join-13",
    sectionId: "more-join",
    orderIndex: 12,
    title: "Actors with 15+ Starring Roles",
    description:
      "Obtain a list, in alphabetical order, of actors who have had at least 15 starring (ord = 1) roles.",
    difficulty: "Hard",
    starterCode:
      "SELECT name FROM actor\n JOIN casting ON (actor.id = casting.actorid)\n WHERE ord = 1\n GROUP BY name\n HAVING COUNT(*) >= ___\n ORDER BY name",
    solution:
      "SELECT name FROM actor JOIN casting ON actor.id = casting.actorid WHERE ord = 1 GROUP BY name HAVING COUNT(*) >= 15 ORDER BY name",
    hints: [
      "Filter for starring roles: ord = 1.",
      "Group by name and count appearances.",
      "HAVING COUNT(*) >= 15 keeps prolific actors.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE", "GROUP BY", "HAVING", "COUNT", "ORDER BY"],
    dataset: "movie",
  },
  {
    id: "more-join-14",
    sectionId: "more-join",
    orderIndex: 13,
    title: "1978 Films by Cast Size",
    description:
      "List the films released in 1978, ordered by the number of actors in the cast, then by title.",
    difficulty: "Hard",
    starterCode:
      "SELECT title, COUNT(actorid)\n FROM movie\n JOIN casting ON (movie.id = casting.movieid)\n WHERE yr = ___\n GROUP BY title\n ORDER BY ___ DESC, title",
    solution:
      "SELECT title, COUNT(actorid) FROM movie JOIN casting ON movie.id = casting.movieid WHERE yr = 1978 GROUP BY title ORDER BY COUNT(actorid) DESC, title",
    hints: [
      "Join movie to casting to count actors per film.",
      "Order by COUNT(actorid) DESC for largest casts first.",
      "Then order by title alphabetically as a tiebreaker.",
    ],
    concepts: ["SELECT", "JOIN", "GROUP BY", "COUNT", "ORDER BY"],
    dataset: "movie",
  },
  {
    id: "more-join-15",
    sectionId: "more-join",
    orderIndex: 14,
    title: "Collaborators of Art Garfunkel",
    description:
      "List all the people who have worked with 'Art Garfunkel'. Find all movies Art Garfunkel appeared in, then list everyone else who also appeared in those movies.",
    difficulty: "Hard",
    starterCode:
      "SELECT DISTINCT name FROM actor\n JOIN casting ON (actor.id = casting.actorid)\n WHERE movieid IN (\n   SELECT movieid FROM casting\n   WHERE actorid = (SELECT id FROM actor WHERE name = ___)\n )\n AND name ___ ___",
    solution:
      "SELECT DISTINCT name FROM actor JOIN casting ON actor.id = casting.actorid WHERE movieid IN (SELECT movieid FROM casting WHERE actorid = (SELECT id FROM actor WHERE name = 'Art Garfunkel')) AND name <> 'Art Garfunkel'",
    hints: [
      "Find Art Garfunkel's id, then his movieids, then all other actors in those movies.",
      "Exclude Art Garfunkel himself with name <> 'Art Garfunkel'.",
      "Use DISTINCT to avoid listing an actor multiple times.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE", "subquery", "IN", "DISTINCT"],
    dataset: "movie",
  },

  // ─── Section 8: Using NULL ──────────────────────────────────────────
  {
    id: "using-null-1",
    sectionId: "using-null",
    orderIndex: 0,
    title: "NULL Department",
    description:
      "List the teachers who have NULL for their department. Use IS NULL.",
    difficulty: "Easy",
    starterCode:
      "SELECT name FROM teacher\n WHERE dept ___",
    solution: "SELECT name FROM teacher WHERE dept IS NULL",
    hints: [
      "You cannot use = NULL. You must use IS NULL.",
      "NULL means 'no value' and requires special syntax.",
    ],
    concepts: ["SELECT", "WHERE", "IS NULL"],
    dataset: "school",
  },
  {
    id: "using-null-2",
    sectionId: "using-null",
    orderIndex: 1,
    title: "INNER JOIN Teachers",
    description:
      "Use INNER JOIN to show teacher name and department name. INNER JOIN misses teachers with no department and departments with no teacher.",
    difficulty: "Easy",
    starterCode:
      "SELECT teacher.name, dept.name\n FROM teacher\n INNER JOIN dept ON (teacher.dept = dept.id)",
    solution:
      "SELECT teacher.name, dept.name FROM teacher INNER JOIN dept ON teacher.dept = dept.id",
    hints: [
      "INNER JOIN only shows rows where there is a match in both tables.",
      "Teachers without a department are excluded.",
    ],
    concepts: ["SELECT", "INNER JOIN"],
    dataset: "school",
  },
  {
    id: "using-null-3",
    sectionId: "using-null",
    orderIndex: 2,
    title: "LEFT JOIN All Teachers",
    description:
      "Use LEFT JOIN to list all teachers. If a teacher has no department, show NULL for the department name.",
    difficulty: "Easy",
    starterCode:
      "SELECT teacher.name, dept.name\n FROM teacher\n LEFT JOIN dept ON (teacher.dept = dept.id)",
    solution:
      "SELECT teacher.name, dept.name FROM teacher LEFT JOIN dept ON teacher.dept = dept.id",
    hints: [
      "LEFT JOIN keeps all rows from the left table (teacher).",
      "Unmatched rows get NULL for the right table columns.",
    ],
    concepts: ["SELECT", "LEFT JOIN"],
    dataset: "school",
  },
  {
    id: "using-null-4",
    sectionId: "using-null",
    orderIndex: 3,
    title: "All Departments (RIGHT JOIN Equivalent)",
    description:
      "SQLite does not support RIGHT JOIN. To list all departments (even those with no teachers), swap the table order and use LEFT JOIN. Show department name and teacher name.",
    difficulty: "Medium",
    starterCode:
      "SELECT dept.name, teacher.name\n FROM dept\n LEFT JOIN teacher ON (___)",
    solution:
      "SELECT dept.name, teacher.name FROM dept LEFT JOIN teacher ON teacher.dept = dept.id",
    hints: [
      "In SQLite, simulate RIGHT JOIN by swapping table order and using LEFT JOIN.",
      "Put dept on the left: FROM dept LEFT JOIN teacher.",
      "The join condition stays the same: teacher.dept = dept.id.",
    ],
    concepts: ["SELECT", "LEFT JOIN", "RIGHT JOIN equivalent"],
    dataset: "school",
  },
  {
    id: "using-null-5",
    sectionId: "using-null",
    orderIndex: 4,
    title: "COALESCE for Missing Mobile",
    description:
      "Use COALESCE to show the teacher name and mobile number. Use '07986 444 2266' as the default for missing (NULL) mobile numbers.",
    difficulty: "Medium",
    starterCode:
      "SELECT name, COALESCE(___, '07986 444 2266')\n FROM teacher",
    solution:
      "SELECT name, COALESCE(mobile, '07986 444 2266') FROM teacher",
    hints: [
      "COALESCE returns the first non-NULL argument.",
      "COALESCE(mobile, 'default') returns mobile if it exists, otherwise the default.",
    ],
    concepts: ["SELECT", "COALESCE"],
    dataset: "school",
  },
  {
    id: "using-null-6",
    sectionId: "using-null",
    orderIndex: 5,
    title: "COALESCE for Department Name",
    description:
      "Use COALESCE to show the teacher name and department name. Use 'None' as the default for teachers without a department.",
    difficulty: "Medium",
    starterCode:
      "SELECT teacher.name, COALESCE(___, 'None')\n FROM teacher\n LEFT JOIN dept ON (teacher.dept = dept.id)",
    solution:
      "SELECT teacher.name, COALESCE(dept.name, 'None') FROM teacher LEFT JOIN dept ON teacher.dept = dept.id",
    hints: [
      "LEFT JOIN to keep all teachers.",
      "COALESCE(dept.name, 'None') handles NULL department names.",
    ],
    concepts: ["SELECT", "LEFT JOIN", "COALESCE"],
    dataset: "school",
  },
  {
    id: "using-null-7",
    sectionId: "using-null",
    orderIndex: 6,
    title: "Count Teachers and Mobiles",
    description:
      "Show the number of teachers and the number of mobile phones (non-NULL). Use COUNT.",
    difficulty: "Medium",
    starterCode:
      "SELECT COUNT(___), COUNT(___)\n FROM teacher",
    solution: "SELECT COUNT(name), COUNT(mobile) FROM teacher",
    hints: [
      "COUNT(column) counts non-NULL values in that column.",
      "COUNT(name) counts all teachers; COUNT(mobile) counts only those with a mobile.",
    ],
    concepts: ["SELECT", "COUNT"],
    dataset: "school",
  },
  {
    id: "using-null-8",
    sectionId: "using-null",
    orderIndex: 7,
    title: "Department Staff Counts",
    description:
      "Show each department name and the number of staff. Use LEFT JOIN from dept to teacher so that departments with no teachers show 0.",
    difficulty: "Medium",
    starterCode:
      "SELECT dept.name, COUNT(___)\n FROM dept\n LEFT JOIN teacher ON (dept.id = teacher.dept)\n GROUP BY dept.name",
    solution:
      "SELECT dept.name, COUNT(teacher.name) FROM dept LEFT JOIN teacher ON dept.id = teacher.dept GROUP BY dept.name",
    hints: [
      "LEFT JOIN from dept ensures all departments appear.",
      "COUNT(teacher.name) counts non-NULL teacher names (i.e., actual teachers).",
      "Departments with no teachers will show 0.",
    ],
    concepts: ["SELECT", "LEFT JOIN", "COUNT", "GROUP BY"],
    dataset: "school",
  },
  {
    id: "using-null-9",
    sectionId: "using-null",
    orderIndex: 8,
    title: "CASE for Science and Art",
    description:
      "Use CASE to show the name of each teacher followed by 'Sci' if the teacher is in department 1 or 2, and 'Art' otherwise.",
    difficulty: "Hard",
    starterCode:
      "SELECT name,\n  CASE WHEN dept IN (1, 2) THEN ___\n       ELSE ___ END\n FROM teacher",
    solution:
      "SELECT name, CASE WHEN dept IN (1, 2) THEN 'Sci' ELSE 'Art' END FROM teacher",
    hints: [
      "CASE WHEN condition THEN result ELSE default END.",
      "dept IN (1, 2) matches Science departments.",
      "ELSE 'Art' catches all other departments and NULLs.",
    ],
    concepts: ["SELECT", "CASE"],
    dataset: "school",
  },
  {
    id: "using-null-10",
    sectionId: "using-null",
    orderIndex: 9,
    title: "CASE with Multiple Categories",
    description:
      "Use CASE to show the name of each teacher followed by 'Sci' if in dept 1 or 2, 'Art' if in dept 3, and 'None' if no department.",
    difficulty: "Hard",
    starterCode:
      "SELECT name,\n  CASE WHEN dept IN (1, 2) THEN 'Sci'\n       WHEN dept = 3 THEN ___\n       ELSE ___ END\n FROM teacher",
    solution:
      "SELECT name, CASE WHEN dept IN (1, 2) THEN 'Sci' WHEN dept = 3 THEN 'Art' ELSE 'None' END FROM teacher",
    hints: [
      "Add multiple WHEN clauses to handle different cases.",
      "ELSE catches NULL department values.",
      "CASE evaluates conditions in order, using the first match.",
    ],
    concepts: ["SELECT", "CASE"],
    dataset: "school",
  },

  // ─── Section 9: Window Functions ────────────────────────────────────
  {
    id: "window-functions-1",
    sectionId: "window-functions",
    orderIndex: 0,
    title: "Constituency Votes",
    description:
      "Show the lastName, party, and votes for the constituency 'S14000024' in 2017.",
    difficulty: "Easy",
    starterCode:
      "SELECT lastName, party, votes\n FROM ge\n WHERE constituency = ___\n   AND yr = ___",
    solution:
      "SELECT lastName, party, votes FROM ge WHERE constituency = 'S14000024' AND yr = 2017",
    hints: [
      "Filter by constituency and year.",
      "The ge table has columns: yr, firstName, lastName, constituency, party, votes.",
    ],
    concepts: ["SELECT", "WHERE"],
    dataset: "election",
  },
  {
    id: "window-functions-2",
    sectionId: "window-functions",
    orderIndex: 1,
    title: "RANK in a Constituency",
    description:
      "Show the constituency, party, votes, and RANK() for constituency 'S14000024' in 2017. Rank by votes descending.",
    difficulty: "Medium",
    starterCode:
      "SELECT constituency, party, votes,\n  RANK() OVER (ORDER BY votes DESC) AS posn\n FROM ge\n WHERE constituency = 'S14000024'\n   AND yr = 2017",
    solution:
      "SELECT constituency, party, votes, RANK() OVER (ORDER BY votes DESC) AS posn FROM ge WHERE constituency = 'S14000024' AND yr = 2017",
    hints: [
      "RANK() OVER (ORDER BY votes DESC) assigns a ranking.",
      "The highest votes get rank 1.",
      "Equal votes get the same rank.",
    ],
    concepts: ["SELECT", "WHERE", "RANK", "window function"],
    dataset: "election",
  },
  {
    id: "window-functions-3",
    sectionId: "window-functions",
    orderIndex: 2,
    title: "PARTITION BY Year",
    description:
      "Show the constituency, party, votes, and RANK for constituency 'S14000024' across all years. Use PARTITION BY yr to rank within each year.",
    difficulty: "Medium",
    starterCode:
      "SELECT yr, constituency, party, votes,\n  RANK() OVER (PARTITION BY ___ ORDER BY votes DESC) AS posn\n FROM ge\n WHERE constituency = 'S14000024'\n ORDER BY yr, posn",
    solution:
      "SELECT yr, constituency, party, votes, RANK() OVER (PARTITION BY yr ORDER BY votes DESC) AS posn FROM ge WHERE constituency = 'S14000024' ORDER BY yr, posn",
    hints: [
      "PARTITION BY divides the data into groups for ranking.",
      "PARTITION BY yr creates a separate ranking for each election year.",
      "Each year restarts the ranking from 1.",
    ],
    concepts: ["SELECT", "WHERE", "RANK", "PARTITION BY", "window function", "ORDER BY"],
    dataset: "election",
  },
  {
    id: "window-functions-4",
    sectionId: "window-functions",
    orderIndex: 3,
    title: "Edinburgh 2017 Rankings",
    description:
      "Show the constituency, party, votes, and rank for Edinburgh constituencies (constituency starts with 'S14000') in 2017. Rank within each constituency by votes descending.",
    difficulty: "Medium",
    starterCode:
      "SELECT constituency, party, votes,\n  RANK() OVER (PARTITION BY ___ ORDER BY votes DESC) AS posn\n FROM ge\n WHERE constituency LIKE 'S14000%'\n   AND yr = 2017\n ORDER BY constituency, posn",
    solution:
      "SELECT constituency, party, votes, RANK() OVER (PARTITION BY constituency ORDER BY votes DESC) AS posn FROM ge WHERE constituency LIKE 'S14000%' AND yr = 2017 ORDER BY constituency, posn",
    hints: [
      "PARTITION BY constituency ranks within each constituency.",
      "Use LIKE 'S14000%' to filter Edinburgh constituencies.",
    ],
    concepts: ["SELECT", "WHERE", "RANK", "PARTITION BY", "LIKE", "window function"],
    dataset: "election",
  },
  {
    id: "window-functions-5",
    sectionId: "window-functions",
    orderIndex: 4,
    title: "Winners Only",
    description:
      "Show the constituency and party for Edinburgh constituencies in 2017 where the party won (rank = 1). Use a subquery to filter by rank.",
    difficulty: "Hard",
    starterCode:
      "SELECT constituency, party FROM (\n  SELECT constituency, party,\n    RANK() OVER (PARTITION BY constituency ORDER BY votes DESC) AS posn\n  FROM ge\n  WHERE constituency LIKE 'S14000%'\n    AND yr = 2017\n) AS ranked\n WHERE posn = ___",
    solution:
      "SELECT constituency, party FROM (SELECT constituency, party, RANK() OVER (PARTITION BY constituency ORDER BY votes DESC) AS posn FROM ge WHERE constituency LIKE 'S14000%' AND yr = 2017) AS ranked WHERE posn = 1",
    hints: [
      "Window functions cannot be used directly in WHERE.",
      "Wrap the query in a subquery, then filter by the rank column.",
      "posn = 1 gives the winner of each constituency.",
    ],
    concepts: ["SELECT", "WHERE", "RANK", "PARTITION BY", "subquery", "window function"],
    dataset: "election",
  },
  {
    id: "window-functions-6",
    sectionId: "window-functions",
    orderIndex: 5,
    title: "Scottish Seats per Party",
    description:
      "Show how many seats each party won in Scotland (constituency starts with 'S') in 2017. A party wins a seat when it has rank 1 in a constituency.",
    difficulty: "Hard",
    starterCode:
      "SELECT party, COUNT(*) AS seats FROM (\n  SELECT constituency, party,\n    RANK() OVER (PARTITION BY constituency ORDER BY votes DESC) AS posn\n  FROM ge\n  WHERE constituency LIKE 'S%'\n    AND yr = 2017\n) AS ranked\n WHERE posn = 1\n GROUP BY ___\n ORDER BY seats DESC",
    solution:
      "SELECT party, COUNT(*) AS seats FROM (SELECT constituency, party, RANK() OVER (PARTITION BY constituency ORDER BY votes DESC) AS posn FROM ge WHERE constituency LIKE 'S%' AND yr = 2017) AS ranked WHERE posn = 1 GROUP BY party ORDER BY seats DESC",
    hints: [
      "First rank candidates within each constituency.",
      "Filter for winners (posn = 1) in the outer query.",
      "Group by party and count to get seats per party.",
    ],
    concepts: ["SELECT", "WHERE", "RANK", "PARTITION BY", "GROUP BY", "COUNT", "subquery", "window function"],
    dataset: "election",
  },

  // ─── Section 10: Self JOIN ──────────────────────────────────────────
  {
    id: "self-join-1",
    sectionId: "self-join",
    orderIndex: 0,
    title: "Count All Stops",
    description:
      "Show the total number of stops in the stops table.",
    difficulty: "Easy",
    starterCode: "SELECT COUNT(*) FROM ___",
    solution: "SELECT COUNT(*) FROM stops",
    hints: [
      "COUNT(*) counts all rows.",
      "Query the stops table.",
    ],
    concepts: ["SELECT", "COUNT"],
    dataset: "transport",
  },
  {
    id: "self-join-2",
    sectionId: "self-join",
    orderIndex: 1,
    title: "Find Craiglockhart",
    description:
      "Find the id value for the stop named 'Craiglockhart'.",
    difficulty: "Easy",
    starterCode: "SELECT id FROM stops\n WHERE name = ___",
    solution: "SELECT id FROM stops WHERE name = 'Craiglockhart'",
    hints: [
      "Filter the stops table by name.",
      "Use single quotes around the stop name.",
    ],
    concepts: ["SELECT", "WHERE"],
    dataset: "transport",
  },
  {
    id: "self-join-3",
    sectionId: "self-join",
    orderIndex: 2,
    title: "Routes on LRT Service 4",
    description:
      "Show the id and name of stops on the '4' 'LRT' service. The route table links services to stops.",
    difficulty: "Easy",
    starterCode:
      "SELECT id, name FROM stops\n JOIN route ON (stops.id = route.stop)\n WHERE num = '4'\n   AND company = 'LRT'",
    solution:
      "SELECT id, name FROM stops JOIN route ON stops.id = route.stop WHERE num = '4' AND company = 'LRT'",
    hints: [
      "Join stops to route using stops.id = route.stop.",
      "Filter by num = '4' and company = 'LRT'.",
    ],
    concepts: ["SELECT", "JOIN", "WHERE"],
    dataset: "transport",
  },
  {
    id: "self-join-4",
    sectionId: "self-join",
    orderIndex: 3,
    title: "Routes Through Two Stops",
    description:
      "Show the services (company and num) that connect stops 115 and 137. A service connects two stops if both stops appear in route entries with the same company and num.",
    difficulty: "Medium",
    starterCode:
      "SELECT DISTINCT a.company, a.num\n FROM route a\n JOIN route b ON (a.company = b.company AND a.num = b.num)\n WHERE a.stop = ___\n   AND b.stop = ___",
    solution:
      "SELECT DISTINCT a.company, a.num FROM route a JOIN route b ON (a.company = b.company AND a.num = b.num) WHERE a.stop = 115 AND b.stop = 137",
    hints: [
      "Self-join route to itself: same company and same num.",
      "One copy (a) matches the first stop, the other (b) matches the second.",
      "DISTINCT avoids duplicate results.",
    ],
    concepts: ["SELECT", "self JOIN", "WHERE", "DISTINCT"],
    dataset: "transport",
  },
  {
    id: "self-join-5",
    sectionId: "self-join",
    orderIndex: 4,
    title: "Craiglockhart to London Road",
    description:
      "Show the services from Craiglockhart (stop id 53) to London Road (stop id 149). Show company and num.",
    difficulty: "Medium",
    starterCode:
      "SELECT DISTINCT a.company, a.num\n FROM route a\n JOIN route b ON (a.company = b.company AND a.num = b.num)\n WHERE a.stop = ___\n   AND b.stop = ___",
    solution:
      "SELECT DISTINCT a.company, a.num FROM route a JOIN route b ON (a.company = b.company AND a.num = b.num) WHERE a.stop = 53 AND b.stop = 149",
    hints: [
      "Same self-join pattern as before.",
      "Craiglockhart = 53, London Road = 149.",
    ],
    concepts: ["SELECT", "self JOIN", "WHERE", "DISTINCT"],
    dataset: "transport",
  },
  {
    id: "self-join-6",
    sectionId: "self-join",
    orderIndex: 5,
    title: "Services with Stop Names",
    description:
      "Show the services connecting 'Craiglockhart' and 'London Road' by name. Join stops to route to look up stop names instead of using ids.",
    difficulty: "Medium",
    starterCode:
      "SELECT DISTINCT a.company, a.num\n FROM route a\n JOIN route b ON (a.company = b.company AND a.num = b.num)\n JOIN stops sa ON (a.stop = sa.id)\n JOIN stops sb ON (b.stop = sb.id)\n WHERE sa.name = ___\n   AND sb.name = ___",
    solution:
      "SELECT DISTINCT a.company, a.num FROM route a JOIN route b ON (a.company = b.company AND a.num = b.num) JOIN stops sa ON a.stop = sa.id JOIN stops sb ON b.stop = sb.id WHERE sa.name = 'Craiglockhart' AND sb.name = 'London Road'",
    hints: [
      "Join each route copy to stops to get the stop name.",
      "sa is stops for route a, sb is stops for route b.",
      "Filter by stop names instead of ids.",
    ],
    concepts: ["SELECT", "self JOIN", "JOIN", "WHERE", "DISTINCT"],
    dataset: "transport",
  },
  {
    id: "self-join-7",
    sectionId: "self-join",
    orderIndex: 6,
    title: "Services Between Two Stops by ID",
    description:
      "Show a list of company, num, stop-a-name, stop-b-name for services that connect stops 115 and 137.",
    difficulty: "Medium",
    starterCode:
      "SELECT a.company, a.num, sa.name, sb.name\n FROM route a\n JOIN route b ON (a.company = b.company AND a.num = b.num)\n JOIN stops sa ON (a.stop = sa.id)\n JOIN stops sb ON (b.stop = sb.id)\n WHERE sa.id = ___\n   AND sb.id = ___",
    solution:
      "SELECT a.company, a.num, sa.name, sb.name FROM route a JOIN route b ON (a.company = b.company AND a.num = b.num) JOIN stops sa ON a.stop = sa.id JOIN stops sb ON b.stop = sb.id WHERE sa.id = 115 AND sb.id = 137",
    hints: [
      "Join route twice, and stops twice.",
      "Filter by stop ids.",
    ],
    concepts: ["SELECT", "self JOIN", "JOIN", "WHERE"],
    dataset: "transport",
  },
  {
    id: "self-join-8",
    sectionId: "self-join",
    orderIndex: 7,
    title: "Craiglockhart to Tollcross",
    description:
      "Show the company, num, and the name of the stop for services between 'Craiglockhart' and 'Tollcross'.",
    difficulty: "Medium",
    starterCode:
      "SELECT a.company, a.num, sb.name\n FROM route a\n JOIN route b ON (a.company = b.company AND a.num = b.num)\n JOIN stops sa ON (a.stop = sa.id)\n JOIN stops sb ON (b.stop = sb.id)\n WHERE sa.name = ___\n   AND sb.name = ___",
    solution:
      "SELECT a.company, a.num, sb.name FROM route a JOIN route b ON (a.company = b.company AND a.num = b.num) JOIN stops sa ON a.stop = sa.id JOIN stops sb ON b.stop = sb.id WHERE sa.name = 'Craiglockhart' AND sb.name = 'Tollcross'",
    hints: [
      "Same pattern as before with stop names.",
      "Show the destination stop name (sb.name).",
    ],
    concepts: ["SELECT", "self JOIN", "JOIN", "WHERE"],
    dataset: "transport",
  },
  {
    id: "self-join-9",
    sectionId: "self-join",
    orderIndex: 8,
    title: "Reachable from Craiglockhart",
    description:
      "Show a distinct list of stop names that are reachable from 'Craiglockhart' on a single service (no transfers). Include Craiglockhart itself. Show company, num, and the reachable stop name.",
    difficulty: "Hard",
    starterCode:
      "SELECT DISTINCT sb.name, a.company, a.num\n FROM route a\n JOIN route b ON (a.company = b.company AND a.num = b.num)\n JOIN stops sa ON (a.stop = sa.id)\n JOIN stops sb ON (b.stop = sb.id)\n WHERE sa.name = ___",
    solution:
      "SELECT DISTINCT sb.name, a.company, a.num FROM route a JOIN route b ON (a.company = b.company AND a.num = b.num) JOIN stops sa ON a.stop = sa.id JOIN stops sb ON b.stop = sb.id WHERE sa.name = 'Craiglockhart'",
    hints: [
      "Only filter on the starting stop (sa.name = 'Craiglockhart').",
      "b.stop gives all stops reachable on the same service.",
      "DISTINCT avoids duplicates.",
    ],
    concepts: ["SELECT", "self JOIN", "JOIN", "WHERE", "DISTINCT"],
    dataset: "transport",
  },
  {
    id: "self-join-10",
    sectionId: "self-join",
    orderIndex: 9,
    title: "Two Buses: Craiglockhart to Lochend",
    description:
      "Find routes involving two buses that can go from Craiglockhart to Lochend. Show the first bus service (company, num), the transfer stop name, and the second bus service (company, num).",
    difficulty: "Hard",
    starterCode:
      "SELECT DISTINCT\n  first_leg.company, first_leg.num, transfer_stop.name,\n  second_leg.company, second_leg.num\nFROM route first_leg\nJOIN route first_leg_b ON (first_leg.company = first_leg_b.company AND first_leg.num = first_leg_b.num)\nJOIN stops start_stop ON (first_leg.stop = start_stop.id)\nJOIN stops transfer_stop ON (first_leg_b.stop = transfer_stop.id)\nJOIN route second_leg ON (transfer_stop.id = second_leg.stop)\nJOIN route second_leg_b ON (second_leg.company = second_leg_b.company AND second_leg.num = second_leg_b.num)\nJOIN stops end_stop ON (second_leg_b.stop = end_stop.id)\nWHERE start_stop.name = ___\n  AND end_stop.name = ___",
    solution:
      "SELECT DISTINCT first_leg.company, first_leg.num, transfer_stop.name, second_leg.company, second_leg.num FROM route first_leg JOIN route first_leg_b ON (first_leg.company = first_leg_b.company AND first_leg.num = first_leg_b.num) JOIN stops start_stop ON (first_leg.stop = start_stop.id) JOIN stops transfer_stop ON (first_leg_b.stop = transfer_stop.id) JOIN route second_leg ON (transfer_stop.id = second_leg.stop) JOIN route second_leg_b ON (second_leg.company = second_leg_b.company AND second_leg.num = second_leg_b.num) JOIN stops end_stop ON (second_leg_b.stop = end_stop.id) WHERE start_stop.name = 'Craiglockhart' AND end_stop.name = 'Lochend'",
    hints: [
      "You need two self-joins on route: one for the first bus, one for the second.",
      "The transfer stop is where the first bus's route meets the second bus's route.",
      "Join six tables total: two pairs of route + their stops.",
    ],
    concepts: ["SELECT", "self JOIN", "JOIN", "WHERE", "DISTINCT"],
    dataset: "transport",
  },

  // ─── Section 11: DDL Basics ─────────────────────────────────────────
  {
    id: "ddl-basics-1",
    sectionId: "ddl-basics",
    orderIndex: 0,
    title: "Create a Simple Table",
    description:
      "Create a table called 'students' with columns: id (INTEGER PRIMARY KEY), name (TEXT NOT NULL), and age (INTEGER).",
    difficulty: "Easy",
    starterCode:
      "CREATE TABLE students (\n  id ___ PRIMARY KEY,\n  name ___ NOT NULL,\n  age ___\n)",
    solution:
      "CREATE TABLE students (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  age INTEGER\n)",
    hints: [
      "SQLite uses INTEGER, TEXT, REAL, BLOB as data types.",
      "PRIMARY KEY identifies each row uniquely.",
      "NOT NULL means the column cannot be empty.",
    ],
    concepts: ["CREATE TABLE", "PRIMARY KEY", "NOT NULL"],
    dataset: "world",
  },
  {
    id: "ddl-basics-2",
    sectionId: "ddl-basics",
    orderIndex: 1,
    title: "Add a Column",
    description:
      "Add an email column (TEXT) to the students table. Use ALTER TABLE.",
    difficulty: "Easy",
    starterCode: "ALTER TABLE students\n ADD COLUMN ___ ___",
    solution: "ALTER TABLE students ADD COLUMN email TEXT",
    hints: [
      "ALTER TABLE table_name ADD COLUMN column_name type.",
      "The new column will have NULL for existing rows.",
    ],
    concepts: ["ALTER TABLE", "ADD COLUMN"],
    dataset: "world",
  },
  {
    id: "ddl-basics-3",
    sectionId: "ddl-basics",
    orderIndex: 2,
    title: "Create Table with Constraints",
    description:
      "Create a table called 'courses' with: id (INTEGER PRIMARY KEY), title (TEXT NOT NULL UNIQUE), credits (INTEGER DEFAULT 3), and department (TEXT).",
    difficulty: "Medium",
    starterCode:
      "CREATE TABLE courses (\n  id INTEGER PRIMARY KEY,\n  title TEXT ___ ___,\n  credits INTEGER ___ ___,\n  department TEXT\n)",
    solution:
      "CREATE TABLE courses (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL UNIQUE,\n  credits INTEGER DEFAULT 3,\n  department TEXT\n)",
    hints: [
      "UNIQUE means no two rows can have the same value in that column.",
      "DEFAULT sets a value when none is provided during INSERT.",
      "You can combine multiple constraints: NOT NULL UNIQUE.",
    ],
    concepts: ["CREATE TABLE", "PRIMARY KEY", "NOT NULL", "UNIQUE", "DEFAULT"],
    dataset: "world",
  },
  {
    id: "ddl-basics-4",
    sectionId: "ddl-basics",
    orderIndex: 3,
    title: "Drop a Table",
    description:
      "Drop the 'courses' table if it exists. Use DROP TABLE IF EXISTS.",
    difficulty: "Easy",
    starterCode: "DROP TABLE ___ ___",
    solution: "DROP TABLE IF EXISTS courses",
    hints: [
      "DROP TABLE removes a table and all its data.",
      "IF EXISTS prevents an error if the table does not exist.",
    ],
    concepts: ["DROP TABLE", "IF EXISTS"],
    dataset: "world",
  },
  {
    id: "ddl-basics-5",
    sectionId: "ddl-basics",
    orderIndex: 4,
    title: "Create Table with Foreign Key",
    description:
      "Create a table called 'enrollments' with: id (INTEGER PRIMARY KEY), student_id (INTEGER, foreign key to students.id), course_id (INTEGER, foreign key to courses.id), and enrolled_date (TEXT).",
    difficulty: "Medium",
    starterCode:
      "CREATE TABLE enrollments (\n  id INTEGER PRIMARY KEY,\n  student_id INTEGER,\n  course_id INTEGER,\n  enrolled_date TEXT,\n  FOREIGN KEY (student_id) REFERENCES ___,\n  FOREIGN KEY (course_id) REFERENCES ___\n)",
    solution:
      "CREATE TABLE enrollments (\n  id INTEGER PRIMARY KEY,\n  student_id INTEGER,\n  course_id INTEGER,\n  enrolled_date TEXT,\n  FOREIGN KEY (student_id) REFERENCES students(id),\n  FOREIGN KEY (course_id) REFERENCES courses(id)\n)",
    hints: [
      "FOREIGN KEY (column) REFERENCES other_table(other_column).",
      "Foreign keys enforce referential integrity between tables.",
      "The referenced column must be a PRIMARY KEY or UNIQUE.",
    ],
    concepts: ["CREATE TABLE", "FOREIGN KEY", "REFERENCES"],
    dataset: "world",
  },

  // ─── Section 12: DML Practice ───────────────────────────────────────
  {
    id: "dml-practice-1",
    sectionId: "dml-practice",
    orderIndex: 0,
    title: "Insert a Row",
    description:
      "Insert a new country into the world table with name 'Testland', continent 'Europe', area 1000, population 50000, and gdp 1000000.",
    difficulty: "Easy",
    starterCode:
      "INSERT INTO world (name, continent, area, population, gdp)\n VALUES (___, ___, ___, ___, ___)",
    solution:
      "INSERT INTO world (name, continent, area, population, gdp) VALUES ('Testland', 'Europe', 1000, 50000, 1000000)",
    hints: [
      "List column names in parentheses, then VALUES with matching values.",
      "String values go in single quotes; numbers do not.",
    ],
    concepts: ["INSERT INTO", "VALUES"],
    dataset: "world",
  },
  {
    id: "dml-practice-2",
    sectionId: "dml-practice",
    orderIndex: 1,
    title: "Insert Multiple Rows",
    description:
      "Insert three countries at once: ('Alpha', 'Asia', 500, 10000, 500000), ('Beta', 'Africa', 800, 20000, 600000), and ('Gamma', 'Europe', 300, 5000, 200000).",
    difficulty: "Easy",
    starterCode:
      "INSERT INTO world (name, continent, area, population, gdp)\n VALUES\n  (___),\n  (___),\n  (___)",
    solution:
      "INSERT INTO world (name, continent, area, population, gdp) VALUES ('Alpha', 'Asia', 500, 10000, 500000), ('Beta', 'Africa', 800, 20000, 600000), ('Gamma', 'Europe', 300, 5000, 200000)",
    hints: [
      "Separate each row of VALUES with a comma.",
      "Each row is enclosed in its own parentheses.",
      "All rows must have the same number of values matching the column list.",
    ],
    concepts: ["INSERT INTO", "VALUES", "multiple rows"],
    dataset: "world",
  },
  {
    id: "dml-practice-3",
    sectionId: "dml-practice",
    orderIndex: 2,
    title: "Update a Row",
    description:
      "Update the population of 'Testland' to 75000.",
    difficulty: "Easy",
    starterCode:
      "UPDATE world\n SET population = ___\n WHERE name = ___",
    solution:
      "UPDATE world SET population = 75000 WHERE name = 'Testland'",
    hints: [
      "UPDATE table SET column = value WHERE condition.",
      "Always include a WHERE clause to avoid updating all rows.",
    ],
    concepts: ["UPDATE", "SET", "WHERE"],
    dataset: "world",
  },
  {
    id: "dml-practice-4",
    sectionId: "dml-practice",
    orderIndex: 3,
    title: "Delete Rows",
    description:
      "Delete all countries with a population less than 10000 from the world table.",
    difficulty: "Easy",
    starterCode: "DELETE FROM world\n WHERE population ___ ___",
    solution: "DELETE FROM world WHERE population < 10000",
    hints: [
      "DELETE FROM table WHERE condition.",
      "Use < for 'less than'.",
      "Without WHERE, DELETE removes ALL rows - be careful.",
    ],
    concepts: ["DELETE FROM", "WHERE"],
    dataset: "world",
  },
  {
    id: "dml-practice-5",
    sectionId: "dml-practice",
    orderIndex: 4,
    title: "Update with Subquery",
    description:
      "Set the gdp of 'Testland' to the average GDP of European countries. Use a subquery to calculate the average.",
    difficulty: "Medium",
    starterCode:
      "UPDATE world\n SET gdp = (\n   SELECT AVG(___) FROM world WHERE continent = ___\n )\n WHERE name = ___",
    solution:
      "UPDATE world SET gdp = (SELECT AVG(gdp) FROM world WHERE continent = 'Europe') WHERE name = 'Testland'",
    hints: [
      "Use a subquery in the SET clause to compute a value.",
      "AVG(gdp) calculates the average GDP.",
      "The subquery filters to European countries.",
    ],
    concepts: ["UPDATE", "SET", "WHERE", "subquery", "AVG"],
    dataset: "world",
  },
];
