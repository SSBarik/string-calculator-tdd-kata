import { StringCalculator } from "../../core/StringCalculator";

test("returns 0 for empty string", () => {
  expect(new StringCalculator().add("")).toBe(0);
});

test("returns the number for string with single number", () => {
  expect(new StringCalculator().add("1")).toBe(1);
});

test("returns sum of two numbers", () => {
  expect(new StringCalculator().add("1, 5")).toBe(6);
});
