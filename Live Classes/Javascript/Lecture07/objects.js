// const user = {
//     name : "Ketan",
//     age: 25,
//     city: "Mumbai"
// }


// console.log(user)

// // accessing properties (Dot Notation)

// console.log(user.name);
// console.log(user.age);

// // accessing properties (Bracket Notation)

// console.log(user["city"])



// // updating and adding (creating) properties

// user.country = "India";
// user.city = "Panvel";

// console.log(user)

// //  deleting properties

// delete user.country;
// console.log(user);






/*********************************************************************************** */
// Objects with methods 

// const user = {
//     name : "Ketan",
//     age: 25,
//     greet: function(){
//         console.log( `Hello ${this.name}`)
//     }
// }

// Objects with methods 
// user.greet();

/*********************************************************************************** */

// Looping over object (For in loops) -- Not recommended

// for(let key in user){
//     console.log(user[key])
// }


/*********************************************************************************** */


//  The modern object methods (The better way)

// const user = {
//     name : "Ketan",
//     age: 25,
//     greet: function(){
//         console.log( `Hello ${this.name}`)
//     }
// }

// console.log(Object.keys(user))

// console.log(Object.values(user));

// console.log(Object.entries(user));


// Lopping over object using object methods

// for(let [key,value] of Object.entries(user)){
//     console.log(key, value)
// }

/*********************************************************************************** */


// Objects are reference type

// let obj1 = {
//     name: "Ketan",
//     age : 25
// }

// let obj2 = obj1;

// obj2.name = "Swapnil";

// console.log(obj2)



// Copy and Object (Shallow Copy);
// Option 1 using Object.assign()


// const original = {
//     name: "Ketan",
//     age: 25
// }

// const copy = Object.assign(original);

// console.log(copy)


// option 2 using spread operator

// const original = {
//     name: "Ketan",
//     age : 30
// }


// const copy = {...original};

// copy.age = 25;

// console.log(original);
// console.log(copy);

/*********************************************************************************** */

// shallow copy
// const user = {
//     name : "Ketan",
//     age: 25,
//     address : {
//         city: "Mumbai",
//         state : "Maharashtra"
//     }
// }


// const copy = {...user};

// copy.name = "Swapnil";
// copy.address.city = "Panvel"
// console.log(user)



// deep copy 


// const user = {
//     name : "Ketan",
//     age: 25,
//     address : {
//         city: "Mumbai",
//         state : "Maharashtra"
//     }
// }

// const deepCopy = structuredClone(user);

// deepCopy.address.city = "Panvel";

// console.log(user);
// console.log(deepCopy);




//  object destructuring 


const user = {
    name : "Ketan",
    age: 25,
    address : {
        city: "Mumbai",
        state : "Maharashtra"
    }
}


// const {name, age} = user;

// console.log(name, age)

// const {address:{city,state}} = user;
// console.log(city, state)



// const{name: personName, email = "Ketan@gmail.com"} = user;

// console.log(personName, email);



// Array destructuring 

let scores = [120, 89, 57, 95, 45]

let [firstScore, secondScore,...remaining] = scores;

console.log(firstScore, secondScore, remaining);