// callback 

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function calculator(num1, num2, callback){
    let result = callback(num1, num2);
    return result;
}

// let answer = calculator(10, 5, add);
// console.log(answer);

// let answer = calculator(10, 5, subtract);
// console.log(answer);

// let answer = calculator(5, 2, multiply);
// console.log(answer)

// directly passing function definition as an argument
let answer = calculator(30, 5, (a, b) =>{
    return a /b
})

console.log(answer);