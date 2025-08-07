import { describe, expect, it } from "vitest";
import { getRandomCatExcludingId, sortCatsByScore } from "./array";
import { mockCats } from "../../public/mock/cats";

describe("getRandomCatExcludingId", () => {
  it("should return a cat with a different ID", () => {
    const excludedId = "tt";
    const result = getRandomCatExcludingId(mockCats, excludedId);

    expect(result).toBeDefined();
    expect(result.id).not.toBe(excludedId);
  });

  it("should throw or return undefined if all cats are filtered out", () => {
    const onlyOneCat = [{ ...mockCats[0] }];
    const result = getRandomCatExcludingId(onlyOneCat, mockCats[0].id);

    expect(result).toBeUndefined();
  });
});

describe("sortCatsByScore", () => {
  it("should sort cats in descending order of score", () => {
    const sorted = sortCatsByScore(mockCats);
    for (let i = 0; i < sorted.length - 1; i++) {
      expect(sorted[i].score).toBeGreaterThanOrEqual(sorted[i + 1].score);
    }
  });

  it("should return a new array and not mutate the original", () => {
    const original = [...mockCats];
    const sorted = sortCatsByScore(original);

    expect(sorted).not.toBe(original);
    expect(original).toEqual(mockCats);
  });
});
