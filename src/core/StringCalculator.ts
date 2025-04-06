import { MAX_VALID_NUMBER } from "@constants/calculator";
import { NumberExtractor } from "@core/NumberExtractor";
import { NumberValidator } from "@core/NumberValidator";

export class StringCalculator {
  private calledCount: number = 0;

  add(numberString: string): number {
    this.calledCount++;

    if (!numberString.trim()) return 0;

    const numbers = NumberExtractor.extract(numberString, MAX_VALID_NUMBER);
    NumberValidator.validateNegativeNumbers(numbers);

    return this.calculateSum(numbers);
  }

  getCalledCount(): number {
    return this.calledCount;
  }

  private calculateSum(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
}
