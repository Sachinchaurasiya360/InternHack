-- Move every config still pointing at the retired model onto the auto-tracking alias
UPDATE "aiServiceConfig"
SET "modelName" = 'gemini-flash-lite-latest', "updatedAt" = now()
WHERE "modelName" = 'gemini-2.5-flash-lite';

-- Seed configs for the services newly routed through the provider registry.
-- Must run in a separate migration from the ALTER TYPE: Postgres forbids using
-- a new enum value in the transaction that added it.
INSERT INTO "aiServiceConfig" ("service", "provider", "modelName", "updatedAt") VALUES
  ('DSA_TESTCASE_GEN', 'GEMINI', 'gemini-flash-lite-latest', now()),
  ('BEHAVIORAL_EVALUATION', 'GEMINI', 'gemini-flash-lite-latest', now()),
  ('GSOC_REVIEW', 'GEMINI', 'gemini-flash-lite-latest', now()),
  ('JOB_ENRICHMENT', 'GEMINI', 'gemini-flash-lite-latest', now()),
  ('LEARN_READINESS', 'GEMINI', 'gemini-flash-lite-latest', now())
ON CONFLICT ("service") DO NOTHING;
