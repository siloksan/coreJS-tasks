function memoization(func) {
    const cash = {};
    return function (...args) {
        const hash = JSON.stringify(args)
        if (!cash.hasOwnProperty(hash)) {
            cash[hash] = func(...args)
        }
        console.log('We found value!', cash[hash])
        return cash[hash]
    }
}

function multiplication(a, b) {
    console.log('We calculated value!', a * b)
    return a * b;
}

const multy = memoization(multiplication);
multy(2, 3);
multy(2, 3);