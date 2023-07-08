// apathetic solution. doesn't care if the array is already sorted
function bubbleSort(array) {
  let end = array.length - 2;
  do {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
      }
    }
  } while (end--);
  return array;
}

// check if the array is already sorted and break early
function bubbleSort(array) {
  let end = array.length - 2;
  let madeSwap;
  do {
    madeSwap = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        madeSwap = true;
      }
    }
  } while (end-- && madeSwap);
  return array;
}