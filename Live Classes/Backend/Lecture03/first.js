// 1.0.0

// patch : bug fixes : 1.0.1
//  minor : 1.1.0
// major :

function add(num1, num2, num3) {
  if (typeof num1 === "number" && typeof num2 === "number" && num3 === "number") return num1 + num2 + num3;
}

function sub(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") return num1 - num2;
}

function mul(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") return num1 * num2;
}

function square(num) {
  if (typeof num === "number") return num * num;
}

module.exports = { add, sub, mul };
