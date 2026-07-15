import express from "express";
import products from "./products.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Product Api is running");
});

// app.get("/products", (req, res)=>{
//     res.json(products);
// })

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);
  if (!product) {
    res.send("Product not found");
    return;
  }
  res.json(product);
});

app.get("/products", (req, res) => {
  const { search, price, rating, category, inStock } = req.query;

  let filteredProducts = products;

  if (search) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  if (price) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price >= price;
    });
  }
  if (rating) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.rating >= rating;
    });
  }
  if (category) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.category === category;
    });
  }
  if (inStock) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.inStock === (inStock === "true");
    });
  }

  res.json(filteredProducts);
});

app.post("/products", (req, res) => {
  console.log(req.body);
  const product = req.body;
  products.push(product);
  res.json(product);
});

app.patch("/products", (req, res) => {
  const data = req.body;
  console.log("data", req.body);
  console.log("products", products);
  const product = products.find((p) => p.id == data.id);
  console.log("product", product);

  if (product) {
    Object.assign(product, data);
    res.send("Product updated sucessfully");
  } else {
    res.send("Product not found");
  }
});

app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex((p) => p.id === id);

  if (index) {
    products[index] = req.body;
    res.send("Product replaced successfully");
  } else {
    res.send("product not found");
  }
});

app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex((p) => p.id === id);

  if (index) {
    products.splice(index, 1);
    res.send("Product deleted successfully");
  } else {
    res.send("Product not found");
  }
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
