const { Router } = require("express");
const router = Router();
const {
  postUser,
  putUser,
  deleteUser,
  allUsers
 } = require("../controllers/userController.js");

router.post("/", postUser);
router.put("/", putUser);
router.delete("/", deleteUser);
router.get("/", allUsers);

module.exports = router;
