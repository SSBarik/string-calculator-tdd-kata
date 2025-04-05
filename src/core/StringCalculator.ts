export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    let delimiterRegex = new RegExp(/,|\n/);

    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      const customDelimiter = numbers.substring(2, delimiterEndIndex);
      delimiterRegex = new RegExp(customDelimiter);
      numbers = numbers.slice(delimiterEndIndex + 1);
    }

    const nums = numbers.split(delimiterRegex).map(Number);
    const sum = nums.reduce((acc, num) => acc + num, 0);

    return sum;
  }
}
