Array.prototype.customFilter = function (callback) {
  const newArr = []
  this.forEach((item) => callback(item) && newArr.push(item))
  return newArr;
}

const arr = [1, -2, 3, -4, 5];
const isPositive = (item) => item > 0;

console.log(arr.customFilter(isPositive));