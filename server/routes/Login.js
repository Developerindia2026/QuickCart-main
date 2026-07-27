const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailVerify = await User.findOne({ email: email });

    if (!emailVerify) {
      return res.status(409).json({
        success: false,
        message: "email not found",
      });
    }
    {
      const passwordVerify = await bcrypt.compare(
        password,
        emailVerify.password,
      );

      if (!passwordVerify)
        return res.status(409).json({
          success: false,
          message: "invalid password entered",
        });
    }
      const token = jwt.sign(
        {
          email: emailVerify.email,
          id: emailVerify._id,
          name: emailVerify.username,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "7d",
        },
      );

    res.status(200).json({
      success: true,
      message: "login successfully accepted",
      token,
      user: {
        email: emailVerify.email,
        id: emailVerify._id,
        name: emailVerify.username,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
});

module.exports = router;
