/**
 *
 * @param padding this should be number
 * @param input input string LOL
 * @returns
 */

function padLeft(padding: number, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
}
export default padLeft;
