//  pattern

// for(let i = 1 ; i <= 5; i++){
//     console.log("*")
// }

// let str = "";

// for (let i = 1; i <= 5; i++) {
//   str = str + "*";
// }
// console.log(str);

// print following

// *****
// *****
// *****
// *****
// *****
// *****

//  Nested for loop
// for (let j = 0; j < 6; j++) {
//   let str = "";
//   for (let i = 1; i <= 5; i++) {
//     str = str + "*";
//   }

//   console.log(str);
// }

// print following

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

for (let j = 1; j <= 4; j++) {
  let str = "";
  for (let i = 1; i <= 4; i++) {
    str = str + i + " ";
  }

  console.log(str);
}
