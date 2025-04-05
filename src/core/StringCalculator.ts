export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    const nums = numbers.split(",").map(Number);
    const sum = nums.reduce((acc, num) => acc + num, 0);

    return sum;
  }
}
