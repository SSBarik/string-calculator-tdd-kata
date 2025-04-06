import { DEFAULT_DELIMITER_REGEX } from "@constants/calculator";
import { DelimiterParser } from "@core/DelimiterParser";
import { tokenizeAndParseNumbers } from "@utils/numberParser";

export class NumberExtractor {
  static extract(
    numberString: string,
    maxAllowedNumber: number = Infinity
  ): number[] {
    let delimiterRegex = DEFAULT_DELIMITER_REGEX;

    if (DelimiterParser.hasCustomDelimiter(numberString)) {
      const { customDelimiters, numbers } =
        DelimiterParser.extractCustomDelimiters(numberString);
      delimiterRegex = DelimiterParser.getDelimiterRegex(customDelimiters);
      numberString = numbers;
    }

    const allNumbers = tokenizeAndParseNumbers(numberString, delimiterRegex);

    return allNumbers.filter((num) => num <= maxAllowedNumber);
  }
}
