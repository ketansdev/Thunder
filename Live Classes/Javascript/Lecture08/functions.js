// function greet(){
//     console.log("Hello Ketan");
// }

// greet();

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// greet("Ketan")

// return

// function add(num1,num2){
//     return num1 + num2;
// }

// const answer = add(5,7);
// console.log(answer);

// function addNumber(num1, num2, num3 = 0, num4 = 0){
//     return num1 + num2 + num3 + num4;
// }

// const result = addNumber(5,5,3);
// console.log(result)

// function addNumber(...arr){
//     let sum = 0;
//     for(let num of arr){
//         sum += num;
//     }
//     return sum;
// }

// const result = addNumber(2, 4, 5, 10, 5);
// console.log(result)


/***************************************************** */

//  function expression

// const greet = function(name){
//     return `Hello ${name}`;
// }

// const result = greet("Ketan");
// console.log(result);

// const addNumber = function(num1, num2){
//     return num1 + num2;
// }

// const answer = addNumber(2,3);
// console.log(answer)

/***************************************************** */

// Arrow functions

// const greet = () =>{
//     console.log("Hello");
// }

// greet();

// const addNumber = (num1, num2) =>{
//     return num1 + num2;
// }

// const answer = addNumber(10,5);
// console.log(answer);

// shortcut

// const addNumber = (num1, num2) => num1 + num2;

// const answer = addNumber(10,5);
// console.log(answer);

// single parameter - no need to use ()

// const square = num => num * num;

// const result = square(5);
// console.log(result)

/***************************************************** */

// const user = () => {
//   return {
//     name: "Ketan",
//     age: 25,
//   };
// };

// const result = user();
// console.log(result);


// shortcut 

// const user = () => ({name:"Ketan", age: 25, city : "Panvel"});

// const result = user();
// console.log(result);


/***************************************************** */


// IIFE 

// (function(){
//     console.log("Hello Ketan");
// })();



/***************************************************** */

// Callback function 
// - passing function as as argument to another function 



// function greet(callback){
//     console.log("Hello");
//     callback();
//     console.log("How are you doing");
// }

// function ketan(){
//     console.log("Good Morning, Ketan");
// }

// greet(ketan);


