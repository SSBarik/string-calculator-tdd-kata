import { DEFAULT_DELIMITER_REGEX } from "../constants/calculator";
import { DelimiterParser } from "./DelimiterParser";
import { tokenizeAndParseNumbers } from "../utils/numberParser";

export class NumberExtractor {
  static extract(numberString: string): number[] {
    let delimiterRegex = DEFAULT_DELIMITER_REGEX;

    if (DelimiterParser.hasCustomDelimiter(numberString)) {
      const { customDelimiters, numbers } =
        DelimiterParser.extractCustomDelimiters(numberString);
      delimiterRegex = DelimiterParser.getDelimiterRegex(customDelimiters);
      numberString = numbers;
    }

    return tokenizeAndParseNumbers(numberString, delimiterRegex);
  }
}
