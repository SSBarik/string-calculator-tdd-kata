import { StringCalculator } from "core/StringCalculator";

test("returns 0 for empty string", () => {
  expect(new StringCalculator().add("")).toBe(0);
});

test("returns the number for string with single number", () => {
  expect(new StringCalculator().add("1")).toBe(1);
});

test("returns sum of two numbers", () => {
  expect(new StringCalculator().add("1, 5")).toBe(6);
});

test("returns sum of multiple comma-separated numbers", () => {
  expect(new StringCalculator().add("1, 2, 3, 4, 5")).toBe(15);
});

test("handles new lines between numbers", () => {
  expect(new StringCalculator().add("1\n2,3")).toBe(6);
});

test("handles custom delimiter using // syntax", () => {
  expect(new StringCalculator().add("//;\n1;2")).toBe(3);
});

test("throws error on single negative number", () => {
  expect(() => new StringCalculator().add("1,-3")).toThrow(
    "negative number(s) not allowed: -3"
  );
});

test("throws error on negative numbers", () => {
  expect(() => new StringCalculator().add("1,-2,-3,-4")).toThrow(
    "negative number(s) not allowed: -2,-3,-4"
  );
});
