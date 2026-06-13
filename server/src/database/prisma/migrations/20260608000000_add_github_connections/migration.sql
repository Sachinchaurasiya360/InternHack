CREATE TYPE "GithubSyncStatus" AS ENUM ('PENDING', 'SYNCING', 'SUCCESS', 'FAILED');

CREATE TABLE "githubConnection" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "githubUsername" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSyncAt" TIMESTAMP(3),
    "syncStatus" "GithubSyncStatus" NOT NULL DEFAULT 'PENDING',
    "syncError" TEXT,
    "prsMerged" INTEGER NOT NULL DEFAULT 0,
    "reposContributed" INTEGER NOT NULL DEFAULT 0,
    "publicRepos" INTEGER NOT NULL DEFAULT 0,
    "contributedStars" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "githubConnection_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "githubPullRequest" (
    "id" SERIAL NOT NULL,
    "connectionId" INTEGER NOT NULL,
    "githubId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "mergedAt" TIMESTAMP(3) NOT NULL,
    "repoName" TEXT NOT NULL,
    "repoUrl" TEXT NOT NULL,
    "repoStars" INTEGER NOT NULL DEFAULT 0,
    "language" TEXT,

    CONSTRAINT "githubPullRequest_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "githubContributedRepo" (
    "id" SERIAL NOT NULL,
    "connectionId" INTEGER NOT NULL,
    "nameWithOwner" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "stars" INTEGER NOT NULL DEFAULT 0,
    "language" TEXT,
    "mergedPrs" INTEGER NOT NULL DEFAULT 0,
    "lastMergedAt" TIMESTAMP(3),

    CONSTRAINT "githubContributedRepo_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "githubConnection_userId_key" ON "githubConnection"("userId");
CREATE INDEX "githubConnection_githubUsername_idx" ON "githubConnection"("githubUsername");
CREATE INDEX "githubConnection_lastSyncAt_idx" ON "githubConnection"("lastSyncAt");

CREATE UNIQUE INDEX "githubPullRequest_connectionId_githubId_key" ON "githubPullRequest"("connectionId", "githubId");
CREATE INDEX "githubPullRequest_connectionId_mergedAt_idx" ON "githubPullRequest"("connectionId", "mergedAt");

CREATE UNIQUE INDEX "githubContributedRepo_connectionId_nameWithOwner_key" ON "githubContributedRepo"("connectionId", "nameWithOwner");
CREATE INDEX "githubContributedRepo_connectionId_stars_idx" ON "githubContributedRepo"("connectionId", "stars");

ALTER TABLE "githubConnection" ADD CONSTRAINT "githubConnection_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "githubPullRequest" ADD CONSTRAINT "githubPullRequest_connectionId_fkey"
FOREIGN KEY ("connectionId") REFERENCES "githubConnection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "githubContributedRepo" ADD CONSTRAINT "githubContributedRepo_connectionId_fkey"
FOREIGN KEY ("connectionId") REFERENCES "githubConnection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
