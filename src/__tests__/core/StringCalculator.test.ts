import { StringCalculator } from "core/StringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("returns 0 for empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("returns the number for string with single number", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("returns sum of two numbers", () => {
    expect(calculator.add("1, 5")).toBe(6);
  });

  test("returns sum of multiple comma-separated numbers", () => {
    expect(calculator.add("1, 2, 3, 4, 5")).toBe(15);
  });

  test("handles new lines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("handles custom delimiter using // syntax", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test("throws error on single negative number", () => {
    expect(() => calculator.add("1,-3")).toThrow(
      "negative number(s) not allowed: -3"
    );
  });

  test("throws error on negative numbers", () => {
    expect(() => calculator.add("1,-2,-3,-4")).toThrow(
      "negative number(s) not allowed: -2,-3,-4"
    );
  });

  test("tracks how many times add() was invoked", () => {
    expect(calculator.getCalledCount()).toBe(0);

    calculator.add("1,2");
    expect(calculator.getCalledCount()).toBe(1);

    calculator.add("3,4");
    expect(calculator.getCalledCount()).toBe(2);
  });

  test("ignores numbers bigger than 1000", () => {
    expect(calculator.add("2,1001")).toBe(2);
  });

  test("handle delimiters of any length", () => {
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });

  test("handle multiple delimiters", () => {
    expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
  });
});
