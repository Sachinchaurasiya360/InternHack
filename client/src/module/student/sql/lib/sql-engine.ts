import initSqlJs, { type Database } from "sql.js";

export interface QueryResult {
  columns: string[];
  rows: (string | number | null)[][];
  error?: string;
  timeMs: number;
  rowCount: number;
}

export interface TableInfo {
  name: string;
  columns: { name: string; type: string }[];
}

class SqlEngine {
  private db: Database | null = null;
  private initPromise: Promise<void> | null = null;
  private loadedDatasets = new Set<string>();

  async init(): Promise<void> {
    if (this.db) return;
    if (this.initPromise) return this.initPromise;

    this.initPromise = (async () => {
      const SQL = await initSqlJs({
        locateFile: (file: string) =>
          `https://cdn.jsdelivr.net/npm/sql.js@1.14.1/dist/${file}`,
      });
      this.db = new SQL.Database();
    })();

    return this.initPromise;
  }

  async loadDataset(name: string, sql: string): Promise<void> {
    await this.init();
    if (this.loadedDatasets.has(name)) return;
    this.db!.run(sql);
    this.loadedDatasets.add(name);
  }

  async resetDataset(name: string, sql: string): Promise<void> {
    await this.init();
    // Drop tables for this dataset then recreate
    const tables = this.getSchema();
    for (const t of tables) {
      try {
        this.db!.run(`DROP TABLE IF EXISTS "${t.name}"`);
      } catch {
        // ignore
      }
    }
    this.loadedDatasets.clear();
    this.db!.run(sql);
    this.loadedDatasets.add(name);
  }

  async execute(sql: string): Promise<QueryResult> {
    await this.init();
    const start = performance.now();
    try {
      const results = this.db!.exec(sql);
      const timeMs = Math.round((performance.now() - start) * 100) / 100;

      if (results.length === 0) {
        return { columns: [], rows: [], timeMs, rowCount: 0 };
      }

      // Return last result set (for multi-statement queries)
      const last = results[results.length - 1];
      return {
        columns: last.columns,
        rows: last.values as (string | number | null)[][],
        timeMs,
        rowCount: last.values.length,
      };
    } catch (err: unknown) {
      const timeMs = Math.round((performance.now() - start) * 100) / 100;
      return {
        columns: [],
        rows: [],
        error: err instanceof Error ? err.message : String(err),
        timeMs,
        rowCount: 0,
      };
    }
  }

  getSchema(): TableInfo[] {
    if (!this.db) return [];
    try {
      const tables = this.db.exec(
        "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"
      );
      if (tables.length === 0) return [];

      return tables[0].values.map(([tableName]: unknown[]) => {
        const cols = this.db!.exec(`PRAGMA table_info("${tableName}")`);
        const columns =
          cols.length > 0
            ? cols[0].values.map((row: unknown[]) => ({
                name: String(row[1]),
                type: String(row[2]),
              }))
            : [];
        return { name: String(tableName), columns };
      });
    } catch {
      return [];
    }
  }

  isReady(): boolean {
    return this.db !== null;
  }
}

// Singleton
export const sqlEngine = new SqlEngine();
