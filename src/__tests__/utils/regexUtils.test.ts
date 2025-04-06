import { escapeRegexSpecialChars } from "../../utils/regexUtils";

describe("escapeRegexSpecialChars", () => {
  it("should escape regex special characters", () => {
    const input = ".*+?^${}()|[]\\";
    const expected = "\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\";
    const result = escapeRegexSpecialChars(input);
    expect(result).toBe(expected);
  });

  it("should return the same string if no special characters", () => {
    const input = "abcXYZ123";
    const result = escapeRegexSpecialChars(input);
    expect(result).toBe("abcXYZ123");
  });

  it("should handle mixed string with some special characters", () => {
    const input = "ab*c|d+";
    const expected = "ab\\*c\\|d\\+";
    const result = escapeRegexSpecialChars(input);
    expect(result).toBe(expected);
  });
});
