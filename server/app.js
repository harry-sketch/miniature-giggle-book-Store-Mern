const express = require("express");
const cors = require("cors");
require("./db/config/config");

require("dotenv").config();
const router = require("./routes/bookRoutes");
const port = 5000;
const PORT = process.env.PORT;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/books", router); //http://localhost:5000/books

app.listen(port, () => {
  console.log(`server is listening to http://localhost:${port}`);
});
