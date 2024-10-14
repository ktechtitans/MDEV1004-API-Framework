const express = require("express");
const router = express.Router();
const { validateUser } = require("../middleware/middleware");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../Controller/userController");

