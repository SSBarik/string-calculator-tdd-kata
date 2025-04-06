export function tokenizeAndParseNumbers(
  numberString: string,
  delimiterRegex: RegExp
): number[] {
  return numberString
    .split(delimiterRegex)
    .map((token) => token.trim())
    .filter((token) => token !== "")
    .map((token) => Number(token));
}
