declare module "sql.js" {
  interface QueryExecResult {
    columns: string[];
    values: unknown[][];
  }
  interface Database {
    run(sql: string): void;
    exec(sql: string): QueryExecResult[];
  }
  interface SqlJsStatic {
    Database: new () => Database;
  }
  export default function initSqlJs(config?: {
    locateFile?: (file: string) => string;
  }): Promise<SqlJsStatic>;
  export type { Database };
}
