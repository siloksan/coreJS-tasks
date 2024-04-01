const restParametersSum = (...param) => {
  return param.reduce((acc, curr) => acc + curr);
};

console.log(restParametersSum(1, 2, 3));