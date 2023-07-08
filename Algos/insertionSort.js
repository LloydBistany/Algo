function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j, --j);
    }
  }
  return array;
}

function swap(arr, a, b) {
  if (a >= arr.length || b >= arr.length || a < 0 || b < 0) {
    throw new Error(`Cannot swap at indices ${a} and ${b}`);
  }
  
  // ES6 ! 
  [arr[a], arr[b]] = [arr[b], arr[a]]

  // also ok (doing the same thing under the hood)
  // const temp = arr[a];
  // arr[a] = arr[b];
  // arr[b] = temp;
  
}