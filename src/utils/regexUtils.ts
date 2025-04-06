export function escapeRegexSpecialChars(delimiter: string): string {
  return delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
