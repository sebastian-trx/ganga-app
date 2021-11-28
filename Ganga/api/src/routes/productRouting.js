const { Router } = require("express");
const router = Router();
const {
    postProduct,
    putProduct,
    deleteProduct,
    allProducts,
    productInfo
 } = require("../controllers/productController.js");

router.post("/", postProduct);
router.put("/", putProduct);
router.delete("/", deleteProduct);
router.get("/", allProducts);
router.get("/info", productInfo);


module.exports = router;
