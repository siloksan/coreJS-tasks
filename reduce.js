Array.prototype.reduce = null;

Object.defineProperty(Array.prototype, 'reduce', {
  value: function (callback, initialValue) {//reduce - в качестве аргумента принимает функцию и изначальное значение, необязательный параметр
    const array = this;
    let acc = initialValue !== undefined ? initialValue : array[0];//определяем значение аккамулятора, если не задан initialValue то это будет первый элемент массива
    if (initialValue === undefined) {
      for (let i = 0; i < array.length; i += 1) {//проходимся по всем элементам массива и на каждой иттерации вызываем переданную функцию с двумя аргументами acc и текущий элемент массива, 
        acc = callback(acc, array[i]);// значение этой функции передаём аккумулятору
      }
    } else {
      for (let i = 1; i < array.length; i += 1) {
        acc = callback(acc, array[i]);
      }
    }
    return acc;//функция reduce возвращает нам значение аккумулятора
  },
});


const arr = [1, 2, 3, 4];

const multy = arr.reduce((acc, item) => acc * item, 1);
console.log('multy: ', multy);
