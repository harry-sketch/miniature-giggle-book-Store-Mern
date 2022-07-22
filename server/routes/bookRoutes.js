const express = require("express");
const { signUp, addBooks, getBooks } = require("../controllers/bookController");

const router = express.Router();

router.post("/signUp", signUp);
router.post("/addBooks", addBooks);
router.get("", getBooks);

module.exports = router;
