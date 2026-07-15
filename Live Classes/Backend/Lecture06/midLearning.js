import express from "express";

const app = express();

const isVerified = true;

// use - accepts get, post, patch , put , delete

// app.use("/products", (request, response)=>{
//     response.send("Hello Products")
// })

// app.use((request, response)=>{
//     response.send("Hello there");
// })

// app.use("/practice", (request, response)=>{
//     response.send("Hello User")
// })

app.use("/practice", (request, response, next)=>{
    if(!isVerified){
        response.send("Kindly login");
        return
    }
    next()
})

app.get("/", (request, response) =>{
    response.send("Welcome to Home Page");
})

app.get("/article", (request, response) =>{
    response.send("Welcome to Article");
})

app.get("/practice", (request, response) => {
    response.send("This is practice page");
});

app.get("/practice/:id", (request, response) => {
    response.send(`This is problem number ${request.params.id}`);
});

app.post("/practice/:id", (request, response) => {
    response.send("Your post is created");
});



//  admin 

app.get("/admin", (request, response)=>{
    response.send("I am admin");
})

app.get("/admin/createProblem", (request, response)=>{
    response.send("I am admin and created the problem");
})

app.get("/admin/quizes", (request, response) =>{
    response.send("I am admin and created the quizes");
})

app.listen(3000, () => {
  console.log("I am listening at port 3000");
});

