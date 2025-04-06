import {
  DEFAULT_DELIMITER_REGEX,
  MAX_VALID_NUMBER,
} from "../constants/calculator";
import { DelimiterParser } from "./DelimiterParser";
import { NumberValidator } from "./NumberValidator";

export class StringCalculator {
  private calledCount: number = 0;

  add(numberString: string): number {
    this.calledCount++;

    if (!numberString.trim()) return 0;

    const numbers = this.extractNumbers(numberString);
    NumberValidator.validateNegativeNumbers(numbers);

    const sum = numbers
      .filter((num) => num <= MAX_VALID_NUMBER)
      .reduce((acc, num) => acc + num, 0);

    return sum;
  }

  getCalledCount(): number {
    return this.calledCount;
  }

  private extractNumbers(input: string): number[] {
    let delimiterRegex = DEFAULT_DELIMITER_REGEX;

    if (DelimiterParser.hasCustomDelimiter(input)) {
      const { customDelimiters, numbers } =
        DelimiterParser.extractCustomDelimiters(input);
      delimiterRegex = DelimiterParser.getDelimiterRegex(customDelimiters);
      input = numbers;
    }

    return input.split(delimiterRegex).map(Number);
  }
}
