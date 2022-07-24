const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const contactModel = mongoose.model("contacts", contactSchema);

module.exports = contactModel;
