const mongoose = require("mongoose");
const express = require("express");
const app = express();

const Product = require("./models/products");
// app.use(methodOverride("_method"));
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

mongoose.connect("mongodb://localhost/neutrinos");

app.get("/products", async (req, res) => {
  try {
    let products = await Product.find({});
    res.json(products);
  } catch (err) {
    throw err;
  }
});

app.get("/cart", async (req, res) => {
  try {
    let cartItems = await Product.find({ addedToCart: true });
    res.json(cartItems);
  } catch (err) {
    throw err;
  }
});

app.post("/cart/:id", async (req, res) => {
  try {
    let cartStatus = await Product.findById(req.params.id, "addedToCart");
    await Product.findOneAndUpdate(
      { _id: req.params.id },
      { addedToCart: !cartStatus.addedToCart }
    );
    if (cartStatus.addedToCart) {
      res.json({ message: "Item removed from cart!" });
    } else {
      res.json({ message: "Item added to cart!" });
    }
  } catch (err) {
    throw err;
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
