function binarySearch(arr, target, low = 0, high = arr.length - 1) {

  const middle = Math.floor(low + high / 2)

  if (middle === target) {
    return true
  }

  if (middle > target) {
    high = middle
    return binarySearch(arr, target, low, high)
  } else {
    low = middle + 1
    return binarySearch(arr, target, low, high)
  }

}