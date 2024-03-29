Array.prototype.reduce = null;

Object.defineProperty(Array.prototype, 'reduce', {
  value: function (callback, initialValue) {
    const array = this;
    let acc = initialValue !== undefined ? initialValue : array[0];
    if (initialValue === undefined) {
      for (let i = 0; i < array.length; i += 1) {
        acc = callback(acc, array[i]);
      }
    } else {
      for (let i = 1; i < array.length; i += 1) {
        acc = callback(acc, array[i]);
      }
    }
    return acc;
  },
});


const arr = [1, 2, 3, 4];

const multy = arr.reduce((acc, item) => acc * item, 1);
console.log('multy: ', multy);