-- Remove the OSS Ambassador program: ambassador records, referral links and
-- conversions, spotlights, shares, and the related enums.
DROP TABLE IF EXISTS "referralConversion" CASCADE;
DROP TABLE IF EXISTS "referralLink" CASCADE;
DROP TABLE IF EXISTS "ambassadorShare" CASCADE;
DROP TABLE IF EXISTS "ambassadorSpotlight" CASCADE;
DROP TABLE IF EXISTS "ambassador" CASCADE;

DROP TYPE IF EXISTS "AmbassadorStatus";
DROP TYPE IF EXISTS "ShareStatus";
