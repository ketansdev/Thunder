console.log("I am a function")

function payment(num1){
    console.log(`${num1} is completed`)
}

function greet(){
    console.log("Hello All");
}


function add(){
    console.log("I am adding the function")
}

module.exports = {payment, greet};

// initially module.exports is {}


// module.exports = {greet, add};