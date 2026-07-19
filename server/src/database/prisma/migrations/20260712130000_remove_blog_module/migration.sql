-- Remove the blog feature (blogPost model, /blog and /blog/:slug pages, /api/blog routes).
-- No admin CRUD was ever wired up, so only seed-script placeholder posts exist in prod.
DROP TABLE IF EXISTS "blogPost" CASCADE;

DROP TYPE IF EXISTS "BlogCategory";
DROP TYPE IF EXISTS "BlogStatus";
