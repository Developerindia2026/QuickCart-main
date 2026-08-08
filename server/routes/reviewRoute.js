const express = require("express");
const router = express.Router();
const review = require("../models/Review");
const verifyToken = require("../Middlewares/authetication");

router.get("/:productid", async (req, res) => {
  const ProductID = req.params.productid;

  try {
    const findReview = await review
      .findOne({
        product: ProductID,
      })
      .populate("user");

    res.status(200).json({
      success: true,
      message: `done`,
      reviewData: findReview,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `unabale to process the backend code`,
    });
  }
});

router.post("/:productid", verifyToken, async (req, res) => {
  const { rating, comment } = req.body;
  const UserId = req.user.id;
  const ProductID = req.params.productid;

  try {
    const reviewCreate = await review.create({
      user: UserId,
      product: ProductID,
      rating: rating,
      comment: comment,
    });

    res.status(200).json({
      success: true,
      message: `done`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `unabale to process the backend code`,
    });
  }
});

module.exports = router;
