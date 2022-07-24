const userModel = require("../db/user/user");
const bookModel = require("../db/book/book");

const signUp = async (req, res, next) => {
  const data = new userModel(req.body);
  const user = await data.save();
  const result = user.toObject();
  delete result.password;
  res.send({ result });
  console.log({ result });
};

const addBooks = async (req, res, next) => {
  const data = new bookModel(req.body);
  const book = await data.save();
  console.log({ book });
  res.send({ book });
};

const getBooks = async (req, res, next) => {
  const data = await bookModel.find();
  console.log(data);
  res.send(data);
};

module.exports = {
  signUp,
  addBooks,
  getBooks,
};
