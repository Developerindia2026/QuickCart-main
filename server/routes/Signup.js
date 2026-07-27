const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const { fullname, mail, password } = req.body;

    // VALIDATIONS
    if (!fullname || !mail || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const hashPassword = await bcrypt.hashSync(password, 10);

    const matchingUser = await User.findOne({ email: mail });

    if (!matchingUser) {
      const response = await User.create({
        username: fullname,
        email: mail,
        password: hashPassword,
      });

      const token = jwt.sign(
        {
          email: response.email,
          id: response._id,
          name: response.username,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "7d",
        },
      );

      res.status(200).json({
        success: true,
        message: "Account creation successfully accepted",
        token,
        user: {
          email: response.email,
          id: response._id,
          name: response.username,
        },
      });
    } else {
      res.status(409).json({
        success: false,
        message: "An account with this email already exists. ",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
