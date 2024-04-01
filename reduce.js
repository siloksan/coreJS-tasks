Array.prototype.myReduce = function (callback, initialValue) {
  // Variable that accumulates the result
  // after performing operation one-by-one
  // on the array elements
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    // If the initialValue exists, we call
    // the callback function on the existing
    // element and store in accumulator
    if (accumulator) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);

      // If initialValue does not exist,
      // we assign accumulator to the
      // current element of the array
    } else {
      accumulator = this[i];
    }
  }

  // We return the overall accumulated response
  return accumulator;
};

const arr = [1, 2, 3, 4];

const multy = arr.reduce((acc, item) => acc * item, 1);
console.log('multy: ', multy);
