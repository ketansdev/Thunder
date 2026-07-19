const arr = [3, 54, 18, 27, 5, 7, 19, 25];

let result = arr.filter((item) => item > 10);

console.log(result);

Array.prototype.filtering = function (callback) {
  const ans = [];
  for (let num of arr) {
    if (callback(num)) {
      ans.push(num);
    }
  }
  return ans;
};

console.log(arr.filtering((item) => item > 20));
