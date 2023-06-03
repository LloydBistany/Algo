/** 
 * Recursively flatten a nested array.
 * flattenDeep([1, [2, 3, [4]]]); -> [1, 2, 3, 4]
 */

const flattenDeep = (array) => {
  const flat = [];
  for (let element of array)  {
    Array.isArray(element)
      ? flat.push(...flattenDeep(element))
      : flat.push(element);
  }
  return flat;
}

const arr = [1, 2, 3, [4, 5]]
const arr2 = [1, 2, 3, [4, [5]]]
// console.log(flattenDeep(arr));
// console.log(flattenDeep(arr2));