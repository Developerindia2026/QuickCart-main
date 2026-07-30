const express = require("express");
const router = express.Router();
const Product = require("../models/Products");

router.get("/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;

    const fetchProduct = await Product.findById(product_id);

    res.status(200).json({
      success: true,
      message: "got the product details",
      details: fetchProduct
    });
  } catch (error) {
    console.log(error);
    res.status(409).json({
      success: false,
      message: "soemthing went wrong at the backend",
    });
  }
});

module.exports = router;
