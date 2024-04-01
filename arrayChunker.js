function arrayChunker(arr, size) {
  const newSlices = [];
  for (let i = 0; i < arr.length; i += size) {
    newSlices.push(arr.slice(i, i + size))
  }
  return newSlices;
}

const array = [1, 2, 3, 4, 5]

console.log(arrayChunker(array, 2));