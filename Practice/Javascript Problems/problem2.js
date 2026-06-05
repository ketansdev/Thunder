// Write a function that counts how many vowels (a, e, i, o, u) exist in a string.

function countVowels(word) {
  let count = 0;
  let str = word.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i]==="a") {
      count++;
    } else if (str[i]==="e") {
      count++;
    } else if (str[i]==="i") {
      count++;
    } else if (str[i]==="o") {
      count++;
    } else if (str[i]==="u") {
      count++;
    }
  }
  return count;
}

let result = countVowels("javascript");
console.log(result);
