// Write a function that returns the sum of all numbers in an array.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
