const express = require("express");
const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  rating: {
    type: Number,
    default: 1,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const review = mongoose.model("review", ReviewSchema);

module.exports = review;
