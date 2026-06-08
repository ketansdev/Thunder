// *
// **
// ***
// ****
// *****

// for(let j = 1; j <= 5 ; j++){
//     let str = "";
//     for(let i = 1; i <= j; i++){
//         str = str + "*";
//     }

//     console.log(str);
// }

// print following pattern

// *****
// ****
// ***
// **
// *

// for (let row = 1; row <= 5; row++) {
//   let str = "";
//   for (let col = 5; col >= row; col--) {
//     str = str + "*";
//   }
//   console.log(str);
// }



// 1
// 22
// 333
// 4444
// 55555

for(let j = 1; j <= 5; j++){
    let str = "";
    for(let i = 1; i <= j; i++){
        str = str + j +" ";
    }

    console.log(str);
}