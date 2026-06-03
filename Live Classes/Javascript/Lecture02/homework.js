// Primitive Data types

//  number
// let a = 10;
// console.log(typeof a)

// float --> number
// let b = 20.5;
// console.log(typeof b)

// string
// let firstString = "Ketan Shetge"
// console.log(typeof firstString)


// boolean
// let firstBoolean = true;
// console.log(typeof firstBoolean)



// // undefined
// let a;
// console.log(typeof a)


// null
// let b = null;
// console.log(typeof b);



// bigint
// let a = 243263673246983923643267432n;
// console.log(typeof a)


// symbol
// let a = Symbol("Ketan");
// console.log(typeof a);


// Non Primitive Data types

// array
let arr = [10, 20, 30, "Ketan", true, 10.5]

console.log(typeof arr);


// object

let person = {
    name : "Ketan",
    age : 25,
    city: "Mumbai"
}

console.log(typeof person);


// function

function greet(){
    console.log("Hello Ketan");
}

greet();

console.log(typeof greet)


let a = function(){
    console.log("Hello");
}

a();

console.log(typeof a)