export function getCurPrice(arr, size) {
  return arr
    .filter((elem) => elem.size == size)
    .reduce((acc, curr) => (curr.price > acc.price ? curr : acc));
}
