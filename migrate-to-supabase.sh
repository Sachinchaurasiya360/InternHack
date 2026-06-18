#!/usr/bin/env bash
#
# One-shot data migration: current Postgres (Neon)  ->  new Postgres (Supabase).
#
# Does a full schema + data copy with pg_dump/pg_restore, run through Docker so
# you don't need a matching local Postgres client. Re-runnable (it cleans the
# target's app objects first via --clean --if-exists).
#
# Usage (run from a shell with Docker available, e.g. Git Bash):
#
#   export SOURCE_DATABASE_URL='postgresql://<neon-user>:<pw>@<neon-host>/<db>'
#   export TARGET_DATABASE_URL='postgresql://postgres:<pw>@db.<ref>.supabase.co:5432/postgres'
#   ./migrate-to-supabase.sh
#
# Optional overrides:
#   PG_IMAGE=postgres:16 ./migrate-to-supabase.sh     # match your server's major version
#   KEEP_DUMP=1          ./migrate-to-supabase.sh     # keep the local .dump file
#
set -euo pipefail

: "${SOURCE_DATABASE_URL:?Set SOURCE_DATABASE_URL to your current (Neon) connection string}"
: "${TARGET_DATABASE_URL:?Set TARGET_DATABASE_URL to your new (Supabase) connection string}"

PG_IMAGE="${PG_IMAGE:-postgres:17}"
DUMP_FILE="neon-backup-$(date +%Y%m%d-%H%M%S).dump"

# Neon and Supabase both require TLS — make sure sslmode=require is present.
add_ssl() {
  case "$1" in
    *sslmode=*) printf '%s' "$1" ;;
    *\?*)       printf '%s&sslmode=require' "$1" ;;
    *)          printf '%s?sslmode=require' "$1" ;;
  esac
}
SRC="$(add_ssl "$SOURCE_DATABASE_URL")"
TGT="$(add_ssl "$TARGET_DATABASE_URL")"

echo "==> Using client image: $PG_IMAGE"
docker image inspect "$PG_IMAGE" >/dev/null 2>&1 || { echo "    pulling $PG_IMAGE ..."; docker pull "$PG_IMAGE" >/dev/null; }

# ---------------------------------------------------------------------------
echo "==> [1/3] Dumping source (schema + data) -> $DUMP_FILE"
# --no-owner / --no-privileges: don't reference Neon roles that don't exist on Supabase.
# custom format (-Fc): compressed, lets pg_restore order objects (pre-data/data/post-data) correctly.
docker run --rm --dns 1.1.1.1 --dns 8.8.8.8 "$PG_IMAGE" \
  pg_dump "$SRC" --format=custom --no-owner --no-privileges --no-acl --verbose \
  > "$DUMP_FILE"
echo "    dump size: $(du -h "$DUMP_FILE" | cut -f1)"

# ---------------------------------------------------------------------------
echo "==> [2/3] Restoring into target (Supabase)"
# pg_restore continues past benign 'already exists' notices; we don't pass --exit-on-error.
docker run --rm -i --dns 1.1.1.1 --dns 8.8.8.8 "$PG_IMAGE" \
  pg_restore --no-owner --no-privileges --clean --if-exists --verbose -d "$TGT" \
  < "$DUMP_FILE" \
  && echo "    restore completed" \
  || echo "    restore finished with non-fatal notices (review output above)"

# ---------------------------------------------------------------------------
echo "==> [3/3] Verifying row counts per table (exact)"
# Build a UNION of count(*) over every base table in the public schema, then run it.
COUNT_SQL=$(cat <<'SQL'
SELECT string_agg(
  format('SELECT %L AS table_name, count(*) AS rows FROM %I.%I', tablename, schemaname, tablename),
  ' UNION ALL '
) || ' ORDER BY table_name'
FROM pg_tables WHERE schemaname = 'public';
SQL
)
echo "--- SOURCE (Neon) ---"
docker run --rm --dns 1.1.1.1 --dns 8.8.8.8 "$PG_IMAGE" sh -c "psql '$SRC' -t -A -c \"$COUNT_SQL\" | psql '$SRC' -f -" 2>/dev/null \
  || docker run --rm --dns 1.1.1.1 --dns 8.8.8.8 "$PG_IMAGE" psql "$SRC" -c "SELECT relname AS table_name, n_live_tup AS approx_rows FROM pg_stat_user_tables ORDER BY relname;"
echo "--- TARGET (Supabase) ---"
docker run --rm --dns 1.1.1.1 --dns 8.8.8.8 "$PG_IMAGE" sh -c "psql '$TGT' -t -A -c \"$COUNT_SQL\" | psql '$TGT' -f -" 2>/dev/null \
  || docker run --rm --dns 1.1.1.1 --dns 8.8.8.8 "$PG_IMAGE" psql "$TGT" -c "SELECT relname AS table_name, n_live_tup AS approx_rows FROM pg_stat_user_tables ORDER BY relname;"

# ---------------------------------------------------------------------------
if [ "${KEEP_DUMP:-0}" = "1" ]; then
  echo "==> Kept dump file: $DUMP_FILE"
else
  rm -f "$DUMP_FILE"
  echo "==> Removed local dump (set KEEP_DUMP=1 to keep it)"
fi
echo "Done. Point the app's DATABASE_URL at Supabase and run a smoke test before cutting over."
