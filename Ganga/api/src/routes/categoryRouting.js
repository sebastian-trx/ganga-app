const { Router } = require("express");
const router = Router();

const { getAllCategories } = require("../controllers/categoryController.js");

router.get("/", getAllCategories);

module.exports = router;
