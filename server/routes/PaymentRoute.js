const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/authetication");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const instance = new Razorpay({
  key_id: process.env.Test_API_Key,
  key_secret: process.env.Test_Key_Secret,
});

router.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: 50000,
      currency: "INR",
      receipt: "receipt_order_id",
    };

    const order = await instance.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "invalid payment",
    });
  }
});

// VERIFY PAYMENT
router.post("/verify-payment", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const generateSignature = crypto
      .createHmac("sha256", process.env.Test_Key_Secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generateSignature === razorpay_signature) {
      return res.status(200).json({
        success: true,
        message: "payment valid",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid Payment Signature",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "invalid payment",
    });
  }
});

module.exports = router;
