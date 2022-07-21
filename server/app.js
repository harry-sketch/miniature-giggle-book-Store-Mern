const express = require("express");
const cors = require("cors");
const port = 5000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("server");
});

app.listen(port, () => {
  console.log(`server is listening to http://localhost:${port}`);
});
