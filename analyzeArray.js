function analyzeArray(array) {
  function getAverage() {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }

  return {
    average: getAverage(),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
analyzeArray([1, 2, 3, 8, 9, 46, 55]);
export { analyzeArray };
