import type { SqlExercise } from "./exercises";

export const exercisesSelect: SqlExercise[] = [
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
  {
    id: "select-basics-4",
    sectionId: "select-basics",
    orderIndex: 3,
    title: "Large Countries by Area",
    description:
      "Show the name and area for countries with an area larger than 1,000,000 sq km.",
    difficulty: "Easy",
    starterCode: "SELECT name, area FROM world\n WHERE area ___ ___",
    solution: "SELECT name, area FROM world WHERE area > 1000000",
    hints: [
      "Use the > operator for 'greater than'.",
      "Numeric values do not need quotes.",
    ],
    concepts: ["SELECT", "WHERE", ">"],
    dataset: "world",
  },
  {
    id: "select-basics-5",
    sectionId: "select-basics",
    orderIndex: 4,
    title: "European Capitals",
    description:
      "Show the name and capital for all European countries. Filter by continent.",
    difficulty: "Easy",
    starterCode: "SELECT name, capital FROM world\n WHERE continent = ___",
    solution: "SELECT name, capital FROM world WHERE continent = 'Europe'",
    hints: [
      "Use the = operator to match a specific continent.",
      "String values require single quotes.",
    ],
    concepts: ["SELECT", "WHERE", "="],
    dataset: "world",
  },
  {
    id: "select-basics-6",
    sectionId: "select-basics",
    orderIndex: 5,
    title: "Countries Not in Europe",
    description:
      "Show the name and continent for countries that are NOT in Europe.",
    difficulty: "Easy",
    starterCode: "SELECT name, continent FROM world\n WHERE continent ___ 'Europe'",
    solution: "SELECT name, continent FROM world WHERE continent <> 'Europe'",
    hints: [
      "Use <> or != for 'not equal to'.",
      "This excludes all European countries from the result.",
    ],
    concepts: ["SELECT", "WHERE", "<>"],
    dataset: "world",
  },
  {
    id: "select-basics-7",
    sectionId: "select-basics",
    orderIndex: 6,
    title: "Ordering by Population",
    description:
      "Show the name and population of all countries, ordered by population in descending order.",
    difficulty: "Easy",
    starterCode: "SELECT name, population FROM world\n ORDER BY population ___",
    solution:
      "SELECT name, population FROM world ORDER BY population DESC",
    hints: [
      "Use ORDER BY column_name DESC for descending order.",
      "ASC is ascending (default), DESC is descending.",
    ],
    concepts: ["SELECT", "ORDER BY", "DESC"],
    dataset: "world",
  },
  {
    id: "select-basics-8",
    sectionId: "select-basics",
    orderIndex: 7,
    title: "Limit Results",
    description:
      "Show the name and GDP of the 5 countries with the highest GDP. Use ORDER BY and LIMIT.",
    difficulty: "Easy",
    starterCode: "SELECT name, gdp FROM world\n ORDER BY gdp ___\n LIMIT ___",
    solution:
      "SELECT name, gdp FROM world ORDER BY gdp DESC LIMIT 5",
    hints: [
      "Order by gdp DESC to get the highest first.",
      "LIMIT 5 restricts the result to 5 rows.",
    ],
    concepts: ["SELECT", "ORDER BY", "DESC", "LIMIT"],
    dataset: "world",
  },
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
];
