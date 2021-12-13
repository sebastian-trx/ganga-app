const { Router } = require("express");
const router = Router();
const {
    postProduct,
    putProduct,
    deleteProduct,
    allProducts,
    productInfo,
    updateProduct,
    updateProduct2,
    approveProduct
 } = require("../controllers/productController.js");

router.post("/", postProduct);
router.put("/", putProduct);
router.delete("/", deleteProduct);
router.get("/", allProducts);
router.get("/info", productInfo);
router.post("/update", updateProduct);
router.post("/update2", updateProduct2);
router.put('/aprobar', approveProduct)


module.exports = router;