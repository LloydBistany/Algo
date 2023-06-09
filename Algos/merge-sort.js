function mergeSort(array) {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

//helper function
function merge(left, right) {
  const merged = [];
  let ind1 = 0, ind2 = 0;
  while (left[ind1] !== undefined || right[ind2] !== undefined) {
    if (left[ind1] > right[ind2])
      merged.push(left[ind1++]);
    else if (left[ind1] <= right[ind2])
      merged.push(right[ind2++]);
    else
      merged.push(left[ind1++] || right[ind2++]);
  }
  return merged;
}

console.log(mergeSort([5,4,1,2,0,7,16,12,9, -1]));

