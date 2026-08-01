const express = require("express");
const mongoose = require("mongoose");
const User = require("./User");

const AddressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  houseNumber: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  addressType: {
    type: String,
    enum: ["Home", "Work", "Other"],
    default: "Home",
  },
});

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
