import { DelimiterParser } from "@core/DelimiterParser";

describe("DelimiterParser", () => {
  test("detects custom delimiter syntax", () => {
    expect(DelimiterParser.hasCustomDelimiter("//;\n1;2")).toBe(true);
    expect(DelimiterParser.hasCustomDelimiter("1,2")).toBe(false);
  });

  test("extracts single-character delimiter", () => {
    const input = "//;\n1;2";
    const { customDelimiters, numbers } =
      DelimiterParser.extractCustomDelimiters(input);

    expect(customDelimiters).toEqual([";"]);
    expect(numbers).toBe("1;2");
  });

  test("extracts multi-character delimiters", () => {
    const input = "//[***]\n1***2***3";
    const { customDelimiters, numbers } =
      DelimiterParser.extractCustomDelimiters(input);

    expect(customDelimiters).toEqual(["***"]);
    expect(numbers).toBe("1***2***3");
  });

  test("extracts multiple delimiters", () => {
    const input = "//[*][%]\n1*2%3";
    const { customDelimiters, numbers } =
      DelimiterParser.extractCustomDelimiters(input);

    expect(customDelimiters).toEqual(["*", "%"]);
    expect(numbers).toBe("1*2%3");
  });

  test("builds regex from delimiters", () => {
    const regex = DelimiterParser.getDelimiterRegex(["*", "%"]);
    expect("1*2%3".split(regex)).toEqual(["1", "2", "3"]);
  });
});
