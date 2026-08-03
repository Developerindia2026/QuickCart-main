const express = require("express");
const router = express.Router();
const Address = require("../models/Address");
const verifyToken = require("../Middlewares/authetication.js");

router.get("/:addressID", verifyToken, async (req, res) => {
  const { addressID } = req.params;
  const userID = req.user.id;

  try {
    const getAddress = await Address.findOne({
      user: userID,
      _id: addressID,
    });

    if (!getAddress) {
      return res.status(409).json({
        success: false,
        message: "not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "valid",
      currentAddress: getAddress,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "invalid",
    });
  }
});

router.delete("/delete/:itemID", verifyToken, async (req, res) => {
  const userID = req.user.id;
  const { itemID } = req.params;

  try {
    const deleteAddress = await Address.findOneAndDelete({
      user: userID,
      _id: itemID,
    });

    res.status(200).json({
      success: true,
      message: "valid command",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "invalid command",
    });
  }
});

router.post("/new-Address", verifyToken, async (req, res) => {
  const {
    user,
    fullName,
    phoneNumber,
    houseNumber,
    streetAddress,
    landmark,
    city,
    pincode,
    addressType,
  } = req.body;

  try {
    const addressdetails = await Address.create({
      user: req.user.id,
      fullName: fullName,
      phoneNumber: phoneNumber,
      houseNumber: houseNumber,
      streetAddress: streetAddress,
      landmark: landmark,
      city: city,
      pincode: pincode,
      addressType: addressType,
    });

    res.status(200).json({
      success: true,
      message: "added to the database successfully",
      adddressInfo: addressdetails,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "something went wrong at backend",
    });
  }
});

router.get("/", verifyToken, async (req, res) => {
  try {
    const data = await Address.find({ user: req.user.id });

    res.status(200).json({
      success: true,
      address: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed",
    });
  }
});

module.exports = router;
