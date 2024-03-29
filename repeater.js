String.prototype.repeat = null;

Object.defineProperty(String.prototype, 'repeat', {
  value: function (count) {
    if (count < 0 || !Number.isInteger(count)) {
      throw new Error('The argument is non-integer or less than 0');
    }
    if (count === 0) return ''
    let newString = '';
    while (count) {
      newString += this;
      count -= 1;
    }
    return newString;
  },
});

let test = 'Test';
console.log(test.repeat(0));
