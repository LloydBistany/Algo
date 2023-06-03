/**
 * Recursively sum all the integers in a nested array.
 * sumNestedArrays([1, [2, 3, [4]]]); -> 10
 */

const sumNestedArrays = (array) =>  {
  return array.reduce((acc, curr) => {
    return Array.isArray(curr)
      ? acc += sumNestedArrays(curr)
      : acc += curr
  }, 0)
}

console.log(sumNestedArrays([1, [2, 3, [4]]])); // 10