import http from "http";

const Database = [
  {
    name: "Ketan",
    age: 25,
    email: "ketanshetgedev@gmail.com",
  },
  {
    name: "Swapnil",
    age: 30,
    email: "swapnil@gmail.com",
  },
  {
    name: "Nikhil",
    age: 32,
    email: "nikhil@gmail.com",
  },
];

const server = http.createServer((request, response) => {
  if (request.method === "POST" && request.url === "/user") {
    let body = "";
    request.on("data", (chunck) => {
      body += chunck;
    });
    request.prependListener("end", () => {
      const user = JSON.parse(body);
      Database.push(user);
      response.end("User created successfully");
    });
  } else if (request.method === "GET" && request.url === "/user") {
    response.end(JSON.stringify(Database, null, 2));
  } else if (request.method === "PATCH" && request.url === "/user") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      const user = JSON.parse(body);

      const findUser = Database.find((item) => item.email === user.email);
      console.log(findUser);

      Object.assign(findUser, user);

      response.end("Information updated succesfully");
    });
  }

  // if(request.method === "GET" && request.url === "/user"){
  //     response.end("User data is received successfully");
  // }else if(request.method === "POST" && request.url === "/user"){
  //     response.end("User data is created successfully");
  // }else if(request.method === "PUT" && request.url === "/user"){
  //     response.end("User data is put successfully");
  // }else if(request.method === "PATCH" && request.url === "/user"){
  //     response.end("User data is Patched successfully");
  // }else if(request.method === "DELETE" && request.url === "/user"){
  //     response.end("User data is deleted succesfully");
  // }else{
  //     response.end("Invlid Path")
  // }
});

server.listen(3000, () => {
  console.log("I am listening at port 3000");
});
