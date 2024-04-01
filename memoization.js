function memoization(func) {
  const cash = {};
  return function (...args) {
    const hash = JSON.stringify(args)
    if (!cash.hasOwnProperty(hash)) {
      cash[hash] = func(...args)
      console.log('calculated value:', cash[hash])
    }
    console.log('found value:', cash[hash])
    return cash[hash]
  }
}

function multiplication(a, b) {
  return a * b;
}

const multy = memoization(multiplication);
multy(2, 3);
multy(2, 3);

// function memoizeFactorial() {
//   const cache = [];

//   return function _factorial(n) {
//     if (n < 2) {
//       return 1;
//     }
//     if (cache[n]) {
//       console.log('value from cash', cache[n]);
//       return cache[n];
//     }
//     return cache[n] = n * _factorial(n - 1);
//   }
// }

// const factorial = memoizeFactorial();
// factorial(5); // 120
// factorial(7); // 5040