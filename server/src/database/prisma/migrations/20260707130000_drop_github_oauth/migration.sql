-- DropForeignKey
ALTER TABLE "githubPullRequest" DROP CONSTRAINT IF EXISTS "githubPullRequest_connectionId_fkey";

-- DropForeignKey
ALTER TABLE "githubContributedRepo" DROP CONSTRAINT IF EXISTS "githubContributedRepo_connectionId_fkey";

-- DropForeignKey
ALTER TABLE "githubConnection" DROP CONSTRAINT IF EXISTS "githubConnection_userId_fkey";

-- DropTable
DROP TABLE IF EXISTS "githubPullRequest";

-- DropTable
DROP TABLE IF EXISTS "githubContributedRepo";

-- DropTable
DROP TABLE IF EXISTS "githubConnection";

-- DropEnum
DROP TYPE IF EXISTS "GithubSyncStatus";
