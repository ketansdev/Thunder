import express from "express";
import mongoose from "mongoose";
import product from "./products.js";
import Product from "./productSchema.js";
import dns from "node:dns";
import products from "./products.js";

import dotenv from "dotenv";

dotenv.config();

dns.setServers(["8.8.8.8"]);

const app = express();

await mongoose.connect(process.env.MONGO_URI);

app.use(express.json());

// 1. create product

app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product created successfully",
      product: product,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to create product",
      err: err.message,
    });
  }
});

//  Create multiple products

app.post("/products/bulk", async (req, res) => {
  try {
    const createdProducts = await Product.insertMany(products);

    res.status(201).json({
      message: "Products created successfully",
      totalProducts: createdProducts.length,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to create Products",
      err: err.message,
    });
  }
});

// 3. Get all products

app.get("/products", async (req, res) => {
  try {
    const productList = await Product.find();

    res.status(200).json({
      message: "Products fetched successfully",
      products: productList,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch products",
      err: err.message,
    });
  }
});

// 4. Get product by MongoDB id

app.get("/products/id/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }

    res.status(200).json({
      message: "Product found successfully",
      product: product,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      err: err.message,
    });
  }
});

//  5. Get product by slug

app.get("/products/slug/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const product = await Product.findOne({ slug: slug });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product found successfully",
      product: product,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      err: err.message,
    });
  }
});

// 6. Update product by slug

app.patch("/products/slug/:slug", async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { slug: req.params.slug },
      {
        $set: req.body,
      },
      {
        new: true,
      },
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: product,
    });
  } catch (err) {
    res.status(500).json({
        message : "Internal Server Error",
        err : err.message
    })
  }
});


// 7. Delete product by slug 

app.delete("/products/slug/:slug", async(req, res) =>{
    try{
        const product = await Product.findOneAndDelete({slug : req.params.slug})

        if(!product){
            return res.status(404).json({
                message : "Product not found"
            })
        }

        res.status(200).json({
            message : "Product deleted successfully",
            product : product
        })
    }catch(err){
        res.status(500).json({
            message : "Internal server error",
            err : err.message
        })
    }
})

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
