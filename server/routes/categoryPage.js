const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Products");
const router = express.Router();

router.get("/:categoryName", async (req, res) => {
  try {
    const { categoryName } = req.params; 
    const ProductData = await Product.find({category: categoryName});

    res.status(200).json({
      sucess: true,
      message: "database fethced",
      Data: ProductData,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: false,
      message: "something is not okeyyy",
    });
  }
});

module.exports = router;
