Array.prototype.flat = null;

if (!Array.prototype.flat) {
  Object.defineProperty(Array.prototype, 'flat', {
    value: function (depth = 1) {
      const array = this;
      function flattenArr(arr, depth) {
        if (depth < 1) return arr;
        const flattenedArr = [];
        arr.forEach((item) => {
          if (Array.isArray(item)) {
            flattenedArr.push(...flattenArr(item, depth - 1));
          } else {
            flattenedArr.push(item);
          }
        });
        return flattenedArr;
      }
      return flattenArr(array, depth);
    },
  });
}

const arr = [1, 2, [4, 3], [2, [2]]];

console.log('arr.flat(): ', arr.flat());
