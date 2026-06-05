// Write a function that returns "Even" if the number is even and "Odd" if the number is odd.

function checkEvenOdd(num){
    if(num % 2 == 0){
        return "Even";
    }else return "ODD";
}

let result = checkEvenOdd(7);
console.log(result)