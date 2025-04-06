import { NumberValidator } from "../../core/NumberValidator";

describe("NumberValidator", () => {
  test("throws on single negative number", () => {
    expect(() => NumberValidator.validateNegativeNumbers([1, -2, 3])).toThrow(
      "negative number(s) not allowed: -2"
    );
  });

  test("throws on multiple negative numbers", () => {
    expect(() => NumberValidator.validateNegativeNumbers([-1, -3, 5])).toThrow(
      "negative number(s) not allowed: -1,-3"
    );
  });

  test("does not throw if all numbers are positive", () => {
    expect(() =>
      NumberValidator.validateNegativeNumbers([1, 2, 3])
    ).not.toThrow();
  });
});
