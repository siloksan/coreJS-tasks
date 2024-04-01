const arr = (...param) => {
  console.log(param);
};

const argumentsReverser = (func) => {
  return (...param) => {
    return func(...param.reverse());
  };
};

const arrReverse = argumentsReverser(arr)
arr(1, 2, 3)
arrReverse(1, 2, 3)