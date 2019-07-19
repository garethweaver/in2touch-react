export const moveInArr = (arr, fromIndex, toIndex) => {
  let elm = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, elm);
  return arr
}
