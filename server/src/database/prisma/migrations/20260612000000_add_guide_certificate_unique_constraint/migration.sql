-- AddUniqueIndex: guideCertificate_userId_guideName_key
-- Eliminates the race condition in issueCertificate by allowing an atomic upsert.
-- Any pre-existing duplicate rows should be deduplicated before applying this migration.
CREATE UNIQUE INDEX "guideCertificate_userId_guideName_key" ON "guideCertificate"("userId", "guideName");
