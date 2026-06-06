import type { SqlExercise } from "./exercises";

export const exercisesWindowDdlDml: SqlExercise[] = [
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
  {
    id: "window-functions-7",
    sectionId: "window-functions",
    orderIndex: 6,
    title: "Running Total of Votes",
    description:
      "For the constituency 'S14000021' in 2017, show each candidate's lastName, party, votes, and a running total of votes ordered by votes descending.",
    difficulty: "Medium",
    starterCode:
      "SELECT lastName, party, votes,\n  SUM(votes) OVER (ORDER BY votes ___) AS running_total\nFROM ge\nWHERE constituency = 'S14000021'\n  AND yr = 2017",
    solution:
      "SELECT lastName, party, votes, SUM(votes) OVER (ORDER BY votes DESC) AS running_total FROM ge WHERE constituency = 'S14000021' AND yr = 2017",
    hints: [
      "SUM() OVER (ORDER BY ...) creates a running total.",
      "ORDER BY votes DESC gives highest votes first.",
      "Each row's running_total includes all prior rows.",
    ],
    concepts: ["SUM", "OVER", "ORDER BY", "window function", "running total"],
    dataset: "election",
  },
  {
    id: "window-functions-8",
    sectionId: "window-functions",
    orderIndex: 7,
    title: "Vote Share with LAG",
    description:
      "For constituency 'S14000022' in 2017, show each candidate's lastName, votes, and the difference in votes compared to the next candidate (ordered by votes DESC). Use LAG to get the previous row's votes.",
    difficulty: "Hard",
    starterCode:
      "SELECT lastName, votes,\n  votes - LAG(votes) OVER (ORDER BY votes ___) AS vote_gap\nFROM ge\nWHERE constituency = 'S14000022'\n  AND yr = 2017",
    solution:
      "SELECT lastName, votes, votes - LAG(votes) OVER (ORDER BY votes DESC) AS vote_gap FROM ge WHERE constituency = 'S14000022' AND yr = 2017",
    hints: [
      "LAG(column) OVER (...) returns the value from the previous row.",
      "The first row will have NULL for vote_gap since there's no previous row.",
      "Order by votes DESC to compare each candidate with the one above.",
    ],
    concepts: ["LAG", "OVER", "ORDER BY", "window function"],
    dataset: "election",
  },
  {
    id: "window-functions-9",
    sectionId: "window-functions",
    orderIndex: 8,
    title: "NTILE Quartiles",
    description:
      "Divide the 2017 candidates in constituency 'S14000021' into 2 groups (halves) based on votes. Show lastName, votes, and the group number using NTILE.",
    difficulty: "Medium",
    starterCode:
      "SELECT lastName, votes,\n  NTILE(___) OVER (ORDER BY votes DESC) AS vote_half\nFROM ge\nWHERE constituency = 'S14000021'\n  AND yr = 2017",
    solution:
      "SELECT lastName, votes, NTILE(2) OVER (ORDER BY votes DESC) AS vote_half FROM ge WHERE constituency = 'S14000021' AND yr = 2017",
    hints: [
      "NTILE(n) divides rows into n roughly equal groups.",
      "NTILE(2) creates two halves: top half gets 1, bottom half gets 2.",
    ],
    concepts: ["NTILE", "OVER", "ORDER BY", "window function"],
    dataset: "election",
  },
  {
    id: "window-functions-10",
    sectionId: "window-functions",
    orderIndex: 9,
    title: "DENSE_RANK Comparison",
    description:
      "For constituency 'S14000025' in both 2015 and 2017, show yr, lastName, party, votes, and the DENSE_RANK based on votes per year. Partition by yr.",
    difficulty: "Hard",
    starterCode:
      "SELECT yr, lastName, party, votes,\n  DENSE_RANK() OVER (PARTITION BY ___ ORDER BY votes ___) AS rnk\nFROM ge\nWHERE constituency = 'S14000025'\n  AND yr IN (2015, 2017)\nORDER BY yr, rnk",
    solution:
      "SELECT yr, lastName, party, votes, DENSE_RANK() OVER (PARTITION BY yr ORDER BY votes DESC) AS rnk FROM ge WHERE constituency = 'S14000025' AND yr IN (2015, 2017) ORDER BY yr, rnk",
    hints: [
      "PARTITION BY yr gives each year its own ranking.",
      "DENSE_RANK does not skip numbers when there are ties.",
      "ORDER BY yr, rnk sorts the final output by year then rank.",
    ],
    concepts: ["DENSE_RANK", "PARTITION BY", "OVER", "ORDER BY", "window function"],
    dataset: "election",
  },
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
  {
    id: "ddl-basics-6",
    sectionId: "ddl-basics",
    orderIndex: 5,
    title: "Add a Column",
    description:
      "Add a column called 'email' of type TEXT to the 'students' table using ALTER TABLE.",
    difficulty: "Easy",
    starterCode: "ALTER TABLE students\n ADD ___ ___",
    solution: "ALTER TABLE students ADD email TEXT",
    hints: [
      "ALTER TABLE table_name ADD column_name data_type.",
      "New columns are added with NULL values for existing rows.",
    ],
    concepts: ["ALTER TABLE", "ADD"],
    dataset: "world",
  },
  {
    id: "ddl-basics-7",
    sectionId: "ddl-basics",
    orderIndex: 6,
    title: "Rename a Column",
    description:
      "Rename the column 'age' to 'birth_year' in the 'students' table.",
    difficulty: "Medium",
    starterCode: "ALTER TABLE students\n RENAME COLUMN ___ TO ___",
    solution: "ALTER TABLE students RENAME COLUMN age TO birth_year",
    hints: [
      "ALTER TABLE ... RENAME COLUMN old_name TO new_name.",
      "This only changes the column name, not its data.",
    ],
    concepts: ["ALTER TABLE", "RENAME COLUMN"],
    dataset: "world",
  },
  {
    id: "ddl-basics-8",
    sectionId: "ddl-basics",
    orderIndex: 7,
    title: "Drop a Column",
    description:
      "Remove the 'email' column from the 'students' table.",
    difficulty: "Easy",
    starterCode: "ALTER TABLE students\n DROP COLUMN ___",
    solution: "ALTER TABLE students DROP COLUMN email",
    hints: [
      "ALTER TABLE ... DROP COLUMN column_name.",
      "This permanently removes the column and all its data.",
    ],
    concepts: ["ALTER TABLE", "DROP COLUMN"],
    dataset: "world",
  },
  {
    id: "ddl-basics-9",
    sectionId: "ddl-basics",
    orderIndex: 8,
    title: "Create with Default",
    description:
      "Create a table called 'posts' with: id (INTEGER PRIMARY KEY), title (TEXT NOT NULL), content (TEXT), and status (TEXT DEFAULT 'draft').",
    difficulty: "Medium",
    starterCode:
      "CREATE TABLE posts (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL,\n  content TEXT,\n  status TEXT ___ '___'\n)",
    solution:
      "CREATE TABLE posts (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL,\n  content TEXT,\n  status TEXT DEFAULT 'draft'\n)",
    hints: [
      "DEFAULT provides a value when none is specified during INSERT.",
      "DEFAULT 'draft' sets the status to 'draft' automatically.",
    ],
    concepts: ["CREATE TABLE", "DEFAULT"],
    dataset: "world",
  },
  {
    id: "ddl-basics-10",
    sectionId: "ddl-basics",
    orderIndex: 9,
    title: "Create with UNIQUE",
    description:
      "Create a table called 'users' with: id (INTEGER PRIMARY KEY), username (TEXT NOT NULL UNIQUE), email (TEXT NOT NULL UNIQUE), and password (TEXT NOT NULL).",
    difficulty: "Medium",
    starterCode:
      "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  username TEXT NOT NULL ___,\n  email TEXT NOT NULL ___,\n  password TEXT NOT NULL\n)",
    solution:
      "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  username TEXT NOT NULL UNIQUE,\n  email TEXT NOT NULL UNIQUE,\n  password TEXT NOT NULL\n)",
    hints: [
      "UNIQUE ensures no two rows can have the same value in that column.",
      "A column can be both NOT NULL and UNIQUE.",
    ],
    concepts: ["CREATE TABLE", "UNIQUE", "NOT NULL"],
    dataset: "world",
  },
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
  {
    id: "dml-practice-6",
    sectionId: "dml-practice",
    orderIndex: 5,
    title: "Update Multiple Columns",
    description:
      "Update 'Testland' to have a population of 100000 and an area of 2000 in a single UPDATE statement.",
    difficulty: "Easy",
    starterCode:
      "UPDATE world\n SET population = ___, area = ___\n WHERE name = ___",
    solution:
      "UPDATE world SET population = 100000, area = 2000 WHERE name = 'Testland'",
    hints: [
      "Separate multiple SET assignments with commas.",
      "SET population = 100000, area = 2000 updates both columns.",
    ],
    concepts: ["UPDATE", "SET", "WHERE", "multiple columns"],
    dataset: "world",
  },
  {
    id: "dml-practice-7",
    sectionId: "dml-practice",
    orderIndex: 6,
    title: "Conditional Update",
    description:
      "Double the GDP of all countries in Africa (multiply gdp by 2).",
    difficulty: "Medium",
    starterCode:
      "UPDATE world\n SET gdp = gdp * ___\n WHERE continent = ___",
    solution:
      "UPDATE world SET gdp = gdp * 2 WHERE continent = 'Africa'",
    hints: [
      "You can use expressions in SET, like gdp = gdp * 2.",
      "The WHERE clause limits which rows are updated.",
    ],
    concepts: ["UPDATE", "SET", "WHERE", "arithmetic"],
    dataset: "world",
  },
  {
    id: "dml-practice-8",
    sectionId: "dml-practice",
    orderIndex: 7,
    title: "Delete with IN",
    description:
      "Delete all countries whose continent is either 'Alpha' or 'Beta' or 'Gamma' (test countries) from the world table.",
    difficulty: "Easy",
    starterCode: "DELETE FROM world\n WHERE name IN (___)",
    solution:
      "DELETE FROM world WHERE name IN ('Alpha', 'Beta', 'Gamma')",
    hints: [
      "IN lets you match against a list of values.",
      "Each value in the list goes in single quotes.",
    ],
    concepts: ["DELETE FROM", "WHERE", "IN"],
    dataset: "world",
  },
  {
    id: "dml-practice-9",
    sectionId: "dml-practice",
    orderIndex: 8,
    title: "Insert from SELECT",
    description:
      "Insert into a table called 'big_countries' (same columns as world) all countries with population > 100000000.",
    difficulty: "Hard",
    starterCode:
      "INSERT INTO big_countries\n SELECT * FROM world\n WHERE population ___ ___",
    solution:
      "INSERT INTO big_countries SELECT * FROM world WHERE population > 100000000",
    hints: [
      "INSERT INTO ... SELECT copies rows from one table to another.",
      "No VALUES keyword needed when using SELECT.",
      "The SELECT must return columns matching the target table.",
    ],
    concepts: ["INSERT INTO", "SELECT", "WHERE"],
    dataset: "world",
  },
  {
    id: "dml-practice-10",
    sectionId: "dml-practice",
    orderIndex: 9,
    title: "Update with CASE",
    description:
      "Update the continent column: change 'North America' to 'Americas' and 'South America' to 'Americas'. Leave all other continents unchanged.",
    difficulty: "Hard",
    starterCode:
      "UPDATE world\n SET continent = CASE\n   WHEN continent = 'North America' THEN ___\n   WHEN continent = 'South America' THEN ___\n   ELSE continent\n END\n WHERE continent IN ('North America', 'South America')",
    solution:
      "UPDATE world SET continent = CASE WHEN continent = 'North America' THEN 'Americas' WHEN continent = 'South America' THEN 'Americas' ELSE continent END WHERE continent IN ('North America', 'South America')",
    hints: [
      "CASE WHEN ... THEN ... END lets you conditionally set values.",
      "Use ELSE continent to keep unchanged continents the same.",
      "The WHERE clause limits which rows are evaluated.",
    ],
    concepts: ["UPDATE", "SET", "CASE", "WHEN", "THEN", "ELSE", "IN"],
    dataset: "world",
  },
];
