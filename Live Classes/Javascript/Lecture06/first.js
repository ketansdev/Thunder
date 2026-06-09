// Arrays

// // Array of numbers
// let marks = [70, 89, 60, 95]
// console.log(marks)

// // Array of strings
// let names = ["Ketan", "Namita", "Vilas", "Vishakha"];
// console.log(names)

// // Array with different data types

// let arr = [25, "Ketan", true, {city: "Mumbai", state: "Maharashtra"}, null, undefined]
// console.log(arr)

/*****************************************************************************/

let fruits = ["Apple", "Mango", "Banana"];

// // length property
// // console.log(fruits.length)



// updating the value of array
// fruits[0] = "Gauava"
// console.log(fruits)


// // accessing elements
// console.log(fruits[0]);
// console.log(fruits[1]);



// // accessing last elemt in array
// console.log(fruits[fruits.length-1])

// // if item deos exist tham we get undefined
// console.log(fruits[5])


/*****************************************************************************/

// Basic Array Modification (Mutating the array)

// These methods changes the original array

// 1. push() - Add elemnt at the end of the array

// let names = ["Ketan", "Swapnil", "Nikhil" , "Yash"];
// names.push("Shubham");
// names.push("Shetge", "Chachad", "Shinde")
// console.log(names);

// 2. pop() - Remove element from the end of an array

// let names = ["Ketan", "Swapnil", "Nikhil" , "Yash"];
// names.pop();
// console.log(names);


/*****************************************************************************/

// dding/Removing from the BEGINNING of the Array

// 1. unshift() - Add one or more items to the begining

// let animals = ["Cat", "Dog", "Buffalo", "Cow"];
// animals.unshift("Elephant", "tiger", "Lion");
// console.log(animals);

// 2. shift() - Removes the first item from a Array

// let animals = ["Cat", "Dog", "Buffalo", "Cow"];
// animals.shift();
// console.log(animals);


/*****************************************************************************/

// Looping Over an Array (Iteration)

// 1 For loop

// let marks = [85, 90, 70, 75];
// let totalMarks = 0;

// for (let i = 0; i < marks.length; i++) {
//   totalMarks += marks[i]
// }

// console.log(totalMarks);


// 2.  The for...of Loop (The Modern, Simpler Way)


// let names = ["Ketan", "Swapnil", "Yash", "Nikhil"];

// for(let name of names){
//     console.log(`Hello ${name}`)
// }



/*****************************************************************************/

//  Advanced Array Manipulation

// 1. splice() - It can add remove or replace elements anywhere in Array

// array.splice(startIndex, deleteCount, item1, item2,...)

// let numbers = [20, 40, 60, 80];
// numbers.splice(1,2, 100, 120)

// console.log(numbers)


// let names = ["Ketan", "Swapnil", "Suraj", "Yash", "Shubham"];

// names.splice(2,1)
// console.log(names)



// 2- slice() - creates new array by copying the portion of an existing array 
// it doesnot change the original array 

// array.slice(startIndex, endIndex) --- endIndex is not included 

// let animals = ["cat", "dog", "sheep", "goat", "cow"];

// console.log(animals.slice(1,4));
// console.log(animals);

// return the last item in an array
// console.log(animals.slice(-1))




// 3. Spread operator (...) The Modern way ti copy/combine

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6];

// const copyArr1 = [...arr1];
// console.log(copyArr1)


// const combinedArray = [...arr1, ...arr2];
// console.log(combinedArray);




//  print all items of the array 

let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}