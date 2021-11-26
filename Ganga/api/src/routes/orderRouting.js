const { Router } = require("express");
const router = Router();
const {
    postOrder,
    allOrders,
    putOrder,
    deleteOrder
 } = require("../controllers/orderController.js");

router.post("/", postOrder);
router.put("/", putOrder);
router.delete("/", deleteOrder);
router.get("/", allOrders);

module.exports = router;
