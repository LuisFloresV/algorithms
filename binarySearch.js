const arr = [1, 2, 3, 4, 5, 6, 7];

function binarySearch(arr, guess) {
  let low = 0;
  let high = arr.length - 1;

  do {
    const m = Math.floor((low + high) / 2);
    const v = arr[m];

    if (v === guess) {
      return true;
    } else if (v > guess) {
      high = m;
    } else {
      low = m + 1;
    }
  } while (low < high);
}

binarySearch(arr, 3);
