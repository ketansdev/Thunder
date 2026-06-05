// Write a function that reverses a string.

function reverseString(str) {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}

let result = reverseString("hello");
console.log(result);
