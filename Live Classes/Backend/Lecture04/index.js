const http = require("http");
const { parse } = require("path");
const url = require("url");

const Database = [
  {
    name: "Ketan",
    age: 25,
    email: "ketanshetgedev@gmail.com",
  },
  {
    name: "Swapnil",
    age: 30,
    email: "swapnilchachad@gmail.com",
  },
];


function createUser(user){
    Database.push(user)
}

function DeleteUser(user){
    for(let i = 0; i < Database.length; i++){
        if(Database[i].email === user.email){
            Database.splice(i, 1);
        }
    }
}

function PatchUser(user){
    for(let i = 0; i < Database.length; i++){
        if(Database[i].email === user.email){
            Database[i].age = 20;
        }
    }
}

const server = http.createServer((request, response) => {
  const parsed = url.parse(request.url, true);
  const operation = parsed.pathname.slice(1);

  if(operation === "deleteUser"){
    DeleteUser(parsed.query);
    response.end("User is deleted")
    return;
  }

  else if(operation === "createUser"){
    createUser(parsed.query);
    response.end("User is created");
    return;
  }

  else if(operation === "patchUser"){
    PatchUser(parsed.query);
    response.end("User property is updated");
  }

  else if(operation === "getUser"){
    response.end(JSON.stringify(Database))
    return;
  }
});

server.listen(3000, () => {
  console.log("I am listening at port 3000");
});
