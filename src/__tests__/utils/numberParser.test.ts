import { tokenizeAndParseNumbers } from "@utils/numberParser";

describe("tokenizeAndParseNumbers", () => {
  test("splits and parses numbers with default delimiter", () => {
    const result = tokenizeAndParseNumbers("1,2,3", /,|\n/);
    expect(result).toEqual([1, 2, 3]);
  });

  test("handles whitespace around numbers", () => {
    const result = tokenizeAndParseNumbers(" 1 , 2 ,  3 ", /,|\n/);
    expect(result).toEqual([1, 2, 3]);
  });

  test("ignores empty tokens caused by extra delimiters", () => {
    const result = tokenizeAndParseNumbers("1,,2\n\n3", /,|\n/);
    expect(result).toEqual([1, 2, 3]);
  });

  test("returns empty array for empty string", () => {
    const result = tokenizeAndParseNumbers("", /,|\n/);
    expect(result).toEqual([]);
  });

  test("parses using custom delimiter", () => {
    const result = tokenizeAndParseNumbers("1***2***3", /\*\*\*/);
    expect(result).toEqual([1, 2, 3]);
  });

  test("parses using multiple delimiters", () => {
    const result = tokenizeAndParseNumbers("1*2%3", /[*%]/);
    expect(result).toEqual([1, 2, 3]);
  });

  test("ignores invalid number tokens", () => {
    const result = tokenizeAndParseNumbers("1,a,3", /,|\n/);
    expect(result).toEqual([1, NaN, 3]);
  });
});
