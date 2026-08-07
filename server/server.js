require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
let app = express();
const categoryRoute = require("./routes/categoryPage");
const signupRoute = require("./routes/Signup");
const loginRouter = require("./routes/Login");
const ProductDetails = require("./routes/ProductDetails");
const AddressRoute = require("./routes/Address");
const CartRoute = require("./routes/Cartroute");
const PaymentRoute = require("./routes/PaymentRoute");
const ReviewRoute = require("./routes/reviewRoute");
const port = 3000;

// DATABASE
main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connected ✅"))
    .catch((err) => console.error(err));
}

// middleware
app.use(
  cors({
    credentials: true,
    origin: ["https://quickcartservices.vercel.app", "http://localhost:5173"],
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("images"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("server QUICKCART working");
});

app.use("/category", categoryRoute);

app.use("/signup", signupRoute);

app.use("/login", loginRouter);

app.use("/product", ProductDetails);

app.use("/address", AddressRoute);

app.use("/cart", CartRoute);

app.use("/payment", PaymentRoute);

app.use("/review", ReviewRoute);
// PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
