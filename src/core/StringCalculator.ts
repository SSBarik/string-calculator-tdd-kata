export class StringCalculator {
  private delimiterPrefix: string = "//";
  private delimiterSufix: string = "\n";
  private defaultDelimiterRegex: RegExp = new RegExp(/,|\n/);

  add(numbers: string): number {
    if (!numbers) return 0;

    let delimiterRegex = this.defaultDelimiterRegex;

    if (numbers.startsWith(this.delimiterPrefix)) {
      const delimiterEndIndex = numbers.indexOf(this.delimiterSufix);
      const customDelimiter = numbers.substring(
        this.delimiterPrefix.length,
        delimiterEndIndex
      );
      delimiterRegex = new RegExp(customDelimiter);
      numbers = numbers.slice(delimiterEndIndex + 1);
    }

    const nums = numbers.split(delimiterRegex).map(Number);
    const sum = nums.reduce((acc, num) => acc + num, 0);

    return sum;
  }
}
