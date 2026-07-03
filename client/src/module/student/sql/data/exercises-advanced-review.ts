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
  {
    id: "advanced-sql-review-11",
    sectionId: "advanced-sql-review",
    orderIndex: 10,
    title: "Monthly Completed Revenue",
    description:
      "For completed store orders, return each order month and total revenue. Use strftime to group ISO order dates by month.",
    difficulty: "Medium",
    starterCode:
      "SELECT strftime(___, order_date) AS order_month,\n  ROUND(SUM(total), 2) AS revenue\nFROM orders\nWHERE status = ___\nGROUP BY order_month\nORDER BY order_month",
    solution:
      "SELECT strftime('%Y-%m', order_date) AS order_month, ROUND(SUM(total), 2) AS revenue FROM orders WHERE status = 'completed' GROUP BY order_month ORDER BY order_month",
    hints: [
      "The store dataset uses ISO dates, so SQLite date functions can parse them.",
      "strftime('%Y-%m', order_date) extracts the month bucket.",
      "Filter to completed orders before aggregating revenue.",
    ],
    concepts: ["strftime", "date functions", "SUM", "GROUP BY"],
    dataset: "store",
  },
  {
    id: "advanced-sql-review-12",
    sectionId: "advanced-sql-review",
    orderIndex: 11,
    title: "Days Between Completed Orders",
    description:
      "For completed orders, show customer_id, order_date, and the number of days since that customer's previous completed order. Use LAG and julianday.",
    difficulty: "Hard",
    starterCode:
      "SELECT customer_id, order_date,\n  CAST(julianday(order_date) - julianday(\n    LAG(order_date) OVER (PARTITION BY ___ ORDER BY ___)\n  ) AS INTEGER) AS days_since_previous\nFROM orders\nWHERE status = 'completed'\nORDER BY customer_id, order_date",
    solution:
      "SELECT customer_id, order_date, CAST(julianday(order_date) - julianday(LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date)) AS INTEGER) AS days_since_previous FROM orders WHERE status = 'completed' ORDER BY customer_id, order_date",
    hints: [
      "LAG(order_date) gets the previous completed order date for each customer.",
      "PARTITION BY customer_id keeps each customer's timeline separate.",
      "julianday(date1) - julianday(date2) returns the difference in days.",
    ],
    concepts: ["LAG", "julianday", "PARTITION BY", "date functions"],
    dataset: "store",
  },
  {
    id: "advanced-sql-review-13",
    sectionId: "advanced-sql-review",
    orderIndex: 12,
    title: "First Completed Order CTE",
    description:
      "Use CTEs to find each customer's first completed order date, then return the customer name and first_order_date sorted by date and name.",
    difficulty: "Medium",
    starterCode:
      "WITH completed_orders AS (\n  SELECT customer_id, order_date\n  FROM orders\n  WHERE status = ___\n), first_orders AS (\n  SELECT customer_id, MIN(order_date) AS first_order_date\n  FROM completed_orders\n  GROUP BY ___\n)\nSELECT customers.name, first_orders.first_order_date\nFROM customers\nJOIN first_orders ON customers.id = first_orders.customer_id\nORDER BY first_order_date, customers.name",
    solution:
      "WITH completed_orders AS (SELECT customer_id, order_date FROM orders WHERE status = 'completed'), first_orders AS (SELECT customer_id, MIN(order_date) AS first_order_date FROM completed_orders GROUP BY customer_id) SELECT customers.name, first_orders.first_order_date FROM customers JOIN first_orders ON customers.id = first_orders.customer_id ORDER BY first_order_date, customers.name",
    hints: [
      "The first CTE should isolate completed orders.",
      "The second CTE should group by customer_id and use MIN(order_date).",
      "Join back to customers to return readable names.",
    ],
    concepts: ["CTE", "MIN", "GROUP BY", "JOIN"],
    dataset: "store",
  },
  {
    id: "advanced-sql-review-14",
    sectionId: "advanced-sql-review",
    orderIndex: 13,
    title: "Customers Without Completed Orders",
    description:
      "Find customers who have no completed orders. Use a LEFT JOIN with the completed-order condition in the join clause.",
    difficulty: "Medium",
    starterCode:
      "SELECT customers.name, customers.region\nFROM customers\nLEFT JOIN orders\n  ON customers.id = orders.customer_id\n  AND orders.status = ___\nWHERE orders.id IS ___\nORDER BY customers.name",
    solution:
      "SELECT customers.name, customers.region FROM customers LEFT JOIN orders ON customers.id = orders.customer_id AND orders.status = 'completed' WHERE orders.id IS NULL ORDER BY customers.name",
    hints: [
      "Keep the status filter in the ON clause so customers without completed orders remain in the result.",
      "Matched order columns are NULL when the LEFT JOIN finds no completed order.",
      "WHERE orders.id IS NULL returns only those unmatched customers.",
    ],
    concepts: ["LEFT JOIN", "anti join", "NULL", "ON clause filtering"],
    dataset: "store",
  },
  {
    id: "advanced-sql-review-15",
    sectionId: "advanced-sql-review",
    orderIndex: 14,
    title: "Regional Customer Revenue Rank",
    description:
      "Calculate completed-order revenue by customer, then rank customers within each region by revenue using DENSE_RANK.",
    difficulty: "Hard",
    starterCode:
      "WITH customer_revenue AS (\n  SELECT customers.id, customers.name, customers.region,\n    SUM(orders.total) AS revenue\n  FROM customers\n  JOIN orders ON customers.id = orders.customer_id\n  WHERE orders.status = 'completed'\n  GROUP BY customers.id, customers.name, customers.region\n)\nSELECT name, region, ROUND(revenue, 2) AS revenue,\n  DENSE_RANK() OVER (PARTITION BY ___ ORDER BY revenue DESC) AS region_rank\nFROM customer_revenue\nORDER BY region, region_rank, name",
    solution:
      "WITH customer_revenue AS (SELECT customers.id, customers.name, customers.region, SUM(orders.total) AS revenue FROM customers JOIN orders ON customers.id = orders.customer_id WHERE orders.status = 'completed' GROUP BY customers.id, customers.name, customers.region) SELECT name, region, ROUND(revenue, 2) AS revenue, DENSE_RANK() OVER (PARTITION BY region ORDER BY revenue DESC) AS region_rank FROM customer_revenue ORDER BY region, region_rank, name",
    hints: [
      "First aggregate completed revenue per customer in a CTE.",
      "Use DENSE_RANK in the outer query so ranking uses the aggregate revenue.",
      "PARTITION BY region restarts ranking for each region.",
    ],
    concepts: ["CTE", "DENSE_RANK", "PARTITION BY", "SUM"],
    dataset: "store",
  },
  {
    id: "advanced-sql-review-16",
    sectionId: "advanced-sql-review",
    orderIndex: 15,
    title: "Category Revenue Share",
    description:
      "Calculate completed-order revenue by product category, then show each category's revenue and percentage share of total category revenue.",
    difficulty: "Hard",
    starterCode:
      "WITH category_revenue AS (\n  SELECT products.category,\n    SUM(order_items.quantity * order_items.unit_price) AS revenue\n  FROM order_items\n  JOIN products ON order_items.sku = products.sku\n  JOIN orders ON order_items.order_id = orders.id\n  WHERE orders.status = 'completed'\n  GROUP BY products.category\n)\nSELECT category, ROUND(revenue, 2) AS revenue,\n  ROUND(revenue * 100.0 / SUM(revenue) OVER (), ___) AS pct_of_revenue\nFROM category_revenue\nORDER BY revenue DESC",
    solution:
      "WITH category_revenue AS (SELECT products.category, SUM(order_items.quantity * order_items.unit_price) AS revenue FROM order_items JOIN products ON order_items.sku = products.sku JOIN orders ON order_items.order_id = orders.id WHERE orders.status = 'completed' GROUP BY products.category) SELECT category, ROUND(revenue, 2) AS revenue, ROUND(revenue * 100.0 / SUM(revenue) OVER (), 2) AS pct_of_revenue FROM category_revenue ORDER BY revenue DESC",
    hints: [
      "Use order_items quantity times unit_price to compute line revenue.",
      "Filter through the orders table so refunded and pending orders are excluded.",
      "SUM(revenue) OVER () gives the total across all category rows.",
    ],
    concepts: ["CTE", "JOIN", "window aggregate", "percentage"],
    dataset: "store",
  },
  {
    id: "advanced-sql-review-17",
    sectionId: "advanced-sql-review",
    orderIndex: 16,
    title: "High-Value Customers with EXISTS",
    description:
      "Return customers who have at least one completed order above the average completed order total. Use EXISTS and a scalar subquery.",
    difficulty: "Hard",
    starterCode:
      "SELECT name, region\nFROM customers\nWHERE EXISTS (\n  SELECT 1\n  FROM orders\n  WHERE orders.customer_id = customers.id\n    AND orders.status = 'completed'\n    AND orders.total > (\n      SELECT ___(total) FROM orders WHERE status = 'completed'\n    )\n)\nORDER BY name",
    solution:
      "SELECT name, region FROM customers WHERE EXISTS (SELECT 1 FROM orders WHERE orders.customer_id = customers.id AND orders.status = 'completed' AND orders.total > (SELECT AVG(total) FROM orders WHERE status = 'completed')) ORDER BY name",
    hints: [
      "EXISTS checks whether the correlated subquery returns at least one row.",
      "The scalar subquery should calculate AVG(total) for completed orders.",
      "Correlate orders back to the outer customers row with customer_id = customers.id.",
    ],
    concepts: ["EXISTS", "correlated subquery", "AVG", "scalar subquery"],
    dataset: "store",
  },
  {
    id: "advanced-sql-review-18",
    sectionId: "advanced-sql-review",
    orderIndex: 17,
    title: "Index-Assisted Order Lookup",
    description:
      "Create a composite index named idx_orders_customer_date on customer_id and order_date, then use EXPLAIN QUERY PLAN to inspect a filtered order lookup.",
    difficulty: "Hard",
    starterCode:
      "CREATE INDEX IF NOT EXISTS idx_orders_customer_date\nON orders(___, ___);\n\nEXPLAIN QUERY PLAN\nSELECT id, order_date, total\nFROM orders\nWHERE customer_id = 1\n  AND order_date >= '2024-02-01'\nORDER BY order_date",
    solution:
      "CREATE INDEX IF NOT EXISTS idx_orders_customer_date ON orders(customer_id, order_date); EXPLAIN QUERY PLAN SELECT id, order_date, total FROM orders WHERE customer_id = 1 AND order_date >= '2024-02-01' ORDER BY order_date",
    hints: [
      "Use IF NOT EXISTS so repeated runs do not fail if the index already exists.",
      "The leftmost indexed column should match the equality filter: customer_id.",
      "EXPLAIN QUERY PLAN returns the query plan as the result set for validation.",
    ],
    concepts: ["CREATE INDEX", "EXPLAIN QUERY PLAN", "composite index", "optimization"],
    dataset: "store",
  },
  {
    id: "advanced-sql-review-19",
    sectionId: "advanced-sql-review",
    orderIndex: 18,
    title: "Signup Cohort Conversion",
    description:
      "Group customers by signup month and calculate how many have at least one completed order. Show customers, converted_customers, and conversion_pct.",
    difficulty: "Hard",
    starterCode:
      "WITH first_completed AS (\n  SELECT customer_id, MIN(order_date) AS first_order_date\n  FROM orders\n  WHERE status = 'completed'\n  GROUP BY customer_id\n)\nSELECT strftime('%Y-%m', customers.signup_date) AS signup_month,\n  COUNT(customers.id) AS customers,\n  COUNT(first_completed.customer_id) AS converted_customers,\n  ROUND(COUNT(first_completed.customer_id) * 100.0 / COUNT(customers.id), ___) AS conversion_pct\nFROM customers\nLEFT JOIN first_completed ON customers.id = first_completed.customer_id\nGROUP BY signup_month\nORDER BY signup_month",
    solution:
      "WITH first_completed AS (SELECT customer_id, MIN(order_date) AS first_order_date FROM orders WHERE status = 'completed' GROUP BY customer_id) SELECT strftime('%Y-%m', customers.signup_date) AS signup_month, COUNT(customers.id) AS customers, COUNT(first_completed.customer_id) AS converted_customers, ROUND(COUNT(first_completed.customer_id) * 100.0 / COUNT(customers.id), 1) AS conversion_pct FROM customers LEFT JOIN first_completed ON customers.id = first_completed.customer_id GROUP BY signup_month ORDER BY signup_month",
    hints: [
      "Use a CTE to reduce each converted customer to one first completed order row.",
      "LEFT JOIN keeps customers who have not converted yet.",
      "COUNT(first_completed.customer_id) counts only customers with a completed order.",
    ],
    concepts: ["cohort analysis", "CTE", "LEFT JOIN", "date functions"],
    dataset: "store",
  },
  {
    id: "advanced-sql-review-20",
    sectionId: "advanced-sql-review",
    orderIndex: 19,
    title: "Products Never Sold in Completed Orders",
    description:
      "Find products that have never appeared on a completed order. Use NOT EXISTS with a join inside the subquery.",
    difficulty: "Hard",
    starterCode:
      "SELECT products.sku, products.name\nFROM products\nWHERE NOT EXISTS (\n  SELECT 1\n  FROM order_items\n  JOIN orders ON orders.id = order_items.order_id\n  WHERE order_items.sku = products.sku\n    AND orders.status = ___\n)\nORDER BY products.sku",
    solution:
      "SELECT products.sku, products.name FROM products WHERE NOT EXISTS (SELECT 1 FROM order_items JOIN orders ON orders.id = order_items.order_id WHERE order_items.sku = products.sku AND orders.status = 'completed') ORDER BY products.sku",
    hints: [
      "NOT EXISTS returns outer rows where the subquery finds no match.",
      "Join order_items to orders inside the subquery so you can filter to completed orders.",
      "Correlate the subquery with order_items.sku = products.sku.",
    ],
    concepts: ["NOT EXISTS", "correlated subquery", "JOIN", "anti join"],
    dataset: "store",
  },
];