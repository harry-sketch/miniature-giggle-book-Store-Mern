const userModel = require("../db/user/user");

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

module.exports = {
  signUp,
};
