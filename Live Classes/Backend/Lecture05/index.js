import express from "express";

const app = express();

const Database = [];


// saare path ko accept karta hain - parse body to json 
app.use(express.json());

app.get("/user", (request, response)=>{
    response.send("Data received");
})


app.post("/user", (request, response) =>{
    console.log(request.body);
    response.send("User created Successfully");
})

app.patch("/user", (request, response) =>{
    response.send("User updated successfully");
})

app.delete("/user", (request, response)=>{
    response.send("User deleted successfully");
})

app.listen("3000", () => {
  console.log("I am listening at port 3000");
});
