// add 

// function add(a,b){
//     console.log( a + b)
// }

// function calculate(a, b, operation){
//     operation(a,b)
// }


// calculate(5,10, add)


// Mutiple callbacks

function calculate(a, b, operation){
    operation(a,b)
}

function add(x, y){
    console.log(x + y);
}

function multiply(x, y){
    console.log(x * y);
}

calculate(10,2,add)
calculate(10,2,multiply)

