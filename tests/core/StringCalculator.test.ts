import { StringCalculator } from "core/StringCalculator";

test("returns 0 for empty string", () => {
  expect(new StringCalculator().add("").toBe(0));
});
