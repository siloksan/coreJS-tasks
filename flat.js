Array.prototype.flat = null;

Object.defineProperty(Array.prototype, 'flat', {
  value: function (depth = 1) {//определяем метод flat
    const array = this;

    function flattenArr(arr, depth) {
      if (depth < 1) return arr;//базовый случай, выходим из функции
      const flattenedArr = [];
      arr.forEach((item) => {
        if (Array.isArray(item)) {//если наш елемент массив передаём его в качестве аргумента в нашу рекурсивную функцию и пушим это значение в наш нвый массив
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

const arr = [1, 2, [4, 3], [8, [2]]];

console.log('arr.flat(): ', arr.flat());
