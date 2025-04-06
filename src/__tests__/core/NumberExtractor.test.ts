import { NumberExtractor } from "../../core/NumberExtractor";

describe("NumberExtractor", () => {
  test("extracts numbers using default delimiter", () => {
    const result = NumberExtractor.extract("1,2,3");
    expect(result).toEqual([1, 2, 3]);
  });

  test("handles newlines and commas as default delimiters", () => {
    const result = NumberExtractor.extract("1\n2,3");
    expect(result).toEqual([1, 2, 3]);
  });

  test("handles single custom delimiter", () => {
    const result = NumberExtractor.extract("//;\n1;2;3");
    expect(result).toEqual([1, 2, 3]);
  });

  test("handles custom delimiter of any length", () => {
    const result = NumberExtractor.extract("//[***]\n1***2***3");
    expect(result).toEqual([1, 2, 3]);
  });

  test("handles multiple custom delimiters", () => {
    const result = NumberExtractor.extract("//[*][%]\n1*2%3");
    expect(result).toEqual([1, 2, 3]);
  });

  test("handles multiple long custom delimiters", () => {
    const result = NumberExtractor.extract("//[**][%%]\n1**2%%3");
    expect(result).toEqual([1, 2, 3]);
  });

  test("ignores empty tokens caused by extra delimiters", () => {
    const result = NumberExtractor.extract("1,,2\n\n3");
    expect(result).toEqual([1, 2, 3]);
  });

  test("returns empty array for empty string", () => {
    const result = NumberExtractor.extract("");
    expect(result).toEqual([]);
  });

  test("trims whitespace around numbers", () => {
    const result = NumberExtractor.extract(" 1 , 2 , 3 ");
    expect(result).toEqual([1, 2, 3]);
  });
});
