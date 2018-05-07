const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  addedToCart: Boolean
});
productSchema.index({ addedToCart: 1 });
module.exports = mongoose.model("Product", productSchema);
