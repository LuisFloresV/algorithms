const numbers = [1, 4, 2, 5, 6];

function bubbleSort(arr) {
  for (let x = 0; x < numbers.length; x++) {
    for (let y = 0; y < numbers.length - 1 - x; y++) {
      if (arr[y] > arr[y + 1]) {
        const tmp = arr[y];
        arr[y] = arr[y + 1];
        arr[y + 1] = tmp;
      }
    }
  }
}

bubbleSort(numbers);

numbers;
