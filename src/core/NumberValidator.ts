export class NumberValidator {
  static validateNegativeNumbers(numbers: number[]): void {
    const negativeNumbers: number[] = numbers.filter((n) => n < 0);
    if (negativeNumbers.length) {
      throw new Error("negative number(s) not allowed: " + negativeNumbers);
    }
  }
}
