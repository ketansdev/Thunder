// // primitive data types - copy by value 

// let firstNumber = 10;
// let secondNumber = firstNumber;
// let thirdNumber = secondNumber;

// thirdNumber = 20;

// console.log(firstNumber, secondNumber, thirdNumber);


// //  Non primitive data types - copy by reference 

// let obj1 = {
//     name : "ketan",
//     age : 25,
//     city : "Mumbai"
// }

// let obj2 = obj1;

// obj2.city = "Panvel";

// console.log("obj1", obj1);
// console.log("obj2", obj2);


//  comparison (Primitive)

// let name = "Ketan";
// let name2 = "Ketan";

// console.log(name == name2);

// comparison (Non Primitive)

// let obj1 = {
//     name : "Ketan",
//     age : 25
// }

// let obj2 = obj1;

// console.log(obj1 == obj2)

// let obj1 = {
//     name : "Ketan",
//     age : 25
// }

// let obj2= {
//     name : "Ketan",
//     age : 25
// }

// console.log(obj1 == obj2)




// const a = 10;
// const b = a;
// b = 20;
// console.log(a == b);



const a = {
    name : "Ketan",
    age : 25,
}


a.age = 30;

console.log(a)