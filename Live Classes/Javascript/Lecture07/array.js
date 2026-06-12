// sorting

// let names = ["Namita", "Yash", "Ketan", "swapnil", "ketan", "nikhil"];

// console.log(names.reverse())
// console.log(names.sort())

const num = [10, 20, 7, 101, 23, 78, 4];

// console.log(num.sort())
// ascending order
console.log(num.sort((a, b) => a - b));

// descending order
console.log(num.sort((a, b) => b - a));
