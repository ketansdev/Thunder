// print A to Z

// for(let i = 65; i<=90; i++){
//     console.log(String.fromCharCode(i))
// }

// print a to z

// for(let i = 97; i <= 122 ; i++){
//     console.log(String.fromCharCode(i));
// }

// print following
// ABCDE
// ABCDE
// ABCDE
// ABCDE
// ABCDE

// for(let j = 1; j <= 5; j++){
//     let str = "";
//     for(let i = 65; i <= 69; i++){
//         str = str + String.fromCharCode(i);
//     }

//     console.log(str);
// }

// print following
// A
// AB
// ABC
// ABCD
// ABCDE

// for(let j = 1; j <= 5; j++){
//     let str = "";
//     for(let i = 65; i < 65 +j; i++){
//         str = str + String.fromCharCode(i);
//     }

//     console.log(str);
// }

// Practice questions

// Level 1

// 1. Print numbers 1 to 20.

// for(let i = 1; i<= 20; i++){
//     console.log(i)
// }

// 2 Print numbers 20 to 1.

// for (let i = 20; i >= 1; i--) {
//   console.log(i);
// }

// 3 Print even numbers from 1 to 50.

// for(let i = 2; i <= 50; i= i+2){
//     console.log(i);
// }

// 4 Print odd numbers from 1 to 50.

// for (let i = 1; i <= 50; i = i + 2) {
//   console.log(i);
// }

// 5. Print multiples of 3 up to 30.

// for (let i = 1; i <= 10; i++) {
//   console.log(i * 3);
// }

// 6. Print numbers divisible by 5 up to 100.

// for(let i = 1; i <=100; i++){
//     if(i % 5 === 0){
//         console.log(i)
//     }
// }

// 7. Print "Coder Army" 10 times.

// for(let i = 1 ; i <= 10; i++){
//     console.log("Coder Army");
// }

// 8. Print squares of numbers from 1 to 10

// for(let i = 1; i <= 10; i++){
//     console.log(i**2)
// }

// 9. Print cubes of numbers from 1 to 10.

// for(let i = 1; i<=10; i++){
//     console.log(i**3)
// }



// 10. Print numbers from 100 to 0.

// for(let i = 100; i >=1 ; i--){
//     console.log(i);
// }



// Level 2 (Dry Run and Thinking)

// 1. Find sum from 1 to 10.

// let sum = 0;
// for(let i = 1; i<=10; i++){
//     sum = sum + i;
// }

// console.log(sum);


// 2. Find sum from 1 to 100.

// let sum = 0;

// for(let i = 1; i <=100; i++){
//     sum = sum + i;
// }

// console.log(sum)


// 3. Find factorial of 5.

// let fact = 1

// for(let i=1; i<=5 ; i++){
//     fact = fact * i
// }

// console.log(fact);


// 4. Find factorial of n.

// let fact = 1;
// let n = 20

// for(let i=1; i<=n ; i++){
//     fact = fact * i
// }

// console.log(fact);


// // 5. Count digits in a number.

// let num = 2456;
// let count = 0;



// for(; num > 0; num = Math.floor(num/10)){
//     count++
// }
// console.log(count)


// 6. Reverse a number.

// let num = 2468;
// let reversed = 0;

// while(num > 0){
//     let last = Math.floor(num % 10);
//     reversed = reversed * 10 + last;
//     num = Math.floor(num/10);
// }

// console.log(reversed)


//  7. Check if a number is palindrome.

// let num = 155;

// let original = num;
// let reversed = 0;

// while(num > 0){
//     let last = num%10;
//     reversed = reversed * 10 + last;
//     num = Math.floor(num/10);

// }

// if(reversed === original){
//     console.log("pallindrom");
// }else{
//     console.log("Not pallindrome");
// }



// 8. Find product of digits.

// let num = 2468;

// let product = 1;

// while(num > 0){
//     let last = Math.floor(num%10);
//     product = product * last;
//     num = Math.floor(num/10);
// }

// console.log(product);


// 9. Find sum of digits. 

// let num = 2468;
// let sum = 0;

// while(num > 0){
//     let last = Math.floor(num%10);
//     sum = sum + last;
//     num = Math.floor(num/10);
// }

// console.log(sum)



// 10. Count how many even digits exist.


// let num = 1245689;
// let count = 0;

// while(num > 0){
//     let last = Math.floor(num%10);
//     if(last % 2 ===0){
//         count ++
//     }
//     num = Math.floor(num/10);
// }

// console.log(count);