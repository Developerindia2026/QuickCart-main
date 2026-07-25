require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
let app = express();
const categoryRoute = require("./routes/categoryPage");
const port = process.env.PORT || 3000;

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
app.get("/server", (req, res) => {
  res.send("server QUICKCART working");
});

app.use("/category", categoryRoute);

// PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
