import { DELIMITER_PREFIX, DELIMITER_SUFFIX } from "../constants/calculator";
import { escapeRegexSpecialChars } from "../utils/regexUtils";

export class DelimiterParser {
  static hasCustomDelimiter(numberString: string): boolean {
    return numberString.startsWith(DELIMITER_PREFIX);
  }

  static extractCustomDelimiters(numberString: string): {
    customDelimiters: string[];
    numbers: string;
  } {
    const delimiterEndIndex = numberString.indexOf(DELIMITER_SUFFIX);

    const delimiterSubstring = numberString.substring(
      DELIMITER_PREFIX.length,
      delimiterEndIndex
    );

    const customDelimiters = this.extractDelimiters(delimiterSubstring);
    const numbers = numberString.slice(delimiterEndIndex + 1);

    return { customDelimiters, numbers };
  }

  private static extractDelimiters(substring: string): string[] {
    if (this.hasMultipleDelimiters(substring)) {
      return this.extractMultipleDelimiters(substring);
    }
    return [substring];
  }

  private static hasMultipleDelimiters(str: string): boolean {
    return str.includes("[") && str.includes("]");
  }

  private static extractMultipleDelimiters(str: string): string[] {
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

  static getDelimiterRegex(delimiters: string[]): RegExp {
    const regexSafeDelimiters = delimiters
      .map(escapeRegexSpecialChars)
      .join("|");

    return new RegExp(regexSafeDelimiters);
  }
}
