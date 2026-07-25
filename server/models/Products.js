// getting-started.js
const mongoose = require("mongoose");
const express = require("express");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    isTopPicks: {
      type: Boolean,
    },
    isDeal: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
