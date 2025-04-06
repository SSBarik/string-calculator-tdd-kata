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

    const sum = numbers
      .filter((num) => num <= 1000)
      .reduce((acc, num) => acc + num, 0);

    return sum;
  }

  getCalledCount() {
    return this.calledCount;
  }

  private hasCustomDelimiter(numberString: string): boolean {
    return numberString.startsWith(StringCalculator.DELIMITER_PREFIX);
  }

  private getCustomDelimiters(numberString: string): {
    customDelimiters: string[];
    numbers: string;
  } {
    const delimiterEndIndex = numberString.indexOf(
      StringCalculator.DELIMITER_SUFFIX
    );

    const delimiterSubstring = numberString.substring(
      StringCalculator.DELIMITER_PREFIX.length,
      delimiterEndIndex
    );

    const customDelimiters = this.extractDelimiters(delimiterSubstring);
    const numbers = numberString.slice(delimiterEndIndex + 1);

    return { customDelimiters, numbers };
  }

  private extractDelimiters(delimiterSubstring: string): string[] {
    if (this.hasMultipleDelimiters(delimiterSubstring)) {
      return this.extractMultipleDelimiters(delimiterSubstring);
    }

    return [delimiterSubstring];
  }

  private hasMultipleDelimiters(str: string): boolean {
    return str.startsWith("[") && str.endsWith("]");
  }

  private extractMultipleDelimiters(str: string): string[] {
    const delimiters: string[] = [];
    let i = 0;

    while (i < str.length) {
      if (str[i] === "[") {
        let j = i + 1;
        let delimiter = "";

        while (str[j] !== "]") {
          delimiter += str[j++];
        }

        delimiters.push(delimiter);
        i = j + 1;
      } else {
        i++;
      }
    }

    return delimiters;
  }

  private extractNumbers(numberString: string): number[] {
    let delimiterRegex = StringCalculator.DEFAULT_DELIMITER_REGEX;

    if (this.hasCustomDelimiter(numberString)) {
      const { customDelimiters, numbers } =
        this.getCustomDelimiters(numberString);
      delimiterRegex = this.getDelimiterRegex(customDelimiters);
      numberString = numbers;
    }

    return numberString.split(delimiterRegex).map(Number);
  }

  private getDelimiterRegex(delimiters: string[]): RegExp {
    const regexSafeDelimiters = delimiters
      .map(this.escapeRegexSpecialChars)
      .join("|");
    return new RegExp(regexSafeDelimiters);
  }

  private escapeRegexSpecialChars(delimiter: string): string {
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  private validate(numbers: number[]): void {
    const negativeNumbers: number[] = numbers.filter((n) => n < 0);
    if (negativeNumbers.length) {
      throw new Error("negative number(s) not allowed: " + negativeNumbers);
    }
  }
}
