-- Open source repository discovery composite indexes

CREATE INDEX "opensourceRepo_trending_stars_idx"
ON "opensourceRepo" ("trending", "stars" DESC);

CREATE INDEX "opensourceRepo_hacktoberfest_stars_idx"
ON "opensourceRepo" ("hacktoberfest", "stars" DESC);

CREATE INDEX "opensourceRepo_domain_difficulty_stars_idx"
ON "opensourceRepo" ("domain", "difficulty", "stars" DESC);

CREATE INDEX "opensourceRepo_healthScore_stars_idx"
ON "opensourceRepo" ("healthScore", "stars" DESC);