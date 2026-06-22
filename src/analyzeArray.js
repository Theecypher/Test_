function analyzeArray(arr) {
  let sum = 0;
  let average = 0;
  const length = arr.length;
  let value = arr[0];
  let min = arr[0];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    average = sum / length;
  }

  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (min >= arr[i]) {
      min = arr[i];
    }
  }

  return {
  average: average,
  min: min,
  max: max,
  length: length,
};
}

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

console.log(object);

// export {analyzeArray}

// module.exports = analyzeArray;
