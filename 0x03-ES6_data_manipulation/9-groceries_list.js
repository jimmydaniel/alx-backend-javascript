/**
 * Retrieves a map of grocery names and their quantity.
 * @author Leo Azubuike <https://github.com/Azubuikeleo13>
 * @returns {Map<string, Number>}
 */

export default function groceriesList() {
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(values);
}
