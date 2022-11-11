const User = require("../model/user.model");

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json({ message: "All users", data: users });
};

const addNewUsers = async (req, res) => {
  let { name, email, age, password } = req.body;
  try {
    await User.insertMany({ name, email, age, password });
    res.json({ message: "register success" });
  } catch (error) {
    res.json({ message: "error", error });
  }
};

module.exports = {
  getAllUsers,
  addNewUsers,
};
