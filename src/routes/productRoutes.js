const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.listProduct);
router.post("/", productController.addProduct);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;