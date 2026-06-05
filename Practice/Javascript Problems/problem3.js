// Write a function that returns the largest number from an array.

function findLargest(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > largest){
        largest = arr[i];
    }
  }
  return largest;
}

let result = findLargest([5, 2, 9, 1, 7]);
console.log(result);
