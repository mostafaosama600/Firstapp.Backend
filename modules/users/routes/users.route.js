const router = require("express").Router();
const { getAllUsers, addNewUsers } = require("../controller/user.controller");

router.get("/users", getAllUsers);
router.post("/addUser", addNewUsers);

module.exports = router;
