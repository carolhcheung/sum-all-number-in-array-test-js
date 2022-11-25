function sumItems(array) {
  newArr = array.flat(Infinity)
  result = 0;
  for (i of newArr) {
    result += i;
  }
  return result;
  // Sum all the numbers in the array
}
module.exports = sumItems;