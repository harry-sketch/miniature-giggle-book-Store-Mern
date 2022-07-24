const express = require("express");
const {
  signUp,
  addBooks,
  getBooks,
  addContact,
} = require("../controllers/bookController");

const router = express.Router();

// Get Routes
router.get("", getBooks);

// Post Routes
router.post("/signUp", signUp);
router.post("/addBooks", addBooks);
router.post("/addContact", addContact);

module.exports = router;
