import { MAX_VALID_NUMBER } from "../constants/calculator";
import { NumberExtractor } from "./NumberExtractor";
import { NumberValidator } from "./NumberValidator";

export class StringCalculator {
  private calledCount: number = 0;

  add(numberString: string): number {
    this.calledCount++;

    if (!numberString.trim()) return 0;

    const numbers = NumberExtractor.extract(numberString);
    NumberValidator.validateNegativeNumbers(numbers);

    const sum = numbers
      .filter((num) => num <= MAX_VALID_NUMBER)
      .reduce((acc, num) => acc + num, 0);

    return sum;
  }

  getCalledCount(): number {
    return this.calledCount;
  }
}
