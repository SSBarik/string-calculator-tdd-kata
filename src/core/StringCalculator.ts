export class StringCalculator {
  private delimiterPrefix: string = "//";
  private delimiterSuffix: string = "\n";
  private defaultDelimiterRegex: RegExp = new RegExp(/,|\n/);

  add(numberString: string): number {
    if (!numberString) return 0;

    const numbers = this.extractNumbers(numberString);
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return sum;
  }

  private hasCustomDelimiter(numberString: string): boolean {
    return numberString.startsWith(this.delimiterPrefix);
  }

  private getCustomDelimiter(numberString: string): string {
    const delimiterEndIndex = numberString.indexOf(this.delimiterSuffix);

    return numberString.substring(
      this.delimiterPrefix.length,
      delimiterEndIndex
    );
  }

  private extractNumbers(numberString: string): number[] {
    let delimiterRegex = this.defaultDelimiterRegex;

    if (this.hasCustomDelimiter(numberString)) {
      const customDelimiter = this.getCustomDelimiter(numberString);
      delimiterRegex = new RegExp(customDelimiter);

      numberString = numberString.slice(
        numberString.indexOf(this.delimiterSuffix) + 1
      );
    }

    return numberString.split(delimiterRegex).map(Number);
  }
}
