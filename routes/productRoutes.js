const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// create a new product
router.post("/", productController.createProduct);

// get all products
router.get("/", productController.getAllProducts);

//get a specific product by id
router.get("/:id", productController.getProductById);

//update Product By Id
router.put("/:id", productController.updateProduct);

// delete product by id
router.delete("/:id", productController.deleteProduct);

module.exports = router;
