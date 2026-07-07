const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;
  console.log(url);
  const path = url.split("/");
  console.log(path);
  // [ '', 'add', '5', '10' ]

  const operation = path[1];
  const num1 = Number(path[2]);
  const num2 = Number(path[3]);

  if (operation === "add") {
    response.end(JSON.stringify(num1 + num2));
  } else if (operation === "sub") {
    response.end(JSON.stringify(num1 - num2));
  } else if (operation === "mul") {
    response.end(JSON.stringify(num1 * num2));
  } else if (operation === "div") {
    response.end(JSON.stringify(num1 / num2));
  } else {
    response.end("Invalid Operation");
  }
});

server.listen(5000, () => {
  console.log("I am listening at port 5000");
});
