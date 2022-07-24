const express = require("express");
const {
  signUp,
  addBooks,
  getBooks,
  addContact,
  login,
  getOneBook,
  updateBook,
} = require("../controllers/bookController");

const router = express.Router();

// Get Routes
router.get("", getBooks);
router.get("/update/:id", getOneBook);

// Post Routes
router.post("/signUp", signUp);
router.post("/addBooks", addBooks);
router.post("/addContact", addContact);
router.post("/login", login);

// Put Routes
router.put("/update/:id", updateBook);

module.exports = router;
