import express from "express";
import products from "./data.js";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello Express");
});

// app.get("/products", (request, response) => {
//   response.json(products);
// });

// route parameter
app.get("/products/:id", (request, response) => {
  const id = Number(request.params.id);

  const product = products.find((p) => p.id === id);

  if (product) {
    response.json(product);
  } else {
    response.send("Product not found");
  }
});

// query parameter : filter

//  one filter data
// app.get("/products", (request, response) => {
//   const price = request.query.price;
//   const filtered = products.filter((item) => item.price >= price);

//   response.json(filtered);
// });

//  multiple filter data
app.get("/products", (request, response) => {
  const { price, rating, category, brand, inStock } = request.query;

  let filteredData = products;
  if (price) {
    filteredData = filteredData.filter((item) => item.price >= price);
  }
  if (rating) {
    filteredData = filteredData.filter((item) => item.rating >= rating);
  }
  if (category) {
    filteredData = filteredData.filter((item) => item.category == category);
  }
  if (brand) {
    filteredData = filteredData.filter((item) => item.brand == brand);
  }
  if (inStock) {
    filteredData = filteredData.filter((item) => item.inStock == inStock);
  }

  response.json(filteredData);
});

// post

app.post("/products", (request, response) => {
  const p = request.body;
  products.push(p);
  response.json(p);
});

app.delete("/products/:id", (request, response) => {
  const id = Number(request.params.id);

  const product = products.findIndex((p) => p.id === id);

  if (product >= 0) {
    response.json(products.splice(product, 1));
  } else {
    response.send("Product not found");
  }
});


app.patch("/products", (request, response)=>{
    const data = request.body;

    const product = products.find((p)=> p.id == data.id)
    console.log(product);

    if(product){
        Object.assign(product, data);
        response.send("Product is updated successfully");
    }else{
        response.send("Product not found");
    }
})

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
