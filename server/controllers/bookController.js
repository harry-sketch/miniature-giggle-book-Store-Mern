const userModel = require("../db/user/user");
const bookModel = require("../db/book/book");
const contactModel = require("../db/contact/contact");

const signUp = async (req, res, next) => {
  try {
    const data = new userModel(req.body);
    const user = await data.save();
    const result = user.toObject();
    delete result.password;
    res.send({ result });
    console.log({ result });
  } catch (error) {
    console.log(error);
  }
};

const addBooks = async (req, res, next) => {
  try {
    const data = new bookModel(req.body);
    const book = await data.save();
    console.log({ book });
    res.send({ book });
  } catch (error) {
    console.log(error);
  }
};

const getBooks = async (req, res, next) => {
  try {
    const data = await bookModel.find();
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

const addContact = async (req, res, next) => {
  try {
    const data = new contactModel(req.body);
    const result = data.save();
    const contact = (await result).toObject();
    delete contact.phone;
    res.send({ contact });
    console.log({ contact });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res, next) => {
  const data = await userModel.findOne(req.body).select("-password");
  res.send(data);
  console.log(data);
};

const getOneBook = async (req, res, next) => {
  const data = await bookModel.findOne({ _id: req.params.id });
  res.send(data);
  console.log(data);
};

const updateBook = async (req, res, next) => {
  const data = await bookModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(data);
  console.log(data);
};

module.exports = {
  signUp,
  addBooks,
  getBooks,
  addContact,
  login,
  getOneBook,
  updateBook,
};
