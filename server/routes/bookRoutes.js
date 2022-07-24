const express = require("express");
const {
  signUp,
  addBooks,
  getBooks,
  addContact,
  login,
} = require("../controllers/bookController");

const router = express.Router();

// Get Routes
router.get("", getBooks);

// Post Routes
router.post("/signUp", signUp);
router.post("/addBooks", addBooks);
router.post("/addContact", addContact);
router.post("/login", login);

module.exports = router;
