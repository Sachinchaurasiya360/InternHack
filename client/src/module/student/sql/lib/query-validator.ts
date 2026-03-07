import type { QueryResult } from "./sql-engine";

export interface ValidationResult {
  correct: boolean;
  message: string;
  matchedRows: number;
  totalExpected: number;
}

/**
 * Compare user query output with expected output.
 * - Compares columns (case-insensitive)
 * - Compares rows (order-independent by default, order-dependent if ordered)
 */
export function validateResult(
  userResult: QueryResult,
  expected: { columns: string[]; rows: (string | number | null)[][] },
  orderMatters = false
): ValidationResult {
  if (userResult.error) {
    return {
      correct: false,
      message: `SQL Error: ${userResult.error}`,
      matchedRows: 0,
      totalExpected: expected.rows.length,
    };
  }

  // Check column count
  if (userResult.columns.length !== expected.columns.length) {
    return {
      correct: false,
      message: `Expected ${expected.columns.length} columns but got ${userResult.columns.length}`,
      matchedRows: 0,
      totalExpected: expected.rows.length,
    };
  }

  // Check column names (case-insensitive)
  const colMatch = userResult.columns.every(
    (c, i) => c.toLowerCase() === expected.columns[i].toLowerCase()
  );
  if (!colMatch) {
    return {
      correct: false,
      message: `Column mismatch. Expected: ${expected.columns.join(", ")}. Got: ${userResult.columns.join(", ")}`,
      matchedRows: 0,
      totalExpected: expected.rows.length,
    };
  }

  // Check row count
  if (userResult.rows.length !== expected.rows.length) {
    return {
      correct: false,
      message: `Expected ${expected.rows.length} rows but got ${userResult.rows.length}`,
      matchedRows: 0,
      totalExpected: expected.rows.length,
    };
  }

  // Compare rows
  const normalize = (v: unknown): string =>
    v === null || v === undefined ? "NULL" : String(v).trim();

  if (orderMatters) {
    let matched = 0;
    for (let i = 0; i < expected.rows.length; i++) {
      const expRow = expected.rows[i].map(normalize);
      const usrRow = userResult.rows[i].map(normalize);
      if (expRow.every((v, j) => v === usrRow[j])) matched++;
    }
    if (matched === expected.rows.length) {
      return {
        correct: true,
        message: `Correct! ${matched} rows match.`,
        matchedRows: matched,
        totalExpected: expected.rows.length,
      };
    }
    return {
      correct: false,
      message: `Row values or order mismatch. ${matched}/${expected.rows.length} rows correct.`,
      matchedRows: matched,
      totalExpected: expected.rows.length,
    };
  }

  // Order-independent comparison
  const rowToKey = (row: (string | number | null)[]) =>
    row.map(normalize).join("|||");

  const expectedSet = new Map<string, number>();
  for (const row of expected.rows) {
    const key = rowToKey(row);
    expectedSet.set(key, (expectedSet.get(key) || 0) + 1);
  }

  let matched = 0;
  for (const row of userResult.rows) {
    const key = rowToKey(row);
    const count = expectedSet.get(key);
    if (count && count > 0) {
      matched++;
      expectedSet.set(key, count - 1);
    }
  }

  if (matched === expected.rows.length) {
    return {
      correct: true,
      message: `Correct! All ${matched} rows match.`,
      matchedRows: matched,
      totalExpected: expected.rows.length,
    };
  }

  return {
    correct: false,
    message: `${matched}/${expected.rows.length} rows match. Check your query.`,
    matchedRows: matched,
    totalExpected: expected.rows.length,
  };
}
