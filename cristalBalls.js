const array = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
  true,
  true,
  true,
];

function cristalBalls(arr) {
  const jumps = Math.floor(Math.sqrt(arr.length));

  let i = jumps;

  for (; i < arr.length; i += jumps) {
    if (arr[i]) {
      break;
    }
  }

  i -= jumps;

  for (; i < arr.length; i++) {
    if (arr[i]) {
      return i;
    }
  }

  return -1;
}

cristalBalls(array);
