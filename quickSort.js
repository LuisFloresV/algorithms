function qs(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const left = [];
  const right = [];

  const pivot = arr[arr.length - 1];

  for (let x = 0; x < arr.length - 1; x++) {
    arr[x] < pivot ? left.push(arr[x]) : right.push(arr[x]);
  }

  return [...qs(left), pivot, ...qs(right)];
}

qs([1, 4, 10, 1, 2, 3]);
