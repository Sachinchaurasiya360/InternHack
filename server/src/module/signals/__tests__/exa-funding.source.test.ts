import { describe, expect, it } from "vitest";
import {
  cleanCompanyName,
  extractFundingFromTitle,
} from "../sources/exa-funding.source.js";

describe("cleanCompanyName", () => {
  it("strips a leading editorial prefix", () => {
    expect(cleanCompanyName("Exclusive: Taktile")).toBe("Taktile");
    expect(cleanCompanyName("Breaking: Acme")).toBe("Acme");
    expect(cleanCompanyName("Report: Beta")).toBe("Beta");
  });

  it("drops a trailing explanatory clause after the first comma", () => {
    expect(
      cleanCompanyName(
        "Exclusive: Seltz, a startup trying to reinvent web search for AI agents,",
      ),
    ).toBe("Seltz");
  });

  it("strips a bare nationality/demonym prefix", () => {
    expect(cleanCompanyName("Serbian SuperPlane")).toBe("SuperPlane");
  });

  it("strips a '<nationality> <sector> startup' descriptor preamble", () => {
    expect(cleanCompanyName("Belgian scheduling optimisation startup Timefold")).toBe(
      "Timefold",
    );
    expect(cleanCompanyName("French observability startup Tsuga")).toBe("Tsuga");
  });

  it("leaves already-clean names untouched", () => {
    expect(cleanCompanyName("Acme")).toBe("Acme");
    expect(cleanCompanyName("General Motors")).toBe("General Motors");
  });

  it("keeps real names that merely end in a descriptor noun", () => {
    // "Technologies" is not an anchor and there is no name after it.
    expect(cleanCompanyName("Palantir Technologies")).toBe("Palantir Technologies");
  });

  it("skips (returns null) sentence-like residue instead of storing it", () => {
    expect(
      cleanCompanyName(
        "In a surprising move that shook the industry this week several investors",
      ),
    ).toBeNull();
    expect(cleanCompanyName("")).toBeNull();
    expect(cleanCompanyName("   ")).toBeNull();
  });
});

describe("extractFundingFromTitle", () => {
  it("parses a clean headline", () => {
    expect(extractFundingFromTitle("Acme raises $10M Series A to build X")).toEqual({
      companyName: "Acme",
      amountText: "$10M",
      round: "Series A",
    });
  });

  it("normalises the company name end-to-end from a messy headline", () => {
    expect(
      extractFundingFromTitle("Exclusive: Taktile raises $54M in Series B"),
    ).toMatchObject({ companyName: "Taktile", round: "Series B" });

    expect(
      extractFundingFromTitle("French observability startup Tsuga raises €5M seed"),
    ).toMatchObject({ companyName: "Tsuga" });

    expect(
      extractFundingFromTitle(
        "Belgian scheduling optimisation startup Timefold closes $10M seed round",
      ),
    ).toMatchObject({ companyName: "Timefold" });
  });

  it("returns null when no funding verb is present", () => {
    expect(extractFundingFromTitle("Acme hires a new CTO")).toBeNull();
  });
});
