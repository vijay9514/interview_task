const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  active: String,
  expirationDate: Date,
  
});

module.exports = mongoose.model("ProductTable", productSchema);
