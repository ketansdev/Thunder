// const p1 = fetch(`https://api.github.com/users?per_page=20`);

// const p2 = p1.then((response)=>{
//     return response.json();
// })

// p2.then((data) =>{
//     console.log(data);
// })



// promise chaining 

// fetch(`https://api.github.com/users?per_page=20`)
// .then((response) =>{
//     if(!response.ok){
//         throw new Error("Unable to fetch the data");
//     }
//     return response.json();
// })
// .then((data) =>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err.message)
// })
// .finally(()=>{
//     console.log("fetch process completed")
// })




// How to create a promise

// const p1 = new Promise((resolve, reject)=>{
//     resolve("Hello Ketan");
// });

// p1.then((response)=>{
//     console.log(response);
// })


//  can also return object

// const p2 = new Promise((resolve, reject)=>{
//     resolve(
//         {
//             name: "Ketan",
//             age: 25,
//             city : "Panvel"
//         }
//     )
// })

// p2.then((response)=>{
//     console.log(response);
// })


// error handling

const p3 = new Promise((resolve, reject)=>{
    reject("Error Occured");
})

p3.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})