const userModel = require("../db/user/user");
const bookModel = require("../db/book/book");

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  const data = new userModel({
    name,
    email,
    password,
  });
  const user = await data.save();
  const result = user.toObject();
  delete result.password;
  res.send({ result });
  console.log({ result });
};

const addBooks = async (req, res, next) => {
  const { title, price, desc, imgUrl } = req.body;
  const data = new bookModel({ title, price, desc, imgUrl });
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
