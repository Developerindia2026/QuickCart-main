const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const verify = req.headers.authorization;

    if (!verify) {
      return res.status(401).json({
        success: false,
        message: "invalid or none TOKEN",
      });
    }

    const token = verify.split(" ")[1];

    const tokencheck = jwt.verify(token, process.env.JWT_KEY);

    req.user = tokencheck;

    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "invalid request",
    });
  }
};

module.exports = verifyToken;
