const express = require("express");
const router = express.Router();
const cart = require("../models/Cart");
const verifyToken = require("../Middlewares/authetication");

router.delete("/delete/:itemid", verifyToken, async (req, res) => {
  try {
    const { itemid } = req.params;
    const UserId = req.user.id;

    const deleteitem = await cart.findOneAndDelete({
      user: UserId,
      _id: itemid,
    });

    if (!deleteitem) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "valid delte request",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "invalid delte request",
    });
  }
});

// SHOW CART ITEMS
router.get("/", verifyToken, async (req, res) => {
  try {
    const UserId = req.user.id;

    const fetchCart = await cart.find({ user: UserId }).populate("product");

    res.status(200).json({
      success: true,
      message: "Valid command",
      products: fetchCart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "invalid command",
    });
  }
});

// SAVED TO CART
router.post("/", verifyToken, async (req, res) => {
  const { productID, quantityNO } = req.body;
  const UserId = req.user.id;

  try {
    const existingProduct = await cart.findOne({
      user: UserId,
      product: productID,
    });

    if (existingProduct) {
      existingProduct.quantityNO = existingProduct.quantityNO + quantityNO;

      await existingProduct.save();
      return res.status(200).json({
        success: true,
        message: "added to the cart",
      });
    }

    const addtocart = await cart.create({
      user: UserId,
      product: productID,
      quantity: quantityNO,
    });

    res.status(201).json({
      success: true,
      message: "saved in cart",
      items: addtocart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "invalid backend",
    });
  }
});

module.exports = router;
