const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  desc: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
});

const bookModel = mongoose.model("lists", BookSchema);
module.exports = bookModel;
