import type { SqlExercise } from "./exercises";

export const exercisesJoins: SqlExercise[] = [
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
];
