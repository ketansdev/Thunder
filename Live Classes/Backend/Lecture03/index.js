// const http = require("http");

// const server = http.createServer((request, response)=>{
//     response.end("I am learning backend");
// });


// server.listen(3000, ()=>{
//     console.log("I am listening to port 3000");
// })

// console.log("Hello Node JS");

const validator = require('validator');


const email = "ketan@gmail.com";
const password = "Yashwant@21046";

const comment = "efgfgf euifiueff fyewyfoewf";


console.log(validator.isEmail(email))
console.log(validator.isStrongPassword(password))

