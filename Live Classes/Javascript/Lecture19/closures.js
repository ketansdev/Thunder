// let a = 10; 
// const b = 20;

// var c = 30;

// if(true){
//     var d = 25;
// }

// console.log(d)

// function greet(){
//     var d = "Hii";
// }

// console.log(d)





// scope 

// let a = 50;
// function greet(){
//     let a = 10;

//     function meet(){
//         console.log(a);
//     }

//     meet();
// }

// greet()




//  closure 


function counter(){
    let count = 0;

    function increment(){
        count++;
        console.log(count);
        }
    return increment;
}

let c = counter();
c();
c();
c();
c();

