const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  price: String,
  desc: String,
  imgUrl: String,
});

const bookModel = mongoose.model("lists", BookSchema);
module.exports = bookModel;
