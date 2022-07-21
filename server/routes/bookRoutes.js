const express = require("express");
const { signUp } = require("../controllers/bookController");

const router = express.Router();

router.post("/signUp", signUp);

module.exports = router;
