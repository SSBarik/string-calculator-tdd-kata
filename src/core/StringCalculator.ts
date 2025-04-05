export class StringCalculator {
  private static readonly DELIMITER_PREFIX = "//";
  private static readonly DELIMITER_SUFFIX = "\n";
  private static readonly DEFAULT_DELIMITER_REGEX = /,|\n/;
  private calledCount: number = 0;

  add(numberString: string): number {
    this.calledCount++;

    if (!numberString) return 0;

    const numbers = this.extractNumbers(numberString);
    this.validate(numbers);

    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return sum;
  }

  getCalledCount() {
    return this.calledCount;
  }

  private hasCustomDelimiter(numberString: string): boolean {
    return numberString.startsWith(StringCalculator.DELIMITER_PREFIX);
  }

  private getCustomDelimiter(numberString: string): string {
    const delimiterEndIndex = numberString.indexOf(
      StringCalculator.DELIMITER_SUFFIX
    );

    return numberString.substring(
      StringCalculator.DELIMITER_PREFIX.length,
      delimiterEndIndex
    );
  }

  private extractNumbers(numberString: string): number[] {
    let delimiterRegex = StringCalculator.DEFAULT_DELIMITER_REGEX;

    if (this.hasCustomDelimiter(numberString)) {
      const customDelimiter = this.getCustomDelimiter(numberString);
      delimiterRegex = new RegExp(customDelimiter);

      numberString = numberString.slice(
        numberString.indexOf(StringCalculator.DELIMITER_SUFFIX) + 1
      );
    }

    return numberString.split(delimiterRegex).map(Number);
  }

  private validate(numbers: number[]): void {
    const negativeNumbers: number[] = numbers.filter((n) => n < 0);
    if (negativeNumbers.length) {
      throw new Error("negative number(s) not allowed: " + negativeNumbers);
    }
  }
}
