String.prototype.repeater = null;

if (!String.prototype.repeater) {
  Object.defineProperty(String.prototype, 'repeater', {
    value: function (count) {
      if (count < 0 || !Number.isInteger(count)) {
        throw new Error('The argument is non-integer or less than 0');
      }
      let newString = '';
      while(count) {
        newString += this;
        count -= 1;
      }
      return newString;
    },
  });
}

let test = 'Test sa';
console.log('test.repeater(2): ', test.repeater(85));
