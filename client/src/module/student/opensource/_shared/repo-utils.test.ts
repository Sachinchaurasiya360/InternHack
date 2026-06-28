import { describe, it, expect } from "vitest";
import { buildLanguageParam } from "./repo-utils";

describe("buildLanguageParam", () => {
  it("returns full array for multiple manually selected languages", () => {
    expect(buildLanguageParam("manual", ["Python", "JavaScript"], [])).toEqual([
      "Python",
      "JavaScript",
    ]);
  });

  it("returns single-element array for one selected language", () => {
    expect(buildLanguageParam("manual", ["Go"], [])).toEqual(["Go"]);
  });

  it("returns undefined when no languages are selected (manual mode)", () => {
    expect(buildLanguageParam("manual", [], [])).toBeUndefined();
  });

  it("uses inferred languages in auto mode", () => {
    expect(
      buildLanguageParam("auto", [], ["TypeScript", "Java"]),
    ).toEqual(["TypeScript", "Java"]);
  });

  it("ignores selectedLanguage in auto mode, uses only inferred", () => {
    expect(
      buildLanguageParam("auto", ["Python"], ["TypeScript"]),
    ).toEqual(["TypeScript"]);
  });

  it("returns undefined in auto mode with no inferred languages", () => {
    expect(buildLanguageParam("auto", ["Python"], [])).toBeUndefined();
  });

  it("filters out empty strings, trims whitespace, and removes duplicates", () => {
    expect(buildLanguageParam("manual", ["", "  ", "Python", "  JavaScript  ", "Python"], [])).toEqual([
      "Python",
      "JavaScript",
    ]);
  });

  it("returns undefined if only empty/whitespace strings remain", () => {
    expect(buildLanguageParam("manual", ["", "  "], [])).toBeUndefined();
    expect(buildLanguageParam("auto", [], ["", "   "])).toBeUndefined();
  });
});
