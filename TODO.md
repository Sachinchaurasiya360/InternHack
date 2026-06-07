# TODO - Round archiving (soft delete)

- [x] Add `isArchived` boolean to Prisma `round` model (`server/src/database/prisma/schema/base.prisma`).

- [x] Create Prisma migration adding the column.

- [x] Update `RecruiterService.deleteRound()` to archive (set `isArchived=true`) instead of hard delete.

- [x] Update `RecruiterService.getRounds()` to return only non-archived rounds.

- [x] Update `RecruiterService.advanceApplication()` to consider only non-archived rounds.

- [x] Update `RecruiterService.getJobAnalytics()` to exclude archived rounds from `roundAnalytics`.

- [x] Update `RecruiterService.getSubmission()` / `evaluateSubmission()` if needed to prevent pipeline interactions with archived rounds.


- [ ] Run tests/lint/build.
- [x] Wrap deleteRound re-indexing in a transaction + use temporary indices to avoid unique constraint collisions
- [x] Fix reorderRounds to operate on non-archived rounds only and return only active rounds



